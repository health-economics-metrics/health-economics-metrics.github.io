# Klinisk AI-utvärdering

Klinisk AI-utvärdering är processen att verifiera om AI-system är säkra och effektiva i verkliga kliniska miljöer.

## Varför det är viktigt

Allmänna AI-kvalitetsmått fångar inte potentialen för klinisk skada.

## Matematiken

```
Netto klinisk nytta = (sanna positiva × nytta) − (falska positiva × skada) − (falska negativa × skada)
```

## Genomarbetat exempel

AI för tidig varning om sepsis: 100 sanna positiva × nytta 10 − 20 falska positiva × skada 2 − 5 falska negativa × skada 20 = 860.

## Koppling till mjukvaruutveckling

Kopplar [AI-kvalitetsmått](../ai-kvalitetsmått/) till kliniska utfall och är en förutsättning för [AI-regulatorisk utvärdering](../ai-regulatorisk-utvärdering/).

## Fallgropar

- **Att likställa laboratorieprestanda med faktisk prestanda vid driftsättning.**

## Källor

- FDA, Software as a Medical Device guidance.
- NICE, Evidence Standards Framework for digital health technologies.
