# Heildareignarhaldskostnaður (TCO)

TCO er fullur kostnaður kerfis yfir líftíma þess: kaup eða smíði, samþætting, rekstur, viðhald, stuðningur, þjálfun og úrskráning. Óþægileg grunnlína: **viðhald er 50–80% af TCO hugbúnaðar** — um það bil þrír fjórðu hlutar líftímakostnaðar falla til *eftir* útgáfu.

## Hvers vegna það skiptir máli

Heilbrigðistæknimat lærði fyrir löngu að verð lyfs er ekki kostnaður þess — lyfjagjöf, eftirlit og meðhöndlun aukaverkana eiga öll heima í líkaninu. Viðskiptarök hugbúnaðar sem telja aðeins smíða-/leyfiskostnað endurtaka naíva lyfjaverðsvilluna og vanmeta kerfisbundið kostnaðarhlið hvers [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/) og [fjárhagsáhrifa](../fjárlagaáhrifagreining/) sem þau mata. Í innkaupum NHS er TCO-agi það sem gerir fullyrðingu um kostnaðarhagkvæmni stafrænnar vöru heiðarlega — og þar tapa ódýrt útlítandi valkostir.

## Stærðfræðin

```
TCO = upphafskostnaður (smíði/leyfi + samþætting + gagnaflutningur + þjálfun)
    + Σ_t [rekstur + viðhald + stuðningur + innviðir + uppfærslur
           + samræmi/vottun]_t / (1 + r)^t
    + úrskráningarkostnaður (útganga, gagnaútdráttur, samhliða rekstur)

Tímaskeið: 3–5 ár í viðskiptum, líftími kerfis fyrir klíníska innviði
r: 3,5% opinber geiri (Green Book), 8–12% í viðskiptum
Viðmið: árlegt viðhald ≈ 15–20% af smíðakostnaði; ~78% af
líftíma-TCO eftir útgáfu; ef úrskráning er hunsuð og innilokun hjá seljanda
verðleggur hún sjálfa sig.
```

## Dæmi útreiknað

Tveir valkostir fyrir rafrænt mælingakerfi, 5 ára tímaskeið:

```
                        SaaS hjá seljanda   Innanhússsmíði
Ár 0 (leyfi/smíði)      250.000 £           900.000 £
Samþætting + þjálfun    180.000 £           150.000 £
Árlegur rekstur (ár 1–5) 120.000 £/ár       190.000 £/ár  (hýsing + 1,5 stöðugildi viðhald)
Útganga/úrskráning      60.000 £            30.000 £

TCO án afvöxtunar       1.090.000 £         2.030.000 £
```

Verkfræðimat á smíðavalkostinum (900 þús. £) var aðeins 44% af raunverulegu TCO hans — og smíðamat fer sjálft venjulega 30–40% fram úr (sjá [smíða eða kaupa](../smíða-eða-kaupa/)). Nema innanhússvalkosturinn skili verulega ólíkum *útkomum* gildir röksemdafærsla [kostnaðarlágmörkunar](../kostnaðarlágmörkunargreining/) og SaaS vinnur með ~940 þús. £.

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar vanmeta viðhaldsgögn eigin fags þegar þeir mæla með smíði: reglan um árlegt viðhald upp á 15–20% af smíðakostnaði þýðir að hvert 1 m£ kerfi skuldbindur hljóðlega 150–200 þús. £/ár af framtíðargetu — skuldbindingu sem á heima á sama hugarefnahagsreikningi og [tæknileg skuld](../tæknileg-skuld/). TCO er líka kostnaðarhelmingur hvers mælikvarða í þessari geymslu: kostnaður á dreifingu, [einingahagfræði skýjaþjónustu](../einingahagfræði-skýja/) og nefnaraaginn sem HTA þvingar upp á lyfjastyrktaraðila. Þegar verð vörunnar þinnar er dregið í efa er TCO-samanburður sem inniheldur raunverulegan rekstrarkostnað þess sem fyrir er yfirleitt sterkasta endurrömmun sem völ er á. Marga ára TCO-tala eins og sú hér að ofan er summa margra kostnaðarliða yfir tíma — sjá [gjaldmiðlaörugga kostnaðarsamantekt](../gjaldmiðlaörugg-kostnaðarsamantekt/) fyrir hvers vegna sú summa ætti að vera nákvæm tugabrot frekar en fljótandi punktur þegar líkan þarf að stemma upp á eyri, og [nákvæma sentadreifingu kostnaðar](../nákvæm-úthlutun-kostnaðar-upp-á-eyri/) til að skipta TCO-heildartölu milli kostnaðarstaða án þess að tapa aurum.

## Gildrur

- **Akkeri í útgáfukostnaði**: að bera valkosti saman við kostnað á ári 0 þegar röðunin snýst við á ári 3.
- **Ranghugmyndin um ókeypis innanhússvinnu**: viðhald innanhúss metið á núll því „teymið er þegar á launum“ — sjá [fórnarkostnaður](../fórnarkostnaður/).
- **Að hunsa útgönguleiðarkostnað**: gagnaútflutningur, riftun samnings og samhliða rekstur eru þar sem „ódýrt“ SaaS verður dýrt.
- **Brot á sama tímaskeiði**: að bera saman 3 ára SaaS-TCO við 10 ára afskrift smíða (sjá [tímaskeið](../tímaskeið/)).

## Heimildir

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
