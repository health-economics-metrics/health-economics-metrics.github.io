# Heilsuleiðréttar lífslíkur (HALE)

HALE er samantekt á þýðisstigi: fjöldi ára sem einstaklingur getur vænst þess að lifa *við fulla heilsu*, að frádregnum árum í veikindum eða fötlun. Alþjóðlegt HALE við fæðingu var um 61,9 ár á móti lífslíkum upp á 73,3 (WHO, gögn 2019) — mannkynið lifir síðasta áratug sinn að meðaltali við skerta heilsu.

## Hvers vegna það skiptir máli

HALE er leiðarstjörnumælikvarði landsbundinnar og alþjóðlegrar heilbrigðisstefnu — teljari markmiða um „heilbrigða öldrun“ og bilið sem það afhjúpar (lífslíkur að frádregnu HALE) er byrðin sem forvarnir, fyrra inngrip og stjórnun langvinnra sjúkdóma stefna að því að loka. Stafrænar heilbrigðisstefnur á ráðuneytisstigi eru réttlættar í HALE-skilmálum; safn appa, skimunarþjónusta og vöktunaráætlana safnast að lokum hér.

## Stærðfræðin

Staðlaður útreikningur er **Sullivan-aðferðin**:

```
HALE_aldur_x = Σ (lífslíkutöflu-manna-ár á hverjum aldri ≥ x × hlutfall við fulla heilsu)
               / eftirlifendur á aldri x

„hlutfall við fulla heilsu“ = 1 − Σ (algengi_ástands × fötlunarvigt)
```

Inntak: staðlað lífslíkutafla auk algengis og fötlunarvigta fyrir heilsuástönd (úr gögnum Global Burden of Disease). HALE tengist [DALY](../fötlunarleiðrétt-lífár/) — DALY-byrði þýðis og HALE-bilið eru tvær sýnir á sömu glötuðu heilsuna.

## Dæmi útreiknað

Landsbundin stafræn háþrýstingsáætlun: 500.000 skráðir, meðalstjórn blóðþrýstings batnar nóg til að skera tíðni heilablóðfalla um 0,2 prósentustig á ári. Líkanað yfir ævi hópsins sparar heilablóðföll sem komist er hjá 15.000 fötlunarvigtuð ár (YLD á vigt 0,32 auk YLL vegna banvænna heilablóðfalla).

```
HALE-framlag ≈ 15.000 heilbrigð ár / 500.000 manns
             ≈ 0,03 ár (≈ 11 dagar) af HALE á hvern skráðan einstakling
```

Ellefu dagar hljóma smátt — en á þýðisstigi er þannig sem landsmælikvarðar hreyfast í raun: ráðuneyti kaupa milljónir örlítilla ávinninga á mann. Þessi reikningur sýnir líka hvers vegna **ná ræður**: inngrip sem er tvöfalt árangursríkara með tíunda hluta skráningarinnar hreyfir HALE fimm sinnum minna. Sjá [ná og jöfnuður](../ná-og-jöfnuður/).

## Tengsl við hugbúnaðarverkfræði

HALE er mynstur heilsumælikvarða flota: **væntur þjónustulíftími × hlutfall þess lífs sem er heilbrigt**. Vettvangsteymi getur reiknað „heilbrigðar lífslíkur þjónustu“ yfir allt sitt umhverfi — ár sem þjónusta er vænt að keyra, að frádregnum tíma í skertu, úreltu eða atvikaástandi (vigtir úr SLO-skorti). Það endurramma áreiðanleika úr punktaaðgengi yfir í líftímaheilsu og beinir úrbótum að kerfunum sem draga HALE umhverfisins niður.

## Gildrur

- **HALE hreyfist hægt og fjölorsakalega** — ekkert eitt inngrip „hreyfir HALE“ mælanlega; gerðu tilkall til líkanaðs framlags, ekki landstölfræðinnar.
- **Algengisgögn dragast aftur úr** um ár; nýlegir ávinningar sjást ekki í opinberu HALE.
- **Samanburður HALE milli landa** með ólíkri mælingu á heilsuástandi er varhugaverður; notaðu það langsniðs innan eins kerfis.

## Heimildir

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
