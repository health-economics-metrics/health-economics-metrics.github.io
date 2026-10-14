# Fırsat Maliyeti

Fırsat maliyeti, bir kaynağı taahhüt ettiğinizde vazgeçtiğiniz en iyi alternatifin değeridir. Sabit bütçeli bir sağlık sisteminde bir şeye 1 milyon £ harcamak, 1 milyon £'lık sağlığın başka bir yerde *üretilmemesi* demektir.

## Neden önemli

Fırsat maliyeti sağlık ekonomisinin en derin fikridir ve yazılım mühendislerinin en sık atladığı fikirdir. Sağlık bütçeleri herhangi bir yılda sabittir, bu yüzden yeni bir teknoloji asla "ekstra" paradan finanse edilmez — bir şeyi yerinden eder. Bir ödeyicinin gerçekte sorduğu soru "bu iyi mi?" değil, "bu, aynı paranın şu anda satın aldığından daha iyi mi?" dir.

Maliyet-etkililik eşiklerinin hiç var olmasının nedeni budur: eşik, paranın mevcut sistemin marjinalinde satın aldığı sağlığın bir tahminidir. Bkz. [ödeme istekliliği eşikleri](../ödeme-i̇stekliliği-eşikleri/).

## Matematik

Tek bir formül yoktur; fırsat maliyeti bir karşılaştırma disiplinidir:

```
A'yı seçmenin fırsat maliyeti = vazgeçilen en iyi alternatif B'nin değeri
A'dan net kazanç = değer(A) − değer(B)
```

Ampirik kıyaslama: Claxton ve ark. (2015) NHS'in marjinalde bir QALY'yi kabaca **13.000 £**'a ürettiğini tahmin etti. Yani bir QALY'den azını üreten bir teknolojiye harcanan 13.000 £, teknoloji "çalışsa" bile ulusu *daha az* sağlıklı yapar.

## Çözümlü örnek

Bir NHS vakfının dönüşüm bütçesi şunlardan tam birini finanse edebilir:

- **Seçenek A**: e-vardiya planlama yazılımı — ajans personel harcamasında yılda 400.000 £ tasarruf sağlar.
- **Seçenek B**: taburcu koordinasyon yazılımı — yılda 2.000 yatak günü tasarruf sağlar. Gerçekten serbest kalan yatak günü başına yaklaşık 150 £ marjinal maliyetle bu yılda 300.000 £'dır, artı bekleyen hastalar için daha erken tedavi.

A'yı finanse etmek B'den vazgeçmek demektir. A'nın fırsat maliyeti B'nin 300.000 £'ı artı hasta faydasıdır; A için *net* vaka yalnızca farktır, A'nın manşet 400.000 £'ı değil. Bir teklifi en iyi alternatif yerine "hiçbir şey yapmama"ya karşı karşılaştıran her iş gerekçesi değerini abartır.

## Yazılım mühendisliği bağlantısı

Mühendislik kapasitesi de sabit bir bütçedir — pound değil yol haritası slotları. B aracı aynısını 200 £/saatte sunarken mühendis saati başına 500 £ tasarruf eden A aracını finanse eden bir platform ekibi, 40.000 £/QALY ilacı finanse eden bir sağlık sisteminin 13.000 £/QALY bakımı yerinden etmesi gibi kapasite yok ediyor. Disiplin doğrudan aktarılır:

- Her zaman karşılaştırıcıyı adlandırın ("neye karşı?").
- Mühendis zamanını yalnızca maaşla değil, aksi hâlde üreteceği şeyle değerleyin.
- "Bütçemiz kaldı"yı analizin sonu değil başlangıcı sayın.

## Tuzaklar

- **Hiçbir şeye karşı karşılaştırmak.** Doğru karşılaştırıcı paranın bir sonraki en iyi kullanımıdır; bu nadiren "hiçbir şey yapmama"dır.
- **Kazanılan zamanın sıfır fırsat maliyeti olduğunu varsaymak.** Kazanılan zaman yalnızca değerli bir şeye yeniden dağıtılırsa değerlidir — bkz. [nakit serbest bırakan ve bırakmayan tasarruflar](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/).
- **Yerinden etmeyi yok saymak.** "Bütçe sığacak şekilde genişleyecek" ulusal bir sağlık hizmetinde yıl içinde neredeyse hiç doğru değildir.
- **Yerinden edilen bir kaynağı hangi yöntemin değerlediğini yok saymak.** Özellikle hastalık, sakatlık veya ayrılan bir çalışandan kaynaklanan kayıp verimlilik için, bu fikrin verimlilik maliyetine özgü sürümü olan [insan sermayesi yaklaşımı ve sürtünme maliyeti yöntemi](../i̇nsan-sermayesi-yaklaşımı-ve-sürtünme-maliyeti-yöntemi/)ne bakın.

## Kaynaklar

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
