# Stafrænir endapunktar og lífmerki

Stafrænt lífmerki er hlutlægur lífeðlisfræðilegur eða hegðunarlegur mælikvarði sem safnað er með skynjurum (gönguhraði úr síma, svefn úr snjalltæki, skjálfti úr hröðunarmæli). Stafrænn endapunktur er slíkur mælikvarði lyftur í **útkomu rannsóknar** — notaður til að sýna fram á meðferðaráhrif. Hækkunin úr „gögnum sem tækið gefur frá sér“ í „sönnunargögn sem eftirlitsaðili tekur gild“ fer um skilgreindan staðfestingarstiga.

## Hvers vegna það skiptir máli

Hefðbundnir endapunktar rannsókna eru tilfallandi (heimsóknir á stofu á 3 mánaða fresti) og dýrir; stafrænir endapunktar eru samfelldir, vistfræðilegir (raunlíf, ekki frammistaða á stofu) og ódýrir á hverja athugun — þeir geta stytt rannsóknir, greint áhrif fyrr og gert dreifðar rannsóknir mögulegar. Gallinn er staðfesting: viðurkenndi ramminn (í takt við FDA, þrjár stoðir) krefst **sannprófunar/greiningarlegrar staðfestingar** (skynjarinn mælir líkamlegu stærðina nákvæmlega), **klínískrar staðfestingar** (mælikvarðinn endurspeglar klínískt ástand sem hann fullyrðir) og sýnds **marktæks þáttar heilsu** (sjúklingum er annt um það sem hann fangar). Endapunktur án allra þriggja er fjarmæling, ekki sönnunargögn.

## Stærðfræðin

```
Greiningarleg staðfesting: samræmi við viðmið (sjá wearable-validation.md —
                           MAPE, CCC, Bland-Altman)
Klínísk staðfesting:       fylgni/aðgreining gegn klínískum akkerum
                           (réttmæti þekktra hópa, svörun við breytingum)
Hagfræði endapunkts:
  atvik greind á sjúklingaár (samfellt) vs sýnataka í heimsóknum
  afl rannsóknar: samfelldir mælikvarðar draga úr úrtaksstærð þegar
  breytileiki milli heimsókna ræður — N ∝ σ²/Δ², og σ² lækkar með þéttri sýnatöku
```

## Dæmi útreiknað

Rannsókn á Parkinsonsveiki íhugar gönguhraða úr úlnliðsskynjara á móti ársfjórðungslegum einkunnum metnum á stofu:

```
Endapunktur á stofu:  4 mælingar/sjúkling/ár, mikill dag-frá-degi hávaði
Stafrænn endapunktur: ~200 óvirkar mælingar/sjúkling/ár

Dreifni árlegs breytingamats lækkar ~5× með þéttri sýnatöku →
greinanleg áhrifastærð við fast afl batnar ~√5 ≈ 2,2×, eða
jafngilt: úrtaksstærð minnkar ~40–60% fyrir sömu tilgátu.
Á 25.000 £ á hvern skráðan sjúkling sparar niðurskurður um 200 sjúklinga ≈ 5 m£
á rannsókn — viðskiptarökin fyrir staðfestingarfjárfestingunni
(sjálf kannski 1–2 m£) yfir leiðslu styrktaraðila.
```

## Tengsl við hugbúnaðarverkfræði

Stafrænir endapunktar eru gagnaverkfræðigrein í klínískum fötum: **uppruni og útgáfustýring** (reikniritauppfærslur í miðri rannsókn ógna samanburðarhæfni — [PCCP](../reglugerðarmat-á-gervigreind/)-vandinn í rannsóknarformi; læstu útgáfu og brúaðu með staðfestingu); **hönnun vegna gagnataps** (eyður í notkunartíma eru upplýsandi, ekki tilviljanakenndar — sjá [staðfesting snjalltækja](../staðfesting-snjalltækja/); val á uppfyllingu eru vísindalegar fullyrðingar); og **ákvarðanir um skiptingu milli jaðars og skýs** sem breyta því hvaða hrámerki er yfirhöfuð endurheimtanlegt síðar. Teymi sem líta á mælileiðsluna sem stýrðan hugbúnað frá fyrsta degi — prófaðan, útgáfustýrðan, skjalfestan — kaupa trúverðugleika endapunkta sinna ódýrt; að bæta staðfestingu við leiðslu sem smíðuð var hratt er þar sem verkefni um stafræna endapunkta deyja.

## Gildrur

- **Fylgni-við-stofu sem full staðfesting**: að passa við gallaðan mælikvarða á stofu sannar arf, ekki sannleika; staðfestu gegn marktækum þætti heilsu.
- **Regluverksáhætta nýrra endapunkta**: fordæmislaus endapunktur getur verið vísindalega betri og samt sökkt umsókn — leitaðu snemma til eftirlitsaðila (hæfnisáætlanir eru til).
- **Misræmi skynjara og þýðis**: staðfesting á ungum, heilbrigðum úlnliðum, dreifing hjá öldruðum sjúklingum með skjálfta og litarmun sem PPG sá aldrei.
- **Eiginleikarek**: endurþjálfun gönguhraðareikniritsins á nýjum gögnum endurskilgreinir endapunktinn hljóðlega í miðri rannsókn.

## Heimildir

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
