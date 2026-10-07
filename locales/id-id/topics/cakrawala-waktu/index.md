# Cakrawala Waktu

Cakrawala waktu adalah periode di mana sebuah analisis menghitung biaya dan efek. Ini harus cukup panjang untuk menangkap setiap perbedaan yang berarti antara opsi yang dibandingkan.

## Mengapa ini penting

Memilih cakrawala yang pendek melewatkan manfaat yang muncul terlambat (pencegahan) atau biaya yang muncul terlambat (pemeliharaan). Cakrawala yang terlalu panjang mengubur segalanya dalam ketidakpastian. Penilaian teknologi kesehatan sering menggunakan cakrawala **seumur hidup** untuk pengobatan yang memengaruhi mortalitas. [Analisis dampak anggaran](../analisis-dampak-anggaran/) sengaja menggunakan cakrawala pendek **1–5 tahun**, karena pertanyaannya adalah keterjangkauan, bukan nilai.

## Matematika

```
Nilai sekarang bersih = Σ (t = 0 … T) [ (Manfaat_t − Biaya_t) / (1 + r)^t ]

T = cakrawala waktu (tahun)
r = tingkat diskonto
```

## Contoh yang diselesaikan

Sistem resep elektronik menghabiskan £2 juta untuk implementasi dan £200.000 per tahun untuk operasional. Ini mencegah kesalahan obat senilai £600.000 per tahun.

```
Cakrawala 1 tahun:  −£1.600.000
Cakrawala 5 tahun:  £0
Cakrawala 10 tahun: +£2.000.000
```

Sistem ini "gagal" pada cakrawala apa pun kurang dari 5 tahun dan "berhasil" pada 10 tahun. Tidak ada yang menjadi jawaban sebenarnya.

## Hubungan dengan rekayasa perangkat lunak

- **Evaluasi alat yang diukur dalam 1 sprint** secara sistematis melewatkan penurunan kurva pembelajaran.
- **Durasi kontrak ≠ cakrawala waktu manfaat.**
- **Kasus penggantian warisan** harus diperkirakan hingga akhir masa pakai sistem lama yang dapat dipercaya.

## Jebakan

- **Berbelanja cakrawala**: memilih cakrawala waktu di mana opsi Anda menang.
- **Cakrawala waktu yang berbeda per opsi** dalam perbandingan yang sama.
- **Cakrawala seumur hidup tanpa diskonto atau analisis ketidakpastian.**

## Sumber

- NICE health technology evaluations: the manual (PMG36).
- Sullivan SD, et al. Value in Health 2014.
