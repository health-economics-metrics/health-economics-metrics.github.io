# Fjölviðmiðaákvörðunargreining (MCDA)

Fjölviðmiðaákvörðunargreining (MCDA) er vegið summustigagjafarlíkan sem notað er í heilbrigðistæknimati þegar eitt ICER/greiðsluviljaþröskuldur nær ekki yfir allt sem ákvörðunaraðila er annt um: jöfnuð, óuppfylltar þarfir, nýsköpun, fjárlagaáhrif, alvarleika sjúkdóms. Hvert viðmið fær vog sem endurspeglar mikilvægi þess (leidd af hagsmunaaðilum, vogir leggjast saman í 1), hver kostur fær stöðluð stig fyrir hvert viðmið (venjulega 0–1) og heildareinkunnin er vegin summa — sama stærðfræðilega lögun og stigakort við val á hugbúnaðarseljanda.

## Hvers vegna það skiptir máli

MCDA er notað í ramma eins og EVIDEM, og af sumum HTA-stofnunum við mat á munaðarlausum lyfjum/sjaldgæfum sjúkdómum þar sem ströng nálgun með þröskuld kostnaðar á QALY er talin of þröng til að fanga allt sem skiptir máli í ákvörðun. ISPOR MCDA Emerging Good Practices Task Force formgerði leiðbeiningar um góða starfshætti við öflun vogar og stiga á verjanlegan hátt, einmitt vegna þess að óformlega vegin ákvörðun er auðvelt að smíða og auðvelt að leika sér með. Þegar heilbrigðistækni hefur í raun verðmætavíddir sem eitt [greiðsluviljaþröskuldur](../greiðsluviljaþröskuldar/) getur ekki táknað — alvarleiki, nýsköpun, jöfnuður — gefur MCDA ákvörðunaraðilum skýra, endurskoðanlega byggingu til að sameina þær, frekar en ósagt mat.

## Stærðfræðin

```
MCDA-einkunn = Σ_i (vog_i × stig_i)

vogir ættu að leggjast saman í 1 (leiddar með aðferðum hagsmunaaðila eins og
sveiflu-vigtun eða Analytic Hierarchy Process)
```

## Dæmi útreiknað

HTA-nefnd stigar stafrænt meðferðarúrræði á fjórum viðmiðum:

```
Viðmið                             Vog      Stig    Vog × Stig
Klínískur ávinningur               0,4      0,8     0,32
Kostnaðaráhrif                     0,3      0,5     0,15
Alvarleiki sjúkdóms / óuppfyllt þörf 0,2    0,9     0,18
Nýsköpun                           0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Vogir leggjast saman í 1,0 (0,4 + 0,3 + 0,2 + 0,1), og MCDA-einkunnin er 0,71 (0,32 + 0,15 + 0,18 + 0,06). Nefndin ber 0,71 saman við fyrirfram samþykktan þröskuld, eða raðar því gegn keppandi tækni stigaðri á sama hátt.

## Tengsl við hugbúnaðarverkfræði

Þetta er nákvæmlega sama stærðfræðin og vegið stigakort við val á seljanda, mátunarfylki fyrir útboðsmat eða stigalíkan til forgangsröðunar eiginleika — sjá [smíða eða kaupa](../smíða-eða-kaupa/), klassískt tilvik vegins stigakorts í hugbúnaðarinnkaupum. Vert er líka að bera það saman við [WSJF og CD3](../wsjf-og-cd3/): WSJF/CD3 er *hlutfallsbyggð* forgangsröðunaraðferð (kostnaður við tafir deilt með verkstærð eða tímalengd), en MCDA er vegin *summa*. MCDA og WSJF/CD3 eru tvö byggingarlega ólík svör við „hvernig röðum við keppandi kostum“, og að vita hvort þeirra tiltekin ákvörðun þarfnast í raun — samleggjanlegt verðmæti yfir óháð viðmið, á móti verðmætisþéttleika á einingu af naumri getu — skiptir meira máli en hvor formúlan lítur strangari út.

## Gildrur

- **Skekkja við öflun vogar**: sá sem setur vogirnar ákvarðar röðunina í raun fyrirfram, svo „formúla“ getur þvegið pólitíska eða viðskiptalega ákvörðun sem hlutlægan útreikning. Skjalfestu hver setti vogirnar og hvernig.
- **Tvítalning viðmiðs sem þegar er fangað annars staðar**: að stiga „kostnaðarhagkvæmni“ sem eitt viðmið á meðan „kostnaðaráhrif“ eru líka stiguð sérstaklega ofvigtar peninga miðað við önnur viðmið án þess að nokkur ætli sér það.
- **Fölsk nákvæmni**: vegin einkunn með tveimur aukastöfum (0,71) gefur til kynna meiri strangleika en undirliggjandi 0–10 mat hagsmunaaðila styður, og breytileiki milli matsmanna í þeim einkunnum er oft alls ekki tilkynntur.

## Heimildir

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
