# Compression research

[Русский](README.ru.md) · [Engineering portfolio](../README.md)

I work on **JSON/text compression, neural-network weights, KV-cache state and video**. My focus is the complete operating point: stored bytes, reconstruction or quality, processing cost and memory under a declared workload. The research spans these distinct objects; each keeps its own baseline and acceptance boundary.

[November PTC results](recent-results.md) cover five additional workloads: image quality versus AVIF, live browser memory, conversation archives, geometry and textures, and web resources.

| Direction | Selected measured result | Technical brief |
|---|---|---|
| **PTC / structured text** | 48 JSON: **9,235,511 B vs XZ-9 11,380,780 B (−18.85%)**, exact checks 48/48; separate small-input Max/Fast points | [Size, speed and input scope](ptc.md) |
| **PTCN / neural-network weights** | Complete physical FP8 model package **15.08% smaller** than source FP8 tensor bytes; exact selected-representation checks, with a cold-loading tradeoff | [Full package, restoration and loading](model-weights.md) |
| **PTKV / KV cache** | Live Q4 session: stored backing **20.52% smaller**, with **1,024 exact continuation token IDs**; separate repeat-session result | [Stored state, wake and active-memory boundaries](kv-cache.md) |
| **Video and related-rendition storage** | ChronoField: **41.37% fewer bytes + 8.42× encode / 4.98× decode speed** at one exact-RGB Full-HD point | [ChronoField and author contribution](chronofield.md) |

The first three directions are also named in the [earlier public research scope](https://github.com/Absamad-dew/engineering-portfolio/blob/8663cd20ac13fd323d0f87346d682be12a5a9b5a/research/other-work.md). Their [six machine-readable result summaries](results.json) now give concrete retained outcomes, baseline values, dates/date basis and reconstruction scope. These are author-retained results selected from reviewed retained evidence; independent replication and new runs are not claimed. Evaluation briefs are labelled separately from measured results.

## ChronoField: an implemented public result

I founded ChronoField and independently designed and implemented its codec, family-storage system, benchmark harnesses and exactness tests. That author contribution is explicitly described in the [public investor deck, slide 11](https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/ChronoField-safe-investor-deck.pdf#page=11).

| Separate measured study | Published result |
|---|---|
| Three-source Full-HD aggregate vs strict-lossless AV1 `cpu-used=4` | **41.37% fewer bytes, 8.42× encode speed, 4.98× decode speed; exact RGB SHA-256** |
| Two excerpts / 20 related outputs, after individual compression | **45.14 MB → 7.38 MB complete catalog; 20/20 outputs exact** |

[Full result, hardware and scope](chronofield.md)

Code, protected methods, binaries and private corpora remain closed. Result summaries preserve population, baseline and reconstruction/quality scope. They do not combine different corpora into one frontier or turn a prepared-state measurement into cold performance.

[Standard-codec measurement tooling: Compression Observatory](https://github.com/Absamad-dew/compression-observatory) · [Other-work entry point](other-work.md)
