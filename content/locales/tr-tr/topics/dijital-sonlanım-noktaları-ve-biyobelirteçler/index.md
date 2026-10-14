# Dijital Sonlanım Noktaları ve Biyobelirteçler

Dijital biyobelirteç, sensörlerle toplanan nesnel bir fizyolojik veya davranışsal ölçüdür (bir telefondan yürüyüş hızı, giyilebilir cihazdan uyku, ivmeölçerden tremor). Dijital sonlanım noktası, böyle bir ölçünün tedavi etkisini göstermek için kullanılan bir **deneme sonucuna** yükseltilmesidir. "Cihazın yaydığı veri"den "düzenleyicinin kabul ettiği kanıt"a terfi, tanımlı bir doğrulama merdiveninden geçer.

## Neden önemli

Geleneksel deneme sonlanım noktaları epizodiktir (3 ayda bir klinik ziyareti) ve pahalıdır; dijital sonlanım noktaları süreklidir, ekolojiktir (gerçek yaşam, klinik performansı değil) ve gözlem başına ucuzdur — denemeleri küçültebilir, etkileri daha erken tespit edebilir ve merkezî olmayan çalışmaları mümkün kılabilir. Püf noktası doğrulamadır: kabul gören çerçeve (FDA ile uyumlu, üç sütun) **doğrulama/analitik geçerlilik** (sensör fiziksel büyüklüğü doğru ölçer), **klinik geçerlilik** (ölçü iddia ettiği klinik durumu yansıtır) ve gösterilmiş **anlamlı bir sağlık yönü** (hastalar yakaladığı şeyi önemser) gerektirir. Üçü de olmayan bir sonlanım noktası telemetridir, kanıt değil.

## Matematik

```
Analitik geçerlilik:  referansla uyum (bkz. wearable-validation.md —
                      MAPE, CCC, Bland-Altman)
Klinik geçerlilik:    klinik çapalara karşı korelasyon/ayrım
                      (bilinen gruplar geçerliliği, değişime duyarlılık)
Sonlanım noktası ekonomisi:
  hasta-yılı başına tespit edilen olaylar (sürekli) ve ziyaret başına örnekleme
  deneme gücü: ziyaretler arası varyans baskın olduğunda sürekli ölçüler
  örneklem büyüklüğünü azaltır — N ∝ σ²/Δ² ve σ² yoğun örneklemeyle düşer
```

## Çözümlü örnek

Bir Parkinson denemesi, bilekteki sensörden yürüyüş hızı ile üç aylık klinik puanlarını değerlendiriyor:

```
Klinik sonlanım noktası: hasta/yıl başına 4 ölçüm, yüksek günlük gürültü
Dijital sonlanım noktası: hasta/yıl başına ~200 pasif ölçüm

Yıllık değişim tahmininin varyansı yoğun örneklemeyle ~5× düşer →
sabit güçte saptanabilir etki büyüklüğü ~√5 ≈ 2,2× iyileşir, ya da
eşdeğeri: aynı hipotez için örneklem büyüklüğü ~%40–60 küçülür.
Kayıtlı hasta başına 25.000 £'da, 200 hastayı kesmek ≈ deneme başına
5 milyon £ tasarruf — bir sponsorun boru hattı boyunca doğrulama
yatırımının (kendisi belki 1–2 milyon £) ticari gerekçesi.
```

## Yazılım mühendisliği bağlantısı

Dijital sonlanım noktaları klinik giysili bir veri mühendisliği disiplinidir: **köken ve sürümleme** (çalışma ortasında algoritma güncellemeleri karşılaştırılabilirliği tehdit eder — deneme biçiminde [PCCP](../yapay-zekâ-düzenleyici-değerlendirmesi/) sorunu; sürümü kilitleyin ve köprü doğrulaması yapın); **eksik veri tasarımı** (takma süresi boşlukları rastgele değil bilgilendiricidir — bkz. [giyilebilir doğrulaması](../giyilebilir-cihaz-doğrulaması/); atama seçimleri bilimsel iddialardır); ve sonradan hangi ham sinyalin geri kazanılabileceğini bile değiştiren **uç/bulut ayrımı kararları**. Ölçüm boru hattına ilk günden düzenlenen yazılım gibi yaklaşan — test edilmiş, sürümlenmiş, belgelenmiş — ekipler sonlanım noktalarının güvenilirliğini ucuza satın alır; hızlı hareket edilmiş bir boru hattına doğrulamayı sonradan eklemek dijital sonlanım noktası programlarının öldüğü yerdir.

## Tuzaklar

- **Tam doğrulama olarak klinikle korelasyon**: kusurlu bir klinik ölçüyle eşleşmek gerçeği değil mirası kanıtlar; anlamlı sağlık yönüne karşı doğrulayın.
- **Yeni sonlanım noktası düzenleyici riski**: emsalsiz bir sonlanım noktası bilimsel olarak üstün olabilir ve yine de bir başvuruyu batırabilir — düzenleyicilerle erken görüşün (yeterlilik programları mevcuttur).
- **Sensör-nüfus uyumsuzluğu**: genç sağlıklı bileklerde doğrulama, PPG'nin hiç görmediği tremor ve pigmentasyon farkları olan yaşlı hastalarda devreye alma.
- **Özellik kayması**: yürüyüş algoritmasını yeni veriyle yeniden eğitmek sonlanım noktasını çalışma ortasında sessizce yeniden tanımlar.

## Kaynaklar

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
