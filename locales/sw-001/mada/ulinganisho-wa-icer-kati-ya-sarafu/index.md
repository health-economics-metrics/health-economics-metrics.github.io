# Ulinganisho wa ICER Kati ya Sarafu

Kulinganisha [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/) iliyokokotolewa kwa sarafu ya nchi moja dhidi ya [kizingiti cha utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/) cha nchi nyingine — au kuunganisha data ya gharama iliyokusanywa katika jaribio la kimataifa — kunahitaji hatua wazi na inayoweza kukaguliwa ya ubadilishaji wa sarafu. Ukikosea mbinu ya ubadilishaji, ushahidi uleule wa msingi unaweza kugeuza uamuzi wa kupitisha, ingawa hakuna kilichobadilika katika data ya kikliniki au ya gharama.

## Kwa nini ni muhimu

Mwongozo wa mbinu wa ISPOR kwa majaribio ya kikliniki ya kimataifa (Willke na wenzake, *Health Economics*, 1998) unapendekeza kubadilisha gharama za rasilimali kwa kutumia **usawa wa nguvu ya ununuzi (PPP)** — si viwango vya ubadilishaji vya soko — wakati wa kulinganisha thamani halisi ya kiuchumi ya rasilimali kati ya nchi, na kuhifadhi viwango vya ubadilishaji wa fedha za kigeni vya soko kwa kile kilichokusudiwa kweli: kuiga mtiririko halisi wa malipo ya fedha taslimu kuvuka mipaka. Kuchanganya hivi viwili ni mojawapo ya makosa ya kawaida zaidi ya mbinu za HTA za kimataifa, hasa kwa sababu vyote viwili vinaonekana kama "kiwango cha ubadilishaji" kwa mtu ambaye hajasoma mwongozo, na lahajedwali haikuzuii kukosea.

## Hisabati

```
icer_kwa_sarafu_ya_ndani = badilisha(icer_kwa_sarafu_chanzo, kigezo_cha_ubadilishaji)

kigezo_cha_ubadilishaji kinapaswa kuwa:
  kigezo cha ubadilishaji cha PPP — kwa kulinganisha thamani halisi ya kiuchumi
                                    ya rasilimali kati ya nchi (kinapendekezwa na
                                    ISPOR kwa CEA ya kimataifa)
  kiwango cha soko (FX)           — kwa malipo halisi ya fedha taslimu kuvuka mipaka pekee

pitisha ikiwa icer_kwa_sarafu_ya_ndani < kizingiti_cha_ndani
```

Kanuni ya uamuzi yenyewe ni [kanuni ya kawaida ya kizingiti cha ICER](../vizingiti-vya-utayari-wa-kulipa/) — `pitisha ikiwa ICER < λ` — swali la kimbinu ambalo mada hii inashughulikia linahusu kabisa *kigezo kipi cha ubadilishaji* kinazalisha namba ya `icer_kwa_sarafu_ya_ndani` ambayo kanuni inatumika kwayo.

## Mfano uliokokotolewa

ICER ya dawa kutoka jaribio la Marekani ni $45,000/QALY. Nchi dhahania inayoagiza inaweka kizingiti chake cha mfano kwa £34,000/QALY (namba dhahania mahususi kwa nchi kwa mfano huu tu — vizingiti halisi hutofautiana kwa nchi na hubadilika kadiri muda unavyopita, na lazima vitajwe chanzo na tarehe).

**Kwa kutumia kigezo cha ubadilishaji cha PPP cha 0.72** (cha mfano, kwa mfano huu uliokokotolewa tu): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **pitisha**.

**Kwa kutumia kiwango cha soko cha 0.79** badala yake (cha mfano): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **kataa**.

ICER ileile ya msingi ya $45,000/QALY inazalisha uamuzi wa kupitisha chini ya ubadilishaji wa PPP na uamuzi wa kukataa chini ya ubadilishaji wa FX ya soko. Hii ni kielelezo madhubuti cha kwa nini mwongozo wa ISPOR unachukulia uchaguzi wa kigezo cha ubadilishaji kuwa wa maana kimbinu — si undani wa kuzungusha, na si kitu cha kuachwa kimya kimya katika fomula ya lahajedwali ambayo hakuna anayekagua mara mbili.

## Uhusiano na uhandisi wa programu

Hii ni kioo cha uchumi wa afya cha kikoa maarufu cha uhandisi: usahihi wa bei za sarafu nyingi za i18n/l10n katika programu za kibiashara, ambapo ukurasa wa bei wa SaaS haupaswi kamwe kulinganisha kimya kimya kiasi cha `$` na bei ya `£`. Dhamana ya kiwango cha aina ambayo aina ya `Money` iliyojengwa vizuri hutoa — mbinu za ulinganisho zinazokataa kulinganisha sarafu zisizolingana, zikilazimisha hatua wazi ya ubadilishaji kwanza — ni sambamba ya moja kwa moja ya uhandisi wa programu na hoja ya kimbinu ya uchumi wa afya hapa: usilinganishe namba ambazo hazijabadilishwa kati ya sarafu, na usiruhusu hatua ya ubadilishaji kuwa isiyo wazi au isiyoandikwa.

## Mitego

- **Kulinganisha kimya kimya kiasi katika sarafu tofauti**: kazi ya HTA ya lahajedwali ya muda mfupi inayotoa au kulinganisha namba ya dola na ya pauni bila hatua ya ubadilishaji kwanza — aina ya hitilafu ambayo aina halisi ya `Money` inayotambua sarafu hunasa kwa ujenzi badala ya kuiacha kama kosa la kimya.
- **Kuchanganya kiwango cha ubadilishaji cha soko na PPP**: kosa la kawaida zaidi la mbinu za HTA za kimataifa kulingana na mwongozo wa ISPOR — namba hizi mbili zinaweza kutofautiana sana na hujibu maswali tofauti (thamani halisi ya kiuchumi dhidi ya mtiririko halisi wa fedha taslimu).
- **Kutoweka tarehe kwenye kiwango cha ubadilishaji au faharasa ya PPP iliyotumika**: yote mawili husogea kadiri muda unavyopita, kwa hivyo kila kigezo cha ubadilishaji kinachonukuliwa lazima kiwe na tarehe vilevile hazina hii inavyoweka tarehe kwenye namba zake nyingine za vigezo (thamani za kaboni za Green Book, thamani ya kifo kilichozuiwa, n.k.).

## Vyanzo

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
