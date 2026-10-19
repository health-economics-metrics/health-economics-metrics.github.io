# Samanburður ICER milli gjaldmiðla

Að bera saman [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/) reiknað í gjaldmiðli eins lands við [greiðsluviljaþröskuld](../greiðsluviljaþröskuldar/) annars lands — eða að sameina kostnaðargögn sem safnað er í fjölþjóðlegri rannsókn — krefst skýrs, endurskoðanlegs gjaldmiðlaumreikningsskrefs. Sé umreikningsaðferðin röng getur sama undirliggjandi sönnun snúið ákvörðun um upptöku við, jafnvel þótt ekkert hafi breyst í klínískum gögnum eða kostnaðargögnum.

## Hvers vegna það skiptir máli

Aðferðafræðileiðbeiningar ISPOR fyrir fjölþjóðlegar klínískar rannsóknir (Willke o.fl., *Health Economics*, 1998) mæla með að umreikna auðlindakostnað með **kaupmáttarjafnvægi (PPP)** — ekki markaðsgengi — þegar raunverulegt hagrænt verðmæti auðlinda er borið saman milli landa, og að geyma markaðsgjaldeyrisgengi fyrir það sem það er raunverulega fyrir: að líkana raunverulegt greiðsluflæði yfir landamæri. Að rugla þessu tvennu saman er ein algengasta aðferðafræðivilla í fjölþjóðlegu HTA, einmitt vegna þess að hvort tveggja lítur út eins og „gengið“ í augum þess sem hefur ekki lesið leiðbeiningarnar, og töflureiknir stoppar þig ekki í að gera það rangt.

## Stærðfræðin

```
icer_í_staðbundnum_gjaldmiðli = umreikna(icer_í_upprunagjaldmiðli, umreikningsstuðull)

umreikningsstuðull ætti að vera:
  PPP-umreikningsstuðull  — til að bera saman raunverulegt hagrænt verðmæti auðlinda
                            milli landa (mælt með af ISPOR fyrir
                            fjölþjóðlega CEA)
  markaðsgengi (FX)       — aðeins fyrir raunverulegar greiðslur yfir landamæri

taktu upp ef icer_í_staðbundnum_gjaldmiðli < staðbundinn_þröskuldur
```

Ákvörðunarreglan sjálf er venjuleg [ICER-þröskuldsregla](../greiðsluviljaþröskuldar/) — `taktu upp ef ICER < λ` — aðferðafræðilega spurningin sem þetta efni tekur á snýst alfarið um *hvaða umreikningsstuðull* framleiðir töluna `icer_í_staðbundnum_gjaldmiðli` sem reglunni er beitt á.

## Dæmi útreiknað

ICER lyfs úr bandarískri rannsókn er 45.000 $/QALY. Ímyndað innflutningsland setur eigin dæmigerðan þröskuld á 34.000 £/QALY (ímynduð landssértæk tala aðeins fyrir þetta dæmi — raunverulegir þröskuldar eru breytilegir milli landa og breytast með tímanum og verða alltaf að vera heimildarfestir og dagsettir).

**Með PPP-umreikningsstuðul 0,72** (til skýringar, aðeins fyrir þetta dæmi): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **taka upp**.

**Með markaðsgengi 0,79** í staðinn (til skýringar): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **hafna**.

Sami undirliggjandi ICER upp á 45.000 $/QALY gefur ákvörðun um upptöku með PPP-umreikningi og höfnun með markaðsgengisumreikningi. Þetta er áþreifanleg skýring á því hvers vegna leiðbeiningar ISPOR líta á val á umreikningsstuðli sem aðferðafræðilega afdrifaríkt — ekki sem námundunaratriði og ekki eitthvað sem á að skilja eftir óskýrt í töflureiknisformúlu sem enginn tvíathugar.

## Tengsl við hugbúnaðarverkfræði

Þetta er heilsuhagfræðilegur spegill vel þekkts verkfræðisviðs: réttmæti fjölgjaldmiðlaverðlagningar í i18n/l10n í viðskiptahugbúnaði, þar sem verðsíða SaaS má aldrei hljóðlega bera saman upphæð í `$` við verð í `£`. Tegundartryggingin sem vel smíðuð `Money`-tegund veitir — samanburðaraðferðir sem neita að bera saman ósamræmda gjaldmiðla og krefjast skýrs umreikningsskrefs fyrst — er bein hugbúnaðarverkfræðileg hliðstæða við aðferðafræðilega atriðið hér: berðu ekki saman ónotaða umreiknaða tölu milli gjaldmiðla og láttu umreikningsskrefið ekki vera óbeint eða óskjalfest.

## Gildrur

- **Að bera hljóðlega saman upphæðir í ólíkum gjaldmiðlum**: óformleg HTA-vinna í töflureikni sem dregur frá eða ber saman tölu í dollurum og tölu í pundum án umreikningsskrefs fyrst — villuflokkur sem raunveruleg gjaldmiðlameðvituð `Money`-tegund grípur við smíði í stað þess að skilja eftir sem hljóða villu.
- **Að rugla markaðsgengi saman við PPP**: algengasta aðferðafræðivillan í fjölþjóðlegu HTA samkvæmt leiðbeiningum ISPOR — tölurnar tvær geta verið mjög ólíkar og svara ólíkum spurningum (raunverulegt hagrænt verðmæti vs raunverulegt greiðsluflæði).
- **Að dagsetja ekki gengið eða PPP-vísitöluna sem notuð er**: hvort tveggja hreyfist með tímanum, svo hver tilvitnaður umreikningsstuðull verður að vera dagsettur á sama hátt og þetta safn dagsetur aðrar viðmiðunartölur sínar (kolefnisgildi Green Book, verðmæti afstýrðs dauðsfalls o.s.frv.).

## Heimildir

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
