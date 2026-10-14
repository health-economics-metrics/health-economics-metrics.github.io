# Väestön attribuoitava osuus (PAF)

PAF on se osuus sairauden tai tapahtuman taakasta väestössä, joka on attribuoitavissa tietylle riskitekijäaltistukselle — osuus, joka katoaisi, jos altistus poistettaisiin kokonaan. Se muuttaa väitteen "tämä riskitekijä kaksinkertaistaa todennäköisyytesi" väestötason luvuksi, jonka varassa tilaaja voi todella suunnitella: kuinka monta tapausta ja kuinka paljon kustannuksia tietty altistus on todella arvoinen torjuttavaksi.

## Miksi se on tärkeä

Levin esitteli PAF:n vuonna 1953 vastaamaan kapeaan, konkreettiseen kysymykseen: jos kukaan ei tupakoisi, kuinka paljon keuhkosyöpää katoaisi? Sama aritmetiikka mitoittaa nykyään kansallista ennaltaehkäisyn suunnittelua kaikkialla tupakka- ja lihavuusstrategioista WHO:n Global Burden of Disease -tutkimuksen riskitekijäsijoituksiin, koska suhteellinen riski yksinään ei kerro mitään vaikutuksesta — riskitekijä voi kaksinkertaistaa harvinaisen tapahtuman todennäköisyyden ja liikuttaa väestön tautitaakkaa tuskin lainkaan, tai nostaa yleisen tapahtuman todennäköisyyttä vain vähän ja silti selittää valtavan osuuden tapauksista. PAF on se, joka muuttaa väitteen "riskitekijä X on vaarallinen" väitteeksi "riskitekijä X:n poistaminen ehkäisisi näin monta tapausta vuodessa" — luvuksi, jota ehkäisyohjelman liiketoimintaperustelu todella tarvitsee. Katso [ennaltaehkäisyn talous](../ennaltaehkäisyn-talous/), mitä tuohon lukuun toimiminen maksaa, kun se on käsillä.

## Matematiikka

```
PAF = altistuneiden_esiintyvyys × (suhteellinen_riski − 1) / (1 + altistuneiden_esiintyvyys × (suhteellinen_riski − 1))

altistuneiden_esiintyvyys = riskitekijälle altistuneen väestön osuus (0–1)
suhteellinen_riski        = tapahtuman riski altistuneilla vs. altistumattomilla (esim. 2,5 = 2,5×)

Attribuoitavat tapaukset = tapaukset_yhteensä × PAF
```

PAF kasvaa sekä altistuksen esiintyvyyden että suhteellisen riskin mukana — kohtalaisesti koholla oleva suhteellinen riski (esim. 1,5×) hyvin yleiseen altistukseen liittyen voi tuottaa suuremman PAF:n kuin dramaattinen suhteellinen riski (esim. 5×) harvinaiseen altistukseen liittyen. Juuri siksi se on olemassa omana lukunaan suhteellisen riskin rinnalla.

## Ratkaistu esimerkki

Riskitekijä on läsnä 30 %:lla väestöstä (`altistuneiden_esiintyvyys = 0,3`) ja nostaa tapahtuman riskin 2,5-kertaiseksi (`suhteellinen_riski = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Kun väestössä on 1 000 tapausta/vuosi:
Attribuoitavat tapaukset = 1 000 × 0,3103 ≈ 310 tapausta/vuosi
```

Hieman alle kolmannes tämän tapahtuman vuotuisesta taakasta on attribuoitavissa altistukselle — sen täydellinen poistaminen (teoreettinen katto; mikään todellinen interventio ei saavuta 100 %:n altistuksen poistoa) ehkäisisi noin 310 tapausta 1 000:sta joka vuosi.

## Yhteys ohjelmistokehitykseen

PAF on epidemiologinen versio kysymyksestä "kuinka suuri osa häiriömäärästämme on attribuoitavissa tähän yhteen juurisyyhyn?" — samanmuotoinen kysymys, jonka tiimit esittävät mitoittaessaan tietyn käyttöönottojen tai riippuvuuksien luokan koko tuotantohäiriöiden joukkoon nähden sen sijaan, että kohtelisivat jokaista häiriötä yhtä korjaamisen arvoisena samalla tavalla. Juurisyykategoria, joka on läsnä suuressa osassa käyttöönottoja ja jolla on vain kohtalainen suhteellinen häiriöriski, voi ohittaa harvinaisen, korkean suhteellisen riskin kategorian siinä, mihin insinöörityö kannattaa kohdistaa ensin — täsmälleen PAF:n oivallus, käännettynä.

## Sudenkuopat

- **PAF-arvojen summaaminen riskitekijöiden yli**: samaan tapahtumaan vaikuttavien useiden tekijöiden PAF-arvot eivät summaudu 100 %:iin — ne voivat ylittää sen yhteensä, koska tekijät vuorovaikuttavat ja jakavat kausaalireittejä. Kohtele kutakin PAF:ia lauseena "jos tämä tekijä yksin poistettaisiin", älä koskaan kokonaisriskin jakona.
- **Suhteellisen riskin siirtäminen väestöstä toiseen**: yhdessä väestössä estimoitu suhteellinen riski (eri perusaltistusesiintyvyys, eri sekoittavat tekijät) laskee harhaanjohtavan PAF:n, kun sitä sovelletaan toisen väestön altistuksen esiintyvyyteen.
- **PAF:n sekoittaminen altistuneiden attribuoitavaan riskiin**: PAF on väestötasoinen ja riippuu altistuksen esiintyvyydestä; altistuneiden attribuoitava riski on yksilötasoinen eikä riipu. Ne vastaavat eri kysymyksiin — älä lainaa toista vastataksesi toiseen.

## Lähteet

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
