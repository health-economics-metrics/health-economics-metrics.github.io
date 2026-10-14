# Ślad węglowy na QALY

Emisja węgla na QALY to wskaźnik efektywności — emisje dwutlenku węgla interwencji (lub emisje uniknięte) podzielone przez QALY, które ona przynosi. Odpowiada bezpośrednio kosztowi na QALY i pozwala oceniać efektywność węglową interwencji obok jej efektywności kosztowej. „Skorygowana o emisje korzyść monetarna netto” idzie o krok dalej: przelicza wpływ na klimat na pieniądze, używając oficjalnych wartości węgla niehandlowanego z brytyjskiej Green Book, i odejmuje go od standardowej [korzyści monetarnej netto](../korzyść-monetarna-netto/).

## Dlaczego to ważne

NICE i NHS England oczekują dziś, że wpływ na środowisko będzie rozważany obok kosztów i QALY. NHS ma publiczne zobowiązanie do neutralności klimatycznej: zerowa emisja netto dla emisji bezpośrednich do 2040 r. i dla pełnego śladu łańcucha dostaw do 2045 r. Podręcznik oceny technologii medycznych NICE (PMG36) wymienia zrównoważenie środowiskowe jako nowo pojawiający się aspekt oceny technologii. Dla cyfrowego produktu zdrowotnego oznacza to, że węgiel staje się czwartym filarem uzasadnienia wartości, obok kosztów, QALY i [dominacji na granicy efektywności](../dominacja-i-granica-efektywności/) — nie zastępuje żadnego z nich, ale jest wymiarem, który dobrze zbudowany biznesplan coraz częściej musi raportować.

## Matematyka

```
Węgiel na QALY = łączna_emisja_ton_co2e / łączne_qaly
  (wartość ujemna oznacza netto UNIKNIĘTE emisje na zyskany QALY —
  podwójny zysk: lepsze zdrowie i mniej węgla)

Przeliczony wpływ węglowy = emisja_ton_co2e × wartość_węgla_za_tonę
  (ujemna emisja × dodatnia wartość = ujemny koszt, czyli korzyść)

Skorygowane NMB = korzyść_monetarna_netto − przeliczony_wpływ_węglowy
```

Rozszerza to ideę granicy efektywności koszt/QALY o drugą oś — węgiel na QALY — z tą samą logiką „nanieś wszystkie opcje i zobacz, które są zdominowane” co w [dominacji i granicy efektywności](../dominacja-i-granica-efektywności/), tyle że zastosowaną do węgla zamiast kosztu.

## Rozwiązany przykład

Usługa telemedyczna zastępuje wizyty osobiste, unikając 5 000 przejazdów samochodem rocznie po ok. 8 kg CO2e każdy — 40 ton unikniętego CO2e, zapisane jako ujemna emisja (−40,0 tony) — i daje 25 QALY rocznie:

```
Węgiel na QALY = −40,0 / 25,0 = −1,6 tony CO2e uniknięte na zyskany QALY
```

Przy użyciu wartości węgla niehandlowanego z Green Book (liczba ilustracyjna, centralna wartość niehandlowana 2023 ≈ £269/tonę CO2e — Green Book aktualizuje wartości węgla co roku, sprawdź ponownie przed przywołaniem w bieżącej analizie):

```
Przeliczony wpływ węglowy = −40,0 × £269 = −£10 760
```

„Koszt” −£10 760 to korzyść £10 760. Jeśli samodzielna korzyść monetarna netto interwencji wynosi £500 000:

```
Skorygowane NMB = £500 000 − (−£10 760) = £510 760
```

Oszczędność węgla wzmacnia argumentację zamiast ją osłabiać — to podwójny zysk, który ujęcie z ujemną emisją ma uwidocznić.

## Powiązanie z inżynierią oprogramowania

To aktualny punkt styku z ekonomią AI i chmury: ślad węglowy obliczeń potrzebnych do trenowania i uruchamiania modelu AI jest już realną pozycją w zamówieniach NHS, ponieważ kontrakty z dostawcami NHS powyżej pewnych progów wymagają Planu Redukcji Emisji (Carbon Reduction Plan). [Ekonomia jednostkowa chmury](../ekonomia-jednostkowa-chmury/) śledzi już koszt na jednostkę wyniku obliczeń; węgiel na QALY jest naturalnym wzorcem dla przyszłej miary „koszt węglowy na wnioskowanie”, która rozszerzy ten moduł i ekonomię jednostkową wnioskowania na wymiar środowiskowy — choć takiej miary jeszcze nie ma.

## Pułapki

- **Manipulowanie granicą zakresu**: liczenie tylko emisji bezpośrednich (Scope 1) i pomijanie emisji łańcucha dostaw (Scope 3), które zwykle stanowią większość rzeczywistego śladu cyfrowego produktu zdrowotnego.
- **Użycie nieaktualnej wartości węgla**: Green Book aktualizuje wartości węgla niehandlowanego co roku, więc każdą przywoływaną liczbę £/tonę trzeba opatrzyć datą, a nie podawać jej jako stałej.
- **Traktowanie „efektywności węglowej” jako zamiennika „efektywności kosztowej”**: interwencja niskoemisyjna, ale mało wartościowa, nadal jest złym wykorzystaniem zasobów NHS. Węgiel to czwarty filar obok kosztów i QALY, nie zamiennik żadnego z nich.

## Źródła

- NHS England, „Delivering a Net Zero National Health Service” (2020, zaktualizowano 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (aktualizowane co roku; centralna wartość niehandlowana ≈ £269/tCO2e, 2023 — datuj każde przywołanie). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
