# Total eierkostnad (TCO)

TCO er alle kostnader som påløper gjennom hele livssyklusen til et programvaresystem: bygging, drift, vedlikehold og avvikling.

## Hvorfor det er viktig

Å bare se på de opprinnelige byggekostnadene går glipp av skyggen av driftskostnadene.

## Matematikken

```
TCO = kapitalutgifter + Σ(driftskostnader_per år) − restverdi
```

## Gjennomarbeidet eksempel

Et klinisk system med 5 års levetid: bygging £500 000 + drift £150 000/år × 5 = £1 250 000.

## Kobling til programvareutvikling

TCO er grunnlaget for [skyens enhetsøkonomi](../cloud-unit-economics/) og [bygge kontra kjøpe](../build-vs-buy/)-beslutninger. Et flerårig TCO-tall som det ovenfor er en sum av mange kostnadsposter over tid; se [valutasikker kostnadsaggregering](../currency-safe-cost-rollup/) for hvorfor den summen bør være eksakt desimal og ikke flyttall så snart en modell må gå opp på centen, og [eksakt cent-fordeling av kostnader](../exact-cents-cost-allocation/) for å dele en TCO-totalsum på kostnadssteder uten å miste cent.

## Fallgruver

- **Å undervurdere driftskostnadene.**

## Kilder

- Gartner, TCO methodology.
- NHS Digital, total cost of ownership guidance.
