---
version: alpha
name: japan-todo
description: 日本の構造課題を出典つきで整理する公共ナレッジベースのビジュアルアイデンティティ。Material Design 3 を基盤に、静かで信頼でき、エビデンス重視の落ち着いたトーンで設計する。
colors:
  # Material 3 のロールベース。primary=緑（再生・継続）、tertiary=青緑（補助アクセント）。
  primary: "#2c6a4b"
  on-primary: "#ffffff"
  primary-container: "#b2f1c8"
  on-primary-container: "#00210f"
  secondary: "#4f6356"
  on-secondary: "#ffffff"
  secondary-container: "#d2e8d7"
  on-secondary-container: "#0c1f15"
  tertiary: "#3a646f"
  on-tertiary: "#ffffff"
  tertiary-container: "#bdeaf7"
  on-tertiary-container: "#001f27"
  neutral: "#f8faf5"
  surface: "#f8faf5"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f1f5ee"
  surface-container: "#ebefe7"
  surface-container-high: "#e5e9e1"
  surface-variant: "#dde5dc"
  on-surface: "#181d19"
  on-surface-variant: "#404942"
  outline: "#707972"
  outline-variant: "#c0c9bf"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#410002"
  # 機能色（緊急度=暖色 / 深刻度=赤系）
  urgency: "#9c4218"
  severity: "#9b2226"
typography:
  display:
    fontFamily: "'Noto Sans JP', system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Noto Sans JP', system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0"
  title:
    fontFamily: "'Noto Sans JP', system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "'Noto Sans JP', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.01em"
  label:
    fontFamily: "'Noto Sans JP', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  none: "0"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "28px"
  full: "999px"
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
    elevation: e1-sticky
  card:
    background: surface-container-lowest
    border: "1px solid outline-variant"
    radius: lg
    elevation: e0-hover-e1
  chip:
    background: surface-container-high
    color: on-surface-variant
    radius: full
  callout:
    background: secondary-container
    color: on-secondary-container
    radius: lg
  summary-box:
    background: primary-container
    color: on-primary-container
    radius: lg
---

# japan-todo Design

## Overview

このサイトは社会課題を煽るためではなく、解くための公共メモリ。トーンは **静か・信頼・エビデンス重視**。
Material Design 3 のロールベースのカラー、トーンベースのサーフェス、明確なタイプスケール、
8px グリッド、控えめなエレベーションを採用する。装飾より可読性と一貫性を優先する。

## Colors

Material 3 のロールで運用する。**primary=緑**（再生・継続・公共）を基調に、**tertiary=青緑**を補助アクセントに使う。
背景は単一の白ではなく、`surface` と `surface-container-*` のトーン差で階層を表現する（トーンベースサーフェス）。

- テキストは必ず `on-*` ロールで対になる背景に乗せ、コントラスト AA 以上を確保する。
- アクセントは使いすぎない。primary は主要なリンク・見出しアクセント・要約ボックスに限定。
- 課題の **緊急度/深刻度** だけは専用の機能色（`urgency` 暖色 / `severity` 赤系）を使い、意味を即読できるようにする。

## Typography

`Noto Sans JP`（Google のオープンフォント、日本語に最適）を主、`system-ui` をフォールバックに使う。
日本語は行間を広め（body は line-height 1.85）に取り、長文の課題カードでも読みやすくする。
役割は display / headline / title / body / label の5つに集約する（Material 3 のタイプスケールを簡約）。

## Layout

- 最大幅 `min(1120px, 100% - 32px)` のセンタリング。
- 8px グリッド（4 / 8 / 12 / 16 / 24 / 32 / 48）。セクション間は `--space-xxl`。
- カードグリッドは `repeat(auto-fit, minmax(260px, 1fr))`、ギャップ `--space-md`。
- レスポンシブ: 760px 未満で hero とヘッダーを1カラム化。

## Elevation & Depth

Material 3 流に**影は控えめ**、階層は主にトーン差で表現する。

- `e0`: 影なし（既定のカード）。境界は `outline-variant` の1px。
- `e1`: ホバー時・アプリバー。`0 1px 2px / 0 2px 6px rgba(0,0,0,.08)`。
- `e2`: 重要な浮遊要素。
- インタラクションは state layer（ホバーで `on-surface` を 6〜8% 重ねる）で表現する。

## Shapes

角丸スケール（rounded トークン）: カード/要約/コールアウト=`lg(16px)`、入れ子の小要素=`sm/md`、
チップ・バッジ=`full`（ピル）、フォーカスリング=2px。鋭角は使わない。

## Components

- **App bar（ヘッダー）**: `surface` 背景・sticky・`e1`。ブランドは title、ナビは on-surface-variant。
- **Card**: `surface-container-lowest` + `outline-variant` 枠 + `lg` 角丸。ホバーで `e1` と state layer。
- **Chip / Badge**: `surface-container-high` のピル。タグ・メタ情報に使う。
- **Rating（緊急度/深刻度）**: ラベル＋5段階ドット。urgency/severity の機能色で塗る。
- **Callout**: `secondary-container` のトーナルカード。
- **Summary box（30秒要約）**: `primary-container` のトーナルカード（Layer1 を強調）。
- **Details（詳細・根拠）**: outlined、サマリ行はボタン的に。

## Do's and Don'ts

- ✅ トーン差で階層を作る／ロール色で文字を乗せる／余白は8pxグリッド／角丸は統一。
- ✅ フォーカスリングを必ず出す（キーボード操作）。`prefers-reduced-motion` を尊重。
- ❌ 影を濃くしない／原色を多用しない／角丸をバラバラにしない／本文の行間を詰めすぎない。
- ❌ 緊急度/深刻度以外で赤・橙の機能色を使わない（意味が薄れる）。
