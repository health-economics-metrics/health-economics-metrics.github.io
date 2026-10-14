# Fjöldi sem meðhöndla þarf (NNT)

NNT er fjöldi sjúklinga sem verða að fá inngrip til að **einn** viðbótarsjúklingur njóti ávinnings, yfir tiltekið tímabil. Það breytir prósentulækkunum á áhættu — sem villa um fyrir — í einingar fyrirhafnar á ávinning sem hver sem er getur rökrætt.

## Hvers vegna það skiptir máli

„Dregur úr hjartaáföllum um 25%!“ hljómar afdráttarlaust. Ef grunnáhætta er 4% á 5 árum er algild lækkun 1 prósentustig, svo **100 manns þurfa að taka lyfið í 5 ár til að 1 njóti ávinnings** — og allir 100 greiða kostnaðinn og aukaverkanirnar. NNT er mótefnið gegn markaðssetningu á hlutfallslegri áhættu, þess vegna leiðir gagnreynd læknisfræði með því. Statín til frumforvarna: NNT ≈ 50–100 á 5 árum á hvert hjartaáfall sem komist er hjá. Spegilmynd þess, **NNH** (fjöldi sem skaðast þarf), telur hve margir eru meðhöndlaðir á hvern einstakling sem skaðast.

## Stærðfræðin

```
ARR = atburðatíðni viðmiðunarhóps − atburðatíðni meðferðarhóps   (algild áhættulækkun)
NNT = 1 / ARR

NNH = 1 / (skaðatíðni_meðferð − skaðatíðni_viðmið)

Hagfræðibrú:
kostnaður á atburð sem komist er hjá = NNT × kostnaður á meðferðarlotu
```

Tilgreindu alltaf tímabilið og grunnþýðið — NNT er merkingarlaust án hvors tveggja.

## Dæmi útreiknað

Fallspákerfi á sjúkrahúsi merkir áhættusjúklinga fyrir inngrip (rúmskynjarar, yfirferð, eftirlit). Rannsókn: föll með meiðslum falla úr 3,2% í 2,4% innlagna.

```
ARR = 0,8 prósentustig → NNT = 1/0,008 = 125
   (125 sjúklingar þurfa að fá inngripspakkann til að koma í veg fyrir 1 fall með meiðslum)

Kostnaður inngrips ≈ 40 £/sjúkling → kostnaður á fall sem komist er hjá = 125 × 40 = 5.000 £
Kostnaður falls með meiðslum á legudeild (aukadvöl, myndgreining, málaferli) ≈ 12.000 £
Nettó: forvarnir borga sig ~2,4:1 — og QALY-ávinningurinn kemur ofan á.
```

Taktu eftir hvernig NNT heldur fullyrðingunni heiðarlegri: „dregur úr föllum um 25%“ og „kemur í veg fyrir eitt fall á hverja 125 meðhöndlaða“ eru sama niðurstaða, mismunandi sannfærandi.

## Tengsl við hugbúnaðarverkfræði

NNT er rétta einingin fyrir hvert hlið eða athugun sem fer yfir marga hluti til að ná fáum: **„fjöldi PR sem verða að fara í gegnum gervigreindar-rýnihliðið til að ná einum galla á leið í framleiðslu“.** Ef hliðið rýnir 400 PR á hverja raunverulega fundna (NNT = 400) á 4 mínútna athygli forritara hver, kostar ein fundin ~27 forritarastundir — berðu það nú saman við atvikskostnaðinn sem það kemur í veg fyrir. NNH varpast á fölsk jákvæð: hve mörg PR á hverja *ranga* merkingu, og hvað kostar hver í athygli og trausti? Tól í anda skimunar (kóðaskoðarar, öryggisskannar, frávikagreining) ættu að fylgja NNT/NNH-reikningur — sjá [skimunarhagfræði](../skimunarhagfræði/) fyrir hvers vegna lágt algengi gerir þessar tölur grimmar. [Fjöldi sem skima þarf](../fjöldi-sem-skima-þarf/) er hliðstæða tölunnar einu stigi ofar, fyrir heila skima-svo-meðhöndla áætlun frekar en meðferð eina.

## Gildrur

- **Ekkert tímabil**: „NNT = 50“ þýðir ekkert; „NNT = 50 á 5 árum“ er fullyrðing.
- **Ígræðsla grunnáhættu**: NNT reiknað í hááhættuþýði rannsóknar hrynur í lágáhættuþýði dreifingar.
- **Að horfa framhjá NNH** — hlið með NNT 400 og NNH 3 er ónæðisframleiðandi, ekki öryggiskerfi.

## Heimildir

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
