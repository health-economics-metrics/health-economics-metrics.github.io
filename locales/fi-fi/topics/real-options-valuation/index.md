# Reaalioptioiden arvostus

Reaalioptioiden arvostus soveltaa rahoitusoptioiden hinnoittelun logiikkaa reaalisiin (ei rahoitusmarkkinoilla toteutuviin) investointipäätöksiin — erityisesti *laajennusoptioon*, eli mahdollisuuteen laajentaa hanketta myöhemmin, jos se onnistuu, ilman velvollisuutta tehdä niin. Yksinkertaistettu yksijaksoinen binomimalli (Cox, Ross, Rubinstein, 1979) arvottaa tämän joustavuuden suoraan, muuttaen "toimitetaan pienenä ja katsotaan" aavistuksesta hinnoitelluksi luvuksi.

## Miksi se on tärkeä

Staattinen nykyarvolaskelma hinnoittelee hankkeen kaikki-tai-ei-mitään-vedonlyöntinä: rahoita tai älä, nykyisessä mittakaavassa, ikuisesti. Todellisia hankkeita — ja erityisesti vaiheittaisia digitaalisen terveyden käyttöönottoja — harvoin lyödään vetoa näin: terveysjärjestelmä voi rahoittaa pienen pilotin, katsoa mitä tapahtuu ja sitoutua lisärahaan vasta, jos se toimii. Tällä joustavuudella on todellinen arvo, ja sen sivuuttaminen aliarvioi järjestelmällisesti vaiheittaiset investoinnit kertaluonteisiin verrattuna, mikä on täsmälleen väärin päin hankintaprosesseille, jotka palkitsevat turvallisemmalta näyttävän vaiheittaisen ehdotuksen. Reaalioptioiden arvostus hinnoittelee joustavuuden itsensä, jotta vaiheittaista ehdotusta voidaan verrata reilusti täyden sitoutumisen vaihtoehtoon sen sijaan, että sitä rangaistaan siitä, että se näyttää pienemmältä naiivilla nykyarvorivillä.

## Matematiikka

```
"Ylös"-tilan riskineutraali todennäköisyys:
  p = ((1 + riskitön_korko) − alas_kerroin) / (ylös_kerroin − alas_kerroin)

Laajennuksen tuotto kussakin tilassa (rajattu nollaan — laajentaminen on valinnaista):
  tuotto_ylös = max(hankkeen_arvo × ylös_kerroin − laajennuskustannus, 0)
  tuotto_alas = max(hankkeen_arvo × alas_kerroin − laajennuskustannus, 0)

Option arvo (diskontattu odotettu tuotto):
  option_arvo = (p × tuotto_ylös + (1 − p) × tuotto_alas) / (1 + riskitön_korko)

Laajennettu nykyarvo = staattinen_nykyarvo + option_arvo
```

Hankkeen arvo joko nousee (`ylös_kerroin`) tai laskee (`alas_kerroin`) seuraavaan päätöspisteeseen mennessä. Laajennus toteutetaan vain, jos se on kannattavaa kyseisessä tilassa — tuoton rajaus nollaan tekee tästä aidon *option* velvoitteen sijaan. Option hinnoitteluun tiedon keräämiseksi ensin, laajentamisen sijaan myöhemmin, katso [täydellisen tiedon odotusarvo](../expected-value-of-perfect-information/). Tuon päätöksen odottamisen kustannuksesta katso [viivästymisen kustannus](../cost-of-delay/).

## Ratkaistu esimerkki

Digitaalisen palvelun pilotti, jonka `hankkeen_arvo = £1 000 000`, mahdollinen nousu 1,5-kertaiseksi tai lasku 0,5-kertaiseksi seuraavaan päätöspisteeseen mennessä, riskitön korko 8 % ja laajennuskustannus £600 000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

tuotto_ylös = max(1 000 000 × 1,5 − 600 000, 0) =  900 000
tuotto_alas = max(1 000 000 × 0,5 − 600 000, 0) = max(−100 000, 0) = 0

Rajauksella on merkitystä: optiota EI toteutettaisi, jos markkinat
pettävät — £600 000 laajennuskustannus ylittää £500 000, jonka arvoinen
hanke olisi alas-tilassa.

option_arvo = (0,58 × 900 000 + 0,42 × 0) / 1,08
            = 522 000 / 1,08
            ≈ £483 333,33
```

Lisättäessä option arvo £200 000 staattiseen nykyarvolähtötasoon: laajennettu nykyarvo = 200 000 + 483 333,33 ≈ **£683 333,33**. Pelkän £200 000 staattisen nykyarvon raportoiminen ilman tätä option arvoa aliarvioisi vaiheittaisen hankkeen todellisen arvon yli kaksinkertaisesti.

## Yhteys ohjelmistokehitykseen

Tämä on muodollinen versio lauseesta "toimita minimiversio nyt, pidä optio sijoittaa lisää, jos se lähtee lentoon" — suoraan relevantti digitaalisen terveystuotteen vaiheittaiselle käyttöönotolle, rakenteellisesti rinnakkainen [viivästymisen kustannuksen](../cost-of-delay/) ja [WSJF/CD3](../wsjf-and-cd3/):n epävarmuudessa tapahtuvan järjestämisen kehyksen kanssa, ja täydentää [täydellisen tiedon odotusarvoa](../expected-value-of-perfect-information/) sekä [otostiedon odotusarvoa](../expected-value-of-sample-information/) — kaikki kolme hinnoittelevat joustavuutta tai tietoa epävarmuuden vallitessa, eri näkökulmista.

## Sudenkuopat

- **Riskineutraalin hinnoittelun lainaaminen ilman kaupattavan omaisuuserän oletusta, johon se nojaa**: reaalioptiomallit lainaavat riskineutraalin todennäköisyyden rahoitusoptioiden hinnoittelusta, joka olettaa taustalla olevan arvon olevan *kaupattu* omaisuuserä — aidosti kaupattomalle reaaliselle hankkeelle tämä on mallinnuksen mukavuus, ei kirjaimellinen markkinatosiasia.
- **`ylös_kerroin`/`alas_kerroin` -arvojen käsitteleminen vapaina parametreina**: binomin ylös/alas-syötteet ovat itse oletuksia, jotka vaativat perustelun, eivät toivotun vastauksen tuottamiseksi valittuja vapaita parametreja.
- **Pelkän option arvon raportoiminen**: reaalioption arvo on *additiivinen* itsenäisen hankkeen staattiselle nykyarvolle — yleinen virhe on raportoida vain option arvo ja pudottaa perustapaus, mikä yliarvioi tapausta, jos staattinen nykyarvo on negatiivinen, ja aliarvioi sitä (kuten yllä olevassa esimerkissä), kun staattinen nykyarvo jätetään kokonaan pois.

## Lähteet

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — sitoo reaalioptiot suoraan terveystalouden päätöskontekstiin. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
