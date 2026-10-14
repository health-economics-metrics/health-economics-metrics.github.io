# Mætingarleysishlutfall (DNA)

DNA-hlutfall er hlutfall bókaðra tíma þar sem sjúklingur mætir hvorki né afbókar. Klínískur starfsmaður, herbergi og tími eru greidd; ekkert gerist. Þetta er hreinasti sóunarmælikvarði heilbrigðisþjónustu — og einn sá auðveldasti að laga með hugbúnaði.

## Hvers vegna það skiptir máli

Tölur NHS England (2019): ósóttir tímar hjá heimilislækni eru yfir 15 milljónir á ári á ~30 £ hver — yfir **216 m£ á ári** — og mætingarleysi á göngudeildum sjúkrahúsa er ~8 milljónir á ári (~6,4% tíma) á að meðaltali ~**160 £** á hvern ósóttan tíma. Þar sem jaðarkostnaður áminningar er aurar og endurheimt verðmæti er fullmannaður klínískur tími, hefur fækkun DNA einn besta ROI-reikning stafrænnar heilsu, þess vegna voru SMS-áminningar, auðveld endurbókun og spáð ofbókun meðal fyrstu sannaðra sigra stafrænnar heilsu.

## Stærðfræðin

```
DNA-hlutfall = DNA / bókaðir tímar × 100

Verðmæti fækkunar = tímar × ΔDNA-hlutfall × verðmæti á endurheimtan tíma

verðmæti á endurheimtan tíma: tíminn er fylltur aftur (starfsemisverðmæti / fækkun
á biðlista) eða ekki (starfsmannatími endurnýtanlegur að hluta) — búnaðurinn
skiptir máli, eins og í bed-days-saved.md.
```

## Dæmi útreiknað

Göngudeild: 200.000 tímar á ári, DNA-hlutfall 8%. Áminninga- og endurbókunarþjónusta (SMS með endurbókun í einni snertingu, upplýsingum um samgöngur, aðgengilegum sniðum) lækkar DNA í 5,5%.

```
Endurheimtir tímar = 200.000 × 0,025 = 5.000/ár
Fylltir af biðlista á ~160 £ meðalverðmæti göngudeildar:
  5.000 × 160 £ = 800.000 £/ár af endurheimtri starfsemi
Kostnaður þjónustu: 200.000 × 0,40 £ = 80.000 £/ár

Ávöxtun ≈ 10:1, auk 5.000 biðlistasjúklinga sem eru sinntir fyrr
(sjá waiting-list-impact.md og referral-to-treatment.md).
```

Áhrifastærðin (2,5 stig) er raunhæf: RCT um áminningar sýna stöðugt 25–40% hlutfallslega fækkun DNA.

## Tengsl við hugbúnaðarverkfræði

- **Þetta er vandi tímabókunarkerfa**: áminningar, endurbókun í sjálfsafgreiðslu, sjálfvirk áfylling af biðlista úr afbókunum og spálíkön um mætingarleysi sem knýja markvissa tvíbókun. Hvert um sig er venjuleg hugbúnaðarverkfræði með óvenju skýr hagræn rök.
- **Verkfræðihliðstæðan**: mætingarleysi vegna fráteknar getu — bókaðir en aðgerðalausir CI-tímar, fráteknar skýjagetu, fundarherbergi, viðtalsnefndir. Hagfræðin flyst: ódýr sjálfvirk áminning (eða sjálfvirk losun ónotaðra fráteknar) endurheimtir dýra skuldbundna getu.
- **Forsmekkur siðfræði spáa**: mætingarleysislíkön þjálfuð á mætingargögnum kóða skort og aðgangshindranir; að nota þau til að *draga úr forgangi* líklegra mætingarleysingja magnar ójöfnuð, að nota þau til að *styðja* mætingu (aðstoð við samgöngur, símavalkostir) dregur úr honum. Sjá [ná og jöfnuður](../ná-og-jöfnuður/).

## Gildrur

- **Að telja afbókað-og-endurbókað sem endurheimt verðmæti tvisvar.**
- **Að meta endurheimta tíma sem ekki eru fylltir aftur** — tómur tími með sendri áminningu er enn tómur.
- **Að elta DNA niður í núll**: síðustu stigin af DNA eru sjúklingar sem standa frammi fyrir raunverulegum hindrunum; refsiaðferðir (útskrift eftir N DNA) lækka mælikvarðann með því að yfirgefa sjúklingana.

## Heimildir

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
