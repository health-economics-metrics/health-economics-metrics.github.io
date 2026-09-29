# Biaya Peluang

Biaya peluang adalah nilai dari alternatif terbaik yang dikorbankan ketika mengalokasikan suatu sumber daya. Dalam sistem kesehatan dengan anggaran tetap, menghabiskan £1 juta untuk sesuatu berarti £1 juta nilai kesehatan tidak dihasilkan di tempat lain.

## Mengapa ini penting

Biaya peluang adalah gagasan paling mendalam dalam ekonomi kesehatan, dan gagasan yang paling sering diabaikan oleh insinyur perangkat lunak. Anggaran kesehatan kurang lebih tetap setiap tahunnya, sehingga teknologi baru tidak pernah dibiayai dari uang "ekstra" — ia selalu menggantikan sesuatu. Pembayar sebenarnya tidak bertanya "apakah ini hal yang baik?"; mereka bertanya "apakah ini lebih baik daripada apa yang sudah dibeli oleh uang yang sama?"

Inilah sebabnya ambang batas efektivitas biaya ada. Ambang batas tersebut adalah perkiraan kesehatan yang dapat dibeli dengan uang di batas sistem saat ini. Lihat [ambang batas kesediaan membayar](../willingness-to-pay-thresholds/).

## Matematika

Tidak ada satu rumus. Biaya peluang adalah aturan perbandingan:

```
Biaya peluang memilih A = nilai alternatif terbaik B yang dikorbankan
Keuntungan bersih dari A = nilai(A) − nilai(B)
```

Sebagai dasar empiris, Claxton et al. (2015) memperkirakan bahwa NHS menghasilkan satu QALY pada batasnya sekitar **£13,000**. Ini berarti membelanjakan £13,000 untuk teknologi yang menghasilkan kurang dari 1 QALY, meskipun teknologi itu "berhasil", membuat negara secara keseluruhan **kurang sehat**.

## Contoh yang diselesaikan

Sebuah trust NHS memiliki anggaran transformasi yang hanya dapat dibelanjakan untuk salah satu dari berikut ini:

- **Opsi A:** Perangkat lunak penjadwalan elektronik — menghemat £400.000 biaya agensi per tahun.
- **Opsi B:** Perangkat lunak koordinasi pemulangan — menghemat 2.000 hari tempat tidur per tahun. Biaya marginal sebenarnya dari hari tempat tidur yang dikosongkan sekitar £150, sehingga ini setara dengan £300.000 per tahun, ditambah manfaat pengobatan lebih awal bagi pasien yang menunggu.

Mendanai A berarti mengorbankan B. Biaya peluang A adalah £300.000 dari B ditambah manfaat pasien. Klaim bersih A seharusnya hanya perbedaan ini, bukan £400.000 wajahnya. Kasus bisnis yang membandingkan sebuah proposal dengan "tidak melakukan apa-apa" daripada alternatif terbaiknya, melebih-lebihkan nilainya.

## Hubungan dengan rekayasa perangkat lunak

Kapasitas rekayasa juga merupakan anggaran tetap — bukan dalam pound, tetapi dalam slot peta jalan. Tim platform yang mendanai Alat A yang menghemat £500 per jam insinyur, padahal Alat B dapat melakukan hal yang sama seharga £200 per jam, menghancurkan kapasitas dengan cara yang sama seperti sistem kesehatan yang mendanai obat £40.000/QALY dengan menggantikan perawatan £13.000/QALY. Disiplin ini berlaku langsung:

- Selalu nyatakan perbandingan secara eksplisit ("dibandingkan dengan apa?").
- Nilai waktu insinyur berdasarkan apa yang bisa dihasilkannya, bukan hanya gajinya.
- Perlakukan "anggaran tersisa" sebagai awal analisis, bukan akhirnya.

## Jebakan

- **Membandingkan dengan tidak melakukan apa-apa.** Perbandingan yang benar adalah penggunaan terbaik berikutnya dari uang tersebut, "tidak melakukan apa-apa" jarang menjadi itu.
- **Mengasumsikan biaya peluang waktu yang dihemat adalah nol.** Waktu yang dihemat hanya bernilai jika diinvestasikan kembali ke sesuatu yang berharga — lihat [penghematan pelepasan tunai vs bukan tunai](../cash-releasing-vs-non-cash-releasing/).
- **Mengabaikan perpindahan.** "Anggaran akan berkembang untuk mengakomodasinya" jarang benar dalam layanan kesehatan nasional atas dasar tahunan.

## Sumber

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary: opportunity cost. <https://yhec.co.uk/glossary/opportunity-cost/>
