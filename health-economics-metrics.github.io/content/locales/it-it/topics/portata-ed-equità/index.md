# Portata ed Equità

RE-AIM — Portata, Efficacia, Adozione, Implementazione, Mantenimento — è il framework standard per valutare l'impatto sulla *popolazione* di un intervento. La sua matematica centrale: **l'impatto sulla salute pubblica ≈ portata × efficacia**.

## Perché è importante

Le revisioni sistematiche che applicano RE-AIM all'mHealth trovano una firma coerente: forte portata e adozione, **debole efficacia e mantenimento**. Per una misura statistica formale della disuguaglianza di salute legata alla condizione socioeconomica, si veda l'[indice di concentrazione](../indice-di-concentrazione/).

## La matematica

```
Impatto sulla popolazione ≈ portata × efficacia
  portata = partecipanti / popolazione idonea
  efficacia = impatto nel mondo reale tra i partecipanti

Versione stratificata per equità:
  impatto_gruppo_g = portata_g × efficacia_g, riportato per quintile di deprivazione
```

## Esempio risolto

Un programma digitale di prevenzione del diabete, riportato in due modi:

```
Aggregato: portata 12%, impatto 0,02 QALY/partecipante → 0,0024 QALY/persona idonea

Stratificato (quintili di deprivazione):
  Q1 (meno deprivato): portata 22%, impatto 0,02 → 0,0044
  Q5 (più deprivato): portata 4%, impatto 0,025 → 0,0010
```

Il programma offre 4,4× più salute ai meno deprivati.

## Collegamento con l'ingegneria del software

La portata è sostanzialmente un artefatto ingegneristico: requisiti minimi di dispositivo e OS, assunzioni di larghezza di banda, supporto linguistico.

## Insidie

- **Efficacia riportata sui completatori, impatto rivendicato sulla popolazione.**

## Fonti

- RE-AIM framework.
- RE-AIM systematic reviews of mHealth.
