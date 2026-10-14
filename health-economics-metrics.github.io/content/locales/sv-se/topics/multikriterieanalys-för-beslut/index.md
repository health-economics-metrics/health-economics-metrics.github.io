# Multikriterieanalys för beslut (MCDA)

Multikriterieanalys för beslut (MCDA) är en poängmodell med viktad summa som används i medicinsk teknikutvärdering när en enda ICER-/betalningsviljetröskel inte fångar allt en beslutsfattare bryr sig om: rättvisa, otillgodosett behov, innovation, budgeteffekt, sjukdomens svårighetsgrad. Varje kriterium får en vikt som speglar dess betydelse (inhämtad från intressenter, vikter som summerar till 1), varje alternativ får ett normaliserat poäng per kriterium (vanligtvis 0–1), och totalpoängen är den viktade summan — samma matematiska form som ett poängkort för val av mjukvaruleverantör.

## Varför det är viktigt

MCDA används i ramverk som EVIDEM och av vissa HTA-organ vid bedömningar av särläkemedel/sällsynta sjukdomar, där ett strikt tröskelangreppssätt med kostnad per QALY anses för snävt för att fånga allt som spelar roll i ett beslut. ISPOR:s MCDA Emerging Good Practices Task Force formaliserade vägledning om god praxis för att inhämta vikter och poäng på ett försvarbart sätt, just därför att ett informellt viktat beslut är lätt att konstruera och lätt att manipulera. När en hälsoteknik verkligen har värdedimensioner som en enda [betalningsviljetröskel](../betalningsviljetrösklar/) inte kan representera — svårighetsgrad, innovation, rättvisa — ger MCDA beslutsfattare en uttrycklig, granskningsbar struktur för att kombinera dem, i stället för ett outtalat omdöme.

## Matematiken

```
MCDA-poäng = Σ_i (vikt_i × poäng_i)

vikterna bör summera till 1 (inhämtade med intressentmetoder som
swing-viktning eller Analytic Hierarchy Process)
```

## Genomarbetat exempel

En HTA-kommitté poängsätter en digital terapi på fyra kriterier:

```
Kriterium                          Vikt     Poäng   Vikt × Poäng
Klinisk nytta                      0,4      0,8     0,32
Kostnadseffekt                     0,3      0,5     0,15
Sjukdomens svårighet / otillgodosett behov 0,2  0,9  0,18
Innovation                         0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Vikterna summerar till 1,0 (0,4 + 0,3 + 0,2 + 0,1), och MCDA-poängen är 0,71 (0,32 + 0,15 + 0,18 + 0,06). Kommittén jämför 0,71 med en i förväg överenskommen tröskel, eller rangordnar den mot konkurrerande tekniker som poängsatts på samma sätt.

## Koppling till mjukvaruutveckling

Detta är exakt samma matematik som ett viktat poängkort för leverantörsval, en utvärderingsmatris för en RFP eller en poängmodell för prioritering av funktioner — se [bygga kontra köpa](../bygga-kontra-köpa/), ett klassiskt användningsfall för viktade poängkort vid mjukvaruupphandling. Det är också värt att ställa den mot [WSJF och CD3](../wsjf-och-cd3/): WSJF/CD3 är en *kvotbaserad* prioriteringsmetod (kostnad för fördröjning delat med jobbstorlek eller varaktighet), medan MCDA är en viktad *summa*. MCDA och WSJF/CD3 är två strukturellt olika svar på ”hur rangordnar vi konkurrerande alternativ”, och att veta vilket ett givet beslut faktiskt kräver — additivt värde över oberoende kriterier, eller värdetäthet per enhet knapp kapacitet — betyder mer än vilken formel som ser mest rigorös ut.

## Fallgropar

- **Skevhet vid inhämtandet av vikter**: den som sätter vikterna förutbestämmer i praktiken rangordningen, så en ”formel” kan tvätta ett politiskt eller kommersiellt beslut till en objektiv beräkning. Dokumentera vem som satte vikterna och hur.
- **Dubbelräkning av ett kriterium som redan fångats någon annanstans**: att poängsätta ”kostnadseffektivitet” som ett kriterium *och dessutom* separat poängsätta ”kostnadseffekt” övervikter pengar i förhållande till de andra kriterierna utan att någon avsett det.
- **Skenbar precision**: en viktad poäng med två decimaler (0,71) antyder större stringens än de underliggande intressentbedömningarna på en skala 0–10 faktiskt bär, och variationen mellan bedömare i de bedömningarna redovisas ofta inte alls.

## Källor

- Thokala P, Devlin N, Marsh K, et al. ”Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force.” Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. ”Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications.” BMC Health Serv Res. 2008;8:270.
