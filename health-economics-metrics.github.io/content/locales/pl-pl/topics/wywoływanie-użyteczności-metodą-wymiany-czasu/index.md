# Wywoływanie użyteczności metodą wymiany czasu (TTO)

TTO to standardowa metoda uzyskiwania wartości użyteczności stanu zdrowia bezpośrednio od respondenta zamiast jej wymyślania. Jest jedną z metod wywoływania — obok standard gamble i dyskretnych eksperymentów wyboru — które tworzą zestawy wartości stojące za instrumentami takimi jak [EQ-5D](../eq-5d/), a przez to za większością dalszych obliczeń [QALY](../rok-życia-skorygowany-jakością/).

## Dlaczego to ważne

Każda waga użyteczności zasilająca obliczenie QALY musiała skądś pochodzić. TTO jest odpowiedzią „jak”: dla stanu uważanego za lepszy od śmierci respondent jest pytany, ile lat `X` w pełnym zdrowiu uznałby za równoważne `T` latom w stanie upośledzonym (`X < T`); użyteczność wynosi `X / T`. Dla stanu, który niektórzy respondenci uważają za gorszy od śmierci, standardowy wzór się załamuje (nie potrafi czysto przedstawić użyteczności poniżej zera), więc stosuje się rozszerzone TTO. Inżynier oprogramowania lub analityk, który traktuje wagę użyteczności jako daną wejściową, nie wiedząc, że jej uzyskanie wymagało zwalidowanego protokołu wywoływania, jest o krok od liczby, której nie obroni, jeśli ktoś ją zakwestionuje.

## Matematyka

```
Standardowe TTO (stan lepszy od śmierci):
  użyteczność = czas_w_pełnym_zdrowiu / czas_w_stanie_upośledzonym

Rozszerzone TTO (stan gorszy od śmierci):
  użyteczność = -czas_wymieniony_na_śmierć / (całkowity_czas - czas_wymieniony_na_śmierć)
```

`czas_w_pełnym_zdrowiu` / `czas_w_stanie_upośledzonym` — lata `X` w pełnym zdrowiu uznane za równoważne `T` latom w stanie upośledzonym. `czas_wymieniony_na_śmierć` / `całkowity_czas` — w sformułowaniu dla stanu gorszego od śmierci lata `a` z pozostałego życia `T` lat, które respondent wymieniłby na natychmiastową śmierć, preferując `T − a` lat w pełnym zdrowiu, a potem śmierć, nad `T` lat w stanie gorszym od śmierci. Wynik jest ujemny, zakotwiczony tak, że śmierć = 0.

## Rozwiązany przykład

**Standardowo**: respondent jest w stanie upośledzonym przez 10 lat i jest obojętny wobec 7 lat w pełnym zdrowiu: użyteczność = 7 / 10 = **0,7**.

**Gorszy od śmierci**: przy pozostałym życiu 10 lat respondent wymieniłby 2 lata na natychmiastową śmierć — woli 8 lat w pełnym zdrowiu, a potem śmierć, niż 10 lat w stanie gorszym od śmierci: użyteczność = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Powiązanie z inżynierią oprogramowania

Ten sam problem, na który trafia ankieta DevEx lub zaangażowania, gdy prosi ludzi o ocenę czegoś na nieprzebadanej skali 0–10, działa tu odwrotnie: TTO istnieje właśnie dlatego, że „po prostu poproś ludzi o ocenę” nie jest samo w sobie zwalidowaną metodą wywoływania. Zanim zbudujesz wskaźnik złożony — wynik DevEx, indeks zaangażowania, skalę wypalenia — na samoocenianej liczbie, zapytaj, czym ją wywołano i czy ta metoda była zwalidowana; to samo pytanie zadają ekonomiści zdrowia wadze użyteczności, zanim trafi do QALY.

## Pułapki

- **Uogólnianie wartości indywidualnej**: wartości TTO uzyskuje się od *próby* ogółu społeczeństwa (lub pacjentów), a nie od osoby, o której opiece się decyduje — użycie wartości TTO jednego respondenta tak, jakby się uogólniała, to błąd doboru próby.
- **Zła formuła dla stanu**: standardowy wzór TTO zakłada, że stan jest jednoznacznie lepszy od śmierci; zastosowanie go do stanu, który niektórzy respondenci uznaliby za gorszy od śmierci, bez przejścia na formułę rozszerzoną, po cichu daje błędną (dodatnią) użyteczność.
- **Nieporównywalne czasy trwania**: wartości TTO uzyskane przy różnych pozostałych okresach życia `T` dla porównania „gorszy od śmierci” nie są bezpośrednio porównywalne bez sprawdzenia, czy projekt badania utrzymał `T` stałe.

## Źródła

- Torrance GW. „Social preferences for health states: an empirical evaluation of three measurement techniques.” Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. „Measuring preferences for health states worse than death.” Med Decis Making. 1994;14(1):9-18.
