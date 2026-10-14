# Innlausn ávinnings

Stjórnun á innlausn ávinnings (benefits realization management, BRM) er sú grein að bera kennsl á, setja grunnlínu fyrir, rekja og *sanna* að ávinningurinn sem lofað var í viðskiptarökum hafi í raun skilað sér eftir afhendingu. Í opinberum fjárfestingum í Bretlandi býr hún innan **fimm-tilvika líkans** Green Book hjá HM Treasury; í læknisfræði er frændi hennar eftirlit eftir markaðssetningu.

## Hvers vegna það skiptir máli

Viðskiptarök eru loforð; innlausn ávinnings er endurskoðunin. Mat á stórum stafrænum áætlunum NHS fann ítrekað spáðan ávinning sem skilaði sér aldrei — og þegar ávinningur var ekki reiðufjárlosandi gerði hann ekkert fyrir afkomu stofnunarinnar. Svar Green Book: sérhvert útgjaldatilvik verður að standast **fimm tilvik** (stefnumótandi, hagfræðilegt, viðskiptalegt, fjárhagslegt, stjórnunarlegt), þar sem innlausn ávinnings er skipulögð í stjórnunartilvikinu *áður en samþykkt er veitt* — eigendur nefndir, grunnlínur skráðar, mælidagsetningar settar. Án þessa verður „hugbúnaðurinn sparaði 30 mínútur á hvern hjúkrunarfræðing“ að skáldskap seljanda um alla framtíð.

## Stærðfræðin

```
Innlausnarhlutfall = ávinningur innleystur / ávinningur spáður   (fyrir hvern ávinning, hvert tímabil)

Búnaður sem gerir þetta reiknanlegt:
  grunnlína skráð ÁÐUR en gangsett er (annars er munurinn ómælanlegur)
  hver ávinningur: eigandi, mælikvarði, gagnalind, mæliáætlun
  spá leiðrétt fyrir bjartsýniskekkju við mat (skylda samkvæmt Green Book)
  ávinningur flokkaður sem reiðufé / ekki reiðufé / eigindlegur og rakinn sérstaklega
  (sjá cash-releasing-vs-non-cash-releasing.md)
```

## Dæmi útreiknað

Viðskiptarök um rafræna vaktaskrá lofuðu á ári: 450 þús. £ minni útgjöld til afleysingastofa (reiðufé), 8.000 stundir deildarstjóra (geta), betri fylgni við mönnunarhlutfall (eigindlegt). Tólf mánuðum eftir gangsetningu:

```
Ávinningur          Spáð        Innleyst    Hlutfall   Sönnunargögn
Útgjöld afleysinga  450.000 £   287.000 £   64%        bókhald vs grunnlínuár
Stundir stjórnenda  8.000       5.100       64%        tíma-hreyfingarúrtak
Mönnunarfylgni      +10 pp      +12 pp      120%       gögn vaktakerfis

Aðgerðir úr yfirferðinni (tilgangur BRM):
skortur á afleysingasparnaði rakinn til tveggja deilda sem aldrei voru teknar inn → taka þær inn;
30% bjartsýnisskekkja spálíkansins skráð → beitt á næstu rök.
```

64% innlausn er ekki mistök — hún er *þekking*. Ómæld tilvik fullyrða 100% að eilífu.

## Tengsl við hugbúnaðarverkfræði

Verkfræðistofnanir samþykkja vettvangsfjárfestingar á spáðum ávinningi og endurskoða hann nánast aldrei — nákvæmlega sá kvilli sem BRM lagar. Létt útgáfa: hver tillaga yfir þröskuldi nefnir ávinningseigendur, grunnlínumælikvarða og endurskoðunardag T+6 mánuðir; innlausnarhlutföll fara aftur í það hve mikið stofnunin afsláttarreiknar næstu spá þess teymis (eða seljanda). Þetta er einnig svarið við efasemdum um gervigreindartól: [niðurstaða MIT um að ~95% GenAI-tilrauna sýndu enga mælanlega afkomuávöxtun](../arðsemi-gervigreindar/) er niðurstaða um innlausn ávinnings — tilraunirnar sem *skiluðu* arði höfðu rekjanlegar ávinningslínur með eigendum. Spá → mæla → endurkvarða er sama lykkja og tilraunir verðlagðar með [EVPI](../vænt-verðmæti-fullkominna-upplýsinga/), rekin á safnstigi.

## Gildrur

- **Engin grunnlína fyrir gangsetningu** — banvæn, óbætanleg vanræksla.
- **Munaðarlaus ávinningur**: enginn nefndur eigandi þýðir að enginn safnar gögnum og sérhver yfirferð segir „í stórum dráttum á áætlun“.
- **Tvítalinn ávinningur milli áætlana** sem gera tilkall til sömu losuðu getu — haltu ávinningsskrá yfir allt safnið.
- **Innlausnarleikhús**: að mæla auðveldu eigindlegu sigrana á meðan reiðufjárlínurnar eru hljóðlega ekki skoðaðar.

## Heimildir

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
