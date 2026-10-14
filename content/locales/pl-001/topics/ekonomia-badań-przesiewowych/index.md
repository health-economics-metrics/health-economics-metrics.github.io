# Ekonomia badań przesiewowych

Ekonomia badań przesiewowych dotyczy kryteriów Wilsona-Jungnera dotyczących tego, kiedy badania przesiewowe mają sens, oraz matematyki wyjaśniającej, dlaczego wartość predykcyjna załamuje się przy niskiej częstości występowania.

## Dlaczego to ważne

Nawet bardzo dokładny test generuje przytłaczająco dużo fałszywie pozytywnych wyników, gdy choroba podstawowa jest rzadka, co prowadzi do zmęczenia alarmami i niepotrzebnych badań kontrolnych.

## Matematyka

```
Dodatnia wartość predykcyjna (PPV) = (Czułość × Częstość występowania) / [(Czułość × Częstość występowania) + ((1−Swoistość) × (1−Częstość występowania))]
```

## Rozwiązany przykład

Test o czułości 95% i swoistości 95% zastosowany do choroby o częstości występowania 0,1% ma PPV tylko około 2% — 98% pozytywnych wyników jest fałszywych.

## Powiązanie z inżynierią oprogramowania

Bezpośrednia analogia do zmęczenia alarmami w systemach monitorowania: detektor o wysokiej dokładności zastosowany do rzadkiego zdarzenia nadal generuje przeważnie fałszywe alarmy. Do oceny skali całego programu przesiewowego, a nie jednego testu, zobacz [liczbę potrzebną do przebadania](../liczba-potrzebna-do-przebadania/) — ile osób musi przejść całą ścieżkę badanie przesiewowe i leczenie, aby zapobiec jednemu zdarzeniu.

## Pułapki

- **Cytowanie czułości i swoistości bez podania częstości występowania.**
- **Ignorowanie kryteriów Wilsona-Jungnera i przeprowadzanie badań przesiewowych bez dostępnego skutecznego leczenia.**

## Źródła

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
