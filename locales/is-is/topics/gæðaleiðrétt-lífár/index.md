# Gæðaleiðrétt lífár (QALY)

QALY er eitt ár af lífi lifað við fullkomna heilsu. Það sameinar *hve lengi* fólk lifir og *hve vel* það lifir, svo ár við slæma heilsu telst minna en eitt QALY — sem gerir gerólík heilbrigðisinngrip sambærileg á einum kvarða.

## Hvers vegna það skiptir máli

QALY er sameiginlegur gjaldmiðill heilbrigðistæknimats. NICE (England) metur heilsuávinning á **20.000–30.000 £ á hvert QALY**: inngrip sem kaupir QALY ódýrar en þann þröskuld er venjulega mælt með; það sem kaupir þau dýrar er venjulega hafnað. Þessi eina tala er hvernig landsbundin heilbrigðisþjónusta ber saman krabbameinslyf, mjaðmaskipti og forgangsröðunarapp á sama ás. Ef hugbúnaðurinn þinn getur á trúverðugan hátt gert tilkall til QALY — með því að koma í veg fyrir versnun, flýta meðferð eða bæta öryggi — geturðu verðlagt heilsuverðmæti hans í sama gjaldmiðli og læknisfræðin sjálf.

## Stærðfræðin

```
QALY = Σ_i (tímalengd_i × nytjar_i)

tímalengd_i = ár í heilsuástandi i
nytjar_i    = gæðavog ástands i, fest með 1 = fullkomin heilsa, 0 = dáinn
              (neikvæð gildi leyfð fyrir ástönd verri en dauða)
```

Nytjavogir koma úr staðfestum mælitækjum, oftast [EQ-5D](../eq-5d/). QALY-*ávinningur* af inngripi er munurinn á QALY-straumum með og án þess, [núvirtur](../núvirðing-og-tímaforgangur/) á 3,5%/ár í viðmiðunartilviki NICE.

## Dæmi útreiknað

Sjúklingur bíður hjartameðferðar í ástandi með nytjar 0,6. Meðferð færir hann í nytjar 0,85.

- **Meðhöndlaður núna**: 1 ár á 0,85 = 0,85 QALY á þessu ári.
- **Meðhöndlaður eftir 6 mánaða töf**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **QALY-tap á sjúkling vegna tafarinnar**: 0,85 − 0,725 = **0,125 QALY**.

Verðlagt á þröskuldi NICE: 0,125 × 20.000–30.000 £ = **2.500–3.750 £ af heilsuverðmæti glatað á sjúkling á hverja 6 mánaða töf**. Ef hugbúnaður sem flýtir leiðinni fjarlægir þá töf fyrir 400 sjúklinga á ári er heilsuverðmætið 50 QALY ≈ **1,0–1,5 m£/ár** — áður en nokkur rekstrarsparnaður er talinn.

## Tengsl við hugbúnaðarverkfræði

- **Hraðari leiðir = fyrri QALY.** Allt sem styttir [tilvísun til meðferðar](../tilvísun-til-meðferðar/) breytir óánægju vegna biðtíma í heilsuávinning, metinn eins og að ofan.
- **Öryggi = QALY varðveitt.** Lyfjamistök og missaðar greiningar sem komist er hjá eru QALY-töp sem forðað er.
- **QALY er líka sniðmát fyrir hönnun mælikvarða**: samsetning magns × gæða, með gæðavogum leiddum úr stöðluðu mælitæki. „Gæðaleiðrétt verkfræðingsár“ (tími × vog úr DevEx-könnun) er sama smíð — sjá [SPACE og DevEx](../space-og-devex/).
- Til að breyta QALY í peninga fyrir viðskiptarök, notaðu [nettó peningaávinning](../nettó-peningaávinningur/); til að breyta þeim í ákvörðun, notaðu [greiðsluviljaþröskulda](../greiðsluviljaþröskuldar/).

## Gildrur

- **Að finna upp nytjavogir.** Vogir verða að koma úr staðfestum mælitækjum (EQ-5D) og birtum gildasettum, ekki innsæi.
- **Að gera tilkall til QALY án orsakaleiðar.** „Appið okkar bætir vellíðan“ er ekki QALY-fullyrðing; „fjarlægir X vikur af bið í ástandi með nytjar 0,6“ er það.
- **Tvítalning**: að gera tilkall til bæði QALY-ávinnings og kostnaðarsparnaðar af sömu versnun sem forðað er krefst þess að gætt sé að þau séu raunverulega aðskilin.
- **Blindir blettir jafnaðar**: QALY meta ár af lífsframlengingu eftir grunnnytjum, sem getur sett fólk með fötlun í óhag — ástæðan fyrir því að ICER (Bandaríkin) skýrir líka frá evLYG (sjá [lífár sem vinnast](../lífár-sem-vinnast/)).

## Heimildir

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
