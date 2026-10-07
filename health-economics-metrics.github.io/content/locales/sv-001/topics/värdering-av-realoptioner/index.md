# Värdering av realoptioner

Värdering av realoptioner tillämpar logiken från prissättning av finansiella optioner på reella (icke-finansmarknadsmässiga) investeringsbeslut — närmare bestämt *expansionsoptionen*, att senare utöka ett projekt om det lyckas, utan att vara förpliktad att göra det. En förenklad enperiods binomialmodell (Cox, Ross, Rubinstein, 1979) värderar den här flexibiliteten direkt och gör ”låt oss leverera smått och se” från en magkänsla till ett prissatt tal.

## Varför det är viktigt

En statisk nuvärdesberäkning prissätter ett projekt som ett allt-eller-inget-vad: finansiera det eller inte, i dagens skala, för alltid. Verkliga projekt — och särskilt stegvisa utrullningar inom digital hälsa — vadslås sällan på så vis: ett hälsosystem kan finansiera en liten pilot, se vad som händer och bara binda mer pengar om det fungerar. Den flexibiliteten har verkligt värde, och att ignorera den undervärderar systematiskt stegvisa investeringar jämfört med engångsinvesteringar, vilket är precis tvärtom för upphandlingsprocesser som belönar det tryggare utseende stegvisa förslaget. Värdering av realoptioner prissätter själva flexibiliteten, så att ett stegvist förslag kan jämföras rättvist med ett alternativ med full förpliktelse i stället för att straffas för att se mindre ut på en naiv nuvärdesrad.

## Matematiken

```
Riskneutral sannolikhet för ”upp”-tillståndet:
  p = ((1 + riskfri_ränta) − nedfaktor) / (uppfaktor − nedfaktor)

Expansionsutbetalning i varje tillstånd (golv vid noll — expansion är valfri):
  utbetalning_upp = max(projektvärde × uppfaktor − expansionskostnad, 0)
  utbetalning_ner = max(projektvärde × nedfaktor − expansionskostnad, 0)

Optionsvärde (diskonterad förväntad utbetalning):
  optionsvärde = (p × utbetalning_upp + (1 − p) × utbetalning_ner) / (1 + riskfri_ränta)

Utökat nuvärde = statiskt_nuvärde + optionsvärde
```

Projektets värde stiger antingen (`uppfaktor`) eller faller (`nedfaktor`) till nästa beslutspunkt. Expansionen utövas bara om den är lönsam i det tillståndet — golvet vid noll i utbetalningen är det som gör detta till en äkta *option* snarare än en förpliktelse. För att prissätta optionen att samla information först, i stället för optionen att expandera senare, se [förväntat värde av perfekt information](../förväntat-värde-av-perfekt-information/). För kostnaden för att vänta med det beslutet, se [kostnad för fördröjning](../kostnad-för-fördröjning/).

## Genomarbetat exempel

En pilot för en digital tjänst med `projektvärde = £1 000 000`, en möjlig uppgång till 1,5× eller nedgång till 0,5× till nästa beslutspunkt, en riskfri ränta på 8 % och en expansionskostnad på £600 000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

utbetalning_upp = max(1 000 000 × 1,5 − 600 000, 0) =  900 000
utbetalning_ner = max(1 000 000 × 0,5 − 600 000, 0) = max(−100 000, 0) = 0

Golvet spelar roll: optionen skulle INTE utövas om marknaden gör besviken —
expansionskostnaden på £600 000 överstiger de £500 000 projektet vore värt
i ned-tillståndet.

optionsvärde = (0,58 × 900 000 + 0,42 × 0) / 1,08
             = 522 000 / 1,08
             ≈ £483 333,33
```

Om man lägger optionsvärdet till en statisk nuvärdesbas på £200 000: utökat nuvärde = 200 000 + 483 333,33 ≈ **£683 333,33**. Att redovisa enbart det statiska nuvärdet på £200 000, utan det här optionsvärdet, skulle undervärdera det stegvisa projektets verkliga värde med mer än det dubbla.

## Koppling till mjukvaruutveckling

Detta är den formella versionen av ”leverera en minimiversion nu, behåll optionen att investera vidare om den tar fart” — direkt relevant för en stegvis utrullning av en digital hälsoprodukt, strukturellt parallell med ramen för sekvensering under osäkerhet i [kostnad för fördröjning](../kostnad-för-fördröjning/) och [WSJF/CD3](../wsjf-och-cd3/), och kompletterande till [förväntat värde av perfekt information](../förväntat-värde-av-perfekt-information/) och [förväntat värde av stickprovsinformation](../förväntat-värde-av-stickprovsinformation/) — alla tre prissätter flexibilitet eller information under osäkerhet, från olika håll.

## Fallgropar

- **Att låna riskneutral prissättning utan det antagande om en handlad tillgång den vilar på**: realoptionsmodeller lånar riskneutral sannolikhet från prissättning av finansiella optioner, som förutsätter att det underliggande värdet är en *handlad* tillgång — för ett verkligt icke-handlat reellt projekt är detta en modelleringsbekvämlighet, inte ett bokstavligt marknadsfaktum.
- **Att behandla `uppfaktor`/`nedfaktor` som fria parametrar**: binomialens upp/ned-indata är själva antaganden som kräver motivering, inte fria parametrar valda för att ge ett önskat svar.
- **Att redovisa enbart optionsvärdet**: realoptionsvärdet är *additivt* till ett fristående projekts statiska nuvärde — ett vanligt fel är att redovisa bara optionsvärdet och släppa grundfallet, vilket överdriver fallet om det statiska nuvärdet är negativt och undervärderar det (som i exemplet ovan) när det statiska nuvärdet utelämnas helt.

## Källor

- Cox JC, Ross SA, Rubinstein M. ”Option pricing: a simplified approach.” J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. ”A real options approach to watchful waiting: theory and an illustration.” Med Decis Making. 2007;27(2):178-88 — knyter realoptioner direkt till ett hälsoekonomiskt beslutssammanhang. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
