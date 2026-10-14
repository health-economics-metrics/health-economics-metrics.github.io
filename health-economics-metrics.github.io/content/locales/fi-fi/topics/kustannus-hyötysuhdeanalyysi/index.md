# Kustannus-hyötysuhdeanalyysi (CUA)

Kustannus-hyötysuhdeanalyysi vertailee interventioita kustannuksella QALY:a kohden, mikä tekee täysin erilaisista hoidoista vertailukelpoisia yhdellä asteikolla.

## Miksi se on tärkeä

CUA on NICEn ja useimpien HTA-elinten vakiomenetelmä, koska se voi vertailla sydänlääkettä mielenterveysinterventioon.

## Matematiikka

```
CUA-suhde (ICER) = (Kustannus_A − Kustannus_B) / (QALY_A − QALY_B)
```

## Ratkaistu esimerkki

Uusi reumalääke maksaa £8 000 enemmän ja tuottaa 0,4 QALY:a enemmän verrattuna standardihoitoon: £20 000/QALY.

## Yhteys ohjelmistokehitykseen

Muistuttaa kustannuksen normalisointia käyttäjäarvon yksikköä kohden täysin erilaisten ominaisuustyyppien välillä.

## Sudenkuopat

- **Hyötypainojen käyttäminen, joita ei ole validoitu kyseiselle väestölle.**
- **CUA- ja CEA-tulosten sekoittaminen määrittelemättä yksikköä.**

## Lähteet

- NICE, Guide to the methods of technology appraisal.
- Whitehead SJ, Ali S, QALYs and utilities.
