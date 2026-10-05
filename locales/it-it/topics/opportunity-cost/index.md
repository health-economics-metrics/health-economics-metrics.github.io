# Costo Opportunità

Il costo opportunità è il valore della migliore alternativa sacrificata quando si destina una risorsa a un uso. In un sistema sanitario con budget fisso, spendere £1 milione per qualcosa significa che £1 milione di valore sanitario non verrà prodotto altrove.

## Perché è importante

Il costo opportunità è l'idea più profonda dell'economia sanitaria, e quella più spesso trascurata dagli ingegneri del software. Il budget sanitario rimane più o meno fisso ogni anno, quindi una nuova tecnologia non viene mai finanziata con denaro "extra" — sposta sempre qualcos'altro. Il pagatore in realtà non chiede "è una buona cosa?"; chiede "è meglio di ciò che lo stesso denaro sta già acquistando?"

Questo è il motivo per cui esiste la soglia di costo-efficacia. Quella soglia è la stima della salute che il denaro può acquistare al margine del sistema attuale. Vedi [soglie di disponibilità a pagare](../willingness-to-pay-thresholds/).

## La matematica

Non esiste una formula unica. Il costo opportunità è una regola di confronto:

```
Costo opportunità di scegliere A = valore della migliore alternativa B sacrificata
Guadagno netto da A = valore(A) − valore(B)
```

Come base empirica, Claxton et al. (2015) hanno stimato che l'NHS genera un QALY al proprio margine per circa **£13.000**. Ciò significa che spendere £13.000 per una tecnologia che genera meno di 1 QALY, anche se "funziona", rende il paese nel complesso **meno sano**.

## Esempio risolto

Un trust NHS ha un budget di trasformazione che può essere speso solo per una delle seguenti opzioni:

- **Opzione A:** Un software di turnazione elettronica — risparmia £400.000 di spesa per agenzie all'anno.
- **Opzione B:** Un software di coordinamento delle dimissioni — risparmia 2.000 giorni di degenza all'anno. Il costo marginale reale di un giorno di degenza liberato è di circa £150, quindi questo equivale a £300.000 all'anno, più il beneficio di un trattamento anticipato per i pazienti in attesa.

Finanziare A significa sacrificare B. Il costo opportunità di A sono i £300.000 di B più il beneficio per il paziente. L'affermazione netta di A dovrebbe essere solo questa differenza, non i £400.000 di facciata. Un business case che confronta una proposta con "non fare nulla" invece della sua migliore alternativa, ne gonfia il valore.

## Collegamento con l'ingegneria del software

Anche la capacità ingegneristica è un budget fisso — non in sterline, ma in slot di roadmap. Un team di piattaforma che finanzia lo Strumento A che fa risparmiare £500 per ora-ingegnere, mentre lo Strumento B potrebbe fare lo stesso lavoro per £200 all'ora, sta distruggendo capacità nello stesso modo in cui un sistema sanitario che finanzia un farmaco da £40.000/QALY sposta cure da £13.000/QALY. Questa disciplina si trasferisce direttamente:

- Dichiarare sempre esplicitamente il confronto ("rispetto a cosa?").
- Valutare il tempo dell'ingegnere in base a ciò che avrebbe potuto produrre, non solo al suo stipendio.
- Trattare il "budget rimanente" come l'inizio dell'analisi, non la sua fine.

## Insidie

- **Confrontare con il non fare nulla.** Il confronto corretto è il prossimo migliore uso di quel denaro; "non fare nulla" raramente lo è.
- **Assumere che il costo opportunità del tempo risparmiato sia zero.** Il tempo risparmiato è prezioso solo se reinvestito in qualcosa di valore — vedi [risparmi che liberano cassa vs non liberano cassa](../cash-releasing-vs-non-cash-releasing/).
- **Ignorare lo spostamento.** "Il budget si espanderà per accomodarlo" è raramente vero in un servizio sanitario nazionale su base annuale.
- **Ignorare quale metodo valuta una risorsa sostituita.** Per la produttività perduta in particolare — per malattia, disabilità o un dipendente che se ne va — si veda l'[approccio del capitale umano vs metodo dei costi di attrito](../human-capital-and-friction-cost/), la versione di questa idea specifica per i costi di produttività.

## Fonti

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary: opportunity cost. <https://yhec.co.uk/glossary/opportunity-cost/>
