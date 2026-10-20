# Symulacja kohortowa Markowa

Model kohortowy Markowa to standardowa technika modelowania w HTA dla interwencji, których skutki rozwijają się w wielu okresach (cyklach), a nie za jednym razem. Hipotetyczna kohorta zaczyna w całości w jednym stanie zdrowia, a w każdym cyklu stały zestaw prawdopodobieństw przejścia przesuwa ułamki kohorty między stanami; koszty i QALY narastają w każdym cyklu proporcjonalnie do tego, jaka część kohorty zajmuje każdy stan, i są dyskontowane do wartości bieżącej. Każdy inżynier oprogramowania modelujący wieloletni biznesplan cyfrowego zdrowia — w którym użytkownicy lub pacjenci przechodzą z czasem między stanami takimi jak „zaangażowany”, „odpadł” czy „zrezygnował” — buduje tę samą strukturę.

## Dlaczego to ważne

Większość realnych decyzji dotyczących technologii medycznych to nie jednorazowe porównania kosztu i wyniku z jednego okresu. Choroba przewlekła postępuje, nawraca, reaguje na leczenie lub zabija — przez lata — a jednookresowa [analiza efektywności kosztowej](../analiza-efektywności-kosztowej/) nie potrafi tego odwzorować. Zgłoszenia do NICE, ICER i CADTH dla interwencji w chorobach przewlekłych, oceniane przez [ocenę technologii medycznych](../ocena-technologii-medycznych/), są niemal zawsze budowane jako modele kohortowe Markowa z dożywotnim horyzontem czasowym, bo alternatywa — modelowanie każdej możliwej indywidualnej ścieżki pacjenta — jest w dużej skali nie do ogarnięcia. Model Markowa na poziomie kohorty wymienia część realizmu na poziomie indywidualnym (trudno mu odwzorować pamięć o dawnych stanach, stąd „Markowa”: przyszłość zależy tylko od bieżącego stanu) na model, który jest przejrzysty, możliwy do audytu i dość szybki, by uruchamiać go tysiące razy w [probabilistycznej analizie wrażliwości](../probabilistyczna-analiza-wrażliwości/).

## Matematyka

```
Aktualizacja kohorty w jednym cyklu (wektor wierszowy × macierz przejść):
  nowy_stan[j] = suma_i stan[i] * macierz_przejść[i][j]

Koszt jednego cyklu:
  koszt_cyklu = suma_s stan[s] * koszt_na_cykl[s]

QALY jednego cyklu:
  qaly_cyklu = suma_s stan[s] * użyteczność[s] * długość_cyklu_lat

Pełna symulacja przez `cykle` cykli, dyskontowana stopą `stopa_dyskontowa`:
  łączny_zdyskontowany_koszt = suma_{t=0}^{cykle-1} koszt_cyklu(stan_t) / (1 + stopa_dyskontowa)^t
  łączne_zdyskontowane_qaly  = suma_{t=0}^{cykle-1} qaly_cyklu(stan_t)  / (1 + stopa_dyskontowa)^t
  gdzie stan_0 = rozkład_początkowy, stan_{t+1} = przesuń_kohortę(stan_t, macierz_przejść)
```

Dyskontowanie każdego cyklu do wartości bieżącej używa dokładnie wzoru z [dyskontowania i preferencji czasowej](../dyskontowanie-i-preferencja-czasowa/), stosowanego cykl po cyklu zamiast rok po roku.

## Rozwiązany przykład

**Klinicznie**: model z 2 stanami — `Zdrowy` i `Zmarły` — w którym 10% kohorty umiera w każdym cyklu, a `Zmarły` jest stanem pochłaniającym (jego prawdopodobieństwo przejścia do samego siebie wynosi 1,0; pominięcie tej pętli sprawiłoby, że masa kohorty znikałaby po jednym cyklu w stanie `Zmarły`). Kohorta zaczyna w całości `Zdrowa`, kosztuje £1 000 na cykl, gdy jest `Zdrowa` (£0, gdy `Zmarła`), i zyskuje 0,8 QALY rocznie, gdy jest `Zdrowa`. Symulacja na 3 roczne cykle przy stopie dyskontowej NICE 3,5%:

```
Cykl 0: stan = [1,00, 0,00] (100% Zdrowych)
  koszt = £1 000,00, qaly = 0,800, czynnik dyskontowy = 1,000000
  zdyskontowane: koszt = £1 000,00, qaly = 0,8000

Cykl 1: stan = [0,90, 0,10] (90% Zdrowych, 10% Zmarłych)
  koszt = £900,00, qaly = 0,720, czynnik dyskontowy = 0,966184
  zdyskontowane: koszt = £869,57, qaly = 0,6957

Cykl 2: stan = [0,81, 0,19] (81% Zdrowych, 19% Zmarłych)
  koszt = £810,00, qaly = 0,648, czynnik dyskontowy = 0,933511
  zdyskontowane: koszt = £756,14, qaly = 0,6049

Łączny zdyskontowany koszt ≈ £2 625,71
Łączne zdyskontowane QALY  ≈ 2,1006
```

