# Kustannus-hyötyanalyysi (CBA)

Kustannus-hyötyanalyysi muuntaa sekä kustannukset että hyödyt rahalliseksi arvoksi, mikä mahdollistaa nettonykyarvon laskemisen suoraan.

## Miksi se on tärkeä

CBA mahdollistaa vertailut eri sektoreiden välillä (terveys vastaan koulutus vastaan infrastruktuuri), koska kaikki ilmaistaan samassa yksikössä: rahassa.

## Matematiikka

```
NNA = Σ(t=0 horisonttiin) (Hyödyt_t − Kustannukset_t) / (1+r)^t
```

## Ratkaistu esimerkki

Valtion ennaltaehkäisyohjelma, jonka nykyarvokustannukset ovat £10 miljoonaa ja nykyarvohyödyt (vältetyt terveydenhuoltokustannukset plus tuottavuushyödyt) £15 miljoonaa: NNA = +£5 miljoonaa.

## Yhteys ohjelmistokehitykseen

Muistuttaa alustainvestoinnin perustelemista muuntamalla kaikki hyödyt (nopeus, luotettavuus, vähentyneet häiriöt) arvioiduksi rahalliseksi arvoksi.

## Sudenkuopat

- **Terveysarvon muuntaminen rahaksi kiistanalaisilla oletuksilla ilman niiden mainitsemista.**
- **Ei-markkinahyötyjen (kuten hyvinvoinnin) unohtaminen, joita on vaikea hinnoitella.**

## Lähteet

- HM Treasury, The Green Book.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
