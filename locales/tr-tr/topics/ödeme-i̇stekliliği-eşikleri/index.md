# Ödeme İstekliliği Eşikleri

Ödeme istekliliği (WTP) eşiği, bir karar vericinin sağlık kazancı birimi başına ödeyeceği azami tutardır — bir [ICER](../artımlı-maliyet-etkililik-oranı/)'yi benimse/reddet kararına dönüştüren çizgi.

## Neden önemli

Eşik, sağlık ekonomisinin ölçüm olmaktan çıkıp politika olduğu yerdir. Her ulusal sistemin açık veya örtük bir eşiği vardır ve yerel sayıyı bilmek bir sağlık değeri iddiasını tam olarak nasıl fiyatlayacağınızı söyler:

| Kurum | Eşik (araştırıldığı şekliyle, 2024–2025) |
|---|---|
| NICE (İngiltere) | QALY başına 20.000–30.000 £; ampirik ortalama karar eşiği ≈ 24.400 £ (2022–24); şiddet değiştiricileri etkin tavanı ~36 bin–51 bin £'a yükseltir; yüksek uzmanlaşmış teknolojiler 100 bin £+'ya kadar |
| ICER (ABD, hükümet dışı) | QALY/evLYG başına 100.000–150.000 $ fiyat kıyaslamaları; 50 bin–200 bin $ aralığı raporlar |
| Kanada (CADTH / CDA-AMC) | QALY başına ≈ 50.000 CAD çalışma eşiği |
| WHO-CHOICE (tarihsel, küresel) | Önlenen DALY başına kişi başı GSYH'nin 1–3 katı (artık fazla kaba olduğu için önerilmiyor) |
| Ampirik BK arz tarafı (Claxton ve ark.) | NHS marjında gerçekte yer değiştiren QALY başına ≈ 13.000 £ |

## Matematik

λ eşiği her karar kuralına girer:

```
Benimse: ICER = ΔC/ΔE < λ ise
Eşdeğer olarak: NMB = λ×ΔE − ΔC > 0 ise benimse
```

λ'nın *ne olduğuna* dair iki kuram:

- **Talep tarafı**: toplumun sağlık için ödemeye razı olduğu şey (bir değer yargısı).
- **Arz tarafı**: bütçenin şu anda marjda ürettiği sağlık (ampirik bir nicelik — Claxton'ın ~13 bin £/QALY'si). Kararlar için kullanılan λ arz tarafı oranını aşarsa, yeni teknolojiyi onaylamak eklediğinden daha fazla sağlığın yerini alır.

## Çözümlü örnek

Dijital terapötiğiniz tedavi edilen hasta başına 0,05 QALY'yi 800 £'luk net maliyetle (fiyat eksi mahsuplar) sunuyor.

```
ICER = 800 / 0,05 = QALY başına 16.000 £
```

- İngiltere: 20 bin £'un altında → finanse edilebilir. Savunulabilir azami fiyat: λ = 20.000 £'da, fiyat_maks = 0,05 × 20.000 + mahsuplar = 1.000 £ + mahsuplar.
- QALY başına 150 bin $'da ABD ticari çerçevesi: değer bazlı fiyat çok daha yüksektir.
- Kişi başı GSYH'si 4.000 $ olan bir ülke eşiği: aynı ürün net ~200 $'ın altına mal olmalıdır.

Aynı ürün, üç pazar, üç fiyat — eşik fiyatlama modelinin *kendisidir*. Bu, λ'dan tersine çalıştırılan değer bazlı fiyatlamadır.

## Yazılım mühendisliği bağlantısı

Her mühendislik kuruluşunun örtük bir λ'sı vardır: kazanılan mühendis saati başına araçları finanse ettiği çıta. Bunu açık hale getirmek — "inandırıcı kazanılan mühendis saati başına 40 £'un altındaki her şeyi finanse ederiz" — platform yatırımlarının lig tablosu karşılaştırmasını mümkün kılar, tıpkı QALY başına maliyet lig tablolarının sağlık harcamalarını sıralaması gibi. Arz tarafı dersi de aktarılır: gerçek iç λ'nız liderliğin zamanın değeri olarak söylediği değil, *mevcut* biriktirme listenizin marjda ürettiğidir.

## Tuzaklar

- Yargı bölgeleri arasında **eşik alışverişi** veya sıradan bir ürün için HST tavanını alıntılamak.
- **λ'yı fiyat tabanı olarak ele almak**: eşiği geçmek gereklidir, yeterli değildir — [bütçe etkisi](../bütçe-etki-analizi/) birim başına karşılanabilir bir ürünü yine de batırabilir.
- **Eşiklerin hareket ettiğini göz ardı etmek**: NICE'ın şiddet değiştiricileri (2022) ve periyodik incelemeler etkin λ'yı değiştirir; iddialarınızı tarihlendirin.
- **Önce çevirmeden bir ICER'i farklı bir para birimindeki eşikle karşılaştırmak**: bkz. [para birimleri arası ICER karşılaştırması](../para-birimleri-arası-icer-karşılaştırması/) — dönüştürme yöntemi (satın alma gücü paritesi ve piyasa döviz kuru) metodolojik olarak sonuçludur, yuvarlama ayrıntısı değil.
- **λ tabanlı değerlemeyi işgücü piyasası VSL/VPF geleneğiyle karıştırmak**: bunlar farklı kuramsal geleneklerden gelir (sağlık bütçesiyle kısıtlı metodoloji ve ücret-risk takaslarından ortaya çıkan tercih) ve her zaman uzlaştırılamaz — hayatı değerlemenin alternatif ortaya çıkan tercih yaklaşımı için bkz. [İstatistiksel Yaşam Değeri](../i̇statistiksel-yaşam-değeri/).

## Kaynaklar

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
