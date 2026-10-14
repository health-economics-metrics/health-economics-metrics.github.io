# Skerðing vinnuframleiðni og athafna (WPAI)

WPAI er staðfestur sjálfsmatsspurningalisti (Reilly, Zbrozek, Dasbach, 1993) sem mælir hve mikið heilsuvandamál hefur áhrif á launaða vinnu og daglegar athafnir, venjulega yfir síðustu 7 daga. Hann skiptir tapinu í *fjarvistir* — vinnutími sem bókstaflega fer forgörðum — og *nærveruskerðingu* (presenteeism) — skert framleiðni meðan líkamlega er í vinnu, og sú síðari er yfirleitt stærri og duldari kostnaðarþáttur.

## Hvers vegna það skiptir máli

Einfaldar talningar veikindadaga sjá aðeins fjarvistir. Læknir eða þekkingarstarfsmaður sem tekur aldrei frídag en vinnur á 60% getu vegna langvinns ástands leggur ekkert til fjarvistaskrár en veldur samt stóru, raunverulegu framleiðnitapi — WPAI er hannaður sérstaklega til að draga þennan ósýnilega kostnað fram. Þar sem hann er staðfest mælitæki en ekki sérsmíðuð könnun er stigagjöf hans nothæf í sönnunargögnum um [sjúklingaskýrðar útkomur](../sjúklingatilkynntar-útkomur/) og kostnaðarrannsóknum á sjúkdómum án þess að rýnirinn þurfi að staðfesta mælinguna upp á nýtt. Sem sjálfsmatstæki er hann sjálfur ein tegund PROM, aðgreind helst af áherslu á vinnu og athafnir fremur en einkenni eða lífsgæði.

## Stærðfræðin

```
Fjarvistir % = klst_vantað_vegna_heilsu / (klst_vantað_vegna_heilsu + klst_unnið) × 100

Nærveruskerðing % = sjálfsmetin 0–10 skerðing við vinnu, × 10
                    (fengin beint með spurningalista, ekki leidd hér)

Heildarskerðing vinnu % =
    Fjarvistir% + (1 − Fjarvistir%/100) × Nærveruskerðing%
    (sameinar þetta tvennt svo heildin fari aldrei yfir 100%)

Framleiðnikostnaður = Heildarskerðing vinnu% / 100 × tekjur_tímabils
```

Heildarskerðingarformúlan er viljandi ekki einföld summa: bein samlagning prósentanna gæti farið yfir 100%, svo nærveruskerðing er aðeins beitt á *eftirstandandi* (ófjarverandi) hluta vinnutímans.

## Dæmi útreiknað

Starfsmaður með mígreni greinir frá því að vera skráður á 40 klukkustunda viku en missir af 4 klukkustundum:

```
klst_vantað = 4, klst_unnið = 36
Fjarvistir% = 4 / (4 + 36) × 100 = 10%
```

Hann metur sérstaklega áhrif á framleiðni sína við vinnu sem 3 af 10 á WPAI-spurningalistanum, þ.e. `Nærveruskerðing% = 30%` (þetta skref er hrátt svar úr spurningalista, ekki leitt af öðrum tölum):

```
Heildarskerðing vinnu% = 10 + (1 − 10/100) × 30
                       = 10 + 0,9 × 30
                       = 10 + 27
                       = 37%
```

Yfir 5 daga viku með 800 £ tekjur (160 £/dag):

```
Framleiðnikostnaður = 37/100 × 800 = 296 £
```

Taktu eftir að einföld talning veikindadaga hefði aðeins skráð 4 klukkustundirnar (10%) sem vantaði — nærveruskerðingarþátturinn nærri þrefaldar raunverulega skerðingu þegar hann er talinn með.

## Tengsl við hugbúnaðarverkfræði

Þetta varpast beint á heilsumælikvarða verkfræðiteyma:

- **Fjarvistir** eru veikindaleyfi og orlof — sýnilegt, þegar rakið og auðvelda hlutinn.
- **Nærveruskerðing** er útbrunni eða samhengisskiptaofhlaðni verkfræðingurinn sem er viðstaddur á hverjum stand-up en starfar á skertri getu — yfirleitt stærri og duldari kostnaðurinn, ósýnilegur í starfsmanna- eða mætingargögnum. Hún birtist þess í stað sem minni afköst í [DORA](../dora-mælikvarðar/) og [flæðismælikvörðum](../flæðismælikvarðar/), eða sem hægari lausn einmitt þeirrar [tæknilegu skuldar](../tæknileg-skuld/) sem „vextir“ auka skerðinguna enn frekar.
- Verkfræðilexían er sú sama og sú klíníska: að mæla aðeins fjarveru og kalla það „framleiðnitap“ vanmetur kerfisbundið raunverulegan kostnað, því hún missir af öllum sem eru viðstaddir en skertir.

## Gildrur

- **Minnisskekkja í sjálfsmati.** 7 daga minnisgluggi sætir sömu skýrsluskekkjum og öll afturvirk sjálfsmatsskýrsla.
- **Að meðhöndla 0–10 nærveruskerðingarkvarðann sem sanna líkamlega mælingu.** Hann er raðkvarði, fenginn með sjálfsmati, ekki staðfest líkamleg stærð — að meðhöndla mun á honum sem strangt línulegan eða bilkvarða er líkanaþægindi, ekki staðfest líkamleg staðreynd.
- **Að steypa saman stigum milli WPAI-afbrigða.** WPAI hefur nokkrar ástandssértækar útgáfur — WPAI:GH (almenn heilsa), WPAI:SHP (tiltekið heilsuvandamál) og sjúkdómssértæk afbrigði — og stig úr mismunandi afbrigðum ætti ekki að steypa saman eða bera saman án þess að athuga fyrst að þau séu sama útgáfa mælitækisins.

## Heimildir

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
