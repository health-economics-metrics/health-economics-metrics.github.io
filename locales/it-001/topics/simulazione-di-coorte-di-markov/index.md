# Simulazione di Coorte di Markov

Un modello di coorte di Markov è la tecnica di modellazione HTA standard per interventi i cui effetti si dispiegano su più periodi di tempo (cicli) e non in un'unica soluzione. Una coorte ipotetica parte interamente in uno stato di salute e, a ogni ciclo, un insieme fisso di probabilità di transizione sposta frazioni della coorte tra gli stati; costi e QALY maturano a ogni ciclo in proporzione a quanta parte della coorte occupa ciascuno stato, e vengono attualizzati al valore attuale. Qualsiasi ingegnere del software che modelli un business case pluriennale di sanità digitale — in cui utenti o pazienti si spostano nel tempo tra stati come "coinvolto", "decaduto" o "abbandonato" — costruisce la stessa struttura.

## Perché è importante

La maggior parte delle decisioni reali sulle tecnologie sanitarie non sono confronti una tantum di costo ed esito di un singolo periodo. Una condizione cronica progredisce, recidiva, risponde al trattamento o uccide, nell'arco di anni — e un'[analisi costo-efficacia](../analisi-costo-efficacia/) a periodo singolo non può rappresentarlo. Le sottomissioni a NICE, ICER e CADTH per interventi su malattie croniche, valutate tramite la [valutazione delle tecnologie sanitarie](../valutazione-delle-tecnologie-sanitarie/), sono quasi sempre costruite come modelli di coorte di Markov con orizzonte temporale a vita, perché l'alternativa — modellare ogni possibile percorso individuale di paziente — è intrattabile su larga scala. Il modello di Markov a livello di coorte scambia un po' di realismo a livello individuale (non può facilmente rappresentare la memoria degli stati passati, da cui "Markov": il futuro dipende solo dallo stato corrente) con un modello trasparente, verificabile e abbastanza veloce da essere eseguito migliaia di volte in un'[analisi di sensibilità probabilistica](../analisi-di-sensibilità-probabilistica/).

## La matematica

```
Aggiornamento della coorte per un ciclo (vettore riga × matrice di transizione):
  nuovo_stato[j] = somma_i stato[i] * matrice_transizione[i][j]

Costo di un ciclo:
  costo_ciclo = somma_s stato[s] * costo_per_ciclo[s]

QALY di un ciclo:
  qaly_ciclo = somma_s stato[s] * utilità[s] * durata_ciclo_anni

Simulazione completa su `cicli` cicli, attualizzata al `tasso_sconto`:
  costo_attualizzato_totale = somma_{t=0}^{cicli-1} costo_ciclo(stato_t) / (1 + tasso_sconto)^t
  qaly_attualizzati_totali  = somma_{t=0}^{cicli-1} qaly_ciclo(stato_t)  / (1 + tasso_sconto)^t
  dove stato_0 = distribuzione_iniziale, stato_{t+1} = avanza_coorte(stato_t, matrice_transizione)
```

L'attualizzazione di ciascun ciclo al valore attuale usa esattamente la formula di [attualizzazione e preferenza temporale](../attualizzazione-e-preferenza-temporale/), applicata ciclo per ciclo anziché anno per anno.

## Esempio risolto

