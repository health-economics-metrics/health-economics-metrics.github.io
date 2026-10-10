# WSJF og CD3

CD3 (Cost of Delay Divided by Duration — kostnaður við tafir deilt með lengd) og WSJF (Weighted Shortest Job First — vigtað stysta verk fyrst) eru forgangsröðunarreglur sem tímasetja vinnu eftir **verðmætaþéttni**: hve miklum kostnaði við tafir er létt af á hverja einingu af takmarkaðri getu sem er notuð. Undir sameiginlegri, fastri getu er röðin hæsta-CD3-fyrst stærðfræðilega ákjósanleg til að lágmarka heildarkostnað við tafir.

## Hvers vegna það skiptir máli

Sérhver bunki er skömmtunarvandamál: mörg verðug atriði, ein leiðsla. Heilsuhagfræði leysti sama vanda fyrir heilbrigðisfjárlög með deildatöflum kostnaðarhagkvæmni — raðaðu inngripum eftir heilsu sem vinnst á hvert pund, fjármagnaðu niður listann þar til fjárlögin tæmast. CD3 er sama rökvísi fyrir afhendingargetu: ávinningur á hverja einingu *takmarkandi auðlindar*, fjármagnaður í röð. Að fá röðunina rétta er ókeypis fé — sama vinna, sama geta, minni heildarkostnaður við tafir.

## Stærðfræðin

```
CD3  = Kostnaður við tafir (£/viku) / Lengd (vikur)      — raunverulegar einingar (Black Swan Farming)

WSJF = (notenda-viðskiptavirði + tímaviðkvæmni + áhættulækkun/möguleikaopnun)
       / stærð verks                                     — hlutfallskvarðaeftirlíking SAFe,
                                                           breytt Fibonacci-stig
```

CD3 með raunverulegum gjaldmiðli ([kostnaður við tafir](../kostnaður-við-tafir/)) er strangt öflugri en einingalaus stig WSJF — WSJF er fyrir CD3 það sem fjölviðmiðastigagjöf er fyrir fulla [kostnaðar-nytjagreiningu](../kostnaðar-nytjagreining/): nothæft þegar verðlagning er óframkvæmanleg, hægt að spila þegar stigin hafa engan akkeri.

## Dæmi útreiknað

Þrír eiginleikar, eitt teymi:

```
Eiginleiki  CoD (£/viku)  Lengd      CD3
A           30.000        10 vikur   3.000
B           12.000        2 vikur    6.000
C           5.000         1 vika     5.000
```

CD3 röð: B, C, A. Berðu saman heildarkostnað við tafir og „stærsta CoD fyrst“ (A, B, C):

```
CD3 röð  (B,C,A): A bíður 3 vikur, C bíður 2 → 30k×3 + 5k×2  = 100 þús. £ kostnaður við tafir
CoD röð  (A,B,C): B bíður 10, C bíður 12     → 12k×10 + 5k×12 = 180 þús. £
```

Sömu eiginleikar, sama teymi — röðun ein og sér sparar 80.000 £. Innsæið: smá, áríðandi atriði fara fyrst því þau losa kostnað sinn við tafir ódýrt; stóra atriðið tapar litlu á að bíða stutt.

## Tengsl við hugbúnaðarverkfræði

Fyrir hugbúnaðarsöfn í heilbrigðisþjónustu skaltu mæla CoD í þeim einingum sem þessi geymsla kennir: QALY/viku × þröskuldur + rekstrar-£/viku, og bunkinn verður beint sambærilegur við hvernig heilbrigðiskerfið raðar öllu öðru sem það kaupir. Tvær athugasemdir um framkvæmd: (1) lengd þýðir *dagatalstími sem tekur upp takmörkunina*, ekki vinnuframlag — atriði sem tekur 2 vikur í dagatalstíma en þarf 2 daga af flöskuhálsteyminu er ódýrara en það lítur út fyrir (sjá [hagræðing afleiddra auðlinda](../hagræðing-afleiddra-auðlinda/)); (2) sjúkrahús keyra sömu reglu óbeint þegar þau raða skurðstofulistum eftir bráðleikavigtuðu afköstum — klínískir forgangsflokkar eru alvarleikavigtað CD3 (sjá [QALY-halli og alvarleikabreytur](../qaly-skortur-og-alvarleikaleiðréttingar/)).

## Gildrur

- **WSJF-stigaleikhús**: einingalausar Fibonacci-rökræður enda hjá þeim sem rökræðir hæst; festu að minnsta kosti efstu atriði bunkans í raunverulegu CoD.
- **Lengdarspilun**: að skipta atriðum til að blása upp CD3-röðun — í lagi þegar skiptingar skila virði hver fyrir sig, svik þegar þær gera það ekki.
- **Að horfa framhjá bráðleikasniðum**: CoD í lögun skiladags (reglugerðardagsetningar) brýtur forsenduna um stöðugt hlutfall; tímasettu þau eftir dagsetningarframkvæmanleika, og CD3-aðu síðan afganginn.
- **Endurröðunarhringl**: CD3 er fyrir röðunarákvarðanir við skuldbindingu, ekki fyrir daglega uppstokkun vinnu í gangi (sjá [flæðismælikvarðar](../flæðismælikvarðar/) um WIP).

## Heimildir

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
