# Tarvittava seulontamäärä (NNS)

NNS on niiden henkilöiden lukumäärä, jotka on seulottava — ei pelkästään hoidettava — **yhden** haitallisen tapahtuman ehkäisemiseksi määritellyllä seuranta-ajalla, kun otetaan huomioon väestön perusriski ja suhteellinen riskin vähenemä, jonka varhainen havaitseminen ja hoito saavuttavat. Se on NNT:n seulontaohjelmatason vastine: NNT kysyy, kuinka monta on *hoidettava* yhden tapahtuman ehkäisemiseksi; NNS kysyy, kuinka monen on käytävä läpi koko *seulonta-ja-sitten-hoito* -polku sen saavuttamiseksi.

## Miksi se on tärkeä

Rembold esitteli NNS:n vuonna 1998 nimenomaan, jotta seulontaohjelmia voitaisiin verrata samalta pohjalta kuin hoitoja, koska seulontatestin otsikkona oleva suhteellinen riskin vähenemä kätkee kaksi asiaa, joita hoidon ei kätke: seulontaan todella kutsutun väestön perusriskin sekä sen, että kaikki seulotut kantavat testin kustannuksen ja väärien positiivisten taakan, ei vain vähemmistö, joka lopulta hyötyy. Ison-Britannian National Screening Committeen kustannusvaikuttavuusportti (katso [seulonnan talous](../screening-economics/)) perustuu täsmälleen tähän erotteluun — seulontaohjelmalla, jolla on vaikuttava suhteellinen riskin vähenemä matalan perusriskin väestössä, voi silti olla NNS tuhansissa, jolloin ohjelman kustannus per ehkäisty tapahtuma tulee todelliseksi kysymykseksi.

## Matematiikka

```
NNS = 1 / (perusriski × suhteellinen_riskin_vähenemä)

perusriski                   = tapahtuman todennäköisyys seulotussa väestössä
                               seuranta-ajalla (0–1)
suhteellinen_riskin_vähenemä = seulonnan mahdollistaman varhaishoidon
                               saavuttama suhteellinen riskin väheneminen (0–1)

Ohjelman kustannus per ehkäisty tapahtuma = NNS × kustannus_per_seulonta
```

Vertaa suoraan [NNT](../number-needed-to-treat/):hen: NNS laskostaa koko seulonta → diagnoosi → hoito -suppilon tehokkuuden yhteen lukuun, kun NNT jo olettaa, että potilas on diagnosoitu ja aloittamassa hoidon.

## Ratkaistu esimerkki

Seulontaohjelman kohdeväestön perustapahtumariski tutkimusjaksolla on 2 % (`perusriski = 0,02`), ja varhainen havaitseminen saavuttaa 25 %:n suhteellisen riskin vähenemän (`suhteellinen_riskin_vähenemä = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 henkilöä on seulottava yhden tapahtuman ehkäisemiseksi.

£50 per seulonta:
Ohjelman kustannus per ehkäisty tapahtuma = 200 × £50 = £10 000
```

Tuo £10 000 on luku, joka tulisi punnita tapahtuman oman kustannuksen ja sen menettämien QALY-vuosien rinnalla — sama vertailu, jonka [ennaltaehkäisyn talous](../prevention-economics/) tekee ehkäisyohjelmille yleensä.

## Yhteys ohjelmistokehitykseen

NNS on "kuinka monen käyttäjän, tapahtuman tai pyynnön on kuljettava havaitsemis- tai triage-vuon läpi, jotta saadaan kiinni yksi todellinen positiivinen, johon kannattaa reagoida" — suoraan relevantti hälytyspohjaisille valvonta- ja triage-järjestelmille, joissa matalan esiintyvyyden kohdetila paisuttaa NNS:ää samalla tavalla kuin se romahduttaa positiivisen ennustearvon (katso [seulonnan talous](../screening-economics/) ja [kliinisen tekoälyn arviointi](../clinical-ai-evaluation/)). Valvontasääntö, jonka on käsiteltävä 200 tapahtumaa per todellinen osuma, kannattaa ajaa vain, jos osuma on vähintään 200 kertaa tapahtumakohtaisen triage-kustannuksen arvoinen — täsmälleen sama aritmetiikka kuin yllä olevassa terveydenhuollon laskuesimerkissä.

## Sudenkuopat

- **Perusriskiriippuvuuden sivuuttaminen**: sama seulontatesti tai -ohjelma saa hyvin erilaisen NNS:n — ja kustannusvaikuttavuuden — korkean riskin väestössä kuin matalan riskin väestössä. Älä koskaan esitä NNS:ää mainitsematta väestöä, jolle se on laskettu.
- **Väärän nimittäjän laskeminen**: NNS laskee *seulotut* henkilöt, ei testissä positiivisiksi osoittautuneita tai hoidon aloittaneita — se sisältää jo koko suppilon tehokkuuden, joten sitä ei pidä koskaan verrata mittariin, joka on laskettu vain positiivisten yli.
- **Vertailu eri seuranta-aikojen yli**: lyhyempi seuranta-aika paisuttaa yleensä NNS:ää, koska ikkunassa havaitaan vähemmän tapahtumia. NNS-luvut ovat vertailukelpoisia vain, kun ne on laskettu samalle seurannan kestolle.

## Lähteet

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
