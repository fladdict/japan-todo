---
version: alpha
name: japan-todo
description: 日本の構造課題を出典つきで整理する公共ナレッジベースのビジュアルアイデンティティ。原理主義的なスイス・スタイル（インターナショナル・タイポグラフィック・スタイル／グリッドシステム）に基づき、モノクロ＋赤の単一アクセント・角丸なし・影なし・罫線とグリッドで構造化する。
colors:
  # スイス：黒インク×白＋赤の単一アクセント。緑・トーナルカラーは使わない。
  ink: "#141414"
  accent: "#d62410"
  on-accent: "#ffffff"
  primary: "#141414"
  on-primary: "#ffffff"
  primary-container: "#f1f1ef"
  on-primary-container: "#141414"
  secondary: "#5b5b57"
  secondary-container: "#f1f1ef"
  on-secondary-container: "#141414"
  surface: "#ffffff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f7f7f5"
  surface-container: "#f1f1ef"
  surface-container-high: "#e8e8e5"
  surface-variant: "#ececea"
  on-surface: "#141414"
  on-surface-variant: "#5b5b57"
  outline: "#141414"           # 強い罫線
  outline-variant: "#d7d7d3"   # ヘアライン
  error: "#b3261e"
  # 機能色（2トーン）: 緊急度=インク / 深刻度=アクセント赤
  urgency: "#141414"
  severity: "#d62410"
typography:
  display:
    fontFamily: "'Inter', 'Noto Sans JP', system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Inter', 'Noto Sans JP', system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0"
  title:
    fontFamily: "'Inter', 'Noto Sans JP', system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "'Inter', 'Noto Sans JP', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.01em"
  label:
    fontFamily: "'Inter', 'Noto Sans JP', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  # スイス：角丸なし。全スケール 0。
  none: "0"
  xs: "0"
  sm: "0"
  md: "0"
  lg: "0"
  xl: "0"
  full: "0"
spacing:
  base: "16px"
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  gutter: "24px"
  margin: "32px"
components:
  app-bar:
    background: surface
    border-bottom: "1px solid outline"   # 強い罫線・影なし
  card:
    background: surface-container-lowest
    border: "1px solid outline-variant"
    radius: "0"
    elevation: none                      # 影は使わない・hoverは罫線をinkに
  chip:
    background: surface-container-high
    color: on-surface-variant
    radius: "0"                          # 角丸なし（四角いタグ）
  summary-box:
    background: surface-container-low
    rule: "border-top 3px ink"           # 罫線ブロック（緑の塗りは廃止）
    radius: "0"
  policy-summary:
    background: surface-container-low
    rule: "border-left 3px ink"
    radius: "0"
  chart:
    background: surface-container-low
    radius: "0"
    seriesColors: ["#141414", "#d62410", "#2f5aa8", "#b5820b", "#7a4ea0", "#6b6b6b"]
    rendering: build-time-svg
    requires: source
---

# japan-todo Design

## Overview

このサイトは社会課題を煽るためではなく、解くための公共メモリ。トーンは **静か・客観・エビデンス重視**。
**原理主義的なスイス・スタイル（インターナショナル・タイポグラフィック・スタイル）**を採る：
モノクロ（黒インク×白）＋**赤の単一アクセント**、**角丸なし・影なし**、**罫線とグリッド**で構造化、
強いタイポグラフィ階層、フラッシュレフト。装飾を排し、情報の秩序と可読性を最優先する。

## Colors

黒インク `#141414` × 白を基調に、**赤 `#d62410` を単一アクセント**として節制して使う（リンクのホバー/CTA・能動状態・
深刻度・重要な罫線のみ）。緑やトーナルカラーは使わない。面の階層は淡いグレー（`surface-container-*`）と**罫線**で表す。

- テキストは `on-*` で対の背景に乗せ、コントラスト AA 以上。
- 課題の **緊急度=インク / 深刻度=アクセント赤** の2トーンで意味を即読。
- 赤を多用しない（多用すると階層が壊れる）。

## Typography

**ラテン/数字 = Inter、和文 = Noto Sans JP** のネオ・グロテスク・ペアリング（スイスの系譜）。
和文は `font-feature-settings: "palt"`（プロポーショナル）、字間 0.02em、行間 1.8。数字は `tabular-nums` で揃える。
役割は display / headline / title / body / label。見出しは `text-wrap: balance`、本文は measure を約44remに制限。

