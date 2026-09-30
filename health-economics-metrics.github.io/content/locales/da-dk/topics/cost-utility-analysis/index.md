# Omkostnings-nytteanalyse (CUA)

Omkostnings-nytteanalyse sammenligner interventioner på omkostning pr. QALY, hvilket gør helt forskellige behandlinger sammenlignelige på én skala.

## Hvorfor det er vigtigt

CUA er standardmetoden for NICE og de fleste HTA-organer, fordi den kan sammenligne et hjertemedicin med en intervention for mental sundhed.

## Matematikken

```
CUA-ratio (ICER) = (Omkostning_A − Omkostning_B) / (QALY_A − QALY_B)
```

## Gennemarbejdet eksempel

Et nyt gigtmedicin koster £8.000 mere og giver 0,4 QALY mere sammenlignet med standardbehandling: £20.000/QALY.

## Forbindelse til softwareudvikling

Ligner det at normalisere omkostning pr. enhed brugerværdi på tværs af helt forskellige typer funktioner.

## Faldgruber

- **At bruge nyttevægte, der ikke er valideret til den relevante population.**
- **At blande CUA- og CEA-resultater uden at angive enheden.**

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Whitehead SJ, Ali S, QALYs and utilities.
