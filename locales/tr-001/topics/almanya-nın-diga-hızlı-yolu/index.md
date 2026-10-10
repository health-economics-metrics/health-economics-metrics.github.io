# Almanya'nın DiGA Hızlı Yolu

DiGA (Digitale Gesundheitsanwendungen), Almanya'nın yasal "reçeteli uygulamalar" yoludur — hekimlerin onaylı sağlık uygulamalarını reçete ettiği ve yasal sigortanın bunları geri ödemek zorunda olduğu dünyanın ilk ulusal sistemi. Ulusal ölçekte dijital terapötikler için ödeme yapmanın önde gelen canlı deneyidir.

## Neden önemli

DiGA, her dijital sağlık şirketinin sorduğu soruyu — "gerçekten kim ödeyecek?" — yasamayla (DVG, 2019) yanıtladı. Tasarım dikkat çekici:

- **Hızlı karar**: BfArM (düzenleyici) 3 ay içinde karar vermelidir.
- **Geçici listeleme**: uygulamalar *hâlâ kanıt üretirken* 12 ay boyunca listelenebilir — kilit çalışmaları sırasında gelir elde ederler.
- **Kanıt son tarihi**: karşılaştırmalı bir çalışmayla — genellikle bir RCT — "olumlu sağlık etkisi" (tıbbi fayda veya hastayla ilgili yapısal/prosedürel iyileştirme) kanıtlanmalı ya da listeden çıkarılır. Geçici girişlerin kabaca yarısı kalıcılığa dönüşemez.
- **Fiyatlandırma**: üretici 1. yıl fiyatını serbestçe belirler; sonra sigortacılar federasyonuyla müzakere edilir. Medyan ilk 3 aylık fiyatlar yaklaşık 500 €; performansa dayalı fiyatlandırma unsurları 2026'dan itibaren geliyor.

Pazar gerçeklik kontrolü (2024 sonuna kadarki araştırma): ~68 uygulama listelenmiş, >1 milyon kümülatif reçete, reçetelerin ~%81'i aktive edilmiş, ~234 milyon € kümülatif sigortacı harcaması — gerçek bir pazar, ama abartıya kıyasla mütevazı ve aktivasyondan sonraki uyum zayıf nokta olmaya devam ediyor.

## Matematik

Her DiGA kurucusunun işlettiği ticari model:

```
Gelir = reçeteler × aktivasyon oranı × reçete dönemi başına fiyat
Kanıt maliyeti = 12 aylık pencere içinde kilit RCT (tipik olarak 1–3 milyon €)
Beklenen değer = P(kanıt başarılı) × kararlı durum geliri − kanıt maliyeti

~%50 dönüşüm başarısızlığıyla P dürüstçe değerlendirilmelidir — alanın yarısı
RCT parasını harcar ve listelemeyi kaybeder.
```

## Çözümlü örnek

Bir depresyon yönetimi uygulaması çeyrek başına 450 € ile geçici olarak listelenir:

```
1. yıl: 20.000 reçete × %81 aktivasyon × 450 € ≈ 7,3 milyon € gelir
RCT maliyeti: 2 milyon €, eş zamanlı yürüyor
Sonuç A (kanıt olumlu): kalıcı listeleme, müzakere edilen fiyat ~380 €,
  kararlı durum 60.000 reçete/yıl ≈ 18,5 milyon €/yıl
Sonuç B (kanıt başarısız): 12. ayda listeden çıkarılır; gelir durur.
```

Geçici yıl kanıt üretimini finanse eder — yolun temel yeniliği. Geleneksel sıralamayla (önce kanıt, yıllar sonra gelir) karşılaştırın; bu sıralama DiGA'nın var olmasını istediği ürünleri tam olarak aç bırakır.

## Yazılım mühendisliği bağlantısı

DiGA'nın örüntüsü — **önceden kaydedilmiş bir başarı metriği ve otomatik gün batımıyla geçici benimseme** — mühendislik aracı yönetişimi için doğrudan kopyalanabilir: aracı 12 ay boyunca üretim kullanıcılarına gönderin, metriği önceden kaydedin (ölçülen kazanılan zaman, olay azalması), kanıt gelmedikçe otomatik süresi dolsun. Kanıtlanmamış teknolojiye kalıcı kadro vermeden pilot paradoksunu (değer kanıtlamak için ölçeğe ihtiyaç duyan ama asla ölçek alamayan araçlar) çözer. %81 aktivasyon/düşük uyum verisi de bir ürün dersi taşır: reçete (veya yönetici talimatı) kurulum getirir; sürdürülen kullanımı yalnızca ürün kalitesi getirir — bkz. [uyum ve süreklilik](../uyum-ve-süreklilik/).

## Tuzaklar

- **Listelemeyi bitiş çizgisi saymak** — reçeteler reçete yazanın güvenini gerektirir; listelenen birçok DiGA ihmal edilebilir hacim görür.
- **Gelir yılında para tasarruf etmek için kilit çalışmayı yetersiz güçlendirmek** — %50 başarısızlık oranının büyük bölümünü açıklayan sahte tasarruf.
- **Modeli ödeyici olmadan taşımak**: DiGA geri ödeme yasal olduğu için çalışır; zorunlu ödemesi olmayan bir kopya yalnızca bir pilot programdır.

## Kaynaklar

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
