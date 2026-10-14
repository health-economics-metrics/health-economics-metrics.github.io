# 医療経済指標

国のヘルスケアサービス向けに開発するソフトウェアエンジニアのために書かれた、医療経済学の数式、事例、考え方を網羅した総合的な入門書です。各ファイルは1つの指標または概念を扱います:定義、なぜ重要か、数式、計算例、ソフトウェア工学との関連、落とし穴、出典。

初めての方へ:まずは[機会費用](locales/en-gb-oxendict/topics/opportunity-cost/)、[質調整生存年](locales/en-gb-oxendict/topics/quality-adjusted-life-year/)、[遅延コスト](locales/en-gb-oxendict/topics/cost-of-delay/)から始めてください — これら3つの考え方の上に、他のすべてが築かれています。

## 経済的思考の基礎

- [機会費用](locales/en-gb-oxendict/topics/opportunity-cost/) — 断念した最善の代替案の価値。固定予算がすべての選択を「置き換え」にする理由
- [割引と時間選好](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — 現在価値、Green Book/NICEの年率3.5%
- [分析の視点](locales/en-gb-oxendict/topics/analysis-perspective/) — 支払者 対 提供者 対 社会全体:誰のコストを数えるか
- [評価期間](locales/en-gb-oxendict/topics/time-horizon/) — コストと効果をどれだけの期間数えるか、そして期間操作
- [限界費用と平均費用](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — 病床を1つ空けても平均費用が節約できない理由
- [現金化可能な節約と非現金化節約](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — あらゆる「時間節約」の主張に対する誠実さのテスト
- [感度分析](locales/en-gb-oxendict/topics/sensitivity-analysis/) — トルネード図。どの前提が結論を左右するか
- [確率的感度分析](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — モンテカルロ法、CEAC、正しい判断である確率
- [完全情報の期待価値](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — 実行前にパイロット試験の価格を決める
- [標本情報の期待価値(EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — あらゆる不確実性の解消ではなく、*特定の提案された*研究を価格づける
- [リアルオプション評価](locales/en-gb-oxendict/topics/real-options-valuation/) — 先に情報を集めるオプションではなく、段階的なプロジェクトを後で拡張するオプションを価格づける
- [人的資本アプローチと摩擦費用法](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — 失われた生産性を評価する2つの方法 — 報告される費用に2倍以上の差
- [優越性と効率フロンティア](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — 誰も選ぶべきでない選択肢を排除する

## アウトカム指標

- [質調整生存年(QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — 健康価値の共通通貨
- [障害調整生存年(DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — 疾病負担側の鏡像。グローバルヘルスの指標
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — ほとんどのQALY効用値の基盤となる測定尺度
- [タイムトレードオフ(TTO)による効用値の導出](locales/en-gb-oxendict/topics/time-trade-off-utility/) — 効用の重みが回答者から実際にどう引き出されるか
- [増分費用効果比(ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — 追加的な健康単位あたりの追加費用
- [支払意思閾値](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICEの£20,000〜30,000/QALYと世界各地の他の基準線
- [統計的生命価値(VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — 閾値に基づく評価に対する労働市場ベースの代替案
- [純金銭便益(NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — 価値からコストを引いた値を正しく計算する
- [獲得生存年](locales/en-gb-oxendict/topics/life-years-gained/) — 生存年数の計算、そしてevLYGという公平性を考慮した変種
- [健康調整平均余命(HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — 集団レベルでの健康年数の会計
- [QALY不足分と重症度補正](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — より重い病を抱える集団のQALYがより重く数えられる理由
- [労働生産性・活動障害(WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — 欠勤とプレゼンティーイズム、コストの見えにくい半分

## 経済分析の種類

- [費用効果分析(CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — 自然単位あたりの費用
- [費用効用分析(CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — QALYあたりの費用。異なる介入を比較する
- [費用便益分析(CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — すべてを金銭で表す。Green Book方式の正味現在価値
- [費用最小化分析(CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — 同等性を証明した上での最安の選択肢
- [費用結果分析(CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — 分解された一覧表。NICEがデジタルヘルスで好む形式
- [予算影響分析(BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — 価値とは区別される「支払い可能性」
- [投資収益率(ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — 前提条件を明示した共通指標
- [社会的投資収益率(SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — 市場が値付けしないものを金銭化する
- [通貨をまたぐICER比較](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPPと市場為替レート、導入判断を覆しうる換算の選択

## 医療システム運用の経済学

- [削減病床日数](locales/en-gb-oxendict/topics/bed-days-saved/) — 主力となる便益、そしてその評価の落とし穴
- [在院日数](locales/en-gb-oxendict/topics/length-of-stay/) — 病院のサイクルタイム
- [再入院率](locales/en-gb-oxendict/topics/readmission-rate/) — 医療システムにおける変更失敗率
- [予約不履行率(DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — 見逃された予約。最も純粋な無駄の指標
- [救急受診の回避](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — 上流での介入の経済学
- [全国診療報酬と単位費用](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — NHSの価格表とコスト算定基盤
- [紹介から治療までの期間(RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — リードタイム指標としての18週間基準
- [待機リストへの影響](locales/en-gb-oxendict/topics/waiting-list-impact/) — 節約された時間を診察を受けた患者数に変換する
- [医療従事者の時間](locales/en-gb-oxendict/topics/practitioner-time/) — 賃金ではなくボトルネック容量として評価する
- [人材定着](locales/en-gb-oxendict/topics/workforce-retention/) — 離職コストとバーンアウトの経済学
- [回避可能な外部委託費用](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — 割増料金の仕事を内部に取り戻す
- [下流リソースの最適化](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — 誰もが待っている役割の詰まりを解消する
- [早期介入](locales/en-gb-oxendict/topics/earlier-intervention/) — 進行前に治療することの経済学
- [価値創出能力(業務改善)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — 採用せずに能力を生み出す
- [確実な現金化削減(赤字対策)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — 予算項目を削除する。CFOの指標

## HTA枠組みと予防経済学

- [医療技術評価(HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE、ICER(米国)、CADTH:何を購入する価値があるかを誰が決めるか
- [マルコフコホートシミュレーション](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — 複数サイクルのHTAモデルが実際にコホートごと、サイクルごとにどうシミュレートされるか
- [NICEエビデンス基準枠組み](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — デジタルヘルスに対するリスク段階別のエビデンス要件
- [ドイツのDiGA迅速承認制度](locales/en-gb-oxendict/topics/diga-fast-track/) — 処方箋によるアプリ。エビデンス提出期限付きの暫定登録
- [治療必要数(NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — 主張を誠実に保つ、労力対便益の単位
- [集団寄与割合(PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — リスク因子が実際にどれだけの疾病負担を追う価値があるか
- [予防の経済学](locales/en-gb-oxendict/topics/prevention-economics/) — 予防が費用効果的であっても、費用削減にはめったにならない理由
- [スクリーニングの経済学](locales/en-gb-oxendict/topics/screening-economics/) — ウィルソン=ユングナー基準、低有病率でのPPV崩壊、アラート疲れ
- [スクリーニング必要数(NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — NNTのスクリーニングプログラムレベルでの類似物
- [回避された下流費用](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — コスト相殺とそれを信頼できるものにする規則
- [多基準意思決定分析(MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — 単一の閾値では足りないときの重み付きスコアリング
- [QALYあたりの炭素フットプリント](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — NHSのネットゼロ公約とQALYあたり費用の出会い

## ソフトウェア工学とデジタル提供

- [遅延コスト](locales/en-gb-oxendict/topics/cost-of-delay/) — 未提供の1週間あたり£またはQALY。中核となる橋渡し指標
- [DORAメトリクス](locales/en-gb-oxendict/topics/dora-metrics/) — デリバリー性能を医療経済学の用語に翻訳する
- [フローメトリクス](locales/en-gb-oxendict/topics/flow-metrics/) — リトルの法則、WIP、フロー効率。病院とパイプラインに共通する待ち行列の数学
- [WSJFとCD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — 価値密度による優先順位付け。QALYのランキング表としてのバックログ
- [SPACEとDevEx](locales/en-gb-oxendict/topics/space-and-devex/) — 多次元的な生産性。エンジニアリング指標へのEQ-5Dの教訓
- [技術的負債](locales/en-gb-oxendict/topics/technical-debt/) — コードベースにおける元本、利息、慢性疾患の経済学
- [総所有コスト(TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — 保守が50〜80%を占める。ソフトウェアにおける薬価の素朴な誤り
- [クラウドユニットエコノミクス(FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — 出力単位あたりの費用。デジタルサービスの基準コスト
- [セント単位で正確なコスト配分](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — 最大剰余法 — 各部分が合計にちょうど戻るように総額を分割する
- [通貨安全なコスト集計](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — 1セント単位で一致すべき合計には`f64`ではなく正確な10進の`Money`を
- [内製か購入か](locales/en-gb-oxendict/topics/build-vs-buy/) — 遅延の項を価格に組み込んだリスク調整済み比較
- [便益実現管理](locales/en-gb-oxendict/topics/benefits-realization/) — 予測された便益が実際に生じたかを監査する
- [GDSサービス指標](locales/en-gb-oxendict/topics/gds-service-metrics/) — 取引あたりの費用、満足度、完了率、利用率

## AI加速

- [AI開発者生産性](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT 対 METR RCT。有効性 対 効果
- [AIの投資収益率](locales/en-gb-oxendict/topics/ai-return-on-investment/) — 「95%が成果なし」という発見と、成功した5%が何を違えたか
- [推論ユニットエコノミクス](locales/en-gb-oxendict/topics/inference-unit-economics/) — トークンあたりの費用、そして絶え間ない価格下落のモデル化
- [AI品質指標](locales/en-gb-oxendict/topics/ai-quality-metrics/) — 幻覚率を、価格の付いた害の発生率として捉える
- [臨床AI評価](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — 感度、特異度、AUROC、そして有病率がなぜ経済性を支配するか
- [AI規制評価](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDAのSaMD、PCCP、モデル更新の経済学

## 消費者向け健康アプリとデバイス

- [エンゲージメント指標](locales/en-gb-oxendict/topics/engagement-metrics/) — 臨床的な用量としてのエンゲージメント
- [継続率と解約率](locales/en-gb-oxendict/topics/retention-and-churn/) — 減衰の法則。治療期間としての継続曲線
- [アクティベーションと普及率](locales/en-gb-oxendict/topics/activation-and-uptake/) — 価値のファネルの入口
- [アドヒアランスと継続](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR、PDC、有効なエンゲージメント、最小有効用量
- [患者報告アウトカム](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM、PREM、そしてMCIDという誠実さの基準
- [デジタルエンドポイントとバイオマーカー](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — センサーのテレメトリから規制当局が認めるエビデンスへ
- [ウェアラブルの妥当性検証](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE、一致度の統計、装着時間、完全性
- [遠隔患者モニタリングの経済学](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPTコードの積み上げと在宅入院への代替
- [健康アプリのユニットエコノミクス](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC、LTV、PMPM、そしてROI 対 VOI
- [リーチと公平性](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM。集団への影響 = リーチ × 有効性
- [集中度指数](locales/en-gb-oxendict/topics/concentration-index/) — 社会経済的な健康の不平等を測る正式な統計指標

## 基準値の鮮度

引用される数値の多くは毎年更新されます(NHSの単位費用、支払制度の価格、DORAクラスター、DiGAの件数、LLMの価格)。各文書は基準値の日付を本文中に記載しています。実際のビジネスケースで使用する前に再確認してください。

## Claude Skills

このリポジトリには2つの[Claude Skills](https://code.claude.com/docs/en/skills)が同梱されています — プロジェクトの`.claude/skills/`にいずれかを配置するか(またはこのリポジトリの`skills/`をClaudeに指定して)、エージェント型コーディングセッション内でこの書籍を直接活用できます:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — 一般利用向け:概念を説明したり、自分の数値から指標を計算したり、この書籍の数式・計算例・落とし穴に基づいた複数指標のビジネスケースを組み立てたりできます。汎用的な知識ではなく、この書籍の内容に基づいています。
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — このリポジトリのメンテナー向け:トピックごとのテンプレート、READMEのインデックス作成規則、トピックの追加・編集時のリンク・同期検証チェックリストです。
