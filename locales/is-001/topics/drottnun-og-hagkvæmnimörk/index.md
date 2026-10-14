# Drottnun og hagkvæmnimörk

Kostur er **drottnaður** ef annar kostur kostar minna *og* skilar meiru. **Hagkvæmnimörkin** eru það sem eftir stendur þegar drottnuðum kostum hefur verið útrýmt: mengi valkosta þar sem meira krefst þess að borga meira.

## Hvers vegna það skiptir máli

Áður en nokkur umræða um þröskulda eða fjárlög hefst útrýmir heilbrigðistæknimat fyrst kostum sem enginn ætti nokkru sinni að velja. Að teikna alla kosti á kostnaðar-á-móti-áhrifum plan og draga mörkin er fimm mínútna æfing sem fellir reglulega helming stuttlista. Stigvaxandi samanburður ([ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/)) er síðan aðeins reiknaður *eftir mörkunum*, hver kostur gegn næsta ódýrasta ódrottnaða — aldrei gegn „gera ekkert“ þegar betri millikostir eru til.

## Stærðfræðin

```
Ströng drottnun:     A drottnar yfir B ef Kostnaður_A ≤ Kostnaður_B og Áhrif_A ≥ Áhrif_B
                     (með að minnsta kosti einu stranglega ójöfnu)

Útvíkkuð drottnun:   B er útilokaður ef blanda A og C nær meiri áhrifum
                     á hvert pund — greint þegar ICER lækka eftir því sem þú
                     færist upp mörkin. Gild mörk-ICER verða að vera vaxandi.
```

Aðferð: raðaðu kostum eftir áhrifum; fjarlægðu stranglega drottnaða; reiknaðu ICER milli nágranna; fjarlægðu hvern kost þar sem ICER fer yfir ICER næsta áhrifameiri kosts (útvíkkuð drottnun); endurtaktu þar til ICER vaxa einhalla.

## Dæmi útreiknað

Fjórir kostir til að fækka ósóttum tímum (áhrif = tímar endurheimtir á ári):

```
Kostur            Kostnaður/ár   Endurheimt
Gera ekkert       0 £            0
SMS-áminningar    20.000 £       2.000
Símtöl            120.000 £      2.200
SMS + gervigreind í forgangsröðun 90.000 £  3.500
```

Símtöl eru **stranglega drottnuð** af SMS + gervigreind í forgangsröðun (kosta meira, endurheimta færri). Mörk: ekkert → SMS → SMS + gervigreind.

```
ICER(SMS vs ekkert)    = 20.000 / 2.000  = 10 £ á hvern endurheimtan tíma
ICER(SMS+GV vs SMS)    = (90.000 − 20.000) / (3.500 − 2.000) = 46,67 £ á hvern tíma
```

Vaxandi ICER → gild mörk. Á ~160 £ sparnaði á hvern endurheimtan sjúkrahústíma (sjá [mætingarleysishlutfall](../mætingarleysishlutfall/)) er hvort tveggja þrepin á mörkunum þess virði að taka; tillagan um símaver ætti aldrei að ná til nefndarinnar.

## Tengsl við hugbúnaðarverkfræði

Smíðaðu sama línurit fyrir hverja ákvörðun um tól: kostnað á ári á einum ás, mælda útkomu (stundir sparaðar, atvik forðað, dreifingar gerðar mögulegar) á hinum. Punktar upp og til vinstri við mörkin eru útilokaðir áður en nokkur deilir um fjárlög. Þetta endurramma val á seljanda úr deilum um eiginleikalista yfir í „þú ert drottnaður; fundinum er lokið“. Það afhjúpar líka algengt mynstur stórfyrirtækja að kaupa dýrasta kostinn fyrir lítinn ávinning — réttmætt aðeins ef stigvaxandi verð á stigvaxandi einingu er verð sem stofnunin myndi vitandi vits borga.

## Gildrur

- **Að bera allt saman við grunnlínu** í stað næsta kosts á mörkunum — smjaðrar fyrir dýrum kostum með því að fela ódýrari næstum-jafngilda.
- **Einvíðar áhrifaeinkunnir** sem fela það sem skiptir máli; ef tvær útkomur skipta máli, sameinaðu þær á verjanlegan hátt (sjá [kostnaðar-nytjagreiningu](../kostnaðar-nytjagreining/)) eða sýndu tvenn mörk.
- **Að gleyma óvissu**: kostir nálægt mörkunum geta skipt um sæti undir [næmnigreiningu](../næmnigreining/).

## Heimildir

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
