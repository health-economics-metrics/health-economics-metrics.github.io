# Uchambuzi wa Gharama na Manufaa (CBA)

CBA huthamini gharama *na* matokeo kwa fedha. Ni aina pekee ya uchambuzi inayoweza kujibu "je, hili linastahili kufanywa kabisa?" — si tu "chaguo lipi ni bora?" — kwa sababu manufaa yaliyothaminiwa kwa fedha yanaweza kulinganishwa moja kwa moja na gharama.

## Kwa nini ni muhimu

CBA ni kiwango cha **Green Book** ya HM Treasury ya Uingereza kwa tathmini zote za matumizi ya umma, afya ikiwemo matokeo yanapoweza kuthaminiwa kwa fedha. Pale [CEA](../uchambuzi-wa-ufanisi-wa-gharama/)/[CUA](../uchambuzi-wa-gharama-na-matumizi/) zinaposimama kwenye "gharama kwa kila kitengo cha afya," CBA huweka bei kwa afya yenyewe (QALY × thamani ya kizingiti) na kila kitu kingine — muda, usafiri, kaboni — na kuripoti namba moja halisi. Kila hoja kamili ya biashara ya kidijitali ya NHS ina kesi ya kiuchumi yenye umbo la CBA.

## Hisabati

```
NPV (thamani halisi ya sasa ya kijamii) = Σ_t [ (Manufaa_t − Gharama_t) / (1 + r)^t ]
BCR (uwiano wa manufaa kwa gharama)     = PV(manufaa) / PV(gharama)

Pitisha ikiwa NPV > 0 (kwa usawa BCR > 1); panga kwa NPV, si BCR.
r = 3.5% (kiwango cha upendeleo wa muda wa kijamii cha Green Book)
```

Athari za kiafya zinaweza kuingia zikiwa zimethaminiwa kama QALY × λ (tazama [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/)). Green Book pia inaamuru **marekebisho ya upendeleo wa matumaini** — kuongeza makadirio ya gharama na kupunguza manufaa kwa asilimia zinazotegemea ushahidi, kwa sababu tathmini kwa utaratibu ni za waridi mno.

## Mfano uliokokotolewa

Mfumo wa e-rufaa, upeo wa miaka 5, punguzo la 3.5%:

```
Gharama:   ujenzi £1.2M (mwaka 0), uendeshaji £300k/mwaka (miaka 1–5)
Manufaa:   akiba ya utawala £250k/mwaka, vipimo vinavyojirudia vilivyoepukwa £280k/mwaka,
           muda wa wagonjwa uliookolewa saa 40,000/mwaka × £15 = £600k/mwaka → £1,130k/mwaka

PV gharama   = 1,200k + 300k × 4.515 (kigezo cha mwaka) = £2,555k
PV manufaa   = 1,130k × 4.515                           = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Tumia upendeleo wa matumaini wa Green Book (tuseme +40% kwa gharama ya ujenzi, −20% kwa manufaa): PV gharama ≈ £3,035k, PV manufaa ≈ £4,082k, NPV ≈ **+£1,047k** — bado chanya, ambalo ndilo lengo la marekebisho: hoja zinapaswa kunusurika matumaini yao wenyewe.

## Uhusiano na uhandisi wa programu

Hoja za biashara za uhandisi ni CBA zisizo rasmi. Maboresho ya Green Book yanayostahili kuibwa:

- **Upendeleo wa matumaini kama nyongeza ya kawaida** — wahandisi hudharau gharama ya uhamishaji kwa kuaminika kama wizara zinavyodharau gharama ya miundombinu; tumia nyongeza iliyotajwa badala ya kujifanya mara hii ni tofauti.
- **Thamini manufaa makuu kwa uaminifu au usiyathamini kabisa** — muda wa mgonjwa/mtumiaji huthaminiwa kwa viwango vinavyoweza kutetewa; "thamani ya chapa" sivyo.
- **NPV hupanga, BCR hapangi**: mradi mdogo wenye BCR 5 unaweza kuwa na umuhimu mdogo kuliko mkubwa wenye BCR 1.6.

## Mitego

- **Kuthamini kisichothaminika** ili kukuza manufaa (ari, "mpangilio wa kimkakati") — viache vya ubora, kulingana na [uchambuzi wa gharama na matokeo](../uchambuzi-wa-gharama-na-matokeo/).
- **Kuhesabu uhamisho kama manufaa**: fedha zinazosogea kati ya vyombo vya umma hubadilika kuwa sifuri katika [mtazamo](../mtazamo-wa-uchambuzi/) wa kijamii.
- **Hakuna hali mbadala**: manufaa hupimwa dhidi ya chaguo la kiwango cha chini cha hatua, si dhidi ya sifuri.

## Vyanzo

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
