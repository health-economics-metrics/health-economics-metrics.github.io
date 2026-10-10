# Analiz Perspektifi

Perspektif, bir ekonomik analizde *kimin* maliyet ve faydalarının sayıldığını tanımlar: ödeyicinin, sağlayıcının veya bir bütün olarak toplumun. Aynı müdahale bir perspektiften harika, bir diğerinden berbat görünebilir.

## Neden önemli

Her ekonomik değerlendirme perspektifini baştan beyan etmelidir, çünkü perspektif hangi kalemlerin var olduğunu belirler:

- **Ödeyici perspektifi** (örn. NHS komisyoncusu, sigortacı): yalnızca ödeyicinin geri ödediği maliyetler.
- **Sağlayıcı perspektifi** (örn. bir hastane vakfı): iç hizmet sunum maliyetleri, personel, tesisler.
- **Toplumsal perspektif**: her şey — hasta zamanı, seyahat, aile tarafından verilen gayriresmî bakım ve işverenlerin verimlilik kayıpları dahil.

NICE'ın referans durumu maliyetler için **NHS ve Kişisel Sosyal Hizmetler (PSS)** perspektifini kullanır. ABD İkinci Maliyet-Etkililik Paneli, dahil edilenleri listeleyen bir "etki envanteri" ile hem sağlık sektörü hem de toplumsal analiz bildirilmesini önerir.

## Matematik

Formül yok — herhangi bir matematikten önce uygulanan bir kapsam kuralı:

```
Dahil edilen maliyet/fayda kategorileri = f(perspektif)
```

Yararlı bir kontrol: her maliyet/fayda için bir satır ve her perspektif için bir sütun içeren bir etki envanteri tablosu kurun ve hangi hücrelerin sayıldığını işaretleyin.

## Çözümlü örnek

Bir belirti denetleyici uygulaması yılda 10.000 aile hekimi ziyaretini kendi kendine bakıma yönlendiriyor.

- **Ödeyici (NHS)**: aile hekimi muayenesi başına 10.000 × 42 £ tasarruf = **420.000 £/yıl** — güçlü biçimde olumlu.
- **Sağlayıcı (aile hekimliği kliniği)**: klinikler kişi başı ödeme alıyorsa gelirleri değişmez ama iş yükü düşer — hafifçe olumlu.
- **Toplumsal**: hastaların kazandığı seyahat ve bekleme süresini ekleyin, diyelim 10.000 × 2 saat × 15 £/saat = 300.000 £ zaman değeri; ancak %2'si yanlış güvence alıp daha sonra, daha hasta olarak başvuruyorsa 200 × 3.000 £ = 600.000 £ ek tedavi zararını çıkarın. Toplumsal net: 420.000 + 300.000 − 600.000 = **120.000 £/yıl** — olumlu, ama güvenlik varsayımı tarafından domine edilir.

Aynı uygulama, üç farklı yanıt. Rakamları karşılaştırılabilir ve dürüst kılan, perspektifin beyanıdır.

## Yazılım mühendisliği bağlantısı

Araç ve platform YG'sinin de perspektifleri vardır:

- **Ekip bütçesi ("ödeyici")**: lisans ücreti benim maliyet merkezime sığıyor mu?
- **Platform kuruluşu ("sağlayıcı")**: entegrasyon, destek ve bakım dahil toplam maliyet.
- **Şirket ("toplumsal")**: müşteri etkisini, güvenlik dışsallıklarını ve etkilenen her ekibin zamanını dahil edin.

Satın alan ekip için ucuz ama 40 başka ekibe geçiş işi yükleyen bir CI aracı, maliyet aktarmanın yazılım sürümüdür — yalnızca daha geniş perspektiften görünür. Her iş gerekçesinde perspektifi belirtin; gözden geçirenler göremedikleri varsayımlara itiraz edemez.

## Tuzaklar

- **Sessiz perspektif değiştirme**: toplumsal faydaları sayıp yalnızca ödeyici maliyetlerini saymak her şeyi maliyet-etkili gösterir.
- **Perspektifler birleştirildiğinde çifte sayım** (örn. kaçınılan bir aile hekimi randevusunu hem ödeyici tasarrufu hem de hasta zaman tasarrufu olarak saymak, ödeyici rakamı personel zamanını zaten içeriyorsa).
- **Maliyet aktarımını yok saymak**: maliyeti yalnızca hastalara, bakım verenlere veya başka bir bölüme kaydıran "tasarruflar".

## Kaynaklar

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
