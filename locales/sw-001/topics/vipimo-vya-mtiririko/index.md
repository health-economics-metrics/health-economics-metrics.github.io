# Vipimo vya Mtiririko

Vipimo vya mtiririko hupima jinsi kazi inavyosonga kupitia mfumo wa utoaji: muda wa mzunguko, muda wa kuongoza, upitishaji, kazi inayoendelea (WIP), na ufanisi wa mtiririko. Vinatawaliwa na Sheria ya Little — hisabati ileile ya foleni inayotawala vitanda vya hospitali na orodha za kusubiri.

## Kwa nini ni muhimu

Muda mwingi wa utoaji si kazi — ni kusubiri. Tafiti za ufanisi wa mtiririko wa kazi za maarifa mara kwa mara hupata vitu vikifanyiwa kazi kikamilifu kwa **5–15%** tu ya muda uliopita; kilichobaki ni foleni. Hiyo inamaanisha kuharakisha kwa bei nafuu zaidi ni kuondoa foleni, si kuajiri — hasa ufahamu ambao programu za mtiririko wa wagonjwa hospitalini ziligundua kuhusu vitanda. Kwa chochote chenye [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji/), vipimo vya mtiririko hubainisha ni wapi gharama ya ucheleweshaji inakusanyika.

## Hisabati

```
Muda wa mzunguko   = t(imekamilika) − t(imeanza)
Muda wa kuongoza   = t(imetolewa) − t(imeombwa)     (unajumuisha foleni kabla ya kazi)
Upitishaji         = vitu vilivyokamilika / kipindi
WIP                = vitu vilivyoanzishwa lakini havijakamilika
Ufanisi wa mtiririko = muda amilifu / (amilifu + muda wa kusubiri) × 100

Sheria ya Little:  wastani wa WIP = upitishaji × wastani wa muda wa mzunguko
                   (kwa usawa: muda wa mzunguko = WIP / upitishaji)
```

Sheria ya Little ndiyo mkono wa nguvu: kwa upitishaji usiobadilika, kupunguza WIP hupunguza muda wa mzunguko kwa uwiano. Pia inaendesha hospitali: `vitanda vinavyokaliwa = kulazwa/siku × muda wa kukaa`.

## Mfano uliokokotolewa

Timu ina vitu 40 vinavyoendelea na inakamilisha 10/wiki: muda wa mzunguko = 40/10 = wiki 4. Wanaweka mipaka ya WIP, wakipunguza WIP hadi 15: muda wa mzunguko = 15/10 = **wiki 1.5** — watu walewale, upitishaji uleule, utoaji wa kasi zaidi kwa 62%, kutokana na nidhamu ya foleni tu.

Ukiwekewa bei kwa CoD: ikiwa vitu vina wastani wa gharama ya ucheleweshaji ya £3,000/wiki, kila kitu sasa hutumia wiki 2.5 pungufu kwenye foleni: vitu 10/wiki × 2.5 × 3,000 = **£75,000/wiki za gharama ya ucheleweshaji zimeondolewa** — kutoka mabadiliko ya sera yasiyogharimu chochote.

Kioo cha hospitali: kulazwa 40/siku × siku 6.0 za kukaa = vitanda 240; punguza kusubiri kusiko kikliniki ndani ya muda wa kukaa hadi siku 5.6 na vitanda 16 vinaachiliwa ([muda wa kukaa](../muda-wa-kukaa-hospitalini/)) — sheria ileile, mkono wa nguvu uleule.

## Uhusiano na uhandisi wa programu

Vipimo vya mtiririko ni lugha ya pamoja kati ya uhandisi wa utoaji na shughuli za afya:

- **Vigezo vya hatua ndogo za PR** (LinearB, ~PR milioni 8): muda wa kuchukua wa kiwango cha juu kabisa < saa 7, mapitio < saa 6, mzunguko mzima < ~saa 26 — muda wa kuchukua ni foleni safi, jambo la kwanza kushambulia.
- **[Orodha za kusubiri](../athari-kwa-orodha-ya-kusubiri/)** ni mrundikano; **[RTT](../rufaa-hadi-matibabu/)** ni muda wa kuongoza; **[ukaaji wa vitanda](../siku-za-kitanda-zilizookolewa/)** ni WIP. Uboreshaji huhamia pande zote mbili: mipaka ya WIP ↔ kulainisha kulazwa; kupima muda wa foleni ↔ kufuatilia hatua za njia.
- Ufanisi wa mtiririko chini ya 15% ni wa kawaida katika vikoa vyote viwili, na vyote hufichwa kwa sababu *watu* wana shughuli huku *kazi* inasubiri — pima saa ya kazi, si ya wafanyakazi.

## Mitego

- **Kuabudu matumizi**: kuendesha matumizi ya wafanyakazi kuelekea 100% hulipua muda wa foleni kwa njia isiyo ya mstari (M/M/1: kusubiri ∝ ρ/(1−ρ)) — sababu hospitali zenye ukaaji wa 95% hufungika na timu zenye ugawaji wa 95% hukwama.
- **Wastani juu ya mgawanyo uliopinda**: muda wa mzunguko una mikia mizito; tabiri kwa asilimia (p85), si wastani.
- **Kupunguza WIP kwa kukataa kazi juu ya mkondo** na kuliita uboreshaji wa mtiririko — mahitaji hayakutoweka, yalipanga foleni nje ya mpaka wa kipimo (toleo la hospitali: magari ya wagonjwa yanayosubiri nje ya ED).

## Vyanzo

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
