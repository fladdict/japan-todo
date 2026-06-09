import fs from 'node:fs/promises';
import path from 'node:path';

const [category, slug, title] = process.argv.slice(2);

if (!category || !slug || !title) {
  console.error('Usage: node scripts/new-issue.mjs <category> <slug> <title>');
  process.exit(1);
}

const target = path.join('src/content/issues', category, `${slug}.mdx`);
const today = new Date().toISOString().slice(0, 10);
const content = `---
title: "${title}"
description: ""
category: ""
subcategory: ""
status: "draft"
priority: "medium"
urgency: 3
severity: 3
maturity: "stub"
essence: ""
summary: []
related: []
time_horizon: []
actors: []
capital: []
tags: []
last_reviewed: "${today}"
next_review: ""
sources: []
---

{/* 各段落が「事実 / 解釈 / 原因仮説 / 提言 / 実装 / 検証」のどれかを意識して書く。 */}

## 課題の定義（扱う／扱わない）

- このページで扱う問題:
- このページで扱わない問題:
- 似ているが別の問題:

## 何が起きているか（データ）

## よくある誤解

## なぜ先送りされてきたか

## 原因構造

## 誰が、どう困るか（影響）

## 放置するとどうなるか（時間軸）

## 解決の方向性

## 政策選択肢の比較

## 主体別アクション

{/* 各主体: レバー / 変えるもの / 実行上の制約 / 成果指標 */}

### 政府

### 自治体

### 企業

### NPO・地域

### 個人・家庭

### メディア・研究者

## 政策争点

## 反対論・トレードオフ

{/* 財源・コスト / 公平性 / 実現可能性 / 副作用 / 価値対立 */}

## KPI

{/* 結果指標 / 中間指標 / 副作用指標 / 公平性指標 / データ更新頻度 */}

## 未解決の問い

## すでにある良い事例

{/* 政府 / 自治体 / 企業 / NPO / 海外 / 失敗・限界事例 */}

## 10年後の望ましい状態
`;

await fs.mkdir(path.dirname(target), { recursive: true });
await fs.writeFile(target, content, { flag: 'wx' });
console.log(`Created ${target}`);
