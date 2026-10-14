# Afleiddur kostnaður sem komist er hjá

Afleiddur kostnaður sem komist er hjá (kostnaðarjöfnun) eru framtíðarmeðferðarútgjöld sem koma má í veg fyrir með fyrra eða betra inngripi, dregin frá kostnaði inngripsins sjálfs. Jöfnun er sá búnaður sem gerir inngrip kleift að verða *drottnandi* — ódýrara **og** betra — og hún er jafnframt sú lína í heilsuhagfræði sem oftast er tvítalin og ofmetin.

## Hvers vegna það skiptir máli

Nær öll verðmætatillaga í stafrænni heilsu inniheldur jöfnunarfullyrðingu: „appið okkar kemur í veg fyrir innlagnir“, „viðvaranir okkar koma í veg fyrir versnun“, „vettvangur okkar forðast tvítekin próf“. Þegar jöfnun er raunveruleg umbreytir hún hagfræðinni (sjá útreiknað dæmi um [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/), þar sem 600 þús. £ jöfnun ræður úrslitum). Greiðendur vita þetta — þess vegna sæta jöfnunarfullyrðingar strangasta eftirliti í öllu mati. Trúverðugleikareglurnar hér að neðan eru það sem greinir fjármögnunarhæft líkan frá markaðssetningu.

## Stærðfræðin

```
Nettókostnaður = kostnaður inngrips − Σ jöfnun

Gild jöfnun verður að vera:
  Eignanleg     — orsakatengd inngripinu (sönnunargögn um viðmið)
  Jaðarleg      — féð hættir í raun að vera eytt, á jaðarkostnaði en ekki
                  meðalkostnaði (sjá marginal-vs-average-cost.md)
  Líkindavegin  — vegin með P(að afleidda atvikið hefði átt sér stað)
  Núvirt        — framtíðarkostnaður sem komist er hjá á núvirði
  Einstök       — talin einu sinni, í einni ávinningslínu
```

## Dæmi útreiknað

„Þessi fullyrðing um flutningsáhættu, gerð rétt“: sáravöktunarapp fyrir 5.000 sjúklinga eftir aðgerð fullyrðir að það komi í veg fyrir endurinnlagnir vegna sýkinga.

```
Grunnlína endurinnlagna vegna sýkingar: 4,0% ; með appi (RCT): 3,1%
Eignanleg atvik sem komist er hjá = 5.000 × 0,009 = 45/ár
Kostnaður á endurinnlagnartímabil (jaðar, þessi stofnun): 3.200 £
Jöfnun = 45 × 3.200 = 144.000 £/ár
Kostnaður apps = 5.000 × 20 £ = 100.000 £/ár
Nettókostnaður = −44.000 £ → raunverulega kostnaðarsparandi, með:
  eignun úr RCT ✓  jaðarkostnaðarmat ✓  líkindi úr rannsóknargögnum ✓
```

Sama fullyrðing byggð á „endurinnlagnir kosta 5.800 £ að meðaltali, við komum í veg fyrir fullt“ fellur á öllum fjórum prófunum og á skilið höfnunina sem hún fær.

## Tengsl við hugbúnaðarverkfræði

„Þessi flutningur forðar framtíðarendurskrifun“ er jöfnunarfullyrðing, og reglur heilsuhagfræðinnar gera hana heiðarlega:

- **Mótstaðreyndakostnaður**: hvað myndi endurskrifunin raunverulega kosta, og með hvaða sönnunargögnum?
- **Líkindi**: hversu líkleg er sú framtíð? (Ekki 100% — vörur eru drepnar, forgangsröðun breytist.)
- **Núvirðing**: endurskrifun sem er forðað á ári 4 með 3,5–10% afslætti er mun minna virði en nafnvirðið.
- **Einstæði**: ekki gera líka tilkall til sömu endurskrifunar sem forðað er í línu tæknilegrar skuldar og varðveislulínu.

`Verðmæti jöfnunar = P(framtíðaratburður) × mótstaðreyndakostnaður × núvirðingarstuðull` — skrifaðu þessa línu í tillöguna og sjáðu matið verða umdeilanlegt, sem er tilgangurinn.

## Gildrur

- **Tvítalning** — sama innlögn sem komist er hjá talin sem jöfnun, rúmdagar og QALY-með-kostnaði.
- **Jöfnun á meðalkostnaði** fyrir atvik þar sem fastur kostnaður heldur áfram hvort sem er.
- **Þögul 100% líkindi** á afleiddum atvikum sem voru aðeins möguleg.
- **Jöfnun á öðrum fjárlögum** sett fram sem sparnaður fyrir greiðandann sem er beðinn um að borga — sjá [sjónarhorn greiningar](../sjónarhorn-greiningar/).

## Heimildir

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
