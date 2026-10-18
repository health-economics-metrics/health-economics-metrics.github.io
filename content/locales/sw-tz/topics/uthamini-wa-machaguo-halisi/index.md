# Uthamini wa Machaguo Halisi

Uthamini wa machaguo halisi hutumia mantiki ya kuweka bei ya machaguo ya kifedha kwa maamuzi halisi ya uwekezaji (yasiyo ya soko la fedha) — hasa *chaguo la kupanua* mradi baadaye ukifanikiwa, bila kulazimika kufanya hivyo. Modeli iliyorahisishwa ya binomial ya kipindi kimoja (Cox, Ross, Rubinstein, 1979) huthamini unyumbufu huu moja kwa moja, ikigeuza "tutume kidogo na tuone" kutoka dhana kuwa namba iliyowekewa bei.

## Kwa nini ni muhimu

Hesabu tuli ya NPV huweka bei ya mradi kama dau la yote-au-hakuna: fadhili au usifadhili, kwa kiwango cha leo, milele. Miradi halisi — na hasa usambazaji wa hatua wa afya ya kidijitali — mara chache hubashiriwa hivyo: mfumo wa afya unaweza kufadhili jaribio dogo, kutazama kinachotokea, na kuahidi fedha zaidi tu ikifanya kazi. Unyumbufu huo una thamani halisi, na kuupuuza hudharau kwa utaratibu uwekezaji wa hatua ikilinganishwa na wa mara moja, jambo ambalo ni kinyume kabisa kwa michakato ya manunuzi inayotuza pendekezo la hatua linaloonekana salama zaidi. Uthamini wa machaguo halisi huweka bei ya unyumbufu wenyewe, ili pendekezo la hatua lilinganishwe kwa haki na mbadala wa ahadi kamili badala ya kuadhibiwa kwa kuonekana dogo kwenye mstari wa kijinga wa NPV.

## Hisabati

```
Uwezekano usiotegemea hatari wa hali ya "juu":
  p = ((1 + kiwango_kisicho_na_hatari) − kigezo_cha_chini) / (kigezo_cha_juu − kigezo_cha_chini)

Malipo ya upanuzi katika kila hali (yamewekewa sakafu sifuri — kupanua ni hiari):
  malipo_juu   = max(thamani_ya_mradi × kigezo_cha_juu  − gharama_ya_upanuzi, 0)
  malipo_chini = max(thamani_ya_mradi × kigezo_cha_chini − gharama_ya_upanuzi, 0)

Thamani ya chaguo (malipo yanayotarajiwa yaliyopunguzwa):
  thamani_ya_chaguo = (p × malipo_juu + (1 − p) × malipo_chini) / (1 + kiwango_kisicho_na_hatari)

NPV iliyopanuliwa = npv_tuli + thamani_ya_chaguo
```

Thamani ya mradi ama hupanda (`kigezo_cha_juu`) au hushuka (`kigezo_cha_chini`) kufikia nukta inayofuata ya uamuzi. Upanuzi hutekelezwa tu ikiwa una faida katika hali hiyo — sakafu ya sifuri ndiyo inayofanya hili kuwa *chaguo* halisi badala ya wajibu. Kwa kuweka bei ya chaguo la kukusanya taarifa kwanza, badala ya chaguo la kupanua baadaye, tazama [thamani inayotarajiwa ya taarifa kamilifu](../thamani-inayotarajiwa-ya-taarifa-kamilifu/). Kwa gharama ya kusubiri kufanya uamuzi huo, tazama [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/).

## Mfano uliokokotolewa

Jaribio la huduma ya kidijitali lenye `thamani_ya_mradi = £1,000,000`, uwezekano wa kupanda hadi 1.5× au kushuka hadi 0.5× kufikia nukta inayofuata ya uamuzi, kiwango kisicho na hatari cha 8%, na gharama ya upanuzi ya £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

malipo_juu   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
malipo_chini = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Sakafu ni muhimu: chaguo lisingetekelezwa soko likikatisha tamaa —
gharama ya upanuzi ya £600,000 inazidi £500,000 ambazo
mradi ungekuwa na thamani katika hali ya chini.

thamani_ya_chaguo = (0.58 × 900,000 + 0.42 × 0) / 1.08
                  = 522,000 / 1.08
                  ≈ £483,333.33
```

Kuongeza thamani ya chaguo kwenye msingi wa NPV tuli wa £200,000: NPV iliyopanuliwa = 200,000 + 483,333.33 ≈ **£683,333.33**. Kuripoti NPV tuli ya £200,000 peke yake, bila thamani hii ya chaguo, kungedharau thamani halisi ya mradi wa hatua kwa zaidi ya mara mbili.

## Uhusiano na uhandisi wa programu

Hili ni toleo rasmi la "tuma toleo la chini sasa, shikilia chaguo la kuwekeza zaidi ikifanikiwa" — linalohusiana moja kwa moja na usambazaji wa hatua wa bidhaa ya afya ya kidijitali, sambamba kimuundo na [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/) na mfumo wa kupanga-chini-ya-kutokuwa-na-uhakika wa [WSJF/CD3](../wsjf-na-cd3/), na kikamilisho cha [thamani inayotarajiwa ya taarifa kamilifu](../thamani-inayotarajiwa-ya-taarifa-kamilifu/) na [thamani inayotarajiwa ya taarifa ya sampuli](../thamani-inayotarajiwa-ya-taarifa-ya-sampuli/) — zote tatu huweka bei ya unyumbufu au taarifa chini ya kutokuwa na uhakika, kutoka pembe tofauti.

## Mitego

- **Kukopa uwekaji bei usiotegemea hatari bila dhana ya mali inayouzwa inayoitegemea**: modeli za machaguo halisi hukopa uwezekano usiotegemea hatari kutoka kuweka bei ya machaguo ya kifedha, ambayo hudhani thamani ya msingi ni mali *inayouzwa* — kwa mradi halisi usiouzwa kweli hii ni urahisi wa uundaji modeli, si ukweli halisi wa soko.
- **Kuchukulia `kigezo_cha_juu`/`kigezo_cha_chini` kama vigezo huru**: pembejeo za binomial za juu/chini zenyewe ni dhana zinazohitaji uhalalishaji, si vigezo huru vilivyochaguliwa kutoa jibu linalotakiwa.
- **Kuripoti thamani ya chaguo peke yake**: thamani ya machaguo halisi *huongezwa* kwenye NPV tuli ya mradi wa kujitegemea — kosa la kawaida ni kuripoti thamani ya chaguo pekee na kuacha hali ya msingi, jambo linalokuza hoja ikiwa NPV tuli ni hasi na kuidharau (kama katika mfano hapo juu) wakati NPV tuli inaachwa kabisa.

## Vyanzo

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
