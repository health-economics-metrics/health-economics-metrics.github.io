# Utawala na Mpaka wa Ufanisi

Chaguo *linatawaliwa* ikiwa chaguo jingine linagharimu kidogo *na* linatoa zaidi. **Mpaka wa ufanisi** ni kinachobaki baada ya kuondoa chaguo zinazotawaliwa: seti ya chaguo ambapo kupata zaidi kunahitaji kulipa zaidi.

## Kwa nini ni muhimu

Kabla ya mjadala wowote kuhusu vizingiti au bajeti, tathmini ya teknolojia ya afya kwanza huondoa chaguo ambazo hakuna anayepaswa kamwe kuchagua. Kuchora kila chaguo kwenye ndege ya gharama-dhidi-ya-athari na kuchora mpaka ni zoezi la dakika tano linaloua mara kwa mara nusu ya orodha fupi. Ulinganisho wa nyongeza ([ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/)) kisha hukokotolewa tu *kando ya mpaka*, kila chaguo dhidi ya linalofuata la bei nafuu lisilotawaliwa — kamwe dhidi ya "kutofanya chochote" pale chaguo bora za kati zipo.

## Hisabati

```
Utawala mkali:        A inatawala B ikiwa Gharama_A ≤ Gharama_B na Athari_A ≥ Athari_B
                      (kwa angalau ukosefu mmoja mkali wa usawa)

Utawala uliopanuliwa: B huondolewa ikiwa mchanganyiko wa A na C unapata athari zaidi
                      kwa kila pauni — hugunduliwa ICER zinapopungua unaposogea juu
                      ya mpaka. ICER halali za mpaka lazima ziwe zinazoongezeka.
```

Utaratibu: panga chaguo kwa athari; ondoa zinazotawaliwa kikamilifu; kokotoa ICER za jozi kati ya majirani; ondoa chaguo lolote ambalo ICER yake inazidi ya chaguo linalofuata lenye athari zaidi (utawala uliopanuliwa); rudia hadi ICER ziongezeke bila kupungua.

## Mfano uliokokotolewa

Chaguo nne za kupunguza miadi iliyokosekana (athari = miadi iliyorejeshwa kwa mwaka):

```
Chaguo                         Gharama/mwaka   Iliyorejeshwa
Kutofanya chochote             £0              0
Vikumbusho vya SMS             £20,000         2,000
Simu                           £120,000        2,200
SMS + triage ya AI             £90,000         3,500
```

Simu **zinatawaliwa kikamilifu** na SMS + triage ya AI (zinagharimu zaidi, zinarejesha pungufu). Mpaka: hakuna → SMS → SMS + AI.

```
ICER(SMS dhidi ya hakuna)   = 20,000 / 2,000  = £10 kwa kila miadi iliyorejeshwa
ICER(SMS+AI dhidi ya SMS)   = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 kwa kila miadi
```

ICER zinazoongezeka → mpaka halali. Kwa ~£160 zilizookolewa kwa kila miadi ya hospitali iliyorejeshwa (tazama [kiwango cha kutohudhuria](../kiwango-cha-kutohudhuria/)), hatua zote mbili za mpaka zinastahili kuchukuliwa; pendekezo la benki ya simu halipaswi kamwe kufika kwa kamati.

## Uhusiano na uhandisi wa programu

Jenga chati ileile kwa uamuzi wowote wa zana: gharama kwa mwaka kwenye mhimili mmoja, matokeo yaliyopimwa (saa zilizookolewa, matukio yaliyoepukwa, utumaji uliowezeshwa) kwenye mwingine. Nukta zilizo juu-na-kushoto ya mpaka huondolewa kabla ya mtu kubishana kuhusu bajeti. Hii inaunda upya uchaguzi wa muuzaji kutoka mijadala ya orodha ya vipengele hadi "umetawaliwa; mkutano umeisha." Pia inafichua muundo wa kawaida wa mashirika makubwa wa kununua chaguo ghali zaidi kwa faida ndogo — halali tu ikiwa bei ya nyongeza kwa kila kitengo cha nyongeza ni ile ambayo shirika lingekuwa tayari kulipa kwa kujua.

## Mitego

- **Kulinganisha kila kitu na msingi** badala ya chaguo linalofuata kwenye mpaka — hujipendekeza kwa chaguo ghali kwa kuficha zinazofanana nafuu zaidi.
- **Alama za athari za kipimo kimoja** zinazoficha kinachohusika; ikiwa matokeo mawili yanahesabika, yachanganye kwa njia inayoweza kutetewa (tazama [uchambuzi wa gharama na matumizi](../uchambuzi-wa-gharama-na-matumizi/)) au onyesha mipaka miwili.
- **Kusahau kutokuwa na uhakika**: chaguo karibu na mpaka zinaweza kubadilishana nafasi chini ya [uchambuzi wa unyeti](../uchambuzi-wa-unyeti/).

## Vyanzo

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
