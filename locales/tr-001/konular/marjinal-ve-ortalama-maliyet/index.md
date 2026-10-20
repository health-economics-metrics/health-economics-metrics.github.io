# Marjinal ve Ortalama Maliyet

Ortalama maliyet, toplam maliyetin üretilen birimlere bölünmesidir. Marjinal maliyet, *bir ek* birimi üretmenin maliyetidir. Kararlar marjinal maliyetle verilmelidir — ancak yayımlanan birim maliyetler neredeyse her zaman ortalamadır.

## Neden önemli

Dijital sağlık iş gerekçelerindeki en yaygın hata, gerçek tasarruf **marjinal** maliyetken, kazanılan bir kaynağı **ortalama** maliyetiyle değerlemektir. Bir hastane yatak gününün ortalama (tam dağıtılmış) maliyeti 400 £+'dır, ancak bir yatak gününü serbest bırakmak 400 £ tasarruf ettirmez — bina, ısıtma ve personel maliyetlerinin çoğu devam eder. Bir servisi kapatmaya yetecek kadar yatak serbest kalmadıkça gerçekte serbest kalan nakit 50–150 £ olabilir.

## Matematik

```
Ortalama maliyet:  OM = TM / Q
Marjinal maliyet:  MM = dTM/dQ   (bir birim daha fazla/az maliyeti)

TM = toplam maliyet, Q = miktar
```

Sabit maliyetler kapasite azaltmalarında MM < OM yapar ve boş kapasite olduğunda MM sıfıra yaklaşabilir. Tasarruf iddiaları şunları kullanmalıdır:

```
Gerçek tasarruf = ΔQ × MM          (küçük değişiklikler)
Gerçek tasarruf = TM'de basamak değişimi (bir kapasite eşiğini aşan büyük değişiklikler, örn. bir servisi kapatmak)
```

## Çözümlü örnek

Yazılımınız ortalama yatış süresini azaltıyor ve bir vakıfta yılda 1.000 yatak günü serbest bırakıyor.

- **Saf iddia**: 1.000 × 400 £ ortalama maliyet = **400.000 £ tasarruf**. Yanlış.
- **Marjinal iddia**: yatak günü başına değişken maliyet (yemek, çamaşır, sarf malzeme, bir miktar esnek hemşirelik) ≈ 120 £. Tasarruf = 1.000 × 120 £ = **120.000 £**, *artı* yataklar bekleyen elektif hastalarla yeniden doldurulursa serbest kalan kapasitenin değeri (faaliyete dayalı ödeme altında gelir veya bekleme listesi azalması).
- **Basamak değişimi iddiası**: vakıf yılda 7.300 yatak günü (20 yataklı bir servis) serbest bırakırsa servisi gerçekten kapatabilir: personel + işletme ≈ yılda 1,5 milyon £ gerçek nakit. Şimdi ortalama maliyet matematiği gerçeğe daha yakındır.

Aynı müdahale, değişimin bir kapasite basamağını aşıp aşmadığına bağlı olarak üç savunulabilir sayı.

## Yazılım mühendisliği bağlantısı

Bulut ekonomisi doğal marjinal maliyet bölgesidir:

- Zaten rezerve kapasitede bir ek CI çalışmasının marjinal maliyeti ≈ 0 £'dır, oysa çalışma başına ortalama maliyet (toplam platform harcaması ÷ çalışmalar) pound olabilir. Ortalama maliyet faturalandıran geri ücretlendirme sistemleri, ekipleri marjinalde gerçekte bedava olan paylaşılan kapasiteyi az kullanmaya iter.
- Tersine, "hesaplamanın %30'unu tasarruf ettik" yalnızca örnekler gerçekten sonlandırıldığında veya rezervasyonlar azaltıldığında nakit serbest bırakır — yatak günü tuzağının yazılım sürümü. Bkz. [nakit serbest bırakan ve bırakmayan tasarruflar](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/).

## Tuzaklar

- **Kapasiteyi ortalama maliyetle değerlemek** ve nakit olarak sunmak (klasik).
- **Marjinal maliyetin sabit olduğunu varsaymak.** Kapasite sınırlarında basamaklanır (servis kapatmaları, lisans kademeleri, ayrılmış örnek taahhütleri).
- Aynı vakada **genişleme kararları için marjinal ama daralma için ortalama maliyet kullanmak** — gerçek karara göre seçin.

## Kaynaklar

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
