# Ułamek przypisywalny populacyjnie (PAF)

PAF to część obciążenia chorobą lub wynikiem w populacji, którą można przypisać ekspozycji na określony czynnik ryzyka — udział, który zniknąłby, gdyby ekspozycję całkowicie usunąć. Zamienia „ten czynnik ryzyka podwaja twoje szanse” w liczbę na poziomie populacji, wokół której płatnik może realnie planować: ile przypadków i ile kosztów dana ekspozycja jest faktycznie warta zwalczania.

## Dlaczego to ważne

Levin wprowadził PAF w 1953 r., by odpowiedzieć na wąskie, konkretne pytanie: gdyby nikt nie palił, ile raka płuca by zniknęło? Ta sama arytmetyka wyznacza dziś skalę krajowego planowania profilaktyki wszędzie, od strategii antytytoniowych i walki z otyłością po rankingi czynników ryzyka w badaniu Global Burden of Disease WHO, bo samo ryzyko względne nic nie mówi o wpływie — czynnik ryzyka może podwajać szanse rzadkiego zdarzenia i prawie nie ruszyć obciążenia chorobą w populacji albo tylko nieco podnosić szanse częstego zdarzenia i mimo to odpowiadać za ogromny odsetek przypadków. PAF zamienia „czynnik ryzyka X jest groźny” w „usunięcie czynnika ryzyka X zapobiegłoby tylu przypadkom rocznie”, czyli w liczbę, której faktycznie potrzebuje biznesplan programu profilaktycznego. Zobacz [ekonomię profilaktyki](../ekonomia-profilaktyki/), ile kosztuje działanie na podstawie tej liczby, gdy już ją masz.

## Matematyka

```
PAF = częstość_narażonych × (ryzyko_względne − 1) / (1 + częstość_narażonych × (ryzyko_względne − 1))

częstość_narażonych = odsetek populacji narażony na czynnik ryzyka (0–1)
ryzyko_względne     = ryzyko wyniku u narażonych vs. nienarażonych (np. 2,5 = 2,5×)

Przypadki przypisywalne = przypadki_ogółem × PAF
```

PAF rośnie zarówno z częstością ekspozycji, jak i z ryzykiem względnym — umiarkowanie podwyższone ryzyko względne (powiedzmy 1,5×) przy bardzo powszechnej ekspozycji może dać większy PAF niż dramatyczne ryzyko względne (powiedzmy 5×) przy rzadkiej. To cały powód, dla którego istnieje jako osobna liczba obok ryzyka względnego.

## Rozwiązany przykład

Czynnik ryzyka występuje u 30% populacji (`częstość_narażonych = 0,3`) i zwiększa ryzyko wyniku 2,5-krotnie (`ryzyko_względne = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

Przy 1 000 przypadków/rok w populacji:
Przypadki przypisywalne = 1 000 × 0,3103 ≈ 310 przypadków/rok
```

Niewiele mniej niż jedna trzecia rocznego obciążenia tym wynikiem jest przypisywalna ekspozycji — jej całkowite wyeliminowanie (teoretyczny pułap; żadna realna interwencja nie usuwa ekspozycji w 100%) zapobiegałoby co roku około 310 z 1 000 przypadków.

## Powiązanie z inżynierią oprogramowania

PAF to epidemiologiczna wersja pytania „jaka część naszego wolumenu incydentów jest przypisywalna tej jednej przyczynie źródłowej?” — tego samego rodzaju pytania, jakie zespoły zadają, gdy zestawiają konkretną klasę wdrożeń lub zależności z ogółem incydentów produkcyjnych, zamiast traktować każdy incydent jako równie wart naprawy w ten sam sposób. Kategoria przyczyn źródłowych obecna w dużej części wdrożeń, z jedynie umiarkowanym ryzykiem względnym wywołania incydentu, może wyprzedzić rzadką kategorię o wysokim ryzyku względnym przy decyzji, na co przeznaczyć wysiłek inżynierski w pierwszej kolejności — dokładnie wniosek z PAF, przełożony.

## Pułapki

- **Sumowanie PAF po czynnikach ryzyka**: PAF dla wielu czynników wpływających na ten sam wynik nie sumują się do 100% — razem mogą je przekroczyć, bo czynniki oddziałują na siebie i dzielą ścieżki przyczynowe. Traktuj każdy PAF jako „gdyby usunąć tylko ten czynnik”, nigdy jako podział całkowitego ryzyka.
- **Przenoszenie ryzyka względnego między populacjami**: ryzyko względne oszacowane w jednej populacji (inna bazowa częstość ekspozycji, inne czynniki zakłócające) daje mylący PAF, gdy zastosuje się je do częstości ekspozycji w innej populacji.
- **Mylenie PAF z ryzykiem przypisywalnym u narażonych**: PAF jest na poziomie populacji i zależy od częstości ekspozycji; ryzyko przypisywalne u narażonych jest na poziomie indywidualnym i nie zależy. Odpowiadają na różne pytania — nie przywołuj jednego, by odpowiedzieć na drugie.

## Źródła

- Levin ML. „The occurrence of lung cancer in man.” Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. „Use and misuse of population attributable fractions.” Am J Public Health. 1998;88(1):15-9.
