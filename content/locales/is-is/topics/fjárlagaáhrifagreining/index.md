# Fjárlagaáhrifagreining (BIA)

BIA metur hvað það gerir við **fjárlög** tiltekins greiðanda næstu 1–5 árin að taka upp inngrip. Hún svarar *greiðsluhæfni*; kostnaðarhagkvæmni svarar *verðmæti*. Tækni getur verið framúrskarandi verðmæti og samt óviðráðanleg — eða viðráðanleg og lítið verðmæti. Alvarlegt mat krefst beggja.

## Hvers vegna það skiptir máli

Spurning fjármálastjórans er aldrei „hvert er ICER?“ — hún er „hvað gerir þetta við fjárlög næsta árs?“ Góðar starfsvenjur ISPOR (viðmið greinarinnar) tilgreina: eigið sjónarhorn greiðandans, 1–5 ára tímaskeið, *ónúvirt* árleg sjóðstreymi, raunhæfar upptökuferlar og sviðsmyndaóvissa (ekki líkindaleg). NICE krefst upplýsinga um fjárlagaáhrif samhliða kostnaðarhagkvæmni; vara með landsbundin fjárlagaáhrif yfir ~20 m£/ár á Englandi kallar á viðskiptasamningaviðræður óháð ICER.

## Stærðfræðin

```
BI_ár_t = Kostnaður_sviðsmynd_með_nýju(t) − Kostnaður_sviðsmynd_núverandi(t)

Kostnaður_sviðsmynd(t) = Σ yfir sjúklingahópa:
   gjaldgengt þýði(t) × upptaka(t) × nettókostnaður á sjúkling(t)

nettókostnaður á sjúkling = kostnaður inngrips − kostnaður umönnunar sem víkur + kostnaður framkallaðrar umönnunar
```

Lykilákvarðanir í líkanagerð: vöxtur gjaldgengs þýðis, upptökuferillinn (upptaka er aldrei samstundis), hvað nýi kosturinn ryður úr vegi og öll eftirspurn sem hann *framkallar* (auðveldara aðgengi → fleiri notendur).

## Dæmi útreiknað

Greiðandi sem nær yfir 2 milljónir manna íhugar stafrænt meðferðarúrræði á 300 £/sjúkling/ár; 1,5% félaga gjaldgeng (30.000); upptaka 20% → 40% → 60% á 3 árum; hver notandi ryður 120 £/ár af annarri umönnun úr vegi.

```
Nettókostnaður á notanda = 300 − 120 = 180 £

Ár 1: 30.000 × 0,20 × 180 = 1,08 m£
Ár 2: 30.000 × 0,40 × 180 = 2,16 m£
Ár 3: 30.000 × 0,60 × 180 = 3,24 m£
```

Jafnvel þótt ICER vörunnar sé glæsilegir 8.000 £/QALY verður greiðandinn að finna 3,24 m£ af *nýju fé* á ári 3 — 120 £ sem víkja dreifast þunnt yfir aðrar fjárlagalínur og losna ekki sem reiðufé (sjá [reiðufjárlosandi á móti ekki reiðufjárlosandi](../reiðufjárlosandi-sparnaður-á-móti-ekki-reiðufjárlosandi/)). Þess vegna eru verðmæti á einingu og greiðsluhæfni aðskildar hindranir.

## Tengsl við hugbúnaðarverkfræði

BIA er nákvæmlega viðbótin sem fjármálastjóri vill sjá við fullyrðingu um arðsemi á sæti: „þetta er kostnaðarhagkvæmt á forritara, en höfum við efni á útbreiðslu um alla stofnunina á þessu fjárhagsári?“ Líkanaðu leyfisþrep, S-feril upptöku, tólaútgjöld sem víkja og losa aðeins reiðufé þegar gamlir samningar renna í raun út, og framkallaða notkun (ódýrari CI → meiri CI). Að leggja fram 3 ára fjárlagaáhrifatöflu samhliða arðseminni er það sem gerir tillögu um tól fyrir stórfyrirtæki trúverðuga í augum fjármálasviðs. Að skipta birtum heildarfjárlagaáhrifum niður á staði, hópa eða fjárhagsár — og láta hlutana ganga upp nákvæmlega í birtu töluna — er einmitt [nákvæm úthlutun kostnaðar upp á eyri](../nákvæm-úthlutun-kostnaðar-upp-á-eyri/); að leggja saman línuliðina sem mynda heildina í upphafi er [gjaldmiðlaörugg kostnaðarsamantekt](../gjaldmiðlaörugg-kostnaðarsamantekt/).

## Gildrur

- **Draumur um samstundis upptöku**: áhrif árs 1 reiknuð á stöðugri upptöku.
- **Að telja kostnað sem víkur sem reiðufé** þegar hann er dreifð geta.
- **Að horfa framhjá framkallaðri eftirspurn** — bætt aðgengi eykur notkun gjaldgenga þýðisins.
- **Að rugla saman tímaskeiðum/núvirðingu BIA og CEA**: BIA er með stutt tímaskeið, ónúvirt og sértæk fyrir greiðanda að hönnun.

## Heimildir

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
