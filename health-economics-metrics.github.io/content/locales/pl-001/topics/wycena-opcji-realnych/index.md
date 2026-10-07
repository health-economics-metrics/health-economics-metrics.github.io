# Wycena opcji realnych

Wycena opcji realnych stosuje logikę wyceny opcji finansowych do realnych (niefinansowo-rynkowych) decyzji inwestycyjnych — konkretnie do *opcji rozszerzenia* projektu w późniejszym czasie, jeśli się powiedzie, bez obowiązku to zrobić. Uproszczony jednookresowy model dwumianowy (Cox, Ross, Rubinstein, 1979) wycenia tę elastyczność wprost, zamieniając „zacznijmy od małego i zobaczmy” z przeczucia w wycenioną liczbę.

## Dlaczego to ważne

Statyczne obliczenie NPV wycenia projekt jako zakład „wszystko albo nic”: finansować albo nie, w dzisiejszej skali, na zawsze. Realne projekty — a zwłaszcza etapowe wdrożenia cyfrowego zdrowia — rzadko tak obstawia się; system zdrowia może sfinansować mały pilotaż, zobaczyć, co się stanie, i zaangażować dalsze środki tylko jeśli zadziała. Ta elastyczność ma realną wartość, a jej ignorowanie systematycznie zaniża wycenę inwestycji etapowych względem jednorazowych, co jest dokładnie odwrotne dla procesów zakupowych nagradzających bezpieczniej wyglądającą propozycję etapową. Wycena opcji realnych wycenia samą elastyczność, aby propozycję etapową można było uczciwie porównać z alternatywą pełnego zaangażowania zamiast karać ją za to, że na naiwnym wierszu NPV wygląda skromniej.

## Matematyka

```
Prawdopodobieństwo neutralne wobec ryzyka stanu „w górę”:
  p = ((1 + stopa_wolna_od_ryzyka) − czynnik_w_dół) / (czynnik_w_górę − czynnik_w_dół)

Wypłata z rozszerzenia w każdym stanie (z dolnym ograniczeniem do zera — rozszerzenie jest opcjonalne):
  wypłata_w_górę = max(wartość_projektu × czynnik_w_górę − koszt_rozszerzenia, 0)
  wypłata_w_dół  = max(wartość_projektu × czynnik_w_dół  − koszt_rozszerzenia, 0)

Wartość opcji (zdyskontowana oczekiwana wypłata):
  wartość_opcji = (p × wypłata_w_górę + (1 − p) × wypłata_w_dół) / (1 + stopa_wolna_od_ryzyka)

Rozszerzone NPV = statyczne_npv + wartość_opcji
```

Wartość projektu albo rośnie (`czynnik_w_górę`), albo spada (`czynnik_w_dół`) do kolejnego punktu decyzyjnego. Rozszerzenie jest realizowane tylko wtedy, gdy w danym stanie jest opłacalne — dolne ograniczenie wypłaty do zera sprawia, że jest to prawdziwa *opcja*, a nie zobowiązanie. Wycenę opcji zebrania informacji najpierw, zamiast opcji rozszerzenia później, zobacz w [oczekiwanej wartości doskonałej informacji](../oczekiwana-wartość-doskonałej-informacji/). O koszcie czekania z tą decyzją zobacz [koszt opóźnienia](../koszt-opóźnienia/).

## Rozwiązany przykład

Pilotaż usługi cyfrowej z `wartość_projektu = £1 000 000`, możliwym wzrostem do 1,5× lub spadkiem do 0,5× do następnego punktu decyzyjnego, stopą wolną od ryzyka 8% i kosztem rozszerzenia £600 000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

wypłata_w_górę = max(1 000 000 × 1,5 − 600 000, 0) =  900 000
wypłata_w_dół  = max(1 000 000 × 0,5 − 600 000, 0) = max(−100 000, 0) = 0

Ograniczenie ma znaczenie: opcja NIE zostałaby zrealizowana, gdyby rynek
rozczarował — koszt rozszerzenia £600 000 przewyższa £500 000, ile projekt
byłby wart w stanie „w dół”.

wartość_opcji = (0,58 × 900 000 + 0,42 × 0) / 1,08
              = 522 000 / 1,08
              ≈ £483 333,33
```

Dodając wartość opcji do statycznej bazy NPV £200 000: rozszerzone NPV = 200 000 + 483 333,33 ≈ **£683 333,33**. Raportowanie samego statycznego NPV £200 000, bez tej wartości opcji, zaniżyłoby realną wartość projektu etapowego ponad dwukrotnie.

## Powiązanie z inżynierią oprogramowania

To formalna wersja „dostarcz teraz minimalną wersję i zachowaj opcję dalszego inwestowania, jeśli chwyci” — bezpośrednio istotna dla etapowego wdrożenia cyfrowego produktu zdrowotnego, strukturalnie równoległa do ujęcia sekwencjonowania w warunkach niepewności z [kosztu opóźnienia](../koszt-opóźnienia/) i [WSJF/CD3](../wsjf-i-cd3/) oraz komplementarna wobec [oczekiwanej wartości doskonałej informacji](../oczekiwana-wartość-doskonałej-informacji/) i [oczekiwanej wartości informacji z próby](../oczekiwana-wartość-informacji-z-próby/) — wszystkie trzy wyceniają elastyczność lub informację w warunkach niepewności, z różnych stron.

## Pułapki

- **Pożyczanie wyceny neutralnej wobec ryzyka bez założenia o handlowanym aktywie, na którym się opiera**: modele opcji realnych pożyczają prawdopodobieństwo neutralne wobec ryzyka z wyceny opcji finansowych, która zakłada, że wartość bazowa jest aktywem *handlowanym* — dla naprawdę niehandlowanego projektu realnego to wygoda modelowania, a nie dosłowny fakt rynkowy.
- **Traktowanie `czynnik_w_górę`/`czynnik_w_dół` jako parametrów swobodnych**: wejścia dwumianowe w górę/w dół same są założeniami wymagającymi uzasadnienia, a nie swobodnymi parametrami dobieranymi tak, by dać pożądaną odpowiedź.
- **Raportowanie samej wartości opcji**: wartość opcji realnych jest *addytywna* względem statycznego NPV samodzielnego projektu — częsty błąd to raportowanie samej wartości opcji i porzucenie przypadku bazowego, co zawyża sprawę, gdy statyczne NPV jest ujemne, a zaniża ją (jak w przykładzie powyżej), gdy statyczne NPV w ogóle pominięto.

## Źródła

- Cox JC, Ross SA, Rubinstein M. „Option pricing: a simplified approach.” J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. „A real options approach to watchful waiting: theory and an illustration.” Med Decis Making. 2007;27(2):178-88 — wiąże opcje realne bezpośrednio z kontekstem decyzyjnym w ekonomii zdrowia. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
