# Diskontering och tidspreferens

Diskontering omvandlar framtida kostnader och effekter till deras nuvärde, eftersom människor och system föredrar nytta nu framför nytta senare.

## Varför det är viktigt

Utan diskontering skulle en intervention som ger nytta om 30 år se lika attraktiv ut som en som ger nytta imorgon.

## Matematiken

```
Nuvärde = Framtida värde / (1 + r)^t
```

Green Book/NICE-räntan är **3,5 %** per år för både kostnader och hälsoeffekter.

## Genomarbetat exempel

Ett förebyggande program som ger £1 miljon i nytta om 10 år: nuvärde = £1 000 000 / (1,035)^10 ≈ £708 900.

## Koppling till mjukvaruutveckling

Beslut om teknisk skuld involverar liknande diskonteringslogik — se [teknisk skuld](../technical-debt/).

## Fallgropar

- **Att använda en för hög ränta för att tränga undan framtida kostnader.**
- **Att använda olika räntor för kostnader och hälsa utan motivering.**

## Källor

- HM Treasury, The Green Book.
- NICE, Guide to the methods of technology appraisal.
