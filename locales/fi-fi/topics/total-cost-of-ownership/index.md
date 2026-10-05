# Kokonaisomistuskustannus (TCO)

TCO on kaikki kustannukset, jotka syntyvät ohjelmistojärjestelmän koko elinkaaren aikana: rakentaminen, käyttö, ylläpito ja käytöstä poistaminen.

## Miksi se on tärkeä

Vain alkuperäisten rakennuskustannusten tarkastelu jättää huomiotta käyttökustannusten varjon.

## Matematiikka

```
TCO = pääomamenot + Σ(käyttökustannukset_vuosittain) − jäännösarvo
```

## Ratkaistu esimerkki

Kliininen järjestelmä, jonka elinkaari on 5 vuotta: rakentaminen £500 000 + käyttö £150 000/vuosi × 5 = £1 250 000.

## Yhteys ohjelmistokehitykseen

TCO on perusta [pilven yksikkötalouden](../cloud-unit-economics/) ja [rakenna vastaan osta](../build-vs-buy/) -päätöksille. Monivuotinen TCO-luku kuten yllä oleva on summa monista ajan yli ulottuvista kustannuseristä — katso [valuuttaturvallinen kustannusten yhteenveto](../currency-safe-cost-rollup/), miksi tuon summan tulisi olla tarkka desimaali eikä liukuluku, kun mallin on täsmättävä senttiin, sekä [senttitarkka kustannusten jako](../exact-cents-cost-allocation/) TCO-kokonaissumman jakamiseen kustannuspaikoille menettämättä senttejä.

## Sudenkuopat

- **Käyttökustannusten aliarviointi.**

## Lähteet

- Gartner, TCO methodology.
- NHS Digital, total cost of ownership guidance.
