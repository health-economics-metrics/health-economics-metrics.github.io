# Uchambuzi wa Unyeti

Uchambuzi wa unyeti wa kiamuzi (DSA) hubadilisha dhana moja kwa wakati mmoja katika kiwango cha busara kuona kama hitimisho linanusurika. Taswira ya kawaida ni mchoro wa tornado: vigezo vilivyopangwa kwa jinsi vinavyotikisa matokeo.

## Kwa nini ni muhimu

Kila modeli ya kiuchumi imejengwa juu ya makadirio — muda uliookolewa, upokeaji, gharama za kitengo. Tathmini ya teknolojia ya afya hukataa kukubali kadirio la nukta ("ROI ni 340%") bila ushahidi kwamba hitimisho ni imara dhidi ya kutokubaliana kwa busara kuhusu pembejeo. Mchoro wa tornado unamwambia mwenye kuamua *dhana ipi ihojiwe*: ikiwa hoja inafanya kazi tu kigezo kinachobishaniwa zaidi kikiwa mwisho wa matumaini, kila mtu anaweza kuona hilo mara moja.

Hii ndiyo tabia pekee inayohamishika zaidi kutoka uchumi wa afya hadi hoja za biashara za programu.

## Hisabati

Kwa kila kigezo p chenye kiwango cha busara [p_chini, p_juu]:

```
Matokeo_chini = modeli(p = p_chini, vingine vyote katika hali ya msingi)
Matokeo_juu   = modeli(p = p_juu,   vingine vyote katika hali ya msingi)
Mtikisiko(p)  = |Matokeo_juu − Matokeo_chini|
```

Panga vigezo kwa mtikisiko; chora pau za mlalo kuzunguka matokeo ya hali ya msingi. Matoleo mengine: DSA ya njia mbili (badilisha vigezo viwili kwenye gridi), uchambuzi wa kizingiti (tafuta thamani ya kigezo ambapo uamuzi hugeuka).

## Mfano uliokokotolewa

Msaidizi wa uandishi wa msimbo wa AI kwa wasanidi 200. Hali ya msingi: leseni £39/msanidi/mwezi; dakika 30/msanidi/siku zinaokolewa; gharama iliyojumuishwa £60/saa; siku 220 za kazi.

```
Manufaa ya kila mwaka ya msingi = 200 × saa 0.5 × 220 × £60 = £1,320,000
Gharama ya kila mwaka           = 200 × £39 × 12            = £93,600
Halisi ya msingi                = £1,226,400
```

Tornado (kigezo kimoja kwa wakati):

```
Muda uliookolewa saa 0.1–1.0/siku: halisi = £170,400 … £2,546,400   (mtikisiko £milioni 2.38) ← unatawala
Gharama iliyojumuishwa £40–£80/saa: halisi = £786,400 … £1,666,400  (mtikisiko £milioni 0.88)
Siku za kazi 200–240:              halisi = £1,106,400 … £1,346,400 (mtikisiko £milioni 0.24)
Leseni £30–£50/mwezi:              halisi = £1,248,000 … £1,200,000 (mtikisiko £48k)
```

Uchambuzi wa kizingiti: manufaa halisi hufikia sifuri kwa takriban **dakika 2.1/siku** zilizookolewa. Uamuzi hautegemei bei ya leseni na unategemea kabisa kadirio la muda uliookolewa — kwa hivyo pima hilo, si vingine. (Na kumbuka matokeo ni uwezo, si fedha taslimu — tazama [zinazotoa fedha taslimu dhidi ya zisizotoa](../akiba-zinazotoa-fedha-taslimu-dhidi-ya-zisizotoa/).)

## Uhusiano na uhandisi wa programu

Wahandisi tayari hufanya hili kwa silika kama "je, ikiwa tumekosea kuhusu X?" — DSA huifanya tu kuwa ya kimfumo na inayoonekana. Weka mchoro wa tornado katika kila pendekezo la zana, mpango wa uwezo, na uchambuzi wa kujenga-au-kununua. Hubadilisha mabishano kuhusu hisia ya tumbo ya nani ni sahihi kuwa makubaliano kuhusu kigezo kipi kipimwe — mara nyingi kupitia jaribio, ambalo thamani yake yenyewe inaweza kuwekewa bei (tazama [thamani inayotarajiwa ya taarifa kamilifu](../thamani-inayotarajiwa-ya-taarifa-kamilifu/)).

## Mitego

- **Viwango vilivyochaguliwa kujipendekeza**: ±10% kuzunguka kila pembejeo bila kujali kutokuwa na uhakika halisi. Makadirio ya muda uliookolewa yanastahili ±80%; bei za leseni ±10%.
- **Moja-kwa-wakati hukosa mwingiliano** — vigezo vinavyohusiana (upokeaji na muda uliookolewa) vinahitaji uchambuzi wa njia mbili au [uchambuzi kamili wa unyeti wa uwezekano](../uchambuzi-wa-unyeti-wa-uwezekano/).
- **Kufanya uchambuzi na kuupuuza**: ikiwa tornado inasema hoja inategemea namba moja laini, hatua inayofuata ni kipimo, si sahihi ya idhini.

## Vyanzo

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
