# Keskittymisindeksi

Keskittymisindeksi (Wagstaff, Paci, van Doorslaer, 1991) on vakiomittari sosioekonomiseen asemaan liittyvälle eriarvoisuudelle terveysmuuttujassa, ja sen arvo vaihtelee välillä −1–1. Negatiivinen tarkoittaa, että terveysmuuttuja on keskittynyt sosioekonomisesti heikommassa asemassa oleville, positiivinen että se on keskittynyt paremmassa asemassa oleville, ja nolla että johdonmukaista sosioekonomista gradienttia ei ole — se muuttaa epäilyn epätasaisesta jakaumasta yhdeksi vertailukelpoiseksi luvuksi.

## Miksi se on tärkeä

Ohjelma voi näyttää tehokkaalta kokonaisuutena ja silti tuottaa hyötynsä lähes kokonaan niille, jotka olivat jo paremmassa asemassa. Juuri tällaisia jakautumiskysymyksiä [kattavuus ja tasa-arvo](../reach-and-equity/) seuraa kuvailevasti — kattavuus eriteltynä depriavaatiokvintiilin mukaan, tasa-arvokuilu ylimmän ja alimman ryhmän välillä — mutta eriteltyä taulukkoa ei voi tiivistää yhdeksi trendiviivaksi, eikä sitä voi helposti verrata kahden täysin erilaisen, eri asteikoilla mitatun intervention välillä. Keskittymisindeksi ratkaisee molemmat ongelmat: se lasketaan samalla tavalla mille tahansa terveysmuuttujalle mitä tahansa sosioekonomista järjestystä vasten, joten kansallinen terveyspalvelu voi seurata, kasvaako vai kaventuuko tietyn digitaalisen palvelun eriarvoisuus julkaisusta toiseen, ja verrata sovelluksen käyttöönoton jakautumisoikeudenmukaisuutta esimerkiksi seulontaohjelmaan samalla normalisoidulla asteikolla.

## Matematiikka

```
CI = (2 / keskiarvo(terveysarvot)) × Kov(terveysarvot, sosioekonomiset_sijat)

Kov(X, Y) = keskiarvo(X × Y) − keskiarvo(X) × keskiarvo(Y)   (populaatiokovarianssi)

sosioekonomiset_sijat: kunkin henkilön murtolukusija sosioekonomisessa
jakaumassa, välillä [0, 1] (0 = heikoimmassa asemassa, 1 = parhaassa
asemassa; ryhmitellyille/luokitelluille tiedoille perinteisesti kunkin
ryhmän keskipistesija)
```

Tämä on "kätevä kovarianssikaava" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Maailmanpankki 2008) — käytännön tekijöiden vakiopikatie keskittymisindeksin laskemiseen suoraan pariutetuista havainnoista ilman, että ensin piirretään ja integroidaan keskittymiskäyrän alapuolelta.

## Ratkaistu esimerkki

Itseraportoitu hyvän terveyden pistemäärä (1 = huonoin, 4 = paras) havaittuna neljässä yhtä suuressa sosioekonomisessa kvartiilissa, joista kutakin edustaa kvartiilin keskipistesija:

```
terveysarvot               = [1,0, 2,0, 3,0, 4,0]
sosioekonomiset_sijat      = [0,125, 0,375, 0,625, 0,875]

keskiarvo(terveysarvot)         = 2,5
keskiarvo(terveys × sija)       = keskiarvo([0,125, 0,75, 1,875, 3,5]) = 1,5625
keskiarvo(sosioekonomiset_sijat) = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Positiivinen `0,25` tarkoittaa, että tämä terveyspistemäärä on keskittynyt sosioekonomisesti paremmassa asemassa olevalle ryhmälle — korkeamman pistemäärän vastaajat painottuvat järjestyksen paremmin toimeentulevaan päähän.

## Yhteys ohjelmistokehitykseen

Tämä on sama kovarianssipohjainen eriarvoisuuden mittaus, jota käytetään taloustieteessä yleisesti (Gini-kertoimen serkku), ja se kartoittuu sen mittaamiseen, keskittyvätkö ohjelmistotuotteen hyödyt jo etuoikeutetuille käyttäjäsegmenteille tasaisen jakautumisen sijaan — suora jatke [kattavuudelle ja tasa-arvolle](../reach-and-equity/) (RE-AIM:n "reach"-ulottuvuus) kuvatusta kuilusta muodolliseksi tilastolliseksi mittariksi. Siinä missä kattavuus ja tasa-arvo raportoi vaikutuksen kerroksittain, keskittymisindeksi tiivistää koko jakauman yhdeksi etumerkilliseksi luvuksi, joka sopii yksittäiseksi seurattavaksi KPI:ksi julkaisujen yli — käytännöllinen kojelaudalle, jolle täysi kerroksittainen erittely ei sovi.

## Sudenkuopat

- **Etumerkkikäytännön ajelehtiminen**: etumerkki riippuu siitä, miten sekä terveysmuuttuja että sija on määritelty — kumman tahansa kääntäminen kääntää etumerkin, joten käytetty käytäntö on aina ilmoitettava selvästi jokaisen raportoidun arvon yhteydessä.
- **Rajasijat keskipistesijojen sijaan**: ryhmitellyt tai luokitellut sosioekonomiset tiedot (esim. kvintiilit) edellyttävät kunkin ryhmän murtolukusijan käyttöä sen *keskipisteessä*, ei rajalla, tai indeksi vääristyy.
- **"Lähellä nollaa" tulkittuna "ei eriarvoisuutta"**: lähellä nollaa oleva keskittymisindeksi tarkoittaa "ei johdonmukaista sosioekonomista gradienttia", ei "ei eriarvoisuutta" absoluuttisessa mielessä — eri suuntiin vaikuttavat eriarvoisuudet voivat kumota toisensa.

## Lähteet

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — käytännön tekijöiden vakiokäsikirja, tässä käytetyn kätevän kovarianssikaavan lähde. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
