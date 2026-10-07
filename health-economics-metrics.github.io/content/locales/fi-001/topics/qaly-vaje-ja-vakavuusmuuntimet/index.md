# QALY-vaje ja vakavuusmuuntimet

QALY-vaje mittaa, kuinka paljon terveyttä potilasryhmä jo menettää verrattuna normaaliin odotettuun elinikään; vakavuusmuuntimet antavat lisäpainoa terveyshyödyille vakavammin sairaille väestöille.

## Miksi se on tärkeä

Ilman korjausta ICER:n vakiokynnys käsittelee vakavasti sairaan potilaan saavuttamaa QALY:a samalla tavalla kuin lievästi sairaan potilaan saavuttamaa QALY:a.

## Matematiikka

```
Vaje = odotetut terveet QALY:t ilman sairautta − odotetut QALY:t sairauden kanssa
Muunnettu kynnys = perustason kynnys × vakavuuspaino(vaje)
```

## Ratkaistu esimerkki

NICEn vakavuusmuunnin nostaa tehokkaan kynnyksen £30 000/QALY:iin sairauksille, joiden QALY-vaje on 12 tai enemmän, verrattuna vakioalueeseen £20 000–£30 000.

## Yhteys ohjelmistokehitykseen

Muistuttaa korkeamman prioriteetin antamista virheiden korjaamiselle, jotka vaikuttavat eniten kärsineisiin käyttäjiin, vaikka kärsineiden käyttäjien määrä olisi pieni.

## Sudenkuopat

- **Vajeen laskeminen väärällä viiteväestöllä.**
- **Vakavuusmuuntimien soveltaminen jo korjattujen kynnysten päälle, mikä aiheuttaa kaksinkertaista laskentaa.**

## Lähteet

- NICE, health technology evaluations manual (severity modifier).
- Shah KK, et al., severity of illness in health technology assessment.
