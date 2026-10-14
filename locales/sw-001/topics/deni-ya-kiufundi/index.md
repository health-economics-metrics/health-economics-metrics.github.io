# Deni ya Kiufundi

Deni la kiufundi ni gharama ya baadaye inayodokezwa ya maamuzi ya haraka ya zamani katika msingi wa msimbo: kazi ya marekebisho inayodaiwa (**mtaji**) na mzigo unaoendelea unaoweka kwenye utoaji (**riba**). Mbinu za kupima kama SQALE hulibadilisha kutoka tashbihi kuwa dhima iliyogharimiwa.

## Kwa nini ni muhimu

Bila kupimwa, deni la kiufundi ni lalamiko; likipimwa, ni hoja ya biashara. Vigezo vya sekta (CAST Appmarq, programu 1,400 / mistari milioni 550 ya msimbo): kihistoria ≈ **$3.61 ya mtaji wa deni la kiufundi kwa kila mstari wa msimbo**, ambapo misingi ya msimbo ya kawaida hubeba uwiano wa deni wa 15–20% ya gharama ya kujenga upya, dhidi ya kiwango cha afya kinachotumika sana cha ≤5% (daraja "A" la SonarQube). Mfumo wa uchumi wa afya unafaa kikamilifu: deni ni *hali sugu* — isipotibiwa, inaendelea, "riba" yake huongezeka kama utoaji wa polepole na viwango vya juu vya kasoro, na marekebisho hushindania uwezo na kazi ya vipengele kama kinga inavyoshindana na matibabu.

## Hisabati

```
Mtaji wa SQALE = Σ juu ya ukiukaji (muda wa marekebisho) × kiwango cha gharama ya msanidi
Uwiano wa deni la kiufundi (TDR) = gharama ya marekebisho / gharama ya kuendeleza upya × 100
                    (madaraja ya SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Riba (namba inayohalalisha kulipa):
  riba/mwaka = Δ kasi ya utoaji × thamani kwa kila kitengo cha kasi
             + Δ kiwango cha kasoro × gharama kwa kila kasoro
Hoja ya kulipa = PV(riba iliyoepukwa katika upeo wa muda) − gharama ya marekebisho
                (imepunguzwa thamani — tazama discounting-and-time-preference.md)
```

Mtaji unaeleza dhima; **riba** hujenga hoja ya uwekezaji. Kulipa mtaji wa £500k kuepuka riba ya £40k/mwaka ni biashara mbaya; kuepuka £400k/mwaka, bora.

## Mfano uliokokotolewa

Safu ya muunganisho wa rekodi za kikliniki ya mistari 400k ya msimbo: mtaji wa SQALE saa 3,800 × £75 = **£285k**; TDR ≈ 12% (daraja C). Riba iliyopimwa: timu zinazogusa safu hii zinaonyesha muda wa mzunguko mrefu kwa 40% na viwango vya kushindwa kwa mabadiliko mara 2 ikilinganishwa na msingi wa mali yote. Safu hii inameza saa 6,000 za wasanidi/mwaka:

```
Riba ≈ 6,000 × 0.40 × £75         = £180,000/mwaka (mzigo wa kasi)
     + kushindwa 12 zaidi × £8,000 = £96,000/mwaka (kufanya upya/matukio)
     ≈ £276,000/mwaka

Rekebisha 30% mbaya zaidi ya mtaji (£85k) ukilenga maeneo moto → punguzo la riba
lililoigizwa 60%: huokoa ~£166k/mwaka. Kurudisha ≈ miezi 6.
```

Kulenga maeneo moto ni muhimu: riba ya deni hujilimbikiza ambapo mara kwa mara ya mabadiliko × msongamano wa deni hufikia kilele — kurekebisha deni linalogusiwa mara chache hakununui chochote, kama kutibu hali ambayo isingeendelea kamwe ([uchumi wa kinga](../uchumi-wa-kinga/)).

## Uhusiano na uhandisi wa programu

Uagizaji wa uchumi wa afya unaoboresha hoja za deni la kiufundi: eleza mali kama **orodha ya mzigo** ([DALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ulemavu/) kwa mtindo — wapi miaka ya uhandisi yenye afya iliyopotea?); halalisha kulipa kwa hisabati ya maendeleo, kwa uaminifu (kwa kawaida ni na ufanisi wa gharama, si ya kuokoa gharama); pima marekebisho ya mifumo mibaya zaidi kwa [upungufu wa ukali](../upungufu-wa-qaly-na-virekebishaji-vya-ukali/); na wasilisha mapendekezo makubwa ya marekebisho kwa uchambuzi wa offset unaonusurika kanuni za [gharama za chini ya mkondo zilizoepukwa](../gharama-za-chini-ya-mkondo-zilizoepukwa/) — uliopimwa kwa uwezekano, uliopunguzwa thamani, uliohesabiwa mara moja.

## Mitego

- **Kuripoti mtaji tu**: namba kubwa ya kutisha isiyo na kadirio la riba haihalalishi chochote.
- **Kuchukua namba za deni zinazozalishwa na zana kihalisi**: SQALE huhesabu ukiukaji wa kanuni; hukosa deni la usanifu (aina ghali) na huhesabu mambo madogo.
- **Utopia ya deni-sifuri**: kiwango bora cha deni si sifuri — deni ni nguvu ya kukopa; swali ni kiwango cha riba.
- **"Kuandika upya kunaepuka yote"**: mapendekezo ya kuandika upya lazima yapite kanuni zilezile za offset — gharama ya kinyume, uwezekano, kupunguza thamani.

## Vyanzo

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
