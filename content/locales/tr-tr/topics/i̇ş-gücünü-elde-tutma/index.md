# İş Gücünü Elde Tutma

İş gücünü elde tutma ekonomisi, personel devrinin bir sağlık sistemine neye mal olduğunu — işe alım, uyum, boş kadro karşılama — ve dolayısıyla idari tükenmişliği azaltan yazılımın değerini nicelleştirir. Tekrarlayan idari veri görevlerinden kaynaklanan tükenmişlik, NHS'te personel devrinin ve hastalık devamsızlığının başlıca itici gücüdür.

## Neden önemli

Bir klinisyen ayrıldığında vakıf üç kez öder: yerine birini işe almak için (ilanlar, ajans ücretleri, mülakatlar), onu uyumlandırmak için (azalmış üretkenlikle geçen aylar, gözetim) ve bu arada boş kadroyu karşılamak için — genellikle Agenda for Change asıl ücret oranlarının 2–3 katında ajans veya geçici personelle (bkz. [kaçınılabilir dış kaynak maliyetleri](../kaçınılabilir-dış-kaynak-maliyetleri/) ve [sert nakit serbest bırakan tasarruflar](../sert-nakit-serbest-bırakan-tasarruflar/)). Devir maliyetleri gerçek nakit olduğundan, elde tutma iyileştirmeleri bir mali direktörün bankaya yatırabileceği az sayıdaki iş gücü faydasından biridir. İdari sürtünme, klinik tükenmişliğin en çok anılan itici güçleri arasında tutarlı biçimde yer alır; bu da onu yazılımla ele alınabilir bir maliyet yapar.

## Matematik

```
Ayrılan başına maliyet = işe alım maliyeti + uyum/üretkenlik yükselme maliyeti
                       + boş kadro karşılama primi × boş kadro süresi

Yıllık devir maliyeti = kadro × devir oranı × ayrılan başına maliyet

Yazılımın değeri = kadro × Δdevir oranı × ayrılan başına maliyet
                 + hastalık devamsızlığı azalması × karşılama maliyeti/gün
```

Nedensel zincirin iki tahmini halkası vardır — yazılım → tükenmişlik/sürtünme ve tükenmişlik → devir — bu yüzden her ikisini de kanıtlayın (öncesi/sonrası personel anketleri; yayımlanmış tükenmişlik-ayrılma ilişkileri) ve iddia edilen Δ'yı mütevazı tutun.

## Çözümlü örnek

Bir vakıf 1.200 hemşire istihdam ediyor; devir yılda %11. Ayrılan başına maliyet:

```
İşe alım ≈ 4.500 £;  uyum/yükselme ≈ 6.000 £
Boş kadro karşılama: 4 ay × ajans primiyle karşılanan 0,6 TAE ≈ 8.000 £
Toplam ≈ ayrılan başına 18.500 £
Temel devir maliyeti = 1.200 × 0,11 × 18.500 ≈ yılda 2,44 milyon £
```

Dokümantasyon yükü yazılımı (otomatik doldurulan değerlendirmeler, tek oturum açma, dikte) devri makul biçimde 1 yüzde puan oynatır:

```
Değer = 1.200 × 0,01 × 18.500 = yılda 222.000 £ nakitle ilgili
```

Personel anketi sürtünme puanlarıyla desteklenen 1 puanlık bir iddia inandırıcıdır; 4 puanlık bir iddia değildir. Δdevir üzerinde [tornado](../duyarlılık-analizi/) çalıştırın: modeldeki diğer her şeye baskın çıkar.

## Yazılım mühendisliği bağlantısı

Mühendislik elde tutma matematiği aynıdır ve daha kötü belgelenmiştir: kıdemli bir mühendisi değiştirmek 6–12 aylık yüklü maaşa mal olur (işe alım, yükselme, kaybolan bağlam), dolayısıyla %15 ayrılma oranlı 200 kişilik bir kuruluş her yıl devire milyonlar yakar. Geliştirici deneyimi yatırımı ([SPACE ve DevEx](../space-ve-devex/)), hemşireler için dokümantasyon yükü rahatlamasının doğrudan analogudur — ve aynı şekilde gerekçelendirilmelidir: ölçülen sürtünme puanları, ayrılma üzerinde mütevazı iddia edilen etki, kendi finans verilerinizden ayrılan başına maliyet. Kopyalanacak sağlık ekonomisi disiplini, insanların araçlar yüzünden "gerçekten" ayrılıp ayrılmadığını tartışmak yerine *ayrılanı dürüstçe maliyetlendirmektir*.

## Tuzaklar

- **Tüm devir hareketini müdahalenize atfetmek** — işgücü piyasaları devri yazılımdan çok daha fazla oynatır; kontrol grupları veya en azından sektör eğilimi ayarlaması kullanın.
- **Çifte sayım**: elde tutma tasarrufları ve ajans harcaması tasarrufları örtüşür (boş kadro karşılama ajans harcamasının *kendisidir*); kalemleri mutabık hale getirin.
- **Gecikmeyi yok saymak**: tükenmişlik güdümlü ayrılma, sürtünme değişikliklerine bir sonraki çeyrekte değil 1–2 yıl içinde yanıt verir.

## Kaynaklar

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
