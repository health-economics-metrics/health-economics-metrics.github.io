# Populationsattribuerbar andel (PAF)

PAF är den andel av en sjukdoms- eller utfallsbörda i en befolkning som kan tillskrivas exponering för en viss riskfaktor — den andel som skulle försvinna om exponeringen togs bort helt. Den gör ”den här riskfaktorn fördubblar dina odds” till ett tal på befolkningsnivå som en beställare faktiskt kan planera kring: hur många fall, och hur mycket kostnad, en given exponering egentligen är värd att bekämpa.

## Varför det är viktigt

Levin introducerade PAF 1953 för att besvara en snäv, konkret fråga: om ingen rökte, hur mycket lungcancer skulle försvinna? Samma aritmetik dimensionerar nu nationell förebyggandeplanering överallt, från tobaks- och fetmastrategier till riskfaktorrankningarna i WHO:s Global Burden of Disease-studie, eftersom en relativ risk ensam inte säger något om effekt — en riskfaktor kan fördubbla oddsen för en sällsynt händelse och knappt rubba befolkningens sjukdomsbörda, eller höja oddsen för en vanlig händelse bara något och ändå svara för en enorm andel av fallen. PAF är det som gör ”riskfaktor X är farlig” till ”att ta bort riskfaktor X skulle förebygga så här många fall per år”, det tal affärsunderlaget för ett förebyggande program faktiskt behöver. Se [förebyggande ekonomi](../förebyggande-ekonomi/) för vad det kostar att agera på det talet när man väl har det.

## Matematiken

```
PAF = förekomst_exponerade × (relativ_risk − 1) / (1 + förekomst_exponerade × (relativ_risk − 1))

förekomst_exponerade = andelen av befolkningen som är exponerad för riskfaktorn (0–1)
relativ_risk         = risken för utfallet hos exponerade jämfört med oexponerade (t.ex. 2,5 = 2,5×)

Attribuerbara fall = totala_fall × PAF
```

PAF stiger med både exponeringsförekomst och relativ risk — en måttligt förhöjd relativ risk (säg 1,5×) kopplad till en mycket vanlig exponering kan ge en större PAF än en dramatisk relativ risk (säg 5×) kopplad till en sällsynt. Det är hela skälet till att den finns som ett eget tal vid sidan av relativ risk.

## Genomarbetat exempel

En riskfaktor finns hos 30 % av en befolkning (`förekomst_exponerade = 0,3`) och höjer utfallets risk 2,5 gånger (`relativ_risk = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Med 1 000 fall/år i befolkningen:
Attribuerbara fall = 1 000 × 0,3103 ≈ 310 fall/år
```

Strax under en tredjedel av det här utfallets årliga börda är attribuerbar till exponeringen — att eliminera den helt (det teoretiska taket; ingen verklig intervention uppnår 100 % borttagen exponering) skulle förebygga ungefär 310 av de 1 000 fallen varje år.

## Koppling till mjukvaruutveckling

PAF är den epidemiologiska versionen av ”hur stor del av vår incidentvolym är attribuerbar till den här enda grundorsaken?” — samma sorts fråga som team ställer när de dimensionerar en viss klass av driftsättningar eller beroenden mot totala produktionsincidenter, i stället för att behandla varje incident som lika värd att åtgärda på samma sätt. En grundorsakskategori som finns i en stor andel av driftsättningarna med bara måttlig relativ risk att orsaka en incident kan slå en sällsynt kategori med hög relativ risk i frågan om var ingenjörsinsatsen ska läggas först — precis PAF-insikten, översatt.

## Fallgropar

- **Att summera PAF över riskfaktorer**: PAF för flera faktorer som påverkar samma utfall summerar inte till 100 % — de kan sammantaget överstiga det, eftersom faktorer samverkar och delar orsaksvägar. Behandla varje PAF som ”om bara den här faktorn togs bort”, aldrig som en uppdelning av den totala risken.
- **Att överföra en relativ risk mellan befolkningar**: en relativ risk skattad i en befolkning (annan basförekomst av exponering, andra störfaktorer) ger en vilseledande PAF när den tillämpas på en annan befolknings exponeringsförekomst.
- **Att förväxla PAF med attribuerbar risk hos de exponerade**: PAF är på befolkningsnivå och beror på exponeringsförekomsten; attribuerbar risk hos de exponerade är på individnivå och gör det inte. De besvarar olika frågor — åberopa inte den ena för att besvara den andra.

## Källor

- Levin ML. ”The occurrence of lung cancer in man.” Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. ”Use and misuse of population attributable fractions.” Am J Public Health. 1998;88(1):15-9.
