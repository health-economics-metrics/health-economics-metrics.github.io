# Kaçınılan Aşağı Akış Maliyetleri

Kaçınılan aşağı akış maliyetleri (maliyet mahsupları), daha erken veya daha iyi eylemle önlenen gelecekteki tedavi giderleridir ve müdahalenin kendi maliyetinden düşülür. Mahsuplar, bir müdahalenin *baskın* — hem daha ucuz **hem de** daha iyi — hâle gelebilmesinin mekanizmasıdır ve sağlık ekonomisinde en çok çifte sayılan, en çok abartılan kalemdir.

## Neden önemli

Neredeyse her dijital sağlık değer önerisi bir mahsup iddiası içerir: "uygulamamız yatışları önler", "uyarılarımız kötüleşmeyi önler", "platformumuz yinelenen testleri önler". Mahsuplar gerçek olduğunda ekonomiyi dönüştürür (bkz. 600 bin £'lık mahsubun vakayı kurduğu [ICER](../artımlı-maliyet-etkililik-oranı/) çözümlü örneği). Ödeyiciler bunu bilir — bu yüzden mahsup iddiaları her değerlendirmede en sert incelemeyi çeker. Aşağıdaki güvenilirlik kuralları finanse edilebilir bir modeli pazarlamadan ayıran şeydir.

## Matematik

```
Net maliyet = müdahale maliyeti − Σ mahsuplar

Geçerli bir mahsup şunlar olmalıdır:
  Atfedilebilir  — müdahaleyle nedensel olarak bağlantılı (karşılaştırıcı kanıtı)
  Marjinal       — para gerçekten harcanmayı bırakır; ortalama değil marjinal
                   maliyette (bkz. marginal-vs-average-cost.md)
  Olasılık       — aşağı akış olayının gerçekleşme olasılığı P ile ağırlıklı
  ağırlıklı
  İskonto edilmiş — gelecekte kaçınılan maliyetler bugünkü değerde
  Tekil          — bir kez, tek bir fayda satırında sayılmış
```

## Çözümlü örnek

"Bu göç riski iddiası, doğru yapılmış hâliyle": 5.000 ameliyat sonrası hasta için bir yara izleme uygulaması, enfeksiyona bağlı yeniden yatışları önlediğini iddia ediyor.

```
Enfeksiyon nedeniyle yeniden yatış temel çizgisi: %4,0 ; uygulamayla (RCT): %3,1
Kaçınılan atfedilebilir olaylar = 5.000 × 0,009 = 45/yıl
Yeniden yatış dönemi başına maliyet (marjinal, bu vakıf): 3.200 £
Mahsup = 45 × 3.200 = 144.000 £/yıl
Uygulama maliyeti = 5.000 × 20 £ = 100.000 £/yıl
Net maliyet = −44.000 £ → gerçekten maliyet tasarrufu sağlıyor; şunlarla:
  RCT'den atıf ✓  marjinal maliyetleme ✓  deneme verisinden olasılık ✓
```

"Yeniden yatışlar ortalama 5.800 £ tutuyor, çok sayıda önleyeceğiz" üzerine kurulu aynı iddia dört sınavın hepsinde başarısız olur ve aldığı reddi hak eder.

## Yazılım mühendisliği bağlantısı

"Bu geçiş gelecekteki yeniden yazımı önler" bir mahsup iddiasıdır ve sağlık ekonomisi kuralları onu dürüst kılar:

- **Karşı olgusal maliyet**: yeniden yazım gerçekte neye mal olurdu ve bu nasıl kanıtlanır?
- **Olasılık**: o gelecek ne kadar olası? (%100 değil — ürünler kapatılır, öncelikler değişir.)
- **İskonto**: 4. yılda kaçınılan bir yeniden yazım %3,5–10 iskontoyla nominal değerinden çok daha az değerlidir.
- **Tekillik**: aynı kaçınılan yeniden yazımı hem teknik borç satırında hem de elde tutma satırında talep etmeyin.

`Mahsup değeri = P(gelecek olay) × karşı olgusal maliyet × iskonto faktörü` — bu satırı teklife yazın ve tahminin tartışılabilir hâle gelmesini izleyin; amaç budur.

## Tuzaklar

- **Çifte sayım** — aynı kaçınılan yatışın mahsup, yatak günü ve maliyeti iliştirilmiş QALY olarak talep edilmesi.
- **Sabit maliyetleri ne olursa olsun devam eden olaylar için ortalama maliyetli mahsuplar**.
- **Yalnızca mümkün olan aşağı akış olaylarına sessiz %100 olasılık**.
- **Ödemesi istenen ödeyiciye tasarruf olarak sunulan, başka bütçelere ait mahsuplar** — bkz. [analiz perspektifi](../analiz-perspektifi/).

## Kaynaklar

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
