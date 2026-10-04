# Forventet værdi af perfekt information

Forventet værdi af perfekt information (EVPI) prissætter, hvor meget det ville være værd at fjerne al usikkerhed i en beslutning, før den træffes.

## Hvorfor det er vigtigt

EVPI fortæller dig, om et pilotprojekt eller yderligere forskning er omkostningen værd, før du gennemfører det. For prissætning af optionen til at udvide et projekt senere, frem for optionen til først at indsamle information, se [realoptionsværdisætning](../real-options-valuation/).

## Matematikken

```
EVPI = E[maks over muligheder(værdi ved perfekt information)] − maks over muligheder(E[værdi])
```

## Gennemarbejdet eksempel

En beslutning om, hvorvidt et KI-triagesystem skal indføres, har en EVPI på £2 millioner på befolkningsniveau; en pilotundersøgelse, der koster £500.000, er dermed berettiget.

## Forbindelse til softwareudvikling

Ligner det at prissætte en spike eller proof-of-concept før en stor arkitekturbeslutning. For prissætning af en *konkret* undersøgelse frem for at fjerne al usikkerhed, se [EVSI](../expected-value-of-sample-information/).

## Faldgruber

- **At glemme at beregne EVPI på befolkningsniveau og kun rapportere på patientniveau.**
- **At gennemføre pilotundersøgelser, hvis omkostning overstiger EVPI.**

## Kilder

- Claxton K, et al., value of information methods.
- NICE DSU Technical Support Document 12.
