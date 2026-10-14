# EQ-5D

L'EQ-5D è il questionario standardizzato del gruppo EuroQol per misurare la qualità della vita legata alla salute.

## Perché è importante

Qualsiasi prodotto di sanità digitale che voglia rivendicare QALY necessita di utilità da uno strumento validato.

## La matematica

```
Stato di salute = profilo a 5 cifre, ad esempio "21221"
Indice di utilità = set_valori(profilo)
```

## Esempio risolto

Un'app di riabilitazione muscoloscheletrica misura l'EQ-5D-5L all'arruolamento e a 6 mesi.

## Collegamento con l'ingegneria del software

**Strumentatelo.**

## Insidie

- **Prima/dopo senza un comparatore.**
- **Trattare un set di valori come autogiustificante**: i valori di utilità restituiti da un set di valori sono stati essi stessi ricavati dalla popolazione tramite indagini di time trade-off (o di scelta correlate) — si veda l'[Elicitazione dell'Utilità con il Time Trade-Off (TTO)](../elicitazione-dell-utilità-con-il-time-trade-off/) per come.

## Fonti

- EuroQol: EQ-5D-5L.
- NICE health technology evaluations: the manual (PMG36).
