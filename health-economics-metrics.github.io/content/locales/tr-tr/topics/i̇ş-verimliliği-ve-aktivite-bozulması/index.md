# İş Verimliliği ve Aktivite Bozulması (WPAI)

WPAI, bir sağlık sorununun ücretli işi ve günlük aktiviteleri ne kadar etkilediğini, genellikle son 7 gün üzerinden ölçen doğrulanmış bir öz bildirim anketidir (Reilly, Zbrozek, Dasbach, 1993). Kaybı *devamsızlığa* — kelimenin tam anlamıyla kaçırılan iş zamanı — ve *işte varken verimsizliğe* (presenteeism) — fiziksel olarak işteyken azalan üretkenlik — böler; ikincisi genellikle daha büyük, daha gizli maliyet bileşenidir.

## Neden önemli

Basit hastalık günü sayımları yalnızca devamsızlığı görür. Hiç izin almayan ama kronik bir durum nedeniyle %60 kapasiteyle çalışan bir klinisyen veya bilgi çalışanı, devamsızlık kaydına sıfır katkıda bulunurken yine de büyük, gerçek bir verimlilik kaybı üretir — WPAI bu görünmez maliyeti ortaya çıkarmak için özel olarak tasarlanmıştır. Özel yapım bir anket değil doğrulanmış bir araç olduğundan, puanları değerlendiricinin ölçümü yeniden doğrulamasına gerek kalmadan [hasta bildirimli sonuç](../hasta-bildirimli-sonuçlar/) kanıt paketlerinde ve hastalık maliyeti çalışmalarında kullanılabilir. Bir öz bildirim aracı olarak kendisi bir tür PROM'dur; esas olarak semptomlar veya yaşam kalitesi yerine iş ve aktiviteye odaklanmasıyla ayrışır.

## Matematik

```
Devamsızlık % = sağlık_nedeniyle_kaçırılan_saat / (sağlık_nedeniyle_kaçırılan_saat + çalışılan_saat) × 100

İşte varken verimsizlik % = çalışırken öz değerlendirilen 0–10 bozulma, × 10
                  (ankette doğrudan elde edilir, burada türetilmez)

Genel İş Bozulması % =
    Devamsızlık% + (1 − Devamsızlık%/100) × Verimsizlik%
    (ikisini birleştirir, böylece toplam asla %100'ü aşamaz)

Verimlilik maliyeti = Genel İş Bozulması% / 100 × dönem_kazancı
```

Genel bozulma formülü kasıtlı olarak basit bir toplam değildir: iki yüzdeyi doğrudan toplamak %100'ü aşabilir, bu nedenle işte varken verimsizlik yalnızca iş zamanının *kalan* (devamsız olmayan) payına uygulanır.

## Çözümlü örnek

Migreni olan bir çalışan 40 saatlik bir hafta için planlandığını ama bunun 4 saatini kaçırdığını bildiriyor:

```
kaçırılan_saat = 4, çalışılan_saat = 36
Devamsızlık% = 4 / (4 + 36) × 100 = %10
```

Ayrıca çalışırken verimlilik etkisini WPAI anketinde 10 üzerinden 3 olarak öz değerlendiriyor, yani `Verimsizlik% = %30` (bu adım ham bir anket cevabıdır, diğer sayılardan türetilmiş bir şey değildir):

```
Genel İş Bozulması% = 10 + (1 − 10/100) × 30
                     = 10 + 0,9 × 30
                     = 10 + 27
                     = %37
```

800 £ kazançlı (günde 160 £) 5 günlük bir hafta boyunca:

```
Verimlilik maliyeti = 37/100 × 800 = 296 £
```

Naif bir hastalık günü sayımının yalnızca kaçırılan 4 saati (%10) kaydedeceğine dikkat edin — işte varken verimsizlik bileşeni, sayıldığında gerçek bozulmayı neredeyse üçe katlar.

## Yazılım mühendisliği bağlantısı

Bu doğrudan mühendislik ekibi sağlık metriklerine eşlenir:

- **Devamsızlık**, hastalık izni ve yıllık izindir — görünür, zaten izlenen ve kolay kısım.
- **İşte varken verimsizlik**, her stand-up'ta bulunan ama azalmış kapasiteyle çalışan tükenmiş veya bağlam değiştirmeyle aşırı yüklenmiş mühendistir — genellikle daha büyük ve daha gizli maliyettir, kadro veya devam verisinde görünmezdir. Bunun yerine [DORA](../dora-metrikleri/) ve [akış metriklerinde](../akış-metrikleri/) azalan verim olarak veya bozulmayı "faiziyle" daha da bileşik hale getiren tam da o [teknik borcun](../teknik-borç/) daha yavaş çözülmesi olarak ortaya çıkar.
- Mühendislik dersi klinik olanla aynıdır: yalnızca yokluğu ölçüp buna "verimlilik kaybı" demek, orada ama bozulmuş olan herkesi kaçırdığı için gerçek maliyeti sistematik olarak olduğundan düşük gösterir.

## Tuzaklar

- **Öz bildirimde hatırlama yanlılığı.** 7 günlük hatırlama penceresi, her geriye dönük öz bildirim gibi aynı raporlama çarpıtmalarına tabidir.
- **0–10 verimsizlik ölçeğini gerçek bir fiziksel ölçüm olarak ele almak.** Sıralıdır, öz değerlendirmeyle elde edilir, doğrulanmış bir fiziksel nicelik değildir — üzerindeki farkları kesinlikle doğrusal veya aralıklı olarak ele almak bir modelleme kolaylığıdır, doğrulanmış bir fiziksel gerçek değil.
- **WPAI varyantları arasında puanları havuzlamak.** WPAI'nin birkaç duruma özgü versiyonu vardır — WPAI:GH (genel sağlık), WPAI:SHP (belirli sağlık sorunu) ve hastalığa özgü varyantlar — ve farklı varyantlardan gelen puanlar, aynı araç versiyonu olduklarını önce kontrol etmeden havuzlanmamalı veya karşılaştırılmamalıdır.

## Kaynaklar

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
