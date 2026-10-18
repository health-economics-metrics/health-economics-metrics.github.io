# Matokeo Yanayoripotiwa na Mgonjwa (PROM, PREM, MCID)

PROM ni vyombo sanifu ambapo wagonjwa huripoti hali yao ya afya (dalili, utendaji, ubora wa maisha); PREM hunasa *uzoefu* wa huduma. **MCID** — tofauti ndogo muhimu ya kikliniki — ni badiliko dogo zaidi la alama ambalo wagonjwa hulihisi kweli kuwa na manufaa: kigezo ambacho uboreshaji wowote unaodaiwa lazima uvuke.

## Kwa nini ni muhimu

PROM ndizo sarafu kuu ya ufanisi kwa afya ya kidijitali: programu mara chache husogeza vifo, lakini zinaweza kusogeza alama za dalili zilizothibitishwa kwa kuaminika. Vyombo vinavyohusika ni vichache na sanifu — **PHQ-9** (unyogovu, 0–27; bendi za ukali kwa 5/10/15/20), **GAD-7** (wasiwasi, 0–21; bendi kwa 5/10/15), **EQ-5D** (matumizi kwa [QALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ubora/)) — na wadhibiti, mashirika ya HTA, na walipaji huvikubali hasa kwa sababu vinalinganishika kati ya bidhaa na majaribio. MCID ni lango la uaminifu: MCID ya PHQ-9 ≈ pointi 5, GAD-7 ≈ 4, kielezo cha EQ-5D kwa kawaida ~0.03–0.08 — badiliko la PHQ-9 la pointi 1.5 lenye umuhimu wa kitakwimu katika sampuli kubwa ni *halisi lakini halina maana kikliniki*, na mkaguzi wa ushahidi atasema hivyo.

## Hisabati

```
Kupa alama PROM: jumla mahususi za chombo (mf. PHQ-9 = Σ vipengele 9 × 0–3)

Ukadiriaji wa MCID:
  unaotegemea nanga:     badiliko la alama miongoni mwa wagonjwa wanaoripoti "bora kiasi"
  unaotegemea mgawanyo:  ≈ 0.5 × SD ya alama za msingi (kanuni ghafi ya kidole)

Mfumo wa kiwango cha mwitikio (kwa majaribio na nyaraka):
  mwitikiaji = mgonjwa anayeboreka ≥ MCID (au ≥50% kwa desturi ya PHQ-9)
  NNT = 1 / (kiwango cha mwitikio_matibabu − kiwango cha mwitikio_udhibiti)
  — tazama number-needed-to-treat.md
```

## Mfano uliokokotolewa

Programu ya msaada wa unyogovu, RCT dhidi ya orodha ya kusubiri, wiki 12:

```
Badiliko la PHQ-9: programu −pointi 6.2, udhibiti −2.1 → tofauti iliyorekebishwa −4.1
Ukaguzi wa MCID: 4.1 < 5 → tofauti ya wastani iko chini ya MCID; ripoti waitikiaji badala yake:
  waitikiaji (kushuka ≥pointi 5): programu 48%, udhibiti 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — watumiaji wanne wanatibiwa kwa kila mwitikio wa ziada wa kikliniki

Daraja la kiuchumi: faida ya EQ-5D ya waitikiaji 0.06 inayodumishwa miezi 6
  = QALY 0.03; kwa watumiaji 1,000: waitikiaji 260 wa ziada × 0.03 = QALY 7.8
  ≈ £156,000–£234,000 za thamani ya afya kwenye vizingiti vya NICE
```

Mfumo wa mwitikiaji/NNT unanusurika mapitio ambapo tofauti ya wastani iliyo chini ya MCID ingekataliwa.

## Uhusiano na uhandisi wa programu

PROM ni tatizo la ukusanyaji data ambalo programu iko katika nafasi ya kipekee ya kulitatua: vyombo vilivyo ndani ya programu hupata viwango vya ukamilishaji na msongamano wa muda mrefu ambao karatasi haikuwahi kufikia, vikibadilisha telemetria ya kawaida ya bidhaa kuwa ushahidi wa kiwango cha HTA ([EQ-5D](../eq-5d/) ni skrini tano). Kanuni za uhandisi: tumia chombo kilichothibitishwa *neno kwa neno* (kuandika upya kunakibatilisha — leseni zinatumika); panga upimaji kwa itifaki, si kwa urahisi wa ushiriki (kupima watumiaji amilifu pekee ni upendeleo wa walionusurika — tazama [kubaki](../kubaki-na-kuondoka/)); na funga toleo la data ya chombo kama skima yoyote — badiliko la maneno katikati ya utafiti ni uharibifu wa data. PREM zinaoana na vyombo vya mtindo wa CSAT/NPS, na funzo lilelile linatumika: sanifu hushinda ya kujitengenezea popote hadhira ni mlipaji. Kwa chombo mahususi cha tija ya kazi, tazama [WPAI](../kuharibika-kwa-tija-ya-kazi-na-shughuli/).

## Mitego

- **Umuhimu wa kitakwimu chini ya MCID** ukiwasilishwa kama manufaa ya kikliniki — ukuzaji wa kawaida zaidi katika uwanja huu.
- **Kurudi kwenye wastani**: watumiaji hujisajili kwenye kilele cha dalili; kabla/baada ya mkono mmoja hukuza sana — vilinganishi havina mjadala.
- **Kununua vyombo**: kuendesha PHQ-9, GAD-7, na WHO-5, kisha kuripoti kilichosogea — sajili cha msingi mapema.
- **Shinikizo la utafiti wa ridhaa ya kidijitali**: kuwasukuma watumiaji kwa majibu mazuri huharibu chombo (na wakaguzi wanajua viwango vya msingi).

## Vyanzo

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
