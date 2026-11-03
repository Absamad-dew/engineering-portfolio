# Open-source contributions

## Memanto: preserve LangGraph's store update contract

**[PR #1495](https://github.com/moorcheh-ai/memanto/pull/1495)** · merged **29 July 2026** · [merge commit](https://github.com/moorcheh-ai/memanto/commit/4c19646f28bb091f9a20779e272f0f09cbbc4c4d)

The original PR merged into `state-management/merge-prs`. [PR #1721](https://github.com/moorcheh-ai/memanto/pull/1721) brought the change into `main` on 30 July 2026; its [squash commit](https://github.com/moorcheh-ai/memanto/commit/ebf9c6901a9270a62547f9a52f43314ff5ed226a) contains both the lookup/update behavior and its regression test.

**Problem.** Repeated `put(namespace, key, value)` calls could create another backend memory instead of updating the existing item. A normal preference or state update could therefore leave old and current values together.

**Contribution.** Changed the LangGraph integration to update the existing memory when its namespace/key lookup finds an existing memory ID and retain creation for a new key. The submitted change also made lookup failures explicit in the write path, preserving existing type information when an update does not supply it.

**Verification.** The contribution includes regression coverage for updating an existing key and failing safely when existence cannot be established. The public pull request records the code, discussion and validation account. Its merged state and commit were checked through GitHub's current API on 3 November 2026.

This is an integration correctness fix. It does not establish a distributed atomic upsert across independent backend processes or migrate historical duplicates.

## Кратко по-русски

В Memanto исправил интеграцию с LangGraph: повторная запись по той же паре namespace/key обновляет существующую память, сохраняя ожидаемое поведение `put`. Добавлены проверки обновления и безопасной обработки сбоя поиска; при обновлении без нового типа сохраняется прежний тип.

PR принят 29 июля 2026 года; на следующий день изменение и тест вошли в `main` через PR №1721.

[Engineering cases](../README.md) · [Technical decisions](decision-stories.md)
