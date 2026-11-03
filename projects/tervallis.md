# Tervallis: a persistent workspace for research and agents

An agent result is useful only if the next person or worker can find the task, understand the decision and continue from the actual state.

Tervallis brings projects, tasks, experiments, decisions, discussions, files and change history into one working platform. I use it in my own research and engineering projects.

## Working model

A project discussion can send a request to an agent and receive the result in the same context through MCP integrations. Planning, implementation, verification and result documentation can be assigned independently without losing the common project history. I have organized work across 20 agents using this platform.

The verified end-to-end scenario covered one research project: read an event, claim it for one worker, perform the task and return the result. It is a demonstrated workflow, rather than a claim that every possible integration has been validated.

## Reliability decisions

- Versioned tasks expose concurrent changes instead of silently overwriting them.
- Idempotent creation returns the existing task on a repeated operation.
- Back-reading verifies that a result was saved.
- Checksums verify transferred files.
- Explicit failure and allowed-action boundaries constrain the agent integration.

The interface, integrations and implementation are private. This public case study describes the product and the scenarios I checked; it contains no research tasks, unpublished findings or internal MCP implementation.

[Back to portfolio](../README.md)
