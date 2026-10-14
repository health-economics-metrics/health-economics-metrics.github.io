# Markov Kohort Simülasyonu

Markov kohort modeli, etkileri tek seferde değil birden çok zaman diliminde (döngüde) ortaya çıkan müdahaleler için standart HTA modelleme tekniğidir. Varsayımsal bir kohort tamamen tek bir sağlık durumunda başlar ve her döngüde sabit bir geçiş olasılıkları kümesi kohortun kesirlerini durumlar arasında taşır; maliyetler ve QALY'ler her döngüde kohortun her durumu ne kadar işgal ettiğiyle orantılı olarak birikir ve bugünkü değere iskonto edilir. Çok yıllı bir dijital sağlık iş gerekçesini modelleyen — kullanıcıların veya hastaların zamanla "katılımlı", "kopmuş" veya "kaybedilmiş" gibi durumlar arasında geçtiği — herhangi bir yazılım mühendisi aynı yapıyı kurar.

## Neden önemli

Gerçek sağlık teknolojisi kararlarının çoğu, tek dönemin maliyetinin ve sonucunun tek seferlik karşılaştırması değildir. Kronik bir durum yıllar içinde ilerler, nüksler, tedaviye yanıt verir veya öldürür — ve tek dönemli bir [maliyet-etkililik analizi](../maliyet-etkililik-analizi/) bunu temsil edemez. Kronik hastalık müdahaleleri için [sağlık teknolojisi değerlendirmesi](../sağlık-teknolojisi-değerlendirmesi/) ile değerlendirilen NICE, ICER ve CADTH başvuruları, hemen her zaman yaşam boyu zaman ufuklu Markov kohort modelleri olarak kurulur, çünkü alternatif — her olası bireysel hasta yolunu modellemek — ölçekte çözümsüzdür. Kohort düzeyinde Markov modeli, bir miktar bireysel düzeydeki gerçekçiliği (geçmiş durumların hafızasını kolayca temsil edemez, dolayısıyla "Markov": gelecek yalnızca mevcut duruma bağlıdır) şeffaf, denetlenebilir ve bir [olasılıksal duyarlılık analizinde](../olasılıksal-duyarlılık-analizi/) binlerce kez çalıştırılacak kadar hızlı bir modelle takas eder.

## Matematik

```
Bir döngünün kohort güncellemesi (satır vektörü x geçiş matrisi):
  yeni_durum[j] = toplam_i durum[i] * geçiş_matrisi[i][j]

Bir döngünün maliyeti:
  döngü_maliyeti = toplam_s durum[s] * döngü_başına_maliyet[s]

Bir döngünün QALY'si:
  döngü_qaly = toplam_s durum[s] * yarar[s] * döngü_uzunluğu_yıl

`döngüler` döngü boyunca tam simülasyon, `iskonto_oranı`nda iskonto edilmiş:
  toplam_iskontolu_maliyet = toplam_{t=0}^{döngüler-1} döngü_maliyeti(durum_t) / (1 + iskonto_oranı)^t
  toplam_iskontolu_qaly    = toplam_{t=0}^{döngüler-1} döngü_qaly(durum_t)     / (1 + iskonto_oranı)^t
  burada durum_0 = başlangıç_dağılımı, durum_{t+1} = kohortu_ilerlet(durum_t, geçiş_matrisi)
```

Her döngüyü bugünkü değere iskonto etmek, yıl yıl yerine döngü döngü uygulanan [iskonto ve zaman tercihi](../i̇skonto-ve-zaman-tercihi/) formülünün aynısını kullanır.

## Çözümlü örnek

**Klinik**: 2 durumlu bir model — `Sağlıklı` ve `Ölü` — kohortun %10'u her döngüde ölür ve `Ölü` yutucudur (kendi kendine geçiş olasılığı 1,0'dır; bu kendi kendine döngüyü atlamak, `Ölü`'de bir döngü sonra kohort kütlesinin kaybolmasına neden olur). Kohort tamamen `Sağlıklı` başlar, `Sağlıklı` iken döngü başına 1.000 £ maliyetlidir (`Ölü` olduğunda 0 £) ve `Sağlıklı` iken yılda 0,8 QALY kazanır. NICE'ın %3,5 iskonto oranıyla 3 yıllık döngü için simüle edilmiştir:

```
Döngü 0: durum = [1,00, 0,00] (%100 Sağlıklı)
  maliyet = 1.000,00 £, qaly = 0,800, iskonto faktörü = 1,000000
  iskontolu: maliyet = 1.000,00 £, qaly = 0,8000

Döngü 1: durum = [0,90, 0,10] (%90 Sağlıklı, %10 Ölü)
  maliyet = 900,00 £, qaly = 0,720, iskonto faktörü = 0,966184
  iskontolu: maliyet = 869,57 £, qaly = 0,6957

Döngü 2: durum = [0,81, 0,19] (%81 Sağlıklı, %19 Ölü)
  maliyet = 810,00 £, qaly = 0,648, iskonto faktörü = 0,933511
  iskontolu: maliyet = 756,14 £, qaly = 0,6049

Toplam iskontolu maliyet ≈ 2.625,71 £
Toplam iskontolu QALY    ≈ 2,1006
```

