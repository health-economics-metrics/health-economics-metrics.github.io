# Uwiano wa Nyongeza wa Ufanisi wa Gharama (ICER)

ICER ni gharama ya ziada kwa kila kitengo cha ziada cha athari ya afya unapochagua chaguo moja badala ya mbadala unaofuata kwa ubora. Ni namba ya kichwa cha habari ya tathmini ya teknolojia ya afya. (Kitengo cha athari kinapokuwa QALY, pia huitwa uwiano wa nyongeza wa gharama na matumizi, ICUR.)

## Kwa nini ni muhimu

Mifumo ya afya haitathmini teknolojia kwa kujitenga kamwe — daima *kwa nyongeza*, dhidi ya kile ambacho vinginevyo kingefanywa. NICE hulinganisha ICER ya teknolojia na kizingiti chake cha **£20,000–£30,000 kwa kila QALY**; taasisi ya ICER ya Marekani huripoti katika $50,000–$200,000/QALY; Kanada hufanya kazi kwa takriban CAD$50,000/QALY. Je, bidhaa yako "inastahili" kwa huduma ya afya ya taifa ni, rasmi, je ICER yake inavuka kizingiti cha ndani. Tazama [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/).

## Hisabati

```
ICER = (Gharama_mpya − Gharama_kilinganishi) / (Athari_mpya − Athari_kilinganishi)
     = ΔC / ΔE
```

Kanuni za ufafanuzi:

- ΔC < 0, ΔE > 0: chaguo jipya **linatawala** — nafuu zaidi na bora zaidi; hakuna uwiano unaohitajika.
- ΔC > 0, ΔE > 0: kokotoa ICER, linganisha na kizingiti λ; pitisha ikiwa ICER < λ.
- ΔC > 0, ΔE < 0: chaguo jipya linatawaliwa — kataa.
- Uwiano hufanya vibaya karibu na ΔE = 0 — pendelea [manufaa halisi ya kifedha](../manufaa-halisi-ya-kifedha/) kwa kupanga.

Kilinganishi lazima kiwe *chaguo linalofuata lisilotawaliwa*, si "kutofanya chochote" — tazama [utawala na mpaka wa ufanisi](../utawala-na-mpaka-wa-ufanisi/).

## Mfano uliokokotolewa

Huduma ya ufuatiliaji wa mbali kwa wagonjwa wa kushindwa kwa moyo, kwa kila wagonjwa 1,000/mwaka, dhidi ya huduma ya kawaida:

```
Gharama:  huduma £900,000; kulazwa kulikoepukwa kunaokoa £600,000
          ΔC = 900,000 − 600,000 = £300,000
Athari:   uingiliaji wa mapema unapata QALY 25
          ΔE = 25

ICER = 300,000 / 25 = £12,000 kwa kila QALY
```

£12,000/QALY iko vizuri chini ya kizingiti cha NICE cha £20,000 — hoja imara. Zingatia jinsi gharama *halisi* inavyohusika: bila offset ya £600,000 ICER ingekuwa £36,000/QALY na hoja ingeshindwa. Offsets za gharama na ubora wa ushahidi wake ndipo uchambuzi huu hushindwa au kushinda (tazama [gharama za chini ya mkondo zilizoepukwa](../gharama-za-chini-ya-mkondo-zilizoepukwa/)).

## Uhusiano na uhandisi wa programu

Nidhamu ya ICER inahamia kwa ukamilifu kwenye maamuzi ya uhandisi:

```
(gharama ya chaguo B − gharama ya chaguo A) / (matokeo B − matokeo A)
```

— gharama ya nyongeza kwa kila utumaji wa ziada, kwa kila saa ya mhandisi iliyookolewa, kwa kila tukio lililoepukwa — daima dhidi ya mbadala unaofuata kwa ubora, si dhidi ya kutofanya chochote. Mazoea mawili yanayostahili kuibwa: (1) *taja kilinganishi waziwazi*; madai mengi ya ROI ya zana hulinganisha kimya kimya na kikaragosi; (2) *toa gharama kwanza* — zana inayogharimu £100k lakini inahamisha £80k za matumizi yaliyopo ina ΔC = £20k.

## Mitego

- **Kulinganisha ICER kati ya sarafu bila hatua wazi ya ubadilishaji**: ICER iliyokokotolewa kwa sarafu ya nchi moja lazima ibadilishwe kwa mbinu iliyotajwa kabla ya kulinganishwa na kizingiti cha nchi nyingine — tazama [ulinganisho wa ICER kati ya sarafu](../ulinganisho-wa-icer-kati-ya-sarafu/) kwa kwa nini uchaguzi wa kigezo cha ubadilishaji (usawa wa nguvu ya ununuzi dhidi ya kiwango cha soko) unaweza wenyewe kugeuza uamuzi wa kupitisha.
- **Michezo ya kilinganishi**: kulinganisha na msingi uliopitwa na wakati au uliodhoofishwa kwa makusudi hukuza ΔE na kujipendekeza kwa ICER.
- **Wastani badala ya nyongeza**: gharama kwa kila QALY ya programu nzima si ICER ya kuipanua au kuipitisha.
- **Kuabudu kadirio la nukta**: ICER ni uwiano wa tofauti mbili zisizo na uhakika; ripoti kutokuwa na uhakika kupitia [PSA na CEAC](../uchambuzi-wa-unyeti-wa-uwezekano/).
- **ICER hasi zina utata** (nafuu-na-bora dhidi ya ghali-na-mbaya zaidi hutoa ishara ileile) — kamwe usiripoti ICER hasi bila kusema ni robo ipi.

## Vyanzo

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
