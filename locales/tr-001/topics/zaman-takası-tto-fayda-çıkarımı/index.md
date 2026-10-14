# Zaman Takası (TTO) Fayda Çıkarımı

TTO, bir sağlık durumu fayda değerini uydurmak yerine doğrudan bir katılımcıdan çıkarmak için standart bir yöntemdir. [EQ-5D](../eq-5d/) gibi araçların ve dolayısıyla aşağı akıştaki çoğu [QALY](../kaliteye-ayarlı-yaşam-yılı/) hesaplamasının ardındaki değer setlerini üreten çıkarım yöntemlerinden biridir — standart kumar ve ayrık seçim deneyleriyle birlikte.

## Neden önemli

Bir QALY hesaplamasını besleyen her fayda ağırlığı bir yerden gelmek zorundaydı. TTO bunun yoludur: ölümden iyi kabul edilen bir durum için katılımcıya, bozulmuş durumdaki `T` yıla eşdeğer saydığı tam sağlıkta kaç `X` yıl olduğu sorulur (`X < T`); fayda `X / T`'dir. Bazı katılımcıların ölümden kötü saydığı bir durum için standart formül çöker (sıfırın altındaki faydaları temiz biçimde temsil edemez), bu nedenle genişletilmiş TTO uygulanır. Bir fayda ağırlığını, onu üretmek için doğrulanmış bir çıkarım protokolü gerektiğini bilmeden, verili bir girdi olarak ele alan bir yazılım mühendisi veya analist, itiraz edildiğinde savunamayacağı bir sayıdan bir adım uzaktadır.

## Matematik

```
Standart TTO (ölümden iyi durum):
  fayda = tam_sağlıkta_süre / bozulmuş_durumda_süre

Genişletilmiş TTO (ölümden kötü durum):
  fayda = -ölüm_için_takas_edilen_süre / (toplam_süre - ölüm_için_takas_edilen_süre)
```

`tam_sağlıkta_süre` / `bozulmuş_durumda_süre` — bozulmuş durumdaki `T` yıla eşdeğer sayılan tam sağlıkta `X` yıl. `ölüm_için_takas_edilen_süre` / `toplam_süre` — ölümden kötü formülasyonunda, katılımcının `T` yıllık kalan ömürden anında ölüm için takas edeceği `a` yıl; ölümden kötü durumda `T` yıl yerine `T − a` yıl tam sağlık ve ardından ölümü tercih eder. Sonuç negatiftir, ölüm = 0 olacak şekilde sabitlenmiştir.

## Çözümlü örnek

**Standart**: bir katılımcı 10 yıl bozulmuş durumda ve tam sağlıkta 7 yıl ile kayıtsız: fayda = 7 / 10 = **0,7**.

**Ölümden kötü**: 10 yıllık kalan ömürde katılımcı anında ölüm için 2 yılı takas eder — ölümden kötü durumda 10 yıl yerine tam sağlıkta 8 yıl ve ardından ölümü tercih eder: fayda = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Yazılım mühendisliği bağlantısı

Bir DevEx veya katılım anketinin insanlardan incelenmemiş bir 0–10 ölçeğinde bir şeyi derecelendirmesini istediğinde karşılaştığı aynı nokta burada tersine geçerlidir: TTO tam olarak "insanlardan sadece derecelendirmelerini isteyin"in tek başına doğrulanmış bir çıkarım yöntemi olmadığı için vardır. Öz değerlendirmeli bir sayının üzerine bileşik bir indeks — bir DevEx puanı, bir katılım indeksi, bir tükenmişlik ölçeği — kurmadan önce onu neyin çıkardığını ve o yöntemin doğrulanıp doğrulanmadığını sorun; sağlık ekonomistlerinin bir fayda ağırlığı QALY'ye girmeden önce sorduğu aynı soru.

## Tuzaklar

- **Bireysel değer genellemesi**: TTO değerleri genel halkın (veya hastaların) bir *örnekleminden* çıkarılır, bakımı kararlaştırılan bireyden değil — bir katılımcının TTO değerini genelleniyormuş gibi kullanmak bir örnekleme hatasıdır.
- **Duruma yanlış formülasyon**: standart TTO formülü durumun açıkça ölümden iyi olduğunu varsayar; bazı katılımcıların ölümden kötü sayacağı bir duruma, genişletilmiş formülasyona geçmeden uygulamak sessizce yanlış (pozitif) bir fayda üretir.
- **Karşılaştırılamaz süreler**: ölümden kötü karşılaştırması için farklı kalan ömür süreleri `T` kullanılarak çıkarılan TTO değerleri, çalışma tasarımının `T`'yi sabit tuttuğu kontrol edilmeden doğrudan karşılaştırılamaz.

## Kaynaklar

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
