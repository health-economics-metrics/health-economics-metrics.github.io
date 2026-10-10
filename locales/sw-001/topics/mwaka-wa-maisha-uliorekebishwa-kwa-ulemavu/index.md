# Mwaka wa Maisha Uliorekebishwa kwa Ulemavu (DALY)

DALY ni mwaka mmoja uliopotea wa maisha yenye afya — kioo cha upande wa mzigo cha [QALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ubora/). Pale QALY zinapohesabu afya *iliyopatikana*, DALY huhesabu afya *iliyopotea* kwa ugonjwa; uingiliaji huthaminiwa kwa DALY **zilizoepukwa**.

## Kwa nini ni muhimu

DALY ni kiwango cha afya ya dunia (WHO, utafiti wa Mzigo wa Magonjwa Duniani, na wizara nyingi za afya za nchi za kipato cha chini na cha kati hupanga kwa DALY). Ikiwa programu yako inalenga mifumo ya afya ya kimataifa, wafadhili, au programu zinazolingana na WHO, lugha ya thamani ni DALY zilizoepukwa, si QALY zilizopatikana. Kigezo cha kihistoria cha WHO-CHOICE: uingiliaji unaoepusha DALY kwa chini ya mara 1 ya GDP kwa kila mtu ni "wenye ufanisi mkubwa wa gharama", mara 1–3 ya GDP kwa kila mtu "wenye ufanisi wa gharama" (WHO sasa inakatisha tamaa matumizi magumu ya bendi hizi, lakini bado zimeenea katika vitendo).

## Hisabati

```
DALY = YLL + YLD

YLL (miaka ya maisha iliyopotea)       = vifo × matarajio ya kawaida ya maisha katika umri wa kifo
YLD (miaka iliyoishi na ulemavu)       = kuenea × uzito wa ulemavu

uzito wa ulemavu ∈ [0, 1], 0 = afya kamili, 1 = sawa na kifo
(uzito huchapishwa na utafiti wa Mzigo wa Magonjwa Duniani)
```

## Mfano uliokokotolewa

Jukwaa la vikumbusho vya uchunguzi katika kanda linaongeza ugunduzi wa mapema wa ugonjwa. Kila mwaka linazuia vifo 10 vya mapema (kila kimoja kikipoteza miaka 20 dhidi ya matarajio ya kawaida ya maisha) na kuzuia watu 200 kuishi mwaka mmoja na hali yenye uzito wa ulemavu wa 0.2.

```
YLL zilizoepukwa = 10 × 20        = 200
YLD zilizoepukwa = 200 × 0.2      = 40
DALY zilizoepukwa                 = 240 kwa mwaka
```

Jukwaa likigharimu $600,000/mwaka kuendesha, gharama kwa kila DALY iliyoepukwa ni 600,000 / 240 = **$2,500**. Katika nchi yenye GDP kwa kila mtu ya $8,000, hiyo ni chini sana ya kigezo cha mara 1 ya GDP — "ufanisi mkubwa wa gharama" kwa masharti ya WHO-CHOICE.

## Uhusiano na uhandisi wa programu

- Afya ya kidijitali inayolenga wafadhili wa afya ya dunia (Gavi, Global Fund, programu za kitaifa) inapaswa kueleza athari kama **gharama kwa kila DALY iliyoepukwa** — ni kipimo ambacho wakaguzi wa ruzuku tayari hufikiria nacho.
- DALY pia ni kiolezo kinachofaa cha *uhasibu wa mzigo* kwa uhandisi: matukio, ujenzi usiotulia, na msuguano wa mfumo wa zamani ni "miaka iliyoishi na ulemavu" kwa msingi wa msimbo — orodha ya mzigo iliyopimwa kwa taabu inakuambia mahali ambapo urekebishaji hununua "miaka ya uhandisi yenye afya" mingi zaidi, vilevile jedwali za mzigo za GBD zinavyoelekeza matumizi ya afya.

## Mitego

- **QALY zilizopatikana ≠ DALY zilizoepukwa kwa namba** — uzito tofauti, jedwali tofauti za maisha, mikataba tofauti (DALY kihistoria zilitumia kupima umri na kupunguza thamani ndani ya kipimo). Usibadilishe ovyo.
- **Kutumia vizingiti vya mara ya GDP kama muhuri wa mpira** — WHO yenyewe inaonya kwamba vinapuuza bajeti na gharama ya fursa; tazama [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/).
- **Kudai DALY za kiwango cha idadi ya watu kutoka ufanisi wa kila mtumiaji** bila kuzidisha kupitia upokeaji na ufuasi — tazama [ufikiaji na usawa](../ufikiaji-na-usawa/).

## Vyanzo

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
