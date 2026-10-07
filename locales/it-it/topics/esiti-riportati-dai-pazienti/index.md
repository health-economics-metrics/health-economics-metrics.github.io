# Esiti Riportati dai Pazienti (PROM, PREM, MCID)

I PROM sono strumenti standard in cui i pazienti riportano il proprio stato di salute. Il **MCID** è il più piccolo cambiamento di punteggio realmente considerato benefico dai pazienti.

## Perché è importante

I PROM sono la valuta principale di efficacia per la sanità digitale.

## La matematica

```
Quadro del tasso di risposta:
  rispondente = paziente con miglioramento ≥ MCID
  NNT = 1 / (tasso_risposta_trattamento − tasso_risposta_controllo)
```

## Esempio risolto

Un'app di supporto alla depressione, RCT vs lista d'attesa: NNT ≈ 4.

## Collegamento con l'ingegneria del software

I PROM sono un problema di raccolta dati che il software può risolvere in modo unico. Per uno strumento specifico sulla produttività lavorativa, si veda il [WPAI](../produttività-lavorativa-e-compromissione-dell-attività/).

## Insidie

- **Significatività statistica al di sotto del MCID.**

## Fonti

- MCID estimation review (EQ-5D).
- Kroenke K, et al.
