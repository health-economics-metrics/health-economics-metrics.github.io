# Work Productivity and Activity Impairment (WPAI)

WPAI är ett validerat självrapporteringsformulär (Reilly, Zbrozek, Dasbach, 1993) som mäter hur mycket ett hälsoproblem påverkar avlönat arbete och dagliga aktiviteter, vanligtvis under de senaste 7 dagarna. Det delar upp förlusten i *frånvaro* (absenteeism) — arbetstid som bokstavligen gått förlorad — och *presentism* (presenteeism) — nedsatt produktivitet fastän man fysiskt är på jobbet — och det senare är vanligtvis den större, mer dolda kostnadskomponenten.

## Varför det är viktigt

Enkla sammanräkningar av sjukdagar ser bara frånvaron. En kliniker eller kunskapsarbetare som aldrig tar en ledig dag men arbetar på 60 % kapacitet genom ett kroniskt tillstånd bidrar med noll till ett frånvaroregister och orsakar ändå en stor, verklig produktivitetsförlust — WPAI är utformat just för att synliggöra den osynliga kostnaden. Eftersom det är ett validerat instrument och inte en skräddarsydd enkät kan dess poäng användas i evidenspaket om [patientrapporterade utfall](../patientrapporterade-utfall/) och i sjukdomskostnadsstudier utan att granskaren behöver validera måttet på nytt. Som självrapporteringsinstrument är det självt en form av PROM, som främst utmärks av sitt fokus på arbete och aktivitet snarare än symtom eller livskvalitet.

## Matematiken

```
Frånvaro % = timmar_förlorade_på_grund_av_hälsa / (timmar_förlorade_på_grund_av_hälsa + arbetade_timmar) × 100

Presentism %  = självskattad nedsättning 0–10 under arbete, × 10
                (inhämtad direkt via formuläret, inte härledd här)

Total arbetsnedsättning % =
    Frånvaro% + (1 − Frånvaro%/100) × Presentism%
    (kombinerar de två så att totalen aldrig kan överstiga 100 %)

Produktivitetskostnad = Total_arbetsnedsättning% / 100 × inkomst_under_perioden
```

Formeln för total nedsättning är avsiktligt inte en enkel summa: att lägga ihop de två procenttalen direkt skulle kunna överstiga 100 %, så presentism tillämpas bara på den *återstående* (icke-frånvarande) delen av arbetstiden.

## Genomarbetat exempel

En anställd med migrän är schemalagd för en 40-timmarsvecka men missar 4 timmar av den:

```
förlorade_timmar = 4, arbetade_timmar = 36
Frånvaro% = 4 / (4 + 36) × 100 = 10 %
```

Hen skattar separat sin produktivitetspåverkan under arbete som 3 av 10 i WPAI-formuläret, alltså `Presentism% = 30 %` (det här steget är ett rått formulärsvar, inte något som härletts ur andra tal):

```
Total arbetsnedsättning% = 10 + (1 − 10/100) × 30
                         = 10 + 0,9 × 30
                         = 10 + 27
                         = 37 %
```

Över en 5-dagarsvecka med inkomst på £800 (£160/dag):

```
Produktivitetskostnad = 37/100 × 800 = £296
```

Notera att en naiv sammanräkning av sjukdagar bara hade registrerat de 4 timmarna (10 %) som gick förlorade — presentismkomponenten nästan tredubblar den verkliga nedsättningen när den räknas med.

## Koppling till mjukvaruutveckling

Detta motsvarar direkt hälsomått för ingenjörsteam:

- **Frånvaro** är sjukfrånvaro och betald ledighet — synlig, redan spårad och den enkla delen.
- **Presentism** är den utbrända eller kontextbytesöverbelastade ingenjören som är närvarande på varje stand-up men arbetar med nedsatt kapacitet — vanligtvis den större och mer dolda kostnaden, osynlig för personalantal eller närvarodata. Den syns i stället som minskad genomströmning i [DORA](../dora-mått/) och [flödesmått](../flödesmått/), eller som långsammare avbetalning av just den [tekniska skuld](../teknisk-skuld/) vars ”ränta” förvärrar nedsättningen ytterligare.
- Ingenjörslärdomen är densamma som den kliniska: att bara mäta frånvaro och kalla det ”produktivitetsförlust” underskattar systematiskt den verkliga kostnaden, eftersom det missar alla som är närvarande men nedsatta.

## Fallgropar

- **Minnesbias vid självrapportering.** Ett 7-dagars återblickningsfönster är utsatt för samma rapporteringsförvrängningar som all retrospektiv självrapportering.
- **Att behandla 0–10-skalan för presentism som en verklig fysisk mätning.** Den är ordinal, framtagen genom självskattning, inte en validerad fysisk storhet — att behandla skillnader på den som strikt linjära eller intervallskalade är en modelleringsbekvämlighet, inte ett validerat fysiskt faktum.
- **Att slå ihop poäng över WPAI-varianter.** WPAI har flera tillståndsspecifika versioner — WPAI:GH (allmän hälsa), WPAI:SHP (specifikt hälsoproblem) och sjukdomsspecifika varianter — och poäng från olika varianter bör inte slås ihop eller jämföras utan att först kontrollera att det är samma instrumentversion.

## Källor

- Reilly MC, Zbrozek AS, Dasbach EJ. ”The validity and reproducibility of a work productivity and activity impairment instrument.” PharmacoEconomics 1993;4(5):353-65.
- WPAI-instrumentdokumentation, Reilly Associates — den officiella poängreferensen. <https://www.reillyassociates.net/>
