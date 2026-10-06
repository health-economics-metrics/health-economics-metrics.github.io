# Validazione dei Dispositivi Indossabili

Le metriche di validazione quantificano quanto bene le misurazioni di un dispositivo indossabile corrispondono a uno standard di riferimento clinico: **MAPE**, correlazione di concordanza, accordo di Bland-Altman — insieme alle metriche operative: **conformità del tempo di utilizzo** e **completezza dei dati**.

## Perché è importante

La validazione è la precondizione per tutto ciò che viene a valle. Le soglie accettate in questo campo per la frequenza cardiaca: **MAPE ≤5%** (rigoroso) o **≤10%** (permissivo) rispetto all'ECG.

## La matematica

```
MAPE = (1/n) Σ |misurato_i − riferimento_i| / riferimento_i × 100
```

## Esempio risolto

Un programma di reparto virtuale seleziona un dispositivo indossabile di monitoraggio. Candidato A: MAPE a riposo 2,1%, MAPE durante esercizio 11,4%. Candidato B: a riposo 3,8%, durante esercizio 6,9%.

```
Caso d'uso: rilevamento di un paziente che peggiora a casa — gli allarmi
si attivano per frequenza cardiaca elevata sostenuta, spesso durante l'attività.
Il numero di punta del candidato A (2,1%) vince l'opuscolo; il candidato B vince
il caso d'uso: nella condizione rilevante per l'allarme (movimento), l'errore
dell'11,4% di A si estende su tutta la banda di soglia dell'allarme.
```

## Collegamento con l'ingegneria del software

Gli ingegneri consumano dati di validazione quando scelgono i sensori e li *producono* quando costruiscono funzionalità di misurazione.

## Insidie

- **Il MAPE aggregato nasconde il fallimento specifico della condizione.**

## Fonti

- Consumer wearable HR validation (Oura Gen 3/4).
- Wearable validity thresholds (MAPE standards).
