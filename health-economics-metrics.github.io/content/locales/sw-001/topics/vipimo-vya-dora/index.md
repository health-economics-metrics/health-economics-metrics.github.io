# Vipimo vya DORA

Vipimo vya DORA (DevOps Research and Assessment) ni vipimo vinne vya utendaji wa utoaji wa programu — mzunguko wa utumaji, muda wa kuongoza wa mabadiliko, kiwango cha kushindwa kwa mabadiliko, na muda wa kupona kutokana na utumaji ulioshindwa — pamoja na uaminifu kama cha tano. Ni vigezo vilivyothibitishwa zaidi vya utoaji katika uwanja huu, na kila kimoja kina usomaji wa moja kwa moja wa uchumi wa afya.

## Kwa nini ni muhimu

Utafiti wa DORA wa muongo mmoja unahusisha vipimo hivi na utendaji wa shirika. Makundi ya ripoti ya 2024: timu za **kiwango cha juu kabisa** hutuma kwa mahitaji (mara nyingi kwa siku), huchukua chini ya siku moja kutoka commit hadi uzalishaji, hushindwa ~5% ya mabadiliko, na hupona ndani ya saa moja; watendaji wa **kiwango cha chini** hutuma kila mwezi au kwa nadra zaidi, huchukua miezi, hushindwa ~40% ya mabadiliko, na hupona kwa wiki. Kwa mfumo wa afya, hizi si namba za majivuno za TEHAMA: huamua jinsi thamani ya kikliniki inavyofika kwa wagonjwa haraka na hatari kiasi gani kila mabadiliko hubeba.

## Hisabati

```
Mzunguko wa utumaji     = utumaji wa uzalishaji / muda
Muda wa kuongoza wa mabadiliko = t(utumaji) − t(commit), wastani wa kati
Kiwango cha kushindwa kwa mabadiliko = mabadiliko yaliyoshindwa / jumla ya mabadiliko × 100
Muda wa kupona (MTTR)   = t(imerejeshwa) − t(kushindwa), wastani wa kati
Uaminifu                = kufikia SLO (upatikanaji, ucheleweshaji, usahihi)
```

Tafsiri za uchumi wa afya:

```
Muda wa kuongoza → cost-of-delay.md: wiki katika mfereji × CoD (£ au QALY/wiki)
Kiwango cha kushindwa → kiwango cha matukio mabaya ya mabadiliko ya programu: CFR × gharama kwa tukio
Muda wa kupona → madhara ya kukatika: MTTR × (shughuli za kikliniki zilizopotea + hatari ya usalama)/saa
Uaminifu → punguzo la manufaa: huduma yenye upatikanaji wa 99% hutoa ≈ 0.99
           ya manufaa yake yaliyoigizwa — mlinganisho wa programu wa ufuasi
```

## Mfano uliokokotolewa

Timu ya programu ya mtiririko wa wagonjwa ya taasisi, kabla/baada ya uwekezaji wa uhandisi wa utoaji:

```
                    Kabla       Baada
Utumaji             kila mwezi  kila wiki
Muda wa kuongoza    wiki 6      siku 4
CFR                 25%         8%
MTTR                siku 2      saa 2
```

Timu hutoa ~maboresho 30 kwa mwaka kwa thamani ya wastani kwa kila uboreshaji ya £4,000/wiki ([CoD](../gharama-ya-ucheleweshaji/)). Kupunguza muda wa kuongoza kwa ~wiki 5.4 huvuta mbele mkondo wa manufaa wa kila uboreshaji: 30 × 5.4 × 4,000 ≈ **£648,000/mwaka** za thamani zilizotolewa mapema. Uboreshaji wa CFR: 30 × (0.25 − 0.08) = ~mabadiliko 5 pungufu yaliyoshindwa kwa mwaka × £15,000 gharama ya wastani ya tukio (kukatika kwa mfumo wa kikliniki, urekebishaji) = **£76,500/mwaka**. Uwekezaji wa utoaji unathaminiwa kwa sarafu ileile kama uingiliaji wowote wa kikliniki.

## Uhusiano na uhandisi wa programu

Hii *ni* upande wa programu — uhusiano unaostahili kutajwa ni uoanishaji wa kinyume: vipimo vya DORA ni vipimo vya kiutendaji vya hospitali vikiwa vimevaa mavazi tofauti. Muda wa kuongoza ↔ [rufaa hadi matibabu](../rufaa-hadi-matibabu/); kiwango cha kushindwa kwa mabadiliko ↔ [kiwango cha kulazwa tena](../kiwango-cha-kulazwa-tena/) (kazi iliyorudi); MTTR ↔ mwitikio wa dharura; mzunguko wa utumaji ↔ upitishaji wa kliniki. Mbinu za uboreshaji huhamia pande zote mbili kwa sababu zote ni mifumo ya foleni chini ya vikwazo vya usalama. Zingatia pia matokeo ya DORA 2025 kuhusu AI: kupitishwa kwa AI sasa kunahusiana na upitishaji wa juu lakini uthabiti *mbaya zaidi* — uingiliaji wenye ufanisi na athari mbaya, unaohitaji hasa uchambuzi wa manufaa halisi ambao hazina hii inafundisha (tazama [tija ya wasanidi kwa AI](../tija-ya-wasanidi-programu-kwa-kutumia-ai/)).

## Mitego

- **Michezo ya vipimo**: hesabu za utumaji zilizokuzwa kwa matoleo matupu; CFR iliyopunguzwa kwa kutohesabu marekebisho ya haraka kama kushindwa. Fafanua matukio kwa usahihi, kama HTA inavyofafanua vigezo vya mwisho.
- **Majedwali ya ligi kati ya timu**: makundi ya DORA hulinganisha mazoea, si timu zenye wasifu tofauti wa hatari; timu ya mifumo ya kikliniki katika "juu" inaweza kuwa bora pale "kiwango cha juu kabisa" kingekuwa cha kutojali.
- **Kuboresha kipimo kimoja**: kasi bila CFR/uaminifu ni mpatano wa upitishaji-kutokuwa thabiti — ripoti kila mara vinne pamoja (ni [jedwali la gharama na matokeo](../uchambuzi-wa-gharama-na-matokeo/), si alama).

## Vyanzo

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
