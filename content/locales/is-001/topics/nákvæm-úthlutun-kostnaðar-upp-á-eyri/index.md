# Nákvæm úthlutun kostnaðar upp á eyri

Að skipta heildarupphæð — sameiginlegum styrk, innviðareikningi, tölu fjárlagaáhrifa — milli nokkurra viðtakenda með einföldum prósentureikningi skilar reglulega hlutum sem leggjast ekki saman í upprunalegu heildina. Nákvæm úthlutun upp á eyri er lagfæringin: aðferð með heiltölum/tugum, sem vinnur í minnstu gjaldmiðilseiningum (sentum), og tryggir að hlutirnir leggist *nákvæmlega* saman í heildina, sama hversu ójafnt hún deilist. Sérhver hugbúnaðarverkfræðingur sem þarf að stemma af skiptan heildarupphæð upp á sent — laun, styrkgreiðslur, gjaldfærsla sameiginlegrar þjónustu — þarf þetta mynstur, ekki fljótandi prósentur.

## Hvers vegna það skiptir máli

Þetta er nefnt, grundvallarmynstur í hugbúnaðarverkfræði stórfyrirtækja: *Patterns of Enterprise Application Architecture* (2002) eftir Martin Fowler skjalfestir `Money` og `Allocate` einmitt vegna þess að „skiptu 100 $ á þrjá“ er vandi sem einfaldur kóði fer stöðugt rangt með, og hljóðlega — villan kemur í ljós þegar einhver stemmir bækurnar af og finnur hlutina senti of litla (eða of stóra) miðað við heildina. Í heilsuhagfræði og fjármálum NHS er þetta ekki fræðilegt: heildartölur fjárlagaáhrifa eru skiptar milli staða, ára eða sviða; sameiginlegur innviða- og leyfiskostnaður er úthlutaður milli deilda eftir starfsmannafjölda eða starfsemishlutdeild. Sérhver slík skipting verður að ganga upp nákvæmlega, því fjármálastjóri sem fær hluta sem leggjast ekki saman í heildina hættir að treysta öllu líkaninu.

## Stærðfræðin

```
Einföld (biluð) aðferð:
  hluti_i = round(heild × hlutur_i / Σ hluta)     — námundar hvern hluta sjálfstætt

Nákvæm aðferð (stærsti afgangur / „largest remainder allocation“):
  1. grunnur_i = floor(heild_í_minnstu_einingum × hlutur_i / Σ hluta)   — aðeins heilar minnstu einingar (sent)
  2. afgangur = heild_í_minnstu_einingum − Σ grunnur_i                    — sent sem eftir eru, alltaf < fjöldi viðtakenda
  3. úthlutaðu 1 aukalegri minnstu einingu til hvers af `afgangur` viðtakendum með
     stærsta brotaafganginn úr skrefi 1, þar til afgangurinn er uppurinn

Niðurstaða: Σ hluti_i == heild, alltaf, samkvæmt smíði.
```

Nákvæma aðferðin námundar aldrei hluta einn og sér — hún námundar *alla úthlutunina* í einni aðgerð, sem er það sem gerir summuóbreytuna gilda.

## Dæmi útreiknað

Skiptu 100,00 $ jafnt á þrjá (`hlutir = [1, 1, 1]`).

Einföld aðferð: 100,00 $ ÷ 3 = 33,333… $, námundað sjálfstætt að næsta senti gefur 33,33 $ fyrir hvern viðtakanda. Samtals: 33,33 $ × 3 = 99,99 $ — eitt sent hefur horfið og engin ein lína er „nógu röng“ til að sjást við skoðun.

Nákvæm aðferð: `grunnur` = 33,33 $ fyrir alla þrjá (9.999 minnstu einingar samtals úr `floor(10.000 / 3) = 3.333` sentum hver), og eftir stendur 1 sent (10.000 − 9.999). Það eina sent sem eftir er fer til þess viðtakanda sem hefur stærsta brotaafganginn í deilingunni — hver nákvæmlega er innra jafnteflisatriði, ekki eitthvað sem kallari á að reiða sig á. Tveir viðtakendur enda með 33,33 $ og einn með 33,34 $, og hlutirnir þrír leggjast saman í nákvæmlega 100,00 $.

Þetta er nákvæmlega sá reikningur sem [fjárlagaáhrifagreining](../fjárlagaáhrifagreining/) þarfnast hvenær sem heildartölu fjárlagaáhrifa þarf að skipta milli staða, hópa eða fjárhagsára og stemma aftur við birtu heildina — sjá [gjaldmiðlaörugga kostnaðarsamantekt](../gjaldmiðlaörugg-kostnaðarsamantekt/) fyrir hliðarvandann að leggja saman marga slíka línuliði án reks.

## Tengsl við hugbúnaðarverkfræði

Þetta er bókstaflega „Money-mynstrið“ úr hugbúnaðararkitektúr stórfyrirtækja — grundvallar, nefnt mynstur fyrir nákvæmlega þennan villuflokk, ekki einstakt bragð. Raunveruleg bilun í fjárhagsafstemmingu hefur farið í loftið vegna nákvæmlega þessa villuflokks: prósentuskiptingar reiknaðar í `f64`, námundaðar á hvern viðtakanda og aldrei bornar saman við upprunalegu heildina. Það tengist beint einingu þessa safns um [heildareignarkostnað](../heildareignarhaldskostnaður/), sem leggur nú saman venjulegan fljótandi kostnað yfir ár og kosti — sami nákvæmnisagi gildir hvenær sem TCO- eða fjárlagaáhrifaheild verður að vera úthlutuð fremur en aðeins samanlögð.

## Gildrur

- **Prósenta-svo-námunda í stað stærsta afgangs**: úthlutun með fljótandi prósentum og námundun hvers viðtakanda sjálfstætt, sem magnar námundunarvillu og leggst sjaldan saman í heildina, sérstaklega yfir marga viðtakendur.
- **Að horfa framhjá veldisvísum minnstu gjaldmiðilseininga**: að gera ráð fyrir að allir gjaldmiðlar hafi 2 aukastafi — japanskt jen hefur 0, sumir gjaldmiðlar hafa 3 — handsmíðuð prósentuskipting harðkóðar yfirleitt 2 og bilar hljóðlega fyrir aðra gjaldmiðla; nákvæm úthlutunarrútína les veldisvísinn úr gjaldmiðlinum sjálfum (ISO 4217).
- **Endurúthlutun á þegar úthlutuðum afgangi**: að keyra úthlutunarrútínuna aftur á það sem eftir er af fyrri úthlutun, án idempotency-athugana, sem getur tvíinnskrifað sama sentið á sama viðtakanda.

## Heimildir

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
