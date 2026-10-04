# Time Trade-Off (TTO) – indhentning af nytteværdi

TTO er en gængs metode til at indhente en sundhedstilstands nytteværdi direkte fra en respondent frem for at opfinde en. Det er en af indhentningsmetoderne — sammen med standard gamble og diskrete valgeksperimenter — der frembringer de værdisæt, som ligger bag instrumenter som [EQ-5D](../eq-5d/) og dermed bag de fleste efterfølgende [QALY](../quality-adjusted-life-year/)-beregninger.

## Hvorfor det er vigtigt

Hver eneste nyttevægt, der indgår i en QALY-beregning, måtte komme et sted fra. TTO er hvordan: for en tilstand, der anses for bedre end døden, bliver en respondent spurgt om, hvor mange år `X` i fuld sundhed vedkommende ville anse for ligeværdige med `T` år i den svækkede tilstand (`X < T`); nytteværdien er `X / T`. For en tilstand, som nogle respondenter anser for værre end døden, bryder standardformlen sammen (den kan ikke ordentligt repræsentere nytteværdier under nul), så en udvidet TTO anvendes i stedet. En softwareingeniør eller analytiker, der behandler en nyttevægt som et givet input uden at vide, at den krævede en valideret indhentningsprotokol at frembringe, er ét skridt fra et tal, vedkommende ikke kan forsvare, hvis det bliver draget i tvivl.

## Matematikken

```
Standard-TTO (tilstand bedre end døden):
  nytteværdi = tid_i_fuld_sundhed / tid_i_svækket_tilstand

Udvidet TTO (tilstand værre end døden):
  nytteværdi = -tid_byttet_for_døden / (samlet_varighed - tid_byttet_for_døden)
```

`tid_i_fuld_sundhed` / `tid_i_svækket_tilstand` — år `X` i fuld sundhed, vurderet ligeværdige med `T` år i den svækkede tilstand. `tid_byttet_for_døden` / `samlet_varighed` — i formuleringen for værre end døden de år `a` af et `T` år langt resterende liv, respondenten ville bytte for øjeblikkelig død, fordi vedkommende foretrækker `T − a` år i fuld sundhed efterfulgt af død frem for `T` år i den tilstand, der er værre end døden. Resultatet er negativt, forankret så død = 0.

## Gennemarbejdet eksempel

**Standard**: en respondent er i en svækket tilstand i 10 år og er indifferent over for 7 år i fuld sundhed: nytteværdi = 7 / 10 = **0,7**.

**Værre end døden**: over et resterende liv på 10 år ville respondenten bytte 2 år for øjeblikkelig død — vedkommende foretrækker 8 år i fuld sundhed efterfulgt af død frem for 10 år i tilstanden værre end døden: nytteværdi = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Forbindelse til softwareudvikling

Det samme punkt, som en DevEx- eller engagementundersøgelse støder på, når den beder folk om at vurdere noget på en uprøvet skala fra 0–10, gælder her omvendt: TTO findes netop fordi "bare bed folk vurdere det" ikke i sig selv er en valideret indhentningsmetode. Før man bygger et sammensat indeks — en DevEx-score, et engagementindeks, en burnout-skala — oven på et selvvurderet tal, bør man spørge, hvad der indhentede det, og om den metode var valideret; det samme spørgsmål stiller sundhedsøkonomer til en nyttevægt, før den kommer ind i en QALY.

## Faldgruber

- **Generalisering af individuelle værdier**: TTO-værdier indhentes fra en *stikprøve* af befolkningen (eller patienter), ikke fra den person, hvis behandling der træffes beslutning om — at bruge én respondents TTO-værdi, som om den generaliserer, er en stikprøvefejl.
- **Forkert formulering for tilstanden**: standard-TTO-formlen forudsætter, at tilstanden entydigt er bedre end døden; anvendes den på en tilstand, nogle respondenter ville anse for værre end døden, uden at skifte til den udvidede formulering, giver det stiltiende en forkert (positiv) nytteværdi.
- **Usammenlignelige varigheder**: TTO-værdier indhentet med forskellige resterende levetider `T` til sammenligningen værre end døden kan ikke sammenlignes direkte uden at kontrollere, at undersøgelsesdesignet holdt `T` konstant.

## Kilder

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
