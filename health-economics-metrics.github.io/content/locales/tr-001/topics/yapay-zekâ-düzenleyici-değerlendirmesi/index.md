# Yapay Zekâ Düzenleyici Değerlendirmesi

Sağlık hizmetlerinde yapay zekâyı yöneten düzenleyici çerçeveler — **Önceden Belirlenmiş Değişiklik Kontrol Planları (PCCP)** ile FDA'nın Tıbbi Cihaz Olarak Yazılım (SaMD) rejimi ve NHS AI in Health and Care Award gibi gerçek dünya değerlendirme programları — ve bunların ekonomik olarak neye mal olduğu ve neyi mümkün kıldığı.

## Neden önemli

Düzenleme hem **pazara giriş kanıt maliyetini** hem de **sonraki her model güncellemesinin maliyetini** belirler — yapay zekâ ürünlerinde ikincisi çoğu zaman daha önemlidir. FDA'nın geleneksel kipi (modeli kilitle; değişiklikler için yeniden onay al) sürekli iyileştirmeyi ekonomik olarak acımasız kıldı. **PCCP kılavuzu (Aralık 2024'te kesinleşti)** ekonomiyi değiştirdi: bir üretici *belirtilmiş* gelecekteki model güncellemelerini önceden yetkilendirebilir — planlanan değişikliklerin tanımı, bir değişiklik protokolü (her birinin nasıl doğrulanacağı) ve bir etki değerlendirmesi — böylece onaylanmış iyileştirmeler yeni başvuru olmadan yayına girer. 1.000'den fazla yapay zekâ destekli cihazın FDA yetkisi vardır; FDA şimdi gerçek dünya performans izlemesini de sorgular (önceden belirlenmiş metrikler: temel YP/YN oranları, kalibrasyon kayması, alan kayması göstergeleri).

## Matematik

PCCP, düzenlenen modellere uygulanan [DORA teslim süresi](../dora-metrikleri/) ekonomisidir:

```
Model güncellemesi başına maliyet (geleneksel) = yeniden başvuru maliyeti + inceleme gecikmesi × CoD
Model güncellemesi başına maliyet (PCCP kapsamında) = yalnızca protokol yürütme maliyeti

Ürün ömrü boyunca güncelleme ekonomisi:
  N güncelleme × (başvuru maliyeti + inceleme ayları × ay başına gecikme maliyeti)
  karşı tek seferlik PCCP hazırlama maliyeti + N × protokol yürütme
```

NHS AI Award örüntüsünde metrik seti doğruluktan daha geniştir: bağımsız gerçek dünya değerlendirmeleri klinik performansı, iş akışı/uygulama etkilerini ve ekonomik etkiyi değerlendirir — tam [etkinlik → etkililik → maliyet-etkililik](../yapay-zekâ-ile-geliştirici-verimliliği/) hattının kurumsallaşması.

## Çözümlü örnek

Bir radyoloji yapay zekâ satıcısı 3 yıl boyunca üç aylık model iyileştirmeleri planlıyor (12 güncelleme):

```
Geleneksel: 12 × (80 bin £ başvuru + 4 ay × 50 bin £/ay gecikmiş fayda CoD'si)
           = 12 × 280 bin £ = 3,36 milyon £
PCCP yolu:  250 bin £ PCCP hazırlama + 12 × 30 bin £ protokol yürütme = 610 bin £
Tasarruf ≈ 2,75 milyon £ — ve hastalar her iyileştirmeyi ~4 ay daha erken alır:
12 × 4 ay × güncellemenin klinik yararı, başlı başına bir QALY satırı.
```

PCCP, **dağıtım sıklığının klinik değeri olduğunun** düzenleyici tanınmasıdır — bu deponun ana nedensel zinciri, bir düzenleyici tarafından onaylanmış.

## Yazılım mühendisliği bağlantısı

PCCP'yi iyi mühendislemek bir yazılım problemidir: önceden belirlenmiş değerlendirme paketleri, sürümlenmiş veri kümeleri, otomatik doğrulama boru hatları, kayma izleme — "dağıtım kapısının" kod incelemesi yerine doğrulanmış bir protokol olduğu, düzenlenen sürekli dağıtım kuzeni. Olgun değerlendirme altyapısına ([yapay zekâ kalite metrikleri](../yapay-zekâ-kalite-metrikleri/)) sahip ekipler PCCP'yi ucuza alır; sahip olmayanlar düzenleyici kısıtın aslında bir mühendislik olgunluğu kısıtı olduğunu keşfeder. NHS'ye giren ürünler için paralel yığın DTAC (klinik güvenlik, veri koruma, birlikte çalışabilirlik) artı [NICE ESF](../nice-kanıt-standartları-çerçevesi/) kanıt katmanlarıdır — hepsini pazara giriş [TCO](../toplam-sahip-olma-maliyeti/)'su olarak bütçeleyin.

## Tuzaklar

- **PCCP kapsam kayması hayalleri**: yalnızca *belirtilmiş* değişiklik türleri önceden yetkilendirilir; mimari değişiklikler veya yeni kullanım amaçları yine tam inceleme gerektirir.
- **Gerçek dünya kayması izlenmiyor**: lansman performansıyla yetkilendirme + sessiz nüfus kayması = onaylanan zarfın dışında çalışan ürün; izleme hem düzenleyici beklenti hem de kendini savunmadır.
- **Onayı değerle karıştırmak**: FDA/UKCA onayı ≠ birinin ödeyeceği — bu ayrıca yürütülen [HTA](../sağlık-teknolojisi-değerlendirmesi/) engelidir.

## Kaynaklar

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
