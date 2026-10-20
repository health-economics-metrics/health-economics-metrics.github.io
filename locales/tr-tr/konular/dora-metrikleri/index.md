# DORA Metrikleri

DORA (DevOps Research and Assessment) metrikleri, yazılım teslim performansının dört ölçüsüdür — dağıtım sıklığı, değişiklikler için teslim süresi, değişiklik başarısızlık oranı ve başarısız dağıtım kurtarma süresi — artı beşinci olarak güvenilirlik. Alanın en çok doğrulanmış teslim kıyaslamalarıdır ve her birinin doğrudan bir sağlık ekonomisi okuması vardır.

## Neden önemli

DORA'nın on yıllık araştırması bu metrikleri kurumsal performansa bağlar. 2024 raporunun kümeleri: **elit** ekipler talep üzerine dağıtır (günde birden çok kez), işlemeden üretime bir günden az sürer, değişikliklerin ~%5'i başarısız olur ve bir saatten kısa sürede kurtarır; **düşük** performans gösterenler aylık veya daha seyrek dağıtır, aylar sürer, değişikliklerin ~%40'ı başarısız olur ve haftalarda kurtarır. Bir sağlık sistemi için bunlar BT gösteriş sayıları değildir: klinik değerin hastalara ne kadar hızlı ulaştığını ve her değişikliğin ne kadar risk taşıdığını belirlerler.

## Matematik

```
Dağıtım sıklığı         = üretim dağıtımları / zaman
Değişiklik teslim süresi = t(dağıtım) − t(işleme), medyan
Değişiklik başarısızlık oranı = başarısız değişiklikler / toplam değişiklikler × 100
Kurtarma süresi (MTTR)  = t(onarıldı) − t(arıza), medyan
Güvenilirlik            = SLO sağlanması (erişilebilirlik, gecikme, doğruluk)
```

Sağlık ekonomisi çevirileri:

```
Teslim süresi → cost-of-delay.md: boru hattındaki haftalar × CoD (£ veya QALY/hafta)
Başarısızlık oranı → yazılım değişikliğinin advers olay oranı: CFR × olay başına maliyet
Kurtarma süresi → kesinti zararı: MTTR × (kaybedilen klinik faaliyet + güvenlik maruziyeti)/saat
Güvenilirlik  → fayda iskontosu: %99 erişilebilirlikli bir hizmet modellenmiş
                faydasının ≈ 0,99'unu sunar — uyumun yazılım benzeri
```

## Çözümlü örnek

Bir vakfın hasta akışı yazılımı ekibi, bir teslim mühendisliği yatırımından önce/sonra:

```
                    Önce        Sonra
Dağıtımlar          aylık       haftalık
Teslim süresi       6 hafta     4 gün
CFR                 %25         %8
MTTR                2 gün       2 saat
```

Ekip, iyileştirme başına ortalama 4.000 £/hafta değerle ([CoD](../gecikme-maliyeti/)) yılda ~30 iyileştirme teslim ediyor. ~5,4 haftalık teslim süresi kısalması her iyileştirmenin fayda akışını öne çeker: 30 × 5,4 × 4.000 ≈ daha erken sunulan **648.000 £/yıl** değer. CFR iyileşmesi: 30 × (0,25 − 0,08) = yılda ~5 daha az başarısız değişiklik × ortalama olay maliyeti 15.000 £ (klinik sistem kesintisi, giderme) = **76.500 £/yıl**. Teslim yatırımı, her klinik müdahaleyle aynı para biriminde değerlenir.

## Yazılım mühendisliği bağlantısı

Bu yazılım tarafının *kendisidir* — belirtmeye değer bağlantı ters eşlemedir: DORA metrikleri farklı kıyafetler giymiş hastanenin operasyonel metrikleridir. Teslim süresi ↔ [tedaviye sevk](../tedaviye-sevk/); değişiklik başarısızlık oranı ↔ [yeniden yatış oranı](../yeniden-yatış-oranı/) (geri dönen iş); MTTR ↔ acil müdahale; dağıtım sıklığı ↔ klinik verimi. İyileştirme yöntemleri her iki yönde aktarılır çünkü ikisi de güvenlik kısıtları altında kuyruk sistemleridir. DORA 2025'in yapay zekâ bulgusuna da dikkat edin: yapay zekâ benimsemesi artık daha yüksek verimle ama *daha kötü* kararlılıkla ilişkili — etkinliği ve yan etkileri olan bir müdahale, bu deponun öğrettiği net fayda analizini tam olarak gerektirir (bkz. [yapay zekâ ile geliştirici verimliliği](../yapay-zekâ-ile-geliştirici-verimliliği/)).

## Tuzaklar

- **Metrik oyunları**: boş sürümlerle şişirilen dağıtım sayıları; acil düzeltmeleri başarısızlık saymayarak düşürülen CFR. Olayları, HTA'nın sonlanım noktalarını tanımladığı gibi kesin biçimde tanımlayın.
- **Ekipler arası lig tabloları**: DORA kümeleri uygulamaları karşılaştırır, farklı risk profilli ekipleri değil; "yüksek" düzeydeki bir klinik sistemler ekibi, "elit"in pervasız olacağı yerde optimal olabilir.
- **Tek metriği optimize etmek**: CFR/güvenilirlik olmadan hız, verim-kararsızlık ödünleşimidir — dördünü her zaman birlikte raporlayın (bir [maliyet-sonuç tablosudur](../maliyet-sonuç-analizi/), puan değil).

## Kaynaklar

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
