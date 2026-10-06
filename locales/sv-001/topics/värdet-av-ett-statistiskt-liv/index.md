# Värdet av ett statistiskt liv (VSL)

Värdet av ett statistiskt liv (VSL) — i brittiskt språkbruk ”värdet av ett förhindrat dödsfall” (VPF) — är det belopp en *befolkning* kollektivt är beredd att betala för att minska risken för ett statistiskt dödsfall, härlett ur studier av avvägningen mellan lön och risk (hur mycket extra lön arbetstagare kräver för farligare arbeten) och enkäter om uttryckta preferenser. Det är inte priset på någon identifierad individs liv; det är en befolkningsriskkonstruktion, och en mjukvaruutvecklare som bygger riskminskande system — triagealgoritmer, ambulansdisponering, säkerhetsövervakning — behöver veta att det kommer från en annan teoretisk tradition än [betalningsviljetrösklar](../betalningsviljetrösklar/).

## Varför det är viktigt

VSL/VPF är standardverktyget för att räkna om minskningar av dödlighetsrisk till pengar i regulatorisk kostnads-nyttoanalys: trafiksäkerhet, miljöreglering och vissa folkhälsoinsatser kör alla sina affärsunderlag genom det. HM Treasurys Green Book publicerar en VPF-siffra härledd ur brittisk arbetsmarknads- och enkätevidens, och Department for Transport använder den direkt i bedömningen av vägsäkerhet. Det här är en genuint annorlunda värderingstradition än metodiken QALY × betalningsviljetröskel: tröskelansatsen värderar hälsovinster mot vad en hälso*budget* för tillfället åstadkommer vid marginalen, medan VSL/VPF värderar riskminskning mot vad människor på en arbetsmarknad eller i en enkät avslöjar att de skulle betala för den. De två ramverken går inte alltid att förena, och att använda båda i samma fall utan att erkänna det är ett vanligt analysfel.

## Matematiken

```
Undvikta dödsfall = befolkning × riskminskning_per_person
  (riskminskning_per_person är en sannolikhet, t.ex. 0,000001 =
   en minskning med 1 på en miljon av den årliga dödlighetsrisken)

Omräknad dödlighetsnytta = undvikta_dödsfall × värde_av_förhindrat_dödsfall
```

## Genomarbetat exempel

En region med 800 000 invånare har nytta av en digital disponerings-/triageintervention för vägsäkerhet som minskar varje persons årliga dödlighetsrisk med 1 på en miljon (0,000001):

```
Undvikta dödsfall = 800 000 × 0,000001 = 0,8
```

Med Storbritanniens värde av ett förhindrat dödsfall, £2 180 000 (siffra från HM Treasury/DfT, 2023/24 års priser — Green Book uppdaterar den varje år, kontrollera på nytt innan du citerar i en pågående analys):

```
Omräknad dödlighetsnytta = 0,8 × £2 180 000 = £1 744 000/år
```

Strax under £1,75 miljoner per år i omräknad dödlighetsnytta, från en riskminskning som de flesta berörda aldrig skulle märka individuellt.

## Koppling till mjukvaruutveckling

Team för säkerhetskritisk mjukvara — inbyggd programvara i medicintekniska produkter, mjukvara för autonoma fordon, industriella styrsystem — står inför exakt det här prissättningsproblemet när de bygger kostnads-nyttounderlaget för en säkerhetsinvestering: hur prissätter man ”förhindra ett katastrofalt haveri” när haveriet är sällsynt, allvarligt och spritt över en stor användarpopulation? VSL/VPF är ett decennier gammalt, offentligt dokumenterat verkligt prejudikat för att sätta ett tal på en sällsynt, allvarlig riskminskning på befolkningsnivå — samma argumentform som att prissätta en SRE-investering mot ett sällsynt katastrofalt avbrott, bara med ett dödlighetsutfall i stället för ett driftstoppsutfall.

## Fallgropar

- **Att behandla VSL som ”priset på ett identifierat liv”**: det är det inte. VSL/VPF är en statistisk befolkningskonstruktion härledd ur riskminskningsavvägningar över många människor, inte en värdering av en viss persons liv eller död.
- **Dubbelräkning mot en QALY-baserad beräkning av nettomonetär nytta**: att använda en VSL/VPF-siffra och en separat QALY × tröskel-beräkning i samma fall, utan att förena dem, räknar i det tysta värdet av samma undvikta dödsfall två gånger. Välj ett ramverk för ett givet fall.
- **Att överföra en VSL-skattning mellan sammanhang utan justering**: ett VSL härlett ur ett lands arbetsmarknad, eller ur lön–risk-data för personer i arbetsför ålder, tillämpat ojusterat på ett annat inkomstsammanhang eller en annan befolkning (barn, pensionärer), är en långvarig, genuint omstridd metodfråga — inte en löst sådan.

## Källor

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — kompletterande vägledning om Value of a Prevented Fatality (2023/24 års priser; Green Book-värden uppdateras årligen). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, ”Mortality Risk Valuation” (för den amerikanska VSL-traditionen, åberopad som kontrast till den brittiska VPF-siffran ovan). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. ”The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World.” J Risk Uncertain. 2003;27(1):5-76.
