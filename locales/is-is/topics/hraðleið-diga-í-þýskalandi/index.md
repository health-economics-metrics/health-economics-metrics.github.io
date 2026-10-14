# Hraðleið DiGA í Þýskalandi

DiGA (Digitale Gesundheitsanwendungen) er lögbundin leið Þýskalands fyrir „öpp á lyfseðli“ — fyrsta landskerfi í heimi þar sem læknar ávísa samþykktum heilsuöppum og lögbundnar sjúkratryggingar verða að endurgreiða þau. Þetta er fremsta lifandi tilraunin með greiðslu fyrir stafræn meðferðarúrræði á landsvísu.

## Hvers vegna það skiptir máli

DiGA svaraði spurningunni sem hvert stafrænt heilbrigðisfyrirtæki spyr — „hver borgar í raun?“ — með löggjöf (DVG, 2019). Hönnunin er athyglisverð:

- **Hröð ákvörðun**: BfArM (eftirlitsaðilinn) verður að ákveða innan 3 mánaða.
- **Tímabundin skráning**: öpp geta verið skráð í 12 mánuði *á meðan þau afla enn sönnunargagna* — og afla tekna meðan á lykilrannsókn stendur.
- **Frestur til sönnunargagna**: sanna „jákvæð heilbrigðisáhrif“ (læknisfræðilegan ávinning, eða sjúklingatengda skipulags-/ferlabót) með samanburðarrannsókn — yfirleitt RCT — eða verða afskráð. Um helmingur tímabundinna skráninga breytist ekki í varanlega.
- **Verðlagning**: framleiðandi ákveður verð fyrsta árs frjálst; síðan samið við samband sjúkratryggjenda. Miðgildi upphafsverðs fyrir 3 mánuði um 500 €; árangurstengd verðlagningaratriði koma frá 2026.

Raunveruleikaathugun á markaði (rannsóknir til loka 2024): ~68 öpp skráð, >1 milljón uppsafnaðar ávísanir, ~81% ávísana virkjaðar, ~234 m€ uppsöfnuð útgjöld trygginga — raunverulegur markaður, en hóflegur miðað við tilstandið, og fylgni eftir virkjun er enn veiki punkturinn.

## Stærðfræðin

Viðskiptalíkanið sem sérhver stofnandi DiGA keyrir:

```
Tekjur = ávísanir × virkjunarhlutfall × verð á ávísunartímabil
Sönnunarkostnaður = lykil-RCT (venjulega 1–3 m€) innan 12 mánaða gluggans
Vænt gildi = P(sönnunargögn takast) × tekjur í jafnvægi − sönnunarkostnaður

Með ~50% umbreytingarbilun verður P að vera metið af heiðarleika — helmingur
vettvangsins eyðir RCT-fénu og tapar skráningunni.
```

## Dæmi útreiknað

Þunglyndisstjórnunarapp er tímabundið skráð á 450 €/ársfjórðung:

```
Ár 1: 20.000 ávísanir × 81% virkjun × 450 € ≈ 7,3 m€ tekjur
RCT-kostnaður: 2 m€, í gangi samhliða
Niðurstaða A (sönnunargögn jákvæð): varanleg skráning, samið verð ~380 €,
  jafnvægi 60.000 lyfseðlar/ár ≈ 18,5 m€/ár
Niðurstaða B (sönnunargögn bregðast): afskráð í mánuði 12; tekjur stöðvast.
```

Tímabundna árið fjármagnar öflun sönnunargagna — kjarnanýjung leiðarinnar. Berðu saman við hefðbundna röð (sönnunargögn fyrst, tekjur árum síðar), sem svelta nákvæmlega þær vörur sem DiGA vill að séu til.

## Tengsl við hugbúnaðarverkfræði

Mynstur DiGA — **tímabundin upptaka með fyrirfram skráðum árangursmælikvarða og sjálfvirkri sólsetursdagsetningu** — er beint afritanlegt fyrir stjórnun verkfræðitóla: sendu tólið til framleiðslunotenda í 12 mánuði, skráðu mælikvarðann fyrirfram (mældur sparaður tími, fækkun atvika), láttu það renna út sjálfkrafa nema sönnunargögn berist. Það leysir tilraunamótsögnina (tól sem þurfa umfang til að sanna verðmæti fá aldrei umfang) án þess að veita ósönnuðu tæknidóti varanlega setu. Gögnin um 81% virkjun/litla fylgni bera líka vörulærdóm: ávísun (eða tilskipun stjórnenda) skilar uppsetningum; aðeins vörugæði skila viðvarandi notkun — sjá [fylgni og þrautseigja](../fylgni-og-þrautseigja/).

## Gildrur

- **Að líta á skráningu sem endamarkið** — ávísanir krefjast trausts ávísenda; mörg skráð DiGA sjá hverfandi magn.
- **Að vanmætta lykilrannsóknina** til að spara fé á tekjuárinu — fölsk hagkvæmni sem skýrir stóran hluta 50% bilunarhlutfallsins.
- **Að flytja líkanið án greiðandans**: DiGA virkar því endurgreiðsla er lögbundin; afrit án lögbundinnar greiðslu er bara tilraunaáætlun.

## Heimildir

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
