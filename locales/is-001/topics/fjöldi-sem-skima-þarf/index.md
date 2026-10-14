# Fjöldi sem skima þarf (NNS)

NNS er fjöldi fólks sem þarf að skima — ekki aðeins meðhöndla — til að koma í veg fyrir **eina** óhagstæða útkomu yfir skilgreint eftirfylgnitímabil, miðað við grunnáhættu þýðisins og hlutfallslega áhættulækkun sem snemmgreining og meðferð ná. Það er hliðstæða NNT á stigi skimunaráætlana: NNT spyr hve margir þurfa að vera *meðhöndlaðir* til að koma í veg fyrir eina útkomu; NNS spyr hve margir þurfa að ganga í gegnum alla *skima-og-síðan-meðhöndla* leiðina til að komast þangað.

## Hvers vegna það skiptir máli

Rembold kynnti NNS 1998 sérstaklega svo hægt væri að bera skimunaráætlanir saman á sama grunni og meðferðir, því fyrirsagnarlækkun á hlutfallslegri áhættu í skimunarprófi felur tvennt sem meðferðar gerir ekki: grunnáhættu þýðisins sem í raun er boðið í skimun, og þá staðreynd að allir sem skimaðir eru bera kostnað prófsins og byrði falskra jákvæðra, ekki aðeins minnihlutinn sem nýtur ávinnings. Kostnaðarhagkvæmnihlið UK National Screening Committee (sjá [skimunarhagfræði](../skimunarhagfræði/)) er byggt á nákvæmlega þessari aðgreiningu — skimunaráætlun með áhrifamikla hlutfallslega áhættulækkun í þýði með lága grunnáhættu getur samt haft NNS í þúsundum, og þá verður kostnaður áætlunarinnar á útkomu sem komið er í veg fyrir hin raunverulega spurning.

## Stærðfræðin

```
NNS = 1 / (grunnáhætta × hlutfallsleg_áhættulækkun)

grunnáhætta              = líkur á útkomunni í skimaða
                           þýðinu yfir eftirfylgnitímabilið (0–1)
hlutfallsleg_áhættulækkun = hlutfallsleg áhættulækkun sem næst með
                           meðferð möguleg vegna skimunar (0–1)

Kostnaður áætlunar á útkomu sem komið er í veg fyrir = NNS × kostnaður_á_skimun
```

Berðu beint saman við [NNT](../fjöldi-sem-meðhöndla-þarf/): NNS fellir virkni allrar skima → greina → meðhöndla trektarinnar í eina tölu, þar sem NNT gerir þegar ráð fyrir að sjúklingurinn sé greindur og hefji meðferð.

## Dæmi útreiknað

Markþýði skimunaráætlunar hefur 2% grunnáhættu atburðar yfir rannsóknartímabilið (`grunnáhætta = 0,02`), og snemmgreining nær 25% hlutfallslegri áhættulækkun (`hlutfallsleg_áhættulækkun = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 manns þarf að skima til að koma í veg fyrir eina útkomu.

Á 50 £ á skimun:
Kostnaður áætlunar á útkomu sem komið er í veg fyrir = 200 × 50 £ = 10.000 £
```

Þessi tala upp á 10.000 £ er það sem ætti að vega gegn kostnaði útkomunnar sjálfrar og þeim QALY sem hún hefði kostað — sami samanburður og [forvarnahagfræði](../forvarnahagfræði/) gerir fyrir forvarnaáætlanir almennt.

## Tengsl við hugbúnaðarverkfræði

NNS er „hve margir notendur, atburðir eða beiðnir þurfa að fara í gegnum greiningar- eða flokkunarflæði til að ná einni sönnum jákvæðri niðurstöðu sem vert er að bregðast við“ — beint viðeigandi fyrir viðvörunarbyggða vöktun og flokkunarkerfi, þar sem lágt algengi markástands blæs upp NNS á sama hátt og það hrynur jákvætt forspárgildi (sjá [skimunarhagfræði](../skimunarhagfræði/) og [mat á klínískri gervigreind](../mat-á-klínískri-gervigreind/)). Vöktunarregla sem þarf að vinna úr 200 atburðum á hverja raunverulega fundna er aðeins þess virði að keyra ef fundurinn er að minnsta kosti 200 sinnum meira virði en flokkunarkostnaður á atburð — sami reikningur og í heilbrigðisdæminu hér að ofan.

## Gildrur

- **Að horfa framhjá háðni af grunnáhættu**: sama skimunarpróf eða áætlun hefur mjög ólíkan NNS — og kostnaðarhagkvæmni — í áhættuþýði samanborið við lágáhættuþýði. Vitnaðu aldrei í NNS án þess að tilgreina þýðið sem hann var reiknaður fyrir.
- **Að telja rangan nefnara**: NNS telur fólk sem er *skimað*, ekki fólk sem prófast jákvætt eða hefur meðferð — hann felur þegar í sér virkni allrar trektarinnar, svo hann ætti aldrei að vera borinn saman við mælikvarða sem aðeins er talinn yfir jákvæða.
- **Samanburður milli eftirfylgnitímabila**: styttra eftirfylgnitímabil blæs yfirleitt upp NNS, því færri atburðir sjást í glugganum. NNS-tölur eru aðeins sambærilegar þegar þær eru reiknaðar yfir sömu eftirfylgnilengd.

## Heimildir

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
