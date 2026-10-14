# Metriche di Qualità dell'IA

Metriche per la correttezza dell'output generato dall'IA: affidabilità/fondatezza, e **tasso di allucinazione**. In ambito sanitario queste non sono sfumature di qualità — sono tassi di danno.

## Perché è importante

I benchmark del dominio medico hanno misurato **tassi di allucinazione superiori al 60%** per LLM non fondati su compiti medici.

## La matematica

```
Tasso di allucinazione = output contenenti contenuti non supportati/falsi / output totali
```

## Esempio risolto

Un assistente IA di codifica clinica elabora 200.000 episodi/anno: errori che raggiungono la presentazione 600/anno.

## Collegamento con l'ingegneria del software

Trattate la qualità del modello come l'economia della copertura dei test con disciplina di livello sanitario.

## Insidie

- **Sostituzione benchmark-a-produzione.**

## Fonti

- Hallucination evaluation methods and metrics.
