# Líkindanæmnigreining (PSA)

PSA úthlutar líkindadreifingu á sérhverja óvissa breytu, tekur úrtök úr þeim öllum samtímis þúsundir sinnum (Monte Carlo) og skýrir frá *líkunum* á að kostur sé besta valið — í stað eins punktmats.

## Hvers vegna það skiptir máli

Viðmiðunartilvik NICE *krefst* PSA. Ákvörðunarbundin greining svarar „hvað ef eitt inntak er rangt?“; PSA svarar „miðað við allt sem við vitum ekki í einu, hve líklegt er að við tökum rétta ákvörðun?“ Aðalúttak hennar, **kostnaðarhagkvæmnissamþykktarferillinn (CEAC)**, teiknar líkurnar á að kostur sé kostnaðarhagkvæmur gegn greiðsluviljaþröskuldinum — og breytir „ICER er 24.000 £/QALY“ í „það eru 78% líkur á að þetta sé rétta valið við 30.000 £/QALY“.

## Stærðfræðin

```
Fyrir hvert N úrtak (N ≈ 10.000):
  taktu úrtak af hverri breytu θ úr dreifingu hennar
    (kostnaður ~ Gamma, líkindi ~ Beta, nytjar ~ Beta, áhrif ~ Normal/logNormal)
  reiknaðu NMB_j(θ) = λ × Áhrif_j(θ) − Kostnaður_j(θ) fyrir hvern kost j

CEAC_j(λ) = hlutfall úrtaka þar sem kostur j hefur hæsta NMB við þröskuld λ
```

Sjá [nettó peningaávinningur](../nettó-peningaávinningur/) fyrir NMB og [greiðsluviljaþröskuldar](../greiðsluviljaþröskuldar/) fyrir λ.

## Dæmi útreiknað

Viðskiptarök um flutning á vettvang. Þrjú óviss inntök:

```
Flutningskostnaður   ~ Gamma,   meðaltal 800 þús. £, sf 200 þús. £
Árlegur ávinningur   ~ Normal,  meðaltal 350 þús. £, sf 150 þús. £
Tímalengd ávinnings  ~ Jöfn,    3–6 ár
```

Fyrir hvert af 10.000 úrtökum reiknaður nettóávinningur = tímalengd × árlegt − kostnaður (núvirðing sleppt til skýrleika). Dæmi um niðurstöður:

```
Meðal nettóávinningur:      775 þús. £
Líkur á nettó > 0:          0,86
5.–95. hundraðshlutamark:   −180 þús. £ … +1,9 m£
```

Punktmatið sagði „augljóslega já“. PSA segir „86% já, með raunverulegum hala þar sem við töpum 180 þús. £+“ — sem er það sem eigandi safns þarf í raun, og það verðleggur rökin fyrir því að keyra könnunarverkefni fyrst (sjá [EVPI](../vænt-verðmæti-fullkominna-upplýsinga/)).

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar treysta nú þegar Monte Carlo fyrir afhendingarspám (úrtök afkasta slá punktmat). Víkkaðu sömu vélbúnað til peninga: dreifingar á upptöku, sparaðan tíma og laun, og skýrðu svo frá „líkum á að þessi fjárfesting í vettvangi sé nettó jákvæð“ í stað fölsk-nákvæms ROI. Ferill í anda CEAC — líkur á að vera besti kosturinn sem fall af því hvernig stofnunin metur verkfræðingsstund — er sannarlega betri gripur fyrir fjármögnunarnefnd en nokkur stök tala.

## Gildrur

- **Rusldreifingar**: PSA með tilbúnum staðalfrávikum er ákvörðunarbundin greining í rannsóknarsloppi. Byggðu dreifni á gögnum eða skipulagðri öflun sérfræðiálits.
- **Að horfa framhjá fylgni** milli breyta (mikil upptaka fylgir yfirleitt miklum sparnaði tíma); sjálfstæð úrtakstaka vanmetur skottáhættu.
- **Að skýra aðeins frá meðaltali** hermunarinnar — allur tilgangurinn er dreifingin og ákvörðunarlíkurnar.

## Heimildir

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
