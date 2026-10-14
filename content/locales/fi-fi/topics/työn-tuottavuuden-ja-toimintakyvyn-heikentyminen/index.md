# Työn tuottavuuden ja toimintakyvyn heikentyminen (WPAI)

WPAI on validoitu itseraportointikyselylomake (Reilly, Zbrozek, Dasbach, 1993), joka mittaa, kuinka paljon terveysongelma vaikuttaa palkkatyöhön ja päivittäisiin toimintoihin, yleensä viimeisen 7 päivän aikana. Se jakaa menetyksen *poissaoloon* (absenteeism) — kirjaimellisesti menetettyyn työaikaan — ja *sairaana työskentelyyn* (presenteeism) — heikentyneeseen tuottavuuteen fyysisesti työpaikalla ollessa — ja jälkimmäinen on yleensä suurempi, piilossa oleva kustannuskomponentti.

## Miksi se on tärkeä

Pelkkä sairauspäivälaskenta näkee vain poissaolon. Kliinikko tai tietotyöntekijä, joka ei koskaan ota vapaata mutta työskentelee kroonisen sairauden vuoksi 60 %:n kapasiteetilla, ei lisää poissaolorekisteriin mitään mutta aiheuttaa silti suuren, todellisen tuottavuusmenetyksen — WPAI on suunniteltu nimenomaan tuomaan tämä näkymätön kustannus esiin. Koska se on validoitu instrumentti eikä räätälöity kysely, sen pistemääriä voi käyttää [potilaan raportoimien tulosten](../potilaan-raportoimat-tulokset/) näyttöpaketeissa ja sairauskustannustutkimuksissa ilman, että arvioijan tarvitsee validoida mittaria uudelleen. Itseraportointi-instrumenttina se on itsekin PROM:in muoto, jonka erottaa lähinnä painotus työhön ja toimintaan oireiden tai elämänlaadun sijaan.

## Matematiikka

```
Poissaolo % = terveyden_vuoksi_menetetyt_tunnit / (terveyden_vuoksi_menetetyt_tunnit + tehdyt_työtunnit) × 100

Sairaana työskentely %  = itsearvioitu 0–10 heikentyminen työssä, × 10
                  (selvitetään suoraan kyselyllä, ei johdeta tässä)

Työn kokonaisheikentyminen % =
    Poissaolo% + (1 − Poissaolo%/100) × Sairaana_työskentely%
    (yhdistää nämä kaksi niin, ettei kokonaismäärä voi koskaan ylittää 100 %)

Tuottavuuskustannus = Työn_kokonaisheikentyminen% / 100 × jakson_ansiot
```

Kokonaisheikentymisen kaava ei ole tarkoituksella pelkkä summa: prosenttien suora yhteenlasku voisi ylittää 100 %, joten sairaana työskentely sovelletaan vain työajan *jäljellä olevaan* (ei-poissaolevaan) osaan.

## Ratkaistu esimerkki

Migreenistä kärsivä työntekijä on aikataulutettu 40 tunnin viikolle mutta jättää väliin 4 tuntia siitä:

```
menetetyt_tunnit = 4, tehdyt_työtunnit = 36
Poissaolo% = 4 / (4 + 36) × 100 = 10 %
```

Hän arvioi erikseen tuottavuusvaikutuksensa työssä ollessaan 3/10 WPAI-kyselyssä, eli `Sairaana_työskentely% = 30 %` (tämä vaihe on raaka kyselyvastaus, ei muista luvuista johdettu):

```
Työn kokonaisheikentyminen% = 10 + (1 − 10/100) × 30
                            = 10 + 0,9 × 30
                            = 10 + 27
                            = 37 %
```

5 päivän viikolla, jolla ansiot ovat £800 (£160/päivä):

```
Tuottavuuskustannus = 37/100 × 800 = £296
```

Huomaa, että naiivi sairauspäivälaskenta olisi kirjannut vain menetetyt 4 tuntia (10 %) — sairaana työskentelyn osuus lähes kolminkertaistaa todellisen heikentymisen, kun se lasketaan mukaan.

## Yhteys ohjelmistokehitykseen

Tämä kartoittuu suoraan insinööritiimien hyvinvointimittareihin:

- **Poissaolo** on sairauspoissaolot ja palkallinen vapaa — näkyvä, jo seurattu ja helppo osa.
- **Sairaana työskentely** on loppuun palanut tai kontekstinvaihtojen ylikuormittama insinööri, joka on läsnä jokaisessa stand-upissa mutta toimii heikentyneellä kapasiteetilla — yleensä suurempi ja piilossa oleva kustannus, näkymätön henkilömäärä- tai läsnäolodatalle. Se näkyy sen sijaan heikentyneenä läpimenona [DORA](../dora-mittarit/)- ja [virtausmittareissa](../virtausmittarit/) tai hitaampana sellaisen [teknisen velan](../tekninen-velka/) purkamisena, jonka "korko" pahentaa heikentymistä entisestään.
- Insinöörin opetus on sama kuin kliininen: pelkän poissaolon mittaaminen ja sen kutsuminen "tuottavuusmenetykseksi" aliarvioi järjestelmällisesti todellisen kustannuksen, koska se ohittaa kaikki, jotka ovat läsnä mutta heikentyneitä.

## Sudenkuopat

- **Itseraportoinnin muistiharha.** 7 päivän muistiikkuna on alttiina samoille raportoinnin vääristymille kuin mikä tahansa retrospektiivinen itseraportointi.
- **0–10-sairaana työskentelyasteikon käsitteleminen todellisena fyysisenä mittauksena.** Se on ordinaalinen, selvitetty itsearvioinnilla, ei validoitu fysikaalinen suure — erojen käsittely tiukasti lineaarisina tai intervalliasteikollisina on mallinnuksen mukavuus, ei validoitu fysikaalinen tosiasia.
- **Pistemäärien yhdistäminen WPAI-varianttien yli.** WPAI:llä on useita tilakohtaisia versioita — WPAI:GH (yleinen terveys), WPAI:SHP (tietty terveysongelma) ja sairauskohtaiset variantit — eikä eri varianttien pistemääriä pidä yhdistää tai verrata tarkistamatta ensin, että kyse on samasta instrumenttiversiosta.

## Lähteet

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI-instrumentin dokumentaatio, Reilly Associates — virallinen pisteytysviite. <https://www.reillyassociates.net/>
