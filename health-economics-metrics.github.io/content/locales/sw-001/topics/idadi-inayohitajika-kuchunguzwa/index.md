# Idadi Inayohitajika Kuchunguzwa (NNS)

NNS ni idadi ya watu wanaopaswa kuchunguzwa — si kutibiwa tu — ili kuzuia **tokeo moja** baya ndani ya kipindi cha ufuatiliaji kilichofafanuliwa, kutokana na hatari ya msingi ya idadi ya watu na upunguzaji wa hatari wa jamaa unaofikiwa na ugunduzi wa mapema na matibabu. Ni mlinganisho wa NNT katika kiwango cha programu ya uchunguzi: NNT huuliza ni wangapi lazima *watibiwe* kuzuia tokeo moja; NNS huuliza ni wangapi lazima wapitie njia nzima ya *chunguza-kisha-tibu* ili kufika huko.

## Kwa nini ni muhimu

Rembold alianzisha NNS mwaka 1998 hasa ili programu za uchunguzi ziweze kulinganishwa kwa msingi mmoja na matibabu, kwa sababu upunguzaji wa hatari wa jamaa wa kichwa cha habari wa jaribio la uchunguzi huficha mambo mawili ambayo la matibabu halifichi: hatari ya msingi ya idadi ya watu inayoalikwa kuchunguzwa kweli, na ukweli kwamba kila aliyechunguzwa hubeba gharama ya jaribio na mzigo wa chanya za uongo, si wachache tu wanaonufaika. Lango la ufanisi wa gharama la Kamati ya Kitaifa ya Uchunguzi ya Uingereza (tazama [uchumi wa uchunguzi](../uchumi-wa-uchunguzi/)) limejengwa hasa juu ya tofauti hii — programu ya uchunguzi yenye upunguzaji wa hatari wa jamaa unaovutia katika idadi ya watu yenye hatari ya msingi ya chini bado inaweza kuwa na NNS katika maelfu, na wakati huo gharama ya programu kwa kila tokeo lililozuiwa inakuwa swali halisi.

## Hisabati

```
NNS = 1 / (hatari_ya_msingi × upunguzaji_wa_hatari_wa_jamaa)

hatari_ya_msingi           = uwezekano wa tokeo katika idadi ya watu
                             waliochunguzwa katika kipindi cha ufuatiliaji (0–1)
upunguzaji_wa_hatari_wa_jamaa = upunguzaji wa hatari wa uwiano unaofikiwa
                             kwa matibabu ya mapema yanayowezeshwa na uchunguzi (0–1)

Gharama ya programu kwa kila tokeo lililozuiwa = NNS × gharama_kwa_uchunguzi
```

Linganisha moja kwa moja na [NNT](../idadi-inayohitajika-kutibiwa/): NNS hukunja ufanisi wa funeli nzima ya chunguza → tambua → tibu kuwa namba moja, ambapo NNT tayari hudhani mgonjwa ametambuliwa na ameanza matibabu.

## Mfano uliokokotolewa

Idadi ya watu lengwa ya programu ya uchunguzi ina hatari ya msingi ya tukio ya 2% katika kipindi cha utafiti (`hatari_ya_msingi = 0.02`), na ugunduzi wa mapema unafikia upunguzaji wa hatari wa jamaa wa 25% (`upunguzaji_wa_hatari_wa_jamaa = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

Watu 200 lazima wachunguzwe kuzuia tokeo moja.

Kwa £50 kwa kila uchunguzi:
Gharama ya programu kwa kila tokeo lililozuiwa = 200 × £50 = £10,000
```

Namba hiyo ya £10,000 ndiyo inapaswa kupimwa dhidi ya gharama ya tokeo lenyewe na QALY ambazo lingegharimu — ulinganisho uleule ambao [uchumi wa kinga](../uchumi-wa-kinga/) hufanya kwa programu za kinga kwa ujumla.

## Uhusiano na uhandisi wa programu

NNS ni "watumiaji, matukio, au maombi mangapi lazima yapitie mtiririko wa ugunduzi au triage ili kukamata chanya moja ya kweli inayostahili kutendewa" — muhimu moja kwa moja kwa ufuatiliaji unaotegemea tahadhari na mifumo ya triage, ambapo kuenea kwa hali lengwa kwa chini hukuza NNS jinsi inavyoporomosha thamani ya utabiri chanya (tazama [uchumi wa uchunguzi](../uchumi-wa-uchunguzi/) na [tathmini ya AI ya kikliniki](../tathmini-ya-ai-ya-kikliniki/)). Kanuni ya ufuatiliaji inayopaswa kuchakata matukio 200 kwa kila kukamata halisi inastahili kuendeshwa tu ikiwa kukamata kuna thamani ya angalau mara 200 ya gharama ya triage kwa tukio — hesabu ileile na mfano wa afya hapo juu.

## Mitego

- **Kupuuza utegemezi wa hatari ya msingi**: jaribio au programu ileile ya uchunguzi ina NNS tofauti sana — na ufanisi wa gharama — katika idadi ya watu wa hatari kubwa ikilinganishwa na ile ya hatari ndogo. Kamwe usinukuu NNS bila kutaja idadi ya watu iliyokokotolewa kwa ajili yake.
- **Kuhesabu kigawanyo kisicho sahihi**: NNS huhesabu watu *waliochunguzwa*, si watu wanaopimwa chanya au kuanza matibabu — tayari inajumuisha ufanisi wa funeli nzima, kwa hivyo haipaswi kamwe kulinganishwa na kipimo kinachohesabiwa juu ya chanya pekee.
- **Kulinganisha kati ya vipindi vya ufuatiliaji**: kipindi kifupi cha ufuatiliaji kwa ujumla hukuza NNS, kwa sababu matukio machache huonekana katika dirisha. Namba za NNS zinalinganishika tu zinapokokotolewa kwa muda ule ule wa ufuatiliaji.

## Vyanzo

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
