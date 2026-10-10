# Nüfusa Atfedilebilir Kesir (PAF)

PAF, bir nüfustaki bir hastalık veya sonucun yükünün belirli bir risk faktörü maruziyetine atfedilebilen oranıdır — maruziyet tamamen kaldırılsaydı ortadan kalkacak pay. "Bu risk faktörü olasılığınızı iki katına çıkarır"ı, bir komisyoncunun gerçekten etrafında plan yapabileceği nüfus düzeyinde bir sayıya çevirir: belirli bir maruziyetin kovalanmaya değer kaç vaka ve ne kadar maliyet olduğu.

## Neden önemli

Levin PAF'ı 1953'te dar, somut bir soruyu yanıtlamak için tanıttı: kimse sigara içmeseydi ne kadar akciğer kanseri ortadan kalkardı? Aynı aritmetik artık tütün ve obezite stratejilerinden DSÖ Küresel Hastalık Yükü çalışmasının risk faktörü sıralamalarına kadar her yerde ulusal önleme planlamasını boyutlandırır, çünkü göreli risk tek başına etki hakkında hiçbir şey söylemez — bir risk faktörü nadir bir olayın olasılığını iki katına çıkarıp nüfus hastalık yükünü zar zor oynatabilir, ya da yaygın bir olayın olasılığını yalnızca biraz artırıp yine de vakaların büyük bir payını açıklayabilir. PAF, "X risk faktörü tehlikeli"yi "X risk faktörünü kaldırmak yılda şu kadar vakayı önlerdi"ye çeviren şeydir; bir önleme programının iş gerekçesinin gerçekte ihtiyaç duyduğu sayı budur. Bu sayıyı elde ettikten sonra harekete geçmenin neye mal olduğu için bkz. [önleme ekonomisi](../önleme-ekonomisi/).

## Matematik

```
PAF = maruz_kalanların_yaygınlığı × (göreli_risk − 1) / (1 + maruz_kalanların_yaygınlığı × (göreli_risk − 1))

maruz_kalanların_yaygınlığı = nüfusun risk faktörüne maruz kalan kesri (0–1)
göreli_risk                 = sonucun maruz kalanlarda ve kalmayanlarda riski (örn. 2,5 = 2,5×)

Atfedilebilir vakalar = toplam_vakalar × PAF
```

PAF hem maruziyet yaygınlığıyla hem göreli riskle artar — çok yaygın bir maruziyete bağlı mütevazı yükselmiş bir göreli risk (diyelim 1,5×), nadir bir maruziyete bağlı çarpıcı bir göreli riskten (diyelim 5×) daha büyük bir PAF üretebilir. Göreli riskten ayrı bir sayı olarak var olmasının bütün nedeni budur.

## Çözümlü örnek

Bir risk faktörü nüfusun %30'unda mevcut (`maruz_kalanların_yaygınlığı = 0,3`) ve sonucun riskini 2,5 kat artırıyor (`göreli_risk = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (%31,0)

Nüfusta yılda 1.000 vaka ile:
Atfedilebilir vakalar = 1.000 × 0,3103 ≈ yılda 310 vaka
```

Bu sonucun yıllık yükünün üçte birinin hemen altı maruziyete atfedilebilir — onu tamamen ortadan kaldırmak (teorik tavan; hiçbir gerçek müdahale %100 maruziyet kaldırma başaramaz) her yıl 1.000 vakanın kabaca 310'unu önlerdi.

## Yazılım mühendisliği bağlantısı

PAF, "olay hacmimizin ne kadarı bu tek kök nedene atfedilebilir?"in epidemiyolojik sürümüdür — ekiplerin belirli bir dağıtım veya bağımlılık sınıfını, her olayı aynı şekilde düzeltmeye eşit değer saymak yerine toplam üretim olaylarına karşı boyutlandırırken sorduğu aynı biçimde bir soru. Dağıtımların büyük bir payında mevcut olup yalnızca mütevazı bir olay göreli riski taşıyan bir kök neden kategorisi, mühendislik çabasının önce nereye harcanacağı konusunda nadir, yüksek göreli riskli bir kategoriyi geçebilir — tam olarak PAF içgörüsü, çevrilmiş hâliyle.

## Tuzaklar

- **PAF'ları risk faktörleri arasında toplamak**: aynı sonucu etkileyen birden çok faktörün PAF'ları %100'e toplanmaz — toplamda onu aşabilir, çünkü faktörler etkileşir ve nedensel yolları paylaşır. Her PAF'ı "bu faktör tek başına kaldırılsaydı" olarak ele alın, asla toplam riskin bir bölünmesi olarak değil.
- **Bir göreli riski nüfuslar arasında nakletmek**: bir nüfusta tahmin edilen göreli risk (farklı temel maruziyet yaygınlığı, farklı karıştırıcılar), farklı bir nüfusun maruziyet yaygınlığına uygulandığında yanıltıcı bir PAF hesaplar.
- **PAF'ı maruz kalanlarda atfedilebilir riskle karıştırmak**: PAF nüfus düzeyindedir ve maruziyet yaygınlığına bağlıdır; maruz kalanlarda atfedilebilir risk bireysel düzeydedir ve değildir. Farklı soruları yanıtlarlar — birini diğerini yanıtlamak için alıntılamayın.

## Kaynaklar

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
