# Önleme Ekonomisi

Hastalık ortaya çıkmadan veya ilerlemeden önce müdahale etmenin ekonomisi. Manşet bulgu sezgiye aykırıdır: **önlemenin çoğu para tasarruf ettirmez** — sağlığı iyi bir fiyata satın alır. Cohen, Neumann ve Weinstein'ın dönüm noktası NEJM analizi, önleyici müdahalelerin %20'sinden azının net maliyet tasarrufu sağladığını, geri kalanın en iyi ihtimalle maliyet-etkili olduğunu buldu.

## Neden önemli

"Önleme para tasarruf ettirir", sağlık politikasında en çok tekrarlanan yanlış iddiadır ve üzerine kurulu iş gerekçeleri sağlık ekonomistleri tarafından yerle bir edilir. Dürüst yapı: önleme şimdi para harcar (tüm nüfusları taramak, asla hastalanmayacak insanlarda risk faktörlerini tedavi etmek) ve sağlığı sonra geri verir — genellikle QALY başına *iyi* bir maliyetle, bazen tasarrufla, bazen korkunç bir fiyatla. Hangi rejimde olduğunuzu bilmek analizdir. Ayrım ticari olarak önemlidir: "NHS'ten para tasarruf ettirir" diye satılan bir önleme ürünü, başarısız olacağı bir denetimi davet eder; "QALY'yi 4.000 £'a satın alır" diye satıldığında aynı gerçeklerde kazanabilir. Yol içi sürüm için bkz. [erken müdahale](../erken-müdahale/). Bir önleme programını maliyetlendirmeden önce [nüfusa atfedilebilir kesir](../nüfusa-atfedilebilir-kesir/) önce boyutlandırma sorusunu yanıtlar — programın ele aldığı risk faktörünün hedeflenen hastalık yükünün ne kadarını makul olarak ortadan kaldırabileceği.

## Matematik

```
Önlemenin net maliyeti (kişi başına) =
    müdahale maliyeti × tedavi edilen herkes
  − kaçınılan aşağı akış maliyetleri × ilerleyecek az sayıdaki kişi
  (ikisi de iskonto edilir — kaçınılan maliyetler yıllar uzakta; bkz.
   discounting-and-time-preference.md)

Maliyet tasarrufu şunu gerektirir: müdahale maliyeti < P(ilerleme) × kaçınılan maliyet × iskonto faktörü
Maliyet-etkililik yalnızca şunu gerektirir: net maliyet / kazanılan QALY < eşik
```

Önleme paradoksu: müdahale maliyeti tüm nüfus üzerinden çarpılır; faydalar yalnızca karşı olgusalın az sayıdaki kişisine birikir.

## Çözümlü örnek

100.000 riskli yetişkine sunulan, kişi başı yılda 25 £'lık bir hipertansiyon yönetimi uygulaması. 10 yılda 400 inmeyi önler (her biri iskonto edilmiş 45.000 £ tutar ve 3 QALY kaybettirir).

```
Maliyet:  100.000 × 25 £ × 10 yıl (iskontolu ≈ ×8,3) ≈ 20,8 milyon £
Mahsuplar: 400 × 45.000 £ = 18,0 milyon £
Net maliyet ≈ 2,8 milyon £ — maliyet tasarruflu DEĞİL

Kazanılan QALY = 400 × 3 = 1.200
QALY başına maliyet = 2,8 milyon £ / 1.200 ≈ 2.300 £/QALY — olağanüstü maliyet-etkili
```

Aynı program, iki gerçek: nakitte 2,8 milyon £ kaybeder ve sağlığı NICE eşiğinin onda biri fiyatla satın alır. İkinci sayıyla finanse edin; ilkini asla vaat etmeyin.

## Yazılım mühendisliği bağlantısı

Shift-left kalite, çekincesiyle birlikte önleme ekonomisidir. İncelemeler, testler ve statik analiz, üretim olaylarına ilerleyecek az sayıdaki değişikliği yakalamak için *her* değişikliğe maliyet uygular. Kusur maliyeti eğrisi (aşamaya göre 10–100×) inme maliyetlerinin rolünü oynar — ve dürüst sonuç sağlığı yansıtır: shift-left genellikle maliyet-*etkilidir*, otomatik olarak maliyet-*tasarruflu* değil, çünkü işaretlenen sorunların çoğu asla olay olmayacaktı (karşı olgusalın azınlığı problemi). Hesaplayın: dönem başına toplam kapı maliyeti ile gerçekte kaçınılan olaylar × olay maliyeti — aynı çözümlü örnek yapısı, yakalama başına birim olarak [NNT](../tedavi-edilmesi-gereken-sayı/) ile.

## Tuzaklar

- **Kanıt maliyet-etkililiği desteklerken maliyet tasarrufu iddia etmek** — her iki alanda da önleme savunuculuğunun tanımlayıcı hatası.
- **İskonto edilmemiş gelecek mahsupları**: 15 yıl uzaktaki faydalar nominal değerinden.
- **Aşırı tanı/aşırı tedavi maliyetlerini yok saymak**: önleme sahte hastalık da bulur — bkz. [tarama ekonomisi](../tarama-ekonomisi/).

## Kaynaklar

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
