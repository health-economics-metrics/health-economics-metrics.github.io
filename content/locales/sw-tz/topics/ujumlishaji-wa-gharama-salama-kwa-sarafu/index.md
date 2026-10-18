# Ujumlishaji wa Gharama Salama kwa Sarafu

Kujumlisha mistari mingi ya fedha — ankara za kila mwezi, gharama za kila tovuti, namba za athari za bajeti za miaka mingi — kwa kutumia namba za kawaida za nukta zinazoelea za mfumo wa pili (`f64`) hukusanya makosa madogo ya uwakilishi, kwa sababu sehemu nyingi za desimali ($1,234.56, kwa mfano) haziwezi kuwakilishwa kikamilifu katika nukta zinazoelea za mfumo wa pili. Kila kosa moja ni dogo, lakini modeli kubwa inayojumlisha mamia au maelfu ya mistari kwa miaka kadhaa inaweza kuteleza kwa sehemu za senti — na kuteleza kunategemea *mpangilio* wa kujumlisha, jambo linaloifanya isiweze kurudiwa. Ujumlishaji wa sarafu uliofanywa kwa hesabu kamili ya desimali (au kitengo kidogo cha sarafu kama namba kamili) hujumlisha kikamilifu, ukilingana na jinsi mifumo ya uhasibu na vitabu vya maingizo mawili lazima vipatane hadi senti.

## Kwa nini ni muhimu

Hii ni aina ya hitilafu ya msingi iliyoandikwa vizuri: karatasi ya Goldberg ya 1991 ya ACM Computing Surveys "What Every Computer Scientist Should Know About Floating-Point Arithmetic" ndiyo rejea ya kawaida ya kwa nini hasa nukta zinazoelea za mfumo wa pili haziwezi kuwakilisha thamani nyingi za fedha za desimali kikamilifu, na kwa nini kujumlisha nyingi kati yake huzidisha kosa. Modeli za uchumi wa afya na fedha za NHS hujumlisha mara kwa mara miaka mingi na kategoria nyingi za gharama — [jumla ya gharama ya umiliki](../gharama-jumla-ya-umiliki/) na [uchambuzi wa athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) vyote hujumlisha idadi kubwa ya mistari ya gharama ya `f64` katika upeo wa miaka mingi. Modeli inapolazimika kupatana hadi senti — ukaguzi unaokokotoa jumla upya kwa mkono lazima upate namba *ileile* — hesabu yenyewe lazima iwe ya desimali kamili, si nukta zinazoelea.

## Hisabati

```
Ujumlishaji wa kijinga:        jumla = Σ f64(mstari_i)         — kuteleza kunakotegemea mpangilio
Ujumlishaji salama kwa sarafu: jumla = Σ Decimal(mstari_i)     — kamili, unaoweza kurudiwa

Kutumia marekebisho ya asilimia (mf. akiba ya dharura):
  iliyorekebishwa = jumla × kizidisho          — matokeo kamili ya Decimal, yanaweza
                                                  kubeba nafasi nyingi zaidi za desimali
                                                  kuliko kielelezo cha kitengo kidogo
                                                  cha sarafu
  iliyokaribiwa = round(iliyorekebishwa, kielelezo_cha_sarafu, kanuni_ya_kukaribia)  — kanuni ya
                                                  kukaribia (nusu-juu dhidi ya nusu-shufwa/
                                                  kukaribia kwa benki) lazima itajwe waziwazi
```

Zingatia nidhamu ya hatua mbili: kuzidisha kiasi kamili cha `Decimal` kwa kizidisho kunaweza kuzalisha nafasi nyingi za desimali kuliko sarafu inavyotumia kweli (nafasi tatu za desimali kutoka kiasi cha nafasi mbili mara kizidisho cha nafasi mbili, kwa mfano) — usahihi huo wa kati *haukaribiwi* kiotomatiki; hatua wazi ya kukaribia tu, yenye kanuni iliyotajwa, ndiyo huishusha hadi kielelezo halisi cha kitengo kidogo cha sarafu.

## Mfano uliokokotolewa

Ankara kumi na mbili zinazofanana za kila mwezi za $1,234.56 kila moja, zikijumlishwa kwa hesabu kamili ya desimali: $1,234.56 × 12 = **$14,814.72**, kikamilifu. Linganisha hili na kujumlisha neno halisi la `f64` `1234.56` mara kumi na mbili katika usahihi maradufu wa IEEE-754, ambayo inaweza kuteleza kwa sehemu za senti kulingana na mpangilio wa kujumlisha — aina halisi, iliyoandikwa ya hitilafu, si tatizo kwa modeli iliyojengwa juu ya hesabu kamili ya desimali ya `Money`.

Sasa tumia akiba ya kawaida ya dharura ya athari za bajeti ya 5% (kizidisho cha 1.05×) kwa jumla hiyo ya $14,814.72: $14,814.72 × 1.05 = $15,555.456 — nafasi tatu za desimali, kwa sababu kuzidisha ni kamili na hakukaribiwi kiotomatiki hadi nafasi mbili za desimali za sarafu. Kuikaribia waziwazi hadi nafasi 2 za desimali kwa kukaribia kwa benki (nusu-shufwa) kunatoa hasa **$15,555.46**.

## Uhusiano na uhandisi wa programu

Hili ndilo funzo la moja kwa moja, la msingi nyuma ya "programu za kifedha hutumia `Decimal`, si `float`" — linaunganishwa waziwazi na moduli za [jumla ya gharama ya umiliki](../gharama-jumla-ya-umiliki/) na [uchambuzi wa athari za bajeti](../uchambuzi-wa-athari-za-bajeti/) za hazina hii, ambazo zote kwa sasa hujumlisha gharama za kawaida za nukta zinazoelea; hoja ya usahihi hapa haidai kuhamisha modeli hizo mara moja, lakini inaeleza hasa *lini* mfumo lazima upatane hadi senti na kwa hivyo haupaswi kutumia nukta zinazoelea za mfumo wa pili kwa hesabu zake za fedha. Tazama pia [ugawaji wa gharama hadi senti kamili](../ugawaji-wa-gharama-hadi-senti-kamili/) kwa tatizo la pamoja la kugawanya (badala ya kujumlisha) jumla bila kupoteza senti.

## Mitego

- **Kubadilisha kuwa `float` katikati ya mnyororo**: kutoa thamani ya fedha kuwa namba ya nukta zinazoelea katikati ya hesabu (maktaba nyingine za `Money` hata huita mbinu hii ya ubadilishaji kitu kama "lossy" kama onyo wazi) hutupa kimya kimya dhamana ya usahihi kwa kila hesabu baada ya nukta hiyo.
- **"Decimal ni polepole mno kujisumbua"**: kuukataa hesabu kamili ya desimali kama mzigo usio wa lazima wakati usahihi na uwezo wa kukaguliwa — si kasi ghafi — ndivyo vinavyohusika kwa kuripoti kifedha.
- **Kutumia asilimia ya dharura bila kutaja kanuni ya kukaribia**: kukaribia nusu-juu dhidi ya nusu-shufwa (kukaribia kwa benki) kunaweza kubadilisha senti ya mwisho; mkataba wa kukaribia wenyewe lazima uwe chaguo lililotajwa, linaloweza kukaguliwa — tazama [uchambuzi wa gharama na manufaa](../uchambuzi-wa-gharama-na-manufaa/) kwa mwongozo wa Green Book wa HM Treasury kuhusu marekebisho ya dharura na ya upendeleo wa matumaini, ambayo ndiyo aina hasa ya namba ambayo hatua hii ya kukaribia inatumika kwayo.

## Vyanzo

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
