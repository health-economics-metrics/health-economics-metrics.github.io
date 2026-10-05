# Numero Necessario da Sottoporre a Screening (NNS)

L'NNS è il numero di persone che devono essere sottoposte a screening — non semplicemente trattate — per prevenire **un** esito avverso in un periodo di follow-up definito, dati il rischio di base della popolazione e la riduzione relativa del rischio ottenuta dalla diagnosi precoce e dal trattamento. È l'analogo a livello di programma di screening dell'NNT: l'NNT chiede quanti devono essere *trattati* per prevenire un esito; l'NNS chiede quanti devono percorrere l'intero percorso *screening-e-poi-trattamento* per arrivarci.

## Perché è importante

Rembold introdusse l'NNS nel 1998 proprio perché i programmi di screening potessero essere confrontati sullo stesso piano dei trattamenti, dato che la riduzione relativa del rischio di titolo di un test di screening nasconde due cose che quella di un trattamento non nasconde: il rischio di base della popolazione effettivamente invitata allo screening e il fatto che tutti i sottoposti a screening sostengono il costo del test e il carico dei falsi positivi, non solo la minoranza che poi ne trae beneficio. Il vaglio di costo-efficacia dell'UK National Screening Committee (si veda l'[economia dello screening](../screening-economics/)) si fonda proprio su questa distinzione — un programma di screening con un'impressionante riduzione relativa del rischio in una popolazione a basso rischio di base può avere un NNS nell'ordine delle migliaia, e a quel punto il costo del programma per esito prevenuto diventa la vera domanda.

## La matematica

```
NNS = 1 / (rischio_di_base × riduzione_relativa_del_rischio)

rischio_di_base                = probabilità dell'esito nella popolazione
                                  sottoposta a screening nel periodo di
                                  follow-up (0–1)
riduzione_relativa_del_rischio = riduzione proporzionale del rischio ottenuta
                                  dal trattamento precoce reso possibile dallo
                                  screening (0–1)

Costo del programma per esito prevenuto = NNS × costo_per_screening
```

Confrontare direttamente con l'[NNT](../number-needed-to-treat/): l'NNS ripiega l'efficacia dell'intero imbuto screening → diagnosi → trattamento in un unico numero, mentre l'NNT presuppone già che il paziente sia diagnosticato e stia iniziando il trattamento.

## Esempio risolto

La popolazione bersaglio di un programma di screening ha un rischio di evento di base del 2% nel periodo di studio (`rischio_di_base = 0,02`) e la diagnosi precoce ottiene una riduzione relativa del rischio del 25% (`riduzione_relativa_del_rischio = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 persone devono essere sottoposte a screening per prevenire un esito.

A £50 per screening:
Costo del programma per esito prevenuto = 200 × £50 = £10.000
```

Quella cifra di £10.000 è ciò che va confrontato con il costo dell'esito stesso e i QALY che sarebbe costato — lo stesso confronto che l'[economia della prevenzione](../prevention-economics/) fa per i programmi di prevenzione in generale.

## Collegamento con l'ingegneria del software

L'NNS è "quanti utenti, eventi o richieste devono attraversare un flusso di rilevazione o triage per catturare un vero positivo su cui valga la pena agire" — direttamente rilevante per i sistemi di monitoraggio e triage basati su allarmi, dove una condizione bersaglio a bassa prevalenza gonfia l'NNS nello stesso modo in cui fa crollare il valore predittivo positivo (si vedano l'[economia dello screening](../screening-economics/) e la [valutazione dell'IA clinica](../clinical-ai-evaluation/)). Una regola di monitoraggio che deve elaborare 200 eventi per ogni vero riscontro vale la pena di essere eseguita solo se il riscontro vale almeno 200 volte il costo di triage per evento — la stessa identica aritmetica dell'esempio sanitario risolto qui sopra.

## Insidie

- **Ignorare la dipendenza dal rischio di base**: lo stesso test o programma di screening ha un NNS — e un rapporto di costo-efficacia — molto diverso in una popolazione ad alto rischio rispetto a una a basso rischio. Non citare mai un NNS senza indicare la popolazione per cui è stato calcolato.
- **Contare il denominatore sbagliato**: l'NNS conta le persone *sottoposte a screening*, non quelle risultate positive o che iniziano il trattamento — incorpora già l'efficacia dell'intero imbuto, quindi non va mai confrontato con una metrica contata solo sui positivi.
- **Confrontare tra periodi di follow-up diversi**: un follow-up più breve in genere gonfia l'NNS, perché nella finestra si osservano meno eventi. Le cifre di NNS sono confrontabili solo se calcolate sulla stessa durata di follow-up.

## Fonti

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
