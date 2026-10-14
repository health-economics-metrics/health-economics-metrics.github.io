# Duyarlılık Analizi

Deterministik duyarlılık analizi (DSA), sonucun ayakta kalıp kalmadığını görmek için her seferinde bir varsayımı makul bir aralıkta değiştirir. Standart görselleştirme, parametrelerin sonucu ne kadar salladığına göre sıralandığı bir tornado diyagramıdır.

## Neden önemli

Her ekonomik model tahminler üzerine kuruludur — kazanılan zaman, benimseme, birim maliyetler. Sağlık teknolojisi değerlendirmesi, sonucun girdiler konusundaki makul anlaşmazlığa dayanıklı olduğunun kanıtı olmadan bir nokta tahminini ("YG %340") kabul etmeyi reddeder. Tornado diyagramı karar vericiye *hangi varsayımın sorgulanacağını* söyler: vaka yalnızca en tartışmalı parametre iyimser ucundayken işliyorsa, bunu herkes hemen görür.

Bu, sağlık ekonomisinden yazılım iş gerekçelerine aktarılacak en aktarılabilir tek alışkanlıktır.

## Matematik

Makul aralığı [p_düşük, p_yüksek] olan her parametre p için:

```
Sonuç_düşük = model(p = p_düşük,  diğer her şey temel durumda)
Sonuç_yüksek = model(p = p_yüksek, diğer her şey temel durumda)
Salınım(p)  = |Sonuç_yüksek − Sonuç_düşük|
```

Parametreleri salınıma göre sıralayın; temel durum sonucunun etrafına yatay çubuklar çizin. Varyantlar: iki yönlü DSA (iki parametreyi bir ızgarada değiştirme), eşik analizi (kararın döndüğü parametre değerini bulma).

## Çözümlü örnek

200 geliştirici için yapay zekâ kodlama asistanı. Temel durum: geliştirici/ay başına 39 £ lisans; geliştirici/gün başına 30 dk kazanılan; yüklü maliyet 60 £/saat; 220 çalışma günü.

```
Temel durum yıllık fayda = 200 × 0,5 sa × 220 × 60 £ = 1.320.000 £
Yıllık maliyet           = 200 × 39 £ × 12            = 93.600 £
Temel durum net          = 1.226.400 £
```

Tornado (her seferinde bir parametre):

```
Kazanılan zaman 0,1–1,0 sa/gün: net = 170.400 £ … 2.546.400 £   (salınım 2,38 milyon £) ← baskın
Yüklü maliyet 40–80 £/sa:       net = 786.400 £ … 1.666.400 £   (salınım 0,88 milyon £)
Çalışma günleri 200–240:        net = 1.106.400 £ … 1.346.400 £ (salınım 0,24 milyon £)
Lisans 30–50 £/ay:              net = 1.248.000 £ … 1.200.000 £ (salınım 48 bin £)
```

Eşik analizi: net fayda yaklaşık **günde 2,1 dakika** kazanımda sıfıra ulaşır. Karar lisans fiyatına duyarsızdır ve tamamen kazanılan zaman tahminine bağlıdır — bu yüzden onu ölçün, geri kalanını değil. (Ve sonucun kapasite olduğunu, nakit olmadığını unutmayın — bkz. [nakit serbest bırakan ve bırakmayan](../nakit-serbest-bırakan-ve-bırakmayan-tasarruflar/).)

## Yazılım mühendisliği bağlantısı

Mühendisler bu içgüdüyü zaten "X hakkında yanılıyorsak ne olur?" olarak yapar — DSA yalnızca onu sistematik ve görünür kılar. Her araç teklifine, kapasite planına ve yap-mı-satın-al analizine bir tornado diyagramı koyun. Kimin bağırsak hissinin doğru olduğu tartışmalarını, hangi parametrenin ölçülmeye gideceği konusunda anlaşmalara çevirir — çoğu kez bir pilotla, ki bunun değeri kendi başına fiyatlanabilir (bkz. [mükemmel bilginin beklenen değeri](../mükemmel-bilginin-beklenen-değeri/)).

## Tuzaklar

- **Pohpohlamak için seçilen aralıklar**: gerçek belirsizlikten bağımsız her girdi etrafında ±%10. Kazanılan zaman tahminleri ±%80, lisans fiyatları ±%10 hak eder.
- **Teker teker yöntemi etkileşimleri kaçırır** — korelasyonlu parametreler (benimseme ve kazanılan zaman) iki yönlü analiz veya tam [olasılıksal duyarlılık analizi](../olasılıksal-duyarlılık-analizi/) gerektirir.
- **Analizi yapıp yok saymak**: tornado vakanın tek bir yumuşak sayıya bağlı olduğunu söylüyorsa, sonraki adım onay değil ölçümdür.

## Kaynaklar

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
