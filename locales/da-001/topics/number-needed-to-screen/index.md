# Antal, der skal screenes (NNS)

NNS er antallet af personer, der skal screenes — ikke blot behandles — for at forhindre **ét** negativt udfald over en defineret opfølgningsperiode, givet befolkningens baselinerisiko og den relative risikoreduktion, som tidlig opsporing og behandling opnår. Det er NNT's analog på screeningsprogramniveau: NNT spørger, hvor mange der skal *behandles* for at forhindre ét udfald; NNS spørger, hvor mange der skal igennem hele *screen-og-så-behandl*-forløbet for at nå dertil.

## Hvorfor det er vigtigt

Rembold introducerede NNS i 1998 netop for at kunne sammenligne screeningsprogrammer på samme fod som behandlinger, fordi en screeningstests overskriftsværdi for relativ risikoreduktion skjuler to ting, en behandlings ikke gør: baselinerisikoen i den befolkning, der faktisk inviteres til screening, og det forhold, at alle screenede bærer testens omkostning og byrden af falsk-positive, ikke kun mindretallet, der senere får gavn. Det britiske National Screening Committees omkostningseffektivitetsport (se [screeningøkonomi](../screening-economics/)) bygger på netop denne skelnen — et screeningsprogram med en imponerende relativ risikoreduktion i en befolkning med lav baselinerisiko kan stadig have et NNS i tusindvis, og så bliver programomkostningen pr. forhindret udfald det egentlige spørgsmål.

## Matematikken

```
NNS = 1 / (baselinerisiko × relativ_risikoreduktion)

baselinerisiko           = sandsynligheden for udfaldet i den screenede
                           befolkning over opfølgningsperioden (0–1)
relativ_risikoreduktion  = proportional risikoreduktion opnået ved
                           screeningsbaseret tidlig behandling (0–1)

Programomkostning pr. forhindret udfald = NNS × omkostning_pr_screening
```

Sammenlign direkte med [NNT](../number-needed-to-treat/): NNS folder effektiviteten af hele tragten screen → diagnosticér → behandl ind i ét tal, hvor NNT allerede forudsætter, at patienten er diagnosticeret og starter behandling.

## Gennemarbejdet eksempel

Et screeningsprograms målgruppe har en baselinerisiko for hændelsen på 2 % i undersøgelsesperioden (`baselinerisiko = 0,02`), og tidlig opsporing opnår en relativ risikoreduktion på 25 % (`relativ_risikoreduktion = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 personer skal screenes for at forhindre ét udfald.

Ved 50 £ pr. screening:
Programomkostning pr. forhindret udfald = 200 × 50 £ = 10.000 £
```

De 10.000 £ er tallet, der skal vejes mod omkostningen ved selve udfaldet og de QALY'er, det ville have kostet — den samme sammenligning, som [forebyggelsesøkonomi](../prevention-economics/) laver for forebyggelsesprogrammer generelt.

## Forbindelse til softwareudvikling

NNS er "hvor mange brugere, hændelser eller forespørgsler skal gennem et opsporings- eller triageforløb for at fange ét sandt positivt, det er værd at handle på" — direkte relevant for alarmbaserede overvågnings- og triagesystemer, hvor en tilstand med lav prævalens oppuster NNS på samme måde, som den får den positive prædiktive værdi til at kollapse (se [screeningøkonomi](../screening-economics/) og [evaluering af klinisk AI](../clinical-ai-evaluation/)). En overvågningsregel, der skal behandle 200 hændelser pr. reelt fund, er kun værd at køre, hvis fundet er mindst 200 gange så meget værd som triageomkostningen pr. hændelse — samme aritmetik som i sundhedseksemplet ovenfor.

## Faldgruber

- **At ignorere afhængigheden af baselinerisiko**: den samme screeningstest eller det samme program har et vidt forskelligt NNS — og omkostningseffektivitet — i en højrisikobefolkning og i en lavrisikobefolkning. Angiv aldrig et NNS uden at nævne den befolkning, det er beregnet for.
- **At tælle den forkerte nævner**: NNS tæller *screenede* personer, ikke personer med positiv test eller påbegyndt behandling — det indeholder allerede hele tragtens effektivitet og må derfor aldrig sammenlignes med en måleenhed, der kun er talt over positive.
- **At sammenligne på tværs af opfølgningsperioder**: en kortere opfølgningsperiode oppuster generelt NNS, fordi færre hændelser observeres i vinduet. NNS-tal er kun sammenlignelige, når de er beregnet over samme opfølgningsvarighed.

## Kilder

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
