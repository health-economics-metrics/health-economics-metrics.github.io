# Work Productivity and Activity Impairment (WPAI)

WPAI er et valideret selvrapporteringsspørgeskema (Reilly, Zbrozek, Dasbach, 1993), der måler, hvor meget et helbredsproblem påvirker lønnet arbejde og daglige aktiviteter, normalt over de seneste 7 dage. Det deler tabet i *fravær* (absenteeism) — arbejdstid, der bogstaveligt talt er gået tabt — og *tilstedeværelse med nedsat ydeevne* (presenteeism) — nedsat produktivitet, mens man fysisk er på arbejde — og det sidste er normalt den største, mest skjulte omkostningskomponent.

## Hvorfor det er vigtigt

Simple optællinger af sygedage ser kun fraværet. En kliniker eller vidensarbejder, der aldrig tager en fridag, men arbejder med 60 % kapacitet gennem en kronisk sygdom, bidrager med nul til et fraværsregister og skaber alligevel et stort, reelt produktivitetstab — WPAI er designet netop til at afsløre den usynlige omkostning. Fordi det er et valideret instrument og ikke en skræddersyet undersøgelse, kan dets scorer bruges i evidenspakker om [patientrapporterede udfald](../patientrapporterede-resultater/) og i sygdomsomkostningsstudier uden at en bedømmer skal genvalidere målet. Som selvrapporteringsinstrument er det selv en form for PROM, der især adskiller sig ved sit fokus på arbejde og aktivitet frem for symptomer eller livskvalitet.

## Matematikken

```
Fravær % = timer_mistet_pga_helbred / (timer_mistet_pga_helbred + arbejdede_timer) × 100

Tilstedeværelse med nedsat ydeevne % = selvvurderet 0–10 nedsættelse under arbejde, × 10
                  (indhentet direkte via spørgeskema, ikke udledt her)

Samlet arbejdsnedsættelse % =
    Fravær% + (1 − Fravær%/100) × Nedsat_ydeevne%
    (kombinerer de to, så totalen aldrig kan overstige 100 %)

Produktivitetsomkostning = Samlet_arbejdsnedsættelse% / 100 × indtjening_i_perioden
```

Formlen for samlet nedsættelse er bevidst ikke en simpel sum: at lægge de to procenter direkte sammen kunne overstige 100 %, så nedsat ydeevne anvendes kun på den *resterende* (ikke-fraværende) andel af arbejdstiden.

## Gennemarbejdet eksempel

En medarbejder med migræne er planlagt til en uge på 40 timer, men misser 4 timer af den:

```
timer_mistet = 4, arbejdede_timer = 36
Fravær% = 4 / (4 + 36) × 100 = 10 %
```

Vedkommende vurderer separat sin produktivitetspåvirkning under arbejde til 3 ud af 10 i WPAI-spørgeskemaet, dvs. `Nedsat_ydeevne% = 30 %` (dette trin er et råt spørgeskemasvar, ikke noget udledt af andre tal):

```
Samlet arbejdsnedsættelse% = 10 + (1 − 10/100) × 30
                           = 10 + 0,9 × 30
                           = 10 + 27
                           = 37 %
```

Over en 5-dages uge med en indtjening på 800 £ (160 £/dag):

```
Produktivitetsomkostning = 37/100 × 800 = 296 £
```

Bemærk, at en naiv optælling af sygedage kun ville have registreret de 4 timer (10 %), der blev misset — komponenten med nedsat ydeevne næsten tredobler den reelle nedsættelse, når den tælles med.

## Forbindelse til softwareudvikling

Det svarer direkte til sundhedsmålinger for ingeniørteams:

- **Fravær** er sygefravær og betalt fri — synligt, allerede registreret og den nemme del.
- **Nedsat ydeevne ved tilstedeværelse** er den udbrændte eller af kontekstskift overbelastede ingeniør, der er til stede ved hvert stand-up, men arbejder med nedsat kapacitet — normalt den største og mest skjulte omkostning, usynlig i hoved- eller tilstedeværelsesdata. Den viser sig i stedet som nedsat gennemstrømning i [DORA](../dora-nøgletal/)- og [flowmålinger](../flowmål/) eller som langsommere afvikling af netop den [tekniske gæld](../teknisk-gæld/), hvis "renter" forstærker nedsættelsen yderligere.
- Ingeniørlærdommen er den samme som den kliniske: kun at måle fravær og kalde det "produktivitetstab" undervurderer systematisk den reelle omkostning, fordi det overser alle, der er til stede, men nedsat.

## Faldgruber

- **Erindringsbias ved selvrapportering.** Et tilbageblik på 7 dage er udsat for de samme rapporteringsforvridninger som enhver retrospektiv selvrapportering.
- **At behandle 0–10-skalaen for nedsat ydeevne som en egentlig fysisk måling.** Den er ordinal, indhentet ved selvvurdering, ikke en valideret fysisk størrelse — at behandle forskelle på den som strengt lineære eller intervalskalerede er en modelleringsbekvemmelighed, ikke et valideret fysisk faktum.
- **At samle scorer på tværs af WPAI-varianter.** WPAI har flere tilstandsspecifikke versioner — WPAI:GH (generelt helbred), WPAI:SHP (specifikt helbredsproblem) og sygdomsspecifikke varianter — og scorer fra forskellige varianter bør ikke samles eller sammenlignes uden først at kontrollere, at de er den samme instrumentversion.

## Kilder

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI-instrumentdokumentation, Reilly Associates — den officielle scoringsreference. <https://www.reillyassociates.net/>
