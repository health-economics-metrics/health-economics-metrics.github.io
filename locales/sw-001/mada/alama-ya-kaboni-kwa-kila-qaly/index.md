# Alama ya Kaboni kwa Kila QALY

Kaboni kwa kila QALY ni uwiano wa ufanisi — uzalishaji wa kaboni wa uingiliaji (au uzalishaji uliokwepwa) ukigawanywa na QALY inazotoa — unaofanana moja kwa moja na gharama kwa kila QALY, ukiruhusu ufanisi wa kaboni wa uingiliaji kutathminiwa pamoja na ufanisi wake wa gharama. "Manufaa halisi ya kifedha yaliyorekebishwa kwa kaboni" huenda hatua moja zaidi, ikithamini athari ya kaboni kwa fedha kwa kutumia thamani rasmi za kaboni zisizouzwa sokoni za Green Book ya Uingereza na kuzitoa kwenye [manufaa halisi ya kifedha](../manufaa-halisi-ya-kifedha/) ya kawaida.

## Kwa nini ni muhimu

NICE na NHS England sasa zinatarajia athari ya mazingira izingatiwe pamoja na gharama na QALY. NHS ina ahadi ya hadharani ya sifuri halisi: sifuri halisi kwa uzalishaji wake wa moja kwa moja ifikapo 2040, na sifuri halisi kwa alama kamili ya mnyororo wa ugavi ifikapo 2045. Mwongozo wa NICE wa tathmini za teknolojia ya afya (PMG36) unarejelea uendelevu wa mazingira kama jambo linaloibuka katika tathmini ya teknolojia. Kwa bidhaa ya afya ya kidijitali, hii inamaanisha kaboni inakuwa nguzo ya nne ya hoja ya thamani, pamoja na gharama, QALY, na [utawala kwenye mpaka wa ufanisi](../utawala-na-mpaka-wa-ufanisi/) — si badala ya yoyote kati ya hizo, bali kipimo ambacho hoja ya biashara iliyojengwa vizuri inahitaji zaidi na zaidi kuripoti.

## Hisabati

```
Kaboni kwa kila QALY = jumla_ya_uzalishaji_tani_co2e / jumla_ya_qaly
  (thamani hasi inamaanisha uzalishaji halisi ULIOEPUKWA kwa kila QALY inayopatikana —
  ushindi maradufu: afya bora na kaboni ndogo)

Athari ya kaboni iliyothaminiwa kwa fedha = uzalishaji_tani_co2e × thamani_ya_kaboni_kwa_tani
  (uzalishaji hasi × thamani chanya = gharama hasi, yaani manufaa)

NMB iliyorekebishwa kwa kaboni = manufaa_halisi_ya_kifedha − athari_ya_kaboni_iliyothaminiwa
```

Hii inapanua wazo la mpaka wa ufanisi wa gharama/QALY kwa mhimili wa pili — kaboni kwa kila QALY — mantiki ileile ya "chora kila chaguo uone kipi kinatawaliwa" kama [utawala na mpaka wa ufanisi](../utawala-na-mpaka-wa-ufanisi/), ikitumika kwa kaboni badala ya gharama.

## Mfano uliokokotolewa

Huduma ya afya-mtandao inachukua nafasi ya ziara za ana kwa ana, ikiepuka safari 5,000 za gari kwa mwaka kwa takriban kg 8 CO2e kila moja — tani 40 za CO2e zimeepukwa, zikionyeshwa kama namba hasi ya uzalishaji (−tani 40.0), na inatoa QALY 25/mwaka:

```
Kaboni kwa kila QALY = −40.0 / 25.0 = tani −1.6 CO2e zimeepukwa kwa kila QALY inayopatikana
```

Kwa kutumia thamani ya kaboni isiyouzwa sokoni ya Green Book (namba ya mfano, thamani kuu isiyouzwa sokoni ya 2023 ≈ £269/tani CO2e — Green Book husasisha thamani za kaboni kila mwaka, thibitisha tena kabla ya kunukuu katika uchambuzi hai):

```
Athari ya kaboni iliyothaminiwa = −40.0 × £269 = −£10,760
```

"Gharama" ya −£10,760 ni manufaa ya £10,760. Ikiwa manufaa halisi ya kifedha ya uingiliaji peke yake ni £500,000:

```
NMB iliyorekebishwa kwa kaboni = £500,000 − (−£10,760) = £510,760
```

Akiba ya kaboni inaongeza kwenye hoja badala ya kupunguza — ushindi maradufu ambao muundo wa uzalishaji hasi unakusudia kuufichua.

## Uhusiano na uhandisi wa programu

Hii ni makutano hai, ya sasa na uchumi wa AI/wingu: alama ya kaboni ya kompyuta ya kufunza na kuendesha modeli ya AI sasa ni mstari halisi katika ununuzi wa NHS, kwa kuwa mikataba ya wasambazaji wa NHS juu ya viwango fulani inahitaji Mpango wa Kupunguza Kaboni. [Uchumi wa kitengo wa wingu](../uchumi-wa-kitengo-wa-wingu/) tayari hufuatilia gharama kwa kila kitengo cha matokeo ya kompyuta; kaboni kwa kila QALY ni kiolezo cha asili kwa kipimo cha baadaye cha "gharama ya kaboni kwa kila makisio" kinachopanua moduli hiyo na [uchumi wa kitengo wa makisio](../uchumi-wa-kitengo-wa-makisio/) hadi kipimo cha mazingira, ingawa kipimo hicho bado hakipo.

## Mitego

- **Michezo ya mipaka ya wigo**: kuhesabu uzalishaji wa moja kwa moja (Scope 1) pekee na kuondoa uzalishaji wa mnyororo wa ugavi (Scope 3), ambao kwa kawaida ndio wengi wa alama halisi ya bidhaa ya afya ya kidijitali.
- **Kutumia thamani ya kaboni iliyopitwa na wakati**: Green Book husasisha thamani zake za kaboni zisizouzwa sokoni kila mwaka, kwa hivyo kila namba ya £/tani inayonukuliwa lazima iwe na tarehe, isinukuliwe kama kigezo thabiti.
- **Kuchukulia "ufanisi wa kaboni" kama mbadala wa "ufanisi wa gharama"**: uingiliaji wenye kaboni ndogo na thamani ndogo bado ni matumizi mabaya ya rasilimali za NHS. Kaboni ni nguzo ya nne pamoja na gharama na QALY, si badala ya yoyote.

## Vyanzo

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
