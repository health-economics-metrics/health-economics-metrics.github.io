# Tathmini ya AI ya Kikliniki

Takwimu za msingi za kutathmini AI ya kikliniki au modeli ya utambuzi: unyeti, umahususi, AUROC, thamani za utabiri, na idadi inayohitajika kuchunguzwa. Funzo kuu la kiuchumi: **AUROC nzuri sana haifanyi usambazaji wenye ufanisi wa gharama** — thamani inategemea kituo cha uendeshaji, kuenea, na kinachotokea baada ya kila matokeo chanya.

## Kwa nini ni muhimu

Wadhibiti (FDA, MHRA) huidhinisha AI ya kikliniki kwenye **kituo cha uendeshaji kilichofungwa** — jozi mahususi ya unyeti/umahususi (mf. mfumo wa kwanza unaojiendesha uliothibitishwa na FDA wa retinopathy ya kisukari: unyeti 87.2%, umahususi 90.7% katika jaribio lake kuu). Wachumi wa afya kisha huuliza swali ambalo vipimo vya usahihi haviwezi kujibu: kwa kuenea kwa idadi ya watu wako wa usambazaji, kila ugunduzi *unagharimu* kiasi gani, na je, kuchukua hatua juu yake kunastahili? Tathmini ya kiuchumi ya AI ya uchunguzi wa retinopathy (npj Digital Medicine 2024) ilionyesha usahihi wa juu peke yake haukuhakikisha ufanisi wa gharama pindi gharama za rufaa zilipohesabiwa.

## Hisabati

```
Unyeti      = TP / (TP + FN)        — kati ya chanya kweli, sehemu iliyokamatwa
Umahususi   = TN / (TN + FP)        — kati ya hasi kweli, sehemu iliyoondolewa
AUROC       = P(modeli inapanga chanya nasibu juu ya hasi nasibu)
              0.5 bahati … 1.0 kamili; haitegemei kizingiti — na kwa hivyo
              haitoshi kwa uamuzi wa usambazaji

PPV = TP / (TP + FP)   ← inategemea kuenea (Bayes); huporomoka inapokuwa nadra
NPV = TN / (TN + FN)

NNS  ≈ 1 / (kuenea × unyeti)       — waliochunguzwa kwa kila kesi ya kweli iliyopatikana
Gharama kwa kila kesi ya kweli = gharama ya programu / TP      — mstari wa chini wa kiuchumi
```

## Mfano uliokokotolewa

Modeli ileile, mazingira mawili — unyeti 90%, umahususi 93%:

```
Kliniki ya wataalamu (kuenea 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → arifa 3 kati ya 4 ni za kweli

Huduma ya msingi (kuenea 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → arifa 8 kati ya 9 ni za uongo; uchunguzi wa £350 kila moja:
  gharama kwa kila kesi ya kweli = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 kwa kila kesi iliyopatikana
```

Modeli ileile, uchumi tofauti kabisa — ndiyo maana tathmini mahususi ya eneo ni mada ya udhibiti na ndiyo maana "modeli yetu ina AUROC 0.95" ni mwanzo wa hoja ya kiuchumi, si mwisho wake. Tazama [uchumi wa uchunguzi](../uchumi-wa-uchunguzi/) kwa hisabati kamili ya programu.

## Uhusiano na uhandisi wa programu

Kwa wahandisi wanaojenga au kununua AI ya kikliniki: **tuma matriki ya mkanganyiko kwa kuenea kwa usambazaji**, si mkunjo wa ROC peke yake; **acha kizingiti kiwe uamuzi wa kiuchumi** — mpatano wa unyeti/umahususi unapaswa kupunguza gharama inayotarajiwa (kesi zilizokosa × gharama ya kukosa dhidi ya tahadhari za uongo × gharama ya uchunguzi), si kuongeza takwimu ya kigezo; na tambua hisabati ileile katika zana zako mwenyewe — mifumo ya tahadhari, vigunduzi vya hitilafu, na skana za usalama ni vipimo vya utambuzi juu ya mitiririko ya matukio ya kuenea kwa chini, ambapo uchovu wa tahadhari ni [NNH](../idadi-inayohitajika-kutibiwa/). Usasishaji wa modeli unaosogeza kituo cha uendeshaji hufungua tena uchumi (na idhini ya udhibiti — tazama [tathmini ya udhibiti wa AI](../tathmini-ya-udhibiti-wa-ai/)).

## Mitego

- **Kununua AUROC**: kulinganisha modeli kwa AUROC wakati zitaendeshwa kwenye kizingiti kimoja — linganisha kwenye kituo cha uendeshaji.
- **PPV ya kuenea kwa jaribio ikinukuliwa kwa usambazaji wa ulimwengu halisi** — ya kawaida; kokotoa upya daima kwa kuenea kwa eneo.
- **Upendeleo wa wigo**: modeli zilizothibitishwa kwa kesi dhahiri dhidi ya udhibiti wenye afya hufanya vizuri kupita kiasi kwenye eneo la kati lisilo wazi linalotawala katika utendaji.
- **Kutokuwa na ugharamiaji wa njia ya chini ya mkondo**: kila chanya huchochea uchunguzi; modeli ni uingiliaji juu ya uchumi wa *njia nzima*.

## Vyanzo

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
