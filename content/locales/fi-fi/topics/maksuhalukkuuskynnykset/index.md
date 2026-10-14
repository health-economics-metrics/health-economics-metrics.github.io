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
- **ICER:n vertaaminen toisen valuutan kynnykseen ilman ensin tehtyä muunnosta**: katso [ICER-vertailu valuuttojen yli](../icer-vertailu-valuuttojen-yli/) — muunnosmenetelmä (ostovoimapariteetti vs. markkinavaihtokurssi) on menetelmällisesti merkittävä, ei pyöristysyksityiskohta.
- **λ-pohjaisen arvotuksen sekoittaminen työmarkkinapohjaiseen VSL/VPF-traditioon**: nämä tulevat eri teoreettisista traditioista (terveysbudjetin rajoittama metodologia vs. palkka–riski-vaihtokaupoista paljastettu preferenssi) eivätkä aina ole yhteensovitettavissa — vaihtoehtoisesta paljastetun preferenssin lähestymistavasta hengen arvottamiseen katso [tilastollisen hengen arvo](../tilastollisen-hengen-arvo/).

## Lähteet

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
