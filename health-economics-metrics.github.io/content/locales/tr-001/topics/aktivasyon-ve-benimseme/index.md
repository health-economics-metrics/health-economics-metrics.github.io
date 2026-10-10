# Aktivasyon ve Benimseme

Aktivasyon oranı, kayıt olanların ilk anlamlı değere ulaşan payıdır ("aha" eylemi — ilk ölçümün kaydedilmesi, ilk dersin tamamlanması). Benimseme (uptake) bunun nüfus düzeyindeki karşılığıdır: *uygun* nüfusun ürünü hiç kullanmaya başlayan payı. İkisi birlikte değer hunisinin ön kapılarıdır: edinim → benimseme → aktivasyon → [elde tutma](../elde-tutma-ve-kayıp/) → sonuç.

## Neden önemli

Aktive olmamış kullanıcılar saf maliyettir: edinim harcaması, kurulum, destek yüzeyi — sıfır klinik değer. Kıyaslamalar sağlık yazılımının aktivasyonunu sektörler arası ortalamanın *altında* gösterir (bir SaaS kıyaslama setinde yeni kullanıcı aktivasyonu ≈%24'e karşılık ≈%37; ilk kurulum kontrol listesinin tamamlanması ~%20); bu, daha ağır bir ilk kurulumu (kimlik, rıza, klinik güvenlik) yansıtır. Benimseme nüfus düzeyindeki payı taşır: [RE-AIM çerçevesinde](../erişim-ve-eşitlik/) halk sağlığı etkisi ≈ erişim × etkililik — uygun nüfusun %3'ünün benimsediği mükemmel bir uygulama nüfus göstergesini yalnızca %3 kadar oynatır. Reçeteyle verilen dijital terapötikler için benimseme kapısı ulusal verilerde görünür: **Alman DiGA reçetelerinin ~%81'i aktive edilir** — reçete edilip ödenen beş tedaviden biri hiç başlamaz (bkz. [DiGA hızlı yol](../almanya-nın-diga-hızlı-yolu/)).

## Matematik

```
Aktivasyon oranı = pencere içinde temel eylemi tamamlayan kullanıcılar / kayıtlar × 100
Benimseme oranı  = benimseyenler / uygun nüfus × 100
DTx kullanım oranı = aktive edilen reçete kodları / düzenlenen reçeteler × 100

Huni değer modeli:
  uygun kişiler × benimseme × aktivasyon × elde tutma ağırlıklı fayda = nüfus değeri
  — dört çarpım; en küçük çarpanı iyileştirmek genellikle
  baskın gelir (huniler için kısıtlar kuramı)
```

## Çözümlü örnek

Bir komisyoncu 80.000 uygun sakine diyabet önleme uygulaması sunuyor:

```
Davet edilen → kayıt olan:  80.000 → 12.000  (benimseme %15)
Kayıt olan → aktive olan (ilk oturum + hedef belirleme, 7 gün): 12.000 → 5.400 (%45)
Aktive olan → 6 aylık programı tamamlayan: 5.400 → 1.600 (%30)

Program etkisi (deneme, tamamlayanlar): 0,03 QALY + 180 £ kaçınılan maliyet
Nüfus değeri = 1.600 × (0,03 × 20.000 £ + 180 £) ≈ 1,25 milyon £
Uygun kişi başına değer = 15,6 £ — uygun herkes tamamlasaydı 780 £.

Nereye yatırım yapılmalı? Benimsemeyi ikiye katlamak (%15→%30) değeri ikiye
katlar; aktivasyonu %45→%65'e çıkarmak yaklaşık %44 ekler; ikisi de
1.600 kişinin zaten tamamladığı program içeriğini daha fazla parlatmaktan
üstündür.
```

## Yazılım mühendisliği bağlantısı

Aktivasyon, huninin mühendislik açısından en çözülebilir aşamasıdır: kimlik doğrulama sürtünmesi, rıza akışları, boş durum tasarımı ve ilk değere ulaşma süresi politika değil koddur (kıyaslama verilerinde sağlıkta ilk değere ulaşma süresi medyanı ≈ 1 gün 7 saat — her saat terk riskidir). Benimseme bir dağıtım sistemleri sorunudur: sevk yollarına entegrasyon (reçete anı), aile hekimi onaylı davetler (güven aktarılır) ve erişilebilirlik (dil, dijital beceriler — bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/)). Yukarıdaki huni değer modeli ikisinin de iş gerekçesi üreticisidir: çarpanları çarpın, kısıtı bulun, düzeltmeyi serbest bıraktığı nüfus değerine karşı fiyatlandırın.

## Tuzaklar

- **Aktivasyonun kolaylık olarak tanımlanması** (e-posta doğrulandı) — klinik anlam (ilk terapötik eylem) yerine — metriği şişirir, değer zincirini koparır.
- **Benimseme paydası oyunları**: "siteyi ziyaret edenlerden" ile gerçekten uygun nüfus — komisyoncular ikincisini önemser.
- **Seçilim etkileri**: aktive edilmesi kolay kullanıcılar en az hasta ve en az yoksun olanlardır; huni iyileştirmeleri ortalamaları artırırken eşitlik açıklarını genişletebilir.

## Kaynaklar

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
