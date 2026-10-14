# Erişim ve Eşitlik

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (erişim, etkililik, benimseme, uygulama, sürdürme) — bir müdahalenin *nüfus* etkisini yargılamak için standart çerçevedir. Temel aritmetiği: **halk sağlığı etkisi ≈ erişim × etkililik**. Dijital araçlar bir eşitlik boyutu ekler: dijital uçurum erişimin sistematik olarak eşitsiz olduğu anlamına gelir ve önce-dijital teslimat kapatmayı amaçladığı sağlık açıklarını genişletebilir.

## Neden önemli

RE-AIM'i mHealth'e uygulayan sistematik incelemeler tutarlı bir imza bulur: güçlü Erişim ve Benimseme, **zayıf Etkililik ve Sürdürme** — uygulamalar kolay yayılır ve hızlı solar. Ulusal bir sağlık hizmeti için bu, kullanıcı başına etkileyici bir ürünün kötü bir nüfus yatırımı olabileceği anlamına gelir ve tersi: milyonlara ulaşan mütevazı derecede etkili bir araç, binlere ulaşan harika bir araçtan daha fazla üretebilir ([HALE](../sağlığa-ayarlı-yaşam-beklentisi/) aritmetiğine bakın). Eşitlik yan bir kısıt değil bir değer sürücüsüdür: dijital dışlanma yaş, yoksunluk, sakatlık ve dili izler — tam olarak tedavi edilebilir en çok yükü taşıyan nüfuslar — bu yüzden marjinal dışlanan kullanıcının çoğu zaman *ortalamanın üzerinde* potansiyel faydası vardır. Sosyoekonomik durumla ilişkili sağlık eşitsizliğinin biçimsel istatistiksel ölçüsü için bkz. [Yoğunlaşma İndeksi](../yoğunlaşma-i̇ndeksi/).

## Matematik

```
Nüfus etkisi ≈ erişim × etkililik
  erişim     = katılımcılar / uygun nüfus (bkz. activation-and-uptake.md)
  etkililik  = katılımcılar arasındaki gerçek dünya etkisi (elde tutma ağırlıklı —
               bkz. retention-and-churn.md)

Eşitliğe göre katmanlanmış sürüm:
  etki_grup_g = erişim_g × etkililik_g, yoksunluk beşte birliği /
  yaş bandı / dil grubu başına raporlanır
  eşitlik açığı = etki_üst beşte bir − etki_alt beşte bir

Dağılımsal maliyet-etkililik: QALY'lere alıcı grubuna göre eşitlik
ağırlıkları uygulayın — en kötü durumdakine bir QALY daha çok sayılır
(giderek ana akım olan bir HTA uzantısı).
```

## Çözümlü örnek

İki şekilde raporlanan dijital bir diyabet önleme programı:

```
Toplam: erişim %12, etki 0,02 QALY/katılımcı → uygun kişi başına 0,0024 QALY

Katmanlı (yoksunluk beşte birlikleri):
  Q1 (en az yoksun):  erişim %22, etki 0,02  → 0,0044
  Q5 (en çok yoksun): erişim %4,  etki 0,025 → 0,0010

Program en az yoksunlara 4,4× daha fazla sağlık sunuyor —
oysa Q5'in katılımcı başına etkisi DAHA YÜKSEK (daha çok pay).
Q5 katılımcı başına %20 daha pahalıya mal olan ve Q5 erişimini %12'ye çıkaran
destekli dijital kol (telefon koçluğu + toplumsal erişim) Q5 etkisini üç katına
çıkarır ve toplamı iyileştirir — burada eşitlik yatırımı verimlilik
yatırımının ta kendisidir.
```

## Yazılım mühendisliği bağlantısı

Erişim büyük ölçüde bir mühendislik eseridir: cihaz ve işletim sistemi taban gereksinimleri, bant genişliği varsayımları, dil desteği, erişilebilirlik uyumluluğu (WCAG), kimlik doğrulama engelleri ve yalnızca uygulama mağazası dağıtımı, her biri nüfusları paydadan çıkarır — genellikle görünmez biçimde, çünkü dışlanan kullanıcılar analizlerde hiç görünmez. Eşitliği hareket ettiren mühendislik uygulamaları: *paydayı* ölçün (yalnızca kullanıcıları değil uygun nüfusu araçlandırın); eski cihazlar ve kötü bağlantı için performans bütçeleyin; destekli dijital yolları (telefon, SMS, kiosk) utanç kanalları yerine birinci sınıf akışlar olarak gönderin; ve her pano metriğini eşitlik boyutlarına göre katmanlandırın — katmanlanmamış bir ortalama eşitsizliğin saklandığı yerdir ([GDS benimsemesi](../gds-hizmet-metrikleri/) aynı uyarıyı taşır).

## Tuzaklar

- **Tamamlayanlar üzerinde raporlanan etkililik, nüfuslar üzerinde iddia edilen etki** — erişim terimleri sessizce atılmış.
- **Tasarım girdisi yerine sonradan denetim olarak eşitlik**; erişimi sonradan eklemek, onun için tasarlamaktan çok daha pahalıdır.
- **Sürdürme amnezisi**: RE-AIM'in mHealth'teki en zayıf boyutu — kanıtın zaman ufkunu aşan etki iddiaları.
- Maliyeti dışlanan kullanıcılara ve ön saf personele kaydıran **yalnızca dijital kanal tasarrufları** (bkz. [GDS hizmet metrikleri](../gds-hizmet-metrikleri/)).

## Kaynaklar

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
