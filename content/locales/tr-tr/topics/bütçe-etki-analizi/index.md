# Bütçe Etki Analizi (BIA)

BIA, bir müdahaleyi benimsemenin belirli bir ödeyicinin **bütçesine** önümüzdeki 1–5 yılda ne yaptığını tahmin eder. *Karşılanabilirliği* yanıtlar; maliyet-etkililik ise *değeri* yanıtlar. Bir teknoloji mükemmel değer olup yine de karşılanamaz olabilir — ya da karşılanabilir olup düşük değerde. Ciddi değerlendirmeler ikisini de ister.

## Neden önemli

Mali müdürün sorusu asla "ICER nedir?" değildir — "bu gelecek yılın bütçesine ne yapar?" dır. ISPOR iyi uygulama kılavuzu (alan standardı) şunları belirtir: ödeyicinin kendi perspektifi, 1–5 yıllık ufuk, *iskonto edilmemiş* yıllık nakit akışları, gerçekçi benimseme eğrileri ve senaryo (olasılıksal değil) belirsizliği. NICE, maliyet-etkililikle birlikte bütçe etkisi bilgisi ister; İngiltere'de ulusal bütçe etkisi yılda ~20 milyon £'ın üzerinde olan bir ürün, ICER'inden bağımsız olarak ticari müzakereyi tetikler.

## Matematik

```
BI_yıl_t = Maliyet_yenili_senaryo(t) − Maliyet_mevcut_senaryo(t)

Maliyet_senaryo(t) = hasta grupları üzerinden Σ:
   uygun nüfus(t) × benimseme(t) × hasta başına net maliyet(t)

hasta başına net maliyet = müdahale maliyeti − yerinden edilen bakım maliyeti + tetiklenen bakım maliyeti
```

Temel modelleme seçimleri: uygun nüfus büyümesi, benimseme eğrisi (benimseme asla anlık değildir), yeni seçeneğin neyi yerinden ettiği ve *tetiklediği* talep (kolay erişim → daha çok kullanıcı).

## Çözümlü örnek

2 milyon kişiyi kapsayan bir ödeyici, hasta/yıl 300 £'lık bir dijital terapötiği değerlendiriyor; üyelerin %1,5'i uygun (30.000); benimseme 3 yılda %20 → %40 → %60; her kullanıcı yılda 120 £'lık başka bakımı yerinden ediyor.

```
Kullanıcı başına net maliyet = 300 − 120 = 180 £

1. yıl: 30.000 × 0,20 × 180 = 1,08 milyon £
2. yıl: 30.000 × 0,40 × 180 = 2,16 milyon £
3. yıl: 30.000 × 0,60 × 180 = 3,24 milyon £
```

Ürünün ICER'i harika bir 8.000 £/QALY olsa bile ödeyici 3. yıla kadar 3,24 milyon £ *yeni para* bulmalıdır — yerinden edilen 120 £ diğer bütçe satırlarına ince yayılır ve nakit olarak serbest kalmaz (bkz. [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/)). Birim başına değer ve karşılanabilirlik bu yüzden ayrı engellerdir.

## Yazılım mühendisliği bağlantısı

BIA, koltuk başına YG iddiasının tam olarak CFO'ya dönük tamamlayıcısıdır: "geliştirici başına maliyet-etkili, ama bu mali yıl kurum genelinde devreye almayı karşılayabilir miyiz?" Lisans kademelerini, bir benimseme S-eğrisini, yalnızca eski sözleşmeler gerçekten sona erdiğinde nakit serbest bırakan yerinden edilen araç harcamasını ve tetiklenen kullanımı (daha ucuz CI → daha çok CI) modelleyin. YG ile birlikte 3 yıllık bir bütçe etkisi tablosu sunmak, bir kurumsal araç teklifini finans açısından inandırıcı kılar. Yayımlanmış bir bütçe etkisi toplamını sitelere, kohortlara veya mali yıllara bölmek — ve parçaların yayımlanan rakamla tam olarak uzlaşmasını sağlamak — tam olarak [kuruşu kuruşuna maliyet tahsisi](../kuruşu-kuruşuna-maliyet-tahsisi/)dir; toplamı besleyen çok sayıdaki kalemi ilk etapta toplamak ise [para birimi güvenli maliyet toplulaştırma](../para-birimi-güvenli-maliyet-toplulaştırma/)dır.

## Tuzaklar

- **Anlık benimseme hayali**: 1. yıl etkisinin kararlı durum benimsemesiyle hesaplanması.
- **Yerinden edilen maliyeti dağınık kapasiteyken nakit saymak**.
- **Tetiklenen talebi yok saymak** — erişim iyileştirmeleri uygun nüfusun kullanımını artırır.
- **BIA ve CEA ufuklarını/iskontosunu karıştırmak**: BIA tasarım gereği kısa ufuklu, iskontosuz, ödeyiciye özgüdür.

## Kaynaklar

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
