# Markov-kohortesimulering

En Markov-kohortemodel er den gængse HTA-modelleringsteknik til interventioner, hvis virkninger udfolder sig over flere tidsperioder (cyklusser) og ikke i ét hug. En hypotetisk kohorte starter helt i én sundhedstilstand, og i hver cyklus flytter et fast sæt overgangssandsynligheder brøkdele af kohorten mellem tilstande; omkostninger og QALY'er påløber hver cyklus i forhold til, hvor stor en del af kohorten der befinder sig i hver tilstand, og tilbagediskonteres til nutidsværdi. Enhver softwareingeniør, der modellerer en flerårig digital sundheds-business case — hvor brugere eller patienter over tid skifter mellem tilstande som "engageret", "faldet fra" eller "forladt" — bygger den samme struktur.

## Hvorfor det er vigtigt

De fleste reelle beslutninger om sundhedsteknologi er ikke engangssammenligninger af én periodes omkostning og udfald. En kronisk sygdom skrider frem, vender tilbage, reagerer på behandling eller dræber over år — og en [omkostningseffektivitetsanalyse](../omkostningseffektivitetsanalyse/) for én periode kan ikke repræsentere det. Indsendelser til NICE, ICER og CADTH for interventioner mod kroniske sygdomme, vurderet via [medicinsk teknologivurdering](../medicinsk-teknologivurdering/), er næsten altid bygget som Markov-kohortemodeller med en livslang tidshorisont, fordi alternativet — at modellere hver eneste mulige individuelle patientforløb — er uhåndterligt i stor skala. Kohorte-Markov-modellen bytter noget realisme på individniveau (den kan vanskeligt repræsentere hukommelse om tidligere tilstande, deraf "Markov": fremtiden afhænger kun af den nuværende tilstand) for en model, der er gennemsigtig, kan revideres og er hurtig nok til at køre tusindvis af gange i en [probabilistisk følsomhedsanalyse](../probabilistisk-følsomhedsanalyse/).

## Matematikken

```
Én cyklus' kohorteopdatering (rækkevektor × overgangsmatrix):
  ny_tilstand[j] = sum_i tilstand[i] * overgangsmatrix[i][j]

Én cyklus' omkostning:
  cyklusomkostning = sum_s tilstand[s] * omkostning_pr_cyklus[s]

Én cyklus' QALY'er:
  cyklus_qaly = sum_s tilstand[s] * nytte[s] * cykluslængde_år

Fuld simulering over `cyklusser` cyklusser, diskonteret med `diskonteringsrente`:
  samlet_diskonteret_omkostning = sum_{t=0}^{cyklusser-1} cyklusomkostning(tilstand_t) / (1 + diskonteringsrente)^t
  samlede_diskonterede_qaly     = sum_{t=0}^{cyklusser-1} cyklus_qaly(tilstand_t)      / (1 + diskonteringsrente)^t
  hvor tilstand_0 = startfordeling, tilstand_{t+1} = fremskriv_kohorte(tilstand_t, overgangsmatrix)
```

Tilbagediskontering af hver cyklus til nutidsværdi bruger præcis formlen fra [diskontering og tidspræference](../diskontering-og-tidspræference/), blot anvendt cyklus for cyklus i stedet for år for år.

## Gennemarbejdet eksempel

**Klinisk**: en model med 2 tilstande — `Rask` og `Død` — hvor 10 % af kohorten dør hver cyklus, og `Død` er absorberende (dens selvovergangssandsynlighed er 1,0; udelades den selvløkke, ville kohortemassen forsvinde efter én cyklus i `Død`). Kohorten starter helt `Rask`, koster 1.000 £ pr. cyklus, mens den er `Rask` (0 £ når `Død`), og vinder 0,8 QALY pr. år, mens den er `Rask`. Simuleret over 3 årlige cyklusser med NICE's diskonteringsrente på 3,5 %:

```
Cyklus 0: tilstand = [1,00, 0,00] (100 % Rask)
  omkostning = 1.000,00 £, qaly = 0,800, diskonteringsfaktor = 1,000000
  diskonteret: omkostning = 1.000,00 £, qaly = 0,8000

Cyklus 1: tilstand = [0,90, 0,10] (90 % Rask, 10 % Død)
  omkostning = 900,00 £, qaly = 0,720, diskonteringsfaktor = 0,966184
  diskonteret: omkostning = 869,57 £, qaly = 0,6957

Cyklus 2: tilstand = [0,81, 0,19] (81 % Rask, 19 % Død)
  omkostning = 810,00 £, qaly = 0,648, diskonteringsfaktor = 0,933511
  diskonteret: omkostning = 756,14 £, qaly = 0,6049

Samlet diskonteret omkostning ≈ 2.625,71 £
Samlede diskonterede QALY'er  ≈ 2,1006
```

