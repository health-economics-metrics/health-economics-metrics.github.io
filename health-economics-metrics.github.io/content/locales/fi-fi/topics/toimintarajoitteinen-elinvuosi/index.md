# Toimintarajoitteinen elinvuosi (DALY)

DALY mittaa tautitaakkaa terveiden elinvuosien määränä, jotka menetetään ennenaikaisen kuoleman ja toimintarajoitteisuuden vuoksi.

## Miksi se on tärkeä

DALY on QALY:n peilikuva: siinä missä QALY mittaa saavutettua terveyttä, DALY mittaa menetettyä terveyttä, ja se on globaalin terveyden vakiomittari.

## Matematiikka

```
DALY = YLL (menetetyt elinvuodet) + YLD (toimintarajoitteisuuden kanssa eletyt vuodet)
```

## Ratkaistu esimerkki

Sairaus, joka aiheuttaa 1 000 ihmisen kuoleman 10 vuotta ennenaikaisesti (10 000 YLL) plus 5 000 ihmistä elää 2 vuotta toimintarajoitteisuudella 0,3 (3 000 YLD) = 13 000 DALY.

## Yhteys ohjelmistokehitykseen

Muistuttaa "menetetyn käyttäjäarvon" mittaamista järjestelmähäiriöiden kautta — sekä kesto että vakavuus vaikuttavat.

## Sudenkuopat

- **Vanhentuneiden YLD-painojen käyttäminen vanhoista tutkimuksista.**
- **DALY:n ja QALY:n sekoittaminen ilman merkin korjaamista.**

## Lähteet

- WHO, Global Burden of Disease study.
- Murray CJL, Lopez AD, The Global Burden of Disease.
