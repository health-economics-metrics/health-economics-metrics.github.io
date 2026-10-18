# Tathmini ya Teknolojia ya Afya (HTA)

HTA ni mchakato rasmi, wa kitaasisi ambao mifumo ya afya huamua kama teknolojia — dawa, kifaa, au programu — inastahili kulipiwa. Huchanganya ushahidi wa ufanisi wa kikliniki na tathmini ya kiuchumi chini ya mbinu iliyochapishwa na ya lazima.

## Kwa nini ni muhimu

Ukiuza kwa huduma ya afya ya taifa, chombo cha HTA kinaweza kuamua kihalisi upatikanaji wako wa soko. Kujua mchakato wa ndani ni kumjua mdhibiti wako halisi wa thamani:

- **NICE (Uingereza)**: tathmini za kisheria chini ya *kesi ya rejea* iliyofafanuliwa — QALY kutoka [EQ-5D](../eq-5d/), [mtazamo](../mtazamo-wa-uchambuzi/) wa NHS+PSS, [kupunguza thamani](../kupunguza-thamani-na-upendeleo-wa-muda/) kwa 3.5%, [PSA](../uchambuzi-wa-unyeti-wa-uwezekano/) inahitajika — kuhukumiwa dhidi ya £20k–£30k/QALY na [virekebishaji vya ukali](../upungufu-wa-qaly-na-virekebishaji-vya-ukali/); teknolojia maalum sana hadi £100k+ kwa kupimwa.
- **ICER (Marekani, isiyo ya serikali)**: ripoti za ushahidi zenye *kigezo cha bei ya manufaa ya afya* — bei ambayo bidhaa ingekuwa na ufanisi wa gharama kwa $100k–$150k kwa kila QALY/evLYG — kinatumika kama nguvu ya mazungumzo; pamoja na "tahadhari za uwezo wa kumudu" za athari za bajeti.
- **Kanada (CADTH → CDA-AMC)**: mapitio ya urejeshaji kwa ≈CAD$50k/QALY; kihistoria iliomba kupunguzwa kwa bei katika ~95% ya mawasilisho.

## Hisabati

Nguvu ya HTA si fomula bali **mbinu ya lazima**: kila uwasilishaji hukokotoa [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/) ileile chini ya kanuni zilezile za kesi ya rejea, kwa hivyo matokeo yanalinganishika kati ya bidhaa na miaka. Kesi ya rejea inabainisha kipimo cha matokeo, chombo cha matumizi, mtazamo, uchaguzi wa kilinganishi, kiwango cha punguzo, upeo wa muda, na uchambuzi wa kutokuwa na uhakika — ikiondoa kila daraja la uhuru ambalo mdhamini angeweza kulichezea.

## Mfano uliokokotolewa

Tiba ya kidijitali inawasilisha kwa tathmini ya mtindo wa NICE:

```
Modeli: ΔC = +£450/mgonjwa, ΔE = +QALY 0.03 → ICER = £15,000/QALY ✓ chini ya £20k
Ukaguzi wa kesi ya rejea:
  matumizi kutoka EQ-5D-5L na seti ya thamani ya Uingereza    ✓
  kilinganishi = njia ya sasa ya huduma (si "hakuna matibabu") ✓
  PSA: uwezekano wa 71% wa ufanisi wa gharama kwa £20k         ✓ (imeripotiwa)
  kirekebishaji cha ukali: chini ya mipaka ya ×1.2              — hakuna kilichodaiwa
Pendekezo: uagizaji wa kawaida, pamoja na ukusanyaji wa data ya ulimwengu halisi.
```

Uchambuzi unaopendelewa na mdhamini mwenyewe ulionyesha £9,000/QALY; kesi ya rejea iliusukuma hadi £15,000 kwa kulazimisha kilinganishi cha uaminifu. Pengo hilo ndilo *sababu* kesi za rejea zipo.

## Uhusiano na uhandisi wa programu

Kitu kinachohamishika ni **kesi ya rejea ya ndani**: mbinu moja ya lazima kwa hoja zote za biashara za zana/jukwaa — kilinganishi kilichotangazwa, gharama sanifu za kitengo (tazama [ushuru wa kitaifa na gharama za kitengo](../ushuru-wa-kitaifa-na-gharama-za-kitengo/) kwa muundo), kiwango cha punguzo kisichobadilika, uchambuzi wa unyeti unaohitajika, kiolezo sanifu. "Waraka wa AMCP kwa zana" unaowasilishwa kwa baraza la jukwaa hufanya mapendekezo yalinganishike na michezo ionekane, hasa kama HTA inavyofanya kwa tiba. Anza kidogo kuliko NICE ilivyofanya: kiolezo cha kurasa mbili pamoja na kitabu cha bei kilichochapishwa kinashinda kutokuwa na kiwango kabisa.

Kwa jinsi modeli ya HTA ya mizunguko mingi inavyoigizwa kweli kundi kwa kundi mzunguko kwa mzunguko, tazama [uigaji wa kundi wa Markov](../uigaji-wa-kundi-wa-markov/).

## Mitego

- **Kuchukulia HTA kama utaratibu tu baada ya idhini ya udhibiti** — idhini ya CE/UKCA/FDA inasema bidhaa ni salama; HTA huamua kama *inastahili kununuliwa*. Kikwazo tofauti, ushahidi tofauti.
- **Kujenga modeli ya kiuchumi baada ya jaribio** — uzalishaji wa ushahidi unapaswa kusanifiwa kinyume nyuma kutoka mahitaji ya kesi ya rejea.
- **Kupuuza tofauti za mamlaka**: ICER inayoweza kufadhiliwa nchini Marekani kwa $120k/QALY inashindwa NICE kwa £30k; panga ushahidi na bei kwa kila soko.

## Vyanzo

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
