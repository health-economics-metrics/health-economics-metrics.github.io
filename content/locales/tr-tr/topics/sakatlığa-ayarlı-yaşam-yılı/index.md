# Sakatlığa Ayarlı Yaşam Yılı (DALY)

DALY, bir yıllık kayıp sağlıklı yaşamdır — [QALY](../kaliteye-ayarlı-yaşam-yılı/)'nin yük tarafındaki aynasıdır. QALY'ler *kazanılan* sağlığı sayarken DALY'ler hastalık yüzünden *kaybedilen* sağlığı sayar; müdahaleler **önlenen** DALY'lerle değerlenir.

## Neden önemli

DALY küresel sağlığın standardıdır (DSÖ, Küresel Hastalık Yükü çalışması ve düşük ve orta gelirli ülkelerin çoğu sağlık bakanlığı DALY cinsinden planlama yapar). Yazılımınız uluslararası sağlık sistemlerini, bağışçıları veya DSÖ ile uyumlu programları hedefliyorsa değer dili kazanılan QALY değil, önlenen DALY'dir. WHO-CHOICE'ın tarihsel kıyaslaması: bir DALY'yi kişi başına GSYH'nin 1 katından azına önleyen müdahale "yüksek maliyet-etkili", kişi başına GSYH'nin 1–3 katı "maliyet-etkilidir" (DSÖ artık bu bantların katı kullanımını önermiyor, ama pratikte hâlâ her yerde).

## Matematik

```
DALY = YLL + YLD

YLL (kayıp yaşam yılları)          = ölümler × ölüm yaşındaki standart yaşam beklentisi
YLD (sakatlıkla yaşanan yıllar)     = yaygınlık × sakatlık ağırlığı

sakatlık ağırlığı ∈ [0, 1], 0 = tam sağlık, 1 = ölüme eşdeğer
(ağırlıklar Küresel Hastalık Yükü çalışması tarafından yayımlanır)
```

## Çözümlü örnek

Bir bölgedeki bir tarama hatırlatma platformu bir hastalığın erken tespitini artırıyor. Yılda 10 erken ölümü (her biri standart yaşam beklentisine göre 20 yıl kaybediyor) ve sakatlık ağırlığı 0,2 olan bir durumla bir yıl yaşayacak 200 kişiyi önlüyor.

```
Önlenen YLL = 10 × 20        = 200
Önlenen YLD = 200 × 0,2      = 40
Önlenen DALY'ler             = yılda 240
```

Platformun işletme maliyeti yılda 600.000 $ ise önlenen DALY başına maliyet 600.000 / 240 = **2.500 $**'dır. Kişi başına GSYH'si 8.000 $ olan bir ülkede bu, 1× GSYH kıyaslamasının çok altındadır — WHO-CHOICE terimleriyle "yüksek maliyet-etkili".

## Yazılım mühendisliği bağlantısı

- Küresel sağlık finansörlerini (Gavi, Global Fund, ulusal programlar) hedefleyen dijital sağlık, etkiyi **önlenen DALY başına maliyet** olarak ifade etmelidir — hibe değerlendiricilerin zaten düşündüğü metriktir.
- DALY ayrıca mühendislik için yararlı bir *yük muhasebesi* şablonudur: olaylar, kararsız derlemeler ve eski sistem sürtünmesi bir kod tabanı için "sakatlıkla yaşanan yıllar"dır — angarya ağırlıklı bir yük envanteri, GBD yük tablolarının sağlık harcamasını yönlendirdiği gibi, iyileştirmenin en çok "sağlıklı mühendislik yılı" satın aldığı yeri söyler.

## Tuzaklar

- **Kazanılan QALY ≠ sayısal olarak önlenen DALY** — farklı ağırlıklar, farklı yaşam tabloları, farklı gelenekler (DALY'ler tarihsel olarak ölçü içinde yaş ağırlıklandırması ve iskonto kullandı). Gelişigüzel dönüştürmeyin.
- **GSYH katı eşiklerini lastik damga olarak kullanmak** — DSÖ'nün kendisi bunların bütçeleri ve fırsat maliyetini yok saydığı konusunda uyarır; bkz. [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/).
- **Kullanıcı başına etkinlikten nüfus ölçeğinde DALY iddia etmek**, benimseme ve uyumla çarpmadan — bkz. [erişim ve eşitlik](../erişim-ve-eşitlik/).

## Kaynaklar

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
