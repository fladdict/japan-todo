// スイス・スタイルの Mermaid テーマ（モノクロ＋赤の単一アクセント・緑排除）。
// global.css の配色トークンに対応させ、サイト全体のトーンと揃える。
// beautiful-mermaid の RenderOptions に渡す。
export const SWISS_MERMAID_THEME = {
  fg: '#141414', // テキスト・ノード文字（インク）
  accent: '#d62410', // 矢印・強調（スイス・レッド）
  muted: '#5b5b57', // 副次テキスト
  line: '#5b5b57', // エッジ
  surface: '#f1f1ef', // ノード塗り（ライトグレー面）
  border: '#141414', // ノード枠線
  font: 'Inter, "Noto Sans JP", sans-serif',
  transparent: true, // 背景は figure 側（.diagram）に任せる
} as const;
