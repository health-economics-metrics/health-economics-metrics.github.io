# DORA-mælikvarðar

DORA-mælikvarðarnir (DevOps Research and Assessment) eru fjórir mælikvarðar á frammistöðu hugbúnaðarafhendingar — tíðni dreifinga, leiðtími breytinga, bilanahlutfall breytinga og endurheimtartími misheppnaðrar dreifingar — auk áreiðanleika sem fimmta. Þeir eru best staðfestu viðmið greinarinnar um afhendingu, og hver hefur beina heilsuhagfræðilega lesningu.

## Hvers vegna það skiptir máli

Áratugarannsóknir DORA tengja þessa mælikvarða við frammistöðu stofnana. Hópar skýrslunnar 2024: **úrvals**teymi dreifa eftir þörfum (oft á dag), eru innan við dag frá framlagi til framleiðslu, mistakast ~5% breytinga og jafna sig á innan við klukkustund; **lág**frammistöðuteymi dreifa mánaðarlega eða sjaldnar, eru mánuði að, mistakast ~40% breytinga og jafna sig á vikum. Fyrir heilbrigðiskerfi eru þetta ekki hégómatölur upplýsingatækninnar: þær ákvarða hversu hratt klínískt verðmæti nær til sjúklinga og hversu mikla áhættu hver breyting ber.

## Stærðfræðin

```
Tíðni dreifinga       = framleiðsludreifingar / tími
Leiðtími breytinga    = t(dreifing) − t(framlag), miðgildi
Bilanahlutfall breytinga = misheppnaðar breytingar / allar breytingar × 100
Endurheimtartími (MTTR) = t(endurheimt) − t(bilun), miðgildi
Áreiðanleiki          = SLO-uppfylling (aðgengi, seinkun, réttmæti)
```

Heilsuhagfræðilegar þýðingar:

```
Leiðtími      → cost-of-delay.md: vikur í leiðslunni × CoD (£ eða QALY/viku)
Bilanahlutfall → tíðni aukaverkana hugbúnaðarbreytinga: CFR × kostnaður á atvik
Endurheimtartími → tjón vegna stöðvunar: MTTR × (glötuð klínísk starfsemi + öryggisáhætta)/klst.
Áreiðanleiki  → ávinningsafsláttur: þjónusta með 99% aðgengi skilar ≈ 0,99
                af líkanuðum ávinningi sínum — hugbúnaðarhliðstæða fylgni
```

## Dæmi útreiknað

Teymi hugbúnaðar fyrir sjúklingaflæði hjá stofnun, fyrir/eftir fjárfestingu í afhendingarverkfræði:

```
                    Fyrir       Eftir
Dreifingar          mánaðarlega vikulega
Leiðtími            6 vikur     4 dagar
CFR                 25%         8%
MTTR                2 dagar     2 klukkustundir
```

Teymið afhendir ~30 umbætur á ári með meðalverðmæti 4.000 £/viku á hverja umbót ([CoD](../kostnaður-við-tafir/)). Stytting leiðtíma um ~5,4 vikur færir ávinningsstraum hverrar umbótar fram: 30 × 5,4 × 4.000 ≈ **648.000 £/ár** af verðmæti afhent fyrr. Bæting á CFR: 30 × (0,25 − 0,08) = ~5 færri misheppnaðar breytingar á ári × 15.000 £ meðalkostnaður atviks (stöðvun klínísks kerfis, úrbætur) = **76.500 £/ár**. Afhendingarfjárfestingin er metin í sama gjaldmiðli og hvert klínískt inngrip.

## Tengsl við hugbúnaðarverkfræði

Þetta *er* hugbúnaðarhliðin — tengingin sem vert er að nefna er öfug varpan: DORA-mælikvarðar eru rekstrarmælikvarðar sjúkrahússins í öðrum fötum. Leiðtími ↔ [tilvísun til meðferðar](../tilvísun-til-meðferðar/); bilanahlutfall breytinga ↔ [endurinnlagnarhlutfall](../endurinnlagnarhlutfall/) (vinna sem skilaði sér aftur); MTTR ↔ neyðarviðbragð; tíðni dreifinga ↔ afköst stofu. Umbótaaðferðir flytjast í báðar áttir því báðir eru biðraðakerfi undir öryggistakmörkunum. Athugaðu líka niðurstöðu DORA 2025 um gervigreind: notkun gervigreindar fylgir nú meiri afköstum en *verra* stöðugleika — inngrip með virkni og aukaverkunum, sem krefst nákvæmlega nettóábatagreiningarinnar sem þetta safn kennir (sjá [framleiðni forritara með gervigreind](../framleiðni-hugbúnaðarforritara-með-gervigreind/)).

## Gildrur

- **Leikir með mælikvarða**: dreifingatalning blásin upp með tómum útgáfum; CFR lækkað með því að telja ekki skyndilagfæringar sem bilanir. Skilgreindu atburði nákvæmlega, eins og HTA skilgreinir endapunkta.
- **Deildatöflur milli teyma**: DORA-hópar bera saman starfshætti, ekki teymi með ólík áhættusnið; klínískt kerfateymi á „háu“ stigi getur verið ákjósanlegt þar sem „úrvals“ væri ábyrgðarlaust.
- **Að fínstilla einn mælikvarða**: hraði án CFR/áreiðanleika er málamiðlun afkasta og óstöðugleika — skýrðu alltaf frá fjórum saman (þeir eru [kostnaðar-afleiðingatafla](../kostnaðar-afleiðingagreining/), ekki einkunn).

## Heimildir

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
