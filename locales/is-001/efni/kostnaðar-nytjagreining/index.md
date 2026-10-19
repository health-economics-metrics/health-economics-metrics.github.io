# Kostnaðar-nytjagreining (CUA)

CUA er kostnaðarhagkvæmnigreining með **almennri útkomu vegna óska** — nánast alltaf [QALY](../gæðaleiðrétt-lífár/) (eða [DALY](../fötlunarleiðrétt-lífár/) sem komist er hjá). Þar sem útkomueiningin er altæk getur CUA borið saman inngrip þvert á gerólíka sjúkdóma.

## Hvers vegna það skiptir máli

Landsbundin heilbrigðisþjónusta verður að velja milli krabbameinslyfs, geðheilbrigðisapps og skurðaðgerðarvélmennis af einum fjárlögum. Náttúrulegar einingar geta ekki borið þetta saman; QALY geta. CUA er því viðmiðunaraðferðin hjá NICE og flestum HTA-stofnunum: úttak hennar — kostnaður á QALY, metinn gegn [þröskuldi](../greiðsluviljaþröskuldar/) — er það næsta sem heilbrigðisstefna hefur að altæku gengi. Ef þú vilt að hugbúnaðurinn þinn sé fjármagnaður *í stað einhvers annars* er CUA vettvangurinn.

## Stærðfræðin

```
ICUR = ΔKostnaður / ΔQALY      (ICER með QALY sem áhrifaeiningu)

ΔQALY = Σ (tímalengd_i × nytjar_i)_nýtt − Σ (tímalengd_i × nytjar_i)_gamalt
```

Nytjar úr staðfestum mælitækjum ([EQ-5D](../eq-5d/)); kostnaður og QALY bæði [núvirt](../núvirðing-og-tímaforgangur/) á 3,5% (viðmiðunartilvik NICE); óvissa með [PSA](../líkindanæmnigreining/).

## Dæmi útreiknað

HAM-app við miðlungs kvíða á móti biðlista eftir einstaklingsmeðferð, á sjúkling:

```
Kostnaður: leyfi apps + stuðningur  250 £
           meðferð sem víkur        −680 £   (40% notenda þurfa hana ekki lengur)
           ΔC = 250 − 680 = −430 £ (sparar fé)

QALY:      6 mánuðir á nytjum 0,76 í stað 0,68 meðan beðið er
           ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALY
```

ΔC < 0 og ΔE > 0: appið **drottnar** — betra og ódýrara, ekkert hlutfall þarf. Hefði forsendan um að meðferð víki verið aðeins 10% væri ΔC = 250 − 170 = +80 £ og ICUR = 80 / 0,04 = **2.000 £/QALY** — enn langt undir 20.000 £. Rökin lifa af jafnvel þótt lykilforsendan sé skorin niður: þannig lítur sterk CUA út (og [hvirfilmyndin](../næmnigreining/) sannar það).

## Tengsl við hugbúnaðarverkfræði

Djúphugmynd CUA — *ein samsett, óskavegin eining til að bera saman ólíka hluti* — er mynstrið til að bera saman ólíkar verkfræðifjárfestingar (öryggi á móti upplifun forritara á móti áreiðanleika). Heiðarlegu kostirnir eru annaðhvort verjanleg samsett eining (sjaldgæft) eða skýr [kostnaðar-afleiðingatafla](../kostnaðar-afleiðingagreining/) (venjulegt). Það sem CUA varar við er falska samsetningin: vegin „áhrifaeinkunn“ þar sem vogirnar voru stilltar eftir á til að láta uppáhaldskostinn vinna. Heilsuhagfræðin eyddi áratugum í að staðla öflun nytja einmitt til að vogirnar komi á undan samanburðinum.

## Gildrur

- **Nytjaaukning undir næmi mælitækisins** (sjá minnsta klínískt mikilvæga mun í [sjúklingatilkynntum útkomum](../sjúklingatilkynntar-útkomur/)) — örlítið ΔE margfaldað með stórum þýðum er klassískt þvottabragð.
- **Vantar tilfærslu á umönnun viðmiðs** — stærsti kostnaðarliður stafrænna vara er oft það sem þær koma í stað.
- **Varpanir ópreferensíala stiga yfir í nytjar** með óstaðfestum umbreytingartöflum.

## Heimildir

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
