# Realoptionsværdisætning

Realoptionsværdisætning anvender finansiel optionsprissætningslogik på reelle (ikke-finansmarkedsbaserede) investeringsbeslutninger — nærmere bestemt *optionen til at udvide* et projekt senere, hvis det lykkes, uden at være forpligtet til det. En forenklet enperiodes binomialmodel (Cox, Ross, Rubinstein, 1979) værdisætter denne fleksibilitet direkte og gør "lad os levere småt og se" fra en mavefornemmelse til et indprisset tal.

## Hvorfor det er vigtigt

En statisk nutidsværdiberegning prissætter et projekt som et alt-eller-intet-væddemål: finansiér det eller lad være, i dagens omfang, for evigt. Reelle projekter — og især trinvise digitale sundhedsudrulninger — gøres sjældent op sådan: et sundhedssystem kan finansiere en lille pilot, se hvad der sker og først forpligte sig til flere penge, hvis den virker. Den fleksibilitet har reel værdi, og at ignorere den undervurderer systematisk trinvise investeringer i forhold til engangsinvesteringer, hvilket er præcis omvendt for indkøbsprocesser, der belønner det sikrere udseende trinvise forslag. Realoptionsværdisætning prissætter selve fleksibiliteten, så et trinvist forslag kan sammenlignes retfærdigt med et alternativ med fuld forpligtelse i stedet for at blive straffet for at se mindre ud på en naiv nutidsværdilinje.

## Matematikken

```
Risikoneutral sandsynlighed for "op"-tilstanden:
  p = ((1 + risikofri_rente) − nedfaktor) / (opfaktor − nedfaktor)

Udvidelsesudbetaling i hver tilstand (afskåret ved nul — udvidelse er valgfri):
  udbetaling_op  = max(projektværdi × opfaktor  − udvidelsesomkostning, 0)
  udbetaling_ned = max(projektværdi × nedfaktor − udvidelsesomkostning, 0)

Optionsværdi (diskonteret forventet udbetaling):
  optionsværdi = (p × udbetaling_op + (1 − p) × udbetaling_ned) / (1 + risikofri_rente)

Udvidet nutidsværdi = statisk_nutidsværdi + optionsværdi
```

Projektets værdi enten stiger (`opfaktor`) eller falder (`nedfaktor`) frem til næste beslutningstidspunkt. Udvidelse udøves kun, hvis det er rentabelt i den tilstand — afskæringen af udbetalingen ved nul er det, der gør dette til en ægte *option* frem for en forpligtelse. For prissætning af optionen til først at indsamle information, i stedet for optionen til at udvide senere, se [forventet værdi af perfekt information](../expected-value-of-perfect-information/). For omkostningen ved at vente med at træffe den beslutning, se [omkostning ved forsinkelse](../cost-of-delay/).

## Gennemarbejdet eksempel

En digital servicepilot med `projektværdi = 1.000.000 £`, en mulig stigning til 1,5× eller fald til 0,5× frem til næste beslutningstidspunkt, en risikofri rente på 8 % og en udvidelsesomkostning på 600.000 £:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

udbetaling_op  = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
udbetaling_ned = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Afskæringen betyder noget: optionen ville IKKE blive udøvet, hvis markedet
skuffer — udvidelsesomkostningen på 600.000 £ overstiger de 500.000 £,
projektet ville være værd i ned-tilstanden.

optionsværdi = (0,58 × 900.000 + 0,42 × 0) / 1,08
             = 522.000 / 1,08
             ≈ 483.333,33 £
```

Lægges optionens værdi til en statisk nutidsværdi-baseline på 200.000 £: udvidet nutidsværdi = 200.000 + 483.333,33 ≈ **683.333,33 £**. At rapportere den statiske nutidsværdi på 200.000 £ alene uden denne optionsværdi ville undervurdere det trinvise projekts reelle værdi med mere end det dobbelte.

## Forbindelse til softwareudvikling

Det er den formelle version af "lever en minimumsversion nu, behold optionen til at investere yderligere, hvis den slår an" — direkte relevant for en trinvis udrulning af et digitalt sundhedsprodukt, strukturelt parallelt med sekvenseringsrammen under usikkerhed i [omkostning ved forsinkelse](../cost-of-delay/) og [WSJF/CD3](../wsjf-and-cd3/), og supplerende til [forventet værdi af perfekt information](../expected-value-of-perfect-information/) og [forventet værdi af stikprøveinformation](../expected-value-of-sample-information/) — alle tre prissætter fleksibilitet eller information under usikkerhed, fra forskellige vinkler.

## Faldgruber

- **At låne risikoneutral prissætning uden den forudsætning om handlet aktiv, den hviler på**: realoptionsmodeller låner risikoneutral sandsynlighed fra finansiel optionsprissætning, som forudsætter, at den underliggende værdi er et *handlet* aktiv — for et reelt ikke-handlet projekt er det en modelleringsbekvemmelighed, ikke et bogstaveligt markedsfaktum.
- **At behandle `opfaktor`/`nedfaktor` som frie parametre**: de binomiale op/ned-input er selv antagelser, der kræver begrundelse, ikke frie parametre valgt for at give et ønsket svar.
- **At rapportere optionsværdien alene**: realoptionsværdi er *additiv* til et selvstændigt projekts statiske nutidsværdi — en almindelig fejl er kun at rapportere optionsværdien og droppe grundtilfældet, hvilket overdriver sagen, hvis den statiske nutidsværdi er negativ, og undervurderer den (som i eksemplet ovenfor), når den statiske nutidsværdi helt udelades.

## Kilder

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — knytter realoptioner direkte til en sundhedsøkonomisk beslutningskontekst. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
