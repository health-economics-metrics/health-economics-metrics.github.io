# Förväntat värde av perfekt information

Förväntat värde av perfekt information (EVPI) prissätter hur mycket det skulle vara värt att eliminera all osäkerhet i ett beslut innan det fattas.

## Varför det är viktigt

EVPI visar om en pilot eller ytterligare forskning är värt kostnaden, innan du genomför den. För att prissätta optionen att utöka ett projekt senare, i stället för optionen att samla information först, se [värdering av realoptioner](../värdering-av-realoptioner/).

## Matematiken

```
EVPI = E[max över alternativ(värde vid perfekt information)] − max över alternativ(E[värde])
```

## Genomarbetat exempel

Ett beslut om huruvida ett AI-triagesystem ska rullas ut har en EVPI på £2 miljoner på befolkningsnivå; en pilotstudie som kostar £500 000 är motiverad.

## Koppling till mjukvaruutveckling

Liknar att prissätta en spike eller proof-of-concept innan ett stort arkitekturbeslut. För att prissätta en *specifik* föreslagen studie i stället för att undanröja all osäkerhet, se [EVSI](../förväntat-värde-av-stickprovsinformation/).

## Fallgropar

- **Att glömma beräkna EVPI på befolkningsnivå och bara rapportera på patientnivå.**
- **Att genomföra pilotstudier vars kostnad överstiger EVPI.**

## Källor

- Claxton K, et al., value of information methods.
- NICE DSU Technical Support Document 12.
