# Vænt verðmæti úrtaksupplýsinga (EVSI)

EVSI er verðmæti *tiltekinnar fyrirhugaðrar rannsóknar* — tiltekin hönnun, tiltekin úrtaksstærð — áður en hún er keyrð, öfugt við [EVPI](../vænt-verðmæti-fullkominna-upplýsinga/), sem verðleggur að útrýma allri óvissu í einu lagi. EVSI svarar spurningunni sem rannsóknarfjármögnunaraðili stendur raunverulega frammi fyrir: „er *þessi* rannsókn, af *þessari* stærð, þess virði kostnaðarins?“

## Hvers vegna það skiptir máli

EVPI segir þér þakið á því hvers virði nokkur rannsókn gæti verið; hún segir þér aldrei hvort rannsóknin fyrir framan þig nær yfir markið. Landsbundinn rannsóknarfjármögnunaraðili sem velur milli 50 sjúklinga tilraunar og 500 sjúklinga endanlegrar rannsóknar þarf að vita hve mikils virði *hver tiltekin hönnun* er, ekki bara verðmæti alvitundar. EVSI gefur þá tölu, og þar sem hún stigmagnast með úrtaksstærð getur fjármögnunaraðili fundið úrtaksstærðina sem hámarkar vænt nettó ávinning frekar en að giska.

Þess vegna er EVSI líka alltaf minna en eða jafnt og EVPI: endanlegt úrtak getur aðeins leyst óvissu að hluta, og rannsókn sem virðist vera meira virði en fullkomnar upplýsingar er merki um að reikningurinn sé rangur, ekki raunveruleg niðurstaða.

## Stærðfræðin

```
Almennt:
EVSI(n) = E_gögn[ max_d E_θ|gögn[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (hreiðruð vænting: ytri yfir mögulegar niðurstöður rannsóknar, innri yfir
  eftirálit um θ eftir að niðurstaðan sést — venjulega metin með hreiðruðum
  Monte Carlo / Bayes-uppfærslu yfir úrtök úr líkindanæmnigreiningu)

Lokað form með normaltilnálgun (ein óviss breyta, samoka
normal-normal líkan — hefðbundin stytting, ekki nákvæm fyrir hvert líkan):
EVSI(n) = EVPI × n / (n + n0)

n  = úrtaksstærð fyrirhugaðrar rannsóknar
n0 = „frumjafngild úrtaksstærð“ — stærð ímyndaðs úrtaks sem bæri sömu
     upplýsingar og núverandi frumdreifing, leidd af hlutfalli gagnadreifni
     og frumdreifni
ENBS(n) = EVSI(n) − Kostnaður(n)
EVSI þýðis = EVSI á ákvörðun × ákvarðanir sem verða fyrir áhrifum
```

Almenna formið er hreiðruð vænting því framtíðarniðurstaða rannsóknar er sjálf óviss: þú verður að meðaltala yfir hvert mögulegt gagnasafn sem rannsóknin gæti skilað, og endurreikna fyrir hvert þeirra bestu ákvörðun miðað við uppfærða (eftiráliti) trú. Lokaða normaltilnálgunin skiptir þeim reikniskostnaði út fyrir eitt hlutfall, gilt þegar óvissa breytan og gögnin eru (nokkurn veginn) normaldreifð og samoka — þægindi, ekki altæk lög. Fullur hreiðraður Monte Carlo er almenna aðferðin þegar sú forsenda stenst ekki. Sjá [líkindanæmnigreiningu](../líkindanæmnigreining/) fyrir PSA-úrtökin sem EVSI er venjulega metið út frá.

## Dæmi útreiknað

Byggt á útreiknaða dæminu um [EVPI](../vænt-verðmæti-fullkominna-upplýsinga/) — dreifing gervigreindarskjölunaraðstoðarmanns til 5.000 starfsmanna, þar sem EVPI reyndist vera 1,2 m£ — settu sömu EVPI fram hér í heilum pundum: **EVPI = 1.200.000 £**.

Fyrirhuguð tilraun með 50 starfsmönnum er á borðinu. Af hlutfalli dreifni frumtrúar og mælinákvæmni tilraunarinnar reiknast frumjafngild úrtaksstærð `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = 480.000 £
```

Tilraunin kostar 120.000 £:

```
ENBS = EVSI − Kostnaður = 480.000 − 120.000 = 360.000 £
```

Skýrt jákvæður ENBS: fjármagnaðu tilraunina. Ef sama innkaupaákvörðun endurtekur sig hjá 3 svipuðum svæðisbundnum stofnunum skalast verðmæti tilraunarinnar:

```
EVSI þýðis = 480.000 × 3 = 1.440.000 £
```

## Tengsl við hugbúnaðarverkfræði

EVSI er hagfræði þess að velja *hversu stór* tilraun eða A/B-próf ætti að vera, ekki bara hvort keyra eigi eitt yfirhöfuð:

- **Úrtaksstærð sem fjárfestingarákvörðun.** 50 notenda beta og 5.000 notenda þrepaskipt útbreiðsla eru ólíkar „rannsóknir“ með ólíkt EVSI og ólíkan kostnað — EVSI leyfir þér að bera þær saman á sama grunni í stað þess að sjálfgefa „meiri gögn eru alltaf betri“.
- **ENBS, ekki EVSI eitt og sér, er prófið við pöntun.** Rannsókn með hátt EVSI en kostnað sem étur mest af því er veik tillaga; ákvörðunarreglan er vænt nettóávinningur úrtakstöku, nákvæmlega eins og viðskiptarök draga kostnað frá ávinningi frekar en að skýra frá ávinningi einum.
- **Minnkandi ávöxtun er skýr.** Þar sem EVSI(n) vex með `n/(n+n0)` tvöfaldar það aldrei verðmæti tilraunar að tvöfalda stærð hennar — formleg útgáfa verkfræðilegs eðlishvata um að stærri tilraun hafi minnkandi jaðarupplýsingagildi.

## Gildrur

- **Að beita normaltilnálguninni utan forsendna hennar.** Hún á aðeins við um nokkurn veginn samoka, einbreytuóvissu; sannarlega ólínulegt eða fjölbreytulíkan krefst fulls hreiðraðs Monte Carlo, ekki þessarar styttingar.
- **Að bera EVSI aðeins saman við reiðufjárkostnað.** EVSI verður að vega gegn *öllum* kostnaði rannsóknarinnar, að meðtöldum eigin tafakostnaði ákvörðunar — sjá [kostnað við tafir](../kostnaður-við-tafir/) — ekki bara reikningi rannsóknarinnar.
- **Að líta á EVSI > EVPI sem raunverulega niðurstöðu.** EVSI getur aldrei farið yfir EVPI samkvæmt smíði; útreikningur sem skilar því er líkanavilla, ekki uppgötvun.

## Heimildir

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
