# Budgetpåvirkningsanalyse (BIA)

Budgetpåvirkningsanalyse estimerer nettoændringen i en betalers udgifter ved indførelsen af en ny intervention, uanset dens omkostningseffektivitet.

## Hvorfor det er vigtigt

En intervention kan være meget omkostningseffektiv (lav £/QALY), men alligevel ikke overkommelig, fordi den samlede budgetpåvirkning er for stor.

## Matematikken

```
Budgetpåvirkning = (Ny interventionsomkostning × forventet volumen) − (Erstattet interventionsomkostning × forventet volumen)
```

## Gennemarbejdet eksempel

En ny behandling med en ICER på £15.000/QALY (godt under tærsklen) har alligevel en budgetpåvirkning på £200 millioner/år på grund af en stor patientpopulation, hvilket kræver en trinvis indførelse.

## Forbindelse til softwareudvikling

Ligner det at vurdere, om en teknisk overlegen løsning passer inden for det årlige infrastrukturbudget, uanset om det er den bedste arkitektur. At opdele en offentliggjort budgetkonsekvenstotal på lokationer, kohorter eller regnskabsår — så delene stemmer præcist med det offentliggjorte tal — er netop [cent-præcis omkostningsfordeling](../cent-præcis-omkostningsfordeling/); at summere de mange poster, der overhovedet fødder totalen, er [valutasikker omkostningsaggregering](../valutasikker-omkostningsaggregering/).

## Faldgruber

- **At forveksle omkostningseffektivitet med overkommelighed.**
- **At undervurdere forventet volumen for nye indikationer, der udvider sig.**

## Kilder

- ISPOR, budget impact analysis good practices.
- NICE, budget impact test guidance.
