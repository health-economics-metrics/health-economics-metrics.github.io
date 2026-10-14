# Baskınlık ve Verimlilik Sınırı

Başka bir seçenek daha az maliyetli *ve* daha fazla sonuç sağlıyorsa bir seçenek **baskın kılınmıştır (dominated)**. **Verimlilik sınırı**, baskın kılınan seçenekler elendikten sonra kalandır: daha fazlasını elde etmenin daha fazla ödemeyi gerektirdiği seçimler kümesi.

## Neden önemli

Eşikler veya bütçeler hakkında herhangi bir tartışmadan önce sağlık teknolojisi değerlendirmesi, kimsenin asla seçmemesi gereken seçenekleri ilk önce eler. Her seçeneği maliyet-etki düzlemine çizmek ve sınırı çekmek, kısa listenin yarısını rutin olarak öldüren beş dakikalık bir egzersizdir. Artımlı karşılaştırmalar ([ICER'ler](../artımlı-maliyet-etkililik-oranı/)) daha sonra yalnızca *sınır boyunca* hesaplanır, her seçenek bir sonraki en ucuz baskın olmayan seçeneğe karşı — daha iyi ara seçenekler varken asla "hiçbir şey yapmama"ya karşı değil.

## Matematik

```
Kesin baskınlık:     Maliyet_A ≤ Maliyet_B ve Etki_A ≥ Etki_B ise A, B'ye baskındır
                     (en az bir kesin eşitsizlikle)

Genişletilmiş baskınlık: A ve C'nin bir karışımı pound başına daha fazla etki
                     sağlıyorsa B elenir — sınırda yukarı çıktıkça ICER'ler
                     azaldığında saptanır. Geçerli sınır ICER'leri artan olmalıdır.
```

Prosedür: seçenekleri etkiye göre sıralayın; kesin baskın olanları kaldırın; komşular arasındaki ikili ICER'leri hesaplayın; ICER'i bir sonraki daha etkili seçeneğinkini aşan her seçeneği kaldırın (genişletilmiş baskınlık); ICER'ler tekdüze artana dek tekrarlayın.

## Çözümlü örnek

Kaçırılan randevuları azaltmanın dört seçeneği (etki = yılda geri kazanılan randevular):

```
Seçenek                       Maliyet/yıl   Geri kazanılan
Hiçbir şey yapmama            0 £           0
SMS hatırlatmaları            20.000 £      2.000
Telefon aramaları             120.000 £     2.200
SMS + YZ triyajı              90.000 £      3.500
```

Telefon aramaları SMS + YZ triyajı tarafından **kesin olarak baskın kılınmıştır** (daha pahalı, daha az geri kazanır). Sınır: hiçbir şey → SMS → SMS + YZ.

```
ICER(SMS / hiçbir şey)   = 20.000 / 2.000  = geri kazanılan randevu başına 10 £
ICER(SMS+YZ / SMS)       = (90.000 − 20.000) / (3.500 − 2.000) = randevu başına 46,67 £
```

Artan ICER'ler → geçerli sınır. Geri kazanılan hastane randevusu başına ~160 £ tasarrufla (bkz. [randevuya gelmeme oranı](../randevuya-gelmeme-oranı/)), iki sınır adımı da atılmaya değer; telefon bankası önerisi hiçbir zaman komiteye ulaşmamalıdır.

## Yazılım mühendisliği bağlantısı

Aynı grafiği her araç kararı için kurun: bir eksende yıllık maliyet, diğerinde ölçülen sonuç (kazanılan saatler, kaçınılan olaylar, mümkün kılınan dağıtımlar). Sınırın yukarısında ve solunda kalan noktalar, kimse bütçeyi tartışmadan elenir. Bu, satıcı seçimini özellik kontrol listesi tartışmalarından "baskın kılındınız; toplantı bitti"ye yeniden çerçeveler. Ayrıca marjinal bir kazanç için en pahalı seçeneği satın alma yaygın kurumsal örüntüsünü de ortaya koyar — yalnızca artımlı birim başına artımlı fiyat kuruluşun bilerek ödeyeceği bir fiyatsa meşrudur.

## Tuzaklar

- **Her şeyi sınırdaki bir sonraki seçenek yerine temel çizgiyle karşılaştırmak** — daha ucuz yakın eşdeğerleri gizleyerek pahalı seçenekleri pohpohlar.
- **Önemli olanı gizleyen tek boyutlu etki puanları**; iki sonuç önemliyse ya savunulabilir biçimde birleştirin (bkz. [maliyet-yarar analizi](../maliyet-yarar-analizi/)) ya da iki sınır gösterin.
- **Belirsizliği unutmak**: sınıra yakın seçenekler [duyarlılık analizi](../duyarlılık-analizi/) altında yer değiştirebilir.

## Kaynaklar

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
