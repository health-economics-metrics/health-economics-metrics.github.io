# SPACE og DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — ánægja og vellíðan, árangur, virkni, samskipti og samvinna, skilvirkni og flæði) og DevEx (endurgjafarlykkjur, vitsmunaálag, flæðisástand) eru rammar til að mæla framleiðni forritara **á marga vegu** — svar fagsins við þeirri uppgötvun að enginn einn mælikvarði stenst snertingu við raunveruleikann.

## Hvers vegna það skiptir máli

Báðir rammar fela í sér sömu dýrkeyptu lexíu og rannsóknir á heilsuútkomum lærðu áratugum fyrr: ein tala (kóðalínur; blóðþrýstingur) rangfærir fjölvíðan veruleika og að besta hana framleiðir gaming, ekki umbætur. SPACE mælir fyrir um að sameina mælikvarða úr að minnsta kosti þremur víddum og blanda saman mælingum og sjálfsmati — byggingarlega eins og [EQ-5D](../eq-5d/) lýsir fimm víddum áður en nokkur vísitala er reiknuð, og ástæðan fyrir því að [PROMs](../sjúklingatilkynntar-útkomur/) eru til samhliða klínískum mælingum. Ánægja/vellíðan er heldur ekki mjúkt skraut: hún mataði hagfræði [starfsmannavarðveislu](../varðveisla-starfsfólks/), þar sem starfsmannavelta er verðlögð í mánuðum af fullhlöðnum launum.

## Stærðfræðin

Hvorugur ramminn er formúla; báðir eru mælingahönnun:

```
SPACE-regla: ≥ 3 víddir, ≥ 1 skynjunarmælikvarði (könnun) + ≥ 1 kerfismælikvarði (mælingar)

DevEx-víddir og dæmi um pörun:
  endurgjafarlykkjur → CI-lengd (mælingar) + „bið finnst hæg“ (könnun)
  vitsmunaálag       → finnanleiki skjala, tími til innleiðingar + skynjað erfiði
  flæðisástand       → þéttleiki funda/truflana + sjálfsmetin einbeiting

Afleiddar vísitölur (t.d. DXI hjá DX) varpa könnunarsamsetningum á tíma:
fullyrðing seljanda ≈ 13 mín/forritara/viku á hvert vísitölustig — meðhöndlaðu
sem viðmið seljanda til staðfestingar á staðnum, ekki sem náttúrulögmál.
```

## Dæmi útreiknað

Vettvangsteymi réttlætir DevEx-fjárfestingu (CI-hröðun + endurbætur á skjölum) fyrir 300 forritara:

```
Grunnlína: CI p75 = 28 mín; könnun „ég missi einbeitingu við bið eftir byggingum“: 62% sammála
Eftir:     CI p75 = 9 mín;  samþykki 24%

Endurheimtur tími (mælingar): 6 byggingar/dag × 19 mín × 0,4 nýtanlegt = ~45 mín/dag/forritara
Gildi getu: 300 × 0,75 klst. × 220 d × 60 £/klst. ≈ 2,97 m£/ár (ekki reiðufjárlosandi —
sjá cash-releasing-vs-non-cash-releasing.md; 0,4 nýtingarþátturinn er
sundrunarafslátturinn úr practitioner-time.md)
Skynjunarstaðfesting er það sem gerir fullyrðinguna úr mælingum trúverðuga — hvort
tveggja eitt og sér er hægt að spila; saman þríhyrnamæla þau.
```

## Tengsl við hugbúnaðarverkfræði

Þetta skjal *er* hugbúnaðarhliðin; flutningurinn liggur í átt að heilsuhagfræði. „Gæðaleiðrétt verkfræðingsár“ — tími vigtaður með staðlaðri upplifunarvísitölu — er smíði [QALY](../gæðaleiðrétt-lífár/) beitt á verkfræðigetu, og það erfir reglur QALY: vægi frá staðfestu mælitæki (samræmd könnun, birt stigagjöf), fengin *áður* en samanburður fer fram, aldrei stillt til að flatta uppáhaldstól. Lexían um [SF-6D á móti EQ-5D](../eq-5d/) gildir líka: ólík mælitæki gefa kerfisbundið ólíkar tölur, svo berðu aldrei saman DevEx-vísitölur milli mælitækja ólíkra seljenda.

## Gildrur

- **Hrun í einn mælikvarða**: mælaborð sem þjappa SPACE í eina einkunn endurskapa vandann sem ramminn er til að koma í veg fyrir.
- **Virknimælikvarðar sem útkomur**: commit, PR og sögupunktar eru Virkni — víddin sem SPACE varar sérstaklega við sem auðveldasta að spila (hliðstæða í heilsu: að telja aðgerðir, ekki bata).
- **Könnunarþreyta og Hawthorne-áhrif**: ársfjórðungsleg létt mælitæki slá vikulegar yfirheyrslur.
- **Samanburður teyma**: eins og deildatöflur sjúkrahúsa án leiðréttingar fyrir sjúklingablöndu — samhengismunur (svið, arfleifðarálag, bakvaktir) ræður ríkjum.

## Heimildir

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
