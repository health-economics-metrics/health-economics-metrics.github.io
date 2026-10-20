# Produttività lavorativa e compromissione dell'attività (WPAI)

Il WPAI è un questionario di autovalutazione validato (Reilly, Zbrozek, Dasbach, 1993) che misura quanto un problema di salute influisca sul lavoro retribuito e sulle attività quotidiane, di solito negli ultimi 7 giorni. Scompone la perdita in *assenteismo* — tempo di lavoro letteralmente perso — e *presenzialismo* (presenteeism) — produttività ridotta pur essendo fisicamente al lavoro — e il secondo è di solito la componente di costo più grande e più nascosta.

## Perché è importante

I semplici conteggi dei giorni di malattia vedono solo l'assenteismo. Un clinico o un lavoratore della conoscenza che non prende mai un giorno di assenza ma lavora al 60% della capacità per via di una condizione cronica non contribuisce con nulla a un registro delle assenze eppure genera una perdita di produttività ampia e reale — il WPAI è progettato proprio per far emergere quel costo invisibile. Poiché è uno strumento validato e non un'indagine su misura, i suoi punteggi sono utilizzabili nei pacchetti di evidenza sugli [esiti riferiti dai pazienti](../esiti-riportati-dai-pazienti/) e negli studi di costo della malattia senza che il revisore debba rivalidare la misura. Come strumento di autovalutazione, è esso stesso una forma di PROM, che si distingue soprattutto per l'attenzione al lavoro e all'attività anziché ai sintomi o alla qualità della vita.

## La matematica

```
Assenteismo % = ore_perse_per_salute / (ore_perse_per_salute + ore_lavorate) × 100

Presenzialismo %  = menomazione autovalutata 0–10 mentre si lavora, × 10
                    (ricavata direttamente dal questionario, non derivata qui)

Menomazione lavorativa complessiva % =
    Assenteismo% + (1 − Assenteismo%/100) × Presenzialismo%
    (combina i due in modo che il totale non possa mai superare il 100%)

Costo di produttività = Menomazione_lavorativa_complessiva% / 100 × guadagni_del_periodo
```

La formula della menomazione complessiva non è volutamente una semplice somma: sommare direttamente le due percentuali potrebbe superare il 100%, quindi il presenzialismo si applica solo alla quota *rimanente* (non assente) del tempo di lavoro.

## Esempio risolto

Un dipendente con emicrania è programmato per una settimana di 40 ore ma ne perde 4:

```
ore_perse = 4, ore_lavorate = 36
Assenteismo% = 4 / (4 + 36) × 100 = 10%
```

Separatamente autovaluta il proprio impatto sulla produttività mentre lavora come 3 su 10 nel questionario WPAI, cioè `Presenzialismo% = 30%` (questo passaggio è una risposta grezza al questionario, non qualcosa derivato da altri numeri):

```
Menomazione lavorativa complessiva% = 10 + (1 − 10/100) × 30
                                    = 10 + 0,9 × 30
                                    = 10 + 27
                                    = 37%
```

Su una settimana di 5 giorni con guadagni di £800 (£160/giorno):

```
Costo di produttività = 37/100 × 800 = £296
```

Si noti che un ingenuo conteggio dei giorni di malattia avrebbe registrato solo le 4 ore (10%) perse — la componente di presenzialismo quasi triplica la menomazione reale una volta conteggiata.

## Collegamento con l'ingegneria del software

Si traduce direttamente nelle metriche di salute dei team di ingegneria:

- **L'assenteismo** è il congedo per malattia e le ferie — visibile, già tracciato e la parte facile.
- **Il presenzialismo** è l'ingegnere esaurito o sovraccarico per i cambi di contesto che è presente a ogni stand-up pur operando a capacità ridotta — di solito il costo più grande e più nascosto, invisibile ai dati di organico o di presenza. Emerge invece come minor throughput nelle [DORA](../metriche-dora/) e nelle [metriche di flusso](../metriche-di-flusso/), o come risoluzione più lenta del [debito tecnico](../debito-tecnico/) il cui "interesse" aggrava ulteriormente la menomazione.
- La lezione ingegneristica è la stessa di quella clinica: misurare solo l'assenza e chiamarla "perdita di produttività" sottostima sistematicamente il costo reale, perché trascura tutti coloro che sono presenti ma menomati.

## Insidie

- **Distorsione da richiamo nell'autovalutazione.** Una finestra di richiamo di 7 giorni è soggetta alle stesse distorsioni di segnalazione di qualsiasi autovalutazione retrospettiva.
- **Trattare la scala di presenzialismo 0–10 come una vera misurazione fisica.** È ordinale, ricavata per autovalutazione, non una grandezza fisica validata — trattare le differenze su di essa come strettamente lineari o a intervalli è una comodità di modellazione, non un fatto fisico validato.
- **Aggregare i punteggi tra varianti del WPAI.** Il WPAI ha diverse versioni specifiche per condizione — WPAI:GH (salute generale), WPAI:SHP (problema di salute specifico) e varianti specifiche per malattia — e i punteggi di varianti diverse non vanno aggregati o confrontati senza prima verificare che siano la stessa versione dello strumento.

## Fonti

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Documentazione dello strumento WPAI, Reilly Associates — il riferimento ufficiale per il punteggio. <https://www.reillyassociates.net/>
