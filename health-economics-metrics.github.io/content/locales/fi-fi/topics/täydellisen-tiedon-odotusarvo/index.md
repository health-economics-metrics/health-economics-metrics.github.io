# Täydellisen tiedon odotusarvo

Täydellisen tiedon odotusarvo (EVPI) hinnoittelee, kuinka paljon maksaisi poistaa kaikki epävarmuus päätöksestä ennen sen tekemistä.

## Miksi se on tärkeä

EVPI kertoo, kannattaako pilotti tai lisätutkimus kustannuksensa, ennen kuin toteutat sen. Option hinnoitteluun hankkeen myöhemmäksi laajentamiseksi, tiedon keräämisen option sijaan, katso [reaalioptioiden arvostus](../reaalioptioiden-arvostus/).

## Matematiikka

```
EVPI = E[maksimi vaihtoehtojen yli(arvo täydellisellä tiedolla)] − maksimi vaihtoehtojen yli(E[arvo])
```

## Ratkaistu esimerkki

Päätöksellä ottaa käyttöön tekoälypohjainen triage-järjestelmä on EVPI £2 miljoonaa väestötasolla; £500 000 maksava pilottitutkimus on perusteltu.

## Yhteys ohjelmistokehitykseen

Muistuttaa spike- tai proof-of-concept-hinnoittelua ennen suurta arkkitehtuuripäätöstä. *Tietyn* ehdotetun tutkimuksen hinnoitteluun kaiken epävarmuuden poistamisen sijaan katso [EVSI](../otostiedon-odotusarvo/).

## Sudenkuopat

- **EVPI:n laskemisen unohtaminen väestötasolla ja raportointi vain potilastasolla.**
- **Pilottitutkimusten toteuttaminen, joiden kustannus ylittää EVPI:n.**

## Lähteet

- Claxton K, et al., value of information methods.
- NICE DSU Technical Support Document 12.
