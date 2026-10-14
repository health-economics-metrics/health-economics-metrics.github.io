# Exakt centfördelning av kostnader

Att dela ett totalbelopp — ett gemensamt anslag, en infrastrukturfaktura, en budgeteffektsiffra — mellan flera mottagare med naiv procenträkning ger rutinmässigt delar som inte summerar tillbaka till det ursprungliga totalbeloppet. Exakt centfördelning är lösningen: en heltals-/decimalmetod som arbetar i minsta valutaenheter (cent) och garanterar att delarna summerar *exakt* till helheten, oavsett hur ojämnt det delar sig. Varje mjukvaruutvecklare som måste stämma av en delad total på öret — löner, utbetalning av anslag, vidarefakturering av gemensamma tjänster — behöver det här mönstret, inte flyttalsprocent.

## Varför det är viktigt

Detta är ett namngivet, grundläggande mönster i företagsprogramvaruutveckling: Martin Fowlers *Patterns of Enterprise Application Architecture* (2002) dokumenterar `Money` och `Allocate` just därför att ”dela 100 $ på tre” är ett problem som naiv kod ständigt löser fel, och fel i det tysta — felet dyker upp först när någon stämmer av böckerna och finner delarna en cent för låga (eller höga) jämfört med totalen. I hälsoekonomi och NHS ekonomiarbete är det inte akademiskt: budgeteffektstotaler delas på platser, år eller direktorat; gemensamma infrastruktur- och licenskostnader fördelas på avdelningar efter personalantal eller aktivitetsandel. Varje sådan delning måste stämma exakt, för en ekonomidirektör som får delar som inte summerar till totalen slutar lita på hela modellen.

## Matematiken

```
Naiv (felaktig) metod:
  del_i = avrunda(summa × andel_i / Σ andelar)     — avrundar varje del för sig

Exakt metod (största rest / ”largest remainder allocation”):
  1. bas_i = golv(summa_minsta_enheter × andel_i / Σ andelar)   — endast hela minsta enheter (cent)
  2. rest = summa_minsta_enheter − Σ bas_i                       — överblivna cent, alltid < antal mottagare
  3. fördela 1 extra minsta enhet var till de `rest` mottagare som har den
     största bråkresten från steg 1, tills resten är slut

Resultat: Σ del_i == summa, alltid, per konstruktion.
```

Den exakta metoden avrundar aldrig en del isolerat — den avrundar *hela fördelningen* som en enda operation, och det är det som får summainvarianten att hålla.

## Genomarbetat exempel

Dela 100,00 $ i tre lika delar (`andelar = [1, 1, 1]`).

Naiv metod: 100,00 $ ÷ 3 = 33,333… $, avrundat för sig till närmaste cent ger 33,33 $ till varje mottagare. Summerat: 33,33 $ × 3 = 99,99 $ — en cent har försvunnit, och ingen enskild post är så ”fel” att man upptäcker det genom att titta.

Exakt metod: `bas` = 33,33 $ för alla tre (9 999 minsta enheter totalt från `golv(10 000 / 3) = 3 333` cent vardera), vilket lämnar en rest på 1 cent (10 000 − 9 999). Den ena överblivna centen går till mottagaren med störst bråkrest i divisionen — vilken mottagare det blir är en intern detalj i hur lika fall avgörs, inget en anropare bör förlita sig på. Två mottagare får 33,33 $ och en får 33,34 $, och de tre delarna summerar exakt till 100,00 $.

Det är precis den aritmetik en [budgeteffektanalys](../budgetpåverkansanalys/) behöver varje gång en total budgeteffektsiffra måste delas på platser, kohorter eller räkenskapsår och stämmas av mot den publicerade totalen — se [valutasäker kostnadsaggregering](../valutasäker-kostnadsaggregering/) för det tillhörande problemet att summera många sådana poster utan drift.

## Koppling till mjukvaruutveckling

Detta är bokstavligen ”Money-mönstret” från företagsprogramvarans arkitektur — ett grundläggande, namngivet mönster för just den här felklassen, inget engångstrick. Verkliga fel vid finansiell avstämning har levererats i produktion från just den här felklassen: procentfördelningar beräknade i `f64`, avrundade per mottagare och aldrig kontrollerade mot den ursprungliga totalen. Det knyter direkt an till det här arkivets modul [total ägandekostnad](../total-ägandekostnad/), som för närvarande summerar vanliga flyttalskostnader över år och alternativ — samma exakthetsdisciplin gäller när en TCO- eller budgeteffektstotal måste fördelas och inte bara summeras.

## Fallgropar

- **Procent-sedan-avrunda i stället för största rest**: att fördela med flyttalsprocent och avrunda varje mottagare för sig, vilket förstärker avrundningsfel och sällan summerar tillbaka till totalen, särskilt med många mottagare.
- **Att bortse från valutors exponent för minsta enhet**: att anta att varje valuta har 2 decimaler — japanska yen har 0, vissa valutor har 3 — en handbyggd procentdelning hårdkodar oftast 2 och går tyst sönder för andra valutor; en exakt fördelningsrutin läser exponenten från själva valutan (ISO 4217).
- **Att omfördela en redan fördelad rest**: att köra fördelningsrutinen på nytt på det som blev över från en tidigare fördelning, utan idempotenskontroller, vilket kan kreditera samma cent två gånger till samma mottagare.

## Källor

- Fowler M. ”Patterns of Enterprise Application Architecture.” Addison-Wesley, 2002 — mönstren `Money` och `Allocate`.
- ISO 4217 — standard för valuta- och fondkoder, som definierar varje valutas exponent för minsta enhet.
