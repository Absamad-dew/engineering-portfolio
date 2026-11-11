# PTC: measured engineering results

[Русский](recent-results.ru.md) · [All research](README.md) · [Portfolio](../README.md)

Original codecs and systems prototypes by Absamad Manturov. These selected, completed comparisons cover image quality, web assets, live application memory, 3D and model state as of November 2026.

| Project | Key result |
| --- | --- |
| [PTC Simbol](#ptc-simbol) | Higher mean RGB PSNR than each of ten baseline SPCP presets on 30 CLIC 2025 photos at a 1.6 bits/pixel cap. |
| [PTC Web](#ptc-web) | 21.85% smaller than Brotli 11 across 125 resources from 50 sites, with byte-exact native and browser recovery. |
| [PTC JSON Max](#ptc-json-max) | Around 150× faster extraction than PAQ8px level 8, at 3.8% larger archive size in a paired four-JSON trial. |
| [PTC RAM](#ptc-ram) | Three consecutive restores of about 1.25 GiB of Chrome tab data; median first JavaScript response 174 ms. |
| [PTC Mesh](#ptc-mesh) | 45.1% less geometry VRAM at comparable frame time on a GPU harness; 9.5% less process VRAM in OpenArena. |
| [PTC Chat](#ptc-chat) | Random access to individual conversations. The fast profile took a first request from 76 to 14 ms versus the prior PTC profile while staying 8.6% smaller than Brotli 11. |

## PTC Simbol

An image codec. Three completed comparisons cover external photographs, a full matrix from a single build, and a separate regression set.

| Workload | Result |
| --- | --- |
| **30 [CLIC 2025 Test](https://archive.compression.cc/2025/tasks/#test-set) photos** | At a common **1.6 bits/pixel cap**, Ultra 9u6 achieved **0.81–3.49 dB higher mean per-image RGB PSNR** than each of ten baseline presets in the published [SPCP](https://fukushimalab.github.io/spcp/) comparison. AVIF AOM 4:2:0 **+0.84 dB**, AVIF SVT 4:2:0 **+0.90 dB**, JPEG XL VarDCT effort 10 **+0.81 dB**, WebP method 6 **+1.78 dB**. At 0.8 bits/pixel it reached **+1.06 dB** versus the same JPEG XL preset, with 28 wins out of 30. In a separate comparison at the PTC PSNR threshold, median PTC files were **16.3–20.4% smaller** than JPEG XL across 29–30 pairs depending on budget. |
| **20 Full HD images, 60 points, one Ultra 9uc build** | At three common caps on complete file size, higher pooled RGB PSNR than **each of nine tested presets** across AVIF, JPEG XL, WebP and JPEG, at no greater total size. Against AVIF 4:4:4 speed 4: **2.925% lower RGB MSE**, 44 wins out of 60, with each output no larger than its corresponding AVIF file. |
| **10 Full HD regression images, 20 points** | A separate lab series at 0.6 and 0.8 bits/pixel exceeded the same nine fixed presets in pooled RGB PSNR at lower total size. Against AVIF 4:4:4 speed 4: **+0.028 dB**; JPEG XL effort 9: **+1.28 dB**; WebP method 6: **+1.41 dB**. |

The CLIC comparison uses complete files under the same cap; actual file sizes vary. It uses published SPCP baseline measurements and is an author-run comparison on the test set, rather than a CLIC leaderboard entry. Some tuned AVIF 4:4:4 settings achieved higher PSNR, and the PSNR lead does not establish a lead on SSIMULACRA2.

## PTC Web

Byte-exact compression of complete HTML, CSS and JavaScript resources with native and browser decoding.

| Workload | PTC | Brotli 11 | Difference |
| --- | ---: | ---: | ---: |
| 50 sites, 125 resources, 34.71 MB input | 3,283,286 B | 4,201,050 B | **−21.85%**, smaller totals on 49 of 50 sites |
| 30 sites, 87 resources, 20.15 MB input | 1,843,061 B | 2,447,383 B | **−24.69%**, also **−30.84%** versus Zstd 19 |
| Separate check on 10 previously unseen sites, 28 resources | 721,264 B | 837,352 B | **−13.86%**, smaller totals on all ten sites |

Across the 50-site set, the median input needed to produce the first 12 KiB of HTML (or the whole file if shorter) was **3,075 B versus 3,683.5 B** for Brotli 11. This is a byte threshold. In the separate ten-site trial, Brotli completed full decoding faster. The table compares encoded packages, accounting for the installed decoder separately. With an alternative decoder build already installed, the same 125 packages totaled **3,064,600 B (−27.05% versus Brotli 11)**. First delivery including the browser decoder totaled 6,766,945 B, versus 6,758,149 B for the primary PTC build.

## PTC JSON Max

Byte-exact JSON compression. On four files previously used for tuning, the paired run produced **10,525 B versus 10,143 B** for PAQ8px level 8, with median end-to-end CLI extraction of **57.4 ms versus 8.43 s**. Median speedup across five paired rounds was **150.5×**, with exact reconstruction. The same PTC archives were **35.42% smaller than Brotli 11**.

On a separate **48-file, 84.02 MB JSON corpus**, Balanced produced **20.85% smaller archives than Brotli 11**, **18.85% smaller than XZ 9** and **22.58% smaller than Zstd 19**. All 48 files were recovered byte for byte. [JSON results](ptc.md)

## PTC RAM

Memory hibernation for a background Chrome tab on Windows. Savings include the helper process.

| Trial | Result |
| --- | --- |
| Three consecutive restores of about 1.25 GiB in the same renderer | **3 of 3**; **1,086.7–1,101.9 MiB** net savings; first JavaScript response in **165–176 ms**, median **174 ms**. Preparation took a median of 3.32 s and a maximum of 10.09 s. |
| Separate 1.5 GiB wake on an enlarged ECMAScript workload | **1,324.9 MiB** freed; first JavaScript response in **213.4 ms**. |
| Separate byte-audited 1,536 MiB trial | **1,380.2 MiB** freed; first JavaScript response with the audit in **424.2 ms**. |
| Same input bytes, 384 MiB snapshot | **42.38 MiB versus 52.64 MiB** for Zstd 3, a **19.5% smaller** package. The prepared 1.5 GiB snapshot was **18.2% smaller**. |

All 12 profile-by-site pairs across four public sites were **3.3–20.8% smaller** than Zstd 3 on identical bytes. A separate trial on a normal IMDb page freed **122.3 MiB**, with a first JavaScript response in **52.1 ms**.

## PTC Mesh

Exact 3D geometry compression for storage and GPU memory. The benchmarks below measure distinct modes and environments.

- **Geometry archives.** Across eight Khronos models, Fast was **24.54% smaller than meshoptimizer + Brotli 11** and decoded the set in **26.13 versus 53.19 ms**. Max produced an archive **30.83% smaller** than the same baseline.
- **GPU harness.** In Direct3D 11 on an RTX 4060 Laptop GPU, with 249,933 triangles, geometry VRAM fell from **9.703 to 5.328 MiB (−45.09%)** at comparable frame time. A denser profile achieved **−50.24% VRAM**, with GPU p95 5.49% higher than the uncompressed buffer in that series. Original indices and attributes were recovered exactly, and verification frames matched.
- **OpenArena.** Integrating model and map geometry reduced process VRAM from **169.98 to 153.82 MiB (−9.5%)**. Across eight adjacent pairs on the same timedemo, median paired differences were **+41.0% FPS and −28.9% p95**; all 193 verification frames matched.
- **DOGWALK textures.** A separate 167-texture harness freed **103.3 MiB (−15.7% texture VRAM)**; all 1,701 mip levels matched on GPU readback. A full-texture in-game trial freed **22.51 MiB**, with four matching frames. A separate experiment with the game paused and four fixed views freed **411.5 MiB (−29.6%)** by keeping full textures in system RAM; it was not tested during camera movement.

## PTC Chat

A byte-exact archive of nine conversations containing messages, code and tool outputs. Each conversation can be read individually; all nine were restored exactly.

| Profile | Result |
| --- | --- |
| Fast | **8.6% smaller than Brotli 11** with one compressed frame per conversation. Median first request fell from **75.99 to 13.99 ms** versus the prior PTC profile in one series; Brotli 11 was 14.15 ms in the same run. |
| Dense | **1,779,296 B** from 11.51 MB of input, **15.54% smaller** than separate Brotli 11 frames and **8.16% smaller** than one Brotli 11 stream. Median extraction took 934.1 ms. |
| Balanced | **1,920,442 B**, **8.84% smaller** than separate Brotli 11 frames, with at most 495,008 B read per request. Across repeat runs, median first request was **18.41 ms** versus 16.48 ms for Brotli. |

First-request tests used fresh processes with normal OS file caching.

## PTKV

Hibernating and restoring a live language-model session. At **260,000 context tokens**, the stored FP8 KV cache was **27.44% smaller** and hibernation freed **1,340 MiB of VRAM**. The repeat hibernate-and-wake cycle after context growth took **0.64 s instead of 1.68 s** versus the previous build. All **2,000 continuation token IDs** matched the control. [KV cache results](kv-cache.md)

## PTCN

Additional exact compression of quantized weights. On a **27B parameter** model, the NVFP4 tensor package fell from **23.44 to 20.80 GB (−11.28%)**. An integrated cached-generation trial used **1.14 GiB less peak VRAM**, with bitwise-identical logits. Generation ran at 2.614 versus 2.625 tokens/s. [Model weights results](model-weights.md)

## ChronoField

Exact video. Across three Full HD sources, files were **41.37% smaller**, with encoding **8.42×** and decoding **4.98×** faster than strict-lossless AV1. A separate profile on one Full HD source produced **37.87% fewer bytes and 45.63× faster encoding** against the same baseline. Original RGB frames were recovered byte for byte. In a separate trial, storing 20 related renditions took **7.38 MB rather than 45.14 MB** for separate ChronoField files. [Video results](chronofield.md)
