# Uzaktan Hasta İzleme Ekonomisi

Hastaları evde izlemenin geri ödeme ve maliyet mahsubu ekonomisi: ABD'de tanımlı bir CPT kodu gelir yığını; ulusal sağlık hizmetlerinde yatış önleme ve sanal servis ekonomisi, tam **evde hastane** ikamesine kadar.

## Neden önemli

Uzaktan hasta izleme (RPM), cihaz verisinin faturalanabilir sağlık hizmetine dönüştüğü yerdir. ABD Medicare yapısı (2025 ulusal ortalamaları) alışılmadık ölçüde açıktır:

```
99453  kurulum ve hasta eğitimi          ~19,73 $  bir kez (16 günlük veriden sonra)
99454  cihaz tedariki + iletim            ~43,03 $  30 günde bir — o 30 gün içinde
                                                    ≥16 gün ölçüm GEREKTİRİR
99457  ayda ilk 20 dk yönetim             ~47,87 $  ≥20 kayıtlı dakika gerektirir
99458  her ek 20 dk                       ~38,49 $
```

Uyumlu bir hasta-ayı kabaca **90–130 $ PMPM** olarak yığılır. Maliyet mahsubu tarafında, evde hastane programları (CMS Acute Hospital Care at Home muafiyeti: 300+ hastane) daha az yeniden yatış ve enfeksiyonla yatan hasta bakımına kıyasla vaka başına ~1.800–3.000 $ tasarruf gösterir — izleme artı sanal bakımın sistemdeki en pahalı kaynağın, personelli yatağın yerini alabileceğinin en net kanıtı.

## Matematik

```
RPM geliri (ABD) = kayıtlı × faturalama uyumlu kesir × kod yığını PMPM
  — 16 gün kuralı, takma süresi uyumunu (wearable-validation.md)
    bir gelir değişkeni yapar ve 20 dakika kuralı klinik zaman
    kaydını bir mühendislik gereksinimi yapar

NHS tarzı değer = kaçınılan yatışlar × marjinal yatış maliyeti
                + ikame edilen yatak günleri × (yatan hasta − sanal servis günü maliyeti)
                − hizmet maliyeti (cihazlar, platform, izleme personeli)
  (atıf ve marjinal maliyet kuralları için bkz. emergency-attendance-avoidance.md
   ve bed-days-saved.md)
```

## Çözümlü örnek

Bir ABD kliniği 400 hipertansiyon hastası kaydediyor; tipik bir ayda %70'i 16 günlük eşiği karşılıyor; %60 için yönetim dakikaları kaydedilmiş:

```
Aylık gelir ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23.500 $
Yıllık ≈ 282.000 $; hizmet maliyeti (cihazlar 12 $/ay, personel 0,8 TAE) ≈ 180.000 $
Marj ≈ yılda 100 bin $ — ve kaldıraçların mühendislik kaldıraçları olduğuna dikkat edin:
16 gün uyumunu %70 → %85'e çıkarmak yılda ~31 bin $ ekler
(cihaz konforu, senkronizasyon güvenilirliği, hatırlatıcı tasarımı).
```

NHS aynası: yatan hasta günlerinin yerini günde 150 £ net tasarrufla ikame eden %80 doluluklu 50 yataklı bir sanal servis ≈ 50 × 0,8 × 365 × 150 ≈ **yılda 2,19 milyon £** brüt — platforma, cihazlara ve onu donatan toplum hemşireliği ekibine karşı.

## Yazılım mühendisliği bağlantısı

RPM platformları, **çalışma süresinin ve senkronizasyon güvenilirliğinin doğrudan gelire dönüştüğü** (bir haftalık başarısız senkronizasyon bir kohort için 16 gün kapısını bozar) ve denetim düzeyinde zaman takibinin (20 dakika kuralı) sonradan akla gelen değil birinci sınıf bir özellik olduğu nadir üründür. Şunlar için inşa edin: faturalama aylarını hâlâ kurtarılabilirken riske giren hasta başına uyum panoları; zaman damgalı, kurcalamaya karşı korumalı veri izleri (ödeyici denetimleri rutindir); ve uyarı ekonomisi ayarı — her uyarı izleme ekibinin dakikalarını tüketir; bunlar hem faturalanabilir birim hem de kıt kaynaktır ([tarama ekonomisi](../tarama-ekonomisi/) eşik seçimini yönetir).

## Tuzaklar

- **Kayıt ≠ gelir**: uyumlu kesir sayıdır; modelleyin, varsaymayın.
- **ABD kodlarının NHS vakalarına nakli** — ulusal sağlık hizmetleri CPT yığınları değil yatış önleme satın alır; ikinci modeli çalıştırın.
- Sabit maliyetleri kalan yatışlar için **ortalama maliyetli mahsup iddiaları** (bkz. [marjinal ve ortalama maliyet](../marjinal-ve-ortalama-maliyet/)).
- **İzleme ekibi doygunluğu**: uyarı hacmi kayıtla ölçeklenir; personel satırı çoğu modelin atladığı bağlayıcı kısıttır.

## Kaynaklar

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
