# Aggregazione dei Costi Sicura per le Valute

Sommare molte voci monetarie — fatture mensili, costi per sede, cifre pluriennali di impatto sul budget — con normali numeri binari a virgola mobile (`f64`) accumula piccoli errori di rappresentazione, perché la maggior parte delle frazioni decimali ($1.234,56, per esempio) non è rappresentabile esattamente in virgola mobile binaria. Ogni singolo errore è minuscolo, ma un modello ampio che somma centinaia o migliaia di voci su diversi anni può derivare di frazioni di centesimo — e la deriva dipende dall'*ordine* in cui avvengono le addizioni, il che la rende non riproducibile. Un'aggregazione valutaria svolta in aritmetica decimale esatta (o a unità minima intera) somma esattamente, in linea con il modo in cui i sistemi contabili e la partita doppia devono quadrare al centesimo.

## Perché è importante

È una classe di bug del software ben documentata e fondamentale: l'articolo di Goldberg del 1991 su ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", è il riferimento standard sul perché la virgola mobile binaria non può rappresentare esattamente la maggior parte dei valori monetari decimali e sul perché sommarne molti ne aggrava l'errore. I modelli di health economics e di finanza dell'NHS sommano abitualmente molti anni e molte categorie di costo — il [costo totale di proprietà](../total-cost-of-ownership/) e l'[analisi di impatto sul budget](../budget-impact-analysis/) aggregano entrambi un gran numero di voci di costo `f64` su orizzonti pluriennali. Quando un modello deve quadrare al centesimo — una revisione che ricalcola il totale a mano deve ottenere la cifra *identica* — l'aritmetica stessa deve essere decimale esatta, non a virgola mobile.

## La matematica

```
Aggregazione ingenua:         totale = Σ f64(voce_i)         — deriva dipendente dall'ordine
Aggregazione sicura (valuta): totale = Σ Decimal(voce_i)      — esatta, riproducibile

Applicazione di un aggiustamento percentuale (es. un cuscinetto di contingenza):
  aggiustato = totale × moltiplicatore       — risultato Decimal esatto, può avere
                                                più cifre decimali dell'esponente
                                                dell'unità minima della valuta
  arrotondato = arrotonda(aggiustato, esponente_valuta, regola_arrotondamento)  — la regola
                                                di arrotondamento (half-up vs.
                                                half-even/arrotondamento del banchiere)
                                                va dichiarata esplicitamente
```

Si noti la disciplina in due passaggi: moltiplicare un importo `Decimal` esatto per un moltiplicatore può produrre più cifre decimali di quelle effettivamente usate dalla valuta (tre cifre decimali da un importo a due cifre per un moltiplicatore a due cifre, per esempio) — quella precisione intermedia *non* viene arrotondata via automaticamente; solo un passaggio di arrotondamento esplicito, con una regola dichiarata, la porta all'esponente reale dell'unità minima della valuta.

## Esempio risolto

Dodici fatture mensili identiche di $1.234,56 ciascuna, sommate in aritmetica decimale esatta: $1.234,56 × 12 = **$14.814,72**, esattamente. Lo si confronti con la somma del letterale `f64` `1234.56` dodici volte in doppia precisione IEEE-754, che può derivare di frazioni di centesimo a seconda dell'ordine di somma — una classe di bug reale e documentata, non un problema per un modello costruito su aritmetica `Money` decimale esatta.

Si applichi ora un tipico cuscinetto di contingenza dell'impatto sul budget del 5% (moltiplicatore 1,05) a quel totale di $14.814,72: $14.814,72 × 1,05 = $15.555,456 — tre cifre decimali, perché la moltiplicazione è esatta e non viene arrotondata automaticamente alle due cifre decimali della valuta. Arrotondandolo esplicitamente a 2 cifre decimali con l'arrotondamento del banchiere (half-even) si ottiene esattamente **$15.555,46**.

## Collegamento con l'ingegneria del software

È la lezione diretta e fondamentale dietro "il software finanziario usa `Decimal`, non `float`" — si collega esplicitamente ai moduli [costo totale di proprietà](../total-cost-of-ownership/) e [analisi di impatto sul budget](../budget-impact-analysis/) di questo repository, che attualmente sommano entrambi costi in virgola mobile semplice; l'argomento di correttezza non richiede di migrare subito quei modelli, ma afferma con precisione *quando* un sistema deve quadrare al centesimo e quindi non deve usare la virgola mobile binaria per la propria aritmetica monetaria. Si veda anche l'[allocazione dei costi al centesimo esatto](../exact-cents-cost-allocation/) per il problema complementare di suddividere (anziché sommare) i totali senza perdere centesimi.

## Insidie

- **Convertire in `float` a metà catena**: estrarre un valore monetario in un numero in virgola mobile a metà di un calcolo (alcune librerie `Money` danno perfino al metodo di conversione un nome tipo "lossy" come avvertimento esplicito) scarta silenziosamente la garanzia di esattezza per ogni calcolo a valle di quel punto.
- **"Decimal è troppo lento per prendersi il disturbo"**: liquidare l'aritmetica decimale esatta come un inutile sovraccarico quando, per la rendicontazione finanziaria, contano correttezza e verificabilità — non il throughput grezzo.
- **Applicare una percentuale di contingenza senza dichiarare la regola di arrotondamento**: half-up contro half-even (arrotondamento del banchiere) può cambiare l'ultimo centesimo; la convenzione di arrotondamento stessa deve essere una scelta dichiarata e verificabile — si veda l'[analisi costi-benefici](../cost-benefit-analysis/) per le linee guida del Green Book dell'HM Treasury su contingenza e correzioni per optimism bias, esattamente il tipo di cifra a cui si applica questo passaggio di arrotondamento.

## Fonti

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — il pattern `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — linee guida su optimism bias e contingenza per la modellazione dell'impatto sul budget. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
