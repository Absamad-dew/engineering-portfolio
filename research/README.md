# Compression and systems R&D

My research direction is practical compression: size, processing time and exact reconstruction considered together. This portfolio presents already-public results from exact video/storage R&D and separate open-source measurement tooling.

## Public result: ChronoField

The [already-published ChronoField overview](https://github.com/Absamad-dew/chronofield-investor-materials/blob/4d45982819c7f0cca397dc834c53159c7ac31092/README.md) reports a three-source Full-HD aggregate against strict-lossless AV1 `cpu-used=4`:

| Metric | Reported result |
|---|---:|
| Compressed bytes | 41.37% fewer |
| Encode speed | 8.42× faster |
| Decode speed | 4.98× faster |
| Reconstruction check | Exact RGB SHA-256 |

The public overview also records 225 CFT-versus-AV1 size wins across 33 suites, and a separate related-rendition storage result of 7.38 MB versus 45.14 MB after individual compression. That latter result applies to known production rendition families. The source page gives the tested hardware, baseline and scope.

These are the author's retained measurements, with independent reproduction identified as the next milestone. Their value is the observed joint operating point on the compared material. No universal-codec claim is needed to inspect that result.

## What is open

[Compression Observatory](https://github.com/Absamad-dew/compression-observatory) is separate, newly written general-purpose tooling: standard-library codecs, synthetic/public-input measurements, exact round trips, weighted aggregation and Pareto reports. It demonstrates measurement discipline without exposing a private codec.

## What stays private

The ChronoField implementation and unpublished research remain private. This portfolio contains no private source, binaries, formulas, bitstream structure, dictionaries, research corpus or protected optimization technique.

[Back to portfolio](../README.md)
