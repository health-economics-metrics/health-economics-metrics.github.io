# Uchomozi wa Matumizi kwa Kubadilishana Muda (TTO)

TTO ni mbinu ya kawaida ya kuchomoa thamani ya matumizi ya hali ya afya moja kwa moja kutoka kwa mhojiwa, badala ya kuibuni. Ni mojawapo ya mbinu za uchomozi — pamoja na kamari ya kawaida na majaribio ya uchaguzi tofauti — zinazozalisha seti za thamani nyuma ya vyombo kama [EQ-5D](../eq-5d/), na hivyo nyuma ya hesabu nyingi za [QALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ubora/) zinazofuata.

## Kwa nini ni muhimu

Kila uzito wa matumizi unaolisha hesabu ya QALY ulipaswa kutoka mahali fulani. TTO ndiyo njia: kwa hali inayochukuliwa kuwa bora kuliko kifo, mhojiwa anaulizwa ni miaka mingapi `X` katika afya kamili angeiona sawa na miaka `T` katika hali iliyodhoofika (`X < T`); matumizi ni `X / T`. Kwa hali ambayo baadhi ya wahojiwa wanaichukulia kuwa mbaya kuliko kifo, fomula ya kawaida huvunjika (haiwezi kuwakilisha matumizi chini ya sifuri kwa usafi), kwa hivyo TTO iliyopanuliwa hutumika. Mhandisi wa programu au mchambuzi anayechukulia uzito wa matumizi kama pembejeo iliyotolewa, bila kujua ulihitaji itifaki iliyothibitishwa ya uchomozi kuuzalisha, yuko hatua moja mbali na namba asiyoweza kuitetea akipingwa.

## Hisabati

```
TTO ya kawaida (hali bora kuliko kifo):
  matumizi = muda_katika_afya_kamili / muda_katika_hali_iliyodhoofika

TTO iliyopanuliwa (hali mbaya kuliko kifo):
  matumizi = -muda_uliobadilishwa_kwa_kifo / (muda_wote - muda_uliobadilishwa_kwa_kifo)
```

`muda_katika_afya_kamili` / `muda_katika_hali_iliyodhoofika` — miaka `X` katika afya kamili inayohukumiwa sawa na miaka `T` katika hali iliyodhoofika. `muda_uliobadilishwa_kwa_kifo` / `muda_wote` — katika uundaji wa mbaya-kuliko-kifo, miaka `a` ya maisha yaliyosalia ya miaka `T` ambayo mhojiwa angebadilisha kwa kifo cha papo hapo, akipendelea miaka `T − a` katika afya kamili ikifuatiwa na kifo badala ya miaka `T` katika hali mbaya kuliko kifo. Matokeo ni hasi, yamefungwa ili kifo = 0.

## Mfano uliokokotolewa

**Ya kawaida**: mhojiwa yuko katika hali iliyodhoofika kwa miaka 10 na hajali kati ya hiyo na miaka 7 katika afya kamili: matumizi = 7 / 10 = **0.7**.

**Mbaya kuliko kifo**: katika maisha yaliyosalia ya miaka 10, mhojiwa angebadilisha miaka 2 kwa kifo cha papo hapo — anapendelea miaka 8 katika afya kamili ikifuatiwa na kifo badala ya miaka 10 katika hali mbaya kuliko kifo: matumizi = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Uhusiano na uhandisi wa programu

Hoja ileile ambayo utafiti wa DevEx au ushiriki hukumbana nayo unapowaomba watu kukadiria kitu kwa kipimo cha 0–10 kisichochunguzwa inatumika hapa kinyume: TTO ipo hasa kwa sababu "waombe watu tu wakadirie" si mbinu iliyothibitishwa ya uchomozi yenyewe. Kabla ya kujenga faharasa mchanganyiko — alama ya DevEx, faharasa ya ushiriki, kipimo cha uchovu — juu ya namba iliyokadiriwa binafsi, uliza ni nini kilichoichomoa na kama mbinu hiyo ilithibitishwa, swali lilelile ambalo wachumi wa afya huuliza kuhusu uzito wa matumizi kabla haujaingia kwenye QALY.

## Mitego

- **Kujumlisha thamani ya mtu mmoja**: thamani za TTO huchomolewa kutoka kwa *sampuli* ya umma kwa jumla (au wagonjwa), si mtu ambaye huduma yake inaamuliwa — kutumia thamani ya TTO ya mhojiwa mmoja kana kwamba inajumlika ni kosa la sampuli.
- **Uundaji usio sahihi kwa hali**: fomula ya kawaida ya TTO inadhani hali ni bora kuliko kifo bila shaka; kuitumia kwa hali ambayo baadhi ya wahojiwa wangeiona mbaya kuliko kifo, bila kubadilisha hadi uundaji uliopanuliwa, kimya kimya huzalisha matumizi yasiyo sahihi (chanya).
- **Muda usiolinganika**: thamani za TTO zilizochomolewa kwa muda tofauti wa maisha yaliyosalia `T` kwa ulinganisho wa mbaya-kuliko-kifo hazilinganishwi moja kwa moja bila kukagua kama muundo wa utafiti uliweka `T` thabiti.

## Vyanzo

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
