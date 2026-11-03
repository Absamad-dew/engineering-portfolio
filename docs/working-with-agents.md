# How I build with agents

I use agents for implementation, investigation and verification. I own the product behavior, system-level decisions, ownership boundaries, integration and acceptance. [Five decision stories](decision-stories.md) show what that responsibility means in the work itself: a recorded order, a delivery receipt, a saved agent result, a resource constraint and a concurrency regression.

## Define the result before dividing the work

A useful slice connects the interface to the result it promises. In Aster, that means a customer request becomes an order for the correct quantity and a matching invoice with an explicit payment state. The [actual capture](../media/aster-order-invoice.png) shows the conversation and saved records together.

I define the acceptance condition before delegating implementation. For a business action it is the record and state transition. For a video pipeline it includes frames, timestamps and resource lifetime. For compression it includes exact reconstructed bytes alongside size and processing time.

In Aster I expanded the operating workspace and checked cancellations, booking changes, access boundaries and commercial exceptions. The product case links the running interface to the recorded verification.

## Divide ownership, then inspect the handoffs

Parallel work has explicit file or subsystem ownership and an agreed interface. Product behavior, execution boundaries, interface work and verification can progress independently against the same requested outcome. Integration checks whether their handoffs preserve that outcome.

Tervallis supplies persistent project discussions, tasks and result history. I organized work across 20 agents with different responsibilities; the retained complete event/claim/work/result check covers one project. CoreBroker coordinates heavy stages with declared CPU allocations and shared-resource constraints. Its [actual demonstration](../projects/corebroker.md) makes the difference between independent and shared-resource jobs visible.

## Make the consequential decisions reviewable

| Work | Decision and acceptance evidence |
|---|---|
| Aster | Keep the order, invoice, payment and delivery states explicit; read back the saved result and preserve failed turns. [Business outcome and receipt decisions](decision-stories.md#1-aster-accept-the-business-record) |
| Tervallis | Preserve the work item across project/agent handoffs; check repeated creation, stored results and transferred files. [Handoff decision](decision-stories.md#3-tervallis-preserve-the-work-item-across-handoffs) |
| CoreBroker | Model CPU capacity and named shared-resource constraints separately. [Observed coordination](decision-stories.md#4-corebroker-separate-cpu-capacity-from-a-shared-resource-constraint) |
| Public executor | Make cache lookup, execution and commit one serialized boundary. [Source and concurrent-call regressions](decision-stories.md#5-public-tool-executor-serialize-the-whole-state-changing-boundary) |

Recorded observations and design rationale answer different questions. A screenshot can show the order and invoice that exist in that capture; the v0.55 report describes a later checked build. A scheduling trace can show worker overlap; it does not measure throughput improvement. A reproducing regression can establish a particular concurrency fix without establishing reliability outside its contract.

## Dated artifacts

| Recorded UTC date/time | Inspectable record | What it establishes |
|---|---|---|
| 2026-07-15 | [Structured-output provenance implementation](https://github.com/Absamad-dew/ruagent-compat/commit/9916db3af3deccbfd93b7ef98080aee9612cb0d6) | An earlier public-code revision already addressed the provenance of structured model output. |
| 2026-09-02–04 | [Video Studio decisions and commits](https://github.com/Absamad-dew/dlss5-video-studio/blob/main/docs/DECISION_TIMELINE.md) | Public revisions show audio timing, bounded frame transport and direct NVENC work on successive dates, with separate retained performance comparisons. |
| 2026-11-03, 12:33:13 | [Initial engineering-portfolio revision](https://github.com/Absamad-dew/engineering-portfolio/commit/5e73942650d3d05a9907493751a368a0c5a4d8d5) | Product descriptions and supporting evidence were committed to the public portfolio history. |
| 2026-11-03, 12:33:14 | [Executor concurrency fix](https://github.com/Absamad-dew/ruagent-compat/commit/204ca9a9ddd304132a9b1567f7c5855f5a9d3e2e) | A specific implementation change and its two reproducing regression tests are reviewable together. |
| 2026-11-03, 12:42:40 | [Order/invoice capture added](https://github.com/Absamad-dew/engineering-portfolio/commit/f8169215481787402eb16a11033377ca46d73284) | The actual customer/CRM result became part of the committed case. This is a revision date, not the image's capture time. |
| 2026-11-03, 13:49:52 | [CoreBroker observation](../media/corebroker-coordination.json) | The artifact records this capture time for the four-worker coordination demonstration. |
| 2026-11-03, 14:23:09 | [Flagship case revision](https://github.com/Absamad-dew/engineering-portfolio/commit/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5) | Product demonstrations and the approved research results were brought together in a later portfolio revision. |

The timestamps identify public revisions and recorded checks. The linked artifacts show what changed and what was verified.

Private application source and research mechanisms remain separate from public descriptions, demonstrations and measurements. [Sources and demonstration records](evidence.md).

<details>
<summary>Кратко по-русски</summary>

Я использую агентов для реализации, исследования и проверки. Моя ответственность — определить поведение продукта, принять системные решения, разделить владение работой, интегрировать результат и проверить наблюдаемые изменения.

В Aster принимается заказ и соответствующий счёт с явным состоянием оплаты; в Tervallis — сохранённый результат, который можно прочитать обратно; в CoreBroker — конкретное выделение ресурсов и поведение общего lock. В публичном executor граница конкурентного изменения подтверждается регрессиями. [Пять решений и их проверки](decision-stories.md).

В Aster я развивал рабочее пространство, интеграции и надёжность; результат показан в интерфейсе и проверке v0.55. Таблица даёт датированные публичные артефакты, а описание Tervallis показывает, как я организовал работу 20 агентов.

</details>
