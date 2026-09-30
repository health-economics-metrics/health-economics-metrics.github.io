# Analisi di Sensibilità Probabilistica (PSA)

La PSA assegna una distribuzione di probabilità a ogni parametro incerto, campiona tutti simultaneamente migliaia di volte (Monte Carlo), e riporta la *probabilità* che un'opzione sia la scelta migliore.

## Perché è importante

Il caso di riferimento NICE *richiede* la PSA. Il suo output caratteristico, la **curva di accettabilità costo-efficacia (CEAC)**, traccia la probabilità che un'opzione sia costo-efficace rispetto alla soglia di disponibilità a pagare.

## La matematica

```
Per ciascuno degli N campioni (N ≈ 10.000):
  Campiona ogni parametro θ dalla sua distribuzione
  Calcola NMB_j(θ) = λ × Effetto_j(θ) − Costo_j(θ) per ogni opzione j
```

## Esempio risolto

Un business case di migrazione di piattaforma. Beneficio netto medio £775 mila; probabilità di netto > 0 pari a 0,86.

## Collegamento con l'ingegneria del software

Gli ingegneri si fidano già di Monte Carlo per le previsioni di consegna.

## Insidie

- **Distribuzioni spazzatura.**

## Fonti

- Fenwick E, Claxton K, Sculpher M. Health Economics 2001.
- NICE health technology evaluations: the manual (PMG36).
