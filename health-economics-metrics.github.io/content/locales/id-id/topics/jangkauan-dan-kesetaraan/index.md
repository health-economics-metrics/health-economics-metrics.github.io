# Jangkauan dan Kesetaraan

RE-AIM — Jangkauan, Efektivitas, Adopsi, Implementasi, Pemeliharaan — adalah kerangka kerja standar untuk menilai dampak *populasi* dari suatu intervensi. Matematika sentralnya: **dampak kesehatan masyarakat ≈ jangkauan × efektivitas**.

## Mengapa ini penting

Tinjauan sistematis yang menerapkan RE-AIM pada mHealth menemukan tanda tangan yang konsisten: jangkauan dan adopsi yang kuat, **efektivitas dan pemeliharaan yang lemah**. Untuk ukuran statistik formal ketimpangan kesehatan sosial-ekonomi, lihat [indeks konsentrasi](../indeks-konsentrasi/).

## Matematika

```
Dampak populasi ≈ jangkauan × efektivitas
  jangkauan = peserta / populasi yang memenuhi syarat
  efektivitas = dampak dunia nyata di antara peserta

Versi berstrata kesetaraan:
  dampak_grup_g = jangkauan_g × efektivitas_g, dilaporkan per kuintil kekurangan
```

## Contoh yang diselesaikan

Program pencegahan diabetes digital, dilaporkan dengan dua cara:

```
Agregat: jangkauan 12%, dampak 0,02 QALY/peserta → 0,0024 QALY/orang yang memenuhi syarat

Berstrata (kuintil kekurangan):
  Q1 (paling tidak kekurangan): jangkauan 22%, dampak 0,02 → 0,0044
  Q5 (paling kekurangan): jangkauan 4%, dampak 0,025 → 0,0010
```

Program ini memberikan 4,4× lebih banyak kesehatan kepada yang paling tidak kekurangan.

## Hubungan dengan rekayasa perangkat lunak

Jangkauan pada dasarnya adalah artefak rekayasa: persyaratan minimum perangkat dan OS, asumsi bandwidth, dukungan bahasa.

## Jebakan

- **Efektivitas yang dilaporkan pada penyelesai, dampak yang diklaim pada populasi.**

## Sumber

- RE-AIM framework.
- RE-AIM systematic reviews of mHealth.
