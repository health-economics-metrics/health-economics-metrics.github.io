# Metrik Kualitas AI

Metrik untuk kebenaran output yang dihasilkan AI: keandalan/pengukuhan, dan **tingkat halusinasi**. Dalam pengaturan kesehatan ini bukan nuansa kualitas — ini adalah tingkat bahaya.

## Mengapa ini penting

Tolok ukur domain medis telah mengukur **tingkat halusinasi di atas 60%** untuk LLM yang tidak berdasar pada tugas medis.

## Matematika

```
Tingkat halusinasi = output yang mengandung konten tidak didukung/salah / total output
```

## Contoh yang diselesaikan

Asisten pengkodean klinis AI memproses 200.000 episode/tahun: kesalahan yang mencapai pengajuan 600/tahun.

## Hubungan dengan rekayasa perangkat lunak

Perlakukan kualitas model seperti ekonomi cakupan pengujian dengan disiplin tingkat kesehatan.

## Jebakan

- **Substitusi tolok ukur-ke-produksi.**

## Sumber

- Hallucination evaluation methods and metrics.
