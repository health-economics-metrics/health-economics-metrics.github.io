# Yatırım Getirisi (YG)

YG, net kazancın yatırılan paraya oranıdır. Mühendislik ve finansın zaten paylaştığı metriktir — sağlık ekonomisi, bir YG iddiasının incelemeden sağ çıkmasını sağlayan disiplini ekler: beyan edilmiş perspektif, karşılaştırıcı, ufuk ve fayda kategorileri.

## Neden önemli

YG bütçe sahiplerinin ortak dilidir ve halk sağlığı da onu kullanır: dönüm noktası Masters ve ark. incelemesi halk sağlığı müdahaleleri için **14,3:1 medyan YG** buldu (her 1 £ daha geniş ekonomiye ve sağlık sistemine ~14 £ getirir) — önleme harcamasını savunmak için yaygın kullanılan bir sayı. Ama bu 14:1 *toplumsal, uzun ufuklu* bir rakamdır; bir hastane CFO'sunun YG'si ise ödeyici perspektifli ve 1–3 yıldır. YG tartışmalarının çoğu aslında beyan edilmemiş perspektif tartışmalarıdır.

## Matematik

```
YG = (Faydalar − Maliyetler) / Maliyetler      (genellikle × %100)

Geri ödeme süresi = Maliyetler / yıllık net fayda
```

Bir YG iddiası dört beyan olmadan eksik tanımlıdır:

1. **Perspektif** — kimin faydaları sayılır? (bkz. [analiz perspektifi](../analiz-perspektifi/))
2. **Karşılaştırıcı** — hangi alternatife karşı? (bkz. [fırsat maliyeti](../fırsat-maliyeti/))
3. **Ufuk** — ne kadar süre için ve [iskonto edilmiş](../i̇skonto-ve-zaman-tercihi/) mi?
4. **Fayda sınıfı** — nakit serbest bırakan, kapasite veya niteliksel? (bkz. [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/))

## Çözümlü örnek

3 yılda 500.000 £'a mal olan e-vardiya planlama sistemi.

```
Nakit serbest bırakan: ajans vardiyası azalması              450.000 £
Kapasite:              serbest kalan servis yöneticisi idari zamanı 600.000 £ (değerlenmiş, bankaya yatırılmamış)
Niteliksel:            personel memnuniyeti, güvenlik        parasallaştırılmamış

Kesin finansal YG  = (450.000 − 500.000)/500.000 = −%10
Ekonomik YG        = (1.050.000 − 500.000)/500.000 = +%110
```

İki sayı da doğrudur. Yalnızca 450 bin £ bankaya yatırabilecek bir CFO'ya "+%110 YG" diyen satıcı güveni kaybeder; ikisini de etiketli sunmak kazandırır. Aynı bölünme, finans iki yıl sonra faydaları denetlediğinde dahili bir savunucuyu korur.

## Yazılım mühendisliği bağlantısı

Her araç teklifinin bir YG slaytı vardır; neredeyse hiçbiri dört parametreyi beyan etmez. En yaygın başarısızlık kategori karıştırmadır: kapasite kazanımları (geliştirici dakikaları) finansal getiri olarak sunulur. Yapay zekâ/platform YG'sini yukarıdaki çözümlü örnek gibi yapılandırın — nakit satırı, kapasite satırı, niteliksel satır — ve yumuşak sayılara [duyarlılık analizi](../duyarlılık-analizi/) ekleyin. Özellikle yapay zekâ YG'si için kâr-zarar gerçeklik kontrolü için bkz. [yapay zekâ yatırım getirisi](../yapay-zekâ-yatırım-getirisi/).

## Tuzaklar

- **Perspektif aklama**: 12 aylık ufku olan bir bütçe sahibine alıntılanan on yıllık toplumsal faydalar.
- **Net yerine brüt**: 2 milyon £ harcamada "3 milyon £ getirir" %300 değil %50 YG'dir.
- **Oran maksimizasyonu**: minik paydalar önemsiz yatırımlarda muhteşem YG'ler üretir; portföyleri NBD veya [net parasal fayda](../net-parasal-fayda/) ile sıralayın, YG'yi eleme olarak kullanın.
- **Fayda denetimi yok**: [fayda gerçekleştirme](../fayda-gerçekleştirme/) takibi olmayan öngörülen YG bir vaattir, sonuç değil.

## Kaynaklar

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
