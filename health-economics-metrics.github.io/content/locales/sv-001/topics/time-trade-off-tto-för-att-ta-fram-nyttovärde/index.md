# Time trade-off (TTO) för att ta fram nyttovärde

TTO är en vedertagen metod för att få fram ett hälsotillstånds nyttovärde direkt från en respondent i stället för att hitta på ett. Det är en av framtagningsmetoderna — vid sidan av standard gamble och diskreta valexperiment — som ger de värdeset som ligger bakom instrument som [EQ-5D](../eq-5d/) och därmed bakom de flesta efterföljande [QALY](../kvalitetsjusterat-levnadsår/)-beräkningar.

## Varför det är viktigt

Varje nyttovikt som matas in i en QALY-beräkning måste ha kommit någonstans ifrån. TTO är sättet: för ett tillstånd som anses bättre än döden tillfrågas en respondent hur många år `X` i full hälsa vederbörande skulle betrakta som likvärdiga med `T` år i det nedsatta tillståndet (`X < T`); nyttovärdet är `X / T`. För ett tillstånd som en del respondenter anser vara värre än döden bryter standardformeln samman (den kan inte representera nyttovärden under noll på ett rent sätt), så en utökad TTO tillämpas i stället. En mjukvaruutvecklare eller analytiker som behandlar en nyttovikt som en given indata, utan att veta att den krävde ett validerat framtagningsprotokoll för att produceras, är ett steg från ett tal vederbörande inte kan försvara om det ifrågasätts.

## Matematiken

```
Standard-TTO (tillstånd bättre än döden):
  nyttovärde = tid_i_full_hälsa / tid_i_nedsatt_tillstånd

Utökad TTO (tillstånd värre än döden):
  nyttovärde = -tid_bytt_mot_döden / (total_varaktighet - tid_bytt_mot_döden)
```

`tid_i_full_hälsa` / `tid_i_nedsatt_tillstånd` — år `X` i full hälsa som bedöms likvärdiga med `T` år i det nedsatta tillståndet. `tid_bytt_mot_döden` / `total_varaktighet` — i formuleringen för värre än döden, de år `a` av en återstående livstid på `T` år som respondenten skulle byta mot omedelbar död, genom att föredra `T − a` år i full hälsa följt av död framför `T` år i tillståndet som är värre än döden. Resultatet är negativt, förankrat så att död = 0.

## Genomarbetat exempel

**Standard**: en respondent befinner sig i ett nedsatt tillstånd i 10 år och är indifferent inför 7 år i full hälsa: nyttovärde = 7 / 10 = **0,7**.

**Värre än döden**: över en återstående livstid på 10 år skulle respondenten byta 2 år mot omedelbar död — hen föredrar 8 år i full hälsa följt av död framför 10 år i tillståndet värre än döden: nyttovärde = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Koppling till mjukvaruutveckling

Samma sak som en DevEx- eller engagemangsundersökning stöter på när den ber människor betygsätta något på en oprövad 0–10-skala gäller här omvänt: TTO finns just därför att ”be bara folk betygsätta det” inte i sig är en validerad framtagningsmetod. Innan du bygger ett sammansatt index — ett DevEx-betyg, ett engagemangsindex, en utbrändhetsskala — ovanpå ett självskattat tal, fråga vad som tog fram det och om den metoden var validerad; samma fråga hälsoekonomer ställer till en nyttovikt innan den går in i en QALY.

## Fallgropar

- **Generalisering av individuella värden**: TTO-värden tas fram från ett *urval* av allmänheten (eller patienter), inte från den individ vars vård beslutas — att använda en respondents TTO-värde som om det generaliserar är ett urvalsfel.
- **Fel formulering för tillståndet**: standard-TTO-formeln förutsätter att tillståndet entydigt är bättre än döden; tillämpas den på ett tillstånd som en del respondenter skulle anse värre än döden, utan att byta till den utökade formuleringen, ger det i det tysta ett felaktigt (positivt) nyttovärde.
- **Ojämförbara varaktigheter**: TTO-värden framtagna med olika återstående livstider `T` för jämförelsen värre-än-döden är inte direkt jämförbara utan att kontrollera att studiedesignen höll `T` konstant.

## Källor

- Torrance GW. ”Social preferences for health states: an empirical evaluation of three measurement techniques.” Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. ”Measuring preferences for health states worse than death.” Med Decis Making. 1994;14(1):9-18.
