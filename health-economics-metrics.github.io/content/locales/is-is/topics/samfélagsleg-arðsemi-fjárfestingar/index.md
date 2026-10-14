# Samfélagsleg arðsemi fjárfestingar (SROI)

SROI víkkar [ROI](../arðsemi-fjárfestingar/) út til útkoma sem markaðir verðleggja ekki — vellíðan, félagsleg tengsl, umhverfisáhrif — með því að meta þær til fjár með fjárhagslegum staðgenglum, fyrir *alla* hagsmunaaðila sem verða fyrir áhrifum.

## Hvers vegna það skiptir máli

Stór hluti þess sem heilbrigðis- og samfélagsinngrip framleiða snertir aldrei fjárlagalið: minni einmanaleiki, léttir fyrir umönnunaraðila, aukin atvinnuþátttaka, mannleg reisn. SROI, sem lýtur sjö meginreglum Social Value International (taka hagsmunaaðila með, meta það sem skiptir máli, ekki fullyrða of mikið, vera gagnsær, sannreyna…), framleiðir staðhæfingar eins og „3,20 £ af samfélagslegu verðmæti fyrir hvert 1 £ sem fjárfest er“. Kröfur breskra opinberra innkaupa um samfélagslegt virði gera SROI-líkar sannanir viðskiptalega mikilvægar: tilboð í opinbera samninga (þar á meðal NHS) fá stig fyrir sýnt samfélagslegt virði.

## Stærðfræðin

```
SROI-hlutfall = núvirði(verðlagðar samfélagslegar útkomur) / núvirði(fjárfestingar)

Fyrir hverja útkomu:
  virði = magn × fjárhagslegur staðgengill × eignun × (1 − dauðaþyngd) × (1 − tilfærsla)

dauðaþyngd (deadweight) = hefði gerst hvort sem er
eignun (attribution)    = hlutur sem aðrir ollu
tilfærsla (displacement) = ávinningur fluttur annars staðar frá frekar en skapaður
fall (drop-off)         = rýrnun útkomunnar yfir árin
```

Leiðréttingarþættirnir eru heilindi aðferðarinnar: án þeirra er SROI skáldskapur með gjaldmiðilstákni.

## Dæmi útreiknað

Vinaforrit sem tengir einangraða eldri borgara við sjálfboðaliða; kostnaður áætlunar 200.000 £/ár; 1.500 virk pör.

```
Útkoma: minni einmanaleiki hjá 1.500 manns
  staðgengill: vellíðunarmat á „léttir frá einmanaleika“ ≈ 1.800 £/mann/ár
  dauðaþyngd 25% (sumir hefðu fundið tengsl hvort sem er)
  eignun 80% (hluti þakkaður annarri þjónustu)

Virði = 1.500 × 1.800 × 0,80 × 0,75 = 1.620.000 £

Útkoma: færri heimsóknir til heimilislæknis, 1.500 × 1,2 heimsóknir × 42 £ = 75.600 £ (raunveruleg hjá greiðanda)

SROI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Athugaðu að hlutfallið er 96% metin vellíðan og 4% hart reiðufé. Það er lögmætt SROI — en það verður að setja fram sem samfélagslegt virði og aldrei láta það gefa í skyn að 1,7 m£ séu innleysanlegar.

## Tengsl við hugbúnaðarverkfræði

SROI er heiðarlegi rammi fyrir verkfræðivinnu þar sem þeir sem njóta eru utan greiðandi teymis: viðhald opins hugbúnaðar, úrbætur á aðgengi, vettvangsvinna sem önnur teymi nota, fjárfesting í þróunarsamfélagi. Flytjanleg vélfræði: auðkenndu alla hagsmunaaðila, metu til fjár með yfirlýstum staðgenglum og beittu afslætti vegna dauðaþyngdar/eignunar (hefði þessi lagfæring í opnum hugbúnaði gerst hvort sem er? hve stór hluti ávinningsins er þín vinna á móti vistkerfisins?). Agi þess að *draga frá eigin áhrifafullyrðingar* er það sem greinir SROI frá markaðstölu.

## Gildrur

- **Staðgengilsinnkaup**: að velja rausnarlegasta vellíðunarmat sem í boði er.
- **Að sleppa dauðaþyngd/eignun** — algengasta uppblásturinn, oft tvöföldun hlutfallsins.
- **Samanburður hlutfalla milli rannsókna**: SROI-hlutföll eru næm fyrir aðferð; berðu aðeins saman innan samræmds ramma.
- **Að setja samfélagslegt virði fram sem innleysanlegan sparnað** fyrir fjárlagahafa.

## Heimildir

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
