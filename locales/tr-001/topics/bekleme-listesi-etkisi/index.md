# Bekleme Listesi Etkisi

Bekleme listesi etkisi, tasarruf edilen klinik kapasiteyi bekleme listesinden çıkarılan (veya listeden daha hızlı geçirilen) hastalara dönüştürür. Tasarruf edilen saatleri ek klinik slotlarına dönüştürmek bir vakfın bekleme listesinin boyutunu doğrudan azaltır — serbest kalan kapasitenin *ne işe yaradığını* bir sağlık sistemine göstermenin en somut yoludur.

## Neden önemli

Seçmeli bekleme listesi, NHS'in pandemi sonrası belirleyici zorluğudur (boyutu ulusal bir siyasi metriktir) ve her vakıf ona karşı bir seçmeli bakım iyileştirme programı yürütür. "2.000 hemşire saati tasarruf eder" diyen bir iş gerekçesi soyuttur; "4.000 ek randevu slotu yaratır, bekleyen 3.800 hastayı görür, uzmanlığın listesini %9 azaltır" diyen ise bir İşletme Direktörünün yönetim kuruluna götürebileceği bir hikâyedir. Bekleme listesi etkisi, [nakit serbest bırakmayan kapasite](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/) için doğal *hesap birimidir*.

## Matematik

```
Ek slotlar          = serbest kalan saatler / slot süresi × kullanım
Görülen hastalar    = ek slotlar × (1 − DNA oranı)
Liste azalması      = görülen hastalar − tetiklenen yeni talep
Bekleme süresi kazancı = daha yüksek hizmet hızından kuyruk iyileşmesi
                      (kararlı kuyruklar için, birikimi N'yi ΔN kadar μ
                      hizmet hızında azaltmak herkesi ~ΔN/μ öne çeker)
```

Daha kısa beklemelerin sağlık değeri: hastalar tedavi öncesi daha düşük fayda durumunda daha az hafta geçirir — [tedaviye sevk](../tedaviye-sevk/) belgesindeki QALY aritmetiği.

## Çözümlü örnek

Ortam dokümantasyon yazılımı 20 klinik hemşiresinin her birine günde 45 dk tasarruf ettiriyor. 250 gün boyunca: 20 × 0,75 × 250 = yılda 3.750 saat.

```
Slotlar (30 dk, %85 kullanılabilir) = 3.750 / 0,5 × 0,85 = 6.375 slot
Görülen hastalar (%7 DNA)           = 6.375 × 0,93       ≈ yılda 5.929
```

12.000 hastalık listesi ve yılda 24.000 talep-uyumlu kapasite randevusu olan bir uzmanlık için ~5.900 ek randevu ortalama beklemeleri kabaca dörtte bir oranında keser — işe alım yapmadan vakfı 18 haftalık standarda belirgin biçimde yaklaştırır. Katılım başına ~160 £ program değerinde aktivite yılda ~949.000 £ değerindedir (bkz. [ulusal tarife ve birim maliyetler](../ulusal-tarife-ve-birim-maliyetler/)) — ama önce *bekleme listesi* çerçevesini sunun; sistemin yönetildiği odur.

## Yazılım mühendisliği bağlantısı

Bir bekleme listesi bir birikimdir ve birikim eritme ekonomisi her iki yönde de aktarılır. Sağlıktan yazılıma: birikim azaltmayı kapatılan öğelerle değil, *kullanıcıların* değer için ne kadar beklediğiyle değerleyin (kuyruktaki öğe başına [gecikme maliyeti](../gecikme-maliyeti/)). Yazılımdan sağlığa: Little Yasası, liste yalnızca hizmet hızı varış hızını aşarsa küçülür der — artan sevklerin emdiği kapasite kazanımları beklemeleri değiştirmez, bu yüzden varışları da modelleyin. Ve her iki alanda da, ilk gelen ilk çıkar yerine şiddet ağırlıklı değere göre önceliklendirin (klinik aciliyet kategorileri ↔ [şiddet değiştiricileri](../qaly-açığı-ve-şiddet-düzenleyicileri/)).

## Tuzaklar

- **Slotlar ≠ hastalar**: DNA oranlarını ve serbest kalan zamanın kullanılamaz parçalarını unutmak.
- **Tetiklenen talep**: görünür ek kapasite sevkleri çeker; net liste etkisi brütten küçüktür.
- **Nakit iddia etmek**: bekleme listesi etkisi kapasite değeridir; nakit iddiası (birikim işinin dış kaynağa verilmesinin önlenmesi) farklı bir kalemdir — bkz. [kaçınılabilir dış kaynak maliyetleri](../kaçınılabilir-dış-kaynak-maliyetleri/).

## Kaynaklar

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
