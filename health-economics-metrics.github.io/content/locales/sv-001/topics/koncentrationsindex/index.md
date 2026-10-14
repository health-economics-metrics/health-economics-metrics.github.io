# Koncentrationsindex

Koncentrationsindexet (Wagstaff, Paci, van Doorslaer, 1991) är det vedertagna statistiska måttet på socioekonomisk ojämlikhet i en hälsovariabel och sträcker sig från −1 till 1. Negativt betyder att hälsovariabeln är koncentrerad till socioekonomiskt missgynnade, positivt att den är koncentrerad till mer välbeställda, och noll att det inte finns någon konsekvent socioekonomisk gradient. Det gör en misstanke om ojämn fördelning till ett enda jämförbart tal.

## Varför det är viktigt

Ett program kan se effektivt ut sammantaget och ändå leverera sin nytta nästan helt till människor som redan hade det bättre. Just sådana fördelningsfrågor följer [räckvidd och rättvisa](../räckvidd-och-rättvisa/) beskrivande — räckvidd stratifierad efter deprivationskvintil, ett rättvisegap mellan översta och understa gruppen — men en stratifierad tabell går inte att pressa ihop till en enda trendlinje och är svår att jämföra mellan två helt olika interventioner mätta på olika skalor. Koncentrationsindexet löser båda problemen: det beräknas på samma sätt för vilken hälsovariabel som helst mot vilken socioekonomisk rangordning som helst, så att en nationell hälso- och sjukvård kan följa om ojämlikheten i en viss digital tjänst ökar eller minskar från utgåva till utgåva, och jämföra fördelningsrättvisan i en apputrullning med till exempel ett screeningprogram på samma normaliserade skala.

## Matematiken

```
CI = (2 / medelvärde(hälsovärden)) × Kov(hälsovärden, socioekonomiska_rangordningar)

Kov(X, Y) = medelvärde(X × Y) − medelvärde(X) × medelvärde(Y)   (populationskovarians)

socioekonomiska_rangordningar: varje persons bråkrang i den socioekonomiska
fördelningen, i [0, 1] (0 = mest missgynnad, 1 = mest gynnad; för
grupperade/klassindelade data enligt konvention gruppens mittpunktsrang)
```

Detta är den ”praktiska kovariansformeln” (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Världsbanken 2008) — praktikernas standardgenväg för att beräkna koncentrationsindexet direkt från parade observationer, utan att först rita och integrera under en koncentrationskurva.

## Genomarbetat exempel

Ett självrapporterat poäng för god hälsa (1 = sämst, 4 = bäst) observerat över fyra lika stora socioekonomiska kvartiler, var och en representerad av kvartilens mittpunktsrang:

```
hälsovärden                  = [1,0, 2,0, 3,0, 4,0]
socioekonomiska_rangordningar = [0,125, 0,375, 0,625, 0,875]

medelvärde(hälsovärden)       = 2,5
medelvärde(hälsa × rang)      = medelvärde([0,125, 0,75, 1,875, 3,5]) = 1,5625
medelvärde(rangordningar)     = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Ett positivt `0,25` betyder att det här hälsopoängen är koncentrerat till den socioekonomiskt gynnade gruppen — respondenterna med högre poäng lutar mot den mer välbeställda änden av rangordningen.

## Koppling till mjukvaruutveckling

Detta är samma kovariansbaserade ojämlikhetsmätning som används i ekonomi i allmänhet (en kusin till Gini-koefficienten), och den motsvarar att mäta om en mjukvaruprodukts nytta är koncentrerad till redan gynnade användarsegment i stället för rättvist spridd — en direkt förlängning av [räckvidd och rättvisa](../räckvidd-och-rättvisa/) (RE-AIM:s ”reach”-dimension) till ett formellt statistiskt mått i stället för ett beskrivet gap. Där räckvidd och rättvisa redovisar effekt per skikt pressar koncentrationsindexet ihop hela fördelningen till ett enda tecknat tal, lämpligt som ett enskilt KPI att följa över utgåvor — praktiskt för en instrumentpanel, där en fullständig stratifierad uppdelning inte får plats.

## Fallgropar

- **Drift i teckenkonventionen**: tecknet beror på hur både hälsovariabeln och rangen är definierade — vänder man någon av dem vänds tecknet, så konventionen som använts måste alltid anges uttryckligen vid varje redovisat värde.
- **Gränsrang i stället för mittpunktsrang**: grupperade eller klassindelade socioekonomiska data (t.ex. kvintiler) kräver att varje grupps bråkrang används i dess *mittpunkt*, inte vid dess gräns, annars blir indexet skevt.
- **Att läsa ”nära noll” som ”ingen ojämlikhet”**: ett koncentrationsindex nära noll betyder ”ingen konsekvent socioekonomisk gradient”, inte ”ingen ojämlikhet” i absolut mening — motverkande ojämlikheter i olika riktningar kan ta ut varandra.

## Källor

- Wagstaff A, Paci P, van Doorslaer E. ”On the measurement of inequalities in health.” Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. ”Analyzing Health Equity Using Household Survey Data.” World Bank. 2008 — praktikernas standardhandbok, källan till den praktiska kovariansformeln som används här. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
