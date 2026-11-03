# PTKV — inference-state compression

[Русский](kv-cache.ru.md) · [Research index](README.md) · [Result records](results.json)

My PTKV work includes exact compression of selected Q4/FP8 cache state, live-session hibernation and repeat-session latency improvements. Storage while asleep, active GPU state and the first cold compression are measured as different conditions.

## Q4 storage: separate snapshot and live-session studies

Both retained reports are dated **2026-09-21**, on **RTX 5070**. Exactness is relative to the selected Q4 state; its earlier quantization remains a separate step.

| Study | Native Q4 reference → stored result | Reconstruction / scope |
|---|---:|---|
| Frozen snapshot, **131,047 tokens** | **452,898,432 → 362,312,621 B** (**−20.00%**) | **18/18 GPU SHA checks exact** |
| Live Qwen3.5-0.8B session, **256K context as reported** | **898,560,000 → 714,170,614 B** (**−20.52%**) | State and **1,024 continuation token IDs exact** |

The frozen study's separate previous-own-build decode comparison was **41.9434 → 42.1074 ms**; it establishes no decode-speed win. For the live study, first cold encoding took **61.378 s**, while wake was approximately **317–319 ms**. The stored backing is smaller while the session sleeps; native Q4 state returns to GPU memory on wake.

Records: `PTKV-Q4-SNAPSHOT-20260921` and `PTKV-Q4-LIVE-20260921`. Their populations and size/time reference paths remain distinct.

## Repeat hibernate/wake after context growth

Retained report dated **2026-09-22**: Qwen3.5-0.8B, selected FP8 cache, RTX 5070; **260,000 context tokens + 1,000 tokens before sleep + 1,000 after wake**.

| Observation | Reference → result | Boundary |
|---|---:|---|
| Repeated hibernate + wake cycle | **1681.55 → 637.85 ms** (**2.64×**) | Previous own version, same repeat-session workload |
| Candidate cycle parts | **302.36 ms hibernate + 335.49 ms wake** | Their sum is the candidate cycle |
| Process VRAM, active → asleep | **5120 → 3780 MiB**; **1340 MiB released** | Saving measured while asleep |
| Output check | **2,000 token IDs exact** | Retained session comparison |

This is repeat processing after growth, not first cold compression or a permanent reduction of active-attention memory. Record: `PTKV-FP8-REPEAT-20260922`.

## Evaluation brief

Compare cache payload and total CPU/GPU allocation separately, and retain context length, generation length and concurrency for each workload. Time to first token and time per output token answer different questions; see [MLPerf Inference definitions](https://github.com/mlcommons/inference_policies/blob/master/inference_rules.adoc) and the [Transformers cache documentation](https://huggingface.co/docs/transformers/en/cache_explanation). No MLPerf certification or submission is claimed.

**Evidence:** author-retained reports selected from the retained technical records, not independent replication or new runs. The [public records](results.json) preserve each baseline and reconstruction boundary. Private cache representations, algorithms and binaries are excluded.

[Weight compression: PTCN](model-weights.md) · [ChronoField](chronofield.md)
