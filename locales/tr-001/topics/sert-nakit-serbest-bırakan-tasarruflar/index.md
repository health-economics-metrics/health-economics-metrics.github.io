# Sert Nakit Serbest Bırakan Tasarruflar (Açık Savunması)

Sert nakit serbest bırakan tasarruflar, bir hastanenin yazılımınız sayesinde gelecek ayın bütçesinden aktif olarak **silebileceği** kalemlerdir. Katı bir mali muhasebeci için — ve açıkla çalışan bir vakıf için — bu tamamen sayılan tek fayda sınıfıdır.

## Neden önemli

Birçok NHS vakfı, her harcama kalemine yoğun inceleme yapılan açık kapatma planları altında çalışır. Bu ortamda kapasite faydaları ve kalite iyileştirmeleri — ne kadar gerçek olurlarsa olsunlar — açığı kapatmaz; yalnızca nakit kapatır. Bütçe kalemlerini sildiğini kanıtlayabilen bir yazılım ürünü *CFO'nun gözünden kendi kendini finanse eder*, bu da tedariki dönüştürür: konuşma "bunu karşılayabilir miyiz?" olmaktan çıkıp "yapmamayı karşılayabilir miyiz?" olur. Bu belge, [nakit serbest bırakan ve bırakmayan tasarrufların](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/) açığa dönük keskin ucudur.

## Matematik

NHS'in en güvenilir sert nakit hedefi **prim ücretli geçici personeldir**. Vakıflar boşlukları dahili "Bank" personeli (standart sayılabilecek ücretler) ve harici "Agency" personeli (çoğu kez Agenda for Change oranlarının 2–3 katı, tavan konulmuş ama nadir roller için sık aşılan) ile kapatır.

```
Sert tasarruf = kaçınılan prim vardiyaları × (prim oranı − kadrolu oran)
              + kaçınılan fazla mesai saatleri × fazla mesai primi
              + iptal edilen harici sözleşmeler × sözleşme değeri

Mekanizma şartı: belirli bütçe kalemini ve azaltıldığını
onaylayacak yöneticiyi adlandırın. Kimse kalemi gösteremiyorsa sert nakit değildir.
```

## Çözümlü örnek

Bir Band 6 hemşire vardiya başına idari yük nedeniyle ~1 saat kaybeder; dokümantasyon düzenli olarak vardiya sonunu aşıp fazla mesaiye taşar ve servisler dokümantasyon yetiştirme için ekstra Bank desteği ayırır.

Yazılım bu saati 300 hemşire boyunca planlı vardiyaya geri verir:

```
Kaçınılan fazla mesai: 300 hemşire × 2,5 ücretli fazla mesai saati/hafta × 8 £ prim × 46 hafta
                       ≈ 276.000 £/yıl
Bank/agency vardiyaları: 15 yetiştirme vardiyası/hafta × 180 £ prim × 52
                         ≈ 140.400 £/yıl
Sert nakit toplam      ≈ ~150.000 £ lisans maliyetine karşı 416.000 £/yıl
```

Her pound e-vardiya ve bordro sistemlerine karşı denetlenebilir — faydanın tam olarak kanıtlanması gereken yol, aylık, [fayda gerçekleştirme](../fayda-gerçekleştirme/) yoluyla. (Yayımlanmış NHS iş gücü modelleri bu mekanizmada harcanan her 1 £ başına 11+ £ gibi oranlar iddia etti; böyle bir oranı taşınabilir bir olgu değil, *sizin* vakfınızın vardiya verisi için bir hipotez sayın.)

## Yazılım mühendisliği bağlantısı

Ajans priminin mühendislik eşdeğerleri, kuruluşun kendi sıkıntı alımlarıdır: teslim boşluklarını kapatan yüklenici günlük ücretleri, olay güdümlü fazla mesai, hızlandırılmış destek sözleşmeleri ve bulut spot fiyat paniği. Sert nakit iddia eden verimlilik yazılımı bu kalemleri aynı disiplinle hedeflemelidir — bütçe kalemini, sahibini ve küçüleceği ayı adlandırın. Sunduğu diğer her şey kapasitedir ([değer yaratan kapasite](../değer-üreten-kapasite/)) veya kalitedir: gerçek, değerli ve farklı.

## Tuzaklar

- **Kapasiteye "tasarruf" demek** — finansla anında güvenilirlik katili; [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/) sınıflandırmasına bakın.
- **Yerel olgu olarak sunulan satıcı modeli oranları** (11 £:1 £ sorunu) — modeli vakfın kendi vardiya verisi üzerinde yeniden kurun.
- **Tek seferlik ve yinelenen karışıklığı**: iptal edilen bir sözleşme değerini yılda bir kez tasarruf eder, bir kez değil; silinen bir kadro maaşı yalnızca silinmiş kaldığı sürece tasarruf eder.

## Kaynaklar

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
