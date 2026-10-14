# Faida ya Uwekezaji katika AI

ROI ya AI ni faida inayoweza kupimwa ya faida-na-hasara inayohusishwa na mipango ya AI. Kigezo cha kusikitisha: utafiti wa MIT wa 2025 "GenAI Divide" uligundua kwamba licha ya uwekezaji wa makampuni wa dola bilioni 30–40 katika GenAI, **~95% ya majaribio hayakuonyesha faida yoyote inayoweza kupimwa** — na 5% yaliyofanikiwa yalishiriki tabia zinazotambulika.

## Kwa nini ni muhimu

Mifumo ya afya ina jina la muundo wa majaribio ya AI: **pilotitis** — makaburi ya NHS ya programu zenye matumaini zinazojaribiwa milele na hazipanuliwi kamwe. Matokeo ya MIT yanalingana wazi na yale ambayo tathmini ya teknolojia ya afya tayari inajua: madai ya thamani yanahitaji vigezo vya mwisho vilivyoainishwa mapema, uhusishaji unahitaji vilinganishi, na "kila mtu anahisi inasaidia" si mstari wa manufaa. Wachache waliofanikiwa katika data ya MIT walijikita katika otomatiki ya ofisi ya nyuma yenye misingi ya gharama inayofuatilika, na **zana zilizonunuliwa zilifanikiwa ~67% ya wakati dhidi ya ujenzi wa ndani kwa takriban theluthi ya hiyo** — maarifa ya awali yanayostahili kuwemo katika kila hoja ya uwekezaji wa AI (tazama [kujenga au kununua](../kujenga-au-kununua/)).

## Hisabati

```
ROI ya AI = (manufaa yanayohusishwa − jumla ya gharama ya AI) / jumla ya gharama ya AI

Jumla ya gharama ya AI = leseni/makisio (tazama inference-unit-economics.md)
              + uunganishaji + utayari wa data + tathmini
              + usanifu upya wa mtiririko wa kazi + utawala/uhakikisho
              (leseni kwa kawaida ni sehemu ndogo ya kigawanyo)

Manufaa yanayohusishwa: hupimwa dhidi ya msingi au udhibiti, yakiainishwa
kama fedha taslimu / uwezo / ubora kulingana na cash-releasing-vs-non-cash-releasing.md
```

## Mfano uliokokotolewa

Kundi la hospitali linaweka AI katika matumizi mawili:

```
Matumizi A — kuandaa barua za kikliniki (ofisi ya nyuma, inafuatilika):
  msingi: unukuzi wa nje £380k/mwaka
  baada:  mkataba wa unukuzi umefutwa; muda wa mapitio ya daktari +£60k
  gharama ya AI: £120k/mwaka kwa jumla
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — inatoa fedha taslimu, inakaguliwa ✓

Matumizi B — "msaidizi wa AI kwa madaktari" (mpana, usiofuatiliwa):
  dai la manufaa: "huokoa muda kwa wafanyakazi 4,000" — hakuna msingi uliokusanywa
  athari ya faida-na-hasara iliyopimwa: hakuna inayoweza kuonyeshwa
  → kikapu cha 95%, bila kujali kama kweli inasaidia
```

Tofauti si ubora wa AI — ni kama manufaa yalikuwa na **msingi, mmiliki, na mstari wa bajeti** ([utimizaji wa manufaa](../utimizaji-wa-manufaa/)).

## Uhusiano na uhandisi wa programu

Kitabu cha mbinu chenye umbo la HTA kwa uwekezaji wa AI: **panga ushahidi kwa hatua kama [ngazi za NICE ESF](../mfumo-wa-viwango-vya-ushahidi-vya-nice/)** — ushahidi wa kiwango cha maonyesho kwa zana za hatari ndogo, majaribio yaliyodhibitiwa kabla ya matumizi ya shirika zima, huku milango ya kusambaza ikisajiliwa mapema (muundo wa [DiGA](../njia-ya-haraka-ya-diga-ya-ujerumani/) wa orodha ya muda yenye tarehe ya mwisho); **hesabu kuepuka gharama jinsi uchumi wa afya unavyohesabu kuepuka mahitaji** — halisi pale tu mstari mahususi wa bajeti unaposogea; na **weka bei ya jaribio lenyewe kwa [EVPI](../thamani-inayotarajiwa-ya-taarifa-kamilifu/)** — jaribio lisiloweza kubadilisha uamuzi wa usambazaji lina thamani ya £0. Kwa sehemu ya zana za wasanidi hasa, tazama [tija ya wasanidi kwa AI](../tija-ya-wasanidi-programu-kwa-kutumia-ai/).

## Mitego

- **Kusambaa kwa manufaa**: thamani iliyotandazwa nyembamba kwa maelfu ya watumiaji haiwezi kupimika kwa ujenzi wake; chagua matumizi yenye misingi iliyokolea na inayofuatilika.
- **Kuhesabu leseni pekee**: uunganishaji, tathmini, na usanifu upya wa mtiririko wa kazi kwa kawaida hutawala kigawanyo halisi.
- **Wizi wa uhusishaji**: AI iliyowekwa pamoja na usanifu upya wa mchakato hudai tofauti nzima.
- **Kupandisha majaribio yaliyozama**: kuongeza muda wa majaribio yaliyoshindwa kwa sababu kusimamisha ni kukubali kushindwa — tarehe ya kuzima lazima ikubaliwe mapema.

## Vyanzo

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
