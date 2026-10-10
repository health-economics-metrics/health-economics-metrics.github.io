# Reel Opsiyon Değerlemesi

Reel opsiyon değerlemesi, finansal opsiyon fiyatlama mantığını gerçek (finansal piyasa dışı) yatırım kararlarına uygular — özellikle bir projeyi başarılı olursa sonradan *genişletme opsiyonuna*, buna mecbur olmadan. Basitleştirilmiş tek dönemli binom model (Cox, Ross, Rubinstein, 1979) bu esnekliği doğrudan değerler; "küçük gönderelim ve görelim"i bir önsezeden fiyatlanmış bir sayıya çevirir.

## Neden önemli

Statik bir NBD hesabı bir projeyi ya hep ya hiç bir bahis olarak fiyatlar: bugünkü ölçekte, sonsuza dek finanse et ya da etme. Gerçek projeler — ve özellikle aşamalı dijital sağlık devreye almaları — nadiren böyle bahis oynanır: bir sağlık sistemi küçük bir pilotu finanse edebilir, ne olduğunu izleyebilir ve yalnızca işe yararsa daha fazla para taahhüt edebilir. Bu esnekliğin gerçek değeri vardır ve onu yok saymak, aşamalı yatırımları tek seferlik olanlara göre sistematik olarak olduğundan düşük değerler; bu, daha güvenli görünen aşamalı teklifi ödüllendiren tedarik süreçleri için tam tersidir. Reel opsiyon değerlemesi esnekliğin kendisini fiyatlar, böylece aşamalı bir teklif naif bir NBD satırında daha küçük göründüğü için cezalandırılmak yerine tam taahhütlü bir alternatifle adilce karşılaştırılabilir.

## Matematik

```
"Yukarı" durumun riskten bağımsız olasılığı:
  p = ((1 + risksiz_oran) − aşağı_faktör) / (yukarı_faktör − aşağı_faktör)

Her durumda genişletme getirisi (sıfırda tabanlı — genişletme isteğe bağlıdır):
  getiri_yukarı = max(proje_değeri × yukarı_faktör − genişletme_maliyeti, 0)
  getiri_aşağı  = max(proje_değeri × aşağı_faktör  − genişletme_maliyeti, 0)

Opsiyon değeri (iskontolu beklenen getiri):
  opsiyon_değeri = (p × getiri_yukarı + (1 − p) × getiri_aşağı) / (1 + risksiz_oran)

Genişletilmiş NBD = statik_nbd + opsiyon_değeri
```

Projenin değeri bir sonraki karar noktasına kadar ya yükselir (`yukarı_faktör`) ya da düşer (`aşağı_faktör`). Genişletme yalnızca o durumda kârlıysa kullanılır — sıfırdaki taban, bunu bir yükümlülük yerine gerçek bir *opsiyon* yapan şeydir. Önce bilgi toplama opsiyonunu, sonradan genişletme opsiyonu yerine fiyatlamak için bkz. [mükemmel bilginin beklenen değeri](../mükemmel-bilginin-beklenen-değeri/). O kararı vermeyi beklemenin maliyeti için bkz. [gecikme maliyeti](../gecikme-maliyeti/).

## Çözümlü örnek

`proje_değeri = 1.000.000 £` olan, bir sonraki karar noktasına kadar 1,5× yükselme veya 0,5× düşme olasılığı bulunan, %8 risksiz oranlı ve 600.000 £ genişletme maliyetli bir dijital hizmet pilotu:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

getiri_yukarı = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
getiri_aşağı  = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Taban önemlidir: pazar hayal kırıklığı yaratırsa opsiyon KULLANILMAZ —
600.000 £ genişletme maliyeti, projenin aşağı durumda değeri olacak
500.000 £'ı aşar.

opsiyon_değeri = (0,58 × 900.000 + 0,42 × 0) / 1,08
               = 522.000 / 1,08
               ≈ 483.333,33 £
```

Opsiyonun değerini 200.000 £'lık statik NBD temel çizgisine eklediğinizde: genişletilmiş NBD = 200.000 + 483.333,33 ≈ **683.333,33 £**. Bu opsiyon değeri olmadan yalnızca 200.000 £'lık statik NBD'yi raporlamak, aşamalı projenin gerçek değerini iki kattan fazla düşük gösterirdi.

## Yazılım mühendisliği bağlantısı

Bu, "şimdi asgari bir sürüm gönder, tutarsa daha fazla yatırım yapma opsiyonunu koru"nun biçimsel sürümüdür — aşamalı bir dijital sağlık ürünü devreye almasıyla doğrudan ilgilidir, [gecikme maliyeti](../gecikme-maliyeti/) ve [WSJF/CD3](../wsjf-ve-cd3/)'ün belirsizlik altında sıralama çerçevesine yapısal olarak paraleldir ve [mükemmel bilginin beklenen değeri](../mükemmel-bilginin-beklenen-değeri/) ile [örneklem bilgisinin beklenen değeri](../örneklem-bilgisinin-beklenen-değeri/)ni tamamlar — üçü de belirsizlik altında esnekliği veya bilgiyi farklı açılardan fiyatlar.

## Tuzaklar

- **Dayandığı ticarete konu varlık varsayımı olmadan riskten bağımsız fiyatlamayı ödünç almak**: reel opsiyon modelleri riskten bağımsız olasılığı finansal opsiyon fiyatlamasından ödünç alır; bu, altta yatan değerin *ticarete konu* bir varlık olduğunu varsayar — gerçekten ticarete konu olmayan bir reel proje için bu, değişmez bir piyasa gerçeği değil bir modelleme kolaylığıdır.
- **`yukarı_faktör`/`aşağı_faktör`'ü serbest parametreler saymak**: binom yukarı/aşağı girdileri kendileri gerekçelendirme gerektiren varsayımlardır, istenen yanıtı üretmek için seçilmiş serbest parametreler değil.
- **Yalnızca opsiyon değerini raporlamak**: reel opsiyon değeri, bağımsız bir projenin statik NBD'sine *eklenir* — yaygın hata, yalnızca opsiyon değerini raporlayıp temel durumu bırakmaktır; bu, statik NBD negatifse vakayı abartır ve (yukarıdaki çözümlü örnekte olduğu gibi) statik NBD tamamen dışarıda bırakıldığında olduğundan az gösterir.

## Kaynaklar

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
