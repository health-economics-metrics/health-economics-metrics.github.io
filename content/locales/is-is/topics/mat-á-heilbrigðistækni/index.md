# Mat á heilbrigðistækni (HTA)

HTA er formlegt, stofnanabundið ferli þar sem heilbrigðiskerfi ákveða hvort tækni — lyf, tæki eða hugbúnaður — sé þess virði að greiða fyrir. Það sameinar sönnunargögn um klíníska virkni við hagrænt mat undir birtri, skylduðri aðferðafræði.

## Hvers vegna það skiptir máli

Ef þú selur inn í landsbundna heilbrigðisþjónustu getur HTA-stofnun bókstaflega ákveðið markaðsaðgang þinn. Að þekkja staðbundna ferlið er að þekkja raunverulegan verðmætaeftirlitsaðila þinn:

- **NICE (England)**: lögbundin mat undir skilgreindu *viðmiðunartilviki* — QALY úr [EQ-5D](../eq-5d/), [sjónarhorn](../sjónarhorn-greiningar/) NHS+PSS, 3,5% [núvirðing](../núvirðing-og-tímaforgangur/), [PSA](../líkindanæmnigreining/) krafist — metið gegn 20–30 þús. £/QALY með [alvarleikaleiðréttingum](../qaly-skortur-og-alvarleikaleiðréttingar/); mjög sérhæfð tækni allt að 100 þús. £+ með vigtun.
- **ICER (Bandaríkin, ekki ríkisrekin)**: sönnunarskýrslur með *verðviðmiði heilsuávinnings* — verðið sem vara væri kostnaðarhagkvæm á 100–150 þús. $ á QALY/evLYG — notað sem samningstök; auk „greiðsluhæfnivarúða“ um fjárlagaáhrif.
- **Kanada (CADTH → CDA-AMC)**: endurgreiðslumat við ≈50 þús. CAD/QALY; hefur sögulega krafist verðlækkunar í ~95% umsókna.

## Stærðfræðin

Kraftur HTA er ekki formúla heldur **skylduð aðferð**: sérhver umsókn reiknar sama [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/) undir sömu reglum viðmiðunartilviks, svo niðurstöður eru sambærilegar milli vara og ára. Viðmiðunartilvikið tilgreinir útkomumælikvarða, nytjamælitæki, sjónarhorn, val á viðmiði, afsláttarstuðul, tímaskeið og óvissugreiningu — og fjarlægir hverja frelsisgráðu sem styrktaraðili gæti leikið sér með.

## Dæmi útreiknað

Stafrænt meðferðarúrræði sendir inn í mat að hætti NICE:

```
Líkan: ΔC = +450 £/sjúkling, ΔE = +0,03 QALY → ICER = 15.000 £/QALY ✓ undir 20 þús. £
Athuganir viðmiðunartilviks:
  nytjar úr EQ-5D-5L með breska gildasettinu            ✓
  viðmið = núverandi umönnunarleið (ekki „engin meðferð“) ✓
  PSA: 71% líkur á kostnaðarhagkvæmni við 20 þús. £      ✓ (skýrt frá)
  alvarleikaleiðrétting: undir ×1,2 mörkum              — engin fullyrt
Tilmæli: reglubundin pöntun, með söfnun raunheimsgagna.
```

Eigin æskileg greining styrktaraðilans sýndi 9.000 £/QALY; viðmiðunartilvikið ýtti því í 15.000 £ með því að þvinga fram heiðarlega viðmiðið. Það bil er *ástæða* þess að viðmiðunartilvik eru til.

## Tengsl við hugbúnaðarverkfræði

Flytjanlegi gripurinn er **innra viðmiðunartilvikið**: ein skylduð aðferð fyrir öll viðskiptarök tóla/vettvangs — yfirlýst viðmið, stöðluð einingakostnaður (sjá [landsgjaldskrá og einingakostnaður](../landsgjaldskrá-og-einingakostnaður/) fyrir mynstrið), fastur afsláttarstuðull, skyld næmnigreining, staðlað sniðmát. „AMCP-skjalið fyrir tól“ lagt fyrir vettvangsráð gerir tillögur sambærilegar og leiki sýnilega, nákvæmlega eins og HTA gerir fyrir læknisfræði. Byrjaðu minna en NICE gerði: tveggja blaðsíðna sniðmát ásamt birtri verðbók slær engan staðal.

Fyrir hvernig fjöllotu-HTA-líkan er í raun hermt hóp-fyrir-hóp eftir lotum, sjá [Markov-hópherming](../markov-hópherming/).

## Gildrur

- **Að líta á HTA sem formsatriði eftir regluverksheimild** — CE/UKCA/FDA-heimild segir að vara sé örugg; HTA ákveður hvort hún sé *þess virði að kaupa*. Önnur hindrun, önnur sönnunargögn.
- **Að smíða hagfræðilíkanið eftir rannsóknina** — öflun sönnunargagna ætti að vera hönnuð afturábak út frá kröfum viðmiðunartilviksins.
- **Að horfa framhjá mun milli lögsagna**: ICER sem er fjármagnanlegt í Bandaríkjunum á 120 þús. $/QALY fellur hjá NICE á 30 þús. £; skipuleggðu sönnunargögn og verðlagningu fyrir hvern markað.

## Heimildir

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
