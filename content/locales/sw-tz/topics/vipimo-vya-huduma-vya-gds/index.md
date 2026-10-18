# Vipimo vya Huduma vya GDS

Mwongozo wa Huduma wa Huduma ya Kidijitali ya Serikali ya Uingereza (GDS) unaamuru KPI nne kwa kila huduma ya kidijitali ya serikali: **gharama kwa muamala, kuridhika kwa watumiaji, kiwango cha ukamilishaji, na upokeaji wa kidijitali**. Kwa pamoja ni uchumi wa chini kabisa wa huduma ya umma ya kidijitali — na kiolezo ambacho huduma za kidijitali za NHS hurithi.

## Kwa nini ni muhimu

Vipimo vya GDS vinasimba hoja ya biashara ya kuhamisha njia iliyofadhili muongo wa kuweka serikali kidijitali: Ripoti ya Ufanisi wa Kidijitali ilipata miamala ya kidijitali kuwa nafuu ~mara 20 kuliko simu na ~mara 50 kuliko ana kwa ana (namba za serikali za mitaa: wavuti £0.15, simu £2.83, ana kwa ana £8.62). Lakini akiba hutokea tu watu wanapo*kamilisha* safari ya kidijitali (kiwango cha ukamilishaji) *badala ya* njia ghali (upokeaji) — KPI nne ni modeli moja ya kiuchumi, si dashibodi nne.

## Hisabati

```
Gharama kwa muamala  = jumla ya gharama ya huduma / miamala iliyokamilika
Kiwango cha ukamilishaji = iliyokamilika / miamala iliyoanzishwa × 100
Upokeaji wa kidijitali = miamala ya kidijitali / miamala ya njia zote × 100
Kuridhika kwa watumiaji = % walioridhika+walioridhika sana (pointi 5, utafiti ndani ya huduma)

Akiba ya kuhamisha njia = kiasi × badiliko la upokeaji × (gharama_njia_ya_zamani − gharama_kidijitali)
… ukitoa mahitaji ya kushindwa: (1 − kiwango cha ukamilishaji) × gharama ya njia mbadala
```

## Mfano uliokokotolewa

Huduma ya usimamizi wa miadi ya NHS: miamala milioni 2/mwaka, kwa sasa 70% simu (£3.20/simu) / 30% kidijitali (£0.25). Usanifu upya unaongeza upokeaji wa kidijitali hadi 55% na ukamilishaji kutoka 84% hadi 93%:

```
Akiba ya kuhamisha upokeaji = milioni 2 × 0.25 × (3.20 − 0.25) = £1,475,000/mwaka

Akiba ya mahitaji ya kushindwa: safari za kidijitali zilizoshindwa hurudi kwenye simu
  kabla:  milioni 2 × 0.30 × 0.16 × £3.20 = £307,200
  baada:  milioni 2 × 0.55 × 0.07 × £3.20 = £246,400
  halisi £60,800/mwaka — maboresho ya ukamilishaji hulinda faida za upokeaji

Kuridhika ni kiashiria kinachoongoza: watumiaji wasioridhika hurudi kwenye simu,
kwa hivyo kushuka kwa kuridhika hutabiri kuoza kwa upokeaji kabla hakijaonekana.
```

## Uhusiano na uhandisi wa programu

KPI hizi nne ni mfano wa kiwango cha uzalishaji wa [jedwali la gharama na matokeo](../uchambuzi-wa-gharama-na-matokeo/): kipimo kimoja cha gharama, vipimo vitatu vya matokeo, kamwe havibanwi kuwa alama. Kwa wahandisi wa bidhaa, mafunzo ya kiutendaji ni: **kiwango cha ukamilishaji ni tatizo la upimaji wa funeli** (kila sehemu ya kuacha inapatikana na kurekebishika); **gharama kwa muamala ni [uchumi wa kitengo wa wingu](../uchumi-wa-kitengo-wa-wingu/)** pamoja na gharama za njia zinazosaidiwa na wafanyakazi; **upokeaji ni kipimo cha usawa kilichojificha** — watumiaji wasioweza au wasiotaka kuhamisha njia ni wazee, walemavu, na wenye uhaba kwa kiasi kisicholingana, kwa hivyo kufunga njia kwa ukali hubadilisha "akiba" kuwa madhara ya ufikiaji (tazama [ufikiaji na usawa](../ufikiaji-na-usawa/)). Kuchapisha KPI (GOV.UK hufanya hivyo, kwa kila huduma) ni utaratibu wenyewe: uwazi huipa nidhamu utabiri kama ukaguzi wa [utimizaji wa manufaa](../utimizaji-wa-manufaa/).

## Mitego

- **Upokeaji kwa kulazimisha**: kufunga laini ya simu huongeza upokeaji na kumwaga mahitaji ya kushindwa kwa wafanyakazi wa mstari wa mbele; pima gharama ya jumla ya mfumo.
- **Ukamilishaji uliopimwa kuanzia ukurasa wa 2**: kuanza funeli baada ya sehemu ya kuacha hujipendekeza kwa kiwango.
- **Gharama kwa muamala inayopuuza msaada wa kidijitali unaosaidiwa** na ushughulikiaji wa mahitaji ya kushindwa.
- **Tafiti za kuridhika wakati wa ukamilishaji uliofanikiwa tu** — wasioridhika kwa kawaida hawafiki kwenye utafiti.

## Vyanzo

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
