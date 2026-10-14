# Erken Müdahale

Kazanılan kapasite bir uygulayıcının tanısal birikimleri daha erken gözden geçirmesini sağlıyorsa, hastalar bekleme listesinden aktif tedaviye daha hızlı geçer — ve daha erken tedavi genellikle daha geç tedaviden hem ucuz hem iyidir, çünkü tedavi edilmeyen durumlar ilerler.

## Neden önemli

Hastalık ilerlemesi sağlık hizmetinin bileşik faizidir. Tedavi edilmeyen bir durumla bekleyen hasta sabit bir durumda değildir: kanserler evre atlar, kalp yetmezliği dekompanse olur, hafif depresyon şiddetlenir. Daha erken müdahale bu yüzden çifte temettü sağlar — **daha iyi sonuçlar** (daha çok QALY, daha sağlıklı bir temel çizgiden tedavi) ve çoğu zaman **daha düşük tedavi maliyetleri** (erken evre tedavisi geç evre kurtarmadan daha az yoğundur). Bu mekanizma "daha hızlı yolları" operasyonel bir inceliğten klinik ve ekonomik bir zorunluluğa yükselten şeydir — ve [gecikme maliyeti](../gecikme-maliyeti/)nin klinik yazılıma uygulanmasının derin nedenidir.

## Matematik

```
Erken müdahalenin değeri (hasta başına) =
    [Maliyet_geç − Maliyet_erken]                  (tedavi maliyeti mahsubu)
  + [QALY_erken − QALY_geç] × λ                    (sağlık kazancı × eşik)
  × P(gecikme sırasında ilerleme)                   (olasılık ağırlıklandırması)
```

Olasılık ağırlıklandırması şarttır: bekleyen her hasta ilerlemez. Birim zaman başına geçiş olasılığını (doğal öykü verisinden) modelleyin, en kötü durumu değil. Sonra iskonto edin: yıllarca uzaktaki kaçınılan maliyetler bugün daha az değerlidir ([iskonto](../i̇skonto-ve-zaman-tercihi/)) — ve çoğu erken müdahalenin maliyet-*tasarruf edici* değil maliyet-*etkili* olduğuna dikkat edin (bkz. [önleme ekonomisi](../önleme-ekonomisi/)).

## Çözümlü örnek

Diyabetik retinopati tarama birikimi: 4.000 hasta, 6 ay geride. Yapay zekâ destekli derecelendirme verimi üç katına çıkarıp kuyruğu 8 haftada temizliyor. Doğal öykü: bekleyen hastaların ~%2'si, gözden geçirilmemişken yılda görmeyi tehdit eden evrelere ilerliyor.

```
~4 aylık hızlanmayla kaçınılan ilerleme olayları:
  4.000 × %2 × (4/12) ≈ 27 hasta

Kaçınılan ilerleme başına:
  tedavi mahsubu (intravitreal tedavi ve lazer) ≈ 4.000 £
  QALY kazancı (görme korundu) ≈ 0,8 QALY × 20.000 £ = 16.000 £

Değer ≈ 27 × (4.000 + 16.000) ≈ 540.000 £ — bir kez temizlenen tek bir birikimden,
kalıcı verim kazancını saymadan önce.
```

## Yazılım mühendisliği bağlantısı

İki aktarım. Birincisi bariz olanı: tanı ve tedavi yollarını hızlandıran yazılım (triyaj, yapay zekâ derecelendirme, sonuç yönlendirme) tam olarak bu modelle parasallaştırılır — ve model hangi yolun hızlandırılacağını söyler: en uzun kuyruğu değil, en dik ilerleme eğrisine sahip olanı. İkincisi mühendislik aynası: **kusurlar da ilerler**. Tasarımda yakalanan bir hata bir konuşmaya mal olur; üretimde bir olaya mal olur; "shift-left" maliyet eğrisi (aşamaya göre 10–100×) bir ilerleme modelidir ve dürüst sürüm aynı çekinceyi taşır — erken tespit genellikle maliyet-etkilidir, bedava para değil, çünkü incelemelerin ve testlerin gerçek maliyeti vardır ve yakalanan sorunların çoğu hiç ilerlemeyecekti.

## Tuzaklar

- **Herkes için en kötü durum ilerlemesi varsayımı** — olasılık ağırlıklandırması analiz ile savunuculuk arasındaki farktır.
- **Öne geçiş yanlılığı (lead-time bias)**: sonuçları değiştirmeden hastalığı daha erken bulmak fayda gibi görünür ama değildir; iddia daha erken *etkili müdahaledir*, tek başına daha erken tespit değil (bkz. [tarama ekonomisi](../tarama-ekonomisi/)).
- Aynı hızlanma üzerine kurulu bekleme listesi ve RTT iddialarıyla **çifte sayım** — bir yol iyileştirmesi, bir fayda kümesi, bir kez tahsis edilir.

## Kaynaklar

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
