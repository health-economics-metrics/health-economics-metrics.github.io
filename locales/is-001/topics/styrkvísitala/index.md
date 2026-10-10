# Styrkvísitala (Concentration Index)

Styrkvísitalan (Wagstaff, Paci, van Doorslaer, 1991) er hinn staðlaði tölfræðilegi mælikvarði á ójöfnuð tengdan félagslegri og efnahagslegri stöðu í heilsubreytu, á bilinu −1 til 1. Neikvætt þýðir að heilsubreytan er samþjöppuð meðal þeirra sem standa verr félagslega og efnahagslega, jákvætt að hún er samþjöppuð meðal þeirra sem standa betur, og núll að ekkert samfellt félagshagfræðilegt halla sé til staðar — hún breytir grun um ójafna dreifingu í eina, sambærilega tölu.

## Hvers vegna það skiptir máli

Áætlun getur litið árangursríkt út í heild en samt skilað ávinningi sínum nær eingöngu til fólks sem stóð þegar betur. Dreifingaráhyggjur af þessu tagi eru einmitt það sem [ná og jöfnuður](../ná-og-jöfnuður/) rekur lýsandi — ná skipt eftir skortsfimmtungum, jafnaðarbil milli efstu og neðstu hópa — en lagskipt tafla þjappast ekki í eina leitnilínu og er ekki auðvelt að bera saman milli tveggja gerólíkra inngripa sem mæld eru á ólíkum kvörðum. Styrkvísitalan leysir hvort tveggja: hún er reiknuð eins fyrir hvaða heilsubreytu sem er gagnvart hvaða félagshagfræðilegri röðun sem er, svo landsbundin heilbrigðisþjónusta getur fylgst með því hvort ójöfnuður tiltekinnar stafrænnar þjónustu er að aukast eða minnka útgáfu eftir útgáfu, og borið dreifingarsanngirni útbreiðslu apps saman við til dæmis skimunaráætlun á sama staðlaða kvarða.

## Stærðfræðin

```
CI = (2 / meðaltal(heilsugildi)) × Cov(heilsugildi, félagshagfræðilegar_raðir)

Cov(X, Y) = meðaltal(X × Y) − meðaltal(X) × meðaltal(Y)   (þýðisfylgni)

félagshagfræðilegar_raðir: brotaröð hvers einstaklings í félagshagfræðilegri
dreifingu, á [0, 1] (0 = verst staddur, 1 = best staddur;
fyrir hópuð/bandskipt gögn, hefðbundið miðpunktsröð hvers hóps)
```

Þetta er „hentuga samdreifnisformúlan“ (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — hin staðlaða styttri leið iðkenda til að reikna Styrkvísitöluna beint úr pöruðum mælingum, án þess að teikna fyrst og heilda undir styrkferli.

## Dæmi útreiknað

Sjálftilkynnt góð heilsueinkunn (1 = verst, 4 = best) mæld yfir fjóra jafnstóra félagshagfræðilega fjórðunga, hver táknaður með miðpunktsröð fjórðungsins:

```
heilsugildi                = [1,0, 2,0, 3,0, 4,0]
félagshagfræðilegar_raðir  = [0,125, 0,375, 0,625, 0,875]

meðaltal(heilsugildi)       = 2,5
meðaltal(heilsa × röð)      = meðaltal([0,125, 0,75, 1,875, 3,5]) = 1,5625
meðaltal(félagshagfr. raðir) = 0,5

Cov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Jákvætt `0,25` þýðir að þessi heilsueinkunn er samþjöppuð meðal félagshagfræðilega betur staddra — þeir svarendur sem fá hærri einkunn hallast að betur stöddum enda raðarinnar.

## Tengsl við hugbúnaðarverkfræði

Þetta er sama samdreifnibyggða ójafnaðarmælingin og notuð er í hagfræði almennt (frændi Gini-stuðulsins), og hún varpast á mælingu þess hvort ávinningur hugbúnaðarvöru sé samþjappaður meðal þegar betur settra notendahópa fremur en jafnt dreifður — bein útvíkkun á [ná og jöfnuði](../ná-og-jöfnuður/) (víddin „reach“ í RE-AIM) í formlegan tölfræðilegan mælikvarða í stað lýstrar gjáar. Þar sem ná-og-jöfnuður skýrir frá áhrifum á hvert lag, þjappar Styrkvísitalan alla dreifinguna í eina tölu með formerki, hentuga sem einn rakinn KPI yfir útgáfur — raunhæf fyrir mælaborð, þar sem full lagskipt sundurliðun er það ekki.

## Gildrur

- **Rek formerkjavenju**: formerkið fer eftir því hvernig bæði heilsubreytan og röðin eru skilgreind — að snúa hvoru sem er snýr formerkinu, svo tilgreina verður venjuna sem notuð er skýrt við hvert tilkynnt gildi.
- **Jaðarraðir í stað miðpunktsraða**: hópuð eða bandskipt félagshagfræðileg gögn (t.d. fimmtungar) krefjast þess að nota brotaröð hvers hóps í *miðpunkti* hans, ekki jaðri, annars er vísitalan skekkt.
- **Að lesa „nálægt núlli“ sem „enginn ójöfnuður“**: Styrkvísitala nálægt núlli þýðir „ekkert samfellt félagshagfræðilegt halla“, ekki „enginn ójöfnuður“ í algildum skilningi — jöfnuðir í ólíkar áttir geta vegið hvorn annan upp.

## Heimildir

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
