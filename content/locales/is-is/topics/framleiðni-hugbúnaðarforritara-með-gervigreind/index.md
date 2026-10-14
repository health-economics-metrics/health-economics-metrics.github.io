# Framleiðni hugbúnaðarforritara með gervigreind

Mælikvarðar á það sem gervigreindaraðstoð við kóðun gerir í raun fyrir afköst verkfræði: samþykktarhlutfall tillagna, hraðaaukning í stýrðum rannsóknum, afköst PR og varðveisla kóða. Sönnunargrunnurinn er í raun mótsagnakenndur — sem gerir hann að fullkominni dæmarannsókn á muninum á virkni við kjöraðstæður og árangri í raunheimi, sem heilsuhagfræði var byggð til að takast á við.

## Hvers vegna það skiptir máli

Tvær mest vitnuðu stýrðu rannsóknirnar benda í gagnstæðar áttir:

- **Peng o.fl. 2023 (GitHub Copilot RCT)**: forritarar luku verkefni sem fólst í að smíða HTTP-þjón frá grunni **55,8% hraðar** með Copilot (1 klst. 11 mín. á móti 2 klst. 41 mín., n=95).
- **METR 2025 RCT**: reyndir forritarar í opnum hugbúnaði sem unnu í *eigin þroskuðu hugbúnaðarsöfnum* voru **19% hægari** með gervigreindartólum snemma árs 2025 (16 forritarar, 246 verkefni) — á meðan þeir *töldu* sig vera 20% hraðari.

Báðar eru góðar rannsóknir. Mótsögnin er niðurstaðan: virkni í verkefnum frá grunni flyst ekki yfir á árangur í þroskuðum kóðagrunni, og *skynjaður* ávinningur kemur ekki í stað mælds ávinnings. Læknisfræðin á nöfn fyrir bæði fyrirbærin (útskýrandi á móti raunhæfum rannsóknum; lyfleysuvandinn) og tæki til að fást við þau.

## Stærðfræðin

```
Samþykktarhlutfall = samþykktar tillögur / sýndar tillögur
                     (mælingar GitHub ~30% að meðaltali; breytilegt: SQL 45%, Python 35%, JS 28%)
Varðveisluhlutfall = gervigreindarkóði sem lifir til sameiningar / samþykktur gervigreindarkóði (~88% tilkynnt)
Hraðaaukning       = (t_viðmið − t_gervigreind) / t_viðmið  (AÐEINS úr stýrðum samanburði)
Afkastabreyting    = Δ sameinuð PR/forritari/viku (vettvangsgögn GitHub/Accenture: +8,7%)

Verðmætislíkan     = forritarar × tími sparaður × fullhlaðið gjald × nýtingarstuðull
                     — hver liður krefst staðbundinnar mælingar; sjá hvirfilmyndina í
                     sensitivity-analysis.md, þar sem sparaður tími ræður meiru en
                     allar aðrar breytur samanlagt
```

## Dæmi útreiknað

Fyrirtæki með 500 forritara prófar aðstoðarmann með réttu viðmiðunarsamanburði (paraðir hópar, 3 mánuðir, fyrirfram skráðir mælikvarðar):

```
Niðurstaða tilraunar: hringrásartími PR −18%; sameinuð PR +6%; CFR óbreytt;
              sjálftilkynntur sparaður tími 45 mín/dag; mælt á verkefnastigi ≈ 15 mín/dag

Verðleggðu MÆLDU töluna: 500 × 0,25 klst. × 220 dagar × 60 £ × 0,6 nýting
                          ≈ 990.000 £/ár getu (ekki reiðufjárlosandi)
Kostnaður: 500 × 39 £/mán. × 12 ≈ 234.000 £/ár
Nettó getuhlutfall ≈ 4:1 — fjármögnunarhæft, á þriðjungi af sjálftilkynntri fullyrðingu.
```

Þreföld gjáin milli skynjaðs og mælds er METR-niðurstaðan í reynd; að fjárhagsáætla eftir sjálftilkynningu hefði þrefaldað ávinningslínuna.

## Tengsl við hugbúnaðarverkfræði

Innflutningur úr heilsuhagfræði fyrir alla sem meta gervigreindartól: gerðu **raunhæfar rannsóknir** (þinn kóðagrunnur, þínir verkfræðingar, raunveruleg verkefni — ekki kynningarverkefni seljanda); líttu á **samþykktarhlutfall sem staðgengil, ekki útkomu** (það er [jákvætt forspárgildi](../mat-á-klínískri-gervigreind/) tillagna frá sjónarhóli forritarans — mikil samþykkt með litla varðveislu er ofgreining); paraðu hverja afkastaaukningu við **stöðugleikaathugun** (DORA 2025: gervigreind eykur afköst, skaðar stöðugleika — inngrip með aukaverkunum krefst nettóábatagreiningar, samkvæmt [DORA-mælikvörðum](../dora-mælikvarðar/)); og flokkaðu ávinninginn heiðarlega sem getu ([reiðufjárlosandi á móti ekki reiðufjárlosandi](../reiðufjárlosandi-sparnaður-á-móti-ekki-reiðufjárlosandi/)).

## Gildrur

- **Ígræðsla rannsókna seljanda**: tölur úr RCT frá grunni beittar á vinnu í eldri kóðagrunni — nákvæmlega villan sem METR-rannsóknin afhjúpaði.
- **Sjálftilkynning sem mæling**: 20 prósentustiga skynjunarbilið er stærsta þekkta skekkjan í þessum rannsóknum.
- **Virknibólga**: fleiri PR og meiri kóði eru Virkni, ekki útkomur ([SPACE](../space-og-devex/)); paraðu við endurvinnslu og CFR.
- **Að hunsa námsferilinn**: mælingar í viku 2 fanga nýjungaáhrif í hvora átt sem er; mældu í jafnvægi ([tímaskeið](../tímaskeið/)).

## Heimildir

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
