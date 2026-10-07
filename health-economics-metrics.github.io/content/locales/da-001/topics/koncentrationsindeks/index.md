# Koncentrationsindeks

Koncentrationsindekset (Wagstaff, Paci, van Doorslaer, 1991) er det gængse statistiske mål for socioøkonomisk betinget ulighed i en sundhedsvariabel og går fra −1 til 1. Negativ betyder, at sundhedsvariablen er koncentreret hos de socioøkonomisk dårligt stillede, positiv at den er koncentreret hos de bedre stillede, og nul at der ikke er nogen konsistent socioøkonomisk gradient — det gør en mistanke om skæv fordeling til ét sammenligneligt tal.

## Hvorfor det er vigtigt

Et program kan se effektivt ud i det store hele og alligevel levere sin fordel næsten udelukkende til mennesker, der allerede var bedre stillet. Netop den slags fordelingsspørgsmål følger [rækkevidde og lighed](../rækkevidde-og-lighed/) deskriptivt — rækkevidde stratificeret efter deprivationskvintil, et lighedsgab mellem øverste og nederste gruppe — men en stratificeret tabel lader sig ikke komprimere til én enkelt tendenslinje, og den kan ikke let sammenlignes på tværs af to helt forskellige interventioner målt på forskellige skalaer. Koncentrationsindekset løser begge problemer: det beregnes på samme måde for enhver sundhedsvariabel mod enhver socioøkonomisk rangordning, så en national sundhedstjeneste kan følge, om uligheden i en bestemt digital tjeneste vokser eller aftager fra udgivelse til udgivelse, og kan sammenligne fordelingsretfærdigheden i en app-udrulning med fx et screeningsprogram på den samme normaliserede skala.

## Matematikken

```
CI = (2 / middel(sundhedsværdier)) × Kov(sundhedsværdier, socioøkonomiske_rang)

Kov(X, Y) = middel(X × Y) − middel(X) × middel(Y)   (populationskovarians)

socioøkonomiske_rang: hver persons fraktionelle rang i den socioøkonomiske
fordeling, i [0, 1] (0 = mest dårligt stillet, 1 = bedst stillet;
for grupperede/inddelte data konventionelt gruppens midtpunktsrang)
```

Dette er den "bekvemme kovariansformel" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Verdensbanken 2008) — den gængse genvej for praktikere til at beregne koncentrationsindekset direkte ud fra parrede observationer uden først at tegne og integrere under en koncentrationskurve.

## Gennemarbejdet eksempel

En selvrapporteret sundhedsscore (1 = dårligst, 4 = bedst) observeret på tværs af fire lige store socioøkonomiske kvartiler, hver repræsenteret ved sin kvartils midtpunktsrang:

```
sundhedsværdier            = [1,0, 2,0, 3,0, 4,0]
socioøkonomiske_rang       = [0,125, 0,375, 0,625, 0,875]

middel(sundhedsværdier)        = 2,5
middel(sundhed × rang)         = middel([0,125, 0,75, 1,875, 3,5]) = 1,5625
middel(socioøkonomiske_rang)   = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Et positivt `0,25` betyder, at sundhedsscoren er koncentreret hos den socioøkonomisk begunstigede gruppe — de svarpersoner med højere score hælder mod den bedre stillede ende af rangordningen.

## Forbindelse til softwareudvikling

Det er den samme kovariansbaserede ulighedsmåling, som bruges i økonomi generelt (Gini-koefficientens fætter), og den kan overføres til at måle, om et softwareproduktets fordele koncentreres hos allerede begunstigede brugersegmenter i stedet for at være fordelt retfærdigt — en direkte udvidelse af [rækkevidde og lighed](../rækkevidde-og-lighed/) (RE-AIM's "reach"-dimension) til et formelt statistisk mål frem for et beskrevet gab. Hvor rækkevidde og lighed rapporterer effekt pr. stratum, komprimerer koncentrationsindekset hele fordelingen til ét fortegnsbærende tal, egnet som enkelt fulgt KPI på tværs af udgivelser — praktisk i et dashboard, hvor en fuld stratificeret opdeling ikke er det.

## Faldgruber

- **Drift i fortegnskonventionen**: fortegnet afhænger af, hvordan både sundhedsvariablen og rangen er defineret — vendes en af dem, vendes fortegnet, så den anvendte konvention altid skal angives eksplicit ved enhver rapporteret værdi.
- **Grænserang i stedet for midtpunktsrang**: grupperede eller inddelte socioøkonomiske data (fx kvintiler) kræver, at man bruger hver gruppes fraktionelle rang i dens *midtpunkt*, ikke ved dens grænse, ellers er indekset skævt.
- **At læse "tæt på nul" som "ingen ulighed"**: et koncentrationsindeks tæt på nul betyder "ingen konsistent socioøkonomisk gradient", ikke "ingen ulighed" i absolut forstand — modsatrettede uligheder i forskellige retninger kan ophæve hinanden.

## Kilder

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — standardhåndbogen for praktikere, kilden til den her anvendte bekvemme kovariansformel. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
