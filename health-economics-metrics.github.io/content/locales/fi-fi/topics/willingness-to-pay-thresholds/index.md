# Maksuhalukkuuskynnykset

Maksuhalukkuuskynnykset määrittävät enimmäissumman, jonka järjestelmä on valmis maksamaan saavutettua QALY:a kohden.

## Miksi se on tärkeä

Kynnys on päätöksenteon raja: kynnyksen alla olevat interventiot rahoitetaan yleensä, yläpuolella olevat yleensä eivät.

## Matematiikka

```
Rahoituspäätös: rahoita, jos ICER < kynnys (£/QALY)
```

## Ratkaistu esimerkki

NICE käyttää tyypillisesti £20 000–£30 000/QALY; Yhdysvallat käyttää epävirallisesti $50 000–$150 000/QALY; Thaimaa käyttää noin 1× BKT henkeä kohden.

## Yhteys ohjelmistokehitykseen

Muistuttaa sisäistä "kustannus per estetty häiriö" -kynnystä, joka määrittää, mitkä luotettavuusinvestoinnit ovat sen arvoisia.

## Sudenkuopat

- **Kynnysten vertaaminen maiden välillä ottamatta huomioon ostovoimaeroja.**
- **Kynnyksen käsitteleminen tiukkana rajana ohjeen sijaan.**

## Lähteet

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
