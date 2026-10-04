# EQ-5D

EQ-5D on standardoitu instrumentti, joka mittaa terveydentilaa viidessä ulottuvuudessa tuottaakseen hyötypainoja QALY-laskelmiin.

## Miksi se on tärkeä

Useimmat käytännön QALY-laskelmat perustuvat EQ-5D-dataan, mikä tekee instrumentista todellisen perustan lukujen takana, jotka esitetään abstraktina "hyötynä".

## Matematiikka

```
Hyötyindeksi = f(liikkuvuus, itsestä huolehtiminen, tavanomaiset toiminnot, kipu/epämukavuus, ahdistus/masennus)
```

## Ratkaistu esimerkki

Potilas ilmoittaa kohtalaisia ongelmia liikkuvuudessa ja kivussa, ei ongelmia muualla: tämä tilaprofiili vastaa hyötyä noin 0,73 Ison-Britannian arvostussarjan mukaan.

## Yhteys ohjelmistokehitykseen

Muistuttaa yhdistettyä tyytyväisyyspistemäärää, joka on rakennettu useista mitatuista ulottuvuuksista yhden karkean mittarin sijaan.

## Sudenkuopat

- **Väärästä maasta peräisin olevan arvostussarjan käyttäminen.**
- **Vanhemman EQ-5D-3L:n ja uudemman EQ-5D-5L:n sekoittaminen ilman mukautusta.**

## Lähteet

- EuroQol Group, EQ-5D user guide.
- NICE, position statement on use of the EQ-5D-5L.
