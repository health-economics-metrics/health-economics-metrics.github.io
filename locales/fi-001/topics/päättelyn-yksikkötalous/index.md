# Päättelyn yksikkötalous

Päättelyn yksikkötalous mittaa tekoälymallin yksittäisen ennusteen tai generoinnin kustannuksen.

## Miksi se on tärkeä

Koulutuskustannukset ovat kertaluonteisia, mutta päättelykustannukset toistuvat loputtomasti, suhteessa käyttöön.

## Matematiikka

```
Kustannus per päättely = (GPU-tunnin kustannus × käsittelyaika) / pyyntöjen määrä
```

## Ratkaistu esimerkki

Kuvantulkinnan tukimalli: GPU £2/tunti, 1 000 käsittelyä/tunti = £0,002 per tulkinta.

## Yhteys ohjelmistokehitykseen

[Pilven yksikkötalouden](../pilven-yksikkötalous/) tekoälykohtainen tapaus ja keskeinen tekijä [tekoälysijoituksen tuotolle](../tekoälysijoituksen-tuotto/).

## Sudenkuopat

- **Eräkäsittelyalennusten huomiotta jättäminen ja laskeminen yksittäisten pyyntöjen kustannuksilla.**

## Lähteet

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