**Clinico**: un modello a 2 stati — `Sano` e `Morto` — in cui il 10% della coorte muore a ogni ciclo e `Morto` è assorbente (la sua probabilità di auto-transizione è 1,0; omettere quell'auto-anello farebbe svanire la massa della coorte dopo un ciclo in `Morto`). La coorte parte interamente `Sano`, costa £1.000 per ciclo mentre è `Sano` (£0 una volta `Morto`) e guadagna 0,8 QALY all'anno mentre è `Sano`. Simulato per 3 cicli annuali al tasso di sconto del 3,5% del NICE:

```
Ciclo 0: stato = [1,00, 0,00] (100% Sano)
  costo = £1.000,00, qaly = 0,800, fattore di sconto = 1,000000
  attualizzato: costo = £1.000,00, qaly = 0,8000

Ciclo 1: stato = [0,90, 0,10] (90% Sano, 10% Morto)
  costo = £900,00, qaly = 0,720, fattore di sconto = 0,966184
  attualizzato: costo = £869,57, qaly = 0,6957

Ciclo 2: stato = [0,81, 0,19] (81% Sano, 19% Morto)
  costo = £810,00, qaly = 0,648, fattore di sconto = 0,933511
  attualizzato: costo = £756,14, qaly = 0,6049

Costo attualizzato totale ≈ £2.625,71
QALY attualizzati totali  ≈ 2,1006
```

Lo stato di ogni ciclo è lo stato del ciclo precedente fatto passare attraverso la matrice di transizione — il 90% del 90% ancora `Sano` al ciclo 1 resta `Sano` al ciclo 2 (0,9 × 0,9 = 0,81), mentre l'altro 19% è ormai morto (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Si noti che la coorte non svuota mai del tutto `Sano`: con una mortalità costante del 10% per ciclo e nessun rientro, la frazione `Sano` decade geometricamente anziché raggiungere lo zero a qualsiasi numero finito di cicli.

## Collegamento con l'ingegneria del software

Per come un modello HTA multi-ciclo viene usato in una valutazione reale, si veda la [valutazione delle tecnologie sanitarie](../valutazione-delle-tecnologie-sanitarie/) — il caso di riferimento che stabilisce quale tasso di sconto, fonte di utilità e orizzonte temporale debba usare un modello di Markov presentato.

Un modello di coorte di Markov è strutturalmente una macchina a stati con transizioni probabilistiche, eseguita per un numero fisso di tick, attualizzando il valore di ciascun tick. La stessa forma simula le transizioni di retention/stato di una coorte di utenti nel tempo — si vedano le [metriche DORA](../metriche-dora/) per la versione di affidabilità operativa di "quale frazione del sistema è in stato degradato in questo periodo, e quanto costa". In concreto:

- **La modellazione di retention/churn** è un modello di coorte di Markov con stati come "attivo", "a rischio", "abbandonato": una matrice di transizione mensile fissa, eseguita per 12 o 24 cicli mensili, dice il numero atteso di utenti attivi (e i ricavi) in un qualsiasi mese futuro, nello stesso modo in cui `Sano`/`Morto` dice i sopravvissuti attesi.
- **Affidabilità ed economia degli incidenti**: gli stati di un sistema (sano, degradato, fermo) possono essere modellati allo stesso modo, con un "costo per ciclo" del danno da fermo che matura mentre il sistema occupa gli stati degradato/fermo — trasformando un argomento sulla frequenza degli incidenti in un argomento di costo attualizzato confrontabile col costo del lavoro di affidabilità che cambierebbe le probabilità di transizione.
- **Stati assorbenti come stati terminali**: `Morto` in un modello clinico è esattamente uno stato "abbonamento annullato" o "permanentemente offline" in un modello software — entrambi richiedono una probabilità di auto-transizione esplicita di 1,0, altrimenti la simulazione perde massa in silenzio.

## Insidie

- **Probabilità di transizione che non sommano a 1 per riga.** Una riga che somma più o meno di 1 fa "perdere" o "crescere" massa alla coorte a ogni ciclo in silenzio — controllare sempre le somme delle righe prima di fidarsi dell'output di un modello, poiché la struttura del modello di per sé non segnala l'errore.
- **Durata del ciclo troppo grossolana per la dinamica reale della malattia.** Un ciclo annuale per una condizione che cambia stato in modo significativo nel giro di settimane sottostima le transizioni che avvengono a metà ciclo; scegliere una durata del ciclo breve rispetto alla velocità con cui il processo modellato si muove davvero.
- **Dimenticare l'auto-anello di uno stato assorbente.** Uno stato assorbente (morte, interruzione permanente) richiede una probabilità di auto-transizione esattamente pari a 1,0. Se omessa, la massa della coorte in quello stato evapora dopo un solo ciclo, sottostimando costi cumulativi o perdita di QALY.
- **Considerare il modello validato perché gira.** Un modello di coorte di Markov con probabilità di transizione dall'aspetto plausibile può comunque essere strutturalmente sbagliato (stati mancanti, comportamento assorbente errato); validare rispetto a benchmark epidemiologici noti (ad es. se la sopravvivenza modellata a 5 anni coincide con le curve di sopravvivenza pubblicate) prima di fidarsi dell'output.

## Fonti

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
