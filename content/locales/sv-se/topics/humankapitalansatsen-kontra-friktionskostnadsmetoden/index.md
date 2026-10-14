# Humankapitalansatsen kontra friktionskostnadsmetoden

Det här är de två konkurrerande metoderna för att värdera förlorad produktivitet — på grund av sjukdom, funktionsnedsättning eller död — i sjukdomskostnads- och kostnads-nyttostudier. Humankapitalansatsen (HCA) värderar all förlorad produktion under hela frånvarons längd till lönesatsen; friktionskostnadsmetoden (FCM) värderar den bara för den kortare period en arbetsgivare faktiskt behöver för att återupprätta produktionen. Valet mellan dem ändrar en uppskattning av indirekta kostnader två gånger eller mer.

## Varför det är viktigt

Indirekta (produktivitets-)kostnader är en av hälsoekonomins mest omstridda poster just därför att de två standardmetoderna skiljer sig så kraftigt åt. HCA behandlar varje frånvarodag som en dag av produktion som ekonomin verkligen förlorar, värderad till full lön för hela perioden — eller, vid död eller permanent funktionsnedsättning, för resten av arbetslivet. FCM hävdar att i en ekonomi med arbetslöshet och slack på arbetsmarknaden minskar större delen av en lång frånvaro inte egentligen den nationella produktionen när en arbetsgivare har utbildat en ersättare eller omfördelat arbete; bara ”friktionsperioden” — tiden att återställa produktionen till tidigare nivå — representerar en verklig förlust. FCM ger därför systematiskt lägre, mer försiktiga uppskattningar av indirekta kostnader än HCA, och de två metoderna är inga utbytbara fotnoter: de är olika ekonomiska teorier om vad ”förlorad produktivitet” betyder. Det är också skälet till att [NICE:s referensfall](../medicinsk-teknikutvärdering/) som standard utesluter produktivitetskostnader och redovisar dem, om alls, som en separat känslighetsanalys ur samhällsperspektiv i stället för att blanda in dem i referensfallets ICER — se [analysperspektiv](../analysperspektiv/).

## Matematiken

```
Humankapitalansatsen:
HCA_kostnad = dagslön × förlorade_dagar

Friktionskostnadsmetoden (förenklad, begränsad till friktionsperioden):
FCM_kostnad = dagslön × min(förlorade_dagar, friktionsperiod_dagar)

friktionsperiod_dagar = lands-/sektorsspecifik uppskattning av tiden för att
                        återställa produktionen (historiskt ~85 dagar i
                        nederländska iMTA:s kostnadsriktlinjer; varierar mellan
                        länder och omprövas periodiskt)
```

Hela oenigheten mellan metoderna ryms i `min()`: HCA begränsar aldrig `förlorade_dagar`, så kostnaden fortsätter att växa under hela frånvaron, medan FCM begränsar de räknade dagarna till friktionsperioden, hur länge den faktiska frånvaron än varar.

## Genomarbetat exempel

En anställd är borta från jobbet `förlorade_dagar = 180` dagar och tjänar `dagslön = £150`.

**Humankapitalansatsen**:

```
HCA_kostnad = 150 × 180 = £27 000
```

**Friktionskostnadsmetoden**, med en friktionsperiod på `friktionsperiod_dagar = 85` (den historiska nederländska iMTA-riktpunkten, enligt riktlinjens periodiska omprövning):

```
FCM_kostnad = 150 × min(180, 85) = 150 × 85 = £12 750
```

FCM:s £12 750 är mindre än hälften av HCA:s £27 000 för *samma* frånvaro — enbart valet av metod ändrar ett sjukdomskostnadsfall avsevärt, innan något annat antagande har rörts.

## Koppling till mjukvaruutveckling

Detta motsvarar direkt hur ett team värderar att en ingenjör slutar:

- **Kostnadsberäkning av avgång i HCA-stil**: att värdera förlusten som den avgångne ingenjörens hela lön så länge tjänsten står vakant. Det är den naiva versionen av de flesta modeller för avgångskostnader, och den överskattar förlusten av samma skäl som HCA överskattar produktivitetsförlust — den antar att den lediga kapaciteten var fullt produktiv hela tiden och att inget annat absorberade slacket. Se [personalbehållning](../personalbehållning/), som kvantifierar kedjan av rekrytering/introduktion/vakanstäckning som den här metoden matar in i.
- **Kostnadsberäkning av avgång i FCM-stil**: att värdera förlusten bara för den faktiska tiden att tillsätta tjänsten och få en ersättare i gång — ingenjörsvärldens ”friktionsperiod”. Det är det mer försvarbara talet för ett affärsunderlag, precis som FCM är det mer försiktiga valet i en sjukdomskostnadsstudie.
- Den underliggande disciplinen är densamma som i [alternativkostnad](../alternativkostnad/): värdera en undanträngd resurs efter det som verkligen går förlorat, inte efter en rubrikvaraktighet multiplicerad med en sats.

## Fallgropar

- **Att blanda HCA och FCM i en och samma analys, eller att redovisa bara en utan att uppge valet.** Samma frånvarodata kan ge en skillnad på 2x eller mer i redovisad kostnad beroende på metod; valet måste anges, inte gömmas.
- **Att använda HCA i ett fall ur samhällsperspektiv utan att markera det som en känslighetsanalys.** NICE:s referensfall utesluter uttryckligen produktivitetskostnader; en HCA-uppskattning ur samhällsperspektiv hör hemma i en scenarioanalys, inte i rubrik-ICER:en.
- **Att tillämpa någon av metoderna på obetalt eller icke-marknadsmässigt arbete (t.ex. omsorg) utan justering.** Båda metoderna antar en lönesats som ställföreträdare för värde, vilket inte överförs rent till arbete utan marknadslön.

## Källor

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. ”The friction cost method for measuring indirect costs of disease.” Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. ”Methods for the Economic Evaluation of Health Care Programmes.” 4th ed. Oxford University Press — ämnet om produktivitetskostnader.
- NICE health technology evaluations manual (PMG36) — referensfallets perspektiv och valfri vägledning om samhällsperspektiv. <https://www.nice.org.uk/process/pmg36>
