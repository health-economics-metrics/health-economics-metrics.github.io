# Wskaźniki ekonomii zdrowia

Kompleksowe wprowadzenie do matematyki, przykładów i rozumowania ekonomii zdrowia, napisane dla inżynierów oprogramowania budujących rozwiązania dla krajowych organizacji opieki zdrowotnej na całym świecie. Każdy plik obejmuje jeden wskaźnik lub pojęcie: definicję, dlaczego to ważne, matematykę, rozwiązany przykład, powiązanie z inżynierią oprogramowania, pułapki i źródła.

Nowy tutaj? Zacznij od [kosztu alternatywnego](locales/en-gb-oxendict/topics/opportunity-cost/), [roku życia skorygowanego jakością](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) i [kosztu opóźnienia](locales/en-gb-oxendict/topics/cost-of-delay/) — trzech idei, na których buduje się wszystko inne.

## Podstawy rozumowania ekonomicznego

- [Koszt alternatywny](locales/en-gb-oxendict/topics/opportunity-cost/) — wartość najlepszej porzuconej alternatywy; dlaczego stałe budżety czynią każdy wybór wypieraniem
- [Dyskontowanie i preferencja czasowa](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — wartości bieżące, stopa 3,5% Green Book/NICE
- [Perspektywa analizy](locales/en-gb-oxendict/topics/analysis-perspective/) — płatnik kontra świadczeniodawca kontra społeczeństwo: czyje koszty się liczą
- [Horyzont czasowy](locales/en-gb-oxendict/topics/time-horizon/) — jak długo liczyć koszty i efekty oraz manipulacja horyzontem
- [Koszt krańcowy kontra koszt średni](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — dlaczego zwolnienie łóżka nie oszczędza jego średniego kosztu
- [Oszczędności uwalniające gotówkę kontra nieuwalniające gotówki](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — test uczciwości dla każdego twierdzenia o "zaoszczędzonym czasie"
- [Analiza wrażliwości](locales/en-gb-oxendict/topics/sensitivity-analysis/) — diagramy tornado; które założenie decyduje o twojej argumentacji
- [Probabilistyczna analiza wrażliwości](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC, prawdopodobieństwo racji
- [Oczekiwana wartość doskonałej informacji](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — wycena projektu pilotażowego przed jego uruchomieniem
- [Oczekiwana wartość informacji z próby (EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — wycena *konkretnego, proponowanego* badania, a nie usunięcia całej niepewności
- [Wycena opcji realnych](locales/en-gb-oxendict/topics/real-options-valuation/) — wycena opcji późniejszego rozszerzenia projektu etapowego, a nie opcji zebrania informacji najpierw
- [Podejście kapitału ludzkiego a metoda kosztów frykcyjnych](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — dwa sposoby wyceny utraconej produktywności, różnica 2x+ w raportowanym koszcie
- [Dominacja i granica efektywności](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — eliminowanie opcji, których nikt nie powinien wybierać

## Miary wyników

- [Rok życia skorygowany jakością (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — wspólna waluta wartości zdrowotnej
- [Rok życia skorygowany niepełnosprawnością (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — lustrzane odbicie po stronie obciążenia; wskaźnik zdrowia globalnego
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — instrument stojący za większością wag użyteczności QALY
- [Wywoływanie użyteczności metodą wymiany czasu (TTO)](locales/en-gb-oxendict/topics/time-trade-off-utility/) — jak waga użyteczności jest faktycznie uzyskiwana od respondenta
- [Inkrementalny współczynnik efektywności kosztowej (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — dodatkowy koszt na dodatkową jednostkę zdrowia
- [Progi gotowości do zapłaty](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — próg NICE £20–30 tys./QALY i inne granice na świecie
- [Wartość statystycznego życia (VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — rynkowa alternatywa dla wyceny opartej na progach
- [Korzyść monetarna netto (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — wartość minus koszt, wykonane poprawnie
- [Uzyskane lata życia](locales/en-gb-oxendict/topics/life-years-gained/) — matematyka przeżycia i wariant sprawiedliwości evLYG
- [Oczekiwana długość życia skorygowana zdrowiem (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — rozliczanie zdrowych lat na poziomie populacji
- [Deficyt QALY i modyfikatory ciężkości](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — dlaczego QALY chorszych populacji liczą się bardziej
- [Work Productivity and Activity Impairment (WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — absencja vs prezenteizm, ukryta połowa kosztu

## Rodzaje analizy ekonomicznej

- [Analiza efektywności kosztowej (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — koszt na naturalną jednostkę wyniku
- [Analiza użyteczności kosztowej (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — koszt na QALY; porównywanie odmiennych interwencji
- [Analiza kosztów i korzyści (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — wszystko w pieniądzu; NPV Green Book
- [Analiza minimalizacji kosztów (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — najtańsza opcja, po udowodnieniu równoważności
- [Analiza kosztów i konsekwencji (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — zdezagregowana tabela; preferowana przez NICE metoda dla zdrowia cyfrowego
- [Analiza wpływu budżetowego (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — przystępność cenowa, odrębna od wartości
- [Zwrot z inwestycji (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — wspólny wskaźnik z zadeklarowanymi parametrami
- [Społeczny zwrot z inwestycji (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — wycenianie w pieniądzu tego, czego rynki nie wyceniają
- [Porównywanie ICER między walutami](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPP vs kurs rynkowy; wybór przeliczenia, który może odwrócić decyzję o wdrożeniu

## Ekonomia operacyjna systemu opieki zdrowotnej

- [Zaoszczędzone dni łóżkowe](locales/en-gb-oxendict/topics/bed-days-saved/) — podstawowa korzyść i pułapki jej wyceny
- [Czas hospitalizacji](locales/en-gb-oxendict/topics/length-of-stay/) — czas cyklu szpitala
- [Wskaźnik readmisji](locales/en-gb-oxendict/topics/readmission-rate/) — wskaźnik nieudanych zmian systemu opieki zdrowotnej
- [Wskaźnik niestawienia się (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — opuszczone wizyty; najczystszy wskaźnik marnotrawstwa
- [Unikanie wizyt na izbie przyjęć](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — ekonomia interwencji na wczesnym etapie
- [Krajowa taryfa i koszty jednostkowe](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — cennik NHS i infrastruktura kosztowa
- [Skierowanie do leczenia (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — standard 18 tygodni jako wskaźnik czasu realizacji
- [Wpływ listy oczekujących](locales/en-gb-oxendict/topics/waiting-list-impact/) — przekształcanie zaoszczędzonych godzin w przyjętych pacjentów
- [Czas pracy personelu](locales/en-gb-oxendict/topics/practitioner-time/) — wycena wąskiego gardła zdolności, nie płac
- [Utrzymanie kadr](locales/en-gb-oxendict/topics/workforce-retention/) — koszty rotacji personelu i ekonomia wypalenia zawodowego
- [Unikalne koszty outsourcingu](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — sprowadzanie z powrotem pracy wykonywanej za stawki premium
- [Optymalizacja zasobów niżej w łańcuchu](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — odblokowanie roli, na którą wszyscy czekają
- [Wcześniejsza interwencja](locales/en-gb-oxendict/topics/earlier-intervention/) — ekonomia leczenia przed progresją
- [Zdolność generująca wartość (operacyjna odbudowa)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — tworzenie zdolności bez zatrudniania
- [Twarde oszczędności uwalniające gotówkę (obrona przed deficytem)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — usuwanie pozycji budżetowych; wskaźnik dyrektora finansowego

## Ramy HTA i ekonomia profilaktyki

- [Ocena technologii medycznych (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (USA), CADTH: kto decyduje, co warto kupić
- [Symulacja kohortowa Markowa](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — jak wielocyklowy model HTA jest faktycznie symulowany, kohorta po kohorcie, cykl po cyklu
- [Ramy standardów dowodowych NICE](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — wymagania dowodowe stopniowane według ryzyka dla zdrowia cyfrowego
- [Niemiecka szybka ścieżka DiGA](locales/en-gb-oxendict/topics/diga-fast-track/) — aplikacje na receptę; wpis tymczasowy z terminem na dowody
- [Liczba potrzebna do leczenia (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — jednostki nakładu na korzyść, które utrzymują uczciwość twierdzeń
- [Ułamek przypisywalny populacyjnie (PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — ile obciążenia chorobą czynnik ryzyka jest naprawdę wart zwalczania
- [Ekonomia profilaktyki](locales/en-gb-oxendict/topics/prevention-economics/) — dlaczego profilaktyka jest efektywna kosztowo, ale rzadko oszczędza koszty
- [Ekonomia badań przesiewowych](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, załamanie PPV przy niskiej częstości występowania, zmęczenie alarmami
- [Liczba potrzebna do przebadania (NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — odpowiednik NNT na poziomie programu przesiewowego
- [Uniknięte koszty niżej w łańcuchu](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — kompensacje kosztowe i zasady, które czynią je wiarygodnymi
- [Wielokryterialna analiza decyzyjna (MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — punktacja ważona, gdy pojedynczy próg nie wystarcza
- [Ślad węglowy na QALY](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — zobowiązanie NHS do neutralności klimatycznej spotyka koszt na QALY

## Inżynieria oprogramowania i dostawa cyfrowa

- [Koszt opóźnienia (CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/tydzień lub QALY/tydzień braku dostawy; główny wskaźnik pomostowy
- [Wskaźniki DORA](locales/en-gb-oxendict/topics/dora-metrics/) — wydajność dostawy przetłumaczona na terminy ekonomii zdrowia
- [Wskaźniki przepływu](locales/en-gb-oxendict/topics/flow-metrics/) — prawo Little'a, WIP, efektywność przepływu; wspólna matematyka kolejek szpitali i pipeline'ów
- [WSJF i CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — priorytetyzacja według gęstości wartości; backlog jako tabela ligowa QALY
- [SPACE i DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — wielowymiarowa produktywność; lekcja EQ-5D dla wskaźników inżynieryjnych
- [Dług techniczny](locales/en-gb-oxendict/topics/technical-debt/) — kapitał, odsetki i ekonomia choroby przewlekłej dla baz kodu
- [Całkowity koszt posiadania (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — utrzymanie stanowi 50–80%; naiwny błąd wyceny leków w oprogramowaniu
- [Ekonomia jednostkowa chmury (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — koszt na jednostkę produkcji; koszt referencyjny usługi cyfrowej
- [Dokładny podział kosztów co do centa](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — metoda największej reszty; dzielenie sumy tak, by części sumowały się dokładnie z powrotem
- [Walutowo bezpieczna agregacja kosztów](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — dokładny dziesiętny `Money`, a nie `f64`, dla sum, które muszą się zgadzać co do grosza
- [Budować kontra kupić](locales/en-gb-oxendict/topics/build-vs-buy/) — porównanie skorygowane o ryzyko z wycenionym elementem opóźnienia
- [Realizacja korzyści](locales/en-gb-oxendict/topics/benefits-realization/) — audytowanie, czy prognozowane korzyści rzeczywiście wystąpiły
- [Wskaźniki usług GDS](locales/en-gb-oxendict/topics/gds-service-metrics/) — koszt na transakcję, satysfakcja, ukończenie, wykorzystanie

## Akceleracja AI

- [Produktywność deweloperów z AI](locales/en-gb-oxendict/topics/ai-developer-productivity/) — RCT Copilot kontra RCT METR; skuteczność kontra efektywność
- [Zwrot z inwestycji w AI](locales/en-gb-oxendict/topics/ai-return-on-investment/) — odkrycie o 95% braku zwrotu i co zrobiło inaczej 5%
- [Ekonomia jednostkowa wnioskowania](locales/en-gb-oxendict/topics/inference-unit-economics/) — koszt na token i modelowanie nieustannego spadku cen
- [Wskaźniki jakości AI](locales/en-gb-oxendict/topics/ai-quality-metrics/) — wskaźniki halucynacji jako wskaźniki szkód z ceną
- [Kliniczna ocena AI](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — czułość, swoistość, AUROC i dlaczego częstość występowania rządzi ekonomią
- [Regulacyjna ocena AI](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA SaMD, PCCP i ekonomia aktualizacji modeli

## Aplikacje i urządzenia zdrowotne dla konsumentów

- [Wskaźniki zaangażowania](locales/en-gb-oxendict/topics/engagement-metrics/) — zaangażowanie jako dawka kliniczna
- [Retencja i odpływ](locales/en-gb-oxendict/topics/retention-and-churn/) — prawo ubytku; krzywe retencji jako okna leczenia
- [Aktywacja i adopcja](locales/en-gb-oxendict/topics/activation-and-uptake/) — przednie bramy lejka wartości
- [Przestrzeganie zaleceń i wytrwałość](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, efektywne zaangażowanie, minimalna skuteczna dawka
- [Wyniki raportowane przez pacjenta](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM i próg uczciwości MCID
- [Cyfrowe punkty końcowe i biomarkery](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — od telemetrii czujników do dowodów jakości regulacyjnej
- [Walidacja urządzeń do noszenia](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, statystyki zgodności, czas noszenia, kompletność
- [Ekonomia zdalnego monitorowania pacjentów](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — stosy kodów CPT i substytucja szpitala domem
- [Ekonomia jednostkowa aplikacji zdrowotnych](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM i ROI kontra VOI
- [Zasięg i sprawiedliwość](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; wpływ na populację = zasięg × skuteczność
- [Wskaźnik koncentracji](locales/en-gb-oxendict/topics/concentration-index/) — formalna miara statystyczna nierówności zdrowotnych uwarunkowanych społeczno-ekonomicznie

## Aktualność wartości referencyjnych

Wiele cytowanych liczb aktualizuje się corocznie (koszty jednostkowe NHS, ceny w systemie płatności, klastry DORA, liczby DiGA, ceny LLM). Każdy dokument datuje swoje wartości referencyjne bezpośrednio w tekście; zweryfikuj je ponownie przed użyciem liczby w rzeczywistym uzasadnieniu biznesowym.

## Umiejętności Claude

To repozytorium zawiera dwie [Umiejętności Claude](https://code.claude.com/docs/en/skills) — umieść dowolną z nich w `.claude/skills/` projektu (lub skieruj Claude na `skills/` tego repozytorium), aby wykorzystać tę książkę bezpośrednio w sesji kodowania agentowego:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — do ogólnego użytku: wyjaśnianie pojęcia, obliczanie wskaźnika na podstawie własnych liczb lub tworzenie wieloczynnikowego uzasadnienia biznesowego, opartego na wzorach, rozwiązanych przykładach i pułapkach z tej książki, a nie na ogólnej wiedzy.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — dla opiekunów tego repozytorium: szablon dla każdego tematu, konwencje indeksowania README oraz listę kontrolną walidacji linków/synchronizacji przy dodawaniu lub edytowaniu tematów.
