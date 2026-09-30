# Attualizzazione e Preferenza Temporale

L'attualizzazione converte costi e benefici futuri in valori attuali, perché un beneficio oggi vale più dello stesso beneficio tra cinque anni.

## Perché è importante

Ogni valutazione di economia sanitaria e ogni serio business case del settore pubblico attualizza i flussi pluriennali. L'HM Treasury Green Book del Regno Unito impone un tasso di preferenza temporale sociale annuo del 3,5%; il caso di riferimento NICE attualizza sia i costi che gli effetti sulla salute al 3,5% annuo. Se il vostro business case per un software afferma "£5 milioni di risparmi in 10 anni", un revisore finanziario chiederà immediatamente la cifra attualizzata.

## La matematica

Valore attuale di un importo futuro:

```
PV = FV / (1 + r)^t

PV = valore attuale
FV = valore futuro nell'anno t
r  = tasso di attualizzazione (NICE/Green Book: 0,035)
t  = anni da oggi
```

## Esempio risolto

Il vostro software fa risparmiare £100.000 all'anno a un trust NHS per 5 anni, a partire da un anno dopo l'avvio.

```
Totale non attualizzato: £500.000
PV totale attualizzato ≈ £451.505
```

Il titolo onesto è di circa £451.000, circa il 10% in meno della somma ingenua. Ora supponiamo che la consegna slitti di un anno: ogni termine si sposta di un anno più tardi, e il PV scende a circa £436.000 — questa è la visione di attualizzazione del [costo del ritardo](../cost-of-delay/).

## Collegamento con l'ingegneria del software

- **L'ammortamento del debito tecnico e le migrazioni di piattaforma** promettono flussi di benefici a anni di distanza; attualizzateli prima di confrontarli con un lavoro che si ripaga in questo trimestre.
- **Costi anticipati, benefici posticipati** è la forma standard di una migrazione. L'attualizzazione penalizza correttamente quella forma.
- **Le affermazioni di "risparmi nell'anno 5"** meritano scetticismo doppio — sono sia pesantemente attualizzate sia altamente incerte (vedi [analisi di sensibilità](../sensitivity-analysis/)).

## Insidie

- **Attualizzare i costi ma non i benefici** (o viceversa).
- **Usare un tasso commerciale (8–12%) in un caso del settore pubblico**, o il 3,5% in uno sostenuto da capitale di rischio.
- **Confondere l'attualizzazione con l'inflazione.**

## Fonti

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance.
