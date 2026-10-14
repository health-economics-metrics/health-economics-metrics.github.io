# Áhrif á biðlista

Áhrif á biðlista umbreyta sparaðri klínískri getu í sjúklinga sem eru fjarlægðir af biðlistanum (eða færðir hraðar í gegnum hann). Að umbreyta sparaðum klukkustundum í aukatíma á stofu dregur beint úr stærð biðlista stofnunar — áþreifanlegasta leiðin til að sýna heilbrigðiskerfi til hvers losuð geta er *ætluð*.

## Hvers vegna það skiptir máli

Biðlisti fyrir valaðgerðir er skilgreinandi áskorun NHS eftir faraldurinn (stærð hans er landsbundinn pólitískur mælikvarði), og sérhver stofnun rekur endurheimtaráætlun fyrir valaðgerðir gegn honum. Viðskiptarök sem segja „sparar 2.000 hjúkrunarstundir“ eru óhlutbundin; þau sem segja „skapar 4.000 aukatíma, sér 3.800 sjúklinga á biðlista og styttir lista sérgreinarinnar um 9%“ eru saga sem rekstrarstjóri (COO) getur farið með til stjórnar sinnar. Áhrif á biðlista eru eðlilegasta *reikningseining* fyrir [getu sem losar ekki reiðufé](../reiðufjárlosandi-sparnaður-á-móti-ekki-reiðufjárlosandi/).

## Stærðfræðin

```
Aukatímar          = klukkustundir sem losna / lengd tíma × nýting
Sjúklingar sem sjást = aukatímar × (1 − DNA-hlutfall)
Fækkun á lista     = sjúklingar sem sjást − framkölluð ný eftirspurn
Biðtímaávinningur  = biðraðarbati vegna hærra þjónustuhlutfalls
                     (fyrir stöðugar raðir dregur lækkun biðtíma N um ΔN við
                     þjónustuhlutfall μ alla áfram ~ΔN/μ)
```

Heilsuvirði styttri biðar: sjúklingar eyða færri vikum í lægra nytjaástandinu fyrir meðferð — QALY-reikningurinn í [tilvísun til meðferðar](../tilvísun-til-meðferðar/).

## Dæmi útreiknað

Umhverfisskráningarhugbúnaður sparar hverjum af 20 hjúkrunarfræðingum á stofu 45 mín/dag. Yfir 250 daga: 20 × 0,75 × 250 = 3.750 klukkustundir/ár.

```
Tímar (30 mín, 85% nýtanlegt) = 3.750 / 0,5 × 0,85 = 6.375 tímar
Sjúklingar sem sjást (7% DNA) = 6.375 × 0,93       ≈ 5.929/ár
```

Fyrir sérgrein með 12.000 sjúklinga lista og 24.000 tíma/ár af eftirspurnarsamsvarandi getu stytta ~5.900 aukatímar meðalbið um það bil fjórðung — og færa stofnunina verulega í átt að 18 vikna staðlinum án ráðninga. Á ~160 £ gjaldskrárvirði fyrir hverja komu er virknin ~949.000 £/ár virði (sjá [landsgjaldskrá og einingakostnaður](../landsgjaldskrá-og-einingakostnaður/)) — en settu fram *biðlista*rammann fyrst; það er sá sem kerfið er stýrt eftir.

## Tengsl við hugbúnaðarverkfræði

Biðlisti er uppsafnaður bunki, og hagfræði niðurbrennslu bunka flyst í báðar áttir. Frá heilsu til hugbúnaðar: metu fækkun bunka eftir því hve lengi *notendur* bíða eftir virði, ekki eftir atriðum sem er lokað ([kostnaður við tafir](../kostnaður-við-tafir/) á hvert atriði í röð). Frá hugbúnaði til heilsu: lögmál Little segir að listinn skreppur aðeins saman ef þjónustuhlutfall fer yfir komuhlutfall — getuaukning sem hækkandi tilvísanir gleypa skilur biðtíma óbreytta, svo líkanaðu komur líka. Og á báðum sviðum, forgangsraðaðu eftir alvarleikavigtuðu virði (klínískir bráðleikaflokkar ↔ [alvarleikabreytur](../qaly-skortur-og-alvarleikaleiðréttingar/)), ekki fyrstur-inn-fyrstur-út.

## Gildrur

- **Tímar ≠ sjúklingar**: að gleyma DNA-hlutföllum og ónýtanlegum brotum af losuðum tíma.
- **Framkölluð eftirspurn**: sýnileg aukageta laðar að tilvísanir; nettóáhrif á lista eru minni en brúttó.
- **Að gera tilkall til reiðufjár**: áhrif á biðlista eru getuvirði; reiðufjárkrafan (forðað útvistun bunkavinnu) er önnur lína — sjá [forðanlegur kostnaður við útvistun](../útvistunarkostnaður-sem-hægt-er-að-komast-hjá/).

## Heimildir

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
