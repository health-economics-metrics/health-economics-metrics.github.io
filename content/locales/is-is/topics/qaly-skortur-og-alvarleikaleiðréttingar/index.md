# QALY-skortur og alvarleikaleiðréttingar

QALY-skortur mælir hve mikla framtíðarheilsu sjúkdómur tekur af sjúklingum samanborið við almennt þýði. NICE notar hann til að beita **alvarleikaleiðréttingum**: því veikara sem þýðið er, því meira er hvert unnið QALY virði — allt að 1,7× staðalþröskuldi.

## Hvers vegna það skiptir máli

Frá handbók NICE 2022 er alvarleiki skýr margfaldari á verðmæti heilsuávinnings, sem kemur í stað fyrri álags vegna lífsloka. Tækni fyrir alvarlegt ástand er metin gegn virkum þröskuldi allt að ~51.000 £/QALY í stað 30.000 £. Ef hugbúnaðurinn þinn þjónar alvarlega veiku þýði (langt gengin hjartabilun, alvarleg geðveiki) getur alvarleikaleiðréttingin verið munurinn á fjármagnanlegum og ófjármagnanlegum hagrænum rökum — og þú þarft skortsstærðfræðina til að gera tilkall til hennar.

## Stærðfræðin

Tveir mælikvarðar, reiknaðir yfir eftirstandandi ævi með núverandi viðmiðunarmeðferð:

```
Algildur skortur       = QALY_almennt_þýði − QALY_með_ástandinu
Hlutfallslegur skortur = Algildur skortur / QALY_almennt_þýði
```

Vogir NICE 2022 (sá mælikvarði sem gefur hærri vog gildir):

```
Vog ×1,0: algildur < 12 og hlutfallslegur < 0,85
Vog ×1,2: algildur ≥ 12 eða hlutfallslegur ≥ 0,85
Vog ×1,7: algildur ≥ 18 eða hlutfallslegur ≥ 0,95
```

Vogin margfaldar ΔE (eða jafngilt þröskuldinn): virkur λ verður 24–36 þús. £ við ×1,2 og 34–51 þús. £ við ×1,7.

## Dæmi útreiknað

Sjúklingar með árásargjarnt ástand, meðalaldur 60 ár. Almennt þýði við 60 ára aldur vænir 14,2 núvirtra QALY; með ástandið undir núverandi umönnun, 2,1.

```
Algildur skortur       = 14,2 − 2,1 = 12,1  (≥ 12 → fær ×1,2)
Hlutfallslegur skortur = 12,1 / 14,2 = 0,852 (≥ 0,85 → líka ×1,2)
```

ICER vöktunarvettvangs þíns er 26.000 £/QALY — yfir staðlaða miðpunktsmatinu 20–30 þús. £, á mörkunum. Með voginni ×1,2: virkt ICER = 26.000 / 1,2 ≈ **21.700 £/QALY** — þægilega fjármagnanlegt. Skortsútreikningurinn hreyfði ákvörðunina.

## Tengsl við hugbúnaðarverkfræði

Alvarleikavigtun er formleg útgáfa af einhverju sem verkfræðistofnanir gera af eðlishvöt: að verja meira á hverja einingu umbótar í verst stöddu kerfin. Flytjanlega mynstrið — reiknaðu „SLO-skort“ hverrar þjónustu (hve langt undir væntum heilbrigðum grunni hún keyrir, algilt og hlutfallslega) og vigtaðu verðmæti úrbóta samkvæmt því. Þetta réttlætir, með reikningi í stað röksemda, hvers vegna brennandi eldra kerfið fær meiri fjárfestingu á hverja sparaða stund en heilbrigt. Það ber líka sama stjórnarháttalærdóm: birtu vogirnar *fyrir* forgangsröðunarfundinn, annars gerir sérhvert teymi tilkall til alvarleika.

## Gildrur

- **Að reikna skort gegn röngu grunngildi**: hann er mældur undir *núverandi viðmiðunarmeðferð*, ekki ómeðhöndluðum náttúrulegum gangi.
- **Aldursnæmi**: skortur fer mjög eftir aldri þýðis (yngri sjúklingar hafa fleiri QALY að tapa → hærri algildur skortur); notaðu raunverulega aldursdreifingu meðhöndlaða þýðisins.
- **Að gera ráð fyrir að leiðréttingin gildi annars staðar** — þetta er búnaður NICE (England); aðrar HTA-stofnanir meðhöndla alvarleika öðruvísi (eða alls ekki).

## Heimildir

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
