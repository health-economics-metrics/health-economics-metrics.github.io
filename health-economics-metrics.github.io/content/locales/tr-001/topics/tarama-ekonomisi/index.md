# Tarama Ekonomisi

Tarama ekonomisi, belirtisiz nüfusların test edilmesinin değerini yönetir. Temel matematiksel gerçek: **düşük hastalık yaygınlığında mükemmel testler bile çoğunlukla yanlış pozitifler üretir** — ve onların peşinden gitmenin aşağı akış maliyeti gerçek bulguların faydasını gölgede bırakabilir.

## Neden önemli

1968'den beri DSÖ'nün Wilson–Jungner ölçütleri nüfus taraması için çıtayı belirledi: durum önemli olmalı, test kabul edilebilir ve doğru olmalı, etkili tedavi bulunmalı ve ekonomi dengelenmeli. BK Ulusal Tarama Komitesi herhangi bir ulusal programı onaylamadan önce biçimsel maliyet-etkililik analizi uygular — ve çoğu öneriyi reddeder. Her "yapay zekâ herkesi her şey için tarayacak" sunumu bu mekanizmaya çarpar ve genellikle aşağıdaki aritmetiğe yenilir.

## Matematik

Pozitif öngörü değeri (PPV) — pozitif bir sonucun gerçek olma olasılığı — düşük yaygınlıkta çöker:

```
PPV = (duyarlılık × yaygınlık) / [duyarlılık × yaygınlık + (1 − özgüllük) × (1 − yaygınlık)]

Örnek: duyarlılık %90, özgüllük %95, yaygınlık %0,5:
PPV = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ %8,3
```

On iki pozitiften on biri yanlıştır. Tam program ekonomisi:

```
Bulunan gerçek vaka başına maliyet = (tarama maliyeti + tetkik maliyeti × tüm pozitifler) / gerçek pozitifler
Sonra: bir vakayı bulmak buna değer mi? (vaka başına erken müdahale değeri,
       eksi aşırı tanı zararı — asla önemli olmayacak bulunan vakalar)
```

## Çözümlü örnek

Nadir bir durum için yapay zekâ retina taraması, 100.000 kişi, yaygınlık %0,5, duyarlılık %90, özgüllük %95, tarama 15 £, doğrulayıcı tetkik 400 £:

```
Gerçek pozitifler: 100.000 × 0,005 × 0,90 = 450
Yanlış pozitifler: 100.000 × 0,995 × 0,05 = 4.975
Maliyet = 100.000 × 15 + (450 + 4.975) × 400 = 1,5 milyon £ + 2,17 milyon £ = 3,67 milyon £
Gerçek vaka başına maliyet ≈ 8.156 £
```

Erken tedavi vaka başına 20.000 £ + 1 QALY tasarruf ediyorsa program kolayca geçer. Özgüllüğü %99'a çıkarın (daha az yanlış alarm): tetkik maliyeti (450 + 995) × 400 = 0,58 milyon £'a düşer, toplam 2,08 milyon £, vaka başına maliyet ≈ **4.622 £** — düşük yaygınlıkta tarama ekonomisinin kazanıldığı yer duyarlılık değil özgüllüktür.

## Yazılım mühendisliği bağlantısı

Statik analiz, güvenlik taraması ve anomali tespiti, uyarı fırsatı başına gerçek kusur yaygınlığı çoğu kez %1'in çok altında olan, kod tabanları ve telemetri üzerinde tarama programlarıdır. Aynı matematik uyarı yorgunluğunu açıklar: düşük yaygınlıklı kodda %95 özgüllüklü bir tarayıcı ekipleri yanlış pozitiflere boğar ve her yanlış pozitif dikkate mal olur ve gerçek uyarılar göz ardı edilene dek güveni aşındırır (klinik terim *tarama zararı*; mühendislik terimi *çağrı cihazı uyuşukluğu*). Çareler sağlıktan aktarılır: duyarlılıktan önce özgüllüğü artırın, daha yüksek yaygınlıklı alt nüfusları tarayın (risk tabanlı hedefleme ↔ yalnızca değişen kod taraması) ve aracın ekonomisinde triyaj maliyetini sayın — bkz. [NNT](../tedavi-edilmesi-gereken-sayı/) ve [klinik yapay zekâ değerlendirmesi](../klinik-yapay-zekâ-değerlendirmesi/). Tek bir test yerine tüm bir tarama programını boyutlandırmak için bkz. [taranması gereken sayı](../taranması-gereken-sayı/) — bir sonucu önlemek için kaç kişinin tüm tara-ve-tedavi et yolundan geçmesi gerektiği.

## Tuzaklar

- **Yaygınlık olmadan duyarlılık/özgüllük alıntılamak** — PPV olmadan doğruluk pazarlamadır.
- **Aşırı tanıyı yok saymak**: asla zarar vermeyecek ağır seyirli "hastalık" bulmak gerçek tedavi maliyetlerini ve zararlarını tetikler.
- **Öne geçiş yanlılığı**: sonuçları değiştirmeden daha erken tespit görünen sağkalımı şişirir — bkz. [erken müdahale](../erken-müdahale/).

## Kaynaklar

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
