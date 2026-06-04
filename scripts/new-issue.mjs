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
time_horizon: []
actors: []
capital: []
tags: []
last_reviewed: "${today}"
sources: []
---

## 何が問題か

## なぜ先送りされてきたか

## 誰が困っているか

## 放置するとどうなるか

## 政府がやること

## 企業がやること

## 自治体・NPOがやること

## 個人ができること

## すでにある良い事例

## 反対論・トレードオフ

## 10年後の望ましい状態
`;

await fs.mkdir(path.dirname(target), { recursive: true });
await fs.writeFile(target, content, { flag: 'wx' });
console.log(`Created ${target}`);
