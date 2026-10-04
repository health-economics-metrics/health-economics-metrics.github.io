# ICER-sammenligning på tværs af valutaer

At sammenligne en [ICER](../incremental-cost-effectiveness-ratio/) beregnet i ét lands valuta med et andet lands [betalingsvillighedstærskel](../willingness-to-pay-thresholds/) — eller at samle omkostningsdata fra et multinationalt forsøg — kræver et eksplicit, sporbart valutaomregningstrin. Vælges omregningsmetoden forkert, kan den samme underliggende evidens vende en indførelsesbeslutning, selv om intet i de kliniske data eller omkostningsdata har ændret sig.

## Hvorfor det er vigtigt

ISPOR's metodevejledning til multinationale kliniske forsøg (Willke et al., *Health Economics*, 1998) anbefaler at omregne ressourceomkostninger med **købekraftsparitet (KKP)** — ikke markedsvekselkurser — når man sammenligner ressourcers reelle økonomiske værdi på tværs af lande, og at reservere markedets valutakurser til det, de faktisk er til: modellering af reelle grænseoverskridende kontantbetalinger. At blande de to er en af de mest almindelige metodefejl i multinational HTA, netop fordi begge ligner "vekselkursen" for en, der ikke har læst vejledningen, og et regneark forhindrer ikke, at man gør det forkert.

## Matematikken

```
icer_i_lokal_valuta = omregn(icer_i_kildevaluta, omregningsfaktor)

omregningsfaktoren bør være:
  KKP-omregningsfaktor — til at sammenligne ressourcers reelle økonomiske
                          værdi på tværs af lande (anbefalet af ISPOR til
                          multinational CEA)
  markedsvekselkurs    — kun til faktiske grænseoverskridende kontantbetalinger

indfør hvis icer_i_lokal_valuta < lokal_tærskel
```

Selve beslutningsreglen er den almindelige [ICER-tærskelregel](../willingness-to-pay-thresholds/) — `indfør hvis ICER < λ` — det metodiske spørgsmål i dette emne handler udelukkende om, *hvilken omregningsfaktor* der frembringer det `icer_i_lokal_valuta`-tal, som reglen anvendes på.

## Gennemarbejdet eksempel

Et lægemiddels ICER fra et amerikansk forsøg er 45.000 $/QALY. Et hypotetisk importland fastsætter sin egen illustrative tærskel til 34.000 £/QALY (et hypotetisk landespecifikt tal kun til dette eksempel — reelle tærskler varierer fra land til land og ændrer sig over tid og skal altid have kilde og dato).

**Med en KKP-omregningsfaktor på 0,72** (illustrativ, kun til dette eksempel): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **indfør**.

**Med en markedsvekselkurs på 0,79** i stedet (illustrativ): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **afvis**.

Den samme underliggende ICER på 45.000 $/QALY giver en indfør-beslutning ved KKP-omregning og en afvis-beslutning ved markedskurs-omregning. Det er den konkrete illustration af, hvorfor ISPOR-vejledningen behandler valget af omregningsfaktor som metodisk afgørende — ikke en afrundingsdetalje og ikke noget, man lader ligge implicit i en regnearksformel, som ingen dobbelttjekker.

## Forbindelse til softwareudvikling

Dette er sundhedsøkonomiens spejlbillede af et velkendt ingeniørområde: korrekthed i i18n/l10n-priser i flere valutaer i kommerciel software, hvor en SaaS-prisside aldrig må stiltiende sammenligne et `$`-beløb med en `£`-pris. Den garanti på typeniveau, som en velbygget `Money`-type giver — sammenligningsmetoder, der nægter at sammenligne uens valutaer og tvinger et eksplicit omregningstrin først — er en direkte softwareteknisk parallel til sundhedsøkonomiens metodepunkt her: sammenlign ikke uomregnede tal på tværs af valutaer, og lad aldrig omregningstrinnet være implicit eller udokumenteret.

## Faldgruber

- **Stiltiende at sammenligne beløb i forskellige valutaer**: ad hoc-HTA-arbejde i regneark, der trækker fra eller sammenligner et dollarbeløb og et pundbeløb uden først at omregne — en fejlklasse, som en ægte valutabevidst `Money`-type fanger konstruktionsmæssigt i stedet for at lade den være en tavs fejl.
- **At blande markedsvekselkurs og KKP**: den ifølge ISPOR-vejledningen mest almindelige metodefejl i multinational HTA — de to tal kan afvige betydeligt og besvarer forskellige spørgsmål (reel økonomisk værdi vs. faktisk pengestrøm).
- **Ikke at datere den anvendte vekselkurs eller KKP-indeks**: begge bevæger sig over tid, så enhver citeret omregningsfaktor skal dateres på samme måde, som dette repositorium dater sine andre benchmarktal (Green Books kulstofværdier, værdien af et forebygget dødsfald osv.).

## Kilder

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
