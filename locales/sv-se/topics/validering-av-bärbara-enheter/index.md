# Validering av bärbara enheter

Validering av bärbara enheter är processen att verifiera om data från konsumentbärbara enheter (smartklockor, aktivitetsarmband) är kliniskt korrekta och tillförlitliga.

## Varför det är viktigt

Konsumentbärbara enheter är ofta inte validerade enligt regulatoriska standarder för medicintekniska produkter.

## Matematiken

```
Genomsnittligt absolut procentuellt fel (MAPE) = (1/n) × Σ |faktiskt värde − uppmätt värde| / faktiskt värde × 100 %
```

## Genomarbetat exempel

En handledsburen pulssensor: MAPE 4,2 % jämfört med EKG-standard (ökar till 8,5 % under träning).

## Koppling till mjukvaruutveckling

Datakvalitetsgrunden för [digitala slutpunkter och biomarkörer](../digitala-slutpunkter-och-biomarkörer/) och [ekonomi för fjärrpatientövervakning](../ekonomi-för-fjärrpatientövervakning/).

## Fallgropar

- **Att generalisera valideringsresultat i vila till noggrannhet under aktivitet.**

## Källor

- FDA, wearable device validation guidance.
- Bent B, et al., wearable accuracy in clinical contexts.
