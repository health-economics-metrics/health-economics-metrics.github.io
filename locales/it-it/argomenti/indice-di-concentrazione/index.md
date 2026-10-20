# Indice di Concentrazione

L'indice di concentrazione (Wagstaff, Paci, van Doorslaer, 1991) è la misura statistica standard della disuguaglianza socioeconomica in una variabile di salute, con valori da −1 a 1. Un valore negativo significa che la variabile di salute è concentrata tra i socioeconomicamente svantaggiati, uno positivo che è concentrata tra i più abbienti, e zero che non c'è un gradiente socioeconomico coerente — trasforma il sospetto di una distribuzione ineguale in un unico numero confrontabile.

## Perché è importante

Un programma può sembrare efficace nel complesso e tuttavia recare il proprio beneficio quasi interamente a persone che stavano già meglio. Preoccupazioni distributive come questa sono esattamente ciò che [portata ed equità](../portata-ed-equità/) monitora in modo descrittivo — la portata stratificata per quintile di deprivazione, un divario di equità tra gruppo più alto e più basso — ma una tabella stratificata non si comprime in un'unica linea di tendenza e non si confronta facilmente tra due interventi completamente diversi misurati su scale diverse. L'indice di concentrazione risolve entrambi i problemi: si calcola allo stesso modo per qualsiasi variabile di salute rispetto a qualsiasi graduatoria socioeconomica, così un servizio sanitario nazionale può seguire se la disuguaglianza di uno specifico servizio digitale aumenta o diminuisce di rilascio in rilascio, e può confrontare l'equità distributiva del lancio di un'app con, ad esempio, un programma di screening, sulla stessa scala normalizzata.

## La matematica

```
CI = (2 / media(valori_salute)) × Cov(valori_salute, ranghi_socioeconomici)

Cov(X, Y) = media(X × Y) − media(X) × media(Y)   (covarianza di popolazione)

ranghi_socioeconomici: il rango frazionario di ciascuna persona nella
distribuzione socioeconomica, in [0, 1] (0 = più svantaggiata, 1 = più
avvantaggiata; per dati raggruppati/in classi, per convenzione il rango
del punto medio di ciascun gruppo)
```

Questa è la "formula pratica della covarianza" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Banca Mondiale 2008) — la scorciatoia standard per i professionisti per calcolare l'indice di concentrazione direttamente da osservazioni appaiate, senza prima disegnare e integrare sotto una curva di concentrazione.

## Esempio risolto

Un punteggio di buona salute autodichiarato (1 = peggiore, 4 = migliore) osservato in quattro quartili socioeconomici di uguale dimensione, ciascuno rappresentato dal rango del proprio punto medio:

```
valori_salute            = [1,0, 2,0, 3,0, 4,0]
ranghi_socioeconomici    = [0,125, 0,375, 0,625, 0,875]

media(valori_salute)         = 2,5
media(salute × rango)        = media([0,125, 0,75, 1,875, 3,5]) = 1,5625
media(ranghi_socioeconomici) = 0,5

Cov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Un `0,25` positivo significa che questo punteggio di salute è concentrato tra il gruppo socioeconomicamente avvantaggiato — i rispondenti con punteggi più alti si collocano verso l'estremo più abbiente della graduatoria.

## Collegamento con l'ingegneria del software

È la stessa misurazione della disuguaglianza basata sulla covarianza usata in economia in generale (il cugino del coefficiente di Gini), e si traduce nel misurare se i benefici di un prodotto software siano concentrati tra segmenti di utenti già avvantaggiati anziché distribuiti equamente — un'estensione diretta di [portata ed equità](../portata-ed-equità/) (la dimensione "reach" di RE-AIM) verso una misura statistica formale anziché un divario descritto. Dove portata ed equità riporta l'impatto per strato, l'indice di concentrazione comprime l'intera distribuzione in un unico numero con segno, adatto come singolo KPI monitorato tra i rilasci — pratico per una dashboard, dove una scomposizione stratificata completa non lo è.

## Insidie

- **Deriva della convenzione di segno**: il segno dipende da come sono definite sia la variabile di salute sia il rango — invertire una delle due inverte il segno, quindi la convenzione usata va sempre dichiarata esplicitamente accanto a ogni valore riportato.
- **Ranghi di confine invece di ranghi di punto medio**: i dati socioeconomici raggruppati o in classi (ad es. quintili) richiedono di usare il rango frazionario di ciascun gruppo nel suo *punto medio*, non al suo confine, altrimenti l'indice è distorto.
- **Leggere "vicino a zero" come "nessuna disuguaglianza"**: un indice di concentrazione vicino a zero significa "nessun gradiente socioeconomico coerente", non "nessuna disuguaglianza" in senso assoluto — disuguaglianze compensative in direzioni diverse possono annullarsi.

## Fonti

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — il manuale standard per i professionisti, fonte della formula pratica della covarianza qui usata. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
