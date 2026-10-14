# Reglugerðarmat á gervigreind

Regluverkin sem gilda um gervigreind í heilbrigðisþjónustu — kerfi FDA fyrir hugbúnað sem lækningatæki (Software as a Medical Device, SaMD) með **fyrirfram ákveðnum breytingastjórnunaráætlunum (PCCP)**, og raunheimsmatsáætlanir eins og NHS AI in Health and Care Award — og hvað þau kosta og gera mögulegt í hagfræðilegu tilliti.

## Hvers vegna það skiptir máli

Regluverk ákvarðar bæði **sönnunarkostnað við markaðsinngöngu** og **kostnað við hverja síðari uppfærslu líkans** — fyrir gervigreindarvörur skiptir hið síðara oft meira máli. Hefðbundin leið FDA (læsa líkaninu; fá nýja heimild fyrir breytingum) gerði sífellda umbót hagfræðilega bitra. **PCCP-leiðbeiningarnar (endanlega útgefnar í desember 2024)** breyttu hagfræðinni: framleiðandi getur fyrirfram heimilað *tilgreindar* framtíðaruppfærslur líkans — lýsingu á fyrirhuguðum breytingum, breytingaferli (hvernig hver verður staðfest) og áhrifamat — svo samþykktar umbætur komist á markað án nýrrar umsóknar. Yfir 1.000 gervigreindartæki hafa heimild FDA; FDA skoðar nú líka vöktun raunheimsframmistöðu (fyrirfram tilgreindir mælikvarðar: grunnhlutfall falskra jákvæðra/neikvæðra, kvörðunarrek, vísar um sviðsbreytingu).

## Stærðfræðin

PCCP er hagfræði [leiðtíma DORA](../dora-mælikvarðar/) beitt á stýrð líkön:

```
Kostnaður á uppfærslu líkans (hefðbundið) = kostnaður endurumsóknar + tafir yfirferðar × CoD
Kostnaður á uppfærslu líkans (innan PCCP) = aðeins kostnaður við framkvæmd ferlis

Hagfræði uppfærslna yfir líftíma vöru:
  N uppfærslur × (umsóknarkostnaður + mánuðir yfirferðar × kostnaður tafa á mánuði)
  á móti einskiptiskostnaði við gerð PCCP + N × framkvæmdir ferlis
```

Í mynstri NHS AI Award er mælikvarðasafnið breiðara en nákvæmni: óháð raunheimsmat meta klíníska frammistöðu, vinnuflæðis-/innleiðingaráhrif og hagræn áhrif — heil [virkni → árangur → kostnaðarhagkvæmni](../framleiðni-hugbúnaðarforritara-með-gervigreind/) leiðsla gerð að stofnun.

## Dæmi útreiknað

Seljandi gervigreindar í myndgreiningu áformar ársfjórðungslegar umbætur á líkani í 3 ár (12 uppfærslur):

```
Hefðbundið: 12 × (80 þús. £ umsókn + 4 mánuðir × 50 þús. £/mán. CoD seinkaðs ávinnings)
           = 12 × 280 þús. £ = 3,36 m£
PCCP-leið:  250 þús. £ gerð PCCP + 12 × 30 þús. £ framkvæmd ferlis = 610 þús. £
Sparnaður ≈ 2,75 m£ — og sjúklingar fá hverja umbót ~4 mánuðum fyrr:
12 × 4 mánuðir × klínískur ávinningur uppfærslunnar, QALY-lína út af fyrir sig.
```

PCCP er viðurkenning eftirlitsaðila á því að **tíðni útgáfu hafi klínískt verðmæti** — orsakakeðja þessa safns, studd af eftirlitsaðila.

## Tengsl við hugbúnaðarverkfræði

Að smíða PCCP vel er hugbúnaðarvandi: fyrirfram tilgreind matssöfn, útgáfustýrð gagnasöfn, sjálfvirkar staðfestingarleiðslur, rekvöktun — stýrður frændi samfelldrar dreifingar, þar sem „dreifingarhliðið“ er staðfest ferli í stað kóðarýni. Teymi með þroskaða matsinnviði ([gæðamælikvarðar gervigreindar](../gæðamælikvarðar-gervigreindar/)) fá PCCP ódýrt; teymi án þeirra uppgötva að regluverkshindrunin er í raun hindrun á verkfræðilegum þroska. Fyrir vörur sem fara inn á NHS er hliðstæð staflan DTAC (klínískt öryggi, persónuvernd, samvirkni) auk sönnunarþrepa [NICE ESF](../evidence-standards-framework-hjá-nice/) — fjárhagsáætlaðu þetta allt sem markaðsinngöngu-[TCO](../heildareignarhaldskostnaður/).

## Gildrur

- **Draumar um útvíkkun PCCP**: aðeins *tilgreindar* breytingategundir eru fyrirfram heimilaðar; arkitektúrbreytingar eða ný ætluð notkun þarfnast fullrar yfirferðar.
- **Raunheimsrek óvaktað**: heimild miðuð við frammistöðu við kynningu + hljóðlátt þýðisrek = vara sem starfar utan samþykkts ramma; vöktun er bæði regluverkskrafa og sjálfsvörn.
- **Að rugla heimild saman við verðmæti**: heimild FDA/UKCA ≠ að nokkur vilji borga — það er [HTA](../mat-á-heilbrigðistækni/)-hindrunin, sem er rekin sérstaklega.

## Heimildir

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
