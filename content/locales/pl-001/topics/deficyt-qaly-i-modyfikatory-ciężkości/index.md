# Deficyt QALY i modyfikatory ciężkości

Deficyt QALY mierzy, ile zdrowia grupa pacjentów już traci w porównaniu z normalną oczekiwaną długością życia; modyfikatory ciężkości nadają dodatkową wagę zyskom zdrowotnym dla bardziej chorych populacji.

## Dlaczego to ważne

Bez korekty standardowy próg ICER traktuje QALY uzyskane przez poważnie chorego pacjenta tak samo jak QALY uzyskane przez lekko chorego pacjenta.

## Matematyka

```
Deficyt = oczekiwane zdrowe QALY bez choroby − oczekiwane QALY z chorobą
Zmodyfikowany próg = próg bazowy × waga ciężkości(deficyt)
```

## Rozwiązany przykład

Modyfikator ciężkości NICE podnosi efektywny próg do £30 000/QALY dla stanów z deficytem QALY 12 lub więcej, w porównaniu ze standardowym zakresem £20 000–£30 000.

## Powiązanie z inżynierią oprogramowania

Przypomina nadawanie wyższego priorytetu naprawianiu błędów dotykających najbardziej poszkodowanych użytkowników, nawet jeśli liczba poszkodowanych użytkowników jest mała.

## Pułapki

- **Obliczanie deficytu z niewłaściwą populacją referencyjną.**
- **Stosowanie modyfikatorów ciężkości na już skorygowanych progach, co powoduje podwójne liczenie.**

## Źródła

- NICE, health technology evaluations manual (severity modifier).
- Shah KK, et al., severity of illness in health technology assessment.
