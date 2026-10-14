# Yapay Zekâ ile Geliştirici Verimliliği

Yapay zekâ destekli kodlamanın mühendislik çıktısına gerçekte ne yaptığına dair metrikler: öneri kabul oranları, kontrollü çalışmalardaki hızlanma, PR işleme hacmi ve kod elde tutma. Kanıt tabanı gerçekten çelişkilidir — bu da onu sağlık ekonomisinin başa çıkmak için kurulduğu etkinlik (efficacy) ile etkililik (effectiveness) ayrımının mükemmel bir vaka çalışması yapar.

## Neden önemli

En çok atıf alan iki kontrollü çalışma zıt yönleri işaret eder:

- **Peng ve ark. 2023 (GitHub Copilot RCT)**: geliştiriciler sıfırdan bir HTTP sunucusu görevini Copilot ile **%55,8 daha hızlı** tamamladı (1 sa 11 dk'ya karşı 2 sa 41 dk, n=95).
- **METR 2025 RCT**: *kendi olgun depolarında* çalışan deneyimli açık kaynak geliştiricileri, 2025 başı yapay zekâ araçlarıyla **%19 daha yavaştı** (16 geliştirici, 246 görev) — kendilerini ise %20 daha hızlı *sanıyorlardı*.

İkisi de iyi çalışmadır. Çelişki bulgunun kendisidir: sıfırdan görevlerdeki etkinlik olgun kod tabanındaki etkililiğe aktarılmaz ve *algılanan* fayda ölçülen faydanın yerini tutamaz. Tıbbın her iki olgu için de adları (açıklayıcı ve pragmatik denemeler; plasebo sorunu) ve bunları ele alan mekanizmaları vardır.

## Matematik

```
Kabul oranı     = kabul edilen öneriler / gösterilen öneriler
                  (GitHub telemetrisi ort. ~%30; değişir: SQL %45, Python %35, JS %28)
Elde tutma oranı = birleştirmeye kadar hayatta kalan YZ kodu / kabul edilen YZ kodu (~%88 bildirilen)
Hızlanma        = (t_kontrol − t_YZ) / t_kontrol  (YALNIZCA kontrollü karşılaştırmadan)
İşleme farkı    = Δ birleştirilen PR/geliştirici/hafta (GitHub/Accenture saha verisi: +%8,7)

Değer modeli    = geliştiriciler × kazanılan süre × yüklü ücret × kullanım faktörü
                  — her terim yerel ölçüm gerektirir; sensitivity-analysis.md'deki
                  tornado grafiğine bakın: kazanılan süre diğer tüm parametrelerin
                  toplamından daha baskındır
```

## Çözümlü örnek

500 geliştiricili bir kuruluş, doğru bir kontrolle (eşleştirilmiş ekipler, 3 ay, önceden kaydedilmiş metrikler) bir asistanı pilot uyguluyor:

```
Pilot sonucu: PR çevrim süresi −%18; birleştirilen PR +%6; CFR değişmedi;
              kendi bildirdiği kazanılan süre 45 dk/gün; görev düzeyinde ölçülen ≈ 15 dk/gün

ÖLÇÜLEN rakamı değerleyin: 500 × 0,25 sa × 220 gün × 60 £ × 0,6 kullanım
                          ≈ 990.000 £/yıl kapasite (nakit serbest bırakmayan)
Maliyet: 500 × 39 £/ay × 12 ≈ 234.000 £/yıl
Net kapasite oranı ≈ 4:1 — finanse edilebilir, kendi bildirilen iddianın üçte birinde.
```

Algılanan ile ölçülen arasındaki 3 katlık fark, METR bulgusunun doğada işlemesidir; kendi bildirime göre bütçelemek fayda satırını üç katına çıkarırdı.

## Yazılım mühendisliği bağlantısı

Yapay zekâ araçlarını değerlendiren herkes için sağlık ekonomisinden ithal edilenler: **pragmatik denemeler** yürütün (sizin kod tabanınız, sizin mühendisleriniz, gerçek işler — satıcı demo görevleri değil); **kabul oranını sonuç değil vekil** sayın (geliştiricinin gözünden önerilerin [PPV](../klinik-yapay-zekâ-değerlendirmesi/)'sidir — yüksek kabul ile düşük elde tutma aşırı tanıdır); her işleme kazancını bir **kararlılık kontrolüyle** eşleştirin (DORA 2025: yapay zekâ işleme hacmini artırır, kararlılığı bozar — yan etkili bir müdahale [DORA metrikleri](../dora-metrikleri/) uyarınca net fayda analizi gerektirir); ve faydayı dürüstçe kapasite olarak sınıflandırın ([nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/)).

## Tuzaklar

- **Satıcı çalışmasının nakli**: sıfırdan RCT rakamlarının eski kod tabanı işine uygulanması — METR çalışmasının ifşa ettiği hatanın ta kendisi.
- **Kendi bildirimin ölçüm sayılması**: 20 puanlık algı farkı bu literatürdeki bilinen en büyük yanlılıktır.
- **Etkinlik şişirmesi**: daha çok PR ve daha çok kod Etkinliktir, sonuç değildir ([SPACE](../space-ve-devex/)); yeniden işleme ve CFR ile eşleştirin.
- **Öğrenme eğrisini yok saymak**: 2. hafta ölçümleri her iki yönde de yenilik etkilerini yakalar; kararlı durumda ölçün ([zaman ufku](../zaman-ufku/)).

## Kaynaklar

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
