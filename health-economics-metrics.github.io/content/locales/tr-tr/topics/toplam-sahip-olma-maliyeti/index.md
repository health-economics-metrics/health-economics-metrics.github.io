# Toplam Sahip Olma Maliyeti (TSM)

TSM, bir sistemin ömrü boyunca tam maliyetidir: edinim veya inşa, entegrasyon, işletim, bakım, destek, eğitim ve devre dışı bırakma. Rahatsız edici temel çizgi: **bakım, yazılım TSM'sinin %50–80'idir** — ömür boyu maliyetin kabaca dörtte üçü yayından *sonra* gelir.

## Neden önemli

Sağlık teknolojisi değerlendirmesi uzun zaman önce bir ilacın fiyatının maliyeti olmadığını öğrendi — uygulama, izleme ve yan etkilerin yönetimi hepsi modele aittir. Yalnızca inşa/lisans maliyetini sayan yazılım iş gerekçeleri, naif ilaç fiyatı hatasını tekrarlar ve beslediği her [ICER](../artımlı-maliyet-etkililik-oranı/) ve [bütçe etkisinin](../bütçe-etki-analizi/) maliyet tarafını sistematik olarak olduğundan düşük gösterir. NHS satın alımında TSM disiplini, dijital bir ürünün maliyet-etkililik iddiasını dürüst kılan şeydir — ve ucuz görünen seçeneklerin kaybettiği yerdir.

## Matematik

```
TSM = başlangıç maliyeti (inşa/lisans + entegrasyon + veri taşıma + eğitim)
    + Σ_t [işletim + bakım + destek + altyapı + yükseltmeler
           + uyumluluk/güvence]_t / (1 + r)^t
    + devre dışı bırakma maliyeti (çıkış, veri çıkarma, paralel çalıştırma)

Ufuk: ticari 3–5 yıl, klinik altyapı için sistem ömrü
r: kamu sektörü %3,5 (Green Book), ticari %8–12
Kıyaslamalar: yıllık bakım ≈ inşa maliyetinin %15–20'si; ömür boyu
TSM'nin ~%78'i yayın sonrası; devre dışı bırakmayı ve satıcı kilitlenmesini
göz ardı etmek kendi bedelini oluşturur.
```

## Çözümlü örnek

Bir e-gözlem sistemi için iki seçenek, 5 yıllık ufuk:

```
                          Satıcı SaaS     Kurum içi inşa
0. yıl (lisans/inşa)      250.000 £       900.000 £
Entegrasyon + eğitim      180.000 £       150.000 £
Yıllık işletim (1–5. yıl) 120.000 £/yıl   190.000 £/yıl  (barındırma + 1,5 TAE bakım)
Çıkış/devre dışı bırakma  60.000 £        30.000 £

İskontosuz TSM            1.090.000 £     2.030.000 £
```

İnşa seçeneğinin mühendislik tahmini (900 bin £) gerçek TSM'sinin yalnızca %44'ü idi — ve inşa tahminleri kendileri tipik olarak %30–40 aşar (bkz. [yap mı satın al mı](../yap-mı-satın-al-mı/)). Kurum içi seçenek materyal olarak farklı *sonuçlar* sunmadıkça [maliyet minimizasyonu](../maliyet-minimizasyon-analizi/) mantığı geçerlidir ve SaaS ~940 bin £ farkla kazanır.

## Yazılım mühendisliği bağlantısı

Mühendisler inşayı savunurken kendi alanlarının bakım verisini hafife alır: inşa maliyetinin yıllık %15–20'si bakım kuralı, her 1 milyon £'lık sistemin sessizce yılda 150–200 bin £ gelecek kapasiteyi taahhüt ettiği anlamına gelir — [teknik borç](../teknik-borç/) ile aynı zihinsel bilançoya ait bir yükümlülük. TSM aynı zamanda bu depodaki her metriğin maliyet yarısıdır: dağıtım başına maliyet, [bulut birim ekonomisi](../bulut-birim-ekonomisi/) ve HTA'nın ilaç sponsorlarına dayattığı payda disiplini. Ürününüzün fiyatı sorgulandığında, mevcut çözümün gerçek işletim maliyetlerini içeren bir TSM karşılaştırması genellikle mevcut en güçlü yeniden çerçevelemedir. Yukarıdaki gibi çok yıllı bir TSM rakamı zaman içinde birçok maliyet kaleminin toplamıdır — bir modelin kuruşu kuruşuna mutabık olması gerektiğinde bu toplamın neden kayan nokta yerine tam ondalık olması gerektiği için bkz. [para birimi güvenli maliyet toplulaştırma](../para-birimi-güvenli-maliyet-toplulaştırma/) ve bir TSM toplamını kuruş kaybetmeden maliyet merkezleri arasında bölmek için [tam kuruş maliyet dağıtımı](../kuruşu-kuruşuna-maliyet-tahsisi/).

## Tuzaklar

- **Yayın maliyetine çıpalanma**: sıralama 3. yılda tersine dönerken seçenekleri 0. yıl maliyetinde karşılaştırmak.
- **Bedava iç emek yanılgısı**: "ekip zaten ücretli" diye kurum içi bakımın sıfır maliyetlenmesi — bkz. [fırsat maliyeti](../fırsat-maliyeti/).
- **Çıkış maliyetlerini yok saymak**: veri çıkışı, sözleşme feshi ve paralel çalıştırma "ucuz" SaaS'ın pahalılaştığı yerdir.
- **Aynı ufuk ihlalleri**: 3 yıllık SaaS TSM'sini 10 yıllık inşa amortismanıyla karşılaştırmak (bkz. [zaman ufku](../zaman-ufku/)).

## Kaynaklar

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