Hver cyklus' tilstand er sidste cyklus' tilstand ført gennem overgangsmatricen — 90 % af de 90 %, der stadig er `Rask` i cyklus 1, forbliver `Rask` i cyklus 2 (0,9 × 0,9 = 0,81), mens de øvrige 19 % nu er døde (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Bemærk, at kohorten aldrig helt tømmer `Rask`: med en konstant dødelighed på 10 % pr. cyklus og uden genindtræden aftager `Rask`-andelen geometrisk i stedet for at nå nul ved noget endeligt antal cyklusser.

## Forbindelse til softwareudvikling

For hvordan en flercyklus-HTA-model bruges i en reel vurdering, se [medicinsk teknologivurdering](../medicinsk-teknologivurdering/) — referencetilfældet, som styrer, hvilken diskonteringsrente, nyttekilde og tidshorisont en indsendt Markov-model skal bruge.

En Markov-kohortemodel er strukturelt en tilstandsmaskine med sandsynlighedsbaserede overgange, kørt i et fast antal tik og med diskontering af hvert tiks værdi. Samme form simulerer en brugerkohortes fastholdelses-/tilstandsovergange over tid — se [DORA-målinger](../dora-nøgletal/) for driftssikkerhedsudgaven af "hvor stor en del af systemet er i en forringet tilstand i denne periode, og hvad koster det". Konkret:

- **Fastholdelses-/frafaldsmodellering** er en Markov-kohortemodel med tilstande som "aktiv", "i risiko", "forladt": en fast månedlig overgangsmatrix, kørt over 12 eller 24 månedlige cyklusser, fortæller det forventede antal aktive brugere (og omsætning) i en hvilken som helst fremtidig måned, på samme måde som `Rask`/`Død` fortæller forventede overlevende.
- **Driftssikkerhed og hændelsesøkonomi**: et systems tilstande (sundt, forringet, nede) kan modelleres på samme måde, med en "omkostning pr. cyklus" for nedetidsskade, der påløber, mens systemet befinder sig i tilstandene forringet/nede — det forvandler et argument om hændelsesfrekvens til et argument om diskonterede omkostninger, der kan sammenlignes med omkostningen ved det driftssikkerhedsarbejde, der ville ændre overgangssandsynlighederne.
- **Absorberende tilstande som sluttilstande**: `Død` i en klinisk model er præcis en "opsagt abonnement"- eller "permanent offline"-tilstand i en softwaremodel — begge kræver en eksplicit selvovergangssandsynlighed på 1,0, ellers mister simuleringen stiltiende masse.

## Faldgruber

- **Overgangssandsynligheder, der ikke summerer til 1 pr. række.** En række, der summerer til mere eller mindre end 1, får stiltiende kohorten til at "lække" eller "vokse" masse hver cyklus — kontroller altid rækkesummer, før du stoler på en models output, da selve modelstrukturen ikke flager fejlen.
- **Cykluslængde for grov i forhold til sygdommens reelle dynamik.** En årlig cyklus for en tilstand, der ændrer sig væsentligt inden for uger, undervurderer overgange, der sker midt i cyklussen; vælg en cykluslængde, der er kort i forhold til, hvor hurtigt den modellerede proces reelt bevæger sig.
- **At glemme en absorberende tilstands selvløkke.** En absorberende tilstand (død, permanent ophør) har brug for en selvovergangssandsynlighed på præcis 1,0. Udelades den, fordamper kohortemassen i den tilstand efter en enkelt cyklus og undervurderer kumulative omkostninger eller QALY-tab.
- **At betragte modellen som valideret, fordi den kører.** En Markov-kohortemodel med plausibelt udseende overgangssandsynligheder kan stadig være strukturelt forkert (manglende tilstande, forkert absorberende adfærd); valider mod kendte epidemiologiske benchmarks (fx om den modellerede overlevelse efter 5 år svarer til offentliggjorte overlevelseskurver), før du stoler på outputtet.

## Kilder

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
