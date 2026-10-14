# Inkrementel omkostningseffektivitetsratio (ICER)

ICER måler den ekstra omkostning pr. ekstra enhed sundhedsudfald for én intervention sammenlignet med et alternativ.

## Hvorfor det er vigtigt

ICER er den centrale beslutningsregel i de fleste HTA-systemer: under tærsklen = omkostningseffektiv, over = ikke.

## Matematikken

```
ICER = (Omkostning_A − Omkostning_B) / (Effekt_A − Effekt_B)
```

## Gennemarbejdet eksempel

En ny behandling koster £5.000 mere og giver 0,25 ekstra QALY sammenlignet med standardbehandling: ICER = £5.000 / 0,25 = £20.000/QALY — lige under NICEs tærskel.

## Forbindelse til softwareudvikling

Ligner det at beregne ekstra infrastrukturomkostning pr. ekstra enhed pålidelighed eller ydeevne ved sammenligning af arkitekturmuligheder.

## Faldgruber

- **At beregne ICER mod det forkerte sammenligningsgrundlag.**
- **At fejlfortolke en negativ ICER uden at angive kvadranten.**
- **At sammenligne en ICER på tværs af valutaer uden et eksplicit omregningstrin**: en ICER beregnet i ét lands valuta skal omregnes med en angivet metode, før den sammenlignes med et andet lands tærskel — se [ICER-sammenligning på tværs af valutaer](../icer-sammenligning-på-tværs-af-valutaer/) for hvorfor valget af omregningsfaktor (købekraftsparitet vs. markedsvekselkurs) i sig selv kan vende indførelsesbeslutningen.

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
