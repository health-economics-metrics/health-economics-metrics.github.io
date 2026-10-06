# Skyens enhedsøkonomi

Skyens enhedsøkonomi måler infrastrukturomkostninger pr. individuel transaktion, patient eller forespørgsel.

## Hvorfor det er vigtigt

Cloudregninger viser det samlede beløb, men ikke hvilken funktion eller patientforløb der forårsager omkostningen.

## Matematikken

```
Enhedsomkostning = cloududgift (£/måned) / transaktionsvolumen (pr. måned)
```

## Gennemarbejdet eksempel

En billedlagringstjeneste: £40.000/måned, 200.000 scanninger = £0,20 pr. scanning.

## Forbindelse til softwareudvikling

Nedbryder [samlet ejeromkostning](../samlet-ejeromkostning/) til operationel skala.

## Faldgruber

- **At ignorere reservationsrabatter og beregne med on-demand-priser.**

## Kilder

- FinOps Foundation, unit economics.
- AWS Well-Architected, cost optimization pillar.
