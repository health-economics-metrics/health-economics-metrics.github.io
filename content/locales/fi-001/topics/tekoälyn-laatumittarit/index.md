# Tekoälyn laatumittarit

Tekoälyn laatumittarit mittaavat mallin tuotoksen tarkkuutta, luotettavuutta ja turvallisuutta: tarkkuus, saanti, hallusinaatioaste.

## Miksi se on tärkeä

Jopa korkean läpimenon tekoälyjärjestelmillä voi olla alavirran korjauskustannuksia, jotka ylittävät säästöt, jos laatu on heikko.

## Matematiikka

```
F1-pistemäärä = 2 × (tarkkuus × saanti) / (tarkkuus + saanti)
```

## Ratkaistu esimerkki

Tekoälytyökalu kliiniseen koodaukseen: tarkkuus 0,85, saanti 0,78 = F1 0,81.

## Yhteys ohjelmistokehitykseen

Yleiset ohjelmiston laatumittarit, jotka ovat [kliinisen tekoälyn arvioinnin](../kliininen-tekoälyn-arviointi/) perusta.

## Sudenkuopat

- **Vain tarkkuuden tarkastelu, luokkien epätasapainon huomiotta jättäminen.**

## Lähteet

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
