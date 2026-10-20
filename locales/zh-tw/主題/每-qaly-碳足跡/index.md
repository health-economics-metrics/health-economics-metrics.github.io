# 每 QALY 碳足跡 (Carbon Footprint per QALY)

每 QALY 碳排放是一個效率比率：某項介入的碳排放（或其避免的排放）除以它所產生的 QALY。它與每 QALY 成本直接對應，使碳效率可以與成本效率並列評估。“碳調整 NMB”再進一步：用英國 Green Book 官方的非市場碳價把碳影響貨幣化，再從標準的[淨貨幣效益](../淨貨幣效益/)中扣除。

## 為什麼重要

NICE 和 NHS England 現在期望在成本和 QALY 之外同時考慮環境影響。NHS 有公開的淨零排放承諾：2040 年前實現直接排放淨零，2045 年前實現整個供應鏈足跡淨零。NICE 的衛生技術評估手冊（PMG36）把環境可持續性列為評估技術時正在出現的考慮因素。對數位健康產品而言，這意味著碳正在成為價值論證的第四根支柱，與成本、QALY 和[效率前沿上的優勢](../佔優關係與效率前沿/)並列：它不取代其中任何一項，而是一個好的商業案例越來越需要報告的維度。

## 計算方法

```
carbon_per_qaly = 總排放_噸_co2e / 總_qaly
  （負值表示每獲得一個 QALY 所避免的淨排放——
  雙贏：健康更好，碳更少）

貨幣化碳影響 = 排放_噸_co2e × 每噸碳價
  （負排放 × 正價格 = 負成本，即收益）

碳調整_NMB = 淨貨幣效益 − 貨幣化碳影響
```

這用第二條座標軸——每 QALY 碳排放——擴充套件了成本/QALY 效率前沿的思路，沿用[優勢與效率前沿](../佔優關係與效率前沿/)中“把每個備選方案畫出來，看哪個被支配”的邏輯，只是把成本換成了碳。

## 算例

一項遠距醫療服務取代面診，每年減少 5,000 次汽車出行，每次約 8 kg CO2e：避免 40 噸 CO2e，表示為負排放（−40.0 噸），並每年產生 25 個 QALY：

```
carbon_per_qaly = −40.0 / 25.0 = 每獲得 1 個 QALY 避免 1.6 噸 CO2e
```

採用 Green Book 的非市場碳價（示意數位，2023 年非市場中心值約 £269/噸 CO2e；Green Book 每年更新碳價，在真實分析中引用前請重新核對）：

```
貨幣化碳影響 = −40.0 × £269 = −£10,760
```

負的“成本”−£10,760 就是 £10,760 的收益。若該介入自身的淨貨幣效益為 £500,000：

```
碳調整_NMB = £500,000 − (−£10,760) = £510,760
```

碳節約增強而不是削弱論證——這正是負排放框架要讓人看見的雙贏。

## 與軟體工程的關聯

這是與 AI 和雲經濟學當下的交匯點：用於訓練和運作 AI 模型的算力所產生的碳足跡，已經是 NHS 採購中的實際專案，因為超過一定門檻的 NHS 供應商合同要求提交碳減排計劃（Carbon Reduction Plan）。[雲單位經濟學](../雲單位經濟學/)已經在追蹤每單位算力產出的成本；每 QALY 碳排放是未來“每次推理碳成本”指標的天然模板，它會把該模組和推理的單位經濟學延伸到環境維度，儘管這一指標目前尚不存在。

## 陷阱

- **玩弄系統邊界**：只計直接排放（範圍 1），排除供應鏈排放（範圍 3），而後者往往是數位健康產品真實足跡的大頭。
- **使用過時的碳價**：Green Book 每年更新非市場碳價，因此所引用的 £/噸數位必須註明日期，不能當作常數呈現。
- **把“碳節約”當作“成本效果”的替代**：低排放但價值低的介入依然是對 NHS 資源的糟糕使用。碳是與成本和 QALY 並列的第四根支柱，不是其中任何一項的替代品。

## 參考來源

- NHS England, "Delivering a Net Zero National Health Service" (2020, 2022 年更新). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance（每年更新；非市場中心值約 £269/tCO2e，2023——每次引用都應註明日期）. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
