# Vaihtoehtoiskustannus

Vaihtoehtoiskustannus on parhaan vaihtoehdon arvo, josta luovut sitoessasi resurssin. Terveydenhuoltojärjestelmässä, jolla on kiinteä budjetti, £1 miljoonan käyttäminen yhteen asiaan tarkoittaa, että £1 miljoonaa terveyttä *ei* tuoteta jossain muualla.

## Miksi se on tärkeä

Vaihtoehtoiskustannus on terveystaloustieteen syvällisin idea, ja se, jonka ohjelmistoinsinöörit useimmiten ohittavat. Terveysbudjetit ovat kiinteitä minä tahansa vuonna, joten uutta teknologiaa ei koskaan rahoiteta "ylimääräisellä" rahalla — se syrjäyttää jotain muuta.

## Matematiikka

```
Vaihtoehdon A valinnan vaihtoehtoiskustannus = parhaan hylätyn vaihtoehdon B arvo
A:n nettohyöty = arvo(A) − arvo(B)
```

Claxton ym. (2015) arvioivat, että NHS tuottaa yhden QALY:n noin **£13 000:lla** rajalla.

## Ratkaistu esimerkki

Muutosbudjetti voi rahoittaa täsmälleen yhden: sähköisen työvuorosuunnitteluohjelmiston (säästää £400 000/vuosi) tai kotiutuksen koordinointiohjelmiston (säästää 2 000 vuodepäivää/vuosi ≈ £300 000/vuosi). Vaihtoehdon A vaihtoehtoiskustannus on vaihtoehdon B £300 000.

## Yhteys ohjelmistokehitykseen

Insinöörikapasiteetti on myös kiinteä budjetti — tiekarttapaikkoja, ei puntia. Alustatiimi, joka rahoittaa työkalun A, joka säästää insinööritunteja £500/tunti hintaan, kun työkalu B toimittaa saman £200/tunti hintaan, tuhoaa kapasiteettia.

## Sudenkuopat

- **Vertaaminen tyhjään.** Oikea vertailukohta on rahan seuraavaksi paras käyttö.
- **Oletus, että säästetyllä ajalla ei ole vaihtoehtoiskustannusta.**
- **Sen sivuuttaminen, mikä menetelmä arvottaa syrjäytetyn resurssin.** Erityisesti menetetylle tuottavuudelle — sairauden, vamman tai lähtevän työntekijän vuoksi — katso [inhimillisen pääoman menetelmä vs. kitkakustannusmenetelmä](../inhimillisen-pääoman-menetelmä-vs-kitkakustannusmenetelmä/), tämän ajatuksen tuottavuuskustannuskohtainen versio.

## Lähteet

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14).
- York Health Economics Consortium glossary.
