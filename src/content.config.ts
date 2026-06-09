import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const issueStatus = z.enum(['draft', 'review', 'published', 'archived']);
const priority = z.enum(['critical', 'high', 'medium', 'low']);
// 成熟度（深さの管理）: stub=骨子のみ / draft=一次情報つき下書き / standard=主体別・KPI・出典が揃う / deep=検証済みで厚い
const maturity = z.enum(['stub', 'draft', 'standard', 'deep']);

const issues = defineCollection({
  loader: glob({ base: './src/content/issues', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string(),
    status: issueStatus.default('draft'),
    priority: priority.default('medium'),
    maturity: maturity.default('stub'),
    // 緊急度: 着手の時間的切迫度（5=もはや手遅れ気味で即時着手必須 … 1=長期にゆっくりでよい）
    urgency: z.number().int().min(1).max(5).default(3),
    // 深刻度: 放置した場合の被害の大きさ・存立への影響（5=社会の存立に関わる … 1=改善が望ましいが致命的でない）
    severity: z.number().int().min(1).max(5).default(3),
    // この課題の本質（一文・Layer1冒頭）。description とは別に核を1文で。
    essence: z.string().optional(),
    // 30秒要約（Layer 1）: 何が問題か / なぜ今か / 最初にやるべきこと など3点前後
    summary: z.array(z.string()).default([]),
    // 政策判断サマリー（Layer1）: 意思決定者が一瞬で使う6項目。standard以上で推奨、未入力なら非表示。
    policy_summary: z
      .object({
        now: z.string(), // いま何が問題か
        why_now: z.string(), // なぜ今か
        constraint: z.string(), // 最大の制約
        levers: z.array(z.string()).default([]), // 政策レバー
        kpi: z.string(), // 最重要KPI
        contention: z.string(), // 政治的争点
      })
      .partial()
      .optional(),
    // 関連課題: 他カードの id（例: "population/low-birthrate"）
    related: z.array(z.string()).default([]),
    time_horizon: z.array(z.string()).default([]),
    actors: z.array(z.string()).default([]),
    capital: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    last_reviewed: z.coerce.date(),
    next_review: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string().optional(),
          date: z.string().optional(), // 公表年/時点
          accessed: z.string().optional(), // 最終確認日
          locator: z.string().optional(), // 該当箇所（表番号・ページ・節）
          volatile: z.boolean().optional(), // 更新で変動しうる数値か
        }),
      )
      .default([]),
  }),
});

export const collections = { issues };
