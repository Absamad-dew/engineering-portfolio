# CoreBroker replay: recorded worker intervals

This replay uses the existing curated capture from **2026-11-03 13:49:52 UTC**. The jobs actually ran; playback is a display animation of their published markers. The page launches no coordinator or workload.

## Three results to communicate

1. **Independent workers overlap with disjoint CPU assignments.** Their recorded worker intervals overlap by **3086.547 ms**. A received physical ID `0`, logical CPUs `[0,1]`; B received physical ID `2`, logical CPUs `[2,3]`. [Exact capture](https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/media/corebroker-coordination.json).
2. **A shared resource lock serializes the observed workers.** In the locked scenario, B was submitted at **918.860 ms**, before A finished at **4897.706 ms**. B began at **5900.548 ms**, after A finished, so worker overlap is **0 ms**. [Exact capture](https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/media/corebroker-coordination.json) · [Capture protocol](https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/docs/corebroker-demonstration.md).
3. **A bounded successful coordination demonstration.** All four jobs completed with exit `0`, one requested physical core per job, nonexclusive allocation and no power-profile changes. Synthetic marker generation plus a four-second resource hold tests these coordination outcomes; it is not a throughput benchmark or proof of machine-wide isolation. [Capture protocol](https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/docs/corebroker-demonstration.md).

## Exact replay geometry

Times are milliseconds on one host's monotonic clock, with a separate zero origin for each scenario. Worker intervals use `[started_ms, finished_ms)`.

| Scenario / worker | Submitted ms | Worker start ms | Worker finish ms | Worker duration ms | Submission → worker start ms |
|---|---:|---:|---:|---:|---:|
| Independent A | 0.023 | 838.662 | 4839.452 | 4000.790 | 838.639 |
| Independent B | 865.570 | 1752.905 | 5754.147 | 4001.242 | 887.335 |
| Shared-resource A | 0.007 | 897.069 | 4897.706 | 4000.637 | 897.062 |
| Shared-resource B | 918.860 | 5900.548 | 9901.558 | 4001.010 | 4981.688 |

`duration_ms` is finish minus start. Overlap is `max(0, min(finishes) − max(starts))`. The independent timeline ends at **5754.147 ms**, the shared-resource timeline at **9901.558 ms**. Their separate origins do not describe one combined schedule.

Before submission, show an unsubmitted worker. Between submission and worker start, show **submitted / waiting for worker start**. During the recorded worker interval, show the worker marker and its recorded assignment. At finish, show its recorded exit result. Solid worker bars are not full lease intervals; CoreBroker lifecycle timestamps and worker markers are distinct observations. Submission-to-start includes coordinator startup and handoff, so it must not be labelled pure queue latency. The public record does not provide a continuous CPU-utilization series.

## Data and animation boundary

[corebroker.json](data/corebroker.json) preserves each published job's timestamps, lease ID, physical/logical/L3 identifiers, exclusivity, exit code and worker SHA-256 marker. Only arithmetic durations, replay limits, statements and source metadata are added. A playback-rate control scales how quickly the cursor traverses the recorded time; it never changes captured intervals, assignments or results. Do not invent work during gaps or synthesize progress percentages as measured CPU load.

Source SHA-256 values identify the exact public Git blobs of the curated capture and its protocol note. Worker digests are copied exactly and checked against that capture; their preimage marker data is not published here, so this replay does not claim independent recomputation of those worker hashes. Topology IDs identify allocation, not utilization or exclusive cache access. The CoreBroker implementation and private capture harness are not included.
