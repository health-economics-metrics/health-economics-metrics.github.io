# Markov-kohorttisimulaatio

Markov-kohorttimalli on HTA:n vakiomallinnustekniikka interventioille, joiden vaikutukset kehittyvät useiden ajanjaksojen (syklien) aikana eikä yhdellä kertaa. Hypoteettinen kohortti aloittaa kokonaan yhdessä terveystilassa, ja jokaisella syklillä kiinteä joukko siirtymätodennäköisyyksiä siirtää kohortin osuuksia tilojen välillä; kustannukset ja QALY-vuodet kertyvät jokaisella syklillä suhteessa siihen, kuinka suuri osa kohortista on kussakin tilassa, ja ne diskontataan nykyarvoon. Jokainen ohjelmistoinsinööri, joka mallintaa monivuotista digitaalisen terveyden liiketoimintaperustelua — jossa käyttäjät tai potilaat siirtyvät ajan myötä tilojen välillä kuten "sitoutunut", "lakannut" tai "poistunut" — rakentaa samaa rakennetta.

## Miksi se on tärkeä

Useimmat todelliset terveysteknologiapäätökset eivät ole yhden jakson kustannuksen ja tuloksen kertaluonteisia vertailuja. Krooninen sairaus etenee, uusiutuu, reagoi hoitoon tai tappaa vuosien aikana — eikä yhden jakson [kustannusvaikuttavuusanalyysi](../cost-effectiveness-analysis/) voi esittää sitä. NICE-, ICER- ja CADTH-hakemukset kroonisten sairauksien interventioille, arvioituna [terveysteknologian arvioinnin](../health-technology-assessment/) kautta, on lähes aina rakennettu Markov-kohorttimalleina elinikäisellä aikahorisontilla, koska vaihtoehto — jokaisen mahdollisen yksilöllisen potilaspolun mallintaminen — on laajassa mittakaavassa mahdoton. Kohorttitason Markov-malli vaihtaa osan yksilötason realismista (se ei helposti esitä muistia aiemmista tiloista, siksi "Markov": tulevaisuus riippuu vain nykyisestä tilasta) malliin, joka on läpinäkyvä, tarkastettava ja riittävän nopea ajettavaksi tuhansia kertoja [todennäköisyyspohjaisessa herkkyysanalyysissä](../probabilistic-sensitivity-analysis/).

## Matematiikka

```
Yhden syklin kohortin päivitys (rivivektori × siirtymämatriisi):
  uusi_tila[j] = summa_i tila[i] * siirtymämatriisi[i][j]

Yhden syklin kustannus:
  syklin_kustannus = summa_s tila[s] * kustannus_per_sykli[s]

Yhden syklin QALY-vuodet:
  syklin_qaly = summa_s tila[s] * hyötypaino[s] * syklin_pituus_vuosia

Täysi simulaatio `syklit` syklin yli, diskontattuna `diskonttokorolla`:
  diskontatut_kustannukset_yhteensä = summa_{t=0}^{syklit-1} syklin_kustannus(tila_t) / (1 + diskonttokorko)^t
  diskontatut_qaly_yhteensä         = summa_{t=0}^{syklit-1} syklin_qaly(tila_t)      / (1 + diskonttokorko)^t
  missä tila_0 = alkujakauma, tila_{t+1} = etene_kohortti(tila_t, siirtymämatriisi)
```

Kunkin syklin diskonttaus nykyarvoon käyttää täsmälleen [diskonttauksen ja aikapreferenssin](../discounting-and-time-preference/) kaavaa, sovellettuna sykli kerrallaan vuosi kerrallaan -sijaan.

## Ratkaistu esimerkki

**Kliininen**: 2 tilan malli — `Terve` ja `Kuollut` — jossa 10 % kohortista kuolee jokaisella syklillä ja `Kuollut` on absorboiva (sen itsesiirtymätodennäköisyys on 1,0; jos tuo silmukka jätettäisiin pois, kohortin massa katoaisi yhden syklin jälkeen tilassa `Kuollut`). Kohortti aloittaa kokonaan tilassa `Terve`, maksaa £1 000 per sykli ollessaan `Terve` (£0 kun `Kuollut`) ja tuottaa 0,8 QALY-vuotta vuodessa ollessaan `Terve`. Simuloituna 3 vuosisyklillä NICEn 3,5 %:n diskonttokorolla:

```
Sykli 0: tila = [1,00, 0,00] (100 % Terve)
  kustannus = £1 000,00, qaly = 0,800, diskonttokerroin = 1,000000
  diskontattu: kustannus = £1 000,00, qaly = 0,8000

Sykli 1: tila = [0,90, 0,10] (90 % Terve, 10 % Kuollut)
  kustannus = £900,00, qaly = 0,720, diskonttokerroin = 0,966184
  diskontattu: kustannus = £869,57, qaly = 0,6957

Sykli 2: tila = [0,81, 0,19] (81 % Terve, 19 % Kuollut)
  kustannus = £810,00, qaly = 0,648, diskonttokerroin = 0,933511
  diskontattu: kustannus = £756,14, qaly = 0,6049

Diskontatut kustannukset yhteensä ≈ £2 625,71
Diskontatut QALY-vuodet yhteensä  ≈ 2,1006
```

