# Zaman Ufku

Zaman ufku, bir analizin maliyetleri ve etkileri saydığı dönemdir. Karşılaştırılan seçenekler arasındaki tüm anlamlı farkları yakalayacak kadar uzun olmalıdır.

## Neden önemli

Kısa bir ufuk seçerseniz geç faydaları (önleme) ve geç maliyetleri (bakım) kaçırırsınız. Aşırı uzun bir ufuk seçerseniz her şey belirsizlikte boğulur. Sağlık teknolojisi değerlendirmesi, ölüm etkisi olan tedaviler için çoğu kez **yaşam boyu** ufuk kullanır; [bütçe etki analizi](../bütçe-etki-analizi/) sorusu değer değil karşılanabilirlik olduğundan bilerek kısa bir **1–5 yıllık** ufuk kullanır. Ufuk beyan edilmiş bir modelleme seçimidir ve uyumsuz ufuklar bir karşılaştırmayı oyunlamanın klasik yoludur.

## Matematik

Ufuk, herhangi bir değerlendirmedeki toplamın üst sınırıdır:

```
Net bugünkü değer = Σ (t = 0 … T) [ (Faydalar_t − Maliyetler_t) / (1 + r)^t ]

T = zaman ufku (yıl)
r = iskonto oranı (bkz. discounting-and-time-preference.md)
```

Sonuçlar ufuk belirtilerek raporlanmalı ve ideal olarak birden çok ufukta gösterilmelidir.

## Çözümlü örnek

Bir elektronik reçeteleme sisteminin uygulanması 2 milyon £, işletilmesi yılda 200.000 £'a mal oluyor. Yılda 600.000 £ değerinde ilaç hatasını önlüyor (önlenen zararın tedavi maliyeti).

Ufka göre net fayda (netlik için iskontosuz):

```
1 yıllık ufuk:  −2.000.000 − 200.000 + 600.000  = −1.600.000 £
3 yıllık ufuk:  −2.000.000 + 3 × 400.000        = −800.000 £
5 yıllık ufuk:  −2.000.000 + 5 × 400.000        =  0 £
10 yıllık ufuk: −2.000.000 + 10 × 400.000       = +2.000.000 £
```

Sistem 5 yılın altındaki her ufukta "başarısız" ve 10'da "başarılı" olur. Hiçbiri gerçek cevap değildir; dürüst rapor başa baş noktasını belirtir ve ufku sistem ömrüyle (değiştirilmeden önce ne kadar süre?) gerekçelendirir.

## Yazılım mühendisliği bağlantısı

- **Tek bir sprint boyunca ölçülen araç değerlendirmeleri** öğrenme eğrisi çukurunu (maliyetler öne yüklü) ve uzun vadeli bakımı (maliyetler arkaya yüklü) sistematik olarak kaçırır. 2. haftada ölçülen yapay zekâ kodlama asistanı pilotları kararlı durumu değil, yenilik zirvesini yakalar.
- **Sözleşme süresi ≠ fayda ufku.** 1 yıllık bir SaaS sözleşmesi, gerçekçi olarak yenilenme bekliyorsanız yine de 5 yıl boyunca değerlendirilebilir — ama bunu söyleyin.
- **Eski sistem değiştirme vakaları**, keyfi bir yuvarlak sayıya değil eski sistemin inandırıcı ömür sonuna kadar yürütülmelidir.

## Tuzaklar

- **Ufuk alışverişi**: seçeneğinizi kazandıran ufku seçmek. Sonuçları hesaplamadan önce ufku önceden kaydedin.
- Aynı karşılaştırmada **farklı seçenekler için farklı ufuklar**.
- **İskontosuz veya belirsizlik analizi olmayan yaşam boyu ufuklar** — 30. yıl faydalarını nominal değerle almak kurgudur. Uzun ufukları [duyarlılık analizi](../duyarlılık-analizi/) ile eşleştirin.

## Kaynaklar

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
