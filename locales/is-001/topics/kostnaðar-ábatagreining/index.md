# Kostnaðar-ábatagreining (CBA)

CBA metur bæði kostnað *og* útkomur í peningum. Hún er eina greiningartegundin sem getur svarað „er þetta yfirhöfuð þess virði að gera?“ — ekki aðeins „hvaða kostur er bestur?“ — því hægt er að bera verðlagðan ávinning beint saman við kostnað.

## Hvers vegna það skiptir máli

CBA er staðall **Green Book** hjá HM Treasury í Bretlandi fyrir mat á öllum opinberum útgjöldum, einnig heilbrigðismálum þegar hægt er að verðleggja útkomur. Þar sem [CEA](../kostnaðarhagkvæmnigreining/)/[CUA](../kostnaðar-nytjagreining/) stoppa við „kostnað á einingu heilsu“ verðleggur CBA heilsuna sjálfa (QALY × þröskuldsgildi) og allt annað — tíma, ferðir, kolefni — og skýrir frá einni nettótölu. Sérhver fullgild viðskiptarök NHS um stafræna þjónustu innihalda hagfræðilegt tilvik í formi CBA.

## Stærðfræðin

```
NPV (núvirt nettó samfélagsverðmæti) = Σ_t [ (Ávinningur_t − Kostnaður_t) / (1 + r)^t ]
BCR (ábata-kostnaðarhlutfall)         = PV(ávinningur) / PV(kostnaður)

Taktu upp ef NPV > 0 (jafngilt BCR > 1); raðaðu eftir NPV, ekki BCR.
r = 3,5% (félagsleg tímaforgangsvextir Green Book)
```

Heilsuáhrif geta komið inn verðlögð sem QALY × λ (sjá [greiðsluviljaþröskuldar](../greiðsluviljaþröskuldar/)). Green Book skyldar líka **leiðréttingar fyrir bjartsýniskekkju** — hækkun kostnaðarmats og niðurskurð ávinnings um hlutföll byggð á sönnunargögnum, því mat er kerfisbundið of rósrautt.

## Dæmi útreiknað

Rafrænt tilvísanakerfi, 5 ára tímaskeið, 3,5% afsláttur:

```
Kostnaður:  smíði 1,2 m£ (ár 0), rekstur 300 þús. £/ár (ár 1–5)
Ávinningur: stjórnsýslusparnaður 250 þús. £/ár, tvítekin greiningarpróf sem komist er hjá 280 þús. £/ár,
            sparaður tími sjúklinga 40.000 klst./ár × 15 £ = 600 þús. £/ár → 1.130 þús. £/ár

PV kostnaðar  = 1.200 þús. + 300 þús. × 4,515 (annuitetsstuðull) = 2.555 þús. £
PV ávinnings  = 1.130 þús. × 4,515                                = 5.102 þús. £

NPV = 5.102 − 2.555 = +2.547 þús. £     BCR = 2,0
```

Beittu bjartsýniskekkju Green Book (segjum +40% á smíðakostnað, −20% á ávinning): PV kostnaðar ≈ 3.035 þús. £, PV ávinnings ≈ 4.082 þús. £, NPV ≈ **+1.047 þús. £** — enn jákvætt, sem er tilgangur leiðréttingarinnar: rök eiga að lifa af eigin bjartsýni.

## Tengsl við hugbúnaðarverkfræði

Viðskiptarök verkfræði eru óformleg CBA. Uppfærslur Green Book sem vert er að stela:

- **Bjartsýniskekkja sem staðlað álag** — verkfræðingar vanmeta flutningskostnað jafn áreiðanlega og ráðuneyti vanmeta innviðakostnað; beittu tilgreindu álagi í stað þess að þykjast að nú sé þetta öðruvísi.
- **Verðleggðu ráðandi ávinning af heiðarleika eða alls ekki** — tími sjúklinga/notenda er verðlagður á verjanlegum gjöldum; „vörumerkjavirði“ ekki.
- **NPV raðar, BCR ekki**: lítið verkefni með BCR 5 getur skipt minna máli en stórt með BCR 1,6.

## Gildrur

- **Að verðleggja hið óverðleggjanlega** til að blása upp ávinning (starfsandi, „stefnumótandi samræmi“) — haltu því eigindlegu, samkvæmt [kostnaðar-afleiðingagreiningu](../kostnaðar-afleiðingagreining/).
- **Að telja tilfærslur sem ávinning**: fé sem færist milli opinberra aðila jafnast í núll frá samfélagslegu [sjónarhorni](../sjónarhorn-greiningar/).
- **Engin mótstaðreynd**: ávinningur er mældur gegn lágmarksaðgerðarkostinum, ekki gegn núlli.

## Heimildir

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
