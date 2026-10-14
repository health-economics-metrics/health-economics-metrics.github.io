# Yoğunlaşma İndeksi (Concentration Index)

Yoğunlaşma İndeksi (Wagstaff, Paci, van Doorslaer, 1991), bir sağlık değişkenindeki sosyoekonomik durumla ilişkili eşitsizliğin standart istatistiksel ölçüsüdür ve −1 ile 1 arasında değişir. Negatif, sağlık değişkeninin sosyoekonomik olarak dezavantajlılar arasında yoğunlaştığını; pozitif, daha varlıklılar arasında yoğunlaştığını; sıfır ise tutarlı bir sosyoekonomik gradyan olmadığını gösterir — eşitsiz dağılım şüphesini tek, karşılaştırılabilir bir sayıya dönüştürür.

## Neden önemli

Bir program toplamda etkili görünüp faydasını neredeyse tamamen zaten daha iyi durumda olan insanlara ulaştırabilir. Bunun gibi dağılım kaygıları tam olarak [erişim ve eşitlik](../erişim-ve-eşitlik/)in betimsel olarak izlediği şeylerdir — yoksunluk beşte birliklerine göre katmanlanmış erişim, üst ve alt gruplar arasındaki eşitlik açığı — ancak katmanlanmış bir tablo tek bir eğilim çizgisine sıkıştırılamaz ve farklı ölçeklerde ölçülen iki tamamen farklı müdahale arasında kolayca karşılaştırılamaz. Yoğunlaşma İndeksi ikisini de çözer: herhangi bir sağlık değişkeni için herhangi bir sosyoekonomik sıralamaya karşı aynı şekilde hesaplanır; böylece ulusal bir sağlık hizmeti belirli bir dijital hizmetin eşitsizliğinin sürümden sürüme genişleyip daralmadığını izleyebilir ve bir uygulama devreye almasının dağılımsal adilliğini, örneğin bir tarama programıyla, aynı normalleştirilmiş ölçekte karşılaştırabilir.

## Matematik

```
CI = (2 / ortalama(sağlık_değerleri)) × Kov(sağlık_değerleri, sosyoekonomik_sıralar)

Kov(X, Y) = ortalama(X × Y) − ortalama(X) × ortalama(Y)   (anakütle kovaryansı)

sosyoekonomik_sıralar: her kişinin sosyoekonomik dağılımdaki kesirli sırası,
[0, 1] aralığında (0 = en dezavantajlı, 1 = en avantajlı;
gruplanmış/bantlı verilerde geleneksel olarak her grubun orta nokta sırası)
```

Bu, "kullanışlı kovaryans formülü"dür (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — önce bir yoğunlaşma eğrisi çizip altını integre etmeden Yoğunlaşma İndeksi'ni doğrudan eşleştirilmiş gözlemlerden hesaplamanın standart uygulayıcı kısayolu.

## Çözümlü örnek

Dört eşit boyutlu sosyoekonomik dörtte birlik dilim boyunca gözlenen, kendini bildirimli iyi sağlık puanı (1 = en kötü, 4 = en iyi), her biri dilim orta nokta sırasıyla temsil edilir:

```
sağlık_değerleri           = [1,0, 2,0, 3,0, 4,0]
sosyoekonomik_sıralar      = [0,125, 0,375, 0,625, 0,875]

ortalama(sağlık_değerleri)         = 2,5
ortalama(sağlık × sıra)            = ortalama([0,125, 0,75, 1,875, 3,5]) = 1,5625
ortalama(sosyoekonomik_sıralar)    = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Pozitif bir `0,25`, bu sağlık puanının sosyoekonomik olarak avantajlı grup arasında yoğunlaştığı anlamına gelir — daha yüksek puanlı yanıtlayıcılar sıralamanın daha varlıklı ucuna doğru kayar.

## Yazılım mühendisliği bağlantısı

Bu, genel olarak iktisatta kullanılan aynı kovaryans temelli eşitsizlik ölçümüdür (Gini katsayısının kuzeni) ve bir yazılım ürününün faydalarının eşit biçimde yayılmak yerine zaten avantajlı kullanıcı kesimleri arasında yoğunlaşıp yoğunlaşmadığını ölçmeye karşılık gelir — [erişim ve eşitlik](../erişim-ve-eşitlik/)in (RE-AIM'in "erişim" boyutu) betimlenen bir açık yerine biçimsel bir istatistiksel ölçüye doğrudan uzantısı. Erişim-ve-eşitlik katman başına etkiyi raporlarken, Yoğunlaşma İndeksi tüm dağılımı işaretli tek bir sayıya sıkıştırır; sürümler boyunca izlenen tek bir KPI olarak uygundur — tam katmanlı dökümün olmadığı bir pano için pratik.

## Tuzaklar

- **İşaret kuralı kayması**: işaret hem sağlık değişkeninin hem de sıranın nasıl tanımlandığına bağlıdır — birini çevirmek işareti çevirir; bu yüzden kullanılan kural, bildirilen her değerin yanında her zaman açıkça belirtilmelidir.
- **Orta nokta sıraları yerine sınır sıraları**: gruplanmış veya bantlı sosyoekonomik veri (örn. beşte birlikler) her grubun kesirli sırasının *orta noktasında* kullanılmasını gerektirir, sınırında değil; aksi hâlde indeks yanlıdır.
- **"Sıfıra yakın"ı "eşitsizlik yok" diye okumak**: sıfıra yakın bir Yoğunlaşma İndeksi "tutarlı bir sosyoekonomik gradyan yok" demektir, mutlak anlamda "eşitsizlik yok" değil — farklı yönlerdeki dengeleyici eşitsizlikler birbirini götürebilir.

## Kaynaklar

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
