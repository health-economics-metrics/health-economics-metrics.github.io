# Ugawaji wa Gharama hadi Senti Kamili

Kugawanya jumla ya fedha — ruzuku ya pamoja, ankara ya miundombinu, namba ya athari za bajeti — kati ya wapokeaji kadhaa kwa hesabu ya kijinga ya asilimia mara kwa mara huzalisha sehemu ambazo hazijumlishi kurudi kwenye jumla ya awali. Ugawaji wa senti kamili ndiyo suluhisho: mbinu ya namba kamili/desimali, inayofanya kazi katika vitengo vidogo vya sarafu (senti), inayohakikisha sehemu zinajumlishwa *hasa* kuwa nzima, bila kujali jinsi inavyogawanyika kwa kutokuwa sawa. Mhandisi yeyote wa programu anayepaswa kupatanisha jumla iliyogawanywa hadi senti — mishahara, utoaji wa ruzuku, kutoza upya huduma ya pamoja — anahitaji muundo huu, si asilimia za nukta zinazoelea.

## Kwa nini ni muhimu

Huu ni muundo wenye jina, wa msingi katika uhandisi wa programu za biashara: *Patterns of Enterprise Application Architecture* (2002) ya Martin Fowler inaandika `Money` na `Allocate` hasa kwa sababu "gawanya $100 kwa watatu" ni tatizo ambalo msimbo wa kijinga hukosea mara kwa mara, na kimya kimya — kosa linajitokeza tu mtu anapopatanisha vitabu na kukuta sehemu ni senti moja pungufu (au zaidi) ya jumla. Katika kazi ya uchumi wa afya na fedha za NHS hili si la kitaaluma: jumla za athari za bajeti hugawanywa kati ya tovuti, miaka, au wakurugenzi; gharama za pamoja za miundombinu na leseni hugawiwa kati ya idara kwa idadi ya wafanyakazi au sehemu ya shughuli. Kila moja ya migawanyo hiyo lazima ipatane kikamilifu, kwa sababu mkurugenzi wa fedha anayekabidhiwa sehemu zisizojumlisha kuwa jumla huacha kuiamini modeli nzima.

## Hisabati

```
Mbinu ya kijinga (iliyovunjika):
  sehemu_i = round(jumla × sehemu_i / Σ sehemu)     — hukaribia kila sehemu kivyake

Mbinu kamili (salio kubwa zaidi / "largest remainder allocation"):
  1. msingi_i = floor(jumla_katika_vitengo_vidogo × sehemu_i / Σ sehemu)   — vitengo vidogo kamili tu (senti)
  2. salio = jumla_katika_vitengo_vidogo − Σ msingi_i                       — senti zilizobaki, daima < idadi ya wapokeaji
  3. gawa kitengo kidogo 1 cha ziada kwa kila mmoja wa wapokeaji `salio` wenye
     salio kubwa zaidi la sehemu kutoka hatua ya 1, hadi salio liishe

Matokeo: Σ sehemu_i == jumla, daima, kwa ujenzi.
```

Mbinu kamili haikaribii sehemu moja kivyake kamwe — hukaribia *ugawaji mzima* kama shughuli moja, ndiyo inayofanya kigeu cha jumla kishikilie.

## Mfano uliokokotolewa

Gawanya $100.00 kwa njia tatu sawa (`sehemu = [1, 1, 1]`).

Mbinu ya kijinga: $100.00 ÷ 3 = $33.333…, ikikaribiwa kivyake hadi senti iliyo karibu inatoa $33.33 kwa kila mpokeaji. Jumla: $33.33 × 3 = $99.99 — senti moja imetoweka, na hakuna mstari mmoja "usiofaa" vya kutosha kugunduliwa kwa ukaguzi.

Mbinu kamili: `msingi` = $33.33 kwa wote watatu (vitengo vidogo 9,999 kwa jumla kutoka `floor(10,000 / 3) = 3,333` senti kila mmoja), likiacha salio la senti 1 (10,000 − 9,999). Senti hiyo moja iliyobaki huenda kwa mpokeaji yeyote mwenye salio kubwa zaidi la sehemu katika mgawanyo — mpokeaji mahususi ni undani wa ndani wa kuvunja sare, si kitu ambacho mwitaji anapaswa kukitegemea. Wapokeaji wawili huishia na $33.33 na mmoja na $33.34, na sehemu tatu zinajumlishwa hasa kuwa $100.00.

Hii ndiyo hasa hesabu ambayo [uchambuzi wa athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) unahitaji wakati wowote jumla ya athari za bajeti inapolazimika kugawanywa kati ya tovuti, makundi, au miaka ya fedha na kupatanishwa tena na jumla iliyochapishwa — tazama [ujumlishaji wa gharama salama kwa sarafu](../ujumlishaji-wa-gharama-salama-kwa-sarafu/) kwa tatizo la pamoja la kujumlisha mistari mingi kama hiyo bila kuteleza.

## Uhusiano na uhandisi wa programu

Hii ni kihalisi "muundo wa Money" kutoka usanifu wa programu za biashara — muundo wa msingi, wenye jina kwa aina hasa hii ya hitilafu, si hila ya mara moja. Kushindwa halisi kwa upatanisho wa kifedha kumetumwa kutoka aina hii hasa ya hitilafu: migawanyo ya asilimia iliyokokotolewa kwa `f64`, ikikaribiwa kwa kila mpokeaji, na isiyokaguliwa kamwe dhidi ya jumla ya awali. Inaunganishwa moja kwa moja na moduli ya [jumla ya gharama ya umiliki](../gharama-jumla-ya-umiliki/) ya hazina hii, ambayo kwa sasa hujumlisha gharama za kawaida za nukta zinazoelea katika miaka na machaguo — nidhamu ileile ya usahihi inatumika wakati wowote jumla ya TCO au athari za bajeti inapolazimika kugawiwa badala ya kujumlishwa tu.

## Mitego

- **Asilimia-kisha-kukaribia badala ya salio kubwa zaidi**: kugawa kwa asilimia za nukta zinazoelea na kukaribia kila mpokeaji kivyake, jambo linalozidisha kosa la kukaribia na mara chache hurudi kwenye jumla, hasa kwa wapokeaji wengi.
- **Kupuuza vielelezo vya kitengo kidogo cha sarafu**: kudhani kila sarafu ina nafasi 2 za desimali — Yen ya Japani ina 0, sarafu nyingine zina 3 — mgawanyo wa asilimia ulioandikwa kwa mkono kwa kawaida huweka 2 moja kwa moja na huvunjika kimya kimya kwa sarafu nyingine; mfumo kamili wa ugawaji husoma kielelezo kutoka sarafu yenyewe (ISO 4217).
- **Kugawa upya salio lililogawiwa tayari**: kuendesha mfumo wa ugawaji tena kwenye kilichobaki kutoka ugawaji wa awali, bila ukaguzi wa idempotency, jambo linaloweza kuingiza senti ileile mara mbili kwa mpokeaji yuleyule.

## Vyanzo

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
