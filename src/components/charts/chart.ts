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

// スイス・スタイルのデータ配色（モノクロ＋赤を基調、補助に無彩・寒色）。先頭から順に使う。
export const SERIES_COLORS = [
  '#141414', // ink
  '#d62410', // accent red
  '#2f5aa8', // blue
  '#b5820b', // ochre
  '#7a4ea0', // purple
  '#6b6b6b', // gray
];

/** 日本語ロケールの数値整形。unit はそのまま後置（例: "人" "兆円" "%"）。 */
export function formatNum(n: number, unit = ''): string {
  const s = Number.isInteger(n) ? n.toLocaleString('ja-JP') : n.toLocaleString('ja-JP', { maximumFractionDigits: 2 });
  return `${s}${unit}`;
}
