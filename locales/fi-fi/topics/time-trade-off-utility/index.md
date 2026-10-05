# Time Trade-Off (TTO) -hyötypainon selvittäminen

TTO on vakiomenetelmä terveydentilan hyötypainon selvittämiseen suoraan vastaajalta sen keksimisen sijaan. Se on yksi niistä selvitysmenetelmistä — standard gamblen ja diskreettien valintakokeiden ohella — jotka tuottavat arvosarjat [EQ-5D](../eq-5d/):n kaltaisten instrumenttien taustalle ja siten useimpien jatkossa tehtävien [QALY](../quality-adjusted-life-year/)-laskelmien taustalle.

## Miksi se on tärkeä

Jokaisen QALY-laskelmaan syötettävän hyötypainon on täytynyt tulla jostakin. TTO on tapa: kuolemaa parempana pidetylle tilalle vastaajalta kysytään, kuinka monta vuotta `X` täydessä terveydessä hän pitäisi vastaavana kuin `T` vuotta heikentyneessä tilassa (`X < T`); hyöty on `X / T`. Tilalle, jonka jotkut vastaajat pitävät kuolemaa huonompana, vakiokaava rikkoutuu (se ei voi esittää nollaa pienempiä hyötyjä siististi), joten käytetään laajennettua TTO:ta. Ohjelmistoinsinööri tai analyytikko, joka käsittelee hyötypainoa annettuna syötteenä tietämättä, että sen tuottaminen vaati validoidun selvitysprotokollan, on yhden askeleen päässä luvusta, jota hän ei voi puolustaa, jos sitä haastetaan.

## Matematiikka

```
Tavallinen TTO (tila kuolemaa parempi):
  hyöty = aika_täydessä_terveydessä / aika_heikentyneessä_tilassa

Laajennettu TTO (tila kuolemaa huonompi):
  hyöty = -kuolemaan_vaihdettu_aika / (kokonaiskesto - kuolemaan_vaihdettu_aika)
```

`aika_täydessä_terveydessä` / `aika_heikentyneessä_tilassa` — vuodet `X` täydessä terveydessä, jotka arvioidaan vastaaviksi kuin `T` vuotta heikentyneessä tilassa. `kuolemaan_vaihdettu_aika` / `kokonaiskesto` — kuolemaa huonompaa tilaa koskevassa muotoilussa `T` vuoden jäljellä olevan elämän vuodet `a`, jotka vastaaja vaihtaisi välittömään kuolemaan, koska hän suosii `T − a` vuotta täydessä terveydessä ja sen jälkeistä kuolemaa `T` vuoden sijaan kuolemaa huonommassa tilassa. Tulos on negatiivinen, ankkuroituna niin että kuolema = 0.

## Ratkaistu esimerkki

**Tavallinen**: vastaaja on heikentyneessä tilassa 10 vuotta ja on välinpitämätön 7 vuoden täyden terveyden suhteen: hyöty = 7 / 10 = **0,7**.

**Kuolemaa huonompi**: 10 vuoden jäljellä olevan elämän aikana vastaaja vaihtaisi 2 vuotta välittömään kuolemaan — hän suosii 8 vuotta täydessä terveydessä ja sen jälkeistä kuolemaa 10 vuoden sijaan kuolemaa huonommassa tilassa: hyöty = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Yhteys ohjelmistokehitykseen

Sama seikka, johon DevEx- tai sitoutumiskysely törmää pyytäessään ihmisiä arvioimaan jotakin tutkimattomalla 0–10-asteikolla, pätee tässä toisin päin: TTO on olemassa juuri siksi, ettei "pyydä ihmisiä vain arvioimaan sitä" ole sellaisenaan validoitu selvitysmenetelmä. Ennen kuin rakentaa yhdistelmäindeksin — DevEx-pistemäärän, sitoutumisindeksin, työuupumusasteikon — itsearvioidun luvun päälle, kannattaa kysyä, millä se selvitettiin ja oliko menetelmä validoitu; saman kysymyksen terveystaloustieteilijät esittävät hyötypainolle ennen kuin se menee QALY:ihin.

## Sudenkuopat

- **Yksilöarvon yleistäminen**: TTO-arvot selvitetään yleisön (tai potilaiden) *otoksesta*, ei sen henkilön, jonka hoidosta päätetään — yhden vastaajan TTO-arvon käyttö ikään kuin se yleistyisi on otantavirhe.
- **Väärä muotoilu tilalle**: tavallinen TTO-kaava olettaa tilan olevan yksiselitteisesti kuolemaa parempi; sen soveltaminen tilaan, jonka jotkut vastaajat pitäisivät kuolemaa huonompana, vaihtamatta laajennettuun muotoiluun, tuottaa hiljaa väärän (positiivisen) hyödyn.
- **Vertailukelvottomat kestot**: TTO-arvot, jotka on selvitetty eri jäljellä olevan elämän kestoilla `T` kuolemaa huonomman vertailussa, eivät ole suoraan vertailukelpoisia ilman tarkistusta, että tutkimusasetelma piti `T`:n vakiona.

## Lähteet

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
