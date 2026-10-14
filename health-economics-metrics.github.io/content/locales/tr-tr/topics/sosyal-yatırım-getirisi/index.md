# Sosyal Yatırım Getirisi (SYG)

SYG, [YG](../yatırım-getirisi/)'yi piyasaların fiyatlamadığı sonuçlara — iyi oluş, toplumsal bağ, çevresel etki — bunları finansal vekillerle parasallaştırarak, etkilenen *tüm* paydaşlar için genişletir.

## Neden önemli

Sağlık ve topluluk müdahalelerinin ürettiğinin büyük kısmı hiçbir bütçe kalemine dokunmaz: azalan yalnızlık, bakım verenin rahatlaması, istihdam kazanımları, itibar. Social Value International'ın yedi ilkesiyle (paydaşları dahil et, önemli olanı değerle, aşırı iddia etme, şeffaf ol, doğrula…) yönetilen SYG, "yatırılan her 1 £ için 3,20 £ sosyal değer" gibi ifadeler üretir. BK kamu alımlarının sosyal değer gereklilikleri SYG tarzı kanıtı ticari olarak ilgili kılar: kamu sözleşmeleri (NHS dahil) için teklifler gösterilen sosyal değer için puan alır.

## Matematik

```
SYG oranı = BD(parasallaştırılmış sosyal sonuçlar) / BD(yatırım)

Her sonuç için:
  değer = miktar × finansal vekil × atıf × (1 − ölü ağırlık) × (1 − yer değiştirme)

ölü ağırlık (deadweight)    = zaten olacak olan
atıf (attribution)          = başkalarının neden olduğu pay
yer değiştirme (displacement) = yaratılmak yerine başka yerden taşınan fayda
düşüş (drop-off)            = sonucun yıllar içindeki aşınması
```

Düzeltme faktörleri yöntemin bütünlüğüdür: onlar olmadan SYG, para birimi işaretli kurgudur.

## Çözümlü örnek

Yalnız yaşlı yetişkinleri gönüllülerle buluşturan bir arkadaşlık uygulaması; program maliyeti 200.000 £/yıl; 1.500 aktif çift.

```
Sonuç: 1.500 kişi için azalan yalnızlık
  vekil: "yalnızlıktan kurtulma"nın iyi oluş değerlemesi ≈ 1.800 £/kişi/yıl
  ölü ağırlık %25 (bazıları yine de bağ bulurdu)
  atıf %80 (bir kısmı diğer hizmetlere ait)

Değer = 1.500 × 1.800 × 0,80 × 0,75 = 1.620.000 £

Sonuç: azalan aile hekimi ziyaretleri, 1.500 × 1,2 ziyaret × 42 £ = 75.600 £ (ödeyici için gerçek)

SYG = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Oranın %96'sının vekille değerlenmiş iyi oluş, %4'ünün somut nakit olduğuna dikkat edin. Bu meşru bir SYG'dir — ancak sosyal değer olarak sunulmalı, 1,7 milyon £'ın bankaya yatırılabilir olduğunu asla ima etmemelidir.

## Yazılım mühendisliği bağlantısı

SYG, yararlanıcıları ödeme yapan ekibin dışında olan mühendislik işi için dürüst çerçevedir: açık kaynak bakımı, erişilebilirlik iyileştirmeleri, diğer ekiplerin tükettiği platform işi, geliştirici topluluğu yatırımı. Aktarılabilir mekanikler: tüm paydaşları belirleyin, belirtilen vekillerle parasallaştırın ve ölü ağırlık/atıf indirimleri uygulayın (o açık kaynak düzeltmesi zaten olacak mıydı? kazancın ne kadarı sizin işiniz, ne kadarı ekosistemin?). *Kendi etki iddialarınızı indirme* disiplini, SYG'yi pazarlama sayısından ayıran şeydir.

## Tuzaklar

- **Vekil alışverişi**: mevcut en cömert iyi oluş değerlemesini seçmek.
- **Ölü ağırlık/atfı atlamak** — en yaygın şişirme, genellikle oranı ikiye katlar.
- **Çalışmalar arası oran karşılaştırması**: SYG oranları yönteme duyarlıdır; yalnızca tutarlı bir çerçeve içinde karşılaştırın.
- **Sosyal değeri bütçe sahibine nakde çevrilebilir tasarruf olarak sunmak**.

## Kaynaklar

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
