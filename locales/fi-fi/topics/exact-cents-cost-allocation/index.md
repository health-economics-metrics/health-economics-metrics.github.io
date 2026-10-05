# Senttitarkka kustannusten jako

Kokonaisrahamäärän — yhteisen avustuksen, infrastruktuurilaskun, budjettivaikutusluvun — jakaminen usealle vastaanottajalle naiivilla prosenttilaskennalla tuottaa rutiininomaisesti osia, jotka eivät summaudu takaisin alkuperäiseksi kokonaissummaksi. Senttitarkka jako on korjaus: kokonaisluku-/desimaalimenetelmä, joka toimii rahayksikön pienimmissä yksiköissä (sentit) ja takaa, että osat summautuvat *täsmälleen* kokonaisuudeksi, riippumatta siitä kuinka epätasaisesti se jakautuu. Jokainen ohjelmistoinsinööri, jonka on täsmättävä jaettu kokonaissumma senttiin — palkanlaskenta, avustusten maksatus, yhteisten palvelujen kustannusten jako — tarvitsee tätä mallia, ei liukulukuprosentteja.

## Miksi se on tärkeä

Tämä on nimetty, perustavanlaatuinen malli yritysohjelmistojen suunnittelussa: Martin Fowlerin *Patterns of Enterprise Application Architecture* (2002) dokumentoi `Money`- ja `Allocate`-mallit juuri siksi, että "jaa $100 kolmeen osaan" on ongelma, jonka naiivi koodi ratkaisee jatkuvasti väärin ja hiljaa väärin — virhe paljastuu vasta, kun joku täsmäyttää kirjat ja huomaa osien olevan sentin vajaat (tai yli) kokonaissummasta. Terveystaloudessa ja NHS:n rahoitustyössä tämä ei ole akateemista: budjettivaikutusten kokonaissummat jaetaan toimipisteille, vuosille tai osastoille; yhteisen infrastruktuurin ja lisenssien kustannukset jaetaan osastoille henkilöstömäärän tai toiminta-osuuden mukaan. Jokaisen tällaisen jaon on täsmättävä tarkasti, koska talousjohtaja, jolle annetaan osia, jotka eivät summaudu kokonaissummaksi, lakkaa luottamasta koko malliin.

## Matematiikka

```
Naiivi (virheellinen) menetelmä:
  osa_i = pyöristä(summa × osuus_i / Σ osuudet)     — pyöristää jokaisen osan erikseen

Tarkka menetelmä (suurimman jäännöksen menetelmä / "largest remainder allocation"):
  1. perus_i = pyöristä_alas(summa_pienimmät_yksiköt × osuus_i / Σ osuudet)   — vain kokonaiset pienimmät yksiköt (sentit)
  2. jäännös = summa_pienimmät_yksiköt − Σ perus_i                            — ylimääräiset sentit, aina < vastaanottajien lukumäärä
  3. jaa 1 lisäyksikkö kullekin niistä `jäännös` vastaanottajasta, joilla on
     suurin murto-osajäännös vaiheesta 1, kunnes jäännös on käytetty

Tulos: Σ osa_i == summa, aina, rakenteellisesti.
```

Tarkka menetelmä ei koskaan pyöristä osaa erillään — se pyöristää *koko jaon* yhtenä operaationa, ja juuri se pitää summainvariantin voimassa.

## Ratkaistu esimerkki

Jaa $100,00 kolmeen yhtä suureen osaan (`osuudet = [1, 1, 1]`).

Naiivi menetelmä: $100,00 ÷ 3 = $33,333…, pyöristettynä erikseen lähimpään senttiin antaa $33,33 kullekin vastaanottajalle. Summattuna: $33,33 × 3 = $99,99 — yksi sentti on kadonnut, eikä yksikään yksittäinen erä ole niin "väärin", että sen huomaisi tarkastelemalla.

Tarkka menetelmä: `perus` = $33,33 kaikille kolmelle (yhteensä 9 999 pienintä yksikköä, kun `pyöristä_alas(10 000 / 3) = 3 333` senttiä kullekin), jolloin jäljelle jää 1 sentin jäännös (10 000 − 9 999). Tuo yksi ylimääräinen sentti menee sille vastaanottajalle, jolla on suurin murto-osajäännös jakolaskussa — se, kuka tarkalleen, on sisäinen tasatilanteen ratkaisun yksityiskohta, johon kutsujan ei pidä nojata. Kaksi vastaanottajaa saa $33,33 ja yksi $33,34, ja kolme osaa summautuvat täsmälleen $100,00:ksi.

Juuri tätä aritmetiikkaa [budjettivaikutusanalyysi](../budget-impact-analysis/) tarvitsee aina, kun budjettivaikutuksen kokonaissumma on jaettava toimipisteille, kohorteille tai tilikausille ja täsmättävä takaisin julkaistuun kokonaissummaan — katso [valuuttaturvallinen kustannusten yhteenveto](../currency-safe-cost-rollup/) kumppaniongelmasta, jossa monia tällaisia eriä summataan ilman ajautumaa.

## Yhteys ohjelmistokehitykseen

Tämä on kirjaimellisesti yritysohjelmistoarkkitehtuurin "Money-malli" — perustavanlaatuinen, nimetty malli juuri tälle virheluokalle, ei kertaluonteinen kikka. Todellisia talouden täsmäytysvirheitä on toimitettu tuotantoon juuri tästä virheluokasta: `f64`-tyypillä lasketut prosenttijaot, pyöristettynä vastaanottajakohtaisesti eikä koskaan tarkistettu alkuperäistä kokonaissummaa vasten. Se kytkeytyy suoraan tämän arkiston [kokonaisomistuskustannus](../total-cost-of-ownership/)-moduuliin, joka summaa tällä hetkellä tavallisia liukulukukustannuksia vuosien ja vaihtoehtojen yli — sama tarkkuuskuri pätee aina, kun TCO- tai budjettivaikutuskokonaissumma on jaettava eikä vain summattava.

## Sudenkuopat

- **Prosentti-sitten-pyöristä suurimman jäännöksen sijaan**: jako liukulukuprosenteilla ja jokaisen vastaanottajan pyöristäminen erikseen, mikä kerryttää pyöristysvirhettä eikä juuri koskaan summaudu takaisin kokonaissummaan, erityisesti monilla vastaanottajilla.
- **Valuuttojen pienimmän yksikön eksponenttien sivuuttaminen**: oletus, että kaikilla valuutoilla on 2 desimaalia — Japanin jenillä on 0, joillakin valuutoilla 3 — käsin tehty prosenttijako kovakoodaa yleensä 2 ja rikkoutuu hiljaa muilla valuutoilla; tarkka jakorutiini lukee eksponentin valuutasta itsestään (ISO 4217).
- **Jo jaetun jäännöksen uudelleenjako**: jakorutiinin ajaminen uudelleen aiemmasta jaosta jääneelle jäännökselle ilman idempotenssitarkistuksia, mikä voi hyvittää saman sentin kahdesti samalle vastaanottajalle.

## Lähteet

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — `Money`- ja `Allocate`-mallit.
- ISO 4217 — valuutta- ja rahastokoodistandardi, joka määrittelee kunkin valuutan pienimmän yksikön eksponentin.
