# Vænt verðmæti fullkominna upplýsinga (EVPI)

EVPI er hámarksupphæðin sem ákvörðunaraðili ætti að greiða fyrir að útrýma óvissu áður en ákvörðun er tekin — formlegt verð á „gerum rannsókn fyrst“.

## Hvers vegna það skiptir máli

Heilbrigðiskerfi standa stöðugt frammi fyrir valinu: taka upp núna á ófullkomnum sönnunargögnum, eða fjármagna meiri rannsóknir fyrst. EVPI setur tölu á seinni kostinn. Ef EVPI er 50.000 £ og fyrirhuguð rannsókn kostar 2 milljónir £, taktu upp núna. Ef EVPI er 20 milljónir £ er rannsóknin kjarakaup. Sama spurning — „ættum við að prófa þetta áður en við dreifum því?“ — kemur upp fyrir sérhverja ákvörðun um tól í stórfyrirtæki, og næstum enginn verðleggur hana. Til að verðleggja valréttinn til að útvíkka verkefni síðar, frekar en valréttinn til að afla upplýsinga fyrst, sjá [Valréttarverðmat](../valréttarverðmat/).

## Stærðfræðin

EVPI er bilið milli þess að ákveða með fullkominni framsýni og þess að ákveða núna á væntingum:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = óvissar breytur (með sameiginlega dreifingu sína)
NMB(j,θ) = nettó peningaávinningur kosts j gefið θ
```

Fyrri liðurinn: meðaltal ávinnings besta vals yfir hvern mögulegan heim (þú velur alltaf rétt). Seinni liðurinn: ávinningur þess eina kosts sem er bestur að meðaltali (þú verður að skuldbinda þig núna). EVPI ≥ 0 alltaf. EVPI þýðis margfaldast með fjölda ákvarðana sem verða fyrir áhrifum. Reiknað beint úr [PSA](../líkindanæmnigreining/)-úrtökum.

## Dæmi útreiknað

Dreifa gervigreindarskjölunaraðstoðarmanni til 5.000 starfsmanna, eða ekki. Tveir heimar:

```
Heimur A (p = 0,6): aðstoðarmaðurinn sparar 20 mín/dag → NMB dreifingar = +8 m£
Heimur B (p = 0,4): aðstoðarmaðurinn sparar ~0 (núningur í vinnuflæði) → NMB dreifingar = −3 m£
NMB „dreifa ekki“ = 0 £ í báðum heimum.
```

Ákveða núna: E[NMB dreifing] = 0,6 × 8 − 0,4 × 3 = **+3,6 m£** → dreifa.

Með fullkomnum upplýsingum: í heimi A velja dreifingu (+8 m£), í heimi B velja ekkert (0 £). Vænt gildi = 0,6 × 8 + 0,4 × 0 = **4,8 m£**.

```
EVPI = 4,8 m£ − 3,6 m£ = 1,2 m£
```

Ströng 3 mánaða tilraun sem kostar 150.000 £ og leysir að verulegu leyti úr því í hvorum heiminum þú ert er áreiðanlega þess virði — og sérhver tilraun sem kostar meira en 1,2 m£ er það ekki, hversu ítarleg sem hún er.

## Tengsl við hugbúnaðarverkfræði

EVPI er hagfræði könnunarverkefnisins (spike), tilraunarinnar, A/B-prófsins og hugmyndaprófunarinnar (proof-of-concept). Hún gefur tvær hagnýtar reglur:

- **Tilraun er aðeins þess virði að fjármagna ef ákvörðunin gæti í raun breyst.** Ef þú myndir dreifa hvað sem tilraunin segir er EVPI = 0 og tilraunin leikhús.
- **Settu þak á kostnað tilraunar við EVPI.** Verðmæti upplýsinga er takmarkað af verðmæti ákvörðunarinnar sem þær upplýsa.

Hlutaleg EVPI (EVPPI) útvíkkar þetta á stakar breytur: „hvers virði er að negla niður töluna um sparaðan tíma sérstaklega?“ — sem segir þér hvað tilraunin ætti að mæla. Til að verðleggja *tiltekna* fyrirhugaða rannsókn frekar en að útrýma allri óvissu, sjá [EVSI](../vænt-verðmæti-úrtaksupplýsinga/).

## Gildrur

- **Að keyra tilraunir án tengdrar ákvörðunarreglu** — upplýsingar sem geta ekki breytt valinu eru verðlausar samkvæmt skilgreiningu.
- **Að horfa framhjá tafakostnaði við að afla upplýsinga**: 6 mánaða tilraun tefur 6 mánuði af ávinningi ([kostnaður við tafir](../kostnaður-við-tafir/)); nettóvirði tilraunarinnar = EVPI sem leyst er − tafakostnaður − kostnaður tilraunar.
- **Að líta á EVPI sem spá.** Hún er efri mörk verðmætis upplýsinga, ekki mat á því sem tiltekin rannsókn skilar.

## Heimildir

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
