# Uigaji wa Kundi wa Markov

Modeli ya kundi ya Markov ni mbinu ya kawaida ya uundaji modeli ya HTA kwa uingiliaji ambao athari zake hujitokeza katika vipindi vingi (mizunguko), si kwa mara moja. Kundi dhahania huanza lote katika hali moja ya afya, na kila mzunguko seti isiyobadilika ya uwezekano wa mpito husogeza sehemu za kundi kati ya hali; gharama na QALY hukusanyika kila mzunguko kulingana na ni kiasi gani cha kundi kinachokalia kila hali, na hupunguzwa thamani hadi thamani ya sasa. Mhandisi yeyote wa programu anayeunda modeli ya hoja ya biashara ya afya ya kidijitali ya miaka mingi — ambapo watumiaji au wagonjwa husogea kati ya hali kama "wanaoshiriki", "waliopotea", au "waliopoteza" kadiri muda unavyopita — anajenga muundo uleule.

## Kwa nini ni muhimu

Maamuzi mengi halisi ya teknolojia ya afya si ulinganisho wa mara moja wa gharama na matokeo ya kipindi kimoja. Hali sugu huendelea, hurudi, hujibu matibabu, au huua, kwa miaka — na [uchambuzi wa ufanisi wa gharama](../uchambuzi-wa-ufanisi-wa-gharama/) wa kipindi kimoja hauwezi kuwakilisha hilo. Mawasilisho ya NICE, ICER, na CADTH kwa uingiliaji wa magonjwa sugu, yanayotathminiwa kupitia [tathmini ya teknolojia ya afya](../tathmini-ya-teknolojia-ya-afya/), karibu daima hujengwa kama modeli za kundi za Markov zenye upeo wa muda wa maisha yote, kwa sababu mbadala — kuunda kila njia inayowezekana ya mgonjwa binafsi — hauwezekani kwa kiwango kikubwa. Modeli ya Markov ya kiwango cha kundi hubadilishana uhalisia fulani wa kiwango cha mtu binafsi (haiwezi kwa urahisi kuwakilisha kumbukumbu ya hali zilizopita, ndiyo maana "Markov": siku zijazo hutegemea hali ya sasa tu) kwa modeli iliyo wazi, inayokaguliwa, na ya haraka vya kutosha kuendeshwa maelfu ya mara katika [uchambuzi wa unyeti wa uwezekano](../uchambuzi-wa-unyeti-wa-uwezekano/).

## Hisabati

```
Usasishaji wa kundi wa mzunguko mmoja (vekta ya safu x matriki ya mpito):
  hali_mpya[j] = jumla_i hali[i] * matriki_ya_mpito[i][j]

Gharama ya mzunguko mmoja:
  gharama_ya_mzunguko = jumla_s hali[s] * gharama_kwa_mzunguko[s]

QALY za mzunguko mmoja:
  qaly_za_mzunguko = jumla_s hali[s] * matumizi[s] * urefu_wa_mzunguko_miaka

Uigaji kamili katika mizunguko `mizunguko`, ukipunguzwa kwa `kiwango_cha_punguzo`:
  jumla_ya_gharama_iliyopunguzwa = jumla_{t=0}^{mizunguko-1} gharama_ya_mzunguko(hali_t) / (1 + kiwango_cha_punguzo)^t
  jumla_ya_qaly_zilizopunguzwa   = jumla_{t=0}^{mizunguko-1} qaly_za_mzunguko(hali_t)     / (1 + kiwango_cha_punguzo)^t
  ambapo hali_0 = mgawanyo_wa_awali, hali_{t+1} = songesha_kundi(hali_t, matriki_ya_mpito)
```

Kupunguza kila mzunguko hadi thamani ya sasa kunatumia fomula ileile hasa ya [kupunguza thamani na upendeleo wa muda](../kupunguza-thamani-na-upendeleo-wa-muda/), inayotumika mzunguko kwa mzunguko badala ya mwaka kwa mwaka.

## Mfano uliokokotolewa

**Kikliniki**: modeli ya hali 2 — `Mwenye afya` na `Amekufa` — ambapo 10% ya kundi hufa kila mzunguko na `Amekufa` ni ya kunyonya (uwezekano wake wa mpito kwa yenyewe ni 1.0; kuacha mzunguko huo wa kujirudia kungefanya uzito wa kundi upotee baada ya mzunguko mmoja katika `Amekufa`). Kundi huanza lote `Mwenye afya`, hugharimu £1,000 kwa kila mzunguko likiwa `Mwenye afya` (£0 likishakuwa `Amekufa`), na hupata QALY 0.8 kwa mwaka likiwa `Mwenye afya`. Imeigizwa kwa mizunguko 3 ya kila mwaka kwa kiwango cha punguzo cha NICE cha 3.5%:

```
Mzunguko 0: hali = [1.00, 0.00] (100% Mwenye afya)
  gharama = £1,000.00, qaly = 0.800, kigezo cha punguzo = 1.000000
  iliyopunguzwa: gharama = £1,000.00, qaly = 0.8000

Mzunguko 1: hali = [0.90, 0.10] (90% Mwenye afya, 10% Amekufa)
  gharama = £900.00, qaly = 0.720, kigezo cha punguzo = 0.966184
  iliyopunguzwa: gharama = £869.57, qaly = 0.6957

Mzunguko 2: hali = [0.81, 0.19] (81% Mwenye afya, 19% Amekufa)
  gharama = £810.00, qaly = 0.648, kigezo cha punguzo = 0.933511
  iliyopunguzwa: gharama = £756.14, qaly = 0.6049

Jumla ya gharama iliyopunguzwa ≈ £2,625.71
Jumla ya QALY zilizopunguzwa   ≈ 2.1006
```

