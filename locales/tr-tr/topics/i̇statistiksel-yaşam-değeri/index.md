# İstatistiksel Yaşam Değeri (İYD)

İstatistiksel yaşam değeri (VSL) — BK kullanımında "önlenen ölümün değeri" (VPF) denir — bir *nüfusun* bir istatistiksel ölümün riskini azaltmak için topluca ödemeye razı olduğu tutardır; ücret-risk takası çalışmalarından (işçilerin riskli işler için ne kadar ek ücret talep ettiği) ve beyan edilmiş tercih anketlerinden türetilir. Belirli herhangi bir bireyin hayatının fiyatı değildir; bir nüfus-risk yapısıdır ve risk azaltıcı sistemler — triyaj algoritmaları, ambulans sevki, güvenlik izleme — inşa eden bir yazılım mühendisi, bunun [ödeme istekliliği eşiklerinden](../ödeme-i̇stekliliği-eşikleri/) farklı bir kuramsal gelenekten geldiğini bilmelidir.

## Neden önemli

VSL/VPF, düzenleyici maliyet-fayda analizinde ölüm riski azalmalarını parasallaştırmak için standart araçtır: ulaşım güvenliği, çevre düzenlemesi ve bazı halk sağlığı müdahaleleri iş gerekçelerini bunun üzerinden yürütür. HM Treasury'nin Green Book'u BK işgücü piyasası ve anket kanıtından türetilmiş bir VPF rakamı yayımlar ve Ulaştırma Bakanlığı (Department for Transport) bunu yol güvenliği değerlendirmesinde doğrudan kullanır. Bu, QALY × ödeme istekliliği eşiği metodolojisinden gerçekten farklı bir değerleme geleneğidir: eşik yaklaşımı sağlık kazanımlarını bir sağlık *bütçesinin* şu anda marjda ürettiğiyle değerlerken, VSL/VPF risk azalmasını bir işgücü piyasasındaki veya ankettekilerin onun için ödeyeceklerini ortaya koydukları şeyle değerler. İki çerçeve her zaman uzlaştırılamaz ve aynı vakada bunu kabul etmeden ikisini de kullanmak yaygın bir analitik hatadır.

## Matematik

```
Önlenen ölümler = nüfus × kişi_başına_risk_azalması
  (kişi_başına_risk_azalması bir olasılıktır, ör. 0,000001 = yıllık
   ölüm riskinde milyonda bir azalma)

Parasallaştırılmış ölüm faydası = önlenen_ölümler × önlenen_ölümün_değeri
```

## Çözümlü örnek

800.000 kişilik bir bölge, her kişinin yıllık ölüm riskini milyonda 1 (0,000001) azaltan bir yol güvenliği dijital sevk/triyaj müdahalesinden yararlanıyor:

```
Önlenen ölümler = 800.000 × 0,000001 = 0,8
```

BK'nin Önlenen Ölüm Değeri 2.180.000 £ kullanılarak (HM Treasury/DfT rakamı, 2023/24 fiyatları — Green Book bunu yıllık günceller, canlı bir analizde alıntılamadan önce yeniden doğrulayın):

```
Parasallaştırılmış ölüm faydası = 0,8 × 2.180.000 £ = yılda 1.744.000 £
```

Etkilenen nüfusun çoğunun bireysel olarak asla fark etmeyeceği bir risk azalmasından, yılda 1,75 milyon £'ın hemen altında parasallaştırılmış ölüm faydası.

## Yazılım mühendisliği bağlantısı

Güvenlik açısından kritik yazılım ekipleri — tıbbi cihaz bellenimi, otonom araç yazılımı, endüstriyel kontrol sistemleri — bir güvenlik yatırımı için maliyet-fayda gerekçesi oluştururken tam olarak bu fiyatlandırma sorunuyla karşılaşır: arıza nadir, ağır ve geniş bir kullanıcı nüfusuna yayılmışken "bir felaket arızasını önlemeyi" nasıl fiyatlandırırsınız? VSL/VPF, nadir, ağır, nüfus düzeyinde bir risk azalmasına sayı koymak için on yıllardır var olan, kamuya açık biçimde belgelenmiş gerçek dünya emsalidir — nadir bir felaket kesintisine karşı bir SRE yatırımını fiyatlandırmakla aynı argüman biçimi, yalnızca kesinti süresi yerine ölüm sonucuyla.

## Tuzaklar

- **VSL'yi "belirli bir hayatın fiyatı" olarak ele almak**: değildir. VSL/VPF, birçok kişi arasındaki risk azaltma takaslarından türetilmiş bir nüfus istatistiksel yapısıdır, belirli bir kişinin hayatının veya ölümünün değerlemesi değildir.
- **QALY tabanlı net parasal fayda hesaplamasına karşı çifte sayım**: aynı vakada bir VSL/VPF rakamı ve ayrı bir QALY × eşik hesaplaması kullanıp bunları uzlaştırmamak, aynı önlenen ölümlerin değerini sessizce iki kez sayar. Belirli bir vaka için tek bir çerçeve seçin.
- **Bir VSL tahminini ayarlama yapmadan bağlamlar arasında aktarmak**: bir ülkenin işgücü piyasasından veya çalışma çağı ücret-risk verilerinden türetilmiş bir VSL'yi farklı bir gelir bağlamına ya da farklı bir nüfusa (çocuklar, emekliler) ayarlanmadan uygulamak, uzun süredir devam eden, gerçekten tartışmalı bir metodolojik sorundur — çözülmüş bir sorun değil.

## Kaynaklar

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
