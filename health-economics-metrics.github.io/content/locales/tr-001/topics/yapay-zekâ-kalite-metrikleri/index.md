# Yapay Zekâ Kalite Metrikleri

Yapay zekâ ürettiği çıktının doğruluğuna ilişkin metrikler: referans doğruluğa karşı isabet, **sadakat/dayanaklılık** (her iddia sağlanan bağlamla destekleniyor mu?) ve **halüsinasyon oranı** (çıktıların hangi kesri desteksiz veya yanlış içerik taşıyor?). Sağlık ortamlarında bunlar kalite inceliği değil, zarar oranlarıdır.

## Neden önemli

Tıp alanı kıyaslamaları, dayanaksız büyük dil modellerinde tıbbi görevlerde **%60'ın üzerinde** halüsinasyon oranları ölçmüştür (bazı açık modellerde >%80); dayandırma, getirme ve akıl yürütme modları ise oranları çarpıcı biçimde düşürür (örn. GPT-5'in düşünme modu bir kıyaslamada HealthBench halüsinasyonlarını %3,6'dan %1,6'ya indirdi). Klinik bir iş akışında halüsinasyonla üretilmiş bir doz veya uydurma bir kaynak, **zarar yolu olan bir yanlış bilgi olayıdır** — herhangi bir ekonomik modelin zarar koluna aittir ve [tarama ekonomisi](../tarama-ekonomisi/)ndeki yanlış pozitifler gibi fiyatlanmalıdır: her biri aşağı akış maliyetini tetikler (yanlış bilgiyle hareket, doğrulama emeği, tıbbi-hukuki risk, aşınan güven).

## Matematik

```
Halüsinasyon oranı = desteksiz/yanlış içerik taşıyan çıktılar / toplam çıktılar
  içsel:   sağlanan bağlamla çelişir
  dışsal:  bağlamın ötesinde doğrulanamayan uydurma

Sadakat (RAGAS tarzı) = yanıttaki desteklenen iddialar / yanıttaki toplam iddialar
Bağlam kesinliği/duyarlılığı = üreticiyi besleyen getirme kalitesi

Ekonomik ağırlıklandırma — tüm halüsinasyonlar aynı maliyette değildir:
  beklenen zarar maliyeti = Σ hata türleri üzerinden (oran × P(fark edilmemiş) ×
                            P(üzerinde hareket edilmiş) × harekete geçilen hata başına maliyet)
  İnsan inceleme katmanı P(fark edilmemiş)'i belirler — ve maliyeti de
  modele girmelidir (inceleyici dakikaları × hacim).
```

## Çözümlü örnek

Bir yapay zekâ klinik kodlama asistanı yılda 200.000 vakayı işliyor; denetim çıktıların %2'sinin önemli bir kodlama hatası içerdiğini, insan kodlayıcıların bunların %85'ini yakaladığını gösteriyor:

```
Gönderime ulaşan hatalar = 200.000 × 0,02 × 0,15 = 600/yıl
Yakalanmayan hata başına maliyet (yanlış faturalama ort. + denetim riski) ≈ 250 £
Beklenen hata maliyeti     = 600 × 250 = 150.000 £/yıl
İnceleme maliyeti (2 dk × 200 bin × 0,50 £/dk)  = 200.000 £/yıl

İyileştirme senaryosu: getirme dayandırması hata oranını %0,8'e indirir
→ yakalanmayan hata 240, hata maliyeti 60.000 £ (−90 bin £/yıl); inceleme süresi de
  düşebilir (tam inceleme yerine örnekleme) — kalite yatırımı
  herhangi bir hız iddiasından önce kendini öder.
```

## Yazılım mühendisliği bağlantısı

Model kalitesine test kapsamı ekonomisi gibi, sağlık düzeyinde disiplinle yaklaşın: **değerlendirme setleri sizin klinik denemenizdir** — önceden kaydedilmiş, *sizin* vaka karışımınızı temsil eden, kaymaya karşı yenilenen; **olgusal görevlerde dayandırma ölçeği yener** (getirme + kaynak zorunlu istem çoğunlukla mevcut en ucuz halüsinasyon azaltımıdır — jeton yükü için bkz. [çıkarım birim ekonomisi](../çıkarım-birim-ekonomisi/)); ve **çalışma noktasını yayımlayın**: [duyarlılık/özgüllük](../klinik-yapay-zekâ-değerlendirmesi/) gibi, "%97 sadık" görev dağılımı ve tespit eşiği olmadan hiçbir şey ifade etmez. Yukarıdaki inceleme katmanı matematiği, her tarama kapısındaki [NNT/NNH](../tedavi-edilmesi-gereken-sayı/) aritmetiğinin aynısıdır.

## Tuzaklar

- **Kıyaslamadan üretime nakil**: halüsinasyon oranları göreve aşırı bağlıdır; sizin vaka karışımınız tek geçerli kıyaslamadır.
- **Maliyetlendirilmemiş insan incelemesi**: "bir klinisyen her şeyi kontrol eder" faydayı yarıya indirir ve maliyet satırında görünmelidir — üstelik dikkat azalır (otomasyon rehaveti), dolayısıyla P(fark edilmemiş) güvenle artar.
- **Zarar kuyrukta yatarken ortalama kaliteyi optimize etmek**: uydurma bir alerji notu bin beceriksiz ifadeden ağırdır; hataları beklenen zarar formülüne göre sonuçlarıyla ağırlıklandırın.

## Kaynaklar

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
