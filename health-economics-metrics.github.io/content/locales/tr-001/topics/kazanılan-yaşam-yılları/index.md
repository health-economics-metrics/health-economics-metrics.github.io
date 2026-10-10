# Kazanılan Yaşam Yılları (LYG)

Kazanılan yaşam yılları, bir müdahaleye atfedilebilen ek sağkalımdır; kalite ayarlaması olmadan: müdahaleli ve müdahalesiz sağkalım eğrileri arasındaki alan. Eşit değerli kazanılan yaşam yılı (evLYG), tüm yaşam uzatmayı eşit sayan modern bir türevdir.

## Neden önemli

LYG en ham sağlık sonucudur: insanlar ne kadar daha uzun yaşıyor? Kalite verisi eksik olduğunda, QALY şüpheci kitlelerle karşılaştırırken ve sağkalım eğrilerinin birincil deneme çıktısı olduğu onkolojide önemlidir. **evLYG** (ABD ICER enstitüsü tarafından maliyet/QALY ile birlikte kullanılır) etik bir nedenle vardır: QALY'ler uzatılmış bir yaşam yılını hastanın yararıyla değerler, dolayısıyla sakatlığı olan birinin yaşamını uzatmak "daha az sayılır" — evLYG her uzatılmış yılı sabit bir yararla değerleyerek bu ayrımcılığı kaldırır.

## Matematik

```
LYG = ortalama sağkalım_yeni − ortalama sağkalım_karşılaştırıcı
    = sağkalım eğrileri arasındaki alan (zaman ufkuyla sınırlı)

Yaşam uzatmanın QALY görünümü:  uzatma × hasta yararı
Yaşam uzatmanın evLYG görünümü: uzatma × sabit yarar (ICER ~0,851 kullanır,
                                ortalama ABD nüfus yararı)
```

İkisi de ekonomik modellerde [iskonto edilir](../i̇skonto-ve-zaman-tercihi/).

## Çözümlü örnek

Bir hastanede sepsis erken uyarı algoritması: modelleme, daha erken antibiyotiklerin yılda 12 ölümü önlediğini gösteriyor; bu hastaların ortalama yaşı, her biri 0,7 yararla 8 kalan yaşam yılı veriyor.

```
LYG   = 12 × 8            = 96 yaşam yılı/yıl
QALY  = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

QALY başına 20.000 £'da QALY çerçevesi sağkalımı yılda 1,34 milyon £ değerler; evLYG çerçevesi 1,63 milyon £. Fark tam olarak 0,7 yararla bir yaşam yılının "tam" bir yaşam yılının %70'i değerinde olup olmadığına dair etik yargıdır. Ciddi dosyalar ikisini de raporlar.

## Yazılım mühendisliği bağlantısı

- Sağkalım analizi ortak araç setidir: hastalar ve *hizmetler* için Kaplan-Meier eğrileri (arızaya kadar süre, kayba kadar süre) aynı matematiktir. Bir güvenilirlik yatırımından "kazanılan hizmet yılları" = sistemin müdahaleli/müdahalesiz sağkalım eğrileri arasındaki alan — nokta MTTF iddialarından daha dürüst bir çerçeve.
- evLYG mühendislik için de bir metrik tasarımı uyarısı taşır: çıktıyı bir "ekip kalitesi" faktörüyle ağırlıklandıran herhangi bir verimlilik metriği, kısıtlı veya zorlanan ekipler için iyileştirmeleri sistematik olarak değersizleştirir — bazen eşit değerli türevi bilerek istersiniz.

## Tuzaklar

- **Medyan ve ortalama sağkalım**: ekonomik modeller ortalama (eğri altındaki alan) gerektirir; denemeler genellikle medyanı manşet yapar. Çarpık dağılımlarda çok farklıdırlar.
- **Deneme takibinin ötesine ekstrapolasyon** kronik hastalıkta modellenen LYG'ye hâkim olur — ekstrapolasyon modelini belirtin ve [duyarlılık analizinde](../duyarlılık-analizi/) test edin.
- **Gözlemsel önce/sonra verilerinden önlenen ölümleri iddia etmek**, vaka karışımı ve seküler eğilimler için düzeltme yapmadan.

## Kaynaklar

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
