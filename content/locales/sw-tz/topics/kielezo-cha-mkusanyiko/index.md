# Kielezo cha Mkusanyiko (Concentration Index)

Kielezo cha Mkusanyiko (Wagstaff, Paci, van Doorslaer, 1991) ni kipimo cha kawaida cha kitakwimu cha ukosefu wa usawa unaohusiana na hali ya kijamii na kiuchumi katika kigeu cha afya, kuanzia -1 hadi 1. Hasi inamaanisha kigeu cha afya kimejikita miongoni mwa wasiojiweza kijamii na kiuchumi, chanya inamaanisha kimejikita miongoni mwa walio na hali nzuri zaidi, na sifuri inamaanisha hakuna mteremko thabiti wa kijamii na kiuchumi — hubadilisha shaka kuhusu mgawanyo usio sawa kuwa namba moja inayolinganishika.

## Kwa nini ni muhimu

Programu inaweza kuonekana yenye ufanisi kwa jumla na bado ikatoa manufaa yake karibu kabisa kwa watu waliokuwa na hali nzuri tayari. Wasiwasi wa ugawaji kama huu ndio hasa [ufikiaji na usawa](../ufikiaji-na-usawa/) hufuatilia kwa maelezo — ufikiaji uliogawanywa kwa robo tano za uhaba, pengo la usawa kati ya makundi ya juu na ya chini — lakini jedwali lililogawanywa kwa tabaka haliwezi kubanwa hadi mstari mmoja wa mwelekeo, na haliwezi kulinganishwa kwa urahisi kati ya uingiliaji mbili tofauti kabisa zilizopimwa kwa vipimo tofauti. Kielezo cha Mkusanyiko kinatatua yote mawili: kinakokotolewa vilevile kwa kigeu chochote cha afya dhidi ya mpangilio wowote wa kijamii na kiuchumi, kwa hivyo huduma ya afya ya taifa inaweza kufuatilia kama ukosefu wa usawa wa huduma mahususi ya kidijitali unapanuka au unapungua toleo baada ya toleo, na inaweza kulinganisha haki ya ugawaji wa usambazaji wa programu dhidi ya, kwa mfano, programu ya uchunguzi, kwa kipimo kilekile kilichosawazishwa.

## Hisabati

```
CI = (2 / wastani(thamani_za_afya)) × Kov(thamani_za_afya, nafasi_za_kijamii_kiuchumi)

Kov(X, Y) = wastani(X × Y) − wastani(X) × wastani(Y)   (kovariansi ya idadi ya watu)

nafasi_za_kijamii_kiuchumi: nafasi ya sehemu ya kila mtu katika mgawanyo wa kijamii
na kiuchumi, katika [0, 1] (0 = asiyejiweza zaidi, 1 = mwenye hali nzuri zaidi;
kwa data iliyopangwa katika makundi/bendi, kwa kawaida nafasi ya katikati ya kila kundi)
```

Hii ni "fomula rahisi ya kovariansi" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — njia ya mkato ya kawaida ya watendaji ya kukokotoa Kielezo cha Mkusanyiko moja kwa moja kutoka uchunguzi uliooanishwa, bila kwanza kuchora na kuunganisha chini ya mkunjo wa mkusanyiko.

## Mfano uliokokotolewa

Alama ya afya njema inayoripotiwa na wenyewe (1 = mbaya zaidi, 4 = bora zaidi) iliyoonekana katika robo nne za kijamii na kiuchumi zenye ukubwa sawa, kila moja ikiwakilishwa na nafasi ya katikati ya robo:

```
thamani_za_afya                = [1.0, 2.0, 3.0, 4.0]
nafasi_za_kijamii_kiuchumi     = [0.125, 0.375, 0.625, 0.875]

wastani(thamani_za_afya)        = 2.5
wastani(afya × nafasi)          = wastani([0.125, 0.75, 1.875, 3.5]) = 1.5625
wastani(nafasi_za_kijamii_kiuchumi) = 0.5

Kov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` chanya inamaanisha alama hii ya afya imejikita miongoni mwa kundi lenye hali nzuri kijamii na kiuchumi — waliojibu wenye alama za juu wanaegemea upande wa walio na hali nzuri zaidi wa mpangilio.

## Uhusiano na uhandisi wa programu

Hii ni kipimo kilekile cha ukosefu wa usawa kinachotegemea kovariansi kinachotumika katika uchumi kwa ujumla (binamu wa mgawo wa Gini), na kinahusiana na kupima kama manufaa ya bidhaa ya programu yamejikita miongoni mwa makundi ya watumiaji walio na hali nzuri tayari badala ya kusambazwa kwa usawa — upanuzi wa moja kwa moja wa [ufikiaji na usawa](../ufikiaji-na-usawa/) (kipimo cha "reach" cha RE-AIM) hadi kipimo rasmi cha kitakwimu badala ya pengo linaloelezwa. Pale ufikiaji-na-usawa unaporipoti athari kwa kila tabaka, Kielezo cha Mkusanyiko hubana mgawanyo mzima kuwa namba moja yenye ishara, inayofaa kama KPI moja inayofuatiliwa kupitia matoleo — vitendo kwa dashibodi, ambapo mgawanyo kamili wa matabaka haufai.

## Mitego

- **Kuteleza kwa kanuni ya ishara**: ishara inategemea jinsi kigeu cha afya na nafasi vinavyofafanuliwa — kugeuza chochote kati ya hivyo hugeuza ishara, kwa hivyo kanuni inayotumika lazima itajwe waziwazi kando ya kila thamani inayoripotiwa.
- **Nafasi za mpakani badala ya za katikati**: data ya kijamii na kiuchumi iliyopangwa katika makundi au bendi (mf. robo tano) inahitaji kutumia nafasi ya sehemu ya kila kundi *katikati* yake, si mpakani, la sivyo kielezo kina upendeleo.
- **Kusoma "karibu sifuri" kama "hakuna ukosefu wa usawa"**: Kielezo cha Mkusanyiko karibu na sifuri kinamaanisha "hakuna mteremko thabiti wa kijamii na kiuchumi", si "hakuna ukosefu wa usawa" kwa maana kamili — ukosefu wa usawa unaosawazishana katika mielekeo tofauti unaweza kufutana.

## Vyanzo

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
