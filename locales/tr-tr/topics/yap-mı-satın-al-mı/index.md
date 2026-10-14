# Yap mı Satın Al mı

Yap-mı-satın-al, özel geliştirme ile ticari edinimin iskonto edilmiş [TCO](../toplam-sahip-olma-maliyeti/), teslim süresi ve risk üzerinden yapılandırılmış karşılaştırmasıdır. Ampirik önseller tek yönlüdür: **gerçek yapım maliyetleri tipik olarak öngörülerini %30–40 aşar**, satın alınan çözümler %40–60 daha hızlı devreye girer ve MIT'nin 2025 GenAI araştırması satın alınan yapay zekâ araçlarının zamanın ~%67'sinde başarılı olduğunu, kurum içi geliştirmelerin ise bunun yaklaşık üçte biri sıklıkta başarılı olduğunu buldu.

## Neden önemli

Sağlık sistemleri bu kararla sürekli karşılaşır (NHS dilinde "make vs commission") ve mühendislik kuruluşları sistematik olarak yapma yönünde yanılır — çünkü geliştiriciler [TCO](../toplam-sahip-olma-maliyeti/)'yu değil yapımı tahmin eder ve yapmak daha eğlencelidir. Ekonomik çerçeve dürüst karşılaştırmayı zorlar: iki seçenek de aynı ufukta fiyatlanır, ikisi de riske göre ayarlanır ve *zaman farkı [gecikme maliyeti](../gecikme-maliyeti/) olarak fiyatlanır* — cevabı en sık belirleyen ve en sık atlanan terim.

## Matematik

```
Aynı 3–5 yıllık ufukta, iskonto edilmiş olarak karşılaştırın:

NBD_seçenek = BD(faydalar, değere ulaşma süresiyle kaydırılmış) − BD(TCO)

Risk ayarlamaları (Green Book "iyimserlik yanlılığı" örüntüsü):
  yapım maliyeti × 1,3–1,4        (aşım önseli)
  yapımın değere ulaşma süresi + %40–60 (devreye alma gecikmesi önseli)
  satın alma: bunun yerine entegrasyon gerçeklik kontrolü ve çıkış maliyetleri ekleyin

Karar sürücüleri, genellikle belirledikleri sırayla:
  1. farklılaşma — bu yetenek ürününüz mü, yoksa tesisat mı?
  2. değere ulaşma süresi × CoD
  3. riske göre ayarlı TCO
```

## Çözümlü örnek

Bir vakıf e-onam sistemine ihtiyaç duyuyor. Satın al: 150 bin £/yıl SaaS, 3 ayda canlı. Yap: tahmini 600 bin £ + 120 bin £/yıl bakım, 12 ayda canlı.

```
Riske göre ayarlı yapım: 600 bin × 1,35 = 810 bin £; değere ulaşma süresi ≈ 18 ay
5 yıllık TCO:  satın alma = 150 bin × 5 = 750 bin £
               yapım = 810 bin + 120 bin × 5 = 1.410 bin £
Gecikme terimi: onam dijitalleşmesi ayda 25 bin £ tasarruf sağlıyor; yapım 15 ay
                geç geliyor → CoD = 15 × 25 bin = 375 bin £

Etkin karşılaştırma: 750 bin £ karşı 1.785 bin £ — satın alma ~1 milyon £ farkla kazanır ve
yapımın kendisinden sonraki en büyük tekil terim kimsenin fiyatlamadığı gecikme maliyetidir.
```

Yapma, yetenek farklılaştırıcı olduğunda (ürününüzün çekirdek algoritması), hiçbir satıcı sert bir kısıtı karşılamadığında (klinik güvenlik, veri ikametgâhı) veya satıcı kilitlenme riski ciddi ve fiyatlanmış olduğunda doğru kalır.

## Yazılım mühendisliği bağlantısı

Aktarılabilir sağlık ekonomisi disiplini üç yönlüdür: **önsele dayalı risk ayarı** (%30–40 aşım artışı, yazılımın Green Book iyimserlik yanlılığıdır — mekanik olarak uygulayın, istisnalardan yola çıkmak yerine istisnalar için tartışın); **karşılaştırıcı dürüstlüğü** (yapmanın alternatifi "hiçbir şey" değil, mevcut en iyi satın almadır — bkz. [fırsat maliyeti](../fırsat-maliyeti/)); ve **maliyet karşılaştırmasından önce denklik testi** (satın alma ve yapma gerçekten aynı şartnameyi karşılıyorsa bu [maliyet minimizasyon analizi](../maliyet-minimizasyon-analizi/)dir ve ucuz olan kazanır; değilse sonuç farkı iddia edilmeli değil, değerlenmelidir).

## Tuzaklar

- **Satıcı liste fiyatını riske göre ayarlanmamış yapım tahminleriyle karşılaştırmak** — yapıma doğru çifte pohpohlama.
- **Sıfır fiyatlı iç emek** ("ekip zaten burada").
- **Her iki yönde fiyatlanmamış kilitlenme**: satıcı çıkış maliyetleri, ama aynı zamanda yapımın otobüs faktörü ve bakım ömrü.
- **Kimlik güdümlü yapımlar**: tesisat için "bu bizim için çekirdek" iddiası — farklılaşmayı müşterilerin fark edip etmeyeceğine karşı test edin.

## Kaynaklar

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
