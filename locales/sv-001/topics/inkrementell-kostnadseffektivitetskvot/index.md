# Inkrementell kostnadseffektivitetskvot (ICER)

ICER mäter den extra kostnaden per extra enhet hälsoutfall för en intervention jämfört med ett alternativ.

## Varför det är viktigt

ICER är den centrala beslutsregeln i de flesta HTA-system: under tröskeln = kostnadseffektivt, över = inte.

## Matematiken

```
ICER = (Kostnad_A − Kostnad_B) / (Effekt_A − Effekt_B)
```

## Genomarbetat exempel

En ny behandling kostar £5 000 mer och ger 0,25 extra QALY jämfört med standardvård: ICER = £5 000 / 0,25 = £20 000/QALY — precis under NICE:s tröskel.

## Koppling till mjukvaruutveckling

Liknar att beräkna extra infrastrukturkostnad per extra enhet tillförlitlighet eller prestanda vid jämförelse av arkitekturalternativ.

## Fallgropar

- **Att beräkna ICER mot fel jämförelseobjekt.**
- **Att feltolka en negativ ICER utan att ange kvadranten.**
- **Att jämföra en ICER mellan valutor utan ett uttryckligt omräkningssteg**: en ICER beräknad i ett lands valuta måste räknas om med en angiven metod innan den jämförs med ett annat lands tröskel — se [ICER-jämförelse mellan valutor](../icer-jämförelse-mellan-valutor/) för varför valet av omräkningsfaktor (köpkraftsparitet vs marknadsväxelkurs) i sig kan vända införandebeslutet.

## Källor

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
