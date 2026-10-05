# Monikriteerinen päätösanalyysi (MCDA)

Monikriteerinen päätösanalyysi (MCDA) on painotettuun summaan perustuva pisteytysmalli, jota käytetään terveysteknologian arvioinnissa, kun yksittäinen ICER-/maksuhalukkuuskynnys ei kata kaikkea, mistä päätöksentekijä välittää: tasa-arvo, tyydyttämätön tarve, innovaatio, budjettivaikutus, sairauden vakavuus. Jokaiselle kriteerille annetaan sen tärkeyttä kuvaava paino (hankittu sidosryhmiltä, painot summautuvat 1:een), jokaiselle vaihtoehdolle annetaan normalisoitu pistemäärä kriteeriä kohti (tyypillisesti 0–1), ja kokonaispistemäärä on painotettu summa — sama matemaattinen muoto kuin ohjelmistotoimittajan valinnan pisteytyskortissa.

## Miksi se on tärkeä

MCDA:ta käytetään kehyksissä kuten EVIDEM ja joissakin HTA-elimissä harvinaisten sairauksien lääkkeiden arvioinneissa, joissa tiukkaa kustannus-per-QALY-kynnystä pidetään liian kapeana kattamaan kaikkea päätöksessä merkityksellistä. ISPORin MCDA Emerging Good Practices Task Force muotoili hyvän käytännön ohjeistuksen painojen ja pisteiden puolustettavaan hankintaan juuri siksi, että epämuodollisesti painotettu päätös on helppo rakentaa ja helppo manipuloida. Kun terveysteknologialla on arvoulottuvuuksia, joita yksittäinen [maksuhalukkuuskynnys](../willingness-to-pay-thresholds/) ei voi esittää — vakavuus, innovaatio, tasa-arvo — MCDA antaa päätöksentekijöille eksplisiittisen, tarkastettavan rakenteen niiden yhdistämiseen ääneen lausumattoman harkinnan sijaan.

## Matematiikka

```
MCDA-pistemäärä = Σ_i (paino_i × pisteet_i)

painojen tulisi summautua 1:een (hankittu sidosryhmämenetelmillä kuten
swing-painotus tai Analytic Hierarchy Process)
```

## Ratkaistu esimerkki

HTA-lautakunta pisteyttää digitaalisen terapian neljällä kriteerillä:

```
Kriteeri                           Paino    Pisteet  Paino × Pisteet
Kliininen hyöty                    0,4      0,8      0,32
Kustannusvaikutus                  0,3      0,5      0,15
Sairauden vakavuus / tyydyttämätön tarve 0,2  0,9    0,18
Innovaatio                         0,1      0,6      0,06
                                    ─────                 ─────
                                    1,0                   0,71
```

Painot summautuvat 1,0:aan (0,4 + 0,3 + 0,2 + 0,1), ja MCDA-pistemäärä on 0,71 (0,32 + 0,15 + 0,18 + 0,06). Lautakunta vertaa lukua 0,71 ennalta sovittuun kynnykseen tai asettaa sen järjestykseen samalla tavalla pisteytettyjen kilpailevien teknologioiden kanssa.

## Yhteys ohjelmistokehitykseen

Tämä on täsmälleen sama matematiikka kuin painotetussa toimittajavalinnan pisteytyskortissa, tarjouspyynnön arviointimatriisissa tai ominaisuuksien priorisointipisteytysmallissa — katso [rakenna vastaan osta](../build-vs-buy/), klassinen painotetun pisteytyskortin käyttötapaus ohjelmistohankinnoissa. Kannattaa myös verrata [WSJF:ään ja CD3:een](../wsjf-and-cd3/): WSJF/CD3 on *suhdelukuun* perustuva priorisointimenetelmä (viivästymisen kustannus jaettuna työn koolla tai kestolla), kun taas MCDA on painotettu *summa*. MCDA ja WSJF/CD3 ovat kaksi rakenteellisesti erilaista vastausta kysymykseen "miten asetamme kilpailevat vaihtoehdot järjestykseen", ja sen tietäminen, mitä tietty päätös todella vaatii — additiivista arvoa riippumattomien kriteerien yli vai arvotiheyttä niukan kapasiteetin yksikköä kohti — on tärkeämpää kuin se, kumpi kaava näyttää tiukemmalta.

## Sudenkuopat

- **Painojen hankinnan vinouma**: se, joka asettaa painot, ennalta määrää käytännössä järjestyksen, joten "kaava" voi pestä poliittisen tai kaupallisen päätöksen objektiiviseksi laskelmaksi. Dokumentoi, kuka asetti painot ja miten.
- **Muualla jo katetun kriteerin kaksoislaskenta**: "kustannusvaikuttavuuden" pisteyttäminen yhtenä kriteerinä *ja* "kustannusvaikutuksen" pisteyttäminen erikseen ylipainottaa rahaa muihin kriteereihin nähden kenenkään sitä tarkoittamatta.
- **Näennäinen tarkkuus**: kahden desimaalin painotettu pistemäärä (0,71) antaa ymmärtää enemmän tarkkuutta kuin taustalla olevat sidosryhmien 0–10-asteikon arviot tosiasiassa kantavat, ja arvioijien välistä vaihtelua noissa arvioissa ei usein raportoida lainkaan.

## Lähteet

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
