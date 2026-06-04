export const categories = [
  {
    id: 'population',
    title: '人口・家族・世代',
    description: '少子化、高齢化、介護、世代間公平など、日本社会の基礎条件に関わる課題。',
  },
  {
    id: 'human-capital',
    title: '人的資本・働き方・教育',
    description: '賃金、生産性、教育、学び直し、健康、包摂的な労働市場に関わる課題。',
  },
  {
    id: 'governance',
    title: '財政・社会保障・行政',
    description: '財政、税制、社会保障、行政DX、政策評価に関わる課題。',
  },
  {
    id: 'regional-economy',
    title: '地域・都市・インフラ',
    description: '地方の持続性、都市集中、空き家、公共交通、インフラ老朽化に関わる課題。',
  },
  {
    id: 'industry',
    title: '産業・企業・経済成長',
    description: '産業競争力、中小企業、スタートアップ、企業統治、人的資本経営に関わる課題。',
  },
  {
    id: 'environment',
    title: '環境・エネルギー・防災',
    description: '脱炭素、エネルギー、食料、防災、気候変動適応に関わる課題。',
  },
  {
    id: 'digital',
    title: 'デジタル・AI・情報空間',
    description: '行政・医療・教育DX、AI、サイバー、偽情報、データガバナンスに関わる課題。',
  },
  {
    id: 'trust',
    title: '民主主義・信頼・共生',
    description: '政治参加、透明性、人権、孤独・孤立、合意形成に関わる課題。',
  },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export function getCategoryByTitle(title: string) {
  return categories.find((category) => category.title === title);
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}
