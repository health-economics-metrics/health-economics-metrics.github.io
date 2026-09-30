# Screeningekonomi

Screeningekonomi behandlar Wilson-Jungner-kriterierna för när screening är meningsfull, och matematiken bakom varför det prediktiva värdet kollapsar vid låg prevalens.

## Varför det är viktigt

Även ett mycket exakt test genererar överväldigande många falska positiva när den underliggande sjukdomen är sällsynt, vilket leder till larmtrötthet och onödiga uppföljningsundersökningar.

## Matematiken

```
Positivt prediktivt värde (PPV) = (Sensitivitet × Prevalens) / [(Sensitivitet × Prevalens) + ((1−Specificitet) × (1−Prevalens))]
```

## Genomarbetat exempel

Ett test med 95 % sensitivitet och 95 % specificitet tillämpat på en sjukdom med 0,1 % prevalens har ett PPV på endast cirka 2 % — 98 % av de positiva resultaten är falska.

## Koppling till mjukvaruutveckling

Direkt analogt med larmtrötthet i övervakningssystem: en detektor med hög noggrannhet tillämpad på en sällsynt händelse genererar fortfarande övervägande falska larm.

## Fallgropar

- **Att citera sensitivitet och specificitet utan att ange prevalensen.**
- **Att ignorera Wilson-Jungner-kriterierna och screena utan att ha en effektiv behandling tillgänglig.**

## Källor

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
