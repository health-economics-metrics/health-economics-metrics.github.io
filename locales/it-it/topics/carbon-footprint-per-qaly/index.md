# Impronta di Carbonio per QALY

Il carbonio per QALY è un rapporto di efficienza — le emissioni di carbonio di un intervento (o le emissioni evitate) divise per i QALY che produce — direttamente analogo al costo per QALY, e consente di valutare l'efficienza carbonica di un intervento accanto alla sua efficienza di costo. Un "beneficio monetario netto corretto per il carbonio" fa un passo in più: monetizza l'impatto carbonico usando i valori ufficiali del carbonio non scambiato del Green Book del Regno Unito e lo sottrae al [beneficio monetario netto](../net-monetary-benefit/) standard.

## Perché è importante

NICE e NHS England si aspettano ormai che l'impatto ambientale sia considerato accanto a costi e QALY. L'NHS ha un impegno pubblico al net zero: net zero per le proprie emissioni dirette entro il 2040 e net zero per l'intera impronta della catena di fornitura entro il 2045. Il manuale di valutazione delle tecnologie sanitarie del NICE (PMG36) cita la sostenibilità ambientale come considerazione emergente nella valutazione delle tecnologie. Per un prodotto di sanità digitale, ciò significa che il carbonio sta diventando un quarto pilastro del caso di valore, accanto a costo, QALY e [dominanza sulla frontiera di efficienza](../dominance-and-efficiency-frontier/) — non un sostituto di nessuno di essi, ma una dimensione che un business case ben costruito deve sempre più spesso riportare.

## La matematica

```
Carbonio per QALY = emissioni_totali_tonnellate_co2e / qaly_totali
  (un valore negativo significa emissioni nette EVITATE per QALY guadagnato
  — una doppia vittoria: migliore salute e meno carbonio)

Impatto carbonico monetizzato = emissioni_tonnellate_co2e × valore_carbonio_per_tonnellata
  (emissioni negative × valore positivo = costo negativo, cioè un beneficio)

NMB corretto per il carbonio = beneficio_monetario_netto − impatto_carbonico_monetizzato
```

Questo estende l'idea della frontiera di efficienza costo/QALY con un secondo asse — carbonio per QALY — con la stessa logica "traccia ogni opzione e vedi cosa è dominato" di [dominanza e frontiera di efficienza](../dominance-and-efficiency-frontier/), applicata al carbonio anziché al costo.

## Esempio risolto

Un servizio di telemedicina sostituisce le visite di persona, evitando 5.000 viaggi in auto all'anno di circa 8 kg di CO2e ciascuno — 40 tonnellate di CO2e evitate, rappresentate come cifra di emissioni negativa (−40,0 tonnellate), e produce 25 QALY all'anno:

```
Carbonio per QALY = −40,0 / 25,0 = −1,6 tonnellate di CO2e evitate per QALY guadagnato
```

Usando il valore del carbonio non scambiato del Green Book (cifra illustrativa, valore centrale non scambiato 2023 ≈ £269/tonnellata di CO2e — il Green Book aggiorna i valori del carbonio ogni anno, ricontrollare prima di citare in un'analisi attuale):

```
Impatto carbonico monetizzato = −40,0 × £269 = −£10.760
```

Un "costo" di −£10.760 è un beneficio di £10.760. Se il beneficio monetario netto autonomo dell'intervento è £500.000:

```
NMB corretto per il carbonio = £500.000 − (−£10.760) = £510.760
```

Il risparmio di carbonio si aggiunge al caso anziché sottrarsi — la doppia vittoria che l'inquadramento a emissioni negative serve a far emergere.

## Collegamento con l'ingegneria del software

È un'intersezione viva e attuale con l'economia dell'IA e del cloud: l'impronta di carbonio del calcolo per addestrare ed eseguire un modello di IA è ormai una voce reale negli appalti dell'NHS, poiché i contratti con i fornitori NHS oltre certe soglie richiedono un Carbon Reduction Plan. L'[economia unitaria del cloud](../cloud-unit-economics/) già traccia il costo per unità di output di calcolo; il carbonio per QALY è il modello naturale per una futura metrica di "costo carbonico per inferenza" che estenda quel modulo e l'economia unitaria dell'inferenza alla dimensione ambientale, anche se quella metrica non esiste ancora.

## Insidie

- **Manipolazione del perimetro**: contare solo le emissioni dirette (Scope 1) ed escludere quelle della catena di fornitura (Scope 3), che di solito rappresentano la maggior parte dell'impronta effettiva di un prodotto di sanità digitale.
- **Usare un valore del carbonio obsoleto**: il Green Book aggiorna ogni anno i suoi valori del carbonio non scambiato, quindi ogni cifra in £/tonnellata citata va datata e non riportata come costante fissa.
- **Trattare "efficiente sul carbonio" come sostituto di "costo-efficace"**: un intervento a basse emissioni e basso valore è comunque un cattivo uso delle risorse dell'NHS. Il carbonio è un quarto pilastro accanto a costo e QALY, non un sostituto di nessuno dei due.

## Fonti

- NHS England, "Delivering a Net Zero National Health Service" (2020, aggiornato 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (aggiornato annualmente; valore centrale non scambiato ≈ £269/tCO2e, 2023 — datare ogni citazione). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
