# Stigvaxandi kostnaðarhagkvæmnihlutfall (ICER)

ICER er aukakostnaðurinn á hverja aukaeiningu heilsuáhrifa þegar þú velur einn kost fram yfir næstbesta valkost. Það er fyrirsagnartala heilbrigðistæknimats. (Þegar áhrifaeiningin eru QALY kallast það einnig stigvaxandi kostnaðar-nytjahlutfall, ICUR.)

## Hvers vegna það skiptir máli

Heilbrigðiskerfi meta tækni aldrei í einangrun — alltaf *stigvaxandi*, gegn því sem annars yrði gert. NICE ber ICER tækni saman við **20.000–30.000 £ á hvert QALY** þröskuld sinn; bandaríska ICER-stofnunin skýrir frá yfir 50.000–200.000 $/QALY; Kanada vinnur við u.þ.b. 50.000 CAD/QALY. Hvort varan þín er „þess virði“ fyrir landsbundna heilbrigðisþjónustu er formlega hvort ICER hennar nær undir staðbundinn þröskuld. Sjá [greiðsluviljaþröskuldar](../greiðsluviljaþröskuldar/).

## Stærðfræðin

```
ICER = (Kostnaður_nýtt − Kostnaður_viðmið) / (Áhrif_nýtt − Áhrif_viðmið)
     = ΔC / ΔE
```

Túlkunarreglur:

- ΔC < 0, ΔE > 0: nýi kosturinn **drottnar** — ódýrari og betri; ekkert hlutfall þarf.
- ΔC > 0, ΔE > 0: reiknaðu ICER, berðu saman við þröskuld λ; taktu upp ef ICER < λ.
- ΔC > 0, ΔE < 0: nýi kosturinn er drottnaður — hafnaðu.
- Hlutföll hegða sér illa nálægt ΔE = 0 — kjóstu [nettó peningaávinning](../nettó-peningaávinningur/) til röðunar.

Viðmiðið verður að vera *næsti ódrottnaði kostur*, ekki „gera ekkert“ — sjá [drottnun og hagkvæmnimörk](../drottnun-og-hagkvæmnimörk/).

## Dæmi útreiknað

Fjarvöktunarþjónusta fyrir hjartabilunarsjúklinga, á 1.000 sjúklinga á ári, á móti venjulegri umönnun:

```
Kostnaður: þjónusta 900.000 £; innlagnir sem komist er hjá spara 600.000 £
           ΔC = 900.000 − 600.000 = 300.000 £
Áhrif:     fyrra inngrip vinnur 25 QALY
           ΔE = 25

ICER = 300.000 / 25 = 12.000 £ á QALY
```

12.000 £/QALY er þægilega undir þröskuldi NICE upp á 20.000 £ — sterk rök. Taktu eftir hvernig *nettó* kostnaður skiptir máli: án jöfnunarinnar upp á 600.000 £ væri ICER 36.000 £/QALY og rökin féllu líklega. Kostnaðarjöfnun og gæði sönnunargagna um hana er þar sem þessar greiningar vinnast og tapast (sjá [afleiddur kostnaður sem komist er hjá](../afleiddur-kostnaður-sem-komist-er-hjá/)).

## Tengsl við hugbúnaðarverkfræði

ICER-agi flyst í heild á verkfræðiákvarðanir:

```
(kostnaður kosts B − kostnaður kosts A) / (útkoma B − útkoma A)
```

— stigvaxandi kostnaður á hverja viðbótardreifingu, á klukkustund verkfræðings sem sparast, á atvik sem komist er hjá — alltaf gegn næstbesta valkosti, ekki gegn því að gera ekkert. Venjurnar tvær sem vert er að stela: (1) *nefndu viðmiðið skýrt*; flestar fullyrðingar um arðsemi tóla bera hljóðlega saman við stráman; (2) *dragðu kostnað frá fyrst* — tól sem kostar 100 þús. £ en ryður úr vegi 80 þús. £ af núverandi útgjöldum hefur ΔC = 20 þús. £.

## Gildrur

- **Að bera ICER saman milli gjaldmiðla án skýrs umreikningsskrefs**: ICER reiknað í gjaldmiðli eins lands verður að umreikna með tilgreindri aðferð áður en það er borið saman við þröskuld annars lands — sjá [samanburð ICER milli gjaldmiðla](../samanburður-icer-milli-gjaldmiðla/) fyrir hvers vegna val á umreikningsstuðli (kaupmáttarjafnvægi vs markaðsgengi) getur sjálft snúið ákvörðun um upptöku við.
- **Leikir með viðmið**: að bera saman við úrelt eða tilbúið slæmt grunngildi blæs upp ΔE og smjaðrar fyrir ICER.
- **Meðaltöl í stað stigvaxtar**: kostnaður á QALY heillar áætlunar er ekki ICER þess að víkka eða taka hana upp.
- **Punktmatsdýrkun**: ICER eru hlutföll tveggja óvissra mismuna; skýrðu frá óvissu með [PSA og CEAC](../líkindanæmnigreining/).
- **Neikvæð ICER eru tvíræð** (ódýrara-og-betra vs dýrara-og-verra gefa sama formerki) — skýrðu aldrei frá neikvæðu ICER án þess að segja í hvaða fjórðungi það er.

## Heimildir

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