## Layout（グリッド）

- 最大幅 `min(1120px, 100% - 32px)` のセンタリング。フラッシュレフト（ラグドライト）。
- 8px グリッド（4 / 8 / 12 / 16 / 24 / 32 / 48）。セクション間は `--space-xxl`。
- カードグリッドは `repeat(auto-fit, minmax(260px, 1fr))`、ギャップ `--space-md`。**節は罫線で区切る**。
- レスポンシブ: 760px 未満で hero とヘッダーを1カラム化。

## Elevation & Depth

**影は使わない**。深さ・階層は**罫線（1px ヘアライン／1px インク強罫線／3px インク）とグレー面**で表す。

- カード: `outline-variant` の1pxヘアライン。ホバーは**影でなく罫線を `ink` に**（沈み込まない）。
- インタラクションは下線・罫線・アクセント赤で示す（state layer はごく薄い 4〜8%）。

## Shapes

**角丸なし（全 rounded トークン = 0）**。カード・チップ・ボタン・図表すべて矩形。
フォーカスリングのみ 2px（アクセシビリティ）。鋭角・直線で構成する。

## Components

- **App bar（ヘッダー）**: `surface` 背景・sticky・**下端 1px インク罫線**（影・ぼかしなし）。
- **Card**: `surface-container-lowest` + `outline-variant` 1px枠 + **角丸0**。ホバーで枠を `ink` に。
- **Chip / Badge**: `surface-container-high` の**矩形**タグ。タグ・メタ情報に。
- **Rating（緊急度/深刻度）**: ラベル＋5段階ドット。**緊急度=インク / 深刻度=赤**。
- **Summary box（30秒要約＋essence）**: 上端 3px インク罫線のグレー面（緑塗りは廃止）。
- **政策判断サマリー**: 左端 3px インク罫線のグレー面。
- **CTA/ボタン**: 黒のソリッド矩形、ホバーで**アクセント赤**反転。
- **Details（詳細・根拠/実行プラン）**: outlined、サマリ行はリンク的に。
- **Charts（`src/components/charts/`）**: LineChart（推移）/ BarChart（比較）/ StackedBarChart（内訳）。
  ビルド時に**インラインSVG**へ描画（クライアントJSなし）。系列色は seriesColors を先頭から使用。
  `<figure>` で囲み `<figcaption>` に**出典必須**、`<details>` にデータ表（a11y）。
- **本質一文（essence）**: Layer1 要約ボックス冒頭に大きめ太字で1文。意思決定者の認知を一段上げる。
- **政策判断サマリー（policy_summary）**: 左罫線のグレー面に6項目（いま何が問題か/なぜ今か/最大の制約/
  政策レバー/最重要KPI/政治的争点）を定義リストで。standard以上で表示。
- **OptionsTable（`src/components/OptionsTable.astro`）**: 政策選択肢の比較。静的HTMLテーブル（選択肢/効果/
  コスト/実現難度/主な副作用/前提）。定量は出典つきのみ。
- **出典の鮮度**: `volatile` な数値は EvidenceBox に「更新で変動しうる数値」バッジ＋`accessed`（最終確認日）。
- **このページを引用**: Layer3 末尾に引用テキストを自動生成（title/最終確認日/URL）。
- **ActionPlan（`src/components/ActionPlan.astro`）**: 実行プランの深掘りを **`<details>` アコーディオン**（折りたたみ既定）で。
  短期/中期/長期 × 打ち手/担い手/手段/里程標の静的テーブル。肥大化を避けつつ depth をオンデマンドで。
- **プレモーテム**: 「失敗のシナリオ」を通常の本文節として（想定シナリオ・断定回避）。

## Do's and Don'ts

- ✅ 罫線とグリッドで階層を作る／黒インクで読ませる／余白は8pxグリッド／矩形で統一／フラッシュレフト。
- ✅ フォーカスリングを必ず出す（キーボード操作）。`prefers-reduced-motion` を尊重。
- ❌ 影・角丸・グラデーション・トーナルな塗りを使わない／緑を使わない。
- ❌ アクセント赤を多用しない（リンクのホバー/CTA・能動状態・深刻度・重要罫線のみ）。意味が薄れる。
