# Maliyet-Sonuç Analizi (CCA)

CCA, maliyetleri **tüm sonuçların ayrıştırılmış bir tablosuyla** — klinik, operasyonel, deneyimsel — yan yana sunar; bunları tek bir orana veya puana indirgemez. Karar verici, ödünleşimleri açıkça tartar.

## Neden önemli

CCA, Kanıt Standartları Çerçevesi kapsamında NICE'ın **çoğu dijital sağlık teknolojisi için tercih ettiği ekonomik formattır**. Dijital ürünler (kazanılan zaman, memnuniyet, randevuya gelmeme azalması, küçük klinik kazanımlar) gibi tek bir QALY sayısında dürüstçe toplanmaya direnen heterojen etkiler üretir. Kırılgan bir bileşik zorlamak yerine CCA tüm defteri gösterir. Çoğu yazılım iş gerekçesi için hem en dürüst format hem de en ikna edici olandır, çünkü her paydaş kendi kararla ilgili satırını bulabilir.

## Matematik

Kasıtlı olarak toplulaştırma formülü yoktur. Çıktı bir tablodur:

```
                          Müdahale       Karşılaştırıcı   Fark
Maliyetler (yıllık)       £X             £Y               ΔC
Sonuç 1 (doğal birimler)  …              …                Δ1
Sonuç 2                   …              …                Δ2
Niteliksel sonuçlar       betimlenir, puanlanmaz
```

Her satır kendi birimlerini korur. Kurallar: her sonuç önceden belirlenir (sonuçlardan sonra seçmece yok); baştan sona aynı [perspektif](../analiz-perspektifi/) ve [ufuk](../zaman-ufku/); satır başına belirsizlik.

## Çözümlü örnek

Dijital ameliyat öncesi değerlendirme platformu ile telefon tabanlı süreç, yıllık, tek vakıf:

```
                              Dijital      Telefon     Fark
İşletme maliyeti              180.000 £    95.000 £    +85.000 £
Değerlendirmelerde hemşire saati  6.200    11.800      −5.600 saat
Ameliyat günü iptalleri       92           174         −82
Hasta memnuniyeti (CSAT)      4,5/5        3,9/5       +0,6
Kaybolan/eksik değerlendirme  %1,2         %4,8        −3,6 puan
```

Tek bir puan yok — ama karar akıl yürütmesi kolay: 85.000 £ 5.600 hemşire saati satın alır (≈ 15 £/saat, herhangi bir personel maliyetinin çok altında), kaçınılan 82 iptal (her biri ~1.200 £ değerinde bir ameliyathane seansını boşa harcar) ve daha iyi deneyim. Bir komite aynı zamanda tam olarak neyi *almadığını* da görebilir: iddia edilen QALY veya ölüm etkisi yok.

## Yazılım mühendisliği bağlantısı

CCA, iyi bir platform teklifinin zaten kullandığı dengeli puan kartının biçimsel sürümüdür: maliyet, DORA metrikleri, DevEx puanları, olay sayılarının yanında — toplulaştırılmamış. Eklenecek sağlık ekonomisi disiplini: **satırları önceden belirleyin** (pilottan önce neyin sayılacağına karar verin, böylece kötüleşen metriği sessizce bırakamazsınız) ve **olumsuz satırları gösterin** — yalnızca iyi haber içeren bir CCA pazarlamadır. Savunulabilir bir bileşik olmadığında CCA kullanın; geliştirici araçları için bu neredeyse her zamandır.

## Tuzaklar

- **Seçmece sonuçlar** — formatın bütünlüğü önceden belirlemeye bağlıdır.
- **Kaçak toplulaştırma**: renk kodlaması veya "genel puanlar", CCA'nın kaçınmak için var olduğu keyfî ağırlıkları yeniden getirir.
- **Karar felci**: CCA, ödünleşimleri tartmaya istekli bir karar verici gerektirir; bir tavsiye ve gerekçeyle eşleştirin.

## Kaynaklar

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
