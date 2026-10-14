# GDS Hizmet Metrikleri

Birleşik Krallık Hükümet Dijital Servisi (GDS) Hizmet Kılavuzu, her devlet dijital hizmeti için dört KPI zorunlu kılar: **işlem başına maliyet, kullanıcı memnuniyeti, tamamlama oranı ve dijital benimseme**. Birlikte bir kamu dijital hizmetinin asgari ekonomisidir — ve NHS dijital hizmetlerinin devraldığı şablondur.

## Neden önemli

GDS metrikleri, on yıllık devlet dijitalleşmesini finanse eden kanal kayması iş gerekçesini kodlar: Dijital Verimlilik Raporu, dijital işlemlerin telefondan ~20×, yüz yüzeden ~50× daha ucuz olduğunu buldu (yerel yönetim rakamları: web 0,15 £, telefon 2,83 £, yüz yüze 8,62 £). Ancak tasarruflar yalnızca insanlar dijital yolculuğu pahalı kanal *yerine* (benimseme) *tamamladığında* (tamamlama oranı) ortaya çıkar — dört KPI dört pano değil, tek bir ekonomik modeldir.

## Matematik

```
İşlem başına maliyet = toplam hizmet maliyeti / tamamlanan işlemler
Tamamlama oranı      = tamamlanan / başlatılan işlemler × 100
Dijital benimseme    = dijital işlemler / tüm kanal işlemleri × 100
Kullanıcı memnuniyeti = % memnun+çok memnun (5 puanlık, hizmet içi anket)

Kanal kayması tasarrufu = hacim × benimseme kayması × (maliyet_eski_kanal − maliyet_dijital)
… eksi başarısızlık talebi: (1 − tamamlama oranı) × yedek kanal maliyeti
```

## Çözümlü örnek

Bir NHS randevu yönetimi hizmeti: yılda 2 milyon işlem, şu an %70 telefon (3,20 £/çağrı) / %30 dijital (0,25 £). Bir yeniden tasarım dijital benimsemeyi %55'e ve tamamlamayı %84'ten %93'e çıkarıyor:

```
Benimseme kayması tasarrufu = 2 milyon × 0,25 × (3,20 − 0,25) = 1.475.000 £/yıl

Başarısızlık talebi tasarrufu: başarısız dijital yolculuklar telefona döner
  önce:  2 milyon × 0,30 × 0,16 × 3,20 £ = 307.200 £
  sonra: 2 milyon × 0,55 × 0,07 × 3,20 £ = 246.400 £
  net 60.800 £/yıl — tamamlama iyileştirmeleri benimseme kazanımlarını korur

Memnuniyet öncü göstergedir: memnun olmayan kullanıcılar telefona döner,
dolayısıyla memnuniyet düşüşü, benimseme erozyonunu ortaya çıkmadan önce tahmin eder.
```

## Yazılım mühendisliği bağlantısı

Bu dört KPI, bir [maliyet-sonuç tablosunun](../maliyet-sonuç-analizi/) üretim kalitesinde örneğidir: bir maliyet metriği, üç sonuç metriği, asla puana indirgenmez. Ürün mühendisleri için operasyonel dersler: **tamamlama oranı bir huni ölçümü problemidir** (her terk noktası bulunabilir ve düzeltilebilir); **işlem başına maliyet [bulut birim ekonomisi](../bulut-birim-ekonomisi/)** artı personel destekli kanal maliyetleridir; **benimseme kılık değiştirmiş bir eşitlik metriğidir** — kanal değiştiremeyen veya değiştirmeyen kullanıcılar orantısız biçimde yaşlı, engelli ve yoksundur, bu yüzden agresif kanal kapatma "tasarrufları" erişim zararına çevirir (bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/)). KPI'ları yayımlamak (GOV.UK hizmet başına yapar) kendi başına bir mekanizmadır: şeffaflık, [fayda gerçekleştirme](../fayda-gerçekleştirme/) denetimleri gibi tahminleri disipline eder.

## Tuzaklar

- **Zorlamayla benimseme**: telefon hattını kapatmak benimsemeyi artırır ve başarısızlık talebini ön saf personele yükler; toplam sistem maliyetini ölçün.
- **2. sayfadan ölçülen tamamlama**: huniyi terk noktasından sonra başlatmak oranı pohpohlar.
- **Destekli dijital ve başarısızlık talebi yönetimini göz ardı eden işlem başına maliyet**.
- **Yalnızca başarılı tamamlamada yapılan memnuniyet anketleri** — memnun olmayanlar çoğunlukla ankete hiç ulaşmaz.

## Kaynaklar

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
