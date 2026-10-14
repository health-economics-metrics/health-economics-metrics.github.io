# Nettó peningaávinningur (NMB)

NMB breytir niðurstöðu kostnaðarhagkvæmni í eitt peningagildi: heilsuávinningur verðlagður á greiðsluviljaþröskuldi, að frádregnum kostnaði. Tvíburi hans, nettó heilsuávinningur (NHB), tjáir sömu reglu í heilsueiningum.

## Hvers vegna það skiptir máli

Hlutföll ([ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/)) eru óþjál: þau springa nálægt núlláhrifum, ekki er hægt að meðaltala þau yfir óvissuúrtök og þau geta ekki raðað þremur eða fleiri kostum hreint. NMB lagar allt þetta — það er línulegt, svo þú getur raðað kostum, meðaltalað Monte Carlo úrtök og sundurgreint framlög. Það er einnig sú tegund heilsuhagfræðilegrar stærðfræði sem sérhver verkfræðingur þekkir nú þegar: *virði að frádregnum kostnaði*.

## Stærðfræðin

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = stigvaxandi áhrif (t.d. QALY)
ΔC = stigvaxandi kostnaður
λ  = greiðsluviljaþröskuldur (sjá willingness-to-pay-thresholds.md)

Ákvörðunarregla: taktu upp ef NMB > 0 (jafngilt NHB > 0).
Meðal valkosta: veldu hæsta NMB.
```

NMB > 0 ⇔ ICER < λ (þegar ΔE > 0), svo reglurnar tvær eru sammála — NMB hegðar sér bara betur.

## Dæmi útreiknað

Þrír kostir fyrir sykursýkisþjónustu, á 1.000 sjúklinga, λ = 20.000 £/QALY:

```
Kostur            ΔC          ΔE (QALY)   NMB = 20.000×ΔE − ΔC
Forrit + þjálfun  400.000 £   30          600.000 − 400.000 = 200.000 £
Aðeins forrit     150.000 £   12          240.000 − 150.000 = 90.000 £
Aukastofur        700.000 £   32          640.000 − 700.000 = −60.000 £
```

Aukastofur vinna flest QALY en eyðileggja verðmæti við þennan þröskuld (NMB < 0). Forrit + þjálfun vinnur. Taktu eftir að NMB leyfir þér að *raða öllum þremur í einu* — pöruð ICER þyrftu aðferðina um mörkin í [drottnun og hagkvæmnimörk](../drottnun-og-hagkvæmnimörk/) og komast að sama svari.

NHB-sýn á sigurvegarann: 30 − 400.000/20.000 = 30 − 20 = **10 QALY nettó** — heilsan sem unnin er umfram það sem sömu fjármunir hefðu skilað annars staðar.

## Tengsl við hugbúnaðarverkfræði

`(stundir sparaðar × fullhlaðið tímagjald) − kostnaður tóls` — hversdagsleg viðskiptarök um tól — er bókstaflega NMB-útreikningur með λ = fullhlaðinn kostnaður verkfræðings. Tvær uppfærslur sem heilsuhagfræðin bætir við:

- **Gerðu λ að breytu, ekki fasta.** Teiknaðu NMB gegn λ („verðmæti verkfræðingsstundar“) og sýndu hvar ákvörðunin snýst; ólíkir hagsmunaaðilar geta þá beitt eigin mati án þess að endurgera stærðfræðina þína.
- **NHB-hugsun**: „þessi vettvangur sparar 5.000 verkfræðingsstundir en eyðir fjárlögum sem hefðu keypt 3.000 verkfræðingsstundir af verktakagetu — nettó 2.000 stundir“ þvingar fram fórnarkostnaðarsamanburð í geta-einingum. Sjá [fórnarkostnaður](../fórnarkostnaður/).

## Gildrur

- **Að fela þröskuldinn**: NMB er merkingarlaust án þess að tilgreina λ; skýrðu frá NMB við 20 þús. £ og 30 þús. £, eða teiknaðu ferilinn.
- **Að nota NMB til að þvo smávægileg áhrif**: gríðarstórt þýði sinnum hverfandi áhrif á mann getur gefið stóran NMB — skýrðu frá áhrifum á mann samhliða.
- **Að gleyma að NMB erfir alla óvissu** í ΔC og ΔE — paraðu við [líkindanæmnigreiningu](../líkindanæmnigreining/).

## Heimildir

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
