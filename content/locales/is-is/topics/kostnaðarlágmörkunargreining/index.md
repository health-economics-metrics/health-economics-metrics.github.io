# Kostnaðarlágmörkunargreining (CMA)

CMA ber aðeins saman kostnað og velur ódýrasta kostinn — réttmæt *aðeins* þegar sýnt hefur verið fram á að útkomur kostanna séu jafngildar.

## Hvers vegna það skiptir máli

CMA er einfaldasta greiningin og sú sem oftast er misnotuð. Jafngildisfullyrðingin vinnur allt verkið: ef útkomur eru í raun ekki ólíkar (lífhliðstæðulyf og frumlyf; tveir seljendur sömu þjónustu sem uppfylla sömu kröfulýsingu) er kostnaður eina spurningin og CMA er rétt. Strangleikinn felst í því að *sanna* jafngildi fyrst — yfirleitt með rannsókn á því að ekki sé síðra með fyrirfram tilgreindum mörkum — en það er einmitt skrefið sem kaupendur sleppa oftast.

## Stærðfræðin

```
Gefin sönnunargögn um að Áhrif_A ≈ Áhrif_B (innan fyrirfram tilgreindra marka δ):
Veldu lágmark(Kostnaður_A, Kostnaður_B)

Kostnaður mældur frá sama sjónarhorni, yfir sama tímaskeið,
að meðtöldum skiptikostnaði/umbreytingarkostnaði.
```

Ef ekki er hægt að sanna jafngildi er CMA ógild — notaðu [CEA](../kostnaðarhagkvæmnigreining/)/[CUA](../kostnaðar-nytjagreining/) í staðinn.

## Dæmi útreiknað

Stofnun velur milli tveggja myndsímtalavettvanga. 3 mánaða samhliða tilraun sýnir lokahlutföll 94,1% á móti 93,8%, ánægju sjúklinga 4,4 á móti 4,4 — munur innan fyrirfram samþykktra marka δ upp á 2 prósentustig. Útkomur: jafngildar. Kostnaður yfir 3 ár:

```
                     Vettvangur A   Vettvangur B
Leyfi                360.000 £      210.000 £
Samþætting           80.000 £       150.000 £
Þjálfun/stuðningur   60.000 £       90.000 £
Samtals              500.000 £      450.000 £
```

Vettvangur B vinnur um 50.000 £ — *þar með talinn* hærri samþættingarkostnaður hans. Án tilraunarinnar hefði jafngildisfullyrðingin hvílt á bæklingum seljenda, og 1 stigs munur á lokahlutfalli (≈ þúsundir misheppnaðra viðtala á ári) myndi bera 50.000 £ ofurliði.

## Tengsl við hugbúnaðarverkfræði

CMA er formleg lögun vöruinnkaupa: tveir CI-veitendur sem uppfylla sömu SLO, tvær hlutageymslur með sömu endingarkröfu. Lærdómur heilsuhagfræðinnar er *röð aðgerða*: sannaðu fyrst jafngildi (viðmið gegn þinni vinnuálagi, tilraun gegn þínum SLO, með mörk samþykkt fyrirfram), berðu svo saman heildarkostnað að meðtöldum flutningi. „Þetta er nokkurn veginn það sama, B er ódýrara“ án fyrsta skrefsins er hvernig stofnanir kaupa tólið sem er 10% ódýrara og 40% verra. Afleiðing: þegar seljandi rökræðir verð, láttu hann staðfesta jafngildi — það bindur í hina áttina líka.

## Gildrur

- **Gert ráð fyrir jafngildi** — skilgreinandi syndin; skortur á sönnun fyrir mun er ekki sönnun fyrir jafngildi (vanmáttugar tilraunir „sýna“ jafngildi ókeypis).
- **Að sleppa skiptikostnaði** — flutningur, endurþjálfun og samhliða rekstur eiga heima á kostnaðarhliðinni.
- **Jafngildi á röngum útkomum**: jafngilt á mældum mælikvarða, ólíkt á einum sem skiptir máli (aðgengi, skottseinkun, gagnaútflutningur).

## Heimildir

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
