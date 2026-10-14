# Probabilistisk känslighetsanalys

Probabilistisk känslighetsanalys (PSA) varierar alla osäkra parametrar samtidigt via Monte Carlo-simulering för att producera en sannolikhetsfördelning av utfall.

## Varför det är viktigt

Enkel känslighetsanalys testar en variabel i taget; PSA fångar den kombinerade osäkerheten i alla parametrar tillsammans.

## Matematiken

```
För varje simulering i: dra parametervärden från deras fördelningar, beräkna utfall_i
Sannolikhet för kostnadseffektivitet = antal simuleringar under tröskeln / totalt antal simuleringar
```

## Genomarbetat exempel

10 000 Monte Carlo-simuleringar av ett nytt diagnostiskt verktyg visar att det är kostnadseffektivt i 72 % av simuleringarna vid en tröskel på £20 000/QALY.

## Koppling till mjukvaruutveckling

Liknar Monte Carlo-belastningstestning som varierar flera osäkra systemparametrar samtidigt.

## Fallgropar

- **Att ignorera korrelationer mellan parametrar vid sampling.**
- **Att feltolka CEAC som en enkel procentandel istället för en sannolikhetsfördelning.**

## Källor

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
