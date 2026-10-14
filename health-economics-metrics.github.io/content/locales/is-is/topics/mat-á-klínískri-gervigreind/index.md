# Mat á klínískri gervigreind

Kjarnatölfræðin til að meta klíníska gervigreind eða greiningarlíkan: næmi, sértæki, AUROC, forspárgildi og fjöldi sem skima þarf. Meginhagfræðilærdómurinn: **frábært AUROC gerir dreifingu ekki kostnaðarhagkvæma** — verðmætið ræðst af rekstrarpunktinum, algengi og því sem gerist í kjölfar sérhverrar jákvæðrar niðurstöðu.

## Hvers vegna það skiptir máli

Eftirlitsaðilar (FDA, MHRA) heimila klíníska gervigreind á **læstum rekstrarpunkti** — tilteknu pari næmis/sértækis (t.d. fyrsta sjálfvirka kerfið með FDA-heimild fyrir sjónskemmdir af völdum sykursýki: næmi 87,2%, sértæki 90,7% í lykilrannsókn). Heilsuhagfræðingar spyrja síðan spurningarinnar sem nákvæmnimælikvarðar geta ekki svarað: við algengi dreifingarþýðis þíns, hvað kostar hver greining, og er þess virði að bregðast við henni? Hagrænt mat á gervigreind við skimun fyrir sjónukvillum (npj Digital Medicine 2024) sýndi að aukin nákvæmni ein og sér tryggði ekki kostnaðarhagkvæmni þegar tilvísanakostnaður var talinn með.

## Stærðfræðin

```
Næmi        = TP / (TP + FN)        — af þeim sem eru raunverulega jákvæðir, hlutfall sem finnst
Sértæki     = TN / (TN + FP)        — af þeim sem eru raunverulega neikvæðir, hlutfall sem hreinsast
AUROC       = P(líkan raðar handahófsvöldum jákvæðum ofar handahófsvöldum neikvæðum)
              0,5 tilviljun … 1,0 fullkomið; óháð þröskuldi — og þar með
              ófullnægjandi fyrir ákvörðun um dreifingu

PPV = TP / (TP + FP)   ← háð algengi (Bayes); hrynur þegar sjaldgæft
NPV = TN / (TN + FN)

NNS  ≈ 1 / (algengi × næmi)       — skimaðir á hvert raunverulegt tilvik sem finnst
Kostnaður á raunverulegt tilvik = kostnaður áætlunar / TP      — hagfræðileg niðurstaða
```

## Dæmi útreiknað

Sama líkan, tvær aðstæður — næmi 90%, sértæki 93%:

```
Sérfræðistofa (algengi 20%):
  PPV = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76%  → 3 af 4 viðvörunum raunverulegar

Heilsugæsla (algengi 1%):
  PPV = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5%
  → 8 af 9 viðvörunum falskar; rannsókn á 350 £ hver:
  kostnaður á raunverulegt tilvik = (0,009 + 0,0693) × 350 / 0,009 ≈ 3.045 £ á tilvik sem finnst
```

Eins líkan, gerólík hagfræði — þess vegna er staðbundið mat reglugerðarstef og þess vegna er „líkanið okkar hefur 0,95 AUROC“ upphaf hagrænna raka, ekki endir þeirra. Sjá [skimunarhagfræði](../skimunarhagfræði/) fyrir alla stærðfræði áætlunarinnar.

## Tengsl við hugbúnaðarverkfræði

Fyrir verkfræðinga sem smíða eða kaupa klíníska gervigreind: **sendu ruglingsfylkið við dreifingaralgengi**, ekki ROC-ferilinn einan; **láttu þröskuldinn vera hagræna ákvörðun** — næmi/sértæki-málamiðlunin ætti að lágmarka væntan kostnað (misst tilvik × kostnaður við missi á móti fölskum viðvörunum × kostnaður rannsóknar), ekki hámarka viðmiðunartölfræði; og þekktu sömu stærðfræði í eigin verkfærum — viðvörunarkerfi, frávikagreinar og öryggisskannar eru greiningarpróf yfir atburðarstraumum með lágt algengi, þar sem viðvörunarþreyta er [NNH](../fjöldi-sem-meðhöndla-þarf/). Líkanauppfærslur sem hnika rekstrarpunktinum opna hagfræðina aftur (og regluverksheimildina — sjá [reglugerðarmat á gervigreind](../reglugerðarmat-á-gervigreind/)).

## Gildrur

- **AUROC-búðarráp**: líkön borin saman á AUROC þegar þau munu keyra á einum þröskuldi — berðu saman við rekstrarpunktinn.
- **PPV rannsóknarinnar vitnað í fyrir raunheimsdreifingu** — klassíkin; endurreiknaðu alltaf við staðbundið algengi.
- **Rófskekkja**: líkön staðfest á augljósum tilvikum á móti heilbrigðum viðmiðum standa sig betur en í tvíræða miðjunni sem ræður í reynd.
- **Enginn kostnaður afleiddrar leiðar**: hver jákvæð niðurstaða kallar á rannsókn; líkan er inngrip í hagfræði *allrar leiðarinnar*.

## Heimildir

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
