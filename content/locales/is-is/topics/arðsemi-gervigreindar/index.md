# Arðsemi gervigreindar

Arðsemi gervigreindar er mælanleg afkomuávöxtun sem rekja má til gervigreindarverkefna. Ískyggilegt viðmið: rannsókn MIT 2025, „GenAI Divide“, leiddi í ljós að þrátt fyrir 30–40 milljarða dala fjárfestingu fyrirtækja í GenAI sýndu **~95% tilrauna enga mælanlega afkomuávöxtun** — og þau 5% sem tókust áttu sér auðkennanlegar sameiginlegar venjur.

## Hvers vegna það skiptir máli

Heilbrigðiskerfi eiga nafn á mynstri gervigreindartilrauna: **tilraunaveiki** (pilotitis) — kirkjugarður NHS af efnilegum öppum sem eru prófuð endalaust og aldrei stækkuð. Niðurstöður MIT falla beint að því sem heilbrigðistæknimat veit þegar: verðmætafullyrðingar þurfa fyrirfram tilgreind endapunkta, eignun krefst samanburðar og „öllum finnst þetta hjálpa“ er ekki ávinningslína. Árangursríki minnihlutinn í gögnum MIT einbeitti sér að sjálfvirkni á bakvinnslu með rekjanlegum kostnaðargrunnlínum, og **keypt tól heppnuðust ~67% tilvika á móti innanhússsmíði á um þriðjungi þess** — forsendur sem eiga heima í hverri fjárfestingarákvörðun um gervigreind (sjá [smíða eða kaupa](../smíða-eða-kaupa/)).

## Stærðfræðin

```
Arðsemi gervigreindar = (eignanlegur ávinningur − heildarkostnaður gervigreindar) / heildarkostnaður gervigreindar

Heildarkostnaður gervigreindar = leyfi/ályktun (sjá inference-unit-economics.md)
              + samþætting + gagnaviðbúnaður + mat
              + endurhönnun vinnuflæðis + stjórnarhættir/vissa
              (leyfið er yfirleitt minnihluti nefnarans)

Eignanlegur ávinningur: mældur gegn grunnlínu eða viðmiði, flokkaður
sem reiðufé / geta / gæði samkvæmt cash-releasing-vs-non-cash-releasing.md
```

## Dæmi útreiknað

Sjúkrahúsasamsteypa innleiðir gervigreind í tveimur notkunartilvikum:

```
Notkunartilvik A — gerð klínískra bréfa (bakvinnsla, rekjanlegt):
  grunnlína: útvistuð uppskrift 380 þús. £/ár
  eftir:     samningi um uppskrift sagt upp; yfirferðartími lækna +60 þús. £
  kostnaður gervigreindar: 120 þús. £/ár allt talið
  Arðsemi = (380 þús. − 60 þús. − 120 þús.) / 120 þús. ≈ 167% — reiðufjárlosandi, endurskoðanlegt ✓

Notkunartilvik B — „gervigreindaraðstoðarmaður fyrir lækna“ (breitt, órakið):
  ávinningsfullyrðing: „sparar tíma hjá 4.000 starfsmönnum“ — engin grunnlína skráð
  mæld áhrif á afkomu: engin sýnileg
  → 95% hópurinn, óháð því hvort það hjálpar í raun
```

Munurinn er ekki gæði gervigreindarinnar — hann er hvort ávinningurinn hafði **grunnlínu, eiganda og fjárlagalínu** ([innlausn ávinnings](../innlausn-ávinnings/)).

## Tengsl við hugbúnaðarverkfræði

Handbók í anda HTA fyrir fjárfestingu í gervigreind: **þrepaskiptu sönnunargögnum eins og [þrep NICE ESF](../evidence-standards-framework-hjá-nice/)** — sönnunargögn á sýningarstigi fyrir lítilvæg tól, stýrðar tilraunir áður en útgjöld eru sett í allri stofnuninni, með fyrirfram skráðum útbreiðsluhliðum (mynstur [DiGA](../hraðleið-diga-í-þýskalandi/) um tímabundna skráningu með fresti); **teldu kostnaðarforðun eins og heilsuhagfræði telur eftirspurnarforðun** — raunveruleg aðeins þegar tiltekin fjárlagalína hreyfist; og **verðleggðu tilraunina sjálfa með [EVPI](../vænt-verðmæti-fullkominna-upplýsinga/)** — tilraun sem getur ekki breytt ákvörðun um útbreiðslu er 0 £ virði. Fyrir hluta þróunartóla sérstaklega, sjá [framleiðni forritara með gervigreind](../framleiðni-hugbúnaðarforritara-með-gervigreind/).

## Gildrur

- **Dreifing ávinnings**: verðmæti sem er smurt þunnt yfir þúsundir notenda er ómælanlegt samkvæmt skilgreiningu; veldu notkunartilvik með þéttum, rekjanlegum grunnlínum.
- **Kostnaðarmat eingöngu á leyfi**: samþætting, mat og endurhönnun vinnuflæðis ráða yfirleitt mestu í raunverulegum nefnara.
- **Eignarán**: gervigreind innleidd samhliða endurhönnun ferla gerir tilkall til alls mismunarins.
- **Stigmögnun á sokknum tilraunum**: tilraunir sem mistókust framlengdar því að stöðvun viðurkennir mistök — sólsetursdagsetning verður að vera samþykkt fyrirfram.

## Heimildir

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