Stan każdego cyklu to stan poprzedniego cyklu przepuszczony przez macierz przejść — 90% z tych 90%, którzy w cyklu 1 są jeszcze `Zdrowi`, pozostaje `Zdrowymi` w cyklu 2 (0,9 × 0,9 = 0,81), a pozostałe 19% już nie żyje (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Zauważ, że kohorta nigdy nie opróżnia całkiem stanu `Zdrowy`: przy stałej śmiertelności 10% na cykl i bez powrotów udział `Zdrowych` maleje geometrycznie, a nie osiąga zera przy żadnej skończonej liczbie cykli.

## Powiązanie z inżynierią oprogramowania

O tym, jak wielocyklowy model HTA jest używany w realnej ocenie, zobacz [ocenę technologii medycznych](../ocena-technologii-medycznych/) — przypadek referencyjny, który określa, jakiej stopy dyskontowej, źródła użyteczności i horyzontu czasowego musi użyć zgłoszony model Markowa.

Model kohortowy Markowa jest strukturalnie automatem stanów z probabilistycznymi przejściami, uruchamianym przez stałą liczbę taktów, z dyskontowaniem wartości każdego taktu. Ten sam kształt symuluje retencję/przejścia stanów kohorty użytkowników w czasie — zobacz [wskaźniki DORA](../wskaźniki-dora/) dla wersji dotyczącej niezawodności operacyjnej: „jaka część systemu jest w tym okresie w stanie pogorszonym i ile to kosztuje”. Konkretnie:

- **Modelowanie retencji/odpływu** to model kohortowy Markowa ze stanami takimi jak „aktywny”, „zagrożony”, „odszedł”: stała miesięczna macierz przejść, uruchomiona przez 12 lub 24 cykle miesięczne, mówi, ilu aktywnych użytkowników (i jaki przychód) oczekiwać w dowolnym przyszłym miesiącu, tak samo jak `Zdrowy`/`Zmarły` mówi o oczekiwanych ocalałych.
- **Niezawodność i ekonomia incydentów**: stany systemu (zdrowy, pogorszony, niedziałający) można modelować tak samo, z „kosztem na cykl” szkody z przestoju narastającym, gdy system zajmuje stany pogorszony/niedziałający — zamieniając argument o częstotliwości incydentów w argument o kosztach zdyskontowanych, porównywalny z kosztem prac nad niezawodnością, które zmieniłyby prawdopodobieństwa przejść.
- **Stany pochłaniające jako stany końcowe**: `Zmarły` w modelu klinicznym to dokładnie „anulowana subskrypcja” lub „trwale offline” w modelu programistycznym — oba wymagają jawnego prawdopodobieństwa przejścia do samego siebie równego 1,0, inaczej symulacja po cichu traci masę.

## Pułapki

- **Prawdopodobieństwa przejścia, które nie sumują się do 1 w wierszu.** Wiersz sumujący się do więcej lub mniej niż 1 po cichu sprawia, że kohorta „traci” lub „zyskuje” masę w każdym cyklu — zawsze sprawdzaj sumy wierszy, zanim zaufasz wynikowi modelu, bo sama struktura modelu nie zasygnalizuje błędu.
- **Zbyt gruba długość cyklu względem rzeczywistej dynamiki choroby.** Cykl roczny dla stanu, który wyraźnie zmienia się w ciągu tygodni, zaniża przejścia zachodzące w środku cyklu; wybierz długość cyklu krótką w stosunku do tego, jak szybko faktycznie porusza się modelowany proces.
- **Zapomnienie pętli stanu pochłaniającego.** Stan pochłaniający (śmierć, trwałe zaprzestanie) wymaga prawdopodobieństwa przejścia do samego siebie dokładnie 1,0. Pominięcie go powoduje, że masa kohorty w tym stanie wyparowuje po jednym cyklu, zaniżając skumulowane koszty lub utratę QALY.
- **Uznanie modelu za zwalidowany dlatego, że działa.** Model kohortowy Markowa z wiarygodnie wyglądającymi prawdopodobieństwami przejścia może nadal być strukturalnie błędny (brakujące stany, złe zachowanie pochłaniające); zwaliduj względem znanych punktów odniesienia epidemiologicznych (np. czy modelowane 5-letnie przeżycie zgadza się z opublikowanymi krzywymi przeżycia), zanim zaufasz wynikowi.

## Źródła

- Sonnenberg FA, Beck JR. „Markov models in medical decision making: a practical guide.” Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. „An introduction to Markov modelling for economic evaluation.” PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
