# Akış Metrikleri

Akış metrikleri işin bir teslim sisteminden nasıl geçtiğini ölçer: çevrim süresi, teslim süresi, verim, devam eden iş (WIP) ve akış verimliliği. Little Yasası tarafından yönetilirler — hastane yataklarını ve bekleme listelerini yöneten aynı kuyruk matematiği.

## Neden önemli

Teslim süresinin çoğu iş değil — beklemedir. Bilgi işi akış verimliliği çalışmaları, öğelerin geçen sürelerinin yalnızca **%5–15'inde** aktif olarak üzerinde çalışıldığını rutin olarak bulur; gerisi kuyruklardır. Bu, en ucuz hızlanmanın işe alım değil kuyruk kaldırma olduğu anlamına gelir — hastane hasta akışı programlarının yataklar hakkında keşfettiği içgörünün tam kendisi. [Gecikme maliyeti](../gecikme-maliyeti/) olan her şey için akış metrikleri gecikme maliyetinin nerede biriktiğini konumlandırır.

## Matematik

```
Çevrim süresi     = t(bitti) − t(başladı)
Teslim süresi     = t(teslim edildi) − t(talep edildi)     (iş öncesi kuyruğu içerir)
Verim             = tamamlanan öğeler / dönem
WIP               = başlatılmış ama bitmemiş öğeler
Akış verimliliği  = aktif süre / (aktif + bekleme süresi) × 100

Little Yasası:  ortalama WIP = verim × ortalama çevrim süresi
                (eşdeğeri: çevrim süresi = WIP / verim)
```

Little Yasası kaldıraçtır: sabit verimde WIP'i azaltmak çevrim süresini orantılı olarak azaltır. Hastaneleri de yönetir: `dolu yataklar = günlük yatışlar × yatış süresi`.

## Çözümlü örnek

Bir ekibin 40 öğesi devam ediyor ve haftada 10 tamamlıyor: çevrim süresi = 40/10 = 4 hafta. WIP sınırları koyarak WIP'i 15'e düşürüyorlar: çevrim süresi = 15/10 = **1,5 hafta** — aynı insanlar, aynı verim, %62 daha hızlı teslimat, tamamen kuyruk disiplininden.

CoD ile fiyatlandırıldığında: öğeler ortalama haftada 3.000 £ gecikme maliyeti taşıyorsa her öğe artık kuyrukta 2,5 hafta daha az bekler: haftada 10 öğe × 2,5 × 3.000 = **haftada 75.000 £ gecikme maliyeti ortadan kalktı** — hiçbir maliyeti olmayan bir politika değişikliğinden.

Hastane aynası: günde 40 yatış × 6,0 gün yatış süresi = 240 yatak; yatış süresi içindeki klinik olmayan beklemeyi 5,6 güne indirin ve 16 yatak boşalır ([yatış süresi](../yatış-süresi/)) — aynı yasa, aynı kaldıraç.

## Yazılım mühendisliği bağlantısı

Akış metrikleri, teslim mühendisliği ile sağlık operasyonları arasındaki ortak dildir:

- **PR alt aşama kıyaslamaları** (LinearB, ~8 milyon PR): elit alma süresi < 7 sa, inceleme < 6 sa, toplam çevrim < ~26 sa — alma süresi saf kuyruktur, saldırılacak ilk şey.
- **[Bekleme listeleri](../bekleme-listesi-etkisi/)** birikimdir; **[RTT](../tedaviye-sevk/)** teslim süresidir; **[yatak doluluğu](../kazanılan-yatak-günleri/)** WIP'tir. İyileştirme her iki yönde aktarılır: WIP sınırları ↔ yatış yumuşatma; kuyruk süresi ölçümü ↔ yol aşaması takibi.
- %15'in altındaki akış verimliliği her iki alanda da olağandır ve ikisi de bunu gizler, çünkü *insanlar* meşgulken *iş* bekler — işin saatini ölçün, işçilerin değil.

## Tuzaklar

- **Kullanım tapınması**: işçi kullanımını %100'e doğru sürmek kuyruk sürelerini doğrusal olmayan biçimde patlatır (M/M/1: bekleme ∝ ρ/(1−ρ)) — %95 dolu hastanelerin ve %95 tahsisli ekiplerin kilitlenmesinin nedeni.
- **Çarpık dağılımlar üzerinden ortalamalar**: çevrim süreleri ağır kuyrukludur; ortalamalarla değil yüzdeliklerle (p85) tahmin edin.
- **Yukarı akışta işi reddederek WIP'i azaltıp akış iyileştirmesi demek** — talep kaybolmadı, ölçüm sınırının dışında kuyruğa girdi (hastane sürümü: acil servisin dışında bekleyen ambulanslar).

## Kaynaklar

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
