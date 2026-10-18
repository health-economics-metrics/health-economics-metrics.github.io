# SPACE na DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — kuridhika na ustawi, utendaji, shughuli, mawasiliano na ushirikiano, ufanisi na mtiririko) na DevEx (mizunguko ya maoni, mzigo wa kiakili, hali ya mtiririko) ni mifumo ya kupima tija ya wasanidi **kwa vipimo vingi** — jibu la fani kwa ugunduzi kwamba hakuna kipimo kimoja kinachonusurika kukutana na uhalisia.

## Kwa nini ni muhimu

Mifumo yote miwili inajumuisha somo gumu lilelile ambalo utafiti wa matokeo ya afya ulijifunza miongo mingi iliyopita: namba moja (mistari ya msimbo; shinikizo la damu) hupotosha uhalisia wenye vipimo vingi, na kuiboresha huzaa kucheza mfumo, si uboreshaji. SPACE inaagiza kuchanganya vipimo kutoka angalau vipimo vitatu, ikichanganya telemetria na ripoti binafsi — kimuundo sawa na jinsi [EQ-5D](../eq-5d/) inavyoelezea vipimo vitano kabla ya faharasa yoyote kukokotolewa, na sababu [PROMs](../matokeo-yanayoripotiwa-na-mgonjwa/) zipo pamoja na vipimo vya kikliniki. Kuridhika/ustawi pia si pambo laini: hulisha uchumi wa [kubaki kwa wafanyakazi](../kubaki-kwa-nguvu-kazi/), ambapo kuondoka kunathaminiwa kwa miezi ya mshahara uliojumuishwa.

## Hisabati

Hakuna mfumo wowote ulio fomula; yote mawili ni miundo ya upimaji:

```
Kanuni ya SPACE: vipimo ≥ 3, ≥ 1 cha mtazamo (utafiti) + ≥ 1 cha mfumo (telemetria)

Vipimo vya DevEx na jozi za mfano:
  mizunguko ya maoni → muda wa CI (telemetria) + "kusubiri kunahisi polepole" (utafiti)
  mzigo wa kiakili   → ufikivu wa nyaraka, muda wa kuanza + juhudi inayoonekana
  hali ya mtiririko  → msongamano wa mikutano/usumbufu + umakini unaoripotiwa binafsi

Faharasa zilizotokana (mf. DXI ya DX) huweka mchanganyiko wa utafiti kwenye muda:
dai la muuzaji ≈ dakika 13/msanidi/wiki kwa kila pointi ya faharasa — lichukulie
kama kigezo cha muuzaji cha kuthibitisha ndani, si kanuni ya asili.
```

## Mfano uliokokotolewa

Timu ya jukwaa inahalalisha uwekezaji wa DevEx (kuharakisha CI + kurekebisha nyaraka) kwa wasanidi 300:

```
Msingi: CI p75 = dakika 28; utafiti "napoteza umakini nikisubiri build": 62% wanakubali
Baada:  CI p75 = dakika 9;  kukubali 24%

Muda uliorejeshwa (telemetria): build 6/siku × dakika 19 × 0.4 inayotumika = ~dakika 45/siku/msanidi
Thamani ya uwezo: 300 × saa 0.75 × siku 220 × £60/saa ≈ £milioni 2.97/mwaka (haitoi fedha taslimu —
tazama cash-releasing-vs-non-cash-releasing.md; kigezo cha 0.4 cha utumikaji ni
punguzo la mgawanyiko kutoka practitioner-time.md)
Uthibitisho wa kimtazamo ndio unaofanya dai la telemetria liaminike — yote mawili
peke yake yanaweza kuchezewa; pamoja yanathibitishana.
```

## Uhusiano na uhandisi wa programu

Waraka huu *ndio* upande wa programu; uhamisho unaelekea uchumi wa afya. "Mwaka wa mhandisi uliorekebishwa kwa ubora" — muda uliopimwa kwa faharasa sanifu ya uzoefu — ni ujenzi wa [QALY](../mwaka-wa-maisha-uliorekebishwa-kwa-ubora/) uliotumika kwa uwezo wa uhandisi, na hurithi kanuni za QALY: uzito kutoka chombo kilichothibitishwa (utafiti thabiti, alama zilizochapishwa), zinazopatikana *kabla* ya ulinganisho, kamwe zisirekebishwe kupendelea zana inayopendwa. Somo la [SF-6D dhidi ya EQ-5D](../eq-5d/) pia linatumika: vyombo tofauti hutoa namba tofauti kimfumo, kwa hivyo kamwe usilinganishe faharasa za DevEx kati ya vyombo vya wauzaji tofauti.

## Mitego

- **Kuporomoka hadi kipimo kimoja**: dashibodi zinazopunguza SPACE hadi alama moja huunda upya tatizo ambalo mfumo upo kuzuia.
- **Vipimo vya shughuli kama matokeo**: commit, PR, na pointi za hadithi ni Shughuli — kipimo ambacho SPACE inaonya waziwazi ndicho kinachochezewa zaidi (mfano wa afya: kuhesabu taratibu, si kupona).
- **Uchovu wa utafiti na athari za Hawthorne**: vyombo vyepesi vya kila robo mwaka hushinda kuhojiwa kila wiki.
- **Kulinganisha timu**: kama jedwali za ligi za hospitali bila marekebisho ya mchanganyiko wa kesi — tofauti za muktadha (kikoa, mzigo wa mifumo ya zamani, zamu za dharura) hutawala.

## Vyanzo

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
