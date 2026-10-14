# Uchumi wa Kitengo wa Wingu (FinOps)

Uchumi wa kitengo wa wingu hubadilisha matumizi ghafi ya wingu kuwa **gharama kwa kila kitengo cha matokeo** — kwa kila mteja, kila muamala, kila kesi iliyotatuliwa, kila tokeni. Ni uwezo wa FinOps unaogeuza "bili yetu ya AWS ni £400k/mwezi" kuwa "kumhudumia mgonjwa mmoja kunagharimu £0.83."

## Kwa nini ni muhimu

Namba za jumla ya matumizi haziwezi kujibu maswali muhimu: je, bidhaa inazidi kuwa na ufanisi au inapungua? Je, ukuaji unaboresha au unaharibu pembe ya faida? Tutoze nini? Gharama za kitengo hujibu yote matatu. Kwa afya ya kidijitali hasa, "gharama kwa kila kesi iliyotatuliwa" *ni* gharama ya kitengo ya huduma ya afya — inayolinganishika moja kwa moja na namba za [National Cost Collection](../ushuru-wa-kitaifa-na-gharama-za-kitengo/) anazotumia mwagizaji huduma kwa kila huduma nyingine, jambo linaloifanya kuwa lugha ya asili ya kuweka bei njia za kidijitali dhidi ya za jadi.

## Hisabati

```
Gharama ya kitengo = jumla ya gharama iliyogawiwa (ikijumuisha gharama za pamoja/jukwaa) / vitengo vilivyotolewa

Familia mbili:
  vitengo vya ufanisi wa rasilimali: gharama/GB iliyohifadhiwa, gharama/saa-vCPU,
                                     gharama/tokeni, gharama/dakika-ya-ujenzi
  vitengo vya biashara:              gharama/mteja, gharama/muamala, gharama/mashauriano,
                                     gharama/kesi-iliyotatuliwa

Nidhamu ya pembeni dhidi ya wastani inatumika (marginal-vs-average-cost.md):
matumizi yaliyoahidiwa/yaliyohifadhiwa hufanya gharama ya kitengo ya pembeni ≈ 0 hadi
hatua ya ahadi inayofuata — weka bei ya maamuzi ya upanuzi kwa pembeni, mielekeo
ya ufanisi kwa wastani.
```

## Mfano uliokokotolewa

Huduma ya kidijitali ya kupanga kipaumbele (triage): matumizi ya wingu £62,000/mwezi (kompyuta £30k, data £18k, mgao wa jukwaa la pamoja £14k), ikishughulikia matukio 380,000 ya triage/mwezi:

```
Gharama ya wastani kwa tukio = 62,000 / 380,000 ≈ £0.163

Ulinganisho wa mwagizaji huduma: triage ya simu ≈ £8–12/simu, mashauriano ya daktari wa familia ≈ £42
→ tukio la kidijitali linaendeshwa kwa ~2% ya mbadala nafuu zaidi wa binadamu — uchumi wa
  kuhamisha njia wa gds-service-metrics.md, kutoka upande wa gharama.

Ukaguzi wa mwelekeo: mwaka jana £0.21/tukio kwa matukio 240k → uchumi wa kiwango unaoboreka
(gharama za kudumu za jukwaa zinapunguzwa kwa kugawanywa), unastahili kichwa cha habari kwenye mapitio ya robo mwaka.
```

## Uhusiano na uhandisi wa programu

Uchumi wa kitengo ndipo chaguzi za uhandisi zinakuwa zinazosomeka kifedha: usanifu unaopunguza gharama kwa tukio nusu ni faida ya bei; unaokua zaidi ya mstari ni bomu la muda linaloonekana tu katika kipimo hiki. Mazoea yanayohamia kutoka ugharamiaji wa afya: **chapisha kanuni za ugawaji** (gharama za pamoja zilipotosha namba za kitengo hadi PLICS iliposanifisha ugharamiaji wa ngazi ya mgonjwa — ugawaji wa gharama ya jukwaa lako unahitaji ukali uleule); **chagua vitengo ambavyo mnunuzi anafikiria kwa vyo** (waagizaji huduma hununua matukio, si vCPU); na lisha gharama za kitengo katika kila modeli ya [ICER](../uwiano-wa-nyongeza-wa-ufanisi-wa-gharama/) na [athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) kama kigawanyo chenye mamlaka cha gharama. Kwa vipengele vya AI, kitengo ni tokeni — tazama [uchumi wa kitengo wa makisio](../uchumi-wa-kitengo-wa-makisio/).

## Mitego

- **Kupuuza gharama za pamoja**: gharama za kitengo zisizojumuisha ugawaji wa jukwaa/usalama/zamu-za-simu hudharau kwa 30–50% na huporomoka wakati wa ukaguzi.
- **Vigawanyo vya majivuno**: "gharama kwa kila simu ya API" hujipendekeza; "gharama kwa kila tukio la mgonjwa lililokamilika" hufahamisha.
- **Kuweka bei ya maamuzi ya pembeni kwa gharama ya wastani**: kutoza timu gharama ya wastani ya kitengo kwa matumizi ambayo ni bure kwa pembeni huendesha tamthilia ya kuepuka upotevu (tazama [ushuru wa kitaifa](../ushuru-wa-kitaifa-na-gharama-za-kitengo/) kwa toleo la NHS la hitilafu hii ya motisha).

## Vyanzo

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
