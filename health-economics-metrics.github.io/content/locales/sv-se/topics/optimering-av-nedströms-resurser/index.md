# Optimering av nedströms resurser

Optimering av nedströms resurser fokuserar på att låsa upp den roll eller process alla andra väntar på, istället för att optimera slumpmässigt.

## Varför det är viktigt

Att förbättra icke-flaskhalssteg i en vårdväg påverkar inte den totala ledtiden — bara själva flaskhalsen bestämmer systemkapaciteten.

## Matematiken

```
Systemgenomströmning = genomströmning för det begränsande steget (flaskhalsen)
```

## Genomarbetat exempel

En diagnostisk väg har fem steg; steg 3 (bildtolkning) har den längsta väntetiden. Att påskynda steg 1, 2, 4 och 5 påverkar inte den totala ledtiden förrän steg 3 åtgärdas.

## Koppling till mjukvaruutveckling

Direkt analogt med begränsningsteorin tillämpad på CI/CD-pipelines — påskynda det långsammaste steget, inte ett slumpmässigt steg.

## Fallgropar

- **Att investera resurser i icke-flaskhalsprocesser eftersom de är lättare att förbättra.**
- **Att inte omidentifiera flaskhalsen efter att den föregående har lösts (flaskhalsen flyttas).**

## Källor

- Goldratt EM, The Goal.
- NHS Improvement, process improvement guidance.
