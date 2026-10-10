# Tilvísun til meðferðar (RTT)

Tilvísun til meðferðar er tíminn sem líður frá tilvísun heimilislæknis þar til meðferð undir stjórn ráðgjafalæknis hefst. Stjórnarskrá NHS setur staðalinn: **92% sjúklinga ættu að hefja meðferð innan 18 vikna**. RTT er sá rekstrarmælikvarði sem er pólitískt sýnilegastur í enska NHS.

## Hvers vegna það skiptir máli

Stofnanir sem missa af RTT-markmiðum standa frammi fyrir eftirliti eftirlitsaðila, inngripi og orðsporstjóni; landsbundni biðlistinn er forsíðutala. Hver vika sem sjúklingur bíður er heilsa sem tapast (bíður í verra heilsuástandi — sjá QALY-reikninginn hér að neðan) og oft kostnaður sem bætist við (ástönd versna; sjá [fyrra inngrip](../fyrra-inngrip/)). Hugbúnaður sem sparar tíma hvar sem er á tilvísunar-til-meðferðar leiðinni — forgangsröðun, afgreiðslutími greininga, stofugeta, tímaskipulagning — dregur beint úr rekstrarlegum og fjárhagslegum afleiðingum þess að uppfylla ekki staðalinn, þess vegna er RTT-áhrif fyrsta flokks ávinningslína í stafrænum viðskiptarökum NHS.

## Stærðfræðin

```
RTT-frammistaða = sjúklingar meðhöndlaðir innan 18 vikna / allir meðhöndlaðir × 100
Heilsukostnaður biðtíma á sjúkling = biðtími × (nytjar_meðhöndlaður − nytjar_bíðandi)

Leiðarsýn: RTT = Σ lengdir þrepa (forgangsröðun tilvísunar → fyrsti tími →
greiningar → ákvörðun → meðferð) — bættu lengstu biðröðina, ekki
annasamasta þrepið (sjá flow-metrics.md).
```

## Dæmi útreiknað

Sérgrein meðhöndlar 5.000 leiðarsjúklinga á ári; meðalbið 24 vikur; nytjar bíðandi 0,68 á móti meðhöndluðum 0,80.

Stafræn forgangsröðun auk beint-í-próf bókana fjarlægir 5 vikur af hreinni bið:

```
QALY-ávinningur = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 QALY/ár
Verðlagt á 20.000–30.000 £/QALY (sjá willingness-to-pay-thresholds.md):
  ≈ 1,15–1,73 m£/ár af heilsuverðmæti
```

— auk þess sem stofnunin færist úr broti á staðlinum í að uppfylla 18 vikna staðalinn, sem hefur stjórnarháttaverðmæti sem enginn töflureiknir fangar fullkomlega.

## Tengsl við hugbúnaðarverkfræði

RTT er **leiðtímamælikvarði yfir fjölþrepa biðröð** — útgáfa sjúkrahússins af leiðtíma frá framlagi til framleiðslu (sjá [DORA-mælikvarðar](../dora-mælikvarðar/)). Umbótaaðferðin er eins: mældu hvert þrep, finndu hvar dagatalstími safnast (það er nær alltaf framsöl og biðraðir, ekki klínísk vinna) og fjarlægðu biðástand. Dæmigerðir hugbúnaðarsigrar: rafræn forgangsröðun sem leiðir tilvísanir á klukkustundum í stað vikulegra lota, ýting niðurstaðna úr greiningum í stað eftirfylgnitíma og sjálfvirk beint-í-próf viðmið. Metið umbótina með [kostnaði við tafir](../kostnaður-við-tafir/) tjáðum í QALY/viku.

## Gildrur

- **Að bæta þrep sem er ekki takmörkunin** — að stytta bið eftir fyrsta tíma á meðan biðraðir greininga vaxa færir bara pollinn.
- **Leikir**: endurstilling leiðar og klukkustöðvun geta bætt tilkynnt RTT án þess að meðhöndla nokkurn fyrr; úttektaðu undirliggjandi dreifingu.
- **Að gera tilkall til umbótar á allri leiðinni** fyrir eitt tól þegar nokkrar breytingar komu saman — eignun krefst viðmiðs.

## Heimildir

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
