# Kostnaður við tafir (CoD)

Kostnaður við tafir er efnahagslega verðmætið sem tapast á hverja tímaeiningu sem eiginleiki, vara eða þjónusta er *ekki* afhent. Hann er sterkasta einstaka brúin milli mælikvarða á afhendingu hugbúnaðar og heilsuhagfræði: hann breytir „við afhentum seint“ í gjaldmiðil — eða í QALY.

## Hvers vegna það skiptir máli

Regla Reinertsen: „Ef þú mælir aðeins eitt, mældu kostnað við tafir.“ Flestar stofnanir vita hvað verkefni kostar en ekki hvað mánuður af töf kostar, svo þær fínstilla fjárhagsáætlanir á meðan tímaverðmæti blæðir út. Fyrir heilbrigðishugbúnað eru áhættur bókstaflegar: í hverri viku sem umbót á leið tefst bíða sjúklingar lengur í verra heilsuástandi. CoD er öflugasti stærðfræðilegi rammi til að leggja fyrir hagsmunaaðila NHS því hann verðleggur *fjarveru* hugbúnaðarins þíns.

## Stærðfræðin

```
CoD = ávinningur á tímaeiningu sem glatast meðan óafhent   (£/viku eða QALY/viku)

Heildartap vegna tafar = CoD × lengd tafar

Fyrir forgangsröðun, sjá wsjf-and-cd3.md: CD3 = CoD / lengd.
```

Fyrir klínískan hugbúnað, tilgreindu bæði í heilsu og peningum:

```
CoD_heilsa  = sjúklingar sem verða fyrir áhrifum á viku × QALY-ávinningur á sjúkling
CoD_peningar = CoD_heilsa × λ (greiðsluviljaþröskuldur, 20–30 þús. £/QALY)
               + rekstrarsparnaður á viku sem glatast
```

## Dæmi útreiknað

**Rekstrarlegt**: hugbúnaður sparar 200 £ á sjúkling á leið; stofnun afgreiðir 50 slíka sjúklinga á viku.

```
CoD = 200 × 50 = 10.000 £/viku
10 vikna töf í innkaupum kostar 200 × 50 × 10 = 100.000 £ í sóun sem komist hefði verið hjá.
```

**Klínískt**: umbót í forgangsröðun fjarlægir 5 vikna bið (nytjar 0,68 → 0,80 fyrr) fyrir 100 sjúklinga á viku:

```
QALY-ávinningur á sjúkling = (5/52) × 0,12 ≈ 0,0115
CoD_heilsa  = 100 × 0,0115 = 1,15 QALY/viku
CoD_peningar = 1,15 × 20.000 £ ≈ 23.000 £/viku af heilsuverðmæti
```

6 mánaða töf á dreifingu „kostar“ ~30 QALY — röksemdin sem endurramma seinkun á gangsetningu upplýsingatækni sem klínískt atvik. (Viðmið til að sjá stærðargráðuna: fræg greining Black Swan Farming hjá Maersk fann einstaka eiginleika með CoD ≈ 200 þús. $/viku sem höfðu beðið í 38 vikur.)

## Tengsl við hugbúnaðarverkfræði

CoD er mælikvarðinn sem gerir [leiðtíma DORA](../dora-mælikvarðar/) og [flæðisskilvirkni](../flæðismælikvarðar/) fjárhagslega læsileg: leiðtími × CoD = peningar (eða heilsa) sem brenna í biðröðum. Notkun:

- **Forgangsröðun**: raðaðu vinnu eftir CoD/lengd ([WSJF/CD3](../wsjf-og-cd3/)) í stað háværasta hagsmunaaðilans.
- **Hagfræði ferla**: tveggja vikna útgáfutaktur hefur væntan tafakostnað upp á ~1 viku × CoD á hvern eiginleika samanborið við samfellda afhendingu — verðleggðu lotuna.
- **Innkaup**: innkaupaferli NHS upp á 6–18 mánuði hafa CoD; að sýna hann breytir umræðum um brýnt (sjá [fjárlagaáhrifagreiningu](../fjárlagaáhrifagreining/) fyrir greiðsluhæfnihliðina).

## Gildrur

- **Að gera ráð fyrir línulegum CoD**: sumt verk hefur verðmæti í formi frests (reglugerðardagsetningar — óendanlegur CoD eftir dagsetninguna, núll fyrir) eða rýrnandi verðmæti (gluggar frumkvöðla). Flokkaðu brýnisferilinn áður en þú margfaldar.
- **CoD á afurðir sem enginn vill**: töf kostar aðeins ef hluturinn hefur verðmæti; rusl sem tefst er ókeypis.
- **Tvítalning tafar og núvirðingar**: [núvirðing](../núvirðing-og-tímaforgangur/) verðleggur tíma nú þegar á fjölára tímaskeiðum; CoD er rekstrarútgáfan innan tímaskeiðs. Notaðu CoD fyrir vikur/mánuði, NPV-færslu fyrir ár.

## Heimildir

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
