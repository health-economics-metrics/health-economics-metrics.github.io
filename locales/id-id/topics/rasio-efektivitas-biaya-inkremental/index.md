# Rasio Efektivitas Biaya Inkremental (ICER)

ICER adalah biaya ekstra per unit ekstra efek kesehatan ketika memilih satu opsi dibandingkan alternatif terbaik berikutnya.

## Mengapa ini penting

Sistem kesehatan tidak pernah mengevaluasi teknologi secara terisolasi — selalu *secara inkremental*. NICE membandingkan ICER teknologi dengan ambang batas **£20.000–£30.000 per QALY**.

## Matematika

```
ICER = (Biaya_baru − Biaya_pembanding) / (Efek_baru − Efek_pembanding)
```

## Contoh yang diselesaikan

Layanan pemantauan jarak jauh untuk pasien gagal jantung: ICER = £12.000/QALY.

## Hubungan dengan rekayasa perangkat lunak

Disiplin ICER dapat diterapkan sepenuhnya pada keputusan rekayasa.

## Jebakan

- **Manipulasi pembanding.**
- **Membandingkan ICER lintas mata uang tanpa langkah konversi yang eksplisit**: ICER yang dihitung dalam mata uang suatu negara harus dikonversi dengan metode yang dinyatakan sebelum dibandingkan dengan ambang negara lain — lihat [perbandingan ICER lintas mata uang](../perbandingan-icer-lintas-mata-uang/) untuk alasan mengapa pilihan faktor konversi (paritas daya beli versus kurs pasar) dapat membalik keputusan adopsi dengan sendirinya.

## Sumber

- NICE: cost-effectiveness thresholds FAQ.
- York Health Economics Consortium glossary: ICER.
