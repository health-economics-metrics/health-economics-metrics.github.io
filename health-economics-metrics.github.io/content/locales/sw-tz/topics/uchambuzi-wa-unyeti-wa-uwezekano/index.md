# Uchambuzi wa Unyeti wa Uwezekano (PSA)

PSA hupa kila kigezo kisicho na uhakika mgawanyo wa uwezekano, huchukua sampuli za vyote kwa wakati mmoja maelfu ya mara (Monte Carlo), na kuripoti *uwezekano* kwamba chaguo ndilo chaguo bora — badala ya kadirio moja la nukta.

## Kwa nini ni muhimu

Kesi ya rejea ya NICE *inahitaji* PSA. Uchambuzi wa kiamuzi hujibu "je, ikiwa pembejeo moja si sahihi?"; PSA hujibu "kutokana na kila kitu tusichojua kwa wakati mmoja, ni kwa uwezekano gani tunafanya uamuzi sahihi?" Matokeo yake mahususi, **mkunjo wa kukubalika kwa ufanisi wa gharama (CEAC)**, huchora uwezekano kwamba chaguo lina ufanisi wa gharama dhidi ya kizingiti cha utayari wa kulipa — ukibadilisha "ICER ni £24,000/QALY" kuwa "kuna uwezekano wa 78% huu ni uchaguzi sahihi kwa £30,000/QALY."

## Hisabati

```
Kwa kila michoro N (N ≈ 10,000):
  chukua sampuli ya kila kigezo θ kutoka mgawanyo wake
    (gharama ~ Gamma, uwezekano ~ Beta, matumizi ~ Beta, athari ~ Normal/logNormal)
  kokotoa NMB_j(θ) = λ × Athari_j(θ) − Gharama_j(θ) kwa kila chaguo j

CEAC_j(λ) = sehemu ya michoro ambapo chaguo j lina NMB ya juu zaidi kwa kizingiti λ
```

Tazama [manufaa halisi ya kifedha](../manufaa-halisi-ya-kifedha/) kwa NMB na [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/) kwa λ.

## Mfano uliokokotolewa

Hoja ya biashara ya uhamishaji wa jukwaa. Pembejeo tatu zisizo na uhakika:

```
Gharama ya uhamishaji   ~ Gamma,   wastani £800k, sd £200k
Manufaa ya kila mwaka   ~ Normal,  wastani £350k, sd £150k
Muda wa manufaa         ~ Sare,    miaka 3–6
```

Kwa kila michoro 10,000 kokotoa manufaa halisi = muda × ya mwaka − gharama (punguzo limeachwa kwa uwazi). Matokeo ya mfano:

```
Wastani wa manufaa halisi: £775k
Uwezekano wa halisi > 0:   0.86
Asilimia ya 5–95:         −£180k … +£milioni 1.9
```

Kadirio la nukta lilisema "dhahiri ndiyo." PSA inasema "86% ndiyo, na mkia halisi ambapo tunapoteza £180k+" — ndicho mmiliki wa jalada anahitaji kweli, na inaweka bei ya hoja ya kuendesha spike ya ugunduzi kwanza (tazama [EVPI](../thamani-inayotarajiwa-ya-taarifa-kamilifu/)).

## Uhusiano na uhandisi wa programu

Wahandisi tayari wanaamini Monte Carlo kwa utabiri wa utoaji (sampuli ya upitishaji hushinda makadirio ya nukta). Panua mashine ileile hadi fedha: mgawanyo juu ya upokeaji, muda uliookolewa, na mshahara, kisha ripoti "uwezekano kwamba uwekezaji huu wa jukwaa una faida halisi" badala ya ROI ya usahihi wa uongo. Mkunjo wa mtindo wa CEAC — uwezekano wa kuwa chaguo bora kama kitendakazi cha jinsi shirika linavyothamini saa ya mhandisi — ni kitu bora kweli kwa kamati ya ufadhili kuliko namba yoyote moja.

## Mitego

- **Mgawanyo wa takataka**: PSA yenye mikengeuko sanifu iliyobuniwa ni uchambuzi wa kiamuzi uliovaa koti la maabara. Weka msingi wa mtawanyiko kwenye data au upataji uliopangwa wa maoni ya wataalamu.
- **Kupuuza uhusiano** kati ya vigezo (upokeaji wa juu kwa kawaida unahusiana na muda uliookolewa wa juu); kuchukua sampuli huru hudharau hatari ya mkia.
- **Kuripoti wastani pekee** wa uigaji — lengo lote ni mgawanyo na uwezekano wa uamuzi.

## Vyanzo

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
