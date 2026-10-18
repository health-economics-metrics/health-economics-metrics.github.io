# Kujenga au Kununua

Kujenga-au-kununua ni ulinganisho uliopangwa wa uundaji maalum dhidi ya ununuzi wa kibiashara, kwa [TCO](../gharama-jumla-ya-umiliki/) iliyopunguzwa thamani, muda wa utoaji, na hatari. Maarifa ya awali ya kimajaribio ni ya upande mmoja: **gharama halisi za kujenga kwa kawaida huzidi makadirio kwa 30–40%**, suluhisho zilizonunuliwa hutumwa kwa kasi ya 40–60% zaidi, na utafiti wa MIT wa 2025 wa GenAI uligundua zana za AI zilizonunuliwa zilifanikiwa ~67% ya wakati huku ujenzi wa ndani ukifanikiwa mara moja kati ya tatu kwa kiasi hicho.

## Kwa nini ni muhimu

Mifumo ya afya hukabiliana na uamuzi huu kila mara ("make vs commission" kwa lugha ya NHS), na mashirika ya uhandisi hukosea kwa utaratibu upande wa kujenga — kwa sababu wajenzi hukadiria ujenzi, si [TCO](../gharama-jumla-ya-umiliki/), na kwa sababu kujenga kunafurahisha zaidi. Mfumo wa kiuchumi unalazimisha ulinganisho wa uaminifu: machaguo yote mawili yakiwekewa bei katika upeo mmoja, yote mawili yakirekebishwa kwa hatari, na *tofauti ya muda ikiwekewa bei kama [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/)* — neno linaloamua jibu mara nyingi zaidi na linaloachwa mara nyingi zaidi.

## Hisabati

```
Linganisha katika upeo mmoja wa miaka 3–5, ukipunguza thamani:

NPV_chaguo = PV(manufaa, yaliyohamishwa kwa muda wa kufikia thamani) − PV(TCO)

Marekebisho ya hatari (muundo wa "upendeleo wa matumaini" wa Green Book):
  gharama ya kujenga × 1.3–1.4        (maarifa ya awali ya kuvuka)
  muda wa kujenga hadi thamani + 40–60% (maarifa ya awali ya kuchelewa kutuma)
  kununua: ongeza ukaguzi wa uhalisia wa uunganishaji na gharama za kutoka badala yake

Vichocheo vya uamuzi, kwa mpangilio vinavyoamua kwa kawaida:
  1. utofautishaji — je, uwezo huu ni bidhaa yako, au mabomba?
  2. muda hadi thamani × CoD
  3. TCO iliyorekebishwa kwa hatari
```

## Mfano uliokokotolewa

Taasisi inahitaji mfumo wa ridhaa ya kielektroniki. Kununua: £150k/mwaka SaaS, hai kwa miezi 3. Kujenga: £600k + £120k/mwaka matengenezo zinakadiriwa, hai kwa miezi 12.

```
Kujenga kulikorekebishwa kwa hatari: 600k × 1.35 = £810k; muda hadi thamani ≈ miezi 18
TCO ya miaka 5:  kununua = 150k × 5 = £750k
                 kujenga = 810k + 120k × 5 = £1,410k
Neno la ucheleweshaji: kuweka ridhaa kidijitali huokoa £25k/mwezi; ujenzi unafika miezi 15
                       baadaye → CoD = 15 × 25k = £375k

Ulinganisho halisi: £750k dhidi ya £1,785k — kununua kunashinda kwa ~£1M, na neno kubwa
moja baada ya ujenzi wenyewe ni gharama ya ucheleweshaji ambayo hakuna aliyeiwekea bei.
```

Kujenga hubaki sahihi pale uwezo unapotofautisha (algoriti kuu ya bidhaa yako), pale hakuna muuzaji anayekidhi kizuizi kigumu (usalama wa kikliniki, makazi ya data), au pale hatari ya kufungwa na muuzaji ni kubwa na imewekewa bei.

## Uhusiano na uhandisi wa programu

Nidhamu inayohamishika ya uchumi wa afya ni ya aina tatu: **marekebisho ya hatari yanayotegemea maarifa ya awali** (nyongeza ya 30–40% ya kuvuka ni upendeleo wa matumaini wa Green Book wa programu — itumie kimitambo, jadili vighairi badala ya kuanzia navyo); **uaminifu wa kilinganishi** (mbadala wa kujenga si "hakuna", ni ununuzi bora unaopatikana — tazama [gharama ya fursa](../gharama-ya-fursa/)); na **majaribio ya usawa kabla ya kulinganisha gharama** (ikiwa kununua na kujenga kweli vinakidhi vipimo vilevile, huu ni [uchambuzi wa kupunguza gharama](../uchambuzi-wa-kupunguza-gharama/) na nafuu hushinda; vinginevyo tofauti ya matokeo lazima ithaminiwe, si kudaiwa).

## Mitego

- **Kulinganisha bei ya orodha ya muuzaji na makadirio ya kujenga yasiyorekebishwa kwa hatari** — kujipendekeza mara mbili upande wa kujenga.
- **Kazi ya ndani isiyowekewa bei** ("timu tayari iko hapa").
- **Kufungwa kusiko na bei pande zote**: gharama za kutoka kwa muuzaji, lakini pia kipengele cha basi cha ujenzi na muda wa matengenezo.
- **Ujenzi unaoongozwa na utambulisho**: "hii ni msingi kwetu" ikidaiwa kwa mabomba — jaribu utofautishaji dhidi ya kama wateja wangegundua.

## Vyanzo

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
