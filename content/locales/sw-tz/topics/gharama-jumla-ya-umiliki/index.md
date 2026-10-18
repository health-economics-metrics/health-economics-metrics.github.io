# Gharama Jumla ya Umiliki (TCO)

TCO ni gharama kamili ya mfumo katika maisha yake yote: ununuzi au ujenzi, muunganisho, uendeshaji, matengenezo, msaada, mafunzo, na kuuondoa. Msingi usiopendeza: **matengenezo ni 50–80% ya TCO ya programu** — takriban robo tatu ya gharama ya maisha yote hufika *baada* ya uzinduzi.

## Kwa nini ni muhimu

Tathmini ya teknolojia ya afya ilijifunza zamani kwamba bei ya dawa si gharama yake — utoaji, ufuatiliaji, na kudhibiti athari mbaya vyote vinastahili kuwa kwenye modeli. Hoja za biashara za programu zinazohesabu gharama ya ujenzi/leseni pekee hurudia kosa la bei ya dawa ya kijinga na kupunguza kimfumo upande wa gharama wa kila [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/) na [athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) vinavyolisha. Kwa ununuzi wa NHS, nidhamu ya TCO ndiyo inayofanya dai la ufanisi wa gharama wa bidhaa ya kidijitali kuwa la uaminifu — na ndipo chaguo zinazoonekana kuwa nafuu hushindwa.

## Hisabati

```
TCO = gharama ya awali (ujenzi/leseni + muunganisho + uhamishaji data + mafunzo)
    + Σ_t [uendeshaji + matengenezo + msaada + miundombinu + uboreshaji
           + utiifu/uhakikisho]_t / (1 + r)^t
    + gharama ya kuondoa (kutoka, kutoa data, kuendesha sambamba)

Upeo: miaka 3–5 kibiashara, maisha ya mfumo kwa miundombinu ya kikliniki
r: 3.5% sekta ya umma (Green Book), 8–12% kibiashara
Vigezo: matengenezo ya kila mwaka ≈ 15–20% ya gharama ya ujenzi; ~78% ya
TCO ya maisha yote baada ya uzinduzi; ukipuuza kuondoa na kufungwa kwa muuzaji,
hujiwekea bei yenyewe.
```

## Mfano uliokokotolewa

Chaguo mbili kwa mfumo wa e-observations, upeo wa miaka 5:

```
                          SaaS ya muuzaji   Ujenzi wa ndani
Mwaka 0 (leseni/ujenzi)   £250,000          £900,000
Muunganisho + mafunzo     £180,000          £150,000
Uendeshaji wa mwaka (mwaka 1–5) £120,000/mwaka £190,000/mwaka (upangishaji + FTE 1.5 matengenezo)
Kutoka/kuondoa            £60,000           £30,000

TCO bila punguzo          £1,090,000        £2,030,000
```

Kadirio la uhandisi la chaguo la ujenzi (£900k) lilikuwa 44% tu ya TCO yake halisi — na makadirio ya ujenzi yenyewe kwa kawaida hupita kwa 30–40% (tazama [jenga dhidi ya nunua](../kujenga-au-kununua/)). Isipokuwa chaguo la ndani litoe *matokeo* tofauti kwa kiasi kikubwa, mantiki ya [upunguzaji wa gharama](../uchambuzi-wa-kupunguza-gharama/) inatumika na SaaS inashinda kwa ~£940k.

## Uhusiano na uhandisi wa programu

Wahandisi hupuuza data ya matengenezo ya fani yao wenyewe wanapotetea ujenzi: kanuni ya matengenezo ya kila mwaka ya 15–20% ya gharama ya ujenzi inamaanisha kila mfumo wa £milioni 1 kimya kimya hujitoa kwa £150–200k/mwaka za uwezo wa baadaye — dhima inayostahili kuwa kwenye mizania ileile ya kiakili kama [deni la kiufundi](../deni-ya-kiufundi/). TCO pia ni nusu ya gharama ya kila kipimo katika hazina hii: gharama kwa kila usambazaji, [uchumi wa kitengo cha wingu](../uchumi-wa-kitengo-wa-wingu/), na nidhamu ya kigawanyo ambayo HTA huilazimisha kwa wafadhili wa dawa. Bei ya bidhaa yako inapopingwa, ulinganisho wa TCO unaojumuisha gharama halisi za uendeshaji za aliyepo kwa kawaida ndio uundaji upya wenye nguvu zaidi unaopatikana. Namba ya TCO ya miaka mingi kama ile iliyo hapo juu ni jumla ya vipengele vingi vya gharama kwa muda — tazama [muhtasari wa gharama salama kwa sarafu](../ujumlishaji-wa-gharama-salama-kwa-sarafu/) kwa nini jumla hiyo inapaswa kuwa desimali kamili badala ya nukta zinazoelea modeli inapohitaji kupatana hadi senti, na [mgawanyo kamili wa gharama kwa senti](../ugawaji-wa-gharama-hadi-senti-kamili/) kwa kugawanya jumla ya TCO kati ya vituo vya gharama bila kupoteza senti.

## Mitego

- **Kung'ang'ania gharama ya uzinduzi**: kulinganisha chaguo kwa gharama ya mwaka 0 wakati mpangilio hugeuka kufikia mwaka 3.
- **Uongo wa kazi ya ndani ya bure**: matengenezo ya ndani yakigharimiwa sifuri kwa sababu "timu tayari inalipwa" — tazama [gharama ya fursa](../gharama-ya-fursa/).
- **Kupuuza gharama za kutoka**: kutoa data, kusitisha mkataba, na kuendesha sambamba ndipo SaaS "nafuu" inapokuwa ghali.
- **Ukiukaji wa upeo mmoja**: kulinganisha TCO ya SaaS ya miaka 3 na upunguzaji wa thamani wa ujenzi wa miaka 10 (tazama [upeo wa muda](../upeo-wa-muda/)).

## Vyanzo

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
