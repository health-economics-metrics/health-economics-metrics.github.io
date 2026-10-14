# Rok życia skorygowany niepełnosprawnością (DALY)

DALY mierzy obciążenie chorobą jako liczbę zdrowych lat życia utraconych z powodu przedwczesnej śmierci i niepełnosprawności.

## Dlaczego to ważne

DALY jest lustrzanym odbiciem QALY: podczas gdy QALY mierzy uzyskane zdrowie, DALY mierzy utracone zdrowie i jest standardowym wskaźnikiem w zdrowiu globalnym.

## Matematyka

```
DALY = YLL (utracone lata życia) + YLD (lata przeżyte z niepełnosprawnością)
```

## Rozwiązany przykład

Choroba powodująca śmierć 1000 osób 10 lat wcześniej (10 000 YLL) plus 5000 osób żyjących 2 lata z niepełnosprawnością 0,3 (3000 YLD) = 13 000 DALY.

## Powiązanie z inżynierią oprogramowania

Przypomina mierzenie "utraconej wartości użytkownika" poprzez awarie systemu — liczy się zarówno czas trwania, jak i dotkliwość.

## Pułapki

- **Używanie przestarzałych wag YLD ze starych badań.**
- **Mieszanie DALY i QALY bez korygowania znaku.**

## Źródła

- WHO, Global Burden of Disease study.
- Murray CJL, Lopez AD, The Global Burden of Disease.
