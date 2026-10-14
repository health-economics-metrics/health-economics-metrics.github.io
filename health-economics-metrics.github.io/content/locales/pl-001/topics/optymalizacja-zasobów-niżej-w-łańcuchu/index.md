# Optymalizacja zasobów niżej w łańcuchu

Optymalizacja zasobów niżej w łańcuchu koncentruje się na odblokowaniu roli lub procesu, na który czekają wszyscy inni, zamiast optymalizować losowo.

## Dlaczego to ważne

Poprawa etapów niebędących wąskim gardłem na ścieżce opieki nie wpływa na całkowity czas realizacji — tylko samo wąskie gardło określa zdolność systemową.

## Matematyka

```
Przepustowość systemu = przepustowość ograniczającego etapu (wąskiego gardła)
```

## Rozwiązany przykład

Ścieżka diagnostyczna ma pięć etapów; etap 3 (interpretacja obrazu) ma najdłuższy czas oczekiwania. Przyspieszenie etapów 1, 2, 4 i 5 nie wpływa na całkowity czas realizacji, dopóki etap 3 nie zostanie rozwiązany.

## Powiązanie z inżynierią oprogramowania

Bezpośrednia analogia do teorii ograniczeń zastosowanej do potoków CI/CD — przyspiesz najwolniejszy etap, nie losowy etap.

## Pułapki

- **Inwestowanie zasobów w procesy niebędące wąskim gardłem, ponieważ łatwiej je poprawić.**
- **Brak ponownej identyfikacji wąskiego gardła po rozwiązaniu poprzedniego (wąskie gardło się przesuwa).**

## Źródła

- Goldratt EM, The Goal.
- NHS Improvement, process improvement guidance.
