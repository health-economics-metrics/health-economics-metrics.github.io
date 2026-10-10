# Kupunguza Thamani na Upendeleo wa Muda

Kupunguza thamani hubadilisha gharama na manufaa ya baadaye kuwa thamani za sasa, kwa sababu manufaa ya leo yana thamani zaidi kuliko manufaa yaleyale baada ya miaka mitano.

## Kwa nini ni muhimu

Kila tathmini ya uchumi wa afya na kila hoja makini ya biashara ya sekta ya umma hupunguza thamani ya mitiririko ya miaka mingi. Green Book ya HM Treasury ya Uingereza inaamuru kiwango cha upendeleo wa muda wa kijamii cha 3.5% kila mwaka; kesi ya rejea ya NICE hupunguza thamani ya gharama na athari za kiafya kwa 3.5% kwa mwaka (kwa kiwango cha kesi isiyo ya rejea cha 1.5% kwa tiba zinazokaribia kupona zenye manufaa kwa miaka 30+). Ikiwa hoja ya biashara ya programu yako inadai "akiba ya £milioni 5 katika miaka 10", mkaguzi wa fedha ataomba mara moja namba iliyopunguzwa thamani.

## Hisabati

Thamani ya sasa ya kiasi cha baadaye:

```
PV = FV / (1 + r)^t

PV = thamani ya sasa
FV = thamani ya baadaye katika mwaka t
r  = kiwango cha punguzo (NICE/Green Book: 0.035)
t  = miaka kuanzia sasa
```

Kwa manufaa ya kila mwaka yasiyobadilika B katika miaka n (mwaka-malipo):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Mfano uliokokotolewa

Programu yako inaokoa taasisi ya NHS £100,000 kwa mwaka kwa miaka 5, kuanzia mwaka mmoja baada ya kuanza kutumika.

Jumla isiyopunguzwa thamani: £500,000.

Iliyopunguzwa thamani kwa 3.5%:

```
Mwaka 1: 100,000 / 1.035^1 = £96,618
Mwaka 2: 100,000 / 1.035^2 = £93,351
Mwaka 3: 100,000 / 1.035^3 = £90,194
Mwaka 4: 100,000 / 1.035^4 = £87,144
Mwaka 5: 100,000 / 1.035^5 = £84,197

Jumla ya PV ≈ £451,505
```

Kichwa cha habari cha uaminifu ni takriban £451,000, karibu 10% chini ya jumla ya kijinga. Sasa tuseme utoaji unachelewa kwa mwaka mmoja: kila neno linahamia mwaka mmoja baadaye, na PV inashuka hadi takriban £436,000 — mtazamo wa kupunguza thamani wa [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/).

## Uhusiano na uhandisi wa programu

- **Ulipaji wa deni la kiufundi na uhamishaji wa jukwaa** huahidi mitiririko ya manufaa miaka mingi mbele; ipunguze thamani kabla ya kulinganisha na kazi inayolipa robo hii.
- **Gharama za mwanzoni, manufaa ya mwishoni** ni umbo la kawaida la uhamishaji. Kupunguza thamani kunaadhibu umbo hilo, ipasavyo: huweka bei ya thamani ya muda isiyo na hatari ya kuahidi uwezo sasa kwa thamani baadaye.
- **Madai ya "akiba katika mwaka wa 5"** yanastahili mashaka mara mbili — yote mawili yamepunguzwa thamani sana na hayana uhakika sana (tazama [uchambuzi wa unyeti](../uchambuzi-wa-unyeti/)).

## Mitego

- **Kupunguza thamani ya gharama lakini si manufaa** (au kinyume) — kesi ya rejea hupunguza yote mawili, kwa kiwango kilekile.
- **Kutumia kiwango cha kibiashara (8–12%) katika kesi ya sekta ya umma**, au 3.5% katika ile inayofadhiliwa na mtaji wa ubia. Linganisha kiwango na mwenye kuamua.
- **Kuchanganya kupunguza thamani na mfumuko wa bei.** Kupunguza thamani kunatumika kwa thamani *halisi* (zilizorekebishwa kwa mfumuko); usifanye yote mawili kimya kimya.

## Vyanzo

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
