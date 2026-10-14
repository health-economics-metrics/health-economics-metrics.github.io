# Varðveisla og brottfall

Varðveisla mælir hve stór hluti notendahóps er enn virkur N dögum eftir upphaf (D1/D7/D30 ferlar); brottfall er andstæða þess. Grimmilegt grunngildi stafrænnar heilsu: **um 90% notenda heilsuappa hætta innan 30 daga** — D30-varðveisla stafrænnar heilsu er ~3–4% á móti ~6% meðaltali allra appa.

## Hvers vegna það skiptir máli

Eysenbach nefndi þetta 2005: **lögmál brottfalls** (law of attrition) — að missa notendur í miklum mæli er innbyggður, byggingarlegur eiginleiki eHealth-inngripa, ekki framkvæmdarvilla, þar sem brottfall í eHealth-rannsóknum fer reglulega yfir 50%. Hagræna afleiðingin er algjör: varðveisla skilgreinir *meðferðargluggann* þar sem hægt er að skila hvaða ávinningi sem er, og [einingahagfræðin](../einingahagfræði-heilsuappa/) — CAC greiddur fyrir notanda sem dvelur í 12 daga skilar hvorki LTV né QALY. Sérhvert hagfræðilíkan fyrir neytendaheilsuvöru sem vigtar ekki ávinning með varðveisluferlinum lýsir vöru sem er ekki til.

## Stærðfræðin

```
Varðveisla_Dn = notendur virkir á degi n / hópstærð × 100
Brottfallshlutfall = notendur tapaðir á tímabili / notendur í upphafi tímabils × 100

Ávinningsvigtun (heilsuhagfræðibragðið):
  væntur ávinningur á áunninn notanda = Σ_t varðveisla(t) × ávinningshlutfall(t)
  ≈ flatarmál undir varðveisluferli × ávinningur á tímaeiningu
  — EKKI rannsóknarávinningur × 100% áunninna notenda

Kostnaður á notanda varðveittan á D30 = CAC / D30-varðveisla
  (við 4% D30 er 5 £ CAC í raun 125 £ á varðveittan notanda)
```

## Dæmi útreiknað

Geðheilbrigðisapp: rannsókn sýndi 0,02 QALY unnin á notanda sem lauk 8 vikum. Dreifingarhópur 100.000 niðurhala, varðveisla D7 25%, D30 8%, vika 8 4%:

```
Þeir sem ljúka     = 100.000 × 0,04 = 4.000
QALY skilað        = 4.000 × 0,02 = 80  (ekki 100.000 × 0,02 = 2.000)
Á 20.000 £/QALY    = 1,6 m£ af heilsuverðmæti (ekki 40 m£)

Heilsuverðmæti á niðurhal = 16 £ — talan sem ætti að ákvarða hvað
greiðandi borgar fyrir niðurhal, og hún er 4% af einföldu fullyrðingunni.
Rök um varðveislubætur: að færa lok í viku 8 úr 4% → 6% bætir við
40 QALY/ár ≈ 800 þús. £ — varðveisluverkfræði ER heilsuframleiðsla.
```

## Tengsl við hugbúnaðarverkfræði

Varðveisla er mælikvarðinn þar sem vöruverkfræði framleiðir heilsuverðmæti beint, samkvæmt reikningnum hér að ofan. Venjurnar sem hreyfa hana eru venjulegar: tími að fyrsta verðmæti við innleiðingu, hönnun endurþátttöku, afköst, og afgerandi **skipulögð skammtalok** — áætlun með skilgreindan endi (8 vikur, svo útskrift) ætti að mæla *lok*, ekki eilífa DAU, og samræma mælikvarðann við klíníska líkanið frekar en auglýsingafjármagnað athyglislíkan. Lifunargreining er rétta verkfærasettið (sama Kaplan-Meier stærðfræði og [lífár sem vinnast](../lífár-sem-vinnast/)); skiptu ferlum eftir öflunarrás, því rásablanda breytir varðveislu meira en flestir eiginleikar.

## Gildrur

- **Þvottur á ætlun-til-meðferðar í öfuga átt**: rannsóknir skýra frá þeim sem ljúka; dreifingarhagfræði verður að telja alla áunna (kjarnaviðvörun Eysenbach).
- **Varðveisluleikhús**: tilkynningadrifnir „virkir“ notendur sem framkvæma aldrei meðferðaraðgerðina (sjá [þátttökumælikvarðar](../þátttökumælikvarðar/)).
- **Samanburður ferla milli skilgreininga**: „virkur“ skilgreint sem opnun á móti marktækri aðgerð breytir D30 um margfeldi.
- **Að horfa framhjá því hver fellur frá**: ef þeir veikustu falla hraðast frá lækka ávinningar á notanda eftir því sem varðveisla batnar meðal hinna heilbrigðu — paraðu ferla við sjúklingablöndu (sjá [ná og jöfnuður](../ná-og-jöfnuður/)).

## Heimildir

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
