# EQ-5D

EQ-5D är ett standardiserat instrument som mäter hälsotillstånd över fem dimensioner för att generera nyttovikter för QALY-beräkningar.

## Varför det är viktigt

De flesta QALY-beräkningar i praktiken baseras på EQ-5D-data, vilket gör instrumentet till den faktiska grunden bakom siffror som presenteras som abstrakt "nytta".

## Matematiken

```
Nyttoindex = f(rörlighet, personlig vård, vanliga aktiviteter, smärta/obehag, ångest/depression)
```

## Genomarbetat exempel

En patient rapporterar måttliga problem med rörlighet och smärta, inga problem i övrigt: detta tillståndsprofil motsvarar en nytta på ungefär 0,73 enligt den brittiska värderingsuppsättningen.

## Koppling till mjukvaruutveckling

Liknar en sammansatt nöjdhetspoäng byggd från flera uppmätta dimensioner istället för ett enda grovt mått.

## Fallgropar

- **Att använda en värderingsuppsättning från fel land.**
- **Att blanda den äldre EQ-5D-3L och den nyare EQ-5D-5L utan justering.**
- **Att behandla ett värdeset som självrättfärdigande**: de nyttovärden ett värdeset returnerar har självt tagits fram från allmänheten genom time trade-off-enkäter (eller närliggande valbaserade enkäter) — se [Time trade-off (TTO) för att ta fram nyttovärde](../time-trade-off-tto-för-att-ta-fram-nyttovärde/) för hur.

## Källor

- EuroQol Group, EQ-5D user guide.
- NICE, position statement on use of the EQ-5D-5L.
