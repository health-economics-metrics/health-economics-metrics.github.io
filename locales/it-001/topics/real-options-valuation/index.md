# Valutazione delle Opzioni Reali

La valutazione delle opzioni reali applica la logica di prezzo delle opzioni finanziarie a decisioni di investimento reali (non di mercato finanziario) — in particolare all'*opzione di espandere* un progetto in seguito se riesce, senza esserne obbligati. Un modello binomiale semplificato a un periodo (Cox, Ross, Rubinstein, 1979) valuta direttamente questa flessibilità, trasformando "lanciamo in piccolo e vediamo" da un'intuizione in un numero prezzato.

## Perché è importante

Un calcolo di VAN statico prezza un progetto come una scommessa tutto o niente: finanziarlo o no, alla scala di oggi, per sempre. I progetti reali — e in particolare i rollout graduali di sanità digitale — raramente sono scommessi così: un sistema sanitario può finanziare un piccolo pilota, osservare cosa accade e impegnare altro denaro solo se funziona. Quella flessibilità ha un valore reale, e ignorarla sottovaluta sistematicamente gli investimenti a fasi rispetto a quelli in un'unica soluzione, il che è esattamente al contrario per i processi di acquisto che premiano la proposta a fasi dall'aspetto più sicuro. La valutazione delle opzioni reali prezza la flessibilità stessa, così una proposta a fasi può essere confrontata equamente con un'alternativa di impegno totale anziché penalizzata per sembrare più piccola su una naïve riga di VAN.

## La matematica

```
Probabilità neutrale al rischio dello stato "su":
  p = ((1 + tasso_privo_di_rischio) − fattore_giù) / (fattore_su − fattore_giù)

Payoff di espansione in ciascuno stato (limitato a zero — espandere è facoltativo):
  payoff_su  = max(valore_progetto × fattore_su  − costo_espansione, 0)
  payoff_giù = max(valore_progetto × fattore_giù − costo_espansione, 0)

Valore dell'opzione (payoff atteso attualizzato):
  valore_opzione = (p × payoff_su + (1 − p) × payoff_giù) / (1 + tasso_privo_di_rischio)

VAN espanso = van_statico + valore_opzione
```

Il valore del progetto o sale (`fattore_su`) o scende (`fattore_giù`) entro il successivo punto decisionale. L'espansione viene esercitata solo se è redditizia in quello stato — il limite a zero del payoff è ciò che rende questa una vera *opzione* anziché un obbligo. Per prezzare l'opzione di raccogliere prima informazione, anziché quella di espandere in seguito, si veda il [valore atteso dell'informazione perfetta](../expected-value-of-perfect-information/). Per il costo di attendere prima di prendere quella decisione, si veda il [costo del ritardo](../cost-of-delay/).

## Esempio risolto

Un pilota di servizio digitale con `valore_progetto = £1.000.000`, una possibile salita a 1,5× o discesa a 0,5× entro il successivo punto decisionale, un tasso privo di rischio dell'8% e un costo di espansione di £600.000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

payoff_su  = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
payoff_giù = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Il limite conta: l'opzione NON verrebbe esercitata se il mercato delude — il
costo di espansione di £600.000 supera i £500.000 che il progetto varrebbe
nello stato giù.

valore_opzione = (0,58 × 900.000 + 0,42 × 0) / 1,08
               = 522.000 / 1,08
               ≈ £483.333,33
```

Aggiungendo il valore dell'opzione a una base di VAN statico di £200.000: VAN espanso = 200.000 + 483.333,33 ≈ **£683.333,33**. Riportare il solo VAN statico di £200.000, senza questo valore dell'opzione, sottostimerebbe il vero valore del progetto a fasi di più del doppio.

## Collegamento con l'ingegneria del software

È la versione formale di "rilascia subito una versione minima, conserva l'opzione di investire ulteriormente se decolla" — direttamente rilevante per un rollout a fasi di un prodotto di sanità digitale, strutturalmente parallela all'inquadramento della sequenzializzazione in condizioni di incertezza del [costo del ritardo](../cost-of-delay/) e di [WSJF/CD3](../wsjf-and-cd3/), e complementare al [valore atteso dell'informazione perfetta](../expected-value-of-perfect-information/) e al [valore atteso dell'informazione campionaria](../expected-value-of-sample-information/) — tutti e tre prezzano flessibilità o informazione in condizioni di incertezza, da angolazioni diverse.

## Insidie

- **Prendere in prestito il pricing neutrale al rischio senza l'assunzione di bene scambiato su cui si fonda**: i modelli di opzioni reali prendono in prestito la probabilità neutrale al rischio dal pricing delle opzioni finanziarie, che presuppone che il valore sottostante sia un bene *scambiato* — per un progetto reale davvero non scambiato è una comodità di modellazione, non un fatto di mercato letterale.
- **Trattare `fattore_su`/`fattore_giù` come parametri liberi**: gli input su/giù del binomiale sono essi stessi assunzioni che richiedono giustificazione, non parametri liberi scelti per produrre una risposta desiderata.
- **Riportare il solo valore dell'opzione**: il valore delle opzioni reali è *additivo* al VAN statico di un progetto autonomo — un errore comune è riportare solo il valore dell'opzione scartando il caso di base, il che sopravvaluta il caso se il VAN statico è negativo e lo sottovaluta (come nell'esempio risolto sopra) quando il VAN statico viene omesso del tutto.

## Fonti

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — lega direttamente le opzioni reali a un contesto decisionale di health economics. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
