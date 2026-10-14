# Wielokryterialna analiza decyzyjna (MCDA)

Wielokryterialna analiza decyzyjna (MCDA) to model punktowy z sumą ważoną, używany w ocenie technologii medycznych, gdy pojedynczy próg ICER/gotowości do zapłaty nie obejmuje wszystkiego, na czym zależy decydentowi: sprawiedliwości, niezaspokojonych potrzeb, innowacji, wpływu na budżet, ciężkości choroby. Każde kryterium dostaje wagę odzwierciedlającą jego ważność (pozyskaną od interesariuszy, wagi sumują się do 1), każda opcja dostaje znormalizowany wynik na kryterium (zwykle 0–1), a wynik łączny to suma ważona — ta sama matematyczna postać co karta ocen wyboru dostawcy oprogramowania.

## Dlaczego to ważne

MCDA stosuje się w ramach takich jak EVIDEM oraz w niektórych organach HTA przy ocenach leków sierocych i chorób rzadkich, gdzie ścisłe podejście z progiem kosztu na QALY uważa się za zbyt wąskie, by uchwycić wszystko, co w decyzji ważne. Grupa zadaniowa ISPOR MCDA Emerging Good Practices sformalizowała wytyczne dobrej praktyki co do rzetelnego pozyskiwania wag i wyników, właśnie dlatego, że nieformalnie ważoną decyzję łatwo skonstruować i łatwo nią manipulować. Gdy technologia medyczna naprawdę ma wymiary wartości, których pojedynczy [próg gotowości do zapłaty](../progi-gotowości-do-zapłaty/) nie potrafi wyrazić — ciężkość, innowacja, sprawiedliwość — MCDA daje decydentom jawną, kontrolowalną strukturę ich łączenia zamiast niewypowiedzianej oceny uznaniowej.

## Matematyka

```
Wynik MCDA = Σ_i (waga_i × wynik_i)

wagi powinny sumować się do 1 (pozyskane metodami interesariuszy, takimi
jak swing weighting lub Analytic Hierarchy Process)
```

## Rozwiązany przykład

Komisja HTA ocenia cyfrową terapię według czterech kryteriów:

```
Kryterium                          Waga     Wynik   Waga × Wynik
Korzyść kliniczna                  0,4      0,8     0,32
Wpływ na koszty                    0,3      0,5     0,15
Ciężkość choroby / niezaspokojona potrzeba 0,2  0,9  0,18
Innowacja                          0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Wagi sumują się do 1,0 (0,4 + 0,3 + 0,2 + 0,1), a wynik MCDA to 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komisja porównuje 0,71 z wcześniej uzgodnionym progiem albo szereguje technologię względem konkurencyjnych, ocenionych w ten sam sposób.

## Powiązanie z inżynierią oprogramowania

To dokładnie ta sama matematyka co ważona karta ocen wyboru dostawcy, macierz oceny RFP lub model punktowy priorytetyzacji funkcji — zobacz [budować kontra kupić](../budować-kontra-kupić/), klasyczny przypadek użycia ważonej karty ocen w zakupach oprogramowania. Warto też zestawić ją z [WSJF i CD3](../wsjf-i-cd3/): WSJF/CD3 to metoda priorytetyzacji oparta na *ilorazie* (koszt opóźnienia podzielony przez wielkość lub czas trwania pracy), a MCDA to suma *ważona*. MCDA i WSJF/CD3 to dwie strukturalnie różne odpowiedzi na pytanie „jak szeregujemy konkurujące opcje”, a wiedza, której z nich dana decyzja faktycznie wymaga — addytywnej wartości po niezależnych kryteriach czy gęstości wartości na jednostkę rzadkiej zdolności — liczy się bardziej niż to, który wzór wygląda na bardziej rygorystyczny.

## Pułapki

- **Stronniczość w pozyskiwaniu wag**: ten, kto ustala wagi, faktycznie z góry przesądza ranking, więc „wzór” może wyprać decyzję polityczną lub komercyjną w obiektywne obliczenie. Udokumentuj, kto ustalił wagi i jak.
- **Podwójne liczenie kryterium już ujętego gdzie indziej**: ocenianie „efektywności kosztowej” jako jednego kryterium *oraz* osobno „wpływu na koszty” nadmiernie waży pieniądze względem pozostałych kryteriów, choć nikt tego nie zamierzał.
- **Fałszywa precyzja**: ważony wynik z dwoma miejscami po przecinku (0,71) sugeruje większy rygor, niż faktycznie niosą leżące u podstaw oceny interesariuszy w skali 0–10, a zmienność między oceniającymi w tych ocenach często w ogóle nie jest raportowana.

## Źródła

- Thokala P, Devlin N, Marsh K, et al. „Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force.” Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. „Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications.” BMC Health Serv Res. 2008;8:270.
