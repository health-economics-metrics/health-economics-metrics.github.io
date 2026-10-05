# Confronto dell'ICER tra Valute Diverse

Confrontare un [ICER](../incremental-cost-effectiveness-ratio/) calcolato nella valuta di un paese con la [soglia di disponibilità a pagare](../willingness-to-pay-thresholds/) di un altro paese — o aggregare dati di costo raccolti in uno studio multinazionale — richiede un passaggio di conversione valutaria esplicito e verificabile. Se il metodo di conversione è sbagliato, le stesse evidenze di base possono ribaltare una decisione di adozione, pur senza che nulla nei dati clinici o di costo sia cambiato.

## Perché è importante

Le linee guida metodologiche ISPOR per gli studi clinici multinazionali (Willke et al., *Health Economics*, 1998) raccomandano di convertire i costi delle risorse usando la **parità di potere d'acquisto (PPA)** — non i tassi di cambio di mercato — quando si confronta il valore economico reale delle risorse tra paesi, e di riservare i tassi di cambio di mercato a ciò per cui servono davvero: modellare i flussi reali di pagamenti in contanti transfrontalieri. Confondere i due è uno degli errori metodologici più comuni nell'HTA multinazionale, proprio perché entrambi sembrano "il tasso di cambio" a chi non ha letto le linee guida, e un foglio di calcolo non impedisce di sbagliare.

## La matematica

```
icer_in_valuta_locale = converti(icer_in_valuta_origine, fattore_conversione)

il fattore_conversione dovrebbe essere:
  fattore di conversione PPA  — per confrontare il valore economico reale
                                 delle risorse tra paesi (raccomandato da
                                 ISPOR per la CEA multinazionale)
  tasso di cambio di mercato  — solo per pagamenti in contanti
                                 transfrontalieri effettivi

adottare se icer_in_valuta_locale < soglia_locale
```

La regola decisionale in sé è la normale [regola di soglia dell'ICER](../willingness-to-pay-thresholds/) — `adottare se ICER < λ` — la questione metodologica di questo argomento riguarda interamente *quale fattore di conversione* produca la cifra `icer_in_valuta_locale` a cui si applica quella regola.

## Esempio risolto

L'ICER di un farmaco da uno studio statunitense è $45.000/QALY. Un ipotetico paese importatore fissa la propria soglia illustrativa a £34.000/QALY (una cifra ipotetica specifica del paese solo per questo esempio — le soglie reali variano per paese e cambiano nel tempo, e vanno sempre citate con fonte e data).

**Usando un fattore di conversione PPA di 0,72** (illustrativo, solo per questo esempio risolto): $45.000 × 0,72 = £32.400/QALY. £32.400 < £34.000 → **adottare**.

**Usando invece un tasso di cambio di mercato di 0,79** (illustrativo): $45.000 × 0,79 = £35.550/QALY. £35.550 > £34.000 → **respingere**.

Lo stesso ICER sottostante di $45.000/QALY produce una decisione di adozione con la conversione PPA e una di rifiuto con la conversione al cambio di mercato. È l'illustrazione concreta del perché le linee guida ISPOR trattano la scelta del fattore di conversione come metodologicamente rilevante — non un dettaglio di arrotondamento, e non qualcosa da lasciare implicito in una formula di foglio di calcolo che nessuno ricontrolla.

## Collegamento con l'ingegneria del software

È lo specchio, nella health economics, di un noto ambito ingegneristico: la correttezza dei prezzi multivaluta in i18n/l10n nel software commerciale, dove una pagina prezzi SaaS non deve mai confrontare silenziosamente un importo in `$` con un prezzo in `£`. La garanzia a livello di tipo offerta da un tipo `Money` ben costruito — metodi di confronto che rifiutano di confrontare valute diverse, forzando prima un passaggio di conversione esplicito — è un parallelo diretto, in ingegneria del software, del punto metodologico di health economics qui: non confrontare cifre non convertite tra valute e non lasciare il passaggio di conversione implicito o non documentato.

## Insidie

- **Confrontare silenziosamente importi in valute diverse**: lavoro HTA ad hoc in fogli di calcolo che sottrae o confronta una cifra in dollari e una in sterline senza un passaggio di conversione preliminare — una classe di bug che un vero tipo `Money` consapevole della valuta intercetta per costruzione anziché lasciarla come errore silenzioso.
- **Confondere il tasso di cambio di mercato con la PPA**: l'errore metodologico più comune nell'HTA multinazionale secondo le linee guida ISPOR — i due numeri possono differire sostanzialmente e rispondono a domande diverse (valore economico reale vs. flusso di cassa effettivo).
- **Non datare il tasso di cambio o l'indice PPA usato**: entrambi si muovono nel tempo, quindi ogni fattore di conversione citato va datato allo stesso modo in cui questo repository data le altre cifre di riferimento (valori del carbonio del Green Book, valore di una vita statistica prevenuta e così via).

## Fonti

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
