# Værdien af et statistisk liv (VSL)

Værdien af et statistisk liv (VSL) — kaldet "value of a prevented fatality" (VPF) i britisk sprogbrug — er det beløb, en *befolkning* kollektivt er villig til at betale for at reducere risikoen for ét statistisk dødsfald, udledt af løn-risiko-afvejningsstudier (hvor meget ekstra løn arbejdere kræver for mere risikable job) og undersøgelser af angivne præferencer. Det er ikke prisen på nogen identificeret persons liv; det er et befolkningsrisikokonstrukt, og en softwareingeniør, der bygger risikoreducerende systemer — triagealgoritmer, ambulancedisponering, sikkerhedsovervågning — skal vide, at det stammer fra en anden teoretisk tradition end [betalingsvillighedstærskler](../betalingsvillighedstærskler/).

## Hvorfor det er vigtigt

VSL/VPF er standardværktøjet til at omsætte reduktioner i dødelighedsrisiko til penge i regulatorisk cost-benefit-analyse: trafiksikkerhed, miljøregulering og nogle folkesundhedsinterventioner kører alle deres business cases gennem det. HM Treasury's Green Book offentliggør et VPF-tal udledt af britisk arbejdsmarkeds- og undersøgelsesevidens, og Department for Transport bruger det direkte i vurderingen af vejsikkerhed. Det er en reelt anden værdisætningstradition end QALY × betalingsvillighedstærskel-metodikken: tærskeltilgangen værdisætter sundhedsgevinster mod, hvad et sundheds*budget* i øjeblikket frembringer på marginen, mens VSL/VPF værdisætter risikoreduktion mod, hvad folk på et arbejdsmarked eller i en undersøgelse afslører, at de ville betale for den. De to rammer kan ikke altid forenes, og at bruge begge i samme sag uden at erkende det er en almindelig analysefejl.

## Matematikken

```
Undgåede dødsfald = befolkning × risikoreduktion_pr_person
  (risikoreduktion_pr_person er en sandsynlighed, fx 0,000001 = en
   reduktion på 1 ud af en million i den årlige dødelighedsrisiko)

Omsat dødelighedsfordel = undgåede_dødsfald × værdi_af_forebygget_dødsfald
```

## Gennemarbejdet eksempel

En region med 800.000 mennesker får gavn af en digital disponerings-/triageintervention for vejsikkerhed, der sænker hver persons årlige dødelighedsrisiko med 1 ud af en million (0,000001):

```
Undgåede dødsfald = 800.000 × 0,000001 = 0,8
```

Med Storbritanniens værdi af et forebygget dødsfald, 2.180.000 £ (tal fra HM Treasury/DfT, 2023/24-priser — Green Book opdaterer det hvert år, kontroller igen før citering i en aktuel analyse):

```
Omsat dødelighedsfordel = 0,8 × 2.180.000 £ = 1.744.000 £/år
```

Lidt under 1,75 millioner £ om året i omsat dødelighedsfordel, fra en risikoreduktion som de fleste berørte aldrig ville mærke individuelt.

## Forbindelse til softwareudvikling

Teams, der arbejder med sikkerhedskritisk software — firmware til medicinsk udstyr, software til autonome køretøjer, industrielle styringssystemer — står over for netop dette prissætningsproblem, når de bygger cost-benefit-argumentet for en sikkerhedsinvestering: hvordan prissætter man "forhindre én katastrofal fejl", når fejlen er sjælden, alvorlig og spredt over en stor brugerpopulation? VSL/VPF er et årtiers gammelt, offentligt dokumenteret præcedens fra den virkelige verden for at sætte et tal på en sjælden, alvorlig risikoreduktion på befolkningsniveau — den samme argumentationsform som at prissætte en SRE-investering mod et sjældent katastrofalt udfald, blot med et dødelighedsudfald i stedet for et nedetidsudfald.

## Faldgruber

- **At behandle VSL som "prisen på et identificeret liv"**: det er det ikke. VSL/VPF er et statistisk befolkningskonstrukt udledt af risikoreduktionsafvejninger på tværs af mange mennesker, ikke en værdisætning af en bestemt persons liv eller død.
- **Dobbelttælling mod en QALY-baseret beregning af netto pengeværdi**: at bruge et VSL/VPF-tal og en separat QALY × tærskel-beregning i samme sag uden at afstemme dem dobbelttæller stiltiende værdien af de samme undgåede dødsfald. Vælg én ramme for en given sag.
- **At overføre et VSL-estimat på tværs af kontekster uden justering**: et VSL udledt fra ét lands arbejdsmarked eller fra løn-risiko-data for personer i den arbejdsdygtige alder, anvendt uden justering på en anden indkomstkontekst eller en anden befolkning (børn, pensionister), er et mangeårigt, reelt omstridt metodisk spørgsmål — ikke et løst.

## Kilder

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — supplerende vejledning om Value of a Prevented Fatality (2023/24-priser; Green Book-værdier opdateres årligt). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (til den amerikanske VSL-tradition, citeret som kontrast til det britiske VPF-tal ovenfor). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
