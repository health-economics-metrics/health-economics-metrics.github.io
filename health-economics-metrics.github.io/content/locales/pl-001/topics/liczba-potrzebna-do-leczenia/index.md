# Liczba potrzebna do leczenia (NNT)

NNT mierzy, ilu pacjentów należy leczyć, aby zapobiec jednemu dodatkowemu niekorzystnemu wynikowi — intuicyjna jednostka nakładu na korzyść.

## Dlaczego to ważne

NNT przekłada abstrakcyjną istotność statystyczną na praktyczną liczbę, którą klinicyści i decydenci mogą zrozumieć i porównać między metodami leczenia.

## Matematyka

```
NNT = 1 / Bezwzględna redukcja ryzyka
```

## Rozwiązany przykład

Lek zmniejsza ryzyko zawału serca z 10% do 8% (bezwzględna redukcja ryzyka 2%): NNT = 1/0,02 = 50 — 50 pacjentów musi być leczonych, aby zapobiec jednemu zawałowi serca.

## Powiązanie z inżynierią oprogramowania

Przypomina obliczanie, ilu użytkowników musi doświadczyć nowej funkcji, aby wygenerować jedną dodatkową konwersję. [Liczba potrzebna do przebadania](../liczba-potrzebna-do-przebadania/) to analogiczna miara piętro wyżej, dla całego programu badanie-potem-leczenie, a nie samej terapii.

## Pułapki

- **Porównywanie NNT między badaniami o różnym ryzyku podstawowym bez korekty.**
- **Mylenie niskiego NNT z klinicznie istotnym efektem bez uwzględnienia dotkliwości wyniku.**

## Źródła

- Cook RJ, Sackett DL, "The number needed to treat: a clinically useful measure of treatment effect."
- BMJ Best Practice, NNT calculation guide.
