# Liczba potrzebna do przebadania (NNS)

NNS to liczba osób, które trzeba przebadać przesiewowo — a nie tylko leczyć — aby zapobiec **jednemu** niekorzystnemu zdarzeniu w określonym okresie obserwacji, przy danym ryzyku bazowym populacji i względnej redukcji ryzyka osiąganej przez wczesne wykrycie i leczenie. To odpowiednik NNT na poziomie programu przesiewowego: NNT pyta, ile osób trzeba *leczyć*, aby zapobiec jednemu zdarzeniu; NNS pyta, ile osób musi przejść całą ścieżkę *badanie przesiewowe a potem leczenie*, aby tam dojść.

## Dlaczego to ważne

Rembold wprowadził NNS w 1998 r. właśnie po to, by programy przesiewowe można było porównywać na tej samej podstawie co terapie, ponieważ nagłówkowa względna redukcja ryzyka testu przesiewowego ukrywa dwie rzeczy, których nie ukrywa ta dla leczenia: ryzyko bazowe populacji faktycznie zapraszanej do badań oraz fakt, że wszyscy przebadani ponoszą koszt testu i ciężar wyników fałszywie dodatnich, a nie tylko mniejszość, która później odnosi korzyść. Bramka efektywności kosztowej brytyjskiego National Screening Committee (zobacz [ekonomię badań przesiewowych](../ekonomia-badań-przesiewowych/)) opiera się właśnie na tym rozróżnieniu — program przesiewowy z imponującą względną redukcją ryzyka w populacji o niskim ryzyku bazowym może mieć NNS idący w tysiące, i wtedy to koszt programu na zapobiegnięte zdarzenie staje się prawdziwym pytaniem.

## Matematyka

```
NNS = 1 / (ryzyko_bazowe × względna_redukcja_ryzyka)

ryzyko_bazowe            = prawdopodobieństwo zdarzenia w przebadanej
                           populacji w okresie obserwacji (0–1)
względna_redukcja_ryzyka = proporcjonalna redukcja ryzyka osiągana przez
                           wczesne leczenie umożliwione badaniem (0–1)

Koszt programu na zapobiegnięte zdarzenie = NNS × koszt_na_badanie
```

Porównaj bezpośrednio z [NNT](../liczba-potrzebna-do-leczenia/): NNS składa skuteczność całego lejka badanie → diagnoza → leczenie w jedną liczbę, podczas gdy NNT zakłada już, że pacjent jest zdiagnozowany i zaczyna leczenie.

## Rozwiązany przykład

Populacja docelowa programu przesiewowego ma ryzyko bazowe zdarzenia 2% w okresie badania (`ryzyko_bazowe = 0,02`), a wczesne wykrycie daje względną redukcję ryzyka 25% (`względna_redukcja_ryzyka = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 osób trzeba przebadać, aby zapobiec jednemu zdarzeniu.

Przy £50 za badanie:
Koszt programu na zapobiegnięte zdarzenie = 200 × £50 = £10 000
```

Te £10 000 to liczba, którą należy zestawić z kosztem samego zdarzenia i QALY, które by kosztowało — to to samo porównanie, jakie [ekonomia profilaktyki](../ekonomia-profilaktyki/) robi dla programów profilaktycznych w ogóle.

## Powiązanie z inżynierią oprogramowania

NNS to „ilu użytkowników, zdarzeń lub żądań musi przejść przez przepływ wykrywania lub triażu, aby złapać jeden prawdziwy pozytyw wart działania” — bezpośrednio istotne dla systemów monitoringu i triażu opartych na alertach, gdzie stan docelowy o niskiej częstości podbija NNS tak samo, jak załamuje dodatnią wartość predykcyjną (zobacz [ekonomię badań przesiewowych](../ekonomia-badań-przesiewowych/) i [kliniczną ocenę AI](../kliniczna-ocena-ai/)). Reguła monitoringu, która musi przetworzyć 200 zdarzeń na jedno prawdziwe trafienie, opłaca się uruchamiać tylko wtedy, gdy trafienie jest warte co najmniej 200 razy więcej niż koszt triażu na zdarzenie — dokładnie ta sama arytmetyka co w powyższym przykładzie z opieki zdrowotnej.

## Pułapki

- **Ignorowanie zależności od ryzyka bazowego**: ten sam test przesiewowy lub program ma bardzo różne NNS — i efektywność kosztową — w populacji wysokiego ryzyka i niskiego ryzyka. Nigdy nie podawaj NNS bez wskazania populacji, dla której go obliczono.
- **Liczenie złego mianownika**: NNS liczy osoby *przebadane*, a nie te z dodatnim wynikiem ani rozpoczynające leczenie — zawiera już skuteczność całego lejka, więc nie wolno go porównywać z miarą liczoną tylko po dodatnich.
- **Porównywanie między okresami obserwacji**: krótszy okres obserwacji zwykle zawyża NNS, bo w oknie obserwuje się mniej zdarzeń. Wartości NNS są porównywalne tylko wtedy, gdy obliczono je dla tej samej długości obserwacji.

## Źródła

- Rembold CM. „Number needed to screen: development of a statistic for disease screening.” BMJ. 1998;317(7154):307-12.
