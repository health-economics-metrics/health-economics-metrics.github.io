# Valutasäker kostnadsaggregering

Att summera många penningposter — månadsfakturor, kostnader per plats, fleråriga budgeteffektsiffror — med vanliga binära flyttal (`f64`) samlar på sig små representationsfel, eftersom de flesta decimalbråk (1 234,56 $, till exempel) inte kan representeras exakt i binär flyttalsform. Varje enskilt fel är litet, men en stor modell som summerar hundratals eller tusentals poster över flera år kan driva med bråkdelar av en cent — och driften beror på *ordningen* additionerna sker i, vilket gör den icke-reproducerbar. En valutaaggregering gjord med exakt decimalaritmetik (eller heltalsaritmetik i minsta enhet) summerar exakt, i linje med hur bokföringssystem och dubbel bokföring måste stämma av på öret.

## Varför det är viktigt

Detta är en väldokumenterad, grundläggande klass av programvarufel: Goldbergs artikel från 1991 i ACM Computing Surveys, ”What Every Computer Scientist Should Know About Floating-Point Arithmetic”, är standardreferensen för exakt varför binära flyttal inte kan representera de flesta decimala penningvärden exakt och varför summering av många av dem förstärker felet. Hälsoekonomiska modeller och NHS ekonomimodeller summerar rutinmässigt många år och många kostnadskategorier — [total ägandekostnad](../total-ägandekostnad/) och [budgeteffektanalys](../budgetpåverkansanalys/) aggregerar båda ett stort antal `f64`-kostnadsposter över flerårshorisonter. När en modell måste stämma av på öret — en revision som räknar om totalen för hand måste få *exakt* samma siffra — måste själva aritmetiken vara exakt decimal, inte flyttal.

## Matematiken

```
Naiv aggregering:              summa = Σ f64(post_i)         — ordningsberoende drift
Valutasäker aggregering:       summa = Σ Decimal(post_i)      — exakt, reproducerbar

Tillämpning av en procentjustering (t.ex. en reservbuffert):
  justerad = summa × multiplikator         — exakt Decimal-resultat, kan ha fler
                                              decimaler än exponenten för valutans
                                              minsta enhet
  avrundad = avrunda(justerad, valutaexponent, avrundningsregel)  — avrundningsregeln
                                              (half-up kontra half-even/
                                              bankavrundning) måste anges uttryckligen
```

Lägg märke till tvåstegsdisciplinen: att multiplicera ett exakt `Decimal`-belopp med en multiplikator kan ge fler decimaler än valutan faktiskt använder (tre decimaler från ett belopp med två decimaler gånger en multiplikator med två decimaler, till exempel) — den mellanliggande precisionen avrundas *inte* automatiskt bort; bara ett uttryckligt avrundningssteg med en angiven avrundningsregel för ner den till valutans verkliga exponent för minsta enhet.

## Genomarbetat exempel

Tolv identiska månadsfakturor på 1 234,56 $ vardera, summerade med exakt decimalaritmetik: 1 234,56 $ × 12 = **14 814,72 $**, exakt. Ställ det mot att summera `f64`-litteralen `1234.56` tolv gånger i IEEE-754 dubbel precision, vilket kan driva med bråkdelar av en cent beroende på summeringsordningen — en verklig, dokumenterad felklass, inget problem för en modell byggd på exakt decimal `Money`-aritmetik.

Tillämpa nu en vanlig reservbuffert för budgeteffekt på 5 % (multiplikator 1,05) på den summan på 14 814,72 $: 14 814,72 $ × 1,05 = 15 555,456 $ — tre decimaler, eftersom multiplikationen är exakt och inte automatiskt avrundas till valutans två decimaler. Uttryckligen avrundat till 2 decimaler med bankavrundning (half-even) blir det exakt **15 555,46 $**.

## Koppling till mjukvaruutveckling

Detta är den direkta, grundläggande läxan bakom ”finansmjukvara använder `Decimal`, inte `float`” — den knyter uttryckligen an till det här arkivets moduler [total ägandekostnad](../total-ägandekostnad/) och [budgeteffektanalys](../budgetpåverkansanalys/), som båda för närvarande summerar vanliga flyttalskostnader; korrekthetsargumentet kräver inte att de modellerna migreras omedelbart, men det anger exakt *när* ett system måste stämma av på öret och därför inte får använda binära flyttal för sin penningaritmetik. Se även [exakt centfördelning av kostnader](../exakt-centfördelning-av-kostnader/) för det tillhörande problemet att dela (i stället för att summera) totaler utan att tappa cent.

## Fallgropar

- **Att konvertera till `float` mitt i kedjan**: att dra ut ett penningvärde till ett flyttal mitt i en beräkning (vissa `Money`-bibliotek ger till och med konverteringsmetoden ett namn som ”lossy” som en uttrycklig varning) kastar i det tysta bort exakthetsgarantin för varje beräkning efter den punkten.
- **”Decimal är för långsamt för att bry sig om”**: att avfärda exakt decimalaritmetik som onödig overhead när korrekthet och revisionsbarhet — inte rå genomströmning — är det som räknas i finansiell rapportering.
- **Att tillämpa en reservprocent utan att ange avrundningsregeln**: half-up kontra half-even (bankavrundning) kan ändra den sista centen; själva avrundningskonventionen måste vara ett angivet, granskningsbart val — se [kostnads-nyttoanalys](../kostnads-nyttoanalys/) för HM Treasurys Green Book-vägledning om reserver och justering för optimism bias, just den typ av siffra som det här avrundningssteget tillämpas på.

## Källor

- Fowler M. ”Patterns of Enterprise Application Architecture.” Addison-Wesley, 2002 — `Money`-mönstret.
- Goldberg D. ”What Every Computer Scientist Should Know About Floating-Point Arithmetic.” ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — vägledning om optimism bias och reserver för budgeteffektmodellering. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
