# Analisis Sensitivitas

Analisis sensitivitas deterministik (DSA) mengubah satu asumsi pada satu waktu dalam rentang yang masuk akal untuk melihat apakah kesimpulan tetap bertahan. Visualisasi standarnya adalah diagram tornado: parameter diberi peringkat berdasarkan seberapa besar mereka menggoyang hasil.

## Mengapa ini penting

Setiap model ekonomi dibangun di atas perkiraan — waktu yang dihemat, tingkat adopsi, biaya satuan. Penilaian teknologi kesehatan menolak menerima estimasi titik tunggal tanpa bukti bahwa kesimpulan tersebut kuat terhadap ketidaksepakatan yang wajar tentang input.

## Matematika

```
Hasil_rendah = Model(p = p_rendah, semua lainnya kasus dasar)
Hasil_tinggi = Model(p = p_tinggi, semua lainnya kasus dasar)
Ayunan(p) = |Hasil_tinggi − Hasil_rendah|
```

## Contoh yang diselesaikan

Asisten pengkodean AI untuk 200 pengembang. Waktu yang dihemat adalah parameter yang paling berpengaruh.

## Hubungan dengan rekayasa perangkat lunak

Insinyur sudah melakukan ini secara naluriah sebagai "bagaimana jika kita salah tentang X?"

## Jebakan

- **Rentang yang dipilih untuk menyenangkan.**
- **Melewatkan interaksi satu per satu.**

## Sumber

- York Health Economics Consortium glossary: deterministic sensitivity analysis.
- NICE health technology evaluations: the manual (PMG36).
