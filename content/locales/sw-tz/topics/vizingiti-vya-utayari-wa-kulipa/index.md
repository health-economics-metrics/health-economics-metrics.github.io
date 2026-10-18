# Vizingiti vya Utayari wa Kulipa

Kizingiti cha utayari wa kulipa (WTP) ni kiwango cha juu zaidi ambacho mwamuzi yuko tayari kulipa kwa kila kitengo cha faida ya afya — mstari unaogeuza [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/) kuwa uamuzi wa kupitisha/kukataa.

## Kwa nini ni muhimu

Kizingiti ndipo uchumi wa afya unapoacha kuwa kipimo na kuwa sera. Kila mfumo wa kitaifa una kimoja, wazi au fiche, na kujua namba ya eneo lako kunakuambia hasa jinsi ya kuweka bei ya dai la thamani ya afya:

| Chombo | Kizingiti (kama kilivyotafitiwa, 2024–2025) |
|---|---|
| NICE (Uingereza) | £20,000–£30,000 kwa QALY; wastani wa kimajaribio wa kizingiti cha uamuzi ≈ £24,400 (2022–24); vigeuzi vya ukali huinua dari halisi hadi ~£36k–£51k; teknolojia maalum sana hadi £100k+ |
| ICER (Marekani, isiyo ya kiserikali) | vigezo vya bei vya $100,000–$150,000 kwa QALY/evLYG; huripoti masafa ya $50k–$200k |
| Kanada (CADTH / CDA-AMC) | kizingiti cha kufanyia kazi ≈ CAD$50,000 kwa QALY |
| WHO-CHOICE (kihistoria, kimataifa) | mara 1–3 ya GDP kwa kila mtu kwa DALY iliyoepukwa (sasa haishauriwi kwa kuwa butu mno) |
| Upande wa ugavi wa kimajaribio wa Uingereza (Claxton na wenzake) | ≈ £13,000 kwa QALY inayochukuliwa mahali pake kweli pembezoni mwa NHS |

## Hisabati

Kizingiti λ huingia katika kila kanuni ya uamuzi:

```
Pitisha ikiwa ICER = ΔC/ΔE < λ
Kwa usawa: pitisha ikiwa NMB = λ×ΔE − ΔC > 0
```

Nadharia mbili kuhusu λ *ni nini*:

- **Upande wa mahitaji**: kile jamii iko tayari kulipa kwa afya (hukumu ya thamani).
- **Upande wa ugavi**: afya ambayo bajeti inazalisha sasa pembezoni (kiasi cha kimajaribio — ~£13k/QALY ya Claxton). Ikiwa λ inayotumika kwa maamuzi inazidi kiwango cha upande wa ugavi, kuidhinisha teknolojia mpya huchukua nafasi ya afya zaidi kuliko inavyoongeza.

## Mfano uliokokotolewa

Tiba yako ya kidijitali inatoa QALY 0.05 kwa kila mgonjwa anayetibiwa kwa gharama halisi (bei ukitoa offset) ya £800.

```
ICER = 800 / 0.05 = £16,000 kwa QALY
```

- Uingereza: chini ya £20k → inaweza kufadhiliwa. Bei ya juu inayoweza kutetewa: kwa λ = £20,000, bei_juu = 0.05 × 20,000 + offset = £1,000 + offset.
- Uundaji wa kibiashara wa Marekani kwa $150k/QALY: bei inayotegemea thamani ni ya juu zaidi.
- Kizingiti cha nchi yenye GDP kwa kila mtu ya $4,000: bidhaa ileile lazima igharimu chini ya ~$200 halisi.

Bidhaa ileile, masoko matatu, bei tatu — kizingiti *ndiyo* modeli ya kuweka bei. Hii ni bei inayotegemea thamani, inayoendeshwa kinyume kutoka λ.

## Uhusiano na uhandisi wa programu

Kila shirika la uhandisi lina λ fiche: kiwango ambacho hufadhili zana kwa kila saa ya mhandisi iliyookolewa. Kukifanya kiwe wazi — "tunafadhili chochote chini ya £40 kwa kila saa ya mhandisi inayoaminika iliyookolewa" — huwezesha ulinganisho wa jedwali la ligi la uwekezaji wa jukwaa, kama jedwali za ligi za gharama kwa QALY zinavyopanga matumizi ya afya. Somo la upande wa ugavi pia linahamia: λ yako halisi ya ndani ni kile mrundikano wako *wa sasa* unachozalisha pembezoni, si kile uongozi unachosema muda unastahili.

## Mitego

- **Kununua kizingiti** kati ya mamlaka au kunukuu dari ya HST kwa bidhaa ya kawaida.
- **Kuchukulia λ kama sakafu ya bei**: kupita kizingiti ni lazima, si kinatosha — [athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) bado zinaweza kuzamisha bidhaa inayomudu kwa kila kitengo.
- **Kupuuza kwamba vizingiti vinasonga**: vigeuzi vya ukali vya NICE (2022) na mapitio ya mara kwa mara hubadilisha λ halisi; tia tarehe kwenye madai yako.
- **Kulinganisha ICER dhidi ya kizingiti katika sarafu tofauti bila kubadilisha kwanza**: tazama [ulinganisho wa ICER kati ya sarafu](../ulinganisho-wa-icer-kati-ya-sarafu/) — njia ya ubadilishaji (usawa wa nguvu ya ununuzi dhidi ya kiwango cha soko cha ubadilishaji) ni ya matokeo makubwa kimbinu, si undani wa kuzungusha.
- **Kuchanganya uthamini wa msingi wa λ na mapokeo ya VSL/VPF ya soko la ajira**: haya yanatoka katika mapokeo tofauti ya kinadharia (mbinu iliyobanwa na bajeti ya afya dhidi ya mapendeleo yaliyofichuliwa kutoka mabadilishano ya mshahara-hatari) na hayapatanishwi kila mara — kwa mbinu mbadala ya mapendeleo yaliyofichuliwa ya kuthamini maisha, tazama [Thamani ya Maisha ya Kitakwimu](../thamani-ya-maisha-ya-kitakwimu/).

## Vyanzo

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
