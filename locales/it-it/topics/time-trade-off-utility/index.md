# Elicitazione dell'Utilità con il Time Trade-Off (TTO)

Il TTO è un metodo standard per ricavare il valore di utilità di uno stato di salute direttamente da un rispondente, anziché inventarne uno. È uno dei metodi di elicitazione — insieme allo standard gamble e agli esperimenti a scelta discreta — che producono i set di valori alla base di strumenti come l'[EQ-5D](../eq-5d/), e quindi alla base della maggior parte dei successivi calcoli dei [QALY](../quality-adjusted-life-year/).

## Perché è importante

Ogni peso di utilità che alimenta un calcolo dei QALY doveva venire da qualche parte. Il TTO è il come: per uno stato ritenuto migliore della morte, si chiede a un rispondente quanti anni `X` in piena salute considererebbe equivalenti a `T` anni nello stato menomato (`X < T`); l'utilità è `X / T`. Per uno stato che alcuni rispondenti considerano peggiore della morte, la formula standard cade (non può rappresentare in modo pulito utilità sotto lo zero), quindi si applica un TTO esteso. Un ingegnere del software o un analista che tratta un peso di utilità come un input dato, senza sapere che ha richiesto un protocollo di elicitazione validato per essere prodotto, è a un passo da un numero che non può difendere se contestato.

## La matematica

```
TTO standard (stato migliore della morte):
  utilità = tempo_in_piena_salute / tempo_nello_stato_menomato

TTO esteso (stato peggiore della morte):
  utilità = -tempo_scambiato_per_la_morte / (durata_totale - tempo_scambiato_per_la_morte)
```

`tempo_in_piena_salute` / `tempo_nello_stato_menomato` — anni `X` in piena salute giudicati equivalenti a `T` anni nello stato menomato. `tempo_scambiato_per_la_morte` / `durata_totale` — nella formulazione peggio-della-morte, anni `a` di una vita residua di `T` anni che il rispondente scambierebbe con la morte immediata, preferendo `T − a` anni in piena salute seguiti dalla morte a `T` anni nello stato peggiore della morte. Il risultato è negativo, ancorato in modo che morte = 0.

## Esempio risolto

**Standard**: un rispondente è in uno stato menomato per 10 anni ed è indifferente rispetto a 7 anni in piena salute: utilità = 7 / 10 = **0,7**.

**Peggiore della morte**: su una vita residua di 10 anni, il rispondente scambierebbe 2 anni con la morte immediata — preferisce 8 anni in piena salute seguiti dalla morte a 10 anni nello stato peggiore della morte: utilità = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Collegamento con l'ingegneria del software

Lo stesso punto in cui incappa un sondaggio DevEx o di engagement quando chiede alle persone di valutare qualcosa su una scala 0–10 non esaminata vale qui a rovescio: il TTO esiste proprio perché "basta chiedere alle persone di valutarlo" non è di per sé un metodo di elicitazione validato. Prima di costruire un indice composito — un punteggio DevEx, un indice di engagement, una scala di burnout — sopra un numero autovalutato, ci si chiede cosa lo abbia ricavato e se quel metodo fosse validato, la stessa domanda che gli economisti sanitari pongono a un peso di utilità prima che entri in un QALY.

## Insidie

- **Generalizzazione del valore individuale**: i valori TTO sono ricavati da un *campione* della popolazione generale (o di pazienti), non dall'individuo di cui si decide la cura — usare il valore TTO di un singolo rispondente come se si generalizzasse è un errore di campionamento.
- **Formulazione sbagliata per lo stato**: la formula TTO standard presuppone che lo stato sia inequivocabilmente migliore della morte; applicarla a uno stato che alcuni rispondenti considererebbero peggiore della morte, senza passare alla formulazione estesa, produce in silenzio un'utilità errata (positiva).
- **Durate non confrontabili**: i valori TTO ricavati usando diverse durate di vita residua `T` per il confronto peggiore-della-morte non sono direttamente confrontabili senza verificare che il disegno dello studio abbia tenuto `T` costante.

## Fonti

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
