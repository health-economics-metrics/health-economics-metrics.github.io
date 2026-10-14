# Verðmæti tölfræðilegs lífs (VSL)

Verðmæti tölfræðilegs lífs (VSL) — kallað „verðmæti forðaðs dauðsfalls“ (VPF) í breskri notkun — er sú upphæð sem *þýði* er sameiginlega reiðubúið að greiða til að draga úr hættu á einu tölfræðilegu dauðsfalli, leidd af rannsóknum á launa-áhættu málamiðlun (hve mikið aukalaun launþegar krefjast fyrir áhættusamari störf) og könnunum á yfirlýstum óskum. Það er ekki verð á lífi neins auðkennds einstaklings; það er áhættuhugtak á þýðisstigi, og hugbúnaðarverkfræðingur sem smíðar áhættudrægjandi kerfi — flokkunarreiknirit, útkallsstýringu sjúkrabíla, öryggisvöktun — þarf að vita að það kemur úr annarri kenningarhefð en [greiðsluviljaþröskuldar](../greiðsluviljaþröskuldar/).

## Hvers vegna það skiptir máli

VSL/VPF er staðlað verkfæri til að meta til fjár lækkun dánaráhættu í kostnaðar- og ábatagreiningu regluverks: umferðaröryggi, umhverfisreglur og sum lýðheilsuinngrip keyra viðskiptarök sín í gegnum það. Green Book breska fjármálaráðuneytisins (HM Treasury) birtir VPF-tölu leidda af bresku vinnumarkaðs- og könnunargögnum, og samgönguráðuneytið (Department for Transport) notar hana beint í mati á umferðaröryggi. Þetta er raunverulega ólík matshefð frá QALY × greiðsluviljaþröskuldsaðferðafræði: þröskuldsaðferðin metur heilsuávinning gagnvart því sem heilbrigðis*fjárlög* framleiða nú á jaðrinum, en VSL/VPF metur áhættulækkun gagnvart því sem fólk á vinnumarkaði eða í könnun sýnir að það myndi greiða fyrir hana. Rammarnir tveir eru ekki alltaf samræmanlegir, og að nota báða í sama máli án þess að viðurkenna það er algeng greiningarvilla.

## Stærðfræðin

```
Dauðsföll forðað = þýði × áhættulækkun_á_mann
  (áhættulækkun_á_mann er líkindatala, t.d. 0,000001 = ein af milljón
   lækkun á árlegri dánaráhættu)

Verðlagður dánarávinningur = dauðsföll_forðað × verðmæti_forðaðs_dauðsfalls
```

## Dæmi útreiknað

Svæði með 800.000 íbúa nýtur góðs af stafrænu útkalls-/flokkunarinngripi í umferðaröryggi sem lækkar árlega dánaráhættu hvers íbúa um 1 af milljón (0,000001):

```
Dauðsföll forðað = 800.000 × 0,000001 = 0,8
```

Með bresku verðmæti forðaðs dauðsfalls, 2.180.000 £ (tala HM Treasury/DfT, verðlag 2023/24 — Green Book uppfærir þetta árlega, staðfestu aftur áður en vitnað er í í lifandi greiningu):

```
Verðlagður dánarávinningur = 0,8 × 2.180.000 £ = 1.744.000 £/ár
```

Rétt undir 1,75 milljónum punda á ári af verðlögðum dánarávinningi, af áhættulækkun sem flestir íbúar sem verða fyrir áhrifum myndu aldrei taka eftir sem einstaklingar.

## Tengsl við hugbúnaðarverkfræði

Teymi í öryggiskritískum hugbúnaði — fastbúnaður lækningatækja, hugbúnaður sjálfkeyrandi ökutækja, iðnaðarstýrikerfi — standa frammi fyrir nákvæmlega þessu verðlagningarvandamáli þegar þau smíða kostnaðar- og ábatarök fyrir öryggisfjárfestingu: hvernig verðleggur þú „koma í veg fyrir eina hörmulega bilun“ þegar bilunin er sjaldgæf, alvarleg og dreifð yfir stórt þýði notenda? VSL/VPF er áratugagamalt, opinberlega skjalfest fordæmi úr raunheimum um að setja tölu á sjaldgæfa, alvarlega áhættulækkun á þýðisstigi — sama lögun röksemdar og að verðleggja SRE-fjárfestingu gagnvart sjaldgæfu hörmulegu rekstrarstöðvun, bara með dánarútkomu í stað niðritímaútkomu.

## Gildrur

- **Að meðhöndla VSL sem „verð auðkennds lífs“**: það er það ekki. VSL/VPF er tölfræðilegt þýðishugtak leitt af áhættulækkunarmálamiðlunum meðal margra einstaklinga, ekki mat á lífi eða dauða neins sérstaks manns.
- **Tvítalning gagnvart QALY-byggðum nettó peningaávinningi**: að nota VSL/VPF-tölu og sérstakan QALY × þröskuldsútreikning í sama máli, án þess að samræma þau, tvítelur þegjandi verðmæti sömu forðuðu dauðsfallanna. Veldu einn ramma fyrir hvert mál.
- **Að flytja VSL-mat milli samhengja án leiðréttingar**: VSL leitt af vinnumarkaði eins lands, eða af launa-áhættugögnum vinnualdurs, beitt óleiðrétt á annað tekjusamhengi eða annað þýði (börn, eftirlaunaþega) er langvarandi, raunverulega umdeilt aðferðafræðilegt vandamál — ekki leyst.

## Heimildir

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
