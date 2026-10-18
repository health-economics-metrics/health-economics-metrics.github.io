# Ufikiaji na Usawa

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (ufikiaji, ufanisi, upokeaji, utekelezaji, udumishaji) — ni mfumo wa kawaida wa kuhukumu athari za *idadi ya watu* ya uingiliaji. Hisabati yake kuu: **athari ya afya ya umma ≈ ufikiaji × ufanisi**. Zana za kidijitali huongeza kipimo cha usawa: pengo la kidijitali linamaanisha ufikiaji kwa utaratibu si sawa, na utoaji wa kidijitali-kwanza unaweza kupanua mapengo ya afya unaokusudia kuyafunga.

## Kwa nini ni muhimu

Mapitio ya kimfumo yanayotumia RE-AIM kwa mHealth hupata saini thabiti: Ufikiaji na Upokeaji imara, **Ufanisi na Udumishaji dhaifu** — programu husambaa kwa urahisi na kufifia haraka. Kwa huduma ya afya ya taifa, hii inamaanisha bidhaa ya kuvutia kwa kila mtumiaji inaweza kuwa uwekezaji mbaya wa idadi ya watu, na kinyume chake: zana yenye ufanisi wa wastani inayofikia mamilioni inaweza kuzalisha zaidi ya ile bora inayofikia maelfu (tazama hesabu ya [HALE](../matarajio-ya-maisha-yaliyorekebishwa-kwa-afya/)). Usawa si kikwazo cha pembeni bali kichocheo cha thamani: kutengwa kidijitali hufuata umri, uhaba, ulemavu, na lugha — hasa makundi yanayobeba mzigo unaotibika zaidi — kwa hivyo mtumiaji wa pembeni aliyetengwa mara nyingi ana manufaa yanayowezekana *juu ya wastani*. Kwa kipimo rasmi cha kitakwimu cha ukosefu wa usawa wa afya unaohusiana na hali ya kijamii na kiuchumi, tazama [Kielezo cha Mkusanyiko](../kielezo-cha-mkusanyiko/).

## Hisabati

```
Athari ya idadi ya watu ≈ ufikiaji × ufanisi
  ufikiaji  = washiriki / idadi ya watu wanaostahili (tazama activation-and-uptake.md)
  ufanisi   = athari ya ulimwengu halisi miongoni mwa washiriki (iliyopimwa kwa kubaki —
              tazama retention-and-churn.md)

Toleo lililogawanywa kwa usawa:
  athari_kundi_g = ufikiaji_g × ufanisi_g, inaripotiwa kwa kila robo tano ya uhaba /
  bendi ya umri / kundi la lugha
  pengo la usawa = athari_robo_tano_ya_juu − athari_robo_tano_ya_chini

Ufanisi wa gharama wa ugawaji: tumia uzani wa usawa kwa QALY kulingana na
kundi la mpokeaji — QALY kwa aliye katika hali mbaya zaidi huhesabiwa zaidi
(upanuzi wa HTA unaozidi kuwa wa kawaida).
```

## Mfano uliokokotolewa

Programu ya kidijitali ya kuzuia kisukari, ikiripotiwa kwa njia mbili:

```
Jumla: ufikiaji 12%, athari QALY 0.02/mshiriki → QALY 0.0024/mtu anayestahili

Iliyogawanywa (robo tano za uhaba):
  Q1 (wenye uhaba mdogo zaidi): ufikiaji 22%, athari 0.02  → 0.0044
  Q5 (wenye uhaba mkubwa zaidi): ufikiaji 4%, athari 0.025 → 0.0010

Programu inatoa afya mara 4.4 zaidi kwa wenye uhaba mdogo zaidi —
ingawa athari ya Q5 kwa kila mshiriki ni YA JUU ZAIDI (nafasi zaidi).
Mkono wa kidijitali unaosaidiwa (ukocha kwa simu + upatikanaji wa jamii) unaogharimu
20% zaidi kwa kila mshiriki wa Q5 unaoinua ufikiaji wa Q5 hadi 12% huongeza athari ya
Q5 mara tatu na kuboresha jumla — uwekezaji wa usawa NDIO uwekezaji wa
ufanisi hapa.
```

## Uhusiano na uhandisi wa programu

Ufikiaji kwa kiasi kikubwa ni kazi ya uhandisi: mahitaji ya kiwango cha chini cha kifaa na OS, dhana za kipimo data, usaidizi wa lugha, ufuasi wa ufikivu (WCAG), vikwazo vya uthibitishaji wa utambulisho, na usambazaji wa duka la programu pekee kila kimoja huondoa makundi kwenye kigawanyo — kwa kawaida bila kuonekana, kwa sababu watumiaji waliotengwa hawaonekani kamwe kwenye uchanganuzi. Mazoea ya uhandisi yanayosogeza usawa: pima *kigawanyo* (weka vifaa vya kupimia kwa idadi ya watu wanaostahili, si watumiaji tu); panga bajeti ya utendaji kwa vifaa vya zamani na muunganisho duni; tuma njia za kidijitali zinazosaidiwa (simu, SMS, kioski) kama mtiririko wa daraja la kwanza badala ya njia za aibu; na gawanya kila kipimo cha dashibodi kwa vipimo vya usawa — wastani usiogawanywa ndipo ukosefu wa usawa hujificha ([upokeaji wa GDS](../vipimo-vya-huduma-vya-gds/) hubeba onyo lilelile).

## Mitego

- **Ufanisi ukiripotiwa kwa wanaokamilisha, athari ikidaiwa kwa idadi ya watu** — maneno ya ufikiaji yakiachwa kimya kimya.
- **Usawa kama ukaguzi wa baadaye** badala ya pembejeo ya usanifu; kuongeza ufikiaji baadaye ni ghali zaidi kuliko kusanifu kwa ajili yake.
- **Kusahau udumishaji**: kipimo dhaifu zaidi cha RE-AIM katika mHealth — madai ya athari zaidi ya upeo wa muda wa ushahidi.
- **Akiba za njia za kidijitali pekee** zinazohamisha gharama kwa watumiaji waliotengwa na wafanyakazi wa mstari wa mbele (tazama [vipimo vya huduma vya GDS](../vipimo-vya-huduma-vya-gds/)).

## Vyanzo

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
