# Analisis Sensitivitas Probabilistik (PSA)

PSA memberikan distribusi probabilitas untuk setiap parameter yang tidak pasti, mengambil sampel semuanya secara bersamaan ribuan kali (Monte Carlo), dan melaporkan *probabilitas* bahwa suatu opsi adalah pilihan terbaik.

## Mengapa ini penting

Kasus referensi NICE *mewajibkan* PSA. Outputnya, **kurva penerimaan efektivitas biaya (CEAC)**, memplot probabilitas suatu opsi efektif biaya terhadap ambang batas kesediaan membayar.

## Matematika

```
Untuk setiap N sampel (N ≈ 10.000):
  Ambil sampel setiap parameter θ dari distribusinya
  Hitung NMB_j(θ) = λ × Efek_j(θ) − Biaya_j(θ) untuk setiap opsi j
```

## Contoh yang diselesaikan

Kasus bisnis migrasi platform. Manfaat bersih rata-rata £775 ribu; probabilitas bersih > 0 adalah 0,86.

## Hubungan dengan rekayasa perangkat lunak

Insinyur sudah mempercayai Monte Carlo untuk peramalan pengiriman.

## Jebakan

- **Distribusi sampah.**

## Sumber

- Fenwick E, Claxton K, Sculpher M. Health Economics 2001.
- NICE health technology evaluations: the manual (PMG36).
