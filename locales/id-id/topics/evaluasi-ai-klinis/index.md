# Evaluasi AI Klinis

Statistik inti untuk mengevaluasi AI klinis atau model diagnostik: sensitivitas, spesifisitas, AUROC. Pelajaran ekonomi sentral: **AUROC yang hebat tidak membuat penerapan yang efektif biaya**.

## Mengapa ini penting

Regulator (FDA, MHRA) mengesahkan AI klinis pada **titik operasi yang terkunci**.

## Matematika

```
Sensitivitas = TP / (TP + FN)
PPV = TP / (TP + FP) ← bergantung pada prevalensi
```

## Contoh yang diselesaikan

Model yang sama, dua pengaturan: klinik spesialis (prevalensi 20%): PPV ≈ 76%; perawatan primer (prevalensi 1%): PPV ≈ 11,5%.

## Hubungan dengan rekayasa perangkat lunak

Bagi insinyur yang membangun atau membeli AI klinis: kirim matriks kebingungan pada prevalensi penerapan.

## Jebakan

- **Berbelanja AUROC.**

## Sumber

- Diagnostic accuracy measures reference.
