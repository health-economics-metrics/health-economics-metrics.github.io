# Mbinu ya Mtaji wa Binadamu dhidi ya Mbinu ya Gharama ya Msuguano

Hizi ni mbinu mbili shindani za kuthamini tija iliyopotea — kutokana na ugonjwa, ulemavu, au kifo — katika tafiti za gharama ya ugonjwa na gharama-manufaa. Mbinu ya Mtaji wa Binadamu (HCA) huthamini pato lote lililopotea kwa muda kamili wa kutokuwepo kwa kiwango cha mshahara; Mbinu ya Gharama ya Msuguano (FCM) huithamini tu kwa kipindi kifupi ambacho mwajiri anahitaji kweli kurejesha uzalishaji. Kuchagua kati yake hubadilisha kadirio la gharama zisizo za moja kwa moja kwa mara mbili au zaidi.

## Kwa nini ni muhimu

Gharama zisizo za moja kwa moja (za tija) ni mojawapo ya vipengele vinavyobishaniwa zaidi katika uchumi wa afya hasa kwa sababu mbinu mbili za kawaida zinatofautiana vikali. HCA huchukulia kila siku ya kutokuwepo kama siku ya pato ambayo uchumi unapoteza kweli, ikithaminiwa kwa mshahara kamili kwa muda kamili — au, kwa kifo au ulemavu wa kudumu, kwa maisha yaliyobaki ya kazi. FCM inahoji kwamba katika uchumi wenye ukosefu wa ajira na ulegevu wa soko la kazi, sehemu kubwa ya kutokuwepo kwa muda mrefu haipunguzi pato la taifa kweli mwajiri anapomfunza mbadala au kugawa upya kazi; "kipindi cha msuguano" tu — muda wa kurejesha uzalishaji kwenye kiwango cha awali — ndicho kinachowakilisha hasara halisi. FCM kwa hivyo hutoa kwa utaratibu makadirio ya chini, ya tahadhari zaidi ya gharama zisizo za moja kwa moja kuliko HCA, na mbinu hizi mbili si tanbihi zinazobadilishana: ni nadharia tofauti za kiuchumi kuhusu "tija iliyopotea" inamaanisha nini. Hii pia ndiyo sababu [kesi ya rejea ya NICE](../tathmini-ya-teknolojia-ya-afya/) huondoa gharama za tija kwa chaguo-msingi, ikizipoti, ikiwa ni lazima, kama uchambuzi tofauti wa unyeti wa mtazamo wa kijamii badala ya kuzichanganya kwenye ICER ya kesi ya rejea — tazama [mtazamo wa uchambuzi](../mtazamo-wa-uchambuzi/).

## Hisabati

```
Mbinu ya Mtaji wa Binadamu:
HCA_gharama = mshahara_wa_siku × siku_zilizopotea

Mbinu ya Gharama ya Msuguano (iliyorahisishwa, fomu iliyofungwa kwa kipindi cha msuguano):
FCM_gharama = mshahara_wa_siku × min(siku_zilizopotea, siku_za_kipindi_cha_msuguano)

siku_za_kipindi_cha_msuguano = kadirio mahususi la nchi/sekta la muda wa kurejesha
                               uzalishaji (kihistoria ~siku 85 katika mwongozo wa
                               ugharamiaji wa iMTA ya Uholanzi; hutofautiana kwa nchi
                               na hukadiriwa upya mara kwa mara)
```

Mgogoro wote kati ya mbinu mbili uko katika `min()`: HCA haiwekei kikomo `siku_zilizopotea` kamwe, kwa hivyo gharama inaendelea kukua kwa kutokuwepo kote, wakati FCM huweka kikomo cha siku zinazohesabiwa kwa kipindi cha msuguano, bila kujali kutokuwepo halisi kunaendelea kwa muda gani.

## Mfano uliokokotolewa

Mfanyakazi hayupo kazini kwa `siku_zilizopotea = 180` siku, akipata `mshahara_wa_siku = £150`.

**Mbinu ya Mtaji wa Binadamu**:

```
HCA_gharama = 150 × 180 = £27,000
```

**Mbinu ya Gharama ya Msuguano**, kwa kipindi cha msuguano cha `siku_za_kipindi_cha_msuguano = 85` (kigezo cha kihistoria cha iMTA ya Uholanzi, kama ilivyo katika ukadiriaji upya wa mara kwa mara wa mwongozo):

```
FCM_gharama = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12,750 za FCM ni chini ya nusu ya £27,000 za HCA kwa kutokuwepo *kuleule* — uchaguzi wa mbinu peke yake hubadilisha kesi ya gharama ya ugonjwa kwa kiasi kikubwa, kabla dhana nyingine yoyote haijaguswa.

## Uhusiano na uhandisi wa programu

Hii inaoana moja kwa moja na jinsi timu inavyothamini mhandisi kuondoka:

- **Ugharamiaji wa kuondoka kwa mtindo wa HCA**: kuthamini hasara kama mshahara kamili wa mhandisi aliyeondoka kwa muda wowote nafasi inapobaki wazi. Hili ni toleo la kijinga la modeli nyingi za gharama ya kuondoka, na hukuza hasara kwa sababu ileile HCA hukuza hasara ya tija — hudhani uwezo ulioachwa wazi ulikuwa na tija kamili muda wote na hakuna kingine kilichonyonya ulegevu. Tazama [kubakiza nguvu kazi](../kubaki-kwa-nguvu-kazi/), ambayo hupima mnyororo wa uajiri/kuingiza/kufidia nafasi ambao mbinu hii inalisha.
- **Ugharamiaji wa kuondoka kwa mtindo wa FCM**: kuthamini hasara kwa muda halisi wa kujaza nafasi na kumpandisha mbadala — "kipindi cha msuguano" cha uhandisi. Hii ndiyo namba inayotetewa zaidi kwa hoja ya biashara, hasa kama FCM ndiyo chaguo la tahadhari zaidi katika utafiti wa gharama ya ugonjwa.
- Nidhamu ya msingi ni ileile katika [gharama ya fursa](../gharama-ya-fursa/): thamini rasilimali iliyohamishwa kwa kile kinachopotea kweli, si kwa muda wa kichwa cha habari ukizidishwa kwa kiwango.

## Mitego

- **Kuchanganya HCA na FCM ndani ya uchambuzi mmoja, au kuripoti moja tu bila kufichua uchaguzi.** Data ileile ya kutokuwepo inaweza kutoa tofauti ya mara 2+ katika gharama iliyoripotiwa kulingana na mbinu; uchaguzi lazima utajwe, usizikwe.
- **Kutumia HCA kwa kesi ya mtazamo wa kijamii bila kuiweka alama kama uchambuzi wa unyeti.** Kesi ya rejea ya NICE inaondoa gharama za tija waziwazi; kadirio la HCA la mtazamo wa kijamii linastahili kuwa katika uchambuzi wa hali, si ICER ya kichwa cha habari.
- **Kutumia mbinu yoyote kwa kazi isiyolipwa au isiyo ya soko (mf. ulezi) bila marekebisho.** Mbinu zote mbili hudhani kielelezo cha kiwango cha mshahara kwa thamani, ambacho hakihamishiki vizuri kwa kazi isiyo na mshahara wa soko.

## Vyanzo

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
