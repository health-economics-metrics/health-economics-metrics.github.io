# Budjettivaikutusanalyysi (BIA)

Budjettivaikutusanalyysi arvioi maksajan menojen nettomuutosta uuden intervention käyttöönotossa riippumatta sen kustannusvaikuttavuudesta.

## Miksi se on tärkeä

Interventio voi olla erittäin kustannustehokas (alhainen £/QALY) mutta silti kohtuuton, koska kokonaisbudjettivaikutus on liian suuri.

## Matematiikka

```
Budjettivaikutus = (Uuden intervention kustannus × odotettu määrä) − (Korvatun intervention kustannus × odotettu määrä)
```

## Ratkaistu esimerkki

Uudella hoidolla, jonka ICER on £15 000/QALY (selvästi kynnyksen alla), on silti £200 miljoonan/vuosi budjettivaikutus suuren potilasväestön vuoksi, mikä edellyttää vaiheittaista käyttöönottoa.

## Yhteys ohjelmistokehitykseen

Muistuttaa arviointia siitä, mahtuuko teknisesti parempi ratkaisu vuotuiseen infrastruktuuribudjettiin riippumatta siitä, onko se paras arkkitehtuuri. Julkaistun budjettivaikutuksen kokonaissumman jakaminen toimipisteille, kohorteille tai tilikausille — niin että osat täsmäävät tarkasti julkaistuun lukuun — on juuri [senttitarkka kustannusten jako](../senttitarkka-kustannusten-jako/); kokonaissummaa alun perin syöttävien lukuisten erien summaaminen on [valuuttaturvallinen kustannusten yhteenveto](../valuuttaturvallinen-kustannusten-yhteenveto/).

## Sudenkuopat

- **Kustannusvaikuttavuuden ja kohtuuhintaisuuden sekoittaminen.**
- **Odotetun määrän aliarviointi laajentuville uusille indikaatioille.**

## Lähteet

- ISPOR, budget impact analysis good practices.
- NICE, budget impact test guidance.
