# Analisi Decisionale Multicriterio (MCDA)

L'analisi decisionale multicriterio (MCDA) è un modello di punteggio a somma ponderata usato nella valutazione delle tecnologie sanitarie quando una singola soglia ICER/disponibilità a pagare non coglie tutto ciò che sta a cuore a un decisore: equità, bisogno non soddisfatto, innovazione, impatto sul budget, gravità della malattia. A ogni criterio si assegna un peso che riflette la sua importanza (ricavato dai portatori di interesse, pesi che sommano a 1), a ogni opzione si assegna un punteggio normalizzato per criterio (tipicamente 0–1) e il punteggio complessivo è la somma ponderata — la stessa forma matematica di una scheda di valutazione per la scelta di un fornitore software.

## Perché è importante

La MCDA è usata in framework come EVIDEM e da alcuni organismi HTA per le valutazioni di farmaci orfani/malattie rare, dove un rigido approccio a soglia di costo per QALY è considerato troppo stretto per cogliere tutto ciò che conta in una decisione. L'ISPOR MCDA Emerging Good Practices Task Force ha formalizzato linee guida di buona pratica per ricavare pesi e punteggi in modo difendibile, proprio perché una decisione ponderata in modo informale è facile da costruire e facile da manipolare. Quando una tecnologia sanitaria ha davvero dimensioni di valore che una singola [soglia di disponibilità a pagare](../soglie-di-disponibilità-a-pagare/) non può rappresentare — gravità, innovazione, equità — la MCDA offre ai decisori una struttura esplicita e verificabile per combinarle, anziché un giudizio non dichiarato.

## La matematica

```
Punteggio MCDA = Σ_i (peso_i × punteggio_i)

i pesi dovrebbero sommare a 1 (ricavati con metodi di coinvolgimento degli
stakeholder come lo swing weighting o l'Analytic Hierarchy Process)
```

## Esempio risolto

Un comitato HTA valuta una terapia digitale su quattro criteri:

```
Criterio                           Peso     Punteggio  Peso × Punteggio
Beneficio clinico                  0,4      0,8        0,32
Impatto sui costi                  0,3      0,5        0,15
Gravità della malattia / bisogno non soddisfatto 0,2  0,9   0,18
Innovazione                        0,1      0,6        0,06
                                    ─────               ─────
                                    1,0                 0,71
```

I pesi sommano a 1,0 (0,4 + 0,3 + 0,2 + 0,1) e il punteggio MCDA è 0,71 (0,32 + 0,15 + 0,18 + 0,06). Il comitato confronta 0,71 con una soglia concordata in anticipo, oppure lo classifica rispetto a tecnologie concorrenti valutate allo stesso modo.

## Collegamento con l'ingegneria del software

È esattamente la stessa matematica di una scheda di valutazione ponderata dei fornitori, di una matrice di valutazione di una RFP o di un modello di punteggio per la prioritizzazione delle funzionalità — si veda [costruire vs comprare](../costruire-vs-comprare/), un classico caso d'uso di scheda ponderata negli acquisti software. Vale anche la pena contrapporla a [WSJF e CD3](../wsjf-e-cd3/): WSJF/CD3 è un metodo di prioritizzazione basato su un *rapporto* (costo del ritardo diviso dimensione o durata del lavoro), mentre la MCDA è una *somma* ponderata. MCDA e WSJF/CD3 sono due risposte strutturalmente diverse a "come classifichiamo opzioni concorrenti", e sapere quale delle due richieda davvero una data decisione — valore additivo su criteri indipendenti, oppure densità di valore per unità di capacità scarsa — conta più di quale formula appaia più rigorosa.

## Insidie

- **Distorsione nella determinazione dei pesi**: chi fissa i pesi predetermina di fatto la classifica, così una "formula" può ripulire una decisione politica o commerciale facendola passare per calcolo oggettivo. Documentare chi ha fissato i pesi e come.
- **Doppio conteggio di un criterio già colto altrove**: valutare la "costo-efficacia" come un criterio *e anche* separatamente l'"impatto sui costi" sovrappesa il denaro rispetto agli altri criteri senza che nessuno lo intenda.
- **Falsa precisione**: un punteggio ponderato a due decimali (0,71) implica più rigore di quanto le valutazioni sottostanti degli stakeholder su scala 0–10 sostengano davvero, e la variabilità tra valutatori in quelle valutazioni spesso non viene riportata affatto.

## Fonti

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
