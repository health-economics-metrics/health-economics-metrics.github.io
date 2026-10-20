# Mükemmel Bilginin Beklenen Değeri (EVPI)

EVPI, bir karar vericinin karar vermeden önce belirsizliği ortadan kaldırmak için ödemesi gereken azami tutardır — "önce bir çalışma yapalım"ın biçimsel fiyatı.

## Neden önemli

Sağlık sistemleri sürekli bir seçimle karşı karşıyadır: kusurlu kanıtla şimdi benimsemek veya önce daha fazla araştırmayı finanse etmek. EVPI ikinci seçeneğe bir sayı koyar. EVPI 50.000 £ ve önerilen deneme 2 milyon £ tutuyorsa şimdi benimseyin. EVPI 20 milyon £ ise deneme kelepirdir. Aynı soru — "bunu yaygınlaştırmadan önce pilot yapmalı mıyız?" — her kurumsal araç kararı için ortaya çıkar ve neredeyse hiç kimse fiyatlamaz. Önce bilgi toplama seçeneğini değil, bir projeyi sonradan genişletme seçeneğini fiyatlamak için bkz. [Reel Opsiyon Değerlemesi](../reel-opsiyon-değerlemesi/).

## Matematik

EVPI, mükemmel öngörüyle karar vermek ile şimdi beklentilere göre karar vermek arasındaki farktır:

```
EVPI = E_θ[ max_j NPF(j, θ) ]  −  max_j E_θ[ NPF(j, θ) ]

θ        = belirsiz parametreler (ortak dağılımlarıyla)
NPF(j,θ) = θ verildiğinde seçenek j'nin net parasal faydası
```

İlk terim: olası her dünya boyunca en iyi seçim getirisinin ortalaması (her zaman doğru seçersiniz). İkinci terim: ortalamada en iyi olan tek seçeneğin getirisi (şimdi taahhüt etmelisiniz). EVPI ≥ 0 her zaman. Nüfus EVPI'si, etkilenen karar sayısıyla çarpılır. Doğrudan [PSA](../olasılıksal-duyarlılık-analizi/) çekimlerinden hesaplanır.

## Çözümlü örnek

5.000 klinisyene bir yapay zekâ dokümantasyon asistanı yaygınlaştırın ya da yaygınlaştırmayın. İki dünya:

```
Dünya A (p = 0,6): asistan günde 20 dk kazandırır → yaygınlaştırmanın NPF'si = +8 milyon £
Dünya B (p = 0,4): asistan ~0 kazandırır (iş akışı sürtünmesi) → yaygınlaştırmanın NPF'si = −3 milyon £
"Yaygınlaştırma" NPF'si = her iki dünyada 0 £.
```

Şimdi karar verin: E[NPF yaygınlaştırma] = 0,6 × 8 − 0,4 × 3 = **+3,6 milyon £** → yaygınlaştır.

Mükemmel bilgiyle: A dünyasında yaygınlaştırmayı seçin (+8 milyon £), B dünyasında hiçbir şeyi (0 £). Beklenen değer = 0,6 × 8 + 0,4 × 0 = **4,8 milyon £**.

```
EVPI = 4,8 milyon £ − 3,6 milyon £ = 1,2 milyon £
```

Hangi dünyada olduğunuzu büyük ölçüde çözen 150.000 £'a mal olan titiz bir 3 aylık pilot kesinlikle değerlidir — ve 1,2 milyon £'dan fazlasına mal olan herhangi bir pilot, ne kadar kapsamlı olursa olsun değildir.

## Yazılım mühendisliği bağlantısı

EVPI; spike'ın, pilotun, A/B testinin ve kavram kanıtının ekonomisidir. İki pratik kural verir:

- **Pilot, yalnızca karar gerçekten değişebiliyorsa finanse edilmeye değerdir.** Pilot sonucundan bağımsız yaygınlaştıracaksanız EVPI = 0'dır ve pilot tiyatrodur.
- **Pilot harcamasını EVPI ile sınırlayın.** Bilginin değeri, bilgilendirdiği kararın değeriyle sınırlıdır.

Kısmi EVPI (EVPPI) bunu tek parametrelere genişletir: "kazanılan zaman sayısını özellikle kesinleştirmek neye değer?" — bu da pilotun neyi ölçmesi gerektiğini söyler. Tüm belirsizliği ortadan kaldırmak yerine *belirli* bir önerilen çalışmayı fiyatlamak için bkz. [EVSI](../örneklem-bilgisinin-beklenen-değeri/).

## Tuzaklar

- **Ekli karar kuralı olmayan pilotlar yürütmek** — seçimi değiştiremeyen bilgi tanım gereği değersizdir.
- **Bilgi toplamanın gecikme maliyetini yok saymak**: 6 aylık bir pilot 6 aylık yararı geciktirir ([gecikme maliyeti](../gecikme-maliyeti/)); pilotun net değeri = çözülen EVPI − gecikme maliyeti − pilot maliyeti.
- **EVPI'yi tahmin saymak.** Bilgi değerinin bir üst sınırıdır, belirli bir çalışmanın sunacağının tahmini değil.

## Kaynaklar

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
