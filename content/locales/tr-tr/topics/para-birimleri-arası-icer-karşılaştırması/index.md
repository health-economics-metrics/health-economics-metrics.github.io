# Para Birimleri Arası ICER Karşılaştırması

Bir ülkenin para biriminde hesaplanmış bir [ICER](../artımlı-maliyet-etkililik-oranı/)'ı başka bir ülkenin [ödeme istekliliği eşiği](../ödeme-i̇stekliliği-eşikleri/) ile karşılaştırmak — veya çok uluslu bir denemede toplanan maliyet verilerini bir araya getirmek — açık, denetlenebilir bir para birimi dönüştürme adımı gerektirir. Dönüştürme yöntemini yanlış seçerseniz klinik veya maliyet verilerinde hiçbir şey değişmese bile aynı temel kanıt bir benimseme kararını tersine çevirebilir.

## Neden önemli

ISPOR'un çok uluslu klinik denemeler için yöntem kılavuzu (Willke ve ark., *Health Economics*, 1998), ülkeler arasında kaynakların gerçek ekonomik değerini karşılaştırırken kaynak maliyetlerinin piyasa döviz kurlarıyla değil **satın alma gücü paritesi (SGP)** ile dönüştürülmesini ve piyasa döviz kurlarının gerçekte ne için olduğuna — gerçek sınır ötesi nakit ödeme akışlarını modellemeye — ayrılmasını önerir. İkisini karıştırmak, kılavuzu okumamış biri için ikisi de "döviz kuru" gibi göründüğünden ve bir elektronik tablo yanlış yapmanızı engellemediğinden, çok uluslu HTA yöntem hatalarının en yaygınlarından biridir.

## Matematik

```
yerel_para_biriminde_icer = dönüştür(kaynak_para_biriminde_icer, dönüşüm_faktörü)

dönüşüm_faktörü şu olmalıdır:
  SGP dönüşüm faktörü  — ülkeler arasında kaynakların gerçek ekonomik değerini
                         karşılaştırmak için (çok uluslu CEA için
                         ISPOR tarafından önerilir)
  piyasa döviz kuru    — yalnızca gerçek sınır ötesi nakit ödemeler için

benimseyin eğer yerel_para_biriminde_icer < yerel_eşik
```

Karar kuralının kendisi olağan [ICER eşik kuralıdır](../ödeme-i̇stekliliği-eşikleri/) — `ICER < λ ise benimse` — bu konunun ele aldığı yöntemsel soru tamamen kuralın uygulandığı `yerel_para_biriminde_icer` rakamını *hangi dönüşüm faktörünün* ürettiği hakkındadır.

## Çözümlü örnek

Bir ilacın ABD denemesinden ICER'i 45.000 $/QALY. Varsayımsal bir ithalatçı ülke kendi örnekleyici eşiğini 34.000 £/QALY olarak belirliyor (yalnızca bu örnek için varsayımsal ülkeye özgü bir rakam — gerçek eşikler ülkeye göre değişir, zamanla değişir ve her zaman kaynaklandırılıp tarihlendirilmelidir).

**0,72 SGP dönüşüm faktörü kullanılırsa** (örnekleyici, yalnızca bu çözümlü örnek için): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **benimse**.

**Bunun yerine 0,79 piyasa döviz kuru kullanılırsa** (örnekleyici): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **reddet**.

Aynı temel 45.000 $/QALY ICER'i, SGP dönüşümü altında benimse kararı, piyasa döviz kuru dönüşümü altında ise reddet kararı üretir. ISPOR kılavuzunun dönüşüm faktörü seçimini neden yöntemsel olarak sonuç doğurucu saydığının somut örneği budur — bir yuvarlama ayrıntısı değil ve kimsenin iki kez kontrol etmediği bir elektronik tablo formülünde örtük bırakılacak bir şey de değil.

## Yazılım mühendisliği bağlantısı

Bu, iyi bilinen bir mühendislik alanının sağlık ekonomisi yansımasıdır: ticari yazılımda i18n/l10n çok para birimli fiyatlama doğruluğu; burada bir SaaS fiyat sayfası bir `$` tutarını bir `£` fiyatıyla sessizce asla karşılaştırmamalıdır. İyi kurulmuş bir `Money` türünün sağladığı tür düzeyi garantisi — uyuşmayan para birimlerini karşılaştırmayı reddeden, önce açık bir dönüştürme adımını zorlayan karşılaştırma yöntemleri — buradaki sağlık ekonomisi yöntem noktasının doğrudan yazılım mühendisliği paralelidir: dönüştürülmemiş rakamları para birimleri arasında karşılaştırmayın ve dönüştürme adımının örtük veya belgesiz olmasına izin vermeyin.

## Tuzaklar

- **Farklı para birimlerindeki tutarları sessizce karşılaştırmak**: önce bir dönüştürme adımı olmadan bir dolar rakamını ve bir sterlin rakamını çıkaran veya karşılaştıran geçici elektronik tablo HTA çalışması — gerçek para birimi bilen bir `Money` türünün sessiz bir hata olarak bırakmak yerine yapıyla yakaladığı bir hata sınıfı.
- **Piyasa döviz kurunu SGP ile karıştırmak**: ISPOR kılavuzuna göre çok uluslu HTA yöntem hatalarının en yaygını — iki sayı önemli ölçüde farklı olabilir ve farklı soruları yanıtlar (gerçek ekonomik değer ile fiili nakit akışı).
- **Kullanılan döviz kurunu veya SGP endeksini tarihlendirmemek**: ikisi de zamanla hareket eder, bu yüzden alıntılanan her dönüşüm faktörü bu deponun diğer kıyaslama rakamlarını (Green Book karbon değerleri, önlenen ölüm değeri vb.) tarihlendirdiği gibi tarihlendirilmelidir.

## Kaynaklar

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
