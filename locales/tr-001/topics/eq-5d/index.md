# EQ-5D

EQ-5D, EuroQol grubunun sağlıkla ilgili yaşam kalitesini ölçmek için standartlaştırılmış anketidir. Çoğu [QALY](../kaliteye-ayarlı-yaşam-yılı/) hesaplamasının içindeki yarar ağırlıklarını üreten araçtır — NICE'ın referans durumu yetişkinler için tercih edilen ölçü olarak onu adlandırır.

## Neden önemli

QALY iddia etmek isteyen her dijital sağlık ürünü doğrulanmış bir araçtan yararlara ihtiyaç duyar ve EQ-5D, Birleşik Krallık'ta ve Avrupa'nın büyük bölümünde varsayılandır. Bir uygulamaya gömülebilecek kadar kısadır (5 soru + görsel bir ölçek), bu da yazılım ürünlerinin normal kullanımın yan ürünü olarak HTA düzeyinde sonuç verisi toplayabileceği anlamına gelir — özel çalışmalara ihtiyaç duyan ilaçlara karşı yapısal bir avantaj.

## Matematik

EQ-5D-5L, **5 boyutun** her birinde bir soru sorar — hareketlilik, öz bakım, olağan etkinlikler, ağrı/rahatsızlık, kaygı/depresyon — her biri **5 düzeyde** yanıtlanır (sorun yok … aşırı sorun), artı 0–100 görsel analog ölçek (EQ VAS).

```
Sağlık durumu = 5 haneli profil, örn. "21221"
Yarar indeksi = değer_seti(profil)

Değer seti ülkeye özgüdür, genel halkın zaman ödünleşimi /
ayrık seçim anketlerinden türetilir. Çapalar: 1 = tam sağlık,
0 = ölü; ölümden kötü durumlar negatiftir (BK 3L seti tabanı: −0,594).
```

QALY aritmetiği sonra `süre × yarar` olarak ilerler.

## Çözümlü örnek

Bir kas-iskelet rehabilitasyon uygulaması, tamamlayan 1.000 kullanıcı için başlangıçta ve 6. ayda EQ-5D-5L ölçer.

```
Başlangıçta ortalama yarar:  0,62
6. ayda ortalama yarar:      0,71
Kazanç sürdürülür (varsayalım) 1 yıl: (0,71 − 0,62) × 1,0 = kullanıcı başına 0,09 QALY
```

0,03'lük bir kontrol grubu değişimine (doğal iyileşme) karşı atfedilebilir kazanç kullanıcı başına 0,06 QALY'dir. 20.000–30.000 £/QALY'den parasallaştırıldığında: **tamamlayan kullanıcı başına 1.200–1.800 £ sağlık değeri** — uygulamanın bir ödeyiciyle fiyat müzakeresini çapalayan sayı. (EQ-5D indeksi için minimal klinik olarak önemli farklar yaygın olarak 0,03–0,08 aralığındadır; yani 0,06 makuldür ancak kontrol karşılaştırmasını geçmelidir; bkz. [hasta bildirimli sonuçlar](../hasta-bildirimli-sonuçlar/).)

## Yazılım mühendisliği bağlantısı

- **Aracı uygulayın.** Kayıtta ve takip aralıklarında EQ-5D birkaç arayüz ekranıdır; getirisi HTA düzeyinde kanıttır. EuroQol'dan lisans alın (zorunlu, bazı kullanımlar için ücretsiz).
- Devreye alma ülkesi için **doğru değer setini kullanın** — aynı yanıtlar BK'de, Almanya'da ve Japonya'da farklı puanlanır.
- **Tasarım dersi**: EQ-5D, minik standart bir anketin yayımlanmış bir puanlama işleviyle nasıl karşılaştırılabilir tek bir indeks verdiğini gösterir. Bu, herhangi bir inandırıcı geliştirici deneyimi indeksi için de örüntüdür — standartlaştırılmış araç, yayımlanmış ağırlıklar, geçici hisler değil. Bkz. [SPACE ve DevEx](../space-ve-devex/).

## Tuzaklar

- **Karşılaştırıcı olmadan önce/sonra** — ortalamaya gerileme ve doğal iyileşme saf kazançları şişirir.
- **Hayatta kalan yanlılığı**: yalnızca katılımını sürdüren kullanıcıları ölçmek (bkz. [elde tutma ve kayıp](../elde-tutma-ve-kayıp/)).
- **Çalışmalar arasında 3L ve 5L sürümlerini veya değer setlerini karıştırmak** — sistematik olarak farklı sayılar.
- **Hafif etkilenen nüfuslarda tavan etkileri**: birçok kullanıcı başlangıçta 1,0'a yakın puan alır ve kazanç göstermek için pay bırakmaz.
- **Bir değer setini kendi kendini haklı çıkaran saymak**: bir değer setinin döndürdüğü yarar sayılarının kendileri halktan zaman ödünleşimi (veya ilgili seçim tabanlı) anketleriyle elde edildi — nasıl olduğu için bkz. [Zaman Ödünleşimi (TTO) Yarar Elde Etme](../zaman-takası-tto-fayda-çıkarımı/).

## Kaynaklar

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
