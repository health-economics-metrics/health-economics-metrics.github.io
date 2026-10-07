# Hälsoekonomiska mått

En omfattande introduktion till hälsoekonomins matematik, exempel och resonemang, skriven för mjukvaruingenjörer som bygger för nationella hälso- och sjukvårdsorganisationer världen över. Varje fil täcker ett mått eller begrepp: definition, varför det är viktigt, matematiken, ett genomarbetat exempel, kopplingen till mjukvaruutveckling, fallgropar och källor.

Ny här? Börja med [alternativkostnad](locales/en-gb-oxendict/topics/opportunity-cost/), [kvalitetsjusterat levnadsår](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) och [kostnad för fördröjning](locales/en-gb-oxendict/topics/cost-of-delay/) — de tre idéer som allt annat bygger på.

## Grunder i ekonomiskt resonemang

- [Alternativkostnad](locales/en-gb-oxendict/topics/opportunity-cost/) — värdet av det bästa uppgivna alternativet; varför fasta budgetar gör varje val till en undanträngning
- [Diskontering och tidspreferens](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — nuvärden, 3,5-procentsräntan i Green Book/NICE
- [Analysperspektiv](locales/en-gb-oxendict/topics/analysis-perspective/) — betalare kontra vårdgivare kontra samhälle: vems kostnader räknas
- [Tidshorisont](locales/en-gb-oxendict/topics/time-horizon/) — hur länge kostnader och effekter räknas, och manipulation av horisonten
- [Marginalkostnad kontra genomsnittskostnad](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — varför att frigöra en vårdplats inte sparar dess genomsnittliga kostnad
- [Kassafrigörande kontra icke-kassafrigörande besparingar](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — ärlighetstestet för varje påstående om "sparad tid"
- [Känslighetsanalys](locales/en-gb-oxendict/topics/sensitivity-analysis/) — tornadodiagram; vilket antagande som bär upp ditt case
- [Probabilistisk känslighetsanalys](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC, sannolikhet att ha rätt
- [Förväntat värde av perfekt information](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — att prissätta piloten innan du kör den
- [Förväntat värde av stickprovsinformation (EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — att prissätta en *specifik föreslagen* studie, inte att undanröja all osäkerhet
- [Värdering av realoptioner](locales/en-gb-oxendict/topics/real-options-valuation/) — att prissätta optionen att senare utöka ett stegvis projekt, i stället för optionen att samla information först
- [Humankapitalansatsen kontra friktionskostnadsmetoden](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — två sätt att värdera förlorad produktivitet, en skillnad på 2x+ i redovisad kostnad
- [Dominans och effektivitetsfronten](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — att eliminera alternativ som ingen borde välja

## Utfallsmått

- [Kvalitetsjusterat levnadsår (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — den gemensamma valutan för hälsovärde
- [Funktionsjusterat levnadsår (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — spegelbilden från bördans sida; global hälsas mått
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — instrumentet bakom de flesta QALY-nyttovikter
- [Time trade-off (TTO) för att ta fram nyttovärde](locales/en-gb-oxendict/topics/time-trade-off-utility/) — hur en nyttovikt faktiskt tas fram från en respondent
- [Inkrementell kostnadseffektivitetskvot (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — extra kostnad per extra enhet hälsa
- [Betalningsviljetrösklar](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE £20–30 tusen/QALY och världens övriga gränser
- [Värdet av ett statistiskt liv (VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — arbetsmarknadsalternativet till tröskelbaserad värdering
- [Nettomonetär nytta (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — värde minus kostnad, gjort rätt
- [Vunna levnadsår](locales/en-gb-oxendict/topics/life-years-gained/) — överlevnadsmatematik, och rättvisevarianten evLYG
- [Hälsojusterad livslängd (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — redovisning av friska år på befolkningsnivå
- [QALY-underskott och allvarlighetsmodifierare](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — varför sjukare populationers QALY räknas högre
- [Arbetsproduktivitet och aktivitetsnedsättning (WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — frånvaro vs presentism, kostnadens dolda hälft

## Typer av ekonomisk analys

- [Kostnadseffektivitetsanalys (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — kostnad per naturlig utfallsenhet
- [Kostnadsnyttoanalys (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — kostnad per QALY; att jämföra olikartade insatser
- [Kostnads-nyttoanalys (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — allt i pengar; Green Book NPV
- [Kostnadsminimeringsanalys (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — billigaste alternativet, efter att ekvivalens bevisats
- [Kostnads-konsekvensanalys (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — den uppdelade tabellen; NICE:s preferens för digital hälsa
- [Budgetpåverkansanalys (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — överkomlighet, till skillnad från värde
- [Avkastning på investering (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — det delade måttet, med deklarerade parametrar
- [Social avkastning på investering (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — att monetarisera det marknader inte prissätter
- [ICER-jämförelse mellan valutor](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPP vs marknadsväxelkurs; omräkningsvalet som kan vända ett införandebeslut

## Hälso- och sjukvårdssystemets operativa ekonomi

- [Sparade vårddagar](locales/en-gb-oxendict/topics/bed-days-saved/) — arbetshästnyttan, och dess värderingsfallgropar
- [Vårdtid](locales/en-gb-oxendict/topics/length-of-stay/) — sjukhusets cykeltid
- [Återinläggningsfrekvens](locales/en-gb-oxendict/topics/readmission-rate/) — hälso- och sjukvårdssystemets felfrekvens vid förändring
- [Uteblivandefrekvens (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — missade besök; det renaste slösmåttet
- [Undvikande av akutbesök](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — ekonomin i uppströms intervention
- [Nationell taxa och enhetskostnader](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — NHS:s prislista och kostnadsinfrastruktur
- [Remiss till behandling (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — 18-veckorsstandarden som ledtidsmått
- [Väntelistans påverkan](locales/en-gb-oxendict/topics/waiting-list-impact/) — att omvandla sparade timmar till behandlade patienter
- [Vårdpersonalens tid](locales/en-gb-oxendict/topics/practitioner-time/) — att värdera flaskhalskapacitet, inte löner
- [Personalbehållning](locales/en-gb-oxendict/topics/workforce-retention/) — personalomsättningskostnader och utbrändhetsekonomi
- [Undvikbara outsourcingkostnader](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — att hämta hem premiepristaxerat arbete
- [Optimering av nedströms resurser](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — att låsa upp rollen alla väntar på
- [Tidigare intervention](locales/en-gb-oxendict/topics/earlier-intervention/) — ekonomin i att behandla före progression
- [Värdegenererande kapacitet (operativ vändning)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — att skapa kapacitet utan nyanställning
- [Hårda kassafrigörande besparingar (underskottsförsvar)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — att radera budgetposter; CFO:ns mått

## HTA-ramverk och förebyggande ekonomi

- [Medicinsk teknikutvärdering (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (USA), CADTH: vem beslutar vad som är värt att köpa
- [Markov-kohortsimulering](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — hur en flercykelmodell i HTA faktiskt simuleras, kohort för kohort, cykel för cykel
- [NICE:s ramverk för evidensstandarder](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — riskgraderade evidenskrav för digital hälsa
- [Tysklands DiGA-snabbspår](locales/en-gb-oxendict/topics/diga-fast-track/) — appar på recept; provisorisk listning med en evidensdeadline
- [Antal som behöver behandlas (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — insats-per-nytta-enheter som håller påståenden ärliga
- [Populationsattribuerbar andel (PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — hur stor sjukdomsbörda en riskfaktor verkligen är värd att bekämpa
- [Förebyggande ekonomi](locales/en-gb-oxendict/topics/prevention-economics/) — varför förebyggande är kostnadseffektivt men sällan kostnadsbesparande
- [Screeningekonomi](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, PPV-kollaps vid låg prevalens, larmtrötthet
- [Antal som behöver screenas (NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — NNT:s motsvarighet på screeningprogramnivå
- [Undvikna nedströmskostnader](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — kostnadskompensationer och reglerna som gör dem trovärdiga
- [Multikriterieanalys för beslut (MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — viktad poängsättning när en enda tröskel inte räcker
- [Koldioxidavtryck per QALY](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — NHS netto-noll-åtagande möter kostnad per QALY

## Mjukvaruutveckling och digital leverans

- [Kostnad för fördröjning (CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/vecka eller QALY/vecka av utebliven leverans; huvudbryggmåttet
- [DORA-mått](locales/en-gb-oxendict/topics/dora-metrics/) — leveransprestanda, översatt till hälsoekonomiska termer
- [Flödesmått](locales/en-gb-oxendict/topics/flow-metrics/) — Littles lag, WIP, flödeseffektivitet; den delade könmatematiken hos sjukhus och pipelines
- [WSJF och CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — värdedensitetsprioritering; backloggen som en QALY-ligatabell
- [SPACE och DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — flerdimensionell produktivitet; EQ-5D-lärdomen för ingenjörsmått
- [Teknisk skuld](locales/en-gb-oxendict/topics/technical-debt/) — kapital, ränta och kronisk sjukdomsekonomi för kodbaser
- [Total ägandekostnad (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — underhåll är 50–80 %; det naiva läkemedelsprisfelet i mjukvara
- [Molnets enhetsekonomi (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — kostnad per producerad enhet; den digitala tjänstens referenskostnad
- [Exakt centfördelning av kostnader](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — största rest-metoden; att dela en total så att delarna summerar exakt tillbaka
- [Valutasäker kostnadsaggregering](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — exakt decimal `Money`, inte `f64`, för totaler som måste stämma på öret
- [Bygga kontra köpa](locales/en-gb-oxendict/topics/build-vs-buy/) — riskjusterad jämförelse med fördröjningstermen prissatt
- [Nyttorealisering](locales/en-gb-oxendict/topics/benefits-realization/) — att granska att prognostiserade nyttor faktiskt inträffade
- [GDS-tjänstemått](locales/en-gb-oxendict/topics/gds-service-metrics/) — kostnad per transaktion, nöjdhet, fullföljande, upptagning

## AI-acceleration

- [AI-utvecklarproduktivitet](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT kontra METR RCT; effekt kontra effektivitet
- [Avkastning på AI-investering](locales/en-gb-oxendict/topics/ai-return-on-investment/) — 95-procent-ingen-avkastning-fyndet och vad de 5 procenten gjorde annorlunda
- [Inferensens enhetsekonomi](locales/en-gb-oxendict/topics/inference-unit-economics/) — kostnad per token, och modellering av oupphörlig prisnedgång
- [AI-kvalitetsmått](locales/en-gb-oxendict/topics/ai-quality-metrics/) — hallucinationsfrekvenser som skadefrekvenser med ett pris
- [Klinisk AI-utvärdering](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensitivitet, specificitet, AUROC, och varför prevalens styr ekonomin
- [AI-regulatorisk utvärdering](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA SaMD, PCCP och ekonomin i modelluppdateringar

## Konsumenthälsoappar och -enheter

- [Engagemangsmått](locales/en-gb-oxendict/topics/engagement-metrics/) — engagemang som klinisk dos
- [Retention och avhopp](locales/en-gb-oxendict/topics/retention-and-churn/) — avnötningslagen; retentionskurvor som behandlingsfönster
- [Aktivering och upptagning](locales/en-gb-oxendict/topics/activation-and-uptake/) — värdetrattens främre portar
- [Följsamhet och uthållighet](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, effektivt engagemang, minsta effektiva dos
- [Patientrapporterade utfall](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM och MCID-ärlighetsribban
- [Digitala slutpunkter och biomarkörer](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — från sensortelemetri till evidens av regulatorisk kvalitet
- [Validering av bärbara enheter](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, överensstämmelsestatistik, bärtid, fullständighet
- [Ekonomi för fjärrpatientövervakning](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT-kodstaplar och sjukhus-i-hemmet-substitution
- [Hälsoappens enhetsekonomi](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM och ROI kontra VOI
- [Räckvidd och rättvisa](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; befolkningspåverkan = räckvidd × effektivitet
- [Koncentrationsindex](locales/en-gb-oxendict/topics/concentration-index/) — ett formellt statistiskt mått på socioekonomiskt betingad hälsoojämlikhet

## Riktmärkenas aktualitet

Många citerade siffror uppdateras årligen (NHS:s enhetskostnader, betalningsschemans priser, DORA-kluster, DiGA-antal, LLM-priser). Varje dokument daterar sina riktmärken direkt i texten; verifiera igen innan du använder en siffra i ett verkligt business case.

## Claude Skills

Det här arkivet innehåller två [Claude Skills](https://code.claude.com/docs/en/skills) — lägg endera i ett projekts `.claude/skills/` (eller peka Claude mot det här arkivets `skills/`) för att sätta den här boken i arbete direkt inuti en agentisk kodningssession:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — för allmänt bruk: att förklara ett begrepp, beräkna ett mått utifrån dina egna siffror, eller sätta samman ett flermåttsaffärscase, grundat i den här bokens formler, genomarbetade exempel och fallgropar snarare än allmän kunskap.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — för underhållare av det här arkivet: mallen per ämne, README-indexeringskonventioner, och en checklista för länk-/synkroniseringsvalidering för att lägga till eller redigera ämnen.
