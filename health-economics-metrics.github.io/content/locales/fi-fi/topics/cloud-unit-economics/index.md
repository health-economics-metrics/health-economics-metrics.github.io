# Pilven yksikkötalous

Pilven yksikkötalous mittaa infrastruktuurikustannuksia yksittäistä transaktiota, potilasta tai pyyntöä kohden.

## Miksi se on tärkeä

Pilvilaskut näyttävät kokonaissumman mutta eivät sitä, mikä ominaisuus tai potilaspolku aiheuttaa kustannuksen.

## Matematiikka

```
Yksikkökustannus = pilvikustannus (£/kuukausi) / transaktiomäärä (kuukaudessa)
```

## Ratkaistu esimerkki

Kuvien tallennuspalvelu: £40 000/kuukausi, 200 000 skannausta = £0,20 per skannaus.

## Yhteys ohjelmistokehitykseen

Purkaa [kokonaisomistuskustannuksen](../total-cost-of-ownership/) operatiiviseen mittakaavaan.

## Sudenkuopat

- **Varaushintojen alennusten huomiotta jättäminen ja laskeminen kysyntähinnoilla.**

## Lähteet

- FinOps Foundation, unit economics.
- AWS Well-Architected, cost optimization pillar.
