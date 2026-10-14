# Hiilijalanjälki per QALY

Hiili per QALY on tehokkuussuhde — intervention hiilidioksidipäästöt (tai vältetyt päästöt) jaettuna sen tuottamilla QALY-vuosilla — joka vastaa suoraan kustannusta per QALY ja mahdollistaa intervention hiilitehokkuuden arvioinnin kustannustehokkuuden rinnalla. "Hiilioikaistu nettorahallinen hyöty" menee askeleen pidemmälle: se rahallistaa hiilivaikutuksen Ison-Britannian Green Bookin virallisilla ei-kaupattujen hiilen arvoilla ja vähentää sen tavanomaisesta [nettorahallisesta hyödystä](../nettorahallinen-hyöty/).

## Miksi se on tärkeä

NICE ja NHS England odottavat nykyään, että ympäristövaikutukset otetaan huomioon kustannusten ja QALY-vuosien rinnalla. NHS:llä on julkinen nettonollasitoumus: nettonolla suorille päästöilleen vuoteen 2040 mennessä ja nettonolla koko toimitusketjun jalanjäljelleen vuoteen 2045 mennessä. NICEn terveysteknologian arviointien käsikirja (PMG36) mainitsee ympäristön kestävyyden esiin nousevana näkökohtana teknologia-arvioinneissa. Digitaaliselle terveystuotteelle tämä tarkoittaa, että hiilestä on tulossa arvoperustelun neljäs pilari kustannusten, QALY-vuosien ja [dominanssin tehokkuusrajalla](../dominanssi-ja-tehokkuusraja/) rinnalla — ei korvaamaan mitään niistä, vaan ulottuvuutena, jonka hyvin rakennetun liiketoimintaperustelun on yhä useammin raportoitava.

## Matematiikka

```
Hiili per QALY = kokonaispäästöt_tonnia_co2e / QALY_yhteensä
  (negatiivinen arvo tarkoittaa nettomääräisesti VÄLTETTYJÄ päästöjä per
  saavutettu QALY — kaksinkertainen voitto: parempi terveys ja vähemmän hiiltä)

Rahallistettu hiilivaikutus = päästöt_tonnia_co2e × hiilen_arvo_per_tonni
  (negatiiviset päästöt × positiivinen arvo = negatiivinen kustannus, eli hyöty)

Hiilioikaistu NMB = nettorahallinen_hyöty − rahallistettu_hiilivaikutus
```

Tämä laajentaa kustannus/QALY-tehokkuusrajan ajatusta toisella akselilla — hiili per QALY — samalla logiikalla "piirrä kaikki vaihtoehdot ja katso, mikä on dominoitu" kuin [dominanssissa ja tehokkuusrajassa](../dominanssi-ja-tehokkuusraja/), nyt sovellettuna hiileen kustannuksen sijaan.

## Ratkaistu esimerkki

Etäterveyspalvelu korvaa kasvokkaiset käynnit ja välttää 5 000 automatkaa vuodessa, joista kukin on noin 8 kg CO2e — 40 tonnia CO2e vältetty, esitettynä negatiivisena päästölukuna (−40,0 tonnia), ja se tuottaa 25 QALY-vuotta vuodessa:

```
Hiili per QALY = −40,0 / 25,0 = −1,6 tonnia CO2e vältetty per saavutettu QALY
```

Käyttäen Green Bookin ei-kaupattua hiilen arvoa (havainnollistava luku, vuoden 2023 ei-kaupattu keskiarvo ≈ £269/tonni CO2e — Green Book päivittää hiilen arvot vuosittain, tarkista uudelleen ennen lainaamista käynnissä olevassa analyysissä):

```
Rahallistettu hiilivaikutus = −40,0 × £269 = −£10 760
```

"Kustannus" −£10 760 on £10 760 hyötyä. Jos intervention itsenäinen nettorahallinen hyöty on £500 000:

```
Hiilioikaistu NMB = £500 000 − (−£10 760) = £510 760
```

Hiilisäästö vahvistaa perustelua sen heikentämisen sijaan — juuri sen kaksinkertaisen voiton, jonka negatiivisten päästöjen kehys on tarkoitettu tuomaan esiin.

## Yhteys ohjelmistokehitykseen

Tämä on ajankohtainen leikkauspiste tekoäly- ja pilvitalouden kanssa: tekoälymallin kouluttamisen ja ajamisen laskennallinen hiilijalanjälki on nyt todellinen erä NHS:n hankinnoissa, sillä tiettyjen kynnysten ylittävät NHS:n toimittajasopimukset edellyttävät Carbon Reduction Planin. [Pilven yksikkötalous](../pilven-yksikkötalous/) seuraa jo kustannusta per laskentatuotoksen yksikkö; hiili per QALY on luonteva malli tulevalle "hiilikustannus per päättely" -mittarille, joka laajentaisi tuon moduulin ja päättelyn yksikkötalouden ympäristöulottuvuuteen, vaikka sellaista mittaria ei vielä ole.

## Sudenkuopat

- **Rajauksen manipulointi**: lasketaan vain suorat (Scope 1) päästöt ja jätetään pois toimitusketjun (Scope 3) päästöt, jotka ovat yleensä suurin osa digitaalisen terveystuotteen todellisesta jalanjäljestä.
- **Vanhentuneen hiilen arvon käyttö**: Green Book päivittää ei-kaupatut hiilen arvonsa vuosittain, joten jokainen lainattu £/tonni -luku on päivättävä, ei esitettävä kiinteänä vakiona.
- **"Hiilitehokkaan" pitäminen "kustannusvaikuttavan" korvikkeena**: vähähiilinen, mutta vähäarvoinen interventio on silti huono NHS:n resurssien käyttö. Hiili on neljäs pilari kustannusten ja QALY-vuosien rinnalla, ei kummankaan korvike.

## Lähteet

- NHS England, "Delivering a Net Zero National Health Service" (2020, päivitetty 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (päivitetään vuosittain; ei-kaupattu keskiarvo ≈ £269/tCO2e, 2023 — päivää jokainen lainaus). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
