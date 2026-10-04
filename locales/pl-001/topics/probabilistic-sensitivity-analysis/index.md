# Probabilistyczna analiza wrażliwości

Probabilistyczna analiza wrażliwości (PSA) zmienia wszystkie niepewne parametry jednocześnie za pomocą symulacji Monte Carlo, aby uzyskać rozkład prawdopodobieństwa wyników.

## Dlaczego to ważne

Prosta analiza wrażliwości testuje jedną zmienną naraz; PSA uchwyca łączną niepewność wszystkich parametrów razem.

## Matematyka

```
Dla każdej symulacji i: wylosuj wartości parametrów z ich rozkładów, oblicz wynik_i
Prawdopodobieństwo efektywności kosztowej = liczba symulacji poniżej progu / całkowita liczba symulacji
```

## Rozwiązany przykład

10 000 symulacji Monte Carlo nowego narzędzia diagnostycznego pokazuje, że jest ono efektywne kosztowo w 72% symulacji przy progu £20 000/QALY.

## Powiązanie z inżynierią oprogramowania

Przypomina testowanie obciążeniowe metodą Monte Carlo, które zmienia wiele niepewnych parametrów systemu jednocześnie.

## Pułapki

- **Ignorowanie korelacji między parametrami przy próbkowaniu.**
- **Błędna interpretacja CEAC jako prostego procentu zamiast rozkładu prawdopodobieństwa.**

## Źródła

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
