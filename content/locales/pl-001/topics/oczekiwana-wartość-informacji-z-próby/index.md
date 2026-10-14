# Oczekiwana wartość informacji z próby (EVSI)

EVSI to wartość *konkretnego, proponowanego badania* — danego projektu, danej wielkości próby — zanim zostanie przeprowadzone, w odróżnieniu od [EVPI](../oczekiwana-wartość-doskonałej-informacji/), które wycenia całkowite usunięcie całej niepewności. EVSI odpowiada na pytanie, przed którym faktycznie staje fundator badań: „czy *to* badanie, w *tej* wielkości, jest warte swojego kosztu?”

## Dlaczego to ważne

EVPI podaje pułap tego, ile mogłyby być warte jakiekolwiek badania; nigdy nie mówi, czy badanie, które leży na stole, przekracza próg. Krajowy fundator badań wybierający między pilotażem na 50 pacjentach a rozstrzygającym badaniem na 500 pacjentach musi wiedzieć, ile wart jest *każdy konkretny projekt*, a nie tylko wartość wszechwiedzy. EVSI dostarcza tę liczbę, a ponieważ skaluje się z wielkością próby, pozwala fundatorowi znaleźć wielkość próby maksymalizującą oczekiwaną korzyść netto zamiast zgadywać.

Dlatego też EVSI jest zawsze mniejsze lub równe EVPI: skończona próba może tylko częściowo rozstrzygnąć niepewność, a badanie, które wydaje się warte więcej niż doskonała informacja, jest oznaką błędu w obliczeniach, a nie realnego wyniku.

## Matematyka

```
Ogólnie:
EVSI(n) = E_dane[ max_d E_θ|dane[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (zagnieżdżona wartość oczekiwana: zewnętrzna po możliwych wynikach badania,
  wewnętrzna po przekonaniu a posteriori o θ po zobaczeniu tego wyniku —
  zwykle szacowana zagnieżdżonym Monte Carlo / aktualizacją bayesowską
  po losowaniach probabilistycznej analizy wrażliwości)

Przybliżenie normalne w postaci zamkniętej (jeden niepewny parametr,
sprzężony model normalny-normalny — standardowy skrót, nie dokładny dla
każdego modelu):
EVSI(n) = EVPI × n / (n + n0)

n  = wielkość próby proponowanego badania
n0 = „wielkość próby równoważna priorowi” — rozmiar wyobrażonej próby, która
     niosłaby tyle samo informacji co obecny prior, wyprowadzona ze stosunku
     wariancji danych do wariancji priora
ENBS(n) = EVSI(n) − Koszt(n)
EVSI populacyjne = EVSI_na_decyzję × liczba_dotkniętych_decyzji
```

Postać ogólna jest zagnieżdżoną wartością oczekiwaną, bo przyszły wynik badania sam jest niepewny: trzeba uśrednić po każdym możliwym zbiorze danych, jaki badanie mogłoby dać, i dla każdego ponownie obliczyć najlepszą decyzję przy zaktualizowanym (a posteriori) przekonaniu. Przybliżenie normalne w postaci zamkniętej zamienia ten koszt obliczeniowy na pojedynczy stosunek, ważny, gdy niepewny parametr i dane są (w przybliżeniu) normalne i sprzężone — wygoda, a nie uniwersalne prawo. Pełne zagnieżdżone Monte Carlo to metoda ogólnego przeznaczenia, gdy to założenie nie zachodzi. Zobacz [probabilistyczną analizę wrażliwości](../probabilistyczna-analiza-wrażliwości/), skąd zwykle szacuje się EVSI na podstawie losowań PSA.

## Rozwiązany przykład

Wychodząc od rozwiązanego przykładu [EVPI](../oczekiwana-wartość-doskonałej-informacji/) — wdrożenie asystenta dokumentacji AI dla 5 000 klinicystów, gdzie EVPI wyniosło £1,2 mln — wyraźmy tu to samo EVPI w pełnych funtach: **EVPI = £1 200 000**.

Na stole jest proponowane badanie pilotażowe na 50 klinicystach. Ze stosunku wariancji wcześniejszego przekonania do precyzji pomiaru pilotażu wynika wielkość próby równoważna priorowi `n0 = 75`:

```
EVSI(50) = 1 200 000 × 50 / (50 + 75)
         = 1 200 000 × 50 / 125
         = 1 200 000 × 0,4
         = £480 000
```

Pilotaż kosztuje £120 000:

```
ENBS = EVSI − Koszt = 480 000 − 120 000 = £360 000
```

Wyraźnie dodatnie ENBS: sfinansuj pilotaż. Jeśli ta sama decyzja zakupowa powtarza się w 3 podobnych regionalnych trustach, wartość pilotażu skaluje się:

```
EVSI populacyjne = 480 000 × 3 = £1 440 000
```

## Powiązanie z inżynierią oprogramowania

EVSI to ekonomia wyboru, *jak duży* powinien być pilotaż lub test A/B, a nie tylko tego, czy w ogóle go przeprowadzać:

- **Wielkość próby jako decyzja inwestycyjna.** Beta na 50 użytkownikach i etapowe wdrożenie na 5 000 to różne „badania” o różnych EVSI i kosztach — EVSI pozwala porównać je na tej samej podstawie zamiast wpadać w domyślne „więcej danych jest zawsze lepiej”.
- **Test zlecenia to ENBS, nie samo EVSI.** Badanie z wysokim EVSI, którego koszt pochłania większość tej wartości, jest słabą propozycją; reguła decyzyjna to oczekiwana korzyść netto z próbkowania, dokładnie tak jak biznesplan zestawia korzyść z kosztem zamiast raportować samą korzyść.
- **Malejące przychody są jawne.** Ponieważ EVSI(n) rośnie z `n/(n+n0)`, podwojenie wielkości pilotażu nigdy nie podwaja jego wartości — formalna wersja inżynierskiego instynktu, że większy eksperyment ma malejącą krańcową wartość informacji.

## Pułapki

- **Stosowanie przybliżenia normalnego poza jego założeniami.** Działa tylko dla w przybliżeniu sprzężonej niepewności jednego parametru; naprawdę nieliniowy lub wieloparametrowy model decyzyjny wymaga pełnego zagnieżdżonego Monte Carlo, a nie tego skrótu.
- **Porównywanie EVSI wyłącznie z kosztem gotówkowym.** EVSI trzeba zestawić z *pełnym* kosztem badania, łącznie z jego własnym kosztem opóźnienia decyzji — zobacz [koszt opóźnienia](../koszt-opóźnienia/) — a nie tylko z fakturą za badanie.
- **Traktowanie EVSI > EVPI jako realnego odkrycia.** EVSI z konstrukcji nigdy nie może przekroczyć EVPI; obliczenie, które to daje, jest błędem modelu, a nie odkryciem.

## Źródła

- Ades AE, Lu G, Claxton K. „Expected value of sample information calculations in medical decision modeling.” Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. „The value of information and optimal clinical trial design.” Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. „When is a model-based value of information analysis feasible?” Medical Decision Making 2014.
