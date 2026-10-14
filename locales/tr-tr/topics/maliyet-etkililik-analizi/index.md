# Maliyet-Etkililik Analizi (CEA)

CEA, alternatif müdahalelerin maliyetlerini **doğal birimlerle** ölçülen tek bir sonuca karşı karşılaştırır — yaşam yılı, tespit edilen vakalar, kaçınılan yatışlar, düşürülen mmHg kan basıncı. Çıktısı sonuç birimi başına maliyettir.

## Neden önemli

CEA, tüm seçenekler aynı sonucu hedeflediğinde iş atı karşılaştırmadır. "X'e ulaşmanın bu yollarından hangisi paranın en iyi kullanımı?" sorusunu yanıtlar — ama "X'e ulaşmak hiç değer mi?" (bunun için [maliyet-fayda analizi](../maliyet-fayda-analizi/) gerekir) ve "X ilgisiz önceliklerle nasıl karşılaştırılır?" (bunun için [maliyet-fayda-yarar analizi](../maliyet-yarar-analizi/) ve QALY gibi genel bir sonuç gerekir) sorularını değil.

## Matematik

Karşılaştırma istatistiği, doğal birimlerle [ICER](../artımlı-maliyet-etkililik-oranı/)'dır:

```
ICER = (Maliyet_A − Maliyet_B) / (Etki_A − Etki_B)
     = ek tespit edilen vaka / kaçınılan yatış / vb. başına £
```

Prosedür: sonuç birimini tanımlayın; her seçeneği aynı [perspektiften](../analiz-perspektifi/) aynı [zaman ufkunda](../zaman-ufku/) maliyetlendirin; baskın seçenekleri eleyin ([verimlilik sınırı](../baskınlık-ve-verimlilik-sınırı/)); sınır boyunca artımlı oranları hesaplayın.

## Çözümlü örnek

100.000 kişilik bir nüfusta teşhis edilmemiş atriyal fibrilasyonu bulmanın üç yolu:

```
Seçenek                       Maliyet      Bulunan vaka
Fırsatçı nabız kontrolleri    150.000 £        300
Eczane tarama etkinlikleri    400.000 £        520
Giyilebilir tabanlı tarama    900.000 £        610

ICER eczane / nabız:        (400 bin−150 bin)/(520−300) = ek vaka başına 1.136 £
ICER giyilebilir / eczane:  (900 bin−400 bin)/(610−520) = ek vaka başına 5.556 £
```

Ek vaka başına 5.556 £'ın "değer" olup olmadığı, bulunan bir vakanın değerine (aşağı akışta inme önleme) bağlıdır — CEA seçenekleri sıralar ama benimseme kararı bu dışsal değerlemeyi gerektirir. Giyilebilir seçeneğin vaka başına *ortalama* maliyetinin (900 bin/610 = 1.475 £) iyi göründüğüne, genişleme kararı için dürüst sayının *artımlı* 5.556 £ olduğuna dikkat edin.

## Yazılım mühendisliği bağlantısı

CEA, seçenekler tek bir sonucu paylaştığında doğru şablondur: üç iyileştirme yaklaşımında elenen kararsız test başına maliyet; gözlemlenebilirlik satıcıları arasında kaçınılan olay başına maliyet; CI mimarileri arasında başarılı dağıtım başına maliyet. Uyguladığı disiplin — tek beyan edilmiş sonuç birimi, ortalama değil artımlı oranlar, önce baskın seçeneklerin elenmesi — fiyat tartışması başlamadan çoğu kötü satıcı karşılaştırmasını öldürür.

## Tuzaklar

- **Farklı sonuçlu seçenekleri** ("bulunan vaka" ile "memnuniyet") tek bir CEA'da karşılaştırmak — bunun için [maliyet-sonuç analizi](../maliyet-sonuç-analizi/) veya genel bir sonuç gerekir.
- Artımlı oranların gerektiği yerde sunulan **ortalama maliyet-etkililik oranları** (yukarıdaki giyilebilir örneği).
- **Pohpohlama için seçilen sonuç birimleri**: "üretilen uyarılar" bir çıktıdır, sonuç değil; değer taşıyan birimlerde ısrar edin.

## Kaynaklar

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
