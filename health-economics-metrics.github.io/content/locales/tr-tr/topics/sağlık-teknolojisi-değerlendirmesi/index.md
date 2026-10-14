# Sağlık Teknolojisi Değerlendirmesi (HTA)

HTA, sağlık sistemlerinin bir teknolojinin — ilaç, cihaz veya yazılım — ödemeye değer olup olmadığına karar verdiği biçimsel, kurumsallaşmış süreçtir. Klinik etkililik kanıtını, yayımlanmış zorunlu bir metodoloji altında ekonomik değerlendirmeyle birleştirir.

## Neden önemli

Ulusal bir sağlık hizmetine satış yapıyorsanız bir HTA kuruluşu pazar erişiminize tam anlamıyla karar verebilir. Yerel süreci bilmek, gerçek değer düzenleyicinizi bilmektir:

- **NICE (İngiltere)**: tanımlı bir *referans durum* altında yasal değerlendirmeler — [EQ-5D](../eq-5d/)'den QALY'ler, NHS+PSS [perspektifi](../analiz-perspektifi/), %3,5 [iskonto](../i̇skonto-ve-zaman-tercihi/), [PSA](../olasılıksal-duyarlılık-analizi/) zorunlu — [şiddet düzenleyicileriyle](../qaly-açığı-ve-şiddet-düzenleyicileri/) 20–30 bin £/QALY'ye karşı yargılanır; ağırlıklandırmayla 100 bin £+'a kadar yüksek özelleşmiş teknolojiler.
- **ICER (ABD, hükûmet dışı)**: *sağlık yararı fiyat kıyaslaması* içeren kanıt raporları — bir ürünün QALY/evLYG başına 100–150 bin $'da maliyet-etkili olacağı fiyat — pazarlık kaldıracı olarak kullanılır; artı bütçe etkisi "karşılanabilirlik uyarıları".
- **Kanada (CADTH → CDA-AMC)**: ≈50 bin CAD/QALY'de geri ödeme incelemeleri; tarihsel olarak başvuruların ~%95'inde fiyat indirimi talep etti.

## Matematik

HTA'nın gücü bir formül değil, **zorunlu bir yöntemdir**: her başvuru aynı referans durum kuralları altında aynı [ICER](../artımlı-maliyet-etkililik-oranı/)'ı hesaplar; böylece sonuçlar ürünler ve yıllar arasında karşılaştırılabilir. Referans durum sonuç ölçüsünü, yarar aracını, perspektifi, karşılaştırıcı seçimini, iskonto oranını, zaman ufkunu ve belirsizlik analizini belirler — bir sponsorun oynayabileceği her serbestlik derecesini kaldırır.

## Çözümlü örnek

Bir dijital terapötik NICE tarzı değerlendirmeye başvuruyor:

```
Model: ΔC = +450 £/hasta, ΔE = +0,03 QALY → ICER = 15.000 £/QALY ✓ 20 bin £ altında
Referans durum kontrolleri:
  BK değer setiyle EQ-5D-5L'den yararlar                    ✓
  karşılaştırıcı = mevcut bakım yolu ("tedavi yok" değil)   ✓
  PSA: 20 bin £'da maliyet-etkili olma olasılığı %71         ✓ (raporlandı)
  şiddet düzenleyici: ×1,2 sınırları altı                    — hiçbiri iddia edilmedi
Öneri: veri toplama ile rutin görevlendirme.
```

Sponsorun kendi tercih ettiği analiz 9.000 £/QALY gösterdi; referans durum dürüst karşılaştırıcıyı zorlayarak bunu 15.000 £'a itti. Bu fark referans durumların *neden* var olduğudur.

## Yazılım mühendisliği bağlantısı

Aktarılabilir eser **dahili referans durumdur**: tüm araç/platform iş gerekçeleri için tek zorunlu yöntem — beyan edilmiş karşılaştırıcı, standart birim maliyetler (örüntü için bkz. [ulusal tarife ve birim maliyetler](../ulusal-tarife-ve-birim-maliyetler/)), sabit iskonto oranı, zorunlu duyarlılık analizi, standart şablon. Bir platform konseyine sunulan "araçlar için AMCP dosyası", HTA'nın tıp için yaptığı gibi teklifleri karşılaştırılabilir ve oyunları görünür kılar. NICE'tan daha küçük başlayın: iki sayfalık bir şablon artı yayımlanmış bir fiyat kitabı hiç standarttan iyidir.

Çok döngülü bir HTA modelinin kohort kohort döngü döngü gerçekte nasıl simüle edildiği için bkz. [Markov kohort simülasyonu](../markov-kohort-simülasyonu/).

## Tuzaklar

- **HTA'yı düzenleyici onaydan sonra bir formalite saymak** — CE/UKCA/FDA onayı bir ürünün güvenli olduğunu söyler; HTA *satın almaya değer* olup olmadığına karar verir. Farklı engel, farklı kanıt.
- **Ekonomik modeli denemeden sonra kurmak** — kanıt üretimi referans durumun gereksinimlerinden geriye doğru tasarlanmalıdır.
- **Yargı alanı farklarını yok saymak**: ABD'de 120 bin $/QALY'de finanse edilebilir bir ICER NICE'ta 30 bin £'da başarısız olur; kanıtı ve fiyatlamayı pazar başına planlayın.

## Kaynaklar

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
