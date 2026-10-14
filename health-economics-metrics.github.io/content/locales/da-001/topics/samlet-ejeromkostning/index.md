# Samlet ejeromkostning (TCO)

TCO er alle omkostninger, der påløber gennem hele softwaresystemets livscyklus: opbygning, drift, vedligeholdelse og udfasning.

## Hvorfor det er vigtigt

Kun at se på de indledende opbygningsomkostninger overser skyggen af driftsomkostningerne.

## Matematikken

```
TCO = kapitaludgifter + Σ(driftsomkostninger_pr. år) − restværdi
```

## Gennemarbejdet eksempel

Et klinisk system med 5 års levetid: opbygning £500.000 + drift £150.000/år × 5 = £1.250.000.

## Forbindelse til softwareudvikling

TCO er grundlaget for [skyens enhedsøkonomi](../skyens-enhedsøkonomi/) og [bygge kontra købe](../bygge-kontra-købe/)-beslutninger. Et flerårigt TCO-tal som det ovenstående er en sum af mange omkostningsposter over tid — se [valutasikker omkostningsaggregering](../valutasikker-omkostningsaggregering/) for hvorfor den sum bør være eksakt decimal frem for flydende komma, så snart en model skal stemme af til øre, og [cent-præcis omkostningsfordeling](../cent-præcis-omkostningsfordeling/) for at fordele en TCO-total på omkostningssteder uden at miste øre.

## Faldgruber

- **At undervurdere driftsomkostningerne.**

## Kilder

- Gartner, TCO methodology.
- NHS Digital, total cost of ownership guidance.
