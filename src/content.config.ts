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
    // 30秒要約（Layer 1）: 何が問題か / なぜ今か / 最初にやるべきこと など3点前後
    summary: z.array(z.string()).default([]),
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
          date: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { issues };
