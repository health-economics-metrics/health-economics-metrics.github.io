# Uwezeshaji na Upokeaji

Kiwango cha uwezeshaji (activation) ni sehemu ya waliojisajili wanaofikia thamani ya kwanza yenye maana (kitendo cha "aha" — kipimo cha kwanza kurekodiwa, somo la kwanza kukamilika). Upokeaji (uptake) ni toleo la idadi ya watu: sehemu ya idadi ya watu *wanaostahili* wanaopokea bidhaa kabisa. Kwa pamoja ni milango ya mbele ya funeli ya thamani: upatikanaji → upokeaji → uwezeshaji → [kubaki](../kubaki-na-kuondoka/) → matokeo.

## Kwa nini ni muhimu

Watumiaji wasiowezeshwa ni gharama tupu: matumizi ya upatikanaji, utoaji, eneo la msaada — thamani sifuri ya kikliniki. Vigezo vya kulinganisha vinaweka uwezeshaji wa programu za afya *chini* ya wastani wa sekta mbalimbali (≈24% dhidi ya ≈37% kwa uwezeshaji wa watumiaji wapya katika seti moja ya vigezo vya SaaS; ukamilishaji wa orodha ya mwanzo ~20%), ikionyesha mwanzo mzito zaidi (utambulisho, ridhaa, usalama wa kikliniki). Upokeaji hubeba dau la idadi ya watu: katika [mfumo wa RE-AIM](../ufikiaji-na-usawa/), athari ya afya ya umma ≈ ufikiaji × ufanisi — programu bora iliyopokelewa na 3% ya idadi ya watu wanaostahili husogeza kipimo cha idadi ya watu kwa thamani ya 3% tu. Kwa tiba za kidijitali zilizoandikiwa, lango la upokeaji linaonekana katika data ya kitaifa: **~81% ya hati za DiGA za Ujerumani huwezeshwa** — tiba moja kati ya tano zilizoandikiwa na kulipiwa haianzi kamwe (tazama [njia ya haraka ya DiGA](../njia-ya-haraka-ya-diga-ya-ujerumani/)).

## Hisabati

```
Kiwango cha uwezeshaji = watumiaji wanaokamilisha kitendo muhimu ndani ya dirisha / waliojisajili × 100
Kiwango cha upokeaji   = wanaopokea / idadi ya watu wanaostahili × 100
Kiwango cha utimizaji wa DTx = misimbo ya hati iliyowezeshwa / hati zilizotolewa × 100

Modeli ya thamani ya funeli:
  wanaostahili × upokeaji × uwezeshaji × manufaa yaliyopimwa kwa kubaki = thamani ya idadi ya watu
  — mazidisho manne; kuboresha kigezo kidogo zaidi kwa kawaida
  hutawala (nadharia ya vikwazo kwa funeli)
```

## Mfano uliokokotolewa

Mwagizaji huduma anatoa programu ya kuzuia kisukari kwa wakazi 80,000 wanaostahili:

```
Walioalikwa → waliosajiliwa:  80,000 → 12,000  (upokeaji 15%)
Waliosajiliwa → waliowezeshwa (kikao cha kwanza + lengo kuwekwa, siku 7): 12,000 → 5,400 (45%)
Waliowezeshwa → waliokamilisha programu ya miezi 6: 5,400 → 1,600 (30%)

Athari ya programu (jaribio, waliokamilisha): QALY 0.03 + £180 gharama zilizoepukwa
Thamani ya idadi ya watu = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Thamani kwa kila mtu anayestahili = £15.6 — dhidi ya £780 kama kila anayestahili angekamilisha.

Wapi pa kuwekeza? Kuongeza upokeaji mara mbili (15→30%) huongeza thamani mara
mbili; kuinua uwezeshaji 45→65% huongeza ~44%; yote mawili yanashinda
kung'arisha zaidi maudhui ya programu ambayo watu 1,600 tayari wanayakamilisha.
```

## Uhusiano na uhandisi wa programu

Uwezeshaji ndio hatua ya funeli inayoweza kushughulikiwa zaidi kihandisi: msuguano wa uthibitishaji wa utambulisho, mtiririko wa ridhaa, usanifu wa hali tupu, na muda wa kufikia thamani ya kwanza ni msimbo, si sera (wastani wa muda hadi thamani katika afya ≈ siku 1 na saa 7 katika data ya vigezo — kila saa yake ni hatari ya kuacha). Upokeaji ni tatizo la mifumo ya usambazaji: kuunganisha katika njia za rufaa (wakati wa hati), mialiko inayoidhinishwa na daktari wa familia (imani huhamishwa), na ufikivu (lugha, ujuzi wa kidijitali — tazama [ufikiaji na usawa](../ufikiaji-na-usawa/)). Modeli ya thamani ya funeli hapo juu ndiyo jenereta ya hoja ya biashara kwa yote mawili: zidisha vigezo, tafuta kikwazo, weka bei ya marekebisho dhidi ya thamani ya idadi ya watu inayoyaachilia.

## Mitego

- **Uwezeshaji kufafanuliwa kama urahisi** (barua pepe imethibitishwa) badala ya maana ya kikliniki (kitendo cha kwanza cha tiba) — hukuza kipimo, huvunja mnyororo wa thamani.
- **Michezo ya kigawanyo cha upokeaji**: "kati ya waliotembelea tovuti" dhidi ya idadi ya watu wanaostahili kweli — waagizaji huduma wanajali ya pili.
- **Athari za uteuzi**: watumiaji rahisi kuwawezesha ni wagonjwa kidogo zaidi na wenye uhaba kidogo zaidi; maboresho ya funeli yanaweza kupanua pengo la usawa huku wastani ukiboreka.

## Vyanzo

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
