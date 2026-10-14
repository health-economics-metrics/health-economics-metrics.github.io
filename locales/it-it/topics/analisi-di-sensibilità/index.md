# Analisi di Sensibilità

L'analisi di sensibilità deterministica (DSA) varia un'ipotesi alla volta all'interno di un intervallo plausibile per vedere se la conclusione regge. La visualizzazione standard è un diagramma a tornado: i parametri sono classificati in base a quanto influenzano il risultato.

## Perché è importante

Ogni modello economico è costruito su stime — tempo risparmiato, tasso di adozione, costi unitari. La valutazione delle tecnologie sanitarie rifiuta di accettare una stima puntuale ("il ROI è del 340%") senza prove che la conclusione sia solida rispetto a ragionevoli disaccordi sugli input. Un diagramma a tornado dice al decisore *quale ipotesi interrogare*.

## La matematica

```
Risultato_basso = Modello(p = p_basso, tutti gli altri al caso base)
Risultato_alto = Modello(p = p_alto, tutti gli altri al caso base)
Oscillazione(p) = |Risultato_alto − Risultato_basso|
```

## Esempio risolto

Un assistente di codifica IA per 200 sviluppatori. Il tempo risparmiato è il parametro dominante.

## Collegamento con l'ingegneria del software

Gli ingegneri fanno già questo istintivamente come "e se ci sbagliassimo su X?"

## Insidie

- **Intervalli scelti per compiacere.**
- **Perdere le interazioni una alla volta.**

## Fonti

- York Health Economics Consortium glossary: deterministic sensitivity analysis.
- NICE health technology evaluations: the manual (PMG36).
