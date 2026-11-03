# CoreBroker: resource coordination for parallel engineering

Several agents can work in parallel and still make a laptop slower if their tests, builds and experiments all compete for the same cores, cache and GPU.

CoreBroker is a Windows resource coordinator that queues jobs and assigns execution resources. It provides a CLI, process lifecycle control, resource leases and execution telemetry. It is used while developing this portfolio: the tests are scheduled work, rather than a collection of unconstrained background processes.

## What the product does

- Coordinates concurrent CPU-heavy work under named projects.
- Exposes physical/logical CPU assignments and cache locality in a job lease.
- Supports bounded jobs and named resource locks, including GPU workloads.
- Reports start, completion, exit status and observed duration.
- Keeps a durable execution history for diagnosis.

## A real run receipt

[This receipt](../media/corebroker-run.json) records a completed portfolio test run assigned to **8 physical cores / 16 logical processors**. Exit status was 0. This is evidence of scheduling and process completion, not a throughput comparison or a promise that this allocation is optimal for every workload.

The important product behavior is that a caller can submit work, wait for a lease, execute with a known allocation and inspect how it ended. A queued job is not silently reported as completed.

## Why it matters for agent workflows

Parallelism should increase useful throughput. Resource coordination makes that an explicit engineering responsibility: keep interactive work usable, avoid competing heavy stages, and distinguish “an agent is active” from “a useful result finished.”

Implementation and scheduling internals remain private. This page and the curated receipt are the public demonstration.

[Back to portfolio](../README.md)
