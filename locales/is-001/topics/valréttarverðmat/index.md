# Valréttarverðmat

Valréttarverðmat beitir fjármálalegri verðlagningarrökfræði valrétta á raunverulegar (ekki fjármálamarkaðs) fjárfestingarákvarðanir — nánar tiltekið *réttinn til að víkka* verkefni síðar ef það tekst, án þess að vera skyldugur til þess. Einfaldað tvíliðulíkan fyrir eitt tímabil (Cox, Ross, Rubinstein, 1979) metur þennan sveigjanleika beint og breytir „sendum lítið og sjáum til“ úr tilfinningu í innbyggða tölu.

## Hvers vegna það skiptir máli

Föst NPV-útreikningur verðleggur verkefni sem allt-eða-ekkert veðmál: fjármagna eða ekki, í dag í þessum mælikvarða, að eilífu. Raunveruleg verkefni — og sérstaklega þrepaskipt útbreiðsla stafrænnar heilsu — eru sjaldan veðjuð þannig: heilbrigðiskerfi getur fjármagnað litla tilraun, fylgst með hvað gerist og aðeins skuldbundið meira fé ef hún virkar. Sá sveigjanleiki hefur raunverulegt gildi, og að horfa framhjá honum vanmetur kerfisbundið þrepaskipta fjárfestingu miðað við einskots, sem er nákvæmlega öfugt fyrir innkaupaferla sem verðlauna öruggara útlítandi þrepaskipta tillögu. Valréttarverðmat verðleggur sveigjanleikann sjálfan, svo þrepaskipta tillögu megi bera sanngjarnt saman við fulla skuldbindingu í stað þess að refsa henni fyrir að líta smærri út á einföldri NPV-línu.

## Stærðfræðin

```
Áhættuhlutlaus líkindi „upp“ ástands:
  p = ((1 + áhættulaus_vextir) − niðurstuðull) / (uppstuðull − niðurstuðull)

Útvíkkunarávinningur í hverju ástandi (með gólf í núlli — útvíkkun er valkvæð):
  ávinningur_upp   = max(verðmæti_verkefnis × uppstuðull   − kostnaður_útvíkkunar, 0)
  ávinningur_niður = max(verðmæti_verkefnis × niðurstuðull − kostnaður_útvíkkunar, 0)

Verðmæti valréttar (núvirtur væntur ávinningur):
  verðmæti_valréttar = (p × ávinningur_upp + (1 − p) × ávinningur_niður) / (1 + áhættulaus_vextir)

Útvíkkað NPV = fast_npv + verðmæti_valréttar
```

Verðmæti verkefnisins annaðhvort hækkar (`uppstuðull`) eða lækkar (`niðurstuðull`) fram að næsta ákvörðunarpunkti. Útvíkkun er aðeins nýtt ef hún er arðbær í því ástandi — gólfið í núlli er það sem gerir þetta að raunverulegum *valrétti* frekar en skyldu. Til að verðleggja valréttinn til að afla upplýsinga fyrst, frekar en valréttinn til að víkka síðar, sjá [vænt verðmæti fullkominna upplýsinga](../vænt-verðmæti-fullkominna-upplýsinga/). Fyrir kostnað þess að bíða með ákvörðunina, sjá [kostnað við tafir](../kostnaður-við-tafir/).

## Dæmi útreiknað

Tilraun með stafræna þjónustu með `verðmæti_verkefnis = 1.000.000 £`, mögulegri hækkun í 1,5× eða lækkun í 0,5× fram að næsta ákvörðunarpunkti, 8% áhættulausum vöxtum og útvíkkunarkostnaði upp á 600.000 £:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

ávinningur_upp   = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
ávinningur_niður = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Gólfið skiptir máli: valrétturinn yrði EKKI nýttur ef markaðurinn veldur vonbrigðum —
útvíkkunarkostnaðurinn 600.000 £ fer yfir 500.000 £ sem
verkefnið væri virði í lækkunarástandinu.

verðmæti_valréttar = (0,58 × 900.000 + 0,42 × 0) / 1,08
                   = 522.000 / 1,08
                   ≈ 483.333,33 £
```

Þegar verðmæti valréttarins er bætt við fast-NPV grunngildi upp á 200.000 £: útvíkkað NPV = 200.000 + 483.333,33 ≈ **683.333,33 £**. Að skýra aðeins frá fasta NPV upp á 200.000 £, án þessa valréttarverðmætis, myndi vanmeta raunvirði þrepaskipta verkefnisins um meira en helming.

## Tengsl við hugbúnaðarverkfræði

Þetta er formlega útgáfan af „sendu lágmarksútgáfu núna, haltu valréttinum til að fjárfesta meira ef hún slær í gegn“ — beint viðeigandi fyrir þrepaskipta útbreiðslu stafrænnar heilbrigðisvöru, byggingarlega hliðstætt [kostnaði við tafir](../kostnaður-við-tafir/) og röðun-undir-óvissu ramma [WSJF/CD3](../wsjf-og-cd3/), og viðbót við [vænt verðmæti fullkominna upplýsinga](../vænt-verðmæti-fullkominna-upplýsinga/) og [vænt verðmæti úrtaksupplýsinga](../vænt-verðmæti-úrtaksupplýsinga/) — allt þrennt verðleggur sveigjanleika eða upplýsingar undir óvissu, frá ólíkum sjónarhornum.

## Gildrur

- **Að fá lánaða áhættuhlutlausa verðlagningu án forsendunnar um viðskiptahæfa eign sem hún byggir á**: valréttarlíkön fá lánuð áhættuhlutlaus líkindi úr fjármálalegri valréttarverðlagningu, sem gerir ráð fyrir að undirliggjandi verðmæti sé *viðskiptahæf* eign — fyrir sannarlega óviðskiptahæft raunverkefni er þetta líkanaþægindi, ekki bókstafleg markaðsstaðreynd.
- **Að líta á `uppstuðull`/`niðurstuðull` sem frjálsar breytur**: tvíliðuinntökin upp/niður eru sjálf forsendur sem krefjast rökstuðnings, ekki frjálsar breytur valdar til að gefa æskilega niðurstöðu.
- **Að skýra aðeins frá verðmæti valréttar**: valréttarverðmæti er *viðbót* við fast NPV sjálfstæðs verkefnis — algeng villa er að skýra aðeins frá valréttarverðmætinu og sleppa grunntilvikinu, sem ofmetur rökin ef fasta NPV er neikvætt og vanmetur þau (eins og í dæminu hér að ofan) þegar fasta NPV er skilið alveg eftir.

## Heimildir

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
