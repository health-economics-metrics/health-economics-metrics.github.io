# Tímaskiptaaðferð (TTO) til að leiða fram nytjagildi

TTO er staðlað aðferð til að leiða fram nytjagildi heilsuástands beint frá svaranda, í stað þess að finna það upp. Hún er ein þeirra framleiðsluaðferða — ásamt stöðluðu veðmáli og valtilraunum (discrete-choice experiments) — sem framleiða gildasöfnin að baki mælitækjum eins og [EQ-5D](../eq-5d/), og þar með að baki flestum [QALY](../gæðaleiðrétt-lífár/) útreikningum sem á eftir koma.

## Hvers vegna það skiptir máli

Sérhvert nytjavægi sem fer inn í QALY-útreikning varð að koma einhvers staðar frá. TTO er leiðin: fyrir ástand sem telst betra en dauði er svaranda spurður hve mörg ár `X` í fullri heilsu hann teldi jafngild `T` árum í skerta ástandinu (`X < T`); nytjagildið er `X / T`. Fyrir ástand sem sumir svarendur telja verra en dauða bregst staðalformúlan (hún getur ekki táknað nytjagildi undir núlli á hreinan hátt), svo útvíkkuð TTO er notuð. Hugbúnaðarverkfræðingur eða greinandi sem meðhöndlar nytjavægi sem gefið inntak, án þess að vita að það krafðist staðfestrar framleiðslureglu, er einu skrefi frá tölu sem hann getur ekki varið ef á hann er skorað.

## Stærðfræðin

```
Stöðluð TTO (ástand betra en dauði):
  nytjagildi = tími_í_fullri_heilsu / tími_í_skertu_ástandi

Útvíkkuð TTO (ástand verra en dauði):
  nytjagildi = -tími_skipt_fyrir_dauða / (heildarlengd - tími_skipt_fyrir_dauða)
```

`tími_í_fullri_heilsu` / `tími_í_skertu_ástandi` — ár `X` í fullri heilsu metin jafngild `T` árum í skerta ástandinu. `tími_skipt_fyrir_dauða` / `heildarlengd` — í formgerðinni fyrir verra en dauða, ár `a` af `T` ára eftirstandandi lífi sem svarandinn myndi skipta fyrir tafarlausan dauða, með því að kjósa `T − a` ár í fullri heilsu og síðan dauða fram yfir `T` ár í ástandinu sem er verra en dauði. Niðurstaðan er neikvæð, fest þannig að dauði = 0.

## Dæmi útreiknað

**Staðlað**: svarandi er í skertu ástandi í 10 ár og er áhugalaus gagnvart 7 árum í fullri heilsu: nytjagildi = 7 / 10 = **0,7**.

**Verra en dauði**: yfir 10 ára eftirstandandi líf myndi svarandinn skipta 2 árum fyrir tafarlausan dauða — hann kýs 8 ár í fullri heilsu og síðan dauða fram yfir 10 ár í ástandinu sem er verra en dauði: nytjagildi = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Tengsl við hugbúnaðarverkfræði

Sama atriði og DevEx- eða þátttökukönnun rekst á þegar hún biður fólk að meta eitthvað á órannsakaðan 0–10 kvarða gildir hér öfugt: TTO er til einmitt vegna þess að „biddu fólk bara að meta það“ er ekki staðfest framleiðsluaðferð ein og sér. Áður en samsett vísitala er byggð — DevEx-einkunn, þátttökuvísitala, kulnunarkvarði — ofan á sjálfsmetna tölu, spurðu hvað leiddi hana fram og hvort sú aðferð hafi verið staðfest, sömu spurningu og heilsuhagfræðingar spyrja um nytjavægi áður en það fer í QALY.

## Gildrur

- **Alhæfing einstaklingsgildis**: TTO-gildi eru fengin frá *úrtaki* almennings (eða sjúklinga), ekki einstaklingnum sem verið er að taka ákvörðun um umönnun fyrir — að nota TTO-gildi eins svaranda eins og það alhæfist er úrtaksskekkja.
- **Röng formgerð fyrir ástandið**: staðlaða TTO-formúlan gerir ráð fyrir að ástandið sé ótvírætt betra en dauði; að beita henni á ástand sem sumir svarendur telja verra en dauða, án þess að skipta yfir í útvíkkuðu formgerðina, gefur þegjandi rangt (jákvætt) nytjagildi.
- **Ósambærilegar lengdir**: TTO-gildi fengin með ólíkum eftirstandandi lífslengdum `T` fyrir samanburðinn við verra en dauða eru ekki beint sambærileg án þess að athuga hvort rannsóknarhönnun hélt `T` föstu.

## Heimildir

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
