// 共通グラフの型・定数・ユーティリティ。
// d3-scale / d3-shape は各コンポーネントのビルド時（SSG）にのみ使う。クライアントJSは出ない。

export interface ChartSource {
  title: string;
  url: string;
  publisher?: string;
  date?: string;
}

/** 折れ線の1系列（x は数値＝年など） */
export interface LineSeries {
  name: string;
  points: { x: number; y: number }[];
}

/** 棒・積み上げの1系列（categories と同じ並び・同じ長さの値） */
export interface CategorySeries {
  name: string;
  values: number[];
}

export const CHART_DIMS = {
  width: 720,
  height: 300,
  margin: { top: 16, right: 20, bottom: 40, left: 64 },
};

// 落ち着いた Material 3 寄りの系列パレット（DESIGN.md と一致）。先頭から順に使う。
export const SERIES_COLORS = [
  '#2c6a4b', // primary green
  '#3a646f', // tertiary teal
  '#9c6a2f', // amber
  '#7a5a8e', // muted purple
  '#b3623f', // terracotta
  '#4f6356', // secondary slate-green
];

/** 日本語ロケールの数値整形。unit はそのまま後置（例: "人" "兆円" "%"）。 */
export function formatNum(n: number, unit = ''): string {
  const s = Number.isInteger(n) ? n.toLocaleString('ja-JP') : n.toLocaleString('ja-JP', { maximumFractionDigits: 2 });
  return `${s}${unit}`;
}
