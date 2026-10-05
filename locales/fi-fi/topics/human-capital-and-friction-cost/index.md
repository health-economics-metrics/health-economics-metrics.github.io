# Inhimillisen pääoman menetelmä vs. kitkakustannusmenetelmä

Nämä ovat kaksi kilpailevaa menetelmää menetetyn tuottavuuden arvottamiseen — sairauden, vamman tai kuoleman seurauksena — sairauskustannus- ja kustannus-hyötytutkimuksissa. Inhimillisen pääoman menetelmä (HCA) arvottaa kaiken menetetyn tuotannon koko poissaolon ajalta palkkatasolla; kitkakustannusmenetelmä (FCM) arvottaa sen vain sille lyhyemmälle ajalle, jonka työnantaja todella tarvitsee tuotannon palauttamiseen. Valinta niiden välillä muuttaa epäsuorien kustannusten arviota kaksinkertaisesti tai enemmän.

## Miksi se on tärkeä

Epäsuorat (tuottavuus)kustannukset ovat yksi terveystalouden kiistanalaisimmista eristä juuri siksi, että kaksi vakiomenetelmää ovat niin jyrkästi eri mieltä. HCA käsittelee jokaista poissaolopäivää päivänä tuotantoa, jonka talous todella menettää, arvotettuna täydellä palkalla koko keston ajalta — tai kuoleman tai pysyvän työkyvyttömyyden tapauksessa jäljellä olevalta työuralta. FCM väittää, että taloudessa, jossa on työttömyyttä ja työmarkkinoiden joustovaraa, suurin osa pitkästä poissaolosta ei todellisuudessa vähennä kansantuotantoa, kun työnantaja on kouluttanut sijaisen tai jakanut työn uudelleen; vain "kitkajakso" — aika, jonka tuotannon palauttaminen aiemmalle tasolle vie — edustaa todellista menetystä. FCM tuottaa siksi järjestelmällisesti matalampia, varovaisempia epäsuorien kustannusten arvioita kuin HCA, eivätkä menetelmät ole vaihdettavissa olevia alaviitteitä: ne ovat eri taloudellisia teorioita siitä, mitä "menetetty tuottavuus" tarkoittaa. Tämä on myös syy, miksi [NICEn vertailutapaus](../health-technology-assessment/) jättää tuottavuuskustannukset oletuksena pois ja raportoi ne, jos ollenkaan, erillisenä yhteiskunnallisen näkökulman herkkyysanalyysina sen sijaan, että ne sekoitettaisiin vertailutapauksen ICER:iin — katso [analyysinäkökulma](../analysis-perspective/).

## Matematiikka

```
Inhimillisen pääoman menetelmä:
HCA_kustannus = päiväpalkka × menetetyt_päivät

Kitkakustannusmenetelmä (yksinkertaistettu, kitkajaksoon rajattu muoto):
FCM_kustannus = päiväpalkka × min(menetetyt_päivät, kitkajakso_päivää)

kitkajakso_päivää = maa-/toimialakohtainen arvio tuotannon palautumisajasta
                    (historiallisesti ~85 päivää hollantilaisessa iMTA-
                    kustannusohjeistuksessa; vaihtelee maittain ja arvioidaan
                    uudelleen ajoittain)
```

Koko erimielisyys menetelmien välillä on `min()`-funktiossa: HCA ei koskaan rajaa `menetetyt_päivät`-arvoa, joten kustannus jatkaa kasvuaan koko poissaolon ajan, kun taas FCM rajaa lasketut päivät kitkajaksoon riippumatta siitä, kuinka pitkään todellinen poissaolo kestää.

## Ratkaistu esimerkki

Työntekijä on poissa töistä `menetetyt_päivät = 180` päivää ja ansaitsee `päiväpalkka = £150`.

**Inhimillisen pääoman menetelmä**:

```
HCA_kustannus = 150 × 180 = £27 000
```

**Kitkakustannusmenetelmä**, kitkajaksolla `kitkajakso_päivää = 85` (historiallinen hollantilainen iMTA-vertailuarvo, ohjeistuksen ajoittaisen uudelleenarvioinnin mukaan):

```
FCM_kustannus = 150 × min(180, 85) = 150 × 85 = £12 750
```

FCM:n £12 750 on alle puolet HCA:n £27 000:sta *samalle* poissaololle — pelkkä menetelmän valinta muuttaa sairauskustannustapausta olennaisesti ennen kuin mihinkään muuhun oletukseen on koskettu.

## Yhteys ohjelmistokehitykseen

Tämä kartoittuu suoraan siihen, miten tiimi arvottaa insinöörin lähtemisen:

- **HCA-tyylinen vaihtuvuuskustannuslaskenta**: menetyksen arvottaminen lähteneen insinöörin täytenä palkkana niin pitkältä ajalta kuin tehtävä on vakanssina. Tämä on useimpien vaihtuvuuskustannusmallien naiivi versio, ja se yliarvioi menetyksen samasta syystä kuin HCA yliarvioi tuottavuuden menetyksen — se olettaa vapautuneen kapasiteetin olleen täysin tuottavaa koko ajan eikä mikään muu ole imenyt joustoa. Katso [työvoiman pysyvyys](../workforce-retention/), joka kvantifioi rekrytoinnin/perehdytyksen/vakanssin korvaamisen ketjun, johon tämä menetelmä syöttää.
- **FCM-tyylinen vaihtuvuuskustannuslaskenta**: menetyksen arvottaminen vain sijaisen todelliselta täyttö- ja perehtymisajalta — insinöörityön "kitkajakso". Tämä on puolustettavampi luku liiketoimintaperusteluun, aivan kuten FCM on varovaisempi valinta sairauskustannustutkimuksessa.
- Taustalla oleva kuri on sama kuin [vaihtoehtoiskustannuksessa](../opportunity-cost/): arvota syrjäytetty resurssi sen mukaan, mitä todella menetetään, ei otsikkokeston ja hinnan tulona.

## Sudenkuopat

- **HCA:n ja FCM:n sekoittaminen yhdessä analyysissä tai vain toisen raportoiminen kertomatta valintaa.** Samat poissaolotiedot voivat tuottaa 2x+ eron raportoidussa kustannuksessa menetelmästä riippuen; valinta on ilmoitettava, ei haudattava.
- **HCA:n käyttö yhteiskunnallisen näkökulman tapauksessa merkitsemättä sitä herkkyysanalyysiksi.** NICEn vertailutapaus sulkee tuottavuuskustannukset nimenomaisesti pois; yhteiskunnallisen näkökulman HCA-arvio kuuluu skenaarioanalyysiin, ei otsikko-ICER:iin.
- **Kummankaan menetelmän soveltaminen palkattomaan tai markkinattomaan työhön (esim. omaishoito) ilman oikaisua.** Molemmat menetelmät olettavat palkkatason arvon korvikkeeksi, mikä ei siirry siististi työhön, jolla ei ole markkinapalkkaa.

## Lähteet

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — tuottavuuskustannuksia käsittelevä aihe.
- NICE health technology evaluations manual (PMG36) — vertailutapauksen näkökulma ja valinnainen yhteiskunnallisen näkökulman ohjeistus. <https://www.nice.org.uk/process/pmg36>
