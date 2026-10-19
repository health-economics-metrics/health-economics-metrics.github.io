# Gæðamælikvarðar gervigreindar

Mælikvarðar á réttmæti úttaks sem gervigreind framleiðir: nákvæmni gagnvart sannleiksgrunni, **trúfesti/jarðtenging** (er sérhver fullyrðing studd af því samhengi sem gefið var?) og **ranghugmyndahlutfall** (hve stór hluti úttaks inniheldur óstutt eða rangt efni?). Í heilbrigðisumhverfi eru þetta ekki gæðaskraut — þetta eru skaðatíðni.

## Hvers vegna það skiptir máli

Viðmið á læknisfræðisviði hafa mælt ranghugmyndahlutfall **yfir 60% hjá ójarðtengdum stórum mállíkönum** í læknisfræðilegum verkefnum (sum opin líkön >80%), á meðan jarðtenging, sókn og rökhugsunarhamir lækka hlutfallið stórlega (t.d. dró hugsunarhamur GPT-5 úr ranghugmyndum í HealthBench úr 3,6% í 1,6% í einu viðmiði). Ranghermdur skammtur eða tilbúin tilvitnun í klínísku vinnuferli er **atvik rangra upplýsinga með skaðaleið** — það á heima í skaðaarmi hvers hagfræðilíkans, verðlagt eins og fölsk jákvæð niðurstaða í [skimunarhagfræði](../skimunarhagfræði/): hvert og eitt kallar fram afleiddan kostnað (aðgerðir á röngum upplýsingum, staðfestingarvinna, lagaleg áhætta, glatað traust).

## Stærðfræðin

```
Ranghugmyndahlutfall = úttök sem innihalda óstutt/rangt efni / heildarúttök
  innra:    mótmælir því samhengi sem gefið var
  ytra:     óstaðfestanleg tilbúningur umfram samhengið

Trúfesti (að hætti RAGAS) = studdar fullyrðingar í svari / heildarfullyrðingar í svari
Nákvæmni/endurheimt samhengis = gæði sóknar sem nærir framleiðandann

Hagfræðileg vigtun — ekki allar ranghugmyndir kosta jafnt:
  væntur skaðakostnaður = Σ yfir villutegundir (hlutfall × P(ógreint) ×
                          P(brugðist við) × kostnaður á villu sem brugðist er við)
  Mannleg yfirferð ákvarðar P(ógreint) — og kostnaður hennar á
  líka heima í líkaninu (mínútur yfirferðaraðila × umfang).
```

## Dæmi útreiknað

Gervigreindaraðstoð við klíníska kóðun vinnur úr 200.000 tilvikum á ári; úttekt sýnir að 2% úttaks innihalda marktæka kóðunarvillu; mannlegir kóðarar finna 85% þeirra:

```
Villur sem komast í skil = 200.000 × 0,02 × 0,15 = 600/ár
Kostnaður á ófundna villu (meðalvilla í reikningsfærslu + endurskoðunaráhætta) ≈ 250 £
Væntur villukostnaður     = 600 × 250 = 150.000 £/ár
Kostnaður við yfirferð (2 mín × 200 þús. × 0,50 £/mín)  = 200.000 £/ár

Umbótatilvik: jarðtenging sóknar lækkar villuhlutfall í 0,8%
→ ófundnar villur 240, villukostnaður 60.000 £ (−90 þús. £/ár); yfirferðartími
  getur líka lækkað (úrtak í stað fullrar yfirferðar) — gæðafjárfestingin
  borgar sig áður en nokkur hraðafullyrðing kemur til.
```

## Tengsl við hugbúnaðarverkfræði

Líttu á gæði líkana eins og hagfræði prófunarþekju, með aga á heilbrigðisstigi: **matsgagnasöfn eru þín klíníska rannsókn** — fyrirfram skráð, dæmigerð fyrir *þína* tilvikablöndu, endurnýjuð gegn reki; **jarðtenging slær umfang í staðreyndaverkefnum** (sókn + beiðnir sem krefjast tilvitnana er yfirleitt ódýrasta ranghugmyndalækkun sem í boði er — sbr. [einingahagfræði ályktunar](../einingahagfræði-ályktunar/) fyrir lykilálag hennar); og **birtu rekstrarpunktinn**: eins og [næmi/sértæki](../mat-á-klínískri-gervigreind/) þýðir „97% trúfast“ ekkert án verkefnadreifingar og greiningarþröskulds. Stærðfræði yfirferðarlagsins hér að ofan er sami [NNT/NNH](../fjöldi-sem-meðhöndla-þarf/) reikningurinn og í hverju skimunarhliði.

## Gildrur

- **Ígræðsla viðmiðs í framleiðslu**: ranghugmyndahlutfall er gríðarlega háð verkefni; þín tilvikablanda er eina viðmiðið sem skiptir máli.
- **Óverðlögð mannleg yfirferð**: „læknir skoðar allt“ helmingar ávinninginn og verður að birtast í kostnaðarlínunni — og árvekni dvínar (sjálfvirknisjálfsánægja), svo P(ógreint) hækkar með trausti.
- **Að fínstilla meðalgæði á meðan skottáhætta ber skaðann**: ein tilbúin ofnæmisfærsla vegur þyngra en þúsund óþægilega orðuð setning; vigtaðu villur eftir afleiðingum, samkvæmt formúlunni fyrir vænt tjón.

## Heimildir

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
