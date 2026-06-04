# 課題バックログ（BACKLOG）

「**何のカードを作るべきか**」と「**その優先度**」を管理する計画ドキュメント。
カードの本文はここには書かない（本文は各 `.mdx`）。このファイルは `plan-agenda` スキルが更新する。

## 運用フロー

```
L1 plan-agenda --scope global   分類の過不足・横断テーマ・優先度・鮮度を点検
        │ updates
        ▼
   このファイル（BACKLOG.md）   課題候補＋緊急度/深刻度＋根拠＋状態
        ▲       │ consumes
        │feedback▼
L2 plan-agenda --scope <分類>    カバレッジ欠落・粒度/重複・骨子生成
        │ scaffolds stubs
        ▼
L3 draft-issue（速）→ enrich-issue（深）   カード本文を書く
```

- **状態**: 内容=出典つきで充実 / 下書き=一次情報つき下書き / 骨子=見出しのみ / 候補=未作成
- **緊急度（緊）**= 着手の時間的切迫（5=もはや手遅れ気味で即時着手必須 … 1=長期にゆっくり）
- **深刻度（深）**= 放置時の被害・存立への影響（5=社会の存立に関わる … 1=改善は望ましいが致命的でない）
- 粒度は「複数原因×複数主体×放置コスト大」の社会課題に揃える。施策・制度単位は候補にしない。
- 横断課題は木に押し込めず、各カードの `related` で結ぶ。

---

## L1 トレンド点検（2026-06-05 実施）

**参照した horizon ソース**
- 経済財政運営と改革の基本方針2025（骨太、内閣府、2025-06-13）
- WEF Global Risks Report 2026
- OECD Economic Outlook 2025 / Economic Surveys: Japan
- 外国人材の受入れ・共生のための総合的対応策（令和7年改訂、法務省／内閣官房、2025-06）

**既存の重点と整合（確認）**
- 骨太2025: 全世代型社会保障・少子化対策の実効性検証・公教育再生・地方財政基盤強化 → population / governance / human-capital の重点と一致。
- OECD: 生産性・労働市場の二重構造・スタートアップ/大学連携・年金支給開始年齢・財政持続性 → wage-productivity / inclusive-labor-market / startups / fiscal-sustainability と一致。

**新たに浮上（要対応）**
- **外国人材・多文化共生**: 外国人労働者 約205万人（2023年10月、過去最高、全雇用者の約3.4%）。2025-07「外国人との秩序ある共生社会推進室」設置。→ 横断メモから**独立カード候補に格上げ**。
- **経済安全保障・地経学的対立**: WEF 2026 短期リスク1位（geoeconomic confrontation）。→ industry の「経済安全保障」候補を**格上げ**。
- **生物多様性・自然資本**: WEF 10年リスク上位（biodiversity loss）。→ environment 候補を**格上げ**。
- **年金の持続可能性**: OECD が支給開始年齢の引上げに言及。→ governance 候補（fiscal-sustainability / generational-equity との重複に注意）。
- **偽情報・社会の分断**: WEF 短期リスク上位。→ `digital/disinformation` の優先度見直し（緊3→4 を提案）。

**分類タクソノミー**: 8分類は維持でよい。経済安全保障・外国人材は既存分類（industry / trust・human-capital）＋ `related` で扱う。

**次に L2/L3 を回す優先レーン**: ① population（少子化・高齢化=緊5/深5）② governance（財政=緊4/深5）③ environment（防災=緊4/深5）。

---

## 人口・家族・世代（population）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| low-birthrate | 少子化・子育て負担 | 5 | 5 | 内容 |
| aging-society | 高齢化と長寿社会 | 5 | 5 | 骨子 |
| caregiving-workforce | 介護の担い手不足 | 4 | 4 | 骨子 |
| generational-equity | 世代間公平と人口減少 | 3 | 4 | 骨子 |

- 候補（plan-agenda で精査）: 医療提供体制・地域医療、ヤングケアラー / 家族の多様化

## 人的資本・働き方・教育（human-capital）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| wage-productivity | 賃金停滞と生産性 | 4 | 4 | 内容 |
| education-quality | 教育格差と教育の質 | 3 | 4 | 骨子 |
| reskilling | 学び直し・リスキリング | 4 | 3 | 骨子 |
| inclusive-labor-market | 包摂的な労働市場 | 3 | 3 | 骨子 |

- 候補: 外国人材と労働力、健康と就労（健康経営）

## 財政・社会保障・行政（governance）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| fiscal-sustainability | 社会保障と財政の持続可能性 | 4 | 5 | 下書き |
| tax-redistribution | 税制と再分配 | 3 | 3 | 骨子 |
| administrative-reform | 行政の効率化と政策評価 | 2 | 2 | 骨子 |

