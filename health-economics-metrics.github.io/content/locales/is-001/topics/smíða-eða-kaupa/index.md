# Smíða eða kaupa

Smíða-eða-kaupa er skipulagður samanburður á sérsmíði og kaupum á tilbúinni lausn, á núvirtum [heildareignarkostnaði](../heildareignarhaldskostnaður/), afhendingartíma og áhættu. Reynslugögnin eru einhliða: **raunkostnaður við smíði fer venjulega 30–40% fram úr áætlun**, keyptar lausnir komast í notkun 40–60% hraðar, og rannsókn MIT 2025 á GenAI leiddi í ljós að keypt gervigreindartól heppnuðust ~67% tilvika en innanhússsmíði um þriðjungi sjaldnar.

## Hvers vegna það skiptir máli

Heilbrigðiskerfi standa stöðugt frammi fyrir þessari ákvörðun („make vs commission“ á NHS-máli), og verkfræðistofnanir fara kerfisbundið rangt að í smíðaátt — því smiðir meta smíðina, ekki [heildareignarkostnaðinn](../heildareignarhaldskostnaður/), og því smíði er skemmtilegri. Hagfræðilegi rammin þvingar fram heiðarlegan samanburð: báðir kostir verðlagðir yfir sama tímaskeið, báðir áhættuleiðréttir, og *tímamunurinn verðlagður sem [kostnaður við tafir](../kostnaður-við-tafir/)* — liðurinn sem oftast ræður úrslitum og oftast gleymist.

## Stærðfræðin

```
Berðu saman yfir sama 3–5 ára tímaskeið, núvirt:

NPV_kostur = PV(ávinningur, færður um tíma að verðmæti) − PV(TCO)

Áhættuleiðréttingar (mynstur „bjartsýniskekkju“ í Green Book):
  smíðakostnaður × 1,3–1,4        (forsenda um framúrkeyrslu)
  tími að verðmæti smíði + 40–60% (forsenda um tafir í dreifingu)
  kaup: bættu við raunveruleikaprófi á samþættingu og útgönguskostnaði í staðinn

Ákvörðunardrifkraftar, í þeirri röð sem þeir ráða yfirleitt:
  1. sérstaða — er þessi geta varan þín, eða lagnir?
  2. tími að verðmæti × CoD
  3. áhættuleiðréttur TCO
```

## Dæmi útreiknað

Stofnun þarf kerfi fyrir rafrænt samþykki. Kaupa: 150 þús. £/ár SaaS, í notkun eftir 3 mánuði. Smíða: áætlað 600 þús. £ + 120 þús. £/ár viðhald, í notkun eftir 12 mánuði.

```
Áhættuleiðrétt smíði: 600 þús. × 1,35 = 810 þús. £; tími að verðmæti ≈ 18 mánuðir
5 ára TCO:  kaup = 150 þús. × 5 = 750 þús. £
            smíði = 810 þús. + 120 þús. × 5 = 1.410 þús. £
Töfuliður: stafræn samþykki sparar 25 þús. £/mán.; smíðin kemur 15 mánuðum
            síðar → CoD = 15 × 25 þús. = 375 þús. £

Virkur samanburður: 750 þús. £ á móti 1.785 þús. £ — kaup vinna um ~1 m£, og stærsti
einstaki liðurinn á eftir smíðinni sjálfri er tafakostnaðurinn sem enginn hafði verðlagt.
```

Smíði er áfram rétt þegar getan er aðgreinandi (kjarnareiknirit vörunnar þinnar), þegar enginn seljandi uppfyllir harða kröfu (klínískt öryggi, gagnabúseta), eða þegar hætta á innilokun hjá seljanda er alvarleg og verðlögð.

## Tengsl við hugbúnaðarverkfræði

Flytjanlegi heilsuhagfræðiagi er þríþættur: **forsenduleiðrétting áhættu** (30–40% framúrkeyrsluálagið er hugbúnaðarútgáfa bjartsýniskekkju Green Book — beittu því vélrænt, færðu rök fyrir undantekningum frekar en að byrja á þeim); **heiðarleiki viðmiðs** (valkosturinn við smíði er ekki „ekkert“, heldur besti fáanlegi kaupkosturinn — sjá [fórnarkostnaður](../fórnarkostnaður/)); og **jafngildisprófun fyrir kostnaðarsamanburð** (ef kaup og smíði uppfylla raunverulega sömu kröfulýsingu er þetta [kostnaðarlágmörkunargreining](../kostnaðarlágmörkunargreining/) og ódýrari kosturinn vinnur; ef ekki verður að verðleggja útkomumuninn, ekki fullyrða hann).

## Gildrur

- **Að bera listaverð seljanda saman við óáhættuleiðréttar smíðaáætlanir** — tvöfalt smjaður í átt að smíði.
- **Núllverðlögð innri vinna** („teymið er hvort sem er hér“).
- **Óverðlögð innilokun í báðar áttir**: útgönguskostnaður hjá seljanda, en líka rútufaktor smíðinnar og viðhaldstími.
- **Smíði knúin af sjálfsmynd**: „þetta er kjarni hjá okkur“ fullyrt um lagnir — prófaðu sérstöðuna gegn því hvort viðskiptavinir myndu taka eftir því.

## Heimildir

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
