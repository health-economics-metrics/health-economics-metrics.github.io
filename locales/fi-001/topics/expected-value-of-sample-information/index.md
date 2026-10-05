# Otostiedon odotusarvo (EVSI)

EVSI on *tietyn ehdotetun tutkimuksen* — tietyn asetelman, tietyn otoskoon — arvo ennen sen toteuttamista, toisin kuin [EVPI](../expected-value-of-perfect-information/), joka hinnoittelee kaiken epävarmuuden poistamisen kokonaan. EVSI vastaa kysymykseen, jonka tutkimuksen rahoittaja todella kohtaa: "Onko *tämä* koe *tämän kokoisena* kustannuksensa arvoinen?"

## Miksi se on tärkeä

EVPI kertoo katon sille, mitä mikä tahansa tutkimus voisi olla arvoltaan; se ei koskaan kerro, ylittääkö edessä oleva koe rimän. Kansallisen tutkimusrahoittajan, joka valitsee 50 potilaan pilotin ja 500 potilaan ratkaisevan kokeen välillä, on tiedettävä, mikä on *kunkin tietyn asetelman* arvo, ei vain kaikkitietävyyden arvo. EVSI tuottaa tämän luvun, ja koska se skaalautuu otoskoon mukana, rahoittaja voi löytää otoskoon, joka maksimoi odotetun nettohyödyn arvaamisen sijaan.

Tästä syystä EVSI on myös aina pienempi tai yhtä suuri kuin EVPI: äärellinen otos voi ratkaista epävarmuuden vain osittain, ja tutkimus, joka näyttää olevan arvokkaampi kuin täydellinen tieto, on merkki laskentavirheestä, ei todellisesta tuloksesta.

## Matematiikka

```
Yleinen:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (sisäkkäinen odotusarvo: ulompi mahdollisten tutkimustulosten yli, sisempi
  θ:aa koskevan posteriorikäsityksen yli kyseisen tuloksen nähtyä — yleensä
  estimoidaan sisäkkäisellä Monte Carlo -menetelmällä / bayesilaisella
  päivityksellä todennäköisyyspohjaisen herkkyysanalyysin arvontojen yli)

Suljetun muodon normaalikäsitelmä (yksi epävarma parametri, konjugaatti
normaali-normaali-malli — yleinen oikotie, ei tarkka kaikille malleille):
EVSI(n) = EVPI × n / (n + n0)

n  = ehdotetun tutkimuksen otoskoko
n0 = "priorin ekvivalentti otoskoko" — kuvitellun otoksen koko, joka sisältäisi
     saman informaation kuin nykyinen priori, johdettu datan varianssin ja
     priorin varianssin suhteesta
ENBS(n) = EVSI(n) − Kustannus(n)
Populaatio-EVSI = EVSI_per_päätös × vaikutuksen_alaiset_päätökset
```

Yleinen muoto on sisäkkäinen odotusarvo, koska tutkimuksen tuleva tulos on itsekin epävarma: on keskiarvoistettava jokaisen mahdollisen aineiston yli, jonka tutkimus voisi tuottaa, ja jokaiselle laskettava uudelleen paras päätös päivitetyn (posteriori-)käsityksen perusteella. Suljetun muodon normaalikäsitelmä vaihtaa tuon laskentakustannuksen yhteen suhteeseen, pätevä kun epävarma parametri ja data ovat (likimain) normaalijakautuneita ja konjugaatteja — mukavuus, ei yleispätevä laki. Täysi sisäkkäinen Monte Carlo on yleiskäyttöinen menetelmä, kun tuo oletus ei päde. Katso [todennäköisyyspohjainen herkkyysanalyysi](../probabilistic-sensitivity-analysis/) PSA-arvonnoista, joista EVSI yleensä estimoidaan.

## Ratkaistu esimerkki

[EVPI](../expected-value-of-perfect-information/):n laskuesimerkin pohjalta — tekoälydokumentointiavustajan käyttöönotto 5 000 kliinikolle, jossa EVPI:ksi saatiin £1,2 M — ilmaistaan sama EVPI tässä kokonaisina puntina: **EVPI = £1 200 000**.

Pöydällä on ehdotettu 50 kliinikon pilottitutkimus. Priorikäsityksen varianssin ja pilotin mittaustarkkuuden suhteesta priorin ekvivalentiksi otoskooksi tulee `n0 = 75`:

```
EVSI(50) = 1 200 000 × 50 / (50 + 75)
         = 1 200 000 × 50 / 125
         = 1 200 000 × 0,4
         = £480 000
```

Pilotti maksaa £120 000:

```
ENBS = EVSI − Kustannus = 480 000 − 120 000 = £360 000
```

Selvästi positiivinen ENBS: rahoita pilotti. Jos sama hankintapäätös toistuu 3 samankaltaisessa alueellisessa trustissa, pilotin arvo skaalautuu:

```
Populaatio-EVSI = 480 000 × 3 = £1 440 000
```

## Yhteys ohjelmistokehitykseen

EVSI on sen valinnan taloutta, *kuinka suuri* pilotin tai A/B-testin tulisi olla, ei vain sitä, ajetaanko sellaista lainkaan:

- **Otoskoko investointipäätöksenä.** 50 käyttäjän beta ja 5 000 käyttäjän vaiheittainen käyttöönotto ovat eri "tutkimuksia" eri EVSI-arvoin ja kustannuksin — EVSI antaa vertailla niitä samalta pohjalta sen sijaan, että oletuksena olisi "enemmän dataa on aina parempi".
- **ENBS, ei pelkkä EVSI, on tilaustesti.** Tutkimus, jolla on korkea EVSI mutta jonka kustannus syö siitä suurimman osan, on heikko ehdotus; päätössääntö on otannan odotettu nettohyöty, aivan kuten liiketoimintaperustelu vähentää hyödystä kustannuksen eikä raportoi pelkkää hyötyä.
- **Laskeva rajahyöty on eksplisiittinen.** Koska EVSI(n) kasvaa arvolla `n/(n+n0)`, pilotin koon kaksinkertaistaminen ei koskaan kaksinkertaista sen arvoa — muodollinen versio insinöörin vaistosta, että suuremmalla kokeella on laskeva rajainformaatioarvo.

## Sudenkuopat

- **Normaalikäsitelmän soveltaminen sen oletusten ulkopuolella.** Se pätee vain likimain konjugaattiselle yhden parametrin epävarmuudelle; aidosti epälineaarinen tai monen parametrin päätösmalli vaatii täyden sisäkkäisen Monte Carlon, ei tätä oikotietä.
- **EVSI:n vertaaminen pelkkiin rahakustannuksiin.** EVSI on punnittava tutkimuksen *koko* kustannusta vastaan, mukaan lukien sen oma päätöksen viivästymisen kustannus — katso [viivästymisen kustannus](../cost-of-delay/) — ei vain tutkimuksen laskua.
- **EVSI > EVPI:n pitäminen todellisena löytönä.** EVSI ei voi rakenteellisesti koskaan ylittää EVPI:tä; laskelma, joka tuottaa tämän, on mallinnusvirhe, ei löytö.

## Lähteet

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
