# EQ-5D

EQ-5D er et standardiseret instrument, der måler sundhedstilstand på tværs af fem dimensioner for at generere nyttevægte til QALY-beregninger.

## Hvorfor det er vigtigt

De fleste QALY-beregninger i praksis er baseret på EQ-5D-data, hvilket gør instrumentet til det faktiske fundament bag tal, der præsenteres som abstrakt "nytte".

## Matematikken

```
Nytteindeks = f(mobilitet, personlig pleje, sædvanlige aktiviteter, smerte/ubehag, angst/depression)
```

## Gennemarbejdet eksempel

En patient rapporterer moderate problemer med mobilitet og smerte, ingen problemer andetsteds: denne tilstandsprofil svarer til en nytte på omkring 0,73 ifølge det britiske værdisæt.

## Forbindelse til softwareudvikling

Ligner en sammensat tilfredshedsscore bygget af flere målte dimensioner i stedet for ét groft mål.

## Faldgruber

- **At bruge et værdisæt fra det forkerte land.**
- **At blande den ældre EQ-5D-3L og den nyere EQ-5D-5L uden justering.**
- **At behandle et værdisæt som selvbegrundende**: de nytteværdier, et værdisæt returnerer, blev selv indhentet fra befolkningen via time trade-off (eller en beslægtet valgbaseret) undersøgelse — se [Time Trade-Off (TTO) – indhentning af nytteværdi](../time-trade-off-tto-indhentning-af-nytteværdi/) for hvordan.

## Kilder

- EuroQol Group, EQ-5D user guide.
- NICE, position statement on use of the EQ-5D-5L.
