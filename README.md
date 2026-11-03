# Selected engineering work

Products, systems and original research by **Absamad Manturov**.

[GitHub](https://github.com/Absamad-dew) · [Русский](README.ru.md) · [Email](mailto:absamad.manturov@gmail.com)

## Selected work

| Project | Engineering focus | Documentation |
|---|---|---|
| **Compression R&D** | PTC / JSON and text, model weights, KV cache; ChronoField exact video | [Measured results across four directions](research/README.md) |
| **Aster** | Autonomous sales, customer conversations and a full business CRM | [Product and system decisions](projects/aster.md) |
| **Video Studio** | C++20 / D3D12 / NVENC, frame ownership, recording and stereo/VR | [Public implementation](https://github.com/Absamad-dew/dlss5-video-studio) · [Engineering overview](https://github.com/Absamad-dew/dlss5-video-studio/blob/main/ENGINEERING_OVERVIEW.md) · [Build and verification](https://github.com/Absamad-dew/dlss5-video-studio/blob/main/BUILDING.md) |
| **CoreBroker** | Physical-core allocation, resource locks and process coordination on Windows | [System case and recorded observations](projects/corebroker.md) |
| **Tervallis** | Persistent project context, versioned tasks and MCP agent handoffs | [Platform and integration decisions](projects/tervallis.md) |

## Selected results

- **PTC, 48 JSON files / 84 MB input:** 9,235,511 B against XZ-9's 11,380,780 B (**18.85% fewer bytes**), with exact checks on all 48 files. [Input scope and Max/Fast profiles](research/ptc.md).
- **Neural weights:** a complete OLMoE FP8 package of 6,052,678,952 B against 7,127,449,856 B of source FP8 tensors (**15.08% smaller**), with restoration/output checks and a visible loading tradeoff. [Model case](research/model-weights.md).
- **KV cache:** a live Q4 session's stored backing reduced by **20.52%**, with **1,024 exact continuation token IDs**; separate repeat-session hibernate/wake improved **1681.55 → 637.85 ms**. [Separate workloads and memory boundaries](research/kv-cache.md).
- **ChronoField, three-source 1080p comparison:** 41.37% fewer bytes, 8.42× encode speed and 4.98× decode speed against the measured strict-lossless AV1 baseline, with exact RGB reconstruction.
- **Related-rendition storage, separate study:** 45.14 MB → 7.38 MB for the complete catalog; all 20 outputs reconstructed exactly.
- **Video Studio, matched native-stage A/B:** 24.393 → 29.981 FPS (+22.9%). The public source and measurement notes describe the GPU resource and encoder changes.
- **Aster:** first working prototype built in two days; later iterations added the broader operating workspace and lifecycle checks.

Each linked case supplies its settings, measurement boundary and retained evidence. The [research index](research/README.md) separates datasets, baselines, exactness checks and storage/loading tradeoffs.

## Business delivery and upstream contribution

- **[Earlier business automation](projects/business-automation.md):** customer enquiries connected to pricing and CRM, vector preparation with cutting plans and offcut records, and artwork validation with customer PDF reports. Built and introduced across three related businesses, around 15 people in total.
- **[Memanto / LangGraph](docs/open-source-contributions.md):** repeated-key update correctness and regression coverage, accepted upstream in [PR #1495](https://github.com/moorcheh-ai/memanto/pull/1495), merged 29 July 2026.

## Engineering approach

I define product behavior and architecture, divide work between agents, integrate the components and accept the result against observable state. Earlier work included internal automation across three related businesses, around 15 people in total.

- [Technical decisions and their checks](docs/decision-stories.md)
- [Agent-assisted development and dated artifacts](docs/working-with-agents.md)
- [Sources and verification records](docs/evidence.md)

## Public code

| Repository | Purpose |
|---|---|
| [ruagent-compat](https://github.com/Absamad-dew/ruagent-compat) | Tool contracts, permissions, structured output and concurrent-call regressions |
| [agent-action-ledger](https://github.com/Absamad-dew/agent-action-ledger) | Durable action state, scoped idempotency and reconciliation after uncertain outcomes |
| [ru-agent-eval-kit](https://github.com/Absamad-dew/ru-agent-eval-kit) | Tool-agent evaluation against observed SQLite state, including fault injection |
| [compression-observatory](https://github.com/Absamad-dew/compression-observatory) | Exact reconstruction checks and repeatable standard-codec measurements |
| [price-intelligence-demo](https://github.com/Absamad-dew/price-intelligence-demo) | Supplier-file normalization and currency-aware comparisons |

<a id="additional-public-libraries-and-engineering-experiments"></a>

Aster, CoreBroker and Tervallis are documented as private applications. Research implementations and protected methods remain private. The linked open-source repositories carry their own licenses.
