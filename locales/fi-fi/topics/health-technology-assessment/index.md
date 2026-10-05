# Terveysteknologian arviointi (HTA)

Terveysteknologian arviointi on virallinen prosessi, jolla elimet kuten NICE, ICER (Yhdysvallat) ja CADTH arvioivat, kannattaako uutta teknologiaa rahoittaa.

## Miksi se on tärkeä

HTA-elimet määrittävät käytännössä markkinoille pääsyn uusille terveysteknologioille useimmissa kehittyneissä terveydenhuoltojärjestelmissä.

## Matematiikka

```
HTA-suositus = f(ICER vastaan kynnys, budjettivaikutus, näytön laatu, tasa-arvonäkökohdat)
```

## Ratkaistu esimerkki

NICE arvioi uuden diagnostisen työkalun: ICER £18 000/QALY (kynnyksen alla), kohtalainen budjettivaikutus ja vankka kliininen näyttö johtavat myönteiseen suositukseen rutiinikäyttöön.

## Yhteys ohjelmistokehitykseen

Muistuttaa virallista arkkitehtuurin hyväksyntäprosessia, joka arvioi kustannuksia, riskiä ja tehokkuuden näyttöä ennen uuden teknologian hyväksymistä koko organisaatiossa.

Siitä, miten monisyklinen HTA-malli todella simuloidaan kohortti kerrallaan, sykli kerrallaan, katso [Markov-kohorttisimulaatio](../markov-cohort-simulation/).

## Sudenkuopat

- **Oletus, että myönteinen kliininen tutkimus johtaa automaattisesti HTA-hyväksyntään.**
- **Budjettivaikutuksen ja kustannusvaikuttavuuden käsitteleminen samana kriteerinä.**

## Lähteet

- NICE, technology appraisal process.
- ICER (US), value assessment framework.
