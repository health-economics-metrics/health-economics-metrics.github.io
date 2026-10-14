# EQ-5D

EQ-5D er staðlaður spurningalisti EuroQol-hópsins til að mæla heilsutengd lífsgæði. Það er mælitækið sem skilar nytjavogum í flestum [QALY](../gæðaleiðrétt-lífár/)-útreikningum — viðmiðunartilvik NICE nefnir það æskilegasta mælinguna fyrir fullorðna.

## Hvers vegna það skiptir máli

Sérhver stafræn heilbrigðisvara sem vill gera tilkall til QALY þarfnast nytja úr staðfestu mælitæki, og EQ-5D er sjálfgefið í Bretlandi og stórum hluta Evrópu. Það er nógu stutt til að fella inn í app (5 spurningar + sjónræn kvarði), sem þýðir að hugbúnaðarvörur geta safnað útkomugögnum af HTA-gráðu sem aukaafurð venjulegrar notkunar — byggingarlegt forskot á lyf, sem þurfa sérstakar rannsóknir.

## Stærðfræðin

EQ-5D-5L spyr einnar spurningar í hverri af **5 víddum** — hreyfigeta, sjálfsumönnun, venjuleg störf, verkir/óþægindi, kvíði/þunglyndi — hverri svarað á **5 stigum** (engin vandamál … mikil vandamál), auk 0–100 sjónræns kvarða (EQ VAS).

```
Heilsuástand = 5 stafa snið, t.d. „21221“
Nytjavísitala = gildasett(snið)

Gildasettið er landssértækt, leitt af tímaskiptakönnunum / valkönnunum
meðal almennings. Akkeri: 1 = full heilsa, 0 = dáinn; ástönd verri en dauði
eru neikvæð (gólf 3L-setts í Bretlandi: −0,594).
```

QALY-reikningurinn heldur svo áfram sem `tímalengd × nytjar`.

## Dæmi útreiknað

Endurhæfingarapp fyrir stoðkerfi mælir EQ-5D-5L við innleiðingu og eftir 6 mánuði hjá 1.000 notendum sem ljúka.

```
Meðalnytjar við grunnlínu:  0,62
Meðalnytjar eftir 6 mánuði: 0,71
Ávinningur viðhaldið (gerum ráð fyrir) 1 ár: (0,71 − 0,62) × 1,0 = 0,09 QALY á notanda
```

Gegn breytingu viðmiðunarhóps upp á 0,03 (náttúrulegur bati) er eignanlegur ávinningur 0,06 QALY/notanda. Verðlagt á 20.000–30.000 £/QALY: **1.200–1.800 £ af heilsuverðmæti á hvern notanda sem lýkur** — talan sem festir verðsamninga appsins við greiðanda. (Minnsti klínískt mikilvægi munur fyrir EQ-5D-vísitöluna er algengt á bilinu 0,03–0,08, svo 0,06 er sennilegt en verður að standast samanburð við viðmiðunarhópinn; sjá [sjúklingatilkynntar útkomur](../sjúklingatilkynntar-útkomur/).)

## Tengsl við hugbúnaðarverkfræði

- **Mældu það.** EQ-5D við skráningu og við eftirfylgnibil eru nokkrir skjáir í viðmóti; ávinningurinn eru sönnunargögn af HTA-gráðu. Fáðu leyfi frá EuroQol (nauðsynlegt, ókeypis fyrir sumum notkun).
- **Notaðu rétt gildasett** fyrir landið þar sem dreift er — sömu svör gefa ólíka einkunn í Bretlandi, Þýskalandi og Japan.
- **Hönnunarlærdómur**: EQ-5D sýnir hvernig örlítil stöðluð könnun ásamt birtri stigagjafarfalli skilar sambærilegri einni vísitölu. Það er mynstrið fyrir hverja trúverðuga vísitölu um upplifun forritara líka — staðlað mælitæki, birtar vogir, ekki óformlegar tilfinningar. Sjá [SPACE og DevEx](../space-og-devex/).

## Gildrur

- **Fyrir/eftir án viðmiðs** — hverfing til meðaltals og náttúrulegur bati blása upp einfaldar niðurstöður.
- **Lifendaskekkja**: að mæla aðeins notendur sem héldust virkir (sjá [varðveisla og brottfall](../varðveisla-og-brottfall/)).
- **Blöndun 3L og 5L útgáfa eða gildasetta** milli rannsókna — kerfisbundið ólíkar tölur.
- **Þaksáhrif** í vægt veikum hópum: margir notendur skora nálægt 1,0 við grunnlínu og skilja ekkert svigrúm til að sýna ávinning.
- **Að líta á gildasett sem sjálfsréttlætandi**: nytjatölurnar sem gildasett skilar voru sjálfar leiddar af almenningi með tímaskiptakönnunum (eða skyldum valkönnunum) — sjá [Öflun nytja með tímaskiptum (TTO)](../tímaskiptaaðferð-tto-til-að-leiða-fram-nytjagildi/) fyrir hvernig.

## Heimildir

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
