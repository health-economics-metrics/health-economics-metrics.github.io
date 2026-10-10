# Næmnigreining

Ákvörðunarbundin næmnigreining (DSA) breytir einni forsendu í einu yfir trúverðugt bil til að sjá hvort niðurstaðan standist. Staðlaða myndræna framsetningin er hvirfilmynd (tornado diagram): breytur raðaðar eftir því hve mikið þær sveifla niðurstöðunni.

## Hvers vegna það skiptir máli

Sérhvert hagfræðilíkan er byggt á mati — sparaður tími, upptaka, einingakostnaður. Heilbrigðistæknimat neitar að taka við punktmati („ROI er 340%“) án sönnunar á að niðurstaðan sé þolin gagnvart sanngjörnum ágreiningi um inntökin. Hvirfilmynd segir ákvörðunaraðilanum *hvaða forsendu á að yfirheyra*: ef rökin virka aðeins þegar umdeildasta breytan er í bjartsýnum enda sjá allir það strax.

Þetta er flytjanlegasti einstaki vani heilsuhagfræðinnar yfir í viðskiptarök hugbúnaðar.

## Stærðfræðin

Fyrir hverja breytu p með trúverðugt bil [p_lágt, p_hátt]:

```
Niðurstaða_lágt  = líkan(p = p_lágt,  allt annað í grunntilviki)
Niðurstaða_hátt  = líkan(p = p_hátt,  allt annað í grunntilviki)
Sveifla(p)       = |Niðurstaða_hátt − Niðurstaða_lágt|
```

Raðaðu breytum eftir sveiflu; teiknaðu láréttar stikur umhverfis niðurstöðu grunntilviks. Afbrigði: tvíhliða DSA (breyta tveimur breytum á neti), þröskuldsgreining (finna gildi breytu þar sem ákvörðun snýst).

## Dæmi útreiknað

Gervigreindaraðstoðarmaður við kóðun fyrir 200 forritara. Grunntilvik: 39 £/forritara/mánuð leyfi; 30 mín/forritara/dag sparaðar; fullhlaðinn kostnaður 60 £/klst.; 220 vinnudagar.

```
Árlegur ávinningur grunntilviks = 200 × 0,5 klst. × 220 × 60 £ = 1.320.000 £
Árlegur kostnaður               = 200 × 39 £ × 12              = 93.600 £
Nettó grunntilviks              = 1.226.400 £
```

Hvirfilmynd (ein breyta í einu):

```
Tími sparaður 0,1–1,0 klst./dag: nettó = 170.400 £ … 2.546.400 £   (sveifla 2,38 m£) ← ræður
Fullhlaðinn kostnaður 40–80 £/klst.: nettó = 786.400 £ … 1.666.400 £ (sveifla 0,88 m£)
Vinnudagar 200–240:             nettó = 1.106.400 £ … 1.346.400 £ (sveifla 0,24 m£)
Leyfi 30–50 £/mán.:             nettó = 1.248.000 £ … 1.200.000 £ (sveifla 48 þús. £)
```

Þröskuldsgreining: nettóávinningur fer í núll við um **2,1 mínútu/dag** sparaða. Ákvörðunin er ónæm fyrir leyfisverði og hvílir alfarið á mati á sparaðri tíma — svo mældu það, ekki hitt. (Og mundu að niðurstaðan er geta, ekki reiðufé — sjá [reiðufjárlosandi á móti ekki reiðufjárlosandi](../reiðufjárlosandi-sparnaður-á-móti-ekki-reiðufjárlosandi/).)

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar gera þetta nú þegar af eðlishvöt sem „hvað ef við höfum rangt fyrir okkur um X?“ — DSA gerir það bara kerfisbundið og sýnilegt. Settu hvirfilmynd í hverja tillögu um tól, getuáætlun og greiningu á smíða-eða-kaupa. Hún breytir rökræðum um hvers magatilfinning sé rétt í samkomulag um hvaða breytu á að fara að mæla — oft með tilraun, en verðmæti hennar má sjálft verðleggja (sjá [vænt verðmæti fullkominna upplýsinga](../vænt-verðmæti-fullkominna-upplýsinga/)).

## Gildrur

- **Bil valin til smjaðurs**: ±10% umhverfis hvert inntak án tillits til raunverulegrar óvissu. Mat á sparaðri tíma á skilið ±80%; leyfisverð ±10%.
- **Ein-í-einu missir víxlverkanir** — fylgnibreytur (upptaka og sparaður tími) þarfnast tvíhliða greiningar eða fullrar [líkindanæmnigreiningar](../líkindanæmnigreining/).
- **Að gera greininguna og hunsa hana**: ef hvirfilmyndin segir að rökin hvíli á einni mjúkri tölu er næsta skref mæling, ekki undirritun.

## Heimildir

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
