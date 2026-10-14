# WSJF ve CD3

CD3 (Cost of Delay Divided by Duration — gecikme maliyeti bölü süre) ve WSJF (Weighted Shortest Job First — ağırlıklı en kısa iş önce), işi **değer yoğunluğuna** göre sıralayan önceliklendirme kurallarıdır: tüketilen kıt kapasite birimi başına ne kadar gecikme maliyetinin kaldırıldığı. Paylaşılan, sabit kapasite altında, en yüksek CD3 önce, toplam gecikme maliyetini en aza indirmek için matematiksel olarak en uygun dizilimdir.

## Neden önemli

Her biriktirme listesi bir paylaştırma sorunudur: çok sayıda değerli öğe, tek bir boru hattı. Sağlık ekonomisi aynı sorunu sağlık bütçeleri için maliyet-etkililik lig tablolarıyla çözdü — müdahaleleri pound başına kazanılan sağlığa göre sıralayın, bütçe tükenene kadar listeden aşağı finanse edin. CD3, teslimat kapasitesi için aynı mantıktır: *kısıtlı kaynağın* birimi başına fayda, sıra sırasıyla finanse edilir. Sıralamayı doğru yapmak bedava paradır — aynı iş, aynı kapasite, daha az toplam gecikme maliyeti.

## Matematik

```
CD3  = Gecikme Maliyeti (£/hafta) / Süre (hafta)      — gerçek birimler (Black Swan Farming)

WSJF = (kullanıcı-iş değeri + zaman kritikliği + risk azaltma/fırsat
        sağlama) / iş büyüklüğü                        — SAFe'in göreli ölçek vekili,
                                                        değiştirilmiş Fibonacci puanları
```

Gerçek para birimli CD3 ([gecikme maliyeti](../gecikme-maliyeti/)), WSJF'nin birimsiz puanlarından kesinlikle daha güçlüdür — WSJF, CD3'e göre çok kriterli puanlamanın tam [maliyet-fayda analizine](../maliyet-yarar-analizi/) göre olduğu şeydir: parasallaştırma pratik olmadığında kullanışlı, puanların çıpası olmadığında oyunlanabilir.

## Çözümlü örnek

Üç özellik, bir ekip:

```
Özellik   GM (£/hf)   Süre       CD3
A         30.000      10 hf      3.000
B         12.000      2 hf       6.000
C         5.000       1 hf       5.000
```

CD3 sırası: B, C, A. Toplam gecikme maliyetini "en büyük GM önce" (A, B, C) ile karşılaştırın:

```
CD3 sırası  (B,C,A): A 3 hf bekler, C 2 bekler → 30k×3 + 5k×2  = 100 bin £ gecikme maliyeti
GM sırası   (A,B,C): B 10 bekler, C 12 bekler  → 12k×10 + 5k×12 = 180 bin £
```

Aynı özellikler, aynı ekip — yalnızca sıralama 80.000 £ tasarruf ettirir. Sezgi: küçük, acil öğeler önce gider çünkü gecikme maliyetlerini ucuza serbest bırakırlar; büyük öğe kısa süre beklemekle az şey kaybeder.

## Yazılım mühendisliği bağlantısı

Sağlık yazılımı portföyleri için GM'yi bu deponun öğrettiği birimlerle ifade edin: QALY/hafta × eşik + operasyonel £/hafta ve biriktirme listesi, sağlık sisteminin satın aldığı diğer her şeyi nasıl sıraladığıyla doğrudan ölçülebilir hale gelir. İki uygulama notu: (1) süre, *kısıtı işgal eden takvim zamanı* demektir, efor değil — darboğaz ekibinin 2 gününü gerektiren 2 haftalık geçen süreli bir öğe göründüğünden daha ucuzdur (bkz. [aşağı akış kaynak optimizasyonu](../aşağı-akış-kaynak-optimizasyonu/)); (2) hastaneler ameliyathane listelerini aciliyet ağırlıklı verime göre sıraladıklarında aynı kuralı örtük olarak uygular — klinik önceliklendirme kategorileri şiddet ağırlıklı CD3'tür (bkz. [QALY açığı ve şiddet değiştiricileri](../qaly-açığı-ve-şiddet-düzenleyicileri/)).

## Tuzaklar

- **WSJF puan tiyatrosu**: birimsiz Fibonacci tartışmaları en yüksek sesle konuşana yakınsar; en azından biriktirme listesinin tepesindeki öğeleri gerçek GM'ye çıpalayın.
- **Süre oyunlaması**: CD3 sıralamasını şişirmek için öğeleri bölmek — bölümler bağımsız değer sunduğunda sorun yok, sunmadığında sahtekârlık.
- **Aciliyet profillerini yok saymak**: son tarih biçimli GM (düzenleyici tarihler) sabit oran varsayımını bozar; onları tarih fizibilitesine göre planlayın, geri kalanını CD3'leyin.
- **Yeniden sıralama savrulması**: CD3 taahhüt anındaki sıralama kararları içindir, süren işin günlük yeniden karıştırılması için değil (WIP hakkında bkz. [akış metrikleri](../akış-metrikleri/)).

## Kaynaklar

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
