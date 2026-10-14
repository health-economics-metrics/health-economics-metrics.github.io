# Thamani Inayotarajiwa ya Taarifa ya Sampuli (EVSI)

EVSI ni thamani ya *utafiti mahususi unaopendekezwa* — usanifu fulani, ukubwa fulani wa sampuli — kabla haujaendeshwa, tofauti na [EVPI](../thamani-inayotarajiwa-ya-taarifa-kamilifu/), ambayo huweka bei ya kuondoa kutokuwa na uhakika wote kwa mara moja. EVSI hujibu swali ambalo mfadhili wa utafiti hukabiliana nalo kweli: "je, jaribio *hili*, la ukubwa *huu*, linastahili gharama yake?"

## Kwa nini ni muhimu

EVPI inakuambia dari ya kile utafiti wowote ungeweza kuwa na thamani; kamwe haikuambii kama jaribio lililo mbele yako linavuka kigezo. Mfadhili wa utafiti wa kitaifa anayechagua kati ya jaribio la majaribio la wagonjwa 50 na jaribio la mwisho la wagonjwa 500 anahitaji kujua *kila usanifu mahususi* una thamani kiasi gani, si thamani ya kujua kila kitu tu. EVSI hutoa namba hiyo, na kwa kuwa inakua na ukubwa wa sampuli, inamwezesha mfadhili kupata ukubwa wa sampuli unaoongeza manufaa halisi yanayotarajiwa badala ya kubahatisha.

Hii pia ndiyo sababu EVSI daima ni ndogo kuliko au sawa na EVPI: sampuli ya kikomo inaweza kutatua kutokuwa na uhakika kwa sehemu tu, na utafiti unaoonekana kuwa na thamani kuliko taarifa kamilifu ni ishara hesabu ina kosa, si matokeo halisi.

## Hisabati

```
Kwa ujumla:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (matarajio yaliyoingiliana: ya nje juu ya matokeo yanayowezekana ya utafiti, ya ndani
  juu ya imani ya baadaye kuhusu θ baada ya kuona matokeo hayo — kwa kawaida hukadiriwa
  kwa Monte Carlo iliyoingiliana / usasishaji wa Bayes juu ya michoro ya uchambuzi
  wa unyeti wa uwezekano)

Fomu iliyofungwa ya makadirio ya kawaida (kigezo kimoja kisicho na uhakika,
modeli ya normal-normal ya kuoanisha — njia ya mkato ya kawaida, si kamili kwa kila modeli):
EVSI(n) = EVPI × n / (n + n0)

n  = ukubwa wa sampuli wa utafiti unaopendekezwa
n0 = "ukubwa wa sampuli sawa na wa awali" — ukubwa wa sampuli ya kufikirika
     ambayo ingebeba taarifa sawa na ya awali ya sasa, unaotokana na uwiano wa
     tofauti ya data kwa tofauti ya awali
ENBS(n) = EVSI(n) − Gharama(n)
EVSI ya idadi ya watu = EVSI kwa kila uamuzi × maamuzi yaliyoathirika
```

Fomu ya jumla ni matarajio yaliyoingiliana kwa sababu matokeo ya baadaye ya utafiti yenyewe hayana uhakika: lazima ukokotoe wastani juu ya kila seti ya data inayowezekana ambayo utafiti unaweza kuzalisha, na kwa kila moja kokotoa upya uamuzi bora kutokana na imani iliyosasishwa (ya baadaye). Makadirio ya kawaida yaliyofungwa hubadilisha gharama hiyo ya kompyuta kwa uwiano mmoja, halali kigezo kisicho na uhakika na data vinapokuwa (takriban) kawaida na vya kuoanisha — urahisi, si sheria ya ulimwengu wote. Monte Carlo kamili iliyoingiliana ndiyo mbinu ya matumizi ya jumla dhana hiyo inapokosekana. Tazama [uchambuzi wa unyeti wa uwezekano](../uchambuzi-wa-unyeti-wa-uwezekano/) kwa michoro ya PSA ambayo EVSI kwa kawaida hukadiriwa kutoka kwayo.

## Mfano uliokokotolewa

Tukijengea juu ya mfano uliokokotolewa wa [EVPI](../thamani-inayotarajiwa-ya-taarifa-kamilifu/) — kusambaza msaidizi wa uandishi wa nyaraka wa AI kwa madaktari 5,000, ambapo EVPI ilipatikana kuwa £milioni 1.2 — eleza EVPI hiyohiyo hapa kwa pauni kamili: **EVPI = £1,200,000**.

Utafiti wa majaribio unaopendekezwa wa madaktari 50 uko mezani. Kutokana na uwiano wa tofauti ya imani ya awali kwa usahihi wa kipimo wa jaribio, ukubwa wa sampuli sawa na wa awali unakuwa `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Jaribio linagharimu £120,000:

```
ENBS = EVSI − Gharama = 480,000 − 120,000 = £360,000
```

ENBS chanya wazi: fadhili jaribio. Ikiwa uamuzi uleule wa manunuzi unajirudia katika taasisi 3 za kikanda zinazofanana, thamani ya jaribio hupanda:

```
EVSI ya idadi ya watu = 480,000 × 3 = £1,440,000
```

## Uhusiano na uhandisi wa programu

EVSI ni uchumi wa kuchagua jaribio au jaribio la A/B linapaswa kuwa *kubwa kiasi gani*, si tu kama kuendesha moja kabisa:

- **Ukubwa wa sampuli kama uamuzi wa uwekezaji.** Beta ya watumiaji 50 na usambazaji wa hatua wa watumiaji 5,000 ni "tafiti" tofauti zenye EVSI na gharama tofauti — EVSI hukuwezesha kuzilinganisha kwa msingi mmoja badala ya kutegemea chaguo-msingi la "data zaidi ni bora kila wakati."
- **ENBS, si EVSI peke yake, ndilo jaribio la kuagiza.** Utafiti wenye EVSI ya juu lakini gharama inayokula sehemu kubwa yake ni pendekezo dhaifu; kanuni ya uamuzi ni manufaa halisi yanayotarajiwa ya kuchukua sampuli, hasa kama hoja ya biashara inavyotoa gharama kutoka manufaa badala ya kuripoti manufaa peke yake.
- **Mapato yanayopungua ni wazi.** Kwa kuwa EVSI(n) hupanda kwa `n/(n+n0)`, kuongeza maradufu ukubwa wa jaribio kamwe hakuongezi maradufu thamani yake — toleo rasmi la silika ya uhandisi kwamba jaribio kubwa lina thamani ya pembeni inayopungua ya taarifa.

## Mitego

- **Kutumia makadirio ya kawaida nje ya dhana zake.** Yanashikilia tu kwa kutokuwa na uhakika wa kigezo kimoja chenye kuoanisha takriban; modeli ya uamuzi isiyo ya mstari kweli au ya vigezo vingi inahitaji Monte Carlo kamili iliyoingiliana, si njia hii ya mkato.
- **Kulinganisha EVSI na gharama ya fedha taslimu pekee.** EVSI lazima ipimwe dhidi ya gharama *kamili* ya utafiti, ikijumuisha gharama yake ya ucheleweshaji wa uamuzi — tazama [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/) — si ankara ya utafiti tu.
- **Kuchukulia EVSI > EVPI kama matokeo halisi.** EVSI haiwezi kamwe kuzidi EVPI kwa ujenzi; hesabu inayozalisha hili ni hitilafu ya uundaji modeli, si ugunduzi.

## Vyanzo

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
