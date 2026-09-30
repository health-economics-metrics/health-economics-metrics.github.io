# Inferensens enhetsekonomi

Inferensens enhetsekonomi mäter kostnaden per enskild förutsägelse eller generering från en AI-modell.

## Varför det är viktigt

Träningskostnader är en engångskostnad, men inferenskostnader upprepas oändligt, proportionellt mot användningen.

## Matematiken

```
Kostnad per inferens = (kostnad per GPU-timme × bearbetningstid) / antal förfrågningar
```

## Genomarbetat exempel

En modell för stöd vid bildtolkning: GPU £2/timme, 1 000 bearbetningar/timme = £0,002 per tolkning.

## Koppling till mjukvaruutveckling

Det AI-specifika fallet av [molnets enhetsekonomi](../cloud-unit-economics/) och en nyckelfaktor för [avkastning på AI-investering](../ai-return-on-investment/).

## Fallgropar

- **Att ignorera batchbearbetningsrabatter och räkna med kostnaden för enskilda förfrågningar.**

## Källor

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
