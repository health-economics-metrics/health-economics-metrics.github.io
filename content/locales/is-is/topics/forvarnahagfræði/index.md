# Forvarnahagfræði

Hagfræði þess að grípa inn í áður en sjúkdómur kemur upp eða versnar. Fyrirsagnarniðurstaðan er gagnstæð innsæi: **flestar forvarnir spara ekki fé** — þær kaupa heilsu á góðu verði. Tímamótagreining Cohen, Neumann og Weinstein í NEJM leiddi í ljós að færri en 20% forvarnainngripa eru nettó kostnaðarsparandi; hin eru í besta falli kostnaðarhagkvæm.

## Hvers vegna það skiptir máli

„Forvarnir spara fé“ er mest endurtekna ranga fullyrðingin í heilbrigðisstefnu, og viðskiptarök byggð á henni eru rifin niður af heilsuhagfræðingum. Heiðarlega uppbyggingin: forvarnir kosta fé núna (skimun heilla þýða, meðhöndlun áhættuþátta hjá fólki sem hefði aldrei veikst) og skila heilsu síðar — yfirleitt á *góðu* verði á QALY, stundum með sparnaði, stundum á hræðilegu verði. Að vita í hvaða ham þú ert er greiningin. Aðgreiningin skiptir máli viðskiptalega: forvarnavara seld sem „sparar NHS fé“ býður upp á endurskoðun sem hún fellur á; seld sem „kaupir QALY á 4.000 £“ getur unnið á sömu staðreyndum. Sjá [fyrra inngrip](../fyrra-inngrip/) fyrir útgáfuna innan leiðar. Áður en forvarnaáætlun er verðlögð svarar [hlutfall sem rekja má til þýðis](../hlutfall-sem-rekja-má-til-þýðis/) stærðarspurningunni fyrst — hve mikið af markbyrði sjúkdómsins áhættuþátturinn sem áætlunin tekur á gæti trúlega útrýmt.

## Stærðfræðin

```
Nettókostnaður forvarna (á mann) =
    kostnaður inngrips × allir meðhöndlaðir
  − afleiddur kostnaður sem komist er hjá × hinir fáu sem hefðu versnað
  (hvort tveggja núvirt — kostnaðurinn sem komist er hjá er mörg ár fram í tímann; sjá
   discounting-and-time-preference.md)

Kostnaðarsparnaður krefst: kostnaður inngrips < P(versnun) × kostnaður sem komist er hjá × núvirðingarstuðull
Kostnaðarhagkvæmni krefst aðeins: nettókostnaður / QALY unnin < þröskuldur
```

Forvarnamótsögnin: kostnaður inngrips margfaldast yfir allt þýðið; ávinningur fellur aðeins til hinna mótstaðreyndafáu.

## Dæmi útreiknað

Háþrýstingsstjórnunarapp boðið 100.000 áhættufullorðnum, 25 £/mann/ár. Á 10 árum kemur það í veg fyrir 400 heilablóðföll (hvert kostar 45.000 £ núvirt og tapar 3 QALY).

```
Kostnaður:  100.000 × 25 £ × 10 ár (núvirt ≈ ×8,3) ≈ 20,8 m£
Jöfnun:     400 × 45.000 £ = 18,0 m£
Nettókostnaður ≈ 2,8 m£ — EKKI kostnaðarsparandi

QALY unnin = 400 × 3 = 1.200
Kostnaður á QALY = 2,8 m£ / 1.200 ≈ 2.300 £/QALY — framúrskarandi kostnaðarhagkvæmt
```

Sama áætlun, báðir sannleikar: hún tapar 2,8 m£ í reiðufé og kaupir heilsu á tíunda hluta þröskuldar NICE. Fjármagnaðu hana á seinni tölunni; lofaðu aldrei þeirri fyrri.

## Tengsl við hugbúnaðarverkfræði

Shift-left gæði eru forvarnahagfræði, með fyrirvaranum. Rýni, próf og kyrrstæð greining leggja kostnað á *sérhverja* breytingu til að ná málum í þeim fáu sem hefðu þróast í framleiðsluatvik. Gallakostnaðarferillinn (10–100× eftir stigi) leikur hlutverk heilablóðfallskostnaðar — og heiðarlega niðurstaðan speglar heilsu: shift-left er yfirleitt kostnaðar*hagkvæmt*, ekki sjálfkrafa kostnaðar*sparandi*, því flest mál sem merkt eru hefðu aldrei orðið atvik (vandi mótstaðreyndafárra). Reiknaðu það: heildarkostnaður hliðs á tímabil á móti atvikum sem komist er hjá × atvikskostnaður — sama dæmabygging, með [NNT](../fjöldi-sem-meðhöndla-þarf/) sem eininguna á hverja fundna.

## Gildrur

- **Að fullyrða kostnaðarsparnað þegar sönnunargögn styðja kostnaðarhagkvæmni** — skilgreinandi villa forvarnamálflutnings á báðum sviðum.
- **Ónúvirt framtíðarjöfnun**: ávinningur 15 ár fram í tímann á nafnvirði.
- **Að horfa framhjá kostnaði vegna ofgreiningar/ofmeðferðar**: forvarnir finna líka gervisjúkdóm — sjá [skimunarhagfræði](../skimunarhagfræði/).

## Heimildir

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
