# Porównywanie ICER między walutami

Porównanie [ICER](../inkrementalny-współczynnik-efektywności-kosztowej/) obliczonego w walucie jednego kraju z [progiem gotowości do zapłaty](../progi-gotowości-do-zapłaty/) innego kraju — albo łączenie danych o kosztach zebranych w badaniu wielonarodowym — wymaga jawnego, możliwego do skontrolowania kroku przeliczenia walut. Jeśli metoda przeliczenia zostanie wybrana źle, te same dowody mogą odwrócić decyzję o wdrożeniu, mimo że w danych klinicznych ani kosztowych nic się nie zmieniło.

## Dlaczego to ważne

Wytyczne metodologiczne ISPOR dotyczące wielonarodowych badań klinicznych (Willke i in., *Health Economics*, 1998) zalecają przeliczanie kosztów zasobów według **parytetu siły nabywczej (PPP)** — a nie rynkowych kursów walut — przy porównywaniu realnej wartości ekonomicznej zasobów między krajami, a kursy rynkowe zostawiają do tego, do czego faktycznie służą: modelowania rzeczywistych transgranicznych przepływów gotówki. Mieszanie tych dwóch to jeden z najczęstszych błędów metodologicznych w wielonarodowym HTA, właśnie dlatego, że dla kogoś, kto nie czytał wytycznych, oba wyglądają jak „kurs wymiany”, a arkusz kalkulacyjny nie powstrzyma przed zrobieniem tego źle.

## Matematyka

```
icer_w_walucie_lokalnej = przelicz(icer_w_walucie_źródłowej, współczynnik_przeliczenia)

współczynnik_przeliczenia powinien być:
  współczynnik PPP     — do porównywania realnej wartości ekonomicznej
                          zasobów między krajami (zalecany przez ISPOR
                          dla wielonarodowej CEA)
  kurs rynkowy         — tylko do faktycznych transgranicznych płatności
                          gotówkowych

wdrożyć, jeśli icer_w_walucie_lokalnej < próg_lokalny
```

Sama reguła decyzyjna to zwykła [reguła progu ICER](../progi-gotowości-do-zapłaty/) — `wdrożyć, jeśli ICER < λ`; kwestia metodologiczna tego tematu dotyczy w całości tego, *który współczynnik przeliczenia* daje wartość `icer_w_walucie_lokalnej`, do której tę regułę stosujemy.

## Rozwiązany przykład

ICER leku z badania amerykańskiego wynosi 45 000 $/QALY. Hipotetyczny kraj importujący ustala własny ilustracyjny próg na £34 000/QALY (hipotetyczna liczba specyficzna dla kraju, tylko na potrzeby tego przykładu — rzeczywiste progi różnią się między krajami i zmieniają się w czasie, i zawsze trzeba podawać ich źródło i datę).

**Przy współczynniku PPP 0,72** (ilustracyjnym, tylko na potrzeby tego przykładu): 45 000 $ × 0,72 = £32 400/QALY. £32 400 < £34 000 → **wdrożyć**.

**Przy kursie rynkowym 0,79** (ilustracyjnym): 45 000 $ × 0,79 = £35 550/QALY. £35 550 > £34 000 → **odrzucić**.

Ten sam ICER 45 000 $/QALY daje decyzję o wdrożeniu przy przeliczeniu PPP i decyzję o odrzuceniu przy przeliczeniu po kursie rynkowym. To konkretna ilustracja, dlaczego wytyczne ISPOR traktują wybór współczynnika przeliczenia jako rozstrzygający metodologicznie — nie szczegół zaokrąglania i nie coś, co zostawia się domyślnie w formule arkusza, której nikt nie sprawdza ponownie.

## Powiązanie z inżynierią oprogramowania

To zdrowotno-ekonomiczne odbicie dobrze znanego obszaru inżynierii: poprawności cen wielowalutowych i18n/l10n w oprogramowaniu komercyjnym, gdzie strona z cennikiem SaaS nigdy nie może po cichu porównać kwoty w `$` z ceną w `£`. Gwarancja na poziomie typu, jaką daje dobrze zbudowany typ `Money` — metody porównania, które odmawiają porównania niezgodnych walut i najpierw wymuszają jawny krok przeliczenia — to bezpośredni odpowiednik inżynierski punktu metodologicznego tutaj: nie porównuj nieprzeliczonych liczb między walutami i nie pozwalaj, by krok przeliczenia był domyślny lub niezadokumentowany.

## Pułapki

- **Ciche porównywanie kwot w różnych walutach**: doraźna praca HTA w arkuszach, która odejmuje lub porównuje kwotę w dolarach i w funtach bez wcześniejszego przeliczenia — klasa błędów, którą prawdziwy typ `Money` świadomy walut wyłapuje z samej konstrukcji, zamiast zostawiać ją jako cichy błąd.
- **Mylenie kursu rynkowego z PPP**: według wytycznych ISPOR najczęstszy błąd metodologiczny w wielonarodowym HTA — oba liczby mogą się znacznie różnić i odpowiadają na różne pytania (realna wartość ekonomiczna a faktyczny przepływ gotówki).
- **Niedatowanie użytego kursu ani indeksu PPP**: oba zmieniają się w czasie, więc każdy przywoływany współczynnik przeliczenia musi być datowany tak jak to repozytorium datuje swoje inne liczby odniesienia (wartości węgla z Green Book, wartość zapobieżonego zgonu itd.).

## Źródła

- Willke RJ, Glick HA, Polsky D, Schulman K. „Estimating country-specific cost-effectiveness from multinational clinical trials.” *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
