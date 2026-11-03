# CoreBroker demonstration: capture notes

Captured on **2026-11-03, 13:49:52 UTC** using the installed coordinator. Public data is a curated projection of four owned portfolio jobs; unrelated tasks, commands, user paths and machine-wide history were excluded.

The private capture harness submitted each scenario through `corebroker run --project github-portfolio --cores 1 --wait 30 --json`. The shared-resource scenario additionally supplied `--lock portfolio-demo-resource`. A second job was submitted after the first worker had begun. Workers generated a deterministic SHA256 marker and held their resource for four seconds. Temporary marker files were removed after collection.

The harness asserted positive overlap and disjoint physical/logical CPU assignments in the independent case. It asserted B was submitted before A finished, B started after A finished and overlap was zero in the shared-lock case. Completion exit codes came from CoreBroker's actual JSON events.

Timing uses one host's monotonic performance counter, normalized to each scenario's submission origin. Solid bars show worker-marker intervals inside their managed leases. Submission-to-start includes coordinator startup and handoff, so it is not reported as pure queue latency. CoreBroker exit timestamps and worker markers are different observations.

Every job requested one physical core and was nonexclusive. No global power profile changed. Cache-group IDs and CPU IDs are topology identifiers, not percentages of utilization. The demonstration verifies allocation and lock behavior, not speedup, fairness under arbitrary load, machine-wide isolation or peak throughput.

[Raw observations](../media/corebroker-coordination.json) · [Case study](../projects/corebroker.md)
