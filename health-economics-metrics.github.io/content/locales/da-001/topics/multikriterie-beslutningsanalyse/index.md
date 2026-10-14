# Multikriterie-beslutningsanalyse (MCDA)

Multikriterie-beslutningsanalyse (MCDA) er en scoringsmodel med vægtet sum, der bruges i vurdering af sundhedsteknologi, når en enkelt ICER-/betalingsvillighedstærskel ikke fanger alt, en beslutningstager bekymrer sig om: lighed, uopfyldt behov, innovation, budgetkonsekvens, sygdomssværhedsgrad. Hvert kriterium får en vægt, der afspejler dets betydning (indhentet fra interessenter, vægtene summerer til 1), hver mulighed får en normaliseret score pr. kriterium (typisk 0–1), og den samlede score er den vægtede sum — den samme matematiske form som et scorekort til valg af softwareleverandør.

## Hvorfor det er vigtigt

MCDA bruges i rammer som EVIDEM og af nogle HTA-organer til vurderinger af orphan-/sjældne sygdomme, hvor en streng omkostning-pr.-QALY-tærskel anses for for snæver til at fange alt, der er vigtigt ved en beslutning. ISPOR's MCDA Emerging Good Practices Task Force formaliserede vejledning i god praksis for at indhente vægte og scorer forsvarligt, netop fordi en uformelt vægtet beslutning er let at konstruere og let at manipulere. Når en sundhedsteknologi reelt har værdidimensioner, som en enkelt [betalingsvillighedstærskel](../betalingsvillighedstærskler/) ikke kan repræsentere — sværhedsgrad, innovation, lighed — giver MCDA beslutningstagerne en eksplicit, reviderbar struktur til at kombinere dem i stedet for en uudtalt skønsmæssig vurdering.

## Matematikken

```
MCDA-score = Σ_i (vægt_i × score_i)

vægtene bør summere til 1 (indhentet med interessentmetoder som swing-
vægtning eller Analytic Hierarchy Process)
```

## Gennemarbejdet eksempel

Et HTA-udvalg scorer en digital terapi på fire kriterier:

```
Kriterium                          Vægt     Score   Vægt × Score
Klinisk fordel                     0,4      0,8     0,32
Omkostningspåvirkning              0,3      0,5     0,15
Sygdomssværhed / uopfyldt behov    0,2      0,9     0,18
Innovation                         0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Vægtene summerer til 1,0 (0,4 + 0,3 + 0,2 + 0,1), og MCDA-scoren er 0,71 (0,32 + 0,15 + 0,18 + 0,06). Udvalget sammenligner 0,71 med en forud aftalt tærskel eller rangerer den mod konkurrerende teknologier scoret på samme måde.

## Forbindelse til softwareudvikling

Det er nøjagtig den samme matematik som et vægtet scorekort til leverandørvalg, en RFP-evalueringsmatrix eller en scoringsmodel til funktionsprioritering — se [bygge kontra købe](../bygge-kontra-købe/), et klassisk brugstilfælde for vægtede scorekort i softwareindkøb. Det er også værd at sætte op mod [WSJF og CD3](../wsjf-og-cd3/): WSJF/CD3 er en *forholdsbaseret* prioriteringsmetode (omkostning ved forsinkelse divideret med opgavestørrelse eller varighed), mens MCDA er en vægtet *sum*. MCDA og WSJF/CD3 er to strukturelt forskellige svar på "hvordan rangerer vi konkurrerende muligheder", og at vide, hvilket en given beslutning faktisk kalder på — additiv værdi på tværs af uafhængige kriterier eller værditæthed pr. enhed knap kapacitet — betyder mere end, hvilken formel der ser mest stringent ud.

## Faldgruber

- **Bias i vægtindhentningen**: den, der fastsætter vægtene, forudbestemmer reelt rangordenen, så en "formel" kan hvidvaske en politisk eller kommerciel beslutning som en objektiv beregning. Dokumenter, hvem der fastsatte vægtene, og hvordan.
- **Dobbelttælling af et kriterium, der allerede er fanget andetsteds**: at score "omkostningseffektivitet" som ét kriterium og *samtidig* separat score "omkostningspåvirkning" overvægter penge i forhold til de andre kriterier uden at nogen har tilsigtet det.
- **Falsk præcision**: en vægtet score med to decimaler (0,71) antyder mere stringens, end de underliggende interessentvurderinger på en skala fra 0–10 faktisk kan bære, og variationen mellem bedømmere i de vurderinger rapporteres ofte slet ikke.

## Kilder

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
