// コミット前コンテンツQA（決定論的・ネットワーク不要）。
// 使い方: npm run verify   （エラーがあれば exit 1）
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ISSUE_DIR = 'src/content/issues';
const today = new Date().toISOString().slice(0, 10);

// categories.ts の日本語タイトル一覧／id 一覧を読む
const catSrc = fs.readFileSync('src/data/categories.ts', 'utf8');
const catTitles = [...catSrc.matchAll(/title:\s*'([^']+)'/g)].map((m) => m[1]);
const catIds = new Set([...catSrc.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((m) => m[1]));

const files = execSync(`find ${ISSUE_DIR} -name '*.mdx'`, { encoding: 'utf8' }).trim().split('\n');
const slugs = new Set(files.map((f) => f.replace(`${ISSUE_DIR}/`, '').replace('.mdx', '')));

const errors = [];
const warnings = [];
const digest = [];

const CHART_TAGS = ['LineChart', 'BarChart', 'StackedBarChart', 'OptionsTable', 'ActionPlan', 'Mermaid'];

for (const file of files) {
  const slug = file.replace(`${ISSUE_DIR}/`, '').replace('.mdx', '');
  const raw = fs.readFileSync(file, 'utf8');
  const fmEnd = raw.indexOf('\n---', 3);
  const fm = raw.slice(0, fmEnd);
  const body = raw.slice(fmEnd);
  const E = (m) => errors.push(`${slug}: ${m}`);
  const W = (m) => warnings.push(`${slug}: ${m}`);

  // --- category 突合 ---
  const catM = fm.match(/^category:\s*"([^"]+)"/m);
  if (catM && !catTitles.includes(catM[1])) E(`category "${catM[1]}" が categories.ts のタイトルと不一致`);

  // --- related の id 実在 ---
  const relM = fm.match(/^related:\s*\[([^\]]*)\]/m);
  if (relM) {
    for (const id of [...relM[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])) {
      if (!slugs.has(id)) E(`related に存在しない id: ${id}`);
    }
  }

  // --- sources URL 形式 / volatile-accessed 対 ---
  const urls = [...fm.matchAll(/^\s*url:\s*"([^"]+)"/gm)].map((m) => m[1]);
  for (const u of urls) if (!/^https?:\/\/.+/.test(u)) E(`不正なURL形式: ${u}`);
  const srcCount = urls.length;
  const volatileBlocks = (fm.match(/volatile:\s*true/g) || []).length;
  const accessedCount = (fm.match(/accessed:\s*"/g) || []).length;
  if (volatileBlocks > accessedCount) W(`volatile:true (${volatileBlocks}) に対し accessed (${accessedCount}) が不足`);

  // --- コンポーネント使用時の import 欠落 ---
  for (const tag of CHART_TAGS) {
    const used = new RegExp(`<${tag}[\\s/>]`).test(body);
    const imported = new RegExp(`import\\s+${tag}\\b`).test(raw);
    if (used && !imported) E(`<${tag}> を使用しているが import 欠落`);
  }

  // --- 鮮度・整合（警告） ---
  const status = (fm.match(/^status:\s*"([^"]+)"/m) || [])[1];
  const maturity = (fm.match(/^maturity:\s*"([^"]+)"/m) || [])[1] || 'stub';
  const urgency = parseInt((fm.match(/^urgency:\s*(\d)/m) || [])[1] || '3', 10);
  const nextReview = (fm.match(/^next_review:\s*"([^"]*)"/m) || [])[1] || '';
  if ((status === 'review' || status === 'published') && maturity === 'stub')
    W(`status=${status} だが maturity=stub（不整合）`);
  if (nextReview && nextReview < today.slice(0, nextReview.length)) W(`next_review=${nextReview} が過去（要再確認）`);
  if (urgency >= 4 && !nextReview) W(`緊急度${urgency} だが next_review 未設定`);

  // --- 数値ダイジェスト ---
  const nums = (body.match(/\d[\d,.]*\s*(?:%|％|兆円|億円|万人|万件|万世帯|人|件|年|割|ポイント)/g) || []).length;
  digest.push({ slug, nums, srcCount, status, maturity });
  if (nums >= 5 && srcCount === 0) W(`本文に数値${nums}件あるが sources が0件`);
}

// --- 規制・法律リスト（src/data/regulations.ts）の検証 ---
const REG_FILE = 'src/data/regulations.ts';
if (fs.existsSync(REG_FILE)) {
  const regSrc = fs.readFileSync(REG_FILE, 'utf8');
  const RE = (m) => errors.push(`regulations.ts: ${m}`);

  // id 一意性（行頭 id: のみ。categoryId は別キーなので拾わない）
  const ids = [...regSrc.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((m) => m[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) RE(`重複した id: ${id}`);
    seen.add(id);
  }

  // categoryId が categories.ts の id に存在
  for (const m of regSrc.matchAll(/categoryId:\s*'([^']+)'/g)) {
    if (!catIds.has(m[1])) RE(`categoryId "${m[1]}" が categories.ts の id に不一致`);
  }

  // related の id が実在 issue に存在
  for (const block of regSrc.matchAll(/related:\s*\[([\s\S]*?)\]/g)) {
    for (const idm of block[1].matchAll(/'([^']+)'/g)) {
      if (!slugs.has(idm[1])) RE(`related に存在しない issue id: ${idm[1]}`);
    }
  }

  // 出典 URL 形式
  const regUrls = [...regSrc.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]);
  for (const u of regUrls) if (!/^https?:\/\/.+/.test(u)) RE(`不正なURL形式: ${u}`);

  console.log(`\n規制・法律リスト: ${ids.length}件 / 出典 ${regUrls.length}件`);
}

// --- 出力 ---
console.log('=== 数値ダイジェスト（数値件数 / 出典件数 / status / maturity）===');
for (const d of digest.sort((a, b) => b.nums - a.nums)) {
  const flag = d.nums >= 5 && d.srcCount < 2 ? ' ⚠出典薄' : '';
  console.log(`  ${String(d.nums).padStart(3)}数値 / ${String(d.srcCount).padStart(2)}出典  ${d.status || '-'}/${d.maturity}  ${d.slug}${flag}`);
}
console.log(`\n対象: ${files.length}カード`);
if (warnings.length) {
  console.log(`\n⚠ 警告 ${warnings.length}件:`);
  for (const w of warnings) console.log('  - ' + w);
}
if (errors.length) {
  console.log(`\n✖ エラー ${errors.length}件:`);
  for (const e of errors) console.log('  - ' + e);
  console.log('\nコミット前に上記エラーを解消してください。');
  process.exit(1);
}
console.log('\n✓ エラーなし（コミット可）。');
