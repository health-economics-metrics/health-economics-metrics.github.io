# Tæknileg skuld

Tæknileg skuld er gefinn framtíðarkostnaður fljótfærnislegra fyrri ákvarðana í kóðagrunni: úrbótavinnan sem skuldað er (**höfuðstóll**) og áframhaldandi dragbíturinn á afhendingu (**vextir**). Magnbundnar aðferðir eins og SQALE breyta henni úr líkingu í verðlagða skuldbindingu.

## Hvers vegna það skiptir máli

Ómæld er tæknileg skuld nöldur; mæld er hún viðskiptarök. Iðnaðarviðmið (CAST Appmarq, 1.400 forrit / 550 m. kóðalínur): sögulega ≈ **3,61 $ af höfuðstól tæknilegrar skuldar á hverja kóðalínu**, þar sem dæmigerðir kóðagrunnar bera skuldahlutfall upp á 15–20% af endursmíðakostnaði, á móti algengu heilbrigðismarki ≤5% (einkunn „A“ í SonarQube). Heilsuhagfræðiramminn passar nákvæmlega: skuld er *langvinnt ástand* — ómeðhöndluð þróast hún, „vextir“ hennar safnast upp sem hægari afhending og hærri gallatíðni, og úrbætur keppa um getu við nýja eiginleika nákvæmlega eins og forvarnir keppa við meðferð.

## Stærðfræðin

```
SQALE-höfuðstóll = Σ yfir brot (úrbótatími) × kostnaðarhlutfall forritara
Hlutfall tæknilegrar skuldar (TDR) = úrbótakostnaður / endurþróunarkostnaður × 100
                    (SonarQube-einkunnir: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Vextir (talan sem réttlætir niðurgreiðslu):
  vextir/ár = Δ afhendingarhraði × verðmæti á hraðaeiningu
            + Δ gallatíðni × kostnaður á galla
Niðurgreiðslurök = núvirði(vextir sem forðast er yfir tímaskeiðið) − úrbótakostnaður
                (núvirt — sjá discounting-and-time-preference.md)
```

Höfuðstóllinn lýsir skuldbindingunni; **vextirnir** mynda fjárfestingarrökin. Að greiða 500 þús. £ höfuðstól til að forðast 40 þús. £/ár vexti er slæm viðskipti; til að forðast 400 þús. £/ár, frábær.

## Dæmi útreiknað

400 þús. kóðalína samþættingarlag fyrir sjúkraskrár: SQALE-höfuðstóll 3.800 klst. × 75 £ = **285 þús. £**; TDR ≈ 12% (einkunn C). Mældir vextir: teymi sem snerta þetta lag sýna 40% lengri hringrásartíma og 2× hærri bilanatíðni breytinga miðað við grunnlínu umhverfisins. Lagið tekur við 6.000 forritaraklukkustundum/ár:

```
Vextir ≈ 6.000 × 0,40 × 75 £      = 180.000 £/ár (hraðadrag)
       + 12 aukabilanir × 8.000 £ = 96.000 £/ár (endurvinna/atvik)
       ≈ 276.000 £/ár

Lagfæra verstu 30% höfuðstólsins (85 þús. £) með áherslu á heitreiti → líkönuð
vaxtalækkun 60%: sparar ~166 þús. £/ár. Endurgreiðslutími ≈ 6 mánuðir.
```

Miðun á heitreiti skiptir máli: skuldavextir safnast þar sem breytingatíðni × skuldaþéttleiki er mestur — að lagfæra sjaldan snertan kóða kaupir ekkert, eins og að meðhöndla ástand sem hefði aldrei þróast ([hagfræði forvarna](../forvarnahagfræði/)).

## Tengsl við hugbúnaðarverkfræði

Heilsuhagfræðiinnflutningurinn sem uppfærir rök um tæknilega skuld: settu eignina fram sem **byrðaskrá** ([DALY](../fötlunarleiðrétt-lífár/)-stíll — hvar eru töpuð heilbrigð verkfræðiár?); réttlættu niðurgreiðslu með framþróunarstærðfræði, af heiðarleika (yfirleitt kostnaðarhagkvæm, ekki kostnaðarsparandi); vigtaðu úrbætur verstu kerfanna með [alvarleikahalla](../qaly-skortur-og-alvarleikaleiðréttingar/); og leggðu stórar úrbótatillögur fram með jöfnunargreiningu sem stenst reglur um [forðaðan afleiddan kostnað](../afleiddur-kostnaður-sem-komist-er-hjá/) — líkindavigtuð, núvirt, talin einu sinni.

## Gildrur

- **Skýrslugjöf aðeins um höfuðstól**: stór ógnvekjandi tala án vaxtamats réttlætir ekkert.
- **Skuldatölur úr tólum teknar bókstaflega**: SQALE telur brot á reglum; það missir af skuld í hönnun (dýru tegundinni) og telur smáatriði.
- **Skuldanúll-útópía**: ákjósanlegt skuldastig er ekki núll — skuld er skuldsetning; spurningin er vaxtastigið.
- **„Endurskrifin forðast allt“**: tillögur um endurskrif verða að standast sömu jöfnunarreglur — gagnstætt kostnaðartilvik, líkur, núvirðing.

## Heimildir

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
