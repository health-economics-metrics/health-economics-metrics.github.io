# Landsgjaldskrá og einingakostnaður

NHS greiðir veitendum fyrir starfsemi samkvæmt reglubundinni landsbundinni verðskrá — sögulega National Tariff / Payment by Results, sem **NHS Payment Scheme (NHSPS)** leysti af hólmi 1. apríl 2023. Á bak við verðin situr landsbundnir innviðir einingakostnaðargreiningar: **National Cost Collection (NCC)** og samantekt **PSSRU Unit Costs of Health and Social Care**.

## Hvers vegna það skiptir máli

Þetta eru nefnarar sérhverra trúverðugra viðskiptarökum NHS. Þegar fullyrðing segir „göngudeildarkoma er 160 £ virði“ eða „klukkustund hjúkrunarfræðings á Band 6 kostar 31 £“ koma þessar tölur frá þessum innviðum — og að nota opinberar tölur frekar en tilbúnar er það sem gerir óháð mat sambærileg og fjármálateymi samvinnuþýð. Fyrir seljanda skilgreinir gjaldskráin líka *tekju*hliðina: starfsemi sem hugbúnaður þinn gerir mögulega (auka stofur, endurfyllt rúm) er metin á verðskrárverði.

## Stærðfræðin

```
Gjaldskrárverð á einingu starfsemi (HRG-kóðuð legutímabil, göngudeildarkoma)
  = landsmeðaltal einingakostnaðar (úr NCC) × Market Forces Factor (staðbundin leiðrétting)
  undir NHSPS: blandaðir fastir + breytilegir („aligned payment and incentive“) þættir

Einingakostnaður NCC = heildarkostnaður starfsemistegundar sem stofnun tilkynnir / magn starfsemi
                       (byggt á Patient-Level Information and Costing Systems, PLICS)

PSSRU-samantekt: ~80 staðlaðir einingakostnaðir (viðtal við heimilislækni, klukkustund
hjúkrunarfræðings eftir bandi, bráðamóttökukoma…) — sjálfgefin heimild í breskum hagfræðimötum.
```

## Dæmi útreiknað

Hugbúnaðurinn þinn losar 1 klukkustund á dag af tíma hjúkrunarfræðings á Band 6 á 250 daga vinnuári:

```
Kostnaður Band 6 samkvæmt PSSRU að meðtöldum yfirbyggingu ≈ 31 £/klst. (athugaðu gildandi útgáfu)
Getuverðmæti = 250 × 31 £ = 7.750 £/hjúkrunarfræðing/ár (ekki reiðufjárlosandi)
```

Að öðrum kosti sinnir hjúkrunarfræðingurinn 2 aukalegum göngudeildareftirfylgnitímum á dag á ~160 £ verðskrárverðmæti: 500 × 160 £ = **80.000 £/ár af fjármagnaðri starfsemi** — tífaldur munur á fullyrtu verðmæti eftir endurráðstöfun, allt úr opinberum einingakostnaði. Báðar fullyrðingar eru endurskoðanlegar því nefnararnir eru birtir; það er allur tilgangurinn.

## Tengsl við hugbúnaðarverkfræði

Þetta er mynstur **innri verðbókar**. Breska heilsuhagfræðin virkar því hvert mat notar sama birta einingakostnað; verkfræðistofnanir skortir þetta yfirleitt, svo hver viðskiptarök finna upp sinn eigin kostnað verkfræðingsstundar, atviks, dreifingar. Vettvangsteymi getur birt nákvæmlega slíka bók — fullhlaðinn kostnað á verkfræðingsstund eftir stigi, á atvik eftir alvarleika, á smíðamínútu — og krafist notkunar hennar í öllum tillögum. Gjaldfærslukerfi (chargeback/showback) endurtaka líka þekkta bilanahami gjaldskrárinnar: meðalkostnaðarverðlagning ýtir undir magnleiki, fastar greiðslur undir undirveitingu. Þróun NHSPS frá hreinni starfsemigreiðslu í blandaðar fastar+breytilegar greiðslur er tuttugu ára lærdómur um hvataumgjörð fyrir innri vettvangsverðlagningu.

## Gildrur

- **Úreltar tölur**: verð NCC, PSSRU og NHSPS endurnýjast árlega — dagsettu hverja tölu.
- **Gjaldskrárverð ≠ kostnaður**: verð eru landsmeðaltöl með leiðréttingum; staðbundinn jaðarkostnaður þinn er ólíkur (sjá [jaðarkostnaður á móti meðalkostnaði](../jaðarkostnaður-á-móti-meðalkostnaði/)).
- **Að meta getu á gjaldskrá án búnaðar** til að afhenda í raun og fá greitt fyrir auka starfsemina.

## Heimildir

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
