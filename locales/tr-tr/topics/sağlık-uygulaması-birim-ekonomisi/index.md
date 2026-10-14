# Sağlık Uygulaması Birim Ekonomisi

Tüketici sağlık ürünlerinin ticari aritmetiği: müşteri edinme maliyeti (CAC), yaşam boyu değer (LTV), kullanıcı başına ortalama gelir (ARPU), üye başına aylık (PMPM) fiyatlandırma ve işveren pazarında **YG ile VOI** (yatırım üzerinden değer) ayrımı.

## Neden önemli

Sağlık uygulamaları yapısal bir sıkışmayla karşı karşıyadır: edinim pahalıdır (düzenlenmiş iddialar, güven engelleri, uyumluluk maliyetleri), elde tutma ise herhangi bir yazılım dikeyinin en kötüsüdür (30 gün içinde ~%90 terk — bkz. [elde tutma ve kayıp](../elde-tutma-ve-kayıp/)). Standart yaşayabilirlik testi — **LTV:CAC ≥ 3:1** — bu nedenle tüketici sağlığında acımasızca zordur ve sektör bu yüzden B2B2C modellerine göç eder: işverenler, sigortacılar ve sağlık sistemleri nüfuslar için PMPM öder; alıcı terk eden birey değildir.

## Matematik

```
CAC   = satış + pazarlama harcaması / yeni ödeme yapan müşteriler
ARPU  = gelir / aktif kullanıcılar (dönem başına)
LTV   = ARPU × ortalama ömür  =  ARPU / kayıp oranı
Yaşayabilirlik: LTV : CAC ≥ 3, geri ödeme süresi ≤ 12–18 ay

Elde tutulan kullanıcı başına etkin CAC = CAC / elde tutma(t)
  — %4 D30 elde tutmada yükleme başına 5 £ = 30 gün elde tutulan kullanıcı başına 125 £

PMPM geliri = oran × kayıtlı üyeler × aylar
  satıcı marjı = PMPM − üye başına aylık hizmet maliyeti
  — katılım işareti çevirir: B2C aboneliklerde katılım geliri
    yönlendirir; PMPM altında katılımlı üyelere hizmet etmek
    uykuda olanlardan DAHA pahalıdır ve sonuç sözleşmeleri onu yeniden çevirir
```

## Çözümlü örnek

Bir B2C uyku uygulaması: 6,99 £/ay, aylık kayıp %18, harmanlanmış CAC 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — yaşayamaz

İşveren PMPM'ye dönüş: 1,20 £ PMPM × 40.000 kapsanan hayat = 48 bin £/ay
Hizmet maliyeti: altyapı 0,15 £ + destek 0,10 £ + içerik 0,05 £
  üye başına ≈ 0,30 £ → marj ~%75, satış döngüsü uzun ama kayıp
  sözleşme düzeyinde (yıllık), kullanıcı düzeyinde değil (günlük)

İşverenin sorusu metriği değiştirir: sert dolar YG (azalan talepler,
devamsızlık) sağlıklı yaşam ürünleri için nadiren gösterilebilir —
sektörün yanıtı VOI'dir: verimlilik, işe alım çekiciliği, katılım —
yalnızca VOI olarak etiketlendiğinde dürüsttür, YG kılığına sokulduğunda değil
(bkz. return-on-investment.md ve social-return-on-investment.md).
```

## Yazılım mühendisliği bağlantısı

Mühendislik seçimleri oranın her iki tarafını belirler: **hizmet maliyeti** mimaridir ([bulut birim ekonomisi](../bulut-birim-ekonomisi/) — PMPM marjı üye başına altyapı maliyetine bağlıdır) ve **LTV** elde tutma mühendisliğidir (her kayıp noktası aritmetik gelirdir — [elde tutma](../elde-tutma-ve-kayıp/) belgesinin QALY matematiğinin tam bir gelir ikizi vardır). Özellikle sağlık ürünleri için birim ekonomisi panosu LTV ve CAC'nin yanında üçüncü bir satır taşımalıdır: **edinilen kullanıcı başına sağlık değeri** (elde tutma ağırlıklı QALY × eşik) — çünkü ödeyici ve DiGA tarzı pazarlar giderek buna göre fiyatlar ve ticari ile klinik birim ekonomisi ayrışan bir ürün (kârlı ama sağlık açısından etkisiz, ya da etkili ama finanse edilemez) hangi soruna sahip olduğunu bilmelidir.

## Tuzaklar

- **Erken kohort kaybından LTV**: kayıp aşağı doğru stabilize olur; ama hayatta kalan yanlılığı da var — ilk benimseyenler ölçeklenmiş kitlelerden daha iyi elde tutulur. Olgunlaşmış kohort verisi kullanın.
- **Kanallar üzerinden harmanlanmış CAC**: ücretli sosyal CAC ile klinisyen sevk CAC'si 10× farklıdır ve zıt elde tutma profilleri vardır — segmentleyin yoksa yanıltılırsınız.
- **Kullanım sınırları olmadan PMPM**: aşırı katılımlı üyeler marjları tersine çevirebilir; ortalamayı değil dağılımı modelleyin.
- Bir CFO'ya **YG olarak sunulan VOI** — işveren sağlıklı yaşam sektörünün bir on yıl boyunca kazandığı güvenilirlik başarısızlığı.

## Kaynaklar

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
