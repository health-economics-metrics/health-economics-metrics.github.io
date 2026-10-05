# Valore Atteso dell'Informazione Campionaria (EVSI)

L'EVSI è il valore di uno *specifico studio proposto* — un dato disegno, una data dimensione campionaria — prima che venga condotto, in contrasto con l'[EVPI](../expected-value-of-perfect-information/), che prezza l'eliminazione completa di ogni incertezza. L'EVSI risponde alla domanda che un finanziatore della ricerca affronta davvero: "*questo* trial, di *questa* dimensione, vale il suo costo?"

## Perché è importante

L'EVPI indica il tetto di ciò che qualsiasi ricerca potrebbe valere; non dice mai se il trial che si ha davanti supera la soglia. Un finanziatore nazionale della ricerca che sceglie tra uno studio pilota di 50 pazienti e un trial definitivo di 500 pazienti deve sapere quanto vale *ciascun disegno specifico*, non solo il valore dell'onniscienza. L'EVSI fornisce quel numero e, poiché scala con la dimensione campionaria, consente a un finanziatore di trovare la dimensione che massimizza il beneficio netto atteso anziché tirare a indovinare.

È anche il motivo per cui l'EVSI è sempre minore o uguale all'EVPI: un campione finito può risolvere l'incertezza solo parzialmente, e uno studio che sembra valere più dell'informazione perfetta è segno che il calcolo è sbagliato, non un risultato reale.

## La matematica

```
Generale:
EVSI(n) = E_dati[ max_d E_θ|dati[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (aspettativa annidata: esterna sui possibili risultati dello studio, interna
  sulla credenza a posteriori su θ dopo aver visto quel risultato — di solito
  stimata con Monte Carlo annidato / aggiornamento bayesiano sulle estrazioni
  dell'analisi di sensibilità probabilistica)

Approssimazione normale in forma chiusa (singolo parametro incerto, modello
coniugato normale-normale — una scorciatoia standard, non esatta per ogni modello):
EVSI(n) = EVPI × n / (n + n0)

n  = dimensione campionaria dello studio proposto
n0 = "dimensione campionaria equivalente a priori" — la dimensione di un
     campione immaginario che porterebbe la stessa informazione dell'a priori
     attuale, derivata dal rapporto tra varianza dei dati e varianza a priori
ENBS(n) = EVSI(n) − Costo(n)
EVSI di popolazione = EVSI_per_decisione × decisioni_interessate
```

La forma generale è un'aspettativa annidata perché il risultato futuro di uno studio è esso stesso incerto: bisogna mediare su ogni possibile insieme di dati che lo studio potrebbe produrre e, per ciascuno, ricalcolare la decisione migliore data la credenza aggiornata (a posteriori). L'approssimazione normale in forma chiusa scambia quel costo computazionale con un singolo rapporto, valido quando il parametro incerto e i dati sono (approssimativamente) normali e coniugati — una comodità, non una legge universale. Il Monte Carlo annidato completo è il metodo generale quando quell'assunzione non regge. Si veda l'[analisi di sensibilità probabilistica](../probabilistic-sensitivity-analysis/) per le estrazioni PSA da cui l'EVSI viene di solito stimato.

## Esempio risolto

Partendo dall'esempio risolto dell'[EVPI](../expected-value-of-perfect-information/) — introduzione di un assistente di documentazione basato su IA a 5.000 clinici, dove l'EVPI risultava £1,2 M — si esprima qui lo stesso EVPI in sterline intere: **EVPI = £1.200.000**.

È sul tavolo uno studio pilota proposto su 50 clinici. Dal rapporto tra varianza della credenza a priori e precisione di misura del pilota, la dimensione campionaria equivalente a priori risulta `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = £480.000
```

Il pilota costa £120.000:

```
ENBS = EVSI − Costo = 480.000 − 120.000 = £360.000
```

Un ENBS nettamente positivo: finanziare il pilota. Se la stessa decisione di acquisto si ripresenta in 3 trust regionali simili, il valore del pilota scala:

```
EVSI di popolazione = 480.000 × 3 = £1.440.000
```

## Collegamento con l'ingegneria del software

L'EVSI è l'economia della scelta di *quanto grande* debba essere un pilota o un test A/B, non solo se condurne uno:

- **Dimensione campionaria come decisione di investimento.** Una beta con 50 utenti e un rollout graduale con 5.000 utenti sono "studi" diversi con EVSI e costi diversi — l'EVSI consente di confrontarli sulla stessa base anziché ricadere su "più dati sono sempre meglio".
- **L'ENBS, non l'EVSI da solo, è il test di commissione.** Uno studio con EVSI alto ma un costo che ne divora gran parte è una proposta debole; la regola decisionale è il beneficio netto atteso del campionamento, esattamente come un business case compensa il beneficio col costo anziché riportare solo il beneficio.
- **I rendimenti decrescenti sono espliciti.** Poiché l'EVSI(n) cresce con `n/(n+n0)`, raddoppiare la dimensione di un pilota non ne raddoppia mai il valore — una versione formale dell'istinto ingegneristico secondo cui un esperimento più grande ha un valore informativo marginale decrescente.

## Insidie

- **Applicare l'approssimazione normale fuori dalle sue assunzioni.** Vale solo per un'incertezza su singolo parametro grosso modo coniugata; un modello decisionale davvero non lineare o a più parametri richiede il Monte Carlo annidato completo, non questa scorciatoia.
- **Confrontare l'EVSI col solo costo in contanti.** L'EVSI va pesato contro il costo *pieno* dello studio, incluso il suo costo di ritardo decisionale — si veda il [costo del ritardo](../cost-of-delay/) — non solo la fattura dello studio.
- **Trattare EVSI > EVPI come un reale risultato.** L'EVSI non può mai superare l'EVPI per costruzione; un calcolo che lo produce è un bug del modello, non una scoperta.

## Fonti

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
