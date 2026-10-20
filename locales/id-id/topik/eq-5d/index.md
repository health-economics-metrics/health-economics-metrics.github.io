# EQ-5D

EQ-5D adalah kuesioner standar dari grup EuroQol untuk mengukur kualitas hidup terkait kesehatan.

## Mengapa ini penting

Produk kesehatan digital apa pun yang ingin mengklaim QALY memerlukan utilitas dari instrumen yang divalidasi.

## Matematika

```
Status kesehatan = profil 5 digit, misalnya "21221"
Indeks utilitas = set_nilai(profil)
```

## Contoh yang diselesaikan

Sebuah aplikasi rehabilitasi muskuloskeletal mengukur EQ-5D-5L pada pendaftaran dan pada 6 bulan.

## Hubungan dengan rekayasa perangkat lunak

**Instrumenkan ini.**

## Jebakan

- **Sebelum/sesudah tanpa pembanding.**
- **Menganggap himpunan nilai sebagai sesuatu yang tak perlu dijelaskan**: nilai utilitas yang dikembalikan himpunan nilai itu sendiri digali dari masyarakat melalui studi time trade-off (atau survei pilihan terkait) — lihat [Penggalian utilitas dengan time trade-off (TTO)](../penggalian-utilitas-dengan-time-trade-off/) untuk caranya.

## Sumber

- EuroQol: EQ-5D-5L.
- NICE health technology evaluations: the manual (PMG36).
