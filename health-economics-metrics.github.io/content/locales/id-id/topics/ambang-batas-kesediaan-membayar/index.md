# Ambang Batas Kesediaan Membayar

Ambang batas kesediaan membayar (WTP) adalah jumlah maksimum yang akan dibayar pembuat keputusan per unit perolehan kesehatan.

## Mengapa ini penting

| Badan | Ambang batas |
|---|---|
| NICE (Inggris) | £20.000–£30.000 per QALY |
| ICER (AS) | $100.000–$150.000 per QALY |
| Kanada (CADTH) | ≈ CAD$50.000 per QALY |

## Matematika

```
Terima jika ICER = ΔC/ΔE < λ
```

## Contoh yang diselesaikan

Terapi digital Anda memberikan ICER £16.000/QALY.

## Hubungan dengan rekayasa perangkat lunak

Setiap organisasi rekayasa memiliki λ internal implisit.

## Jebakan

- **Berbelanja ambang batas antar yurisdiksi.**
- **Membandingkan ICER dalam mata uang lain dengan ambang tanpa mengonversinya lebih dulu**: lihat [perbandingan ICER lintas mata uang](../perbandingan-icer-lintas-mata-uang/) — metode konversi (paritas daya beli versus kurs pasar) menentukan secara metodologis, bukan detail pembulatan.
- **Mencampur penilaian berbasis λ dengan tradisi VSL/VPF pasar tenaga kerja**: keduanya berasal dari tradisi teoretis berbeda (metodologi yang dibatasi anggaran kesehatan versus preferensi terungkap dari pertukaran upah-risiko) dan tidak selalu kompatibel — untuk pendekatan preferensi terungkap alternatif dalam menilai nyawa, lihat [Nilai nyawa statistik](../nilai-nyawa-statistik/).

## Sumber

- NICE: changes to cost-effectiveness thresholds.
- Claxton K, et al. HTA 2015.
