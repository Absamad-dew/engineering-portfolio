# Research explorer: evidence and display rules

The explorer presents **published ChronoField measurement summaries**. Selecting a record changes which published experiment is shown; the page does not execute a codec or inspect a private corpus. Animated bars are display transitions, not intermediate measured operating points.

## Records the UI can select

| Record ID | Population / baseline | Size, baseline → candidate | Encode speed | Decode speed |
|---|---|---|---|---|
| `fast-three-source` | Retained three-source Full-HD aggregate; strict-lossless AV1 `cpu-used=4` | AV1 index **100 → 58.63** | **1× → 8.42×** | **1× → 4.98×** |
| `ultra-fast-single-source` | One measured Full-HD source; the same strict-lossless AV1 configuration in the competitive note | AV1 index **100 → 62.13** | **1× → 45.63×** | **1× → 4.66×** |
| `archive-size-only` | Published “up to” size result; detailed population/settings are not specified in that table | AV1 index **100 → 44.75** | Not published | Not published |
| `related-family-20` | Two source excerpts, 20 related outputs; independent CFT11 compact files vs complete CFMS catalog | **45.14 MB → 7.38 MB** | Not published | Candidate **261 aggregate compact fps**; baseline not published |

Size indices are `100 − published reduction percent`. Speed factors are the published relative measurements, with the baseline displayed as 1×. Optional elapsed-time views are arithmetic transforms, `100 / speed factor`, rounded to two decimals: Fast encode **11.88%**, decode **20.08%**; Ultra Fast encode **2.19%**, decode **21.46%** of the corresponding baseline elapsed time. These are normalized displays, not new absolute timings. Absolute byte counts and absolute fps for those AV1 comparisons are absent from the public summaries and remain JSON `null`.

The family result keeps the published MB unit and rounded input values. `100 × 7.38 / 45.14` is **16.35** after rounding; the published additional reduction is **83.65%**. The complete candidate catalog includes manifests and index. Its 261 fps value cannot become a relative speedup because no baseline fps is disclosed.

## Three results to communicate

1. **Joint size/speed gain at one point.** The retained three-source Full-HD aggregate combines 41.37% fewer bytes, 8.42× encode speed and 4.98× decode speed with exact RGB reconstruction. These three values share one experiment. [Public result](https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/README.md#smaller-output-and-faster-processing-at-the-same-operating-point).
2. **Separate profiles require separate evidence views.** Ultra Fast is a one-source result; Archive supplies a size result without published timings. They are useful selectable records, not a continuous measured Pareto frontier or a same-corpus sweep. [Ultra Fast context](https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/COMPETITIVE_POSITION.md#the-result-that-matters) · [Additional published points](https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/README.md#breadth-of-the-retained-work).
3. **A separate family-storage result.** The tested complete catalog is 7.38 MB versus 45.14 MB of already-compressed independent files, with all 20 outputs exact. This population must stay separate from the AV1 aggregate. [Family-storage result](https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/README.md#storage-across-related-renditions).

## UI contract

Use `experiments[].id` as stable identity and `source_ids` to resolve exact links in `sources[]`. `comparison_group` is unique per experiment. Plot baseline/candidate only within the selected group. Use metric `unit` and `direction`; the family MB and fps values are not AV1 indices or speed multiples. Keep null values absent and disable unavailable comparisons. Never combine one profile's minimum size with another's maximum speed, multiply savings from different populations, or interpolate between separate profiles. Axes for size/speed bars begin at zero.

`measurement_date` and implementation revision are unknown in these summaries and deliberately null. `source_commit_date` and `revision` describe the **public document**, not the original benchmark date or private implementation revision. The published host context is Ryzen 7 H 255, 8 cores / 16 threads, integrated Radeon 780M and 16 GB RAM. Exact RGB/SHA-256 is the author's published verification statement; actual frame hashes are not exposed here. Independent reproduction remains the public next milestone.

Source checksums in [research.json](data/research.json) are SHA-256 of exact public Git blob bytes, avoiding working-tree newline differences. They identify the reviewed documents; they do not certify undisclosed raw benchmark artifacts. The explorer contains no private codec, mechanics, binaries or corpus.
