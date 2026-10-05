# Humankapitaltilgangen kontra friktionsomkostningsmetoden

Det er de to konkurrerende metoder til at værdisætte tabt produktivitet — som følge af sygdom, handicap eller død — i sygdomsomkostnings- og cost-benefit-studier. Humankapitaltilgangen (HCA) værdisætter al tabt produktion i hele fraværets varighed til lønsatsen; friktionsomkostningsmetoden (FCM) værdisætter den kun for den kortere periode, en arbejdsgiver faktisk har brug for til at genoprette produktionen. Valget mellem dem ændrer et estimat af indirekte omkostninger med en faktor to eller mere.

## Hvorfor det er vigtigt

Indirekte (produktivitets-)omkostninger er en af sundhedsøkonomiens mest omstridte poster, netop fordi de to standardmetoder er så uenige. HCA behandler hver fraværsdag som en dag med produktion, økonomien reelt mister, værdisat til fuld løn i hele varigheden — eller ved død eller permanent invaliditet for det resterende arbejdsliv. FCM argumenterer for, at i en økonomi med arbejdsløshed og slæk på arbejdsmarkedet reducerer det meste af et langt fravær ikke egentlig den nationale produktion, når en arbejdsgiver har oplært en afløser eller omfordelt arbejdet; kun "friktionsperioden" — tiden til produktionen er genoprettet til sit tidligere niveau — udgør et reelt tab. FCM giver derfor systematisk lavere, mere forsigtige estimater af indirekte omkostninger end HCA, og de to metoder er ikke udskiftelige fodnoter: de er forskellige økonomiske teorier om, hvad "tabt produktivitet" betyder. Det er også grunden til, at [NICE's referencetilfælde](../health-technology-assessment/) som standard udelukker produktivitetsomkostninger og kun, hvis overhovedet, rapporterer dem som en separat følsomhedsanalyse fra et samfundsmæssigt perspektiv i stedet for at blande dem ind i referencetilfældets ICER — se [analyseperspektiv](../analysis-perspective/).

## Matematikken

```
Humankapitaltilgangen:
HCA_omkostning = dagløn × tabte_dage

Friktionsomkostningsmetoden (forenklet, afkortet ved friktionsperioden):
FCM_omkostning = dagløn × min(tabte_dage, friktionsperiode_dage)

friktionsperiode_dage = lands-/sektorspecifikt estimat af tiden til produktionen
                        er genoprettet (historisk ~85 dage i den hollandske
                        iMTA-omkostningsvejledning; varierer fra land til land
                        og genvurderes med jævne mellemrum)
```

Hele uenigheden mellem de to metoder ligger i `min()`: HCA afkorter aldrig `tabte_dage`, så omkostningen bliver ved med at vokse i hele fraværet, mens FCM afkorter de talte dage ved friktionsperioden, uanset hvor længe det faktiske fravær varer.

## Gennemarbejdet eksempel

En medarbejder er fraværende `tabte_dage = 180` dage og tjener `dagløn = 150 £`.

**Humankapitaltilgangen**:

```
HCA_omkostning = 150 × 180 = 27.000 £
```

**Friktionsomkostningsmetoden** med en friktionsperiode på `friktionsperiode_dage = 85` (det historiske hollandske iMTA-benchmark, som ved vejledningens periodiske genvurdering):

```
FCM_omkostning = 150 × min(180, 85) = 150 × 85 = 12.750 £
```

FCM's 12.750 £ er under det halve af HCA's 27.000 £ for *det samme* fravær — valget af metode alene ændrer en sygdomsomkostningssag væsentligt, før nogen anden antagelse er rørt.

## Forbindelse til softwareudvikling

Det svarer direkte til, hvordan et team værdisætter, at en ingeniør forlader virksomheden:

- **Frafaldsopgørelse i HCA-stil**: at værdisætte tabet som den fratrådte ingeniørs fulde løn, så længe stillingen står ledig. Det er den naive udgave af de fleste frafaldsomkostningsmodeller, og den overvurderer tabet af samme grund, som HCA overvurderer produktivitetstabet — den antager, at den ledige kapacitet var fuldt produktiv hele tiden, og at intet andet absorberede slækket. Se [fastholdelse af medarbejdere](../workforce-retention/), som kvantificerer kæden af rekruttering/onboarding/vakancedækning, som metoden indgår i.
- **Frafaldsopgørelse i FCM-stil**: at værdisætte tabet kun for den faktiske tid til at besætte og indkøre en afløser — ingeniørens "friktionsperiode". Det er det mere forsvarlige tal i en business case, ligesom FCM er det mere forsigtige valg i et sygdomsomkostningsstudie.
- Den underliggende disciplin er den samme som i [alternativomkostning](../opportunity-cost/): værdisæt en fortrængt ressource efter, hvad der reelt går tabt, ikke efter en overskriftsvarighed ganget med en sats.

## Faldgruber

- **At blande HCA og FCM i én analyse, eller kun rapportere den ene uden at oplyse valget.** De samme fraværsdata kan give en forskel på 2x eller mere i den rapporterede omkostning afhængigt af metoden; valget skal oplyses, ikke gemmes væk.
- **At bruge HCA i en sag med samfundsmæssigt perspektiv uden at markere den som følsomhedsanalyse.** NICE's referencetilfælde udelukker udtrykkeligt produktivitetsomkostninger; et HCA-estimat fra samfundsperspektiv hører hjemme i en scenarieanalyse, ikke i den overskrifts-ICER.
- **At anvende en af metoderne på ulønnet eller ikke-markedsmæssigt arbejde (fx omsorgsarbejde) uden justering.** Begge metoder forudsætter en lønsats som stedfortræder for værdi, hvilket ikke overføres rent til arbejde uden markedsløn.

## Kilder

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — emne om produktivitetsomkostninger.
- NICE health technology evaluations manual (PMG36) — referencetilfældets perspektiv og valgfri vejledning om samfundsperspektiv. <https://www.nice.org.uk/process/pmg36>
