# Nakit Serbest Bırakan ve Bırakmayan Tasarruflar

Nakit serbest bırakan tasarruflar gerçek harcamayı azaltır — bir bütçe satırı küçülür. Nakit serbest bırakmayan tasarruflar ise bankaya yatırılmak yerine *yeniden kullanılan* zamanı veya kapasiteyi serbest bırakır. Sağlık sistemi mali müdürleri bunları farklı türler olarak görür, siz de görmelisiniz.

## Neden önemli

Bu, ulusal bir sağlık hizmetindeki herhangi bir dijital iş gerekçesine uygulanan en keskin dürüstlük sınavıdır. NHS fayda çerçeveleri, iddia edilen her faydayı açıkça nakit serbest bırakan, nakit serbest bırakmayan veya niteliksel olarak kategorize eder. Çoğu dijital sağlık "tasarrufu" — hasta başına kazanılan klinisyen dakikaları, daha hızlı dokümantasyon — nakit serbest bırakmayandır: değerlidir ama açığı azaltmaz. Finansman açığıyla karşılaşan bir vakıf CFO'su yalnızca nakit harcayabilir. Ayrıca bkz. [kesin nakit serbest bırakan tasarruflar](../sert-nakit-serbest-bırakan-tasarruflar/).

## Matematik

```
Nakit serbest bırakan tasarruf = önceki bütçe satırı − sonraki bütçe satırı
                                 (çıkarılabilir olmalı: iptal edilen sözleşme, kapatılan servis,
                                  azalan ajans harcaması, kaçınılan satın alma)

Nakit serbest bırakmayan değer = serbest kalan zaman × o zamanın birim maliyeti
                                 (fırsat maliyetiyle değerlenir; para ÇIKARILAMAZ)
```

Aynı fiziksel olay (bir saat kazanıldı), sonrasında ne olduğuna göre bir kategoriye veya diğerine düşer:

```
saat kazanıldı → mesai/ajans vardiyası iptal edildi            → nakit serbest bırakan
saat kazanıldı → klinisyen bir bekleyen hastayı daha görür     → nakit serbest bırakmayan (kapasite)
saat kazanıldı → gevşeklik olarak emildi, hiçbir şey değişmedi → hiç fayda yok
```

## Çözümlü örnek

Yazılım 100 hemşirenin her birine vardiya başına 30 dakika kazandırıyor. Bu 100 × 0,5 × 5 vardiya/hafta × 46 hafta ≈ yılda 11.500 saattir. Band 5 işveren maliyeti ~25 £/saatten, cazip manşet yılda 287.500 £'dır.

Dürüst bölünme:

- Zamanın %20'si, servislerin şu anda dokümantasyon aşımlarını karşılamak için bank/ajans primi ödediği yere düşer: 2.300 saat × 35 £ ajans oranı = **80.500 £ nakit serbest bırakan** (gerçekten rezerve edilmeyen vardiyalar).
- %60'ı doğrudan hasta bakımına yeniden dağıtılır: 6.900 saat × 25 £ = **172.500 £ nakit serbest bırakmayan kapasite** — gerçek değer, ayrı raporlanır, asla "tasarruf" olarak adlandırılmaz.
- %20'si molalar ve kesintiler içinde dağılır: **0 £**. Bunu talep etmek kurgu olurdu.

80,5 bin £ nakit + 172,5 bin £ kapasite sunan bir iş gerekçesi inandırıcıdır. 287,5 bin £ "tasarruf" sunan ise onu okuyan ilk muhasebeci tarafından reddedilir.

## Yazılım mühendisliği bağlantısı

Aynı mantık yapay zekâ kodlama asistanı YG'sini yönetir: "geliştirici başına günde 30 dakika", kadro, yüklenici harcaması veya bulut maliyeti gerçekten düşmedikçe nakit serbest bırakmayan kapasitedir. Kategorileri ayrı raporlayın:

- Nakit serbest bırakan: iptal edilen yüklenici sözleşmeleri, kullanımdan kaldırılan araç lisansları, azalan bulut harcaması.
- Kapasite: daha erken teslim edilen özellikler ([gecikme maliyeti](../gecikme-maliyeti/) yoluyla değer), eritilen birikmiş iş.
- Hiçbir şey: bağlam değiştirmeye parçalanan kazanılmış dakikalar.

Ayrıca *serbest kalan zamanın gerçekte nereye gittiğini* izleyin — fayda gerçekleştirme ([benefits-realization.md](../fayda-gerçekleştirme/)) vardır çünkü iddia edilen kapasite kazanımları denetimde sıklıkla buharlaşır.

## Tuzaklar

- **Dakikaları maaşla çarpıp tasarruf demek** — kanonik günah.
- **Serbest kalan zamanı, o zamanın marjinal kullanımı düşük değerliyken ortalama yüklü maliyetle değerlemek** — bkz. [marjinal ve ortalama maliyet](../marjinal-ve-ortalama-maliyet/).
- **Aynı saati iki kez saymak**: nakit olarak (kaçınılan vardiya) ve kapasite olarak (görülen ek hastalar).

## Kaynaklar

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
