# Populationsattribuerbar andel (PAF)

PAF er den andel af en sygdoms- eller udfaldsbyrde i en befolkning, der kan tilskrives en bestemt risikofaktoreksponering — den andel, der ville forsvinde, hvis eksponeringen blev fjernet helt. Den omsætter "denne risikofaktor fordobler dine odds" til et tal på befolkningsniveau, en bestiller faktisk kan planlægge efter: hvor mange tilfælde og hvor stor en omkostning en given eksponering reelt er værd at bekæmpe.

## Hvorfor det er vigtigt

Levin introducerede PAF i 1953 for at besvare et snævert, konkret spørgsmål: hvis ingen røg, hvor meget lungekræft ville så forsvinde? Den samme aritmetik dimensionerer nu national forebyggelsesplanlægning overalt fra tobaks- og fedmestrategier til WHO's Global Burden of Disease-undersøgelses risikofaktorrangeringer, fordi en relativ risiko alene intet siger om effekt — en risikofaktor kan fordoble odds for en sjælden hændelse og næsten ikke flytte befolkningens sygdomsbyrde, eller kun hæve en almindelig hændelses odds en smule og alligevel stå for en enorm andel af tilfældene. PAF er det, der gør "risikofaktor X er farlig" til "at fjerne risikofaktor X ville forhindre så mange tilfælde om året" — det tal, et forebyggelsesprograms business case faktisk har brug for. Se [forebyggelsesøkonomi](../prevention-economics/) for, hvad det koster at handle på det tal, når man har det.

## Matematikken

```
PAF = prævalens_eksponeret × (relativ_risiko − 1) / (1 + prævalens_eksponeret × (relativ_risiko − 1))

prævalens_eksponeret = andelen af befolkningen, der er udsat for risikofaktoren (0–1)
relativ_risiko       = risiko for udfaldet hos eksponerede vs. ikke-eksponerede (fx 2,5 = 2,5×)

Tilskrivelige tilfælde = samlede_tilfælde × PAF
```

PAF stiger med både eksponeringsprævalens og relativ risiko — en moderat forhøjet relativ risiko (fx 1,5×) knyttet til en meget udbredt eksponering kan give en større PAF end en dramatisk relativ risiko (fx 5×) knyttet til en sjælden. Det er hele grunden til, at den eksisterer som et selvstændigt tal ved siden af den relative risiko.

## Gennemarbejdet eksempel

En risikofaktor er til stede hos 30 % af en befolkning (`prævalens_eksponeret = 0,3`) og hæver udfaldets risiko 2,5 gange (`relativ_risiko = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Med 1.000 tilfælde/år i befolkningen:
Tilskrivelige tilfælde = 1.000 × 0,3103 ≈ 310 tilfælde/år
```

Lidt under en tredjedel af udfaldets årlige byrde kan tilskrives eksponeringen — at fjerne den helt (det teoretiske loft; ingen reel intervention opnår 100 % fjernelse af eksponering) ville forhindre cirka 310 af de 1.000 tilfælde hvert år.

## Forbindelse til softwareudvikling

PAF er den epidemiologiske udgave af "hvor stor en del af vores hændelsesvolumen kan tilskrives denne ene grundårsag?" — det samme slags spørgsmål, teams stiller, når de dimensionerer en bestemt klasse af deploys eller afhængigheder mod de samlede produktionshændelser, i stedet for at behandle enhver hændelse som lige værd at rette på samme måde. En grundårsagskategori, der optræder i en stor del af deploys og kun har en moderat relativ risiko for at forårsage en hændelse, kan rangere over en sjælden kategori med høj relativ risiko, når man vælger, hvor ingeniørindsatsen skal bruges først — netop PAF-indsigten, oversat.

## Faldgruber

- **At summere PAF'er på tværs af risikofaktorer**: PAF'er for flere faktorer, der påvirker samme udfald, summerer ikke til 100 % — de kan samlet overstige det, fordi faktorer vekselvirker og deler kausale veje. Behandl hver PAF som "hvis denne faktor alene blev fjernet", aldrig som en opdeling af den samlede risiko.
- **At overføre en relativ risiko på tværs af befolkninger**: en relativ risiko estimeret i én befolkning (anden baseline-eksponeringsprævalens, andre confoundere) giver en vildledende PAF, når den anvendes på en anden befolknings eksponeringsprævalens.
- **At forveksle PAF med attribuerbar risiko hos de eksponerede**: PAF er på befolkningsniveau og afhænger af eksponeringsprævalensen; attribuerbar risiko hos de eksponerede er på individniveau og gør ikke. De besvarer forskellige spørgsmål — brug ikke det ene til at besvare det andet.

## Kilder

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
