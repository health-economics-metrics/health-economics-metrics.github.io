# Rufaa hadi Matibabu (RTT)

Rufaa hadi matibabu ni muda uliopita kutoka rufaa ya daktari wa familia hadi kuanza kwa matibabu yanayoongozwa na mshauri. Katiba ya NHS inaweka kiwango: **92% ya wagonjwa wanapaswa kuanza matibabu ndani ya wiki 18**. RTT ndicho kipimo cha kiutendaji kinachoonekana zaidi kisiasa katika NHS ya Uingereza.

## Kwa nini ni muhimu

Taasisi zinazokosa malengo ya RTT hukabiliana na uchunguzi wa mdhibiti, uingiliaji, na uharibifu wa sifa; orodha ya kitaifa ya kusubiri ni namba ya ukurasa wa mbele. Kila wiki mgonjwa anaposubiri ni afya inayopotea (akisubiri katika hali mbaya zaidi ya kiafya — tazama hisabati ya QALY hapa chini) na mara nyingi gharama inayoongezeka (hali huzorota; tazama [uingiliaji wa mapema](../uingiliaji-wa-mapema/)). Programu inayookoa muda mahali popote kwenye njia ya rufaa hadi matibabu — triage, kasi ya utambuzi, uwezo wa kliniki, upangaji ratiba — hupunguza moja kwa moja matokeo ya kiutendaji na kifedha ya kushindwa kiwango, ndiyo maana athari ya RTT ni mstari wa manufaa wa daraja la kwanza katika hoja za biashara za kidijitali za NHS.

## Hisabati

```
Utendaji wa RTT = wagonjwa waliotibiwa ndani ya wiki 18 / jumla ya waliotibiwa × 100
Gharama ya afya ya muda wa kusubiri kwa mgonjwa = muda wa kusubiri × (matumizi_aliyetibiwa − matumizi_anayesubiri)

Mtazamo wa njia: RTT = Σ muda wa hatua (triage ya rufaa → miadi ya kwanza →
utambuzi → uamuzi → matibabu) — boresha foleni ndefu zaidi, si
hatua yenye shughuli nyingi zaidi (tazama flow-metrics.md).
```

## Mfano uliokokotolewa

Taaluma inatibu wagonjwa 5,000 wa njia kwa mwaka; wastani wa kusubiri wiki 24; matumizi ya anayesubiri 0.68 dhidi ya aliyetibiwa 0.80.

Triage ya kidijitali pamoja na itifaki za moja kwa moja hadi kipimo huondoa wiki 5 za foleni safi:

```
Faida ya QALY = 5,000 × (5/52) × (0.80 − 0.68) = QALY 57.7/mwaka
Ikithaminiwa kwa £20,000–£30,000/QALY (tazama willingness-to-pay-thresholds.md):
  ≈ £milioni 1.15–1.73/mwaka za thamani ya afya
```

— pamoja na taasisi kuhama kutoka kukiuka hadi kufikia kiwango cha wiki 18, ambacho kina thamani ya utawala ambayo hakuna lahajedwali inayoinasa kikamilifu.

## Uhusiano na uhandisi wa programu

RTT ni **kipimo cha muda wa kuongoza juu ya foleni ya hatua nyingi** — toleo la hospitali la muda wa kuongoza kutoka commit hadi uzalishaji (tazama [vipimo vya DORA](../vipimo-vya-dora/)). Mbinu ya uboreshaji ni ileile: pima kila hatua, tafuta mahali muda wa kalenda unapokusanyika (karibu daima ni makabidhiano na foleni, si kazi ya kikliniki), na ondoa hali za kusubiri. Ushindi wa kawaida wa programu: e-triage inayoelekeza rufaa kwa saa badala ya makundi ya kila wiki, kusukuma matokeo ya utambuzi badala ya miadi ya ufuatiliaji, na vigezo vya kiotomatiki vya moja kwa moja hadi kipimo. Thamini uboreshaji kwa [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/) iliyoonyeshwa kwa QALY/wiki.

## Mitego

- **Kuboresha hatua ambayo si kikwazo** — kupunguza kusubiri kwa miadi ya kwanza huku foleni za utambuzi zikikua kunahamisha tu bwawa.
- **Michezo**: kuweka upya njia na kusimamisha saa kunaweza kuboresha RTT iliyoripotiwa bila kumtibu yeyote mapema; kagua mgawanyo wa msingi.
- **Kudai uboreshaji wa njia nzima** kwa zana moja wakati mabadiliko kadhaa yalitua pamoja — uhusishaji unahitaji kilinganishi.

## Vyanzo

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
