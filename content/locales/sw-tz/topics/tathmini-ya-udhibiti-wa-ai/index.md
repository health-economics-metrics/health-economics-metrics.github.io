# Tathmini ya Udhibiti wa AI

Mifumo ya udhibiti inayosimamia AI katika huduma za afya — utaratibu wa FDA wa Programu kama Kifaa cha Matibabu (Software as a Medical Device, SaMD) wenye **Mipango ya Udhibiti wa Mabadiliko Iliyoamuliwa Mapema (PCCP)**, na programu za tathmini ya ulimwengu halisi kama NHS AI in Health and Care Award — na kile vinachogharimu na kuwezesha kiuchumi.

## Kwa nini ni muhimu

Udhibiti huamua **gharama ya ushahidi ya kuingia sokoni** na **gharama ya kila usasishaji unaofuata wa modeli** — kwa bidhaa za AI, ya pili mara nyingi ni muhimu zaidi. Hali ya jadi ya FDA (funga modeli; pata idhini upya kwa mabadiliko) ilifanya uboreshaji endelevu kuwa mgumu kiuchumi. **Mwongozo wa PCCP (uliokamilishwa Desemba 2024)** ulibadilisha uchumi: mtengenezaji anaweza kuidhinisha mapema usasishaji *maalum* wa modeli wa siku zijazo — maelezo ya marekebisho yaliyopangwa, itifaki ya marekebisho (jinsi kila moja litakavyothibitishwa), na tathmini ya athari — ili maboresho yaliyoruhusiwa yatolewe bila uwasilishaji mpya. Zaidi ya vifaa 1,000 vinavyotumia AI vina idhini ya FDA; FDA sasa pia huchunguza ufuatiliaji wa utendaji wa ulimwengu halisi (vipimo vilivyoainishwa mapema: viwango vya msingi vya FP/FN, kuteleza kwa urekebishaji, viashiria vya mabadiliko ya kikoa).

## Hisabati

PCCP ni uchumi wa [muda wa kuongoza wa DORA](../vipimo-vya-dora/) unaotumika kwa modeli zinazodhibitiwa:

```
Gharama kwa kila usasishaji wa modeli (jadi) = gharama ya kuwasilisha upya + ucheleweshaji wa mapitio × CoD
Gharama kwa kila usasishaji wa modeli (ndani ya PCCP) = gharama ya kutekeleza itifaki tu

Uchumi wa usasishaji katika maisha ya bidhaa:
  N usasishaji × (gharama ya uwasilishaji + miezi ya mapitio × CoD kwa mwezi)
  dhidi ya gharama ya mara moja ya kuandaa PCCP + N × utekelezaji wa itifaki
```

Katika muundo wa NHS AI Award, seti ya vipimo ni pana kuliko usahihi: tathmini huru za ulimwengu halisi hupima utendaji wa kikliniki, athari za mtiririko wa kazi/utekelezaji, na athari za kiuchumi — mfereji kamili wa [ufanisi wa majaribio → ufanisi halisi → ufanisi wa gharama](../tija-ya-wasanidi-programu-kwa-kutumia-ai/) ukifanywa taasisi.

## Mfano uliokokotolewa

Muuzaji wa AI ya radiolojia anapanga maboresho ya modeli ya kila robo mwaka kwa miaka 3 (usasishaji 12):

```
Jadi: 12 × (£80k uwasilishaji + miezi 4 × £50k/mwezi CoD ya manufaa yaliyochelewa)
     = 12 × £280k = £3.36M
Njia ya PCCP: £250k kuandaa PCCP + 12 × £30k utekelezaji wa itifaki = £610k
Akiba ≈ £2.75M — na wagonjwa hupokea kila uboreshaji ~miezi 4 mapema:
12 × miezi 4 × manufaa ya kikliniki ya usasishaji, mstari wa QALY wenyewe.
```

PCCP ni utambuzi wa kidhibiti kwamba **mzunguko wa utumaji una thamani ya kikliniki** — mnyororo mkuu wa kisababishi wa hazina hii, ukiidhinishwa na kidhibiti.

## Uhusiano na uhandisi wa programu

Kuhandisi PCCP vizuri ni tatizo la programu: seti za tathmini zilizoainishwa mapema, seti za data zenye matoleo, mifereji ya uthibitishaji ya kiotomatiki, ufuatiliaji wa kuteleza — binamu aliyedhibitiwa wa utumaji endelevu, ambapo "lango la utumaji" ni itifaki iliyothibitishwa badala ya mapitio ya msimbo. Timu zenye miundombinu iliyokomaa ya tathmini ([vipimo vya ubora wa AI](../vipimo-vya-ubora-wa-ai/)) hupata PCCP kwa bei nafuu; zisizo nayo hugundua kwamba kikwazo cha udhibiti kwa kweli ni kikwazo cha ukomavu wa uhandisi. Kwa bidhaa zinazoingia NHS, safu sambamba ni DTAC (usalama wa kikliniki, ulinzi wa data, ushirikiano) pamoja na ngazi za ushahidi za [NICE ESF](../mfumo-wa-viwango-vya-ushahidi-vya-nice/) — zipangie bajeti zote kama [TCO](../gharama-jumla-ya-umiliki/) ya kuingia sokoni.

## Mitego

- **Ndoto za kupanua wigo wa PCCP**: ni aina *maalum* za marekebisho tu zinazoidhinishwa mapema; mabadiliko ya usanifu au matumizi mapya yaliyokusudiwa bado yanahitaji mapitio kamili.
- **Kuteleza kwa ulimwengu halisi bila ufuatiliaji**: idhini kwa utendaji wa uzinduzi + kuteleza kimya kwa idadi ya watu = bidhaa inayofanya kazi nje ya bahasha iliyoidhinishwa; ufuatiliaji ni matarajio ya udhibiti na pia kujilinda.
- **Kuchanganya idhini na thamani**: idhini ya FDA/UKCA ≠ kuna mtu atakayelipa — hicho ni kikwazo cha [HTA](../tathmini-ya-teknolojia-ya-afya/), kinachoendeshwa kando.

## Vyanzo

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
