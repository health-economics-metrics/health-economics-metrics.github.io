# Medicinsk teknologivurdering (HTA)

Medicinsk teknologivurdering er den formelle proces, hvor organer som NICE, ICER (USA) og CADTH vurderer, om en ny teknologi er værd at finansiere.

## Hvorfor det er vigtigt

HTA-organer afgør i praksis markedsadgangen for nye sundhedsteknologier i de fleste udviklede sundhedsvæsener.

## Matematikken

```
HTA-anbefaling = f(ICER kontra tærskel, budgetpåvirkning, evidenskvalitet, lighedshensyn)
```

## Gennemarbejdet eksempel

NICE vurderer et nyt diagnostisk værktøj: ICER £18.000/QALY (under tærsklen), moderat budgetpåvirkning og solid klinisk dokumentation fører til en positiv anbefaling til rutinemæssig brug.

## Forbindelse til softwareudvikling

Ligner en formel arkitekturgodkendelsesproces, der vurderer omkostning, risiko og dokumentation for effektivitet, før en ny teknologi godkendes organisationsbredt.

For hvordan en flercyklus-HTA-model faktisk simuleres kohorte for kohorte, cyklus for cyklus, se [Markov-kohortesimulering](../markov-cohort-simulation/).

## Faldgruber

- **At antage, at et positivt klinisk forsøg automatisk fører til HTA-godkendelse.**
- **At behandle budgetpåvirkning og omkostningseffektivitet som samme kriterium.**

## Kilder

- NICE, technology appraisal process.
- ICER (US), value assessment framework.
