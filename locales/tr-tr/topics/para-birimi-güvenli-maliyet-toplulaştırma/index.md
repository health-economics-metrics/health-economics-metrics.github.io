# Para Birimi Güvenli Maliyet Toplulaştırma

Çok sayıda parasal kalemi — aylık faturalar, site başına maliyetler, çok yıllı bütçe etkisi rakamları — sıradan ikili kayan noktalı (`f64`) sayılarla toplamak küçük temsil hataları biriktirir, çünkü çoğu ondalık kesir (örneğin 1.234,56 $) ikili kayan noktada tam olarak temsil edilemez. Her bir hata küçüktür ama birkaç yıl boyunca yüzlerce veya binlerce kalemi toplayan büyük bir model bir kuruşun kesirleri kadar kayabilir — ve kayma toplamaların yapıldığı *sıraya* bağlıdır, bu da yeniden üretilemez kılar. Tam ondalık (veya tamsayı alt birim) aritmetiğiyle yapılan bir para birimi toplulaştırması, muhasebe sistemlerinin ve çift girişli defterlerin kuruşuna kadar uzlaşması gereken şekilde tam toplar.

## Neden önemli

Bu, iyi belgelenmiş, temel bir yazılım hatası sınıfıdır: Goldberg'in 1991 ACM Computing Surveys makalesi "What Every Computer Scientist Should Know About Floating-Point Arithmetic", ikili kayan noktanın çoğu ondalık para değerini neden tam olarak temsil edemediğinin ve bunların çoğunu toplamanın hatayı neden bileştirdiğinin standart kaynağıdır. Sağlık ekonomisi ve NHS finans modelleri rutin olarak çok sayıda yılı ve çok sayıda maliyet kategorisini toplar — [toplam sahip olma maliyeti](../toplam-sahip-olma-maliyeti/) ve [bütçe etki analizi](../bütçe-etki-analizi/) her ikisi de çok yıllı ufuklarda çok sayıda `f64` maliyet kalemini toplulaştırır. Bir modelin kuruşuna kadar uzlaşması gerektiğinde — toplamı elle yeniden hesaplayan bir denetim *aynı* rakamı bulmalıdır — aritmetiğin kendisi kayan nokta değil tam ondalık olmalıdır.

## Matematik

```
Saf toplulaştırma:             toplam = Σ f64(kalem_i)         — sıraya bağlı kayma
Para birimi güvenli toplulaştırma: toplam = Σ Decimal(kalem_i)  — tam, yeniden üretilebilir

Yüzde ayarı uygulamak (örn. bir ihtiyat payı):
  ayarlı  = toplam × çarpan                    — tam Decimal sonucu; para biriminin
                                                  alt birim üssünden daha fazla
                                                  ondalık basamak taşıyabilir
  yuvarlanmış = round(ayarlı, para_birimi_üssü, yuvarlama_kuralı)  — yuvarlama kuralı
                                                  (yarım-yukarı ile yarım-çift/bankacı
                                                  yuvarlaması) açıkça belirtilmelidir
```

İki adımlı disipline dikkat edin: tam bir `Decimal` tutarını bir çarpanla çarpmak, para biriminin gerçekte kullandığından daha fazla ondalık basamak üretebilir (örneğin iki ondalıklı bir tutar çarpı iki ondalıklı bir çarpandan üç ondalık basamak) — bu ara hassasiyet otomatik olarak yuvarlanıp atılmaz; yalnızca belirtilmiş bir yuvarlama kuralıyla açık bir yuvarlama adımı onu para biriminin gerçek alt birim üssüne indirir.

## Çözümlü örnek

Her biri 1.234,56 $ olan on iki özdeş aylık fatura, tam ondalık aritmetiğiyle toplanır: 1.234,56 $ × 12 = **14.814,72 $**, tam olarak. Bunu `f64` literal `1234.56`'yı IEEE-754 çift duyarlıklı olarak on iki kez toplamakla karşılaştırın; bu, toplama sırasına bağlı olarak bir kuruşun kesirleri kadar kayabilir — gerçek, belgelenmiş bir hata sınıfı, tam ondalık `Money` aritmetiğine kurulu bir model için sorun değil.

Şimdi bu 14.814,72 $ toplamına standart %5'lik bir bütçe etkisi ihtiyat payı (1,05× çarpan) uygulayın: 14.814,72 $ × 1,05 = 15.555,456 $ — üç ondalık basamak, çünkü çarpma tamdır ve otomatik olarak para biriminin iki ondalık basamağına yuvarlanmaz. Bunu bankacı yuvarlaması (yarım-çift) ile açıkça 2 ondalık basamağa yuvarlamak tam olarak **15.555,46 $** verir.

## Yazılım mühendisliği bağlantısı

Bu, "finansal yazılım `float` değil `Decimal` kullanır"ın ardındaki doğrudan, temel derstir — bu deponun [toplam sahip olma maliyeti](../toplam-sahip-olma-maliyeti/) ve [bütçe etki analizi](../bütçe-etki-analizi/) modüllerine açıkça bağlanır; ikisi de şu anda düz kayan noktalı maliyetleri toplar; buradaki doğruluk argümanı bu modellerin hemen taşınmasını gerektirmez, ancak bir sistemin *ne zaman* kuruşuna kadar uzlaşması gerektiğini ve bu nedenle para aritmetiği için ikili kayan nokta kullanmaması gerektiğini tam olarak belirtir. Toplamları toplamak yerine bölerek kuruş kaybetmeme eş sorunu için ayrıca bkz. [kuruşu kuruşuna maliyet tahsisi](../kuruşu-kuruşuna-maliyet-tahsisi/).

## Tuzaklar

- **Zincirin ortasında `float`'a dönüştürmek**: bir hesaplamanın ortasında bir para değerini kayan noktalı bir sayıya çıkarmak (bazı `Money` kütüphaneleri bu dönüştürme yöntemini açık bir uyarı olarak "lossy" gibi adlandırır) o noktadan sonraki her hesaplama için tamlık garantisini sessizce atar.
- **"Decimal bulaşmaya değmeyecek kadar yavaş"**: finansal raporlama için ham verim değil doğruluk ve denetlenebilirlik önemliyken tam ondalık aritmetiği gereksiz yük diye reddetmek.
- **Yuvarlama kuralını belirtmeden bir ihtiyat yüzdesi uygulamak**: yarım-yukarı ile yarım-çift (bankacı yuvarlaması) yuvarlama son kuruşu değiştirebilir; yuvarlama geleneğinin kendisi belirtilmiş, denetlenebilir bir seçim olmalıdır — bu yuvarlama adımının uygulandığı tam rakam türü olan ihtiyat ve iyimserlik yanlılığı ayarları üzerine HM Treasury Green Book rehberliği için bkz. [maliyet-fayda analizi](../maliyet-fayda-analizi/).

## Kaynaklar

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
