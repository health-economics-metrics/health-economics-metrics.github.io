# Gjaldmiðlaörugg kostnaðarsamantekt

Að leggja saman marga peningaliði — mánaðarreikninga, kostnað á hvern stað, fjölára fjárlagaáhrifatölur — með venjulegum tvíundar fljótandi tölum (`f64`) safnar upp litlum framsetningarvillum, því flest tugabrot ($1.234,56, til dæmis) eru ekki nákvæmlega framsetjanleg í tvíundar fljótandi tölum. Hver einstök villa er örlítil, en stórt líkan sem leggur saman hundruð eða þúsundir línuliða yfir mörg ár getur skriðið um brot úr senti — og skriðið ræðst af *röðinni* sem samlagningarnar eru gerðar í, sem gerir það óendurtakanlegt. Gjaldmiðlasamantekt gerð í nákvæmum tugareikningi (eða heiltölureikningi í minnstu einingu) leggst nákvæmlega saman, í samræmi við hvernig bókhaldskerfi og tvíhliða færslubækur verða að stemma upp á sent.

## Hvers vegna það skiptir máli

Þetta er vel skjalfestur, grundvallarflokkur hugbúnaðarvillna: grein Goldberg frá 1991 í ACM Computing Surveys, „What Every Computer Scientist Should Know About Floating-Point Arithmetic“, er staðalheimildin um nákvæmlega hvers vegna tvíundar fljótandi tölur geta ekki framsett flest tugagildi peninga nákvæmlega, og hvers vegna samlagning margra þeirra magnar villuna. Líkön í heilsuhagfræði og fjármálum NHS leggja reglulega saman mörg ár og marga kostnaðarflokka — [heildareignarkostnaður](../heildareignarhaldskostnaður/) og [fjárlagaáhrifagreining](../fjárlagaáhrifagreining/) taka báðar saman mikinn fjölda `f64` kostnaðarlína yfir fjölára tímaskeið. Þegar líkan verður að stemma upp á sent — endurskoðun sem endurreiknar heildina í höndunum verður að fá *nákvæmlega sömu* tölu — verður reikningurinn sjálfur að vera nákvæmur tugareikningur, ekki fljótandi tölur.

## Stærðfræðin

```
Einföld samantekt:        heild = Σ f64(línuliður_i)         — rek sem fer eftir röð
Gjaldmiðlaörugg samantekt: heild = Σ Decimal(línuliður_i)    — nákvæm, endurtakanleg

Prósentuleiðrétting (t.d. varasjóður):
  leiðrétt = heild × margfaldari              — nákvæm Decimal-niðurstaða, getur haft
                                                fleiri tugastafi en veldisvísir minnstu
                                                einingar gjaldmiðilsins
  námundað = round(leiðrétt, veldisvísir_gjaldmiðils, námundunarregla)  — námundunarreglan
                                                (half-up vs half-even/bankanámundun)
                                                verður að vera tilgreind skýrt
```

Athugaðu tveggja þrepa agann: að margfalda nákvæma `Decimal`-upphæð með margfaldara getur gefið fleiri tugastafi en gjaldmiðillinn notar í raun (þrír tugastafir úr upphæð með tveimur tugastöfum sinnum margfaldara með tveimur tugastöfum, til dæmis) — sú millinákvæmni er *ekki* sjálfkrafa námunduð burt; aðeins skýrt námundunarskref, með tilgreindri námundunarreglu, tekur hana niður í raunverulegan veldisvísi minnstu einingar gjaldmiðilsins.

## Dæmi útreiknað

Tólf samhljóða mánaðarreikningar upp á 1.234,56 $ hver, lagðir saman í nákvæmum tugareikningi: 1.234,56 $ × 12 = **14.814,72 $**, nákvæmlega. Berðu þetta saman við að leggja `f64`-bókstafinn `1234.56` saman tólf sinnum í IEEE-754 tvöfaldri nákvæmni, sem getur skriðið um brot úr senti eftir röð samlagningar — raunverulegur, skjalfestur villuflokkur, ekki vandamál fyrir líkan byggt á nákvæmum tuga-`Money`-reikningi.

Beittu nú hefðbundnum varasjóði fjárlagaáhrifa upp á 5% (1,05 sinnum margfaldari) á þessa heildartölu 14.814,72 $: 14.814,72 $ × 1,05 = 15.555,456 $ — þrír tugastafir, því margföldunin er nákvæm og ekki sjálfkrafa námunduð í tvo tugastafi gjaldmiðilsins. Að námunda það skýrt í 2 tugastafi með bankanámundun (half-even) gefur nákvæmlega **15.555,46 $**.

## Tengsl við hugbúnaðarverkfræði

Þetta er beini, grundvallarlærdómurinn á bak við „fjármálahugbúnaður notar `Decimal`, ekki `float`“ — hann tengist skýrt einingum þessa safns um [heildareignarkostnað](../heildareignarhaldskostnaður/) og [fjárlagaáhrifagreiningu](../fjárlagaáhrifagreining/), sem báðar leggja nú saman venjulegar fljótandi kostnaðartölur; réttmætisrökin hér krefjast ekki tafarlauss flutnings þeirra líkana, en þau segja nákvæmlega *hvenær* kerfi verður að stemma upp á sent og má því ekki nota tvíundar fljótandi tölur fyrir peningareikning sinn. Sjá einnig [nákvæma úthlutun kostnaðar upp á eyri](../nákvæm-úthlutun-kostnaðar-upp-á-eyri/) fyrir hliðarvandann að skipta (frekar en leggja saman) heildum án þess að týna sentum.

## Gildrur

- **Umbreyting í `float` miðja vegu í keðjunni**: að draga peningagildi út í fljótandi tölu miðja vegu í útreikningi (sum `Money`-söfn nefna þessa umbreytingaraðferð jafnvel eitthvað eins og „lossy“ sem skýra viðvörun) glatar hljóðlega nákvæmnistryggingunni fyrir hvern útreikning eftir þann punkt.
- **„Decimal er of hægt til að nenna“**: að vísa nákvæmum tugareikningi frá sem óþarfa yfirbyggingu þegar réttmæti og endurskoðanleiki — ekki hrein afkastageta — skipta máli í fjárhagsskýrslugjöf.
- **Að beita álagsprósentu án þess að tilgreina námundunarregluna**: námundun half-up á móti half-even (bankanámundun) getur breytt lokasentinu; námundunarvenjan sjálf verður að vera tilgreint, endurskoðanlegt val — sjá [kostnaðar-ábatagreiningu](../kostnaðar-ábatagreining/) fyrir leiðbeiningar Green Book hjá HM Treasury um varasjóð og bjartsýniskekkjuleiðréttingar, sem er nákvæmlega tegund tölu sem þetta námundunarskref er beitt á.

## Heimildir

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
