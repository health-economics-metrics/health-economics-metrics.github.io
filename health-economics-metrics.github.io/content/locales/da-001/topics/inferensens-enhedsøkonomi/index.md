# Inferensens enhedsøkonomi

Inferensens enhedsøkonomi måler omkostningen ved en enkelt forudsigelse eller generering fra en KI-model.

## Hvorfor det er vigtigt

Træningsomkostninger er en engangsomkostning, men inferensomkostninger gentages uendeligt, proportionalt med brugen.

## Matematikken

```
Omkostning pr. inferens = (omkostning pr. GPU-time × behandlingstid) / antal forespørgsler
```

## Gennemarbejdet eksempel

En model til støtte for billedfortolkning: GPU £2/time, 1.000 behandlinger/time = £0,002 pr. fortolkning.

## Forbindelse til softwareudvikling

Det KI-specifikke tilfælde af [skyens enhedsøkonomi](../skyens-enhedsøkonomi/) og en nøglefaktor for [afkast af KI-investering](../afkast-af-ki-investering/).

## Faldgruber

- **At ignorere batchbehandlingsrabatter og beregne med omkostninger for individuelle forespørgsler.**

## Kilder

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
