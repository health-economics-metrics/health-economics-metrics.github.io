# Uchambuzi wa Maamuzi ya Vigezo Vingi (MCDA)

Uchambuzi wa maamuzi ya vigezo vingi (MCDA) ni modeli ya alama za jumla yenye uzani inayotumika katika tathmini ya teknolojia ya afya pale ICER moja/kizingiti cha utayari wa kulipa kinaposhindwa kunasa kila kitu ambacho mwenye kuamua anajali: usawa, hitaji lisilotimizwa, uvumbuzi, athari za bajeti, ukali wa ugonjwa. Kila kigezo hupewa uzani unaoakisi umuhimu wake (unaopatikana kutoka kwa wadau, uzani ukijumlishwa kuwa 1), kila chaguo hupewa alama sanifu kwa kila kigezo (kwa kawaida 0–1), na alama ya jumla ni jumla yenye uzani — umbo la kihisabati lilelile la kadi ya alama ya kuchagua muuzaji wa programu.

## Kwa nini ni muhimu

MCDA hutumika katika mifumo kama EVIDEM, na na baadhi ya mashirika ya HTA kwa tathmini za dawa yatima/magonjwa adimu ambapo mbinu kali ya kizingiti cha gharama kwa kila QALY inachukuliwa kuwa finyu mno kunasa kila kitu muhimu kuhusu uamuzi. Kikosi Kazi cha ISPOR MCDA Emerging Good Practices kilirasimisha mwongozo wa mazoea mazuri ya kupata uzani na alama kwa njia inayoweza kutetewa, hasa kwa sababu uamuzi uliopimwa isivyo rasmi ni rahisi kuujenga na rahisi kuuchezea. Teknolojia ya afya inapokuwa na vipimo vya thamani ambavyo [kizingiti kimoja cha utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/) hakiwezi kuwakilisha — ukali, uvumbuzi, usawa — MCDA huwapa wenye kuamua muundo wazi, unaokaguliwa wa kuvichanganya, badala ya hukumu isiyotajwa.

## Hisabati

```
Alama ya MCDA = Σ_i (uzani_i × alama_i)

uzani unapaswa kujumlisha 1 (hupatikana kwa mbinu za wadau kama
kupima kwa kuyumbisha au Mchakato wa Daraja la Uchambuzi)
```

## Mfano uliokokotolewa

Kamati ya HTA inapa alama tiba ya kidijitali kwa vigezo vinne:

```
Kigezo                              Uzani    Alama   Uzani × Alama
Manufaa ya kikliniki                0.4      0.8     0.32
Athari ya gharama                   0.3      0.5     0.15
Ukali wa ugonjwa / hitaji lisilotimizwa 0.2  0.9     0.18
Uvumbuzi                            0.1      0.6     0.06
                                     ─────             ─────
                                     1.0               0.71
```

Uzani hujumlisha 1.0 (0.4 + 0.3 + 0.2 + 0.1), na alama ya MCDA ni 0.71 (0.32 + 0.15 + 0.18 + 0.06). Kamati inalinganisha 0.71 na kizingiti kilichokubaliwa mapema, au inaiweka katika orodha dhidi ya teknolojia shindani zilizopewa alama kwa njia ileile.

## Uhusiano na uhandisi wa programu

Hii ni hisabati ileile hasa ya kadi ya alama yenye uzani ya kuchagua muuzaji, matriki ya tathmini ya RFP, au modeli ya alama ya kuweka kipaumbele vipengele — tazama [kujenga au kununua](../kujenga-au-kununua/), kesi ya kawaida ya kadi ya alama yenye uzani katika manunuzi ya programu. Pia inafaa kulinganisha na [WSJF na CD3](../wsjf-na-cd3/): WSJF/CD3 ni mbinu ya kuweka kipaumbele inayotegemea *uwiano* (gharama ya ucheleweshaji ikigawanywa kwa ukubwa wa kazi au muda), wakati MCDA ni *jumla* yenye uzani. MCDA na WSJF/CD3 ni majibu mawili tofauti kimuundo ya "tunapangaje chaguo shindani", na kujua ni lipi uamuzi mahususi unahitaji kweli — thamani inayojumlishika katika vigezo huru, dhidi ya msongamano wa thamani kwa kila kitengo cha uwezo adimu — ni muhimu zaidi kuliko ni fomula ipi inayoonekana kali zaidi.

## Mitego

- **Upendeleo wa kupata uzani**: yeyote anayeweka uzani kwa kweli huamua mapema upangaji, kwa hivyo "fomula" inaweza kusafisha uamuzi wa kisiasa au kibiashara kama hesabu ya kimalengo. Andika nani aliweka uzani na jinsi gani.
- **Kuhesabu mara mbili kigezo ambacho tayari kimenaswa mahali pengine**: kutoa alama kwa "ufanisi wa gharama" kama kigezo kimoja huku pia "athari ya gharama" ikipewa alama kando huzidisha uzito wa fedha ukilinganisha na vigezo vingine bila yeyote kukusudia.
- **Usahihi wa uongo**: alama yenye uzani ya nafasi mbili za desimali (0.71) inadokeza ukali zaidi kuliko makadirio ya wadau ya 0–10 yanavyoweza kuunga mkono, na tofauti kati ya wakadiriaji katika alama hizo mara nyingi hairipotiwi kabisa.

## Vyanzo

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
