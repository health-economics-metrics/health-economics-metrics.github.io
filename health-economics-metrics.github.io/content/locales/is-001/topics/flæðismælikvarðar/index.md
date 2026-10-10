# Flæðismælikvarðar

Flæðismælikvarðar mæla hvernig vinna færist í gegnum afhendingarkerfi: hringrásartími, leiðtími, afköst, vinna í vinnslu (WIP) og flæðisskilvirkni. Þeir lúta lögmáli Little — sömu biðraðastærðfræði og stjórnar sjúkrarúmum og biðlistum.

## Hvers vegna það skiptir máli

Mestur afhendingartími er ekki vinna — hann er bið. Rannsóknir á flæðisskilvirkni þekkingarvinnu finna reglulega að unnið er við hluti aðeins **5–15%** af liðnum tíma þeirra; afgangurinn er biðraðir. Það þýðir að ódýrasta hröðunin er að fjarlægja biðraðir, ekki að ráða fólk — nákvæmlega sú innsýn sem sjúkrahúsaáætlanir um sjúklingaflæði uppgötvuðu um rúm. Fyrir allt sem hefur [kostnað við tafir](../kostnaður-við-tafir/) staðsetja flæðismælikvarðar hvar tafakostnaðurinn safnast.

## Stærðfræðin

```
Hringrásartími    = t(lokið) − t(hafið)
Leiðtími          = t(afhent) − t(beðið um)     (inniheldur bið fyrir vinnu)
Afköst            = hlutir kláraðir / tímabil
WIP               = hlutir hafnir en ókláraðir
Flæðisskilvirkni  = virkur tími / (virkur + biðtími) × 100

Lögmál Little:  meðal-WIP = afköst × meðalhringrásartími
                (jafngilt: hringrásartími = WIP / afköst)
```

Lögmál Little er vogarstöngin: við föst afköst styttir niðurskurður á WIP hringrásartíma í réttu hlutfalli. Það stýrir líka sjúkrahúsum: `rúm í notkun = innlagnir/dag × legutími`.

## Dæmi útreiknað

Teymi hefur 40 hluti í vinnslu og lýkur 10/viku: hringrásartími = 40/10 = 4 vikur. Þau setja WIP-takmörk og skera WIP niður í 15: hringrásartími = 15/10 = **1,5 vikur** — sama fólk, sömu afköst, 62% hraðari afhending, eingöngu af biðraðaaga.

Verðlagt með CoD: ef hlutir bera að meðaltali 3.000 £/viku í tafakostnað, eyðir hver hlutur nú 2,5 færri vikum í bið: 10 hlutir/viku × 2,5 × 3.000 = **75.000 £/viku af tafakostnaði útrýmt** — með stefnubreytingu sem kostar ekkert.

Sjúkrahúsaspegill: 40 innlagnir/dag × 6,0 daga legutími = 240 rúm; skerðu óklíníska bið innan legutímans í 5,6 daga og 16 rúm losna ([legutími](../legutími/)) — sama lögmál, sama vogarstöng.

## Tengsl við hugbúnaðarverkfræði

Flæðismælikvarðar eru sameiginlegt tungumál afhendingarverkfræði og heilbrigðisreksturs:

- **Viðmið undirþrepa PR** (LinearB, ~8 m. PR): úrvals sóknartími < 7 klst., rýni < 6 klst., heildarhringrás < ~26 klst. — sóknartími er hrein bið, það fyrsta sem ráðist er á.
- **[Biðlistar](../áhrif-á-biðlista/)** eru bakslag; **[RTT](../tilvísun-til-meðferðar/)** er leiðtími; **[rúmnýting](../rúmdagar-sem-sparast/)** er WIP. Umbætur flytjast í báðar áttir: WIP-takmörk ↔ jöfnun innlagna; mæling biðtíma ↔ rakning þrepa leiðar.
- Flæðisskilvirkni undir 15% er eðlileg á báðum sviðum, og bæði fela hana því *fólk* er upptekið meðan *vinna* bíður — mældu klukku vinnunnar, ekki starfsfólksins.

## Gildrur

- **Nýtingardýrkun**: að keyra nýtingu starfsfólks í átt að 100% sprengir biðtíma ólínulega (M/M/1: bið ∝ ρ/(1−ρ)) — ástæðan fyrir því að sjúkrahús með 95% nýtingu stíflast og teymi með 95% úthlutun stöðvast.
- **Meðaltöl yfir skekktar dreifingar**: hringrásartímar hafa þung hala; spáðu með hundraðshlutamörkum (p85), ekki meðaltölum.
- **Að skera WIP með því að hafna vinnu framar í ferlinu** og kalla það flæðisumbætur — eftirspurnin hvarf ekki, hún beið utan mælimarkanna (sjúkrahúsútgáfan: sjúkrabílar að bíða fyrir utan bráðamóttökuna).

## Heimildir

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
