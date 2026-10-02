# Remiss till behandling (RTT)

RTT mäter tiden från första remiss till start av behandling, med 18-veckorsstandarden som det viktigaste nationella prestandamåttet.

## Varför det är viktigt

RTT är i grunden ett leveransledtidsmått tillämpat på patientvård — hur lång tid det tar att leverera värde (behandling) efter en begäran (remiss).

## Matematiken

```
RTT-efterlevnad = Antal patienter behandlade inom 18 veckor / Totalt antal patienter i RTT-kön × 100 %
```

## Genomarbetat exempel

En specialitet med 5 000 patienter i RTT-vägen där 4 100 behandlas inom 18 veckor: efterlevnad 82 %, under den nationella standarden på 92 %.

## Koppling till mjukvaruutveckling

Direkt analogt med [DORA-ledtid](../dora-metrics/) — tiden från commit (remiss) till leverans (behandling).

## Fallgropar

- **Att felaktigt tillämpa klockstopp (patientinitiativ) för att förvränga efterlevnadssiffror.**
- **Att bara titta på medelvärdet när svansen av fördelningen är det verkliga problemet.**

## Källor

- NHS England, referral to treatment statistics.
- NHS Digital, RTT data quality guidance.
