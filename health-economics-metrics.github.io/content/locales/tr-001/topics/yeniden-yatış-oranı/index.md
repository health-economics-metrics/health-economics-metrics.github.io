# Yeniden Yatış Oranı

30 günlük yeniden yatış oranı, taburcu edilen hastaların 30 gün içinde acil olarak geri dönenlerinin yüzdesidir. Sağlık sisteminin kanonik *taburculuk kalitesi* metriğidir — ve doğrudan mali cezalar taşır.

## Neden önemli

Yeniden yatış, ilk taburculuğun tutmadığı anlamına gelir: erken taburculuk, başarısız ilaç devri, takip eksikliği veya eksik sosyal destek. Ödeyiciler bunu açıkça cezalandırır — ABD Hastane Yeniden Yatışları Azaltma Programı bir hastanenin Medicare ödemelerinin %3'üne kadarını keser; NHS tarihsel olarak kaçınılabilir 30 günlük acil yeniden yatışlar için ödeme yapmamıştır. Yeniden yatıştan kaçınma bu nedenle bir sağlayıcı için yalnızca kapasite değil *doğrudan* nakit ilgili az sayıdaki fayda kategorisinden biridir.

## Matematik

```
Yeniden yatış oranı = 30 gün içindeki acil yeniden yatışlar / indeks taburculuklar × 100

Riske göre standartlaştırılmış karşılaştırmalar vaka karışımını ayarlar; ceza
programları benzer hastaneler için gözlenen ile beklenen değeri karşılaştırır.

Kaçınmanın değeri = kaçınılan yeniden yatışlar × (yeniden yatış dönemi başına maliyet
                    + yeniden yatış başına ceza riski)
```

## Çözümlü örnek

Bir kalp yetmezliği taburcu destek uygulaması (belirti takibi, kilo uyarıları, ilaç hatırlatıcıları, hemşire yükseltmesi): yılda 2.000 taburculuk, temel yeniden yatış oranı %18, deneme uygulamayla %14 gösteriyor.

```
Kaçınılan yeniden yatışlar = 2.000 × (0,18 − 0,14) = 80/yıl
Yeniden yatış dönemi başına maliyet ≈ 3.500 £ → yılda 280.000 £ kaçınılan tedavi maliyeti
Artı bu dönemler üzerindeki ceza/ödememe riski.
Uygulama maliyeti: 2.000 × 60 £ = 120.000 £/yıl

Net ≈ +160.000 £/yıl, kaçınılan bozulma için herhangi bir QALY iddiasından önce.
```

Savunulacak sayı 4 yüzde puanlık etkidir: kontrollü bir karşılaştırmadan gelmelidir, çünkü yeniden yatış oranları vaka karışımı ve mevsimle sallanır.

## Yazılım mühendisliği bağlantısı

Yeniden yatış, sağlık sisteminin **değişiklik başarısızlık oranı**dır ([DORA metrikleri](../dora-metrikleri/)ne bakın): "gönderilen" ve 30 gün içinde geri sıçrayan iş. Benzetmeler derindir — yeniden açılan biletler ve gerileme olayları zayıf "taburculuk kalitesi"ne işaret eder (zayıf doğrulama, erken kapanış, eksik devir teslim belgeleri); ceza tarzı muhasebe (alan ekip değil, düzelten ekip öder) davranışı değiştirir; ve iki alan da aynı dersi öğrendi: devir teslime yatırım yapmadan ham verimi (daha hızlı taburculuk, daha hızlı gönderim) zorlamak yalnızca görünen kuyrukları görünmeyen yeniden işlemeye çevirir. Döngü süresini kutlayan her ekip panosunda bir "30 günlük yeniden açılma oranı" bulunmalıdır.

## Tuzaklar

- **Yeniden etiketleme yoluyla oyun**: gözlem kalışları veya yeni durumlar olarak kodlanan yeniden yatışlar; tanımı denetleyin.
- **Tüm nedenler ve ilişkili neden**: 30 günlük tüm neden gerçekten ilgisiz olayları içerir; cezalar genellikle tam olarak "ilişkili" oynanabilir olduğu için tüm nedeni kullanır.
- **Vaka karışımı körlüğü**: daha hasta, daha yoksul nüfuslara hizmet eden bir hastane, hiçbir uygulamanın düzeltmediği nedenlerle daha çok yeniden yatırır — karşılaştırmadan önce riske göre ayarlayın.

## Kaynaklar

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
