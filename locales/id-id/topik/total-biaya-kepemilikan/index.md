# Total Biaya Kepemilikan (TCO)

TCO adalah biaya penuh suatu sistem selama masa pakainya: akuisisi atau pembangunan, integrasi, operasi, pemeliharaan. Garis dasar yang tidak nyaman: **pemeliharaan adalah 50–80% dari TCO perangkat lunak**.

## Mengapa ini penting

Penilaian teknologi kesehatan telah lama belajar bahwa harga obat bukanlah biayanya.

## Matematika

```
TCO = biaya awal + Σ_t [operasi + pemeliharaan + dukungan]_t / (1 + r)^t
```

## Contoh yang diselesaikan

Dua opsi untuk sistem e-observasi, cakrawala 5 tahun: TCO tanpa diskonto £1.090.000 vs £2.030.000.

## Hubungan dengan rekayasa perangkat lunak

Insinyur meremehkan data pemeliharaan bidang mereka sendiri saat mengadvokasi pembangunan. Angka TCO multitahun seperti di atas adalah jumlah banyak butir biaya sepanjang waktu — lihat [agregasi biaya yang aman terhadap mata uang](../agregasi-biaya-yang-aman-terhadap-mata-uang/) untuk alasan mengapa jumlah itu sebaiknya desimal eksak, bukan floating-point, begitu model harus cocok hingga ke sen, dan [alokasi biaya tepat hingga sen](../alokasi-biaya-tepat-hingga-sen/) untuk membagi total TCO ke pusat-pusat biaya tanpa kehilangan sen.

## Jebakan

- **Menambatkan biaya peluncuran.**

## Sumber

- IBM, total cost of ownership.
- Software maintenance cost benchmarks.
