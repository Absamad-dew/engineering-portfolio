# PTC research results for November 2026

[Русский](recent-results.ru.md) · [All research](README.md) · [Portfolio](../README.md)

Five original projects by Absamad Manturov. The figures below come from author-run benchmarks, with the workload and comparison scope stated for each result.

| Project | Result |
| --- | --- |
| [PTC Simbol](#ptc-simbol) | Within 0.062 dB of AVIF in pooled PSNR across eight Full HD frames at a target of 0.2 bits per pixel and nearly identical total size. |
| [PTC RAM](#ptc-ram) | Freed 1,380 MiB of committed memory, including helper usage, in an audited run on 1.5 GiB of Chrome tab data. |
| [PTC Chat](#ptc-chat) | An archive of nine conversations was 8.84% smaller than Brotli 11, with byte-exact reconstruction and individual conversation access. |
| [PTC Mesh](#ptc-mesh) | Reduced geometry VRAM by 50.24% in an eight-model GPU scene with exact recovery of original attributes and indices. |
| [PTC Web](#ptc-web) | Compressed 125 resources from 50 websites from 34.71 MB to 3.28 MB, with byte-exact reconstruction. |

## PTC Simbol

Image compression for RGB and YUV. The comparisons use complete encoded files and compare decoded quality under a target byte budget.

- **YUV 4:2:0.** Eight 1920 × 1080 frames from different [Xiph](https://media.xiph.org/video/derf/) sequences, at a target of 0.2 bits per pixel. PTC Simbol Ultra totaled **392,188 bytes** and AVIF speed 4 totaled **392,789 bytes**. PTC Simbol was **0.062 dB lower** in pooled PSNR.
- **RGB.** Across 20 images, three budgets and full encoder runs, Ultra produced **+0.157 dB** in pooled PSNR and **−2.897 points** in mean SSIMULACRA2 versus AVIF 4:4:4. It scored higher on both metrics in **10 of 60** comparisons. At one RGB operating point near 0.6 bits per pixel, it gained **0.357 dB** and **0.773 SSIMULACRA2 points** at 153,820 bytes versus 153,825 bytes for AVIF.

## PTC RAM

A prototype for compressing and restoring memory from a background Chrome tab. Memory savings account for the helper process.

| Measurement | Result |
| --- | --- |
| Audited run on 1,536 MiB of tab data | Committed memory fell from **3,431.6 to 2,051.4 MiB**, freeing **1,380.2 MiB**. Restored data was checked byte for byte. |
| Identical 384 MiB snapshot | **42.38 MiB** for PTC RAM versus **52.64 MiB** for Zstd 3, a **19.5% smaller** package. |
| Separate ordinary wake trial at about 1.5 GiB | The first JavaScript response came **213.4 ms** after the wake request. The audited run in the first row took **424.2 ms** to first response. |

## PTC Chat

A byte-exact conversation archive with individual conversation access. The nine-conversation workload contains messages, code and tool outputs.

| Same input data | PTC Chat | Brotli 11, one frame per conversation |
| --- | ---: | ---: |
| Complete archive | **1,920,442 B** | 2,106,715 B |
| Median first request | 18.41 ms | 16.48 ms |

PTC Chat reduced archive size by **8.84%** and recovered all nine conversations byte for byte. First requests used fresh processes with normal OS file caching. Installed reader size is accounted for separately from the archive.

## PTC Mesh

GPU memory experiments for geometry and textures, measured on an RTX 4060 Laptop GPU.

- **Geometry.** On a Direct3D 11 scene with eight Khronos models and 249,933 triangles, local VRAM for geometry fell from **9.703 to 4.828 MiB** (−50.24%). Original indices and attributes were recovered exactly, and three verification frames matched. In the same run, GPU p95 increased from **0.0932 to 0.0983 ms**.
- **Textures.** On a separate harness with 167 DOGWALK textures, local texture VRAM fell from **658.42 to 555.13 MiB** (−15.7%). All 1,701 mip levels read back from the GPU matched their sources. A separate in-game DOGWALK trial freed **22.51 MiB**, with matching images at four verification viewpoints.

## PTC Web

Byte-exact compression of complete web resources. A 50-site workload of **125 HTML, CSS and JavaScript resources** took **3,283,286 encoded bytes**, from **34,712,469 input bytes**. The retained results record exact reconstruction of all 125 resources. A separate 20-resource check passed on both native and browser decoders. The size comparison counts encoded packages, with installed decoder size accounted for separately.
