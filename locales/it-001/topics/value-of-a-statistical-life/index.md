# Valore di una Vita Statistica (VSL)

Il valore di una vita statistica (VSL) — chiamato "valore di un decesso prevenuto" (VPF) nell'uso britannico — è l'importo che una *popolazione* è collettivamente disposta a pagare per ridurre il rischio di un decesso statistico, ricavato da studi sul compromesso salario-rischio (quanta paga extra i lavoratori richiedono per lavori più rischiosi) e da indagini di preferenza dichiarata. Non è il prezzo della vita di alcun individuo identificato; è un costrutto di rischio di popolazione, e un ingegnere del software che costruisce sistemi di riduzione del rischio — algoritmi di triage, dispatch delle ambulanze, monitoraggio della sicurezza — deve sapere che proviene da una tradizione teorica diversa dalle [soglie di disponibilità a pagare](../willingness-to-pay-thresholds/).

## Perché è importante

VSL/VPF è lo strumento standard per monetizzare le riduzioni del rischio di mortalità nell'analisi costi-benefici regolatoria: sicurezza dei trasporti, regolamentazione ambientale e alcuni interventi di sanità pubblica fanno passare i propri business case attraverso di esso. Il Green Book dell'HM Treasury pubblica una cifra VPF ricavata da evidenze del mercato del lavoro e da indagini del Regno Unito, e il Department for Transport la usa direttamente nella valutazione della sicurezza stradale. È una tradizione di valutazione genuinamente diversa dalla metodologia QALY × soglia di disponibilità a pagare: l'approccio a soglia valuta i guadagni di salute rispetto a ciò che un *budget* sanitario produce oggi al margine, mentre VSL/VPF valuta la riduzione del rischio rispetto a ciò che le persone, in un mercato del lavoro o in un'indagine, rivelano di essere disposte a pagare per essa. I due quadri non sono sempre conciliabili, e usarli entrambi nello stesso caso senza riconoscerlo è un comune errore analitico.

## La matematica

```
Decessi evitati = popolazione × riduzione_rischio_per_persona
  (riduzione_rischio_per_persona è una probabilità, es. 0,000001 =
   riduzione di 1 su un milione del rischio annuo di mortalità)

Beneficio di mortalità monetizzato = decessi_evitati × valore_del_decesso_prevenuto
```

## Esempio risolto

Una regione di 800.000 persone beneficia di un intervento digitale di dispatch/triage per la sicurezza stradale che riduce di 1 su un milione (0,000001) il rischio annuo di mortalità di ciascuna persona:

```
Decessi evitati = 800.000 × 0,000001 = 0,8
```

Usando il Valore di un Decesso Prevenuto del Regno Unito, £2.180.000 (cifra HM Treasury/DfT, prezzi 2023/24 — il Green Book lo aggiorna ogni anno, ricontrollare prima di citare in un'analisi attuale):

```
Beneficio di mortalità monetizzato = 0,8 × £2.180.000 = £1.744.000/anno
```

Poco meno di £1,75 milioni all'anno di beneficio di mortalità monetizzato, da una riduzione del rischio che la maggior parte della popolazione interessata non noterebbe mai individualmente.

## Collegamento con l'ingegneria del software

I team di software safety-critical — firmware di dispositivi medici, software per veicoli autonomi, sistemi di controllo industriale — affrontano esattamente questo problema di prezzo quando costruiscono il caso costi-benefici per un investimento in sicurezza: come si prezza "prevenire un guasto catastrofico" quando il guasto è raro, grave e distribuito su una vasta popolazione di utenti? VSL/VPF è un precedente reale, vecchio di decenni e pubblicamente documentato, per dare un numero a una riduzione del rischio rara, grave e a livello di popolazione — la stessa forma di argomento del prezzare un investimento SRE contro un raro disservizio catastrofico, solo con un esito di mortalità anziché di downtime.

## Insidie

- **Trattare il VSL come "il prezzo di una vita identificata"**: non lo è. VSL/VPF è un costrutto statistico di popolazione ricavato da compromessi di riduzione del rischio su molte persone, non una valutazione della vita o della morte di una persona specifica.
- **Doppio conteggio rispetto a un calcolo del beneficio monetario netto basato sui QALY**: usare una cifra VSL/VPF e un calcolo separato QALY × soglia nello stesso caso, senza riconciliarli, conta in silenzio due volte il valore degli stessi decessi evitati. Scegliere un solo quadro per un dato caso.
- **Trapiantare una stima di VSL tra contesti senza aggiustamento**: un VSL ricavato dal mercato del lavoro di un paese, o da dati salario-rischio in età lavorativa, applicato senza aggiustamenti a un diverso contesto di reddito o a una diversa popolazione (bambini, pensionati), è una questione metodologica di lunga data e genuinamente controversa — non risolta.

## Fonti

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — linee guida supplementari sul Value of a Prevented Fatality (prezzi 2023/24; i valori del Green Book sono aggiornati annualmente). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (per la tradizione VSL statunitense, citata per contrasto con la cifra VPF britannica qui sopra). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
