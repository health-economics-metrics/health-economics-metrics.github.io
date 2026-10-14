# Wartość statystycznego życia (VSL)

Wartość statystycznego życia (VSL) — w użyciu brytyjskim „wartość zapobieżonego zgonu” (VPF) — to kwota, jaką *populacja* jest zbiorowo gotowa zapłacić za obniżenie ryzyka jednego statystycznego zgonu, wyprowadzona z badań kompromisu płaca–ryzyko (ile dodatkowej płacy pracownicy żądają za bardziej ryzykowną pracę) i badań preferencji deklarowanych. To nie jest cena życia jakiejkolwiek zidentyfikowanej osoby; to konstrukt ryzyka populacyjnego, a inżynier oprogramowania budujący systemy redukujące ryzyko — algorytmy triażu, dyspozycję karetek, monitorowanie bezpieczeństwa — musi wiedzieć, że pochodzi z innej tradycji teoretycznej niż [progi gotowości do zapłaty](../progi-gotowości-do-zapłaty/).

## Dlaczego to ważne

VSL/VPF to standardowe narzędzie przeliczania na pieniądze redukcji ryzyka zgonu w regulacyjnej analizie kosztów i korzyści: bezpieczeństwo transportu, regulacje środowiskowe i niektóre interwencje zdrowia publicznego prowadzą przez nie swoje biznesplany. Green Book HM Treasury publikuje wartość VPF wyprowadzoną z brytyjskich danych rynku pracy i badań ankietowych, a Ministerstwo Transportu używa jej bezpośrednio w ocenie bezpieczeństwa dróg. To rzeczywiście inna tradycja wyceny niż metodologia QALY × próg gotowości do zapłaty: podejście progowe wycenia zyski zdrowotne względem tego, co *budżet* zdrowotny obecnie wytwarza na marginesie, podczas gdy VSL/VPF wycenia redukcję ryzyka względem tego, co ludzie na rynku pracy lub w ankiecie ujawniają, że byliby gotowi za nią zapłacić. Te dwa ramy nie zawsze dają się pogodzić, a używanie obu w tej samej sprawie bez uznania tego jest częstym błędem analitycznym.

## Matematyka

```
Uniknięte zgony = populacja × redukcja_ryzyka_na_osobę
  (redukcja_ryzyka_na_osobę to prawdopodobieństwo, np. 0,000001 =
   zmniejszenie rocznego ryzyka zgonu o 1 na milion)

Przeliczona korzyść z umieralności = uniknięte_zgony × wartość_zapobieżonego_zgonu
```

## Rozwiązany przykład

Region liczący 800 000 osób korzysta z cyfrowej interwencji dyspozytorskiej/triażowej dla bezpieczeństwa drogowego, która obniża roczne ryzyko zgonu każdej osoby o 1 na milion (0,000001):

```
Uniknięte zgony = 800 000 × 0,000001 = 0,8
```

Przy brytyjskiej wartości zapobieżonego zgonu £2 180 000 (liczba HM Treasury/DfT, ceny 2023/24 — Green Book aktualizuje ją co roku, sprawdź ponownie przed przywołaniem w bieżącej analizie):

```
Przeliczona korzyść z umieralności = 0,8 × £2 180 000 = £1 744 000/rok
```

Niewiele poniżej £1,75 mln rocznie przeliczonej korzyści z umieralności, z redukcji ryzyka, której większość dotkniętej populacji nigdy by indywidualnie nie zauważyła.

## Powiązanie z inżynierią oprogramowania

Zespoły oprogramowania krytycznego dla bezpieczeństwa — firmware wyrobów medycznych, oprogramowanie pojazdów autonomicznych, przemysłowe systemy sterowania — stają przed dokładnie tym problemem wyceny, budując analizę kosztów i korzyści dla inwestycji w bezpieczeństwo: jak wycenić „zapobiegnięcie jednej katastrofalnej awarii”, gdy awaria jest rzadka, poważna i rozproszona w dużej populacji użytkowników? VSL/VPF to dziesięciolecia stary, publicznie udokumentowany realny precedens nadania liczby rzadkiej, poważnej redukcji ryzyka na poziomie populacji — ten sam kształt argumentu co wycena inwestycji SRE względem rzadkiej katastrofalnej awarii, tylko z wynikiem w postaci śmiertelności zamiast przestoju.

## Pułapki

- **Traktowanie VSL jako „ceny zidentyfikowanego życia”**: tak nie jest. VSL/VPF to statystyczny konstrukt populacyjny wyprowadzony z kompromisów redukcji ryzyka u wielu osób, a nie wycena życia czy śmierci konkretnej osoby.
- **Podwójne liczenie względem obliczenia korzyści monetarnej netto opartego na QALY**: użycie liczby VSL/VPF i osobnego obliczenia QALY × próg w tej samej sprawie, bez ich uzgodnienia, po cichu liczy dwa razy wartość tych samych unikniętych zgonów. Wybierz jedne ramy dla danej sprawy.
- **Przenoszenie szacunku VSL między kontekstami bez korekty**: VSL wyprowadzony z rynku pracy jednego kraju lub z danych płaca–ryzyko dla osób w wieku produkcyjnym, zastosowany bez korekty do innego kontekstu dochodowego lub innej populacji (dzieci, emeryci), to wieloletnia, naprawdę sporna kwestia metodologiczna — nie rozstrzygnięta.

## Źródła

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — uzupełniające wytyczne Value of a Prevented Fatality (ceny 2023/24; wartości Green Book aktualizowane co roku). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, „Mortality Risk Valuation” (dla amerykańskiej tradycji VSL, przywołana dla kontrastu z brytyjską liczbą VPF powyżej). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. „The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World.” J Risk Uncertain. 2003;27(1):5-76.
