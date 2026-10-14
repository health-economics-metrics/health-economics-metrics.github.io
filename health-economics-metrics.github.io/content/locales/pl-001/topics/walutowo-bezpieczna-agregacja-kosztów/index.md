# Walutowo bezpieczna agregacja kosztów

Sumowanie wielu pozycji pieniężnych — miesięcznych faktur, kosztów na lokalizację, wieloletnich liczb wpływu na budżet — zwykłymi binarnymi liczbami zmiennoprzecinkowymi (`f64`) gromadzi drobne błędy reprezentacji, ponieważ większości ułamków dziesiętnych (np. 1 234,56 $) nie da się dokładnie przedstawić w binarnej zmiennej przecinkowej. Każdy błąd z osobna jest malutki, ale duży model sumujący setki lub tysiące pozycji przez kilka lat może dryfować o ułamki centa — a dryf zależy od *kolejności* dodawań, co czyni go niepowtarzalnym. Agregacja walutowa wykonana w dokładnej arytmetyce dziesiętnej (lub całkowitej w najmniejszej jednostce) sumuje dokładnie, zgodnie z tym, jak systemy księgowe i podwójne księgowanie muszą się bilansować co do centa.

## Dlaczego to ważne

To dobrze udokumentowana, podstawowa klasa błędów oprogramowania: artykuł Goldberga z 1991 r. w ACM Computing Surveys, „What Every Computer Scientist Should Know About Floating-Point Arithmetic”, to standardowe źródło wyjaśniające, dlaczego binarna zmienna przecinkowa nie może dokładnie reprezentować większości dziesiętnych wartości pieniężnych i dlaczego sumowanie wielu z nich spiętrza błąd. Modele ekonomii zdrowia i finansów NHS rutynowo sumują wiele lat i wiele kategorii kosztów — [całkowity koszt posiadania](../całkowity-koszt-posiadania/) i [analiza wpływu na budżet](../analiza-wpływu-budżetowego/) agregują wielką liczbę pozycji kosztów `f64` w horyzontach wieloletnich. Gdy model musi się zbilansować co do centa — audyt przeliczający sumę ręcznie musi uzyskać *identyczną* liczbę — sama arytmetyka musi być dokładna dziesiętna, a nie zmiennoprzecinkowa.

## Matematyka

```
Naiwna agregacja:             suma = Σ f64(pozycja_i)         — dryf zależny od kolejności
Walutowo bezpieczna agregacja: suma = Σ Decimal(pozycja_i)     — dokładna, powtarzalna

Zastosowanie korekty procentowej (np. bufora rezerwy):
  skorygowana = suma × mnożnik            — dokładny wynik Decimal, może mieć więcej
                                             miejsc dziesiętnych niż wykładnik
                                             najmniejszej jednostki waluty
  zaokrąglona = zaokrąglij(skorygowana, wykładnik_waluty, reguła_zaokrąglania)  — regułę
                                             zaokrąglania (half-up vs. half-even/
                                             zaokrąglanie bankierskie) trzeba
                                             podać jawnie
```

Zwróć uwagę na dwustopniową dyscyplinę: pomnożenie dokładnej kwoty `Decimal` przez mnożnik może dać więcej miejsc dziesiętnych, niż waluta faktycznie używa (np. trzy miejsca dziesiętne z kwoty z dwoma miejscami razy mnożnik z dwoma miejscami) — ta pośrednia precyzja *nie* jest automatycznie zaokrąglana; dopiero jawny krok zaokrąglania z podaną regułą sprowadza ją do rzeczywistego wykładnika najmniejszej jednostki waluty.

## Rozwiązany przykład

Dwanaście identycznych miesięcznych faktur po 1 234,56 $, zsumowanych w dokładnej arytmetyce dziesiętnej: 1 234,56 $ × 12 = **14 814,72 $**, dokładnie. Zestaw to z dwunastokrotnym sumowaniem literału `f64` `1234.56` w podwójnej precyzji IEEE-754, które może dryfować o ułamki centa w zależności od kolejności sumowania — to realna, udokumentowana klasa błędów, a nie problem dla modelu zbudowanego na dokładnej arytmetyce dziesiętnej `Money`.

Zastosuj teraz standardowy bufor rezerwy na wpływ na budżet w wysokości 5% (mnożnik 1,05) do tej sumy 14 814,72 $: 14 814,72 $ × 1,05 = 15 555,456 $ — trzy miejsca dziesiętne, bo mnożenie jest dokładne i nie jest automatycznie zaokrąglane do dwóch miejsc dziesiętnych waluty. Jawnie zaokrąglone do 2 miejsc dziesiętnych zaokrąglaniem bankierskim (half-even) daje dokładnie **15 555,46 $**.

## Powiązanie z inżynierią oprogramowania

To bezpośrednia, podstawowa lekcja stojąca za zasadą „oprogramowanie finansowe używa `Decimal`, a nie `float`” — wiąże się wprost z modułami [całkowity koszt posiadania](../całkowity-koszt-posiadania/) i [analiza wpływu na budżet](../analiza-wpływu-budżetowego/) tego repozytorium, które obecnie oba sumują zwykłe koszty zmiennoprzecinkowe; argument poprawnościowy nie wymaga natychmiastowej migracji tych modeli, ale dokładnie określa, *kiedy* system musi bilansować się co do centa i dlatego nie może używać binarnej zmiennej przecinkowej do arytmetyki pieniężnej. Zobacz też [dokładny podział kosztów co do centa](../dokładny-podział-kosztów-co-do-centa/), czyli powiązany problem dzielenia (zamiast sumowania) sum bez gubienia centów.

## Pułapki

- **Konwersja do `float` w środku łańcucha**: wyciągnięcie wartości pieniężnej do liczby zmiennoprzecinkowej w połowie obliczeń (niektóre biblioteki `Money` nazywają nawet tę metodę konwersji czymś w rodzaju „lossy” jako wyraźne ostrzeżenie) po cichu odrzuca gwarancję dokładności dla każdego obliczenia po tym punkcie.
- **„Decimal jest za wolny, żeby się przejmować”**: odrzucanie dokładnej arytmetyki dziesiętnej jako niepotrzebnego narzutu, gdy w sprawozdawczości finansowej liczy się poprawność i możliwość audytu, a nie surowa przepustowość.
- **Stosowanie procentu rezerwy bez podania reguły zaokrąglania**: half-up a half-even (zaokrąglanie bankierskie) może zmienić ostatni cent; sama konwencja zaokrąglania musi być podanym, kontrolowalnym wyborem — zobacz [analizę kosztów i korzyści](../analiza-kosztów-i-korzyści/), gdzie wytyczne Green Book HM Treasury o korektach na rezerwy i optimism bias dotyczą dokładnie takich liczb, do których stosuje się ten krok zaokrąglania.

## Źródła

- Fowler M. „Patterns of Enterprise Application Architecture.” Addison-Wesley, 2002 — wzorzec `Money`.
- Goldberg D. „What Every Computer Scientist Should Know About Floating-Point Arithmetic.” ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — wytyczne dotyczące optimism bias i rezerw w modelowaniu wpływu na budżet. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
