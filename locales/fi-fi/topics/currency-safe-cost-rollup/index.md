# Valuuttaturvallinen kustannusten yhteenveto

Monien rahaerien — kuukausilaskujen, toimipistekohtaisten kustannusten, monivuotisten budjettivaikutuslukujen — summaaminen tavallisilla binäärisillä liukuluvuilla (`f64`) kerryttää pieniä esitysvirheitä, koska useimpia desimaalimurtolukuja (esim. $1 234,56) ei voi esittää tarkasti binäärisessä liukuluvussa. Yksittäinen virhe on pieni, mutta suuri malli, joka summaa satoja tai tuhansia eriä usean vuoden ajalta, voi ajautua senttiosuuksilla — ja ajautuma riippuu yhteenlaskujen *järjestyksestä*, mikä tekee siitä toistamattoman. Tarkalla desimaali- (tai kokonaislukuisen pienimmän yksikön) aritmetiikalla tehty valuuttayhteenveto summaa täsmällisesti ja vastaa sitä, miten kirjanpitojärjestelmien ja kahdenkertaisen kirjanpidon on täsmättävä senttiin.

## Miksi se on tärkeä

Tämä on hyvin dokumentoitu, perustavanlaatuinen ohjelmistovirheiden luokka: Goldbergin vuoden 1991 ACM Computing Surveys -artikkeli "What Every Computer Scientist Should Know About Floating-Point Arithmetic" on vakioviite siihen, miksi binäärinen liukuluku ei voi esittää useimpia desimaalisia rahamääriä tarkasti ja miksi niiden monen summaaminen kerryttää virhettä. Terveystalouden ja NHS:n rahoitusmallit summaavat rutiininomaisesti monia vuosia ja monia kustannuskategorioita — [kokonaisomistuskustannus](../total-cost-of-ownership/) ja [budjettivaikutusanalyysi](../budget-impact-analysis/) kumpikin aggregoivat suuria määriä `f64`-kustannuseriä monivuotisilla horisonteilla. Kun mallin on täsmättävä senttiin — tilintarkastuksen, joka laskee kokonaissumman käsin uudelleen, on saatava *täsmälleen sama* luku — itse aritmetiikan on oltava tarkkaa desimaaliaritmetiikkaa, ei liukulukua.

## Matematiikka

```
Naiivi yhteenveto:          summa = Σ f64(erä_i)         — järjestyksestä riippuva ajautuma
Valuuttaturvallinen:        summa = Σ Decimal(erä_i)      — tarkka, toistettava

Prosenttimuutoksen soveltaminen (esim. varausvara):
  oikaistu = summa × kerroin               — tarkka Decimal-tulos, voi sisältää
                                              enemmän desimaaleja kuin valuutan
                                              pienimmän yksikön eksponentti
  pyöristetty = pyöristä(oikaistu, valuutan_eksponentti, pyöristyssääntö)  — pyöristyssääntö
                                              (half-up vs. half-even/pankkiirin
                                              pyöristys) on ilmoitettava selvästi
```

Huomaa kaksivaiheinen kuri: tarkan `Decimal`-summan kertominen kertoimella voi tuottaa enemmän desimaaleja kuin valuutta todellisuudessa käyttää (esimerkiksi kolme desimaalia kahden desimaalin summasta kertaa kahden desimaalin kerroin) — tuota välitarkkuutta *ei* pyöristetä automaattisesti pois; vain eksplisiittinen pyöristysvaihe ilmoitetulla pyöristyssäännöllä tuo sen valuutan todelliseen pienimmän yksikön eksponenttiin.

## Ratkaistu esimerkki

Kaksitoista identtistä kuukausilaskua, kukin $1 234,56, summattuna tarkalla desimaaliaritmetiikalla: $1 234,56 × 12 = **$14 814,72**, täsmälleen. Vertaa siihen, että `f64`-literaali `1234.56` summataan kaksitoista kertaa IEEE-754 kaksoistarkkuudella, mikä voi ajautua senttiosuuksilla summausjärjestyksestä riippuen — todellinen, dokumentoitu virheluokka, ei ongelma tarkkaan desimaaliseen `Money`-aritmetiikkaan rakennetulle mallille.

Sovelletaan nyt tavanomaista 5 %:n budjettivaikutuksen varausvaraa (kerroin 1,05) tähän $14 814,72 summaan: $14 814,72 × 1,05 = $15 555,456 — kolme desimaalia, koska kertolasku on tarkka eikä sitä pyöristetä automaattisesti valuutan kahteen desimaaliin. Pyöristettynä eksplisiittisesti 2 desimaaliin pankkiirin pyöristyksellä (half-even) saadaan täsmälleen **$15 555,46**.

## Yhteys ohjelmistokehitykseen

Tämä on suora, perustavanlaatuinen opetus sen takana, että "talousohjelmistot käyttävät `Decimal`-tyyppiä, eivät `float`-tyyppiä" — se kytkeytyy nimenomaisesti tämän arkiston [kokonaisomistuskustannus](../total-cost-of-ownership/)- ja [budjettivaikutusanalyysi](../budget-impact-analysis/)-moduuleihin, jotka kumpikin summaavat tällä hetkellä tavallisia liukulukukustannuksia; oikeellisuusperustelu ei vaadi noiden mallien välitöntä migraatiota, mutta se kertoo tarkasti, *milloin* järjestelmän on täsmättävä senttiin eikä sen siksi saa käyttää binääristä liukulukua rahaaritmetiikkaansa. Katso myös [senttitarkka kustannusten jako](../exact-cents-cost-allocation/) kumppaniongelmasta, jossa kokonaissummia jaetaan (summaamisen sijaan) menettämättä senttejä.

## Sudenkuopat

- **Muunto `float`-tyyppiin kesken ketjun**: rahamäärän vetäminen liukuluvuksi kesken laskennan (jotkin `Money`-kirjastot nimeävät tämän muunnosmetodin jopa vaikkapa "lossy" eksplisiittisenä varoituksena) hylkää hiljaa tarkkuustakuun kaikilta tämän pisteen jälkeisiltä laskuilta.
- **"Decimal on liian hidas vaivan arvoiseksi"**: tarkan desimaaliaritmetiikan torjuminen tarpeettomana yleiskustannuksena, kun talousraportoinnissa oikeellisuus ja jäljitettävyys — ei raaka läpimeno — ovat ratkaisevia.
- **Varausprosentin soveltaminen ilmoittamatta pyöristyssääntöä**: half-up vs. half-even (pankkiirin pyöristys) voi muuttaa viimeistä senttiä; pyöristyskäytännön itsensä on oltava ilmoitettu, tarkastettava valinta — katso [kustannus-hyötyanalyysi](../cost-benefit-analysis/) HM Treasuryn Green Book -ohjeistuksesta varaus- ja optimismivinouman oikaisuista, juuri sellaisista luvuista, joihin tätä pyöristysvaihetta sovelletaan.

## Lähteet

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — `Money`-malli.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimismivinouman ja varausten ohjeistus budjettivaikutusmallinnukseen. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
