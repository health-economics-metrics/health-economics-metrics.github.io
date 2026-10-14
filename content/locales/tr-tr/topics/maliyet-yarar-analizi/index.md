# Maliyet-Yarar Analizi (CUA)

CUA, **genel, tercihe göre ağırlıklandırılmış bir sonuçla** yapılan maliyet-etkililik analizidir — neredeyse her zaman [QALY](../kaliteye-ayarlı-yaşam-yılı/) (veya önlenen [DALY](../sakatlığa-ayarlı-yaşam-yılı/)). Sonuç birimi evrensel olduğu için CUA, tamamen farklı hastalıklar arasındaki müdahaleleri karşılaştırabilir.

## Neden önemli

Ulusal bir sağlık hizmeti tek bir bütçeden bir kanser ilacı, bir ruh sağlığı uygulaması ve bir cerrahi robot arasında seçim yapmak zorundadır. Doğal birimler bunları karşılaştıramaz; QALY'ler karşılaştırabilir. CUA bu nedenle NICE'ta ve çoğu HTA kurumunda referans durum yöntemidir: çıktısı — [eşiğe](../ödeme-i̇stekliliği-eşikleri/) karşı yargılanan QALY başına maliyet — sağlık politikasının evrensel bir döviz kuruna en yakın şeyidir. Yazılımınızın *başka bir şeyin yerine* finanse edilmesini istiyorsanız arena CUA'dır.

## Matematik

```
ICUR = ΔMaliyet / ΔQALY      (etki birimi olarak QALY'li ICER)

ΔQALY = Σ (süre_i × yarar_i)_yeni − Σ (süre_i × yarar_i)_eski
```

Yararlar doğrulanmış araçlardan ([EQ-5D](../eq-5d/)); maliyetler ve QALY'lerin her ikisi %3,5'te [iskonto edilir](../i̇skonto-ve-zaman-tercihi/) (NICE referans durumu); belirsizlik [PSA](../olasılıksal-duyarlılık-analizi/) ile.

## Çözümlü örnek

Orta düzey anksiyete için bir BDT uygulaması ile yüz yüze terapi bekleme listesi, hasta başına:

```
Maliyetler: uygulama lisansı + destek  250 £
            yerinden edilen terapi     −680 £   (kullanıcıların %40'ının artık ihtiyacı yok)
            ΔC = 250 − 680 = −430 £ (para tasarruf eder)

QALY'ler:   beklerken 0,68 yerine 0,76 yararla 6 ay
            ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALY
```

ΔC < 0 ve ΔE > 0: uygulama **baskındır** — hem daha iyi hem daha ucuz, oran gerekmez. Terapi yerinden etme varsayımı yalnızca %10 olsaydı ΔC = 250 − 170 = +80 £ ve ICUR = 80 / 0,04 = **2.000 £/QALY** olurdu — yine 20.000 £'ın çok altında. Vaka, kilit varsayım kırpılsa bile ayakta kalır: sağlam bir CUA böyle görünür (ve [tornado diyagramı](../duyarlılık-analizi/) bunu kanıtlar).

## Yazılım mühendisliği bağlantısı

CUA'nın derin fikri — *farklı şeyleri karşılaştırmak için tek bir bileşik, tercihe göre ağırlıklandırılmış birim* — farklı mühendislik yatırımlarını (güvenlik, geliştirici deneyimi, güvenilirlik) karşılaştırmanın örüntüsüdür. Dürüst seçenekler ya savunulabilir bir bileşik birim (nadir) ya da açık bir [maliyet-sonuç tablosu](../maliyet-sonuç-analizi/)dur (olağan). CUA'nın uyardığı şey sahte bileşiktir: ağırlıkları tercih edilen seçeneği kazandırmak için sonradan ayarlanmış, ağırlıklı bir "etki puanı". Sağlık ekonomisi, ağırlıkların karşılaştırmadan önce gelmesi için yararların elde edilmesini onlarca yıl standardize etti.

## Tuzaklar

- **Aracın duyarlılığının altındaki yarar kazanımları** ([hasta bildirimli sonuçlar](../hasta-bildirimli-sonuçlar/)'taki minimal klinik olarak önemli farka bakın) — küçük ΔE çarpı büyük nüfuslar klasik bir aklama numarasıdır.
- **Karşılaştırıcı bakımın yerinden edilmesinin eksikliği** — dijital ürünler için en büyük maliyet terimi çoğu zaman değiştirdikleri şeydir.
- **Tercih tabanlı olmayan puanların doğrulanmamış çapraz tablolarla yararlara eşlenmesi**.

## Kaynaklar

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
