# Hoitoaika

Hoitoaika mittaa päivien määrää, jonka potilas viettää sairaalassa sisäänotosta kotiutukseen — sairaalan sykliaika.

## Miksi se on tärkeä

Lyhyempi hoitoaika säästää resursseja ja vähentää sairaalaan liittyvien komplikaatioiden riskiä, mutta liian aggressiivinen lyhentäminen lisää uudelleensisäänottoja.

## Matematiikka

```
Keskimääräinen hoitoaika = Hoitopäivien kokonaismäärä / Sisäänottojen määrä
```

## Ratkaistu esimerkki

Osasto lyhentää keskimääräistä hoitoaikaa 6:sta 4,5 päivään parantuneen kotiutuskoordinoinnin ansiosta, mikä vapauttaa vuodekapasiteettia 25 % useammalle potilaalle ilman lisävuoteita.

## Yhteys ohjelmistokehitykseen

Muistuttaa sykliaikaa [virtausmittareissa](../virtausmittarit/) — kuinka kauan tehtävä on järjestelmässä alusta valmistumiseen.

## Sudenkuopat

- **Hoitoajan lyhentäminen ottamatta huomioon vaikutusta uudelleensisäänottoihin.**
- **Keskiarvojen käyttäminen, joita vääristävät äärimmäiset poikkeamat.**

## Lähteet

- NHS Digital, hospital episode statistics.
- OECD, length of stay international comparisons.
