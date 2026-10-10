# Örneklem Bilgisinin Beklenen Değeri (EVSI)

EVSI, *belirli bir önerilen çalışmanın* — belirli bir tasarım, belirli bir örneklem büyüklüğü — yürütülmeden önceki değeridir; tüm belirsizliği tümden ortadan kaldırmayı fiyatlayan [EVPI](../mükemmel-bilginin-beklenen-değeri/)'nin aksine. EVSI, bir araştırma finansörünün gerçekte karşılaştığı soruyu yanıtlar: "*bu* deneme, *bu* büyüklükte, maliyetine değer mi?"

## Neden önemli

EVPI size herhangi bir araştırmanın değerinin tavanını söyler; önünüzdeki denemenin çıtayı aşıp aşmadığını asla söylemez. 50 hastalık bir pilot ile 500 hastalık kesin bir deneme arasında seçim yapan ulusal bir araştırma finansörünün, her bir *belirli tasarımın* ne kadar değerli olduğunu bilmesi gerekir, yalnızca her şeyi bilmenin değerini değil. EVSI bu sayıyı sağlar ve örneklem büyüklüğüyle ölçeklendiği için, bir finansörün tahmin etmek yerine beklenen net faydayı azamileştiren örneklem büyüklüğünü bulmasına izin verir.

Bu aynı zamanda EVSI'nin neden her zaman EVPI'den küçük veya ona eşit olduğunu da açıklar: sonlu bir örneklem belirsizliği yalnızca kısmen çözebilir ve mükemmel bilgiden daha değerli görünen bir çalışma, gerçek bir sonuç değil hesaplamanın yanlış olduğunun işaretidir.

## Matematik

```
Genel:
EVSI(n) = E_veri[ max_d E_θ|veri[NF(d,θ)] ]  −  max_d E_θ[NF(d,θ)]
  (iç içe beklenti: dış olası çalışma sonuçları üzerinden, iç o sonucu
  gördükten sonra θ hakkındaki sonsal inanç üzerinden — genellikle olasılıksal
  duyarlılık analizi çekimleri üzerinde iç içe Monte Carlo / Bayes güncellemesiyle tahmin edilir)

Kapalı biçim normal yaklaşım (tek belirsiz parametre, eşlenik
normal-normal model — standart bir kısayol, her model için kesin değil):
EVSI(n) = EVPI × n / (n + n0)

n  = önerilen çalışmanın örneklem büyüklüğü
n0 = "önsel-eşdeğer örneklem büyüklüğü" — mevcut önselle aynı bilgiyi
     taşıyacak hayali bir örneklemin büyüklüğü, veri varyansının önsel
     varyansa oranından türetilir
ENBS(n) = EVSI(n) − Maliyet(n)
Nüfus EVSI'si = karar başına EVSI × etkilenen kararlar
```

Genel biçim iç içe bir beklentidir çünkü bir çalışmanın gelecekteki sonucu kendisi belirsizdir: çalışmanın üretebileceği her olası veri kümesi üzerinden ortalama almalı ve her biri için güncellenmiş (sonsal) inanç verildiğinde en iyi kararı yeniden hesaplamalısınız. Kapalı biçim normal yaklaşım bu hesaplama maliyetini tek bir orana takas eder; belirsiz parametre ve veri (yaklaşık olarak) normal dağılımlı ve eşlenik olduğunda geçerlidir — bir kolaylıktır, evrensel bir yasa değil. Bu varsayım geçerli olmadığında tam iç içe Monte Carlo genel amaçlı yöntemdir. EVSI'nin genellikle tahmin edildiği PSA çekimleri için bkz. [olasılıksal duyarlılık analizi](../olasılıksal-duyarlılık-analizi/).

## Çözümlü örnek

[EVPI](../mükemmel-bilginin-beklenen-değeri/) çözümlü örneğinin üzerine kurarak — EVPI'nin 1,2 milyon £ bulunduğu, 5.000 klinisyene yapay zekâ dokümantasyon asistanı yaygınlaştırma — aynı EVPI'yi burada tam sterlin olarak ifade edin: **EVPI = 1.200.000 £**.

50 klinisyenlik önerilen bir pilot çalışma masada. Önsel inancın varyansının pilotun ölçüm kesinliğine oranından, önsel-eşdeğer örneklem büyüklüğü `n0 = 75` çıkar:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = 480.000 £
```

Pilotun maliyeti 120.000 £:

```
ENBS = EVSI − Maliyet = 480.000 − 120.000 = 360.000 £
```

Açıkça pozitif bir ENBS: pilotu finanse edin. Aynı tedarik kararı 3 benzer bölgesel vakıfta tekrarlanıyorsa pilotun değeri ölçeklenir:

```
Nüfus EVSI'si = 480.000 × 3 = 1.440.000 £
```

## Yazılım mühendisliği bağlantısı

EVSI, bir pilotun veya A/B testinin yalnızca yapılıp yapılmayacağını değil, *ne kadar büyük* olması gerektiğini seçmenin ekonomisidir:

- **Yatırım kararı olarak örneklem büyüklüğü.** 50 kullanıcılı bir beta ile 5.000 kullanıcılı kademeli bir yaygınlaştırma farklı EVSI ve maliyetlere sahip farklı "çalışmalardır" — EVSI, "daha fazla veri her zaman daha iyidir"i varsaymak yerine bunları aynı zeminde karşılaştırmanıza izin verir.
- **Görevlendirme sınavı EVSI tek başına değil ENBS'dir.** Yüksek EVSI'li ama maliyeti çoğunu yiyen bir çalışma zayıf bir tekliftir; karar kuralı örneklemenin beklenen net faydasıdır, tıpkı bir iş gerekçesinin yalnızca faydayı raporlamak yerine faydayı maliyetten düşmesi gibi.
- **Azalan getiriler açıktır.** EVSI(n) `n/(n+n0)` ile arttığından, bir pilotun boyutunu ikiye katlamak değerini asla ikiye katlamaz — daha büyük bir deneyin azalan marjinal bilgi değeri olduğu mühendislik içgüdüsünün biçimsel sürümü.

## Tuzaklar

- **Normal yaklaşımı varsayımları dışında uygulamak.** Yalnızca kabaca eşlenik, tek parametreli belirsizlik için geçerlidir; gerçekten doğrusal olmayan veya çok parametreli bir karar modeli bu kısayolu değil tam iç içe Monte Carlo'yu gerektirir.
- **EVSI'yi yalnızca nakit maliyetle karşılaştırmak.** EVSI, çalışmanın *tam* maliyetine karşı tartılmalıdır; çalışmanın kendi karar gecikme maliyeti dahil — bkz. [gecikme maliyeti](../gecikme-maliyeti/) — yalnızca çalışmanın faturası değil.
- **EVSI > EVPI'yi gerçek bir bulgu saymak.** EVSI yapı gereği asla EVPI'yi aşamaz; bunu üreten bir hesaplama bir modelleme hatasıdır, bir keşif değil.

## Kaynaklar

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