Kunkin syklin tila on edellisen syklin tila kuljetettuna siirtymämatriisin läpi — 90 % siitä 90 %:sta, joka on syklillä 1 vielä `Terve`, pysyy `Terve`-tilassa syklillä 2 (0,9 × 0,9 = 0,81), kun taas muut 19 % ovat nyt kuolleet (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Huomaa, ettei kohortti koskaan tyhjennä `Terve`-tilaa kokonaan: vakiona pysyvällä 10 %:n kuolleisuudella per sykli ja ilman uudelleenpääsyä `Terve`-osuus pienenee geometrisesti sen sijaan, että se saavuttaisi nollan millään äärellisellä syklimäärällä.

## Yhteys ohjelmistokehitykseen

Siitä, miten monisyklinen HTA-malli käytetään todellisessa arvioinnissa, katso [terveysteknologian arviointi](../health-technology-assessment/) — vertailutapaus, joka määrää, mitä diskonttokorkoa, hyötypainon lähdettä ja aikahorisonttia toimitetun Markov-mallin on käytettävä.

Markov-kohorttimalli on rakenteeltaan tilakone todennäköisyyspohjaisin siirtymin, ajettuna kiinteän määrän tikkejä ja diskontaten kunkin tikin arvon. Sama muoto simuloi käyttäjäkohortin pysyvyyttä/tilasiirtymiä ajan yli — katso [DORA-mittarit](../dora-metrics/) toiminnallisen luotettavuuden versiosta kysymykseen "kuinka suuri osa järjestelmästä on tällä jaksolla heikentyneessä tilassa, ja mitä se maksaa". Konkreettisesti:

- **Pysyvyyden/poistuman mallinnus** on Markov-kohorttimalli tiloilla kuten "aktiivinen", "riskissä", "poistunut": kiinteä kuukausittainen siirtymämatriisi, ajettuna 12 tai 24 kuukausisyklin yli, kertoo odotetun aktiivisten käyttäjien määrän (ja tuoton) missä tahansa tulevassa kuussa, samalla tavalla kuin `Terve`/`Kuollut` kertoo odotetut eloonjääneet.
- **Luotettavuus ja häiriötalous**: järjestelmän tiloja (terve, heikentynyt, alhaalla) voi mallintaa samoin, "kustannus per sykli" -haitalla, joka kertyy järjestelmän ollessa heikentyneissä/alhaalla-tiloissa — muuttaen häiriöiden esiintymistiheyttä koskevan argumentin diskontatuksi kustannusargumentiksi, joka on vertailtavissa luotettavuustyön kustannukseen, joka muuttaisi siirtymätodennäköisyyksiä.
- **Absorboivat tilat päätetiloina**: `Kuollut` kliinisessä mallissa vastaa täsmälleen "peruttu tilaus" tai "pysyvästi offline" -tilaa ohjelmistomallissa — molemmat tarvitsevat eksplisiittisen itsesiirtymätodennäköisyyden 1,0, tai simulaatio menettää hiljaa massaa.

## Sudenkuopat

- **Siirtymätodennäköisyydet, jotka eivät summaudu 1:een riviä kohti.** Rivi, jonka summa on yli tai alle 1, saa kohortin hiljaa "vuotamaan" tai "kasvamaan" massaa jokaisella syklillä — tarkista aina rivisummat ennen kuin luotat mallin tulokseen, koska mallin rakenne itsessään ei liputa virhettä.
- **Syklin pituus liian karkea sairauden todelliseen dynamiikkaan nähden.** Vuosisykli tilalle, joka muuttuu merkittävästi viikoissa, aliarvioi syklin keskellä tapahtuvia siirtymiä; valitse syklin pituus, joka on lyhyt suhteessa siihen, kuinka nopeasti mallinnettu prosessi todella liikkuu.
- **Absorboivan tilan itsesilmukan unohtaminen.** Absorboiva tila (kuolema, pysyvä lopettaminen) tarvitsee itsesiirtymätodennäköisyyden täsmälleen 1,0. Jos se jätetään pois, kohortin massa tuossa tilassa haihtuu yhden syklin jälkeen ja aliarvioi kumulatiiviset kustannukset tai QALY-menetyksen.
- **Mallin pitäminen validoituna, koska se ajaa.** Markov-kohorttimalli uskottavan näköisin siirtymätodennäköisyyksin voi silti olla rakenteellisesti väärä (puuttuvia tiloja, väärä absorboiva käyttäytyminen); validoi tunnettuja epidemiologisia vertailuarvoja vastaan (esim. vastaako mallinnettu 5 vuoden eloonjääminen julkaistuja eloonjäämiskäyriä) ennen kuin luotat tulokseen.

## Lähteet

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
