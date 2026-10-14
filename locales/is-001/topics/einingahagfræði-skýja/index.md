# Einingahagfræði skýja (FinOps)

Einingahagfræði skýja þýðir hráan skýjakostnað yfir í **kostnað á hverja einingu úttaks** — á viðskiptavin, á færslu, á leyst tilvik, á tóka. Þetta er FinOps-hæfnin sem breytir „AWS-reikningurinn okkar er 400 þús. £ á mánuði“ í „að þjóna einum sjúklingi kostar 0,83 £“.

## Hvers vegna það skiptir máli

Heildarútgjaldatölur geta ekki svarað þeim spurningum sem skipta máli: er varan að verða skilvirkari eða óskilvirkari? Bætir vöxtur framlegð eða eyðileggur hann hana? Hvað eigum við að rukka? Einingakostnaður svarar öllum þremur. Fyrir stafræna heilsu sérstaklega *er* „kostnaður á leyst tilvik“ einingakostnaður heilbrigðisþjónustu — beint sambærilegur við tölur [National Cost Collection](../landsgjaldskrá-og-einingakostnaður/) sem umsjónaraðili notar fyrir hverja aðra þjónustu, sem gerir hann að náttúrulegu máli til að verðleggja stafrænar leiðir gegn hefðbundnum.

## Stærðfræðin

```
Einingakostnaður = heildarúthlutaður kostnaður (þ.m.t. sameiginlegur/vettvangskostnaður) / einingar afhentar

Tvær fjölskyldur:
  einingar fyrir auðlindanýtni: kostnaður/GB geymt, kostnaður/vCPU-klst.,
                                kostnaður/tóki, kostnaður/smíðamínúta
  viðskiptaeiningar:            kostnaður/viðskiptavinur, kostnaður/færsla, kostnaður/viðtal,
                                kostnaður/leyst tilvik

Agi jaðarkostnaðar og meðalkostnaðar gildir (marginal-vs-average-cost.md):
skuldbundin/fráteknu útgjöld gera jaðareiningakostnað ≈ 0 þar til næsta
skuldbindingarþrep — verðleggðu ákvarðanir um útvíkkun á jaðarkostnaði,
þróun skilvirkni á meðalkostnaði.
```

## Dæmi útreiknað

Stafræn forgangsröðunarþjónusta: skýjakostnaður 62.000 £/mánuð (reikniafl 30 þús. £, gögn 18 þús. £, úthlutun sameiginlegs vettvangs 14 þús. £), sem afgreiðir 380.000 forgangsröðunartilvik/mánuð:

```
Meðalkostnaður á tilvik = 62.000 / 380.000 ≈ 0,163 £

Samanburður umsjónaraðila: símaforgangsröðun ≈ 8–12 £/símtal, viðtal við heimilislækni ≈ 42 £
→ stafrænt tilvik kostar ~2% af ódýrasta mannlega kostinum — hagfræði rásafærslunnar í
gds-service-metrics.md, frá kostnaðarhliðinni.

Þróunarathugun: í fyrra 0,21 £/tilvik við 240 þús. tilvik → batnandi stærðarhagkvæmni
(fastur vettvangskostnaður dreifist), á skilið fyrirsögn í ársfjórðungsskýrslunni.
```

## Tengsl við hugbúnaðarverkfræði

Einingahagfræði er þar sem verkfræðival verða læsileg fjármálasviði: arkitektúr sem helmingar kostnað á tilvik er verðlagsforskot; sá sem stækkar ofurlínulega er tímasprengja sem sést aðeins í þessum mælikvarða. Venjur sem flytjast úr kostnaðargreiningu í heilbrigðisþjónustu: **birtu úthlutunarreglurnar** (sameiginlegur kostnaður brenglaði einingatölur þar til PLICS staðlaði kostnaðargreiningu á sjúklingastigi — úthlutun vettvangskostnaðar þíns þarf sama strangleika); **veldu einingar sem kaupandinn hugsar í** (umsjónaraðilar kaupa tilvik, ekki vCPU); og færðu einingakostnað inn í hvert [ICER](../stigvaxandi-kostnaðarhagkvæmnihlutfall/)- og [fjárlagaáhrifa](../fjárlagaáhrifagreining/)líkan sem ráðandi kostnaðarnefnara. Fyrir gervigreindareiginleika er einingin tókinn — sjá [einingahagfræði ályktunar](../einingahagfræði-ályktunar/).

## Gildrur

- **Að horfa framhjá sameiginlegum kostnaði**: einingakostnaður án úthlutunar vettvangs/öryggis/bakvakta vanmetur um 30–50% og hrynur við endurskoðun.
- **Hégómanefnarar**: „kostnaður á API-kall“ smjaðrar; „kostnaður á lokið sjúklingatilvik“ upplýsir.
- **Meðalkostnaðarverðlagning jaðarákvarðana**: að rukka teymi meðaleiningakostnað fyrir notkun sem er jaðarlega ókeypis ýtir undir leikhús sóunarforðunar (sjá [landsgjaldskrá](../landsgjaldskrá-og-einingakostnaður/) fyrir NHS-útgáfuna af þessari hvataskekkju).

## Heimildir

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
