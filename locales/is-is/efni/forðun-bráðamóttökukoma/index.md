# Forðun bráðamóttökukoma

Forðun bráðamóttökukoma telur komur á bráðamóttöku (A&E) og bráðainnlagnir sem komið er í veg fyrir með inngripi framar í ferlinu — forgangsröðunarforrit, fjarvöktun, sýndardeildir, tilvísun í bráðaþjónustu utan sjúkrahúss. Hún breytir „við náðum þessu fyrr“ í verðlagða fullyrðingu.

## Hvers vegna það skiptir máli

Bráðaþjónusta er dýrasta reglubundna umhverfi kerfisins (einingakostnaður bráðamóttökukomu á bilinu 250–400 £ samkvæmt National Cost Collection / PSSRU; bráðainnlögn er þúsundir) og þrengsli á bráðamóttöku valda keðjuverkun í töfum sjúkrabíla og aflýstum valaðgerðum. Allt sem leysir eftirspurn framar í ferlinu á öruggan hátt — sjálfsumönnunarráðgjöf, frumþjónusta samdægurs, viðbragð í nærsamfélagi — kaupir kerfinu getu á álagsmesta punkti þess. Þetta er hefðbundin ávinningslína fyrir einkennaprófara, forgangsröðunarþjónustu að hætti 111 og [fjarvöktun sjúklinga](../hagfræði-fjarvöktunar-sjúklinga/).

## Stærðfræðin

```
Komur sem komist er hjá = þýði × (grunnlínuhlutfall − hlutfall með inngripi)
Brúttósparnaður         = komur sem komist er hjá × einingarkostnaður á komu
                          (+ innlagnir sem komist er hjá × innlagnarkostnaður, talið sérstaklega)

Nettósparnaður          = brúttósparnaður − kostnaður inngrips − kostnaður nýrrar leiðar
                          (tilvísuð eftirspurn er ekki ókeypis: 111-símtal, tími hjá heimilislækni,
                           sýndardeildardagur hafa allt einingarkostnað)
```

Orsakafullyrðingin þarfnast viðmiðs: komuhlutföll þróast og sveiflast eftir árstíðum, svo fyrir/eftir eitt og sér sannar ekkert.

## Dæmi útreiknað

Fjarvöktunarþjónusta við langvinna lungnateppu fyrir 3.000 áhættusjúklinga. Mat með pöruðum viðmiðunarhópi sýnir að bráðamóttökukomum vegna versnunar fækkar úr 0,9 í 0,7 á sjúklingaár og bráðainnlögnum úr 0,5 í 0,42.

```
Komur sem komist er hjá = 3.000 × 0,2  = 600 × 300 £   = 180.000 £
Innlagnir sem komist er hjá = 3.000 × 0,08 = 240 × 3.800 £ = 912.000 £
Brúttó                                                    1.092.000 £/ár

Kostnaður: vöktunarþjónusta 600.000 £; aukaviðbrögð hjúkrunarfræðinga í nærsamfélagi 150.000 £
Nettó ≈ +342.000 £/ár — auk QALY-ávinnings af versnunum sem meðhöndlaðar eru fyrr.
```

Athugaðu að innlagnarlínan ræður: forðun koma ein og sér borgar sjaldan fyrir vöktunarþjónustu; *forðun innlagna* er þar sem peningarnir eru.

## Tengsl við hugbúnaðarverkfræði

Þetta er **hagfræði atvikaforðunar**. Verðmæti vöktunar, kanarídreifinga og viðvörunarkerfa er „bráðamóttökukomur“ sem komist er hjá — símboðar, stríðsherbergi, sev-1 — hvert með fullhlaðinn kostnað (verkfræðingastundir × gjald + áhrif á viðskiptavini). Sömu líkanareglur gilda: dragðu kostnað nýrrar leiðar framar í ferlinu frá (flokkun viðvarana er ekki ókeypis), varastu staðgöngu (viðvaranir sem skapa vinnu án þess að koma í veg fyrir atvik eru heilsukvíði, ekki heilsa), og sannaðu mótstaðreyndina með viðmiði (atvikatíðni teyma þróast og hverfur aftur til meðaltals, nákvæmlega eins og komur á bráðamóttöku).

## Gildrur

- **Hverfing til meðaltals**: áhættuhópar valdir á slæmu ári batna ómeðhöndlaðir; paraðir viðmiðunarhópar eða stepped-wedge hönnun eru nauðsynleg.
- **Framboðsframkölluð eftirspurn**: auðveld stafræn forgangsröðun getur *aukið* heildarsamskipti (lægri þröskuldur til að leita hjálpar) á meðan hlutdeild bráðamóttöku minnkar — teldu heildarkostnað kerfisins.
- **Að meta komur á meðalkostnaði** þegar fastur kostnaður bráðamóttöku lækkar ekki — sjá [jaðarkostnaður á móti meðalkostnaði](../jaðarkostnaður-á-móti-meðalkostnaði/).

## Heimildir

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
