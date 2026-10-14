# Maliyet Minimizasyon Analizi (CMA)

CMA yalnızca maliyetleri karşılaştırır ve en ucuz seçeneği seçer — yalnızca alternatiflerin sonuçlarının eşdeğer olduğu gösterildiğinde meşrudur.

## Neden önemli

CMA en basit analiz ve en çok istismar edilenidir. Eşdeğerlik iddiası tüm işi yapar: sonuçlar gerçekten farklı değilse (biyobenzer ve orijinatörü; aynı şartnameyi karşılayan aynı hizmetin iki tedarikçisi), maliyet tek sorudur ve CMA doğrudur. Titizlik, eşdeğerliği önce *kanıtlamakta* yatar — tipik olarak önceden belirlenmiş bir sınırla aşağı olmama çalışması yoluyla — ve bu tam olarak alıcıların genellikle atladığı adımdır.

## Matematik

```
Etki_A ≈ Etki_B (önceden belirlenmiş δ sınırı içinde) kanıtı verildiğinde:
min(Maliyet_A, Maliyet_B) seçin

Maliyetler aynı perspektiften, aynı ufukta ölçülür,
geçiş/dönüşüm maliyetleri dahil.
```

Eşdeğerlik kanıtlanamıyorsa CMA geçersizdir — bunun yerine [CEA](../maliyet-etkililik-analizi/)/[CUA](../maliyet-yarar-analizi/) kullanın.

## Çözümlü örnek

Bir vakıf iki video konsültasyon platformu arasında seçim yapıyor. 3 aylık paralel bir pilot, tamamlama oranlarının %94,1 ile %93,8, hasta memnuniyetinin 4,4 ile 4,4 olduğunu gösteriyor — farklar önceden kararlaştırılan 2 puanlık δ içinde. Sonuçlar: eşdeğer. 3 yıl üzerinde maliyetler:

```
                     Platform A     Platform B
Lisanslar            360.000 £      210.000 £
Entegrasyon          80.000 £       150.000 £
Eğitim/destek        60.000 £       90.000 £
Toplam               500.000 £      450.000 £
```

Platform B, daha yüksek entegrasyon maliyeti *dahil* 50.000 £ farkla kazanır. Pilot olmasa eşdeğerlik iddiası satıcı broşürlerine dayanır ve 1 puanlık tamamlama oranı farkı (≈ yılda binlerce başarısız konsültasyon) 50.000 £'ı gölgede bırakırdı.

## Yazılım mühendisliği bağlantısı

CMA, emtia tedarikinin biçimsel hâlidir: aynı SLO'ları karşılayan iki CI sağlayıcısı, aynı dayanıklılık şartnamesine sahip iki nesne deposu. Sağlık ekonomisi dersi *işlem sırasıdır*: önce eşdeğerliği kanıtlayın (iş yükünüze karşı kıyaslama, SLO'larınıza karşı pilot, sınır önceden kararlaştırılmış olarak), sonra geçiş dahil toplam maliyetleri karşılaştırın. İlk adım olmadan "temelde aynı, B daha ucuz", kuruluşların %10 daha ucuz ve %40 daha kötü aracı satın alma biçimidir. Sonuç: bir satıcı fiyat tartıştığında eşdeğerliği şart koşturun — diğer yönde de bağlayıcıdır.

## Tuzaklar

- **Varsayılan eşdeğerlik** — tanımlayıcı günah; fark kanıtının yokluğu eşdeğerlik kanıtı değildir (yetersiz güçlü pilotlar bedavaya eşdeğerlik "gösterir").
- **Geçiş maliyetlerini atlamak** — göç, yeniden eğitim ve paralel çalıştırma maliyet tarafına aittir.
- **Yanlış sonuçlarda eşdeğerlik**: ölçülen metrikte eşdeğer, önemli olan birinde farklı (erişilebilirlik, kuyruk gecikmesi, veri çıkışı).

## Kaynaklar

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
