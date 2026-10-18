# Idadi Inayohitajika Kutibiwa (NNT)

NNT ni idadi ya wagonjwa wanaopaswa kupokea uingiliaji ili mgonjwa **mmoja** wa ziada anufaike, katika kipindi kilichotajwa. Hubadilisha upunguzaji wa hatari kwa asilimia — unaopotosha — kuwa vitengo vya juhudi-kwa-manufaa ambavyo mtu yeyote anaweza kuvijadili.

## Kwa nini ni muhimu

"Hupunguza mashambulizi ya moyo kwa 25%!" husikika madhubuti. Ikiwa hatari ya msingi ni 4% katika miaka 5, upunguzaji kamili ni pointi 1 ya asilimia, kwa hivyo **watu 100 lazima watumie dawa kwa miaka 5 ili 1 anufaike** — na wote 100 hulipa gharama na athari mbaya. NNT ni dawa ya kinga dhidi ya uuzaji wa hatari ya jamaa, ndiyo maana tiba inayotegemea ushahidi huanza nayo. Statini kwa kinga ya awali: NNT ≈ 50–100 katika miaka 5 kwa kila shambulio la moyo lililoepukwa. Kioo chake, **NNH** (idadi inayohitajika kudhurika), huhesabu ni wangapi wametibiwa kwa kila mtu aliyedhurika.

## Hisabati

```
ARR = kiwango cha matukio cha udhibiti − kiwango cha matukio cha matibabu   (upunguzaji kamili wa hatari)
NNT = 1 / ARR

NNH = 1 / (kiwango cha madhara_matibabu − kiwango cha madhara_udhibiti)

Daraja la kiuchumi:
gharama kwa kila tukio lililozuiwa = NNT × gharama kwa kila kozi ya matibabu
```

Taja daima kipindi na idadi ya msingi ya watu — NNT haina maana bila yote mawili.

## Mfano uliokokotolewa

Mfumo wa kutabiri kuanguka hospitalini huweka alama wagonjwa wa hatari kubwa kwa uingiliaji (vihisi vya kitanda, mapitio, usimamizi). Jaribio: kuanguka kwa majeraha kunashuka kutoka 3.2% hadi 2.4% ya waliolazwa.

```
ARR = pointi 0.8 → NNT = 1/0.008 = 125
   (wagonjwa 125 lazima wapate kifurushi cha uingiliaji kuzuia kuanguka 1 kwa majeraha)

Gharama ya uingiliaji ≈ £40/mgonjwa → gharama kwa kila kuanguka kulikozuiwa = 125 × 40 = £5,000
Gharama ya kuanguka kwa majeraha kwa mgonjwa aliyelazwa (kukaa zaidi, upigaji picha, madai) ≈ £12,000
Halisi: kinga inalipa ~2.4:1 — na faida ya QALY juu yake.
```

Zingatia jinsi NNT inavyoweka dai kuwa la uaminifu: "hupunguza kuanguka kwa 25%" na "huzuia kuanguka mara moja kwa kila wagonjwa 125 waliotibiwa" ni matokeo yaleyale, yanayoshawishi tofauti.

## Uhusiano na uhandisi wa programu

NNT ni kitengo sahihi kwa lango au ukaguzi wowote unaofanya kazi kwenye vitu vingi kukamata vichache: **"idadi ya PR zinazopaswa kupita lango la mapitio la AI ili kukamata kasoro moja inayoelekea uzalishaji."** Ikiwa lango linapitia PR 400 kwa kila kukamata kweli (NNT = 400) kwa dakika 4 za umakini wa msanidi kila moja, kukamata kumoja kunagharimu ~saa 27 za wasanidi — sasa linganisha na gharama ya tukio inayozuia. NNH inaoana na chanya za uongo: PR ngapi kwa kila alama *ya uongo*, na kila moja inagharimu nini katika umakini na imani? Zana za mtindo wa uchunguzi (linters, skana za usalama, ugunduzi wa hitilafu) zinapaswa kuja na hesabu ya NNT/NNH — tazama [uchumi wa uchunguzi](../uchumi-wa-uchunguzi/) kwa kwa nini kuenea kwa chini hufanya namba hizi kuwa za ukatili. [Idadi inayohitajika kuchunguzwa](../idadi-inayohitajika-kuchunguzwa/) ni namba sawa ngazi moja juu, kwa programu nzima ya chunguza-kisha-tibu badala ya matibabu peke yake.

## Mitego

- **Hakuna kipindi**: "NNT = 50" haimaanishi chochote; "NNT = 50 katika miaka 5" ni dai.
- **Kupandikiza hatari ya msingi**: NNT iliyokokotolewa katika idadi ya watu wa jaribio la hatari kubwa huporomoka katika idadi ya usambazaji ya hatari ndogo.
- **Kupuuza NNH** — lango lenye NNT 400 na NNH 3 ni jenereta ya kero, si mfumo wa usalama.

## Vyanzo

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
