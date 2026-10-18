# Kuharibika kwa Tija ya Kazi na Shughuli (WPAI)

WPAI ni dodoso lililothibitishwa la ripoti binafsi (Reilly, Zbrozek, Dasbach, 1993) linalopima jinsi tatizo la afya linavyoathiri kazi ya kulipwa na shughuli za kila siku, kwa kawaida katika siku 7 zilizopita. Hugawanya hasara katika *kutohudhuria* — muda wa kazi uliokosekana kihalisi — na *kuwepo kazini kwa tija iliyopungua* (presenteeism) — tija iliyopungua huku mtu yupo kazini kimwili, na ya pili kwa kawaida ni kipengele kikubwa zaidi na kilichofichika zaidi cha gharama.

## Kwa nini ni muhimu

Hesabu rahisi za siku za ugonjwa huona kutohudhuria tu. Mtaalamu wa kliniki au mfanyakazi wa maarifa asiyechukua siku ya mapumziko lakini anayefanya kazi kwa uwezo wa 60% kutokana na hali sugu huchangia sifuri kwenye rejista ya kutohudhuria huku bado akizalisha hasara kubwa, halisi ya tija — WPAI imeundwa mahususi kuibua gharama hiyo isiyoonekana. Kwa kuwa ni chombo kilichothibitishwa badala ya utafiti uliobuniwa maalum, alama zake zinaweza kutumika katika vifurushi vya ushahidi wa [matokeo yanayoripotiwa na mgonjwa](../matokeo-yanayoripotiwa-na-mgonjwa/) na tafiti za gharama ya ugonjwa bila mhakiki kuhitaji kuthibitisha kipimo upya. Kama chombo cha ripoti binafsi, chenyewe ni aina ya PROM, kinachotofautishwa hasa kwa kulenga kazi na shughuli badala ya dalili au ubora wa maisha.

## Hisabati

```
Kutohudhuria % = saa_zilizokosekana_kwa_afya / (saa_zilizokosekana_kwa_afya + saa_zilizofanyiwa_kazi) × 100

Kuwepo kazini kwa tija iliyopungua % = kuharibika kwa 0–10 kwa kujikadiria wakati wa kazi, × 10
                  (kunapatikana moja kwa moja kupitia dodoso, hakutokani hapa)

Kuharibika kwa Jumla kwa Kazi % =
    Kutohudhuria% + (1 − Kutohudhuria%/100) × Presenteeism%
    (huchanganya viwili ili jumla isizidi 100% kamwe)

Gharama ya tija = Kuharibika kwa Jumla kwa Kazi% / 100 × mapato_ya_kipindi
```

Fomula ya kuharibika kwa jumla kwa makusudi si jumla rahisi: kuongeza asilimia mbili moja kwa moja kunaweza kuzidi 100%, kwa hivyo presenteeism hutumika tu kwa sehemu *iliyosalia* (isiyokosekana) ya muda wa kazi.

## Mfano uliokokotolewa

Mfanyakazi mwenye kipandauso anaripoti kupangiwa wiki ya saa 40 lakini anakosa saa 4 kati yake:

```
saa_zilizokosekana = 4, saa_zilizofanyiwa_kazi = 36
Kutohudhuria% = 4 / (4 + 36) × 100 = 10%
```

Kando, anajikadiria athari kwa tija yake wakati wa kazi kama 3 kati ya 10 kwenye dodoso la WPAI, yaani `Presenteeism% = 30%` (hatua hii ni jibu ghafi la dodoso, si kitu kilichotokana na namba nyingine):

```
Kuharibika kwa Jumla kwa Kazi% = 10 + (1 − 10/100) × 30
                                = 10 + 0.9 × 30
                                = 10 + 27
                                = 37%
```

Kwa wiki ya siku 5 yenye mapato ya £800 (£160/siku):

```
Gharama ya tija = 37/100 × 800 = £296
```

Zingatia kwamba hesabu rahisi ya siku za ugonjwa ingerekodi saa 4 tu (10%) zilizokosekana — kipengele cha presenteeism karibu kinaongeza mara tatu kuharibika halisi kinapohesabiwa.

## Uhusiano na uhandisi wa programu

Hii inalingana moja kwa moja na vipimo vya afya ya timu ya uhandisi:

- **Kutohudhuria** ni likizo ya ugonjwa na PTO — kinachoonekana, tayari kinafuatiliwa, na sehemu rahisi.
- **Presenteeism** ni mhandisi aliyechoka au aliyelemewa na kubadilisha muktadha ambaye yupo kwenye kila stand-up huku akifanya kazi kwa uwezo uliopungua — kwa kawaida gharama kubwa na iliyofichika zaidi, isiyoonekana katika data ya idadi ya wafanyakazi au mahudhurio. Badala yake huonekana kama upitishaji uliopungua katika [DORA](../vipimo-vya-dora/) na [vipimo vya mtiririko](../vipimo-vya-mtiririko/), au kama utatuzi wa polepole wa [deni la kiufundi](../deni-ya-kiufundi/) lilelile ambalo "riba" yake huongeza kuharibika zaidi.
- Somo la uhandisi ni lilelile na la kikliniki: kupima kutokuwepo tu na kukiita "hasara ya tija" hupunguza kimfumo gharama halisi, kwa sababu hukosa kila mtu aliyepo lakini aliyeharibika.

## Mitego

- **Upendeleo wa kukumbuka katika ripoti binafsi.** Dirisha la kukumbuka la siku 7 liko chini ya upotoshaji wa kuripoti uleule kama ripoti yoyote ya kurejea nyuma ya kibinafsi.
- **Kuchukulia kipimo cha presenteeism cha 0–10 kama kipimo halisi cha kimwili.** Ni cha kupanga daraja, kinapatikana kwa kujikadiria, si kiasi cha kimwili kilichothibitishwa — kuchukulia tofauti juu yake kama za mstari au za muda kikamilifu ni urahisi wa uigaji, si ukweli wa kimwili uliothibitishwa.
- **Kuunganisha alama kati ya matoleo ya WPAI.** WPAI ina matoleo kadhaa mahususi kwa hali — WPAI:GH (afya ya jumla), WPAI:SHP (tatizo mahususi la afya), na matoleo mahususi kwa ugonjwa — na alama kutoka matoleo tofauti hazipaswi kuunganishwa au kulinganishwa bila kukagua kwanza kwamba ni toleo lilelile la chombo.

## Vyanzo

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
