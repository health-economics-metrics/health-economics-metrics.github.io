# Uchumi wa Uchunguzi

Uchumi wa uchunguzi hutawala thamani ya kupima idadi ya watu wasio na dalili. Ukweli mkuu wa kihisabati: **kwa kuenea kwa ugonjwa kwa chini, hata vipimo bora hutoa hasa chanya za uongo** — na gharama ya chini ya mkondo ya kuzifuatilia inaweza kufunika manufaa ya matokeo ya kweli.

## Kwa nini ni muhimu

Tangu 1968, vigezo vya Wilson–Jungner vya WHO vimeweka kiwango cha uchunguzi wa idadi ya watu: hali lazima iwe muhimu, jaribio likubalike na liwe sahihi, matibabu yenye ufanisi lazima yawepo, na uchumi lazima ulingane. Kamati ya Kitaifa ya Uchunguzi ya Uingereza hutumia uchambuzi rasmi wa ufanisi wa gharama kabla ya kuidhinisha programu yoyote ya kitaifa — na hukataa mapendekezo mengi. Kila uwasilishaji wa "AI itachunguza kila mtu kwa kila kitu" hugonga mashine hii na kwa kawaida hushindwa na hesabu iliyo hapa chini.

## Hisabati

Thamani ya utabiri chanya (PPV) — uwezekano kwamba matokeo chanya ni halisi — huporomoka kwa kuenea kwa chini:

```
PPV = (unyeti × kuenea) / [unyeti × kuenea + (1 − umahususi) × (1 − kuenea)]

Mfano: unyeti 90%, umahususi 95%, kuenea 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Chanya kumi na moja kati ya kumi na mbili ni za uongo. Uchumi kamili wa programu:

```
Gharama kwa kila kesi ya kweli iliyopatikana = (gharama ya uchunguzi + gharama ya uchunguzi wa kina × chanya zote) / chanya za kweli
Kisha: je, kupata kesi kunastahili hilo? (thamani ya uingiliaji wa mapema kwa kila kesi,
       ukitoa madhara ya utambuzi kupita kiasi — kesi zilizopatikana ambazo zisingehusika kamwe)
```

## Mfano uliokokotolewa

Uchunguzi wa AI wa retina kwa hali adimu, watu 100,000, kuenea 0.5%, unyeti 90%, umahususi 95%, skani £15, uchunguzi wa kina wa kuthibitisha £400:

```
Chanya za kweli:  100,000 × 0.005 × 0.90 = 450
Chanya za uongo:  100,000 × 0.995 × 0.05 = 4,975
Gharama = 100,000 × 15 + (450 + 4,975) × 400 = £milioni 1.5 + £milioni 2.17 = £milioni 3.67
Gharama kwa kila kesi ya kweli ≈ £8,156
```

Ikiwa matibabu ya mapema yanaokoa £20,000 + QALY 1 kwa kila kesi, programu inapita kwa urahisi. Inua umahususi hadi 99% (tahadhari za uongo pungufu): gharama ya uchunguzi wa kina inashuka hadi (450 + 995) × 400 = £milioni 0.58, jumla £milioni 2.08, gharama kwa kila kesi ≈ **£4,622** — umahususi, si unyeti, ndipo uchumi wa uchunguzi hushindwa au kushinda kwa kuenea kwa chini.

## Uhusiano na uhandisi wa programu

Uchambuzi tuli, uchanganuzi wa usalama, na ugunduzi wa hitilafu ni programu za uchunguzi juu ya misingi ya msimbo na telemetria, ambapo kuenea kwa kasoro za kweli mara nyingi ni chini sana ya 1% kwa kila fursa ya tahadhari. Hisabati ileile inaeleza uchovu wa tahadhari: skana yenye umahususi wa 95% kwenye msimbo wa kuenea kwa chini huzamisha timu katika chanya za uongo, na kila chanya ya uongo hugharimu umakini na kumomonyoa imani hadi tahadhari halisi zipuuzwe (neno la kikliniki ni *madhara ya uchunguzi*; neno la uhandisi ni *ganzi ya pager*). Tiba zinahamia kutoka afya: inua umahususi kabla ya unyeti, chunguza vikundi vidogo vya kuenea kwa juu (kulenga kwa hatari ↔ kuchanganua msimbo uliobadilika tu) na hesabu gharama ya triage katika uchumi wa zana — tazama [NNT](../idadi-inayohitajika-kutibiwa/) na [tathmini ya AI ya kikliniki](../tathmini-ya-ai-ya-kikliniki/). Kwa kupima programu nzima ya uchunguzi badala ya jaribio moja, tazama [idadi inayohitajika kuchunguzwa](../idadi-inayohitajika-kuchunguzwa/) — watu wangapi lazima wapitie njia nzima ya chunguza-na-tibu kuzuia tokeo moja.

## Mitego

- **Kunukuu unyeti/umahususi bila kuenea** — usahihi bila PPV ni uuzaji.
- **Kupuuza utambuzi kupita kiasi**: kupata "ugonjwa" mwepesi ambao usingedhuru kamwe huchochea gharama na madhara halisi ya matibabu.
- **Upendeleo wa muda wa kuongoza**: ugunduzi wa mapema bila kubadilisha matokeo hukuza kuishi kunakoonekana — tazama [uingiliaji wa mapema](../uingiliaji-wa-mapema/).

## Vyanzo

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
