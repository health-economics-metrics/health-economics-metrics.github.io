# Thamani ya Maisha ya Kitakwimu (VSL)

Thamani ya maisha ya kitakwimu (VSL) — inayoitwa "thamani ya kifo kilichozuiwa" (VPF) katika matumizi ya Uingereza — ni kiasi ambacho *idadi ya watu* kwa pamoja iko tayari kulipa ili kupunguza hatari ya kifo kimoja cha kitakwimu, kinachotokana na tafiti za kubadilishana mshahara-hatari (ni mshahara wa ziada kiasi gani wafanyakazi wanadai kwa kazi hatari zaidi) na tafiti za mapendeleo yaliyotangazwa. Si bei ya maisha ya mtu yeyote aliyetambulika; ni dhana ya hatari ya idadi ya watu, na mhandisi wa programu anayejenga mifumo ya kupunguza hatari — algoriti za triage, utumaji wa magari ya wagonjwa, ufuatiliaji wa usalama — anahitaji kujua inatoka katika mapokeo tofauti ya kinadharia kuliko [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/).

## Kwa nini ni muhimu

VSL/VPF ni zana ya kawaida ya kuthaminisha kwa fedha upunguzaji wa hatari ya vifo katika uchambuzi wa gharama-manufaa wa udhibiti: usalama wa usafiri, kanuni za mazingira, na baadhi ya uingiliaji wa afya ya umma vyote huendesha hoja zake za biashara kupitia hiyo. Green Book ya HM Treasury huchapisha namba ya VPF inayotokana na ushahidi wa soko la ajira na tafiti za Uingereza, na Idara ya Uchukuzi (Department for Transport) huitumia moja kwa moja katika tathmini ya usalama barabarani. Hii ni mapokeo ya uthamini yaliyo tofauti kweli na mbinu ya QALY × kizingiti cha utayari wa kulipa: mbinu ya kizingiti huthamini faida za afya dhidi ya kile *bajeti* ya afya inazalisha sasa pembezoni, ilhali VSL/VPF huthamini upunguzaji wa hatari dhidi ya kile watu katika soko la ajira au utafiti wanaonyesha wangelipa kwa ajili yake. Mifumo hii miwili haipatanishwi kila mara, na kutumia yote mawili katika kesi moja bila kukiri hilo ni kosa la kawaida la uchambuzi.

## Hisabati

```
Vifo vilivyoepukwa = idadi ya watu × upunguzaji_wa_hatari_kwa_mtu
  (upunguzaji_wa_hatari_kwa_mtu ni uwezekano, mf. 0.000001 = upunguzaji wa
   mmoja kwa milioni katika hatari ya kila mwaka ya vifo)

Manufaa ya vifo yaliyothaminishwa = vifo_vilivyoepukwa × thamani_ya_kifo_kilichozuiwa
```

## Mfano uliokokotolewa

Eneo lenye watu 800,000 linanufaika na uingiliaji wa kidijitali wa utumaji/triage wa usalama barabarani unaopunguza hatari ya kila mwaka ya vifo ya kila mtu kwa 1 kwa milioni (0.000001):

```
Vifo vilivyoepukwa = 800,000 × 0.000001 = 0.8
```

Kwa kutumia Thamani ya Kifo Kilichozuiwa ya Uingereza, £2,180,000 (namba ya HM Treasury/DfT, bei za 2023/24 — Green Book huisasisha kila mwaka, thibitisha tena kabla ya kunukuu katika uchambuzi hai):

```
Manufaa ya vifo yaliyothaminishwa = 0.8 × £2,180,000 = £1,744,000/mwaka
```

Chini kidogo ya £milioni 1.75 kwa mwaka za manufaa ya vifo yaliyothaminishwa, kutokana na upunguzaji wa hatari ambao watu wengi walioathirika hawangeuona kamwe mmoja mmoja.

## Uhusiano na uhandisi wa programu

Timu za programu muhimu kwa usalama — programu dhibiti ya vifaa vya matibabu, programu ya magari yanayojiendesha, mifumo ya udhibiti wa viwandani — hukabiliana na tatizo hili hasa la kuweka bei wanapojenga hoja ya gharama-manufaa kwa uwekezaji wa usalama: unaweka bei gani kwa "kuzuia hitilafu moja ya maafa" wakati hitilafu ni adimu, kali, na imeenea kwa idadi kubwa ya watumiaji? VSL/VPF ni mfano wa ulimwengu halisi wa miongo mingi, ulioandikwa hadharani, wa kuweka namba kwenye upunguzaji adimu, mkali wa hatari wa kiwango cha idadi ya watu — umbo lilelile la hoja kama kuweka bei ya uwekezaji wa SRE dhidi ya kukatika adimu kwa maafa, tu kwa tokeo la vifo badala ya tokeo la muda wa kutofanya kazi.

## Mitego

- **Kuchukulia VSL kama "bei ya maisha yaliyotambuliwa"**: si hivyo. VSL/VPF ni dhana ya kitakwimu ya idadi ya watu inayotokana na mabadilishano ya upunguzaji wa hatari kati ya watu wengi, si uthamini wa maisha au kifo cha mtu yeyote mahususi.
- **Kuhesabu mara mbili dhidi ya hesabu ya manufaa halisi ya kifedha yenye msingi wa QALY**: kutumia namba ya VSL/VPF na hesabu tofauti ya QALY × kizingiti katika kesi moja, bila kuzipatanisha, kimya kimya huhesabu mara mbili thamani ya vifo vilevile vilivyoepukwa. Chagua mfumo mmoja kwa kila kesi.
- **Kuhamisha kadirio la VSL kati ya muktadha bila marekebisho**: VSL inayotokana na soko la ajira la nchi moja, au data ya mshahara-hatari ya umri wa kufanya kazi, ikitumiwa bila kurekebishwa kwa muktadha tofauti wa mapato au idadi tofauti ya watu (watoto, wastaafu) ni suala la kimbinu la muda mrefu, linalobishaniwa kweli — si lililotatuliwa.

## Vyanzo

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
