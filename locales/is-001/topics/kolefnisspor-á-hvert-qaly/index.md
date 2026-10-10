# Kolefnisspor á hvert QALY

Kolefni á hvert QALY er skilvirknihlutfall — kolefnislosun inngrips (eða losun sem komist er hjá) deilt með QALY sem það skilar — beint hliðstætt kostnaði á QALY, og gerir kleift að meta kolefnisskilvirkni inngrips samhliða kostnaðarskilvirkni þess. „Kolefnisleiðréttur nettó peningaávinningur“ gengur skrefi lengra, verðleggur kolefnisáhrifin með opinberum óviðskiptahæfum kolefnisgildum Green Book í Bretlandi og dregur þau frá venjulegum [nettó peningaávinningi](../nettó-peningaávinningur/).

## Hvers vegna það skiptir máli

NICE og NHS England ætlast nú til þess að umhverfisáhrif séu skoðuð samhliða kostnaði og QALY. NHS hefur opinbera skuldbindingu um núlllosun: núll nettólosun beinnar losunar fyrir 2040 og núll nettólosun alls birgðakeðjuspors fyrir 2045. Handbók NICE um mat á heilbrigðistækni (PMG36) vísar til umhverfislegrar sjálfbærni sem vaxandi atriðis í tæknimati. Fyrir stafræna heilbrigðisvöru þýðir þetta að kolefni er að verða fjórða stoð verðmætisrökanna, ásamt kostnaði, QALY og [drottnun á hagkvæmnimörkunum](../drottnun-og-hagkvæmnimörk/) — ekki í stað neins þeirra, heldur vídd sem vel byggð viðskiptarök þurfa í auknum mæli að skýra frá.

## Stærðfræðin

```
Kolefni á QALY = heildarlosun_tonn_co2e / heildar_qaly
  (neikvætt gildi þýðir nettólosun SEM KOMIST ER HJÁ á hvert unnið QALY —
  tvöfaldur sigur: betri heilsa og minna kolefni)

Verðlögð kolefnisáhrif = losun_tonn_co2e × kolefnisgildi_á_tonn
  (neikvæð losun × jákvætt gildi = neikvæður kostnaður, þ.e. ávinningur)

Kolefnisleiðréttur NMB = nettó_peningaávinningur − verðlögð_kolefnisáhrif
```

Þetta útvíkkar hugmyndina um kostnað/QALY-hagkvæmnimörk með öðrum ás — kolefni á QALY — sömu rökfræði „teiknaðu alla kosti og sjáðu hvað er drottnað“ og í [drottnun og hagkvæmnimörkum](../drottnun-og-hagkvæmnimörk/), beitt á kolefni í stað kostnaðar.

## Dæmi útreiknað

Fjarheilbrigðisþjónusta kemur í stað heimsókna, forðast 5.000 bílferðir á ári við um 8 kg CO2e hver — 40 tonn CO2e sem komist er hjá, sett fram sem neikvæð losunartala (−40,0 tonn), og hún skilar 25 QALY/ár:

```
Kolefni á QALY = −40,0 / 25,0 = −1,6 tonn CO2e sem komist er hjá á hvert unnið QALY
```

Með óviðskiptahæfu kolefnisgildi Green Book (til skýringar, miðgildi óviðskiptahæft 2023 ≈ 269 £/tonn CO2e — Green Book uppfærir kolefnisgildi árlega, staðfestu aftur áður en vitnað er í lifandi greiningu):

```
Verðlögð kolefnisáhrif = −40,0 × 269 £ = −10.760 £
```

„Kostnaður“ upp á −10.760 £ er 10.760 £ ávinningur. Ef sjálfstæður nettó peningaávinningur inngripsins er 500.000 £:

```
Kolefnisleiðréttur NMB = 500.000 £ − (−10.760 £) = 510.760 £
```

Kolefnissparnaðurinn bætist við rökin í stað þess að draga úr þeim — tvöfaldi sigurinn sem neikvæð losun á að sýna.

## Tengsl við hugbúnaðarverkfræði

Þetta er lifandi, núverandi skurðpunktur við hagfræði gervigreindar og skýja: kolefnisspor reikniafls við þjálfun og rekstur gervigreindarlíkans er nú raunveruleg lína í innkaupum NHS, þar sem birgðasamningar NHS yfir tilteknum þröskuldum krefjast kolefnislækkunaráætlunar. [Einingahagfræði skýja](../einingahagfræði-skýja/) rekur nú þegar kostnað á hverja einingu reikniúttaks; kolefni á QALY er eðlilegt sniðmát fyrir framtíðarmælikvarða „kolefniskostnaður á ályktun“ sem útvíkkar þá einingu og einingahagfræði ályktunar yfir í umhverfisvíddina, þótt sá mælikvarði sé ekki til enn.

## Gildrur

- **Leikir með mörk umfangs**: að telja aðeins beina losun (Scope 1) og sleppa losun birgðakeðju (Scope 3), sem er yfirleitt meirihlutinn af raunverulegu spori stafrænnar heilbrigðisvöru.
- **Að nota úrelt kolefnisgildi**: Green Book uppfærir óviðskiptahæf kolefnisgildi árlega, svo hver tilvitnuð tala í £/tonn verður að vera dagsett, ekki sett fram sem föst stærð.
- **Að líta á „kolefnisskilvirkt“ sem staðgengil „kostnaðarhagkvæmt“**: inngrip með lítið kolefni og lítið verðmæti er enn léleg nýting á fjármunum NHS. Kolefni er fjórða stoðin ásamt kostnaði og QALY, ekki í stað hvorugs.

## Heimildir

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
