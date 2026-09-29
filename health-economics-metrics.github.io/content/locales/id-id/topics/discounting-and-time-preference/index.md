# Diskonto dan Preferensi Waktu

Diskonto mengubah biaya dan manfaat masa depan menjadi nilai sekarang, karena manfaat hari ini bernilai lebih tinggi daripada manfaat yang sama dalam lima tahun.

## Mengapa ini penting

Setiap penilaian ekonomi kesehatan dan setiap kasus bisnis sektor publik yang serius mendiskontokan aliran multi-tahun. HM Treasury Green Book Inggris mewajibkan tingkat preferensi waktu sosial tahunan 3,5%; kasus referensi NICE mendiskontokan biaya dan efek kesehatan sebesar 3,5% per tahun. Jika kasus bisnis perangkat lunak Anda mengklaim "penghematan £5 juta selama 10 tahun," peninjau keuangan akan segera meminta angka yang didiskontokan.

## Matematika

Nilai sekarang dari jumlah masa depan:

```
PV = FV / (1 + r)^t

PV = nilai sekarang
FV = nilai masa depan pada tahun t
r  = tingkat diskonto (NICE/Green Book: 0,035)
t  = tahun dari sekarang
```

## Contoh yang diselesaikan

Perangkat lunak Anda menghemat £100.000 per tahun untuk sebuah trust NHS selama 5 tahun.

```
Total tanpa diskonto: £500.000
Total PV terdiskon ≈ £451.505
```

Judul yang jujur adalah sekitar £451.000, sekitar 10% lebih rendah dari jumlah naif. Sekarang misalkan pengiriman tertunda satu tahun: setiap suku bergeser satu tahun kemudian, dan PV turun menjadi sekitar £436.000 — ini adalah pandangan diskonto dari [biaya penundaan](../cost-of-delay/).

## Hubungan dengan rekayasa perangkat lunak

- **Pelunasan utang teknis dan migrasi platform** menjanjikan aliran manfaat bertahun-tahun ke depan; diskontokan sebelum membandingkannya dengan pekerjaan yang membayar kembali di kuartal ini.
- **Biaya di muka, manfaat di belakang** adalah bentuk standar dari migrasi. Diskonto secara tepat menghukum bentuk itu.
- **Klaim "penghematan di tahun ke-5"** patut diragukan dua kali lipat — mereka sangat didiskontokan dan sangat tidak pasti (lihat [analisis sensitivitas](../sensitivity-analysis/)).

## Jebakan

- **Mendiskontokan biaya tetapi bukan manfaat** (atau sebaliknya).
- **Menggunakan tingkat komersial (8–12%) dalam kasus sektor publik.**
- **Membingungkan diskonto dengan inflasi.**

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance.
