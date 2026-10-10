# SPACE ve DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — memnuniyet ve iyi oluş, performans, aktivite, iletişim ve iş birliği, verimlilik ve akış) ile DevEx (geri bildirim döngüleri, bilişsel yük, akış durumu), geliştirici üretkenliğini **çok boyutlu** ölçmek için çerçevelerdir — hiçbir tek metriğin gerçeklikle temasa dayanamadığı keşfine alanın yanıtı.

## Neden önemli

Her iki çerçeve de sağlık sonuçları araştırmasının on yıllar önce öğrendiği aynı zor kazanılmış dersi kodlar: tek bir sayı (kod satırı; kan basıncı) çok boyutlu bir gerçekliği yanlış temsil eder ve onu optimize etmek iyileşme değil oyunlama üretir. SPACE, en az üç boyuttan metrikleri birleştirmeyi, telemetriyi öz bildirimle karıştırmayı öngörür — [EQ-5D](../eq-5d/)'nin herhangi bir indeks hesaplanmadan önce beş boyutu profillemesiyle yapısal olarak aynıdır ve [PROM'ların](../hasta-bildirimli-sonuçlar/) klinik ölçümlerin yanında var olmasının nedenidir. Memnuniyet/iyi oluş da yumuşak bir süs değildir: ayrılmanın yüklü maaş ayları olarak fiyatlandığı [iş gücü elde tutma](../i̇ş-gücünü-elde-tutma/) ekonomisini besler.

## Matematik

Hiçbir çerçeve bir formül değildir; ikisi de ölçüm tasarımıdır:

```
SPACE kuralı: ≥ 3 boyut, ≥ 1 algısal (anket) + ≥ 1 sistem (telemetri) metriği

DevEx boyutları ve örnek eşleştirmeler:
  geri bildirim döngüleri → CI süresi (telemetri) + "beklemek yavaş hissettiriyor" (anket)
  bilişsel yük            → belge bulunabilirliği, işe alıştırma süresi + algılanan çaba
  akış durumu             → toplantı/kesinti yoğunluğu + öz bildirilen odaklanma

Türetilmiş indeksler (ör. DX'in DXI'si) anket bileşiklerini zamana eşler:
satıcı iddiası ≈ indeks puanı başına geliştirici/hafta 13 dk — bunu
yerelde doğrulanacak bir satıcı kıyaslaması olarak ele alın, doğa sabiti olarak değil.
```

## Çözümlü örnek

Bir platform ekibi 300 geliştirici için bir DevEx yatırımını (CI hızlandırma + belge elden geçirme) gerekçelendiriyor:

```
Temel çizgi: CI p75 = 28 dk; anket "derlemeleri beklerken odağımı kaybediyorum": %62 katılıyor
Sonra:       CI p75 = 9 dk;  katılım %24

Geri kazanılan zaman (telemetri): 6 derleme/gün × 19 dk × 0,4 kullanılabilir = ~45 dk/gün/geliştirici
Kapasite değeri: 300 × 0,75 sa × 220 g × 60 £/sa ≈ 2,97 milyon £/yıl (nakit serbest bırakmayan —
bkz. cash-releasing-vs-non-cash-releasing.md; 0,4 kullanılabilirlik faktörü
practitioner-time.md'deki parçalanma indirimidir)
Algısal doğrulama, telemetri iddiasını inandırıcı kılan şeydir — ikisi de
tek başına oynanabilir; birlikte üçgenleme yaparlar.
```

## Yazılım mühendisliği bağlantısı

Bu belge yazılım tarafının *kendisidir*; aktarım sağlık ekonomisine doğru işler. "Kaliteye göre ayarlanmış mühendis yılı" — standartlaştırılmış bir deneyim indeksiyle ağırlıklandırılmış zaman — [QALY](../kaliteye-ayarlı-yaşam-yılı/)'nin yapısının mühendislik kapasitesine uygulanmasıdır ve QALY'nin kurallarını devralır: doğrulanmış bir araçtan (tutarlı anket, yayımlanmış puanlama) ağırlıklar, karşılaştırmadan *önce* elde edilir, asla gözde bir aracı pohpohlamak için ayarlanmaz. [SF-6D ve EQ-5D](../eq-5d/) dersi de geçerlidir: farklı araçlar sistematik olarak farklı sayılar verir, bu nedenle DevEx indekslerini satıcıların araçları arasında asla karşılaştırmayın.

## Tuzaklar

- **Tek metriğe çökme**: SPACE'i tek bir puana indirgeyen panolar, çerçevenin önlemek için var olduğu sorunu yeniden yaratır.
- **Sonuç olarak aktivite metrikleri**: commit'ler, PR'lar ve hikâye puanları Aktivitedir — SPACE'in en çok oynanabilir boyut olarak açıkça uyardığı boyut (sağlık benzeri: iyileşmeleri değil işlemleri saymak).
- **Anket yorgunluğu ve Hawthorne etkileri**: üç ayda bir hafif araçlar haftalık sorgulamayı yener.
- **Ekipleri karşılaştırmak**: vaka karışımı ayarlaması olmayan hastane lig tabloları gibi — bağlam farkları (alan, eski sistem yükü, nöbet) baskındır.

## Kaynaklar

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
