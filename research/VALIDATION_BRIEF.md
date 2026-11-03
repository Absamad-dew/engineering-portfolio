# Independent black-box validation brief

**Status: proposed next validation, not a completed independent result.**

The published ChronoField comparisons motivate a controlled external run. This brief defines a repeatable check while preserving the closed implementation. It describes ordinary evaluation practice, not codec mechanisms.

## What to establish

For an agreed exact-video workload, measure compressed bytes, encode time, decode time and exact reconstruction on the same inputs and host. Report every selected input, including ties, failures and regressions. Keep individual-stream compression and related-rendition family storage as separate studies.

## Before running

1. Agree the scope and select permitted inputs before measuring. Record source URLs or agreed identifiers, hashes, dimensions, frame counts, pixel format and any conversion. Include content selected by the independent evaluator.
2. Freeze candidate build identity, baseline build/version, commands and settings. Define the exact bytes or canonical RGB frames that must reconstruct. Container, metadata and family-catalog overhead are included in the appropriate size measurement.
3. Record hardware, OS, threads, memory, power conditions and software dependencies. Keep input preparation, process startup, warm/cold state and codec-only work explicit. Use the same measurement boundaries for both paths.

## Run and retain

- Validate reconstruction for every measured output. A mismatched output is a failed case, regardless of its size or speed.
- Run a warmup and multiple paired repetitions with controlled background load and a stated run order. Preserve all raw elapsed times, repetitions and exit statuses.
- Publish per-input rows and aggregate the same population. State whether an aggregate is a ratio of byte totals, total elapsed time or another declared calculation. A best profile from one corpus cannot supply the speed of a different profile/corpus.
- Capture peak memory if it is measured with the same method for both paths. Report unavailable measurements as unavailable.

## Safe deliverable

A useful external report contains the agreed input manifest, build/settings identities, raw measurements, reconstruction results, aggregation script and the evaluator's statement of what they personally ran. Closed candidate software, private inputs and protected internals are shared only through a separately agreed private evaluation arrangement; they are not part of this portfolio or its offline archive.

The report should distinguish reproduction of an earlier result from a new corpus or baseline. Both are useful; they answer different questions.

[Published measurements](README.md) · [Interactive explorer](https://absamad-dew.github.io/engineering-portfolio/demos/#project=research&lang=en)
