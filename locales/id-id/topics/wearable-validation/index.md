# Validasi Wearable

Metrik validasi mengukur seberapa baik pengukuran wearable sesuai dengan standar emas klinis: **MAPE**, korelasi kesesuaian, kesepakatan Bland-Altman — bersama dengan metrik operasional: **kepatuhan waktu pemakaian** dan **kelengkapan data**.

## Mengapa ini penting

Validasi adalah prasyarat untuk semua hal hilir. Ambang batas yang diterima bidang ini untuk detak jantung: **MAPE ≤5%** (ketat) atau **≤10%** (longgar) terhadap EKG.

## Matematika

```
MAPE = (1/n) Σ |diukur_i − referensi_i| / referensi_i × 100
```

## Contoh yang diselesaikan

Program bangsal virtual memilih wearable pemantauan. Kandidat A: MAPE istirahat 2,1%, MAPE olahraga 11,4%. Kandidat B: istirahat 3,8%, olahraga 6,9%.

```
Kasus penggunaan: deteksi pasien yang memburuk di rumah — peringatan
dipicu pada detak jantung tinggi yang berkelanjutan, sering selama aktivitas.
Angka utama kandidat A (2,1%) memenangkan brosur; kandidat B memenangkan
kasus penggunaan: pada kondisi yang relevan dengan peringatan (gerakan),
kesalahan A sebesar 11,4% tersebar di seluruh rentang ambang batas peringatan.
```

## Hubungan dengan rekayasa perangkat lunak

Insinyur mengonsumsi data validasi saat memilih sensor dan *menghasilkannya* saat membangun fitur pengukuran.

## Jebakan

- **MAPE agregat menyembunyikan kegagalan spesifik kondisi.**

## Sumber

- Consumer wearable HR validation (Oura Gen 3/4).
- Wearable validity thresholds (MAPE standards).
