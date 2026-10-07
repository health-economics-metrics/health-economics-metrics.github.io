# Koldioxidavtryck per QALY

Koldioxid per QALY är ett effektivitetsmått — en interventions koldioxidutsläpp (eller undvikna utsläpp) delat med de QALY den ger. Det motsvarar direkt kostnad per QALY och låter en interventions koldioxideffektivitet bedömas vid sidan av dess kostnadseffektivitet. En ”koldioxidjusterad nettomonetär nytta” går ett steg längre: den räknar om klimatpåverkan till pengar med de officiella icke-handlade koldioxidvärdena i brittiska Green Book och drar av den från den vanliga [nettomonetära nyttan](../nettomonetär-nytta/).

## Varför det är viktigt

NICE och NHS England förväntar sig numera att miljöpåverkan vägs in vid sidan av kostnad och QALY. NHS har ett offentligt netto-noll-åtagande: netto noll för de direkta utsläppen till 2040 och netto noll för hela leverantörskedjans avtryck till 2045. NICE:s handbok för utvärdering av hälsoteknik (PMG36) nämner miljömässig hållbarhet som ett framväxande hänsynstagande vid teknikbedömning. För en digital hälsoprodukt betyder det att koldioxid håller på att bli den fjärde pelaren i värdeargumentet, vid sidan av kostnad, QALY och [dominans på effektivitetsfronten](../dominans-och-effektivitetsfronten/) — den ersätter ingen av dem, men är en dimension som ett väl uppbyggt affärsunderlag allt oftare behöver redovisa.

## Matematiken

```
Koldioxid per QALY = totala_utsläpp_ton_co2e / totala_qaly
  (ett negativt värde betyder nettoundvikta utsläpp per vunnen QALY —
  en dubbel vinst: bättre hälsa och mindre koldioxid)

Omräknad klimatpåverkan = utsläpp_ton_co2e × koldioxidvärde_per_ton
  (negativa utsläpp × positivt värde = negativ kostnad, det vill säga en nytta)

Koldioxidjusterad NMB = nettomonetär_nytta − omräknad_klimatpåverkan
```

Det utökar tanken med kostnad/QALY-effektivitetsfronten med en andra axel — koldioxid per QALY — med samma logik ”plotta alla alternativ och se vilka som är dominerade” som i [dominans och effektivitetsfronten](../dominans-och-effektivitetsfronten/), fast tillämpad på koldioxid i stället för kostnad.

## Genomarbetat exempel

En telemedicintjänst ersätter fysiska besök och undviker 5 000 bilresor per år på ungefär 8 kg CO2e vardera — 40 ton undvikt CO2e, uttryckt som negativa utsläpp (−40,0 ton) — och ger 25 QALY per år:

```
Koldioxid per QALY = −40,0 / 25,0 = −1,6 ton CO2e undvikt per vunnen QALY
```

Med Green Books icke-handlade koldioxidvärde (illustrativ siffra, centralt icke-handlat värde 2023 ≈ £269/ton CO2e — Green Book uppdaterar koldioxidvärdena varje år, kontrollera på nytt innan du citerar i en pågående analys):

```
Omräknad klimatpåverkan = −40,0 × £269 = −£10 760
```

En ”kostnad” på −£10 760 är en nytta på £10 760. Om interventionens fristående nettomonetära nytta är £500 000:

```
Koldioxidjusterad NMB = £500 000 − (−£10 760) = £510 760
```

Koldioxidbesparingen stärker underlaget i stället för att försvaga det — den dubbla vinst som ramen med negativa utsläpp är till för att synliggöra.

## Koppling till mjukvaruutveckling

Det här är en aktuell beröringspunkt med AI- och molnekonomi: koldioxidavtrycket från beräkningskraften för att träna och köra en AI-modell är numera en verklig post i NHS upphandling, eftersom NHS leverantörsavtal över vissa tröskelvärden kräver en Carbon Reduction Plan. [Molnets enhetsekonomi](../molnets-enhetsekonomi/) följer redan kostnad per enhet beräkningsutdata; koldioxid per QALY är den naturliga förlagan till ett framtida mått ”koldioxidkostnad per inferens” som skulle förlänga den modulen och inferensens enhetsekonomi in i miljödimensionen, fastän något sådant mått ännu inte finns.

## Fallgropar

- **Manipulation av systemgränsen**: att bara räkna direkta (Scope 1) utsläpp och utelämna leverantörskedjans (Scope 3) utsläpp, som vanligtvis utgör merparten av en digital hälsoprodukts faktiska avtryck.
- **Att använda ett föråldrat koldioxidvärde**: Green Book uppdaterar sina icke-handlade koldioxidvärden varje år, så varje citerad £/ton-siffra måste dateras och inte anges som en fast konstant.
- **Att behandla ”koldioxideffektiv” som ersättning för ”kostnadseffektiv”**: en insats med låga utsläpp men lågt värde är fortfarande ett dåligt bruk av NHS resurser. Koldioxid är en fjärde pelare vid sidan av kostnad och QALY, inte en ersättning för någon av dem.

## Källor

- NHS England, ”Delivering a Net Zero National Health Service” (2020, uppdaterad 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (uppdateras årligen; centralt icke-handlat värde ≈ £269/tCO2e, 2023 — datera varje citat). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
