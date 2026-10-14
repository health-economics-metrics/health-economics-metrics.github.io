# Tedaviye Sevk (RTT)

Tedaviye sevk, bir aile hekiminin sevkinden konsültan liderliğindeki tedavinin başlamasına kadar geçen süredir. NHS Anayasası standardı belirler: **hastaların %92'si 18 hafta içinde tedaviye başlamalıdır**. RTT, İngiliz NHS'te siyasi olarak en görünür tek operasyonel metriktir.

## Neden önemli

RTT hedeflerini kaçıran vakıflar düzenleyici incelemeyle, müdahaleyle ve itibar kaybıyla karşılaşır; ulusal bekleme listesi manşet bir sayıdır. Bir hastanın beklediği her hafta kaybedilen sağlıktır (daha kötü bir sağlık durumunda bekleme — aşağıdaki QALY matematiğine bakın) ve çoğu zaman kazanılan maliyettir (durumlar kötüleşir; bkz. [erken müdahale](../erken-müdahale/)). Tedaviye sevk yolunun herhangi bir yerinde zaman kazandıran yazılım — triyaj, tanı geri dönüşü, klinik kapasitesi, planlama — standardı kaçırmanın operasyonel ve mali sonuçlarını doğrudan hafifletir; RTT etkisinin NHS dijital iş gerekçelerinde birinci sınıf bir fayda satırı olmasının nedeni budur.

## Matematik

```
RTT performansı = 18 hafta içinde tedavi edilen hastalar / toplam tedavi edilen × 100
Hasta başına bekleme süresi sağlık maliyeti = bekleme süresi × (yarar_tedavi edilmiş − yarar_bekleyen)

Yol görünümü: RTT = Σ aşama süreleri (sevk triyajı → ilk randevu →
tanılar → karar → tedavi) — en yoğun aşamayı değil en uzun kuyruğu
iyileştirin (bkz. flow-metrics.md).
```

## Çözümlü örnek

Bir uzmanlık alanı yılda 5.000 yol hastası tedavi ediyor; ortalama bekleme 24 hafta; bekleyen yararı 0,68, tedavi edilmiş 0,80.

Dijital triyaj artı doğrudan teste yönlendirme protokolleri 5 haftalık saf kuyruğu kaldırıyor:

```
QALY kazancı = 5.000 × (5/52) × (0,80 − 0,68) = yılda 57,7 QALY
20.000–30.000 £/QALY'den parasallaştırılmış (bkz. willingness-to-pay-thresholds.md):
  ≈ yılda 1,15–1,73 milyon £ sağlık değeri
```

— artı vakıf, hiçbir elektronik tablonun tam olarak yakalayamadığı yönetişim değeri olan 18 haftalık standardı ihlal etmekten karşılamaya geçer.

## Yazılım mühendisliği bağlantısı

RTT **çok aşamalı bir kuyruk üzerinde bir teslim süresi metriğidir** — hastanenin işlemeden üretime teslim süresi sürümü ([DORA metrikleri](../dora-metrikleri/)ne bakın). İyileştirme yöntemi aynıdır: her aşamayı araçlandırın, takvim zamanının nerede biriktiğini bulun (neredeyse her zaman devir teslimler ve kuyruklar, klinik iş değil) ve bekleme durumlarını kaldırın. Tipik yazılım kazanımları: sevkleri haftalık partiler yerine saatler içinde yönlendiren e-triyaj, takip randevuları yerine tanı sonuçlarının itilmesi ve otomatik doğrudan teste yönlendirme ölçütleri. İyileştirmeyi QALY/hafta cinsinden ifade edilen [gecikme maliyeti](../gecikme-maliyeti/) ile değerleyin.

## Tuzaklar

- **Kısıt olmayan bir aşamayı iyileştirmek** — tanı kuyrukları büyürken ilk randevu beklemelerini azaltmak, yalnızca havuzu taşır.
- **Oyun**: yol sıfırlamaları ve saat duraklatmaları kimseyi daha erken tedavi etmeden raporlanan RTT'yi iyileştirebilir; altta yatan dağılımı denetleyin.
- **Birden çok değişiklik birlikte geldiğinde** tek bir araç için tüm yol iyileşmesini talep etmek — atıf bir karşılaştırıcı gerektirir.

## Kaynaklar

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
