# Valutasikker omkostningsaggregering

At summere mange pengeposter — månedlige fakturaer, omkostninger pr. lokation, flerårige budgetkonsekvenstal — med almindelige binære flydende-komma-tal (`f64`) ophober små repræsentationsfejl, fordi de fleste decimalbrøker (1.234,56 $ for eksempel) ikke kan repræsenteres præcist i binær flydende komma. Hver enkelt fejl er lille, men en stor model, der summerer hundreder eller tusinder af poster over flere år, kan drive med brøkdele af en cent — og driften afhænger af den *rækkefølge*, additionerne sker i, hvilket gør den ikke-reproducerbar. En valutaaggregering udført i eksakt decimal- (eller heltals-mindsteenheds-)aritmetik summerer præcist, i overensstemmelse med hvordan regnskabssystemer og dobbelt bogholderi skal stemme af til cent.

## Hvorfor det er vigtigt

Dette er en veldokumenteret, grundlæggende klasse af softwarefejl: Goldbergs artikel fra 1991 i ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", er standardreferencen for præcis hvorfor binær flydende komma ikke kan repræsentere de fleste decimale pengeværdier eksakt, og hvorfor summering af mange af dem forstærker fejlen. Sundhedsøkonomiske modeller og NHS-finansmodeller summerer rutinemæssigt mange år og mange omkostningskategorier — [samlet ejeromkostning](../samlet-ejeromkostning/) og [budgetkonsekvensanalyse](../budgetpåvirkningsanalyse/) aggregerer begge et stort antal `f64`-omkostningsposter over flerårige horisonter. Når en model skal stemme af til cent — en revision, der genberegner totalen i hånden, skal få *det identiske* tal — må selve aritmetikken være eksakt decimal, ikke flydende komma.

## Matematikken

```
Naiv aggregering:             total = Σ f64(post_i)         — rækkefølgeafhængig drift
Valutasikker aggregering:     total = Σ Decimal(post_i)      — eksakt, reproducerbar

Anvendelse af en procentjustering (fx en kontingensbuffer):
  justeret = total × multiplikator          — eksakt Decimal-resultat, kan have flere
                                              decimaler end valutaens mindsteenheds-
                                              eksponent
  afrundet = afrund(justeret, valutaeksponent, afrundingsregel)  — afrundingsreglen
                                              (half-up vs. half-even/bankers afrunding)
                                              skal angives eksplicit
```

Bemærk den totrinsdisciplin: at gange et eksakt `Decimal`-beløb med en multiplikator kan give flere decimaler, end valutaen faktisk bruger (fx tre decimaler fra et beløb med to decimaler gange en multiplikator med to decimaler) — den mellemliggende præcision bliver *ikke* automatisk afrundet væk; kun et eksplicit afrundingstrin med en angivet afrundingsregel bringer den ned til valutaens reelle mindsteenhedseksponent.

## Gennemarbejdet eksempel

Tolv identiske månedlige fakturaer på 1.234,56 $ hver, summeret i eksakt decimalaritmetik: 1.234,56 $ × 12 = **14.814,72 $**, præcist. Sæt det over for at summere `f64`-literalen `1234.56` tolv gange i IEEE-754 dobbelt præcision, hvilket kan drive med brøkdele af en cent afhængigt af summeringsrækkefølgen — en reel, dokumenteret fejlklasse, ikke et problem for en model bygget på eksakt decimal `Money`-aritmetik.

Anvend nu en almindelig budgetkonsekvens-kontingensbuffer på 5 % (multiplikator 1,05) på de 14.814,72 $: 14.814,72 $ × 1,05 = 15.555,456 $ — tre decimaler, fordi multiplikationen er eksakt og ikke automatisk afrundes til valutaens to decimaler. Afrundes det eksplicit til 2 decimaler med bankers afrunding (half-even), fås præcis **15.555,46 $**.

## Forbindelse til softwareudvikling

Dette er den direkte, grundlæggende lære bag "finansiel software bruger `Decimal`, ikke `float`" — den knytter sig eksplicit til dette repositoriums moduler [samlet ejeromkostning](../samlet-ejeromkostning/) og [budgetkonsekvensanalyse](../budgetpåvirkningsanalyse/), som begge i dag summerer almindelige flydende-komma-omkostninger; korrekthedsargumentet kræver ikke, at de modeller migreres med det samme, men det angiver præcist, *hvornår* et system skal stemme af til cent og derfor ikke må bruge binær flydende komma til sin pengearitmetik. Se også [cent-præcis omkostningsfordeling](../cent-præcis-omkostningsfordeling/) for det tilhørende problem at opdele (frem for at summere) totaler uden at miste cent.

## Faldgruber

- **At konvertere til `float` midt i kæden**: at trække en pengeværdi ud til et flydende-komma-tal midt i en beregning (nogle `Money`-biblioteker kalder ligefrem konverteringsmetoden noget i retning af "lossy" som eksplicit advarsel) kasserer stiltiende eksaktheden for hver beregning efter dette punkt.
- **"Decimal er for langsomt til at gide"**: at afvise eksakt decimalaritmetik som unødig overhead, når korrekthed og revisionsspor — ikke rå gennemstrømning — er det, der tæller i finansiel rapportering.
- **At anvende en kontingensprocent uden at angive afrundingsreglen**: half-up i forhold til half-even (bankers afrunding) kan ændre den sidste cent; selve afrundingskonventionen skal være et angivet, reviderbart valg — se [cost-benefit-analyse](../cost-benefit-analyse/) for HM Treasury's Green Book-vejledning om kontingens- og optimismebias-justeringer, netop den slags tal, dette afrundingstrin anvendes på.

## Kilder

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — `Money`-mønstret.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — vejledning om optimismebias og kontingens til budgetkonsekvensmodellering. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
