# Katılım Metrikleri

Katılım metrikleri, kullanıcıların bir sağlık uygulamasını gerçekte ne kadar kullandığını ölçer: DAU/MAU yapışkanlığı, oturum sıklığı ve süresi, özellik kullanımı. Dijital sağlıkta katılım gösteriş değil — **dozdur**: her klinik etkinin içinden akması gereken maruziyet.

## Neden önemli

Şişede kalan bir ilaç kimseyi iyileştirmez; yüklenmemiş veya açılmamış bir uygulama aynı başarısızlık kipidir. Bir tüketici sağlık ürünü için her sağlık-ekonomik iddia katılımdan geçerek çarpılır — denemelerde gösterilen etkinlik bir kullanım düzeyinde ölçüldü ve gerçek dünya değeri, devreye almadaki kullanımın bu düzeye ne kadar yaklaştığıyla ölçeklenir. Standart ürün kıyaslamaları: DAU/MAU genel olarak mobil uygulamalar için yaklaşık **%20 sağlıklı sayılır**, >%25 istisnai; sağlık uygulamaları sıklıkla daha düşüktür.

## Matematik

```
Yapışkanlık (DAU/MAU) = günlük aktif kullanıcılar / aylık aktif kullanıcılar × 100
Oturum metrikleri     = oturum/kullanıcı/dönem; ort. süre = toplam süre / oturumlar
Özellik katılımı      = temel eylemi gerçekleştiren kullanıcılar / aktif kullanıcılar

Doz-yanıt çerçevesi (sağlık ekonomisi yükseltmesi):
  gerçekleşen etki ≈ deneme etkisi × f(fiili kullanım / deneme kullanımı)
  f, doz-yanıt analizinden gelir — adherence-and-persistence.md'deki
  "etkili katılım" kavramına bakın: amaçlanan sonuca ulaşmak için yeterli
  kullanım; mütevazı ve sonlu olabilir
```

## Çözümlü örnek

Bir kan basıncı uygulamasının kilit çalışması, haftada ≥4 ölçüm kaydeden kullanıcılar arasında 6 mmHg sistolik düşüş gösterdi. 50.000 kayıtlı kullanıcıya devreye almada:

```
MAU 20.000 (%40); bunlardan haftada ≥4× kaydeden: 7.000
Etkili doz kullanıcıları = 7.000 / 50.000 = kayıtlı tabanın %14'ü

Nüfus düzeyi etki ≈ deneme etkisi %100'e değil %14'e ulaştı:
"50.000 kullanıcı × 6 mmHg" diyen her ekonomik model ~7× abartır.
Dürüst model: 7.000 × tam etki + eşik altı 13.000 kullanıcı için
kısmi kredi (varsa doz-yanıt verisinden).
```

Bu çarpma — katılım hunisinden etkili doza — dijital sağlık ekonomisinin en sık şiştiği tek yerdir.

## Yazılım mühendisliği bağlantısı

Mühendisler katılım hunisinin sahibidir, bu da onları *klinik* bir değişkenin sahibi yapar: ilk kurulum sürtünmesi, bildirim stratejisi, yükleme süresi ve çevrimdışı dayanıklılık, iletilen dozu hareket ettirir. İki tasarım çıkarımı: **klinik olarak anlamlı eylemi** (kaydedilen ölçümler, tamamlanan dersler) ölçün, açılışları değil — bildirim sıçraması oturumlarından oluşan DAU doz sahtekârlığıdır; ve katılım hedeflerini *yeterlilik* hedefleri olarak ele alın, azamileştirme değil — haftada 5 dakikada sonucuna ulaşıp yoldan çekilen bir uygulama klinik olarak idealdir ve metrik olarak "zayıf"tır ([uyum ve süreklilik](../uyum-ve-süreklilik/)'te etkili katılıma bakın). Katılım çalışmasının kendisini yukarıdaki nüfus-etki modeliyle değerleyin: etkili doz payında 2 puanlık kazanç ölçülebilir bir QALY satırıdır.

## Tuzaklar

- **Sonuç olarak katılım**: kullanım bir araçtır; sonuç [PROM](../hasta-bildirimli-sonuçlar/) veya klinik sonlanım noktasıdır.
- **İki modlu kullanım üzerinden ortalamalar**: sağlık uygulaması nüfusları sadık kullanıcılar ve hayaletler olarak ikiye ayrılır; ortalamalar kimseyi tanımlamaz — kohortlayın.
- **Karanlık örüntü doz şişirmesi**: seriler ve suçluluk bildirimleri metrikleri yükseltir ve sağlık uygulamalarının hizmet verdiği kaygılı nüfuslara zarar verebilir; klinik ürünler klinik etik taşır.
- **Satıcı kıyaslaması kaynağı**: yayımlanmış katılım kıyaslamalarının çoğu hakemli değil analitik satıcılardan gelir; kendi denemelerinize karşı kalibre edin.

## Kaynaklar

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
