# Fötlunarleiðrétt lífár (DALY)

DALY er eitt glatað ár heilbrigðs lífs — byrðarspegill [QALY](../gæðaleiðrétt-lífár/). Þar sem QALY telja heilsu *sem vinnst* telja DALY heilsu *sem glatast* vegna sjúkdóma; inngrip eru metin eftir DALY sem **komist er hjá**.

## Hvers vegna það skiptir máli

DALY er staðall alþjóðlegrar heilsu (WHO, rannsóknin Global Burden of Disease og flest heilbrigðisráðuneyti lág- og meðaltekjuríkja skipuleggja í DALY). Ef hugbúnaður þinn beinist að alþjóðlegum heilbrigðiskerfum, gjöfum eða áætlunum í takt við WHO er verðmætamálið DALY sem komist er hjá, ekki QALY sem vinnast. Söguleg viðmið WHO-CHOICE: inngrip sem kemur í veg fyrir DALY fyrir minna en 1× landsframleiðslu á mann er „mjög kostnaðarhagkvæmt“, 1–3× landsframleiðsla á mann „kostnaðarhagkvæmt“ (WHO letur nú til stífrar notkunar þessara banda, en þau eru enn alls staðar í reynd).

## Stærðfræðin

```
DALY = YLL + YLD

YLL (glötuð lífár)               = dauðsföll × staðlaðar lífslíkur við dánaraldur
YLD (ár lifuð með fötlun)        = algengi × fötlunarvigt

fötlunarvigt ∈ [0, 1], 0 = full heilsa, 1 = jafngildir dauða
(vigtir birtar af Global Burden of Disease rannsókninni)
```

## Dæmi útreiknað

Skimunaráminningavettvangur á svæði eykur snemmgreiningu sjúkdóms. Árlega kemur hann í veg fyrir 10 ótímabær dauðsföll (hvert glatar 20 árum miðað við staðlaðar lífslíkur) og kemur í veg fyrir að 200 manns lifi ár með ástand þar sem fötlunarvigt er 0,2.

```
YLL sem komist er hjá = 10 × 20        = 200
YLD sem komist er hjá = 200 × 0,2      = 40
DALY sem komist er hjá                 = 240 á ári
```

Ef vettvangurinn kostar 600.000 $/ár í rekstri er kostnaður á hvert DALY sem komist er hjá 600.000 / 240 = **2.500 $**. Í landi með landsframleiðslu á mann upp á 8.000 $ er það langt undir viðmiðinu 1× landsframleiðsla — „mjög kostnaðarhagkvæmt“ samkvæmt WHO-CHOICE.

## Tengsl við hugbúnaðarverkfræði

- Stafræn heilsa ætluð alþjóðlegum fjármögnunaraðilum heilbrigðismála (Gavi, Global Fund, landsáætlanir) ætti að tjá áhrif sem **kostnað á DALY sem komist er hjá** — það er mælikvarðinn sem umsagnaraðilar styrkja hugsa nú þegar í.
- DALY er líka gagnlegt *byrðarbókhaldssniðmát* fyrir verkfræði: atvik, flöktandi smíðar og núningur eldri kerfa eru „ár lifuð með fötlun“ fyrir kóðagrunn — byrðarskrá vigtuð eftir striti segir þér hvar úrbætur kaupa flest „heilbrigð verkfræðiár“, á sama hátt og GBD-byrðartöflur beina heilbrigðisútgjöldum.

## Gildrur

- **QALY unnin ≠ DALY sem komist er hjá tölulega** — ólíkar vigtir, ólíkar lífslíkutöflur, ólíkar venjur (DALY notuðu sögulega aldursvigtun og núvirðingu innan mælikvarðans). Ekki umbreyta af handahófi.
- **Að nota margfeldi landsframleiðslu sem stimpil** — WHO sjálft varar við því að þau horfi framhjá fjárlögum og fórnarkostnaði; sjá [greiðsluviljaþröskuldar](../greiðsluviljaþröskuldar/).
- **Að fullyrða DALY á landsvísu út frá virkni á hvern notanda** án þess að margfalda í gegnum upptöku og fylgni — sjá [ná og jöfnuður](../ná-og-jöfnuður/).

## Heimildir

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
