import type { CategoryId } from './categories';

// 構造改革で論点となる規制・法律の「索引」。
// これは課題カード（issues）ではなくリファレンス。深掘りは related 先の課題カードが担う。
// 方針: 中立・非党派。「阻害している」と断定せず「論点となっている／是非が議論されている」と記述する。
//       name と sources は公式一次情報で実在確認したものだけを載せる（捏造禁止）。
export interface RegulationSource {
  title: string;
  url: string;
  publisher?: string;
  date?: string;
}

export interface Regulation {
  id: string; // 一意の slug
  name: string; // 実在の法・規制名
  categoryId: CategoryId; // 9分類のどれかに紐付け（カテゴリ下に列挙するため）
  point: string; // 中立な「論点」一文（なぜ構造改革で議論になるか。断定しない）
  status?: string; // 任意: 現行 / 改正論議中 / 段階導入中 など
  related: string[]; // 関連 issue の id（例: "industry/business-succession"）
  sources: RegulationSource[]; // 公式出典（実在確認済み）
  last_reviewed: string; // YYYY-MM
}

export const regulations: Regulation[] = [
  {
    id: 'ride-share-road-transport-act',
    name: '道路運送法（自家用車活用事業・日本版ライドシェア）',
    categoryId: 'regional-economy',
    point:
      'タクシー不足が深刻な地域・時間帯の移動手段を、タクシー事業者の管理のもと自家用車・一般ドライバーで補う「日本版ライドシェア」が2024年3月に創設され、対象や運用の拡大の是非が論点となっている。',
    status: '2024年3月創設・拡大を検討中',
    related: ['regional-economy/regional-depopulation', 'regional-economy/aging-infrastructure'],
    sources: [
      {
        title: '日本版ライドシェア（自家用車活用事業）関係情報',
        url: 'https://www.mlit.go.jp/jidosha/jidosha_fr3_000051.html',
        publisher: '国土交通省',
        date: '2024',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'analog-regulations',
    name: 'アナログ規制（目視・常駐・対面・書面掲示等）',
    categoryId: 'digital',
    point:
      '法令約1万条項にのぼる目視・常駐・対面・書面等を求める「アナログ規制」が手続のデジタル化を妨げうるとして、デジタル臨時行政調査会が工程表に基づき一括見直しを進めている。',
    status: '工程表に基づき見直し中',
    related: ['digital/digital-government'],
    sources: [
      {
        title: 'アナログ規制見直しの取組',
        url: 'https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee',
        publisher: 'デジタル庁',
        date: '2022',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'business-succession-tax',
    name: '法人版事業承継税制（特例措置・租税特別措置法）',
    categoryId: 'industry',
    point:
      '非上場株式の贈与・相続にかかる税の納税を猶予・免除する制度。特例措置は2027年末までの時限措置で、活用のしやすさや恒久化の是非が論点となっている。',
    status: '特例措置は2027年12月末までの時限',
    related: ['industry/business-succession'],
    sources: [
      {
        title: '法人版事業承継税制（特例措置）',
        url: 'https://www.chusho.meti.go.jp/zaimu/shoukei/shoukei_enkatsu_zouyo_souzoku.html',
        publisher: '中小企業庁',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'online-medical-care-guideline',
    name: 'オンライン診療の指針（医師法の対面診療原則との関係）',
    categoryId: 'population',
    point:
      '医師法に基づく対面診療の原則のもとで、オンライン診療の実施要件を定める指針。へき地・高齢者の医療アクセス確保の観点から、要件の緩和の是非が継続的に議論されている。',
    status: '指針を継続的に見直し中',
    related: [
      'population/aging-society',
      'digital/digital-government',
      'regional-economy/regional-depopulation',
    ],
    sources: [
      {
        title: 'オンライン診療の適切な実施に関する指針の見直しに関する検討会',
        url: 'https://www.mhlw.go.jp/stf/shingi/other-isei_513005_00001.html',
        publisher: '厚生労働省',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'agricultural-land-act',
    name: '農地法（一般法人の農地取得・参入規制）',
    categoryId: 'environment',
    point:
      '農地の権利移動を許可制とし、一般法人による農地の「所有」を原則認めない仕組み。担い手不足が進むなかで、参入規制の緩和の是非が論点となっている（賃借での参入は緩和済み）。',
    status: '賃借は緩和済み・所有は制限を継続',
    related: ['environment/food-security', 'regional-economy/regional-depopulation'],
    sources: [
      {
        title: '農地制度',
        url: 'https://www.maff.go.jp/j/keiei/koukai/',
        publisher: '農林水産省',
      },
      {
        title: '改正農地法について',
        url: 'https://www.maff.go.jp/j/keiei/koukai/kaikaku/',
        publisher: '農林水産省',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'grid-constraints-renewable',
    name: '電力系統の制約と再エネ出力制御（系統整備・接続ルール）',
    categoryId: 'environment',
    point:
      '送電網の容量制約から再生可能エネルギーの出力制御が拡大しており、系統増強や接続・運用ルールの見直しが、脱炭素と電力の安定供給の両立に向けた論点となっている。',
    status: '系統増強・ルール見直しを推進中',
    related: ['environment/energy-security', 'environment/decarbonization'],
    sources: [
      {
        title: '再生可能エネルギーの出力制御の抑制に向けた取組等について（系統WG）',
        url: 'https://www.meti.go.jp/shingikai/enecho/shoene_shinene/shin_energy/keito_wg/pdf/050_01_00.pdf',
        publisher: '資源エネルギー庁',
        date: '2024',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'immigration-control-act-skilled-worker',
    name: '出入国管理及び難民認定法（特定技能・育成就労制度）',
    categoryId: 'human-capital',
    point:
      '人手不足分野で外国人材を受け入れる在留資格制度。技能実習に代わる「育成就労」制度の創設に伴い、受入れ範囲・転籍の自由度・共生支援の設計が論点となっている。',
    status: '育成就労制度を2027年までに施行予定',
    related: [
      'human-capital/inclusive-labor-market',
      'trust/human-rights-inclusion',
      'population/caregiving-workforce',
    ],
    sources: [
      {
        title: '育成就労制度の制度概要・関係法令',
        url: 'https://www.moj.go.jp/isa/03_00163.html',
        publisher: '出入国在留管理庁',
      },
      {
        title: '特定技能制度',
        url: 'https://www.moj.go.jp/isa/applications/ssw/index.html',
        publisher: '出入国在留管理庁',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'vacant-houses-special-measures-act',
    name: '空家等対策の推進に関する特別措置法（令和5年改正）',
    categoryId: 'regional-economy',
    point:
      '放置空き家の活用・除却を促す法律。2023年改正で「管理不全空家」を新設し、勧告を受けると固定資産税の住宅用地特例から除外できるようになった。実効性の確保が論点となっている。',
    status: '2023年12月改正施行',
    related: ['regional-economy/vacant-houses'],
    sources: [
      {
        title: '空家等対策の推進に関する特別措置法の一部を改正する法律（令和5年法律第50号）について',
        url: 'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000138.html',
        publisher: '国土交通省',
        date: '2023',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'dismissal-monetary-relief',
    name: '解雇無効時の金銭救済制度（労働契約法上の論点）',
    categoryId: 'human-capital',
    point:
      '不当解雇が無効とされた際に金銭での解決を選べる制度の是非。労働移動の円滑化と労働者保護の両面から、厚生労働省の検討会で法技術的論点が検討されてきた（導入は未決）。',
    status: '検討会で論点整理（導入は未決）',
    related: ['human-capital/inclusive-labor-market', 'human-capital/wage-productivity'],
    sources: [
      {
        title: '解雇無効時の金銭救済制度に係る法技術的論点に関する検討会',
        url: 'https://www.mhlw.go.jp/stf/shingi/other-roudou_558547.html',
        publisher: '厚生労働省',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'stock-option-tax',
    name: 'ストックオプション税制（租税特別措置法）',
    categoryId: 'industry',
    point:
      'スタートアップが人材を獲得する手段である新株予約権への税制優遇。権利行使価額の上限引上げ等の拡充が行われ、さらなる対象拡大の是非が論点となっている。',
    status: '2024年度改正で上限引上げ',
    related: ['industry/startups', 'human-capital/wage-productivity'],
    sources: [
      {
        title: 'ストックオプション税制',
        url: 'https://www.meti.go.jp/policy/newbusiness/stock-option.html',
        publisher: '経済産業省',
      },
    ],
    last_reviewed: '2026-06',
  },
  {
    id: 'gx-carbon-pricing',
    name: 'GX推進法（脱炭素成長型経済構造移行推進法）と成長志向型カーボンプライシング',
    categoryId: 'environment',
    point:
      '2028年度の化石燃料賦課金、2026年度に本格稼働予定の排出量取引制度など、カーボンプライシングを段階的に導入する枠組み。脱炭素投資の促進と産業の負担・国際競争力のバランスが論点となっている。',
    status: '2023年成立・段階導入中',
    related: [
      'environment/decarbonization',
      'environment/energy-security',
      'security/economic-security',
    ],
    sources: [
      {
        title: '成長志向型カーボンプライシング構想',
        url: 'https://www.meti.go.jp/policy/energy_environment/global_warming/GX-league/gx-league.html',
        publisher: '経済産業省',
      },
      {
        title: '排出量取引制度',
        url: 'https://www.meti.go.jp/policy/energy_environment/global_warming/ets.html',
        publisher: '経済産業省',
      },
    ],
    last_reviewed: '2026-06',
  },
];
