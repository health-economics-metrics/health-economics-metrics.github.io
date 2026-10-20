# Lähete hoitoon (RTT)

RTT mittaa aikaa ensimmäisestä lähetteestä hoidon aloittamiseen, 18 viikon standardin ollessa tärkein kansallinen suorituskykymittari.

## Miksi se on tärkeä

RTT on pohjimmiltaan toimituksen läpimenoaikamittari sovellettuna potilashoitoon — kuinka kauan kestää toimittaa arvo (hoito) pyynnön (lähetteen) jälkeen.

## Matematiikka

```
RTT-noudattaminen = 18 viikon sisällä hoidettujen potilaiden määrä / RTT-jonossa olevien potilaiden kokonaismäärä × 100 %
```

## Ratkaistu esimerkki

Erikoisala, jolla on 5 000 potilasta RTT-polulla, joista 4 100 hoidetaan 18 viikon sisällä: noudattaminen 82 %, kansallisen 92 %:n standardin alapuolella.

## Yhteys ohjelmistokehitykseen

Suora analogia [DORA-läpimenoajalle](../dora-mittarit/) — aika commitista (lähete) toimitukseen (hoito).

## Sudenkuopat

- **Kellon pysäytysten (potilasaloite) virheellinen soveltaminen noudattamislukujen vääristämiseksi.**
- **Vain keskiarvon tarkastelu, kun jakauman häntä on todellinen ongelma.**

## Lähteet

- NHS England, referral to treatment statistics.
- NHS Digital, RTT data quality guidance.
