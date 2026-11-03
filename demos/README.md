# Interactive engineering walkthrough

[Open in your browser](https://absamad-dew.github.io/engineering-portfolio/demos/) · [Download the offline edition](https://github.com/Absamad-dew/engineering-portfolio/releases/download/walkthrough-v1/engineering-walkthrough-offline.zip)

Five short routes through the work, in English and Russian. No sign-in, API key, model download, analytics or external JavaScript dependency.

| Project | What you can inspect | Nature of the demonstration |
|---|---|---|
| Aster | Actual customer response, matching order/invoice, owner workspace and lifecycle outcomes | Interactive navigation through captures of the running application, using synthetic records; v0.54 captures and a separate v0.55 verification |
| CoreBroker | Play, pause and scrub independent/shared-resource worker intervals; inspect allocations and exact timestamps | Replay of the actual published four-worker observation, not a fresh execution or speedup benchmark |
| ChronoField | Select a published study and compare its size, encode and decode values | Source-linked measurements explorer; separate populations and unknown values stay separate |
| Video Studio | Follow frame ownership, GPU processing, encoding and presentation; inspect the retained A/B and run the linked CPU preflight | Architecture walkthrough with public source links; the browser does not execute the native GPU application |
| Tervallis | Follow request, claim, execution, result return and persistence checking | Explanatory view of the author's checked workflow; no private task payload or live worker execution |

The closed applications and research mechanisms are not distributed. [Decision stories](https://github.com/Absamad-dew/engineering-portfolio/blob/main/docs/decision-stories.md) and [dated artifacts](https://github.com/Absamad-dew/engineering-portfolio/blob/main/docs/working-with-agents.md) explain the author's choices, role and delivery evidence.

## Offline

Extract the whole ZIP. In the extracted folder run `python serve.py`, then open `http://127.0.0.1:8987/demos/`. Python 3.11+ is enough; no packages are installed. Stop with Ctrl+C. `START_HERE.txt` includes these steps in both languages. The loopback-only server verifies the manifest hashes and serves only its listed files. The walkthrough loads local scripts, data and images; source/contact links open external destinations only when followed. The local walkthrough itself makes no model or API calls.

## Rebuild

From the repository root, use Python 3.11+:

```sh
python scripts/build_demo.py --output /path/to/a/new/site
```

The builder copies an explicit allowlist, creates a data bundle without browser fetches, emits SHA-256 hashes in `manifest.json` and writes `engineering-walkthrough-offline.zip` beside the site. Existing output directories are refused rather than deleted. The archive uses stable timestamps for reproducible builds; those ZIP timestamps do not date the projects.

## Sources

- [Research records and units](research-notes.md), [JSON](data/research.json).
- [Coordination replay semantics](corebroker-notes.md), [JSON](data/corebroker.json).
- [Video source/measurement/preflight map](data/video.json).
- [Product captures and source boundaries](https://github.com/Absamad-dew/engineering-portfolio/blob/main/docs/evidence.md).

Keyboard: Tab reaches every control; left/right arrows move between project links; Enter opens a project. The recorded-time slider supports arrow keys. Escape closes an enlarged capture. Animation starts only on request and pauses when the page is hidden.

## По-русски

Пять интерактивных маршрутов показывают продуктовые результаты, инженерные решения и источники. Переключатель RU/EN меняет язык. Aster показан настоящими снимками приложения; CoreBroker — воспроизведением записанных интервалов; ChronoField — отдельными опубликованными измерениями; Video Studio — архитектурой с открытым кодом и CPU-проверкой; Tervallis — поясняющей схемой проверенного процесса.

Для офлайн-просмотра распакуйте архив целиком, выполните в этой папке `python serve.py` и откройте `http://127.0.0.1:8987/demos/`. Сервер доступен только на этом компьютере. Закрытые реализации и идеи R&D в архив не входят.
