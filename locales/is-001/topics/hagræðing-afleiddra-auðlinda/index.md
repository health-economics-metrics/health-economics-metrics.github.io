# Hagræðing afleiddra auðlinda

Að spara klukkustund fyrir sérfræðing — heimilislækni, yfirlækni á deild, ráðgjafalækni — kemur oft í veg fyrir flöskuhálstafir fyrir heilt þverfaglegt teymi (MDT) hjúkrunarfræðinga, skrifstofufólks og meðferðaraðila sem bíða eftir klínískum samþykktum. Verðmæti þess að losa flöskuhálsinn eru afköst allra sem eru neðar í keðjunni.

## Hvers vegna það skiptir máli

Heilbrigðisþjónusta gengur á heimildakeðjum: útskriftir bíða eftir undirskrift ráðgjafalæknis, meðferðaráætlanir bíða eftir yfirferð MDT, tilvísanir bíða eftir forgangsröðun. Þegar hliðvörðurinn tefst er kostnaðurinn ekki klukkustund eins manns — heldur aðgerðalaus eða föst tími yfir hvert háð hlutverk, auk tíma sjúklinga í óvissu (aukalegir [rúmdagar](../rúmdagar-sem-sparast/), lengri [RTT-biðir](../tilvísun-til-meðferðar/)). Þetta er takmörkunarkenningin beitt á klínískar leiðir: klukkustund sem sparast *við takmörkunina* er virði jaðarafkasta alls kerfisins; klukkustund sem sparast annars staðar er mun minna virði.

## Stærðfræðin

```
Verðmæti þess að losa flöskuháls = Σ yfir afleidd hlutverk (föst tími sem losnar × einingarkostnaður)
                                 + afkastaaukning leiðar × verðmæti á hverja lokna leið

Samanburður: verðmæti sömu klukkustundar sem sparast í hlutverki sem er ekki hlið ≈
aðeins getuverðmæti þess hlutverks (sjá practitioner-time.md).
```

Finndu takmörkunina reynslulega: hvar myndast lengsta biðröð? Í hvers pósthólf rekja tafir sig?

## Dæmi útreiknað

Útskriftir deildar krefjast yfirferðar ráðgjafalæknis á hverjum morgni. Ráðgjafinn eyðir 90 mín/dag í að safna upplýsingum dreifðum yfir kerfi; yfirferðum lýkur kl. 14:00 og 6 útskriftir á dag klárast of seint fyrir þann dag — hver kostar rúmdag sem komist hefði verið hjá.

Útskriftaryfirlitsmælaborð (rannsóknir, lyf, merki í einni sýn) styttir söfnun í 20 mínútur; yfirferðum lýkur kl. 11:30:

```
Rúmdagar sem komist er hjá = 4 af 6 síðbúnum útskriftum × 365 ≈ 1.460 rúmdagar/ár
Afleidd losun: 2 útskriftarsamræmingarfulltrúar + lyfjafræði + flutningar
               voru áður aðgerðalaus-svo-í-kappi á hverjum síðdegi —
               ~3 starfsmannastundir/dag af föstum tíma sem losnar ≈ 1.100 klst./ár
```

Eigin 70 mínútur ráðgjafans eru *minnsti* hluti verðmætisins — tilgangur þessa mælikvarða. Metið rúmdagana eftir búnaði (sjá [rúmdagar sem sparast](../rúmdagar-sem-sparast/)) og starfsmannastundirnar sem getu.

## Tengsl við hugbúnaðarverkfræði

Þetta er kóðarýni, arkitektúrsamþykki og pósthólf yfirverkfræðingsins. Þegar fimm verkfræðingar bíða dag eftir þeim eina sem getur samþykkt hönnun er kostnaðurinn fimm verkfræðingadagar auk dags af [kostnaði við tafir](../kostnaður-við-tafir/) á vinnunni sjálfri — ekki ein klukkustund yfirferðaraðila. Verkfæri sem þjappa verkefni hliðvarðarins (betri samhengi rýni, sjálfvirkar forathuganir, mælaborð sem safna því sem samþykkjandinn þarf) kaupa kerfisafköst, ekki þægindi einstaklings. Mældu sóknar-/biðtíma við takmörkunina (sjá [flæðismælikvarðar](../flæðismælikvarðar/)) — það er hugbúnaðarígildi útskriftarhengiflugsins kl. 14:00.

## Gildrur

- **Að fínstilla það sem er ekki takmörkun**: falleg verkfæri fyrir hlutverk sem ekkert bíður á bak við skila nánast engu kerfisverðmæti.
- **Flutningur takmörkunar**: losaðu ráðgjafann og takmörkunin færist (til lyfjafræði, til flutninga) — líkanaðu *næstu* takmörkun áður en þú gerir tilkall til fullrar afkastaaukningar.
- **Að telja afleiddar stundir sem reiðufé**: losun fasts tíma er geta, háð venjulegu [endurráðstöfunarprófi](../reiðufjárlosandi-sparnaður-á-móti-ekki-reiðufjárlosandi/).

## Heimildir

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
