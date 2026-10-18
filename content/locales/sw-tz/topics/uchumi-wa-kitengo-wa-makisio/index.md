# Uchumi wa Kitengo wa Makisio

Uchumi wa kitengo wa makisio huweka bei kwa vipengele vya AI kwa kompyuta yao ya pembeni: **gharama kwa kila tokeni**, ikijumlishwa hadi gharama kwa muamala, kwa mtumiaji, kwa tukio la kikliniki. Mienendo inayofafanua: bei za LLM zimeshuka takriban **kwa kiwango cha ukubwa mmoja kila miaka 1–2** kwa uwezo ule ule — kiwango cha mfumuko hasi usio na kifani katika ugharamiaji wa teknolojia ya afya.

## Kwa nini ni muhimu

Matokeo mawili yanafuata kuporomoka kwa bei. Kibiashara, kipengele cha AI kilicho mpakani leo kinaweza kuwa na faida ya wazi baada ya miezi 18 — na mshindani aliyewekewa bei kwa gharama za leo atapunguzwa. Kwa tathmini ya kiuchumi, modeli yoyote ya ufanisi wa gharama kwa huduma ya kikliniki inayowezeshwa na AI inayogandisha bei za makisio za 2024 **hukuza sana gharama inayoendelea** — uchambuzi unahitaji hali za kushuka kwa bei kama modeli za dawa zinavyoshughulikia kuisha kwa hataza na kuingia kwa dawa jenereki. (Pointi za rejea kutoka utafiti: tokeni za pato za mpakani ~$15–75/M katikati ya 2026, modeli za kati ni nafuu kwa ukubwa mmoja, uwezo wa kiwango cha GPT-4 umeshuka kutoka ~$20/M mwaka 2022 hadi ~$0.40/M; Epoch AI ilipima kushuka kwa 9×–900×/mwaka kulingana na hatua ya uwezo.)

## Hisabati

```
Gharama kwa simu  = tokeni za pembejeo × kiwango cha pembejeo + tokeni za pato × kiwango cha pato
Gharama kwa kitengo = Σ simu kwa kila kitengo cha pato la biashara (kwa kila tukio la triage,
                      kwa kila barua iliyoandikwa, kwa kila muhtasari wa mashauriano)

Uhalisia uliochanganywa = simu ya msingi + kujaribu tena + muktadha wa RAG (pembejeo nzito)
                          + simu za tathmini/ulinzi (mara nyingi 20–50% ya ziada)

Hali ya kushuka kwa bei kwa modeli za miaka mingi:
  gharama_t = gharama_0 × d^t, jaribu d ∈ {0.3, 0.5, 0.7}/mwaka katika uchambuzi wa unyeti
```

## Mfano uliokokotolewa

Huduma ya AI ya muhtasari wa kuruhusiwa: muhtasari wa wastani hutumia tokeni 12,000 za pembejeo (muktadha wa rekodi) + 1,200 za pato, pamoja na hatua ya uthibitishaji (6,000 ndani / 300 nje). Kwa $3/M ndani, $15/M nje:

```
Rasimu:     12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Uthibitishaji: 6,000 × 3/1M + 300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Kwa muhtasari ≈ $0.077 → kwa muhtasari 100,000/mwaka ≈ $7,700

Dhidi ya ~dakika 20 za madaktari zilizookolewa kwa muhtasari (≈ £25), makisio
ni 0.25% ya thamani iliyoundwa — uchumi unatawaliwa na kila kitu ISIPOKUWA
tokeni: uunganishaji, tathmini, utawala, upokeaji.
```

Hitimisho hilo — gharama ya makisio mara chache ndicho kikwazo kinachofunga, kwa bei za sasa, kwa kazi za kikliniki zenye thamani kubwa — ni matokeo yenyewe yanayostahili kubebwa hadi mikutano ya kuweka bei.

## Uhusiano na uhandisi wa programu

Huu ni [uchumi wa kitengo wa wingu](../uchumi-wa-kitengo-wa-wingu/) uliobobea kwa AI, wenye maelezo matatu ya mazoezi: **pima kwa kila kitengo cha biashara**, si kwa kila simu ya API, ili namba iunganishwe moja kwa moja kwenye modeli za [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/)/[athari za bajeti](../uchambuzi-wa-athari-za-bajeti/); **angalia kutolingana kwa pembejeo/pato** (pato kwa kawaida ~mara 4 ya bei ya pembejeo; usanifu wa RAG ni wa pembejeo nzito — chaguo za usanifu ni chaguo za bei); na **elekeza kwa daraja la kazi** — kulinganisha uwezo wa modeli na ugumu wa kazi (modeli nafuu kwa uainishaji, za mpakani kwa usanisi) hupunguza gharama iliyochanganywa mara kwa mara kwa 5–10× kwa ubora sawa, toleo la programu la kutumia uingiliaji nafuu wenye ufanisi ([kupunguza gharama](../uchambuzi-wa-kupunguza-gharama/), usawa ukithibitishwa).

## Mitego

- **Modeli za miaka mingi za bei zilizogandishwa** — hukuza gharama; lakini pia **modeli za mapato zinazodhani mfumuko hasi** — vita vya bei si mkataba; igiza yote mawili.
- **Kupuuza mzigo wa tathmini**: ulinzi, majaji, na kujaribu tena ni tokeni halisi, mara nyingi wengi katika mazingira yanayodhibitiwa.
- **Kuona tokeni peke yake**: ucheleweshaji, vikomo vya kasi, na vikwazo vya dirisha la muktadha hubeba gharama ambazo bei ya tokeni hainasi.

## Vyanzo

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
