# Tilastollisen hengen arvo (VSL)

Tilastollisen hengen arvo (VSL) — Isossa-Britanniassa "ehkäistyn kuoleman arvo" (VPF) — on summa, jonka *väestö* on yhteisesti valmis maksamaan yhden tilastollisen kuoleman riskin pienentämisestä, johdettuna palkka–riski-vaihtokauppatutkimuksista (kuinka paljon lisäpalkkaa työntekijät vaativat vaarallisemmasta työstä) ja ilmaistuihin mieltymyksiin perustuvista kyselyistä. Se ei ole minkään yksilöidyn henkilön hengen hinta; se on väestöriskikonstrukti, ja riskiä pienentäviä järjestelmiä — triage-algoritmeja, ensihoidon hälytysohjausta, turvallisuusvalvontaa — rakentavan ohjelmistoinsinöörin on tiedettävä, että se tulee eri teoreettisesta traditiosta kuin [maksuhalukkuuskynnykset](../willingness-to-pay-thresholds/).

## Miksi se on tärkeä

VSL/VPF on vakiotyökalu kuolemanriskin pienenemisen rahallistamiseen sääntelyn kustannus-hyötyanalyysissä: liikenneturvallisuus, ympäristösääntely ja jotkin kansanterveysinterventiot kuljettavat liiketoimintaperustelunsa sen kautta. HM Treasuryn Green Book julkaisee brittiläisestä työmarkkina- ja kyselynäytöstä johdetun VPF-luvun, ja liikenneministeriö käyttää sitä suoraan tieturvallisuuden arvioinnissa. Tämä on aidosti erilainen arvotustraditio kuin QALY × maksuhalukkuuskynnys -metodologia: kynnyslähestymistapa arvottaa terveyshyödyt sitä vastaan, mitä terveys*budjetti* tuottaa tällä hetkellä rajalla, kun taas VSL/VPF arvottaa riskin pienenemisen sitä vastaan, mitä ihmiset työmarkkinoilla tai kyselyssä paljastavat olevansa valmiita siitä maksamaan. Nämä kaksi kehystä eivät aina ole yhteensovitettavissa, ja molempien käyttö samassa tapauksessa tätä tunnustamatta on yleinen analyysivirhe.

## Matematiikka

```
Vältetyt kuolemat = väestö × riskin_pieneneminen_per_henkilö
  (riskin_pieneneminen_per_henkilö on todennäköisyys, esim. 0,000001 =
   yhden miljoonasta pieneneminen vuotuisessa kuolemanriskissä)

Rahallistettu kuolleisuushyöty = vältetyt_kuolemat × ehkäistyn_kuoleman_arvo
```

## Ratkaistu esimerkki

800 000 asukkaan alue hyötyy tieturvallisuuden digitaalisesta hälytysohjaus-/triage-interventiosta, joka pienentää kunkin henkilön vuotuista kuolemanriskiä yhdellä miljoonasta (0,000001):

```
Vältetyt kuolemat = 800 000 × 0,000001 = 0,8
```

Käyttäen Ison-Britannian ehkäistyn kuoleman arvoa, £2 180 000 (HM Treasury/DfT:n luku, 2023/24-hinnat — Green Book päivittää sen vuosittain, tarkista uudelleen ennen lainaamista käynnissä olevassa analyysissä):

```
Rahallistettu kuolleisuushyöty = 0,8 × £2 180 000 = £1 744 000/vuosi
```

Hieman alle £1,75 miljoonaa vuodessa rahallistettua kuolleisuushyötyä riskin pienenemisestä, jota useimmat sen piirissä olevat eivät koskaan huomaisi yksilötasolla.

## Yhteys ohjelmistokehitykseen

Turvallisuuskriittisten ohjelmistojen tiimit — lääkinnällisten laitteiden laiteohjelmisto, autonomisten ajoneuvojen ohjelmisto, teollisuuden ohjausjärjestelmät — kohtaavat täsmälleen tämän hinnoitteluongelman rakentaessaan turvallisuusinvestoinnin kustannus-hyötyperustelua: miten hinnoitellaan "yhden katastrofaalisen vian ehkäisy", kun vika on harvinainen, vakava ja levinnyt suurelle käyttäjäjoukolle? VSL/VPF on vuosikymmeniä vanha, julkisesti dokumentoitu todellisen maailman ennakkotapaus luvun asettamiseksi harvinaiselle, vakavalle väestötason riskin pienenemiselle — sama argumentin muoto kuin SRE-investoinnin hinnoittelu harvinaista katastrofaalista katkosta vastaan, vain kuolemaan johtavalla tuloksella seisokkitulosten sijaan.

## Sudenkuopat

- **VSL:n käsitteleminen "yksilöidyn hengen hintana"**: se ei ole sitä. VSL/VPF on tilastollinen väestökonstrukti, joka on johdettu riskin pienenemisen vaihtokaupoista monien ihmisten yli, ei minkään tietyn henkilön hengen tai kuoleman arvotus.
- **Kaksoislaskenta QALY-pohjaiseen nettorahalliseen hyötylaskelmaan nähden**: VSL/VPF-luvun ja erillisen QALY × kynnys -laskelman käyttö samassa tapauksessa ilman niiden yhteensovittamista laskee hiljaa kahteen kertaan samojen vältettyjen kuolemien arvon. Valitse yksi kehys tiettyä tapausta varten.
- **VSL-arvion siirtäminen kontekstista toiseen ilman oikaisua**: yhden maan työmarkkinoilta tai työikäisten palkka–riski-tiedoista johdettu VSL, jota sovelletaan oikaisematta eri tulokontekstiin tai eri väestöön (lapset, eläkeläiset), on pitkäaikainen, aidosti kiistanalainen menetelmäkysymys — ei ratkaistu.

## Lähteet

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality -lisäohjeistus (2023/24-hinnat; Green Bookin arvot päivitetään vuosittain). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (yhdysvaltalaista VSL-traditiota varten, lainattu vastakohdaksi yllä olevalle brittiläiselle VPF-luvulle). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
