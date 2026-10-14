# Markov-hópherming

Markov-hóplíkan er staðlaða HTA-líkanatæknin fyrir inngrip þar sem áhrif þróast yfir mörg tímabil (lotur), ekki í einu skoti. Ímyndaður hópur byrjar alfarið í einu heilsuástandi, og í hverri lotu færir fast safn færslulíkinda brot hópsins milli ástanda; kostnaður og QALY safnast í hverri lotu í hlutfalli við hve stór hluti hópsins er í hverju ástandi, og eru núvirt. Sérhver hugbúnaðarverkfræðingur sem líkanar fjölára viðskiptarök um stafræna heilsu — þar sem notendur eða sjúklingar færast milli ástanda eins og „virkur“, „fallinn frá“ eða „hættur“ yfir tíma — er að smíða sömu byggingu.

## Hvers vegna það skiptir máli

Flestar raunverulegar ákvarðanir um heilbrigðistækni eru ekki samanburður í einu skoti á kostnaði og útkomu eins tímabils. Langvinnt ástand versnar, tekur sig upp, svarar meðferð eða drepur, yfir ár — og [kostnaðarhagkvæmnigreining](../kostnaðarhagkvæmnigreining/) á einu tímabili getur ekki sýnt það. Umsóknir til NICE, ICER og CADTH fyrir inngrip við langvinnum sjúkdómum, metnar með [heilbrigðistæknimati](../mat-á-heilbrigðistækni/), eru nær alltaf smíðaðar sem Markov-hóplíkön með ævilangt tímaskeið, því valkosturinn — að líkana sérhverja mögulega einstaklingsleið sjúklings — er óviðráðanlegur í stórum stíl. Markov-líkan á hópstigi fórnar hluta af raunsæi á einstaklingsstigi (það getur ekki auðveldlega sýnt minni fyrri ástanda, þaðan nafnið „Markov“: framtíðin ræðst aðeins af núverandi ástandi) fyrir líkan sem er gagnsætt, endurskoðanlegt og nógu hratt til að keyra þúsundum sinnum í [líkindanæmnigreiningu](../líkindanæmnigreining/).

## Stærðfræðin

```
Hópuppfærsla einnar lotu (línuvigur x færslufylki):
  nýtt_ástand[j] = summa_i ástand[i] * færslufylki[i][j]

Kostnaður einnar lotu:
  lotukostnaður = summa_s ástand[s] * kostnaður_á_lotu[s]

QALY einnar lotu:
  lotu_qaly = summa_s ástand[s] * nytjar[s] * lotulengd_ár

Full hermun yfir `lotur` lotur, núvirt á `afsláttarstuðli`:
  heildar_núvirtur_kostnaður = summa_{t=0}^{lotur-1} lotukostnaður(ástand_t) / (1 + afsláttarstuðull)^t
  heildar_núvirt_qaly        = summa_{t=0}^{lotur-1} lotu_qaly(ástand_t)      / (1 + afsláttarstuðull)^t
  þar sem ástand_0 = upphafsdreifing, ástand_{t+1} = færa_hóp(ástand_t, færslufylki)
```

Núvirðing hverrar lotu í núvirði notar nákvæmlega formúluna úr [núvirðing og tímaforgangur](../núvirðing-og-tímaforgangur/), beitt lotu fyrir lotu í stað árs fyrir ár.

## Dæmi útreiknað

**Klínískt**: 2 ástanda líkan — `Heill` og `Dáinn` — þar sem 10% hópsins deyr í hverri lotu og `Dáinn` er gleypið (færslulíkindi þess til sjálfs síns eru 1,0; að sleppa þeirri lykkju myndi láta massa hópsins hverfa eftir eina lotu í `Dáinn`). Hópurinn byrjar alfarið `Heill`, kostar 1.000 £ á lotu meðan `Heill` (0 £ þegar `Dáinn`), og vinnur 0,8 QALY á ári meðan `Heill`. Hermt í 3 árlegar lotur á 3,5% afsláttarstuðli NICE:

```
Lota 0: ástand = [1,00, 0,00] (100% Heill)
  kostnaður = 1.000,00 £, qaly = 0,800, afsláttarstuðull = 1,000000
  núvirt: kostnaður = 1.000,00 £, qaly = 0,8000

Lota 1: ástand = [0,90, 0,10] (90% Heill, 10% Dáinn)
  kostnaður = 900,00 £, qaly = 0,720, afsláttarstuðull = 0,966184
  núvirt: kostnaður = 869,57 £, qaly = 0,6957

Lota 2: ástand = [0,81, 0,19] (81% Heill, 19% Dáinn)
  kostnaður = 810,00 £, qaly = 0,648, afsláttarstuðull = 0,933511
  núvirt: kostnaður = 756,14 £, qaly = 0,6049

Heildar núvirtur kostnaður ≈ 2.625,71 £
Heildar núvirt QALY        ≈ 2,1006
```

