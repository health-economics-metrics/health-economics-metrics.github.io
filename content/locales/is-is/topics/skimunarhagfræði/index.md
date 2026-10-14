# Skimunarhagfræði

Skimunarhagfræði stýrir verðmæti þess að prófa einkennalaus þýði. Kjarnastærðfræðileg staðreynd: **við lágt algengi sjúkdóms skila jafnvel frábær próf aðallega fölskum jákvæðum niðurstöðum** — og afleiddur kostnaður við að elta þær getur kaffært ávinninginn af sönnu fundunum.

## Hvers vegna það skiptir máli

Síðan 1968 hafa Wilson–Jungner viðmið WHO sett mörkin fyrir skimun þýða: ástandið verður að vera mikilvægt, prófið ásættanlegt og nákvæmt, árangursrík meðferð verður að vera til og hagfræðin verður að ganga upp. UK National Screening Committee beitir formlegri kostnaðarhagkvæmnigreiningu áður en nokkur landsáætlun er samþykkt — og hafnar flestum tillögum. Sérhver „gervigreind mun skima alla fyrir öllu“ kynning rekst á þennan búnað og tapar yfirleitt fyrir reikningnum hér að neðan.

## Stærðfræðin

Jákvætt forspárgildi (PPV) — líkurnar á að jákvæð niðurstaða sé raunveruleg — hrynur við lágt algengi:

```
PPV = (næmi × algengi) / [næmi × algengi + (1 − sértæki) × (1 − algengi)]

Dæmi: næmi 90%, sértæki 95%, algengi 0,5%:
PPV = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3%
```

Ellefu af tólf jákvæðum niðurstöðum eru rangar. Full hagfræði áætlunar:

```
Kostnaður á raunverulegt tilvik sem finnst = (skimunarkostnaður + rannsóknarkostnaður × allar jákvæðar) / sannar jákvæðar
Síðan: er tilvik þess virði að finna fyrir þann kostnað? (verðmæti fyrra inngrips á tilvik,
       að frádregnum skaða af ofgreiningu — tilvik fundin sem hefðu aldrei skipt máli)
```

## Dæmi útreiknað

Gervigreindarskimun á sjónhimnu fyrir sjaldgæft ástand, 100.000 manns, algengi 0,5%, næmi 90%, sértæki 95%, skönnun 15 £, staðfestingarrannsókn 400 £:

```
Sannar jákvæðar:  100.000 × 0,005 × 0,90 = 450
Falskar jákvæðar: 100.000 × 0,995 × 0,05 = 4.975
Kostnaður = 100.000 × 15 + (450 + 4.975) × 400 = 1,5 m£ + 2,17 m£ = 3,67 m£
Kostnaður á raunverulegt tilvik ≈ 8.156 £
```

Ef fyrri meðferð sparar 20.000 £ + 1 QALY á tilvik, standast áætlunin auðveldlega. Hækkaðu sértæki í 99% (færri falskar viðvaranir): rannsóknarkostnaður fellur í (450 + 995) × 400 = 0,58 m£, heildarkostnaður 2,08 m£, kostnaður á tilvik ≈ **4.622 £** — sértæki, ekki næmi, er þar sem skimunarhagfræði vinnst við lágt algengi.

## Tengsl við hugbúnaðarverkfræði

Kyrrstæð greining, öryggisskönnun og frávikagreining eru skimunaráætlanir yfir kóðagrunna og mælingar, þar sem algengi raunverulegra galla er oft langt undir 1% á hvert viðvörunartækifæri. Sami reikningur skýrir viðvörunarþreytu: skanni með 95% sértæki á kóða með lágt algengi kaffærir teymi í fölskum jákvæðum, og hver fölsk jákvæð kostar athygli og rýrir traust þar til raunverulegar viðvaranir eru hunsaðar (klíníska hugtakið er *skimunarskaði*; verkfræðihugtakið er *símboðadofi*). Úrræðin flytjast úr heilsu: hækkaðu sértæki á undan næmi, skimaðu undirþýði með hærra algengi (áhættumiðun ↔ skönnun aðeins á breyttum kóða) og teldu flokkunarkostnað í hagfræði tólsins — sjá [NNT](../fjöldi-sem-meðhöndla-þarf/) og [mat á klínískri gervigreind](../mat-á-klínískri-gervigreind/). Til að mæla heila skimunaráætlun frekar en eitt próf, sjá [fjöldi sem skima þarf](../fjöldi-sem-skima-þarf/) — hve margir þurfa að fara í gegnum alla skima-og-meðhöndla leiðina til að koma í veg fyrir eina útkomu.

## Gildrur

- **Að vitna í næmi/sértæki án algengis** — nákvæmni án PPV er markaðssetning.
- **Að horfa framhjá ofgreiningu**: að finna hæggengan „sjúkdóm“ sem hefði aldrei skaðað kallar fram raunverulegan meðferðarkostnað og skaða.
- **Forskotsskekkja**: fyrri greining án breyttra útkoma blæs upp sýnilega lifun — sjá [fyrra inngrip](../fyrra-inngrip/).

## Heimildir

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
