# Vipimo vya Ubora wa AI

Vipimo vya usahihi wa matokeo yanayozalishwa na AI: usahihi dhidi ya ukweli wa msingi, **uaminifu/uwekaji msingi** (je, kila dai linaungwa mkono na muktadha uliotolewa?) na **kiwango cha ndoto-bandia (hallucination)** (ni sehemu gani ya matokeo ina maudhui yasiyoungwa mkono au ya uongo?). Katika mazingira ya afya hivi si madoido ya ubora — ni viwango vya madhara.

## Kwa nini ni muhimu

Vigezo vya kikoa cha tiba vimepima viwango vya hallucination **juu ya 60% kwa LLM zisizo na msingi** kwenye kazi za kitabibu (baadhi ya modeli huria >80%), huku uwekaji msingi, urejeshaji, na hali za kufikiri vikipunguza viwango kwa kiasi kikubwa (mf. hali ya kufikiri ya GPT-5 ilipunguza hallucination za HealthBench kutoka 3.6% hadi 1.6% katika kigezo kimoja). Kipimo kilichobuniwa kwa hallucination au nukuu ya kubuni katika mtiririko wa kikliniki ni **tukio la taarifa za uongo lenye njia ya madhara** — linastahili kuwa kwenye upande wa madhara wa modeli yoyote ya kiuchumi, likiwekewa bei kama chanya za uongo za [uchumi wa uchunguzi](../uchumi-wa-uchunguzi/): kila moja husababisha gharama ya chini ya mkondo (kutenda kwa taarifa mbaya, kazi ya uthibitishaji, hatari ya kisheria-kitabibu, imani inayomomonyoka).

## Hisabati

```
Kiwango cha hallucination = matokeo yenye maudhui yasiyoungwa mkono/ya uongo / jumla ya matokeo
  ya ndani:  yanapingana na muktadha uliotolewa
  ya nje:    uongo usioweza kuthibitishwa zaidi ya muktadha

Uaminifu (mtindo wa RAGAS) = madai yanayoungwa mkono katika jibu / jumla ya madai katika jibu
Usahihi/ukumbushaji wa muktadha = ubora wa urejeshaji unaolisha kizalishi

Uzani wa kiuchumi — si hallucination zote zinagharimu sawa:
  gharama inayotarajiwa ya madhara = Σ juu ya aina za makosa (kiwango × P(isiyogunduliwa) ×
                                     P(kutendewa kazi) × gharama kwa kila kosa lililotendewa kazi)
  Safu ya mapitio ya binadamu huweka P(isiyogunduliwa) — na gharama yake
  inastahili pia kuwa kwenye modeli (dakika za mkaguzi × kiasi).
```

## Mfano uliokokotolewa

Msaidizi wa AI wa kuweka misimbo ya kikliniki huchakata matukio 200,000/mwaka; ukaguzi unaonyesha 2% ya matokeo yana kosa kubwa la misimbo; wasimbaji binadamu hukamata 85% yake:

```
Makosa yanayofikia uwasilishaji = 200,000 × 0.02 × 0.15 = 600/mwaka
Gharama kwa kosa lisilokamatwa (wastani wa kutoza vibaya + hatari ya ukaguzi) ≈ £250
Gharama inayotarajiwa ya makosa = 600 × 250 = £150,000/mwaka
Gharama ya mapitio (dak 2 × 200k × £0.50/dak)  = £200,000/mwaka

Kesi ya uboreshaji: uwekaji msingi wa urejeshaji hupunguza kiwango cha makosa hadi 0.8%
→ makosa yasiyokamatwa 240, gharama ya makosa £60,000 (−£90k/mwaka); muda wa mapitio
  pia unaweza kushuka (sampuli badala ya mapitio kamili) — uwekezaji wa ubora
  hulipa kabla ya dai lolote la kasi.
```

## Uhusiano na uhandisi wa programu

Chukulia ubora wa modeli kama uchumi wa ufunikaji wa majaribio, kwa nidhamu ya kiwango cha afya: **seti za tathmini ndizo jaribio lako la kikliniki** — zilizosajiliwa mapema, zinazowakilisha mchanganyiko wa kesi *zako*, zinazofanywa upya dhidi ya kuyumba; **uwekaji msingi unashinda ukubwa kwa kazi za kiukweli** (urejeshaji + maelekezo yanayohitaji nukuu kwa kawaida ndiyo upunguzaji wa hallucination wa bei nafuu zaidi unaopatikana — taz. [uchumi wa kitengo wa makisio](../uchumi-wa-kitengo-wa-makisio/) kwa mzigo wake wa tokeni); na **chapisha kituo cha uendeshaji**: kama [unyeti/umahususi](../tathmini-ya-ai-ya-kikliniki/), "97% waaminifu" haimaanishi chochote bila usambazaji wa kazi na kizingiti cha ugunduzi. Hisabati ya safu ya mapitio hapo juu ni hesabu ileile ya [NNT/NNH](../idadi-inayohitajika-kutibiwa/) kama lango lolote la uchunguzi.

## Mitego

- **Kupandikiza kigezo hadi uzalishaji**: viwango vya hallucination vinategemea sana kazi; mchanganyiko wa kesi zako ndio kigezo pekee kinachohesabika.
- **Mapitio ya binadamu yasiyogharamiwa**: "daktari anakagua kila kitu" hupunguza manufaa nusu na lazima yaonekane kwenye mstari wa gharama — na umakini hupungua (kuridhika na otomatiki), kwa hivyo P(isiyogunduliwa) hupanda kadiri imani inavyoongezeka.
- **Kuboresha ubora wa wastani huku hatari ya mkia ikibeba madhara**: noti moja ya mzio iliyobuniwa inazidi vifungu elfu vya maneno yasiyopendeza; pima makosa kwa matokeo yake, kulingana na fomula ya madhara yanayotarajiwa.

## Vyanzo

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