Ástand hverrar lotu er ástand síðustu lotu borið í gegnum færslufylkið — 90% af þeim 90% sem eru enn `Heill` í lotu 1 haldast `Heill` í lotu 2 (0,9 × 0,9 = 0,81), en hin 19% eru nú dáin (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Athugaðu að hópurinn tæmir `Heill` aldrei alveg: með fast 10% dánarhlutfall á lotu og enga endurkomu rýrnar `Heill`-hlutfallið veldisvísislega frekar en að ná núlli við nokkurn endanlegan lotufjölda.

## Tengsl við hugbúnaðarverkfræði

Fyrir hvernig fjöllotu-HTA-líkan er notað í raunverulegu mati, sjá [mat á heilbrigðistækni](../mat-á-heilbrigðistækni/) — viðmiðunartilvikið sem stýrir hvaða afsláttarstuðul, nytjauppsprettu og tímaskeið innsent Markov-líkan verður að nota.

Markov-hóplíkan er byggingarlega stöðuvél með líkindafærslum, keyrð í fastan fjölda slaga, sem núvirðir verðmæti hvers slags. Sama lögun hermir varðveislu/ástandsfærslur notendahóps yfir tíma — sjá [DORA-mælikvarða](../dora-mælikvarðar/) fyrir rekstraráreiðanleikaútgáfuna af „hve stór hluti kerfisins er í skertu ástandi á þessu tímabili, og hvað kostar það“. Nánar tiltekið:

- **Varðveislu-/brottfallslíkön** eru Markov-hóplíkan með ástöndum eins og „virkur“, „í hættu“, „hættur“: fast mánaðarlegt færslufylki, keyrt í 12 eða 24 mánaðarlegar lotur, segir þér væntan fjölda virkra notenda (og tekjur) í hverjum framtíðarmánuði, á sama hátt og `Heill`/`Dáinn` segir þér væntan fjölda eftirlifenda.
- **Áreiðanleiki og hagfræði atvika**: ástönd kerfis (heilbrigt, skert, niðri) má líkana á sama hátt, með „kostnaði á lotu“ af tjóni vegna stöðvunar sem safnast meðan kerfið er í skertum/niðri ástöndum — sem breytir röksemd um atvikatíðni í núvirta kostnaðarröksemd sem hægt er að bera saman við kostnað áreiðanleikavinnunnar sem myndi breyta færslulíkindunum.
- **Gleypin ástönd sem lokaástönd**: `Dáinn` í klínísku líkani er nákvæmlega „sagt upp áskrift“ eða „varanlega án nettengingar“ í hugbúnaðarlíkani — hvort tveggja þarf skýr færslulíkindi til sjálfs síns upp á 1,0, annars tapar hermunin hljóðlega massa.

## Gildrur

- **Færslulíkindi sem leggjast ekki saman í 1 í hverri línu.** Lína sem leggst saman í meira eða minna en 1 lætur hópinn hljóðlega „leka“ eða „vaxa“ massa í hverri lotu — athugaðu alltaf línusummur áður en þú treystir úttaki líkans, því ekkert við uppbyggingu líkansins sjálfs flaggar villuna.
- **Lotulengd of gróf fyrir raunverulega gangverk sjúkdómsins.** Árleg lota fyrir ástand sem breytir marktækt um ástand innan vikna vanmetur færslur sem verða miðja vegu í lotu; veldu lotulengd stutta miðað við hve hratt líkanaða ferlið hreyfist í raun.
- **Að gleyma sjálfslykkju gleypins ástands.** Gleypið ástand (dauði, varanleg stöðvun) þarf færslulíkindi til sjálfs síns upp á nákvæmlega 1,0. Slepptu henni og massi hópsins í því ástandi gufar upp eftir eina lotu, sem vanmetur uppsafnaðan kostnað eða QALY-tap.
- **Að líta á líkanið sem staðfest því það keyrir.** Markov-hóplíkan með trúverðugum færslulíkindum getur samt verið byggingarlega rangt (vantar ástönd, röng gleypin hegðun); staðfestu gegn þekktum faraldsfræðilegum viðmiðum (t.d. samræmist líkönuð lifun eftir 5 ár birtum lifunarferlum) áður en þú treystir úttakinu.

## Heimildir

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
