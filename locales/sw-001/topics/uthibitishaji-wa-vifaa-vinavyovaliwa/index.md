# Uthibitishaji wa Vifaa Vinavyovaliwa

Vipimo vya uthibitishaji hukadiria jinsi vipimo vya kifaa kinachovaliwa vinavyokubaliana na kiwango cha dhahabu cha kikliniki (ECG kwa mapigo ya moyo, polysomnography kwa usingizi): **MAPE**, uwiano wa upatanifu, makubaliano ya Bland–Altman — pamoja na vipimo vya kiutendaji vinavyodhibiti ubora wa data wa ulimwengu halisi: **ufuasi wa muda wa kuvaa** na **ukamilifu wa data**.

## Kwa nini ni muhimu

Uthibitishaji ndio sharti la kila kitu kinachofuata: kifaa kisichoweza kuthibitisha makubaliano na kipimo cha rejea hakiwezi kutia nanga [vituo vya mwisho vya kidijitali](../vigezo-vya-mwisho-vya-kidijitali-na-viashiria-vya-kibaolojia/), kuunga mkono [utozaji wa RPM](../uchumi-wa-ufuatiliaji-wa-mbali-wa-wagonjwa/), wala kubeba madai ya kikliniki. Vizingiti vinavyokubalika vya fani kwa mapigo ya moyo: **MAPE ≤5%** (kali) au **≤10%** (legevu) dhidi ya ECG. Pointi za rejea kutoka fasihi: Oura Gen 3 MAPE ya HR ya kupumzika 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — vifaa vya watumiaji sasa vinavuka mpaka wa daraja la kikliniki, na ndiyo maana kipimo kinajalisha kwa kila kifaa na kila hali.

## Hisabati

```
MAPE = (1/n) Σ |kilichopimwa_i − rejea_i| / rejea_i × 100

CCC (uwiano wa upatanifu) = makubaliano yanayojumuisha uwiano na
      upendeleo wa kimfumo (Pearson r huadhibiwa kwa mabadiliko ya mahali/kipimo)

Bland–Altman: upendeleo wa wastani ± mipaka ya makubaliano ya 1.96 SD — huonyesha
      kama kosa linategemea ukubwa wa thamani

Milango ya kiutendaji:
Ufuasi wa muda wa kuvaa = muda uliovaliwa / muda wa itifaki × 100
Ukamilifu wa data       = pointi za data zilizoonekana / zinazotarajiwa × 100
```

Uthibitishaji lazima uripotiwe **kwa kila hali ya shughuli** (kupumzika, mwendo, usingizi) na kwa kila idadi ya watu — ugunduzi wa macho wa PPG hudhoofika kwa hitilafu za mwendo, mguso hafifu, na rangi nyeusi ya ngozi, hali ya kushindwa iliyoandikwa inayohusu usawa.

## Mfano uliokokotolewa

Mpango wa wodi pepe unachagua kifaa cha ufuatiliaji kinachovaliwa. Mgombea A: MAPE ya kupumzika 2.1%, MAPE ya mazoezi 11.4%. Mgombea B: kupumzika 3.8%, mazoezi 6.9%.

```
Matumizi: kugundua mgonjwa anayezorota nyumbani — tahadhari huanzishwa na
mapigo ya juu yanayoendelea, mara nyingi wakati wa shughuli.
Kichwa cha A (2.1%) kinashinda kijitabu; B inashinda matumizi: katika
hali inayohusu tahadhari (mwendo), kosa la 11.4% la A kwa
HR 100 = ±mapigo 11/dak — linapitia bendi nzima ya kizingiti cha tahadhari,
likizalisha upandishaji wa uongo (kila mmoja ni mwito wa muuguzi, ~£40) au kukosa.

Uchumi wa tahadhari za uongo: wagonjwa 500 × tahadhari 2 za ziada za uongo/wiki × £40
= £milioni 2.08/mwaka za gharama ya kosa kutokana na kuchagua namba isiyo sahihi ya uthibitishaji.
```

## Uhusiano na uhandisi wa programu

Wahandisi hutumia data ya uthibitishaji wanapochagua vihisi na *huizalisha* wanapojenga vipengele vya kupima — majukumu yote mawili yanahitaji nidhamu ileile: jaribu katika hali ya usambazaji, si hali ya onyesho (mfano wa programu: pima utendaji kwenye mzigo wako wa kazi wa uzalishaji, si wa muuzaji). Muda wa kuvaa na ukamilifu ni matokeo ya uhandisi wa bidhaa — starehe, maisha ya betri, usanifu wa mazoea ya kuchaji, na uaminifu wa usawazishaji huamua kama lango la utozaji wa RPM la siku-16-katika-30 linafikiwa ([uchumi wa ufuatiliaji wa mbali wa wagonjwa](../uchumi-wa-ufuatiliaji-wa-mbali-wa-wagonjwa/)) na kama seti za data za majaribio zinaweza kuchambuliwa. Chukulia upungufu kama ishara iliyosanifiwa: tofautisha "haikuvaliwa", "ilivaliwa lakini hakuna ishara", na "usawazishaji ulishindwa" katika skima tangu siku ya kwanza — zikipunguzwa hadi null, huharibu kila uchambuzi wa chini ya mkondo.

## Mitego

- **MAPE ya jumla inayoficha kushindwa mahususi kwa hali** — mtego wa mfano uliokokotolewa.
- **Idadi ya uthibitishaji ≠ idadi ya usambazaji**: umri, rangi ya ngozi, mtetemo, unene huhamisha kosa la kihisi cha macho; kagua demografia ya utafiti.
- **Kuripoti uwiano pale makubaliano yanapohitajika**: Pearson r ya juu yenye upendeleo wa kimfumo bado huainisha vibaya dhidi ya vizingiti kamili — dai CCC/Bland–Altman.
- **Ukamilifu uliopandishwa na uingizwaji**: mapengo yaliyojazwa yakiripotiwa kama data iliyoonekana.

## Vyanzo

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
