# Netto pengeværdi (NMB)

Netto pengeværdi omregner sundhedsgevinst til penge ved tærskelværdien og trækker omkostningerne fra, hvilket gør det muligt at rangere interventioner med ét tal.

## Hvorfor det er vigtigt

I modsætning til ICER er NMB lineær, hvilket gør statistisk analyse (gennemsnit, konfidensintervaller) meget enklere.

## Matematikken

```
NMB = (Effekt × tærskelværdi) − Omkostning
```

## Gennemarbejdet eksempel

En intervention giver 0,3 QALY til en omkostning på £4.000, tærskel £20.000/QALY: NMB = (0,3 × £20.000) − £4.000 = £2.000 (positiv = omkostningseffektiv).

## Forbindelse til softwareudvikling

Ligner det at omregne flere effektdimensioner (hastighed, pålidelighed, funktioner) til én sammensat værdiscore til prioritering.

## Faldgruber

- **At bruge den forkerte tærskelværdi ved beregning af NMB.**
- **At sammenligne NMB mellem undersøgelser, der brugte forskellige tærskler.**

## Kilder

- Stinnett AA, Mullahy J, "Net health benefits: a new framework."
- NICE DSU Technical Support Documents.
