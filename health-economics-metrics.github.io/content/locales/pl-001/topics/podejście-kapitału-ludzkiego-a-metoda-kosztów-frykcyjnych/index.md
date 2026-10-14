# Podejście kapitału ludzkiego a metoda kosztów frykcyjnych

To dwie konkurujące metody wyceny utraconej produktywności — z powodu choroby, niepełnosprawności lub śmierci — w badaniach kosztów choroby i analizach kosztów i korzyści. Podejście kapitału ludzkiego (HCA) wycenia całą utraconą produkcję przez cały czas nieobecności według stawki płacy; metoda kosztów frykcyjnych (FCM) wycenia ją tylko za krótszy okres, którego pracodawca faktycznie potrzebuje, by przywrócić produkcję. Wybór między nimi zmienia szacunek kosztów pośrednich dwukrotnie lub więcej.

## Dlaczego to ważne

Koszty pośrednie (produktywności) to jedna z najbardziej spornych pozycji w ekonomii zdrowia właśnie dlatego, że dwie standardowe metody tak ostro się rozchodzą. HCA traktuje każdy dzień nieobecności jako dzień produkcji, który gospodarka naprawdę traci, wyceniony według pełnej płacy za pełny czas — lub, w przypadku śmierci albo trwałej niepełnosprawności, za pozostałe życie zawodowe. FCM twierdzi, że w gospodarce z bezrobociem i luzem na rynku pracy większość długiej nieobecności nie obniża faktycznie produkcji krajowej, gdy pracodawca przeszkoli zastępcę lub przerozdzieli pracę; tylko „okres frykcji” — czas potrzebny na przywrócenie produkcji do dawnego poziomu — stanowi realną stratę. FCM daje więc systematycznie niższe, bardziej zachowawcze szacunki kosztów pośrednich niż HCA, a obie metody nie są wymienialnymi przypisami: to różne teorie ekonomiczne tego, co znaczy „utracona produktywność”. To także powód, dla którego [przypadek referencyjny NICE](../ocena-technologii-medycznych/) domyślnie wyłącza koszty produktywności, raportując je, jeśli w ogóle, jako osobną analizę wrażliwości z perspektywy społecznej zamiast mieszać je z ICER przypadku referencyjnego — zobacz [perspektywę analizy](../perspektywa-analizy/).

## Matematyka

```
Podejście kapitału ludzkiego:
Koszt_HCA = dzienna_płaca × utracone_dni

Metoda kosztów frykcyjnych (uproszczona, z ograniczeniem do okresu frykcji):
Koszt_FCM = dzienna_płaca × min(utracone_dni, okres_frykcji_dni)

okres_frykcji_dni = szacunek specyficzny dla kraju/sektora czasu potrzebnego
                    na przywrócenie produkcji (historycznie ~85 dni w
                    holenderskich wytycznych kosztowych iMTA; różni się
                    między krajami i jest okresowo szacowany na nowo)
```

Cała różnica zdań między metodami mieści się w `min()`: HCA nigdy nie ogranicza `utracone_dni`, więc koszt rośnie przez całą nieobecność, a FCM ogranicza liczone dni do okresu frykcji, choćby faktyczna nieobecność trwała znacznie dłużej.

## Rozwiązany przykład

Pracownik jest nieobecny `utracone_dni = 180` dni, zarabiając `dzienna_płaca = £150`.

**Podejście kapitału ludzkiego**:

```
Koszt_HCA = 150 × 180 = £27 000
```

**Metoda kosztów frykcyjnych**, przy okresie frykcji `okres_frykcji_dni = 85` (historyczny holenderski benchmark iMTA, według okresowego ponownego szacowania wytycznych):

```
Koszt_FCM = 150 × min(180, 85) = 150 × 85 = £12 750
```

£12 750 według FCM to mniej niż połowa £27 000 według HCA dla *tej samej* nieobecności — sam wybór metody istotnie zmienia sprawę kosztów choroby, zanim dotknie się jakiegokolwiek innego założenia.

## Powiązanie z inżynierią oprogramowania

Przekłada się to bezpośrednio na to, jak zespół wycenia odejście inżyniera:

- **Liczenie kosztów rotacji w stylu HCA**: wycena straty jako pełnego wynagrodzenia odchodzącego inżyniera przez cały czas, gdy stanowisko pozostaje wolne. To naiwna wersja większości modeli kosztów rotacji, a zawyża stratę z tego samego powodu, z którego HCA zawyża utratę produktywności — zakłada, że wolna zdolność była cały czas w pełni produktywna i nic innego nie wchłonęło luzu. Zobacz [utrzymanie kadr](../utrzymanie-kadr/), gdzie skwantyfikowano łańcuch rekrutacji/wdrożenia/zastępstwa wakatu, który ta metoda zasila.
- **Liczenie kosztów rotacji w stylu FCM**: wycena straty tylko za faktyczny czas obsadzenia stanowiska i wdrożenia zastępcy — inżynierski „okres frykcji”. To liczba łatwiejsza do obrony w biznesplanie, tak jak FCM jest bardziej zachowawczym wyborem w badaniu kosztów choroby.
- Podstawowa dyscyplina jest ta sama co w [koszcie alternatywnym](../koszt-alternatywny/): wyceniaj wypartą ulotkę tym, co naprawdę tracone, a nie nagłówkowym czasem pomnożonym przez stawkę.

## Pułapki

- **Mieszanie HCA i FCM w jednej analizie lub raportowanie tylko jednej bez ujawnienia wyboru.** Te same dane o nieobecności mogą dać różnicę 2x lub więcej w raportowanym koszcie zależnie od metody; wybór trzeba podać, a nie ukrywać.
- **Używanie HCA w sprawie z perspektywy społecznej bez oznaczenia jej jako analizy wrażliwości.** Przypadek referencyjny NICE wyraźnie wyłącza koszty produktywności; szacunek HCA z perspektywy społecznej należy do analizy scenariuszowej, a nie do nagłówkowego ICER.
- **Stosowanie którejkolwiek metody do pracy nieopłacanej lub pozarynkowej (np. opieki) bez korekty.** Obie metody zakładają stawkę płacy jako przybliżenie wartości, co nie przenosi się czysto na pracę bez płacy rynkowej.

## Źródła

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. „The friction cost method for measuring indirect costs of disease.” Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. „Methods for the Economic Evaluation of Health Care Programmes.” 4th ed. Oxford University Press — temat o kosztach produktywności.
- NICE health technology evaluations manual (PMG36) — perspektywa przypadku referencyjnego i opcjonalne wytyczne dotyczące perspektywy społecznej. <https://www.nice.org.uk/process/pmg36>
