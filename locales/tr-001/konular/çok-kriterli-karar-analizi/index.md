# Çok Kriterli Karar Analizi (MCDA)

Çok kriterli karar analizi (MCDA), tek bir ICER/ödeme istekliliği eşiğinin bir karar vericinin önemsediği her şeyi yakalamadığı sağlık teknolojisi değerlendirmesinde kullanılan ağırlıklı toplam puanlama modelidir: eşitlik, karşılanmamış ihtiyaç, yenilik, bütçe etkisi, hastalık şiddeti. Her kritere önemini yansıtan bir ağırlık verilir (paydaşlardan elde edilir, ağırlıklar toplamı 1), her seçeneğe kriter başına normalleştirilmiş bir puan verilir (genellikle 0–1) ve genel puan ağırlıklı toplamdır — bir yazılım satıcı seçimi puan kartıyla aynı matematiksel biçim.

## Neden önemli

MCDA, EVIDEM gibi çerçevelerde ve QALY başına maliyet eşiği yaklaşımının bir kararla ilgili her şeyi yakalamak için çok dar sayıldığı yetim/nadir hastalık değerlendirmeleri için bazı HTA kuruluşlarınca kullanılır. ISPOR MCDA Emerging Good Practices Task Force, ağırlıkları ve puanları savunulabilir biçimde elde etmeye yönelik iyi uygulama rehberliğini tam olarak gayriresmî ağırlıklandırılmış bir kararın kurması ve oynanması kolay olduğu için biçimselleştirdi. Bir sağlık teknolojisi gerçekten tek bir [ödeme istekliliği eşiğinin](../ödeme-i̇stekliliği-eşikleri/) temsil edemeyeceği değer boyutlarına — şiddet, yenilik, eşitlik — sahip olduğunda, MCDA karar vericilere bunları birleştirmek için söylenmemiş bir yargı yerine açık, denetlenebilir bir yapı verir.

## Matematik

```
MCDA puanı = Σ_i (ağırlık_i × puan_i)

ağırlıklar toplamı 1 olmalıdır (salıncak ağırlıklandırma veya
Analitik Hiyerarşi Süreci gibi paydaş yöntemleriyle elde edilir)
```

## Çözümlü örnek

Bir HTA komitesi bir dijital terapötiği dört kritere göre puanlıyor:

```
Kriter                              Ağırlık   Puan    Ağırlık × Puan
Klinik fayda                        0,4       0,8     0,32
Maliyet etkisi                      0,3       0,5     0,15
Hastalık şiddeti / karşılanmamış ihtiyaç 0,2  0,9     0,18
Yenilik                             0,1       0,6     0,06
                                     ─────             ─────
                                     1,0               0,71
```

Ağırlıklar toplamı 1,0 (0,4 + 0,3 + 0,2 + 0,1) ve MCDA puanı 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komite 0,71'i önceden kararlaştırılmış bir eşikle karşılaştırır veya aynı şekilde puanlanan rakip teknolojilere karşı sıralar.

## Yazılım mühendisliği bağlantısı

Bu, ağırlıklı bir satıcı seçimi puan kartı, bir RFP değerlendirme matrisi veya bir özellik önceliklendirme puanlama modeliyle tam olarak aynı matematiktir — yazılım tedarikinde klasik ağırlıklı puan kartı kullanım örneği için bkz. [yap mı satın al mı](../yap-mı-satın-al-mı/). [WSJF ve CD3](../wsjf-ve-cd3/) ile karşılaştırmak da yararlıdır: WSJF/CD3 *oran* temelli bir önceliklendirme yöntemidir (gecikme maliyeti bölü iş boyutu veya süre), MCDA ise ağırlıklı *toplam*dır. MCDA ve WSJF/CD3 "rakip seçenekleri nasıl sıralarız"a yapısal olarak iki farklı yanıttır ve belirli bir kararın gerçekte hangisini gerektirdiğini bilmek — bağımsız kriterler üzerinde toplanabilir değere karşı kıt kapasite birimi başına değer yoğunluğu — hangi formülün daha titiz göründüğünden daha önemlidir.

## Tuzaklar

- **Ağırlık elde etme yanlılığı**: ağırlıkları kim belirliyorsa sıralamayı fiilen önceden belirler, dolayısıyla bir "formül" siyasi veya ticari bir kararı nesnel bir hesaplama olarak aklayabilir. Ağırlıkları kimin ve nasıl belirlediğini belgeleyin.
- **Başka yerde zaten yakalanmış bir kriteri çifte saymak**: "maliyet-etkililik"i bir kriter olarak puanlarken "maliyet etkisi"ni de ayrıca puanlamak, kimsenin istemediği hâlde parayı diğer kriterlere göre aşırı ağırlıklandırır.
- **Sahte kesinlik**: iki ondalıklı ağırlıklı puan (0,71), altta yatan 0–10 paydaş derecelendirmelerinin desteklediğinden daha fazla titizlik ima eder ve bu derecelendirmelerdeki değerlendiriciler arası değişkenlik çoğu zaman hiç raporlanmaz.

## Kaynaklar

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
