# Artımlı Maliyet-Etkililik Oranı (ICER)

ICER, bir seçeneği bir sonraki en iyi alternatife tercih ettiğinizde ek sağlık etkisi birimi başına ek maliyettir. Sağlık teknolojisi değerlendirmesinin manşet sayısıdır. (Etki birimi QALY olduğunda artımlı maliyet-yarar oranı, ICUR de denir.)

## Neden önemli

Sağlık sistemleri bir teknolojiyi asla izole değerlendirmez — her zaman *artımlı olarak*, aksi hâlde yapılacak şeye karşı. NICE bir teknolojinin ICER'ini **QALY başına 20.000–30.000 £** eşiğiyle karşılaştırır; ABD ICER enstitüsü 50.000–200.000 $/QALY boyunca raporlar; Kanada kabaca 50.000 CAD/QALY ile çalışır. Ürününüzün ulusal bir sağlık hizmeti için "değer" olup olmadığı, biçimsel olarak ICER'inin yerel eşiği geçip geçmediğidir. Bkz. [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/).

## Matematik

```
ICER = (Maliyet_yeni − Maliyet_karşılaştırıcı) / (Etki_yeni − Etki_karşılaştırıcı)
     = ΔM / ΔE
```

Yorumlama kuralları:

- ΔM < 0, ΔE > 0: yeni seçenek **baskındır** — daha ucuz ve daha iyi; oran gerekmez.
- ΔM > 0, ΔE > 0: ICER'i hesaplayın, λ eşiğiyle karşılaştırın; ICER < λ ise benimseyin.
- ΔM > 0, ΔE < 0: yeni seçenek baskın kılınmıştır — reddedin.
- Oranlar ΔE = 0 yakınında kötü davranır — sıralama için [net parasal fayda](../net-parasal-fayda/)yı tercih edin.

Karşılaştırıcı *bir sonraki en iyi baskın olmayan seçenek* olmalıdır, "hiçbir şey yapmama" değil — bkz. [baskınlık ve verimlilik sınırı](../baskınlık-ve-verimlilik-sınırı/).

## Çözümlü örnek

Kalp yetmezliği hastaları için bir uzaktan izleme hizmeti, yılda 1.000 hasta başına, olağan bakıma karşı:

```
Maliyetler: hizmet 900.000 £; kaçınılan yatışlar 600.000 £ tasarruf sağlar
            ΔM = 900.000 − 600.000 = 300.000 £
Etkiler:    daha erken müdahale 25 QALY kazandırır
            ΔE = 25

ICER = 300.000 / 25 = QALY başına 12.000 £
```

12.000 £/QALY, NICE'ın 20.000 £ eşiğinin rahatça altında — güçlü bir vaka. *Net* maliyetin nasıl önemli olduğuna dikkat edin: 600.000 £'lık mahsup olmasaydı ICER 36.000 £/QALY olurdu ve vaka muhtemelen başarısız olurdu. Maliyet mahsupları ve kanıt kaliteleri bu analizlerin kazanıldığı ve kaybedildiği yerdir (bkz. [kaçınılan aşağı akış maliyetleri](../kaçınılan-aşağı-akış-maliyetleri/)).

## Yazılım mühendisliği bağlantısı

ICER disiplini mühendislik kararlarına bütünüyle aktarılır:

```
(seçenek B maliyeti − seçenek A maliyeti) / (sonuç B − sonuç A)
```

— ek dağıtım başına, kazanılan mühendis saati başına, kaçınılan olay başına artımlı maliyet — her zaman bir sonraki en iyi alternatife karşı, hiçbir şey yapmamaya karşı değil. Çalmaya değer iki alışkanlık: (1) *karşılaştırıcıyı açıkça adlandırın*; çoğu araç YG iddiası sessizce bir korkuluğa karşı karşılaştırır; (2) *önce maliyetleri netleştirin* — 100 bin £'a mal olan ama mevcut 80 bin £'lık harcamayı yerinden eden bir araç için ΔM = 20 bin £'dır.

## Tuzaklar

- **Para birimleri arasında açık bir dönüştürme adımı olmadan ICER karşılaştırmak**: bir ülkenin para biriminde hesaplanan ICER, başka bir ülkenin eşiğiyle karşılaştırılmadan önce belirtilmiş bir yöntemle dönüştürülmelidir — dönüşüm faktörü seçiminin (satın alma gücü paritesi ve piyasa döviz kuru) kendisinin benimseme kararını nasıl çevirebileceği için bkz. [para birimleri arası ICER karşılaştırması](../para-birimleri-arası-icer-karşılaştırması/).
- **Karşılaştırıcı oyunları**: eski veya yapay olarak kötü bir temel çizgiyle karşılaştırmak ΔE'yi şişirir ve ICER'i pohpohlar.
- **Artımlar yerine ortalamalar**: tüm bir programın QALY başına maliyeti, onu genişletmenin veya benimsemenin ICER'i değildir.
- **Nokta tahmini tapınması**: ICER'ler iki belirsiz farkın oranlarıdır; belirsizliği [PSA ve CEAC'lerle](../olasılıksal-duyarlılık-analizi/) raporlayın.
- **Negatif ICER'ler belirsizdir** (daha-ucuz-ve-daha-iyi ile daha-pahalı-ve-daha-kötü aynı işareti verir) — hangi çeyrek olduğunu söylemeden asla negatif ICER raporlamayın.

## Kaynaklar

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
