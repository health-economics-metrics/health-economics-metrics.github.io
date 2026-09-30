# Probabilistisk følsomhedsanalyse

Probabilistisk følsomhedsanalyse (PSA) varierer alle usikre parametre samtidigt via Monte Carlo-simulering for at producere en sandsynlighedsfordeling af udfald.

## Hvorfor det er vigtigt

Simpel følsomhedsanalyse tester én variabel ad gangen; PSA fanger den kombinerede usikkerhed for alle parametre sammen.

## Matematikken

```
For hver simulering i: træk parameterværdier fra deres fordelinger, beregn udfald_i
Sandsynlighed for omkostningseffektivitet = antal simuleringer under tærsklen / samlet antal simuleringer
```

## Gennemarbejdet eksempel

10.000 Monte Carlo-simuleringer af et nyt diagnostisk værktøj viser, at det er omkostningseffektivt i 72 % af simuleringerne ved en tærskel på £20.000/QALY.

## Forbindelse til softwareudvikling

Ligner Monte Carlo-belastningstest, der varierer flere usikre systemparametre samtidigt.

## Faldgruber

- **At ignorere korrelationer mellem parametre ved stikprøveudtagning.**
- **At fejlfortolke CEAC som en simpel procentdel i stedet for en sandsynlighedsfordeling.**

## Kilder

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
