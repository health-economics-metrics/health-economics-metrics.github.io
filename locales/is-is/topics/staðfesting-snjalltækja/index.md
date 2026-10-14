# Staðfesting snjalltækja

Staðfestingarmælikvarðar mæla hve vel mælingar snjalltækis (wearable) samræmast klínískum gullstaðli (hjartalínurit fyrir hjartslátt, svefnrannsókn fyrir svefn): **MAPE**, samsvörunarfylgni, Bland–Altman samræmi — auk rekstrarmælikvarðanna sem stýra gæðum gagna í raunheimum: **samræmi í notkunartíma** og **heilleika gagna**.

## Hvers vegna það skiptir máli

Staðfesting er forsenda alls sem á eftir kemur: tæki sem getur ekki sannað samræmi við viðmiðunarmælingu getur ekki fest [stafræna endapunkta](../stafrænir-endapunktar-og-lífmerki/), stutt [RPM-reikningagerð](../hagfræði-fjarvöktunar-sjúklinga/) né borið klínískar fullyrðingar. Viðurkenndir þröskuldar fagsins fyrir hjartslátt: **MAPE ≤5%** (strangt) eða **≤10%** (vægt) miðað við hjartalínurit. Viðmiðunarpunktar úr fræðiritum: Oura Gen 3 MAPE hvíldarpúls 1,67% (CCC 0,97); Fitbit Charge 6 MAPE ~5,5% — neytendatæki spanna nú mörk klínískrar gráðu, og þess vegna skiptir mælingin máli fyrir hvert tæki og hvert ástand.

## Stærðfræðin

```
MAPE = (1/n) Σ |mælt_i − viðmið_i| / viðmið_i × 100

CCC (samsvörunarfylgni) = samræmi sem tekur til bæði fylgni
      og kerfisbundinnar skekkju (Pearson r refsað fyrir stað-/kvarðafærslu)

Bland–Altman: meðalskekkja ± 1,96 SD samræmismörk — sýnir hvort
      skekkja fer eftir stærð gildisins

Rekstrarhlið:
Samræmi í notkunartíma = tími borinn / tími samkvæmt verklagi × 100
Heilleiki gagna        = mæld gagnapunkt / væntanleg × 100
```

Staðfesting verður að vera skýrð **fyrir hvert virknisástand** (hvíld, hreyfing, svefn) og hvert þýði — PPG ljósskynjun versnar með hreyfiskekkju, lélegri snertingu og dekkri húðlit, skjalfestur bilunarháttur sem varðar jöfnuð.

## Dæmi útreiknað

Sýndardeildaráætlun velur vöktunartæki. Frambjóðandi A: MAPE í hvíld 2,1%, MAPE við áreynslu 11,4%. Frambjóðandi B: hvíld 3,8%, áreynsla 6,9%.

```
Notkunartilvik: greining versnandi sjúklings heima — viðvaranir fara af stað við
viðvarandi hækkaðan hjartslátt, oft við virkni.
Fyrirsögn A (2,1%) vinnur bæklinginn; B vinnur notkunartilvikið: við
viðvörunarviðeigandi ástand (hreyfing) er 11,4% skekkja A við
hjartslátt 100 = ±11 slög/mín — spannar allt viðvörunarþröskuldsbilið,
býr til falskar stigmagnanir (hver er hjúkrunarútkall, ~40 £) eða missir.

Hagfræði falskra viðvarana: 500 sjúklingar × 2 aukafalskar viðvaranir/viku × 40 £
= 2,08 m£/ár af skekkjukostnaði vegna rangrar staðfestingartölu.
```

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar nota staðfestingargögn þegar skynjarar eru valdir og *framleiða* þau þegar mælieiginleikar eru smíðaðir — bæði hlutverk krefjast sama aga: prófa við notkunarskilyrði, ekki sýnisskilyrði (hliðstæða í hugbúnaði: árangursmæla á framleiðsluvinnuálagi þínu, ekki seljanda). Notkunartími og heilleiki eru niðurstöður vöruverkfræði — þægindi, rafhlöðuending, hönnun hleðsluvenju og áreiðanleiki samstillingar ráða því hvort 16-daga-af-30 RPM-reikningahliðið næst ([hagfræði fjarvöktunar sjúklinga](../hagfræði-fjarvöktunar-sjúklinga/)) og hvort gagnasöfn rannsókna séu greinanleg. Meðhöndlaðu vöntun sem hannað merki: aðgreindu „ekki borið“, „borið en ekkert merki“ og „samstilling mistókst“ í gagnaskipaninni frá fyrsta degi — sé þetta fellt í null eitrar það hverja greiningu á eftir.

## Gildrur

- **Samanlagt MAPE sem felur ástandsbundna bilun** — gildra útreiknaða dæmisins.
- **Staðfestingarþýði ≠ dreifingarþýði**: aldur, húðlitur, skjálfti, offita breyta öll skekkju ljósskynjara; athugaðu lýðfræði rannsóknarinnar.
- **Fylgni skýrð þar sem samræmis er þörf**: há Pearson r með kerfisbundinni skekkju flokkar samt rangt gagnvart algildum þröskuldum — krefstu CCC/Bland–Altman.
- **Heilleiki uppblásinn með uppfyllingu**: fylltar eyður skýrðar sem mæld gögn.

## Heimildir

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
