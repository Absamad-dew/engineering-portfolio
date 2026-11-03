# Tervallis: a working platform for projects and AI agents

Tervallis keeps projects, tasks, experiments, decisions, discussions, files and change history in one persistent workspace. I use it to run my own research and engineering work, including an arrangement of **20 AI agents** with distinct planning, implementation, verification and documentation responsibilities.

**My role:** building the platform, connecting existing and custom MCP servers, organizing agent work and verifying that results return to the project that requested them.

## 1. A project discussion becomes completed agent work

A request starts in a project discussion. An agent receives the event through an MCP integration, claims the work, performs the task and returns its result to the same project context. The discussion, task and result remain available for the next worker.

**The product decision:** make the project the durable context for delegation. A handoff can then be checked against its request, task and saved result, and the next worker can continue from that state.

The retained end-to-end check covered this complete cycle for **one research project**:

```text
Project discussion → event read → one worker claims the task
                   → execution → result returned to the same context
                   → saved result read back for verification
```

This lets a person or another agent continue from a recorded result with its surrounding decisions and history. The private research request and findings are excluded from this presentation.

## 2. Organizing parallel work around a shared project

I organized 20 agents around different responsibilities: planners propose hypotheses, research agents implement and check them, and separate agents document the results. Tervallis supplies the persistent project context around that division of work.

Tasks, experiments and decisions live alongside discussions and files. That gives implementation and verification a common reference point: what was requested, what changed, what was checked and which result was saved.

## 3. Checking the handoff, not just the agent's reply

The integration treats a claimed task and a saved result as operations to verify:

| Handoff risk | Product behavior and check |
|---|---|
| The same task creation is repeated | Idempotent creation was checked to return the existing task without a duplicate. |
| Several workers change task state | Task operations carry versions, making state changes explicit. |
| An agent says a result was saved | The stored result is read back to confirm persistence. |
| A file is transferred between tools | Checksums are compared to verify the transferred content. |
| A worker encounters an error or requests an unintended action | Failure handling and allowed-action boundaries are part of the integration design. |

These decisions make the platform useful as a continuing workspace for agent-assisted work: delegation ends with a recorded result that can be found and checked. The source, internal MCP implementation and project data remain private; this case describes the working product and the scenarios verified by its author.

[Decision story: a repeatable project handoff](../docs/decision-stories.md#3-tervallis-preserve-the-work-item-across-handoffs) separates the design rationale from the retained checks. The 20-agent figure describes how I organized work; it is not a simultaneous-load measurement.

<details>
<summary>Кратко по-русски</summary>

Tervallis — моя рабочая платформа, где собраны проекты, задачи, эксперименты, решения, обсуждения, файлы и история изменений. Я развиваю платформу, подключаю готовые и собственные MCP-серверы и организовал работу 20 агентов с разными обязанностями: планирование, реализация, проверка и оформление результатов.

Для одного исследовательского проекта проверен полный цикл: запрос из обсуждения → чтение события → захват одним исполнителем → выполнение → возврат результата в тот же контекст. Сохранение подтверждалось обратным чтением, файлы — контрольными суммами. Повторное создание задачи возвращало ту же задачу без дубликата; операции с задачами используют версии.

Это действующий инструмент моей работы. Проверки относятся к указанным сценариям, а полный цикл — к одному проекту. Исходники, внутреннее устройство MCP и содержимое частных исследований не публикуются.

</details>

[Evidence and provenance](../docs/evidence.md) · [Back to portfolio](../README.md)
