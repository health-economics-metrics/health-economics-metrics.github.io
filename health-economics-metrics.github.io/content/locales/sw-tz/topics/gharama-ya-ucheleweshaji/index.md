# Gharama ya Ucheleweshaji (CoD)

Gharama ya Ucheleweshaji ni thamani ya kiuchumi inayopotea kwa kila kitengo cha muda ambacho kipengele, bidhaa, au huduma *haijatolewa*. Ni daraja lenye nguvu zaidi kati ya vipimo vya utoaji wa programu na uchumi wa afya: hubadilisha "tulitoa kuchelewa" kuwa sarafu — au QALY.

## Kwa nini ni muhimu

Kanuni ya Reinertsen: "Ukipima kitu kimoja tu, pima Gharama ya Ucheleweshaji." Mashirika mengi yanajua mradi unagharimu kiasi gani lakini si mwezi wa ucheleweshaji unagharimu kiasi gani, kwa hivyo huboresha bajeti huku thamani ya muda ikivuja damu. Kwa programu za afya hatari ni halisi: kila wiki uboreshaji wa njia unapochelewa, wagonjwa husubiri muda mrefu zaidi katika hali mbaya zaidi za kiafya. CoD ndio mfumo wenye nguvu zaidi wa kihisabati kuwasilisha kwa wadau wa NHS kwa sababu unaweka bei *kutokuwepo* kwa programu yako.

## Hisabati

```
CoD = manufaa kwa kila kitengo cha muda yanayoachwa wakati haijatolewa   (£/wiki au QALY/wiki)

Jumla ya hasara ya ucheleweshaji = CoD × muda wa ucheleweshaji

Kwa kuweka kipaumbele, tazama wsjf-and-cd3.md: CD3 = CoD / muda.
```

Kwa programu za kikliniki, onyesha kwa afya pamoja na fedha:

```
CoD_afya   = wagonjwa walioathirika kwa wiki × faida ya QALY kwa kila mgonjwa
CoD_fedha  = CoD_afya × λ (kizingiti cha utayari wa kulipa, £20k–30k/QALY)
             + akiba ya kiutendaji kwa wiki inayoachwa
```

## Mfano uliokokotolewa

**Kiutendaji**: programu inaokoa £200 kwa kila mgonjwa kwenye njia; taasisi huchakata wagonjwa 50 kama hao kwa wiki.

```
CoD = 200 × 50 = £10,000/wiki
Ucheleweshaji wa wiki 10 wa manunuzi unagharimu 200 × 50 × 10 = £100,000 za upotevu unaoweza kuepukwa.
```

**Kikliniki**: uboreshaji wa triage unaondoa wiki 5 za kusubiri (matumizi 0.68 → 0.80 mapema) kwa wagonjwa 100 kwa wiki:

```
Faida ya QALY kwa mgonjwa = (5/52) × 0.12 ≈ 0.0115
CoD_afya  = 100 × 0.0115 = QALY 1.15/wiki
CoD_fedha = 1.15 × £20,000 ≈ £23,000/wiki ya thamani ya afya
```

Ucheleweshaji wa miezi 6 wa utumaji "unagharimu" ~QALY 30 — hoja inayogeuza kuteleza kwa kuanza kutumika kwa TEHAMA kuwa tukio la kikliniki. (Kigezo cha ukubwa: uchambuzi maarufu wa Black Swan Farming wa Maersk uligundua vipengele binafsi vyenye CoD ≈ $200k/wiki vilivyokuwa vimesubiri wiki 38.)

## Uhusiano na uhandisi wa programu

CoD ni kipimo kinachofanya [muda wa kuongoza wa DORA](../vipimo-vya-dora/) na [ufanisi wa mtiririko](../vipimo-vya-mtiririko/) kusomeka kifedha: muda wa kuongoza × CoD = fedha (au afya) inayoungua kwenye foleni. Matumizi:

- **Kuweka kipaumbele**: panga kazi kwa CoD/muda ([WSJF/CD3](../wsjf-na-cd3/)) badala ya mdau mwenye sauti kubwa.
- **Uchumi wa mchakato**: mdundo wa toleo wa wiki 2 una gharama inayotarajiwa ya ucheleweshaji ya ~wiki 1 × CoD kwa kila kipengele ikilinganishwa na utoaji endelevu — weka bei kwenye kundi.
- **Manunuzi**: mizunguko ya manunuzi ya NHS ya miezi 6–18 ina CoD; kuionyesha hubadilisha mazungumzo ya dharura (tazama [uchambuzi wa athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) kwa mwenzake wa uwezo wa kumudu).

## Mitego

- **Kudhani CoD ya mstari**: kazi nyingine ina thamani yenye umbo la tarehe ya mwisho (tarehe za kisheria — CoD isiyo na kikomo baada ya tarehe, sifuri kabla) au thamani inayopungua (madirisha ya mwanzilishi). Ainisha wasifu wa dharura kabla ya kuzidisha.
- **CoD kwa matokeo ambayo hakuna anayetaka**: ucheleweshaji unagharimu tu ikiwa kitu kina thamani; takataka iliyochelewa ni bure.
- **Kuhesabu ucheleweshaji na upunguzaji thamani mara mbili**: [upunguzaji thamani](../kupunguza-thamani-na-upendeleo-wa-muda/) tayari huweka bei ya muda katika upeo wa miaka mingi; CoD ni toleo la kiutendaji ndani ya upeo. Tumia CoD kwa wiki/miezi, uhamishaji wa NPV kwa miaka.

## Vyanzo

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
