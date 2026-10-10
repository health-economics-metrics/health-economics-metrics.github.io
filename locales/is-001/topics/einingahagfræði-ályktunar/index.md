# Einingahagfræði ályktunar

Einingahagfræði ályktunar verðleggur gervigreindareiginleika eftir jaðarreikniafli þeirra: **kostnaður á tóka**, samantekinn í kostnað á færslu, á notanda, á klínískt tilvik. Skilgreinandi gangverkið: verð stórra mállíkana hafa lækkað um **stærðargráðu á 1–2 ára fresti** við óbreytta getu — verðhjöðnunarhraði án fordæmis í kostnaðarmati heilbrigðistækni.

## Hvers vegna það skiptir máli

Tvær afleiðingar fylgja verðhruninu. Viðskiptalega getur gervigreindareiginleiki sem er á mörkunum í dag orðið léttvægt arðbær eftir 18 mánuði — og keppinautur verðlagður á kostnaði dagsins í dag verður undirboðinn. Fyrir hagrænt mat ofmetur sérhvert kostnaðarhagkvæmnilíkan fyrir klíníska þjónustu með gervigreind sem frystir ályktunarverð 2024 **verulega áframhaldandi kostnað** — greiningin þarf sviðsmyndir um verðlækkun eins og lyfjalíkön meðhöndla einkaleyfisfyrningu og innkomu samheitalyfja. (Viðmiðunarpunktar úr rannsókninni: úttakstókar fremstu líkana ~15–75 $/M um mitt ár 2026, millistigslíkön stærðargráðu ódýrari, geta á stigi GPT-4 niður úr ~20 $/M 2022 í ~0,40 $/M; Epoch AI mældi 9×–900× lækkun á ári eftir áfanga getu.)

## Stærðfræðin

```
Kostnaður á kall  = inntakstókar × inntaksverð + úttakstókar × úttaksverð
Kostnaður á einingu = Σ köll á einingu viðskiptaúttaks (á forgangsröðunartilvik,
                      á samið bréf, á samantekt viðtals)

Blönduð raunveruleiki = grunnkall + endurtekningar + RAG-samhengi (inntaksþungt)
                        + mats-/varnarköll (oft 20–50% yfirbygging)

Verðlækkunarsviðsmynd fyrir fjölára líkön:
  kostnaður_t = kostnaður_0 × d^t, prófaðu d ∈ {0,3, 0,5, 0,7}/ár í næmnigreiningu
```

## Dæmi útreiknað

Gervigreindarþjónusta fyrir útskriftarsamantektir: meðalsamantekt notar 12.000 inntakstóka (sjúkraskrársamhengi) + 1.200 úttak, auk staðfestingarlotu (6.000 inn / 300 út). Á 3 $/M inn, 15 $/M út:

```
Uppkast:      12.000 × 3/1M + 1.200 × 15/1M  = 0,036 $ + 0,018 $ = 0,054 $
Staðfesting:   6.000 × 3/1M +   300 × 15/1M  = 0,018 $ + 0,0045 $ ≈ 0,023 $
Á samantekt ≈ 0,077 $ → á 100.000 samantektir/ár ≈ 7.700 $

Gegn ~20 klínískum mínútum sem sparast á samantekt (≈ 25 £) er ályktun
0,25% af verðmætinu sem myndast — hagfræðin ræðst af öllu NEMA tókunum:
samþættingu, mati, stjórnarháttum, upptöku.
```

Sú niðurstaða — ályktunarkostnaður er sjaldan bindandi takmörkunin, á núverandi verði, fyrir klínísk verkefni af miklu verðmæti — er sjálf fundurinn sem vert er að bera inn á verðlagsfundi.

## Tengsl við hugbúnaðarverkfræði

Þetta er [einingahagfræði skýja](../einingahagfræði-skýja/) sérhæfð fyrir gervigreind, með þremur starfsvenjuathugasemdum: **mældu á hverja viðskiptaeiningu**, ekki á hvert API-kall, svo talan tengist beint inn í [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/)-/[fjárlagaáhrifa](../fjárlagaáhrifagreining/)líkön; **fylgstu með ósamhverfu inntaks/úttaks** (úttak yfirleitt ~4× inntaksverð; RAG-arkitektúr eru inntaksþung — arkitektúrval eru verðlagsval); og **beindu eftir verkefnaþrepi** — að para getu líkans við erfiðleika verkefnis (ódýr líkön í flokkun, fremstu í samantekt) lækkar blandaðan kostnað reglulega um 5–10× við sömu gæði, hugbúnaðarútgáfan af því að nota ódýrasta árangursríka inngripið ([kostnaðarlágmörkun](../kostnaðarlágmörkunargreining/), jafngildi sannað).

## Gildrur

- **Frystverðs fjölára líkön** — ofmeta kostnað; en líka **tekjulíkön sem gera ráð fyrir verðhjöðnun** — verðstríð er ekki samningur; sviðsmyndaðu hvort tveggja.
- **Að horfa framhjá mats-yfirbyggingu**: varnir, dómarar og endurtekningar eru raunverulegir tókar, oft meirihlutinn í stýrðu umhverfi.
- **Tókahyggja**: seinkun, hraðatakmörk og samhengisgluggatakmarkanir bera kostnað sem ekkert tókaverð fangar.

## Heimildir

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
