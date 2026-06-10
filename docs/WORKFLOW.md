# 制作ワークフロー

課題カードを「計画 → 下書き → 精緻化 → 鮮度維持」で育てるための運用手順。
スキル本体（`.claude/skills/`）はプロジェクト限定（git管理外）。本ファイルは流れの公開ドキュメント。

## 4つの層

```
L1 plan-agenda --scope global   トレンド点検・分類の過不足・横断・優先度・鮮度
        │ updates
        ▼
   docs/BACKLOG.md               何を作るか＋緊急度/深刻度＋状態
        ▲       │
        │差し戻し ▼
L2 plan-agenda --scope <分類>    カバレッジ欠落・粒度/重複の番人・骨子生成
        │
        ▼
L3 draft-issue（速）→ enrich-issue（standard / deep）   本文を書く
        │
        ▼
（鮮度）next_review 切れを enrich で再確認
```

- **L1/L2**: `plan-agenda`（計画。本文は書かない）
- **L3 下書き**: `draft-issue`（軽い一次情報＋12節、maturity=draft）
- **L3 精緻化**: `enrich-issue`
  - **standard（既定）**: 単一エージェントが WebFetch で出典実在確認＋良い事例裏取り＋**図解（Mermaid）2枚**（原因図＋対処フロー）→ review
  - **deep（最重要のみ）**: `deep-research` の5角度＋3票検証

### 図解（Mermaid / `Mermaid.astro`）

enrich standard の標準成果物として、本文の論理を可視化する図を2枚入れる:
- **原因構造** 節の直後 → 因果図（`graph TD`、本文既出の原因のみ・4〜8ノード・悪循環は矢印で閉じる）
- **解決の方向性** 節の直後 → 対処のワークフロー図（`graph LR`、打ち手→中間効果→到達状態）

`beautiful-mermaid` で**ビルド時に SVG 化**するためクライアントJSは増えない。配色は `Mermaid.astro` の
スイステーマが自動適用（緑なし）。対応図種は flowchart/state/sequence（gantt不可）。図は本文ロジックの
可視化であり**新事実・数値・未根拠の因果を足さない**。実例は population/low-birthrate ほか代表4枚。

## 一括処理は Workflow で fan-out する

多数のカードを一気に処理するときは、Workflow ツールで **1カード1エージェント**に並列展開する。
各エージェントが**自分のファイルだけ**を Write するのでコンフリクトしない。検証・コミットは最後に中央で一括。

実績（2026-06-05）:
- `draft-all-stubs`: 空骨子24枚を draft 本文化（出典計107件）
- `enrich-drafts`: draft 29枚を standard/review へ（出典176件を WebFetch 確認、良い事例を実例化）

再利用可能な名前付きワークフロー（`.claude/workflows/`、git管理外）:
- `draft-issues` — `args`: `[{path, title, hint}]` を渡すと各カードを draft 本文化
- `enrich-issues` — `args`: `[{path, title, oldStructure?}]` を渡すと各カードを standard/review へ

呼び出し例（オーケストレータから）:

```
Workflow({ name: "enrich-issues", args: [
  { path: "src/content/issues/population/aging-society.mdx", title: "高齢化と長寿社会" },
  ...
] })
```

## 一括処理後の中央作業（必須）

1. **`npm run verify`**（コンテンツLinter：related id実在・出典URL形式・コンポーネントimport欠落・category突合の
   エラー＝0必須／鮮度・整合の警告／数値ダイジェスト）。エラーが出たら直す。
2. `npm run check`（0 errors）/ `npm run build`（全ページ生成）
3. `category` が日本語タイトルか、`maturity`/`summary` 等の frontmatter 完全性を確認
3. `docs/BACKLOG.md` の状態を更新
4. コミット → push → GitHub Actions デプロイ確認

## 品質の但し書き

standard は**単一エージェントの検証**であり、deep-research の3票対抗検証は経ていない。
`published` へ上げる前に、人の目視レビュー、または緊急度の高いカードへの deep 適用を推奨する。
