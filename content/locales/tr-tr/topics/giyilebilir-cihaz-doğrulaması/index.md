# Giyilebilir Cihaz Doğrulaması

Doğrulama metrikleri, bir giyilebilir cihazın ölçümlerinin klinik altın standartla (kalp atış hızı için EKG, uyku için polisomnografi) ne kadar uyuştuğunu nicelleştirir: **MAPE**, uyum korelasyonu, Bland–Altman uyumu — artı gerçek dünya veri kalitesini geçitleyen operasyonel metrikler: **takma süresi uyumu** ve **veri bütünlüğü**.

## Neden önemli

Doğrulama, aşağı akıştaki her şeyin ön koşuludur: referans ölçümle uyum kanıtlayamayan bir cihaz [dijital sonlanım noktalarını](../dijital-sonlanım-noktaları-ve-biyobelirteçler/) sabitleyemez, [RPM faturalamasını](../uzaktan-hasta-i̇zleme-ekonomisi/) destekleyemez veya klinik iddialar taşıyamaz. Alanın kalp atış hızı için kabul gören eşikleri: EKG'ye karşı **MAPE ≤%5** (katı) veya **≤%10** (esnek). Literatürden referans noktaları: Oura Gen 3 dinlenme KAH MAPE %1,67 (CCC 0,97); Fitbit Charge 6 MAPE ~%5,5 — tüketici cihazları artık klinik sınıf sınırını kapsıyor ve ölçümün cihaz başına ve durum başına önemli olmasının nedeni tam da budur.

## Matematik

```
MAPE = (1/n) Σ |ölçülen_i − referans_i| / referans_i × 100

CCC (uyum korelasyonu) = hem korelasyonu hem sistematik yanlılığı
      içeren uyum (Pearson r konum/ölçek kaymasıyla cezalandırılır)

Bland–Altman: ortalama yanlılık ± 1,96 SD uyum sınırları — hatanın
      değerin büyüklüğüne bağlı olup olmadığını gösterir

Operasyonel geçitler:
Takma süresi uyumu = takılan süre / protokol süresi × 100
Veri bütünlüğü     = gözlenen veri noktaları / beklenen × 100
```

Doğrulama **her aktivite koşulu için** (dinlenme, hareket, uyku) ve her nüfus için raporlanmalıdır — PPG optik algılama hareket artefaktı, kötü temas ve koyu cilt tonlarıyla bozulur; eşitlikle ilgili belgelenmiş bir başarısızlık modudur.

## Çözümlü örnek

Bir sanal servis programı bir izleme giyilebilirini seçiyor. Aday A: dinlenme MAPE %2,1, egzersiz MAPE %11,4. Aday B: dinlenme %3,8, egzersiz %6,9.

```
Kullanım durumu: evde kötüleşen hasta tespiti — uyarılar sürekli yüksek KAH'ta,
sıklıkla aktivite sırasında tetiklenir.
Aday A'nın başlığı (%2,1) broşürü kazanır; aday B kullanım durumunu kazanır:
uyarıyla ilgili koşulda (hareket), A'nın %11,4 hatası KAH 100'de
= ±11 atım/dk — tüm uyarı eşiği bandını kapsar, yanlış yükseltmeler
(her biri bir hemşire çağrısı, ~40 £) veya kaçırmalar üretir.

Yanlış uyarı ekonomisi: 500 hasta × haftada 2 ek yanlış uyarı × 40 £
= yanlış doğrulama sayısını seçmekten yılda 2,08 milyon £ hata maliyeti.
```

## Yazılım mühendisliği bağlantısı

Mühendisler sensör seçerken doğrulama verisini tüketir ve ölçüm özellikleri inşa ederken *üretir* — her iki rol de aynı disiplini gerektirir: demo koşulunda değil dağıtım koşulunda test edin (yazılım benzeri: satıcının değil kendi üretim iş yükünüzde kıyaslama yapmak). Takma süresi ve bütünlük ürün mühendisliği sonuçlarıdır — konfor, pil ömrü, şarj alışkanlığı tasarımı ve senkronizasyon güvenilirliği, 30 günde 16 gün RPM faturalama geçidinin karşılanıp karşılanmadığını ([uzaktan hasta izleme ekonomisi](../uzaktan-hasta-i̇zleme-ekonomisi/)) ve deneme veri kümelerinin analiz edilebilir olup olmadığını belirler. Eksikliği tasarlanmış bir sinyal olarak ele alın: şemada ilk günden "takılmadı", "takıldı ama sinyal yok" ve "senkronizasyon başarısız"ı ayırt edin — null'a çökertildiğinde her aşağı akış analizini zehirler.

## Tuzaklar

- **Koşula özgü başarısızlığı gizleyen toplu MAPE** — çözümlü örneğin tuzağı.
- **Doğrulama nüfusu ≠ dağıtım nüfusu**: yaş, cilt tonu, tremor, obezite optik sensör hatasını kaydırır; çalışma demografisini kontrol edin.
- **Uyumun gerektiği yerde korelasyon raporlamak**: sistematik yanlılıkla yüksek Pearson r mutlak eşiklere karşı yine yanlış sınıflandırır — CCC/Bland–Altman'da ısrar edin.
- **İmputasyonla şişirilmiş bütünlük**: doldurulan boşlukların gözlenen veri olarak raporlanması.

## Kaynaklar

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
