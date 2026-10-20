# Değer Üreten Kapasite (Operasyonel Devir)

Değer üreten kapasite, serbest kalan zamanın "fırsat faydasıdır": yazılımınızın serbest bıraktığı saatlerle hastanenin artık neyi *başarabileceği*. Bu, İşletme Direktörleri ve Tıbbi Direktörler için en önemli metriktir, çünkü yönetildikleri para biriminde — aktivite, hedefler ve devir — konuşur.

## Neden önemli

NHS devasa tedaviye sevk gecikmeleriyle karşı karşıyadır ve ulusal bekleme süresi standartlarını kaçıran vakıflar düzenleyici incelemeyle ve müdahaleyle karşılaşır (bkz. [tedaviye sevk](../tedaviye-sevk/)). İşe alım yavaş ve kısıtlıdır; binalar sabittir. Tek hızlı kaldıraç, mevcut personel ve alandan daha fazla değer üreten aktivite çıkarmaktır. Uzman zamanını geri kazanan yazılım yalnızca "para tasarruf etmez" — *kapasite basar*: işe alım veya inşa olmadan var olamayacak klinikler, planlanamayacak değerlendirmeler.

## Matematik

```
Yaratılan gizli kapasite = serbest bırakılan zaman → mümkün kılınan aktivite birimleri × program değeri

Aktivite birimleri: poliklinik başvuruları, ameliyat öncesi değerlendirmeler, izleme incelemeleri
Program değeri:     ulusal tarife / NHS Payment Scheme fiyatları
                    (bkz. national-tariff-and-unit-costs.md)
```

Bu, [uygulayıcı zamanının](../uygulayıcı-zamanı/) çıktı bazlı değerlemesidir; bir hizmet hattına ölçeklenmiş ve operasyon ekibinin zaten planlama yaptığı aktivite birimlerinde ifade edilmiştir.

## Çözümlü örnek

Band 6 uzman hemşireler ameliyat öncesi değerlendirme klinikleri işletiyor. Dokümantasyon otomasyonu 25 hemşirenin her biri için günde 1 saat geri kazandırıyor; her saat 2 değerlendirmeye sığıyor.

```
Ek değerlendirmeler = 25 hemşire × 2/gün × 250 gün = yılda 12.500
Ameliyat öncesi değerlendirme başına ~120 £ program değerinde:
  12.500 × 120 £ = yılda 1,5 milyon £ yaratılan bakım kapasitesi
```

— tek bir hemşire işe almadan veya tek bir oda inşa etmeden. (Bu taslağın aslen atıfta bulunduğu yaygın alıntılanan model, daha küçük bir kohort için rakamı yılda 766.920 £ olarak koymuştu; aritmetik deseni aynıdır — sayı hemşireler × oturumlar × tarife ile ölçeklenir.) İşletme Direktörü için operasyonel çerçeve: ameliyat öncesi değerlendirme ameliyathane listelerinde kısıt olmaktan çıkar — aynı gün iptal edilen ameliyatlar azalır ve ameliyathane kullanımı artar; *bir sonraki* fayda kaleminin başladığı yer burasıdır (bkz. [aşağı akış kaynak optimizasyonu](../aşağı-akış-kaynak-optimizasyonu/)).

## Yazılım mühendisliği bağlantısı

Aynı yeniden çerçeveleme, geliştirici üretkenliği iddialarını ücret matematiğinden kurtarır: serbest kalan mühendislik zamanı, *kurumun aksi halde karşılayamayacağı teslim edilmiş yetenek* — özellikler, geçişler, güvenilirlik işi — olarak ifade edilir ve kurumun böyle bir yetenek için marjda ödediği şeyle (yüklenici ücretleri veya ertelenmiş işe alım eşdeğerleri) değerlenir. İşletme Direktörü çerçevesi platform işini sunmak hakkında da bir şey öğretir: faydayı izleyicinin yönetildiği birimlerde ifade edin. Operasyon liderleri soyut saatlerde değil aktivite ve hedeflerde düşünür; mühendislik liderleri kazanılan dakikalarda değil yol haritası öğelerinde ve kadro sayısında düşünür.

## Tuzaklar

- **Talepsiz kapasite iddiaları**: 12.500 ek değerlendirme yuvası ancak cerrahi boru hattı onları doldurursa önemlidir — aşağı akış kısıtını kontrol edin.
- **Ödeme mekanizması olmayan tarife değeri**: karma ödemede ek aktivite ek gelir getirmeyebilir; değer bunun yerine bekleme listesi azalması olabilir (bkz. [bekleme listesi etkisi](../bekleme-listesi-etkisi/)).
- **Kapasiteyi nakit olarak sunmak** — bu, nakit serbest bırakmayan faydanın amiral gemisidir; etiketleyin (bkz. [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/)).

## Kaynaklar

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
