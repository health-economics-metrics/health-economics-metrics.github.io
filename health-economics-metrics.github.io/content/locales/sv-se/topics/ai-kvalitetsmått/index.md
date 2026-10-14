# AI-kvalitetsmått

AI-kvalitetsmått mäter modellutdatans noggrannhet, tillförlitlighet och säkerhet: precision, recall, hallucinationsfrekvens.

## Varför det är viktigt

Även AI-system med hög genomströmning kan ha nedströms korrigeringskostnader som överstiger besparingarna om kvaliteten är låg.

## Matematiken

```
F1-poäng = 2 × (precision × recall) / (precision + recall)
```

## Genomarbetat exempel

Ett AI-verktyg för klinisk kodning: precision 0,85, recall 0,78 = F1 0,81.

## Koppling till mjukvaruutveckling

Allmänna mjukvarukvalitetsmått som ligger till grund för [klinisk AI-utvärdering](../klinisk-ai-utvärdering/).

## Fallgropar

- **Att bara titta på noggrannhet och ignorera klassobalans.**

## Källor

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
