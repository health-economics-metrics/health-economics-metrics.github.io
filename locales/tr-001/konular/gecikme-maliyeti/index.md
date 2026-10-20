# Gecikme Maliyeti (CoD)

Gecikme Maliyeti, bir özelliğin, ürünün veya hizmetin teslim *edilmediği* birim zaman başına kaybedilen ekonomik değerdir. Yazılım teslim metrikleri ile sağlık ekonomisi arasındaki en güçlü tek köprüdür: "geç teslim ettik"i paraya — veya QALY'ye — çevirir.

## Neden önemli

Reinertsen'in kuralı: "Yalnızca tek bir şeyi ölçecekseniz Gecikme Maliyeti'ni ölçün." Çoğu kuruluş bir projenin neye mal olduğunu bilir ama bir aylık gecikmenin neye mal olduğunu bilmez; bu yüzden zaman değeri kanarken bütçeleri optimize eder. Sağlık yazılımı için riskler gerçektir: bir yol iyileştirmesinin geciktiği her hafta hastalar daha kötü sağlık durumlarında daha uzun beklerler. CoD, NHS paydaşlarına sunulacak en güçlü matematiksel çerçevedir, çünkü yazılımınızın *yokluğunu* fiyatlar.

## Matematik

```
CoD = teslim edilmediği sürece vazgeçilen birim zaman başına fayda   (£/hafta veya QALY/hafta)

Toplam gecikme kaybı = CoD × gecikme süresi

Önceliklendirme için bkz. wsjf-and-cd3.md: CD3 = CoD / süre.
```

Klinik yazılım için parayla birlikte sağlıkla da ifade edin:

```
CoD_sağlık = haftalık etkilenen hastalar × hasta başına QALY kazancı
CoD_para   = CoD_sağlık × λ (ödeme istekliliği eşiği, 20–30 bin £/QALY)
             + vazgeçilen haftalık operasyonel tasarruf
```

## Çözümlü örnek

**Operasyonel**: yazılım bir yolda hasta başına 200 £ tasarruf sağlıyor; bir vakıf haftada 50 böyle hastayı işliyor.

```
CoD = 200 × 50 = 10.000 £/hafta
10 haftalık bir tedarik gecikmesi, kaçınılabilir israfta 200 × 50 × 10 = 100.000 £ tutar.
```

**Klinik**: bir triyaj iyileştirmesi haftada 100 hasta için 5 haftalık beklemeyi kaldırıyor (yarar 0,68 → 0,80 daha erken):

```
Hasta başına QALY kazancı = (5/52) × 0,12 ≈ 0,0115
CoD_sağlık = 100 × 0,0115 = 1,15 QALY/hafta
CoD_para   = 1,15 × 20.000 £ ≈ haftada 23.000 £ sağlık değeri
```

6 aylık bir devreye alma gecikmesi ~30 QALY "tutar" — bir BT canlıya geçiş kaymasını klinik bir olay olarak yeniden çerçeveleyen argüman. (Ölçek için kıyas: Black Swan Farming'in ünlü Maersk analizi, 38 hafta beklemiş, CoD'si ≈ haftada 200 bin $ olan tekil özellikler buldu.)

## Yazılım mühendisliği bağlantısı

CoD, [DORA teslim süresi](../dora-metrikleri/) ve [akış verimliliği](../akış-metrikleri/)ni finansal olarak okunur kılan metriktir: teslim süresi × CoD = kuyruklarda yanan para (veya sağlık). Kullanımlar:

- **Önceliklendirme**: işi en yüksek sesli paydaş yerine CoD/süreye göre sıralayın ([WSJF/CD3](../wsjf-ve-cd3/)).
- **Süreç ekonomisi**: 2 haftalık sürüm ritmi, sürekli teslime göre özellik başına ~1 hafta × CoD beklenen gecikme maliyetine sahiptir — partiyi fiyatlayın.
- **Tedarik**: 6–18 aylık NHS tedarik döngülerinin bir CoD'si vardır; göstermek aciliyet konuşmalarını değiştirir (karşılanabilirlik karşılığı için bkz. [bütçe etki analizi](../bütçe-etki-analizi/)).

## Tuzaklar

- **Doğrusal CoD varsayımı**: bazı işlerin değeri son tarih biçimlidir (düzenleyici tarihler — tarihten sonra sonsuz CoD, öncesinde sıfır) veya azalandır (ilk hareket eden pencereleri). Çarpmadan önce aciliyet profilini sınıflandırın.
- **Kimsenin istemediği çıktılar üzerinde CoD**: gecikme yalnızca şeyin değeri varsa maliyetlidir; geciken çöp bedavadır.
- **Gecikme ve iskontonun çifte sayımı**: [iskonto](../i̇skonto-ve-zaman-tercihi/) çok yıllı ufuklarda zamanı zaten fiyatlar; CoD ufuk içi operasyonel sürümdür. Haftalar/aylar için CoD, yıllar için NBD kaydırmasını kullanın.

## Kaynaklar

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
