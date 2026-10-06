# Costo Marginale vs Medio

Il costo medio è il costo totale diviso per il numero di unità prodotte. Il costo marginale è il costo per produrre *un'unità aggiuntiva*. Le decisioni dovrebbero basarsi sul costo marginale, ma i costi unitari pubblicati sono quasi sempre costi medi.

## Perché è importante

L'errore più comune nei business case della sanità digitale è valutare la risorsa risparmiata al costo **medio**, quando il risparmio reale è al costo **marginale**. Il costo medio di un giorno di degenza ospedaliera (completamente allocato) supera le £400, ma liberare un letto per un giorno non fa risparmiare £400 — l'edificio, il riscaldamento e la maggior parte dei costi del personale continuano senza interruzione. Il denaro effettivamente liberato è più vicino a £50–£150, a meno che non si liberi abbastanza degenza da chiudere un reparto.

## La matematica

```
Costo medio: AC = TC / Q
Costo marginale: MC = dTC/dQ

TC = costo totale, Q = quantità
```

## Esempio risolto

Supponiamo che il vostro software riduca la durata media della degenza e liberi 1.000 giorni di degenza all'anno in un trust.

- **Affermazione ingenua**: £400.000 di risparmio. Sbagliato.
- **Affermazione basata sul costo marginale**: costo variabile per giorno di degenza (cibo, lavanderia, materiali di consumo) ≈ £120. Risparmio = **£120.000**, più il valore della capacità se il letto liberato viene riempito da pazienti chirurgici elettivi in attesa.

## Collegamento con l'ingegneria del software

L'economia del cloud è esattamente il territorio del costo marginale: eseguire un'esecuzione CI aggiuntiva su capacità già riservata ha un costo marginale ≈£0, ma il costo medio per esecuzione (spesa totale della piattaforma ÷ numero di esecuzioni) può essere di diverse sterline.

## Insidie

- **Valutare la capacità al costo medio**, e presentarla come contanti.
- **Assumere che il costo marginale sia costante.**
- **Usare il costo marginale per le decisioni di espansione e il costo medio per la contrazione** nello stesso caso.

## Fonti

- York Health Economics Consortium glossary: marginal cost.
- NHS England, National Cost Collection.
