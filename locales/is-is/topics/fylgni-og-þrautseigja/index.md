# Fylgni og þrautseigja

Fylgni (adherence) er hversu náið raunveruleg notkun samsvarar ávísaðri notkun (styrkleiki); þrautseigja (persistence) er hversu lengi notkun heldur áfram áður en henni er hætt (tímalengd). Lyfjafræði hefur staðlaða mælikvarða — **MPR** og **PDC**, þar sem ≥80% er hefðbundin viðmiðun fyrir „fylgið“ — og stafræn meðferðarúrræði erfa bæði hugtökin og vandann: fylgni er margfaldarinn milli virkni og raunverulegs verðmætis.

## Hvers vegna það skiptir máli

Greiðendur ganga nú þegar eftir þessum tölum: PDC ≥80% fer inn í Star Ratings hjá bandaríska Medicare, sem hreyfa raunverulegar tekjur greiðenda — fylgni er fjárhagslega burðarvirk innviðastoð, ekki mjúkur mælikvarði. Fyrir stafræn meðferðarúrræði endurtekur mynstrið sig: DiGA-gögn sýna mikið ávísanamagn en veika viðvarandi fylgni, og verðlagning stafrænna meðferðarúrræða byggð á útkomum (sem kemur til Þýskalands frá 2026) mun greiða fyrir árangur sem er háður fylgni. Hugtakauppfærslan úr rannsóknum á stafrænni heilsu: **virk þátttaka** (effective engagement) — *nægileg* þátttaka til að ná ætlaðri útkomu — og afleiðing hennar, **lágmarksvirkur skammtur**, sem er ákvarðaður reynslulega fyrir hvert inngrip í stað þess að gera ráð fyrir að „meira“ sé betra.

## Stærðfræðin

```
MPR = Σ daga birgða afgreiddar / dagar á tímabili × 100   (getur farið yfir 100%;
      ofmetur vegna snemmbúinna endurnýjana)
PDC = dagar þaktir birgðum / dagar á tímabili × 100       (takmarkað við 100%;
      varfærni matsaðferðin sem CMS kýs)
Stafræn fylgni = raunveruleg notkunaratvik / ávísuð notkunaratvik × 100
Þrautseigja    = dagar frá upphafi til þess að meðferð er hætt
                 (tilkynntu % sem eru þrautseig eftir N mánuði; lifunaraðferðir)

Verðmætishlið: raunveruleg útkoma ≈ virkni × g(fylgni)
  þar sem g er skammta-svörunarfall; undir lágmarksvirkum skammti er
  g ≈ 0 — kostnaður fellur til, ávinningur glatast
```

## Dæmi útreiknað

Stafræn HAM-meðferð við svefnleysi, ávísuð sem 6 einingar á 6 vikum; virkni í rannsókn 0,025 QALY meðal þeirra sem ljúka ≥4 einingum (lágmarksvirkur skammtur ákvarðaður reynslulega):

```
1.000 ávísanir á 250 £ → 250.000 £ útgjöld greiðanda
Lok eininga: ≥4 einingar 38%; 1–3 einingar 34%; engin eining 28%

QALY sem nást = 1.000 × 0,38 × 0,025 = 9,5
Kostnaður á QALY = 250.000 / 9,5 ≈ 26.300 £ — á mörkum NICE-viðmiða

Fylgniverkfræði (ný hönnun áminninga, styttri lotur) hækkar lok ≥4
eininga í 50%: 12,5 QALY → 20.000 £/QALY. Varan fór yfir
fjármögnunarþröskuldinn án þess að snerta innihald meðferðarinnar.
```

Undir árangurstengdri verðlagningu að hætti 2026 færir sama breyting *tekjur* beint — fylgniverkfræði verður viðskiptavegvísir.

## Tengsl við hugbúnaðarverkfræði

Tvö orðasöfn renna saman í eitt hugtak: hugbúnaðargreining ([virkjun](../virkjun-og-upptaka/), [límkraftur](../þátttökumælikvarðar/), [varðveisla](../varðveisla-og-brottfall/)) og klínísk lyfjafræði (MPR, PDC, þrautseigja) mæla bæði útsetningu fyrir inngripi — varpaðu vöruatburðum þínum á klíníska orðaforðann og greiðendur geta lesið mælaborðin þín. Verkfræði á fylgnisvifstengurnar: rökfræði áminninga (daglegar heimskulegar áminningar þjálfa fólk í að afgreiða þær; aðlögunarhæf tímasetning gerir það ekki), kostnað lotu (20 mínútna eining lýkst sjaldnar en 3×7 mínútna) og núningsmælingar sem finna *hvar* í ferlinu notendur heltast úr lestinni. Mældu skammta-svörun frá fyrsta degi — greiningin á lágmarksvirkum skammti sem stýrir öllu hagfræðilíkaninu þarfnast gagna um notkun tengda útkomu sem aðeins varan sjálf getur safnað.

## Gildrur

- **Samruni MPR/PDC**: MPR blæs upp; tilgreindu hvaða matsaðferð er notuð og notaðu PDC fyrir allt sem snýr að greiðendum.
- **Fylgni við mælikvarðann, ekki meðferðina**: opnanir taldar sem skammtar (sjá [þátttökumælikvarðar](../þátttökumælikvarðar/)).
- **Þátttökumarkmið af gerðinni „meira er betra“** þar sem inngripið hefur endanlegan skammt — útskrift er árangur, endalaus notkun ekki.
- **Virknifullyrðingar byggðar á eftirlifendum**: útkomur meðal þeirra sem fylgja fela í sér valáhrif (þeir sem fylgja eru ólíkir); heiðarlegt orsakamat krefst slembivals eða vandaðrar leiðréttingar.

## Heimildir

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