Hali ya kila mzunguko ni hali ya mzunguko uliopita iliyopitishwa kwenye matriki ya mpito — 90% ya 90% ambao bado ni `Mwenye afya` katika mzunguko 1 hubaki `Mwenye afya` katika mzunguko 2 (0.9 × 0.9 = 0.81), huku 19% nyingine sasa wamekufa (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Zingatia kwamba kundi halimalizi kamwe `Mwenye afya` kabisa: kwa vifo thabiti vya 10% kwa mzunguko na bila kuingia tena, sehemu ya `Mwenye afya` hupungua kwa kasi ya kijiometri badala ya kufikia sifuri katika idadi yoyote ya mizunguko ya kikomo.

## Uhusiano na uhandisi wa programu

Kwa jinsi modeli ya HTA ya mizunguko mingi inavyotumika ndani ya tathmini halisi, tazama [tathmini ya teknolojia ya afya](../tathmini-ya-teknolojia-ya-afya/) — kesi ya rejea inayoongoza ni kiwango gani cha punguzo, chanzo cha matumizi, na upeo wa muda ambao modeli ya Markov iliyowasilishwa lazima itumie.

Modeli ya kundi ya Markov kimuundo ni mashine ya hali yenye mpito wa kiuwezekano, inayoendeshwa kwa idadi isiyobadilika ya tiki, ikipunguza thamani ya kila tiki. Umbo hilohilo huigiza kubaki/mpito wa hali wa kundi la watumiaji kadiri muda unavyopita — tazama [vipimo vya DORA](../vipimo-vya-dora/) kwa toleo la uaminifu wa kiutendaji la "ni sehemu gani ya mfumo iko katika hali iliyodhoofika kipindi hiki, na hiyo inagharimu nini". Kwa vitendo:

- **Uundaji modeli wa kubaki/kuondoka** ni modeli ya kundi ya Markov yenye hali kama "amilifu", "hatarini", "ameondoka": matriki isiyobadilika ya kila mwezi ya mpito, inayoendeshwa kwa mizunguko 12 au 24 ya kila mwezi, inakuambia idadi inayotarajiwa ya watumiaji amilifu (na mapato) katika mwezi wowote wa baadaye, vilevile `Mwenye afya`/`Amekufa` inavyokuambia walionusurika wanaotarajiwa.
- **Uaminifu na uchumi wa matukio**: hali za mfumo (wenye afya, uliodhoofika, uliozimika) zinaweza kuigizwa vivyo hivyo, na "gharama kwa mzunguko" ya madhara ya kukatika ikikusanyika wakati mfumo unakalia hali zilizodhoofika/zilizozimika — ikigeuza hoja ya mzunguko wa matukio kuwa hoja ya gharama iliyopunguzwa inayolinganishika na gharama ya kazi ya uaminifu ambayo ingebadilisha uwezekano wa mpito.
- **Hali za kunyonya kama hali za mwisho**: `Amekufa` katika modeli ya kikliniki ni hasa "usajili uliofutwa" au "nje ya mtandao milele" katika modeli ya programu — zote mbili zinahitaji uwezekano wazi wa mpito kwa yenyewe wa 1.0, vinginevyo uigaji hupoteza uzito kimya kimya.

## Mitego

- **Uwezekano wa mpito usiojumlisha 1 kwa kila safu.** Safu inayojumlisha zaidi au chini ya 1 hufanya kundi "livujishe" au "likue" uzito kimya kimya kila mzunguko — kagua daima jumla za safu kabla ya kuamini matokeo ya modeli, kwa kuwa hakuna kitu kuhusu muundo wa modeli chenyewe kinachoashiria kosa.
- **Urefu wa mzunguko mbaya mno kwa mienendo halisi ya ugonjwa.** Mzunguko wa kila mwaka kwa hali inayobadilisha hali kwa kiasi kikubwa ndani ya wiki hudharau mipito inayotokea katikati ya mzunguko; chagua urefu wa mzunguko mfupi ukilinganishwa na kasi ya mchakato unaoigizwa kweli.
- **Kusahau mzunguko wa kujirudia wa hali ya kunyonya.** Hali ya kunyonya (kifo, kuacha kudumu) inahitaji uwezekano wa mpito kwa yenyewe wa hasa 1.0. Ukiiacha, uzito wa kundi katika hali hiyo huvukiza baada ya mzunguko mmoja, ukidharau gharama za jumla au hasara ya QALY.
- **Kuchukulia modeli kama iliyothibitishwa kwa sababu inaendeshwa.** Modeli ya kundi ya Markov yenye uwezekano wa mpito unaoonekana kuwa wa busara bado inaweza kuwa na kasoro za kimuundo (hali zinazokosekana, tabia mbaya ya kunyonya); thibitisha dhidi ya vigezo vinavyojulikana vya kiepidemiolojia (mf. je, kuishi kulikoigizwa kwa miaka 5 kunalingana na mikunjo ya kuishi iliyochapishwa) kabla ya kuamini matokeo.

## Vyanzo

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
