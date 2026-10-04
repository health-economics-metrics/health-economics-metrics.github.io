# CO₂-aftryk pr. QALY

CO₂ pr. QALY er et effektivitetsforhold — en intervention's CO₂-udledning (eller undgåede udledning) divideret med de QALY'er, den leverer — direkte analogt til omkostning pr. QALY, så en interventions kulstofeffektivitet kan vurderes ved siden af dens omkostningseffektivitet. En "kulstofjusteret netto pengeværdi" går et skridt videre: den sætter penge på CO₂-påvirkningen med de officielle ikke-handlede kulstofværdier fra det britiske Green Book og modregner den i den sædvanlige [netto pengeværdi](../net-monetary-benefit/).

## Hvorfor det er vigtigt

NICE og NHS England forventer nu, at miljøpåvirkning overvejes sammen med omkostning og QALY'er. NHS har et offentligt nettonul-tilsagn: nettonul for de direkte udledninger i 2040 og nettonul for hele forsyningskædens aftryk i 2045. NICE's manual til evaluering af sundhedsteknologi (PMG36) nævner miljømæssig bæredygtighed som et fremvoksende hensyn ved teknologivurdering. For et digitalt sundhedsprodukt betyder det, at kulstof er ved at blive en fjerde søjle i værdiargumentet ved siden af omkostning, QALY'er og [dominans på effektivitetsgrænsen](../dominance-and-efficiency-frontier/) — ikke en erstatning for nogen af dem, men en dimension, som en velbygget business case i stigende grad skal redegøre for.

## Matematikken

```
CO₂ pr. QALY = samlet_udledning_tons_co2e / samlede_qaly
  (en negativ værdi betyder netto UNDGÅET udledning pr. vundet QALY —
  en dobbelt gevinst: bedre sundhed og lavere CO₂)

Omsat CO₂-påvirkning = udledning_tons_co2e × kulstofværdi_pr_ton
  (negativ udledning × positiv værdi = negativ omkostning, dvs. en fordel)

Kulstofjusteret NMB = netto_pengeværdi − omsat_CO₂-påvirkning
```

Det udvider ideen om omkostning/QALY-effektivitetsgrænsen med en anden akse — CO₂ pr. QALY — med samme logik som i [dominans og effektivitetsgrænsen](../dominance-and-efficiency-frontier/): afsæt alle muligheder og se, hvad der er domineret, blot anvendt på kulstof i stedet for omkostning.

## Gennemarbejdet eksempel

En telesundhedstjeneste erstatter fysiske besøg og undgår 5.000 bilture om året på cirka 8 kg CO2e hver — 40 ton CO2e undgået, vist som et negativt udledningstal (−40,0 ton), og den leverer 25 QALY'er om året:

```
CO₂ pr. QALY = −40,0 / 25,0 = −1,6 ton CO2e undgået pr. vundet QALY
```

Med Green Books ikke-handlede kulstofværdi (illustrativt tal, central ikke-handlet værdi 2023 ≈ 269 £/ton CO2e — Green Book opdaterer kulstofværdierne hvert år, kontroller igen før citering i en aktuel analyse):

```
Omsat CO₂-påvirkning = −40,0 × 269 £ = −10.760 £
```

En "omkostning" på −10.760 £ er en fordel på 10.760 £. Hvis interventionens selvstændige netto pengeværdi er 500.000 £:

```
Kulstofjusteret NMB = 500.000 £ − (−10.760 £) = 510.760 £
```

CO₂-besparelsen styrker sagen i stedet for at svække den — den dobbelte gevinst, som rammen med negativ udledning skal synliggøre.

## Forbindelse til softwareudvikling

Det er et aktuelt skæringspunkt med AI-/cloud-økonomi: CO₂-aftrykket fra regnekraft til at træne og køre en AI-model er nu en reel post i NHS' indkøb, da NHS-leverandørkontrakter over visse tærskler kræver en Carbon Reduction Plan. [Skyens enhedsøkonomi](../cloud-unit-economics/) følger allerede omkostning pr. enhed regnekraft; CO₂ pr. QALY er den naturlige skabelon for en fremtidig måleenhed "CO₂-omkostning pr. inferens", der forlænger det modul og inferensens enhedsøkonomi ind i den miljømæssige dimension, selv om den måleenhed endnu ikke findes.

## Faldgruber

- **Manipulation af afgrænsningen**: kun at tælle direkte (scope 1) udledninger og udelade forsyningskædeudledninger (scope 3), som normalt udgør størstedelen af et digitalt sundhedsprodukts faktiske aftryk.
- **At bruge en forældet kulstofværdi**: Green Book opdaterer sine ikke-handlede kulstofværdier hvert år, så ethvert citeret £/ton-tal skal dateres og ikke gengives som en fast konstant.
- **At behandle "kulstofeffektiv" som erstatning for "omkostningseffektiv"**: en intervention med lav CO₂ og lav værdi er stadig en dårlig anvendelse af NHS' ressourcer. Kulstof er en fjerde søjle ved siden af omkostning og QALY'er, ikke en erstatning for nogen af dem.

## Kilder

- NHS England, "Delivering a Net Zero National Health Service" (2020, opdateret 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (opdateres årligt; central ikke-handlet værdi ≈ 269 £/tCO2e, 2023 — dater ethvert citat). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
