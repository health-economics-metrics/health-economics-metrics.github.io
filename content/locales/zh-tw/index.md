# 健康經濟學指標

一份全面介紹健康經濟學數學、案例與推理方法的指南，面向為全球各國醫療服務機構開發軟體的工程師。每篇檔案涵蓋一個指標或概念：定義、為何重要、數學計算、一個實例解析、與軟體工程的關聯、常見誤區，以及參考來源。

剛接觸這裡？從[機會成本](locales/en-gb-oxendict/topics/opportunity-cost/)、[品質調整生命年](locales/en-gb-oxendict/topics/quality-adjusted-life-year/)和[延遲成本](locales/en-gb-oxendict/topics/cost-of-delay/)開始 —— 其餘一切都建立在這三個概念之上。

## 經濟推理基礎

- [機會成本](locales/en-gb-oxendict/topics/opportunity-cost/) — 被放棄的最佳替代方案的價值；為何固定預算讓每一次選擇都成為一種置換
- [貼現與時間偏好](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — 現值計算，Green Book/NICE 的 3.5% 折現率
- [分析視角](locales/en-gb-oxendict/topics/analysis-perspective/) — 支付方 vs 提供方 vs 社會：誰的成本才算數
- [時間範圍](locales/en-gb-oxendict/topics/time-horizon/) — 成本與效果應計算多長時間，以及時間跨度上的博弈
- [邊際成本與平均成本](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — 為何騰出一張病床並不能節省其平均成本
- [現金釋放型與非現金釋放型節省](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — 對任何"節省時間"說法的誠實檢驗
- [敏感性分析](locales/en-gb-oxendict/topics/sensitivity-analysis/) — 龍捲風圖；哪個假設決定了你的論證
- [機率敏感性分析（PSA）](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — 蒙特卡洛模擬、CEAC、正確的機率
- [完美資訊期望價值（EVPI）](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — 在運作試點之前先為其定價
- [樣本資訊期望價值 (Expected Value of Sample Information, EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — 評估*某一項具體擬議研究*，而不是消除全部不確定性
- [實物期權估值 (Real Options Valuation)](locales/en-gb-oxendict/topics/real-options-valuation/) — 為日後擴張分階段專案的期權定價，而不是為先收集資訊的期權定價
- [人力資本法與摩擦成本法 (Human Capital vs Friction Cost)](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — 為損失的生產率估值的兩種方法，報告的成本相差 2 倍或更多
- [佔優關係與效率前沿](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — 剔除任何人都不應選擇的方案

## 結果衡量指標

- [品質調整生命年（QALY）](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — 健康價值的通用貨幣
- [傷殘調整生命年（DALY）](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — 疾病負擔一側的映象；全球衛生的指標
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — 支撐大多數 QALY 效用權重的工具
- [時間權衡效用獲取法 (Time Trade-Off Utility Elicitation, TTO)](locales/en-gb-oxendict/topics/time-trade-off-utility/) — 效用權重究竟是如何從受訪者那裡獲取的
- [增量成本效果比（ICER）](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — 每多獲得一單位健康所需的額外成本
- [支付意願閾值](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE 的每 QALY 2 萬至 3 萬英鎊，以及世界其他地區的標準線
- [統計生命價值 (Value of a Statistical Life, VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — 基於勞動力市場的、與按閾值估值相對的替代方法
- [淨貨幣效益（NMB）](locales/en-gb-oxendict/topics/net-monetary-benefit/) — 價值減去成本，正確地計算
- [獲得的生命年（LYG）](locales/en-gb-oxendict/topics/life-years-gained/) — 生存數學，以及體現公平性的 evLYG 變體
- [健康調整預期壽命（HALE）](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — 人群層面的健康年數核算
- [QALY缺口與嚴重程度調整因子](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — 為何病情更重人群的 QALY 應計入更多權重
- [工作效率與活動受損量表 (Work Productivity and Activity Impairment, WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — 缺勤與出勤但效率下降，成本中隱蔽的那一半

## 經濟分析型別

- [成本效果分析（CEA）](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — 每一自然結果單位的成本
- [成本效用分析（CUA）](locales/en-gb-oxendict/topics/cost-utility-analysis/) — 每 QALY 的成本；比較不同型別的介入措施
- [成本效益分析（CBA）](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — 一切折算為金錢；Green Book 淨現值
- [成本最小化分析（CMA）](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — 在證明等效性之後選擇最便宜的方案
- [成本後果分析（CCA）](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — 分項列示的表格；NICE 對數位健康的偏好方法
- [預算影響分析（BIA）](locales/en-gb-oxendict/topics/budget-impact-analysis/) — 可負擔性，有別於價值本身
- [投資回報率（ROI）](locales/en-gb-oxendict/topics/return-on-investment/) — 共用的指標，附帶明確宣告的引數
- [社會投資回報率（SROI）](locales/en-gb-oxendict/topics/social-return-on-investment/) — 為市場未定價的事物賦予貨幣價值
- [跨幣種 ICER 比較 (Cross-Currency ICER Comparison)](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPP 與市場匯率；可能顛覆採納決定的換算選擇

## 衛生系統營運經濟學

- [節省的床位天數](locales/en-gb-oxendict/topics/bed-days-saved/) — 最主要的收益型別，及其估值陷阱
- [住院時長（LOS）](locales/en-gb-oxendict/topics/length-of-stay/) — 醫院的週期時間
- [再入院率](locales/en-gb-oxendict/topics/readmission-rate/) — 衛生系統的變更失敗率
- [爽約率（DNA率）](locales/en-gb-oxendict/topics/did-not-attend-rate/) — 爽約的預約；最純粹的浪費指標
- [急診就診避免](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — 上游介入的經濟學
- [全國統一收費標準與單位成本](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — NHS 價目表與成本核算基礎設施
- [轉診至治療（RTT）](locales/en-gb-oxendict/topics/referral-to-treatment/) — 作為等待時間指標的 18 周標準
- [等候名單影響](locales/en-gb-oxendict/topics/waiting-list-impact/) — 將節省的時間轉化為已就診的病患
- [從業者時間](locales/en-gb-oxendict/topics/practitioner-time/) — 評估瓶頸產能的價值，而非工資
- [人才留任](locales/en-gb-oxendict/topics/workforce-retention/) — 人員流失成本與職業倦怠經濟學
- [可規避的外包成本](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — 將溢價外包工作收回自營
- [下游資源最佳化](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — 疏通人人都在等待的那個環節
- [更早介入](locales/en-gb-oxendict/topics/earlier-intervention/) — 在病情進展前介入的經濟學
- [創造價值的產能（營運扭轉）](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — 無需招聘即可鑄造產能
- [硬性現金釋放型節省（赤字防線）](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — 刪除預算科目；財務總監的指標

## 衛生技術評估框架與預防經濟學

- [衛生技術評估（HTA）](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE、ICER（美國）、CADTH：誰來決定什麼值得購買
- [馬爾可夫佇列模擬 (Markov Cohort Simulation)](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — 多週期 HTA 模型究竟如何模擬，逐佇列、逐週期
- [NICE證據標準框架（ESF）](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — 面向數位健康、按風險分級的證據要求
- [德國DiGA快速通道](locales/en-gb-oxendict/topics/diga-fast-track/) — 可憑處方使用的應用；附帶證據截止日期的臨時收錄
- [需治療人數（NNT）](locales/en-gb-oxendict/topics/number-needed-to-treat/) — 讓說法保持誠實的單位效益投入量
- [人群歸因分數 (Population Attributable Fraction, PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — 就疾病負擔而言，一個危險因素值得多大力度去對抗
- [預防經濟學](locales/en-gb-oxendict/topics/prevention-economics/) — 為何預防具有成本效益，卻很少能真正節省開支
- [篩查經濟學](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner 標準、低患病率下陽性預測值的崩塌、警報疲勞
- [需要篩查人數 (Number Needed to Screen, NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — NNT 在篩查專案層面的對應物
- [規避的下游成本](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — 成本抵消及使其可信的規則
- [多準則決策分析 (Multi-Criteria Decision Analysis, MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — 單一閾值不夠用時的加權評分
- [每 QALY 碳足跡 (Carbon Footprint per QALY)](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — NHS 的淨零承諾遇上每 QALY 成本

## 軟體工程與數位化交付

- [延遲成本（CoD）](locales/en-gb-oxendict/topics/cost-of-delay/) — 未交付的每週英鎊成本或每週 QALY 損失；核心的橋接指標
- [DORA指標](locales/en-gb-oxendict/topics/dora-metrics/) — 交付績效，轉譯為健康經濟學術語
- [流動指標](locales/en-gb-oxendict/topics/flow-metrics/) — 利特爾法則、在製品（WIP）、流動效率；醫院與研發流水線共用的排隊數學
- [WSJF與CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — 按價值密度排定優先順序；將待辦事項列表變成 QALY 排行榜
- [SPACE與開發者體驗（DevEx）](locales/en-gb-oxendict/topics/space-and-devex/) — 多維度的生產力；EQ-5D 給工程指標的啟示
- [技術債務](locales/en-gb-oxendict/topics/technical-debt/) — 本金、利息，以及適用於程式碼庫的慢性病經濟學
- [總擁有成本（TCO）](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — 維護成本佔 50%–80%；將藥品定價的天真誤區套用到軟體上
- [雲單位經濟學（FinOps）](locales/en-gb-oxendict/topics/cloud-unit-economics/) — 每單位產出的成本；數位服務的參考成本
- [精確到分的成本分攤 (Exact-Cents Cost Allocation)](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — 最大餘數分攤；拆分總額，使各份恰好加回總額
- [幣種安全的成本彙總 (Currency-Safe Cost Rollup)](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — 用精確十進位制 `Money` 而非 `f64`，處理必須對到分的總額
- [自建與外購](locales/en-gb-oxendict/topics/build-vs-buy/) — 計入延遲成本項的風險調整比較
- [效益兌現](locales/en-gb-oxendict/topics/benefits-realization/) — 審計預測的收益是否真正實現
- [GDS服務指標](locales/en-gb-oxendict/topics/gds-service-metrics/) — 每筆交易成本、滿意度、完成率、使用率

## 人工智慧加速

- [AI與開發者生產力 (AI Developer Productivity)](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot 的隨機對照試驗 vs METR 的隨機對照試驗；效力與實際效果的差異
- [AI投資回報率](locales/en-gb-oxendict/topics/ai-return-on-investment/) — 95% 無回報的結論，以及那 5% 做對了什麼
- [推理單位經濟學](locales/en-gb-oxendict/topics/inference-unit-economics/) — 每 token 的成本，以及對價格持續下跌的建模
- [AI品質指標](locales/en-gb-oxendict/topics/ai-quality-metrics/) — 將幻覺率視為一種有價格的傷害率
- [臨床AI評估](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — 敏感度、特異度、AUROC，以及為何患病率主導著經濟學結果
- [AI監管評估](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA 的 SaMD、PCCP，以及模型更新的經濟學

## 消費者健康應用與裝置

- [參與度指標](locales/en-gb-oxendict/topics/engagement-metrics/) — 把參與度當作一種臨床劑量
- [留存與流失](locales/en-gb-oxendict/topics/retention-and-churn/) — 流失法則；將留存曲線視為治療視窗
- [啟用與採納 (Activation and Uptake)](locales/en-gb-oxendict/topics/activation-and-uptake/) — 價值漏斗的前端入口
- [依從性與持續性 (Adherence and Persistence)](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR、PDC、有效參與度、最小有效劑量
- [病患報告結果（PROM、PREM、MCID）](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM、PREM，以及 MCID 這道誠實門檻
- [數位終點與生物標誌物](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — 從感測器遙測資料到達到監管級別的證據
- [可穿戴裝置驗證](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE、一致性統計、佩戴時長、資料完整性
- [遠端病患監測經濟學](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT 編碼組合與居家醫院替代方案
- [健康應用單位經濟學](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC、LTV、PMPM，以及 ROI 與 VOI 的對比
- [觸達與公平](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM；人群影響 = 覆蓋率 × 有效性
- [集中指數 (Concentration Index)](locales/en-gb-oxendict/topics/concentration-index/) — 衡量社會經濟健康不平等的正式統計量

## 基準資料的時效性

許多引用的數位每年都會更新（NHS 單位成本、支付方案價格、DORA 分組、DiGA 數量、LLM 價格）。每篇檔案都在正文中標註了其基準資料的日期；在實際業務案例中使用前請重新核實。

## Claude 技能

本倉庫提供兩個 [Claude 技能](https://code.claude.com/docs/en/skills) —— 將其中任意一個放入專案的 `.claude/skills/`（或讓 Claude 指向本倉庫的 `skills/`），即可在智慧體程式設計會話中直接呼叫本書：

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) —— 用於一般用途：解釋一個概念、根據你自己的數位計算某個指標，或組建一個多指標的業務案例，依據的是本書的公式、實例解析和常見誤區，而非泛泛的記憶。
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) —— 用於本倉庫的維護者：按主題的模板、README 索引規範，以及新增或編輯主題時的連結/同步校驗清單。
