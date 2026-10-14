# Uygulayıcı Zamanı

Uygulayıcı zamanı, çoğu sağlık sisteminde en kıt kaynaktır. Bir klinisyene günde dakikalar kazandırmanın değerini ölçmek, basit ücret matematiğinden **fırsat maliyeti ve sistem kapasitesine** geçmeyi gerektirir: ulusal bir sağlık hizmetinde bir uygulayıcının zamanı esneyen bir maliyet kalemi değil, katı bir operasyonel darboğazdır.

## Neden önemli

Hızla daha fazla aile hekimi, konsültan veya uzman hemşire yetiştiremezsiniz — eğitim boru hatları 5–15 yıl sürer ve kadro boşlukları kronik. Dolayısıyla kazanılan bir uygulayıcı saati "kaçınılan ücret" değildir (uygulayıcı yine ücretini alır); *serbest kalan darboğaz kapasitesidir* ve darboğaz kapasitesi, darboğazın ürettiği şeyin değerindedir. Bu yüzden "konsültasyon başına 10 dakika kazandırır" iddiaları aynı anda dijital sağlıktaki en yaygın ve en yanlış fiyatlanan satırdır.

## Matematik

Artan dürüstlükte üç değerleme düzeyi:

```
1. Ücret temeli:     saatler × yüklü maaş oranı (PSSRU birim maliyetleri)
                     — zamanın neye mal olduğu, neyi ürettiği değil
2. Çıktı temeli:     saatler → mümkün kılınan randevular/işlemler × şema değeri
                     (bkz. national-tariff-and-unit-costs.md)
3. Darboğaz temeli:  bu rol tüm bir yolu kapılıyorsa, saatler × serbest kalan
                     yol veriminin değeri (kısıtlar kuramı)
```

Parçalanma iskontosu: kullanılabilir bir kuantumun altında kırıntılar hâlinde kazanılan zaman (örn. bir klinik boyunca dağılmış 3 dakika) kötü yeniden dağıtılır; belirtilmiş bir kullanım faktörü uygulayın.

## Çözümlü örnek

Ortam kâtipliği (ambient scribing) bir aile hekimine konsültasyon başına 2 dakika, günde 30 konsültasyon kazandırır: günde 60 dakika, yani 220 çalışma günü boyunca **aile hekimi başına yılda 220 saat**.

```
Ücret temeli:   220 × 80 £ (yüklü aile hekimi saati, PSSRU bölgesi) ≈ 17.600 £/aile hekimi/yıl
Çıktı temeli:   günde 60 dk = günde 5 ek 12 dk'lık konsültasyon
                = aile hekimi başına yılda 1.100 ek randevu × 42 £ ≈ 46.200 £/aile hekimi/yıl
                — veya aynı randevular azalan mesai ve daha güvenli,
                acelesiz konsültasyonlar olarak emilir (niteliksel satır)
```

50 aile hekimli bir federasyon boyunca çıktı temelli kapasite yılda ~2,3 milyon £ değerindedir — dakikaların gerçek (ölçülmüş, satıcı iddiası değil), konsolide (tüm konsültasyonlar, kırıntılar değil) ve yeniden dağıtılmış olması koşuluyla (bkz. [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/)).

## Yazılım mühendisliği bağlantısı

Kıdemli mühendis zamanı aynı şekilde davranır: tasarımların, incelemelerin ve olayların aktığı darboğazdır, bu yüzden maaşıyla değil darboğazın kapıladığı şeyle değerleyin. Aynı üç düzeyli değerleme, "yapay zekâ her geliştiriciye X dakika kazandırır" iddiasına uygulanır — ücret matematiği küçük sayıları pohpohlar; dürüst sorular dakikaların kullanılabilir bloklara toplanıp toplanmadığı ve serbest kalan kapasitenin gerçekte ne ürettiğidir. Kazanılan saat herkesin beklediği kişiye aitse çarpan için bkz. [aşağı akış kaynak optimizasyonu](../aşağı-akış-kaynak-optimizasyonu/).

## Tuzaklar

- **Dakika × maaş = tasarruf** — kanonik şişirme; bu kapasitedir ve yalnızca belirtilen kullanımda.
- **Kuantum problemini yok saymak**: 12 × 5 dakikalık tasarruf ≠ bir boş saat.
- **Tüm rolleri aynı değerlemek**: yol darboğazının bir saati, kapı bekçisi olmayan bir rolün bir saatinden kat kat değerlidir.

## Kaynaklar

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
