# Work Productivity and Activity Impairment (WPAI)

WPAI to zwalidowany kwestionariusz samooceny (Reilly, Zbrozek, Dasbach, 1993) mierzący, jak bardzo problem zdrowotny wpływa na pracę zarobkową i codzienne czynności, zwykle w ciągu ostatnich 7 dni. Dzieli stratę na *absencję* (absenteeism) — dosłownie utracony czas pracy — i *prezenteizm* (presenteeism) — obniżoną produktywność przy fizycznej obecności w pracy, przy czym ten drugi jest zwykle większą, bardziej ukrytą składową kosztu.

## Dlaczego to ważne

Proste zliczanie dni choroby widzi tylko absencję. Klinicysta lub pracownik wiedzy, który nigdy nie bierze wolnego, ale pracuje na 60% wydajności z powodu przewlekłej choroby, nie dodaje nic do rejestru nieobecności, a mimo to generuje duży, realny spadek produktywności — WPAI zaprojektowano właśnie po to, by ujawnić ten niewidoczny koszt. Ponieważ jest to zwalidowany instrument, a nie ankieta robiona na zamówienie, jego wyniki można używać w pakietach dowodowych o [wynikach raportowanych przez pacjenta](../wyniki-raportowane-przez-pacjenta/) oraz w badaniach kosztów choroby bez konieczności ponownej walidacji miary przez recenzenta. Jako instrument samooceny sam jest formą PROM, wyróżniającą się głównie skupieniem na pracy i aktywności, a nie na objawach czy jakości życia.

## Matematyka

```
Absencja % = godziny_utracone_z_powodu_zdrowia / (godziny_utracone_z_powodu_zdrowia + przepracowane_godziny) × 100

Prezenteizm %  = samoocena upośledzenia 0–10 podczas pracy, × 10
                  (uzyskana bezpośrednio z kwestionariusza, nie wyprowadzana tutaj)

Całkowite upośledzenie pracy % =
    Absencja% + (1 − Absencja%/100) × Prezenteizm%
    (łączy oba tak, by suma nigdy nie przekroczyła 100%)

Koszt produktywności = Całkowite_upośledzenie_pracy% / 100 × zarobki_w_okresie
```

Wzór na całkowite upośledzenie celowo nie jest zwykłą sumą: bezpośrednie dodanie obu procentów mogłoby przekroczyć 100%, więc prezenteizm stosuje się tylko do *pozostałej* (niezabsentowanej) części czasu pracy.

## Rozwiązany przykład

Pracownik z migreną jest zaplanowany na 40-godzinny tydzień, ale traci z niego 4 godziny:

```
godziny_utracone = 4, przepracowane_godziny = 36
Absencja% = 4 / (4 + 36) × 100 = 10%
```

Osobno ocenia wpływ na produktywność podczas pracy na 3 z 10 w kwestionariuszu WPAI, czyli `Prezenteizm% = 30%` (ten krok to surowa odpowiedź z kwestionariusza, a nie coś wyprowadzonego z innych liczb):

```
Całkowite upośledzenie pracy% = 10 + (1 − 10/100) × 30
                              = 10 + 0,9 × 30
                              = 10 + 27
                              = 37%
```

Przy 5-dniowym tygodniu i zarobkach £800 (£160/dzień):

```
Koszt produktywności = 37/100 × 800 = £296
```

Zauważ, że naiwne zliczanie dni choroby zarejestrowałoby tylko utracone 4 godziny (10%) — składowa prezenteizmu prawie potraja realne upośledzenie, gdy zostanie wliczona.

## Powiązanie z inżynierią oprogramowania

Przekłada się to bezpośrednio na wskaźniki zdrowia zespołów inżynierskich:

- **Absencja** to zwolnienia chorobowe i płatny urlop — widoczne, już śledzone i łatwa część.
- **Prezenteizm** to wypalony lub przeciążony przełączaniem kontekstu inżynier, który jest obecny na każdym stand-upie, ale działa ze zmniejszoną zdolnością — zwykle większy i bardziej ukryty koszt, niewidoczny dla danych o liczbie osób czy obecności. Zamiast tego pojawia się jako zmniejszona przepustowość we [wskaźnikach DORA](../wskaźniki-dora/) i [wskaźnikach przepływu](../wskaźniki-przepływu/) albo jako wolniejsze spłacanie właśnie tego [długu technicznego](../dług-techniczny/), którego „odsetki” dodatkowo pogłębiają upośledzenie.
- Lekcja inżynierska jest ta sama co kliniczna: mierzenie samej nieobecności i nazywanie jej „utratą produktywności” systematycznie zaniża realny koszt, bo pomija wszystkich, którzy są obecni, ale upośledzeni.

## Pułapki

- **Błąd przypominania przy samoocenie.** 7-dniowe okno przypominania podlega tym samym zniekształceniom raportowania co każda retrospektywna samoocena.
- **Traktowanie skali prezenteizmu 0–10 jak prawdziwego pomiaru fizycznego.** Jest porządkowa, uzyskana samooceną, a nie zwalidowaną wielkością fizyczną — traktowanie różnic na niej jako ściśle liniowych lub przedziałowych to wygoda modelowania, a nie zwalidowany fakt fizyczny.
- **Łączenie wyników między wariantami WPAI.** WPAI ma kilka wersji specyficznych dla stanu — WPAI:GH (zdrowie ogólne), WPAI:SHP (konkretny problem zdrowotny) i warianty specyficzne dla chorób — a wyników z różnych wariantów nie należy łączyć ani porównywać bez uprzedniego sprawdzenia, że to ta sama wersja instrumentu.

## Źródła

- Reilly MC, Zbrozek AS, Dasbach EJ. „The validity and reproducibility of a work productivity and activity impairment instrument.” PharmacoEconomics 1993;4(5):353-65.
- Dokumentacja instrumentu WPAI, Reilly Associates — oficjalne źródło punktacji. <https://www.reillyassociates.net/>
