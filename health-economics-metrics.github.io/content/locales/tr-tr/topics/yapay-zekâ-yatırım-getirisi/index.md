# Yapay Zekâ Yatırım Getirisi

Yapay zekâ YG'si, yapay zekâ girişimlerine atfedilebilir ölçülebilir kâr-zarar getirisidir. Ayık bir kıyaslama: MIT'nin 2025 "GenAI Divide" araştırması, 30–40 milyar dolarlık kurumsal GenAI yatırımına rağmen **pilotların ~%95'inin ölçülebilir bir kâr-zarar getirisi göstermediğini** — başarılı %5'in ise tanımlanabilir ortak alışkanlıklar paylaştığını buldu.

## Neden önemli

Sağlık sistemlerinin yapay zekâ pilotu örüntüsü için bir adı var: **pilotit (pilotitis)** — umut vadeden uygulamaların sonsuza dek pilot edilip hiç ölçeklenmediği NHS mezarlığı. MIT bulguları, sağlık teknolojisi değerlendirmesinin zaten bildiği şeyle net biçimde örtüşür: değer iddiaları önceden belirlenmiş sonlanım noktaları ister, atıf karşılaştırıcılar ister ve "herkes yardımı olduğunu hissediyor" bir fayda satırı değildir. MIT verilerindeki başarılı azınlık, izlenebilir maliyet temel çizgilerine sahip arka ofis otomasyonunda yoğunlaştı ve **satın alınan araçlar zamanın ~%67'sinde başarılı olurken kurum içi geliştirmeler bunun kabaca üçte birinde** — her yapay zekâ yatırım gerekçesinde yer alması gereken önsel bilgiler (bkz. [yap mı satın al mı](../yap-mı-satın-al-mı/)).

## Matematik

```
YZ YG'si = (atfedilebilir fayda − toplam YZ maliyeti) / toplam YZ maliyeti

Toplam YZ maliyeti = lisanslar/çıkarım (bkz. inference-unit-economics.md)
              + entegrasyon + veri hazırlığı + değerlendirme
              + iş akışı yeniden tasarımı + yönetişim/güvence
              (lisans genellikle paydanın azınlığıdır)

Atfedilebilir fayda: temel çizgiye veya kontrole karşı ölçülür,
cash-releasing-vs-non-cash-releasing.md uyarınca
nakit / kapasite / kalite olarak sınıflandırılır
```

## Çözümlü örnek

Bir hastane grubu yapay zekâyı iki kullanım senaryosunda devreye alıyor:

```
Kullanım senaryosu A — klinik mektup taslağı (arka ofis, izlenebilir):
  temel çizgi: dışarıdan yaptırılan transkripsiyon 380 bin £/yıl
  sonra:       transkripsiyon sözleşmesi iptal; klinisyen inceleme süresi +60 bin £
  YZ maliyeti: yılda toplam 120 bin £
  YG = (380 bin − 60 bin − 120 bin) / 120 bin ≈ %167 — nakit serbest bırakan, denetlenebilir ✓

Kullanım senaryosu B — "klinisyenler için YZ yardımcı pilotu" (geniş, izlenmeyen):
  fayda iddiası: "4.000 çalışanda zaman kazandırır" — temel çizgi alınmadı
  ölçülen kâr-zarar etkisi: gösterilebilir bir şey yok
  → %95 kovası, gerçekten yardımcı olup olmadığından bağımsız
```

Fark yapay zekânın kalitesi değildir — faydanın bir **temel çizgisi, bir sahibi ve bir bütçe satırı** olup olmadığıdır ([fayda gerçekleştirme](../fayda-gerçekleştirme/)).

## Yazılım mühendisliği bağlantısı

Yapay zekâ yatırımı için HTA biçimli oyun kitabı: **kanıtı [NICE ESF katmanları](../nice-kanıt-standartları-çerçevesi/) gibi aşamalandırın** — düşük riskli araçlar için demo düzeyi kanıt, kurum geneli harcamadan önce kontrollü pilotlar, önceden kaydedilmiş yaygınlaştırma kapılarıyla ([DiGA](../almanya-nın-diga-hızlı-yolu/)'nın süreli geçici listeleme örüntüsü); **maliyetten kaçınmayı sağlık ekonomisinin talepten kaçınmayı saydığı gibi sayın** — yalnızca belirli bir bütçe satırı oynadığında gerçektir; ve **pilotun kendisini [EVPI](../mükemmel-bilginin-beklenen-değeri/) ile fiyatlayın** — yaygınlaştırma kararını değiştiremeyecek bir pilot 0 £ değerindedir. Özellikle geliştirici araçları dilimi için bkz. [yapay zekâ ile geliştirici verimliliği](../yapay-zekâ-ile-geliştirici-verimliliği/).

## Tuzaklar

- **Faydanın dağılması**: binlerce kullanıcıya ince yayılan değer tanımı gereği ölçülemez; yoğun, izlenebilir temel çizgilere sahip kullanım senaryoları seçin.
- **Yalnızca lisans maliyetlendirmesi**: entegrasyon, değerlendirme ve iş akışı yeniden tasarımı genellikle gerçek paydaya hâkimdir.
- **Atıf hırsızlığı**: süreç yeniden tasarımıyla birlikte devreye alınan yapay zekâ tüm farkı sahiplenir.
- **Batık pilot tırmanışı**: durdurmak başarısızlığı kabul etmek olduğu için başarısız pilotların uzatılması — gün batımı tarihi önceden kararlaştırılmalıdır.

## Kaynaklar

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
