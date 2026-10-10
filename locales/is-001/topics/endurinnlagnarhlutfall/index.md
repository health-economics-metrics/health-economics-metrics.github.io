# Endurinnlagnarhlutfall

30 daga endurinnlagnarhlutfall er hlutfall útskrifaðra sjúklinga sem koma aftur sem bráðatilfelli innan 30 daga. Það er klassískur mælikvarði heilbrigðiskerfisins á *gæði útskriftar* — og hann ber bein fjárhagsleg viðurlög.

## Hvers vegna það skiptir máli

Endurinnlögn þýðir að fyrsta útskrift hélt ekki: ótímabær útskrift, misheppnuð lyfjaafhending, engin eftirfylgni eða skortur á félagslegum stuðningi. Greiðendur refsa fyrir hana skýrt — bandaríska Hospital Readmissions Reduction Program dregur allt að 3% af Medicare-greiðslum sjúkrahúss; NHS hefur sögulega ekki greitt fyrir endurinnlagnir innan 30 daga sem hægt var að komast hjá. Forðun endurinnlagna er því einn fárra ávinningsflokka sem er *beint* reiðufjártengdur fyrir veitanda, ekki bara geta.

## Stærðfræðin

```
Endurinnlagnarhlutfall = bráðaendurinnlagnir innan 30 daga / upphafsútskriftir × 100

Áhættustaðlaður samanburður leiðréttir fyrir sjúklingablöndu; viðurlagaáætlanir
bera saman raunverulegt gegn væntanlegu fyrir sambærileg sjúkrahús.

Verðmæti forðunar = endurinnlagnir sem komist er hjá × (kostnaður á endurinnlagnartímabil
                     + viðurlagaáhætta á endurinnlögn)
```

## Dæmi útreiknað

Útskriftarstuðningsapp fyrir hjartabilun (einkennarakning, þyngdarviðvaranir, lyfjaáminningar, stigmögnun til hjúkrunarfræðings): 2.000 útskriftir á ári, grunnlínuhlutfall endurinnlagna 18%, rannsókn sýnir 14% með appinu.

```
Endurinnlagnir sem komist er hjá = 2.000 × (0,18 − 0,14) = 80/ár
Kostnaður á endurinnlagnartímabil ≈ 3.500 £ → 280.000 £/ár af meðferðarkostnaði sem komist er hjá
Auk viðurlaga-/óaðgreiðsluáhættu á þeim tímabilum.
Kostnaður apps: 2.000 × 60 £ = 120.000 £/ár

Nettó ≈ +160.000 £/ár, áður en nokkur QALY-fullyrðing um versnun sem forðað er.
```

Talan sem verja þarf er 4 prósentustiga áhrifin: þau verða að koma úr stýrðum samanburði, því endurinnlagnarhlutföll sveiflast með sjúklingablöndu og árstíð.

## Tengsl við hugbúnaðarverkfræði

Endurinnlögn er **breytingabilanahlutfall** heilbrigðiskerfisins (sjá [DORA-mælikvarðar](../dora-mælikvarðar/)): vinna sem „var send“ og skilaði sér aftur innan 30 daga. Hliðstæðurnar liggja djúpt — enduropnuð verkefni og atvik vegna afturfarar benda á lélega „útskriftargæði“ (veik staðfesting, ótímabær lokun, vantar framseljunarskjöl); viðurlagabókhald (teymið sem lagfærir borgar, ekki það sem tekur á móti) breytir hegðun; og báðar greinar lærðu sama lærdóm, að ýta hráum afköstum (hraðari útskrift, hraðari sending) án þess að fjárfesta í framsalinu breytir bara sýnilegum biðröðum í ósýnilega endurvinnslu. „30 daga enduropnunarhlutfall“ á heima á hverju teymismælaborði sem fagnar hringrásartíma.

## Gildrur

- **Leikir með endurmerkingu**: endurinnlagnir kóðaðar sem eftirlitsdvalir eða ný ástönd; úttektaðu skilgreininguna.
- **Allar orsakir á móti tengdri orsök**: 30 daga allar orsakir inniheldur í raun ótengda atburði; viðurlög nota yfirleitt allar orsakir einmitt vegna þess að „tengt“ er leikjanlegt.
- **Blinda á sjúklingablöndu**: sjúkrahús sem þjónar veikara, fátækara þýði leggur oftar aftur inn af ástæðum sem ekkert app lagar — áhættuleiðréttu áður en þú berð saman.

## Heimildir

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
