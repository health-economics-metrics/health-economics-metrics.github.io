# Forventet værdi af stikprøveinformation (EVSI)

EVSI er værdien af en *konkret foreslået undersøgelse* — et givet design, en given stikprøvestørrelse — før den gennemføres, i modsætning til [EVPI](../expected-value-of-perfect-information/), som prissætter at fjerne al usikkerhed fuldstændigt. EVSI besvarer det spørgsmål, en forskningsfinansierer faktisk står med: "Er *dette* forsøg, i *denne* størrelse, sine omkostninger værd?"

## Hvorfor det er vigtigt

EVPI fortæller, hvad loftet er for, hvad nogen forskning kan være værd; den fortæller aldrig, om det forsøg, man har foran sig, når over stregen. En national forskningsfinansierer, der vælger mellem et pilotforsøg med 50 patienter og et endegyldigt forsøg med 500 patienter, må vide, hvor meget *hvert konkret design* er værd, ikke blot værdien af alvidenhed. EVSI leverer det tal, og fordi det skalerer med stikprøvestørrelsen, kan en finansierer finde den stikprøvestørrelse, der maksimerer den forventede nettofordel, i stedet for at gætte.

Det er også grunden til, at EVSI altid er mindre end eller lig med EVPI: en endelig stikprøve kan kun delvist opløse usikkerhed, og en undersøgelse, der ser ud til at være mere værd end perfekt information, er et tegn på, at beregningen er forkert, ikke et reelt resultat.

## Matematikken

```
Generelt:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (indlejret forventning: ydre over mulige undersøgelsesresultater, indre
  over den posteriore opfattelse af θ efter at have set det resultat —
  normalt estimeret ved indlejret Monte Carlo / bayesiansk opdatering over
  trækkene fra den probabilistiske følsomhedsanalyse)

Lukket form med normaltilnærmelse (én usikker parameter, konjugeret
normal-normal-model — en gængs genvej, ikke eksakt for enhver model):
EVSI(n) = EVPI × n / (n + n0)

n  = den foreslåede undersøgelses stikprøvestørrelse
n0 = "prior-ækvivalent stikprøvestørrelse" — størrelsen på en tænkt
     stikprøve, der ville bære den samme information som den nuværende
     prior, udledt af forholdet mellem datavarians og priorvarians
ENBS(n) = EVSI(n) − Omkostning(n)
Populations-EVSI = EVSI_pr_beslutning × berørte_beslutninger
```

Den generelle form er en indlejret forventning, fordi en undersøgelses fremtidige resultat selv er usikkert: man må midle over ethvert datasæt, undersøgelsen kunne frembringe, og for hvert enkelt genberegne den bedste beslutning givet den opdaterede (posteriore) opfattelse. Normaltilnærmelsen i lukket form bytter denne beregningsomkostning med et enkelt forhold, gyldigt når den usikre parameter og dataene er (tilnærmelsesvis) normalfordelte og konjugerede — en bekvemmelighed, ikke en universel lov. Fuld indlejret Monte Carlo er den generelle metode, når den antagelse ikke holder. Se [probabilistisk følsomhedsanalyse](../probabilistic-sensitivity-analysis/) for de PSA-træk, EVSI normalt estimeres ud fra.

## Gennemarbejdet eksempel

Med udgangspunkt i det gennemarbejdede eksempel for [EVPI](../expected-value-of-perfect-information/) — udrulning af en AI-dokumentationsassistent til 5.000 klinikere, hvor EVPI var 1,2 mio. £ — udtrykkes samme EVPI her i hele pund: **EVPI = 1.200.000 £**.

En foreslået pilotundersøgelse med 50 klinikere er på bordet. Ud fra forholdet mellem priorens varians og pilotens målepræcision bliver den prior-ækvivalente stikprøvestørrelse `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = 480.000 £
```

Piloten koster 120.000 £:

```
ENBS = EVSI − Omkostning = 480.000 − 120.000 = 360.000 £
```

En klart positiv ENBS: finansier piloten. Hvis den samme indkøbsbeslutning gentager sig i 3 tilsvarende regionale trusts, skalerer pilotens værdi:

```
Populations-EVSI = 480.000 × 3 = 1.440.000 £
```

## Forbindelse til softwareudvikling

EVSI er økonomien i at vælge, *hvor stor* en pilot eller A/B-test bør være, ikke blot om man overhovedet skal køre en:

- **Stikprøvestørrelse som investeringsbeslutning.** En beta med 50 brugere og en trinvis udrulning til 5.000 brugere er forskellige "undersøgelser" med forskellige EVSI'er og omkostninger — EVSI lader dig sammenligne dem på samme grundlag i stedet for at falde tilbage på "flere data er altid bedre".
- **ENBS, ikke EVSI alene, er bestillingstesten.** En undersøgelse med høj EVSI, hvis omkostning æder det meste af den, er et svagt forslag; beslutningsreglen er forventet nettofordel ved stikprøven, ligesom en business case modregner fordel mod omkostning frem for kun at rapportere fordelen.
- **Aftagende udbytte er eksplicit.** Fordi EVSI(n) stiger med `n/(n+n0)`, fordobler en fordoblet pilotstørrelse aldrig dens værdi — en formel udgave af ingeniørens instinkt for, at et større eksperiment har aftagende marginal informationsværdi.

## Faldgruber

- **At anvende normaltilnærmelsen uden for dens forudsætninger.** Den gælder kun for nogenlunde konjugeret usikkerhed i én parameter; en reelt ikke-lineær eller flerparameter-beslutningsmodel kræver fuld indlejret Monte Carlo, ikke denne genvej.
- **At sammenligne EVSI med kontante omkostninger alene.** EVSI skal vejes mod undersøgelsens *fulde* omkostning, inklusive dens egen omkostning ved beslutningsforsinkelse — se [omkostning ved forsinkelse](../cost-of-delay/) — ikke blot undersøgelsens faktura.
- **At behandle EVSI > EVPI som et reelt fund.** EVSI kan konstruktionsmæssigt aldrig overstige EVPI; en beregning, der giver det, er en modelfejl, ikke en opdagelse.

## Kilder

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
