# Bulut Birim Ekonomisi (FinOps)

Bulut birim ekonomisi, ham bulut harcamasını **çıktı birimi başına maliyete** çevirir — müşteri başına, işlem başına, çözülen vaka başına, jeton başına. "AWS faturamız ayda 400 bin £" cümlesini "bir hastaya hizmet vermek 0,83 £ tutuyor"a dönüştüren FinOps yeteneğidir.

## Neden önemli

Toplam harcama rakamları önemli soruları yanıtlayamaz: ürün daha verimli mi oluyor yoksa daha az mı? Büyüme marjı iyileştiriyor mu yoksa yok mu ediyor? Ne ücretlendirmeliyiz? Birim maliyetler üçünü de yanıtlar. Özellikle dijital sağlık için "çözülen vaka başına maliyet" bir sağlık hizmeti birim maliyetidir — bir komisyoncunun diğer her hizmet için kullandığı [Ulusal Maliyet Derlemesi](../ulusal-tarife-ve-birim-maliyetler/) rakamlarıyla doğrudan karşılaştırılabilir; bu da dijital yolları geleneksel olanlara karşı fiyatlamanın doğal dilidir.

## Matematik

```
Birim maliyet = toplam tahsis edilmiş maliyet (paylaşılan/platform maliyetleri dahil) / teslim edilen birimler

İki aile:
  kaynak verimliliği birimleri: maliyet/GB depolanan, maliyet/vCPU-saat, maliyet/jeton,
                                maliyet/derleme-dakikası
  iş birimleri:                 maliyet/müşteri, maliyet/işlem, maliyet/muayene,
                                maliyet/çözülen-vaka

Marjinal ve ortalama disiplini geçerlidir (marginal-vs-average-cost.md):
taahhütlü/rezerve harcama, bir sonraki taahhüt basamağına kadar marjinal birim
maliyeti ≈ 0 yapar — genişleme kararlarını marjinal, verimlilik
eğilimlerini ortalama üzerinden fiyatlayın.
```

## Çözümlü örnek

Dijital bir triyaj hizmeti: aylık bulut harcaması 62.000 £ (hesaplama 30 bin £, veri 18 bin £, paylaşılan platform tahsisi 14 bin £), ayda 380.000 triyaj vakasını işliyor:

```
Vaka başına ortalama maliyet = 62.000 / 380.000 ≈ 0,163 £

Komisyoncu karşılaştırması: telefonla triyaj ≈ 8–12 £/çağrı, aile hekimi muayenesi ≈ 42 £
→ dijital vaka en ucuz insan alternatifinin ~%2'sinde çalışıyor — gds-service-metrics.md'nin
  kanal kayması ekonomisi, maliyet tarafından.

Eğilim kontrolü: geçen yıl 240 bin vakada 0,21 £/vaka → iyileşen ölçek ekonomisi
(sabit platform maliyetleri amorti oluyor), çeyreklik değerlendirmede manşete layık.
```

## Yazılım mühendisliği bağlantısı

Birim ekonomisi, mühendislik seçimlerinin finans tarafından okunabilir hâle geldiği yerdir: vaka başına maliyeti yarıya indiren bir mimari fiyatlama avantajıdır; süper-doğrusal ölçeklenen ise yalnızca bu metrikte görünen bir saatli bombadır. Sağlık maliyetlemesinden aktarılan uygulamalar: **tahsis kurallarını yayımlayın** (paylaşılan maliyetler, PLICS hasta düzeyinde maliyetlemeyi standartlaştırana kadar birim rakamları çarpıttı — platform maliyeti tahsisiniz aynı titizliğe ihtiyaç duyar); **alıcının düşündüğü birimleri seçin** (komisyoncular vCPU değil vaka satın alır); ve birim maliyetleri her [ICER](../artımlı-maliyet-etkililik-oranı/) ve [bütçe etkisi](../bütçe-etki-analizi/) modeline yetkili maliyet paydası olarak besleyin. Yapay zekâ özellikleri için birim jetondur — bkz. [çıkarım birim ekonomisi](../çıkarım-birim-ekonomisi/).

## Tuzaklar

- **Paylaşılan maliyetleri yok saymak**: platform/güvenlik/nöbet tahsislerini dışlayan birim maliyetler %30–50 düşük gösterir ve denetimde çöker.
- **Gösteriş paydaları**: "API çağrısı başına maliyet" pohpohlar; "tamamlanan hasta vakası başına maliyet" bilgilendirir.
- **Marjinal kararların ortalama maliyetle fiyatlanması**: marjinal olarak bedava kullanım için ekiplerden ortalama birim maliyet almak israftan kaçınma tiyatrosunu körükler (bu teşvik hatasının NHS sürümü için bkz. [ulusal tarife](../ulusal-tarife-ve-birim-maliyetler/)).

## Kaynaklar

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
