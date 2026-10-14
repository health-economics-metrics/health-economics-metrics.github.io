# Hagfræði fjarvöktunar sjúklinga

Endurgreiðslu- og kostnaðarjöfnunarhagfræði vöktunar sjúklinga heima: í Bandaríkjunum skilgreind tekjustafla CPT-kóða; í landsbundinni heilbrigðisþjónustu hagfræði forðunar innlagna og sýndardeilda allt að fullri **sjúkrahúsvist heima** í staðinn.

## Hvers vegna það skiptir máli

Fjarvöktun er þar sem tækjagögn verða reikningsfæranleg heilbrigðisþjónusta. Uppbygging bandarísku Medicare (landsmeðaltöl 2025) er óvenju skýr:

```
99453  uppsetning og fræðsla sjúklings  ~19,73 $  einu sinni (eftir 16 daga gagna)
99454  tækjaframboð + sending            ~43,03 $  á 30 daga — KREFST ≥16 daga
                                                    af mælingum innan þeirra 30
99457  fyrstu 20 mín/mán. stjórnun       ~47,87 $  krefst ≥20 skráðra mínútna
99458  hvert viðbótar 20 mín             ~38,49 $
```

Samræmdur sjúklingamánuður staflast í u.þ.b. **90–130 $ PMPM**. Á kostnaðarjöfnunarhliðinni sýna sjúkrahúsvistaráætlanir heima (CMS Acute Hospital Care at Home undanþága: 300+ sjúkrahús) ~1.800–3.000 $ sparnað á hvert tilvik miðað við legudeildaþjónustu með færri endurinnlögnum og sýkingum — skýrasta sönnun þess að vöktun auk sýndarþjónustu geti komið í stað dýrustu auðlindar kerfisins, mannaðs rúms.

## Stærðfræðin

```
Tekjur af fjarvöktun (BNA) = skráðir × hlutfall sem uppfyllir reikningsskilyrði × kóðastafla PMPM
  — 16 daga reglan gerir samræmi í notkunartíma (wearable-validation.md)
    að tekjubreytu, og 20 mínútna reglan gerir skráningu klínísks
    tíma að verkfræðikröfu

Verðmæti í anda NHS = innlagnir sem komist er hjá × jaðarkostnaður innlagnar
                    + rúmdagar í staðinn × (legudeild − kostnaður sýndardeildardags)
                    − kostnaður þjónustu (tæki, vettvangur, vöktunarstarfsfólk)
  (sjá emergency-attendance-avoidance.md og bed-days-saved.md fyrir
   eignunar- og jaðarkostnaðarreglur)
```

## Dæmi útreiknað

Bandarísk stofa skráir 400 háþrýstingssjúklinga; 70% uppfylla 16 daga þröskuldinn í dæmigerðum mánuði; stjórnunarmínútur skráðar hjá 60%:

```
Mánaðartekjur ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23.500 $
Árlega ≈ 282.000 $; þjónustukostnaður (tæki 12 $/mán., starfsfólk 0,8 stöðugildi) ≈ 180.000 $
Framlegð ≈ 100 þús. $/ár — og athugaðu að vogarstangirnar eru verkfræðivogarstangir:
að hækka 16 daga samræmið úr 70% → 85% bætir við ~31 þús. $/ár
(þægindi tækis, áreiðanleiki samstillingar, hönnun áminninga).
```

NHS-spegill: 50 rúma sýndardeild með 80% nýtingu sem kemur í stað legudaga með 150 £ nettósparnaði/dag ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 m£/ár** brúttó — gegn vettvangi, tækjum og samfélagshjúkrunarteyminu sem mannar hana.

## Tengsl við hugbúnaðarverkfræði

Fjarvöktunarvettvangar eru sjaldgæfa varan þar sem **uppitími og áreiðanleiki samstillingar umbreytast beint í tekjur** (vika af misheppnuðum samstillingum brýtur 16 daga hliðið fyrir hóp) og þar sem tímarakning á endurskoðunarstigi (20 mínútna reglan) er fyrsta flokks eiginleiki, ekki eftirhugsun. Smíðaðu fyrir: samræmismælaborð á hvern sjúkling sem sýna reikningsmánuði í hættu meðan þeir eru enn endurheimtanlegir; tímastimpluð, innsiglisvarin gagnaslóðir (úttektir greiðenda eru venjulegar); og stillingu viðvörunarhagfræði — hver viðvörun nýtir mínútur vöktunarteymisins, sem eru bæði reikningseiningin og af skornum skammti ([skimunarhagfræði](../skimunarhagfræði/) stýrir vali á þröskuldi).

## Gildrur

- **Skráning ≠ tekjur**: hlutfallið sem uppfyllir skilyrði er talan; líkanaðu hana, gerðu ekki ráð fyrir henni.
- **Bandarískir kóðar fluttir í NHS-rök** — landsbundin heilbrigðisþjónusta kaupir forðun innlagna, ekki CPT-staflar; keyrðu seinna líkanið.
- **Jöfnunarfullyrðingar á meðalkostnaði** fyrir innlagnir þar sem fastur kostnaður helst (sjá [jaðarkostnaður á móti meðalkostnaði](../jaðarkostnaður-á-móti-meðalkostnaði/)).
- **Mettun vöktunarteymis**: viðvörunarmagn skalast með skráningu; mönnunarlínan er bindandi takmörkunin sem flest líkön sleppa.

## Heimildir

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
