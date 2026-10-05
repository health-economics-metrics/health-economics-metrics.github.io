# Metriche di Economia Sanitaria

Un'introduzione completa alla matematica, agli esempi e al ragionamento dell'economia sanitaria, scritta per gli ingegneri del software che sviluppano per i servizi sanitari nazionali di tutto il mondo. Ogni file tratta una metrica o un concetto: definizione, perché è importante, la matematica, un esempio risolto, il collegamento con l'ingegneria del software, le insidie e le fonti.

Sei nuovo qui? Inizia con [costo opportunità](locales/en-gb-oxendict/topics/opportunity-cost/), [anno di vita corretto per la qualità](locales/en-gb-oxendict/topics/quality-adjusted-life-year/), e [costo del ritardo](locales/en-gb-oxendict/topics/cost-of-delay/) — le tre idee su cui si basa tutto il resto.

## Fondamenti del ragionamento economico

- [Costo opportunità](locales/en-gb-oxendict/topics/opportunity-cost/) — il valore della migliore alternativa sacrificata; perché i budget fissi rendono ogni scelta uno spostamento
- [Attualizzazione e preferenza temporale](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — valori attuali, il tasso del 3,5% del Green Book/NICE
- [Prospettiva di analisi](locales/en-gb-oxendict/topics/analysis-perspective/) — pagatore vs fornitore vs società: i costi di chi contano
- [Orizzonte temporale](locales/en-gb-oxendict/topics/time-horizon/) — per quanto tempo contare costi ed effetti, e la manipolazione dell'orizzonte
- [Costo marginale vs medio](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — perché liberare un letto non ne risparmia il costo medio
- [Risparmi che liberano cassa vs non liberano cassa](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — il test di onestà per ogni affermazione di "tempo risparmiato"
- [Analisi di sensibilità](locales/en-gb-oxendict/topics/sensitivity-analysis/) — diagrammi a tornado; quale ipotesi sostiene il tuo caso
- [Analisi di sensibilità probabilistica](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC, probabilità di avere ragione
- [Valore atteso dell'informazione perfetta](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — dare un prezzo al pilota prima di eseguirlo
- [Valore Atteso dell'Informazione Campionaria (EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — prezzare uno *specifico* studio proposto, non l'eliminazione di ogni incertezza
- [Valutazione delle Opzioni Reali](locales/en-gb-oxendict/topics/real-options-valuation/) — prezzare l'opzione di espandere in seguito un progetto a fasi, anziché l'opzione di raccogliere prima informazione
- [Approccio del Capitale Umano vs Metodo dei Costi di Attrito](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — due modi di valutare la produttività perduta, una differenza di 2x+ nel costo riportato
- [Dominanza e frontiera di efficienza](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — eliminare le opzioni che nessuno dovrebbe scegliere

## Misure di esito

- [Anno di vita corretto per la qualità (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — la valuta comune del valore sanitario
- [Anno di vita corretto per la disabilità (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — lo specchio dal lato del carico; la metrica della salute globale
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — lo strumento dietro la maggior parte dei pesi di utilità QALY
- [Elicitazione dell'Utilità con il Time Trade-Off (TTO)](locales/en-gb-oxendict/topics/time-trade-off-utility/) — come un peso di utilità viene effettivamente ricavato da un rispondente
- [Rapporto costo-efficacia incrementale (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — costo extra per unità extra di salute
- [Soglie di disponibilità a pagare](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE £20–30k/QALY e le altre soglie nel mondo
- [Valore di una Vita Statistica (VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — l'alternativa del mercato del lavoro alla valutazione basata su soglia
- [Beneficio monetario netto (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — valore meno costo, fatto correttamente
- [Anni di vita guadagnati](locales/en-gb-oxendict/topics/life-years-gained/) — la matematica della sopravvivenza, e la variante di equità evLYG
- [Aspettativa di vita corretta per la salute (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — contabilità degli anni sani a livello di popolazione
- [Deficit di QALY e modificatori di gravità](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — perché i QALY delle popolazioni più malate contano di più
- [Work Productivity and Activity Impairment (WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — assenteismo vs presenzialismo, la metà nascosta del costo

## Tipi di analisi economica

- [Analisi costo-efficacia (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — costo per unità naturale di esito
- [Analisi costo-utilità (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — costo per QALY; confronto tra interventi dissimili
- [Analisi costi-benefici (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — tutto in denaro; VAN del Green Book
- [Analisi di minimizzazione dei costi (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — l'opzione più economica, dopo aver dimostrato l'equivalenza
- [Analisi costi-conseguenze (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — la tabella disaggregata; la preferenza di NICE per la salute digitale
- [Analisi dell'impatto sul bilancio (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — sostenibilità economica, distinta dal valore
- [Ritorno sull'investimento (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — la metrica condivisa, con parametri dichiarati
- [Ritorno sociale sull'investimento (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — monetizzare ciò che i mercati non valutano
- [Confronto dell'ICER tra Valute Diverse](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPA vs cambio di mercato; la scelta di conversione che può ribaltare una decisione di adozione

## Economia operativa del sistema sanitario

- [Giorni di degenza risparmiati](locales/en-gb-oxendict/topics/bed-days-saved/) — il beneficio principale, e le sue trappole di valutazione
- [Durata della degenza](locales/en-gb-oxendict/topics/length-of-stay/) — il tempo di ciclo dell'ospedale
- [Tasso di riammissione](locales/en-gb-oxendict/topics/readmission-rate/) — il tasso di fallimento del cambiamento del sistema sanitario
- [Tasso di mancata presentazione (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — appuntamenti mancati; la metrica di spreco più pura
- [Prevenzione degli accessi al pronto soccorso](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — economia dell'intervento a monte
- [Tariffa nazionale e costi unitari](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — il tariffario NHS e l'infrastruttura dei costi
- [Rinvio al trattamento (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — lo standard delle 18 settimane come metrica del tempo di attesa
- [Impatto della lista d'attesa](locales/en-gb-oxendict/topics/waiting-list-impact/) — convertire le ore risparmiate in pazienti visitati
- [Tempo del professionista](locales/en-gb-oxendict/topics/practitioner-time/) — valutare la capacità del collo di bottiglia, non i salari
- [Fidelizzazione della forza lavoro](locales/en-gb-oxendict/topics/workforce-retention/) — costi di turnover ed economia del burnout
- [Costi di outsourcing evitabili](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — rimpatriare lavoro a tariffa premium
- [Ottimizzazione delle risorse a valle](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — sbloccare il ruolo che tutti aspettano
- [Intervento precoce](locales/en-gb-oxendict/topics/earlier-intervention/) — l'economia del trattamento prima della progressione
- [Capacità generatrice di valore (svolta operativa)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — coniare capacità senza assumere
- [Risparmi rigidi che liberano cassa (difesa del deficit)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — eliminare le voci di bilancio; la metrica del CFO

## Framework HTA ed economia della prevenzione

- [Valutazione delle tecnologie sanitarie (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (USA), CADTH: chi decide cosa vale la pena acquistare
- [Simulazione di Coorte di Markov](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — come un modello HTA multi-ciclo viene realmente simulato coorte per coorte, ciclo per ciclo
- [Framework degli standard di evidenza NICE](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — requisiti di evidenza a livelli di rischio per la salute digitale
- [Corsia preferenziale DiGA della Germania](locales/en-gb-oxendict/topics/diga-fast-track/) — app su prescrizione; iscrizione provvisoria con scadenza per le evidenze
- [Numero necessario da trattare (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — unità di sforzo per beneficio che mantengono oneste le affermazioni
- [Frazione Attribuibile di Popolazione (PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — quanto carico di malattia valga davvero la pena inseguire in un fattore di rischio
- [Economia della prevenzione](locales/en-gb-oxendict/topics/prevention-economics/) — perché la prevenzione è economicamente efficace ma raramente fa risparmiare
- [Economia dello screening](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, il crollo del PPV a bassa prevalenza, l'affaticamento da allerta
- [Numero Necessario da Sottoporre a Screening (NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — l'analogo a livello di programma di screening dell'NNT
- [Costi a valle evitati](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — compensazioni di costo e le regole che le rendono credibili
- [Analisi Decisionale Multicriterio (MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — punteggio ponderato quando una singola soglia non basta
- [Impronta di Carbonio per QALY](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — l'impegno net zero dell'NHS incontra il costo per QALY

## Ingegneria del software e distribuzione digitale

- [Costo del ritardo](locales/en-gb-oxendict/topics/cost-of-delay/) — £/settimana o QALY/settimana di non consegna; la metrica ponte principale
- [Metriche DORA](locales/en-gb-oxendict/topics/dora-metrics/) — prestazioni di consegna, tradotte in termini di economia sanitaria
- [Metriche di flusso](locales/en-gb-oxendict/topics/flow-metrics/) — Legge di Little, WIP, efficienza del flusso; la matematica della coda condivisa da ospedali e pipeline
- [WSJF e CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — priorità per densità di valore; il backlog come tabella lega QALY
- [SPACE e DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — produttività multidimensionale; la lezione EQ-5D per le metriche di ingegneria
- [Debito tecnico](locales/en-gb-oxendict/topics/technical-debt/) — capitale, interessi, ed economia delle malattie croniche per le basi di codice
- [Costo totale di proprietà (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — la manutenzione è il 50–80%; l'errore ingenuo del prezzo dei farmaci nel software
- [Economia unitaria del cloud (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — costo per unità di output; il costo di riferimento del servizio digitale
- [Allocazione dei Costi al Centesimo Esatto](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — il metodo del resto maggiore; dividere un totale in modo che le parti sommino esattamente
- [Aggregazione dei Costi Sicura per le Valute](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — `Money` decimale esatto, non `f64`, per totali che devono quadrare al centesimo
- [Costruire vs comprare](locales/en-gb-oxendict/topics/build-vs-buy/) — confronto aggiustato per il rischio con il termine di ritardo prezzato
- [Realizzazione dei benefici](locales/en-gb-oxendict/topics/benefits-realization/) — verificare che i benefici previsti si siano effettivamente realizzati
- [Metriche di servizio GDS](locales/en-gb-oxendict/topics/gds-service-metrics/) — costo per transazione, soddisfazione, completamento, adozione

## Accelerazione dell'IA

- [Produttività degli sviluppatori con l'IA](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT vs METR RCT; efficacia vs effettività
- [Ritorno sull'investimento dell'IA](locales/en-gb-oxendict/topics/ai-return-on-investment/) — la scoperta del 95%-nessun-ritorno e cosa ha fatto diversamente il 5%
- [Economia unitaria dell'inferenza](locales/en-gb-oxendict/topics/inference-unit-economics/) — costo per token, e la modellazione del calo di prezzo incessante
- [Metriche di qualità dell'IA](locales/en-gb-oxendict/topics/ai-quality-metrics/) — tassi di allucinazione come tassi di danno con un prezzo
- [Valutazione dell'IA clinica](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensibilità, specificità, AUROC, e perché la prevalenza governa l'economia
- [Valutazione normativa dell'IA](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA SaMD, PCCP, e l'economia degli aggiornamenti dei modelli

## App e dispositivi sanitari per i consumatori

- [Metriche di coinvolgimento](locales/en-gb-oxendict/topics/engagement-metrics/) — il coinvolgimento come dose clinica
- [Fidelizzazione e abbandono](locales/en-gb-oxendict/topics/retention-and-churn/) — la legge dell'attrito; le curve di fidelizzazione come finestre di trattamento
- [Attivazione e adozione](locales/en-gb-oxendict/topics/activation-and-uptake/) — le porte anteriori dell'imbuto di valore
- [Aderenza e persistenza](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, coinvolgimento efficace, dose minima efficace
- [Esiti riportati dai pazienti](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM, e la soglia di onestà MCID
- [Endpoint digitali e biomarcatori](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — dalla telemetria dei sensori all'evidenza di livello normativo
- [Validazione dei dispositivi indossabili](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, statistiche di accordo, tempo di utilizzo, completezza
- [Economia del monitoraggio remoto dei pazienti](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — pile di codici CPT e sostituzione dell'ospedale a domicilio
- [Economia unitaria delle app sanitarie](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM, e ROI vs VOI
- [Portata ed equità](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; impatto sulla popolazione = portata × efficacia
- [Indice di Concentrazione](locales/en-gb-oxendict/topics/concentration-index/) — una misura statistica formale della disuguaglianza di salute legata alla condizione socioeconomica

## Aggiornamento dei parametri di riferimento

Molte cifre citate vengono aggiornate annualmente (costi unitari NHS, prezzi degli schemi di pagamento, cluster DORA, conteggi DiGA, prezzi LLM). Ogni documento data i propri parametri di riferimento direttamente nel testo; verificare nuovamente prima dell'uso in un caso aziendale reale.

## Claude Skills

Questo repository include due [Claude Skills](https://code.claude.com/docs/en/skills) — inserisci una delle due nella cartella `.claude/skills/` di un progetto (o indirizza Claude verso la cartella `skills/` di questo repository) per utilizzare questo libro direttamente all'interno di una sessione di codifica agentica:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — per uso generale: spiegare un concetto, calcolare una metrica dai tuoi numeri, o costruire un caso aziendale multi-metrica, basato sulle formule, gli esempi risolti e le insidie di questo libro, piuttosto che sulla conoscenza generica.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — per i manutentori di questo repository: il modello per argomento, le convenzioni di indicizzazione del README, e una checklist di validazione dei link/sincronizzazione per aggiungere o modificare argomenti.
