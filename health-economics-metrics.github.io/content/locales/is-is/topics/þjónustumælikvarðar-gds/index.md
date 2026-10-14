# Þjónustumælikvarðar GDS

Service Manual hjá bresku Government Digital Service (GDS) skyldar fjóra KPI fyrir hverja stafræna þjónustu hins opinbera: **kostnað á færslu, ánægju notenda, lokahlutfall og stafræna upptöku**. Saman eru þeir lágmarkshagfræði opinberrar stafrænnar þjónustu — og sniðmátið sem stafræn þjónusta NHS erfir.

## Hvers vegna það skiptir máli

GDS-mælikvarðarnir fela í sér viðskiptarökin um rásafærslu sem fjármögnuðu áratug af stafrænni umbreytingu hins opinbera: Digital Efficiency Report fann stafrænar færslur ~20× ódýrari en síma og ~50× ódýrari en augliti til auglitis (tölur sveitarstjórna: vefur 0,15 £, sími 2,83 £, augliti til auglitis 8,62 £). En sparnaðurinn kemur aðeins fram þegar fólk *lýkur* stafrænu ferðinni (lokahlutfall) *í stað* dýru rásarinnar (upptaka) — KPI-arnir fjórir eru eitt hagfræðilíkan, ekki fjögur mælaborð.

## Stærðfræðin

```
Kostnaður á færslu   = heildarkostnaður þjónustu / lokar færslur
Lokahlutfall         = lokið / hafnar færslur × 100
Stafræn upptaka      = stafrænar færslur / færslur í öllum rásum × 100
Ánægja notenda       = % ánægðir+mjög ánægðir (5 þrep, könnun í þjónustu)

Sparnaður vegna rásafærslu = umfang × breyting á upptöku × (kostnaður_gömul_rás − kostnaður_stafrænt)
… að frádreginni bilunareftirspurn: (1 − lokahlutfall) × kostnaður varaleiðar
```

## Dæmi útreiknað

Tímabókunarþjónusta NHS: 2 m. færslur á ári, nú 70% sími (3,20 £/símtal) / 30% stafrænt (0,25 £). Endurhönnun eykur stafræna upptöku í 55% og lokahlutfall úr 84% í 93%:

```
Sparnaður vegna færslu upptöku = 2 m. × 0,25 × (3,20 − 0,25) = 1.475.000 £/ár

Sparnaður bilunareftirspurnar: misheppnaðar stafrænar ferðir falla aftur á síma
  áður:  2 m. × 0,30 × 0,16 × 3,20 £ = 307.200 £
  eftir: 2 m. × 0,55 × 0,07 × 3,20 £ = 246.400 £
  nettó 60.800 £/ár — umbætur á lokum vernda ávinning upptökunnar

Ánægja er leiðandi vísir: óánægðir notendur snúa aftur í síma,
svo fall í ánægju spáir rýrnun upptöku áður en hún birtist.
```

## Tengsl við hugbúnaðarverkfræði

Þessir fjórir KPI eru framleiðsluhæft dæmi um [kostnaðar-afleiðingatöflu](../kostnaðar-afleiðingagreining/): einn kostnaðarmælikvarði, þrír útkomumælikvarðar, aldrei þjappað í einkunn. Fyrir vöruverkfræðinga eru rekstrarlærdómarnir: **lokahlutfall er vandi trektarmælinga** (sérhver brottfallspunktur er finnanlegur og laganlegur); **kostnaður á færslu er [einingahagfræði skýja](../einingahagfræði-skýja/)** auk kostnaðar rása með aðstoð starfsfólks; **upptaka er jöfnuðarmælikvarði í dulargervi** — notendurnir sem geta ekki eða vilja ekki skipta um rás eru óhóflega oft aldraðir, fatlaðir og sviptir, svo ágeng lokun rása breytir „sparnaði“ í aðgangsskaða (sjá [ná og jöfnuður](../ná-og-jöfnuður/)). Að birta KPI (GOV.UK gerir það, fyrir hverja þjónustu) er sjálft búnaður: gagnsæi agar spár eins og úttektir [innlausnar ávinnings](../innlausn-ávinnings/).

## Gildrur

- **Upptaka með þvingun**: að loka símalínunni eykur upptöku og varpar bilunareftirspurn á starfsfólk í fremstu víglínu; mældu heildarkostnað kerfisins.
- **Lokahlutfall mælt frá síðu 2**: að hefja trektina eftir brottfallspunktinn smjaðrar fyrir hlutfallinu.
- **Kostnaður á færslu sem horfir framhjá aðstoðaðri stafrænni þjónustu** og meðhöndlun bilunareftirspurnar.
- **Ánægjukannanir aðeins við árangursríkt lok** — hinir óánægðu komast yfirleitt aldrei að könnuninni.

## Heimildir

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
