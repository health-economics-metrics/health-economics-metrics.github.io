# Kuruşu Kuruşuna Maliyet Tahsisi

Toplam bir para tutarını — paylaşılan bir hibe, bir altyapı faturası, bir bütçe etkisi rakamı — saf yüzde aritmetiğiyle birkaç alıcı arasında bölmek, rutin olarak orijinal toplama geri toplanmayan parçalar üretir. Kuruşu kuruşuna tahsis çözümdür: alt para birimleriyle (kuruş) çalışan, tamsayı/ondalık bir yöntem; ne kadar eşitsiz bölünürse bölünsün parçaların *tam olarak* bütüne toplanmasını garanti eder. Bölünmüş bir toplamı kuruşuna kadar uzlaştırmak zorunda olan herhangi bir yazılım mühendisi — bordro, hibe ödemesi, paylaşılan hizmet geri ücretlendirmesi — kayan noktalı yüzdelere değil bu örüntüye ihtiyaç duyar.

## Neden önemli

Bu, kurumsal yazılım mühendisliğinde adlandırılmış, temel bir örüntüdür: Martin Fowler'ın *Patterns of Enterprise Application Architecture* (2002) kitabı `Money` ve `Allocate`'i tam olarak "100 $'ı üçe böl" saf kodun sürekli ve sessizce yanlış yaptığı bir problem olduğu için belgeler — hata ancak biri defterleri uzlaştırıp parçaların toplamın bir kuruş altında (veya üstünde) olduğunu bulduğunda ortaya çıkar. Sağlık ekonomisi ve NHS finans işinde bu akademik değildir: bütçe etkisi toplamları sitelere, yıllara veya direktörlüklere bölünür; paylaşılan altyapı ve lisans maliyetleri kadro sayısı veya faaliyet payına göre departmanlara paylaştırılır. Bu bölmelerin her biri tam olarak uzlaşmalıdır, çünkü toplamına eşit olmayan parçalar teslim edilen bir finans müdürü tüm modele güvenmeyi bırakır.

## Matematik

```
Saf (bozuk) yöntem:
  parça_i = round(toplam × pay_i / Σ paylar)     — her parçayı bağımsız yuvarlar

Tam yöntem (en büyük kalan / "largest remainder allocation"):
  1. taban_i = floor(toplam_alt_birim × pay_i / Σ paylar)   — yalnızca tam alt birimler (kuruş)
  2. kalan = toplam_alt_birim − Σ taban_i                    — artan kuruşlar, her zaman < alıcı sayısı
  3. 1. adımdan en büyük kesirli kalana sahip `kalan` alıcıya, artan bitene
     kadar birer ek alt birim dağıtın

Sonuç: Σ parça_i == toplam, her zaman, yapı gereği.
```

Tam yöntem bir parçayı asla tek başına yuvarlamaz — *tüm tahsisi* tek işlem olarak yuvarlar; toplam değişmezini sağlayan budur.

## Çözümlü örnek

100,00 $'ı eşit üç parçaya bölün (`paylar = [1, 1, 1]`).

Saf yöntem: 100,00 $ ÷ 3 = 33,333… $, bağımsız olarak en yakın kuruşa yuvarlandığında her alıcı için 33,33 $ verir. Toplam: 33,33 $ × 3 = 99,99 $ — bir kuruş kayboldu ve hiçbir tekil kalem incelemeyle fark edilecek kadar "yanlış" değil.

Tam yöntem: `taban` üçü için de 33,33 $'dır (her biri için `floor(10.000 / 3) = 3.333` kuruştan toplam 9.999 alt birim), geriye 1 kuruş kalır (10.000 − 9.999). Bu tek artan kuruş, bölmede en büyük kesirli kalana sahip alıcıya gider — hangi alıcı olduğu dahili bir eşitlik bozma ayrıntısıdır, bir çağıranın güvenmesi gereken bir şey değil. İki alıcı 33,33 $ ve biri 33,34 $ ile biter ve üç parça tam olarak 100,00 $'a toplanır.

Bu, toplam bir bütçe etkisi rakamının sitelere, kohortlara veya mali yıllara bölünüp yayımlanan toplamla uzlaştırılması gerektiğinde bir [bütçe etki analizi](../bütçe-etki-analizi/)nin tam olarak ihtiyaç duyduğu aritmetiktir — çok sayıda bu tür kalemi sürüklenme olmadan toplama eş sorunu için bkz. [para birimi güvenli maliyet toplulaştırma](../para-birimi-güvenli-maliyet-toplulaştırma/).

## Yazılım mühendisliği bağlantısı

Bu, tam anlamıyla kurumsal yazılım mimarisinden "Money örüntüsü"dür — tam da bu hata sınıfı için temel, adlandırılmış bir örüntü, tek seferlik bir numara değil. Gerçek finansal uzlaştırma başarısızlıkları tam olarak bu hata sınıfından yayına çıktı: `f64` ile hesaplanan, alıcı başına yuvarlanan ve orijinal toplama karşı hiç kontrol edilmeyen yüzde bölmeleri. Doğrudan bu deponun, şu anda yıllar ve seçenekler boyunca düz kayan noktalı maliyetleri toplayan [toplam sahip olma maliyeti](../toplam-sahip-olma-maliyeti/) modülüne bağlanır — bir TCO veya bütçe etkisi toplamı yalnızca toplanmak yerine paylaştırılması gerektiğinde aynı tamlık disiplini geçerlidir.

## Tuzaklar

- **En büyük kalan yerine yüzde-sonra-yuvarla**: kayan noktalı yüzdelerle tahsis edip her alıcıyı bağımsız yuvarlamak; yuvarlama hatasını bileştirir ve özellikle çok sayıda alıcıda nadiren toplama geri toplanır.
- **Para birimi alt birim üslerini yok saymak**: her para biriminin 2 ondalık basamağı olduğunu varsaymak — Japon Yeni'nin 0'ı var, bazı para birimlerinin 3'ü — elle yazılmış bir yüzde bölmesi genellikle 2'yi sabit kodlar ve diğer para birimleri için sessizce bozulur; tam bir tahsis rutini üssü para biriminin kendisinden okur (ISO 4217).
- **Zaten tahsis edilmiş bir kalanı yeniden tahsis etmek**: bir önceki tahsisten artanı idempotans kontrolleri olmadan tahsis rutininden tekrar geçirmek, aynı kuruşu aynı alıcıya iki kez yazabilir.

## Kaynaklar

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
