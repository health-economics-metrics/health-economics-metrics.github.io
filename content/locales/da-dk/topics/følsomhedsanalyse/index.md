# Følsomhedsanalyse

Følsomhedsanalyse tester, hvor følsom konklusionen af en økonomisk evaluering er over for ændringer i de underliggende antagelser.

## Hvorfor det er vigtigt

Enhver business case hviler på usikre antagelser; følsomhedsanalyse viser, hvilke antagelser der reelt betyder noget.

## Matematikken

```
Følsomhed for variabel X = ΔUdfald / ΔX
```

Tornadodiagrammer rangerer variabler efter indvirkning, fra størst til mindst.

## Gennemarbejdet eksempel

En business case for en triage-app varierer antagelsen om adoptionsraten mellem 20 % og 60 %: ROI-intervallet strækker sig fra negativt til stærkt positivt.

## Forbindelse til softwareudvikling

Ligner det at teste ydeevneantagelser under forskellige belastningsscenarier.

## Faldgruber

- **Kun at teste én variabel ad gangen, når antagelser er korrelerede.**
- **At vælge urealistiske intervaller, der forvrænger følsomheden.**

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
