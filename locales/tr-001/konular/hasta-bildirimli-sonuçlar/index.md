# Hasta Bildirimli Sonuçlar (PROM, PREM, MCID)

PROM'lar, hastaların kendi sağlık durumlarını (belirtiler, işlev, yaşam kalitesi) bildirdiği standartlaştırılmış araçlardır; PREM'ler bakım *deneyimini* yakalar. **MCID** — minimal klinik olarak önemli fark — hastaların gerçekten yararlı olarak algıladığı en küçük puan değişimidir: iddia edilen herhangi bir iyileşmenin aşması gereken çıta.

## Neden önemli

PROM'lar dijital sağlığın birincil etkinlik para birimidir: uygulamalar nadiren ölümü kımıldatır, ancak doğrulanmış belirti puanlarını inandırıcı biçimde kımıldatabilir. Önemli araçlar azdır ve standarttır — **PHQ-9** (depresyon, 0–27; 5/10/15/20'de şiddet bantları), **GAD-7** (kaygı, 0–21; 5/10/15'te bantlar), **EQ-5D** ([QALY](../kaliteye-ayarlı-yaşam-yılı/)'ler için yarar) — ve düzenleyiciler, HTA kuruluşları ve ödeyiciler bunları tam olarak ürünler ve denemeler arasında karşılaştırılabilir oldukları için kabul eder. MCID dürüstlük kapısıdır: PHQ-9 MCID ≈ 5 puan, GAD-7 ≈ 4, EQ-5D indeksi yaygın olarak ~0,03–0,08 — büyük bir örneklemde istatistiksel olarak anlamlı 1,5 puanlık PHQ-9 değişimi *gerçek ama klinik olarak anlamsızdır* ve bir kanıt gözden geçiricisi bunu söyleyecektir.

## Matematik

```
PROM puanlama: araca özgü toplamlar (örn. PHQ-9 = Σ 9 madde × 0–3)

MCID tahmini:
  çapa tabanlı:        "biraz daha iyi" bildiren hastalar arasındaki puan değişimi
  dağılım tabanlı:     ≈ 0,5 × temel puanların SS'si (kaba sezgisel)

Yanıt oranı çerçevesi (denemeler ve dosyalar için):
  yanıtlayan = ≥ MCID iyileşen hasta (veya PHQ-9 geleneğine göre ≥%50)
  NNT = 1 / (yanıt oranı_tedavi − yanıt oranı_kontrol)
  — bkz. number-needed-to-treat.md
```

## Çözümlü örnek

Bir depresyon destek uygulaması, bekleme listesine karşı RCT, 12 hafta:

```
PHQ-9 değişimi: uygulama −6,2 puan, kontrol −2,1 → düzeltilmiş fark −4,1
MCID kontrolü: 4,1 < 5 → ortalama fark MCID'nin altında; bunun yerine yanıtlayanları raporlayın:
  yanıtlayanlar (≥5 puan düşüş): uygulama %48, kontrol %22 → MRA %26
  NNT = 1/0,26 ≈ 4 — ek klinik yanıt başına tedavi edilen dört kullanıcı

Ekonomik köprü: yanıtlayanların EQ-5D kazancı 0,06, 6 ay sürdürülür
  = 0,03 QALY; 1.000 kullanıcı başına: 260 ek yanıtlayan × 0,03 = 7,8 QALY
  ≈ NICE eşiklerinde 156.000–234.000 £ sağlık değeri
```

Yanıtlayan/NNT çerçevesi, MCID altı ortalama farkın reddedileceği incelemede ayakta kalır.

## Yazılım mühendisliği bağlantısı

PROM'lar yazılımın çözmek için eşsiz konumlandığı bir veri toplama problemidir: uygulama içi araçlar kâğıdın hiç ulaşamadığı tamamlama oranlarına ve boylamsal yoğunluğa kavuşur, rutin ürün telemetrisini HTA düzeyinde kanıta çevirir ([EQ-5D](../eq-5d/) beş ekrandır). Mühendislik kuralları: doğrulanmış aracı *kelimesi kelimesine* kullanın (yeniden ifade etmek onu geçersiz kılar — lisanslama geçerlidir); ölçümü katılım rahatlığına değil protokole göre planlayın (yalnızca aktif kullanıcıları ölçmek hayatta kalan yanlılığıdır — bkz. [elde tutma](../elde-tutma-ve-kayıp/)); ve araç verisini herhangi bir şema gibi sürüm kilitleyin — çalışma ortasında ifade değişikliği veri bozulmasıdır. PREM'ler CSAT/NPS tarzı araçlara eşlenir ve aynı ders geçerlidir: izleyici bir ödeyici olduğunda standart, ev yapımını yener. İş verimliliğine özgü bir araç için bkz. [WPAI](../i̇ş-verimliliği-ve-aktivite-bozulması/).

## Tuzaklar

- Klinik fayda olarak sunulan **MCID altındaki istatistiksel anlamlılık** — alanın en yaygın şişirmesi.
- **Ortalamaya gerileme**: kullanıcılar belirti zirvelerinde kayıt olur; tek kollu önce/sonra çok abartır — karşılaştırıcılar pazarlık konusu değildir.
- **Araç alışverişi**: PHQ-9, GAD-7 ve WHO-5'i çalıştırıp hangisi kıpırdadıysa onu raporlamak — birincil olanı önceden kaydedin.
- **Dijital onam anketi baskısı**: kullanıcıları olumlu yanıtlara itmek aracı bozar (ve gözden geçiriciler temel oranları bilir).

## Kaynaklar

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
