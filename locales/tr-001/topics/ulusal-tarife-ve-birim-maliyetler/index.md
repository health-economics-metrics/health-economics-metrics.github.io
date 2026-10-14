# Ulusal Tarife ve Birim Maliyetler

NHS, sağlayıcılara faaliyet için kurallara dayalı ulusal bir fiyat listesi altında ödeme yapar — tarihsel olarak 1 Nisan 2023'te yerini **NHS Ödeme Şeması (NHSPS)** alan Ulusal Tarife / Sonuca Göre Ödeme. Fiyatların arkasında ulusal bir birim maliyetleme altyapısı durur: **Ulusal Maliyet Derlemesi (NCC)** ve **PSSRU Sağlık ve Sosyal Bakım Birim Maliyetleri** derlemesi.

## Neden önemli

Bunlar her inandırıcı NHS iş gerekçesinin paydalarıdır. Bir iddia "bir poliklinik başvurusu 160 £ değerindedir" veya "bir Band 6 hemşire saati 31 £ tutar" dediğinde, bu sayılar bu altyapıdan gelir — ve icat edilmiş değil resmî rakamları kullanmak, bağımsız değerlendirmeleri karşılaştırılabilir ve finans ekiplerini işbirlikçi kılan şeydir. Bir satıcı için tarife aynı zamanda *gelir* tarafını da tanımlar: yazılımınızın mümkün kıldığı faaliyet (ekstra klinikler, yeniden doldurulan yataklar) şema fiyatlarıyla değerlenir.

## Matematik

```
Faaliyet birimi başına tarife fiyatı (HRG kodlu dönem, poliklinik başvurusu)
  = ulusal ortalama birim maliyet (NCC'den) × Piyasa Güçleri Faktörü (yerel ayar)
  NHSPS altında: harmanlanmış sabit + değişken ("uyumlu ödeme ve teşvik") unsurlar

NCC birim maliyeti = vakıfça bildirilen bir faaliyet türünün toplam maliyeti / faaliyet hacmi
                     (Hasta Düzeyinde Bilgi ve Maliyetleme Sistemleri, PLICS üzerine kurulu)

PSSRU derlemesi: ~80 standart birim maliyet (aile hekimi muayenesi, banda göre hemşire
saati, acil servis başvurusu…) — BK ekonomik değerlendirmelerinde varsayılan kaynak.
```

## Çözümlü örnek

Yazılımınız 250 günlük çalışma yılında bir Band 6 hemşirenin zamanından günde 1 saat serbest bırakıyor:

```
PSSRU tabanlı Band 6 maliyeti genel giderler dahil ≈ 31 £/saat (güncel baskıyı kontrol edin)
Kapasite değeri = 250 × 31 £ = 7.750 £/hemşire/yıl (nakit serbest bırakmayan)
```

Alternatif olarak hemşire günde ~160 £ şema değerinde 2 ekstra poliklinik takip randevusu yapar: 500 × 160 £ = **yılda 80.000 £ fonlu faaliyet** — yeniden dağıtıma bağlı olarak iddia edilen değerde on kat fark, hepsi resmî birim maliyetlerden. Her iki iddia da denetlenebilirdir çünkü paydalar yayımlanmıştır; bütün mesele budur.

## Yazılım mühendisliği bağlantısı

Bu **dahili fiyat kitabı** örüntüsüdür. BK sağlık ekonomisi, her değerlendirme aynı yayımlanmış birim maliyetleri kullandığı için işler; mühendislik kuruluşlarında çoğunlukla bu yoktur, bu yüzden her iş gerekçesi kendi mühendis saati, olay, dağıtım maliyetini icat eder. Bir platform ekibi tam olarak böyle bir kitap yayımlayabilir — seviyeye göre mühendis saati başına, önem derecesine göre olay başına, derleme dakikası başına yüklü maliyet — ve tüm tekliflerde kullanımını şart koşabilir. Geri ücretlendirme/gösterim (chargeback/showback) sistemleri tarifenin bilinen başarısızlık kiplerini de tekrarlar: ortalama maliyet fiyatlaması hacim oyunlarını, sabit ödemeler eksik sunumu tetikler. NHSPS'nin saf faaliyet ödemesinden harmanlanmış sabit+değişken ödemeye evrimi, dahili platform fiyatlaması için teşvik tasarımı üzerine yirmi yıllık dersler içerir.

## Tuzaklar

- **Eskimiş rakamlar**: NCC, PSSRU ve NHSPS fiyatları yıllık yenilenir — her sayıyı tarihlendirin.
- **Tarife fiyatı ≠ maliyet**: fiyatlar ayarlamalı ulusal ortalamalardır; yerel marjinal maliyetiniz farklıdır (bkz. [marjinal ve ortalama maliyet](../marjinal-ve-ortalama-maliyet/)).
- **Ekstra faaliyeti gerçekten teslim edip ödeme almak için mekanizma olmadan kapasiteyi tarife üzerinden değerlemek**.

## Kaynaklar

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
