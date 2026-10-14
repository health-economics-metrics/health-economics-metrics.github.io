# Núvirðing og tímaforgangur

Núvirðing breytir framtíðarkostnaði og -ávinningi í núvirði, því ávinningur í dag er meira virði en sami ávinningur eftir fimm ár.

## Hvers vegna það skiptir máli

Sérhvert heilsuhagfræðilegt mat og sérhver alvarleg viðskiptarök í opinbera geiranum núvirða fjölára streymi. Green Book hjá HM Treasury skyldar 3,5% árlegan félagslegan tímaforgangsvexti; viðmiðunartilvik NICE núvirðir bæði kostnað og heilsuáhrif á 3,5% á ári (með 1,5% vöxtum utan viðmiðunartilviks fyrir næstum-læknandi meðferðir með ávinningi í 30+ ár). Ef viðskiptarök hugbúnaðar þíns fullyrða „5 m£ sparnaður á 10 árum“ mun rýnandi fjármálasviðs strax biðja um núvirta töluna.

## Stærðfræðin

Núvirði framtíðarupphæðar:

```
PV = FV / (1 + r)^t

PV = núvirði
FV = framtíðarvirði á ári t
r  = afsláttarstuðull (NICE/Green Book: 0,035)
t  = ár frá núna
```

Fyrir fastan árlegan ávinning B yfir n ár (annuitet):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Dæmi útreiknað

Hugbúnaðurinn þinn sparar NHS-stofnun 100.000 £ á ári í 5 ár, frá einu ári eftir gangsetningu.

Ónúvirt heild: 500.000 £.

Núvirt á 3,5%:

```
Ár 1: 100.000 / 1,035^1 = 96.618 £
Ár 2: 100.000 / 1,035^2 = 93.351 £
Ár 3: 100.000 / 1,035^3 = 90.194 £
Ár 4: 100.000 / 1,035^4 = 87.144 £
Ár 5: 100.000 / 1,035^5 = 84.197 £

Heildarnúvirði ≈ 451.505 £
```

Heiðarlega fyrirsögnin er um 451.000 £, um 10% minna en einfalda samlagningin. Segjum nú að afhending tefjist um eitt ár: hver liður færist eitt ár aftar og núvirðið fellur í um 436.000 £ — núvirðingarsýn á [kostnað við tafir](../kostnaður-við-tafir/).

## Tengsl við hugbúnaðarverkfræði

- **Niðurgreiðsla tæknilegrar skuldar og vettvangsflutningar** lofa ávinningsstraumum mörg ár fram í tímann; núvirtu þá áður en þú berð saman við vinnu sem borgar sig á þessum ársfjórðungi.
- **Kostnaður framarlega, ávinningur aftarlega** er venjulegt lag flutnings. Núvirðing refsar því lagi, með réttu: hún verðleggur áhættulaust tímaverðmæti þess að skuldbinda getu núna fyrir verðmæti síðar.
- **Fullyrðingar um „sparnað á ári 5“** verðskulda tvöfalda tortryggni — þær eru bæði mjög núvirtar og mjög óvissar (sjá [næmnigreiningu](../næmnigreining/)).

## Gildrur

- **Að núvirða kostnað en ekki ávinning** (eða öfugt) — viðmiðunartilvikið núvirðir hvort tveggja, á sama stuðli.
- **Að nota viðskiptastuðul (8–12%) í rökum opinbers geira**, eða 3,5% í rökum áhættufjármagnaðs fyrirtækis. Paraðu stuðulinn við ákvörðunaraðilann.
- **Að rugla núvirðingu saman við verðbólgu.** Núvirðing á við um *raun*virði (leiðrétt fyrir verðbólgu); ekki gera hvort tveggja óbeint.

## Heimildir

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
