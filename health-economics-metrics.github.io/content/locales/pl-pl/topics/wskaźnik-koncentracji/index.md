# Wskaźnik koncentracji

Wskaźnik koncentracji (Wagstaff, Paci, van Doorslaer, 1991) to standardowa miara nierówności społeczno-ekonomicznych w zmiennej zdrowotnej, przyjmująca wartości od −1 do 1. Wartość ujemna oznacza, że zmienna zdrowotna jest skoncentrowana wśród osób w gorszym położeniu społeczno-ekonomicznym, dodatnia — że wśród zamożniejszych, a zero — że nie ma spójnego gradientu społeczno-ekonomicznego. Zamienia podejrzenie nierównego rozkładu w jedną, porównywalną liczbę.

## Dlaczego to ważne

Program może wyglądać skutecznie w ujęciu zbiorczym, a mimo to dostarczać korzyści prawie wyłącznie osobom, którym i tak powodziło się lepiej. Takie kwestie rozkładu opisowo śledzi [zasięg i sprawiedliwość](../zasięg-i-sprawiedliwość/) — zasięg warstwowany według kwintyli deprywacji, luka sprawiedliwości między górną a dolną grupą — ale tabela warstwowa nie daje się zwinąć do jednej linii trendu i trudno ją porównać między dwiema zupełnie różnymi interwencjami mierzonymi na różnych skalach. Wskaźnik koncentracji rozwiązuje oba problemy: liczy się go tak samo dla każdej zmiennej zdrowotnej względem dowolnego rankingu społeczno-ekonomicznego, więc krajowa służba zdrowia może śledzić, czy nierówność konkretnej usługi cyfrowej rośnie, czy maleje z wydania na wydanie, i porównywać sprawiedliwość rozkładu wdrożenia aplikacji z, powiedzmy, programem badań przesiewowych na tej samej znormalizowanej skali.

## Matematyka

```
CI = (2 / średnia(wartości_zdrowia)) × Kow(wartości_zdrowia, rangi_społeczno-ekonomiczne)

Kow(X, Y) = średnia(X × Y) − średnia(X) × średnia(Y)   (kowariancja populacyjna)

rangi_społeczno-ekonomiczne: ułamkowa ranga każdej osoby w rozkładzie
społeczno-ekonomicznym, w [0, 1] (0 = najbardziej upośledzona,
1 = najbardziej uprzywilejowana; dla danych grupowanych/przedziałowych
zwyczajowo ranga środka każdej grupy)
```

To „poręczny wzór kowariancyjny” (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Bank Światowy 2008) — standardowy skrót dla praktyków do obliczania wskaźnika koncentracji bezpośrednio z sparowanych obserwacji, bez uprzedniego rysowania krzywej koncentracji i całkowania pod nią.

## Rozwiązany przykład

Samoopisowy wynik dobrego zdrowia (1 = najgorszy, 4 = najlepszy) zaobserwowany w czterech równolicznych kwartylach społeczno-ekonomicznych, każdy reprezentowany przez rangę środka kwartyla:

```
wartości_zdrowia                 = [1,0, 2,0, 3,0, 4,0]
rangi_społeczno-ekonomiczne      = [0,125, 0,375, 0,625, 0,875]

średnia(wartości_zdrowia)        = 2,5
średnia(zdrowie × ranga)         = średnia([0,125, 0,75, 1,875, 3,5]) = 1,5625
średnia(rangi)                   = 0,5

Kow = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Dodatnie `0,25` oznacza, że ten wynik zdrowotny jest skoncentrowany w grupie uprzywilejowanej społeczno-ekonomicznie — respondenci z wyższymi wynikami przechylają się ku zamożniejszemu końcowi rankingu.

## Powiązanie z inżynierią oprogramowania

To ten sam pomiar nierówności oparty na kowariancji, którego używa się w ekonomii w ogóle (kuzyn współczynnika Giniego), i przekłada się na pomiar, czy korzyści z produktu programistycznego koncentrują się wśród już uprzywilejowanych segmentów użytkowników, zamiast rozkładać się sprawiedliwie — bezpośrednie rozszerzenie [zasięgu i sprawiedliwości](../zasięg-i-sprawiedliwość/) (wymiar „reach” w RE-AIM) do formalnej miary statystycznej zamiast opisanej luki. Tam, gdzie zasięg i sprawiedliwość raportuje wpływ w każdej warstwie, wskaźnik koncentracji zwija cały rozkład do jednej liczby ze znakiem, nadającej się na pojedynczy KPI śledzony między wydaniami — praktyczny na dashboardzie, gdzie pełny podział na warstwy się nie mieści.

## Pułapki

- **Dryf konwencji znaku**: znak zależy od tego, jak zdefiniowano zarówno zmienną zdrowotną, jak i rangę — odwrócenie którejkolwiek odwraca znak, więc przyjętą konwencję trzeba zawsze jawnie podawać przy każdej raportowanej wartości.
- **Rangi graniczne zamiast rangi środkowej**: dane społeczno-ekonomiczne grupowane lub przedziałowe (np. kwintyle) wymagają użycia rangi ułamkowej każdej grupy w jej *środku*, a nie na granicy, bo inaczej wskaźnik jest obciążony.
- **Odczytywanie „bliskie zera” jako „brak nierówności”**: wskaźnik koncentracji bliski zeru oznacza „brak spójnego gradientu społeczno-ekonomicznego”, a nie „brak nierówności” w sensie absolutnym — wzajemnie kompensujące się nierówności w różnych kierunkach mogą się znosić.

## Źródła

- Wagstaff A, Paci P, van Doorslaer E. „On the measurement of inequalities in health.” Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. „Analyzing Health Equity Using Household Survey Data.” World Bank. 2008 — standardowy podręcznik dla praktyków, źródło użytego tu poręcznego wzoru kowariancyjnego. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
