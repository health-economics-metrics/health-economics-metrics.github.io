# İnsan Sermayesi Yaklaşımı ve Sürtünme Maliyeti Yöntemi

Bunlar, hastalık maliyeti ve maliyet-fayda çalışmalarında hastalık, sakatlık veya ölümden kaynaklanan kayıp verimliliği değerlemenin iki rakip yöntemidir. İnsan Sermayesi Yaklaşımı (HCA) tüm kayıp çıktıyı devamsızlığın tam süresi boyunca ücret oranıyla değerler; Sürtünme Maliyeti Yöntemi (FCM) onu yalnızca bir işverenin üretimi eski haline getirmek için gerçekten ihtiyaç duyduğu daha kısa süre için değerler. İkisi arasında seçim yapmak dolaylı maliyet tahminini iki kat veya daha fazla değiştirir.

## Neden önemli

Dolaylı (verimlilik) maliyetleri, iki standart yöntem bu kadar keskin ayrıştığı için sağlık ekonomisinde en çok tartışılan kalemlerden biridir. HCA, her devamsızlık gününü ekonominin gerçekten kaybettiği bir çıktı günü olarak, tam süre için tam ücretle — ya da ölüm veya kalıcı sakatlıkta kalan çalışma ömrü için — değerler. FCM, işsizlik ve işgücü piyasası gevşekliği olan bir ekonomide, bir işveren yedek eğittiğinde veya işi yeniden dağıttığında uzun bir devamsızlığın çoğunun ulusal çıktıyı gerçekte azaltmadığını savunur; yalnızca "sürtünme dönemi" — üretimi önceki seviyesine döndürme süresi — gerçek bir kaybı temsil eder. FCM bu nedenle sistematik olarak HCA'dan daha düşük, daha muhafazakâr dolaylı maliyet tahminleri üretir ve iki yöntem birbirinin yerine geçen dipnotlar değildir: "kayıp verimlilik"in ne demek olduğuna dair farklı ekonomik kuramlardır. Bu aynı zamanda [NICE'ın referans durumunun](../sağlık-teknolojisi-değerlendirmesi/) verimlilik maliyetlerini varsayılan olarak dışlamasının, bunları — hiç raporluyorsa — referans durum ICER'ine harmanlamak yerine ayrı bir toplumsal perspektif duyarlılık analizi olarak raporlamasının nedenidir — bkz. [analiz perspektifi](../analiz-perspektifi/).

## Matematik

```
İnsan Sermayesi Yaklaşımı:
HCA_maliyeti = günlük_ücret × kayıp_günler

Sürtünme Maliyeti Yöntemi (basitleştirilmiş, sürtünme dönemiyle sınırlı biçim):
FCM_maliyeti = günlük_ücret × min(kayıp_günler, sürtünme_dönemi_günleri)

sürtünme_dönemi_günleri = üretimi eski haline getirme süresinin ülkeye/sektöre özgü
                           tahmini (tarihsel olarak Hollanda iMTA maliyetleme
                           rehberliğinde ~85 gün; ülkeye göre değişir ve
                           periyodik olarak yeniden tahmin edilir)
```

İki yöntem arasındaki tüm anlaşmazlık `min()` içinde yaşar: HCA `kayıp_günler`'i asla sınırlamaz, bu yüzden maliyet tüm devamsızlık boyunca artmaya devam eder; FCM ise sayılan günleri, fiili devamsızlık ne kadar uzarsa uzasın sürtünme dönemiyle sınırlar.

## Çözümlü örnek

Bir çalışan `kayıp_günler = 180` gün işten uzak, `günlük_ücret = 150 £` kazanıyor.

**İnsan Sermayesi Yaklaşımı**:

```
HCA_maliyeti = 150 × 180 = 27.000 £
```

**Sürtünme Maliyeti Yöntemi**, `sürtünme_dönemi_günleri = 85` sürtünme dönemiyle (tarihsel Hollanda iMTA kıyaslaması, rehberliğin periyodik yeniden tahmini itibarıyla):

```
FCM_maliyeti = 150 × min(180, 85) = 150 × 85 = 12.750 £
```

FCM'nin 12.750 £'ı, *aynı* devamsızlık için HCA'nın 27.000 £'ının yarısından azdır — başka hiçbir varsayıma dokunulmadan, yalnızca yöntem seçimi bir hastalık maliyeti vakasını ciddi biçimde değiştirir.

## Yazılım mühendisliği bağlantısı

Bu, bir ekibin ayrılan bir mühendisi nasıl değerlediğine doğrudan eşlenir:

- **HCA tarzı ayrılma maliyetleme**: kaybı, kadro ne kadar boş kalırsa kalsın ayrılan mühendisin tam maaşı olarak değerlemek. Bu, çoğu ayrılma maliyeti modelinin saf sürümüdür ve HCA'nın verimlilik kaybını abarttığı nedenle kaybı abartır — boşalan kapasitenin tüm zaman boyunca tam verimli olduğunu ve başka hiçbir şeyin gevşekliği emmediğini varsayar. Bu yöntemin beslendiği işe alım/ilk kurulum/boşluk kapama zincirini nicelleştiren [iş gücü elde tutma](../i̇ş-gücünü-elde-tutma/)ya bakın.
- **FCM tarzı ayrılma maliyetleme**: kaybı yalnızca yedeği doldurma ve ısındırma gerçek süresi için değerlemek — mühendislik "sürtünme dönemi". Bu, bir iş gerekçesi için daha savunulabilir sayıdır, tıpkı FCM'nin bir hastalık maliyeti çalışmasında daha muhafazakâr seçim olması gibi.
- Altta yatan disiplin [fırsat maliyeti](../fırsat-maliyeti/)ndekiyle aynıdır: yerinden edilen bir kaynağı, bir oranla çarpılmış manşet süreyle değil, gerçekte kaybedilenle değerleyin.

## Tuzaklar

- **Tek bir analizde HCA ve FCM'yi karıştırmak ya da seçimi açıklamadan yalnızca birini raporlamak.** Aynı devamsızlık verisi yönteme göre raporlanan maliyette 2× veya daha fazla fark üretebilir; seçim gömülü değil belirtilmiş olmalıdır.
- **Toplumsal perspektif vakasında HCA'yı duyarlılık analizi olarak işaretlemeden kullanmak.** NICE'ın referans durumu verimlilik maliyetlerini açıkça dışlar; toplumsal perspektif HCA tahmini manşet ICER'de değil senaryo analizinde yer alır.
- **Her iki yöntemi ücretsiz veya piyasa dışı işe (örn. bakım verme) düzeltmesiz uygulamak.** Her iki yöntem de değer için bir ücret oranı vekili varsayar; bu, piyasa ücreti olmayan işe temiz biçimde aktarılmaz.

## Kaynaklar

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
