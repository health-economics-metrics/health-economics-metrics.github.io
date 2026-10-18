# Uchumi wa Kitengo wa Programu za Afya

Hesabu ya kibiashara ya bidhaa za afya za mtumiaji: gharama ya kupata mteja (CAC), thamani ya maisha yote (LTV), wastani wa mapato kwa kila mtumiaji (ARPU), bei kwa kila mwanachama kwa mwezi (PMPM), na tofauti ya soko la waajiri kati ya **ROI na VOI** (thamani juu ya uwekezaji).

## Kwa nini ni muhimu

Programu za afya zinakabiliwa na mbano wa kimuundo: upatikanaji ni ghali (madai yanayodhibitiwa, vikwazo vya imani, gharama za kufuata sheria) huku kubaki ni kubaya zaidi kuliko sekta yoyote ya programu (~90% kuacha ndani ya siku 30 — tazama [kubaki na kuondoka](../kubaki-na-kuondoka/)). Jaribio la kawaida la uwezekano wa kuendelea — **LTV:CAC ≥ 3:1** — kwa hivyo ni gumu kwa ukatili katika afya ya mtumiaji, ndiyo maana tasnia huhamia kwa modeli za B2B2C: waajiri, bima, na mifumo ya afya wakilipa PMPM kwa idadi ya watu, ambapo mnunuzi si mtu binafsi anayeondoka.

## Hisabati

```
CAC   = matumizi ya mauzo + uuzaji / wateja wapya wanaolipa
ARPU  = mapato / watumiaji amilifu (kwa kipindi)
LTV   = ARPU × wastani wa maisha  =  ARPU / kiwango cha kuondoka
Uwezekano wa kuendelea: LTV : CAC ≥ 3, kipindi cha kurudisha ≤ miezi 12–18

CAC yenye ufanisi kwa kila mtumiaji aliyebaki = CAC / kubaki(t)
  — kwa kubaki kwa D30 ya 4%, £5 kwa kila usakinishaji = £125 kwa kila mtumiaji aliyebaki siku 30

Mapato ya PMPM = kiwango × wanachama waliosajiliwa × miezi
  pembe ya muuzaji = PMPM − gharama ya kuhudumia kwa kila mwanachama kwa mwezi
  — ushiriki hubadilisha ishara: chini ya usajili wa B2C ushiriki huendesha
    mapato; chini ya PMPM, wanachama washiriki GHARIMU zaidi kuwahudumia
    kuliko waliolala, na mikataba ya matokeo huigeuza tena
```

## Mfano uliokokotolewa

Programu ya usingizi ya B2C: £6.99/mwezi, kuondoka kwa mwezi 18%, CAC iliyochanganywa £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — haiwezi kuendelea

Kuhamia PMPM ya mwajiri: £1.20 PMPM × maisha 40,000 yaliyofunikwa = £48k/mwezi
Gharama ya kuhudumia: miundombinu £0.15 + msaada £0.10 + maudhui £0.05
  kwa kila mwanachama ≈ £0.30 → pembe ~75%, mzunguko wa mauzo ni mrefu lakini kuondoka
  ni ngazi ya mkataba (kila mwaka), si ngazi ya mtumiaji (kila siku)

Swali la mwajiri hubadilisha kipimo: ROI ngumu ya dola (madai yaliyopungua,
kutohudhuria kazini) mara chache huonyeshwa kwa bidhaa za ustawi —
jibu la tasnia ni VOI: tija, mvuto wa kuajiri, ushiriki —
la uaminifu tu linapoitwa VOI, si kuvishwa kama ROI
(tazama return-on-investment.md na social-return-on-investment.md).
```

## Uhusiano na uhandisi wa programu

Chaguzi za uhandisi huweka pande zote mbili za uwiano: **gharama ya kuhudumia** ni usanifu ([uchumi wa kitengo wa wingu](../uchumi-wa-kitengo-wa-wingu/) — pembe ya PMPM huishi au hufa kwa gharama ya miundombinu kwa kila mwanachama), na **LTV** ni uhandisi wa kubaki (kila sehemu ya kuondoka ni mapato ya kihisabati — hisabati ya QALY ya waraka wa [kubaki](../kubaki-na-kuondoka/) ina pacha kamili wa mapato). Kwa bidhaa za afya hasa, dashibodi ya uchumi wa kitengo inapaswa kubeba mstari wa tatu kando ya LTV na CAC: **thamani ya afya kwa kila mtumiaji aliyepatikana** (QALY zilizopimwa kwa kubaki × kizingiti) — kwa sababu masoko ya walipaji na mtindo wa DiGA yanaweka bei kwa hilo zaidi na zaidi, na kwa sababu bidhaa ambayo uchumi wake wa kitengo wa kibiashara na wa kikliniki unatofautiana (yenye faida lakini isiyo na athari ya afya, au yenye ufanisi lakini isiyoweza kufadhiliwa) inahitaji kujua ina tatizo lipi.

## Mitego

- **LTV kutoka kuondoka kwa kundi la mapema**: kuondoka hutulia kushuka; lakini pia upendeleo wa walionusurika — wapokeaji wa mapema hubaki vizuri kuliko hadhira iliyopanuka. Tumia data ya kundi lililokomaa.
- **CAC iliyochanganywa katika njia**: CAC ya mitandao ya kijamii inayolipiwa na CAC ya rufaa ya mhudumu wa kliniki hutofautiana mara 10, kwa wasifu kinzani wa kubaki — gawanya vipande vipande au upotoshwe.
- **PMPM bila vikomo vya matumizi**: wanachama washiriki kupita kiasi wanaweza kugeuza pembe; igiza mgawanyo, si wastani.
- **VOI ikiwasilishwa kama ROI** kwa CFO — kushindwa kwa uaminifu ambako tasnia ya ustawi wa waajiri ilitumia muongo kupata.

## Vyanzo

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
