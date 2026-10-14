# Approccio del Capitale Umano vs Metodo dei Costi di Attrito

Sono i due metodi concorrenti per valutare la produttività perduta — per malattia, disabilità o morte — negli studi di costo della malattia e di costi-benefici. L'approccio del capitale umano (HCA) valuta tutta la produzione perduta per l'intera durata dell'assenza al tasso salariale; il metodo dei costi di attrito (FCM) la valuta solo per il periodo più breve di cui un datore di lavoro ha effettivamente bisogno per ripristinare la produzione. La scelta tra i due cambia una stima dei costi indiretti di due volte o più.

## Perché è importante

I costi indiretti (di produttività) sono una delle voci più contese della health economics proprio perché i due metodi standard divergono in modo così netto. L'HCA tratta ogni giorno di assenza come un giorno di produzione che l'economia perde davvero, valutato al salario pieno per l'intera durata — o, per morte o invalidità permanente, per la restante vita lavorativa. L'FCM sostiene che in un'economia con disoccupazione e margini nel mercato del lavoro, gran parte di un'assenza lunga non riduce in realtà la produzione nazionale una volta che un datore di lavoro ha formato un sostituto o ridistribuito il lavoro; solo il "periodo di attrito" — il tempo per riportare la produzione al livello precedente — rappresenta una perdita reale. L'FCM produce quindi stime dei costi indiretti sistematicamente più basse e prudenti dell'HCA, e i due metodi non sono note a piè di pagina intercambiabili: sono teorie economiche diverse su cosa significhi "produttività perduta". È anche il motivo per cui il [caso di riferimento del NICE](../valutazione-delle-tecnologie-sanitarie/) esclude per impostazione predefinita i costi di produttività, riportandoli, se del caso, come analisi di sensibilità separata dalla prospettiva della società anziché fonderli nell'ICER del caso di riferimento — si veda la [prospettiva di analisi](../prospettiva-di-analisi/).

## La matematica

```
Approccio del capitale umano:
Costo_HCA = salario_giornaliero × giorni_persi

Metodo dei costi di attrito (forma semplificata, limitata al periodo di attrito):
Costo_FCM = salario_giornaliero × min(giorni_persi, giorni_periodo_attrito)

giorni_periodo_attrito = stima specifica per paese/settore del tempo per
                         ripristinare la produzione (storicamente ~85 giorni
                         nelle linee guida olandesi di costing iMTA; varia per
                         paese e viene periodicamente ristimata)
```

L'intero disaccordo tra i due metodi sta nel `min()`: l'HCA non limita mai `giorni_persi`, così il costo continua a crescere per tutta l'assenza, mentre l'FCM limita i giorni conteggiati al periodo di attrito, per quanto lunga sia l'assenza effettiva.

## Esempio risolto

Un dipendente è assente dal lavoro per `giorni_persi = 180` giorni, con `salario_giornaliero = £150`.

**Approccio del capitale umano**:

```
Costo_HCA = 150 × 180 = £27.000
```

**Metodo dei costi di attrito**, usando un periodo di attrito di `giorni_periodo_attrito = 85` (il benchmark storico olandese iMTA, secondo la ristima periodica della guida):

```
Costo_FCM = 150 × min(180, 85) = 150 × 85 = £12.750
```

I £12.750 dell'FCM sono meno della metà dei £27.000 dell'HCA per la *stessa* assenza — la sola scelta del metodo cambia materialmente un caso di costo della malattia, prima ancora di toccare qualsiasi altra assunzione.

## Collegamento con l'ingegneria del software

Si traduce direttamente nel modo in cui un team valuta l'uscita di un ingegnere:

- **Costing dell'attrition in stile HCA**: valutare la perdita come l'intero stipendio dell'ingegnere uscito per tutto il tempo in cui il ruolo resta vacante. È la versione ingenua della maggior parte dei modelli di costo dell'attrition, e sopravvaluta la perdita per lo stesso motivo per cui l'HCA sopravvaluta la perdita di produttività — presume che la capacità vacante fosse pienamente produttiva per tutto il tempo e che nient'altro abbia assorbito il margine. Si veda la [fidelizzazione della forza lavoro](../fidelizzazione-della-forza-lavoro/), che quantifica la catena di reclutamento/onboarding/copertura della vacanza alimentata da questo metodo.
- **Costing dell'attrition in stile FCM**: valutare la perdita solo per il tempo effettivo di sostituzione e messa a regime di un rimpiazzo — il "periodo di attrito" ingegneristico. È il numero più difendibile per un business case, esattamente come l'FCM è la scelta più prudente in uno studio di costo della malattia.
- La disciplina di fondo è la stessa del [costo opportunità](../costo-opportunità/): valutare una risorsa sostituita per ciò che si perde davvero, non per una durata da titolo moltiplicata per un tasso.

## Insidie

- **Mescolare HCA e FCM in una stessa analisi, o riportarne solo uno senza dichiarare la scelta.** Gli stessi dati di assenza possono produrre una differenza di 2x o più nel costo riportato a seconda del metodo; la scelta va dichiarata, non sepolta.
- **Usare l'HCA per un caso dalla prospettiva della società senza segnalarlo come analisi di sensibilità.** Il caso di riferimento del NICE esclude esplicitamente i costi di produttività; una stima HCA dalla prospettiva della società appartiene a un'analisi di scenario, non all'ICER di titolo.
- **Applicare l'uno o l'altro metodo a lavoro non retribuito o non di mercato (ad es. l'assistenza familiare) senza aggiustamenti.** Entrambi i metodi assumono un tasso salariale come proxy del valore, che non si trasferisce in modo pulito al lavoro privo di salario di mercato.

## Fonti

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — argomento sui costi di produttività.
- NICE health technology evaluations manual (PMG36) — prospettiva del caso di riferimento e linee guida facoltative sulla prospettiva della società. <https://www.nice.org.uk/process/pmg36>
