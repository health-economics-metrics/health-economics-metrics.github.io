# Maliyet-Fayda Analizi (CBA)

CBA hem maliyetleri *hem de* sonuçları parayla değerler. "Bunu yapmaya değer mi?" sorusunu — yalnızca "hangi seçenek en iyi?" değil — yanıtlayabilen tek analiz türüdür, çünkü parasallaştırılmış faydalar doğrudan maliyetlerle karşılaştırılabilir.

## Neden önemli

CBA, sağlık dahil olmak üzere sonuçlar parasallaştırılabildiğinde tüm kamu harcaması değerlendirmesi için Birleşik Krallık HM Treasury **Green Book** standardıdır. [CEA](../maliyet-etkililik-analizi/)/[CUA](../maliyet-yarar-analizi/) "sağlık birimi başına maliyet"te dururken, CBA sağlığın kendisini (QALY × eşik değeri) ve diğer her şeyi — zaman, seyahat, karbon — fiyatlar ve tek bir net rakam bildirir. Her tam NHS dijital iş gerekçesi CBA biçimli bir ekonomik vaka içerir.

## Matematik

```
NBD (net bugünkü toplumsal değer) = Σ_t [ (Fayda_t − Maliyet_t) / (1 + r)^t ]
FMO (fayda-maliyet oranı)         = BD(faydalar) / BD(maliyetler)

NBD > 0 ise benimseyin (eşdeğeri FMO > 1); NBD'ye göre sıralayın, FMO'ya göre değil.
r = %3,5 (Green Book toplumsal zaman tercihi oranı)
```

Sağlık etkileri QALY × λ olarak parasallaştırılmış girebilir (bkz. [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/)). Green Book ayrıca **iyimserlik yanlılığı düzeltmelerini** zorunlu kılar — maliyet tahminlerini artırmak ve faydaları kanıta dayalı yüzdelerle kırpmak, çünkü değerlendirmeler sistematik olarak fazla pembedir.

## Çözümlü örnek

Bir e-sevk sistemi, 5 yıllık ufuk, %3,5 iskonto:

```
Maliyetler: kurulum 1,2 milyon £ (yıl 0), işletme 300 bin £/yıl (yıl 1–5)
Faydalar:   idari tasarruf 250 bin £/yıl, kaçınılan yinelenen tanılar 280 bin £/yıl,
            kazanılan hasta zamanı 40.000 saat/yıl × 15 £ = 600 bin £/yıl → 1.130 bin £/yıl

BD maliyetler = 1.200 bin + 300 bin × 4,515 (anüite faktörü) = 2.555 bin £
BD faydalar   = 1.130 bin × 4,515                            = 5.102 bin £

NBD = 5.102 − 2.555 = +2.547 bin £     FMO = 2,0
```

Green Book iyimserlik yanlılığını uygulayın (diyelim kurulum maliyetinde +%40, faydalarda −%20): BD maliyetler ≈ 3.035 bin £, BD faydalar ≈ 4.082 bin £, NBD ≈ **+1.047 bin £** — hâlâ pozitif, düzeltmenin amacı da bu: vakalar kendi iyimserliklerinden sağ çıkmalı.

## Yazılım mühendisliği bağlantısı

Mühendislik iş gerekçeleri gayriresmî CBA'lardır. Çalmaya değer Green Book iyileştirmeleri:

- **Standart bir artış olarak iyimserlik yanlılığı** — mühendisler geçiş maliyetini, bakanlıkların altyapı maliyetini hafife aldığı kadar güvenilir biçimde hafife alır; bu sefer farklıymış gibi davranmak yerine belirtilmiş bir artış uygulayın.
- **Baskın faydayı dürüstçe parasallaştırın ya da hiç parasallaştırmayın** — hasta/kullanıcı zamanı savunulabilir oranlarla parasallaştırılır; "marka değeri" parasallaştırılmaz.
- **NBD sıralar, FMO sıralamaz**: FMO'su 5 olan küçük bir proje, FMO'su 1,6 olan büyük bir projeden daha az önemli olabilir.

## Tuzaklar

- Faydaları şişirmek için **parasallaştırılamayanı parasallaştırmak** (moral, "stratejik uyum") — bunları niteliksel tutun, [maliyet-sonuç analizi](../maliyet-sonuç-analizi/) uyarınca.
- **Transferleri fayda saymak**: kamu kuruluşları arasında hareket eden para toplumsal [perspektifte](../analiz-perspektifi/) sıfıra denk gelir.
- **Karşı olgusal yok**: faydalar sıfıra değil, asgari müdahale seçeneğine karşı ölçülür.

## Kaynaklar

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
