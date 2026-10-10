# Sehemu Inayohusishwa na Idadi ya Watu (PAF)

PAF ni sehemu ya mzigo wa ugonjwa au tokeo katika idadi ya watu inayohusishwa na mfiduo mahususi wa sababu ya hatari — sehemu ambayo ingetoweka kama mfiduo ungeondolewa kabisa. Hubadilisha "sababu hii ya hatari huongeza maradufu uwezekano wako" kuwa namba ya kiwango cha idadi ya watu ambayo mwagizaji huduma anaweza kupanga kwayo kweli: ni kesi ngapi, na gharama kiasi gani, mfiduo mahususi unastahili kufuatiliwa.

## Kwa nini ni muhimu

Levin alianzisha PAF mwaka 1953 kujibu swali finyu, thabiti: kama hakuna mtu angevuta sigara, saratani ya mapafu kiasi gani ingetoweka? Hesabu ileile sasa hupima upangaji wa kinga wa kitaifa kila mahali kutoka mikakati ya tumbaku na unene hadi orodha za sababu za hatari za utafiti wa WHO wa Mzigo wa Magonjwa Duniani, kwa sababu hatari ya jamaa peke yake haisemi chochote kuhusu athari — sababu ya hatari inaweza kuongeza maradufu uwezekano wa tukio adimu na karibu isisogeze mzigo wa ugonjwa wa idadi ya watu, au kuongeza uwezekano wa tukio la kawaida kidogo tu na bado kueleza sehemu kubwa ya kesi. PAF ndiyo inayobadilisha "sababu ya hatari X ni hatari" kuwa "kuondoa sababu ya hatari X kungezuia kesi hizi nyingi kwa mwaka", ambayo ndiyo namba ambayo hoja ya biashara ya programu ya kinga inahitaji kweli. Tazama [uchumi wa kinga](../uchumi-wa-kinga/) kwa kinachogharimu kuchukua hatua juu ya namba hiyo ukishaipata.

## Hisabati

```
PAF = kuenea_kwa_walio_wazi × (hatari_ya_jamaa − 1) / (1 + kuenea_kwa_walio_wazi × (hatari_ya_jamaa − 1))

kuenea_kwa_walio_wazi = sehemu ya idadi ya watu iliyo wazi kwa sababu ya hatari (0–1)
hatari_ya_jamaa       = hatari ya tokeo kwa walio wazi dhidi ya wasio wazi (mf. 2.5 = 2.5×)

Kesi zinazohusishwa = jumla_ya_kesi × PAF
```

PAF hupanda kwa kuenea kwa mfiduo na hatari ya jamaa vyote — hatari ya jamaa iliyoinuka kiasi (tuseme 1.5×) iliyoambatana na mfiduo wa kawaida sana inaweza kutoa PAF kubwa kuliko hatari ya jamaa ya kushangaza (tuseme 5×) iliyoambatana na adimu. Hiyo ndiyo sababu yote ya kuwepo kwake kama namba tofauti na hatari ya jamaa.

## Mfano uliokokotolewa

Sababu ya hatari ipo katika 30% ya idadi ya watu (`kuenea_kwa_walio_wazi = 0.3`) na huongeza hatari ya tokeo mara 2.5 (`hatari_ya_jamaa = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Kwa kesi 1,000/mwaka katika idadi ya watu:
Kesi zinazohusishwa = 1,000 × 0.3103 ≈ kesi 310/mwaka
```

Chini kidogo ya theluthi ya mzigo wa kila mwaka wa tokeo hili unahusishwa na mfiduo — kuuondoa kabisa (dari ya kinadharia; hakuna uingiliaji halisi unaofikia 100% ya kuondoa mfiduo) kungezuia takriban kesi 310 kati ya 1,000 kila mwaka.

## Uhusiano na uhandisi wa programu

PAF ni toleo la kiepidemiolojia la "ni sehemu gani ya kiasi cha matukio yetu inayohusishwa na chanzo hiki kimoja cha msingi?" — umbo lilelile la swali ambalo timu huuliza zinapopima aina mahususi ya utumaji au tegemezi dhidi ya jumla ya matukio ya uzalishaji, badala ya kuchukulia kila tukio kuwa linastahili kurekebishwa kwa njia ileile. Kategoria ya chanzo cha msingi iliyopo katika sehemu kubwa ya utumaji ikiwa na hatari ya jamaa ya wastani tu ya kusababisha tukio inaweza kuzidi kategoria adimu yenye hatari ya jamaa ya juu kwa mahali pa kutumia juhudi za uhandisi kwanza — hasa ufahamu wa PAF, ukitafsiriwa.

## Mitego

- **Kujumlisha PAF kati ya sababu za hatari**: PAF za sababu nyingi zinazoathiri tokeo lilelile hazijumlishi kuwa 100% — zinaweza kuzidi kwa jumla, kwa sababu sababu hushirikiana na kugawana njia za kisababishi. Chukulia kila PAF kama "kama sababu hii peke yake ingeondolewa", kamwe si kama mgawanyo wa hatari yote.
- **Kuhamisha hatari ya jamaa kati ya idadi za watu**: hatari ya jamaa iliyokadiriwa katika idadi moja ya watu (kuenea kwa mfiduo wa msingi tofauti, vigeu vya kuchanganya tofauti) hukokotoa PAF ya kupotosha inapotumika kwa kuenea kwa mfiduo wa idadi nyingine ya watu.
- **Kuchanganya PAF na hatari inayohusishwa kwa walio wazi**: PAF ni ya kiwango cha idadi ya watu na hutegemea kuenea kwa mfiduo; hatari inayohusishwa kwa walio wazi ni ya kiwango cha mtu binafsi na haitegemei. Hujibu maswali tofauti — usinukuu moja kujibu lingine.

## Vyanzo

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
