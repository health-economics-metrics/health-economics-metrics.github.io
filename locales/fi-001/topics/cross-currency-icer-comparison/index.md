# ICER-vertailu valuuttojen yli

Yhden maan valuutassa laskettua [ICER](../incremental-cost-effectiveness-ratio/)-arvoa verrattaessa toisen maan [maksuhalukkuuskynnykseen](../willingness-to-pay-thresholds/) — tai yhdistettäessä monikansallisessa kokeessa kerättyjä kustannustietoja — tarvitaan eksplisiittinen, jäljitettävä valuutanmuunnosvaihe. Jos muunnosmenetelmä valitaan väärin, sama taustalla oleva näyttö voi kääntää käyttöönottopäätöksen, vaikka kliinisissä tai kustannustiedoissa ei ole muuttunut mikään.

## Miksi se on tärkeä

ISPORin monikansallisten kliinisten kokeiden menetelmäohjeistus (Willke ym., *Health Economics*, 1998) suosittaa resurssikustannusten muuntamista **ostovoimapariteetilla (PPP)** — ei markkinavaihtokursseilla — kun verrataan resurssien todellista taloudellista arvoa maiden välillä, ja markkinavaluuttakurssien varaamista siihen, mihin ne todella on tarkoitettu: todellisten rajat ylittävien käteismaksuvirtojen mallintamiseen. Näiden sekoittaminen on yksi yleisimmistä monikansallisen HTA:n menetelmävirheistä juuri siksi, että kumpikin näyttää "valuuttakurssilta" sille, joka ei ole lukenut ohjeistusta, eikä taulukkolaskenta estä tekemästä sitä väärin.

## Matematiikka

```
icer_paikallisessa_valuutassa = muunna(icer_lähdevaluutassa, muunnoskerroin)

muunnoskertoimen tulisi olla:
  PPP-muunnoskerroin       — resurssien todellisen taloudellisen arvon
                              vertailuun maiden välillä (ISPORin suosittama
                              monikansalliseen CEA:han)
  markkinavaihtokurssi     — vain todellisiin rajat ylittäviin käteismaksuihin

ota käyttöön, jos icer_paikallisessa_valuutassa < paikallinen_kynnys
```

Päätössääntö itse on tavanomainen [ICER-kynnyssääntö](../willingness-to-pay-thresholds/) — `ota käyttöön, jos ICER < λ` — tämän aiheen menetelmäkysymys koskee kokonaan sitä, *mikä muunnoskerroin* tuottaa sen `icer_paikallisessa_valuutassa`-luvun, johon sääntöä sovelletaan.

## Ratkaistu esimerkki

Lääkkeen ICER yhdysvaltalaisesta kokeesta on $45 000/QALY. Hypoteettinen tuontimaa asettaa oman havainnollistavan kynnyksensä tasolle £34 000/QALY (hypoteettinen maakohtainen luku vain tätä esimerkkiä varten — todelliset kynnykset vaihtelevat maittain ja muuttuvat ajan myötä, ja ne on aina lähteistettävä ja päivättävä).

**PPP-muunnoskertoimella 0,72** (havainnollistava, vain tätä laskuesimerkkiä varten): $45 000 × 0,72 = £32 400/QALY. £32 400 < £34 000 → **ota käyttöön**.

**Markkinavaihtokurssilla 0,79** sen sijaan (havainnollistava): $45 000 × 0,79 = £35 550/QALY. £35 550 > £34 000 → **hylkää**.

Sama taustalla oleva ICER $45 000/QALY tuottaa käyttöönottopäätöksen PPP-muunnoksella ja hylkäyspäätöksen markkinakurssimuunnoksella. Tämä on konkreettinen esimerkki siitä, miksi ISPORin ohjeistus pitää muunnoskertoimen valintaa menetelmällisesti merkittävänä — ei pyöristysyksityiskohtana eikä jonakin, mikä jätetään implisiittiseksi taulukkolaskentakaavaan, jota kukaan ei tarkista.

## Yhteys ohjelmistokehitykseen

Tämä on terveystalouden vastine tunnetulle insinöörialueelle: i18n/l10n-monivaluuttahinnoittelun oikeellisuus kaupallisissa ohjelmistoissa, joissa SaaS-hinnoittelusivu ei saa koskaan hiljaa verrata `$`-summaa `£`-hintaan. Se tyyppitason takuu, jonka hyvin rakennettu `Money`-tyyppi antaa — vertailumetodit, jotka kieltäytyvät vertaamasta eri valuuttoja ja pakottavat ensin eksplisiittisen muunnosvaiheen — on suora ohjelmistotekninen vastine terveystalouden menetelmäkohdalle tässä: älä vertaa muuntamattomia lukuja valuuttojen yli, äläkä anna muunnosvaiheen olla implisiittinen tai dokumentoimaton.

## Sudenkuopat

- **Eri valuuttojen summien hiljainen vertailu**: ad hoc -HTA-työ taulukoissa, joka vähentää tai vertaa dollarilukua ja puntalukua ilman muunnosvaihetta — virheluokka, jonka todellinen valuuttatietoinen `Money`-tyyppi pysäyttää rakenteellisesti sen sijaan, että se jäisi hiljaiseksi virheeksi.
- **Markkinavaihtokurssin sekoittaminen PPP:hen**: ISPORin ohjeistuksen mukaan monikansallisen HTA:n yleisin menetelmävirhe — luvut voivat poiketa merkittävästi ja vastaavat eri kysymyksiin (todellinen taloudellinen arvo vs. todellinen rahavirta).
- **Käytetyn valuuttakurssin tai PPP-indeksin päivämäärän jättäminen ilmoittamatta**: molemmat liikkuvat ajan myötä, joten jokainen lainattu muunnoskerroin on päivättävä samalla tavalla kuin tämä arkisto päivää muut vertailulukunsa (Green Bookin hiilen arvot, ehkäistyn kuoleman arvo ja niin edelleen).

## Lähteet

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
