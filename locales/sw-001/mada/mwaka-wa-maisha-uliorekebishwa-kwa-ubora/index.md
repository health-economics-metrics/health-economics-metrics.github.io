# Mwaka wa Maisha Uliorekebishwa kwa Ubora (QALY)

QALY ni mwaka mmoja wa maisha ulioishiwa katika afya kamilifu. Huchanganya *muda gani* watu wanaishi na *vizuri kiasi gani* wanaishi, ili mwaka katika afya duni uhesabiwe chini ya QALY moja — ukifanya uingiliaji wa afya tofauti kabisa ulinganishike kwenye kipimo kimoja.

## Kwa nini ni muhimu

QALY ndiyo sarafu ya pamoja ya tathmini ya teknolojia ya afya. NICE (Uingereza) huthamini faida za afya kwa **£20,000–£30,000 kwa kila QALY**: uingiliaji unaonunua QALY kwa bei nafuu kuliko kizingiti hicho kwa kawaida hupendekezwa; ule unaozinunua kwa ghali zaidi kwa kawaida hukataliwa. Namba hii moja ndiyo jinsi huduma ya afya ya taifa inavyolinganisha dawa ya saratani, kubadilisha nyonga, na programu ya triage kwenye mhimili mmoja. Ikiwa programu yako inaweza kudai QALY kwa kuaminika — kwa kuzuia kuzorota, kuharakisha matibabu, au kuboresha usalama — unaweza kuweka bei ya thamani yake ya afya kwa sarafu ileile kama tiba yenyewe.

## Hisabati

```
QALY = Σ_i (muda_i × matumizi_i)

muda_i     = miaka iliyotumika katika hali ya afya i
matumizi_i = uzani wa ubora wa hali i, uliowekwa nanga na 1 = afya kamilifu, 0 = amekufa
             (thamani hasi zinaruhusiwa kwa hali mbaya kuliko kifo)
```

Uzani wa matumizi hutoka vyombo vilivyothibitishwa, kwa kawaida [EQ-5D](../eq-5d/). *Faida* ya QALY kutoka uingiliaji ni tofauti kati ya mitiririko ya QALY na bila huo, [ikipunguzwa thamani](../kupunguza-thamani-na-upendeleo-wa-muda/) kwa 3.5%/mwaka katika kesi ya rejea ya NICE.

## Mfano uliokokotolewa

Mgonjwa anasubiri matibabu ya moyo katika hali yenye matumizi 0.6. Matibabu yanamrudisha kwenye matumizi 0.85.

- **Akitibiwa sasa**: mwaka 1 kwa 0.85 = QALY 0.85 mwaka huu.
- **Akitibiwa baada ya ucheleweshaji wa miezi 6**: 0.5 × 0.6 + 0.5 × 0.85 = QALY 0.725.
- **Hasara ya QALY kwa mgonjwa kutokana na ucheleweshaji**: 0.85 − 0.725 = **QALY 0.125**.

Ikithaminiwa kwa kizingiti cha NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 za thamani ya afya iliyopotea kwa mgonjwa kwa kila ucheleweshaji wa miezi 6**. Ikiwa programu inayoharakisha njia inaondoa ucheleweshaji huo kwa wagonjwa 400/mwaka, thamani ya afya ni QALY 50 ≈ **£milioni 1.0–£1.5/mwaka** — kabla ya kuhesabu akiba yoyote ya kiutendaji.

## Uhusiano na uhandisi wa programu

- **Njia za haraka = QALY za mapema.** Chochote kinachofupisha [rufaa hadi matibabu](../rufaa-hadi-matibabu/) hubadilisha kukosa raha ya muda wa kusubiri kuwa faida ya afya, inayothaminiwa kama ilivyo hapo juu.
- **Usalama = QALY zilizohifadhiwa.** Makosa ya dawa na utambuzi uliokosa ulioepukwa ni hasara za QALY zilizoepukwa.
- **QALY pia ni kiolezo cha usanifu wa kipimo**: mchanganyiko wa kiasi × ubora, na uzani wa ubora unaopatikana kutoka chombo sanifu. "Mwaka wa mhandisi uliorekebishwa kwa ubora" (muda × uzani wa utafiti wa DevEx) ni ujenzi ule ule — tazama [SPACE na DevEx](../space-na-devex/).
- Ili kubadilisha QALY kuwa fedha kwa hoja ya biashara, tumia [manufaa halisi ya kifedha](../manufaa-halisi-ya-kifedha/); kuzibadilisha kuwa uamuzi, tumia [vizingiti vya utayari wa kulipa](../vizingiti-vya-utayari-wa-kulipa/).

## Mitego

- **Kubuni uzani wa matumizi.** Uzani lazima utoke kwenye vyombo vilivyothibitishwa (EQ-5D) na seti za thamani zilizochapishwa, si hisia.
- **Kudai QALY bila njia ya kisababishi.** "Programu yetu inaboresha ustawi" si dai la QALY; "inaondoa wiki X za kusubiri katika hali ya matumizi 0.6" ni dai.
- **Kuhesabu mara mbili**: kudai faida ya QALY na akiba ya gharama za kuzorota kulikoepukwa kuleule kunahitaji uangalifu kwamba ni tofauti kweli.
- **Madoa ya upofu wa usawa**: QALY huthamini mwaka wa kupanua maisha kwa matumizi ya msingi, jambo linaloweza kuwadhuru watu wenye ulemavu — sababu ya ICER (Marekani) kuripoti pia evLYG (tazama [miaka ya maisha iliyopatikana](../miaka-ya-maisha-iliyopatikana/)).

## Vyanzo

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
