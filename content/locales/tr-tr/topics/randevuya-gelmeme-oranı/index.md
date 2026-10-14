# Randevuya Gelmeme Oranı (DNA)

DNA oranı, hastanın ne geldiği ne de iptal ettiği rezerve edilmiş randevuların yüzdesidir. Klinisyen, oda ve randevu saati ödenmiştir; hiçbir şey olmaz. Sağlık hizmetlerindeki en saf israf metriğidir — ve yazılımla en kolay düzeltilebilenlerden biridir.

## Neden önemli

NHS England rakamları (2019): kaçırılan aile hekimi randevuları yılda 15 milyonu aşıyor, tanesi ~30 £ — yılda **216 milyon £**'ın üzerinde — ve hastane poliklinik DNA'ları yılda ~8 milyon (~randevuların %6,4'ü), kaçırılan randevu başına ortalama ~**160 £**. Bir hatırlatmanın marjinal maliyeti kuruşlar ve geri kazanılan değer tam personelli bir klinik randevu olduğundan, DNA azaltma dijital sağlıktaki en iyi YG aritmetiklerinden birine sahiptir; bu yüzden SMS hatırlatmaları, kolay yeniden randevu ve öngörülü fazla rezervasyon, dijital sağlığın ilk kanıtlanmış kazanımları arasındaydı.

## Matematik

```
DNA oranı = DNA'lar / rezerve edilen randevular × 100

Azalmanın değeri = randevular × ΔDNA oranı × geri kazanılan randevu başına değer

geri kazanılan randevu başına değer: randevu yeniden doldurulur (faaliyet değeri /
bekleme listesi azalması) ya da doldurulmaz (personel zamanı kısmen yeniden
kullanılabilir) — mekanizma önemlidir, bed-days-saved.md'deki gibi.
```

## Çözümlü örnek

Bir poliklinik bölümü: yılda 200.000 randevu, DNA oranı %8. Bir hatırlatma-artı-yeniden-randevu hizmeti (tek dokunuşla yeniden randevulu SMS, ulaşım bilgisi, erişilebilir formatlar) DNA'ları %5,5'e düşürüyor.

```
Geri kazanılan randevular = 200.000 × 0,025 = 5.000/yıl
Bekleme listesinden ~160 £ ortalama poliklinik değerinde yeniden doldurulur:
  5.000 × 160 £ = 800.000 £/yıl geri kazanılan faaliyet
Hizmet maliyeti: 200.000 × 0,40 £ = 80.000 £/yıl

Getiri ≈ 10:1, artı daha erken görülen 5.000 bekleme listesi hastası
(bkz. waiting-list-impact.md ve referral-to-treatment.md).
```

Etki büyüklüğü (2,5 puan) gerçekçidir: hatırlatma RCT'leri tutarlı biçimde %25–40 göreli DNA azalması gösterir.

## Yazılım mühendisliği bağlantısı

- **Bu bir randevu planlama sistemleri problemidir**: hatırlatmalar, self servis yeniden randevu, iptallerden bekleme listesi otomatik doldurma ve hedefli çifte rezervasyonu yönlendiren randevuya gelmeme tahmin modelleri. Her biri sıra dışı net bir ekonomik vakaya sahip sıradan yazılım mühendisliğidir.
- **Mühendislik benzeri**: rezerve kapasite için gelmeme — rezerve ama boşta CI slotları, rezerve bulut kapasitesi, toplantı odaları, mülakat panelleri. Ekonomi aktarılır: ucuz otomatik bir dürtme (veya kullanılmayan rezervasyonların otomatik serbest bırakılması) pahalı taahhütlü kapasiteyi geri kazanır.
- **Tahmin etiği önizlemesi**: katılım verisiyle eğitilen gelmeme modelleri yoksunluğu ve erişim engellerini kodlar; bunları olası gelmeyenleri *önceliksizleştirmek* için kullanmak eşitsizliği büyütür, katılımı *desteklemek* için kullanmak (ulaşım yardımı, telefon alternatifleri) azaltır. Bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/).

## Tuzaklar

- **İptal-edilip-yeniden-randevulananı geri kazanılan değer olarak iki kez saymak.**
- **Yeniden doldurulmayan geri kazanılmış randevuları değerlemek** — hatırlatma gönderilmiş boş bir randevu hâlâ boştur.
- **DNA'yı sıfıra kovalamak**: DNA'nın son puanları gerçek engellerle karşılaşan hastalardır; cezalandırıcı yaklaşımlar (N DNA'dan sonra taburcu) hastaları terk ederek metriği düşürür.

## Kaynaklar

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
