# Kazanılan Yatak Günleri

Yatak günü, bir hastanın bir hastane yatağını bir gün boyunca işgal etmesidir. Daha erken taburculuk, yatış önleme veya sanal servislerle "kazanılan yatak günleri", NHS dijital iş gerekçelerinin iş atı faydasıdır ve en sık fazla değerlenen faydadır.

## Neden önemli

Yataklar akut bakımın bağlayıcı kısıtıdır: yataklar dolduğunda elektif cerrahi iptal edilir, ambulanslar sıra bekler ve acil servis tıkanır. Yatak günlerini serbest bırakan müdahaleler bu yüzden gerçek değer taşır — ancak değerin *türü* serbest kalan yatağa ne olduğuna tamamen bağlıdır. Mali müdürler saf yatak günü iddialarını ağır biçimde iskonto etmeyi öğrendi; bu aritmetiği doğru yapmak bir güvenilirlik sınavıdır.

## Matematik

```
Kazanılan yatak günleri = etkilenen hastalar × Δ yatış süresi (veya kaçınılan yatışlar × ortalama yatış süresi)

Değer, serbest kalan kapasitenin kullanımına bağlıdır:
  elektif faaliyetle yeniden doldurulur → değer = faaliyet geliri veya bekleme listesi faydası
  servis kapatılır / küçültülür         → değer = serbest kalan personel + işletme maliyeti (nakit)
  gevşeklik olarak emilir               → değer ≈ yalnızca marjinal (otel) maliyet, 50–150 £/gün
```

Akut bir yatak gününün tam dağıtılmış ortalama maliyeti sıklıkla 400+ £ olarak anılır (Ulusal Maliyet Derlemesi tarihsel olarak fazla yatak günleri için ~350 £) — ama bkz. [marjinal ve ortalama maliyet](../marjinal-ve-ortalama-maliyet/): ortalama neredeyse hiçbir zaman tasarruf değildir.

## Çözümlü örnek

Uzaktan izlemeli bir "sanal servis", yılda 600 hastanın 2 gün erken eve gitmesini sağlıyor: 1.200 yatak günü kazanıldı.

- **Saf iddia**: 1.200 × 400 £ = 480.000 £. Bir servis kapanmadıkça yanlış.
- **Dürüst iddia**: vakıf yatakları elektif ortopedi hastalarıyla doldurur. 1.200 yatak günü ÷ ortalama 3 günlük yatış = faaliyete dayalı ödeme altında ~6.000 £ gelirli 400 ek elektif dönem = **2,4 milyon £ ek fonlu faaliyet** (bu hastaları tedavi etmenin marjinal maliyeti düşüldükten sonra), *artı* bekleme listesinden çıkan 400 hasta. Sanal servisin işletme maliyeti (350.000 £) bundan mahsup edilir.

*Yeniden kullanılan* serbest kapasite çoğu kez saf nakit iddiasından daha değerlidir — ama farklı türde bir değerdir ve öyle etiketlenmelidir ([nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/)).

## Yazılım mühendisliği bağlantısı

"Kazanılan sunucu günleri" aynı şekilde davranır. Her zaman açık ortamları kullanımdan kaldırmak yalnızca örnekler sonlandırıldığında veya rezervasyonlar sona erdiğinde nakit serbest bırakır; havuza geri emilen kapasite marjinal maliyeti kadar değerlidir (taahhütlü harcamada ~0). Paralel disiplin: talep edilen her tasarruf için *mekanizmayı* adlandırın — sonlandırıldı, değerli işle yeniden dolduruldu veya buharlaştı. Hastane yatış süresini azaltan yazılım (taburcu koordinasyonu, uzaktan izleme, tanı geri dönüş süresi) üç senaryoyu da modellemeli ve vakfın servis başına seçmesine izin vermelidir.

## Tuzaklar

- Marjinal kapasitenin **ortalama maliyetle değerlenmesi** — klasik hata.
- **Çifte sayım**: aynı serbest kalan yataktan kazanılan yatak günleri *ve* kaçınılan yatışlar *ve* bekleme listesi azalması.
- **Kazanılan günlerin pahalı günler olduğunu varsaymak**: yatışın sonunda kazanılan günler en ucuz (düşük akuite) günlerdir.

## Kaynaklar

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
