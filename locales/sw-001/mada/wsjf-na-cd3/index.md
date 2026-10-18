# WSJF na CD3

CD3 (Cost of Delay Divided by Duration — gharama ya ucheleweshaji ikigawanywa na muda) na WSJF (Weighted Shortest Job First — kazi fupi zaidi iliyopimwa kwanza) ni kanuni za kuweka vipaumbele zinazopanga kazi kwa **msongamano wa thamani**: ni kiasi gani cha gharama ya ucheleweshaji kinaondolewa kwa kila kitengo cha uwezo adimu kinachotumika. Chini ya uwezo wa pamoja, uliowekwa, CD3-ya-juu-kwanza ndiyo mfuatano bora kihisabati wa kupunguza gharama ya jumla ya ucheleweshaji.

## Kwa nini ni muhimu

Kila mrundikano ni tatizo la mgao: vipengele vingi vinavyostahili, bomba moja. Uchumi wa afya ulitatua tatizo hilohilo kwa bajeti za afya kupitia jedwali za ligi za ufanisi wa gharama — panga uingiliaji kwa afya iliyopatikana kwa kila pauni, fadhili kushuka chini ya orodha hadi bajeti iishe. CD3 ni mantiki ileile kwa uwezo wa utoaji: manufaa kwa kila kitengo cha *rasilimali iliyobanwa*, yakifadhiliwa kwa mpangilio wa cheo. Kupata mpangilio sahihi ni pesa ya bure — kazi ileile, uwezo uleule, gharama ndogo ya jumla ya ucheleweshaji.

## Hisabati

```
CD3  = Gharama ya Ucheleweshaji (£/wiki) / Muda (wiki)      — vitengo halisi (Black Swan Farming)

WSJF = (thamani ya mtumiaji-biashara + uharaka wa muda + upunguzaji wa hatari/
        uwezeshaji wa fursa) / ukubwa wa kazi              — mbadala wa kipimo cha uhusiano wa SAFe,
                                                              alama za Fibonacci zilizorekebishwa
```

CD3 yenye sarafu halisi ([gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/)) ni yenye nguvu zaidi kabisa kuliko pointi zisizo na kitengo za WSJF — WSJF kwa CD3 ni kama alama za vigezo vingi kwa [uchambuzi kamili wa gharama-matumizi](../uchambuzi-wa-gharama-na-matumizi/): inatumika wakati kuthaminisha kwa fedha hakuwezekani, inaweza kuchezewa wakati alama hazina nanga.

## Mfano uliokokotolewa

Vipengele vitatu, timu moja:

```
Kipengele  CoD (£/wiki)  Muda       CD3
A          30,000        wiki 10    3,000
B          12,000        wiki 2     6,000
C          5,000         wiki 1     5,000
```

Mpangilio wa CD3: B, C, A. Linganisha gharama ya jumla ya ucheleweshaji na "CoD kubwa zaidi kwanza" (A, B, C):

```
Mpangilio wa CD3  (B,C,A): A inasubiri wiki 3, C inasubiri 2 → 30k×3 + 5k×2  = £100k gharama ya ucheleweshaji
Mpangilio wa CoD  (A,B,C): B inasubiri 10, C inasubiri 12    → 12k×10 + 5k×12 = £180k
```

Vipengele vilevile, timu ileile — mfuatano pekee huokoa £80,000. Hisia ya msingi: vipengele vidogo, vya dharura huenda kwanza kwa sababu huachilia gharama yao ya ucheleweshaji kwa bei nafuu; kipengele kikubwa hupoteza kidogo kwa kusubiri kwa muda mfupi.

## Uhusiano na uhandisi wa programu

Kwa majalada ya programu za afya, eleza CoD katika vitengo ambavyo hazina hii inafundisha: QALY/wiki × kizingiti + £/wiki ya kiutendaji, na mrundikano unalinganika moja kwa moja na jinsi mfumo wa afya unavyopanga kila kitu kingine unachonunua. Maelezo mawili ya utendaji: (1) muda unamaanisha *muda wa kalenda unaokalia kikwazo*, si juhudi — kipengele cha wiki 2 za kalenda kinachohitaji siku 2 za timu ya kikwazo ni cha bei nafuu kuliko kinavyoonekana (tazama [uboreshaji wa rasilimali za chini ya mkondo](../uboreshaji-wa-rasilimali-za-chini-ya-mkondo/)); (2) hospitali huendesha kanuni ileile kwa fiche zinapopanga orodha za chumba cha upasuaji kwa upitishaji uliopimwa kwa dharura — aina za vipaumbele vya kikliniki ni CD3 iliyopimwa kwa ukali (tazama [upungufu wa QALY na vigeuzi vya ukali](../upungufu-wa-qaly-na-virekebishaji-vya-ukali/)).

## Mitego

- **Tamthilia ya alama za WSJF**: mijadala ya Fibonacci isiyo na kitengo huishia kwa anayebishana kwa sauti kubwa zaidi; nanga angalau vipengele vya juu vya mrundikano katika CoD halisi.
- **Kucheza na muda**: kugawanya vipengele ili kupandisha cheo cha CD3 — sawa mgawanyo unapotoa thamani kwa kujitegemea, ulaghai usipotoa.
- **Kupuuza wasifu wa uharaka**: CoD yenye umbo la tarehe ya mwisho (tarehe za udhibiti) huvunja dhana ya kiwango thabiti; zipange kwa uwezekano wa tarehe, kisha tumia CD3 kwa zilizosalia.
- **Kuchafuka kwa kupanga upya vyeo**: CD3 ni kwa maamuzi ya mfuatano wakati wa kujitoa, si kwa kuchanganya upya kila siku kazi inayoendelea (tazama [vipimo vya mtiririko](../vipimo-vya-mtiririko/) kuhusu WIP).

## Vyanzo

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
