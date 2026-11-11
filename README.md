# Absamad Manturov · Engineering portfolio

I design AI agents that turn conversations into orders, appointments and other business records. I set the architecture and operating rules, coordinate implementation with coding agents, and verify the resulting behavior.

[Русский](README.ru.md) · [GitHub profile](https://github.com/Absamad-dew) · [Email](mailto:absamad.manturov@gmail.com)

## Aster · An AI agent for service businesses

Aster takes a customer request through clarification, order creation and invoicing. I defined the actions it can take, the cases it hands to staff, and the records each completed action must leave. The screenshot shows the customer chat and the saved order for two designs, with a matching **RUB 7,000** invoice awaiting payment. [Aster case](projects/aster.md) · [Verification](docs/aster-verification.md)

[![Aster customer chat alongside the saved order and matching 7,000 RUB invoice in the CRM](media/aster-order-invoice.png)](projects/aster.md)

In the local scenario run, an unpaid cancellation voided the associated invoice, a repeated payment event left an already-paid invoice unchanged, and exceptional discounts and refunds went to staff. A separate model-response check reproduced a rejected response and verified the corrected sales-view action. [Decisions and checks](projects/aster.md#4-engineering-decisions-and-my-approach)

<a id="business-delivery-and-upstream-contribution"></a>

## Business automation · 2018–2026

Built and introduced tools for **three related businesses**. I connected incoming messages, customer terms and pricing to the CRM, and worked with staff to fit the tools into their daily work. [Business automation case](projects/business-automation.md)

| Workflow | Approximate time in use |
| --- | --- |
| First reply to an enquiry | Up to an hour before, around **2 minutes** with the new workflow |
| Artwork check and customer PDF | About **30 seconds**, compared with an estimate of 20 minutes by hand |
| Preparing production files for ArtCAM | About two hours to **40 minutes** |

## Selected work

| Project | What to look at |
| --- | --- |
| **Tervallis** | Organized work across about 20 agents. Verified a complete MCP handoff from a project discussion to a stored result. [Platform case](projects/tervallis.md) |
| **PTC and ChronoField** | Image codecs, exact web and JSON compression, live memory and KV cache, 3D and video. [Benchmark results](research/recent-results.md) |
| **Video Studio** | C++ and D3D12/NVENC recording. Native-stage throughput rose from 24.39 to 29.98 FPS in a matched comparison. [Source and measurements](https://github.com/Absamad-dew/dlss5-video-studio/blob/main/ENGINEERING_OVERVIEW.md) |
| **CoreBroker** | Windows workload coordination. The recorded run shows independent jobs overlapping and jobs sharing a resource running in sequence. [System case](projects/corebroker.md) |

## Selected results

- **PTC Simbol.** Higher mean RGB PSNR than ten baseline SPCP presets on 30 CLIC 2025 photos at a 1.6 bits/pixel cap. [External and internal tests](research/recent-results.md#ptc-simbol)
- **PTC Web.** **21.85% smaller than Brotli 11** on 125 HTML, CSS and JS resources from 50 websites, with byte-exact decoding. [Corpora and comparisons](research/recent-results.md#ptc-web)
- **PTKV.** Freed **1,340 MiB of VRAM** while hibernating a session with 260,000 context tokens. All 2,000 tested continuation token IDs matched. [Session measurements](research/recent-results.md#ptkv)
- **ChronoField.** On three Full HD sources, **41.37% fewer bytes** and **8.42× faster encoding** than the measured lossless AV1 baseline, with exact RGB recovery. [Video results](research/recent-results.md#chronofield)

[All nine selected research cases](research/recent-results.md) · [Research index](research/README.md)

## Engineering approach

I set acceptance criteria before dividing implementation and testing work. In Aster I check the saved business records. In Tervallis I check that a result returns to the project that requested it. In compression I compare full file size and reconstructed output. [Working with agents](docs/working-with-agents.md) · [Technical decisions](docs/decision-stories.md) · [Evidence index](docs/evidence.md)

## Public code

- **Memanto / LangGraph.** The repeated-key fix and its regression check were accepted upstream and reached main. [Accepted contribution](docs/open-source-contributions.md)
- **Agent systems.** [Tool contracts and concurrency checks](https://github.com/Absamad-dew/ruagent-compat) · [Durable action tracking](https://github.com/Absamad-dew/agent-action-ledger) · [Agent evaluation cases](https://github.com/Absamad-dew/ru-agent-eval-kit)
- **Other implementations.** [Video Studio source](https://github.com/Absamad-dew/dlss5-video-studio) · [Release 22.3.0](https://github.com/Absamad-dew/dlss5-video-studio/releases/tag/v22.3.0) · [Compression Observatory](https://github.com/Absamad-dew/compression-observatory) · [Supplier price comparison](https://github.com/Absamad-dew/price-intelligence-demo)

<a id="additional-public-libraries-and-engineering-experiments"></a>
