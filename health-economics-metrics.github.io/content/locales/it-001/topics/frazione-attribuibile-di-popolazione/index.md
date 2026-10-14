# Frazione Attribuibile di Popolazione (PAF)

La PAF è la proporzione del carico di una malattia o di un esito in una popolazione che è attribuibile all'esposizione a uno specifico fattore di rischio — la quota che scomparirebbe se l'esposizione fosse rimossa del tutto. Converte "questo fattore di rischio raddoppia le tue probabilità" in un numero a livello di popolazione intorno al quale un committente può davvero pianificare: quanti casi, e quanto costo, valga davvero la pena inseguire per una data esposizione.

## Perché è importante

Levin introdusse la PAF nel 1953 per rispondere a una domanda ristretta e concreta: se nessuno fumasse, quanto cancro del polmone scomparirebbe? La stessa aritmetica dimensiona oggi la pianificazione nazionale della prevenzione ovunque, dalle strategie sul tabacco e sull'obesità alle graduatorie dei fattori di rischio dello studio Global Burden of Disease dell'OMS, perché un rischio relativo da solo non dice nulla sull'impatto — un fattore di rischio può raddoppiare le probabilità di un evento raro e spostare appena il carico di malattia della popolazione, oppure aumentare solo leggermente le probabilità di un evento comune e spiegare comunque un'enorme quota dei casi. La PAF è ciò che trasforma "il fattore di rischio X è pericoloso" in "rimuovere il fattore di rischio X eviterebbe tanti casi all'anno", il numero di cui il business case di un programma di prevenzione ha davvero bisogno. Si veda l'[economia della prevenzione](../economia-della-prevenzione/) per ciò che costa agire su quel numero una volta che lo si ha.

## La matematica

```
PAF = prevalenza_esposti × (rischio_relativo − 1) / (1 + prevalenza_esposti × (rischio_relativo − 1))

prevalenza_esposti = frazione della popolazione esposta al fattore di rischio (0–1)
rischio_relativo   = rischio dell'esito negli esposti rispetto ai non esposti (es. 2,5 = 2,5×)

Casi attribuibili = casi_totali × PAF
```

La PAF cresce sia con la prevalenza dell'esposizione sia con il rischio relativo — un rischio relativo modestamente elevato (diciamo 1,5×) legato a un'esposizione molto comune può produrre una PAF maggiore di un rischio relativo drammatico (diciamo 5×) legato a una rara. È l'intera ragione per cui esiste come numero distinto dal rischio relativo.

## Esempio risolto

Un fattore di rischio è presente nel 30% di una popolazione (`prevalenza_esposti = 0,3`) e aumenta di 2,5 volte il rischio dell'esito (`rischio_relativo = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

Con 1.000 casi/anno nella popolazione:
Casi attribuibili = 1.000 × 0,3103 ≈ 310 casi/anno
```

Poco meno di un terzo del carico annuo di questo esito è attribuibile all'esposizione — eliminarla del tutto (il tetto teorico; nessun intervento reale ottiene il 100% di rimozione dell'esposizione) eviterebbe circa 310 dei 1.000 casi ogni anno.

## Collegamento con l'ingegneria del software

La PAF è la versione epidemiologica di "quanta parte del nostro volume di incidenti è attribuibile a questa singola causa radice?" — lo stesso tipo di domanda che i team si pongono quando dimensionano una specifica classe di deploy o di dipendenze rispetto al totale degli incidenti in produzione, anziché trattare ogni incidente come ugualmente meritevole di essere risolto allo stesso modo. Una categoria di causa radice presente in una larga quota di deploy con solo un modesto rischio relativo di causare un incidente può superare una categoria rara e ad alto rischio relativo nel decidere dove spendere per primo lo sforzo ingegneristico — esattamente l'intuizione della PAF, tradotta.

## Insidie

- **Sommare le PAF tra fattori di rischio**: le PAF di più fattori che influenzano lo stesso esito non sommano al 100% — possono superarlo in totale, perché i fattori interagiscono e condividono percorsi causali. Trattare ogni PAF come "se questo fattore da solo fosse rimosso", mai come una partizione del rischio totale.
- **Trapiantare un rischio relativo tra popolazioni**: un rischio relativo stimato in una popolazione (diversa prevalenza di esposizione di base, diversi confondenti) calcola una PAF fuorviante se applicato alla prevalenza di esposizione di un'altra popolazione.
- **Confondere la PAF con il rischio attribuibile negli esposti**: la PAF è a livello di popolazione e dipende dalla prevalenza dell'esposizione; il rischio attribuibile negli esposti è a livello individuale e non ne dipende. Rispondono a domande diverse — non citarne una per rispondere all'altra.

## Fonti

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
