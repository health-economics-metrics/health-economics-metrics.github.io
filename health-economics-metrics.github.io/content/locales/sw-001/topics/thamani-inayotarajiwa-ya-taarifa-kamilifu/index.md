# Thamani Inayotarajiwa ya Taarifa Kamilifu (EVPI)

EVPI ni kiasi cha juu zaidi ambacho mwenye kuamua anapaswa kulipa ili kuondoa kutokuwa na uhakika kabla ya kuamua — bei rasmi ya "hebu tufanye utafiti kwanza."

## Kwa nini ni muhimu

Mifumo ya afya hukabiliana na chaguo mara kwa mara: kupitisha sasa kwa ushahidi usio kamili, au kufadhili utafiti zaidi kwanza. EVPI huweka namba kwenye chaguo la pili. Ikiwa EVPI ni £50,000 na jaribio linalopendekezwa linagharimu £milioni 2, pitisha sasa. Ikiwa EVPI ni £milioni 20, jaribio ni bei nafuu. Swali lilelile — "tujaribu hili kabla ya kulisambaza?" — linajitokeza kwa kila uamuzi wa zana ya biashara, na karibu hakuna anayeliwekea bei. Kwa kuweka bei ya chaguo la kupanua mradi baadaye, badala ya chaguo la kukusanya taarifa kwanza, tazama [Uthamini wa Machaguo Halisi](../uthamini-wa-machaguo-halisi/).

## Hisabati

EVPI ni pengo kati ya kuamua kwa utabiri kamili na kuamua sasa kwa matarajio:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = vigezo visivyo na uhakika (pamoja na mgawanyo wao wa pamoja)
NMB(j,θ) = manufaa halisi ya kifedha ya chaguo j kwa θ iliyopewa
```

Neno la kwanza: wastani wa malipo ya chaguo bora katika kila ulimwengu unaowezekana (daima unachagua sawa). Neno la pili: malipo ya chaguo moja lililo bora kwa wastani (lazima ujitolee sasa). EVPI ≥ 0 daima. EVPI ya idadi ya watu huzidishwa kwa idadi ya maamuzi yaliyoathirika. Hukokotolewa moja kwa moja kutoka michoro ya [PSA](../uchambuzi-wa-unyeti-wa-uwezekano/).

## Mfano uliokokotolewa

Sambaza msaidizi wa uandishi wa nyaraka wa AI kwa madaktari 5,000, au la. Ulimwengu miwili:

```
Ulimwengu A (p = 0.6): msaidizi anaokoa dakika 20/siku → NMB ya kusambaza = +£milioni 8
Ulimwengu B (p = 0.4): msaidizi anaokoa ~0 (msuguano wa mtiririko wa kazi) → NMB ya kusambaza = −£milioni 3
NMB ya "usisambaze" = £0 katika ulimwengu zote mbili.
```

Amua sasa: E[NMB kusambaza] = 0.6 × 8 − 0.4 × 3 = **+£milioni 3.6** → sambaza.

Kwa taarifa kamilifu: katika ulimwengu A chagua kusambaza (+£milioni 8), katika ulimwengu B chagua hakuna (£0). Thamani inayotarajiwa = 0.6 × 8 + 0.4 × 0 = **£milioni 4.8**.

```
EVPI = £milioni 4.8 − £milioni 3.6 = £milioni 1.2
```

Jaribio makini la miezi 3 linalogharimu £150,000 na kutatua kwa kiasi kikubwa uko katika ulimwengu upi linastahili kabisa — na jaribio lolote linalogharimu zaidi ya £milioni 1.2 halistahili, hata liwe la kina kiasi gani.

## Uhusiano na uhandisi wa programu

EVPI ni uchumi wa spike, jaribio, jaribio la A/B, na uthibitisho wa dhana. Inatoa kanuni mbili za vitendo:

- **Jaribio linastahili kufadhiliwa tu ikiwa uamuzi unaweza kubadilika kweli.** Ikiwa ungesambaza bila kujali matokeo ya jaribio, EVPI = 0 na jaribio ni tamthilia.
- **Weka kikomo cha matumizi ya jaribio kwa EVPI.** Thamani ya taarifa imefungwa na thamani ya uamuzi inayoufahamisha.

EVPI ya sehemu (EVPPI) inapanua hili kwa vigezo binafsi: "inastahili kiasi gani kuthibitisha namba ya muda uliookolewa hasa?" — ambayo inakuambia jaribio linapaswa kupima nini. Kwa kuweka bei utafiti *mahususi* unaopendekezwa badala ya kuondoa kutokuwa na uhakika wote, tazama [EVSI](../thamani-inayotarajiwa-ya-taarifa-ya-sampuli/).

## Mitego

- **Kuendesha majaribio bila kanuni ya uamuzi iliyoambatishwa** — taarifa isiyoweza kubadilisha chaguo haina thamani kwa ufafanuzi.
- **Kupuuza gharama ya ucheleweshaji wa kukusanya taarifa**: jaribio la miezi 6 huchelewesha miezi 6 ya manufaa ([gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/)); thamani halisi ya jaribio = EVPI iliyotatuliwa − gharama ya ucheleweshaji − gharama ya jaribio.
- **Kuchukulia EVPI kama utabiri.** Ni kikomo cha juu cha thamani ya taarifa, si kadirio la kile utafiti mahususi utakachotoa.

## Vyanzo

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
