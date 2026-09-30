# Wskaźniki jakości AI

Wskaźniki jakości AI mierzą dokładność, niezawodność i bezpieczeństwo wyjścia modelu: precyzję, czułość, wskaźnik halucynacji.

## Dlaczego to ważne

Nawet systemy AI o wysokiej przepustowości mogą mieć koszty korekty niżej w łańcuchu przewyższające oszczędności, jeśli jakość jest niska.

## Matematyka

```
Wynik F1 = 2 × (precyzja × czułość) / (precyzja + czułość)
```

## Rozwiązany przykład

Narzędzie AI do kodowania klinicznego: precyzja 0,85, czułość 0,78 = F1 0,81.

## Powiązanie z inżynierią oprogramowania

Ogólne wskaźniki jakości oprogramowania, które są podstawą [klinicznej oceny AI](../clinical-ai-evaluation/).

## Pułapki

- **Patrzenie tylko na dokładność, ignorowanie niezrównoważenia klas.**

## Źródła

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
