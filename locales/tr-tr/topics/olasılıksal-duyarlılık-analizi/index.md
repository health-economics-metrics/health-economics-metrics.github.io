# Olasılıksal Duyarlılık Analizi (PSA)

PSA, belirsiz her parametreye bir olasılık dağılımı atar, hepsinden aynı anda binlerce kez örnekler (Monte Carlo) ve tek bir nokta tahmini yerine bir seçeneğin en iyi seçim olma *olasılığını* raporlar.

## Neden önemli

NICE'ın referans durumu PSA'yı *şart koşar*. Deterministik analiz "bir girdi yanlışsa ne olur?" sorusunu yanıtlar; PSA ise "bilmediğimiz her şey bir arada düşünüldüğünde doğru kararı vermiş olma olasılığımız nedir?" sorusunu yanıtlar. İmza çıktısı olan **maliyet-etkililik kabul edilebilirlik eğrisi (CEAC)**, bir seçeneğin maliyet-etkili olma olasılığını ödeme istekliliği eşiğine karşı çizer — "ICER 24.000 £/QALY"yi "30.000 £/QALY'de bunun doğru seçim olma olasılığı %78" şekline çevirir.

## Matematik

```
N çekimin her biri için (N ≈ 10.000):
  her parametre θ'yı dağılımından örnekleyin
    (maliyetler ~ Gamma, olasılıklar ~ Beta, yararlar ~ Beta, etkiler ~ Normal/logNormal)
  her seçenek j için NPF_j(θ) = λ × Etki_j(θ) − Maliyet_j(θ) hesaplayın

CEAC_j(λ) = λ eşiğinde j seçeneğinin en yüksek NPF'ye sahip olduğu çekimlerin kesri
```

NPF için bkz. [net parasal fayda](../net-parasal-fayda/), λ için [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/).

## Çözümlü örnek

Platform geçişi iş gerekçesi. Üç belirsiz girdi:

```
Geçiş maliyeti         ~ Gamma,   ortalama 800 bin £, ss 200 bin £
Yıllık fayda           ~ Normal,  ortalama 350 bin £, ss 150 bin £
Fayda süresi           ~ Düzgün,  3–6 yıl
```

10.000 çekimin her biri için net fayda = süre × yıllık − maliyet hesaplanır (netlik için iskonto atlandı). Örnek sonuçlar:

```
Ortalama net fayda:        775 bin £
Net > 0 olasılığı:         0,86
5.–95. yüzdelik:          −180 bin £ … +1,9 milyon £
```

Nokta tahmini "kesinlikle evet" dedi. PSA "%86 evet, 180 bin £+ kaybettiğimiz gerçek bir kuyrukla" diyor — ki bir portföy sahibinin gerçekte ihtiyaç duyduğu budur ve önce bir keşif spike'ı yürütme gerekçesini fiyatlar (bkz. [EVPI](../mükemmel-bilginin-beklenen-değeri/)).

## Yazılım mühendisliği bağlantısı

Mühendisler teslim tahmini için Monte Carlo'ya zaten güvenir (verim örneklemesi nokta tahminini yener). Aynı mekanizmayı paraya genişletin: benimseme, kazanılan zaman ve maaş üzerinde dağılımlar, ardından sahte kesinlikli bir YG yerine "bu platform yatırımının net pozitif olma olasılığı"nı raporlayın. CEAC tarzı bir eğri — kuruluşun bir mühendis saatini nasıl değerlediğinin işlevi olarak en iyi seçenek olma olasılığı — bir finansman komitesi için herhangi bir tekil sayıdan gerçekten daha iyi bir eserdir.

## Tuzaklar

- **Çöp dağılımlar**: uydurma standart sapmalı PSA, laboratuvar önlüğü giymiş deterministik analizdir. Yayılımları veriye veya yapılandırılmış uzman görüşü elde etmeye dayandırın.
- Parametreler arasında **korelasyonu yok saymak** (yüksek benimseme genellikle yüksek kazanılan zamanla ilişkilidir); bağımsız örnekleme kuyruk riskini olduğundan az gösterir.
- Yalnızca simülasyonun **ortalamasını raporlamak** — bütün mesele dağılım ve karar olasılığıdır.

## Kaynaklar

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
