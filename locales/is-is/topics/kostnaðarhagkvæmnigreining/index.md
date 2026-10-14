# Kostnaðarhagkvæmnigreining (CEA)

CEA ber saman kostnað valkvæðra inngripa gegn einum útkomumælikvarða í **náttúrulegum einingum** — lífár, tilvik greind, innlagnir sem komist er hjá, mmHg lækkun blóðþrýstings. Úttak hennar er kostnaður á einingu útkomu.

## Hvers vegna það skiptir máli

CEA er burðarhesturinn í samanburði þegar allir kostir stefna að sömu útkomu. Hún svarar „hver af þessum leiðum til að ná X er besta nýting fjár?“ — en *ekki* „er X yfirhöfuð þess virði að ná?“ (til þess þarf [kostnaðar-ábatagreiningu](../kostnaðar-ábatagreining/)) og *ekki* „hvernig ber X sig saman við óskyld forgangsmál?“ (til þess þarf [kostnaðar-nytjagreiningu](../kostnaðar-nytjagreining/) og almenna útkomu eins og QALY).

## Stærðfræðin

Samanburðartölfræðin er [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/) í náttúrulegum einingum:

```
ICER = (Kostnaður_A − Kostnaður_B) / (Áhrif_A − Áhrif_B)
     = £ á hvert viðbótartilvik greint / innlögn sem komist er hjá / o.s.frv.
```

Aðferð: skilgreindu útkomueininguna; verðleggðu hvern kost frá sama [sjónarhorni](../sjónarhorn-greiningar/) yfir sama [tímaskeið](../tímaskeið/); útrýmdu drottnuðum kostum ([hagkvæmnimörk](../drottnun-og-hagkvæmnimörk/)); reiknaðu stigvaxandi hlutföll eftir mörkunum.

## Dæmi útreiknað

Þrjár leiðir til að finna ógreint gáttatif í 100.000 manna þýði:

```
Kostur                      Kostnaður   Tilvik fundin
Tækifærispúlsmælingar       150.000 £       300
Skimun í apótekum           400.000 £       520
Skimun með snjalltækjum     900.000 £       610

ICER apótek vs púls:   (400 þús.−150 þús.)/(520−300) = 1.136 £ á hvert viðbótartilvik
ICER snjalltæki vs apótek:(900 þús.−400 þús.)/(610−520) = 5.556 £ á hvert viðbótartilvik
```

Hvort 5.556 £ á viðbótartilvik sé „þess virði“ ræðst af verðmæti tilviks sem finnst (heilablóðfallsforvarnir í kjölfarið) — CEA raðar kostunum en ákvörðun um upptöku þarf það ytra mat. Athugaðu að *meðal*kostnaður snjalltækjakostsins á tilvik (900 þús./610 = 1.475 £) lítur vel út; *stigvaxandi* 5.556 £ er heiðarlega talan fyrir ákvörðun um útvíkkun.

## Tengsl við hugbúnaðarverkfræði

CEA er rétta sniðmátið hvenær sem kostir deila einni útkomu: kostnaður á flöktandi próf útrýmt yfir þrjár úrbótaleiðir; kostnaður á atvik sem komist er hjá yfir seljendur vöktunar; kostnaður á vel heppnaða dreifingu yfir CI-arkitektúra. Agi hennar — ein yfirlýst útkomueining, stigvaxandi (ekki meðal-) hlutföll, drottnaðir kostir útilokaðir fyrst — drepur flesta vonda seljandasamanburði áður en verðumræðan hefst.

## Gildrur

- **Samanburður kosta með ólíkar útkomur** („tilvik fundin“ vs „ánægja“) í einni CEA — það krefst [kostnaðar-afleiðingagreiningar](../kostnaðar-afleiðingagreining/) eða almennrar útkomu.
- **Meðal-kostnaðarhagkvæmnihlutföll** sett fram þar sem stigvaxandi er þörf (snjalltækjadæmið hér að ofan).
- **Útkomueiningar valdar til smjaðurs**: „viðvaranir myndaðar“ er afurð, ekki útkoma; krefstu eininga sem bera verðmæti.

## Heimildir

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
