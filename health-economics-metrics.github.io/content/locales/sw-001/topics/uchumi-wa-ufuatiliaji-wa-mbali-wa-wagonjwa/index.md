# Uchumi wa Ufuatiliaji wa Mbali wa Wagonjwa

Uchumi wa urejeshaji na offset ya gharama ya kuwafuatilia wagonjwa nyumbani: nchini Marekani, mrundikano wa mapato wa misimbo ya CPT iliyofafanuliwa; katika huduma za afya za taifa, uchumi wa kuepuka kulazwa na wodi pepe hadi **hospitali-nyumbani** kamili kuchukua nafasi.

## Kwa nini ni muhimu

RPM ndipo data ya kifaa inakuwa huduma ya afya inayotozwa. Muundo wa Medicare ya Marekani (wastani wa kitaifa wa 2025) uko wazi isivyo kawaida:

```
99453  kuweka na elimu ya mgonjwa       ~$19.73  mara moja (baada ya siku 16 za data)
99454  ugavi wa kifaa + usambazaji       ~$43.03  kila siku 30 — INAHITAJI ≥siku 16
                                                  za vipimo ndani ya hizo 30
99457  usimamizi wa dak 20 za kwanza/mwezi ~$47.87 inahitaji ≥dakika 20 zilizorekodiwa
99458  kila dak 20 za ziada              ~$38.49
```

Mwezi wa mgonjwa anayezingatia hukusanyika hadi takriban **$90–130 PMPM**. Upande wa offset ya gharama, programu za hospitali-nyumbani (msamaha wa CMS Acute Hospital Care at Home: hospitali 300+) zinaonyesha ~$1,800–$3,000 zilizookolewa kwa kila tukio ikilinganishwa na huduma ya wagonjwa waliolazwa, na kulazwa tena na maambukizi pungufu — uthibitisho dhahiri zaidi kwamba ufuatiliaji pamoja na huduma pepe unaweza kuchukua nafasi ya rasilimali ghali zaidi ya mfumo, kitanda chenye wafanyakazi.

## Hisabati

```
Mapato ya RPM (Marekani) = waliosajiliwa × sehemu inayozingatia utozaji × mrundikano wa misimbo PMPM
  — sheria ya siku 16 hufanya ufuasi wa muda wa kuvaa (wearable-validation.md)
    kuwa kigeu cha mapato, na sheria ya dakika 20 hufanya kurekodi
    muda wa kikliniki kuwa hitaji la uhandisi

Thamani ya mtindo wa NHS = kulazwa kulikoepukwa × gharama ya pembeni ya kulazwa
                         + siku za kitanda zilizobadilishwa × (aliyelazwa − gharama ya siku ya wodi pepe)
                         − gharama ya huduma (vifaa, jukwaa, wafanyakazi wa ufuatiliaji)
  (tazama emergency-attendance-avoidance.md na bed-days-saved.md kwa
   kanuni za uhusishaji na gharama ya pembeni)
```

## Mfano uliokokotolewa

Mazoezi ya Marekani yanasajili wagonjwa 400 wa shinikizo la damu; 70% wanatimiza kizingiti cha siku 16 katika mwezi wa kawaida; dakika za usimamizi zimerekodiwa kwa 60%:

```
Mapato ya kila mwezi ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Kila mwaka ≈ $282,000; gharama ya huduma (vifaa $12/mwezi, wafanyakazi FTE 0.8) ≈ $180,000
Pembe ≈ $100k/mwaka — na zingatia vichocheo ni vichocheo vya uhandisi:
kuinua ufuasi wa siku 16 kutoka 70% → 85% huongeza ~$31k/mwaka
(starehe ya kifaa, uaminifu wa usawazishaji, usanifu wa vikumbusho).
```

Kioo cha NHS: wodi pepe ya vitanda 50 yenye ukaaji wa 80% inayobadilisha siku za kulazwa kwa akiba halisi ya £150/siku ≈ 50 × 0.8 × 365 × 150 ≈ **£milioni 2.19/mwaka** ghafi — dhidi ya jukwaa, vifaa, na timu ya uuguzi wa jamii inayoihudumia.

## Uhusiano na uhandisi wa programu

Majukwaa ya RPM ni bidhaa adimu ambapo **muda wa kufanya kazi na uaminifu wa usawazishaji hubadilika moja kwa moja kuwa mapato** (wiki ya usawazishaji ulioshindwa huvunja lango la siku 16 kwa kundi) na ambapo ufuatiliaji wa muda wa kiwango cha ukaguzi (sheria ya dakika 20) ni kipengele cha daraja la kwanza, si wazo la baadaye. Jenga kwa: dashibodi za ufuasi kwa kila mgonjwa zinazoonyesha miezi ya utozaji iliyo hatarini ikiwa bado inarejeshekana; njia za data zilizowekewa muhuri wa wakati, zinazoonyesha kuchezewa (ukaguzi wa walipaji ni wa kawaida); na urekebishaji wa uchumi wa tahadhari — kila tahadhari hutumia dakika za timu ya ufuatiliaji, ambazo ni kitengo cha kutoza na rasilimali adimu ([uchumi wa uchunguzi](../uchumi-wa-uchunguzi/) hutawala uchaguzi wa kizingiti).

## Mitego

- **Usajili ≠ mapato**: sehemu inayozingatia ndiyo namba; iigize, usidhani.
- **Misimbo ya Marekani ikihamishiwa kesi za NHS** — huduma za afya za taifa hununua kuepuka kulazwa, si mrundikano wa CPT; endesha modeli ya pili.
- **Madai ya offset kwa gharama ya wastani** kwa kulazwa ambako gharama za kudumu zinabaki (tazama [gharama ya pembeni dhidi ya ya wastani](../gharama-ya-pembeni-dhidi-ya-ya-wastani/)).
- **Kujaa kwa timu ya ufuatiliaji**: kiasi cha tahadhari hukua na usajili; mstari wa wafanyakazi ndio kikwazo kinachofunga ambacho modeli nyingi huacha.

## Vyanzo

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
