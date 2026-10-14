# Inkrementalny współczynnik efektywności kosztowej (ICER)

ICER mierzy dodatkowy koszt na dodatkową jednostkę wyniku zdrowotnego jednej interwencji w porównaniu z alternatywą.

## Dlaczego to ważne

ICER to centralna reguła decyzyjna w większości systemów HTA: poniżej progu = efektywne kosztowo, powyżej = nie.

## Matematyka

```
ICER = (Koszt_A − Koszt_B) / (Efekt_A − Efekt_B)
```

## Rozwiązany przykład

Nowe leczenie kosztuje £5000 więcej i daje 0,25 dodatkowego QALY w porównaniu ze standardowym leczeniem: ICER = £5000 / 0,25 = £20 000/QALY — tuż poniżej progu NICE.

## Powiązanie z inżynierią oprogramowania

Przypomina obliczanie dodatkowego kosztu infrastruktury na dodatkową jednostkę niezawodności lub wydajności przy porównywaniu opcji architektonicznych.

## Pułapki

- **Obliczanie ICER względem niewłaściwego punktu odniesienia.**
- **Błędna interpretacja ujemnego ICER bez określenia ćwiartki.**
- **Porównywanie ICER między walutami bez jawnego kroku przeliczenia**: ICER obliczony w walucie jednego kraju trzeba przeliczyć podaną metodą, zanim porówna się go z progiem innego kraju — zobacz [porównywanie ICER między walutami](../porównywanie-icer-między-walutami/), dlaczego sam wybór współczynnika przeliczenia (parytet siły nabywczej vs kurs rynkowy) może odwrócić decyzję o wdrożeniu.

## Źródła

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
