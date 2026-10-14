# Ufuasi na Uendelevu

Ufuasi (adherence) ni jinsi matumizi halisi yanavyolingana kwa karibu na matumizi yaliyoagizwa (ukubwa); uendelevu (persistence) ni muda gani matumizi yanaendelea kabla ya kuachwa (muda). Famasia ina vipimo sanifu — **MPR** na **PDC**, ambapo ≥80% ni kigezo cha kawaida cha "mfuasi" — na tiba za kidijitali hurithi dhana zote mbili na tatizo: ufuasi ni kizidisho kati ya ufanisi na thamani halisi inayopatikana.

## Kwa nini ni muhimu

Walipaji tayari wanaendesha shughuli kwa namba hizi: PDC ≥80% huingia katika Star Ratings za Medicare ya Marekani, zinazosogeza mapato halisi ya walipaji — ufuasi ni miundombinu inayobeba mzigo wa kifedha, si kipimo laini. Kwa tiba za kidijitali muundo unajirudia: data ya DiGA inaonyesha kiasi kikubwa cha hati lakini ufuasi dhaifu wa kudumu, na bei za DTx zinazotegemea matokeo (zinazofika Ujerumani kutoka 2026) zitalipa kwa matokeo yanayozuiliwa na ufuasi. Uboreshaji wa kidhana kutoka utafiti wa afya ya kidijitali: **ushiriki wenye ufanisi** (effective engagement) — ushiriki *wa kutosha* kufikia matokeo yaliyokusudiwa — na tokeo lake, **kipimo cha chini chenye ufanisi**, kinachothibitishwa kimajaribio kwa kila uingiliaji badala ya kudhaniwa kuwa "zaidi".

## Hisabati

```
MPR = Σ siku za ugavi zilizotolewa / siku katika kipindi × 100   (inaweza kuzidi 100%;
      hukadiria kupita kiasi kwa sababu ya kujaza upya mapema)
PDC = siku zilizofunikwa na ugavi / siku katika kipindi × 100    (imewekewa kikomo 100%;
      kikadiriaji cha tahadhari kinachopendelewa na CMS)
Ufuasi wa kidijitali = matukio halisi ya matumizi / matukio ya matumizi yaliyoagizwa × 100
Uendelevu            = siku kutoka kuanza hadi kuacha
                       (ripoti % endelevu katika miezi N; mbinu za kuishi)

Kuzuia thamani: matokeo yanayopatikana ≈ ufanisi × g(ufuasi)
  ambapo g ni kitendakazi cha kipimo-mwitikio; chini ya kipimo cha chini
  chenye ufanisi, g ≈ 0 — gharama inatumika, manufaa yanapotea
```

## Mfano uliokokotolewa

Bidhaa ya kidijitali ya CBT kwa kukosa usingizi, iliyoagizwa kama moduli 6 katika wiki 6; ufanisi wa jaribio QALY 0.025 miongoni mwa wanaokamilisha moduli ≥4 (kipimo cha chini chenye ufanisi kilichothibitishwa kimajaribio):

```
Hati 1,000 kwa £250 → £250,000 matumizi ya mlipaji
Ukamilishaji wa moduli: moduli ≥4 38%; moduli 1–3 34%; sifuri 28%

QALY zinazopatikana = 1,000 × 0.38 × 0.025 = 9.5
Gharama kwa QALY = 250,000 / 9.5 ≈ £26,300 — mpakani katika viwango vya NICE

Uhandisi wa ufuasi (kusanifu upya vikumbusho, kufupisha vikao) huinua
ukamilishaji wa moduli ≥4 hadi 50%: QALY 12.5 → £20,000/QALY. Bidhaa
ilivuka kiwango cha ufadhili bila kugusa maudhui ya tiba.
```

Chini ya bei za utendaji za mtindo wa 2026, mabadiliko yaleyale husogeza *mapato* moja kwa moja — uhandisi wa ufuasi unakuwa ramani ya biashara.

## Uhusiano na uhandisi wa programu

Misamiati miwili inakutana katika dhana moja: uchanganuzi wa programu ([uwezeshaji](../uwezeshaji-na-upokeaji/), [ung'ang'anizi](../vipimo-vya-ushiriki/), [kubaki](../kubaki-na-kuondoka/)) na famasia ya kikliniki (MPR, PDC, uendelevu) vyote vinapima mfiduo kwa uingiliaji — oanisha matukio ya bidhaa yako na msamiati wa kikliniki ili walipaji waweze kusoma dashibodi zako. Uhandisi unamiliki vichocheo vya ufuasi: mantiki ya vikumbusho (arifa za kila siku zisizo na akili hufundisha kuzipuuza; muda unaobadilika hautafundisha), gharama ya kikao (moduli ya dakika 20 inakamilishwa chini ya 3×7 dakika), na telemetria ya msuguano inayopata *mahali* katika itifaki watumiaji wanapoanguka. Pima kipimo-mwitikio tangu siku ya kwanza — uchambuzi wa kipimo cha chini chenye ufanisi unaozuia modeli nzima ya kiuchumi unahitaji data ya matumizi iliyounganishwa na matokeo ambayo bidhaa pekee inaweza kukusanya.

## Mitego

- **Kuchanganya MPR/PDC**: MPR hukuza; taja kikadiriaji kipi na tumia PDC kwa chochote kinachomkabili mlipaji.
- **Ufuasi kwa kipimo, si tiba**: kufungua kunahesabiwa kama dozi (tazama [vipimo vya ushiriki](../vipimo-vya-ushiriki/)).
- **Malengo ya ushiriki ya "zaidi ni bora"** pale uingiliaji una kipimo kikomo — kuhitimu ni mafanikio, matumizi ya milele sivyo.
- **Madai ya ufanisi yanayotegemea walionusurika**: matokeo miongoni mwa wafuasi yanajumuisha athari za uteuzi (wafuasi ni tofauti); makadirio ya kweli ya kisababishi yanahitaji kubahatisha au urekebishaji makini.

## Vyanzo

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
