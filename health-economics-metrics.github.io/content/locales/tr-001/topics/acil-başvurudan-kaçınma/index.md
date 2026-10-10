# Acil Başvurudan Kaçınma

Acil başvurudan kaçınma, yukarı akıştaki müdahaleyle önlenen acil servis (A&E) ziyaretlerini ve acil yatışları sayar — triyaj uygulamaları, uzaktan izleme, sanal servisler, acil bakıma yönlendirme. "Daha erken yakaladık"ı maliyetlendirilmiş bir iddiaya çevirir.

## Neden önemli

Acil bakım sistemdeki en pahalı rutin ortamdır (National Cost Collection / PSSRU rakamlarına göre acil servis başvuru birim maliyetleri 250–400 £ aralığında; bir acil yatış binlerce £) ve acil servis kalabalığı ambulans gecikmelerine ve iptal edilen elektif işlemlere zincirleme yayılır. Talebi yukarı akışta güvenle çözen her şey — kendi kendine bakım tavsiyesi, aynı gün birinci basamak, toplum müdahalesi — sisteme en gergin noktasında kapasite satın alır. Bu, belirti denetleyicileri, 111 tarzı triyaj hizmetleri ve [uzaktan hasta izleme](../uzaktan-hasta-i̇zleme-ekonomisi/) için standart fayda satırıdır.

## Matematik

```
Kaçınılan başvurular = nüfus × (temel çizgi oranı − müdahale oranı)
Brüt tasarruf        = kaçınılan başvurular × başvuru başına birim maliyet
                       (+ kaçınılan yatışlar × yatış maliyeti, ayrı sayılır)

Net tasarruf         = brüt tasarruf − müdahale maliyeti − yeni yol kullanım maliyeti
                       (yönlendirilen talep bedava değildir: bir 111 çağrısı, bir aile hekimi
                        randevusu, bir sanal servis günü birim maliyetlere sahiptir)
```

Nedensel iddia bir karşılaştırıcı gerektirir: başvuru oranları eğilim gösterir ve mevsimsel değişir, bu yüzden tek başına önce/sonra hiçbir şey kanıtlamaz.

## Çözümlü örnek

3.000 yüksek riskli hasta için bir KOAH uzaktan izleme hizmeti. Eşleştirilmiş kontrol değerlendirmesi, alevlenmeye bağlı acil servis başvurularının hasta-yılı başına 0,9'dan 0,7'ye, acil yatışların 0,5'ten 0,42'ye düştüğünü gösteriyor.

```
Kaçınılan başvurular = 3.000 × 0,2  = 600 × 300 £   = 180.000 £
Kaçınılan yatışlar   = 3.000 × 0,08 = 240 × 3.800 £ = 912.000 £
Brüt                                                  1.092.000 £/yıl

Maliyetler: izleme hizmeti 600.000 £; ek toplum hemşiresi müdahaleleri 150.000 £
Net ≈ +342.000 £/yıl — artı daha erken tedavi edilen alevlenmelerin QALY kazançları.
```

Yatış satırının baskın olduğuna dikkat edin: tek başına başvurudan kaçınma nadiren bir izleme hizmetini karşılar; para *yatıştan kaçınmada*dır.

## Yazılım mühendisliği bağlantısı

Bu, **olaydan kaçınma ekonomisidir**. Gözlemlenebilirlik, kanarya dağıtımları ve erken uyarı sistemlerinin değeri kaçınılan "acil başvurulardır" — çağrılar, savaş odaları, sev-1'ler — her biri yüklü maliyetle (mühendis saatleri × ücret + müşteri etkisi). Aynı modelleme kuralları geçerlidir: yeni yukarı akış yolunun maliyetini düşün (uyarı triyajı bedava değildir), ikameye dikkat edin (olayları önlemeden iş yaratan uyarılar sağlık değil sağlık kaygısıdır) ve karşı olgusalı bir kontrolle kanıtlayın (ekiplerin olay oranları, tıpkı acil servis başvuruları gibi eğilim gösterir ve ortalamaya geri döner).

## Tuzaklar

- **Ortalamaya gerileme**: kötü bir yılda seçilen yüksek riskli kohortlar tedavisiz iyileşir; eşleştirilmiş kontroller veya basamaklı kama tasarımları şarttır.
- **Arz kaynaklı talep**: kolay dijital triyaj toplam teması *artırabilir* (yardım aramak için eşik düşer) ve aynı zamanda acil servis payını azaltabilir — toplam sistem maliyetini sayın.
- **Acil servis sabit maliyetleri düşmezken başvuruları ortalama maliyetle değerlemek** — bkz. [marjinal ve ortalama maliyet](../marjinal-ve-ortalama-maliyet/).

## Kaynaklar

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
