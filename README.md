# 日本が先送りせず解くべき課題

日本の社会・政府・企業が先送りせず解くべき構造課題を、出典つきの課題カードとして整理し、GitHub経由で継続更新するためのAstroサイトです。

## Stack

- Astro
- MDX
- Astro Content Collections
- GitHub Pages
- GitHub Actions

## Getting started

```bash
npm install
npm run dev
```

## Build and check

```bash
npm run check
npm run build
```

## Deploy to GitHub Pages

1. GitHubで新しいリポジトリを作成する。
2. このファイルセットをpushする。
3. `astro.config.mjs` の `site` と `base` を確認する。GitHub Actionsでは環境変数 `SITE` と `BASE_PATH` でも上書きできる。
4. GitHubの `Settings > Pages` で Source を `GitHub Actions` にする。
5. `main` ブランチへpushすると `.github/workflows/deploy.yml` が自動公開する。

例:

```bash
SITE=https://fukatsu.github.io BASE_PATH=/japan-future-agenda npm run build
```

ユーザーサイト型リポジトリ（例: `fukatsu.github.io`）で公開する場合、`BASE_PATH=/` にしてください。

## Content model

課題カードは `src/content/issues/` 以下にMDXで追加します。

```txt
src/content/issues/<category>/<slug>.mdx
```

新しい課題を追加する場合は、`docs/ISSUE_TEMPLATE.mdx` をコピーして使ってください。

## Recommended workflow with Claude Code / Codex

- 1課題1PRで編集する。
- 既存の見出し構造を壊さない。
- 時事性のある主張には出典を追加する。
- `npm run check` と `npm run build` を通す。
- 事実、解釈、提案を混ぜない。

## Directory overview

```txt
src/content/issues/       課題カード
src/data/categories.ts    8大分類
src/data/tags.ts          横断タグ候補
src/pages/                Astroページ
src/components/           表示コンポーネント
docs/                     編集ガイド・雛形
.github/workflows/        GitHub Pages自動公開
```
