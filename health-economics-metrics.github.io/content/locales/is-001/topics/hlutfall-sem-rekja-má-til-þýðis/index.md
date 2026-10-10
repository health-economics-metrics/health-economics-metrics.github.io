# Hlutfall sem rekja má til þýðis (PAF)

PAF er hlutfall byrði sjúkdóms eða útkomu í þýði sem rekja má til tiltekinnar áhættuþáttaútsetningar — hlutinn sem hyrfi ef útsetningin væri fjarlægð algerlega. Það breytir „þessi áhættuþáttur tvöfaldar líkur þínar“ í tölu á þýðisstigi sem pantandi getur raunverulega skipulagt út frá: hve mörg tilvik, og hve mikill kostnaður, tiltekin útsetning er í raun þess virði að elta.

## Hvers vegna það skiptir máli

Levin kynnti PAF 1953 til að svara þröngri, áþreifanlegri spurningu: ef enginn reykti, hve mikið af lungnakrabbameini hyrfi? Sami reikningur mælir nú umfang landsbundins forvarnaskipulags alls staðar frá tóbaks- og offitustefnum til áhættuþáttaraðana í rannsókn WHO Global Burden of Disease, því hlutfallsleg áhætta ein og sér segir ekkert um áhrif — áhættuþáttur getur tvöfaldað líkur á sjaldgæfum atburði og varla hreyft þýðisbyrði sjúkdóms, eða aðeins aukið líkur á algengum atburði örlítið og samt skýrt gríðarlegan hluta tilvika. PAF er það sem breytir „áhættuþáttur X er hættulegur“ í „að fjarlægja áhættuþátt X myndi koma í veg fyrir þetta mörg tilvik á ári“, sem er talan sem viðskiptarök forvarnaáætlunar þarfnast í raun. Sjá [forvarnahagfræði](../forvarnahagfræði/) fyrir hvað það kostar að bregðast við þeirri tölu þegar þú hefur hana.

## Stærðfræðin

```
PAF = algengi_útsettra × (hlutfallsleg_áhætta − 1) / (1 + algengi_útsettra × (hlutfallsleg_áhætta − 1))

algengi_útsettra   = hlutfall þýðis sem er útsett fyrir áhættuþættinum (0–1)
hlutfallsleg_áhætta = áhætta útkomu hjá útsettum á móti óútsettum (t.d. 2,5 = 2,5×)

Tilvik sem rekja má til = heildartilvik × PAF
```

PAF vex með bæði algengi útsetningar og hlutfallslegri áhættu — hófleg hækkun hlutfallslegrar áhættu (segjum 1,5×) tengd mjög algengri útsetningu getur skilað stærra PAF en dramatísk hlutfallsleg áhætta (segjum 5×) tengd sjaldgæfri. Það er öll ástæða þess að það er til sem sérstök tala frá hlutfallslegri áhættu.

## Dæmi útreiknað

Áhættuþáttur er til staðar hjá 30% þýðis (`algengi_útsettra = 0,3`) og eykur áhættu útkomunnar 2,5-falt (`hlutfallsleg_áhætta = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

Með 1.000 tilvik/ár í þýðinu:
Tilvik sem rekja má til = 1.000 × 0,3103 ≈ 310 tilvik/ár
```

Rétt innan við þriðjungur árlegrar byrði þessarar útkomu er rekjanlegur til útsetningarinnar — að útrýma henni algerlega (fræðilegt þak; ekkert raunverulegt inngrip nær 100% fjarlægingu útsetningar) myndi koma í veg fyrir um 310 af 1.000 tilvikum á ári.

## Tengsl við hugbúnaðarverkfræði

PAF er faraldsfræðiútgáfan af „hve mikið af atvikamagni okkar má rekja til þessarar einu rótarorsakar?“ — sama lögun spurningar og teymi spyrja þegar þau meta tiltekinn flokk dreifingar eða ósjálfstæðis gegn heildaratvikum í framleiðslu, í stað þess að líta á hvert atvik sem jafn þess virði að laga á sama hátt. Rótarorsakaflokkur sem er til staðar í stórum hluta dreifinga með aðeins hóflega hlutfallslega áhættu á atviki getur skákað sjaldgæfum flokki með háa hlutfallslega áhættu í því hvar eigi að verja verkfræðivinnu fyrst — nákvæmlega PAF-innsýnin, þýdd.

## Gildrur

- **Að leggja PAF saman milli áhættuþátta**: PAF fyrir marga þætti sem hafa áhrif á sömu útkomu leggjast ekki saman í 100% — þau geta farið yfir það samtals, því þættir víxlverka og deila orsakaleiðum. Líttu á hvert PAF sem „ef þessi þáttur einn væri fjarlægður“, aldrei sem skiptingu heildaráhættu.
- **Að flytja hlutfallslega áhættu milli þýða**: hlutfallsleg áhætta metin í einu þýði (önnur grunntíðni útsetningar, aðrir blandandi þættir) reiknar villandi PAF þegar henni er beitt á útsetningartíðni annars þýðis.
- **Að rugla PAF saman við eignanlega áhættu hjá útsettum**: PAF er á þýðisstigi og fer eftir útsetningartíðni; eignanleg áhætta hjá útsettum er á einstaklingsstigi og gerir það ekki. Þau svara ólíkum spurningum — vitnaðu ekki í annað til að svara hinu.

## Heimildir

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
