# How I build with agents

I use agents for implementation, investigation and verification. My responsibility is to turn that work into one coherent product: define its behavior, make system-level decisions, coordinate ownership, integrate the parts and accept the result against observable outcomes.

## Start with the complete user outcome

A useful slice connects the interface to the result it promises. In Aster that means following a customer request through service and quantity clarification into a recorded order and its matching invoice. The first prototype took two days; later work expanded the operating workspace and exercised cancellations, booking changes and commercial exceptions.

I define the acceptance condition before delegating implementation. For a business action it is the resulting record and state transition. For a video pipeline it includes frames, timestamps and resource lifetime. For compression it includes the exact reconstructed bytes alongside size and processing time.

## Divide ownership, then integrate

Parallel work gets explicit file/subsystem ownership and an agreed interface. Product behavior, execution boundaries, interface work and verification can progress independently while referring to the same requested outcome. Integration checks the handoffs rather than treating each worker's completion as product completion.

Tervallis provides persistent project discussions, tasks and result history around this workflow. CoreBroker coordinates the heavy stages so agents declare CPU allocation and shared-resource constraints. [Actual resource-coordination demonstration](../projects/corebroker.md).

## Review where a mistake becomes consequential

| System | The important decision |
|---|---|
| Aster | Connect a reply to the correct customer/order; separate issuing an invoice from a payment event; route exceptional commercial terms to staff. |
| CoreBroker | Preserve physical-core/SMT allocation and resource-lock behavior across waiting, execution and completion. |
| Video Studio | Keep GPU resources alive until their owner completes; separate producer acknowledgement, GPU fences and playback time. |
| ChronoField | Compare the same exact inputs and keep corpus, baseline and measurement boundaries with the result. |

These decisions determine what to inspect and test. Retained failures are useful inputs for the next iteration: an observed defect should become a reproducing check, with a verified result after the change.

## Make the result reviewable

The public work includes actual product captures, a recorded scheduling trace, source-linked native engineering notes and approved research comparisons. The supplementary libraries expose narrower reliability checks as runnable code: concurrent-call regressions, crash/reconciliation behavior and tool outcomes checked against reopened state.

Private application source and research mechanisms are kept separate from the descriptions, demonstrations and measurements cleared for public sharing. [Sources and scope](evidence.md).
