# Seulonnan talous

Seulonnan talous käsittelee Wilson-Jungner-kriteerejä sille, milloin seulonta on järkevää, ja matematiikkaa sille, miksi ennustearvo romahtaa alhaisella esiintyvyydellä.

## Miksi se on tärkeä

Jopa erittäin tarkka testi tuottaa valtavasti vääriä positiivisia, kun taustalla oleva sairaus on harvinainen, mikä johtaa hälytysväsymykseen ja tarpeettomiin jatkotutkimuksiin.

## Matematiikka

```
Positiivinen ennustearvo (PPV) = (Herkkyys × Esiintyvyys) / [(Herkkyys × Esiintyvyys) + ((1−Spesifisyys) × (1−Esiintyvyys))]
```

## Ratkaistu esimerkki

Testi, jonka herkkyys ja spesifisyys ovat 95 %, sovellettuna sairauteen, jonka esiintyvyys on 0,1 %, saa PPV:n vain noin 2 % — 98 % positiivisista tuloksista on vääriä.

## Yhteys ohjelmistokehitykseen

Suora analogia hälytysväsymykselle valvontajärjestelmissä: erittäin tarkka ilmaisin sovellettuna harvinaiseen tapahtumaan tuottaa silti pääasiassa vääriä hälytyksiä. Koko seulontaohjelman, ei yksittäisen testin, mitoitukseen katso [tarvittava seulontamäärä](../number-needed-to-screen/) — kuinka monen ihmisen on käytävä läpi koko seulonta-ja-hoito -polku yhden tapahtuman ehkäisemiseksi.

## Sudenkuopat

- **Herkkyyden ja spesifisyyden mainitseminen ilmoittamatta esiintyvyyttä.**
- **Wilson-Jungner-kriteerien huomiotta jättäminen ja seulonta ilman tehokasta hoitoa saatavilla.**

## Lähteet

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
