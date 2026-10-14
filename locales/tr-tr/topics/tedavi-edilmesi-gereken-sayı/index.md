# Tedavi Edilmesi Gereken Sayı (NNT)

NNT, belirtilen bir zaman diliminde **bir** ek hastanın fayda görmesi için müdahale alması gereken hasta sayısıdır. Yanıltıcı olan yüzde risk azalmalarını, herkesin akıl yürütebileceği fayda başına çaba birimlerine çevirir.

## Neden önemli

"Kalp krizlerini %25 azaltır!" kesin görünür. Temel risk 5 yılda %4 ise mutlak azalma 1 yüzde puandır, yani **1 kişinin fayda görmesi için 100 kişinin ilacı 5 yıl boyunca alması gerekir** — ve 100 kişinin hepsi maliyetleri ve yan etkileri öder. NNT göreli risk pazarlamasının panzehiridir, kanıta dayalı tıbbın onunla başlamasının nedeni budur. Birincil önleme için statinler: önlenen kalp krizi başına 5 yılda NNT ≈ 50–100. Ayna ikizi **NNH** (zarar görmesi için gereken sayı), zarar gören kişi başına kaç kişinin tedavi edildiğini sayar.

## Matematik

```
MRA = kontrol olay oranı − tedavi olay oranı   (mutlak risk azalması)
NNT = 1 / MRA

NNH = 1 / (zarar oranı_tedavi − zarar oranı_kontrol)

Ekonomik köprü:
önlenen olay başına maliyet = NNT × tedavi kürü başına maliyet
```

Zaman dilimini ve temel nüfusu her zaman belirtin — NNT her ikisi olmadan anlamsızdır.

## Çözümlü örnek

Bir hastanedeki düşme tahmin sistemi yüksek riskli hastaları müdahale için işaretler (yatak sensörleri, inceleme, gözetim). Deneme: yaralanmalı düşmeler yatışların %3,2'sinden %2,4'üne düşüyor.

```
MRA = 0,8 yüzde puan → NNT = 1/0,008 = 125
   (1 yaralanmalı düşmeyi önlemek için 125 hastanın müdahale paketini alması gerekir)

Müdahale maliyeti ≈ 40 £/hasta → önlenen düşme başına maliyet = 125 × 40 = 5.000 £
Yaralanmalı bir yatan hasta düşmesinin maliyeti (ek yatış, görüntüleme, dava) ≈ 12.000 £
Net: önleme ~2,4:1 kazandırır — QALY kazancı da üstüne.
```

NNT'nin iddiayı nasıl dürüst tuttuğuna dikkat edin: "düşmeleri %25 azaltır" ve "tedavi edilen 125 hasta başına bir düşmeyi önler" aynı sonuçtur, farklı ikna edicilikte.

## Yazılım mühendisliği bağlantısı

NNT, azını yakalamak için çok öğe üzerinde işleyen her kapı veya kontrol için doğru birimdir: **"üretime giden bir kusuru yakalamak için yapay zekâ inceleme kapısından geçmesi gereken PR sayısı."** Kapı gerçek yakalama başına 400 PR'ı (NNT = 400) her biri 4 dakikalık geliştirici dikkatiyle inceliyorsa, bir yakalama ~27 geliştirici saatine mal olur — şimdi bunu önlediği olay maliyetiyle karşılaştırın. NNH yanlış pozitiflere eşlenir: *yanlış* işaret başına kaç PR ve her biri dikkat ve güvende neye mal olur? Tarama tarzı araçlar (linter'lar, güvenlik tarayıcıları, anomali tespiti) NNT/NNH aritmetiğiyle gelmelidir — düşük yaygınlığın bu sayıları neden acımasız yaptığı için bkz. [tarama ekonomisi](../tarama-ekonomisi/). [Taranması gereken sayı](../taranması-gereken-sayı/), yalnızca bir tedavi için değil, tüm tara-sonra-tedavi et programı için bir seviye yukarıdaki benzer rakamdır.

## Tuzaklar

- **Zaman dilimi yok**: "NNT = 50" hiçbir şey ifade etmez; "5 yılda NNT = 50" bir iddiadır.
- **Temel risk nakli**: yüksek riskli bir deneme nüfusunda hesaplanan NNT, düşük riskli bir devreye alma nüfusunda çöker.
- **NNH'yi yok saymak** — NNT 400 ve NNH 3 olan bir kapı güvenlik sistemi değil rahatsızlık üreticisidir.

## Kaynaklar

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
