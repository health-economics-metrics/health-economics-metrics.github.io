# Sjúklingatilkynntar útkomur (PROM, PREM, MCID)

PROM eru staðlað mælitæki þar sem sjúklingar tilkynna eigin heilsuástand (einkenni, færni, lífsgæði); PREM fanga *upplifun* af umönnun. **MCID** — minnsti klínískt mikilvægi munur — er minnsta stigabreyting sem sjúklingar skynja í raun sem ávinning: þröskuldurinn sem sérhver fullyrt bati verður að fara yfir.

## Hvers vegna það skiptir máli

PROM eru aðalvirknigjaldmiðill stafrænnar heilsu: öpp hreyfa sjaldan dánartíðni, en þau geta á trúverðugan hátt hreyft staðfest einkennastig. Mælitækin sem skipta máli eru fá og stöðluð — **PHQ-9** (þunglyndi, 0–27; alvarleikabönd við 5/10/15/20), **GAD-7** (kvíði, 0–21; bönd við 5/10/15), **EQ-5D** (nytjar fyrir [QALY](../gæðaleiðrétt-lífár/)) — og eftirlitsaðilar, HTA-stofnanir og greiðendur taka þau gild einmitt því þau eru sambærileg milli vara og rannsókna. MCID er heiðarleikahliðið: MCID PHQ-9 ≈ 5 stig, GAD-7 ≈ 4, EQ-5D-vísitala algengt ~0,03–0,08 — tölfræðilega marktæk 1,5 stiga breyting á PHQ-9 í stóru úrtaki er *raunveruleg en klínískt þýðingarlaus*, og rýnandi sönnunargagna mun segja það.

## Stærðfræðin

```
PROM-stigagjöf: mælitækissértækar summur (t.d. PHQ-9 = Σ 9 liðir × 0–3)

MCID-mat:
  akkerisbyggt:        stigabreyting meðal sjúklinga sem tilkynna „nokkuð betri“
  dreifingarbyggt:     ≈ 0,5 × SD grunnstiga (gróf þumalputtaregla)

Rammi svarhlutfalls (fyrir rannsóknir og skjöl):
  svarandi = sjúklingur sem batnar ≥ MCID (eða ≥50% samkvæmt venju PHQ-9)
  NNT = 1 / (svarhlutfall_meðferð − svarhlutfall_viðmið)
  — sjá number-needed-to-treat.md
```

## Dæmi útreiknað

App til stuðnings við þunglyndi, RCT gegn biðlista, 12 vikur:

```
PHQ-9 breyting: app −6,2 stig, viðmið −2,1 → leiðréttur munur −4,1
MCID-athugun: 4,1 < 5 → meðalmunur undir MCID; skýrðu frá svarendum í staðinn:
  svarendur (≥5 stiga lækkun): app 48%, viðmið 22% → ARR 26%
  NNT = 1/0,26 ≈ 4 — fjórir notendur meðhöndlaðir á hvert viðbótarklínískt svar

Hagfræðibrú: EQ-5D-ávinningur svarenda 0,06 viðhaldið 6 mánuði
  = 0,03 QALY; á 1.000 notendur: 260 aukasvarendur × 0,03 = 7,8 QALY
  ≈ 156.000–234.000 £ af heilsuverðmæti við þröskulda NICE
```

Rammi svarenda/NNT lifir af rýni þar sem meðalmunur undir MCID hefði verið vísað frá.

## Tengsl við hugbúnaðarverkfræði

PROM eru gagnasöfnunarvandi sem hugbúnaður er einstaklega vel staðsettur til að leysa: mælitæki í appi fá lokahlutfall og lengdarþéttleika sem pappír náði aldrei, og breyta venjulegri vörumælingu í sönnunargögn af HTA-gráðu ([EQ-5D](../eq-5d/) eru fimm skjáir). Verkfræðireglur: notaðu staðfesta mælitækið *orðrétt* (að umorða ógildir það — leyfi gilda); tímasettu mælingu eftir bókun, ekki þægindum þátttöku (að mæla aðeins virka notendur er lifendaskekkja — sjá [varðveisla](../varðveisla-og-brottfall/)); og útgáfulæstu mælitækisgögn eins og hvaða skema sem er — orðalagsbreyting í miðri rannsókn er gagnaskemmd. PREM varpast á CSAT/NPS-mælitæki, og sami lærdómur gildir: staðlað slær heimasmíðað hvar sem áhorfandinn er greiðandi. Fyrir framleiðnisértækt mælitæki, sjá [WPAI](../skerðing-vinnuframleiðni-og-athafna/).

## Gildrur

- **Tölfræðileg marktækni undir MCID** sett fram sem klínískur ávinningur — algengasta uppblásturinn í greininni.
- **Hverfing til meðaltals**: notendur skrá sig á einkennatoppum; eins hóps fyrir/eftir ofmetur stórlega — viðmið eru óumsemjanleg.
- **Mælitækjaverslun**: að keyra PHQ-9, GAD-7 og WHO-5 og skýra frá því sem hreyfðist — skráðu aðalmælikvarðann fyrirfram.
- **Þrýstingur í samþykkiskönnun í stafrænu umhverfi**: að ýta notendum að hagstæðum svörum skemmir mælitækið (og rýnendur þekkja grunntíðnina).

## Heimildir

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
