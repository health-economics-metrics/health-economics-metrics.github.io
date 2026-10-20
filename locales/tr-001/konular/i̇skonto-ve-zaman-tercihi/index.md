# İskonto ve Zaman Tercihi

İskonto, gelecekteki maliyetleri ve faydaları bugünkü değerlere çevirir, çünkü bugünkü bir fayda beş yıl sonraki aynı faydadan daha değerlidir.

## Neden önemli

Her sağlık ekonomisi değerlendirmesi ve her ciddi kamu sektörü iş gerekçesi çok yıllı akışları iskonto eder. Birleşik Krallık HM Treasury Green Book'u %3,5 yıllık toplumsal zaman tercihi oranı zorunlu kılar; NICE'ın referans durumu hem maliyetleri hem sağlık etkilerini yılda %3,5'ten iskonto eder (30+ yıl yararlı kür benzeri tedaviler için referans dışı %1,5 oranıyla). Yazılım iş gerekçeniz "10 yılda 5 milyon £ tasarruf" iddia ediyorsa, bir finans gözden geçiricisi hemen iskonto edilmiş rakamı isteyecektir.

## Matematik

Gelecekteki bir tutarın bugünkü değeri:

```
BD = GD / (1 + r)^t

BD = bugünkü değer
GD = t yılındaki gelecekteki değer
r  = iskonto oranı (NICE/Green Book: 0,035)
t  = şimdiden itibaren yıl
```

n yıl boyunca sabit yıllık fayda B için (bir anüite):

```
BD = B × [1 − (1 + r)^(−n)] / r
```

## Çözümlü örnek

Yazılımınız bir NHS vakfına, canlıya geçişten bir yıl sonra başlayarak 5 yıl boyunca yılda 100.000 £ tasarruf sağlıyor.

İskonto edilmemiş toplam: 500.000 £.

%3,5'ten iskonto edilmiş:

```
1. yıl: 100.000 / 1,035^1 = 96.618 £
2. yıl: 100.000 / 1,035^2 = 93.351 £
3. yıl: 100.000 / 1,035^3 = 90.194 £
4. yıl: 100.000 / 1,035^4 = 87.144 £
5. yıl: 100.000 / 1,035^5 = 84.197 £

Toplam BD ≈ 451.505 £
```

Dürüst manşet yaklaşık 451.000 £'dır, saf toplamdan kabaca %10 daha az. Şimdi teslimatın bir yıl kaydığını varsayalım: her terim bir yıl ileri kayar ve BD yaklaşık 436.000 £'a düşer — [gecikme maliyeti](../gecikme-maliyeti/)nin iskonto görünümü.

## Yazılım mühendisliği bağlantısı

- **Teknik borç ödemeleri ve platform geçişleri** yıllar sonrasına fayda akışları vaat eder; bu çeyrekte geri ödeyen işlerle karşılaştırmadan önce iskonto edin.
- **Öne yüklenmiş maliyetler, arkaya yüklenmiş faydalar** bir geçişin standart biçimidir. İskonto bu biçimi doğru olarak cezalandırır: kapasiteyi şimdi sonraki değer için taahhüt etmenin risksiz zaman değerini fiyatlar.
- **"5. yılda tasarruf" iddiaları** iki kat şüpheyi hak eder — hem ağır iskonto edilir hem de çok belirsizdir (bkz. [duyarlılık analizi](../duyarlılık-analizi/)).

## Tuzaklar

- **Maliyetleri iskonto edip faydaları etmemek** (veya tersi) — referans durum ikisini de aynı oranda iskonto eder.
- **Kamu sektörü vakasında ticari oran (%8–12) kullanmak**, ya da girişim destekli bir vakada %3,5. Oranı karar vericiye uydurun.
- **İskontoyu enflasyonla karıştırmak.** İskonto *reel* (enflasyondan arındırılmış) değerlere uygulanır; ikisini örtük yapmayın.

## Kaynaklar

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
