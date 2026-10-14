# Klinik Yapay Zekâ Değerlendirmesi

Klinik bir yapay zekâ veya tanı modelini değerlendirmenin temel istatistikleri: duyarlılık, özgüllük, AUROC, öngörü değerleri ve taranması gereken sayı. Temel ekonomik ders: **harika bir AUROC maliyet-etkili bir devreye alma yapmaz** — değer, çalışma noktasına, yaygınlığa ve her pozitifin ardından olanlara bağlıdır.

## Neden önemli

Düzenleyiciler (FDA, MHRA) klinik yapay zekâyı **kilitli bir çalışma noktasında** yetkilendirir — belirli bir duyarlılık/özgüllük çifti (örn. FDA onaylı ilk otonom diyabetik retinopati sistemi: kilit denemesinde duyarlılık %87,2, özgüllük %90,7). Sağlık ekonomistleri sonra doğruluk metriklerinin yanıtlayamadığı soruyu sorar: devreye alma nüfusunuzun yaygınlığında her tespit neye *mal olur* ve buna göre harekete geçmek değer mi? Retinopati tarama yapay zekâsının ekonomik değerlendirmesi (npj Digital Medicine 2024), sevk maliyetleri sayıldığında tek başına yüksek doğruluğun maliyet-etkililiği garanti etmediğini gösterdi.

## Matematik

```
Duyarlılık  = TP / (TP + FN)        — gerçekten pozitiflerin yakalanan payı
Özgüllük    = TN / (TN + FP)        — gerçekten negatiflerin temize çıkan payı
AUROC       = P(modelin rastgele bir pozitifi rastgele bir negatifin üzerine sıralaması)
              0,5 şans … 1,0 mükemmel; eşikten bağımsız — dolayısıyla
              devreye alma kararı için yetersiz

PPV = TP / (TP + FP)   ← yaygınlığa bağlı (Bayes); nadir olduğunda çöker
NPV = TN / (TN + FN)

NNS  ≈ 1 / (yaygınlık × duyarlılık)       — bulunan gerçek vaka başına taranan
Gerçek vaka başına maliyet = program maliyeti / TP      — ekonomik alt satır
```

## Çözümlü örnek

Aynı model, iki ortam — duyarlılık %90, özgüllük %93:

```
Uzman kliniği (yaygınlık %20):
  PPV = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ %76  → uyarıların 4'te 3'ü gerçek

Birinci basamak (yaygınlık %1):
  PPV = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ %11,5
  → uyarıların 9'da 8'i yanlış; her biri 350 £ tetkik:
  gerçek vaka başına maliyet = (0,009 + 0,0693) × 350 / 0,009 ≈ bulunan vaka başına 3.045 £
```

Aynı model, kökten farklı ekonomi — bu yüzden siteye özgü değerlendirme düzenleyici bir temadır ve "modelimizin AUROC'u 0,95" bir ekonomik vakanın sonu değil başlangıcıdır. Tam program matematiği için bkz. [tarama ekonomisi](../tarama-ekonomisi/).

## Yazılım mühendisliği bağlantısı

Klinik yapay zekâ geliştiren veya satın alan mühendisler için: ROC eğrisini tek başına değil **karışıklık matrisini devreye alma yaygınlığında gönderin**; **eşiği ekonomik bir karar yapın** — duyarlılık/özgüllük dengesi beklenen maliyeti en aza indirmeli (kaçırılan vakalar × kaçırma maliyeti ile yanlış alarmlar × tetkik maliyeti), bir kıyaslama istatistiğini azamileştirmemeli; ve aynı matematiği kendi araçlarınızda tanıyın — uyarı sistemleri, anomali dedektörleri ve güvenlik tarayıcıları düşük yaygınlıklı olay akışları üzerinde tanı testleridir ve uyarı yorgunluğu [NNH](../tedavi-edilmesi-gereken-sayı/)'dir. Çalışma noktasını kaydıran model güncellemeleri ekonomiyi (ve düzenleyici onayı — bkz. [yapay zekâ düzenleyici değerlendirmesi](../yapay-zekâ-düzenleyici-değerlendirmesi/)) yeniden açar.

## Tuzaklar

- **AUROC alışverişi**: tek eşikte çalışacak modellerin AUROC'ta karşılaştırılması — çalışma noktasında karşılaştırın.
- **Deneme yaygınlığındaki PPV'nin gerçek dünya devreye alması için alıntılanması** — klasik; her zaman yerel yaygınlıkta yeniden hesaplayın.
- **Spektrum yanlılığı**: bariz vakalar ve sağlıklı kontroller üzerinde doğrulanan modeller, uygulamaya hâkim belirsiz orta bölgede fazla performans gösterir.
- **Aşağı akış yolunun maliyetlendirilmemesi**: her pozitif bir tetkik tetikler; model *tüm yolun* ekonomisine yapılmış bir müdahaledir.

## Kaynaklar

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
