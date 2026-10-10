# Virkjun og upptaka

Virkjunarhlutfall er hlutfall nýskráðra sem ná fyrsta marktæka verðmæti („aha“-aðgerðin — fyrsta mæling skráð, fyrsta lexía lokið). Upptaka er þýðisútgáfan: hlutfall *gjaldgengs* þýðis sem tekur vöruna yfirhöfuð í notkun. Saman eru þau fremstu hlið verðmætistrektarinnar: öflun → upptaka → virkjun → [varðveisla](../varðveisla-og-brottfall/) → útkoma.

## Hvers vegna það skiptir máli

Óvirkjaðir notendur eru hreinn kostnaður: öflunarkostnaður, uppsetning, stuðningsflötur — ekkert klínískt verðmæti. Viðmið setja virkjun heilbrigðishugbúnaðar *undir* meðaltali þvert á atvinnugreinar (≈24% á móti ≈37% fyrir virkjun nýrra notenda í einu SaaS-viðmiðasafni; lokun innleiðingarlista ~20%), sem endurspeglar þyngri innleiðingu (auðkenning, samþykki, klínískt öryggi). Upptakan ber þýðisáhættuna: í [RE-AIM-rammanum](../ná-og-jöfnuður/) eru lýðheilsuáhrif ≈ ná × árangur — frábært app sem 3% gjaldgengs þýðis tekur upp hreyfir þýðið sem nemur 3%. Fyrir ávísuð stafræn meðferðarúrræði sést upptökuhliðið í landsgögnum: **~81% DiGA-ávísana eru virkjaðar** — ein af hverjum fimm ávísuðum og greiddum meðferðum hefst aldrei (sjá [DiGA hraðleið](../hraðleið-diga-í-þýskalandi/)).

## Stærðfræðin

```
Virkjunarhlutfall = notendur sem ljúka lykilaðgerð innan glugga / nýskráðir × 100
Upptökuhlutfall   = þeir sem taka upp / gjaldgengt þýði × 100
Innlausn DTx      = virkjaðir ávísunarkóðar / útgefnar ávísanir × 100

Verðmætislíkan trektar:
  gjaldgengir × upptaka × virkjun × varðveisluvegið gagn = þýðisverðmæti
  — fjórar margfaldanir; að bæta minnsta stuðulinn
  ræður yfirleitt mestu (takmörkunarkenning fyrir trektir)
```

## Dæmi útreiknað

Umsjónaraðili býður 80.000 gjaldgengum íbúum sykursýkisforvarnaapp:

```
Boðið → skráð:  80.000 → 12.000  (upptaka 15%)
Skráð → virkjað (fyrsta lota + markmið sett, 7 dagar): 12.000 → 5.400 (45%)
Virkjað → lauk 6 mánaða áætlun: 5.400 → 1.600 (30%)

Áhrif áætlunar (rannsókn, þeir sem luku): 0,03 QALY + 180 £ sparaður kostnaður
Þýðisverðmæti = 1.600 × (0,03 × 20.000 £ + 180 £) ≈ 1,25 m£
Verðmæti á hvern gjaldgengan einstakling = 15,6 £ — á móti 780 £ ef allir gjaldgengir lykju henni.

Hvar á að fjárfesta? Tvöföldun upptöku (15→30%) tvöfaldar verðmæti; að auka
virkjun 45→65% bætir við ~44%; hvort tveggja slær frekari fægingu á
innihaldi áætlunarinnar sem 1.600 manns ljúka nú þegar.
```

## Tengsl við hugbúnaðarverkfræði

Virkjun er það þrep trektarinnar sem verkfræði ræður best við: núningur við auðkenningu, samþykkisferli, hönnun tómra ástanda og tími að fyrsta verðmæti eru kóði, ekki stefna (miðgildi tíma að verðmæti í heilbrigðisgeiranum ≈ 1 dagur og 7 klukkustundir í viðmiðagögnum — hver klukkustund af því er brottfallsáhætta). Upptaka er dreifikerfisvandi: samþætting í tilvísunarleiðir (augnablik ávísunar), boð með meðmælum heimilislækna (traust flyst yfir) og aðgengi (tungumál, stafræn færni — sjá [ná og jöfnuður](../ná-og-jöfnuður/)). Verðmætislíkan trektarinnar hér að ofan er viðskiptarökin fyrir hvort tveggja: margfaldaðu stuðlana, finndu flöskuhálsinn og verðleggðu lagfæringuna gegn þýðisverðmætinu sem hún leysir úr læðingi.

## Gildrur

- **Virkjun skilgreind út frá hentugleika** (tölvupóstur staðfestur) frekar en klínískri merkingu (fyrsta meðferðaraðgerð) — blæs upp mælikvarðann og rýfur verðmætiskeðjuna.
- **Leikir með nefnara upptöku**: „af þeim sem heimsóttu vefinn“ á móti hinu raunverulega gjaldgenga þýði — umsjónaraðilar láta sig hið síðara varða.
- **Valáhrif**: þeir sem auðvelt er að virkja eru minnst veikir og minnst sviptir; endurbætur á trekt geta víkkað jafnaðarbil þótt meðaltöl batni.

## Heimildir

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
