# Alavirran resurssien optimointi

Alavirran resurssien optimointi keskittyy sen roolin tai prosessin vapauttamiseen, jota kaikki muut odottavat, sen sijaan että optimoitaisiin satunnaisesti.

## Miksi se on tärkeä

Ei-pullonkaulavaiheiden parantaminen hoitopolulla ei vaikuta kokonaisläpimenoaikaan — vain itse pullonkaula määrittää järjestelmäkapasiteetin.

## Matematiikka

```
Järjestelmän läpimeno = rajoittavan vaiheen (pullonkaulan) läpimeno
```

## Ratkaistu esimerkki

Diagnostisella polulla on viisi vaihetta; vaihe 3 (kuvantamisen tulkinta) on pisin odotusaika. Vaiheiden 1, 2, 4 ja 5 nopeuttaminen ei vaikuta kokonaisläpimenoaikaan ennen kuin vaihe 3 korjataan.

## Yhteys ohjelmistokehitykseen

Suora analogia rajoitteiden teorialle sovellettuna CI/CD-putkiin — nopeuta hitainta vaihetta, ei satunnaista vaihetta.

## Sudenkuopat

- **Resurssien investoiminen ei-pullonkaulaprosesseihin, koska niitä on helpompi parantaa.**
- **Pullonkaulan uudelleentunnistamatta jättäminen edellisen ratkaisemisen jälkeen (pullonkaula siirtyy).**

## Lähteet

- Goldratt EM, The Goal.
- NHS Improvement, process improvement guidance.
