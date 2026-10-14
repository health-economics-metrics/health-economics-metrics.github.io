# Markov-kohortsimulering

En Markov-kohortmodell är den vedertagna HTA-modelleringstekniken för interventioner vars effekter utvecklas över flera tidsperioder (cykler) och inte i ett enda slag. En hypotetisk kohort börjar helt i ett hälsotillstånd, och varje cykel förflyttar en fast uppsättning övergångssannolikheter delar av kohorten mellan tillstånd; kostnader och QALY löper upp varje cykel i proportion till hur stor del av kohorten som befinner sig i varje tillstånd och diskonteras tillbaka till nuvärde. Varje mjukvaruutvecklare som modellerar ett flerårigt affärsunderlag för digital hälsa — där användare eller patienter över tid rör sig mellan tillstånd som ”engagerad”, ”avfallen” eller ”avslutad” — bygger samma struktur.

## Varför det är viktigt

De flesta verkliga beslut om hälsoteknik är inte engångsjämförelser av kostnad och utfall för en enda period. En kronisk sjukdom fortskrider, återkommer, svarar på behandling eller dödar, över år — och en [kostnadseffektivitetsanalys](../kostnadseffektivitetsanalys/) för en enda period kan inte representera det. Inlämningar till NICE, ICER och CADTH för interventioner vid kroniska sjukdomar, bedömda genom [medicinsk teknikutvärdering](../medicinsk-teknikutvärdering/), byggs nästan alltid som Markov-kohortmodeller med en livslång tidshorisont, eftersom alternativet — att modellera varje möjlig individuell patientbana — är ohanterligt i stor skala. Markov-modellen på kohortnivå byter bort en del realism på individnivå (den kan svårligen representera minne av tidigare tillstånd, därav ”Markov”: framtiden beror bara på det nuvarande tillståndet) mot en modell som är transparent, granskningsbar och snabb nog att köras tusentals gånger i en [probabilistisk känslighetsanalys](../probabilistisk-känslighetsanalys/).

## Matematiken

```
En cykels kohortuppdatering (radvektor × övergångsmatris):
  nytt_tillstånd[j] = summa_i tillstånd[i] * övergångsmatris[i][j]

En cykels kostnad:
  cykelkostnad = summa_s tillstånd[s] * kostnad_per_cykel[s]

En cykels QALY:
  cykel_qaly = summa_s tillstånd[s] * nyttovärde[s] * cykellängd_år

Fullständig simulering över `cykler` cykler, diskonterad med `diskonteringsränta`:
  total_diskonterad_kostnad = summa_{t=0}^{cykler-1} cykelkostnad(tillstånd_t) / (1 + diskonteringsränta)^t
  totala_diskonterade_qaly  = summa_{t=0}^{cykler-1} cykel_qaly(tillstånd_t)   / (1 + diskonteringsränta)^t
  där tillstånd_0 = startfördelning, tillstånd_{t+1} = för_kohort_framåt(tillstånd_t, övergångsmatris)
```

Att diskontera varje cykel tillbaka till nuvärde använder exakt formeln från [diskontering och tidspreferens](../diskontering-och-tidspreferens/), tillämpad cykel för cykel i stället för år för år.

## Genomarbetat exempel

**Kliniskt**: en modell med 2 tillstånd — `Frisk` och `Död` — där 10 % av kohorten dör varje cykel och `Död` är absorberande (dess övergångssannolikhet till sig självt är 1,0; utelämnas den slingan försvinner kohortmassan efter en cykel i `Död`). Kohorten börjar helt `Frisk`, kostar £1 000 per cykel medan den är `Frisk` (£0 när `Död`) och vinner 0,8 QALY per år medan den är `Frisk`. Simulerad över 3 årliga cykler med NICE:s diskonteringsränta på 3,5 %:

```
Cykel 0: tillstånd = [1,00, 0,00] (100 % Frisk)
  kostnad = £1 000,00, qaly = 0,800, diskonteringsfaktor = 1,000000
  diskonterat: kostnad = £1 000,00, qaly = 0,8000

Cykel 1: tillstånd = [0,90, 0,10] (90 % Frisk, 10 % Död)
  kostnad = £900,00, qaly = 0,720, diskonteringsfaktor = 0,966184
  diskonterat: kostnad = £869,57, qaly = 0,6957

Cykel 2: tillstånd = [0,81, 0,19] (81 % Frisk, 19 % Död)
  kostnad = £810,00, qaly = 0,648, diskonteringsfaktor = 0,933511
  diskonterat: kostnad = £756,14, qaly = 0,6049

Total diskonterad kostnad ≈ £2 625,71
Totala diskonterade QALY  ≈ 2,1006
```

