# Vigezo vya Mwisho vya Kidijitali na Viashiria vya Kibaolojia

Kiashiria cha kibaolojia cha kidijitali ni kipimo cha kiwiliwili au kitabia kilicho lengo kinachokusanywa kupitia vihisi (kasi ya kutembea kutoka simu, usingizi kutoka kifaa cha kuvaa, kutetemeka kutoka kipima mwendo). Kigezo cha mwisho cha kidijitali ni kipimo kama hicho kilichoinuliwa kuwa **matokeo ya jaribio** — kinachotumiwa kuonyesha athari ya matibabu. Kupandishwa kutoka "data ambayo kifaa hutoa" hadi "ushahidi ambao mdhibiti anakubali" hupitia ngazi ya uthibitishaji iliyofafanuliwa.

## Kwa nini ni muhimu

Vigezo vya mwisho vya jadi vya majaribio ni vya matukio (ziara za kliniki kila miezi 3) na ghali; vigezo vya mwisho vya kidijitali ni endelevu, vya kiikolojia (maisha halisi, si utendaji wa kliniki), na nafuu kwa kila uchunguzi — vinaweza kupunguza ukubwa wa majaribio, kugundua athari mapema, na kuwezesha tafiti zisizo za kati. Kikwazo ni uthibitishaji: mfumo unaokubalika (unaolingana na FDA, nguzo tatu) unahitaji **uthibitisho/uhalali wa kichambuzi** (kihisi hupima kiasi cha kimwili kwa usahihi), **uhalali wa kikliniki** (kipimo kinaakisi hali ya kikliniki inayodaiwa), na **kipengele muhimu cha afya** kilichoonyeshwa (wagonjwa wanajali kile kinachonasa). Kigezo cha mwisho bila vyote vitatu ni telemetria, si ushahidi.

## Hisabati

```
Uhalali wa kichambuzi: ulinganifu na rejea (tazama wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Uhalali wa kikliniki:  uhusiano/ubaguzi dhidi ya nanga za kikliniki
                       (uhalali wa makundi yanayojulikana, mwitikio wa mabadiliko)
Uchumi wa kigezo cha mwisho:
  matukio yaliyogunduliwa kwa mwaka-mgonjwa (endelevu) dhidi ya sampuli kwa ziara
  nguvu ya jaribio: vipimo endelevu hupunguza ukubwa wa sampuli wakati
  tofauti kati ya ziara inapotawala — N ∝ σ²/Δ², na σ² hushuka kwa sampuli nyingi
```

## Mfano uliokokotolewa

Jaribio la Parkinson linazingatia kasi ya kutembea kutoka kihisi cha mkono dhidi ya alama za kila robo mwaka zilizokadiriwa na kliniki:

```
Kigezo cha kliniki:   vipimo 4/mgonjwa/mwaka, kelele kubwa ya siku hadi siku
Kigezo cha kidijitali: ~vipimo 200 vya kimya/mgonjwa/mwaka

Tofauti ya kadirio la mabadiliko ya mwaka hushuka ~mara 5 kwa sampuli nyingi →
ukubwa wa athari unaogundulika kwa nguvu isiyobadilika unaboreka ~√5 ≈ mara 2.2, au
kwa usawa: ukubwa wa sampuli hupungua ~40–60% kwa nadharia ileile.
Kwa £25,000 kwa kila mgonjwa aliyesajiliwa, kupunguza wagonjwa 200 ≈ £milioni 5 zilizookolewa
kwa kila jaribio — hoja ya kibiashara ya uwekezaji wa uthibitishaji
(wenyewe labda £milioni 1–2) katika mfereji wa mfadhili.
```

## Uhusiano na uhandisi wa programu

Vigezo vya mwisho vya kidijitali ni nidhamu ya uhandisi wa data iliyovaa mavazi ya kikliniki: **asili na utoaji wa matoleo** (usasishaji wa algoriti katikati ya utafiti hutishia ulinganifu — tatizo la [PCCP](../tathmini-ya-udhibiti-wa-ai/) katika umbo la jaribio; funga toleo na thibitisha daraja); **usanifu wa data zinazokosekana** (mapengo ya muda wa kuvaa yana taarifa, si nasibu — tazama [uthibitishaji wa vifaa vya kuvaa](../uthibitishaji-wa-vifaa-vinavyovaliwa/); chaguzi za kujaza ni madai ya kisayansi); na **maamuzi ya mgawanyo wa ukingo/wingu** yanayobadilisha ni ishara ghafi ipi inayoweza kurejeshwa baadaye. Timu zinazochukulia mfereji wa kupima kama programu inayodhibitiwa tangu siku ya kwanza — iliyojaribiwa, yenye matoleo, iliyoandikwa — hununua uaminifu wa vigezo vyao vya mwisho kwa bei nafuu; kuongeza uthibitishaji kwenye mfereji uliojengwa haraka ndiko programu za vigezo vya mwisho vya kidijitali hufia.

## Mitego

- **Uhusiano-na-kliniki kama uthibitishaji kamili**: kulingana na kipimo chenye kasoro cha kliniki kunathibitisha urithi, si ukweli; thibitisha dhidi ya kipengele muhimu cha afya.
- **Hatari ya udhibiti ya kigezo kipya cha mwisho**: kigezo kisicho na mfano kinaweza kuwa bora kisayansi na bado kuzamisha uwasilishaji — shirikisha wadhibiti mapema (programu za sifa zipo).
- **Kutolingana kwa kihisi na idadi ya watu**: uthibitishaji kwenye mikono michanga yenye afya, usambazaji kwa wagonjwa wazee wenye kutetemeka na tofauti za rangi ya ngozi ambazo PPG haikuwahi kuona.
- **Kuteleza kwa kipengele**: kufunza upya algoriti ya kutembea kwa data mpya hufafanua upya kigezo cha mwisho kimya kimya katikati ya utafiti.

## Vyanzo

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
