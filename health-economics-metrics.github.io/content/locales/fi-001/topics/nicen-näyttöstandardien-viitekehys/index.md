# NICEn näyttöstandardien viitekehys

NICEn näyttöstandardien viitekehys määrittää riskiportaiset näyttövaatimukset digitaalisille terveysteknologioille, matalan riskin hyvinvointisovelluksista korkean riskin diagnostisiin työkaluihin.

## Miksi se on tärkeä

Digitaalisten terveystuotteiden ei tarvitse kaikkien täyttää samaa näyttörimaa — viitekehys mukauttaa vaatimukset riskitasoon.

## Matematiikka

```
Näyttötaso = f(toiminnallinen riskiluokka, kliininen riskitaso)
```

Ei numeerista kaavaa; se on luokitusjärjestelmä vastaavine näyttökynnyksineen.

## Ratkaistu esimerkki

Stressinhallintasovellus kuuluu tasoon 1 (kuvaileva näyttö riittää); tekoälypohjainen diagnostiikkatyökalu syövän havaitsemiseen kuuluu tasoon 3b (satunnaistetut kontrolloidut tutkimukset vaaditaan).

## Yhteys ohjelmistokehitykseen

Muistuttaa riskiperusteisia testausvaatimuksia — sisäinen työkalu tarvitsee vähemmän tiukkaa validointia kuin potilasturvallisuuskriittinen järjestelmä.

## Sudenkuopat

- **Työkalun virheellinen luokittelu alempien näyttövaatimusten täyttämiseksi.**
- **Näyttövaatimusten tarkistamatta jättäminen tuotteen toiminnallisuuden muuttuessa.**

## Lähteet

- NICE, Evidence Standards Framework for digital health technologies.
- NHS Digital, digital technology assessment criteria.
