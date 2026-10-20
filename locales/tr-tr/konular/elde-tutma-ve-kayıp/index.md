# Elde Tutma ve Kayıp

Elde tutma, bir kullanıcı kohortunun başlangıçtan N gün sonra hâlâ aktif olan kesrini ölçer (D1/D7/D30 eğrileri); kayıp onun tamamlayıcısıdır. Acımasız dijital sağlık temel çizgisi: **sağlık uygulaması kullanıcılarının kabaca %90'ı 30 gün içinde bırakır** — dijital sağlık D30 elde tutma, tüm uygulama ortalaması ~%6'ya karşı ~%3–4'tür.

## Neden önemli

Eysenbach bunu 2005'te adlandırdı: **kayıp yasası** (law of attrition) — kullanıcıları yüksek oranda kaybetmek, eHealth müdahalelerinin bir uygulama hatası değil içsel, yapısal bir özelliğidir; eHealth denemelerinde kayıp rutin olarak %50'yi aşar. Ekonomik sonuç toplamdır: elde tutma, herhangi bir faydanın sunulabileceği *tedavi penceresini* tanımlar ve [birim ekonomisi](../sağlık-uygulaması-birim-ekonomisi/) — 12 gün kalan kullanıcı başına ödenen CAC ne LTV ne de QALY sunar. Tüketici sağlık ürünü için faydaları elde tutma eğrisiyle ağırlıklandırmayan herhangi bir ekonomik model, var olmayan bir ürünü tanımlıyordur.

## Matematik

```
Elde tutma_Dn = n. günde aktif kullanıcılar / kohort büyüklüğü × 100
Kayıp oranı   = dönemde kaybedilen kullanıcılar / dönem başındaki kullanıcılar × 100

Fayda ağırlıklandırması (sağlık ekonomisi hamlesi):
  edinilen kullanıcı başına beklenen fayda = Σ_t elde tutma(t) × fayda oranı(t)
  ≈ elde tutma eğrisinin altındaki alan × birim zaman başına fayda
  — deneme faydası × edinilen kullanıcıların %100'ü DEĞİL

D30'da elde tutulan kullanıcı başına maliyet = CAC / D30 elde tutma
  (%4 D30'da 5 £ CAC aslında elde tutulan kullanıcı başına 125 £'dır)
```

## Çözümlü örnek

Bir ruh sağlığı uygulaması: deneme, 8 haftayı tamamlayan kullanıcı başına 0,02 QALY kazancı gösterdi. 100.000 indirmelik devreye alma kohortu, elde tutma D7 %25, D30 %8, 8. hafta %4:

```
Tamamlayanlar       = 100.000 × 0,04 = 4.000
Sunulan QALY'ler    = 4.000 × 0,02 = 80  (100.000 × 0,02 = 2.000 değil)
20.000 £/QALY'de    = 1,6 milyon £ sağlık değeri (40 milyon £ değil)

İndirme başına sağlık değeri = 16 £ — bir ödeyicinin indirme başına
neyi ödeyeceğini belirlemesi gereken sayı ve saf iddianın %4'ü.
Elde tutma iyileştirme vakası: 8. hafta tamamlamayı %4 → %6'ya çıkarmak
yılda 40 QALY ≈ 800 bin £ ekler — elde tutma mühendisliği sağlık üretimidir.
```

## Yazılım mühendisliği bağlantısı

Elde tutma, yukarıdaki aritmetiğe göre ürün mühendisliğinin sağlık değerini en doğrudan ürettiği metriktir. Onu hareket ettiren uygulamalar sıradandır: ilk kurulum, ilk değere ulaşma süresi, yeniden katılım tasarımı, performans ve en önemlisi **planlı doz tamamlama** — tanımlı bir sonu olan bir program (8 hafta, sonra mezuniyet) sonsuz DAU'yu değil *tamamlamayı* ölçmeli ve metriği reklam finanslı dikkat modeli yerine klinik modelle hizalamalıdır. Sağkalım analizi doğru araç setidir ([kazanılan yaşam yılları](../kazanılan-yaşam-yılları/) ile aynı Kaplan-Meier matematiği); eğrileri edinim kanalına göre bölün, çünkü kanal karışımı elde tutmayı çoğu özellikten daha çok değiştirir.

## Tuzaklar

- **Ters yönde tedavi amacı aklaması**: denemeler tamamlayanları raporlar; devreye alma ekonomisi edinilen herkesi saymalıdır (Eysenbach'ın temel uyarısı).
- **Elde tutma tiyatrosu**: terapötik eylemi hiç gerçekleştirmeyen bildirim güdümlü "aktif" kullanıcılar (bkz. [katılım metrikleri](../katılım-metrikleri/)).
- **Tanımlar arasında eğri karşılaştırmak**: "aktif"in açılış ile anlamlı eylem olarak tanımlanması D30'u katlarca kaydırır.
- **Kimin kaybolduğunu yok saymak**: en hastalar en hızlı kaybolursa, sağlıklılar arasında elde tutma iyileştikçe kullanıcı başına faydalar düşer — eğrileri vaka karışımıyla eşleştirin (bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/)).

## Kaynaklar

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
