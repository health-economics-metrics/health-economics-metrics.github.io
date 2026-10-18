# Uchambuzi wa Athari za Bajeti (BIA)

BIA hukadiria kile ambacho kupitisha uingiliaji hufanya kwa **bajeti** ya mlipaji mahususi katika miaka 1–5 ijayo. Hujibu *uwezo wa kumudu*; ufanisi wa gharama hujibu *thamani*. Teknolojia inaweza kuwa thamani bora kabisa na bado isimudu — au inayomudu lakini thamani duni. Tathmini makini zinahitaji yote mawili.

## Kwa nini ni muhimu

Swali la mkurugenzi wa fedha si kamwe "ICER ni nini?" — ni "hii inafanya nini kwa bajeti ya mwaka ujao?" Mwongozo wa mazoea mazuri wa ISPOR (kiwango cha taaluma) unabainisha: mtazamo wa mlipaji mwenyewe, upeo wa miaka 1–5, mtiririko wa fedha wa kila mwaka *usiopunguzwa thamani*, mikondo halisi ya upokeaji, na kutokuwa na uhakika wa hali (si ya uwezekano). NICE inahitaji taarifa za athari za bajeti pamoja na ufanisi wa gharama; bidhaa yenye athari ya bajeti ya kitaifa juu ya ~£milioni 20/mwaka nchini Uingereza huchochea mazungumzo ya kibiashara bila kujali ICER yake.

## Hisabati

```
BI_mwaka_t = Gharama_hali_na_mpya(t) − Gharama_hali_ya_sasa(t)

Gharama_hali(t) = Σ juu ya makundi ya wagonjwa:
   idadi ya watu wanaostahili(t) × upokeaji(t) × gharama halisi kwa mgonjwa(t)

gharama halisi kwa mgonjwa = gharama ya uingiliaji − gharama ya huduma iliyohamishwa + gharama ya huduma iliyochochewa
```

Chaguzi muhimu za uundaji modeli: ukuaji wa idadi ya watu wanaostahili, mkondo wa upokeaji (upokeaji kamwe si wa papo hapo), kile chaguo jipya linachohamisha, na mahitaji yoyote linayo*yachochea* (ufikiaji rahisi → watumiaji zaidi).

## Mfano uliokokotolewa

Mlipaji anayehudumia watu milioni 2 anazingatia tiba ya kidijitali kwa £300/mgonjwa/mwaka; 1.5% ya wanachama wanastahili (30,000); upokeaji 20% → 40% → 60% katika miaka 3; kila mtumiaji huhamisha £120/mwaka za huduma nyingine.

```
Gharama halisi kwa mtumiaji = 300 − 120 = £180

Mwaka 1: 30,000 × 0.20 × 180 = £1.08M
Mwaka 2: 30,000 × 0.40 × 180 = £2.16M
Mwaka 3: 30,000 × 0.60 × 180 = £3.24M
```

Hata ICER ya bidhaa ikiwa bora kabisa £8,000/QALY, mlipaji lazima apate £3.24M za *fedha mpya* kufikia mwaka wa 3 — £120 zilizohamishwa zimetandazwa nyembamba katika mistari mingine ya bajeti na hazitaachiliwa kama fedha taslimu (tazama [zinazotoa fedha taslimu dhidi ya zisizotoa](../akiba-zinazotoa-fedha-taslimu-dhidi-ya-zisizotoa/)). Ndiyo maana thamani kwa kitengo na uwezo wa kumudu ni vikwazo viwili tofauti.

## Uhusiano na uhandisi wa programu

BIA ni kikamilisho hasa kinachomkabili CFO cha dai la ROI kwa kila kiti: "ni ya gharama nafuu kwa kila msanidi, lakini je, tunaweza kumudu usambazaji wa shirika zima mwaka huu wa fedha?" Igiza ngazi za leseni, mkunjo wa S wa upokeaji, matumizi ya zana yaliyohamishwa ambayo hutoa fedha taslimu tu mikataba ya zamani inapokoma kweli, na matumizi yaliyochochewa (CI nafuu → CI zaidi). Kuwasilisha jedwali la athari za bajeti la miaka 3 pamoja na ROI ndiko kunakofanya pendekezo la zana za biashara kuaminika kifedha. Kugawanya jumla ya athari za bajeti iliyochapishwa kwa tovuti, makundi, au miaka ya fedha — na kuhakikisha sehemu zinapatana kikamilifu na namba iliyochapishwa — ni hasa [ugawaji wa gharama hadi senti kamili](../ugawaji-wa-gharama-hadi-senti-kamili/); kujumlisha mistari mingi inayolisha jumla hiyo mwanzoni ni [ujumlishaji wa gharama salama kwa sarafu](../ujumlishaji-wa-gharama-salama-kwa-sarafu/).

## Mitego

- **Ndoto ya upokeaji wa papo hapo**: athari ya mwaka wa 1 ikikokotolewa kwa upokeaji wa hali tulivu.
- **Kuhesabu gharama iliyohamishwa kama fedha taslimu** wakati ni uwezo uliotawanyika.
- **Kupuuza mahitaji yaliyochochewa** — maboresho ya ufikiaji hukuza matumizi ya idadi ya watu wanaostahili.
- **Kuchanganya upeo/upunguzaji thamani wa BIA na CEA**: BIA ni ya upeo mfupi, haipunguzi thamani, mahususi kwa mlipaji kwa usanifu.

## Vyanzo

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
