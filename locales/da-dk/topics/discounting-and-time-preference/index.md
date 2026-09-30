# Diskontering og tidspræference

Diskontering omregner fremtidige omkostninger og effekter til deres nutidsværdi, fordi mennesker og systemer foretrækker nytte nu frem for nytte senere.

## Hvorfor det er vigtigt

Uden diskontering ville en intervention, der giver nytte om 30 år, se lige så attraktiv ud som en, der giver nytte i morgen.

## Matematikken

```
Nutidsværdi = Fremtidig værdi / (1 + r)^t
```

Green Book/NICE-renten er **3,5 %** om året for både omkostninger og sundhedseffekter.

## Gennemarbejdet eksempel

Et forebyggelsesprogram, der giver £1 million i nytte om 10 år: nutidsværdi = £1.000.000 / (1,035)^10 ≈ £708.900.

## Forbindelse til softwareudvikling

Beslutninger om teknisk gæld involverer lignende diskonteringslogik — se [teknisk gæld](../technical-debt/).

## Faldgruber

- **At bruge en for høj rente til at fortrænge fremtidige omkostninger.**
- **At bruge forskellige renter for omkostninger og sundhed uden begrundelse.**

## Kilder

- HM Treasury, The Green Book.
- NICE, Guide to the methods of technology appraisal.