Her döngünün durumu, bir önceki döngünün durumunun geçiş matrisinden geçirilmiş hâlidir — döngü 1'de hâlâ `Sağlıklı` olan %90'ın %90'ı döngü 2'de `Sağlıklı` kalır (0,9 × 0,9 = 0,81), diğer %19 artık ölmüştür (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Kohortun `Sağlıklı`'yı asla tamamen boşaltmadığına dikkat edin: sabit %10 döngü başına ölüm ve yeniden giriş olmadan `Sağlıklı` kesri herhangi bir sonlu döngü sayısında sıfıra ulaşmak yerine geometrik olarak azalır.

## Yazılım mühendisliği bağlantısı

Çok döngülü bir HTA modelinin gerçek bir değerlendirmede nasıl kullanıldığı için bkz. [sağlık teknolojisi değerlendirmesi](../sağlık-teknolojisi-değerlendirmesi/) — sunulan bir Markov modelinin hangi iskonto oranını, yarar kaynağını ve zaman ufkunu kullanması gerektiğini yöneten referans durum.

Bir Markov kohort modeli yapısal olarak olasılıksal geçişli bir durum makinesidir; sabit sayıda tik için çalıştırılır ve her tikin değerini iskonto eder. Aynı şekil bir kullanıcı kohortunun zaman içindeki elde tutma/durum geçişlerini simüle eder — "sistemin hangi kesri bu dönemde bozulmuş durumda ve bunun maliyeti nedir"in operasyonel güvenilirlik sürümü için bkz. [DORA metrikleri](../dora-metrikleri/). Somut olarak:

- **Elde tutma/kayıp modellemesi**, "aktif", "risk altında", "kaybedilmiş" gibi durumları olan bir Markov kohort modelidir: sabit bir aylık geçiş matrisi, 12 veya 24 aylık döngü için çalıştırıldığında, `Sağlıklı`/`Ölü`'nün beklenen hayatta kalanları söylediği gibi, herhangi bir gelecek ayda beklenen aktif kullanıcı sayısını (ve geliri) söyler.
- **Güvenilirlik ve olay ekonomisi**: bir sistemin durumları (sağlıklı, bozulmuş, çökmüş) aynı şekilde modellenebilir; sistem bozulmuş/çökmüş durumları işgal ederken kesinti zararının "döngü başına maliyeti" birikir — bir olay sıklığı argümanını, geçiş olasılıklarını değiştirecek güvenilirlik çalışmasının maliyetine karşı karşılaştırılabilir iskontolu bir maliyet argümanına çevirir.
- **Terminal durumlar olarak yutucu durumlar**: klinik bir modeldeki `Ölü` tam olarak bir yazılım modelindeki "iptal edilmiş abonelik" veya "kalıcı olarak çevrimdışı" durumudur — her ikisi de 1,0'lık açık bir kendi kendine geçiş olasılığı gerektirir, aksi hâlde simülasyon sessizce kütle kaybeder.

## Tuzaklar

- **Satır başına toplamı 1 etmeyen geçiş olasılıkları.** 1'den fazla veya az toplanan bir satır, kohortun her döngüde sessizce kütle "sızdırmasına" veya "büyütmesine" neden olur — bir modelin çıktısına güvenmeden önce her zaman satır toplamlarını kontrol edin, çünkü model yapısının kendisinde hatayı işaretleyen hiçbir şey yoktur.
- **Hastalığın gerçek dinamikleri için fazla kaba döngü uzunluğu.** Haftalar içinde anlamlı biçimde durum değiştiren bir hastalık için yıllık döngü, döngü ortasında olan geçişleri olduğundan az gösterir; modellenen sürecin gerçekte ne kadar hızlı hareket ettiğine göre kısa bir döngü uzunluğu seçin.
- **Yutucu bir durumun kendi kendine döngüsünü unutmak.** Yutucu bir durum (ölüm, kalıcı bırakma) tam 1,0 kendi kendine geçiş olasılığına ihtiyaç duyar. Atlarsanız, o durumdaki kohort kütlesi tek döngüden sonra buharlaşır ve kümülatif maliyetleri veya QALY kaybını olduğundan az gösterir.
- **Çalıştığı için modeli doğrulanmış saymak.** Makul görünen geçiş olasılıklarına sahip bir Markov kohort modeli yine de yapısal olarak yanlış olabilir (eksik durumlar, yanlış yutucu davranış); çıktıya güvenmeden önce bilinen epidemiyolojik kıyaslamalara karşı doğrulayın (örn. modellenen 5 yıllık sağkalım yayımlanmış sağkalım eğrileriyle eşleşiyor mu).

## Kaynaklar

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
