# Todennäköisyyspohjainen herkkyysanalyysi

Todennäköisyyspohjainen herkkyysanalyysi (PSA) vaihtelee kaikkia epävarmoja parametreja samanaikaisesti Monte Carlo -simuloinnin avulla tulosten todennäköisyysjakauman tuottamiseksi.

## Miksi se on tärkeä

Yksinkertainen herkkyysanalyysi testaa yhtä muuttujaa kerrallaan; PSA vangitsee kaikkien parametrien yhdistetyn epävarmuuden yhdessä.

## Matematiikka

```
Jokaiselle simulaatiolle i: poimi parametriarvot niiden jakaumista, laske tulos_i
Kustannusvaikuttavuuden todennäköisyys = kynnyksen alle jäävien simulaatioiden määrä / simulaatioiden kokonaismäärä
```

## Ratkaistu esimerkki

10 000 Monte Carlo -simulaatiota uudesta diagnostisesta työkalusta osoittavat, että se on kustannustehokas 72 %:ssa simulaatioista £20 000/QALY-kynnyksellä.

## Yhteys ohjelmistokehitykseen

Muistuttaa Monte Carlo -kuormitustestausta, joka vaihtelee useita epävarmoja järjestelmäparametreja samanaikaisesti.

## Sudenkuopat

- **Parametrien välisten korrelaatioiden jättäminen huomiotta otannassa.**
- **CEAC:n väärintulkinta yksinkertaisena prosenttiosuutena todennäköisyysjakauman sijaan.**

## Lähteet

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
