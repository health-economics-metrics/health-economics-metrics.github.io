# Orizzonte Temporale

L'orizzonte temporale è il periodo entro cui un'analisi conta costi ed effetti. Deve essere abbastanza lungo da catturare ogni differenza significativa tra le opzioni confrontate.

## Perché è importante

Scegliere un orizzonte breve fa perdere i benefici che emergono tardi (prevenzione) o i costi che emergono tardi (manutenzione). Un orizzonte troppo lungo seppellisce tutto nell'incertezza. La valutazione delle tecnologie sanitarie utilizza spesso un orizzonte **a vita intera** per i trattamenti che influenzano la mortalità. L'[analisi dell'impatto sul bilancio](../analisi-dell-impatto-sul-bilancio/) utilizza deliberatamente un breve orizzonte di **1–5 anni**, perché la domanda riguarda la sostenibilità economica, non il valore.

## La matematica

```
Valore attuale netto = Σ (t = 0 … T) [ (Beneficio_t − Costo_t) / (1 + r)^t ]

T = orizzonte temporale (anni)
r = tasso di attualizzazione
```

## Esempio risolto

Un sistema di prescrizione elettronica costa £2 milioni da implementare e £200.000 all'anno da gestire. Previene errori terapeutici per un valore di £600.000 all'anno.

```
Orizzonte di 1 anno:  −£1.600.000
Orizzonte di 5 anni:  £0
Orizzonte di 10 anni: +£2.000.000
```

Questo sistema "fallisce" per qualsiasi orizzonte inferiore a 5 anni e "riesce" a 10 anni. Nessuno dei due è la vera risposta.

## Collegamento con l'ingegneria del software

- **Una valutazione di uno strumento misurata in 1 sprint** trascura sistematicamente il calo della curva di apprendimento.
- **La durata del contratto ≠ l'orizzonte temporale del beneficio.**
- **I casi di sostituzione dell'eredità** dovrebbero essere stimati fino alla fine della vita utile credibile del vecchio sistema.

## Insidie

- **Fare acquisti di orizzonte**: scegliere un orizzonte temporale in cui la propria opzione vince.
- **Orizzonti temporali diversi per opzione** all'interno dello stesso confronto.
- **Orizzonte a vita intera senza attualizzazione o analisi dell'incertezza.**

## Fonti

- NICE health technology evaluations: the manual (PMG36).
- Sullivan SD, et al. Value in Health 2014.
