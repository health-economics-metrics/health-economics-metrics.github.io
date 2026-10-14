# Betalningsviljetrösklar

Betalningsviljetrösklar anger det maximala belopp ett system är villigt att betala per vunnen QALY.

## Varför det är viktigt

Tröskeln är beslutsgränsen: interventioner under tröskeln finansieras vanligtvis, interventioner över gör det vanligtvis inte.

## Matematiken

```
Finansieringsbeslut: finansiera om ICER < tröskel (£/QALY)
```

## Genomarbetat exempel

NICE använder vanligtvis £20 000–£30 000/QALY; USA använder informellt $50 000–$150 000/QALY; Thailand använder ungefär 1× BNP per capita.

## Koppling till mjukvaruutveckling

Liknar en intern "kostnad per räddad incident"-tröskel som avgör vilka tillförlitlighetsinvesteringar som är värda det.

## Fallgropar

- **Att jämföra trösklar mellan länder utan att ta hänsyn till köpkraftsskillnader.**
- **Att behandla tröskeln som en hård gräns snarare än en riktlinje.**
- **Att jämföra en ICER mot en tröskel i en annan valuta utan att räkna om först**: se [ICER-jämförelse mellan valutor](../icer-jämförelse-mellan-valutor/) — omräkningsmetoden (köpkraftsparitet vs marknadsväxelkurs) är metodmässigt avgörande, inte en avrundningsdetalj.
- **Att blanda λ-baserad värdering med arbetsmarknadens VSL/VPF-tradition**: de kommer från olika teoretiska traditioner (hälsobudgetbegränsad metodik vs preferens avslöjad genom avvägningar mellan lön och risk) och går inte alltid att förena — för det alternativa angreppssättet med avslöjad preferens för att värdera liv, se [värdet av ett statistiskt liv](../värdet-av-ett-statistiskt-liv/).

## Källor

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
