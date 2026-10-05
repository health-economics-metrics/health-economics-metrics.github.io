# Allocazione dei Costi al Centesimo Esatto

Suddividere un importo totale — una sovvenzione condivisa, una fattura di infrastruttura, una cifra di impatto sul budget — tra più destinatari con una naïve aritmetica percentuale produce regolarmente parti che non sommano al totale originale. L'allocazione al centesimo esatto è la soluzione: un metodo a interi/decimali, che lavora nelle unità minime della valuta (centesimi), e garantisce che le parti sommino *esattamente* all'intero, per quanto ineguale sia la divisione. Qualsiasi ingegnere del software che debba far quadrare al centesimo un totale suddiviso — paghe, erogazione di sovvenzioni, riaddebito di servizi condivisi — ha bisogno di questo pattern, non di percentuali in virgola mobile.

## Perché è importante

È un pattern fondamentale e con un nome nell'ingegneria del software aziendale: *Patterns of Enterprise Application Architecture* di Martin Fowler (2002) documenta `Money` e `Allocate` proprio perché "dividi $100 in tre" è un problema che il codice ingenuo sbaglia di continuo, e lo sbaglia in silenzio — l'errore emerge solo quando qualcuno riconcilia i libri e trova le parti un centesimo sotto (o sopra) il totale. Nel lavoro di health economics e di finanza dell'NHS non è accademico: i totali di impatto sul budget vengono suddivisi tra sedi, anni o direzioni; i costi condivisi di infrastruttura e licenze vengono ripartiti tra i reparti per numero di dipendenti o quota di attività. Ognuna di queste suddivisioni deve quadrare esattamente, perché un direttore finanziario a cui vengono consegnate parti che non sommano al totale smette di fidarsi dell'intero modello.

## La matematica

```
Metodo ingenuo (errato):
  parte_i = arrotonda(totale × quota_i / Σ quote)     — arrotonda ogni parte indipendentemente

Metodo esatto (resto maggiore / "largest remainder allocation"):
  1. base_i = floor(totale_unità_minime × quota_i / Σ quote)   — solo unità minime intere (centesimi)
  2. resto = totale_unità_minime − Σ base_i                     — centesimi avanzati, sempre < numero di destinatari
  3. distribuire 1 unità minima in più a ciascuno dei `resto` destinatari con il
     maggior resto frazionario del passo 1, finché l'avanzo è esaurito

Risultato: Σ parte_i == totale, sempre, per costruzione.
```

Il metodo esatto non arrotonda mai una parte isolatamente — arrotonda *l'intera allocazione* come un'unica operazione, ed è questo che fa valere l'invariante della somma.

## Esempio risolto

Dividere $100,00 in tre parti uguali (`quote = [1, 1, 1]`).

Metodo ingenuo: $100,00 ÷ 3 = $33,333…, arrotondato indipendentemente al centesimo più vicino dà $33,33 a ciascun destinatario. Sommato: $33,33 × 3 = $99,99 — un centesimo è sparito, e nessuna singola voce è così "sbagliata" da notarla a occhio.

Metodo esatto: `base` = $33,33 per tutti e tre (9.999 unità minime in totale da `floor(10.000 / 3) = 3.333` centesimi ciascuno), lasciando un resto di 1 centesimo (10.000 − 9.999). Quel singolo centesimo avanzato va al destinatario con il maggior resto frazionario nella divisione — quale esattamente è un dettaglio interno dello spareggio, non qualcosa su cui un chiamante debba fare affidamento. Due destinatari finiscono con $33,33 e uno con $33,34, e le tre parti sommano esattamente a $100,00.

È esattamente l'aritmetica di cui un'[analisi di impatto sul budget](../budget-impact-analysis/) ha bisogno ogni volta che una cifra totale di impatto sul budget deve essere suddivisa tra sedi, coorti o esercizi finanziari e riconciliata con il totale pubblicato — si veda l'[aggregazione dei costi sicura per le valute](../currency-safe-cost-rollup/) per il problema complementare di sommare molte di tali voci senza deriva.

## Collegamento con l'ingegneria del software

È letteralmente "il pattern Money" dell'architettura del software aziendale — un pattern fondamentale e con un nome per esattamente questa classe di bug, non un trucco isolato. Veri fallimenti di riconciliazione finanziaria sono finiti in produzione proprio per questa classe di bug: suddivisioni percentuali calcolate in `f64`, arrotondate per destinatario e mai verificate rispetto al totale originale. Si collega direttamente al modulo [costo totale di proprietà](../total-cost-of-ownership/) di questo repository, che attualmente somma costi in virgola mobile semplice su anni e opzioni — la stessa disciplina di esattezza si applica ogni volta che un totale di TCO o di impatto sul budget deve essere ripartito e non semplicemente sommato.

## Insidie

- **Percentuale-poi-arrotonda invece del resto maggiore**: allocare con percentuali in virgola mobile e arrotondare ciascun destinatario indipendentemente, il che aggrava l'errore di arrotondamento e raramente somma al totale, soprattutto con molti destinatari.
- **Ignorare gli esponenti dell'unità minima delle valute**: presumere che ogni valuta abbia 2 cifre decimali — lo yen giapponese ne ha 0, alcune valute ne hanno 3 — una suddivisione percentuale fatta a mano di solito fissa 2 nel codice e si rompe in silenzio per le altre valute; una routine di allocazione esatta legge l'esponente dalla valuta stessa (ISO 4217).
- **Riallocare un resto già allocato**: eseguire di nuovo la routine di allocazione su ciò che resta da un'allocazione precedente, senza controlli di idempotenza, il che può accreditare due volte lo stesso centesimo allo stesso destinatario.

## Fonti

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — i pattern `Money` e `Allocate`.
- ISO 4217 — standard dei codici di valute e fondi, che definisce l'esponente dell'unità minima di ciascuna valuta.
