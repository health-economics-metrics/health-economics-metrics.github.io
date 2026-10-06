# ICER-jämförelse mellan valutor

Att jämföra en [ICER](../inkrementell-kostnadseffektivitetskvot/) beräknad i ett lands valuta med ett annat lands [betalningsviljetröskel](../betalningsviljetrösklar/) — eller att slå ihop kostnadsdata insamlade i en multinationell studie — kräver ett uttryckligt, granskningsbart steg för valutaomräkning. Väljs omräkningsmetoden fel kan samma underliggande underlag vända ett införandebeslut, trots att ingenting i de kliniska eller kostnadsdata har ändrats.

## Varför det är viktigt

ISPOR:s metodvägledning för multinationella kliniska prövningar (Willke m.fl., *Health Economics*, 1998) rekommenderar att resurskostnader räknas om med **köpkraftsparitet (PPP)** — inte marknadsväxelkurser — när resursers reella ekonomiska värde jämförs mellan länder, och att marknadens valutakurser reserveras för det de faktiskt är till för: att modellera verkliga kontantbetalningsflöden över landsgränser. Att blanda ihop de två är ett av de vanligaste metodfelen i multinationell HTA, just för att båda ser ut som ”växelkursen” för den som inte läst vägledningen, och ett kalkylblad hindrar dig inte från att göra fel.

## Matematiken

```
icer_i_lokal_valuta = räkna_om(icer_i_källvaluta, omräkningsfaktor)

omräkningsfaktorn bör vara:
  PPP-omräkningsfaktor   — för att jämföra resursers reella ekonomiska värde
                            mellan länder (rekommenderad av ISPOR för
                            multinationell CEA)
  marknadsväxelkurs      — endast för faktiska kontantbetalningar över
                            landsgränser

inför om icer_i_lokal_valuta < lokal_tröskel
```

Själva beslutsregeln är den vanliga [ICER-tröskelregeln](../betalningsviljetrösklar/) — `inför om ICER < λ`; metodfrågan i det här ämnet handlar helt om *vilken omräkningsfaktor* som ger siffran `icer_i_lokal_valuta` som regeln tillämpas på.

## Genomarbetat exempel

Ett läkemedels ICER från en amerikansk studie är 45 000 $/QALY. Ett hypotetiskt importland sätter sin egen illustrativa tröskel till £34 000/QALY (en hypotetisk landsspecifik siffra enbart för det här exemplet — verkliga trösklar varierar mellan länder och ändras över tid, och måste alltid ha källa och datum).

**Med en PPP-omräkningsfaktor på 0,72** (illustrativ, endast för det här genomarbetade exemplet): 45 000 $ × 0,72 = £32 400/QALY. £32 400 < £34 000 → **inför**.

**Med en marknadsväxelkurs på 0,79** i stället (illustrativ): 45 000 $ × 0,79 = £35 550/QALY. £35 550 > £34 000 → **avslå**.

Samma underliggande ICER på 45 000 $/QALY ger ett införandebeslut vid PPP-omräkning och ett avslagsbeslut vid omräkning till marknadskurs. Det är den konkreta illustrationen av varför ISPOR-vägledningen behandlar valet av omräkningsfaktor som metodmässigt avgörande — inte en avrundningsdetalj, och inte något man lämnar underförstått i en kalkylbladsformel som ingen dubbelkollar.

## Koppling till mjukvaruutveckling

Detta är hälsoekonomins motsvarighet till ett välkänt ingenjörsområde: korrekthet i i18n/l10n-prissättning i flera valutor i kommersiell mjukvara, där en SaaS-prissida aldrig i det tysta får jämföra ett `$`-belopp med ett `£`-pris. Garantin på typnivå som en välbyggd `Money`-typ ger — jämförelsemetoder som vägrar jämföra oöverensstämmande valutor och först tvingar fram ett uttryckligt omräkningssteg — är en direkt mjukvarutekniska parallell till hälsoekonomins metodpunkt här: jämför inte oomräknade siffror mellan valutor, och låt aldrig omräkningssteget vara underförstått eller odokumenterat.

## Fallgropar

- **Att i det tysta jämföra belopp i olika valutor**: ad hoc-HTA-arbete i kalkylblad som subtraherar eller jämför en dollarsiffra och en pundsiffra utan föregående omräkning — en felklass som en riktig valutamedveten `Money`-typ fångar per konstruktion i stället för att lämna som ett tyst fel.
- **Att förväxla marknadsväxelkurs med PPP**: det vanligaste metodfelet i multinationell HTA enligt ISPOR-vägledningen — de två talen kan skilja sig avsevärt och besvarar olika frågor (reellt ekonomiskt värde mot faktiskt kassaflöde).
- **Att inte datera den använda växelkursen eller PPP-indexet**: båda rör sig över tid, så varje citerad omräkningsfaktor måste dateras på samma sätt som det här arkivet daterar sina övriga referenssiffror (Green Books koldioxidvärden, värdet av ett förhindrat dödsfall och så vidare).

## Källor

- Willke RJ, Glick HA, Polsky D, Schulman K. ”Estimating country-specific cost-effectiveness from multinational clinical trials.” *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
