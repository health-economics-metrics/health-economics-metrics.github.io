# Teknik Borç

Teknik borç, bir kod tabanındaki geçmiş pragmatik kararların ima edilen gelecekteki maliyetidir: borçlu olunan iyileştirme çalışması (**anapara**) ve teslimat üzerinde uyguladığı sürekli sürtünme (**faiz**). SQALE gibi nicelleştirme yöntemleri onu mecazdan maliyetlendirilmiş bir yükümlülüğe dönüştürür.

## Neden önemli

Nicelleştirilmemiş teknik borç bir şikâyettir; nicelleştirildiğinde bir iş gerekçesidir. Sektör kıyaslamaları (CAST Appmarq, 1.400 uygulama / 550 milyon kod satırı): tarihsel olarak kod satırı başına ≈ **3,61 $ teknik borç anaparası**, tipik kod tabanları yeniden inşa maliyetinin %15–20'si kadar borç oranı taşırken, yaygın kullanılan sağlık çıtası ≤%5'tir (SonarQube'un "A" notu). Sağlık ekonomisi çerçevesi tam oturur: borç bir *kronik durumdur* — tedavi edilmezse ilerler, "faizi" daha yavaş teslimat ve daha yüksek kusur oranları olarak bileşik büyür ve iyileştirme, önlemenin tedaviyle rekabet ettiği gibi özellik işiyle kapasite için rekabet eder.

## Matematik

```
SQALE anaparası = Σ ihlaller üzerinden (iyileştirme süresi) × geliştirici maliyet oranı
Teknik borç oranı (TBO) = iyileştirme maliyeti / yeniden geliştirme maliyeti × 100
                    (SonarQube notları: A ≤ %5, B ≤ %10, C ≤ %20, D ≤ %50)

Faiz (geri ödemeyi gerekçelendiren sayı):
  faiz/yıl = Δ teslimat hızı × hız birimi başına değer
           + Δ kusur oranı × kusur başına maliyet
Geri ödeme vakası = BD(ufuk boyunca önlenen faiz) − iyileştirme maliyeti
                (iskonto edilmiş — bkz. discounting-and-time-preference.md)
```

Anapara yükümlülüğü belirtir; **faiz** yatırım gerekçesini oluşturur. Yılda 40 bin £ faizi önlemek için 500 bin £ anapara ödemek kötü bir takastır; yılda 400 bin £ için mükemmel.

## Çözümlü örnek

400 bin kod satırlık bir klinik kayıt entegrasyon katmanı: SQALE anaparası 3.800 saat × 75 £ = **285 bin £**; TBO ≈ %12 (not C). Ölçülen faiz: bu katmana dokunan ekipler, genel varlık temel çizgisine göre %40 daha uzun döngü süreleri ve 2× değişiklik başarısızlık oranı gösteriyor. Katman yılda 6.000 geliştirici saatini emiyor:

```
Faiz ≈ 6.000 × 0,40 × 75 £        = 180.000 £/yıl (hız sürtünmesi)
     + 12 ek başarısızlık × 8.000 £ = 96.000 £/yıl (yeniden iş/olaylar)
     ≈ 276.000 £/yıl

Anaparanın en kötü %30'unu (85 bin £) sıcak noktaları hedefleyerek iyileştir →
modellenen faiz azalması %60: yılda ~166 bin £ tasarruf. Geri dönüş ≈ 6 ay.
```

Sıcak nokta hedeflemesi önemlidir: borç faizi, değişiklik sıklığı × borç yoğunluğunun zirve yaptığı yerde toplanır — nadiren dokunulan borcu iyileştirmek hiçbir şey satın almaz, asla ilerlemeyecek bir durumu tedavi etmek gibi ([önleme ekonomisi](../önleme-ekonomisi/)).

## Yazılım mühendisliği bağlantısı

Teknik borç argümanlarını yükselten sağlık ekonomisi ithalatları: varlığı bir **yük envanteri** olarak ifade edin ([DALY](../sakatlığa-ayarlı-yaşam-yılı/) tarzı — kayıp sağlıklı mühendislik yılları nerede?); geri ödemeyi ilerleme matematiğiyle, dürüstçe gerekçelendirin (genellikle maliyet-etkili, maliyet tasarruflu değil); en kötü sistemlerin iyileştirmesini [şiddet açığı](../qaly-açığı-ve-şiddet-düzenleyicileri/) ile ağırlıklandırın; ve büyük iyileştirme tekliflerini [önlenen aşağı akış maliyetleri](../kaçınılan-aşağı-akış-maliyetleri/) kurallarından sağ çıkan bir mahsup analiziyle sunun — olasılık ağırlıklı, iskonto edilmiş, bir kez sayılmış.

## Tuzaklar

- **Yalnızca anapara raporlama**: faiz tahmini olmayan büyük ürkütücü bir sayı hiçbir şeyi gerekçelendirmez.
- **Araçların ürettiği borç rakamlarını harfi harfine almak**: SQALE kural ihlallerini sayar; mimari borcu (pahalı türü) kaçırır ve önemsizlikleri sayar.
- **Sıfır borç ütopyacılığı**: en uygun borç düzeyi sıfır değildir — borç kaldıraçtır; soru faiz oranıdır.
- **"Yeniden yazım hepsini önler"**: yeniden yazım önerileri aynı mahsup kurallarını geçmelidir — karşı olgusal maliyet, olasılık, iskonto.

## Kaynaklar

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
