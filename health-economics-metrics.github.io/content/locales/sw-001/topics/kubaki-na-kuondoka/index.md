# Kubaki na Kuondoka

Kubaki hupima ni sehemu gani ya kundi la watumiaji bado inafanya kazi siku N baada ya kuanza (mikunjo ya D1/D7/D30); kuondoka ni kikamilisho chake. Msingi mkali wa afya ya kidijitali: **takriban 90% ya watumiaji wa programu za afya huacha ndani ya siku 30** — kubaki kwa D30 kwa afya ya kidijitali ni ~3–4% dhidi ya wastani wa programu zote wa ~6%.

## Kwa nini ni muhimu

Eysenbach alilitaja mwaka 2005: **sheria ya kuondoka** (law of attrition) — kupoteza watumiaji kwa viwango vya juu ni sifa ya asili, ya kimuundo ya uingiliaji wa eHealth, si hitilafu ya utekelezaji, huku kuondoka katika majaribio ya eHealth kukizidi 50% mara kwa mara. Matokeo ya kiuchumi ni jumla: kubaki hufafanua *dirisha la matibabu* ambamo manufaa yoyote yanaweza kutolewa, na [uchumi wa kitengo](../uchumi-wa-kitengo-wa-programu-za-afya/) — CAC iliyolipwa kwa mtumiaji anayebaki siku 12 haitoi LTV wala QALY. Modeli yoyote ya kiuchumi ya bidhaa ya afya ya mtumiaji isiyopima manufaa kwa mkunjo wa kubaki inaelezea bidhaa isiyokuwepo.

## Hisabati

```
Kubaki_Dn = watumiaji amilifu siku n / ukubwa wa kundi × 100
Kiwango cha kuondoka = watumiaji waliopotea katika kipindi / watumiaji mwanzoni mwa kipindi × 100

Kupima manufaa (hatua ya uchumi wa afya):
  manufaa yanayotarajiwa kwa kila mtumiaji aliyepatikana = Σ_t kubaki(t) × kiwango cha manufaa(t)
  ≈ eneo chini ya mkunjo wa kubaki × manufaa kwa kila muda
  — SI manufaa ya jaribio × 100% ya watumiaji waliopatikana

Gharama kwa kila mtumiaji aliyebaki D30 = CAC / kubaki D30
  (kwa D30 ya 4%, CAC ya £5 ni kweli £125 kwa kila mtumiaji aliyebaki)
```

## Mfano uliokokotolewa

Programu ya afya ya akili: jaribio lilionyesha QALY 0.02 zilizopatikana kwa kila mtumiaji anayekamilisha wiki 8. Kundi la usambazaji la upakuaji 100,000, kubaki D7 25%, D30 8%, wiki 8 4%:

```
Wanaokamilisha     = 100,000 × 0.04 = 4,000
QALY zilizotolewa  = 4,000 × 0.02 = 80  (si 100,000 × 0.02 = 2,000)
Kwa £20,000/QALY   = £milioni 1.6 za thamani ya afya (si £milioni 40)

Thamani ya afya kwa kila upakuaji = £16 — namba inayopaswa kuweka kile
mlipaji atakacholipa kwa upakuaji, na ni 4% ya dai la kijinga.
Kesi ya uboreshaji wa kubaki: kusogeza ukamilishaji wa wiki 8 kutoka 4% → 6% huongeza
QALY 40/mwaka ≈ £800k — uhandisi wa kubaki NDIO uzalishaji wa afya.
```

## Uhusiano na uhandisi wa programu

Kubaki ni kipimo ambacho uhandisi wa bidhaa huzalisha thamani ya afya moja kwa moja zaidi, kulingana na hisabati hapo juu. Mazoea yanayokisogeza ni ya kawaida: muda wa kufikia thamani ya kwanza wa mwanzo, usanifu wa kushirikisha tena, utendaji, na muhimu zaidi **ukamilishaji wa kipimo uliopangwa** — programu yenye mwisho ulioainishwa (wiki 8, kisha kuhitimu) inapaswa kupima *ukamilishaji*, si DAU ya milele, ikilinganisha kipimo na modeli ya kikliniki badala ya modeli ya umakini inayofadhiliwa na matangazo. Uchambuzi wa kuishi ni zana sahihi (hisabati ileile ya Kaplan-Meier kama [miaka ya maisha iliyopatikana](../miaka-ya-maisha-iliyopatikana/)); gawanya mikunjo kwa njia ya upatikanaji, kwa sababu mchanganyiko wa njia hubadilisha kubaki kuliko vipengele vingi.

## Mitego

- **Kusafisha nia-ya-kutibu kinyume**: majaribio huripoti wanaokamilisha; uchumi wa usambazaji lazima uhesabu kila aliyepatikana (onyo kuu la Eysenbach).
- **Tamthilia ya kubaki**: watumiaji "amilifu" wanaoendeshwa na arifa ambao kamwe hawafanyi kitendo cha tiba (tazama [vipimo vya ushiriki](../vipimo-vya-ushiriki/)).
- **Kulinganisha mikunjo kati ya ufafanuzi**: "amilifu" ikifafanuliwa kama kufungua dhidi ya kitendo chenye maana hubadilisha D30 kwa mara kadhaa.
- **Kupuuza ni nani anayeondoka**: kama wagonjwa zaidi huondoka haraka zaidi, manufaa kwa kila mtumiaji hushuka kubaki kunapoboreka miongoni mwa wenye afya — oanisha mikunjo na mchanganyiko wa kesi (tazama [ufikiaji na usawa](../ufikiaji-na-usawa/)).

## Vyanzo

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
