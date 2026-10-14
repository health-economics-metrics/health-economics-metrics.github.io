# Mannauðsaðferð á móti núningskostnaðaraðferð

Þetta eru tvær keppandi aðferðir til að meta glataða framleiðni — vegna veikinda, fötlunar eða dauða — í sjúkdómskostnaðar- og kostnaðar-ábatarannsóknum. Mannauðsaðferðin (HCA) metur allt tapað framleiðsluverðmæti allan fjarveruna á launataxta; núningskostnaðaraðferðin (FCM) metur það aðeins fyrir styttra tímabilið sem vinnuveitandi þarf í raun til að endurheimta framleiðslu. Valið milli þeirra breytir mati á óbeinum kostnaði um tvöfalt eða meira.

## Hvers vegna það skiptir máli

Óbeinn kostnaður (framleiðnikostnaður) er einn umdeildasti liður heilsuhagfræði einmitt vegna þess að aðferðirnar tvær eru svo ósammála. HCA lítur á hvern fjarvistardag sem dag af framleiðslu sem hagkerfið tapar í raun, metinn á fullum launum allan tímann — eða, við dauða eða varanlega fötlun, það sem eftir er starfsævinnar. FCM færir rök fyrir því að í hagkerfi með atvinnuleysi og slaka á vinnumarkaði dragi mest af langri fjarveru ekki í raun úr landsframleiðslu þegar vinnuveitandi hefur þjálfað staðgengil eða endurdreift vinnu; aðeins „núningstímabilið“ — tíminn til að koma framleiðslu aftur á fyrra stig — táknar raunverulegt tap. FCM skilar því kerfisbundið lægri, varfærnari mötum á óbeinum kostnaði en HCA, og aðferðirnar tvær eru ekki skiptanlegar neðanmálsgreinar: þær eru ólíkar hagfræðikenningar um hvað „glötuð framleiðni“ þýðir. Þess vegna útilokar [viðmiðunartilvik NICE](../mat-á-heilbrigðistækni/) framleiðnikostnað sjálfgefið og tilkynnir hann, ef yfirhöfuð, sem sérstaka næmnigreiningu frá samfélagslegu sjónarhorni frekar en að blanda honum í ICER viðmiðunartilviksins — sjá [sjónarhorn greiningar](../sjónarhorn-greiningar/).

## Stærðfræðin

```
Mannauðsaðferð:
HCA_kostnaður = dagleg_laun × dagar_tapaðir

Núningskostnaðaraðferð (einfölduð, þakin við núningstímabil):
FCM_kostnaður = dagleg_laun × min(dagar_tapaðir, núningstímabil_dagar)

núningstímabil_dagar = lands-/geirasértækt mat á tíma til að endurheimta
                        framleiðslu (sögulega ~85 dagar í hollenskum iMTA
                        kostnaðarleiðbeiningum; breytilegt eftir löndum og
                        endurmetið reglulega)
```

Allur ágreiningur aðferðanna tveggja býr í `min()`: HCA setur aldrei þak á `dagar_tapaðir`, svo kostnaður heldur áfram að vaxa alla fjarveruna, en FCM setur þak á taldu dagana við núningstímabilið, sama hve löng fjarveran er í raun.

## Dæmi útreiknað

Starfsmaður er frá vinnu í `dagar_tapaðir = 180` daga, með `dagleg_laun = 150 £`.

**Mannauðsaðferð**:

```
HCA_kostnaður = 150 × 180 = 27.000 £
```

**Núningskostnaðaraðferð**, með núningstímabil `núningstímabil_dagar = 85` (söguleg viðmið iMTA í Hollandi, eins og við reglulega endurmat leiðbeininganna):

```
FCM_kostnaður = 150 × min(180, 85) = 150 × 85 = 12.750 £
```

12.750 £ hjá FCM er innan við helmingur af 27.000 £ hjá HCA fyrir *sömu* fjarveru — valið á aðferðinni eitt og sér breytir sjúkdómskostnaðarrökum verulega, áður en nokkur önnur forsenda er snert.

## Tengsl við hugbúnaðarverkfræði

Þetta varpast beint á hvernig teymi metur að verkfræðingur hætti:

- **Kostnaðarmat starfsmannaveltu í anda HCA**: að meta tapið sem full laun brottfarins verkfræðings meðan staðan er laus. Þetta er einfalda útgáfan af flestum líkönum um veltukostnað, og hún ofmetur tapið af sömu ástæðu og HCA ofmetur framleiðnitap — hún gerir ráð fyrir að lausa getan hafi verið fullframleiðin allan tímann og ekkert annað hafi tekið upp slakann. Sjá [starfsmannavarðveisla](../varðveisla-starfsfólks/), sem magngreinir keðju ráðninga/innleiðingar/afleysingar sem þessi aðferð nærir.
- **Kostnaðarmat starfsmannaveltu í anda FCM**: að meta tapið aðeins fyrir raunverulegan tíma til að fylla stöðuna og koma staðgengli upp á skrið — verkfræðilegt „núningstímabil“. Þetta er verjanlegri talan fyrir viðskiptarök, nákvæmlega eins og FCM er varfærnara valið í sjúkdómskostnaðarrannsókn.
- Undirliggjandi agi er sá sami og í [fórnarkostnaði](../fórnarkostnaður/): metið auðlind sem er ryðjað úr vegi eftir því sem raunverulega glatast, ekki eftir fyrirsagnarlengd margfaldaðri með gjaldi.

## Gildrur

- **Að blanda HCA og FCM innan einnar greiningar, eða skýra aðeins frá annarri án þess að upplýsa um valið.** Sömu fjarvistargögn geta gefið 2× eða meiri mun á tilkynntum kostnaði eftir aðferð; valið verður að vera tilgreint, ekki grafið.
- **Að nota HCA í rökum frá samfélagslegu sjónarhorni án þess að merkja það sem næmnigreiningu.** Viðmiðunartilvik NICE útilokar framleiðnikostnað skýrt; HCA-mat frá samfélagslegu sjónarhorni á heima í sviðsmyndagreiningu, ekki í fyrirsagnar-ICER.
- **Að beita hvorri aðferð sem er á ólaunað eða utanmarkaðsvinnu (t.d. umönnun) án leiðréttingar.** Báðar aðferðir gera ráð fyrir launataxta sem staðgengli verðmætis, sem flyst ekki hreint yfir á vinnu án markaðslauna.

## Heimildir

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
