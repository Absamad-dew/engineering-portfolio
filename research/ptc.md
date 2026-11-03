# PTC — JSON and structured-text compression

[Русский](ptc.ru.md) · [Research index](README.md) · [Result records](results.json)

My PTC work concerns exact compression of JSON and text, evaluated through complete output size and processing cost. Two retained studies show different operating points: a **48-file aggregate smaller than XZ, Brotli and Zstandard**, and **Max/Fast profiles on four small JSON inputs**.

## 48-file JSON aggregate

**84,024,193 input bytes → 9,235,511 compressed bytes.** The retained study reports exact restoration, determinism and corruption checks for **48/48 files**.

| Same-input baseline | Baseline bytes | PTC bytes | Reduction |
|---|---:|---:|---:|
| XZ preset 9 | 11,380,780 | 9,235,511 | **18.85%** |
| Brotli quality 11 | 11,667,610 | 9,235,511 | **20.84%** |
| Zstandard level 19 | 11,928,721 | 9,235,511 | **22.58%** |

This is an aggregate size result: large geographic JSON files materially affect the total, and PTC wins **14/48 individual files against Brotli**. This retained benchmark snapshot does not record completed release qualification. No speed result from a different run is attached to this size table. Record: `PTC-JSON48-20260809`, audit-recorded date 2026-08-09.

## One four-file study, two profiles

Same **112,491 input bytes**, four known small JSON tuning files, exact reconstruction; **16 physical / 32 logical processors, one warmup and five measured rounds**.

| PTC profile / its baseline | Compressed bytes, baseline → PTC | CLI encode ms, baseline → PTC | CLI decode ms, baseline → PTC |
|---|---:|---:|---:|
| Max / Brotli quality 11 | **16,298 → 10,672** (−34.52%) | 140.471 → 1081.497 | 46.109 → 75.821 |
| Fast / Zstandard level 19 | **17,589 → 16,728** (−4.90%) | **116.0021 → 80.0776** (1.45×) | — |

Max prioritizes size and is slower than its Brotli reference here. Fast produces a smaller output with lower recorded CLI encode time than its Zstandard reference. Timings include startup and I/O; PTC uses automatic thread selection, and the selected Brotli/Zstandard thread counts are not specified in this curated summary. These measurements describe this small-input CLI workload. A dash means no value is selected for this summary. Record: `PTC-JSON4-20260930`, audit-recorded date 2026-09-30.

## What the comparison must preserve

Exact text means original bytes, including whitespace and representation choices; JSON agreement after parsing is a different contract. [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259.html) supplies the format context. Complete size accounting includes required metadata/auxiliary data, and each profile retains its own time, memory and failure observations.

**Evidence:** author-retained measurements selected from reviewed retained evidence, not independent reproduction or new runs for this portfolio. The [machine-readable records](results.json) state scope, baselines and boundaries. Code, protected methods and corpus remain closed.

[ChronoField](chronofield.md) · [Standard-codec measurement tooling](https://github.com/Absamad-dew/compression-observatory)
