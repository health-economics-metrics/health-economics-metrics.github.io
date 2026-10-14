# Fayda Gerçekleştirme

Fayda gerçekleştirme yönetimi (BRM), bir iş gerekçesinde vaat edilen faydaların teslimattan sonra gerçekten ortaya çıktığını belirleme, temel çizgisini alma, izleme ve *kanıtlama* disiplinidir. Birleşik Krallık kamu yatırımında HM Treasury'nin Green Book **Beş Vaka Modeli** içinde yaşar; tıpta kuzeni pazarlama sonrası gözetimdir.

## Neden önemli

İş gerekçeleri vaattir; fayda gerçekleştirme denetimdir. Büyük NHS dijital programlarının değerlendirmeleri defalarca hiç gerçekleşmeyen öngörülen faydalar buldu — ve faydalar nakit serbest bırakıcı olmadığında vakfın alt satırına hiçbir şey yapmadı. Green Book'un yanıtı: her harcama vakası **beş vakadan** (stratejik, ekonomik, ticari, mali, yönetim) geçmeli ve fayda gerçekleştirme *onaydan önce* yönetim vakasında planlanmalıdır — sahipler adlandırılmış, temel çizgiler alınmış, ölçüm tarihleri belirlenmiş. Bunsuz "yazılım hemşire başına 30 dakika kazandırdı" sonsuza dek satıcı kurgusu kalır.

## Matematik

```
Gerçekleşme oranı = gerçekleşen faydalar / öngörülen faydalar   (fayda başına, dönem başına)

Bunu hesaplanabilir kılan mekanikler:
  temel çizgi canlıya geçişten ÖNCE alınır (aksi hâlde fark ölçülemez)
  her fayda: sahip, metrik, veri kaynağı, ölçüm takvimi
  öngörü, değerlendirme aşamasında iyimserlik yanlılığına göre ayarlanır (Green Book şartı)
  faydalar nakit / nakit dışı / niteliksel olarak sınıflandırılır ve ayrı izlenir
  (bkz. cash-releasing-vs-non-cash-releasing.md)
```

## Çözümlü örnek

Bir e-vardiya planlama iş gerekçesi yılda şunları vaat etti: 450 bin £ ajans harcaması azalması (nakit), 8.000 servis yöneticisi saati (kapasite), iyileşen doluluk oranı uyumu (niteliksel). Canlıya geçişten on iki ay sonra:

```
Fayda              Öngörülen   Gerçekleşen  Oran    Kanıt
Ajans harcaması    450.000 £   287.000 £    %64     defter ve temel yıl
Yönetici saatleri  8.000       5.100        %64     zaman-hareket örneği
Doluluk uyumu      +10 pp      +12 pp       %120    vardiya sistemi verisi

İncelemeden eylemler (BRM'nin amacı):
ajans açığı hiç devreye alınmayan iki servise kadar izlendi → onları devreye al;
öngörü modelinin %30 iyimserlik hatası kaydedildi → bir sonraki vakaya uygulandı.
```

%64 gerçekleşme başarısızlık değil — *bilgidir*. Ölçülmeyen vakalar sonsuza dek %100 iddia eder.

## Yazılım mühendisliği bağlantısı

Mühendislik kuruluşları platform yatırımlarını öngörülen faydalarla onaylar ve neredeyse hiç denetlemez — BRM'nin düzelttiği tam patoloji. Hafif uyarlama: eşiğin üzerindeki her teklif fayda sahiplerini, temel metrikleri ve T+6 ay gözden geçirme tarihini adlandırır; gerçekleşme oranları, kuruluşun o ekibin (veya satıcının) bir sonraki öngörüsünü ne kadar iskonto edeceğini besler. Bu aynı zamanda yapay zekâ araç şüpheciliğinin yanıtıdır: [GenAI pilotlarının ~%95'inin ölçülebilir kâr-zarar getirisi göstermediği MIT bulgusu](../yapay-zekâ-yatırım-getirisi/) bir fayda gerçekleştirme sonucudur — getiri sağlayan pilotların izlenebilir, sahipli fayda satırları vardı. Öngör → ölç → yeniden kalibre et, [EVPI](../mükemmel-bilginin-beklenen-değeri/) ile fiyatlanan pilotlarla aynı döngüdür, portföy ölçeğinde işletilir.

## Tuzaklar

- **Canlıya geçiş öncesi temel çizgi yok** — ölümcül, düzeltilemez ihmal.
- **Fayda yetimliği**: adlandırılmış sahip yoksa kimse veri toplamaz ve her inceleme "genel olarak yolunda" der.
- **Aynı serbest kalan kapasiteyi talep eden programlar arasında çifte sayılan faydalar** — portföy genelinde bir fayda sicili tutun.
- **Gerçekleşme tiyatrosu**: nakit satırları sessizce incelenmeden kalırken kolay niteliksel kazanımların ölçülmesi.

## Kaynaklar

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
