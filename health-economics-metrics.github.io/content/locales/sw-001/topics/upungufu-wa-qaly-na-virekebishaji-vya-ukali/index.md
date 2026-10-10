# Upungufu wa QALY na Virekebishaji vya Ukali

Upungufu wa QALY hupima ni kiasi gani cha afya ya baadaye ugonjwa unachukua kutoka kwa wagonjwa ikilinganishwa na idadi ya watu kwa jumla. NICE huutumia kutekeleza **virekebishaji vya ukali**: kadiri idadi ya watu inavyokuwa mgonjwa zaidi, kila QALY inayopatikana ina thamani zaidi — hadi mara 1.7 ya kizingiti cha kawaida.

## Kwa nini ni muhimu

Tangu mwongozo wa NICE wa 2022, ukali ni kizidisho wazi juu ya thamani ya faida za afya, ukichukua nafasi ya malipo ya zamani ya mwisho wa maisha. Teknolojia ya hali kali hupimwa dhidi ya kizingiti chenye ufanisi cha hadi ~£51,000/QALY badala ya £30,000. Ikiwa programu yako inahudumia idadi ya watu walioathirika vibaya (kushindwa kwa moyo kwa hali ya juu, ugonjwa mkali wa akili), kirekebishaji cha ukali kinaweza kuwa tofauti kati ya kesi ya kiuchumi inayoweza kufadhiliwa na isiyoweza — na unahitaji hisabati ya upungufu kukidai.

## Hisabati

Vipimo viwili, vinavyokokotolewa juu ya maisha yaliyobaki kwa kiwango cha sasa cha huduma:

```
Upungufu kamili     = QALY_idadi_ya_watu_kwa_jumla − QALY_zenye_hali
Upungufu wa uwiano  = Upungufu kamili / QALY_idadi_ya_watu_kwa_jumla
```

Uzani wa NICE 2022 (kipimo kinachotoa uzani wa juu zaidi ndicho kinachotumika):

```
Uzani ×1.0: kamili < 12 na uwiano < 0.85
Uzani ×1.2: kamili ≥ 12 au uwiano ≥ 0.85
Uzani ×1.7: kamili ≥ 18 au uwiano ≥ 0.95
```

Uzani huzidisha ΔE (au kwa usawa kizingiti): λ yenye ufanisi inakuwa £24k–£36k kwa ×1.2 na £34k–£51k kwa ×1.7.

## Mfano uliokokotolewa

Wagonjwa wenye hali kali, wastani wa umri miaka 60. Idadi ya watu kwa jumla katika miaka 60 inatarajia QALY 14.2 zilizopunguzwa thamani; wenye hali chini ya huduma ya sasa, 2.1.

```
Upungufu kamili    = 14.2 − 2.1 = 12.1  (≥ 12 → inastahili ×1.2)
Upungufu wa uwiano = 12.1 / 14.2 = 0.852 (≥ 0.85 → pia ×1.2)
```

ICER ya jukwaa lako la ufuatiliaji ni £26,000/QALY — juu ya hukumu ya kawaida ya kati ya £20k–£30k, mpakani. Kwa uzani wa ×1.2: ICER yenye ufanisi = 26,000 / 1.2 ≈ **£21,700/QALY** — inafadhilika kwa raha. Hesabu ya upungufu imesogeza uamuzi tu.

## Uhusiano na uhandisi wa programu

Uzani wa ukali ni toleo rasmi la kitu ambacho mashirika ya uhandisi hufanya kwa silika: kutumia zaidi kwa kila kitengo cha uboreshaji kwenye mifumo iliyo katika hali mbaya zaidi. Muundo unaohamishika — kokotoa "upungufu wa SLO" wa kila huduma (jinsi inavyoendeshwa chini ya msingi wake wenye afya unaotarajiwa, kikamilifu na kwa uwiano) na pima thamani ya urekebishaji ipasavyo. Hili linahalalisha, kwa hisabati badala ya hoja, kwa nini mfumo wa zamani unaoungua unapata uwekezaji zaidi kwa kila saa iliyookolewa kuliko ule wenye afya. Pia hubeba funzo lilelile la utawala: chapisha uzani *kabla* ya mkutano wa kuweka kipaumbele, vinginevyo kila timu hudai ukali.

## Mitego

- **Kukokotoa upungufu dhidi ya msingi usio sahihi**: hupimwa chini ya *kiwango cha sasa cha huduma*, si historia asilia isiyotibiwa.
- **Unyeti wa umri**: upungufu hutegemea sana umri wa idadi ya watu (wagonjwa wachanga wana QALY nyingi zaidi za kupoteza → upungufu kamili wa juu); tumia mgawanyo halisi wa umri wa idadi ya watu iliyotibiwa.
- **Kudhani kirekebishaji kinatumika mahali pengine** — ni utaratibu wa NICE (Uingereza); mashirika mengine ya HTA hushughulikia ukali tofauti (au hata kidogo).

## Vyanzo

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
