# Valutazione dell'IA Clinica

Statistiche fondamentali per valutare un'IA clinica o un modello diagnostico: sensibilità, specificità, AUROC. Lezione economica centrale: **un ottimo AUROC non rende un'implementazione economicamente efficace**.

## Perché è importante

I regolatori (FDA, MHRA) autorizzano l'IA clinica a un **punto operativo bloccato**.

## La matematica

```
Sensibilità = TP / (TP + FN)
PPV = TP / (TP + FP) ← dipendente dalla prevalenza
```

## Esempio risolto

Lo stesso modello, due contesti: clinica specialistica (prevalenza 20%): PPV ≈ 76%; assistenza primaria (prevalenza 1%): PPV ≈ 11,5%.

## Collegamento con l'ingegneria del software

Per gli ingegneri che costruiscono o acquistano IA clinica: inviate la matrice di confusione alla prevalenza di implementazione.

## Insidie

- **Fare shopping di AUROC.**

## Fonti

- Diagnostic accuracy measures reference.
