# Legutími (LOS)

Legutími er fjöldi daga frá innlögn á sjúkrahús til útskriftar — kjarnamælikvarði flæðisskilvirkni legudeildaþjónustu. Meðaltal bráðasjúkrahúsa í Bretlandi er um 4–5 dagar; hver umframdagur nýtir af skornum skammti rúm og útsetur sjúklinginn fyrir áhættu sem tengist sjúkrahúsvist.

## Hvers vegna það skiptir máli

Legutími drífur nánast allt í hagfræði bráðasjúkrahúsa: rúmgetu, afköst valaðgerða, bráðaflæði, mönnun. Að stytta meðallegutíma um jafnvel brot úr degi í stórum stíl losar gífurlega getu (sjá [rúmdagar sem sparast](../rúmdagar-sem-sparast/)). Legutími er einnig gæðamerki í báðar áttir — of langur bendir til ferlabilunar (seinkuð greining, útskriftarpappírar, bið eftir félagsþjónustu); of stuttur getur þýtt ótímabæra útskrift, sem kemur fram síðar sem [endurinnlagnir](../endurinnlagnarhlutfall/).

## Stærðfræðin

```
LOS (á legutímabil) = útskriftardagur − innlagnardagur
Meðal-LOS           = nýttir rúmdagar / útskriftir (skýrðu frá meðaltali OG miðgildi;
                      LOS er mjög hægri-skekkt af langdvalar-útlögum)

Samanburður krefst leiðréttingar fyrir sjúklingablöndu (aldur, greining, bráðleiki),
annars ertu að mæla hverja sjúkrahúsið leggur inn, ekki hvernig það stendur sig.
```

Lögmál Little tengir flæðisbreyturnar: `rúm í notkun = innlagnarhlutfall × meðal-LOS` — sama lögmál og stýrir hugbúnaðarbiðröðum (sjá [flæðismælikvarðar](../flæðismælikvarðar/)).

## Dæmi útreiknað

Stofnun leggur inn 40 bráðalyflækningasjúklinga á dag með meðal-LOS 6,0 daga: 240 rúm stöðugt í notkun (40 × 6). Hugbúnaður til samræmingar útskriftar (verkefnarakning, sjálfvirkni lyfja til að taka með, flutningsbókun) styttir óklíníska halann í dvölum um 0,4 daga að meðaltali.

```
Rúm sem þarf = 40 × 5,6 = 224 → 16 rúm losna samfellt
             = 16 × 365 = 5.840 rúmdagar/ár
```

Metið 5.840 rúmdagana eftir búnaði (fylla aftur/loka/slaki) samkvæmt [rúmdagar sem sparast](../rúmdagar-sem-sparast/). Taktu eftir hvað hreyfðist: ekki læknisfræði, heldur *bið* — sjúklingurinn var læknisfræðilega hæfur; kerfið var enn að sinna pappírsvinnu. Það er biðraðavandi, og hugbúnaður er góður í biðraðavanda.

## Tengsl við hugbúnaðarverkfræði

Legutími er hringrásartími sjúkrahússins, og umbótahandbókin er eins og í afhendingarflæðisvinnu: mældu þrepin (innlögn → meðferð → læknisfræðilega hæfur → raunverulega útskrifaður), finndu hvar tími safnast (það eru framsöl), fjarlægðu biðástand frekar en að bæta við getu. Hópurinn „læknisfræðilega hæfur til útskriftar en tekur enn rúm“ er útgáfa sjúkrahússins af PR sem er samþykkt en ekki sameinað. Bein hugbúnaðartækifæri: verkefnastýring útskriftar, afgreiðslutími greiningar, rafræn ávísun útskriftarlyfja, samþætting tilvísunar í félagsþjónustu.

## Gildrur

- **Skýrsla á meðaltali einu** — útlagar ráða; fallandi meðaltal getur falið vaxandi langdvalarhala.
- **Engin leiðrétting fyrir sjúklingablöndu** í fullyrðingum um fyrir/eftir: innlagnarþröskuldar breytast eftir árstíðum og til langs tíma.
- **Stytting legutíma sem birtist aftur sem endurinnlögn** — paraðu alltaf fullyrðingar um LOS við 30 daga endurinnlagnagögn.

## Heimildir

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
