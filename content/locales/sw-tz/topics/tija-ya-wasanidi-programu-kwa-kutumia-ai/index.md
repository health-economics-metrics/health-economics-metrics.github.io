# Tija ya Wasanidi Programu kwa Kutumia AI

Vipimo vya kile ambacho usaidizi wa uandishi wa msimbo wa AI hufanya kweli kwa pato la uhandisi: viwango vya kukubali mapendekezo, ongezeko la kasi katika tafiti zilizodhibitiwa, upitishaji wa PR, na ubakizaji wa msimbo. Msingi wa ushahidi kweli unakinzana — jambo linaloufanya kuwa somo kamili la tofauti kati ya ufanisi wa majaribio (efficacy) na ufanisi halisi (effectiveness) ambayo uchumi wa afya ulijengwa kuishughulikia.

## Kwa nini ni muhimu

Tafiti mbili zilizodhibitiwa zinazonukuliwa zaidi zinaelekeza pande tofauti:

- **Peng na wenzake 2023 (GitHub Copilot RCT)**: wasanidi walikamilisha kazi ya kujenga seva ya HTTP kuanzia mwanzo **kwa kasi ya 55.8%** zaidi wakitumia Copilot (saa 1 dak 11 dhidi ya saa 2 dak 41, n=95).
- **METR 2025 RCT**: wasanidi wazoefu wa chanzo huria waliofanya kazi kwenye *hazina zao wenyewe zilizokomaa* walikuwa **polepole kwa 19%** wakitumia zana za AI za mwanzoni mwa 2025 (wasanidi 16, kazi 246) — huku *wakiamini* kuwa wana kasi zaidi kwa 20%.

Tafiti zote mbili ni nzuri. Mkinzano ndio matokeo: ufanisi wa kazi za kuanzia mwanzo hauhamishiki kwa ufanisi halisi katika msingi wa msimbo uliokomaa, na manufaa *yanayodhaniwa* hayawezi kuchukua nafasi ya manufaa yaliyopimwa. Tiba ina majina kwa matukio yote mawili (majaribio ya kueleza dhidi ya ya kiutendaji; tatizo la placebo) na mashine za kuyashughulikia.

## Hisabati

```
Kiwango cha kukubali = mapendekezo yaliyokubaliwa / mapendekezo yaliyoonyeshwa
                       (telemetria ya GitHub ~30% wastani; hutofautiana: SQL 45%, Python 35%, JS 28%)
Kiwango cha ubakizaji = msimbo wa AI unaonusurika hadi kuunganishwa / msimbo wa AI uliokubaliwa (~88% iliyoripotiwa)
Ongezeko la kasi     = (t_udhibiti − t_AI) / t_udhibiti  (kutoka ulinganisho uliodhibitiwa PEKEE)
Tofauti ya upitishaji = Δ PR zilizounganishwa/msanidi/wiki (data ya uwandani GitHub/Accenture: +8.7%)

Modeli ya thamani    = wasanidi × muda uliookolewa × kiwango kilichojumuishwa × kigezo cha matumizi
                       — kila neno linahitaji kipimo cha ndani; tazama mchoro wa tornado katika
                       sensitivity-analysis.md, ambapo muda uliookolewa unatawala vigezo
                       vingine vyote kwa pamoja
```

## Mfano uliokokotolewa

Shirika la wasanidi 500 linajaribu msaidizi kwa udhibiti sahihi (timu zilizooanishwa, miezi 3, vipimo vilivyosajiliwa mapema):

```
Matokeo ya jaribio: muda wa mzunguko wa PR −18%; PR zilizounganishwa +6%; CFR haikubadilika;
              muda uliookolewa unaoripotiwa na wenyewe dakika 45/siku; uliopimwa ngazi ya kazi ≈ dakika 15/siku

Thamini namba ILIYOPIMWA: 500 × saa 0.25 × siku 220 × £60 × matumizi 0.6
                          ≈ £990,000/mwaka uwezo (usiotoa fedha taslimu)
Gharama: 500 × £39/mwezi × 12 ≈ £234,000/mwaka
Uwiano wa uwezo halisi ≈ 4:1 — unaweza kufadhiliwa, kwa theluthi moja ya dai linaloripotiwa na wenyewe.
```

Pengo la mara 3 kati ya linalodhaniwa na lililopimwa ni matokeo ya METR yakifanya kazi nje ya maabara; kupanga bajeti kwa kujiripoti kungeongeza mstari wa manufaa mara tatu.

## Uhusiano na uhandisi wa programu

Mambo yanayoingizwa kutoka uchumi wa afya kwa yeyote anayetathmini zana za AI: fanya **majaribio ya kiutendaji** (msingi wa msimbo wako, wahandisi wako, tiketi halisi — si kazi za maonyesho ya muuzaji); chukulia **kiwango cha kukubali kama kielelezo mbadala, si matokeo** (ni [PPV](../tathmini-ya-ai-ya-kikliniki/) ya mapendekezo kwa mtazamo wa msanidi — kukubali kwingi na ubakizaji mdogo ni utambuzi kupita kiasi); oanisha kila ongezeko la upitishaji na **ukaguzi wa uthabiti** (DORA 2025: AI huinua upitishaji, huumiza uthabiti — uingiliaji wenye athari mbaya unahitaji uchambuzi wa manufaa halisi, kulingana na [vipimo vya DORA](../vipimo-vya-dora/)); na weka manufaa katika kundi sahihi kama uwezo ([yanayotoa fedha taslimu dhidi ya yasiyotoa](../akiba-zinazotoa-fedha-taslimu-dhidi-ya-zisizotoa/)).

## Mitego

- **Kupandikiza utafiti wa muuzaji**: namba za RCT ya kuanzia mwanzo zikitumika kwa kazi ya msimbo wa zamani — kosa hasa lililofichuliwa na utafiti wa METR.
- **Kujiripoti kama kipimo**: pengo la mtazamo la pointi 20 ndilo upendeleo mkubwa unaojulikana katika maandiko haya.
- **Kukuza shughuli**: PR zaidi na msimbo zaidi ni Shughuli, si matokeo ([SPACE](../space-na-devex/)); oanisha na kazi ya kurudia na CFR.
- **Kupuuza mkondo wa kujifunza**: vipimo vya wiki ya 2 hunasa athari za upya katika mwelekeo wowote; pima katika hali tulivu ([upeo wa muda](../upeo-wa-muda/)).

## Vyanzo

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
