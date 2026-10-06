# Förväntat värde av stickprovsinformation (EVSI)

EVSI är värdet av en *specifik föreslagen studie* — en given design, en given stickprovsstorlek — innan den genomförs, till skillnad från [EVPI](../förväntat-värde-av-perfekt-information/), som prissätter att helt undanröja all osäkerhet. EVSI besvarar den fråga en forskningsfinansiär faktiskt står inför: ”är *den här* studien, i *den här* storleken, värd sin kostnad?”

## Varför det är viktigt

EVPI anger taket för vad någon forskning över huvud taget kan vara värd; den säger aldrig om studien som ligger framför dig tar sig över ribban. En nationell forskningsfinansiär som väljer mellan en pilotstudie på 50 patienter och en avgörande studie på 500 patienter behöver veta hur mycket *varje specifik design* är värd, inte bara värdet av allvetande. EVSI levererar det talet, och eftersom det skalar med stickprovsstorleken kan en finansiär hitta den stickprovsstorlek som maximerar förväntad nettonytta i stället för att gissa.

Det är också skälet till att EVSI alltid är mindre än eller lika med EVPI: ett ändligt stickprov kan bara delvis lösa osäkerhet, och en studie som verkar vara värd mer än perfekt information är ett tecken på att beräkningen är fel, inte ett verkligt resultat.

## Matematiken

```
Allmänt:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nästlad förväntning: yttre över möjliga studieresultat, inre över den
  posteriora uppfattningen om θ efter att ha sett det resultatet — oftast
  skattad med nästlad Monte Carlo / bayesiansk uppdatering över dragen
  från den probabilistiska känslighetsanalysen)

Sluten normalapproximation (en osäker parameter, konjugerad normal-normal-
modell — en vanlig genväg, inte exakt för varje modell):
EVSI(n) = EVPI × n / (n + n0)

n  = den föreslagna studiens stickprovsstorlek
n0 = ”förhandsekvivalent stickprovsstorlek” — storleken på ett tänkt
     stickprov som skulle bära samma information som den nuvarande
     förhandsfördelningen, härledd ur förhållandet mellan datavarians och
     förhandsvarians
ENBS(n) = EVSI(n) − Kostnad(n)
Populations-EVSI = EVSI_per_beslut × berörda_beslut
```

Den allmänna formen är en nästlad förväntning eftersom studiens framtida resultat självt är osäkert: man måste medelvärdesbilda över varje möjligt dataset som studien kunde ge, och för vart och ett räkna om det bästa beslutet givet den uppdaterade (posteriora) uppfattningen. Den slutna normalapproximationen byter den beräkningskostnaden mot ett enda förhållande, giltigt när den osäkra parametern och data är (ungefär) normala och konjugerade — en bekvämlighet, inte en universell lag. Fullständig nästlad Monte Carlo är den allmänna metoden när det antagandet inte håller. Se [probabilistisk känslighetsanalys](../probabilistisk-känslighetsanalys/) för PSA-dragen som EVSI vanligtvis skattas ur.

## Genomarbetat exempel

Med utgångspunkt i det genomarbetade exemplet för [EVPI](../förväntat-värde-av-perfekt-information/) — utrullning av en AI-dokumentationsassistent till 5 000 kliniker, där EVPI visade sig vara £1,2 mkr — uttrycks samma EVPI här i hela pund: **EVPI = £1 200 000**.

En föreslagen pilotstudie på 50 kliniker ligger på bordet. Ur förhållandet mellan variansen i den tidigare uppfattningen och pilotens mätprecision blir den förhandsekvivalenta stickprovsstorleken `n0 = 75`:

```
EVSI(50) = 1 200 000 × 50 / (50 + 75)
         = 1 200 000 × 50 / 125
         = 1 200 000 × 0,4
         = £480 000
```

Piloten kostar £120 000:

```
ENBS = EVSI − Kostnad = 480 000 − 120 000 = £360 000
```

En tydligt positiv ENBS: finansiera piloten. Om samma upphandlingsbeslut återkommer hos 3 liknande regionala trusts skalar pilotens värde:

```
Populations-EVSI = 480 000 × 3 = £1 440 000
```

## Koppling till mjukvaruutveckling

EVSI är ekonomin i att välja *hur stor* en pilot eller ett A/B-test ska vara, inte bara om man ska köra ett överhuvudtaget:

- **Stickprovsstorlek som investeringsbeslut.** En beta med 50 användare och en stegvis utrullning till 5 000 användare är olika ”studier” med olika EVSI och kostnader — EVSI låter dig jämföra dem på samma grund i stället för att falla tillbaka på ”mer data är alltid bättre”.
- **ENBS, inte EVSI ensamt, är beställningstestet.** En studie med högt EVSI vars kostnad äter upp det mesta av det är ett svagt förslag; beslutsregeln är förväntad nettonytta av urvalet, precis som ett affärsunderlag ställer nytta mot kostnad i stället för att bara redovisa nyttan.
- **Avtagande avkastning är uttrycklig.** Eftersom EVSI(n) stiger med `n/(n+n0)` fördubblar en fördubblad pilotstorlek aldrig dess värde — en formell version av ingenjörens instinkt att ett större experiment har ett avtagande marginellt informationsvärde.

## Fallgropar

- **Att tillämpa normalapproximationen utanför dess antaganden.** Den gäller bara för ungefär konjugerad osäkerhet i en enda parameter; en verkligt olinjär eller flerparametrig beslutsmodell behöver fullständig nästlad Monte Carlo, inte den här genvägen.
- **Att jämföra EVSI med enbart kontantkostnad.** EVSI måste vägas mot studiens *fulla* kostnad, inklusive dess egen kostnad för beslutsfördröjning — se [kostnad för fördröjning](../kostnad-för-fördröjning/) — inte bara studiens faktura.
- **Att behandla EVSI > EVPI som ett verkligt fynd.** EVSI kan per konstruktion aldrig överstiga EVPI; en beräkning som ger det är en modellbugg, inte en upptäckt.

## Källor

- Ades AE, Lu G, Claxton K. ”Expected value of sample information calculations in medical decision modeling.” Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. ”The value of information and optimal clinical trial design.” Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. ”When is a model-based value of information analysis feasible?” Medical Decision Making 2014.