- 候補: 地方財政の持続性（★骨太2025 が地方財政基盤強化に言及）、年金の持続可能性（★OECD が支給開始年齢の引上げに言及。fiscal-sustainability/generational-equity と重複しないか L2 で要精査）、自治体の人材・専門人材不足

## 地域・都市・インフラ（regional-economy）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| aging-infrastructure | インフラ老朽化と地域サービス維持 | 4 | 4 | 内容 |
| regional-depopulation | 地方の人口流出と持続性 | 4 | 4 | 骨子 |
| vacant-houses | 空き家の増加と活用 | 3 | 2 | 骨子 |
| urban-concentration | 東京一極集中と都市の持続性 | 3 | 3 | 骨子 |

- 候補: 地域医療・買い物・物流のラストワンマイル、災害復興とまちの再建

## 産業・企業・経済成長（industry）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| business-succession | 中小企業の事業承継・後継者不足 | 4 | 3 | 下書き |
| industrial-competitiveness | 産業競争力とイノベーション | 4 | 4 | 骨子 |
| startups | スタートアップの育成 | 3 | 3 | 骨子 |
| corporate-governance | コーポレートガバナンスと人的資本経営 | 2 | 2 | 骨子 |

- 候補: **経済安全保障・サプライチェーン強靱化（★格上げ：WEF 2026 短期リスク1位。digital/cybersecurity・environment/energy-security と related）**、研究開発と大学（基礎研究力。★OECD が大学-SME連携・R&D税制に言及）

## 環境・エネルギー・防災（environment）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| decarbonization | 脱炭素とエネルギー転換 | 4 | 4 | 下書き |
| energy-security | エネルギー安全保障 | 4 | 4 | 骨子 |
| food-security | 食料安全保障と農業 | 3 | 4 | 骨子 |
| disaster-resilience | 防災と気候変動適応 | 4 | 5 | 骨子 |

- 候補: **生物多様性・自然資本（★格上げ：WEF 2026 10年リスク上位）**、水資源、循環経済・廃棄物

## デジタル・AI・情報空間（digital）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| digital-government | 行政・社会のデジタル化 | 3 | 3 | 下書き |
| ai-governance | AIの活用とガバナンス | 4 | 3 | 骨子 |
| cybersecurity | サイバーセキュリティ | 4 | 4 | 骨子 |
| disinformation | 偽情報と情報空間の健全性 | 3 | 3 | 骨子 |

- 候補: データガバナンス、医療・教育DX、デジタル人材の不足

## 民主主義・信頼・共生（trust）

| slug | タイトル | 緊 | 深 | 状態 |
|---|---|:--:|:--:|---|
| loneliness-isolation | 孤独・孤立 | 3 | 3 | 下書き |
| political-participation | 政治参加と投票率 | 2 | 3 | 骨子 |
| transparency-trust | 行政・政治の透明性と信頼 | 2 | 3 | 骨子 |
| human-rights-inclusion | 人権と多様性の包摂 | 2 | 2 | 骨子 |

- 候補: **外国人材・多文化共生（★格上げ：外国人労働者 約205万人=全雇用者の約3.4%、2025年に専管組織設置。human-capital/population と related）**、ジェンダー平等

---

## 横断課題（cross-cutting）

複数分類にまたがるため、単独カードにする場合は `related` で関係カードを結ぶ。

- **介護**: 人口 × 人的資本（担い手）× 財政（給付）
- **外国人材・多文化共生**: 人口 × 人的資本 × 民主主義・共生
- **ジェンダー平等**: 人的資本 × 人口 × 共生
- **データ・DX**: デジタル × 行政 × 医療・教育

## 要再確認（鮮度）— 点検日 2026-06-05

`next_review` が未設定。特に時事性が高く定期更新が要るもの:

- `human-capital/wage-productivity` — 実質賃金は**月次**更新。引用が令和7年9月分速報のため**要更新**（enrich で最新月へ）
- `population/low-birthrate` — 2025年（令和7年）の人口動態が公表され次第更新（例年初夏に前年確定）
- `environment/decarbonization` — NDC・エネルギー基本計画の改定に追従
- 全般: 重点カード（緊4以上）に `next_review` を設定することを推奨

## 分類タクソノミーの見直しメモ（L1）

- 現状の8分類は概ね妥当。
- 収まりが悪い横断テーマ（外国人・移民、ジェンダー、経済安全保障）は、独立カード＋`related` で扱うか、
  既存分類に寄せるかを global 実行時に判断する。
