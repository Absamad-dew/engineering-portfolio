# PTCN — neural-network weight compression

[Русский](model-weights.ru.md) · [Research index](README.md) · [Result record](results.json)

My weight-compression work includes a **complete physical FP8 model package**, with exact restoration checks and a retained matched-runtime output check. The useful result is stored-size reduction with its loading cost visible.

## Complete OLMoE FP8 package

Retained technical report dated **2026-09-16**; **OLMoE 1B-7B FP8, RTX 5070**.

| Observation | Reference | PTCN result |
|---|---:|---:|
| Stored size | **7,127,449,856 B** of source FP8 tensors | **6,052,678,952 B** complete physical package, including required metadata (**−15.08%**) |
| Cold loading | **6.96 s**, raw FP8 path | **54.48 s**, PTCN path |
| Restoration checks | The selected FP8 representation | **3,072 restorations reported** |
| Paired output check | Same selected model/runtime comparison | **2,000 output token-ID pairs matched** |

The exactness boundary is the **already-selected FP8 representation**, not the original BF16 weights. The restoration count is the retained report's check count, not independent full-model runs; the ID pairs are output checks, not separate tasks or a broad quality score. Loading is slower in this result, so no general inference-speed advantage is claimed.

This is a physical-package outcome: the candidate figure includes required metadata, while the reference figure counts the source FP8 tensors. It is not a tensor-only candidate total or an estimate extrapolated from a small slice. Record: `PTCN-FP8-PACKAGE-20260916`.

## Evaluation brief

Further comparisons should retain checkpoint/runtime identity, complete required bytes, load-time peak memory, resident host/device memory and cold/warm loading as separate observations. Exact-parameter claims need a declared tensor inventory and restored payload identity; approximate comparisons need their own model-quality evaluation. The [official Safetensors metadata documentation](https://huggingface.co/docs/safetensors/en/metadata_parsing) gives a public reference for recording tensor names, types and shapes.

**Evidence:** author-retained technical results selected from the retained technical records; no independent replication or new execution is claimed. The [public JSON](results.json) preserves the selected scope and tradeoff. Implementation, protected methods and model artifacts remain closed.

[Inference-state research: PTKV](kv-cache.md) · [Exact-video research: ChronoField](chronofield.md)
