# Betalingsvillighedstærskler

Betalingsvillighedstærskler angiver det maksimale beløb, et system er villigt til at betale pr. opnået QALY.

## Hvorfor det er vigtigt

Tærsklen er beslutningsgrænsen: interventioner under tærsklen finansieres typisk, interventioner over gør det typisk ikke.

## Matematikken

```
Finansieringsbeslutning: finansier, hvis ICER < tærskel (£/QALY)
```

## Gennemarbejdet eksempel

NICE bruger typisk £20.000–£30.000/QALY; USA bruger uformelt $50.000–$150.000/QALY; Thailand bruger cirka 1× BNP pr. indbygger.

## Forbindelse til softwareudvikling

Ligner en intern "omkostning pr. undgået hændelse"-tærskel, der afgør, hvilke pålidelighedsinvesteringer der er umagen værd.

## Faldgruber

- **At sammenligne tærskler mellem lande uden at tage højde for forskelle i købekraft.**
- **At behandle tærsklen som en hård grænse i stedet for en retningslinje.**
- **At sammenligne en ICER med en tærskel i en anden valuta uden først at omregne**: se [ICER-sammenligning på tværs af valutaer](../icer-sammenligning-på-tværs-af-valutaer/) — omregningsmetoden (købekraftsparitet vs. markedsvekselkurs) er metodisk afgørende, ikke en afrundingsdetalje.
- **At blande λ-baseret værdisætning med den arbejdsmarkedsbaserede VSL/VPF-tradition**: de stammer fra forskellige teoretiske traditioner (sundhedsbudgetbegrænset metodik vs. præference afsløret via løn-risiko-afvejninger) og kan ikke altid forenes — for den alternative afslørede-præference-tilgang til at værdisætte liv, se [værdien af et statistisk liv](../værdien-af-et-statistisk-liv/).

## Kilder

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
