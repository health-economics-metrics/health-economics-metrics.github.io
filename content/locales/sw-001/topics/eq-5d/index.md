# EQ-5D

EQ-5D ni dodoso sanifu la kikundi cha EuroQol la kupima ubora wa maisha unaohusiana na afya. Ni chombo kinachozalisha uzani wa matumizi ndani ya hesabu nyingi za [QALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ubora/) — kesi ya rejea ya NICE inakitaja kuwa kipimo kinachopendelewa kwa watu wazima.

## Kwa nini ni muhimu

Bidhaa yoyote ya afya ya kidijitali inayotaka kudai QALY inahitaji matumizi kutoka chombo kilichothibitishwa, na EQ-5D ndicho chaguo-msingi nchini Uingereza na sehemu kubwa ya Ulaya. Ni fupi vya kutosha kuingizwa kwenye programu (maswali 5 + kipimo cha kuona), jambo linalomaanisha bidhaa za programu zinaweza kukusanya data ya matokeo ya kiwango cha HTA kama zao la pembeni la matumizi ya kawaida — faida ya kimuundo dhidi ya dawa, zinazohitaji tafiti maalumu.

## Hisabati

EQ-5D-5L huuliza swali moja katika kila moja ya **vipimo 5** — uhamaji, kujihudumia, shughuli za kawaida, maumivu/usumbufu, wasiwasi/unyogovu — kila kimoja kikijibiwa katika **viwango 5** (hakuna matatizo … matatizo makubwa sana), pamoja na kipimo cha kuona cha 0–100 (EQ VAS).

```
Hali ya afya = wasifu wa tarakimu 5, mf. "21221"
Kielezo cha matumizi = seti_ya_thamani(wasifu)

Seti ya thamani ni mahususi kwa nchi, inayotokana na tafiti za kubadilishana
muda / uchaguzi wa kipekee za umma kwa ujumla. Nanga: 1 = afya kamili,
0 = amekufa; hali mbaya kuliko kifo ni hasi (sakafu ya seti ya 3L ya Uingereza: −0.594).
```

Hesabu ya QALY kisha huendelea kama `muda × matumizi`.

## Mfano uliokokotolewa

Programu ya ukarabati wa mifupa na misuli hupima EQ-5D-5L wakati wa kuanza na katika miezi 6 kwa watumiaji 1,000 wanaokamilisha.

```
Wastani wa matumizi wakati wa msingi:  0.62
Wastani wa matumizi katika miezi 6:    0.71
Faida inayodumishwa (dhania) mwaka 1: (0.71 − 0.62) × 1.0 = QALY 0.09 kwa kila mtumiaji
```

Dhidi ya badiliko la kikundi cha udhibiti la 0.03 (kupona asilia), faida inayohusishwa ni QALY 0.06/mtumiaji. Ikithaminiwa kwa £20,000–£30,000/QALY: **£1,200–£1,800 za thamani ya afya kwa kila mtumiaji anayekamilisha** — namba inayoweka nanga mazungumzo ya bei ya programu na mlipaji. (Tofauti ndogo muhimu ya kikliniki kwa kielezo cha EQ-5D kwa kawaida ziko katika kiwango cha 0.03–0.08, kwa hivyo 0.06 inawezekana lakini lazima ivuke ulinganisho wa udhibiti; tazama [matokeo yanayoripotiwa na mgonjwa](../matokeo-yanayoripotiwa-na-mgonjwa/).)

## Uhusiano na uhandisi wa programu

- **Kipimie.** EQ-5D wakati wa kujisajili na katika vipindi vya ufuatiliaji ni skrini chache za UI; malipo ni ushahidi wa kiwango cha HTA. Pata leseni kutoka EuroQol (inahitajika, bure kwa matumizi mengine).
- **Tumia seti sahihi ya thamani** kwa nchi ya usambazaji — majibu yaleyale hupata alama tofauti nchini Uingereza, Ujerumani, na Japani.
- **Funzo la usanifu**: EQ-5D inaonyesha jinsi utafiti mdogo sanifu pamoja na kitendakazi cha alama kilichochapishwa kinavyotoa kielezo kimoja kinacholinganishika. Huo ndio muundo kwa kielezo chochote cha kuaminika cha uzoefu wa msanidi pia — chombo sanifu, uzani uliochapishwa, si hisia za kiholela. Tazama [SPACE na DevEx](../space-na-devex/).

## Mitego

- **Kabla/baada bila kilinganishi** — kurudi kwenye wastani na kupona asilia hukuza faida za kijinga.
- **Upendeleo wa walionusurika**: kupima watumiaji waliobaki washiriki tu (tazama [kubaki na kuondoka](../kubaki-na-kuondoka/)).
- **Kuchanganya matoleo ya 3L na 5L au seti za thamani** katika tafiti — namba tofauti kwa utaratibu.
- **Athari za dari** katika makundi yaliyoathirika kidogo: watumiaji wengi hupata alama karibu na 1.0 wakati wa msingi, bila nafasi ya kuonyesha faida.
- **Kuchukulia seti ya thamani kama inayojithibitisha**: namba za matumizi ambazo seti ya thamani inarudisha zenyewe zilipatikana kutoka kwa umma kupitia tafiti za kubadilishana muda (au za uchaguzi zinazohusiana) — tazama [Kupata Matumizi kwa Kubadilishana Muda (TTO)](../uchomozi-wa-matumizi-kwa-kubadilishana-muda/) kwa jinsi.

## Vyanzo

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
