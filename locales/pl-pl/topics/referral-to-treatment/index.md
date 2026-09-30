# Skierowanie do leczenia (RTT)

RTT mierzy czas od pierwszego skierowania do rozpoczęcia leczenia, ze standardem 18 tygodni jako głównym krajowym wskaźnikiem wydajności.

## Dlaczego to ważne

RTT jest zasadniczo wskaźnikiem czasu realizacji dostawy zastosowanym do opieki nad pacjentem — jak długo trwa dostarczenie wartości (leczenia) po żądaniu (skierowaniu).

## Matematyka

```
Zgodność RTT = Liczba pacjentów leczonych w ciągu 18 tygodni / Całkowita liczba pacjentów w kolejce RTT × 100%
```

## Rozwiązany przykład

Specjalność z 5000 pacjentami na ścieżce RTT, z których 4100 jest leczonych w ciągu 18 tygodni: zgodność 82%, poniżej krajowego standardu 92%.

## Powiązanie z inżynierią oprogramowania

Bezpośrednia analogia do [czasu realizacji DORA](../dora-metrics/) — czas od commitu (skierowania) do dostawy (leczenia).

## Pułapki

- **Błędne stosowanie zatrzymań zegara (inicjatywa pacjenta) w celu zniekształcenia liczb zgodności.**
- **Patrzenie tylko na średnią, gdy ogon rozkładu jest rzeczywistym problemem.**

## Źródła

- NHS England, referral to treatment statistics.
- NHS Digital, RTT data quality guidance.
