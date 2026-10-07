# KI-kvalitetsnøgletal

KI-kvalitetsnøgletal måler nøjagtigheden, pålideligheden og sikkerheden af modeloutput: præcision, genkaldelse, hallucinationsrate.

## Hvorfor det er vigtigt

Selv KI-systemer med højt gennemløb kan have nedstrøms korrektionsomkostninger, der overstiger besparelserne, hvis kvaliteten er lav.

## Matematikken

```
F1-score = 2 × (præcision × genkaldelse) / (præcision + genkaldelse)
```

## Gennemarbejdet eksempel

Et KI-værktøj til klinisk kodning: præcision 0,85, genkaldelse 0,78 = F1 0,81.

## Forbindelse til softwareudvikling

Generelle softwarekvalitetsnøgletal, der udgør grundlaget for [klinisk KI-evaluering](../klinisk-ki-evaluering/).

## Faldgruber

- **Kun at se på nøjagtighed, ignorere klasseubalance.**

## Kilder

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
