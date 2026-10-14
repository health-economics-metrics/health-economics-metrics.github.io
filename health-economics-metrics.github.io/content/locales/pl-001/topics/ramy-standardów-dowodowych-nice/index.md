# Ramy standardów dowodowych NICE

Ramy standardów dowodowych NICE określają wymagania dowodowe stopniowane według ryzyka dla technologii zdrowia cyfrowego, od aplikacji dobrego samopoczucia niskiego ryzyka po narzędzia diagnostyczne wysokiego ryzyka.

## Dlaczego to ważne

Produkty zdrowia cyfrowego nie muszą wszystkie spełniać tego samego poprzeczka dowodowej — ramy skalują wymagania według poziomu ryzyka.

## Matematyka

```
Poziom dowodowy = f(klasa ryzyka funkcjonalnego, poziom ryzyka klinicznego)
```

Brak formuły numerycznej; to system klasyfikacji z odpowiadającymi progami dowodowymi.

## Rozwiązany przykład

Aplikacja do redukcji stresu mieści się w poziomie 1 (wystarczą dowody opisowe); narzędzie diagnostyczne AI do wykrywania raka mieści się w poziomie 3b (wymagane randomizowane badania kontrolowane).

## Powiązanie z inżynierią oprogramowania

Przypomina wymagania testowe oparte na ryzyku — narzędzie wewnętrzne wymaga mniej rygorystycznej walidacji niż system krytyczny dla bezpieczeństwa pacjenta.

## Pułapki

- **Błędna klasyfikacja narzędzia w celu spełnienia niższych wymagań dowodowych.**
- **Brak ponownej oceny wymagań dowodowych, gdy funkcjonalność produktu się zmienia.**

## Źródła

- NICE, Evidence Standards Framework for digital health technologies.
- NHS Digital, digital technology assessment criteria.
