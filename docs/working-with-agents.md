# Agent-assisted engineering

I use agents extensively to build products and explore research directions. My contribution is defining the problem, choosing the architecture, dividing work, integrating changes and deciding what evidence is sufficient to accept a result.

## The working loop

1. Make the desired user outcome concrete: input, allowed actions, observable result and failure behavior.
2. Split work by ownership and interfaces. Parallel agents should have independent tasks, not compete to edit the same files.
3. Build a thin end-to-end path early. Test a real adapter separately from a deterministic simulator.
4. Review the important boundaries: identity, authority, data shape, concurrency, external effects and recovery.
5. Verify the resulting state. A model saying “done” is not a receipt.
6. Keep the failure that exposed the defect and add a regression that reproduces it.
7. Check the packaged artifact independently from the development checkout.

## Concrete examples in the public work

- Concurrent identical tool calls originally entered a handler eight times. A reproducing regression now checks one dispatch and correct committed state in `ruagent-compat`.
- A process can die after a local service commits an effect. `agent-action-ledger` tests an actual subprocess exit and reconciles durable evidence without dispatching the action again.
- An eval should inspect state after reopening storage. `ru-agent-eval-kit` records observed effects, protocol errors and model provenance separately.
- A benchmark should verify every decompressed output before reporting speed. `compression-observatory` keeps raw observations and explicit aggregate definitions.

## Ownership

Agents accelerate implementation and investigation. They do not transfer responsibility for architecture, disclosure, claims or acceptance. The repository history reflects when work was actually committed; it is not backdated to simulate years of public activity.
