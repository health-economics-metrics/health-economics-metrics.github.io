# QALY Başına Karbon Ayak İzi

QALY başına karbon bir verimlilik oranıdır — bir müdahalenin karbon emisyonlarının (veya kaçınılan emisyonların) sağladığı QALY'lere bölünmesi — QALY başına maliyetin doğrudan benzeridir ve bir müdahalenin karbon verimliliğinin maliyet verimliliğiyle birlikte değerlendirilmesini sağlar. "Karbon düzeltmeli net parasal fayda" bir adım daha ileri gider: karbon etkisini Birleşik Krallık Green Book'unun resmî ticarete konu olmayan karbon değerleriyle parasallaştırır ve standart [net parasal fayda](../net-parasal-fayda/)dan düşer.

## Neden önemli

NICE ve NHS England artık çevresel etkinin maliyet ve QALY'lerle birlikte dikkate alınmasını bekliyor. NHS'nin kamuya açık bir net sıfır taahhüdü var: doğrudan emisyonları için 2040'a kadar net sıfır, tam tedarik zinciri ayak izi için 2045'e kadar net sıfır. NICE'ın sağlık teknolojisi değerlendirmeleri kılavuzu (PMG36) çevresel sürdürülebilirliği teknoloji değerlendirmesinde ortaya çıkan bir husus olarak anar. Dijital sağlık ürünü için bu, karbonun değer vakasının dördüncü ayağı olma yolunda olduğu anlamına gelir — maliyet, QALY ve [verimlilik sınırında baskınlık](../baskınlık-ve-verimlilik-sınırı/)la yan yana — hiçbirinin yerine geçmeden, iyi kurulmuş bir iş gerekçesinin giderek daha çok raporlaması gereken bir boyut.

## Matematik

```
QALY başına karbon = toplam_emisyon_ton_co2e / toplam_qaly
  (negatif değer, kazanılan QALY başına net KAÇINILAN emisyon demektir —
  çifte kazanç: daha iyi sağlık ve daha düşük karbon)

Parasallaştırılmış karbon etkisi = emisyon_ton_co2e × ton_başına_karbon_değeri
  (negatif emisyon × pozitif değer = negatif maliyet, yani bir fayda)

Karbon düzeltmeli NPF = net_parasal_fayda − parasallaştırılmış_karbon_etkisi
```

Bu, maliyet/QALY verimlilik sınırı fikrini ikinci bir eksenle — QALY başına karbon — genişletir; [baskınlık ve verimlilik sınırı](../baskınlık-ve-verimlilik-sınırı/)ndaki "her seçeneği çiz ve neyin baskın olduğunu gör" mantığı, maliyet yerine karbona uygulanır.

## Çözümlü örnek

Bir tele-sağlık hizmeti yüz yüze ziyaretlerin yerini alıyor; her biri yaklaşık 8 kg CO2e olan yılda 5.000 araç yolculuğunu önlüyor — 40 ton CO2e kaçınıldı, negatif emisyon rakamı (−40,0 ton) olarak gösteriliyor ve yılda 25 QALY sağlıyor:

```
QALY başına karbon = −40,0 / 25,0 = kazanılan QALY başına −1,6 ton CO2e kaçınıldı
```

Green Book'un ticarete konu olmayan karbon değeri kullanılarak (örnekleyici rakam, 2023 ticarete konu olmayan merkezî değer ≈ 269 £/ton CO2e — Green Book karbon değerlerini her yıl günceller, canlı bir analizde alıntılamadan önce yeniden doğrulayın):

```
Parasallaştırılmış karbon etkisi = −40,0 × 269 £ = −10.760 £
```

−10.760 £'lık bir "maliyet" 10.760 £'lık bir faydadır. Müdahalenin tek başına net parasal faydası 500.000 £ ise:

```
Karbon düzeltmeli NPF = 500.000 £ − (−10.760 £) = 510.760 £
```

Karbon tasarrufu vakadan eksiltmek yerine ona eklenir — negatif emisyon çerçevesinin ortaya çıkarmayı amaçladığı çifte kazanç.

## Yazılım mühendisliği bağlantısı

Bu, yapay zekâ/bulut ekonomisiyle canlı, güncel bir kesişimdir: bir yapay zekâ modelinin eğitiminin ve çalıştırılmasının hesaplama karbon ayak izi artık NHS satın almasında gerçek bir kalemdir, çünkü belirli eşiklerin üzerindeki NHS tedarikçi sözleşmeleri Karbon Azaltma Planı gerektirir. [Bulut birim ekonomisi](../bulut-birim-ekonomisi/) hesaplama çıktısı birimi başına maliyeti zaten izler; QALY başına karbon, bu modülü ve [çıkarım birim ekonomisi](../çıkarım-birim-ekonomisi/)ni çevresel boyuta uzatan gelecekteki bir "çıkarım başına karbon maliyeti" metriği için doğal şablondur, ancak bu metrik henüz mevcut değildir.

## Tuzaklar

- **Kapsam sınırı oyunları**: yalnızca doğrudan (Kapsam 1) emisyonları sayıp, bir dijital sağlık ürününün gerçek ayak izinin genellikle çoğunluğunu oluşturan tedarik zinciri (Kapsam 3) emisyonlarını dışlamak.
- **Bayat karbon değeri kullanmak**: Green Book ticarete konu olmayan karbon değerlerini her yıl günceller; bu yüzden alıntılanan her £/ton rakamı tarihlendirilmeli, sabit bir sabit gibi aktarılmamalıdır.
- **"Karbon verimli"yi "maliyet-etkili"nin ikamesi saymak**: düşük karbonlu, düşük değerli bir müdahale yine de NHS kaynaklarının kötü kullanımıdır. Karbon, maliyet ve QALY'lerin yanında dördüncü ayaktır, ikisinden birinin yerine geçmez.

## Kaynaklar

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
