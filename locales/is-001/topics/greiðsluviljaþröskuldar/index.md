# Greiðsluviljaþröskuldar

Greiðsluviljaþröskuldur (WTP) er það hámark sem ákvörðunaraðili er reiðubúinn að greiða fyrir hverja einingu heilsuávinnings — línan sem breytir [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/) í ákvörðun um að taka upp eða hafna.

## Hvers vegna það skiptir máli

Þröskuldurinn er þar sem heilsuhagfræði hættir að vera mæling og verður stefna. Sérhvert landskerfi hefur einn, yfirlýstan eða óbeinan, og að þekkja staðbundna töluna segir þér nákvæmlega hvernig á að verðleggja fullyrðingu um heilsuverðmæti:

| Aðili | Þröskuldur (eins og rannsakað, 2024–2025) |
|---|---|
| NICE (England) | 20.000–30.000 £ á QALY; reynslubundið meðaltal ákvörðunarþröskuldar ≈ 24.400 £ (2022–24); alvarleikabreytur hækka virkt þak í ~36 þús.–51 þús. £; mjög sérhæfð tækni allt að 100 þús. £+ |
| ICER (Bandaríkin, utan stjórnvalda) | 100.000–150.000 $ á QALY/evLYG verðviðmið; skýrir 50 þús.–200 þús. $ bil |
| Kanada (CADTH / CDA-AMC) | ≈ 50.000 CAD á QALY vinnuþröskuldur |
| WHO-CHOICE (söguleg, alþjóðleg) | 1–3× landsframleiðsla á mann á hvert forðað DALY (nú letjað sem of gróft) |
| Reynslubundin framboðshlið Bretlands (Claxton o.fl.) | ≈ 13.000 £ á QALY sem raunverulega er vikið fyrir á jaðri NHS |

## Stærðfræðin

Þröskuldurinn λ fer inn í hverja ákvörðunarreglu:

```
Taka upp ef ICER = ΔC/ΔE < λ
Jafngilt: taka upp ef NMB = λ×ΔE − ΔC > 0
```

Tvær kenningar um hvað λ *er*:

- **Eftirspurnarhlið**: hvað samfélagið er reiðubúið að greiða fyrir heilsu (gildismat).
- **Framboðshlið**: heilsan sem fjárlögin framleiða nú á jaðrinum (reynslubundin stærð — um 13 þús. £/QALY hjá Claxton). Ef λ sem notað er í ákvörðunum fer yfir framboðshliðarhlutfallið, þá víkur samþykki nýrrar tækni fyrir meiri heilsu en það bætir við.

## Dæmi útreiknað

Stafræna meðferðin þín skilar 0,05 QALY á hvern meðhöndlaðan sjúkling á nettókostnaði (verð að frádregnum jöfnun) upp á 800 £.

```
ICER = 800 / 0,05 = 16.000 £ á QALY
```

- England: undir 20 þús. £ → fjármagnanlegt. Hámarksverð sem má verja: við λ = 20.000 £, verð_hámark = 0,05 × 20.000 + jöfnun = 1.000 £ + jöfnun.
- Bandarískur viðskiptarammi við 150 þús. $/QALY: virðisbyggt verð er mun hærra.
- Þröskuldur lands þar sem landsframleiðsla á mann er 4.000 $: sama vara má kosta undir ~200 $ nettó.

Sama vara, þrír markaðir, þrjú verð — þröskuldurinn *er* verðlagningarlíkanið. Þetta er virðisbyggð verðlagning, keyrð öfugt út frá λ.

## Tengsl við hugbúnaðarverkfræði

Sérhver verkfræðistofnun hefur óbeint λ: hindrunina sem hún fjármagnar tól yfir á hverja sparaða verkfræðingsstund. Að gera það skýrt — „við fjármögnum allt undir 40 £ á trúverðuga sparaða verkfræðingsstund“ — gerir samanburð í deildatöflu á fjárfestingum í vettvangi mögulegan, nákvæmlega eins og deildatöflur kostnaðar á QALY raða heilbrigðisútgjöldum. Framboðshliðarlexían flyst líka: raunverulegt innra λ þitt er það sem *núverandi* bunki þinn framleiðir á jaðrinum, ekki það sem stjórnendur segja að tími sé þess virði.

## Gildrur

- **Þröskuldsinnkaup** milli lögsagnarumdæma eða tilvitnun í HST-þak fyrir venjulega vöru.
- **Að meðhöndla λ sem verðgólf**: að standast þröskuldinn er nauðsynlegt, ekki nægjanlegt — [fjárhagsáhrif](../fjárlagaáhrifagreining/) geta enn sökkt vöru sem er viðráðanleg á einingu.
- **Að horfa framhjá því að þröskuldar hreyfast**: alvarleikabreytur NICE (2022) og reglubundnar endurskoðanir breyta virku λ; dagsettu fullyrðingar þínar.
- **Að bera ICER saman við þröskuld í öðrum gjaldmiðli án þess að umreikna fyrst**: sjá [ICER-samanburð milli gjaldmiðla](../samanburður-icer-milli-gjaldmiðla/) — umreikningsaðferðin (kaupmáttarjöfnuður á móti markaðsgengi) er aðferðafræðilega afdrifarík, ekki afrúnnunaratriði.
- **Að blanda saman λ-byggðu mati og VSL/VPF-hefð vinnumarkaðarins**: þetta koma úr ólíkum kenningarhefðum (aðferðafræði bundin heilbrigðisfjárlögum á móti opinberuðum óskum úr launa-áhættu málamiðlunum) og eru ekki alltaf samræmanleg — fyrir hina opinberuðu-óska nálgun við mat á lífi, sjá [verðmæti tölfræðilegs lífs](../verðmæti-tölfræðilegs-lífs/).

## Heimildir

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
