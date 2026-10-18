# Manufaa Halisi ya Kifedha (NMB)

NMB hubadilisha matokeo ya ufanisi wa gharama kuwa thamani moja ya fedha: faida ya afya iliyowekewa bei kwenye kizingiti cha utayari wa kulipa, ukitoa gharama. Pacha wake, Manufaa Halisi ya Afya (NHB), hueleza kanuni ileile kwa vitengo vya afya.

## Kwa nini ni muhimu

Uwiano ([ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/)) ni vigumu kushughulikia: hulipuka karibu na athari sifuri, hauwezi kukokotolewa wastani juu ya michoro ya kutokuwa na uhakika, na hauwezi kupanga chaguo tatu au zaidi kwa usafi. NMB hurekebisha yote hayo — ni ya mstari, kwa hivyo unaweza kupanga chaguo, kukokotoa wastani wa michoro ya Monte Carlo, na kugawanya michango. Pia ni muundo wa hisabati ya uchumi wa afya ambao kila mhandisi tayari anaujua: *thamani ukitoa gharama*.

## Hisabati

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = athari ya nyongeza (mf. QALY)
ΔC = gharama ya nyongeza
λ  = kizingiti cha utayari wa kulipa (tazama willingness-to-pay-thresholds.md)

Kanuni ya uamuzi: pitisha ikiwa NMB > 0 (kwa usawa NHB > 0).
Miongoni mwa mbadala: chagua NMB ya juu zaidi.
```

NMB > 0 ⇔ ICER < λ (wakati ΔE > 0), kwa hivyo kanuni hizi mbili zinakubaliana — NMB hufanya vizuri zaidi tu.

## Mfano uliokokotolewa

Chaguo tatu kwa huduma ya kisukari, kwa wagonjwa 1,000, λ = £20,000/QALY:

```
Chaguo              ΔC          ΔE (QALY)   NMB = 20,000×ΔE − ΔC
Programu + ukocha   £400,000    30          600,000 − 400,000 = £200,000
Programu tu         £150,000    12          240,000 − 150,000 = £90,000
Kliniki za ziada    £700,000    32          640,000 − 700,000 = −£60,000
```

Kliniki za ziada hupata QALY nyingi zaidi lakini huharibu thamani kwenye kizingiti hiki (NMB < 0). Programu + ukocha hushinda. Zingatia NMB inakuwezesha *kupanga zote tatu kwa mara moja* — ICER za jozi zingehitaji utaratibu wa mpaka katika [utawala na mpaka wa ufanisi](../utawala-na-mpaka-wa-ufanisi/), na kufikia jibu lilelile.

Mtazamo wa NHB wa mshindi: 30 − 400,000/20,000 = 30 − 20 = **QALY 10 halisi** — afya iliyopatikana zaidi ya ile ambayo fedha zilezile zingezalisha mahali pengine.

## Uhusiano na uhandisi wa programu

`(saa zilizookolewa × kiwango cha saa kilichojumuishwa) − gharama ya zana` — hoja ya biashara ya kila siku ya zana — ni hesabu ya NMB kihalisi yenye λ = gharama iliyojumuishwa ya mhandisi. Maboresho mawili ambayo uchumi wa afya unaongeza:

- **Fanya λ kuwa kigeu, si kigezo thabiti.** Chora NMB dhidi ya λ ("thamani ya saa ya mhandisi") na onyesha uamuzi unapogeuka; wadau tofauti wanaweza kisha kutumia uthamini wao bila kurudia hisabati yako.
- **Fikra za NHB**: "jukwaa hili linaokoa saa 5,000 za wahandisi lakini linatumia bajeti ambayo ingenunua saa 3,000 za uwezo wa wakandarasi — halisi saa 2,000" inalazimisha ulinganisho wa gharama ya fursa katika vitengo vya uwezo. Tazama [gharama ya fursa](../gharama-ya-fursa/).

## Mitego

- **Kuficha kizingiti**: NMB haina maana bila kutaja λ; ripoti NMB kwa £20k na £30k, au chora mkunjo.
- **Kutumia NMB kusafisha athari ndogo**: idadi kubwa ya watu mara athari ndogo kwa kila mtu inaweza kutoa NMB kubwa — ripoti athari kwa kila mtu pamoja.
- **Kusahau kwamba NMB hurithi kila kutokuwa na uhakika** katika ΔC na ΔE — ioanishe na [uchambuzi wa unyeti wa uwezekano](../uchambuzi-wa-unyeti-wa-uwezekano/).

## Vyanzo

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
