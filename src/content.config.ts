import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const issueStatus = z.enum(['draft', 'review', 'published', 'archived']);
const priority = z.enum(['critical', 'high', 'medium', 'low']);

const issues = defineCollection({
  loader: glob({ base: './src/content/issues', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string(),
    status: issueStatus.default('draft'),
    priority: priority.default('medium'),
    time_horizon: z.array(z.string()).default([]),
    actors: z.array(z.string()).default([]),
    capital: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    last_reviewed: z.coerce.date(),
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
