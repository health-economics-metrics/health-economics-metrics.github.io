# Hasil yang Dilaporkan Pasien (PROM, PREM, MCID)

PROM adalah instrumen standar di mana pasien melaporkan status kesehatan mereka sendiri. **MCID** adalah perubahan skor terkecil yang benar-benar dianggap bermanfaat oleh pasien.

## Mengapa ini penting

PROM adalah mata uang kemanjuran utama untuk kesehatan digital.

## Matematika

```
Kerangka tingkat respons:
  responden = pasien yang meningkat ≥ MCID
  NNT = 1 / (tingkat_respons_pengobatan − tingkat_respons_kontrol)
```

## Contoh yang diselesaikan

Aplikasi dukungan depresi, RCT vs daftar tunggu: NNT ≈ 4.

## Hubungan dengan rekayasa perangkat lunak

PROM adalah masalah pengumpulan data yang secara unik dapat dipecahkan perangkat lunak. Untuk instrumen khusus produktivitas kerja, lihat [WPAI](../produktivitas-kerja-dan-gangguan-aktivitas/).

## Jebakan

- **Signifikansi statistik di bawah MCID.**

## Sumber

- MCID estimation review (EQ-5D).
- Kroenke K, et al.
