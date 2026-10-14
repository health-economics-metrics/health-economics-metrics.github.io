# QALY Açığı ve Şiddet Düzenleyicileri

QALY açığı, bir hastalığın hastalardan genel nüfusa kıyasla ne kadar gelecek sağlık aldığını ölçer. NICE bunu **şiddet düzenleyicilerini** uygulamak için kullanır: nüfus ne kadar hastaysa, kazanılan her QALY o kadar değerlidir — standart eşiğin 1,7 katına kadar.

## Neden önemli

NICE'ın 2022 kılavuzundan beri şiddet, eski yaşam sonu primini değiştirerek sağlık kazançlarının değeri üzerinde açık bir çarpandır. Şiddetli bir durum için bir teknoloji, 30.000 £ yerine ~51.000 £/QALY'ye kadar etkin bir eşiğe karşı yargılanır. Yazılımınız ciddi biçimde etkilenmiş bir nüfusa hizmet ediyorsa (ileri kalp yetmezliği, ciddi akıl hastalığı), şiddet düzenleyicisi finanse edilebilir ve edilemez bir ekonomik vaka arasındaki fark olabilir — ve bunu iddia etmek için açık hesaplamasına ihtiyacınız var.

## Matematik

Mevcut standart bakımla kalan yaşam boyu üzerinden hesaplanan iki ölçü:

```
Mutlak açık   = QALY_genel_nüfus − QALY_hastalıkla
Orantılı açık = Mutlak açık / QALY_genel_nüfus
```

NICE 2022 ağırlıkları (daha yüksek ağırlık veren ölçü geçerlidir):

```
Ağırlık ×1,0: mutlak < 12 ve orantılı < 0,85
Ağırlık ×1,2: mutlak ≥ 12 veya orantılı ≥ 0,85
Ağırlık ×1,7: mutlak ≥ 18 veya orantılı ≥ 0,95
```

Ağırlık ΔE'yi (veya eşdeğeri eşiği) çarpar: etkin λ, ×1,2'de 24–36 bin £, ×1,7'de 34–51 bin £ olur.

## Çözümlü örnek

Ortalama yaşı 60 olan agresif bir durumu olan hastalar. 60 yaşındaki genel nüfus 14,2 iskontolu QALY bekler; mevcut bakım altında hastalıkla 2,1.

```
Mutlak açık   = 14,2 − 2,1 = 12,1  (≥ 12 → ×1,2'ye hak kazanır)
Orantılı açık = 12,1 / 14,2 = 0,852 (≥ 0,85 → yine ×1,2)
```

İzleme platformunuzun ICER'i 26.000 £/QALY — standart 20–30 bin £ orta nokta yargısının üzerinde, sınırda. ×1,2 ağırlıkla: etkin ICER = 26.000 / 1,2 ≈ **21.700 £/QALY** — rahatça finanse edilebilir. Açık hesaplaması kararı kaydırdı.

## Yazılım mühendisliği bağlantısı

Şiddet ağırlıklandırması, mühendislik kuruluşlarının içgüdüsel olarak yaptığı bir şeyin biçimsel sürümüdür: en kötü durumdaki sistemlere iyileştirme birimi başına daha çok harcamak. Aktarılabilir örüntü — her hizmetin "SLO açığını" hesaplayın (beklenen sağlıklı temel çizgisinin mutlak ve orantılı olarak ne kadar altında çalıştığı) ve iyileştirme değerini buna göre ağırlıklandırın. Bu, tartışmalar yerine aritmetikle, yanan eski sistemin neden sağlıklıdan kazanılan saat başına daha çok yatırım aldığını haklı çıkarır. Aynı yönetişim dersini de taşır: ağırlıkları önceliklendirme toplantısından *önce* yayımlayın, yoksa her ekip şiddet iddia eder.

## Tuzaklar

- **Açığı yanlış temel çizgiye karşı hesaplamak**: *mevcut standart bakım* altında ölçülür, tedavisiz doğal öykü değil.
- **Yaş duyarlılığı**: açık nüfus yaşına çok bağlıdır (daha genç hastaların kaybedecek daha çok QALY'si vardır → daha yüksek mutlak açık); tedavi edilen nüfusun gerçek yaş dağılımını kullanın.
- **Düzenleyicinin başka yerde geçerli olduğunu varsaymak** — bu bir NICE (İngiltere) mekanizmasıdır; diğer HTA kuruluşları şiddeti farklı ele alır (veya hiç almaz).

## Kaynaklar

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
