# Þátttökumælikvarðar

Þátttökumælikvarðar mæla hversu mikið notendur nota heilsuapp í raun: DAU/MAU límkraftur, tíðni og lengd lota, notkun eiginleika. Í stafrænni heilsu er þátttaka ekki hégómi — hún er **skammtur**: útsetningin sem sérhver klínísk áhrif verða að flæða um.

## Hvers vegna það skiptir máli

Lyf sem er áfram í glasinu læknar engan; app sem er áfram óuppsett eða óopnað er sama bilunarhamur. Sérhver heilsuhagfræðileg fullyrðing um neytendaheilsuvöru margfaldast í gegnum þátttöku — virkni sem sýnd var í rannsóknum var mæld á einhverju notkunarstigi, og raunverulegt verðmæti stigmagnast eftir því hversu nærri dreifingarnotkun kemst því stigi. Staðlað viðmið vöru: DAU/MAU í kringum **20% telst heilbrigt** fyrir farsímaöpp almennt, >25% framúrskarandi; heilsuöpp eru oft lægri.

## Stærðfræðin

```
Límkraftur (DAU/MAU) = daglega virkir notendur / mánaðarlega virkir notendur × 100
Lotumælikvarðar      = lotur/notandi/tímabil; meðallengd = heildartími / lotur
Þátttaka í eiginleika = notendur sem framkvæma lykilaðgerð / virkir notendur

Skammta-svörunarrammi (heilsuhagfræðiuppfærslan):
  raunveruleg áhrif ≈ rannsóknaráhrif × f(raunveruleg notkun / rannsóknarnotkun)
  þar sem f kemur úr skammta-svörunargreiningu — sjá hugtakið „virk
  þátttaka“ í adherence-and-persistence.md: næg notkun til að ná
  ætlaðri útkomu, sem getur verið hófleg og endanleg
```

## Dæmi útreiknað

Lykilrannsókn á blóðþrýstingsappi sýndi 6 mmHg lækkun slagbilsþrýstings meðal notenda sem skráðu ≥4 mælingar á viku. Í dreifingu yfir 50.000 skráða notendur:

```
MAU 20.000 (40%); af þeim skrá ≥4×/viku: 7.000
Notendur með virkan skammt = 7.000 / 50.000 = 14% af skráða grunninum

Áhrif á þýðisstigi ≈ rannsóknaráhrif afhent 14%, ekki 100%:
sérhvert hagfræðilíkan sem vitnar í „50.000 notendur × 6 mmHg“ ofmetur ~7×.
Heiðarlegt líkan: 7.000 × full áhrif + hlutainneign (úr skammta-svörunargögnum,
ef einhver eru) fyrir 13.000 notendur undir þröskuldi.
```

Þessi margföldun — í gegnum þátttökutrektina að virkum skammti — er algengasti staðurinn þar sem hagfræði stafrænnar heilsu blæs upp.

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar eiga þátttökutrektina, sem gerir þá að eigendum *klínískrar* breytu: núningur við innleiðingu, tilkynningastefna, hleðslutími og nettengingarþol hreyfa allt skammtinn sem afhentur er. Tvær hönnunarályktanir: mældu **klínískt marktæka aðgerð** (mælingar skráðar, lexíur lokið), ekki opnanir — DAU byggt á lotum úr tilkynningaskoppi er skammtasvik; og líttu á þátttökumarkmið sem *nægjumarkmið*, ekki hámörkun — app sem nær útkomu sinni á 5 mínútum á viku og víkur úr vegi er klínískt kjörið og mælikvarðalega „lélegt“ (sjá virka þátttöku í [fylgni og þrautseigju](../fylgni-og-þrautseigja/)). Metið þátttökuvinnuna sjálfa með þýðisáhrifalíkaninu hér að ofan: 2 stiga aukning í hlutdeild virks skammts er mælanleg QALY-lína.

## Gildrur

- **Þátttaka sem útkoma**: notkun er leið; útkoman er [PROM](../sjúklingatilkynntar-útkomur/) eða klínískur endapunktur.
- **Meðaltöl yfir tvítoppa notkun**: þýði heilsuappa skiptist í dygga notendur og vofur; meðaltöl lýsa engum — flokkaðu í hópa.
- **Skammtabólga með myrkum mynstrum**: runur og sektarkenndartilkynningar lyfta mælikvörðum og geta skaðað kvíðafulla hópa sem heilsuöpp þjóna; klínískar vörur bera klíníska siðfræði.
- **Uppruni viðmiða seljenda**: flest birt þátttökuviðmið koma frá greiningarseljendum, ekki ritrýni; kvarðaðu gegn eigin rannsóknum.

## Heimildir

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
