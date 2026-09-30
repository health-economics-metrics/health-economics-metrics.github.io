# Nettorahallinen hyöty (NMB)

Nettorahallinen hyöty muuntaa terveyshyödyn rahaksi kynnysarvolla ja vähentää kustannukset, mikä mahdollistaa interventioiden järjestämisen yhdellä luvulla.

## Miksi se on tärkeä

Toisin kuin ICER, NMB on lineaarinen, mikä tekee tilastollisesta analyysistä (keskiarvot, luottamusvälit) paljon helpompaa.

## Matematiikka

```
NMB = (Vaikutus × kynnysarvo) − Kustannus
```

## Ratkaistu esimerkki

Interventio tuottaa 0,3 QALY:a £4 000 kustannuksella, kynnys £20 000/QALY: NMB = (0,3 × £20 000) − £4 000 = £2 000 (positiivinen = kustannustehokas).

## Yhteys ohjelmistokehitykseen

Muistuttaa useiden vaikutusulottuvuuksien (nopeus, luotettavuus, ominaisuudet) muuntamista yhdeksi yhdistetyksi arvopistemääräksi priorisointia varten.

## Sudenkuopat

- **Väärän kynnysarvon käyttäminen NMB:tä laskettaessa.**
- **NMB-vertailujen tekeminen tutkimusten välillä, jotka käyttivät eri kynnyksiä.**

## Lähteet

- Stinnett AA, Mullahy J, "Net health benefits: a new framework."
- NICE DSU Technical Support Documents.
