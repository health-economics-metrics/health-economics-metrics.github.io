# Fyrra inngrip

Ef sparað geta gerir starfsmanni kleift að fara yfir greiningarbakslag fyrr, færast sjúklingar hraðar af biðlista yfir í virka meðferð — og meðferð fyrr er yfirleitt ódýrari og betri en meðferð síðar, því ómeðhöndluð ástönd versna.

## Hvers vegna það skiptir máli

Sjúkdómsframvinda eru samvextir heilbrigðisþjónustu. Sjúklingur sem bíður með ómeðhöndlað ástand er ekki í jafnvægi: krabbamein færast milli stiga, hjartabilun gefur sig, væg þunglyndi verður alvarlegt. Að grípa fyrr inn í skilar því tvöföldum arði — **betri útkomum** (fleiri QALY, meðhöndlað frá heilbrigðari grunnlínu) og oft **lægri meðferðarkostnaði** (meðferð á fyrra stigi er minna umfangsmikil en björgun á síðara stigi). Þessi búnaður er það sem lyftir „hraðari leiðum“ úr rekstrarlegum fínheitum í klíníska og hagræna nauðsyn — og er djúp ástæðan fyrir því að [kostnaður við tafir](../kostnaður-við-tafir/) á við um klínískan hugbúnað.

## Stærðfræðin

```
Verðmæti fyrra inngrips (á sjúkling) =
    [Kostnaður_seint − Kostnaður_snemma]                  (jöfnun meðferðarkostnaðar)
  + [QALY_snemma − QALY_seint] × λ                        (heilsuávinningur × þröskuldur)
  × P(framvinda á meðan tafið er)                          (líkindavigtun)
```

Líkindavigtunin er ómissandi: ekki hver sjúklingur sem bíður versnar. Líkanaðu færslulíkur á tímaeiningu (úr gögnum um náttúrulegan gang), ekki versta tilvik. Núvirtu síðan: kostnaður sem komist er hjá eftir ár er minna virði í dag ([núvirðing](../núvirðing-og-tímaforgangur/)) — og athugaðu að flest fyrri inngrip eru kostnaðar*hagkvæm* frekar en kostnaðar*sparandi* (sjá [forvarnahagfræði](../forvarnahagfræði/)).

## Dæmi útreiknað

Bakslag í skimun fyrir sjónukvilla af völdum sykursýki: 4.000 sjúklingar, 6 mánuðum á eftir. Gervigreindaraðstoðuð flokkun þrefaldar afköst og hreinsar biðröðina á 8 vikum. Náttúrulegur gangur: ~2% sjúklinga á biðlista á ári versna í sjónógnandi stig meðan þeir eru óskoðaðir.

```
Framvinduatvik sem komist er hjá með ~4 mánaða hröðun:
  4.000 × 2% × (4/12) ≈ 27 sjúklingar

Á hverja framvindu sem komist er hjá:
  jöfnun meðferðar (innangleraugnameðferð vs leysir) ≈ 4.000 £
  QALY-ávinningur (sjón varðveitt) ≈ 0,8 QALY × 20.000 £ = 16.000 £

Verðmæti ≈ 27 × (4.000 + 16.000) ≈ 540.000 £ — af einu bakslagi sem hreinsað er einu sinni,
áður en varanleg afkastaaukning er talin með.
```

## Tengsl við hugbúnaðarverkfræði

Tveir flutningar. Fyrst sá augljósi: hugbúnaður sem flýtir greiningar- og meðferðarleiðum (forgangsröðun, flokkun með gervigreind, leiðing niðurstaðna) verðleggst með þessu líkani — og líkanið segir þér hvaða leið á að flýta: þá með bröttustu framvinduferilinn, ekki lengstu biðröðina. Í öðru lagi verkfræðispeglunin: **gallar versna líka**. Galli sem finnst í hönnun kostar samtal; í framleiðslu kostar hann atvik; kostnaðarferill „shift-left“ (10–100× eftir stigi) er framvindulíkan, og heiðarlega útgáfan ber sama fyrirvara — snemmgreining er yfirleitt kostnaðarhagkvæm, ekki ókeypis peningar, því yfirferðir og próf hafa raunverulegan kostnað og flest mál sem finnast hefðu aldrei versnað.

## Gildrur

- **Versta tilviks framvinda gerð ráð fyrir hjá öllum** — líkindavigtunin er munurinn á greiningu og málflutningi.
- **Forskotsskekkja** (lead-time bias): að finna sjúkdóm fyrr án þess að breyta útkomum lítur út eins og ávinningur en er það ekki; fyrr *árangursríkt inngrip* er fullyrðingin, ekki fyrri greining ein og sér (sjá [skimunarhagfræði](../skimunarhagfræði/)).
- **Tvítalning** með biðlista- og RTT-fullyrðingum byggðum á sömu hröðun — ein leiðarbót, ein ávinningssafn, úthlutað einu sinni.

## Heimildir

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
