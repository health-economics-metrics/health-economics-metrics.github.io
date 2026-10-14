# Aşağı Akış Kaynak Optimizasyonu

Kıdemli bir uygulayıcıya — bir aile hekimi, kıdemli bir asistan, bir konsültan — bir saat kazandırmak, çoğu zaman klinik onayları bekleyen hemşire, idari katip ve terapistlerden oluşan çok disiplinli bir ekibin (MDT) tamamı için darboğaz gecikmelerini önler. Darboğazı açmanın değeri, onun aşağı akışındaki herkesin verimidir.

## Neden önemli

Sağlık hizmeti yetkilendirme zincirleriyle işler: taburculuklar konsültan imzasını, tedavi planları MDT incelemesini, sevkler triyajı bekler. Kapı bekçisi rol geciktiğinde maliyet bir kişinin saati değil — her bağımlı rolde boşta veya bloke zaman artı belirsizlikteki hasta zamanıdır (ek [yatak günleri](../kazanılan-yatak-günleri/), daha uzun [RTT beklemeleri](../tedaviye-sevk/)). Bu, kısıtlar kuramının klinik yollara uygulanmasıdır: *kısıtta* kazanılan bir saat tüm sistemin marjinal veriminin değerindedir; başka yerde kazanılan bir saat çok daha az değerlidir.

## Matematik

```
Açmanın değeri = aşağı akış roller üzerinden Σ (serbest kalan bloke saatler × birim maliyet)
               + yol veriminin artışı × tamamlanan yol başına değer

Karşıtlık: kapı bekçisi olmayan bir rolde kazanılan aynı saatin değeri ≈
yalnızca o rolün kapasite değeri (bkz. practitioner-time.md).
```

Kısıtı ampirik olarak belirleyin: iş nerede en uzun kuyruk oluşturuyor? Gecikmeler kimin gelen kutusuna kadar izleniyor?

## Çözümlü örnek

Bir servisin taburculukları her sabah konsültan incelemesi gerektiriyor. Konsültan, sistemlere dağılmış bilgiyi derlemek için günde 90 dk harcıyor; incelemeler 14:00'e kadar bitiyor ve günde 6 taburculuk o gün için çok geç tamamlanıyor — her biri kaçınılabilir bir yatak günü maliyeti.

Bir taburcu özeti panosu (tetkikler, ilaçlar, uyarılar tek görünümde) derlemeyi 20 dakikaya düşürüyor; incelemeler 11:30'a kadar bitiyor:

```
Kaçınılan yatak günleri = 6 geç taburculuğun 4'ü × 365 ≈ 1.460 yatak günü/yıl
Aşağı akış açılması:    2 taburcu koordinatörü + eczane + nakil
                        önceden her öğleden sonra boşta-sonra-sıkışık —
                        günde ~3 personel saati bloke zaman serbest ≈ 1.100 saat/yıl
```

Konsültanın kendi 70 dakikası değerin *en küçük* kısmıdır — bu metriğin amacı. Yatak günlerini mekanizmaya göre (bkz. [kazanılan yatak günleri](../kazanılan-yatak-günleri/)) ve personel saatlerini kapasite olarak değerleyin.

## Yazılım mühendisliği bağlantısı

Bu, kod incelemesi, mimari onayı ve kıdemli mühendisin gelen kutusudur. Beş mühendis bir tasarımı onaylayabilecek tek kişiyi bir gün beklediğinde maliyet, bir inceleyici saati değil beş mühendis günü artı işin kendisinde bir günlük [gecikme maliyeti](../gecikme-maliyeti/)dir. Kapı bekçisi rolün görevini sıkıştıran araçlar (daha iyi inceleme bağlamı, otomatik ön kontroller, onaylayanın ihtiyaç duyduğunu derleyen panolar) bireysel rahatlık değil sistem verimi satın alır. Kısıttaki alma/bekleme süresini ölçün (bkz. [akış metrikleri](../akış-metrikleri/)) — 14:00 taburculuk uçurumunun yazılım eşdeğeridir.

## Tuzaklar

- **Kısıt olmayanı optimize etmek**: ardında hiçbir şeyin kuyruğa girmediği bir rol için güzel araçlar neredeyse sıfır sistem değeri üretir.
- **Kısıt göçü**: konsültanı açarsanız kısıt kayar (eczaneye, nakile) — tam verim kazanımı iddia etmeden önce *sonraki* kısıtı modelleyin.
- **Aşağı akış saatlerini nakit saymak**: bloke zaman serbest bırakma kapasitedir, olağan [yeniden dağıtım testine](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/) tabidir.

## Kaynaklar

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
