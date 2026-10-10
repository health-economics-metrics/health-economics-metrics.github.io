# Lífár sem vinnast (LYG)

Lífár sem vinnast eru viðbótarlifun sem rekja má til inngrips, án gæðaleiðréttingar: flatarmálið milli lifunarferla með og án þess. Jafngilda lífárið sem vinnst (evLYG) er nútímaafbrigði sem metur allt lífsframlengingu jafnt.

## Hvers vegna það skiptir máli

LYG er hrárasta heilsuútkoman: hversu miklu lengur lifir fólk? Það skiptir máli þegar gæðagögn vantar, þegar borið er saman fyrir áhorfendur sem eru tortryggnir gagnvart QALY, og í krabbameinslækningum þar sem lifunarferlar eru aðalúttak rannsókna. **evLYG** (notað af bandarísku ICER-stofnuninni samhliða kostnaði/QALY) er til af siðferðilegri ástæðu: QALY meta ár af framlengdu lífi eftir nytjum sjúklingsins, svo framlenging lífs einhvers með fötlun „telur minna“ — evLYG metur hvert framlengt ár á fastar nytjar og fjarlægir þá mismunun.

## Stærðfræðin

```
LYG = meðallifun_nýtt − meðallifun_viðmið
    = flatarmál milli lifunarferla (takmarkað við tímaskeiðið)

QALY-sýn á lífsframlengingu:  framlenging × nytjar sjúklings
evLYG-sýn á lífsframlengingu: framlenging × föst nytja (ICER notar ~0,851,
                              meðalnytjar bandarísks þýðis)
```

Bæði eru [núvirt](../núvirðing-og-tímaforgangur/) í hagfræðilíkönum.

## Dæmi útreiknað

Snemmviðvörunarreiknirit við blóðsýkingu á sjúkrahúsi: líkanagerð sýnir að fyrri sýklalyf koma í veg fyrir 12 dauðsföll á ári; meðalaldur þeirra sjúklinga gefur 8 lífár eftir hvern með nytjar 0,7.

```
LYG   = 12 × 8            = 96 lífár/ár
QALY  = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

Á 20.000 £ á QALY metur QALY-rammanum lifunina á 1,34 m£/ár; evLYG-ramminn á 1,63 m£. Bilið er nákvæmlega siðferðismatið um hvort lífár á nytjum 0,7 sé 70% virði „fulls“. Alvarleg skjöl skýra frá hvoru tveggja.

## Tengsl við hugbúnaðarverkfræði

- Lifunargreining er sameiginlegt verkfærasett: Kaplan-Meier ferlar fyrir sjúklinga og fyrir *þjónustur* (tími til bilunar, tími til brottfalls) eru sama stærðfræðin. „Þjónustuár sem vinnast“ af áreiðanleikafjárfestingu = flatarmál milli lifunarferla kerfisins með/án — heiðarlegri rammi en punktfullyrðingar um MTTF.
- evLYG ber hönnunarviðvörun um mælikvarða fyrir verkfræði líka: sérhver framleiðnimælikvarði sem vigtar afurðir með stuðli um „gæði teymis“ mun kerfisbundið vanmeta umbætur fyrir takmörkuð eða erfið teymi — stundum viltu jafngilda afbrigðið af ásettu ráði.

## Gildrur

- **Miðgildi á móti meðaltali lifunar**: hagfræðilíkön þurfa meðaltal (flatarmál undir ferli); rannsóknir birta oft miðgildi í fyrirsögn. Þau eru mjög ólík í skekktum dreifingum.
- **Framreikningur umfram eftirfylgni rannsóknar** ræður líkönuðu LYG í langvinnum sjúkdómum — tilgreindu framreikningslíkanið og prófaðu það í [næmnigreiningu](../næmnigreining/).
- **Að fullyrða afstýrð dauðsföll úr athugunargögnum fyrir/eftir** án leiðréttingar fyrir sjúklingablöndu og langtímaþróun.

## Heimildir

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
