# Kaçınılabilir Dış Kaynak Maliyetleri

Bir vakıf hedeflerini iç kapasiteyle karşılayamadığında, kapasiteyi prim fiyatlarla satın alır: kendi personeli için hafta sonu mesaisi veya işlemleri özel sağlayıcılara dış kaynak olarak vermek. Kapasite serbest bırakan yazılımın ekonomik değeri, **bu prim fiyatlı işin kaçınılabilir maliyetini** içerir.

## Neden önemli

Elektif iyileşme baskısı altında vakıflar düzenli olarak özel sektörün anlık fiyatlarını (çoğu kez NHS şema fiyatının 1,2–1,5 katı) veya hafta sonu listeleri için kendi konsültanlarına bekleme listesi girişimi prim ücretlerini öder. Sıradan kapasite iddialarının aksine, kaçınılan dış kaynak kullanımı **nakit serbest bırakıcıdır**: özel sağlayıcıya kesilen fatura gerçekten kesilmez. Bu da onu iç işleme kapasitesini artıran yazılımın sahip olabileceği en güçlü fayda satırlarından biri ve kanıtlanması en kolay olanlardan biri yapar, çünkü dış kaynak harcaması zaten görünür bir bütçe satırıdır.

## Matematik

```
Kaçınılabilir dış kaynak maliyeti = kuruma geri alınan faaliyet × (dış kaynak birim fiyatı
                                    − vaka başına iç marjinal maliyet)

İç marjinal maliyet: sarf malzemeleri + ek faaliyet için değişken personel
— sabit tesisler zaten ödenmiştir (bkz. marginal-vs-average-cost.md).
```

İddia, serbest kalan iç kapasitenin faaliyeti gerçekten karşılamasını gerektirir: ameliyathane seansları, yataklar ve personelin hepsi mevcut olmalıdır (bağlayıcı kısıt belirler — yine kısıtlar kuramı).

## Çözümlü örnek

Bir vakıf yılda 800 katarakt işlemini tanesi 900 £'dan dış kaynağa veriyor: 720.000 £/yıl dış harcama, şema fiyatı ~750 £'a karşı.

Ameliyathane planlama yazılımı (liste optimizasyonu, iptallerden boşlukları doldurma, devir süresi izleme) iç ameliyathane kullanımını 500 işlemi geri getirmeye yetecek kadar artırıyor:

```
Vaka başına iç marjinal maliyet ≈ 350 £ (sarf malzeme + seans bazlı personel)
Tasarruf = 500 × (900 − 350) = 275.000 £/yıl — nakit serbest bırakan
Kalan dış kaynak: 300 × 900 £ = 270.000 £ (önceden 720.000 £)
```

Yazılım maliyeti 90.000 £/yıl → net ≈ **+185.000 £/yıl bankaya yatırılabilir nakit**, ayrıca işi kurum içinde tutmanın iç kalite ve eğitim faydaları.

## Yazılım mühendisliği bağlantısı

Doğrudan benzeri **yüklenici ve danışmanlık primidir**: iç mühendislik kapasitesi taahhütleri karşılayamadığında kuruluşlar dış kapasiteyi yüklü iç oranların 1,5–3 katına satın alır. İç işleme kapasitesini artıran platform ve verimlilik yatırımları, kaçınılan yüklenici harcamasını tam olarak yukarıdaki gibi talep etmelidir — dış günlük ücret eksi iç marjinal maliyet, çarpı geri alınan iş — çünkü bu, bir geliştirici verimliliği iş gerekçesindeki gerçekten nakit serbest bırakan az sayıda satırdan biridir. Aynı uyarı geçerlidir: iç kapasite gerçekten var olmalı ve geri alınan işe planlanmalıdır, aksi hâlde iddia kurmacadır.

## Tuzaklar

- **Tüm kapasite zinciri olmadan geri alma iddiası** — cerrahlar serbest ama ameliyathane seansı yoksa (veya mühendisler serbest ama ürün yönetimi bant genişliği yoksa) hiçbir şey geri alınmaz.
- **Dış kaynak fiyatını marjinal maliyet yerine iç ortalama maliyetle karşılaştırmak** — tuhaf biçimde tasarrufu olduğundan düşük gösterir; sabit maliyetler her iki durumda da işler.
- **Kalite/karmaşıklık asimetrisi**: dış kaynağa verilen vakalar çoğu kez basit olanlardır; bunları geri almak iç vaka karışımını ve birim maliyetlerini değiştirir.

## Kaynaklar

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
