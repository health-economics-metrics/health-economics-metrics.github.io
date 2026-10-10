# Net Parasal Fayda (NPF)

NPF, bir maliyet-etkililik sonucunu tek bir para değerine çevirir: ödeme istekliliği eşiğinde fiyatlanan sağlık kazancı eksi maliyet. İkizi Net Sağlık Faydası (NSF) aynı kuralı sağlık birimleriyle ifade eder.

## Neden önemli

Oranlar ([ICER'ler](../artımlı-maliyet-etkililik-oranı/)) beceriksizdir: sıfır etki yakınında patlarlar, belirsizlik çekimleri arasında ortalaması alınamaz ve üç veya daha fazla seçeneği temiz biçimde sıralayamazlar. NPF bunların hepsini düzeltir — doğrusaldır, bu yüzden seçenekleri sıralayabilir, Monte Carlo çekimlerinin ortalamasını alabilir ve katkıları ayrıştırabilirsiniz. Ayrıca her mühendisin zaten bildiği sağlık ekonomisi matematiği biçimidir: *değer eksi maliyet*.

## Matematik

```
NPF = (ΔE × λ) − ΔM
NSF = ΔE − (ΔM / λ)

ΔE = artımlı etki (örn. QALY'ler)
ΔM = artımlı maliyet
λ  = ödeme istekliliği eşiği (bkz. willingness-to-pay-thresholds.md)

Karar kuralı: NPF > 0 ise benimseyin (eşdeğeri NSF > 0).
Alternatifler arasında: en yüksek NPF'yi seçin.
```

NPF > 0 ⇔ ICER < λ (ΔE > 0 iken), yani iki kural uyuşur — NPF yalnızca daha iyi davranır.

## Çözümlü örnek

Bir diyabet hizmeti için üç seçenek, 1.000 hasta başına, λ = 20.000 £/QALY:

```
Seçenek             ΔM          ΔE (QALY)   NPF = 20.000×ΔE − ΔM
Uygulama + koçluk   400.000 £   30          600.000 − 400.000 = 200.000 £
Yalnızca uygulama   150.000 £   12          240.000 − 150.000 = 90.000 £
Ek klinikler        700.000 £   32          640.000 − 700.000 = −60.000 £
```

Ek klinikler en çok QALY kazanır ama bu eşikte değer yok eder (NPF < 0). Uygulama + koçluk kazanır. NPF'nin *üçünü birden sıralamanıza* izin verdiğine dikkat edin — ikili ICER'ler [baskınlık ve verimlilik sınırı](../baskınlık-ve-verimlilik-sınırı/)ndaki sınır prosedürüne ihtiyaç duyar ve aynı cevaba ulaşır.

Kazananın NSF görünümü: 30 − 400.000/20.000 = 30 − 20 = **10 net QALY** — aynı paranın başka yerde üreteceğinin ötesinde kazanılan sağlık.

## Yazılım mühendisliği bağlantısı

`(kazanılan saatler × yüklü saatlik ücret) − araç maliyeti` — gündelik araç iş gerekçesi — tam anlamıyla λ = yüklü mühendis maliyeti olan bir NPF hesaplamasıdır. Sağlık ekonomisinin eklediği iki yükseltme:

- **λ'yı sabit değil değişken yapın.** NPF'yi λ'ya ("mühendis saatinin değeri") karşı çizin ve kararın nerede döndüğünü gösterin; farklı paydaşlar matematiğinizi yeniden yapmadan kendi değerlemelerini uygulayabilir.
- **NSF düşüncesi**: "bu platform 5.000 mühendis saati kazandırır ama yüklenici kapasitesinden 3.000 mühendis saati satın alacak bütçeyi tüketir — net 2.000 saat" fırsat maliyeti karşılaştırmasını kapasite birimlerinde zorlar. Bkz. [fırsat maliyeti](../fırsat-maliyeti/).

## Tuzaklar

- **Eşiği gizlemek**: λ belirtilmeden NPF anlamsızdır; NPF'yi 20 bin £ ve 30 bin £'da raporlayın veya eğriyi çizin.
- **NPF'yi minik etkileri aklamak için kullanmak**: devasa bir nüfus çarpı önemsiz kişi başı etki büyük bir NPF üretebilir — kişi başı etkileri yanında raporlayın.
- **NPF'nin ΔM ve ΔE'deki her belirsizliği devraldığını unutmak** — [olasılıksal duyarlılık analizi](../olasılıksal-duyarlılık-analizi/) ile eşleştirin.

## Kaynaklar

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
