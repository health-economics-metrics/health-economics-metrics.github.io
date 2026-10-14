# Antal som behöver screenas (NNS)

NNS är antalet personer som måste screenas — inte bara behandlas — för att förebygga **ett** ogynnsamt utfall under en definierad uppföljningsperiod, givet befolkningens basrisk och den relativa riskreduktion som tidig upptäckt och behandling uppnår. Det är NNT:s motsvarighet på screeningprogramnivå: NNT frågar hur många som måste *behandlas* för att förebygga ett utfall; NNS frågar hur många som måste gå igenom hela *screena-och-sedan-behandla*-förloppet för att nå dit.

## Varför det är viktigt

Rembold introducerade NNS 1998 just för att screeningprogram skulle kunna jämföras på samma grund som behandlingar, eftersom ett screeningtests rubrikvärde för relativ riskreduktion döljer två saker som en behandlings inte döljer: basrisken i den befolkning som faktiskt bjuds in till screening, och det faktum att alla som screenas bär testets kostnad och bördan av falskt positiva, inte bara den minoritet som senare har nytta av det. Det brittiska National Screening Committees kostnadseffektivitetsspärr (se [screeningekonomi](../screeningekonomi/)) bygger på precis den här skillnaden — ett screeningprogram med en imponerande relativ riskreduktion i en befolkning med låg basrisk kan ändå ha ett NNS på tusentals, och då blir programkostnaden per förebyggt utfall den verkliga frågan.

## Matematiken

```
NNS = 1 / (basrisk × relativ_riskreduktion)

basrisk              = sannolikheten för utfallet i den screenade
                       befolkningen under uppföljningsperioden (0–1)
relativ_riskreduktion = proportionell riskreduktion som uppnås av
                       screeningmöjliggjord tidig behandling (0–1)

Programkostnad per förebyggt utfall = NNS × kostnad_per_screening
```

Jämför direkt med [NNT](../antal-som-behöver-behandlas/): NNS viker in effektiviteten i hela tratten screening → diagnos → behandling i ett enda tal, medan NNT redan förutsätter att patienten är diagnostiserad och påbörjar behandling.

## Genomarbetat exempel

Ett screeningprograms målgrupp har en basrisk för händelsen på 2 % under studieperioden (`basrisk = 0,02`), och tidig upptäckt uppnår en relativ riskreduktion på 25 % (`relativ_riskreduktion = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 personer måste screenas för att förebygga ett utfall.

Vid £50 per screening:
Programkostnad per förebyggt utfall = 200 × £50 = £10 000
```

Den siffran på £10 000 är det som bör vägas mot kostnaden för själva utfallet och de QALY det hade kostat — samma jämförelse som [förebyggande ekonomi](../förebyggande-ekonomi/) gör för förebyggande program i allmänhet.

## Koppling till mjukvaruutveckling

NNS är ”hur många användare, händelser eller förfrågningar måste gå genom ett detekterings- eller triageflöde för att fånga ett sant positivt värt att agera på” — direkt relevant för larmbaserade övervaknings- och triagesystem, där ett måltillstånd med låg förekomst blåser upp NNS på samma sätt som det får det positiva prediktiva värdet att kollapsa (se [screeningekonomi](../screeningekonomi/) och [klinisk AI-utvärdering](../klinisk-ai-utvärdering/)). En övervakningsregel som måste behandla 200 händelser per verklig fångst är bara värd att köra om fångsten är värd minst 200 gånger triagekostnaden per händelse — exakt samma aritmetik som i hälsovårdsexemplet ovan.

## Fallgropar

- **Att bortse från beroendet av basrisk**: samma screeningtest eller program har ett helt annat NNS — och en helt annan kostnadseffektivitet — i en högriskbefolkning än i en lågriskbefolkning. Ange aldrig ett NNS utan att nämna den befolkning det beräknades för.
- **Att räkna fel nämnare**: NNS räknar *screenade* personer, inte personer som testar positivt eller påbörjar behandling — det rymmer redan hela trattens effektivitet och får därför aldrig jämföras med ett mått som bara räknats över positiva.
- **Att jämföra över uppföljningsperioder**: en kortare uppföljningsperiod blåser vanligtvis upp NNS, eftersom färre händelser observeras i fönstret. NNS-tal är bara jämförbara när de beräknats över samma uppföljningslängd.

## Källor

- Rembold CM. ”Number needed to screen: development of a statistic for disease screening.” BMJ. 1998;317(7154):307-12.
