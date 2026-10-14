# Yatış Süresi (LOS)

Yatış süresi, hastaneye yatıştan taburculuğa kadar geçen gün sayısıdır — yatan hasta bakımının temel akış verimliliği metriği. Birleşik Krallık akut ortalamaları 4–5 gün civarındadır; her fazla gün kıt bir yatağı tüketir ve hastayı hastane kaynaklı risklere maruz bırakır.

## Neden önemli

Yatış süresi akut hastane ekonomisinde hemen her şeyi yönlendirir: yatak kapasitesi, elektif verim, acil akış, personel. Ortalama yatış süresini ölçekte bir günün kesirleri kadar bile azaltmak muazzam kapasite serbest bırakır (bkz. [kazanılan yatak günleri](../kazanılan-yatak-günleri/)). Yatış süresi ayrıca her iki yönde kalite sinyalidir — çok uzun süreç başarısızlığına işaret eder (geciken tanı, taburcu evrakı, sosyal bakım beklemeleri); çok kısa erken taburculuk anlamına gelebilir ve bu daha sonra [yeniden yatışlar](../yeniden-yatış-oranı/) olarak ortaya çıkar.

## Matematik

```
LOS (dönem başına)  = taburcu tarihi − yatış tarihi
Ortalama LOS        = dolu yatak günleri / taburculuklar (ortalamayı VE medyanı raporlayın;
                      LOS uzun kalış aykırılarıyla sağa güçlü biçimde çarpıktır)

Karşılaştırmalar vaka karışımı düzeltmesi gerektirir (yaş, tanı, akuite),
yoksa hastanenin kimi yatırdığını ölçersiniz, nasıl performans gösterdiğini değil.
```

Little Yasası akış değişkenlerini bağlar: `dolu yataklar = yatış oranı × ortalama LOS` — yazılım kuyruklarını yöneten aynı yasa (bkz. [akış metrikleri](../akış-metrikleri/)).

## Çözümlü örnek

Bir vakıf günde ortalama LOS 6,0 günle 40 acil dahili hasta yatırıyor: 240 yatak kalıcı olarak dolu (40 × 6). Taburcu koordinasyon yazılımı (görev takibi, eve götürülecek ilaç eczane otomasyonu, nakil rezervasyonu) kalışların klinik olmayan kuyruğunu ortalama 0,4 gün azaltıyor.

```
Gereken yataklar = 40 × 5,6 = 224 → sürekli 16 yatak boşalır
                 = 16 × 365 = 5.840 yatak günü/yıl
```

5.840 yatak gününü mekanizmaya göre (yeniden doldurma/kapatma/gevşeklik) [kazanılan yatak günleri](../kazanılan-yatak-günleri/)'ne göre değerleyin. Neyin hareket ettiğine dikkat edin: tıp değil, *bekleme* — hasta tıbben uygundu; sistem hâlâ evrak işleriyle uğraşıyordu. Bu bir kuyruk problemidir ve yazılım kuyruk problemlerinde iyidir.

## Yazılım mühendisliği bağlantısı

LOS hastanenin çevrim süresidir ve iyileştirme el kitabı teslim akışı işiyle aynıdır: aşamaları araçlandırın (yatış → tedavi → tıbben uygun → gerçekten taburcu), zamanın nerede biriktiğini bulun (devir teslimlerde), kapasite eklemek yerine bekleme durumlarını kaldırın. "Taburculuğa tıbben uygun ama hâlâ bir yatağı işgal eden" kohortu, hastanenin onaylanmış ama birleştirilmemiş PR sürümüdür. Doğrudan yazılım fırsatları: taburcu görev orkestrasyonu, tanı geri dönüş süresi, taburcu ilaçlarının e-reçetesi, sosyal bakım sevk entegrasyonu.

## Tuzaklar

- **Yalnızca ortalama raporlama** — aykırılar baskın olur; düşen bir ortalama büyüyen uzun kalış kuyruğunu gizleyebilir.
- Önce/sonra iddialarında **vaka karışımı düzeltmesi yok**: yatış eşikleri mevsimsel ve uzun vadede değişir.
- **Yeniden yatış olarak yeniden ortaya çıkan LOS azalması** — LOS iddialarını her zaman 30 günlük yeniden yatış verisiyle eşleştirin.

## Kaynaklar

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
