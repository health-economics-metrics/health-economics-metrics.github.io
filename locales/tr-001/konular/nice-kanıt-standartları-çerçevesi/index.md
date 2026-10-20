# NICE Kanıt Standartları Çerçevesi (ESF)

ESF, NICE'ın bir dijital sağlık teknolojisinin **riskiyle orantılı olarak ne kadar kanıta ihtiyaç duyduğunu** belirleyen çerçevesidir. "NHS uygulamamızı satın almadan önce neyi kanıtlamamız gerekiyor?" sorusuna resmî bir yanıta en yakın şeydir.

## Neden önemli

ESF (ilk kez 2019'da yayımlandı, yapay zekâ ve uyarlanabilir algoritmaları kapsayacak şekilde 2022'de güncellendi) dijital sağlık teknolojilerini klinik işlevlerine göre **birikimli** kanıt standartlarıyla katmanlara ayırır — 5 grupta 21 standart (tasarım faktörleri, değer, performans/etkililik, ekonomik etki, devreye alma):

```
Katman A — doğrudan hasta sonucu olmayan sistem hizmetleri (örn. e-vardiya planlama)
           → temel standartlar: inandırıcılık, veri koruma, teknik güvence
Katman B — bilgilendirme, basit izleme, iletişim (örn. belirti günlüğü)
           → + kullanıcı faydası kanıtı, uygun güvenilirlik
Katman C — tedavi etme, tanı koyma veya klinik yönetimi aktif yönlendirme
           → + yüksek kaliteli karşılaştırmalı etkililik kanıtı (ideal olarak RCT)
             ve ekonomik analiz
```

Ekonomik kanıt için [maliyet-sonuç analizi](../maliyet-sonuç-analizi/) çoğu katman için kabul edilebilir; [maliyet-yarar analizi](../maliyet-yarar-analizi/) en yüksek riskte beklenir. ESF, **pazara giriş kanıt maliyetinizi** tanımlar — diğer yapım maliyetleri gibi bütçeleyin.

## Matematik

Formül yok — bir karar tablosu. İşleyen hesaplama ticaridir:

```
Gereken kanıt yatırımı = f(katman)
  Katman A: dokümantasyon + güvence ≈ 10–50 bin £
  Katman B: gözlemsel/karşılaştırmalı kullanıcı faydası çalışması ≈ 50–250 bin £
  Katman C: RCT düzeyinde karşılaştırmalı çalışma + ekonomik model ≈ 250 bin – 2 milyon £+

Ürününüzün iddialarını bilerek konumlandırın: "hastaları bilgilendirir" yerine
"klinik kararları destekler" iddia etmek sizi bir katman kaydırır ve faturayı 10 kata çıkarabilir.
```

## Çözümlü örnek

Bir ilaç hatırlatma uygulaması üreticisi doz ayarlama önerisi özelliği eklemeyi düşünüyor.

- Hatırlatma uygulaması olarak: **Katman B** — uyum iyileşmesini gösteren bir kohort çalışması yeterli.
- Doz önerileriyle: **Katman C** — karşılaştırmalı etkililik kanıtı (muhtemelen olağan bakıma karşı bir RCT) artı ekonomik analiz.

RCT 600 bin £ tutuyor ve doz özelliğinin artımlı geliri yılda 200 bin £ ise, özellik kanıt maliyetlerinin başa baş gelmesi için 3+ yıl değerini korumalıdır — ESF katmanı fiyatlandığında tamamen farklı görünen bir ürün kararı. Birçok ekip Katman B ürününü gönderir ve Katman C iddiasını finansmanın arkasına kademelendirir.

## Yazılım mühendisliği bağlantısı

ESF, bu depodaki en aktarılabilir yönetişim örüntüsüdür: **araç benimsemesi için riske göre katmanlı kanıt gereksinimleri**. Dahili sürüm: bir kod biçimlendirici bir demo (Katman A) gerektirir; kazanılan saatleri iddia eden bir verimlilik aracı ölçülmüş bir pilot (Katman B) gerektirir; dağıtımları otomatik engelleyen veya klinik kodu otomatik yazan bir yapay zekâ kapısı kurum genelinde yaygınlaştırmadan önce kontrollü deneme düzeyinde kanıt (Katman C) gerektirir. Orantılı kanıt iki başarısızlık kipini de durdurur — önemsiz araçları boğan bürokrasiyi ve sonuç doğurucu olanları gönderen hissiyatı. "Kanıt son tarihli geçici benimseme" tamamlayıcısı için ayrıca bkz. [DiGA hızlı yolu](../almanya-nın-diga-hızlı-yolu/).

## Tuzaklar

- **Hüsnükuruntuyla katman yanlış sınıflandırması** — düzenleyiciler ve alıcılar, pazarlamanın söylediğine değil ürünün *yaptığına* göre sınıflandırır.
- **Üründen sonra inşa edilen kanıt**: gönderilmiş bir ürüne araçlandırma veya denge olmadan RCT eklemek yavaştır ve çoğu zaman imkânsızdır.
- **ESF'yi karşılayıp gerisini unutmak**: ESF, DTAC (klinik güvenlik, veri koruma, birlikte çalışabilirlik) ve yapay zekâ için düzenleyici onayın yanında durur — bkz. [yapay zekâ düzenleyici değerlendirmesi](../yapay-zekâ-düzenleyici-değerlendirmesi/).

## Kaynaklar

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
