# Kostnaðar-afleiðingagreining (CCA)

CCA setur fram kostnað samhliða **sundurliðaðri töflu allra útkoma** — klínískra, rekstrarlegra, upplifunarlegra — án þess að þjappa þeim í eitt hlutfall eða eina einkunn. Ákvörðunaraðilinn vegur málamiðlanirnar skýrt.

## Hvers vegna það skiptir máli

CCA er **æskilegt hagfræðilegt snið NICE fyrir flesta stafræna heilbrigðistækni** samkvæmt Evidence Standards Framework. Stafrænar vörur skila ólíkum áhrifum (sparaður tími, ánægja, fækkun mætingarleysis, smávægilegur klínískur ávinningur) sem standast illa heiðarlega samlagningu í eina QALY-tölu. Í stað þess að þvinga fram brothætta samsetningu sýnir CCA allt reikningsbókhaldið. Fyrir flest viðskiptarök hugbúnaðar er það bæði heiðarlegasta sniðið og það sannfærandi, því sérhver hagsmunaaðili finnur eigin ákvörðunarrelevant línu.

## Stærðfræðin

Engin samlagningarformúla er vísvitandi til. Úttakið er tafla:

```
                          Inngrip        Viðmið       Munur
Kostnaður (árlegur)       £X             £Y           ΔC
Útkoma 1 (náttúrulegar einingar) …       …            Δ1
Útkoma 2                  …              …            Δ2
Eigindlegar útkomur       lýst, ekki stigaðar
```

Hver lína heldur eigin einingum. Reglur: sérhver afleiðing fyrirfram tilgreind (engin tínsla eftir niðurstöður); sama [sjónarhorn](../sjónarhorn-greiningar/) og [tímaskeið](../tímaskeið/) allan tímann; óvissa fyrir hverja línu.

## Dæmi útreiknað

Stafrænn vettvangur fyrir mat fyrir aðgerð á móti símaferli, á ári, ein stofnun:

```
                              Stafrænt     Sími        Munur
Rekstrarkostnaður             180.000 £    95.000 £    +85.000 £
Hjúkrunarstundir við mat      6.200        11.800      −5.600 klst.
Afbókanir aðgerða samdægurs   92           174         −82
Ánægja sjúklinga (CSAT)       4,5/5        3,9/5       +0,6
Mat sem tapast/ófullkomið     1,2%         4,8%        −3,6 pp
```

Engin ein einkunn — en ákvörðunin er auðveld að rökstyðja: 85.000 £ kaupa 5.600 hjúkrunarstundir (≈ 15 £/klst., langt undir hvaða mönnunarkostnaði sem er), 82 afbókanir sem komist er hjá (hver sóar skurðstofutíma upp á ~1.200 £) og betri upplifun. Nefnd sér líka nákvæmlega hvað hún fær *ekki*: engin fullyrt QALY- eða dánaráhrif.

## Tengsl við hugbúnaðarverkfræði

CCA er formleg útgáfa jafnvægisstigakortsins sem góð tillaga um vettvang notar nú þegar: kostnaður við hlið DORA-mælikvarða, DevEx-einkunna, fjölda atvika — ósamlagt. Heilsuhagfræðiagi til að bæta við: **tilgreindu línurnar fyrirfram** (ákveddu hvað telst áður en tilraunin hefst, svo þú getir ekki hljóðlega sleppt mælikvarðanum sem versnaði), og **sýndu óhagstæðar línur** — CCA með aðeins góðar fréttir er markaðssetning. Notaðu CCA þegar engin verjanleg samsetning er til, sem fyrir þróunartól er nánast alltaf.

## Gildrur

- **Tíndar afleiðingar** — heilindi sniðsins byggja á fyrirfram tilgreiningu.
- **Smyglað samlagning**: litakóðun eða „heildareinkunnir“ taka upp aftur geðþóttavogirnar sem CCA er til að forðast.
- **Ákvörðunarlömun**: CCA þarfnast ákvörðunaraðila sem er tilbúinn að vega málamiðlanir; paraðu hana við tillögu og röksemdir.

## Heimildir

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
