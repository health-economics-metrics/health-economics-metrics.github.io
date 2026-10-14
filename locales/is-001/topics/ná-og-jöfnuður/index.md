# Ná og jöfnuður

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (ná, árangur, upptaka, innleiðing, viðhald) — er staðlaði ramminn til að meta áhrif inngrips á *þýðisstigi*. Meginreikningur hans: **lýðheilsuáhrif ≈ ná × árangur**. Stafræn tól bæta við jafnaðarvídd: stafræna gjáin þýðir að ná er kerfisbundið ójafnt, og stafræn-fyrst afhending getur víkkað heilsubilin sem hún ætlar að loka.

## Hvers vegna það skiptir máli

Kerfisbundnar yfirlitsrannsóknir sem beita RE-AIM á mHealth finna samræmt mynstur: sterkt Ná og Upptaka, **veikur Árangur og Viðhald** — öpp breiðast auðveldlega út og dofna hratt. Fyrir landsbundna heilbrigðisþjónustu þýðir þetta að áhrifamikil vara á hvern notanda getur verið léleg þýðisfjárfesting, og öfugt: hóflega árangursríkt tól sem nær milljónum getur skilað meira en glæsilegt sem nær þúsundum (sjá [HALE](../heilsuleiðréttar-lífslíkur/)-reikninginn). Jöfnuður er ekki aukaskilyrði heldur verðmætadrifkraftur: stafræn útilokun fylgir aldri, skorti, fötlun og tungumáli — nákvæmlega þeim hópum sem bera mesta meðhöndlanlega byrði — svo jaðarnotandinn sem er útilokaður hefur oft *yfir meðallagi* mögulegan ávinning. Fyrir formlegan tölfræðilegan mælikvarða á félagshagfræðilega tengdan heilsuójöfnuð, sjá [Styrkvísitala](../styrkvísitala/).

## Stærðfræðin

```
Þýðisáhrif ≈ ná × árangur
  ná      = þátttakendur / gjaldgengt þýði (sjá activation-and-uptake.md)
  árangur = raunveruleg áhrif meðal þátttakenda (varðveisluvegin —
            sjá retention-and-churn.md)

Útgáfa lagskipt eftir jöfnuði:
  áhrif_hópur_g = ná_g × árangur_g, skýrt frá eftir skortsfimmtungi /
  aldursbandi / tungumálahópi
  jafnaðarbil = áhrif_efsti_fimmtungur − áhrif_neðsti_fimmtungur

Dreifingarkostnaðarhagkvæmni: beittu jafnaðarvogum á QALY eftir
hópi viðtakenda — QALY til þeirra verst settu telur meira (sífellt
almennari HTA-útvíkkun).
```

## Dæmi útreiknað

Stafræn sykursýkisforvarnaáætlun, skýrt frá á tvo vegu:

```
Samanlagt: ná 12%, áhrif 0,02 QALY/þátttakanda → 0,0024 QALY/gjaldgengan einstakling

Lagskipt (skortsfimmtungar):
  Q1 (minnst sviptir): ná 22%, áhrif 0,02 → 0,0044
  Q5 (mest sviptir):   ná 4%,  áhrif 0,025 → 0,0010

Áætlunin skilar 4,4× meiri heilsu til hinna minnst sviptu —
á meðan áhrif Q5 á hvern þátttakanda eru HÆRRI (meira svigrúm). Aðstoðuð
stafræn armur (símaþjálfun + aðgangur í samfélagi) sem kostar 20%
meira á Q5-þátttakanda og lyftir Q5-ná í 12% þrefaldar Q5-áhrif
og bætir samanlagða niðurstöðu — jafnaðarfjárfestingin ER
hagkvæmnifjárfestingin hér.
```

## Tengsl við hugbúnaðarverkfræði

Ná er að verulegu leyti verkfræðigripur: lágmarkskröfur tækja og stýrikerfis, forsendur um bandbreidd, tungumálastuðningur, aðgengissamræmi (WCAG), hindranir við staðfestingu auðkennis og dreifing eingöngu í appaverslunum skera hver um sig hópa úr nefnaranum — yfirleitt ósýnilega, því útilokaðir notendur birtast aldrei í greiningum. Verkfræðivenjur sem hreyfa jöfnuð: mældu *nefnarann* (mældu gjaldgenga þýðið, ekki bara notendur); fjárhagsáætlaðu afköst fyrir gömul tæki og lélega tengingu; sendu aðstoðaðar stafrænar leiðir (sími, SMS, sjálfsafgreiðslustöð) sem fyrsta flokks flæði frekar en skammarrásir; og lagskiptu hvern mælaborðsmælikvarða eftir jafnaðarvíddum — ólagskipt meðaltal er þar sem ójöfnuður felur sig ([GDS-upptaka](../þjónustumælikvarðar-gds/) ber sömu viðvörun).

## Gildrur

- **Árangur skýrður á þeim sem ljúka, áhrif fullyrt á þýði** — náliðirnir hljóðlega felldir niður.
- **Jöfnuður sem eftirá úttekt** frekar en hönnunarinntak; að bæta ná við eftirá er mun dýrara en að hanna fyrir hana.
- **Viðhaldsminnisleysi**: veikasta vídd RE-AIM í mHealth — fullyrðingar um áhrif umfram tímaskeið sönnunargagna.
- **Sparnaður með eingöngu stafrænum rásum** sem færir kostnað yfir á útilokaða notendur og starfsfólk í fremstu víglínu (sjá [GDS-þjónustumælikvarðar](../þjónustumælikvarðar-gds/)).

## Heimildir

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
