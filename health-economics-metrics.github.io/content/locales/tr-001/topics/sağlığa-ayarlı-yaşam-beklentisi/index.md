# Sağlığa Ayarlı Yaşam Beklentisi (HALE)

HALE nüfus düzeyinde bir özettir: bir kişinin *tam sağlıkla* yaşamayı bekleyebileceği yıl sayısı, hastalık veya sakatlıkla geçirilen yıllar düşülerek. Doğumda küresel HALE yaklaşık 61,9 yıldı, yaşam beklentisi 73,3 (DSÖ, 2019 verisi) — insanlık son on yılını ortalama olarak tam sağlıktan daha azıyla yaşıyor.

## Neden önemli

HALE ulusal ve küresel sağlık politikasının kutup yıldızı metriğidir — "sağlıklı yaşlanma" hedeflerinin payı ve ortaya çıkardığı fark (yaşam beklentisi eksi HALE), önlemenin, erken müdahalenin ve kronik hastalık yönetiminin kapatmayı amaçladığı yüktür. Bakanlık düzeyindeki dijital sağlık stratejileri HALE terimleriyle haklı çıkarılır; bir uygulama, tarama hizmeti ve izleme programı portföyü sonunda burada toplanır.

## Matematik

Standart hesaplama **Sullivan yöntemidir**:

```
HALE_yaş_x = Σ (her yaş ≥ x için yaşam tablosu kişi-yılları × tam sağlıktaki oran)
             / x yaşındaki hayatta kalanlar

"tam sağlıktaki oran" = 1 − Σ (durum_yaygınlığı × sakatlık ağırlığı)
```

Girdiler: standart bir yaşam tablosu artı sağlık durumları için yaygınlık ve sakatlık ağırlıkları (Küresel Hastalık Yükü verisinden). HALE, [DALY](../sakatlığa-ayarlı-yaşam-yılı/)'lerle ilişkilidir — nüfus DALY yükü ve HALE açığı aynı kayıp sağlığın iki görünümüdür.

## Çözümlü örnek

Ulusal bir dijital hipertansiyon programı: 500.000 kayıtlı, ortalama kan basıncı kontrolü inme insidansını yılda 0,2 puan azaltacak kadar iyileşiyor. Kohortun yaşam boyu modellendiğinde, önlenen inmeler 15.000 sakatlık ağırlıklı yıl kazandırıyor (0,32 ağırlıkla YLD artı ölümcül inmelerden YLL).

```
HALE katkısı ≈ 15.000 sağlıklı yıl / 500.000 kişi
             ≈ kayıtlı kişi başına 0,03 yıl (≈ 11 gün) HALE
```

On bir gün küçük görünür — ama nüfus ölçeğinde ulusal metrikler gerçekte böyle hareket eder: bakanlıklar milyonlarca minik kişi başı kazanım satın alır. Bu aritmetik ayrıca **erişimin baskın** olduğunu da gösterir: iki kat etkili ama onda biri kayıtlı bir müdahale HALE'i beş kat daha az hareket ettirir. Bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/).

## Yazılım mühendisliği bağlantısı

HALE bir filo sağlığı metriği örüntüsüdür: **beklenen hizmet ömrü × o ömrün sağlıklı geçen oranı**. Bir platform ekibi tüm envanteri için "sağlıklı hizmet ömrü beklentisi" hesaplayabilir — bir hizmetin çalışması beklenen yıllar, bozulmuş, kullanımdan kaldırılmış veya olay durumlarında geçirilen süre düşülerek (SLO açığından ağırlıklar). Güvenilirliği nokta erişilebilirlikten yaşam boyu sağlığa yeniden çerçeveler ve iyileştirmeyi envanterin HALE'ini aşağı çeken sistemlere yönlendirir.

## Tuzaklar

- **HALE yavaş ve çok nedenli hareket eder** — hiçbir tek müdahale HALE'i ölçülebilir biçimde "hareket ettirmez"; ulusal istatistiği değil modellenen katkıyı iddia edin.
- **Yaygınlık verisi yıllar gecikir**; yakın zamanki kazanımlar resmî HALE'de görünmez.
- **Farklı sağlık durumu ölçümüne sahip ülkeler arasında HALE karşılaştırmak** tehlikelidir; tek bir sistem içinde boylamsal kullanın.

## Kaynaklar

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
