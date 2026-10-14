# Tímaskeið

Tímaskeiðið er tímabilið sem greining telur kostnað og áhrif yfir. Það verður að vera nógu langt til að fanga alla marktæka mismun á þeim valkostum sem eru bornir saman.

## Hvers vegna það skiptir máli

Veldu stutt tímaskeið og þú missir af seinum ávinningi (forvarnir) og seinum kostnaði (viðhald). Veldu of langt og allt drukknar í óvissu. Heilbrigðistæknimat notar oft **ævilangt** tímaskeið fyrir meðferðir sem hafa áhrif á dánartíðni; [fjárhagsáhrifagreining](../fjárlagaáhrifagreining/) notar vísvitandi stutt **1–5 ára** tímaskeið því spurning hennar er greiðslugeta, ekki virði. Tímaskeiðið er yfirlýst líkanaval, og ósamræmd tímaskeið eru klassísk leið til að spila samanburð.

## Stærðfræðin

Tímaskeiðið er efri mörk summunnar í hverju mati:

```
Núvirt nettóvirði = Σ (t = 0 … T) [ (Ávinningur_t − Kostnaður_t) / (1 + r)^t ]

T = tímaskeið (ár)
r = afvöxtunarhlutfall (sjá discounting-and-time-preference.md)
```

Niðurstöður ætti að setja fram með tímaskeiðið tilgreint, og helst sýna við mörg tímaskeið.

## Dæmi útreiknað

Rafrænt lyfjaávísanakerfi kostar 2 milljónir £ í innleiðingu og 200.000 £/ár í rekstri. Það kemur í veg fyrir lyfjamistök að verðmæti 600.000 £/ár (meðferðarkostnaður forðaðs skaða).

Nettóávinningur eftir tímaskeiði (án afvöxtunar, til skýrleika):

```
Tímaskeið 1 ár:   −2.000.000 − 200.000 + 600.000  = −1.600.000 £
Tímaskeið 3 ár:   −2.000.000 + 3 × 400.000        = −800.000 £
Tímaskeið 5 ár:   −2.000.000 + 5 × 400.000        =  0 £
Tímaskeið 10 ár:  −2.000.000 + 10 × 400.000       = +2.000.000 £
```

Kerfið „fellur“ við hvert tímaskeið undir 5 árum og „stenst“ við 10. Hvorugt er rétta svarið; heiðarleg skýrsla tilgreinir jafnvægispunktinn og réttlætir tímaskeiðið með líftíma kerfisins (hve langur tími þar til það er endurnýjað?).

## Tengsl við hugbúnaðarverkfræði

- **Mat á tólum yfir eina sprettlotu** missir kerfisbundið af dýfu námsferilsins (kostnaður fram-hlaðinn) og langtímaviðhaldi (kostnaður aftur-hlaðinn). Tilraunir með gervigreindaraðstoðarmenn fyrir kóðun sem mældar eru í viku 2 fanga hámark nýjungagirni, ekki stöðugt ástand.
- **Samningslengd ≠ ávinningstímaskeið.** Eins árs SaaS-samningur má samt meta yfir 5 ár ef þú býst raunhæft við endurnýjun — en segðu það.
- **Rök um endurnýjun arfleifðarkerfa** ættu að ná til trúverðugs endaloka gamla kerfisins, ekki handahófskenndrar kringlóttrar tölu.

## Gildrur

- **Tímaskeiðsinnkaup**: að velja það tímaskeið sem lætur valkost þinn vinna. Skráðu tímaskeiðið fyrirfram áður en niðurstöður eru reiknaðar.
- **Ólík tímaskeið fyrir ólíka valkosti** í sama samanburði.
- **Ævilöng tímaskeið án afvöxtunar eða óvissugreiningar** — ávinningur á ári 30 á nafnvirði er skáldskapur. Paraðu löng tímaskeið við [næmnigreiningu](../næmnigreining/).

## Heimildir

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
