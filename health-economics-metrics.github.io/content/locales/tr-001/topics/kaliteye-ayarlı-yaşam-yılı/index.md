# Kaliteye Ayarlı Yaşam Yılı (QALY)

QALY, mükemmel sağlıkta yaşanan bir yıllık yaşamdır. İnsanların *ne kadar uzun* yaşadığını *ne kadar iyi* yaşadığıyla birleştirir; böylece kötü sağlıkta geçen bir yıl bir QALY'den az sayılır — tamamen farklı sağlık müdahalelerini tek bir ölçekte karşılaştırılabilir kılar.

## Neden önemli

QALY, sağlık teknolojisi değerlendirmesinin ortak para birimidir. NICE (İngiltere) sağlık kazançlarını **QALY başına 20.000–30.000 £** olarak değerler: QALY'leri bu eşikten daha ucuza satın alan bir müdahale normalde önerilir; daha pahalıya satın alan normalde reddedilir. Bu tek sayı, ulusal bir sağlık hizmetinin bir kanser ilacını, bir kalça replasmanını ve bir triyaj uygulamasını aynı eksende nasıl karşılaştırdığıdır. Yazılımınız — bozulmayı önleyerek, tedaviyi hızlandırarak veya güvenliği iyileştirerek — QALY'leri inandırıcı biçimde iddia edebiliyorsa, sağlık değerini tıbbın kendisiyle aynı para biriminde fiyatlayabilirsiniz.

## Matematik

```
QALY = Σ_i (süre_i × yarar_i)

süre_i  = i sağlık durumunda geçirilen yıllar
yarar_i = i durumunun kalite ağırlığı, 1 = mükemmel sağlık, 0 = ölü olarak çapalanmış
          (ölümden kötü durumlar için negatif değerlere izin verilir)
```

Yarar ağırlıkları doğrulanmış araçlardan gelir, en yaygın olarak [EQ-5D](../eq-5d/). Bir müdahaleden QALY *kazancı*, müdahaleli ve müdahalesiz QALY akışları arasındaki farktır; NICE referans durumunda yılda %3,5'te [iskonto edilir](../i̇skonto-ve-zaman-tercihi/).

## Çözümlü örnek

Bir hasta, yararı 0,6 olan bir durumda kalp tedavisini bekliyor. Tedavi onu 0,85 yararına geri getirir.

- **Şimdi tedavi edilir**: 0,85'te 1 yıl = bu yıl 0,85 QALY.
- **6 aylık gecikmeyle tedavi edilir**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Gecikmeden hasta başına QALY kaybı**: 0,85 − 0,725 = **0,125 QALY**.

NICE'ın eşiğinde parasallaştırıldığında: 0,125 × 20.000–30.000 £ = **6 aylık gecikme başına hasta başına 2.500–3.750 £ sağlık değeri kaybı**. Yolu hızlandıran yazılım 400 hasta/yıl için bu gecikmeyi kaldırıyorsa, sağlık değeri 50 QALY ≈ **yılda 1,0–1,5 milyon £**'dır — herhangi bir operasyonel tasarruf sayılmadan önce.

## Yazılım mühendisliği bağlantısı

- **Daha hızlı yollar = daha erken QALY'ler.** [Tedaviye sevk](../tedaviye-sevk/)i kısaltan her şey bekleme süresi yararsızlığını yukarıdaki gibi değerlenen sağlık kazancına çevirir.
- **Güvenlik = korunan QALY'ler.** Önlenen ilaç hataları ve kaçırılan tanılar, kaçınılan QALY kayıplarıdır.
- **QALY aynı zamanda bir metrik tasarım şablonudur**: standartlaştırılmış bir araçtan elde edilen kalite ağırlıklarıyla nicelik × kalite bileşimi. Bir "kaliteye ayarlı mühendis yılı" (süre × DevEx anketi ağırlığı) aynı yapıdır — bkz. [SPACE ve DevEx](../space-ve-devex/).
- QALY'leri bir iş gerekçesi için paraya çevirmek için [net parasal fayda](../net-parasal-fayda/); bir karara çevirmek için [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/)ni kullanın.

## Tuzaklar

- **Yarar ağırlıkları icat etmek.** Ağırlıklar doğrulanmış araçlardan (EQ-5D) ve yayımlanmış değer setlerinden gelmelidir, sezgiden değil.
- **Nedensel yol olmadan QALY iddia etmek.** "Uygulamamız refahı iyileştirir" bir QALY iddiası değildir; "0,6 yarar durumunda X haftalık beklemeyi kaldırır" öyledir.
- **Çifte sayım**: aynı kaçınılan bozulmanın hem QALY kazancını hem maliyet tasarruflarını iddia etmek, bunların gerçekten ayrı olduğuna dikkat gerektirir.
- **Eşitlik kör noktaları**: QALY'ler yaşam uzatmanın bir yılını temel yararla değerler, bu da sakatlığı olan insanları dezavantajlı kılabilir — ICER'in (ABD) neden evLYG'yi de raporladığının nedeni (bkz. [kazanılan yaşam yılları](../kazanılan-yaşam-yılları/)).

## Kaynaklar

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
