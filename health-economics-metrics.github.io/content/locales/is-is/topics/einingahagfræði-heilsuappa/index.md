# Einingahagfræði heilsuappa

Viðskiptareikningur neytendaheilsuvara: kostnaður við öflun viðskiptavina (CAC), líftímavirði (LTV), meðaltekjur á notanda (ARPU), verðlagning á félaga á mánuði (PMPM) og aðgreining vinnuveitendamarkaðar á milli **ROI og VOI** (value on investment).

## Hvers vegna það skiptir máli

Heilsuöpp standa frammi fyrir byggingarlegri kreppu: öflun er dýr (stýrðar fullyrðingar, traustshindranir, regluverkskostnaður) á meðan varðveisla er sú versta í nokkrum hugbúnaðargeira (~90% brottfall innan 30 daga — sjá [varðveisla og brottfall](../varðveisla-og-brottfall/)). Staðlað lífvænleikapróf — **LTV:CAC ≥ 3:1** — er því ógnarerfitt í neytendaheilsu, þess vegna færist greinin í átt að B2B2C líkönum: vinnuveitendur, tryggingafélög og heilbrigðiskerfi sem greiða PMPM fyrir þýði, þar sem kaupandinn er ekki einstaklingurinn sem hverfur.

## Stærðfræðin

```
CAC   = sölu- + markaðsútgjöld / nýir greiðandi viðskiptavinir
ARPU  = tekjur / virkir notendur (á tímabil)
LTV   = ARPU × meðallíftími  =  ARPU / brottfallshlutfall
Lífvænleiki: LTV : CAC ≥ 3, endurgreiðslutími ≤ 12–18 mánuðir

Virkur CAC á varðveittan notanda = CAC / varðveisla(t)
  — við 4% D30-varðveislu verður 5 £ á uppsetningu = 125 £ á 30 daga varðveittan notanda

PMPM-tekjur = taxti × skráðir félagar × mánuðir
  framlegð seljanda = PMPM − þjónustukostnaður á félaga á mánuði
  — þátttaka snýr formerkinu: undir B2C-áskriftum knýr þátttaka
    tekjur; undir PMPM kosta virkir félagar MEIRA í þjónustu en
    sofandi, og útkomusamningar snúa því aftur við
```

## Dæmi útreiknað

B2C svefnapp: 6,99 £/mánuð, mánaðarlegt brottfall 18%, blandaður CAC 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — ólífvænlegt

Snúningur til PMPM vinnuveitenda: 1,20 £ PMPM × 40.000 tryggð líf = 48 þús. £/mánuð
Þjónustukostnaður: innviðir 0,15 £ + stuðningur 0,10 £ + efni 0,05 £
  á félaga ≈ 0,30 £ → framlegð ~75%, söluferli langt en brottfall er
  á samningsstigi (árlegt), ekki notendastigi (daglegt)

Spurning vinnuveitandans breytir mælikvarðanum: hörð ROI í dollurum (færri
kröfur, fjarvistir) er sjaldan sýnanleg fyrir vellíðunarvörur —
svar greinarinnar er VOI: framleiðni, aðdráttarafl við ráðningar,
þátttaka — heiðarlegt aðeins þegar merkt sem VOI, ekki dulbúið
sem ROI (sjá return-on-investment.md og social-return-on-investment.md).
```

## Tengsl við hugbúnaðarverkfræði

Verkfræðival setja báðar hliðar hlutfallsins: **þjónustukostnaður** er arkitektúr ([einingahagfræði skýja](../einingahagfræði-skýja/) — PMPM-framlegðin lifir eða deyr á innviðakostnaði á félaga), og **LTV** er varðveisluverkfræði (hver brottfallspunktur er reikningslegar tekjur — QALY-stærðfræði [varðveislu](../varðveisla-og-brottfall/)-efnisins á nákvæman tekjutvíburann). Fyrir heilsuvörur sérstaklega ætti einingahagfræðimælaborðið að bera þriðju línu við hlið LTV og CAC: **heilsuverðmæti á hvern áunninn notanda** (varðveisluvegin QALY × þröskuldur) — því greiðenda- og DiGA-markaðir verðleggja í auknum mæli á því, og því vara þar sem viðskiptaleg og klínísk einingahagfræði fjarlægjast (arðbær en heilsuvirk, eða árangursrík en ófjármagnanleg) þarf að vita hvaða vanda hún hefur.

## Gildrur

- **LTV úr brottfalli snemma hóps**: brottfall stöðugast niður á við; en líka lifendaskekkja — frumnotendur varðveitast betur en stækkandi áhorfendahópur. Notaðu þroskuð hópgögn.
- **CAC blandaður yfir rásir**: CAC á greiddum samfélagsmiðlum og CAC með tilvísun frá klínískum starfsmanni er 10× ólíkur, með andstæð varðveislusnið — skiptu í hluta eða láttu blekkjast.
- **PMPM án notkunarþaks**: öfgavirkir félagar geta snúið framlegð við; líkanaðu dreifinguna, ekki meðaltalið.
- **VOI sett fram sem ROI** fyrir fjármálastjóra — trúverðugleikabresturinn sem vellíðunargreinin vinnuveitenda hefur áunnið sér í áratug.

## Heimildir

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
