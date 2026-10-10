# Çıkarım Birim Ekonomisi

Çıkarım birim ekonomisi yapay zekâ özelliklerini marjinal hesaplamalarıyla fiyatlar: **jeton başına maliyet**, işlem başına, kullanıcı başına, klinik vaka başına maliyete toplulaştırılır. Tanımlayıcı dinamik: LLM fiyatları sabit yetenekte **1–2 yılda yaklaşık bir büyüklük mertebesi** düştü — sağlık teknolojisi maliyetlemesinde emsali olmayan bir deflasyon hızı.

## Neden önemli

Fiyat çöküşünden iki sonuç çıkar. Ticari olarak, bugün marjinal olan bir yapay zekâ özelliği 18 ay içinde önemsiz derecede kârlı olabilir — ve bugünün maliyetleri üzerinden fiyatlanmış bir rakip altından kesilecektir. Ekonomik değerlendirme için, 2024 çıkarım fiyatlarını donduran yapay zekâ destekli bir klinik hizmet için herhangi bir maliyet-etkililik modeli **süren maliyeti önemli ölçüde abartır** — analizin, ilaç modellerinin patent sona ermesi ve jenerik girişini ele alması gibi fiyat düşüşü senaryolarına ihtiyacı vardır. (Araştırmadan referans noktaları: öncü çıktı jetonları 2026 ortasında ~15–75 $/M, orta kademe modeller bir büyüklük mertebesi daha ucuz, GPT-4 düzeyi yetenek 2022'de ~20 $/M'den ~0,40 $/M'ye; Epoch AI yetenek kilometre taşına bağlı olarak yılda 9×–900× düşüş ölçtü.)

## Matematik

```
Çağrı başına maliyet = girdi jetonları × girdi oranı + çıktı jetonları × çıktı oranı
Birim başına maliyet = iş çıktısı birimi başına Σ çağrılar (triyaj vakası başına,
                       taslak mektup başına, konsültasyon özeti başına)

Harmanlanmış gerçeklik = temel çağrı + yeniden denemeler + RAG bağlamı (girdi ağırlıklı)
                         + değerlendirme/koruma çağrıları (genelde %20–50 ek yük)

Çok yıllı modeller için fiyat düşüşü senaryosu:
  maliyet_t = maliyet_0 × d^t, duyarlılık analizinde d ∈ {0,3, 0,5, 0,7}/yıl'ı test edin
```

## Çözümlü örnek

Bir yapay zekâ taburcu özeti hizmeti: ortalama özet 12.000 girdi jetonu (kayıt bağlamı) + 1.200 çıktı kullanır, artı bir doğrulama geçişi (6.000 girdi / 300 çıktı). 3 $/M girdi, 15 $/M çıktıda:

```
Taslak:      12.000 × 3/1M + 1.200 × 15/1M  = 0,036 $ + 0,018 $ = 0,054 $
Doğrulama:    6.000 × 3/1M +   300 × 15/1M  = 0,018 $ + 0,0045 $ ≈ 0,023 $
Özet başına ≈ 0,077 $ → yılda 100.000 özet başına ≈ 7.700 $

Özet başına kazanılan ~20 klinisyen dakikasına karşı (≈ 25 £), çıkarım
yaratılan değerin %0,25'idir — ekonomi jetonlar HARİÇ her şey tarafından
domine edilir: entegrasyon, değerlendirme, yönetişim, benimseme.
```

Bu sonuç — çıkarım maliyeti, mevcut fiyatlarda yüksek değerli klinik görevler için nadiren bağlayıcı kısıttır — fiyatlandırma toplantılarına taşınmaya değer bulgunun kendisidir.

## Yazılım mühendisliği bağlantısı

Bu, yapay zekâya özelleşmiş [bulut birim ekonomisi](../bulut-birim-ekonomisi/)dir ve üç uygulama notu vardır: **API çağrısı başına değil iş birimi başına ölçün**, böylece sayı doğrudan [ICER](../artımlı-maliyet-etkililik-oranı/)/[bütçe etkisi](../bütçe-etki-analizi/) modellerine takılır; **girdi/çıktı asimetrisine dikkat edin** (çıktı tipik olarak girdi fiyatının ~4 katı; RAG mimarileri girdi ağırlıklıdır — mimari seçimleri fiyatlama seçimleridir); ve **görev katmanına göre yönlendirin** — model yeteneğini görev zorluğuna eşleştirmek (sınıflandırma için ucuz modeller, sentez için öncü) harmanlanmış maliyeti eşit kalitede rutin olarak 5–10× düşürür; en ucuz etkili müdahaleyi kullanmanın yazılım sürümü ([maliyet minimizasyonu](../maliyet-minimizasyon-analizi/), denklik kanıtlanmış).

## Tuzaklar

- **Dondurulmuş fiyatlı çok yıllı modeller** — maliyeti abartır; ama aynı zamanda **deflasyon varsayan gelir modelleri** — fiyat savaşı bir sözleşme değildir; ikisini de senaryolayın.
- **Değerlendirme ek yükünü yok saymak**: korumalar, yargıçlar ve yeniden denemeler gerçek jetonlardır, düzenlenen ortamlarda çoğu zaman çoğunluk.
- **Jeton başına miyopluk**: gecikme, hız sınırları ve bağlam penceresi kısıtları hiçbir jeton fiyatının yakalamadığı maliyetler taşır.

## Kaynaklar

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
