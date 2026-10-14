# QALY-underskud og alvorlighedsmodifikatorer

QALY-underskud måler, hvor meget sundhed en patientgruppe allerede mister sammenlignet med en normal forventet levetid; alvorlighedsmodifikatorer giver ekstra vægt til sundhedsgevinster for sygere populationer.

## Hvorfor det er vigtigt

Uden korrektion behandler en standardtærskel for ICER en QALY opnået af en alvorligt syg patient på samme måde som en QALY opnået af en let syg patient.

## Matematikken

```
Underskud = forventede sunde QALY uden sygdom − forventede QALY med sygdom
Modificeret tærskel = grundtærskel × alvorlighedsvægt(underskud)
```

## Gennemarbejdet eksempel

NICEs alvorlighedsmodifikator hæver den effektive tærskel til £30.000/QALY for tilstande med et QALY-underskud på 12 eller mere, sammenlignet med standardintervallet £20.000–£30.000.

## Forbindelse til softwareudvikling

Ligner det at give højere prioritet til at rette fejl, der rammer de mest berørte brugere, selvom antallet af berørte brugere er lille.

## Faldgruber

- **At beregne underskud med den forkerte referencepopulation.**
- **At anvende alvorlighedsmodifikatorer oven på allerede justerede tærskler, hvilket forårsager dobbelttælling.**

## Kilder

- NICE, health technology evaluations manual (severity modifier).
- Shah KK, et al., severity of illness in health technology assessment.
