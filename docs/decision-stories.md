# Decisions behind the demonstrations

My role in agent-assisted engineering is to define the outcome, choose the boundaries and accept the integrated result. These five examples connect a concrete problem to that judgment and an inspectable check. Product design rationale is identified separately from recorded observations.

## 1. Aster: accept the business record

**Problem.** A sales conversation can sound complete while leaving the business state unclear: what was ordered, for which quantity, at what price and with which payment status? This is an acceptance risk, rather than a claimed count of historical failures.

**My decision and rationale.** Make the customer conversation and the resulting CRM records visible together. Allow a standard catalog request to create an order and matching invoice, and keep issuing an invoice distinct from receiving payment. This gives the owner a commercial result to inspect.

**Observed check.** The [actual order/invoice capture](../media/aster-order-invoice.png) shows two layouts at 3,500 RUB, a 7,000 RUB order and a matching invoice **awaiting payment**. The later [v0.55 verification summary](aster-verification.md) records authorized API read-back across 40 presentation conversations, including 9 new orders and 11 invoices. The screenshot and verification are separate artifacts from builds 0.54 and 0.55.

## 2. Aster: retain failures and bind delivery claims to receipts

**Problem.** The retained verification account includes earlier contradictory replies and seven failed intermediate turns. A successful continuation could otherwise make that history disappear, or an old invoice handoff could be described as a new delivery.

**My decision and rationale.** Keep the failed turns in the history used for acceptance, and require a new receipt before claiming a new delivery. The engineering result includes what failed and how the workflow continued; a later success must remain traceable to the operation it actually completed.

**Observed check.** The [v0.55 account](aster-verification.md) records that the seven intermediate failures were retained, earlier contradictory formulations were checked after correction, and an invoice already handed to a channel was not given a fresh delivery claim without a fresh receipt. It also records 40/40 completed conversations read back through the authorized API. These counts describe the retained scenario run, not a measured reduction in defects or a customer deployment.

## 3. Tervallis: preserve the work item across handoffs

**Problem.** A project request crosses discussions, tasks, agents and file transfers. Retrying a creation or accepting an unsaved reply can leave duplicate work or a result that the next worker cannot find. These are the handoff risks addressed by the design.

**My decision and rationale.** Keep delegation in the project context, use versioned task operations and idempotent creation, then check persistence by reading the result back. Verify transferred files by checksum. The work item and its result remain identifiable across retries and different tools.

**Observed check.** The author's [curated platform account](../projects/tervallis.md) records repeated creation returning the existing task, saved-result read-back and checksum comparisons. The complete event-read → single-worker claim → execution → result-return cycle was checked for one research project. Organizing work across 20 agents is a separate fact about the working arrangement, not a 20-worker capacity measurement.

## 4. CoreBroker: separate CPU capacity from a shared-resource constraint

**Problem.** Two independent jobs can make progress together, while two jobs requiring the same resource may need to wait. Giving both jobs CPU capacity alone does not express that distinction.

**My decision and rationale.** Represent CPU allocation and named shared-resource locks separately. Use an independent pair and a shared-lock pair to show the resulting behavior, with worker markers and reported allocations available for inspection.

**Observed check.** The [recorded demonstration](corebroker-demonstration.md) has independent workers on physical IDs 0 and 2, overlapping for **3,086.547 ms**. In the shared-lock case B was submitted at **918.860 ms**, before A's worker ended at **4,897.706 ms**; B's worker began at **5,900.548 ms**, with zero worker overlap. These are four-second synthetic resource holds. They establish the observed coordination behavior, not a throughput gain or complete lease-duration measurement. [Curated observations](../media/corebroker-coordination.json).

## 5. Public tool executor: serialize the whole state-changing boundary

**Problem.** The published `ruagent-compat` change fixes two concurrent-call failures: identical calls could enter the handler more than once, and distinct calls could overwrite committed state. Its changelog records that the new regressions reproduced both failures in version 0.2.0.

**My decision and rationale.** Accept a fix that serializes validation, permission checks, cache lookup, handler execution and commit within one executor. The cache decision and the state transition need the same boundary; serializing only the handler would leave the surrounding race unresolved.

**Observed check.** The [published regressions](https://github.com/Absamad-dew/ruagent-compat/blob/204ca9a9ddd304132a9b1567f7c5855f5a9d3e2e/tests/test_concurrency.py) submit eight identical calls and require one handler entry, one committed increment and seven cached outcomes. A second case submits eight distinct calls and requires eight preserved increments. [Source change and scope](https://github.com/Absamad-dew/ruagent-compat/commit/204ca9a9ddd304132a9b1567f7c5855f5a9d3e2e): one process and event loop; external effects need their own durable coordination.

## Кратко по-русски

| Решение | Зачем | Наблюдаемая проверка |
|---|---|---|
| Aster: принимать результат по бизнес-записям | Заказ, счёт и оплата должны иметь проверяемые состояния | На настоящем capture: 2 × 3 500 ₽, заказ и счёт на 7 000 ₽, ожидание оплаты; позднее — API-сверка 40 презентационных бесед |
| Aster: сохранять ошибки и привязывать доставку к квитанции | Успешное продолжение должно оставаться проверяемым вместе с историей | В сводке v0.55 сохранены 7 промежуточных неудач; новая доставка не заявляется без новой квитанции |
| Tervallis: сохранять контекст и идентичность задачи | Повторы и передача между агентами не должны терять результат | Повторное создание вернуло ту же задачу; сохранение проверялось чтением, файлы — checksum; полный цикл проверен для одного проекта |
| CoreBroker: разделить CPU и общий ресурс | Независимая работа и общий ресурс требуют разного допуска | Независимые workers перекрылись на 3 086,547 мс; с общим lock перекрытия нет |
| Публичный executor: единая граница конкурентного изменения | Кэш и commit должны согласовываться с выполнением | В регрессиях: 8 одинаковых вызовов → 1 handler + 7 cache hits; 8 разных → 8 сохранённых изменений |

[How I build with agents and dated artifacts](working-with-agents.md) · [Sources and demonstration records](evidence.md)
