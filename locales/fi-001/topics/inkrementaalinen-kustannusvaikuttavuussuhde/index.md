# Inkrementaalinen kustannusvaikuttavuussuhde (ICER)

ICER mittaa yhden intervention lisäkustannuksen lisäterveystulosyksikköä kohden verrattuna vaihtoehtoon.

## Miksi se on tärkeä

ICER on useimpien HTA-järjestelmien keskeinen päätössääntö: kynnyksen alla = kustannustehokas, yläpuolella = ei.

## Matematiikka

```
ICER = (Kustannus_A − Kustannus_B) / (Vaikutus_A − Vaikutus_B)
```

## Ratkaistu esimerkki

Uusi hoito maksaa £5 000 enemmän ja tuottaa 0,25 lisä-QALY:a verrattuna standardihoitoon: ICER = £5 000 / 0,25 = £20 000/QALY — juuri NICEn kynnyksen alapuolella.

## Yhteys ohjelmistokehitykseen

Muistuttaa lisäinfrastruktuurikustannuksen laskemista lisäluotettavuus- tai suorituskykyyksikköä kohden arkkitehtuurivaihtoehtoja vertailtaessa.

## Sudenkuopat

- **ICER:n laskeminen väärää vertailukohtaa vastaan.**
- **Negatiivisen ICER:n virhetulkinta ilman kvadrantin määrittelyä.**
- **ICER:n vertailu valuuttojen yli ilman eksplisiittistä muunnosvaihetta**: yhden maan valuutassa laskettu ICER on muunnettava ilmoitetulla menetelmällä ennen sen vertaamista toisen maan kynnykseen — katso [ICER-vertailu valuuttojen yli](../icer-vertailu-valuuttojen-yli/), miksi muunnoskertoimen valinta (ostovoimapariteetti vs. markkinavaihtokurssi) voi itsessään kääntää käyttöönottopäätöksen.

## Lähteet

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
