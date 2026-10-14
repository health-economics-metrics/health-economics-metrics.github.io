# Dokładny podział kosztów co do centa

Podział kwoty całkowitej — wspólnej dotacji, rachunku za infrastrukturę, liczby wpływu na budżet — między kilku odbiorców naiwnym rachunkiem procentowym rutynowo daje części, które nie sumują się z powrotem do pierwotnej kwoty. Dokładny podział co do centa jest rozwiązaniem: metodą całkowitoliczbową/dziesiętną, działającą w najmniejszych jednostkach waluty (centach), gwarantującą, że części sumują się *dokładnie* do całości, bez względu na to, jak nierówno się dzieli. Każdy inżynier oprogramowania, który musi zbilansować podzieloną sumę co do centa — listę płac, wypłatę dotacji, rozliczanie usług wspólnych — potrzebuje tego wzorca, a nie procentów zmiennoprzecinkowych.

## Dlaczego to ważne

To nazwany, podstawowy wzorzec w inżynierii oprogramowania przedsiębiorstw: *Patterns of Enterprise Application Architecture* Martina Fowlera (2002) opisuje `Money` i `Allocate` właśnie dlatego, że „podziel 100 $ na trzy” to problem, który naiwny kod stale rozwiązuje źle, i to po cichu — błąd wychodzi dopiero, gdy ktoś uzgadnia księgi i znajduje części o cent mniejsze (lub większe) od sumy. W pracy nad ekonomią zdrowia i finansami NHS to nie jest akademickie: sumy wpływu na budżet dzieli się między lokalizacje, lata lub dyrekcje; koszty wspólnej infrastruktury i licencji rozdziela się między działy według liczby pracowników lub udziału w aktywności. Każdy taki podział musi się zgadzać dokładnie, bo dyrektor finansowy, który dostaje części niesumujące się do całości, przestaje ufać całemu modelowi.

## Matematyka

```
Naiwna (błędna) metoda:
  część_i = zaokrąglij(suma × udział_i / Σ udziałów)     — zaokrągla każdą część niezależnie

Metoda dokładna (największej reszty / „largest remainder allocation”):
  1. baza_i = podłoga(suma_najmniejsze_jednostki × udział_i / Σ udziałów)   — tylko całe najmniejsze jednostki (centy)
  2. reszta = suma_najmniejsze_jednostki − Σ baza_i                          — pozostałe centy, zawsze < liczby odbiorców
  3. rozdaj po 1 dodatkowej najmniejszej jednostce `reszta` odbiorcom
     z największą resztą ułamkową z kroku 1, aż reszta się wyczerpie

Wynik: Σ część_i == suma, zawsze, z konstrukcji.
```

Metoda dokładna nigdy nie zaokrągla części w izolacji — zaokrągla *cały podział* jako jedną operację, i to utrzymuje niezmiennik sumy.

## Rozwiązany przykład

Podziel 100,00 $ na trzy równe części (`udziały = [1, 1, 1]`).

Metoda naiwna: 100,00 $ ÷ 3 = 33,333… $, zaokrąglone niezależnie do najbliższego centa daje 33,33 $ dla każdego odbiorcy. Suma: 33,33 $ × 3 = 99,99 $ — jeden cent zniknął, a żadna pojedyncza pozycja nie jest na tyle „błędna”, by zauważyć to przy oględzinach.

Metoda dokładna: `baza` = 33,33 $ dla wszystkich trzech (łącznie 9 999 najmniejszych jednostek z `podłoga(10 000 / 3) = 3 333` centów każdy), co zostawia resztę 1 centa (10 000 − 9 999). Ten jeden pozostały cent trafia do odbiorcy z największą resztą ułamkową w dzieleniu — który to konkretnie odbiorca, to wewnętrzny szczegół rozstrzygania remisu, na którym wywołujący nie powinien polegać. Dwóch odbiorców dostaje 33,33 $, a jeden 33,34 $, i trzy części sumują się dokładnie do 100,00 $.

To dokładnie ta arytmetyka, której potrzebuje [analiza wpływu na budżet](../analiza-wpływu-budżetowego/) za każdym razem, gdy łączną liczbę wpływu na budżet trzeba podzielić między lokalizacje, kohorty lub lata finansowe i uzgodnić z opublikowaną sumą — zobacz [walutowo bezpieczną agregację kosztów](../walutowo-bezpieczna-agregacja-kosztów/), gdzie opisano powiązany problem sumowania wielu takich pozycji bez dryfu.

## Powiązanie z inżynierią oprogramowania

To dosłownie „wzorzec Money” z architektury oprogramowania przedsiębiorstw — podstawowy, nazwany wzorzec dla dokładnie tej klasy błędów, a nie jednorazowa sztuczka. Rzeczywiste awarie uzgadniania finansowego trafiały na produkcję właśnie z tej klasy błędów: podziałów procentowych liczonych w `f64`, zaokrąglanych dla każdego odbiorcy i nigdy niesprawdzanych względem pierwotnej sumy. Wiąże się to wprost z modułem [całkowity koszt posiadania](../całkowity-koszt-posiadania/) tego repozytorium, który obecnie sumuje zwykłe koszty zmiennoprzecinkowe w latach i wariantach — ta sama dyscyplina dokładności obowiązuje, gdy sumę TCO lub wpływu na budżet trzeba rozdzielić, a nie tylko zsumować.

## Pułapki

- **Procent-potem-zaokrąglanie zamiast największej reszty**: przydzielanie z użyciem procentów zmiennoprzecinkowych i zaokrąglanie każdego odbiorcy niezależnie, co spiętrza błąd zaokrąglenia i rzadko sumuje się z powrotem do całości, zwłaszcza przy wielu odbiorcach.
- **Ignorowanie wykładników najmniejszej jednostki walut**: zakładanie, że każda waluta ma 2 miejsca dziesiętne — jen japoński ma 0, niektóre waluty mają 3 — ręcznie napisany podział procentowy zwykle na sztywno koduje 2 i po cichu psuje się dla innych walut; dokładna procedura podziału odczytuje wykładnik z samej waluty (ISO 4217).
- **Ponowne rozdzielanie już rozdzielonej reszty**: ponowne uruchomienie procedury podziału na tym, co zostało z poprzedniego podziału, bez kontroli idempotencji, co może zapisać ten sam cent dwa razy temu samemu odbiorcy.

## Źródła

- Fowler M. „Patterns of Enterprise Application Architecture.” Addison-Wesley, 2002 — wzorce `Money` i `Allocate`.
- ISO 4217 — norma kodów walut i funduszy, definiująca wykładnik najmniejszej jednostki każdej waluty.
