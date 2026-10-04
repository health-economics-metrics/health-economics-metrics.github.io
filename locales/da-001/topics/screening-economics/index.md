# Screeningøkonomi

Screeningøkonomi omhandler Wilson-Jungner-kriterierne for, hvornår screening giver mening, og matematikken bag, hvorfor den prædiktive værdi bryder sammen ved lav prævalens.

## Hvorfor det er vigtigt

Selv en meget nøjagtig test genererer overvældende mange falsk positive, når den underliggende sygdom er sjælden, hvilket fører til alarmtræthed og unødvendige opfølgende undersøgelser.

## Matematikken

```
Positiv prædiktiv værdi (PPV) = (Sensitivitet × Prævalens) / [(Sensitivitet × Prævalens) + ((1−Specificitet) × (1−Prævalens))]
```

## Gennemarbejdet eksempel

En test med 95 % sensitivitet og 95 % specificitet anvendt på en sygdom med 0,1 % prævalens har en PPV på kun omkring 2 % — 98 % af de positive resultater er falske.

## Forbindelse til softwareudvikling

Direkte analogi til alarmtræthed i overvågningssystemer: en detektor med høj nøjagtighed anvendt på en sjælden hændelse producerer stadig overvejende falske alarmer. For dimensionering af et helt screeningsprogram frem for en enkelt test, se [antal, der skal screenes](../number-needed-to-screen/) — hvor mange personer der skal igennem hele screen-og-behandl-forløbet for at forhindre ét udfald.

## Faldgruber

- **At citere sensitivitet og specificitet uden at angive prævalensen.**
- **At ignorere Wilson-Jungner-kriterierne og screene uden at have en effektiv behandling til rådighed.**

## Kilder

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
