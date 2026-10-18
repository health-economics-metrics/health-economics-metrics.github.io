# Miaka ya Maisha Iliyopatikana (LYG)

Miaka ya maisha iliyopatikana ni kuishi kwa ziada kunakohusishwa na uingiliaji, bila marekebisho ya ubora: eneo kati ya mikunjo ya kuishi na bila huo. Mwaka wa maisha wenye thamani sawa uliopatikana (evLYG) ni toleo la kisasa linalothamini kupanuliwa kwa maisha yote kwa usawa.

## Kwa nini ni muhimu

LYG ndilo tokeo ghafi zaidi la afya: watu wanaishi muda mrefu kiasi gani zaidi? Ni muhimu pale data ya ubora inapokosekana, wakati wa kulinganisha mbele ya hadhira yenye mashaka na QALY, na katika onkolojia ambapo mikunjo ya kuishi ndiyo pato kuu la majaribio. **evLYG** (inayotumiwa na taasisi ya ICER ya Marekani pamoja na gharama/QALY) ipo kwa sababu ya kimaadili: QALY huthamini mwaka wa maisha yaliyopanuliwa kwa matumizi ya mgonjwa, kwa hivyo kupanua maisha ya mtu mwenye ulemavu "kunahesabiwa pungufu" — evLYG huthamini kila mwaka uliopanuliwa kwa matumizi yasiyobadilika, ikiondoa ubaguzi huo.

## Hisabati

```
LYG = wastani wa kuishi_mpya − wastani wa kuishi_kilinganishi
    = eneo kati ya mikunjo ya kuishi (limefungwa kwa upeo wa muda)

Mtazamo wa QALY wa kupanua maisha:  upanuzi × matumizi ya mgonjwa
Mtazamo wa evLYG wa kupanua maisha: upanuzi × matumizi yasiyobadilika (ICER hutumia ~0.851,
                                    wastani wa matumizi ya idadi ya watu ya Marekani)
```

Zote mbili [hupunguzwa thamani](../kupunguza-thamani-na-upendeleo-wa-muda/) katika modeli za kiuchumi.

## Mfano uliokokotolewa

Algoriti ya tahadhari ya mapema ya sepsisi hospitalini: uigaji unaonyesha viuavijasumu vya mapema huzuia vifo 12/mwaka; wastani wa umri wa wagonjwa hao unatoa miaka 8 ya maisha iliyobaki kila mmoja kwa matumizi 0.7.

```
LYG   = 12 × 8            = miaka 96 ya maisha/mwaka
QALY  = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Kwa £20,000 kwa kila QALY, mfumo wa QALY unathamini kuishi kwa £milioni 1.34/mwaka; mfumo wa evLYG £milioni 1.63. Pengo ni hukumu ya kimaadili kuhusu kama mwaka wa maisha kwa matumizi 0.7 una thamani ya 70% ya "kamili". Nyaraka makini huripoti yote mawili.

## Uhusiano na uhandisi wa programu

- Uchambuzi wa kuishi ni zana ya pamoja: mikunjo ya Kaplan-Meier kwa wagonjwa na kwa *huduma* (muda hadi kushindwa, muda hadi kuondoka) ni hisabati ileile. "Miaka ya huduma iliyopatikana" kutoka uwekezaji wa uaminifu = eneo kati ya mikunjo ya kuishi ya mfumo na/bila — mfumo wa uaminifu zaidi kuliko madai ya MTTF ya nukta.
- evLYG hubeba onyo la usanifu wa kipimo kwa uhandisi pia: kipimo chochote cha tija kinachopima pato kwa kigezo cha "ubora wa timu" kitadharau kwa utaratibu maboresho kwa timu zilizozuiliwa au zinazojitahidi — wakati mwingine unataka toleo la thamani sawa kwa makusudi.

## Mitego

- **Wastani wa kati dhidi ya wastani wa kuishi**: modeli za kiuchumi zinahitaji wastani (eneo chini ya mkunjo); majaribio mara nyingi hutangaza wa kati. Hutofautiana sana katika mgawanyo uliopinda.
- **Kukadiria nje ya ufuatiliaji wa jaribio** hutawala LYG iliyoigizwa katika ugonjwa sugu — taja modeli ya kukadiria nje na ijaribu katika [uchambuzi wa unyeti](../uchambuzi-wa-unyeti/).
- **Kudai vifo vilivyozuiwa kutoka data ya uangalizi ya kabla/baada** bila kurekebisha kwa mchanganyiko wa kesi na mielekeo ya muda mrefu.

## Vyanzo

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
