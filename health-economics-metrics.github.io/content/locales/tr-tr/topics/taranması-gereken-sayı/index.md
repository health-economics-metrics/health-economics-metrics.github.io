# Taranması Gereken Sayı (NNS)

NNS, tanımlı bir izlem döneminde **bir** olumsuz sonucu önlemek için, nüfusun temel riski ve erken tespit ile tedavinin sağladığı göreli risk azalması göz önüne alındığında, taranması gereken — yalnızca tedavi edilmesi değil — kişi sayısıdır. NNT'nin tarama programı düzeyindeki karşılığıdır: NNT bir sonucu önlemek için kaç kişinin *tedavi* edilmesi gerektiğini sorar; NNS ise oraya varmak için kaç kişinin tüm *tara-sonra-tedavi et* yolundan geçmesi gerektiğini sorar.

## Neden önemli

Rembold NNS'yi 1998'de tam olarak tarama programları tedavilerle aynı zeminde karşılaştırılabilsin diye tanıttı, çünkü bir tarama testinin manşet göreli risk azalması, bir tedavinin kendisinin gizlemediği iki şeyi gizler: tarama için davet edilen nüfusun temel riski ve taranan herkesin, yalnızca fayda gören azınlığın değil, testin maliyetini ve yanlış pozitif yükünü taşıması. BK Ulusal Tarama Komitesi'nin maliyet-etkililik kapısı ([tarama ekonomisi](../tarama-ekonomisi/)ne bakın) tam olarak bu ayrıma dayanır — düşük temel riskli bir nüfusta etkileyici göreli risk azalması olan bir tarama programının NNS'si yine de binlerce olabilir ve o noktada önlenen sonuç başına program maliyeti gerçek soru olur.

## Matematik

```
NNS = 1 / (temel_risk × göreli_risk_azalması)

temel_risk              = izlem döneminde taranan nüfusta sonucun
                          olasılığı (0–1)
göreli_risk_azalması    = tarama sayesinde mümkün olan erken tedaviyle
                          sağlanan orantılı risk azalması (0–1)

Önlenen sonuç başına program maliyeti = NNS × tarama_başına_maliyet
```

Doğrudan [NNT](../tedavi-edilmesi-gereken-sayı/) ile karşılaştırın: NNS, tüm tara → tanı koy → tedavi et hunisinin etkililiğini tek bir sayıya katarken, NNT hastanın zaten tanı almış ve tedaviye başlamış olduğunu varsayar.

## Çözümlü örnek

Bir tarama programının hedef nüfusunun çalışma dönemi boyunca %2 temel olay riski var (`temel_risk = 0,02`) ve erken tespit %25 göreli risk azalması sağlıyor (`göreli_risk_azalması = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

Bir sonucu önlemek için 200 kişinin taranması gerekir.

Tarama başına 50 £'dan:
Önlenen sonuç başına program maliyeti = 200 × 50 £ = 10.000 £
```

Bu 10.000 £'lık rakam, sonucun kendi maliyetine ve ona mal olacak QALY'lere karşı tartılması gereken şeydir — [önleme ekonomisi](../önleme-ekonomisi/)nin genel olarak önleme programları için yaptığı aynı karşılaştırma.

## Yazılım mühendisliği bağlantısı

NNS, "gerçek bir pozitifi yakalamak için kaç kullanıcının, olayın veya isteğin bir tespit veya triyaj akışından geçmesi gerekir"dir — hedef durumun düşük yaygınlığının NNS'yi pozitif öngörü değerini çökerttiği gibi şişirdiği uyarı tabanlı izleme ve triyaj sistemleriyle doğrudan ilgilidir (bkz. [tarama ekonomisi](../tarama-ekonomisi/) ve [klinik yapay zekâ değerlendirmesi](../klinik-yapay-zekâ-değerlendirmesi/)). Gerçek yakalama başına 200 olay işlemesi gereken bir izleme kuralı, yalnızca yakalama olay başına triyaj maliyetinin en az 200 katı değerindeyse çalıştırılmaya değerdir — yukarıdaki sağlık çözümlü örneğiyle aynı aritmetik.

## Tuzaklar

- **Temel riske bağımlılığı yok saymak**: aynı tarama testi veya programının yüksek riskli bir nüfusta ve düşük riskli bir nüfusta çok farklı NNS'si — ve maliyet-etkililiği — vardır. NNS'yi hesaplandığı nüfusu belirtmeden asla alıntılamayın.
- **Yanlış paydayı saymak**: NNS pozitif çıkanları veya tedaviye başlayanları değil *taranan* kişileri sayar — tüm huninin etkililiğini zaten içerir, bu yüzden yalnızca pozitifler üzerinden sayılan bir metrikle asla karşılaştırılmamalıdır.
- **İzlem dönemleri arasında karşılaştırma**: daha kısa izlem dönemi genellikle NNS'yi şişirir, çünkü pencerede daha az olay gözlenir. NNS rakamları yalnızca aynı izlem süresi üzerinden hesaplandığında karşılaştırılabilir.

## Kaynaklar

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
