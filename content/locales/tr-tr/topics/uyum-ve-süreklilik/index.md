# Uyum ve Süreklilik

Uyum (adherence), fiili kullanımın reçete edilen kullanıma ne kadar yakın olduğudur (yoğunluk); süreklilik (persistence) ise kullanımın bırakılmadan ne kadar süre devam ettiğidir (süre). Eczacılığın standartlaştırılmış ölçütleri vardır — **MPR** ve **PDC**; ≥%80 geleneksel "uyumlu" eşiğidir — ve dijital terapötikler hem kavramları hem de sorunu devralır: uyum, etkinlik ile gerçekleşen değer arasındaki çarpandır.

## Neden önemli

Ödeyiciler zaten bu rakamlarla çalışır: PDC ≥%80, ABD Medicare Yıldız Derecelendirmelerine girer ve bu da ödeyici gelirini gerçekten oynatır — uyum yumuşak bir metrik değil, mali açıdan yük taşıyan bir altyapıdır. Dijital terapötiklerde de örüntü tekrarlanır: DiGA verileri güçlü reçete hacmi ama zayıf sürdürülen uyum gösterir ve sonuç bazlı DTx fiyatlandırması (Almanya'da 2026'dan itibaren) uyuma bağlı sonuçlar üzerinden ödeme yapacaktır. Dijital sağlık araştırmalarından kavramsal yükseltme: **etkili katılım** — amaçlanan sonuca ulaşmak için *yeterli* katılım — ve doğal sonucu olan **minimum etkili doz**; "daha fazlası" varsayılmak yerine her müdahale için ampirik olarak belirlenir.

## Matematik

```
MPR = Σ dağıtılan günlük tedarik / dönemdeki gün × 100   (%100'ü aşabilir;
      erken yenilemeler nedeniyle olduğundan yüksek tahmin eder)
PDC = tedarikle kapsanan günler / dönemdeki gün × 100    (%100 ile sınırlı;
      temkinli, CMS'nin tercih ettiği tahmin edici)
Dijital uyum = fiili kullanım olayları / reçete edilen kullanım olayları × 100
Süreklilik   = başlangıçtan bırakmaya kadar geçen gün
               (N ayda % sürekli olanı bildirin; sağkalım yöntemleri)

Değer kapılama: gerçekleşen sonuç ≈ etkinlik × g(uyum)
  g doz-yanıt işlevidir; minimum etkili dozun altında g ≈ 0 —
  maliyet doğar, fayda kaybedilir
```

## Çözümlü örnek

6 haftada 6 modül olarak reçete edilen dijital uykusuzluk BDT ürünü; ≥4 modülü tamamlayanlar arasında deneme etkinliği 0,025 QALY (ampirik olarak belirlenen minimum etkili doz):

```
250 £'dan 1.000 reçete → 250.000 £ ödeyici harcaması
Modül tamamlama: ≥4 modül %38; 1–3 modül %34; sıfır modül %28

Gerçekleşen QALY = 1.000 × 0,38 × 0,025 = 9,5
QALY başına maliyet = 250.000 / 9,5 ≈ 26.300 £ — NICE eşiklerinde sınırda

Uyum mühendisliği (hatırlatıcı yeniden tasarımı, oturum kısaltma) ≥4
modül tamamlamayı %50'ye çıkarır: 12,5 QALY → 20.000 £/QALY. Ürün,
terapi içeriğine dokunmadan finansman eşiğini geçti.
```

2026 tarzı performans fiyatlandırmasında aynı kayma doğrudan *geliri* oynatır — uyum mühendisliği ticari yol haritası olur.

## Yazılım mühendisliği bağlantısı

İki sözlük tek kavramda buluşur: yazılım analitiği ([aktivasyon](../aktivasyon-ve-benimseme/), [yapışkanlık](../katılım-metrikleri/), [elde tutma](../elde-tutma-ve-kayıp/)) ve klinik eczacılık (MPR, PDC, süreklilik) ikisi de bir müdahaleye maruz kalmayı ölçer — ürün olaylarınızı klinik sözlüğe eşleyin, ödeyiciler panolarınızı okuyabilsin. Uyum kaldıraçlarının sahibi mühendisliktir: hatırlatıcı mantığı (aptalca günlük bildirimler reddetmeyi öğretir; uyarlanabilir zamanlama öğretmez), oturum maliyeti (20 dakikalık bir modül 3×7 dakikalıktan daha az tamamlanır) ve kullanıcıların protokolün *neresinde* bıraktığını bulan sürtünme telemetrisi. Doz-yanıtı ilk günden ölçün — tüm ekonomik modeli kapılayan minimum etkili doz analizi, yalnızca ürünün toplayabileceği sonuçla ilişkilendirilmiş kullanım verisine ihtiyaç duyar.

## Tuzaklar

- **MPR/PDC karıştırılması**: MPR şişirir; hangi tahmin edicinin kullanıldığını belirtin, ödeyiciye dönük her şey için PDC kullanın.
- **Terapiye değil metriğe uyum**: açılışların doz olarak sayılması (bkz. [katılım metrikleri](../katılım-metrikleri/)).
- **Müdahalenin sonlu bir dozu olduğunda "daha fazlası daha iyi" katılım hedefleri** — mezuniyet başarıdır, sürekli kullanım değil.
- **Hayatta kalana dayalı etkinlik iddiaları**: uyumlular arasındaki sonuçlar seçilim etkileri içerir (uyumlu kişiler farklıdır); dürüst nedensel tahmin randomizasyon veya dikkatli düzeltme gerektirir.

## Kaynaklar

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
