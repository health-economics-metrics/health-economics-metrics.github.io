# Cent-præcis omkostningsfordeling

At opdele et samlet pengebeløb — et fælles tilskud, en infrastrukturregning, et budgetkonsekvenstal — mellem flere modtagere med naiv procentregning giver rutinemæssigt dele, der ikke summerer tilbage til det oprindelige beløb. Cent-præcis fordeling er løsningen: en heltals-/decimalmetode, der arbejder i mindste valutaenheder (cent) og garanterer, at delene summerer til *præcis* helheden, uanset hvor ujævnt den lader sig dele. Enhver softwareingeniør, der skal afstemme et opdelt beløb til cent — lønkørsel, udbetaling af tilskud, viderefakturering af fælles tjenester — har brug for dette mønster, ikke flydende-komma-procenter.

## Hvorfor det er vigtigt

Dette er et navngivet, grundlæggende mønster i virksomhedssoftware: Martin Fowlers *Patterns of Enterprise Application Architecture* (2002) dokumenterer `Money` og `Allocate` netop fordi "del 100 $ i tre" er et problem, naiv kode gentagne gange løser forkert — og forkert i det stille: fejlen viser sig først, når nogen afstemmer bøgerne og finder delene en cent for lave (eller høje) i forhold til totalen. I sundhedsøkonomi og NHS-finansarbejde er det ikke akademisk: budgetkonsekvenstotaler opdeles på lokationer, år eller direktorater; fælles infrastruktur- og licensomkostninger fordeles på afdelinger efter antal ansatte eller aktivitetsandel. Hver eneste af de opdelinger skal gå op præcist, for en økonomidirektør, der får dele, som ikke summerer til totalen, holder op med at stole på hele modellen.

## Matematikken

```
Naiv (fejlbehæftet) metode:
  del_i = afrund(total × andel_i / Σ andele)     — afrunder hver del uafhængigt

Eksakt metode (største rest / "largest remainder allocation"):
  1. basis_i = nedrund(total_mindsteenheder × andel_i / Σ andele)   — kun hele mindsteenheder (cent)
  2. rest = total_mindsteenheder − Σ basis_i                         — overskydende cent, altid < antal modtagere
  3. fordel 1 ekstra mindsteenhed til hver af de `rest` modtagere med den
     største brøkrest fra trin 1, indtil resten er opbrugt

Resultat: Σ del_i == total, altid, konstruktionsmæssigt.
```

Den eksakte metode afrunder aldrig en del isoleret — den afrunder *hele fordelingen* som én operation, og det er det, der får summeinvarianten til at holde.

## Gennemarbejdet eksempel

Del 100,00 $ i tre lige store dele (`andele = [1, 1, 1]`).

Naiv metode: 100,00 $ ÷ 3 = 33,333… $, afrundet uafhængigt til nærmeste cent giver 33,33 $ til hver modtager. Summeret: 33,33 $ × 3 = 99,99 $ — en cent er forsvundet, og ingen enkelt post er så "forkert", at man opdager det ved at kigge.

Eksakt metode: `basis` = 33,33 $ til alle tre (9.999 mindsteenheder i alt fra `nedrund(10.000 / 3) = 3.333` cent hver), hvilket efterlader en rest på 1 cent (10.000 − 9.999). Den ene overskydende cent går til den modtager, der har den største brøkrest i divisionen — hvilken modtager det præcis er, er en intern detalje i uafgjort-reglen, som en kalder ikke bør afhænge af. To modtagere ender med 33,33 $ og én med 33,34 $, og de tre dele summerer til præcis 100,00 $.

Det er netop den aritmetik, en [budgetkonsekvensanalyse](../budget-impact-analysis/) har brug for, når et samlet budgetkonsekvenstal skal opdeles på lokationer, kohorter eller regnskabsår og afstemmes tilbage til den offentliggjorte total — se [valutasikker omkostningsaggregering](../currency-safe-cost-rollup/) for det tilhørende problem at summere mange sådanne poster uden drift.

## Forbindelse til softwareudvikling

Det er bogstaveligt talt "Money-mønstret" fra virksomhedssoftwarearkitektur — et grundlæggende, navngivet mønster for netop denne fejlklasse, ikke et engangstrick. Reelle finansielle afstemningsfejl er blevet leveret fra netop denne fejlklasse: procentopdelinger beregnet i `f64`, afrundet pr. modtager og aldrig kontrolleret mod den oprindelige total. Det knytter sig direkte til dette repositoriums modul [samlet ejeromkostning](../total-cost-of-ownership/), som i dag summerer almindelige flydende-komma-omkostninger på tværs af år og muligheder — den samme eksakthedsdisciplin gælder, når en TCO- eller budgetkonsekvenstotal skal fordeles frem for blot summeres.

## Faldgruber

- **Procent-og-så-afrund i stedet for største rest**: fordeling med flydende-komma-procenter og afrunding af hver modtager uafhængigt, hvilket forstærker afrundingsfejlen og sjældent summerer tilbage til totalen, især med mange modtagere.
- **At ignorere valutaers mindsteenhedseksponenter**: at antage, at alle valutaer har 2 decimaler — japanske yen har 0, nogle valutaer har 3 — en hjemmestrikket procentopdeling hårdkoder som regel 2 og går stiltiende i stykker for andre valutaer; en eksakt fordelingsrutine læser eksponenten fra selve valutaen (ISO 4217).
- **At gen-fordele en allerede fordelt rest**: at køre fordelingsrutinen igen på det, der er til overs fra en tidligere fordeling, uden idempotenstjek, hvilket kan give den samme cent to gange til den samme modtager.

## Kilder

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — mønstrene `Money` og `Allocate`.
- ISO 4217 — standard for valuta- og fondskoder, som definerer hver valutas mindsteenhedseksponent.