Varje cykels tillstånd är föregående cykels tillstånd förd genom övergångsmatrisen — 90 % av de 90 % som i cykel 1 fortfarande är `Frisk` förblir `Frisk` i cykel 2 (0,9 × 0,9 = 0,81), medan de övriga 19 % nu har dött (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Notera att kohorten aldrig tömmer `Frisk` helt: med en konstant dödlighet på 10 % per cykel och ingen återinträde avtar andelen `Frisk` geometriskt i stället för att nå noll vid något ändligt antal cykler.

## Koppling till mjukvaruutveckling

För hur en flercykelmodell i HTA används i en verklig bedömning, se [medicinsk teknikutvärdering](../medicinsk-teknikutvärdering/) — referensfallet som styr vilken diskonteringsränta, vilken nyttovärdeskälla och vilken tidshorisont en inlämnad Markov-modell måste använda.

En Markov-kohortmodell är strukturellt en tillståndsmaskin med probabilistiska övergångar, körd under ett fast antal tick, där varje ticks värde diskonteras. Samma form simulerar en användarkohorts retention/tillståndsövergångar över tid — se [DORA-mått](../dora-mått/) för driftsäkerhetsversionen av ”hur stor del av systemet är i ett försämrat tillstånd den här perioden, och vad kostar det”. Konkret:

- **Retentions-/avhoppsmodellering** är en Markov-kohortmodell med tillstånd som ”aktiv”, ”i riskzonen”, ”avslutad”: en fast månatlig övergångsmatris, körd över 12 eller 24 månadscykler, talar om det förväntade antalet aktiva användare (och intäkterna) i vilken framtida månad som helst, på samma sätt som `Frisk`/`Död` talar om förväntade överlevande.
- **Driftsäkerhet och incidentekonomi**: ett systems tillstånd (friskt, försämrat, nere) kan modelleras på samma sätt, med en ”kostnad per cykel” för driftstoppsskada som löper upp medan systemet befinner sig i tillstånden försämrat/nere — vilket gör ett argument om incidentfrekvens till ett argument om diskonterad kostnad, jämförbart med kostnaden för det driftsäkerhetsarbete som skulle ändra övergångssannolikheterna.
- **Absorberande tillstånd som sluttillstånd**: `Död` i en klinisk modell är precis en ”uppsagd prenumeration” eller ”permanent offline” i en mjukvarumodell — båda behöver en uttrycklig övergångssannolikhet till sig själva på 1,0, annars tappar simuleringen i det tysta massa.

## Fallgropar

- **Övergångssannolikheter som inte summerar till 1 per rad.** En rad som summerar till mer eller mindre än 1 får kohorten att i det tysta ”läcka” eller ”växa” massa varje cykel — kontrollera alltid radsummorna innan du litar på modellens utdata, eftersom själva modellstrukturen inte flaggar felet.
- **För grov cykellängd för sjukdomens verkliga dynamik.** En årscykel för ett tillstånd som ändras väsentligt inom veckor underskattar övergångar som sker mitt i cykeln; välj en cykellängd som är kort i förhållande till hur snabbt den modellerade processen faktiskt rör sig.
- **Att glömma ett absorberande tillstånds självslinga.** Ett absorberande tillstånd (död, permanent avbrott) behöver en övergångssannolikhet till sig självt på exakt 1,0. Utelämnas den avdunstar kohortmassan i det tillståndet efter en enda cykel och underskattar kumulativa kostnader eller QALY-förlust.
- **Att betrakta modellen som validerad för att den går att köra.** En Markov-kohortmodell med rimligt utseende övergångssannolikheter kan ändå vara strukturellt fel (saknade tillstånd, fel absorberande beteende); validera mot kända epidemiologiska riktmärken (t.ex. stämmer modellerad 5-årsöverlevnad med publicerade överlevnadskurvor) innan du litar på utdata.

## Källor

- Sonnenberg FA, Beck JR. ”Markov models in medical decision making: a practical guide.” Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. ”An introduction to Markov modelling for economic evaluation.” PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
