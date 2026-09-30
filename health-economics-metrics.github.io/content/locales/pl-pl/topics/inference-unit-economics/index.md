# Ekonomia jednostkowa wnioskowania

Ekonomia jednostkowa wnioskowania mierzy koszt pojedynczej predykcji lub generowania modelu AI.

## Dlaczego to ważne

Koszty trenowania są jednorazowe, ale koszty wnioskowania powtarzają się w nieskończoność, proporcjonalnie do użycia.

## Matematyka

```
Koszt na wnioskowanie = (koszt na godzinę GPU × czas przetwarzania) / liczba żądań
```

## Rozwiązany przykład

Model wsparcia interpretacji obrazów: GPU £2/godzinę, 1000 przetworzeń/godzinę = £0,002 na interpretację.

## Powiązanie z inżynierią oprogramowania

Przypadek specyficzny dla AI [ekonomii jednostkowej chmury](../cloud-unit-economics/) i kluczowy czynnik dla [zwrotu z inwestycji w AI](../ai-return-on-investment/).

## Pułapki

- **Ignorowanie rabatów przetwarzania wsadowego i obliczanie kosztami pojedynczych żądań.**

## Źródła

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
