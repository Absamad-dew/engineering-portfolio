(function () {
  "use strict";
  const L = window.PortfolioLogic;
  const E = window.PORTFOLIO_EVIDENCE;
  if (!L || !E) {
    document.getElementById("experience").textContent =
      "The walkthrough files could not be loaded. Open the complete offline folder or visit the GitHub portfolio.";
    return;
  }
  let route = L.readRoute(location.hash);
  let lang = route.lang;
  let project = route.project;
  let step = 1,
    experiment = "fast-three-source",
    metric = "bytes",
    scenario = "independent";
  let frame = 0,
    time = 0,
    playing = false,
    last = 0;
  const P = "https://github.com/Absamad-dew/engineering-portfolio/blob/main/";
  const V = "https://github.com/Absamad-dew/dlss5-video-studio/blob/main/";
  const $ = (id) => document.getElementById(id);
  const pair = (en, ru) => ({ en, ru });
  const t = (value) => (typeof value === "string" ? value : value[lang]);
  const tr = (en, ru) => (lang === "ru" ? ru : en);
  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const fmt = (n, digits = 2) =>
    new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US", {
      maximumFractionDigits: digits,
    }).format(n);
  const link = (url, label) =>
    `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
  const projects = {
    aster: {
      name: "Aster",
      short: pair("Autonomous operations", "Автономные операции"),
      kind: pair("PRODUCT / AI + CRM", "ПРОДУКТ / AI + CRM"),
      title: pair(
        "A conversation becomes an operation.",
        "Из разговора в результат для бизнеса.",
      ),
      lead: pair(
        "An agent that connects customer conversations to orders, invoices, bookings and a shared operating workspace. Follow the actual application captures, then inspect how the result was checked.",
        "Агент связывает общение с клиентами с заказами, счетами, записями и работой команды. Посмотрите снимки работающего приложения и то, как проверялся результат.",
      ),
      metrics: [
        [
          "2 days",
          pair(
            "initial prototype · author timeline",
            "первый прототип · со слов автора",
          ),
        ],
        [
          "7,000 RUB",
          pair(
            "order and matching unpaid invoice shown",
            "показаны заказ и соответствующий счёт",
          ),
        ],
        [
          "40",
          pair(
            "presentation conversations checked · v0.55",
            "презентационных бесед сверено · v0.55",
          ),
        ],
      ],
      case: P + "projects/aster.md",
      decisions: [
        [
          pair("Verify the business state", "Проверять состояние бизнеса"),
          pair(
            "The acceptance condition is the saved order, matching invoice and correct payment state. A convincing sentence from the agent is only one part of the workflow.",
            "Критерий приёмки — сохранённый заказ, соответствующий счёт и верный статус оплаты. Убедительный ответ агента — лишь часть сценария.",
          ),
          pair(
            "Observed: two units × 3,500 RUB; invoice awaits payment.",
            "На снимке: 2 × 3 500 ₽; счёт ожидает оплаты.",
          ),
        ],
        [
          pair(
            "Keep routine work autonomous",
            "Оставить обычные операции агенту",
          ),
          pair(
            "Standard orders and bookings can proceed. Exceptional commercial terms become a staff task, while payment requires a separate event.",
            "Стандартные заказы и записи проходят самостоятельно. Особые коммерческие условия превращаются в задачу сотруднику, а оплата требует отдельного события.",
          ),
          pair(
            "v0.55: four separate exception tasks were created.",
            "v0.55: созданы четыре отдельные задачи по исключениям.",
          ),
        ],
        [
          pair("Keep failures inspectable", "Сохранять историю ошибок"),
          pair(
            "Read back the final records and keep failed intermediate turns. A successful continuation should preserve what happened before it.",
            "Повторно читать итоговые записи и сохранять неудачные промежуточные ходы. Успешное продолжение сохраняет историю происходившего.",
          ),
          pair(
            "v0.55: 40 existing conversations completed, failures retained.",
            "v0.55: завершены 40 существующих бесед, ошибки сохранены.",
          ),
        ],
      ],
      delivery: [
        [
          pair("AUTHOR TIMELINE", "СРОК СО СЛОВ АВТОРА"),
          pair(
            "First working prototype: two days",
            "Первый рабочий прототип: два дня",
          ),
          pair(
            "That duration belongs to the initial prototype. Integration, interface changes and reliability work followed.",
            "Этот срок относится к первому прототипу. Интеграция, доработка интерфейса и надёжности продолжались дальше.",
          ),
        ],
        [
          "v0.54",
          pair("The captured product", "Снимки работающего продукта"),
          pair(
            "Customer dialogue, owner workspace and a matching order/invoice are visible together. The records are synthetic presentation data.",
            "Видны клиентский диалог, рабочее пространство и связанные заказ со счётом. Использованы синтетические презентационные записи.",
          ),
        ],
        [
          "v0.55",
          pair("Continue through the lifecycle", "Проверка полного цикла"),
          pair(
            "40 conversations, including cancellations, booking changes, exception tasks and local payment-event checks. Every conversation includes a real model response.",
            "40 бесед: отмены, переносы записей, задачи по исключениям и локальные проверки оплаты. В каждой беседе есть настоящий ответ модели.",
          ),
        ],
      ],
      sources: [
        [P + "projects/aster.md", pair("Full product case", "Полный кейс")],
        [
          P + "docs/aster-verification.md",
          pair("Retained verification", "Сохранённая проверка"),
        ],
        [
          P + "docs/decision-stories.md",
          pair("Decision stories", "Истории решений"),
        ],
      ],
    },
    corebroker: {
      name: "CoreBroker",
      short: pair("Agent infrastructure", "Инфраструктура агентов"),
      kind: pair(
        "SYSTEM / WORKLOAD COORDINATION",
        "СИСТЕМА / КООРДИНАЦИЯ НАГРУЗКИ",
      ),
      title: pair(
        "Parallel work with explicit resources.",
        "Параллельная работа с явными ресурсами.",
      ),
      lead: pair(
        "A Windows coordinator for agent builds, tests and experiments. Replay four recorded workers to see independent execution and shared-resource exclusion.",
        "Windows-координатор сборок, тестов и экспериментов агентов. Воспроизведите запись четырёх задач: независимое выполнение и разделение общего ресурса.",
      ),
      metrics: [
        [
          "3.087 s",
          pair(
            "observed independent-worker overlap",
            "пересечение независимых задач",
          ),
        ],
        [
          "0 ms",
          pair(
            "worker overlap with the same named lock",
            "пересечение с одинаковой блокировкой",
          ),
        ],
        [
          "4 / 4",
          pair(
            "owned workers exited successfully",
            "задачи завершились успешно",
          ),
        ],
      ],
      case: P + "projects/corebroker.md",
      decisions: [
        [
          pair("Allocate physical cores", "Выделять физические ядра"),
          pair(
            "A worker requests physical cores with their SMT siblings. In the recorded independent case, A and B used separate physical cores.",
            "Задача запрашивает физические ядра вместе с SMT-потоками. В записи независимых задач A и B получили разные физические ядра.",
          ),
          pair(
            "Observed: cores 0 and 2; logical CPU pairs 0/1 and 2/3.",
            "В записи: ядра 0 и 2, логические пары 0/1 и 2/3.",
          ),
        ],
        [
          pair("Name the shared bottleneck", "Называть общий ресурс"),
          pair(
            "Core allocation alone cannot protect a shared device or other exclusive resource. A named lock keeps the two relevant worker intervals apart.",
            "Выделение ядер само по себе не защищает общее устройство или другой эксклюзивный ресурс. Именованная блокировка разделяет интервалы выполнения.",
          ),
          pair(
            "Observed: B was submitted while A ran, then started after A finished.",
            "B подана во время A, а запущена после завершения A.",
          ),
        ],
        [
          pair("Keep timings attributable", "Сохранять смысл измерений"),
          pair(
            "Submission, worker start and worker finish are separate markers. The replay uses the saved values and exposes the raw trace.",
            "Подача, старт и завершение задачи — отдельные отметки. Воспроизведение использует сохранённые значения и даёт исходную запись.",
          ),
          pair(
            "A scheduling demonstration; worker time is not whole-lease time.",
            "Проверка координации; время задачи отличается от времени аренды.",
          ),
        ],
      ],
      delivery: [
        [
          "2026-11-03",
          pair("Capture only owned jobs", "Записать только свои задачи"),
          pair(
            "Four synthetic workers, one physical core each, nonexclusive allocation and no power-profile changes.",
            "Четыре синтетические задачи, по одному физическому ядру, неэксклюзивное выделение, без изменения режима питания.",
          ),
        ],
        [
          pair("TWO CONDITIONS", "ДВА УСЛОВИЯ"),
          pair(
            "Change one resource constraint",
            "Изменить ограничение ресурса",
          ),
          pair(
            "Independent workers overlap; the same named lock separates their execution. Each worker emits a SHA-256 marker.",
            "Независимые задачи пересекаются; одинаковая блокировка разделяет выполнение. Каждая задача выдаёт SHA-256-маркер.",
          ),
        ],
        [
          pair("READ BACK", "СВЕРКА"),
          pair(
            "Inspect the recorded result",
            "Проверить сохранённый результат",
          ),
          pair(
            "Starts, finishes, allocations and exit codes are public. Replay animation is a view of that trace.",
            "Старты, завершения, выделение ресурсов и коды выхода опубликованы. Анимация отображает эту запись.",
          ),
        ],
      ],
      sources: [
        [
          E.corebroker.sources[0].url,
          pair("Original trace", "Исходная запись"),
        ],
        [E.corebroker.sources[1].url, pair("Capture method", "Метод записи")],
        ["data/corebroker.json", pair("Walkthrough data", "Данные просмотра")],
      ],
    },
    research: {
      name: "ChronoField",
      short: pair("Compression R&D", "Исследования сжатия"),
      kind: pair(
        "ORIGINAL RESEARCH / EXACT VIDEO",
        "СОБСТВЕННЫЕ ИССЛЕДОВАНИЯ / ТОЧНОЕ ВИДЕО",
      ),
      title: pair(
        "Inspect the comparison behind the claim.",
        "Посмотреть сравнение за каждым результатом.",
      ),
      lead: pair(
        "An exact-video codec and related-rendition storage system. Explore separately published measurement summaries: select a study, inspect size and speed, and follow its original source.",
        "Кодек точного видео и система хранения связанных версий. Выберите отдельное опубликованное исследование, сравните размер и скорость и перейдите к первоисточнику.",
      ),
      metrics: [
        [
          "−41.37%",
          pair(
            "bytes · retained three-source Fast point",
            "объём · Fast, сравнение трёх источников",
          ),
        ],
        [
          "8.42×",
          pair(
            "encode speed · the same Fast point",
            "скорость кодирования · тот же Fast",
          ),
        ],
        [
          "4.98×",
          pair(
            "decode speed · the same Fast point",
            "скорость декодирования · тот же Fast",
          ),
        ],
      ],
      case: P + "research/README.md",
      decisions: [
        [
          pair(
            "Make exactness part of the result",
            "Включать точность в результат",
          ),
          pair(
            "Size and speed are compared alongside exact reconstruction. The published summaries report RGB SHA-256 checks.",
            "Размер и скорость сравниваются вместе с точным восстановлением. В опубликованных результатах указаны проверки RGB SHA-256.",
          ),
          pair(
            "The three Fast metrics belong to one retained aggregate.",
            "Три показателя Fast относятся к одному сохранённому сравнению.",
          ),
        ],
        [
          pair(
            "Separate different populations",
            "Разделять разные наборы данных",
          ),
          pair(
            "A three-source video comparison and a family of related outputs answer different storage questions. Each keeps its own baseline.",
            "Сравнение трёх видео и семейство связанных версий отвечают на разные задачи хранения. У каждого свой эталон.",
          ),
          pair(
            "Family storage: 45.14 MB → 7.38 MB; 20/20 outputs exact.",
            "Семейство: 45,14 МБ → 7,38 МБ; 20/20 версий точные.",
          ),
        ],
        [
          pair("Expose the evidence boundary", "Дать проверяемый контекст"),
          pair(
            "The viewer carries the public settings and document revisions. Missing absolute values stay absent, so a normalized display never becomes a fabricated measurement.",
            "В просмотре доступны опубликованные условия и версии документов. Неизвестные абсолютные значения остаются неизвестными.",
          ),
          pair(
            "Public results stay separate from protected research implementation.",
            "Опубликованные результаты отделены от закрытой реализации.",
          ),
        ],
      ],
      delivery: [
        [
          pair("ORIGINAL WORK", "СВОЯ РАЗРАБОТКА"),
          pair("Codec and storage research", "Кодеки и хранение"),
          pair(
            "ChronoField results are published. Other research domains include PTC/text, model weights and KV cache; their protected mechanics remain private.",
            "Результаты ChronoField опубликованы. Другие направления: PTC/текст, нейровеса и KV-кеш; важные механизмы остаются закрытыми.",
          ),
        ],
        [
          pair("PUBLISHED EVIDENCE", "ОПУБЛИКОВАННЫЕ ДАННЫЕ"),
          pair(
            "Keep each comparison intact",
            "Сохранять каждое сравнение целиком",
          ),
          pair(
            "Fast, Ultra Fast, Archive and family storage retain separate populations and units. The viewer adds no new benchmark run.",
            "Fast, Ultra Fast, Archive и семейное хранение сохраняют свои наборы и единицы. Просмотр не добавляет новых прогонов.",
          ),
        ],
        [
          pair("NEXT VALIDATION", "СЛЕДУЮЩАЯ ПРОВЕРКА"),
          pair(
            "Independent controlled reproduction",
            "Независимое воспроизведение",
          ),
          pair(
            "A useful next step is a controlled independent run with an agreed corpus and baseline. That verification can preserve closed implementations.",
            "Полезный следующий шаг — независимый контролируемый прогон с согласованными данными и эталоном, сохраняя реализации закрытыми.",
          ),
        ],
      ],
      sources: [
        [
          P + "research/README.md",
          pair("Research case", "Исследовательский кейс"),
        ],
        [
          E.research.sources[0].url,
          pair("Pinned public measurements", "Зафиксированные измерения"),
        ],
        [
          "data/research.json",
          pair("Chart data and units", "Данные графика и единицы"),
        ],
      ],
    },
    video: {
      name: "Video Studio",
      short: pair("Native GPU pipeline", "Нативный GPU-конвейер"),
      kind: pair(
        "NATIVE SYSTEM / C++ + D3D12 + NVENC",
        "НАТИВНАЯ СИСТЕМА / C++ + D3D12 + NVENC",
      ),
      title: pair(
        "Follow a frame through the system.",
        "Пройти путь кадра через систему.",
      ),
      lead: pair(
        "Realtime playback, recording and stereo/VR. Explore the architecture, the resource-ownership decisions and a retained matched-settings optimization. The implementation is public.",
        "Воспроизведение в реальном времени, запись и стерео/VR. Посмотрите архитектуру, управление ресурсами и сохранённое сравнение оптимизации. Реализация открыта.",
      ),
      metrics: [
        [
          "C++20",
          pair(
            "native D3D12 / NVENC implementation",
            "нативная реализация D3D12 / NVENC",
          ),
        ],
        [
          "+22.9%",
          pair(
            "native-stage median throughput · matched settings",
            "медианная скорость нативного этапа",
          ),
        ],
        [
          "24.393 → 29.981",
          pair(
            "FPS · retained V22 A/B, RTX 4060 Laptop",
            "FPS · сравнение V22, RTX 4060 Laptop",
          ),
        ],
      ],
      case: V + "ENGINEERING_OVERVIEW.md",
      decisions: [
        [
          pair(
            "Separate acknowledgement from completion",
            "Разделить приём и завершение",
          ),
          pair(
            "The producer may replenish its queue while GPU work is in flight. Fences and resource lifetime govern when a buffer can actually be reused.",
            "Производитель пополняет очередь, пока GPU ещё работает. Повторное использование буфера определяется fences и временем жизни ресурса.",
          ),
          pair(
            "Inspect the four-slot ring and allocator ownership in the public source.",
            "В открытом коде: кольцо из четырёх слотов и владение allocator.",
          ),
        ],
        [
          pair(
            "Keep recording frames on the GPU",
            "Сохранять кадры записи на GPU",
          ),
          pair(
            "Eligible continuous recording connects GPU NV12 to D3D12 NVENC. Safe fallback is restricted to initialization, before frame submission.",
            "Подходящий режим непрерывной записи связывает GPU NV12 с D3D12 NVENC. Безопасный fallback ограничен инициализацией до подачи кадров.",
          ),
          pair(
            "V22 A/B: matched H.265 P1/LL, QP18, warmup + three repetitions.",
            "V22 A/B: одинаковые H.265 P1/LL, QP18, прогрев + три повтора.",
          ),
        ],
        [
          pair(
            "Measure the complete path separately",
            "Отдельно измерять полный путь",
          ),
          pair(
            "Native throughput excludes decoding and guide generation. A separate complete recording preserves the practical end-to-end measurement.",
            "Нативная скорость не включает декодирование и генерацию guides. Отдельная полная запись сохраняет сквозное измерение.",
          ),
          pair(
            "Complete 240-frame recording: 22.86 s / 10.50 FPS.",
            "Полная запись 240 кадров: 22,86 с / 10,50 FPS.",
          ),
        ],
      ],
      delivery: [
        [
          "2026-09-02",
          pair(
            "Stabilize the audio lifecycle",
            "Стабилизировать жизненный цикл аудио",
          ),
          pair(
            "Public implementation change: observe media/sample time and preserve the healthy endpoint through pause and resume.",
            "Публичное изменение: наблюдать медиавремя и время сэмплов, сохранять рабочий аудио-endpoint при паузе и продолжении.",
          ),
        ],
        [
          "2026-09-03",
          pair(
            "Bound transport in complete frames",
            "Ограничить транспорт целыми кадрами",
          ),
          pair(
            "Public revisions retain NV12 transport and complete-frame buffering, then a four-slot D3D12 pipeline with its own paired measurements.",
            "Публичные версии сохраняют NV12-транспорт и буферизацию целыми кадрами, затем D3D12-конвейер из четырёх слотов с отдельными измерениями.",
          ),
        ],
        [
          "2026-09-04",
          pair(
            "Move recording output directly to NVENC",
            "Передать выход записи прямо в NVENC",
          ),
          pair(
            "The source change and retained V22 comparison connect GPU-resident recording to the measured native-stage gain. Commit dates identify revisions.",
            "Изменение кода и сравнение V22 связывают запись без выгрузки с GPU с измеренным ускорением нативного этапа. Даты относятся к версиям.",
          ),
        ],
      ],
      sources: [
        [
          V + "DEMO_GUIDE.md",
          pair("Run the public demo", "Запустить публичную проверку"),
        ],
        [
          V + "ENGINEERING_OVERVIEW.md",
          pair("Source-linked architecture", "Архитектура со ссылками на код"),
        ],
        [
          V + "OPTIMIZATION_V22_RU.md",
          pair("A/B measurement details", "Подробности измерения A/B"),
        ],
        [
          V + "docs/DECISION_TIMELINE.md",
          pair("Dated decisions and commits", "Датированные решения и коммиты"),
        ],
      ],
    },
    tervallis: {
      name: "Tervallis",
      short: pair("Persistent agent workspace", "Рабочая среда агентов"),
      kind: pair(
        "PRODUCT / RESEARCH WORKSPACE",
        "ПРОДУКТ / ИССЛЕДОВАТЕЛЬСКАЯ СРЕДА",
      ),
      title: pair(
        "Delegation ends with a saved result.",
        "Делегирование заканчивается сохранённым результатом.",
      ),
      lead: pair(
        "A shared workspace for projects, tasks, experiments, decisions and discussions. Walk through the verified handoff and the checks that keep agent work connected to its original context.",
        "Единая среда проектов, задач, экспериментов, решений и обсуждений. Пройдите проверенный цикл передачи задачи и проверки связи результата с исходным контекстом.",
      ),
      metrics: [
        [
          "20",
          pair(
            "agents organized across different responsibilities",
            "агентов распределено по обязанностям",
          ),
        ],
        [
          "1",
          pair(
            "research project with a checked complete handoff",
            "проект с проверенным полным циклом",
          ),
        ],
        [
          "MCP",
          pair(
            "project context → work → persisted result",
            "контекст проекта → работа → результат",
          ),
        ],
      ],
      case: P + "projects/tervallis.md",
      decisions: [
        [
          pair(
            "Keep work in project context",
            "Держать работу в контексте проекта",
          ),
          pair(
            "Discussion, task, experiment and result share a persistent workspace. The next worker can find what was requested and what was saved.",
            "Обсуждение, задача, эксперимент и результат живут в одной среде. Следующий исполнитель видит запрос и сохранённый результат.",
          ),
          pair(
            "Checked: the result returns to the discussion that requested it.",
            "Проверено: результат возвращается в исходное обсуждение.",
          ),
        ],
        [
          pair(
            "Make retries and changes explicit",
            "Явно обрабатывать повторы и изменения",
          ),
          pair(
            "Repeated task creation is idempotent. Versioned operations give state transitions a concrete reference during handoffs.",
            "Повторное создание задачи идемпотентно. Версии операций дают конкретную точку отсчёта для изменения состояния.",
          ),
          pair(
            "Checked: repeat creation returns the existing task.",
            "Проверено: повторное создание возвращает существующую задачу.",
          ),
        ],
        [
          pair(
            "Read the saved result back",
            "Повторно читать сохранённый результат",
          ),
          pair(
            "A worker response is followed by a persistence check. File transfers use checksum comparison to confirm the content.",
            "За ответом исполнителя следует проверка сохранения. Передача файлов сопровождается сравнением контрольных сумм.",
          ),
          pair(
            "The complete handoff was checked for one research project.",
            "Полный цикл проверен для одного исследовательского проекта.",
          ),
        ],
      ],
      delivery: [
        [
          pair("WORK ORGANIZATION", "ОРГАНИЗАЦИЯ РАБОТЫ"),
          pair("Divide responsibility", "Разделить обязанности"),
          pair(
            "Planning, implementation, verification and documentation were organized across 20 agents. This is a working arrangement, not a 20-worker load benchmark.",
            "Планирование, реализация, проверка и документация распределены между 20 агентами. Это организация работы, а не нагрузочный тест 20 исполнителей.",
          ),
        ],
        [
          pair("CHECKED CYCLE", "ПРОВЕРЕННЫЙ ЦИКЛ"),
          pair(
            "Follow one request to persistence",
            "Довести запрос до сохранения",
          ),
          pair(
            "Read event, claim work, execute, return the result to the same discussion, then read it back.",
            "Прочитать событие, забрать задачу, выполнить, вернуть результат в исходное обсуждение и повторно его прочитать.",
          ),
        ],
        [
          pair("INTEGRATION", "ИНТЕГРАЦИЯ"),
          pair(
            "Preserve continuity between workers",
            "Сохранять преемственность",
          ),
          pair(
            "Versioned changes, idempotent creation and transfer checks keep tasks and files usable beyond one agent turn.",
            "Версии изменений, идемпотентное создание и проверки передачи сохраняют задачи и файлы пригодными для дальнейшей работы.",
          ),
        ],
      ],
      sources: [
        [P + "projects/tervallis.md", pair("Platform case", "Кейс платформы")],
        [
          P + "docs/working-with-agents.md",
          pair("Working with agents", "Работа с агентами"),
        ],
        [
          P + "docs/decision-stories.md",
          pair("Decision stories", "Истории решений"),
        ],
      ],
    },
  };
  function stopReplay() {
    cancelAnimationFrame(frame);
    playing = false;
    frame = 0;
  }
  function updateRoute() {
    const next = `#project=${project}&lang=${lang}`;
    if (location.hash !== next) history.replaceState(null, "", next);
  }
  function render() {
    stopReplay();
    document.documentElement.lang = lang;
    const p = projects[project];
    document.title = `${p.name} · Absamad Manturov`;
    $("identity-sub").textContent = tr(
      "AI · systems · research",
      "AI · системы · исследования",
    );
    $("intro-label").textContent = tr(
      "SELECTED ENGINEERING WORK / 2026",
      "ИЗБРАННЫЕ РАЗРАБОТКИ / 2026",
    );
    $("intro-title").innerHTML = tr(
      "Explore the systems.<br><span>Inspect the results.</span>",
      "Посмотреть системы.<br><span>Проверить результаты.</span>",
    );
    $("intro-text").textContent = tr(
      "Five projects, from autonomous business operations to native video and original compression research.",
      "Пять проектов: автономные бизнес-операции, инфраструктура агентов, GPU-видео и исследования сжатия.",
    );
    $("intro-role").textContent = tr(
      "I define product behavior, design systems, coordinate agent-assisted implementation and verify outcomes.",
      "Я определяю поведение продукта, проектирую системы, координирую разработку с агентами и проверяю результат.",
    );
    $("language").textContent = lang === "en" ? "RU" : "EN";
    $("language").setAttribute(
      "aria-label",
      tr("Switch to Russian", "Switch to English"),
    );
    document.querySelector(".skip").textContent = tr(
      "Skip to project",
      "Перейти к проекту",
    );
    $("projects").setAttribute("aria-label", tr("Projects", "Проекты"));
    $("projects").innerHTML = L.ids
      .map(
        (id, i) =>
          `<a class="project-choice" href="#project=${id}&lang=${lang}" data-project="${id}"${id === project ? ' aria-current="page"' : ""}><span class="num">0${i + 1}</span><strong>${projects[id].name}</strong><small>${esc(t(projects[id].short))}</small></a>`,
      )
      .join("");
    $("project-kind").textContent = t(p.kind);
    $("project-title").textContent = t(p.title);
    $("project-lead").textContent = t(p.lead);
    $("case-link").textContent = tr("Read the case ↗", "Читать кейс ↗");
    $("case-link").href = p.case;
    $("metrics").innerHTML = p.metrics
      .map(
        (m) =>
          `<div class="metric"><strong>${esc(project === "aster" && lang === "ru" && m[0] === "2 days" ? "2 дня" : m[0])}</strong><span>${esc(t(m[1]))}</span></div>`,
      )
      .join("");
    $("decisions-title").textContent = tr(
      "Decisions that shaped the system",
      "Решения, определившие систему",
    );
    $("decisions").innerHTML = p.decisions
      .map(
        (d) =>
          `<article class="decision"><h4>${esc(t(d[0]))}</h4><p>${esc(t(d[1]))}</p><span class="proof">${esc(t(d[2]))}</span></article>`,
      )
      .join("");
    $("delivery-title").textContent = tr(
      "Delivery and evidence",
      "Разработка и подтверждения",
    );
    $("delivery").innerHTML = p.delivery
      .map(
        (d) =>
          `<article class="milestone"><span class="milestone-label">${esc(t(d[0]))}</span><h4>${esc(t(d[1]))}</h4><p>${esc(t(d[2]))}</p></article>`,
      )
      .join("");
    $("sources-title").textContent = tr("Go deeper", "Подробнее");
    $("sources").innerHTML = p.sources.map((s) => link(s[0], t(s[1]))).join("");
    $("footer-note").textContent = tr(
      "A public window into the work. No sign-in or API key required.",
      "Публичный обзор разработок. Вход и API-ключ не нужны.",
    );
    $("offline-link").textContent = tr("Offline edition ↓", "Офлайн-версия ↓");
    $("contact").textContent = tr("Get in touch ↗", "Связаться ↗");
    $("close-image").setAttribute(
      "aria-label",
      tr("Close screenshot", "Закрыть снимок"),
    );
    renderExperience();
    updateRoute();
  }
  function renderExperience() {
    if (project === "aster") return renderAster();
    if (project === "corebroker") return renderBroker();
    if (project === "research") return renderResearch();
    renderFlow(project);
  }
  const asterSteps = [
    {
      title: pair("Understand the request", "Понять запрос"),
      sub: pair(
        "Service, price and a useful next question",
        "Услуга, стоимость и уточнение",
      ),
      image: "aster-chat.png",
      caption: pair(
        "The actual model reply explains the 3,500 RUB menu-layout service and asks whether the result is for print or digital use.",
        "Настоящий ответ модели объясняет услугу за 3 500 ₽ и уточняет, нужен результат для печати или цифрового размещения.",
      ),
      result: pair(
        "The reply uses the service context and moves the conversation toward a specific order.",
        "Ответ использует контекст услуги и ведёт диалог к конкретному заказу.",
      ),
    },
    {
      title: pair("Create the business result", "Создать бизнес-результат"),
      sub: pair(
        "The conversation and CRM agree",
        "Диалог и записи CRM совпадают",
      ),
      image: "aster-order-invoice.png",
      caption: pair(
        "The captured application shows order ORD-5E6411FAED and invoice INV-5C493B: two layouts, 7,000 RUB, awaiting payment.",
        "На снимке приложения заказ ORD-5E6411FAED и счёт INV-5C493B: два макета, 7 000 ₽, ожидание оплаты.",
      ),
      result: pair(
        "Quantity, amount and state agree across the customer view and CRM. Presenting the invoice does not mark it paid.",
        "Количество, сумма и статус совпадают в клиентском окне и CRM. Показ счёта не отмечает его оплаченным.",
      ),
    },
    {
      title: pair("Give the team one workspace", "Дать команде общую среду"),
      sub: pair(
        "Customers, operations and finance",
        "Клиенты, операции и финансы",
      ),
      image: "aster-workspace.png",
      caption: pair(
        "Actual application capture: order stages, invoices and payments, recent orders, staff tasks and autonomy controls.",
        "Снимок приложения: этапы заказов, счета и оплаты, последние заказы, задачи команды и управление автономностью.",
      ),
      result: pair(
        "The owner can use conversation while staff retain detailed customer, order, finance, stock and team controls.",
        "Владелец работает через разговор, а команда сохраняет подробные инструменты по клиентам, заказам, финансам, складу и задачам.",
      ),
    },
    {
      title: pair(
        "Check the rest of the lifecycle",
        "Проверить оставшийся цикл",
      ),
      sub: pair(
        "Changes, cancellations and exceptions",
        "Изменения, отмены и исключения",
      ),
      image: null,
      caption: pair(
        "Selected observed outcomes from the retained v0.55 verification, distinct from the v0.54 screenshots. External channels and bank events used local adapters.",
        "Выбранные результаты проверки v0.55, отдельно от снимков v0.54. Внешние каналы и банковские события использовали локальные адаптеры.",
      ),
      result: pair(
        "Acceptance follows the final saved state through a real lifecycle, including changes and human exceptions.",
        "Приёмка следует за итоговым сохранённым состоянием через изменения и исключения, требующие человека.",
      ),
    },
  ];
  function renderAster() {
    if (step > 3) step = 0;
    const s = asterSteps[step];
    const content = s.image
      ? `<button type="button" class="image-button" data-image="${s.image}" aria-label="${esc(tr("Enlarge application screenshot", "Увеличить снимок приложения"))}"><img src="../media/${s.image}" alt="${esc(t(s.caption))}" width="${s.image === "aster-chat.png" ? 1545 : 1996}" height="${s.image === "aster-chat.png" ? 910 : 1248}"><span class="zoom-hint">${tr("Enlarge ↗", "Увеличить ↗")}</span></button>`
      : `<div class="result-grid">${[
          [
            pair("Cancel an unpaid order", "Отмена неоплаченного заказа"),
            pair(
              "Associated invoice is voided.",
              "Связанный счёт аннулирован.",
            ),
          ],
          [
            pair("Move or cancel a booking", "Перенос или отмена записи"),
            pair(
              "Three bookings rescheduled; two cancelled.",
              "Три записи перенесены, две отменены.",
            ),
          ],
          [
            pair("Exceptional discount or refund", "Особая скидка или возврат"),
            pair(
              "Four separate staff tasks created.",
              "Созданы четыре отдельные задачи сотрудникам.",
            ),
          ],
          [
            pair(
              "Handle an already-paid invoice",
              "Обработка оплаченного счёта",
            ),
            pair(
              "The invoice was not paid again in the local checks.",
              "В локальных проверках повторная оплата не произведена.",
            ),
          ],
        ]
          .map(
            (r) =>
              `<div class="result-card"><strong>${esc(t(r[0]))}</strong><span>${esc(t(r[1]))}</span></div>`,
          )
          .join("")}</div>`;
    $("experience").innerHTML =
      `<div class="walkthrough"><div class="steps"><p class="panel-label">${tr("FOLLOW THE OUTCOME", "ПУТЬ К РЕЗУЛЬТАТУ")}</p>${asterSteps.map((v, i) => `<button type="button" class="step" data-step="${i}" aria-pressed="${i === step}"><span class="n">${i + 1}</span><span><strong>${esc(t(v.title))}</strong><small>${esc(t(v.sub))}</small></span></button>`).join("")}</div><div class="capture-area"><div class="capture-bar"><span><i class="dot"></i>${tr(step === 3 ? "RETAINED VERIFICATION / v0.55" : "APPLICATION CAPTURE / v0.54", step === 3 ? "СОХРАНЁННАЯ ПРОВЕРКА / v0.55" : "СНИМОК ПРИЛОЖЕНИЯ / v0.54")}</span><span>${step + 1} / 4</span></div>${content}<p class="capture-caption">${esc(t(s.caption))}</p></div></div><div class="outcome"><strong>${tr("What this demonstrates", "Что это показывает")}</strong><p>${esc(t(s.result))}</p></div><p class="scope-note">${tr("Interactive walkthrough of captured application states with synthetic business records. This page does not run the private CRM or make model calls.", "Интерактивный просмотр снимков приложения с синтетическими бизнес-записями. Эта страница не запускает закрытую CRM и не обращается к модели.")}</p>`;
  }
  function brokerScene() {
    return (
      E.corebroker.scenarios.find((s) => s.id === scenario) ||
      E.corebroker.scenarios[0]
    );
  }
  function renderBroker() {
    const s = brokerScene();
    const max =
      Math.ceil(Math.max(...s.jobs.map((j) => j.finished_ms)) / 1000) * 1000;
    time = Math.min(time, max);
    $("experience").innerHTML =
      `<div class="timeline-panel"><div class="control-row"><div class="segmented">${[
        ["independent", tr("Independent workers", "Независимые задачи")],
        ["shared-resource", tr("Shared resource", "Общий ресурс")],
      ]
        .map(
          ([id, label]) =>
            `<button type="button" data-scenario="${id}" aria-pressed="${scenario === id}">${label}</button>`,
        )
        .join(
          "",
        )}</div><button class="play-button" type="button" id="play">${tr("Play trace", "Воспроизвести")}</button></div><p class="chart-eyebrow">${tr("RECORDED WORKER INTERVALS / 2026-11-03", "ЗАПИСАННЫЕ ИНТЕРВАЛЫ ЗАДАЧ / 2026-11-03")}</p><div class="timeline">${s.jobs
        .map((j) => {
          const p = L.position(j.started_ms, j.finished_ms, max);
          return `<div class="lane"><div class="lane-label">${tr("Worker", "Задача")} ${j.label}<small>${tr("core", "ядро")} ${j.physical_cores.join(",")}</small></div><div class="lane-track"><span class="wait-bar" style="left:${(j.submitted_ms / max) * 100}%;width:${((j.started_ms - j.submitted_ms) / max) * 100}%"></span><span class="job-bar" style="left:${p.left}%;width:${p.width}%">${fmt((j.finished_ms - j.started_ms) / 1000, 3)} s</span><span class="playhead"></span></div></div>`;
        })
        .join(
          "",
        )}</div><div class="time-scale">${[0, 1, 2, 3, 4].map((n) => `<span>${fmt((n * max) / 4000, 1)} s</span>`).join("")}</div><input id="scrub" class="scrub" type="range" min="0" max="${max}" step="10" value="${time}" aria-label="${tr("Recorded time in milliseconds", "Время записи в миллисекундах")}"><div class="replay-status"><span id="time-display"></span><span id="worker-states" class="state" aria-live="polite"></span></div><div class="outcome"><strong>${tr("Observed result", "Результат записи")}</strong><p>${s.shared_lock ? tr("B is submitted before A finishes. With the same named lock, its worker starts after A finishes: zero execution overlap.", "B подана до завершения A. С одинаковой блокировкой она начинает выполнение после завершения A: пересечение равно нулю.") : tr("Workers run on separate physical cores and overlap for 3.087 seconds. Both exit with code 0.", "Задачи работают на разных физических ядрах и пересекаются на 3,087 секунды. Обе завершились с кодом 0.")}</p></div><div class="table-wrap"><table class="evidence-table"><thead><tr><th>${tr("Worker", "Задача")}</th><th>${tr("Submitted", "Подана")} (ms)</th><th>${tr("Started", "Начата")} (ms)</th><th>${tr("Finished", "Завершена")} (ms)</th><th>${tr("Logical CPUs", "Логические CPU")}</th></tr></thead><tbody>${s.jobs.map((j) => `<tr><td>${j.label}</td><td>${fmt(j.submitted_ms, 3)}</td><td>${fmt(j.started_ms, 3)}</td><td>${fmt(j.finished_ms, 3)}</td><td>${j.logical_cpus.join(" / ")}</td></tr>`).join("")}</tbody></table></div><p class="scope-note">${tr("Replay of the actual curated trace. The workers held resources for four seconds and emitted SHA-256 markers. This demonstrates coordination, not throughput speedup. Submission-to-start includes process startup and handoff.", "Воспроизведение фактической записи. Задачи удерживали ресурсы четыре секунды и выдавали SHA-256-маркеры. Это проверка координации. Интервал от подачи до старта включает запуск и передачу управления.")}</p></div>`;
    updateReplay();
  }
  function updateReplay() {
    const s = brokerScene();
    const max =
      Math.ceil(Math.max(...s.jobs.map((j) => j.finished_ms)) / 1000) * 1000;
    document
      .querySelectorAll(".playhead")
      .forEach((n) => (n.style.left = `${(time / max) * 100}%`));
    if ($("scrub")) $("scrub").value = time;
    if ($("time-display"))
      $("time-display").textContent =
        `${fmt(time / 1000, 2)} / ${fmt(max / 1000, 1)} s`;
    const labels = {
      "not-submitted": tr("not submitted", "не подана"),
      submitted: tr("submitted", "подана"),
      running: tr("running", "выполняется"),
      completed: tr("complete", "завершена"),
    };
    const text = s.jobs
      .map((j) => `${j.label}: ${labels[L.stateAt(j, time)]}`)
      .join(" · ");
    if ($("worker-states") && $("worker-states").textContent !== text)
      $("worker-states").textContent = text;
    if ($("play"))
      $("play").textContent = playing
        ? tr("Pause", "Пауза")
        : tr("Play trace", "Воспроизвести");
  }
  function tick(now) {
    if (!playing) return;
    const s = brokerScene();
    const max =
      Math.ceil(Math.max(...s.jobs.map((j) => j.finished_ms)) / 1000) * 1000;
    if (last) time = Math.min(max, time + now - last);
    last = now;
    updateReplay();
    if (time >= max) {
      stopReplay();
      updateReplay();
      return;
    }
    frame = requestAnimationFrame(tick);
  }
  function researchName(id) {
    return {
      "fast-three-source": tr(
        "Fast · 3 Full-HD sources",
        "Fast · 3 Full-HD источника",
      ),
      "ultra-fast-single-source": tr(
        "Ultra Fast · 1 Full-HD source",
        "Ultra Fast · 1 Full-HD источник",
      ),
      "archive-size-only": tr(
        "Archive · published maximum size reduction",
        "Archive · опубликованный максимум сжатия",
      ),
      "related-family-20": tr(
        "Family storage · 20 related outputs",
        "Семейное хранение · 20 связанных версий",
      ),
    }[id];
  }
  function renderResearch() {
    const e =
      E.research.experiments.find((x) => x.id === experiment) ||
      E.research.experiments[0];
    const m = e.metrics[metric];
    const family = e.id === "related-family-20";
    const available = m && m.candidate !== null;
    const compare = available && m.baseline !== null;
    const labels = {
      bytes: tr("Compressed size", "Размер"),
      encode_speed: tr("Encode speed", "Кодирование"),
      decode_speed: tr("Decode speed", "Декодирование"),
    };
    let headline = labels[metric];
    let suffix =
      metric === "bytes"
        ? family
          ? " MB"
          : ""
        : m?.unit === "frames_per_second"
          ? " FPS"
          : "×";
    if (compare)
      headline =
        metric === "bytes"
          ? e.id === "archive-size-only"
            ? tr(
                `Up to ${fmt(m.reported_reduction_percent)}% fewer bytes`,
                `До ${fmt(m.reported_reduction_percent)}% экономии объёма`,
              )
            : tr(
                `${fmt(m.reported_reduction_percent)}% fewer bytes`,
                `На ${fmt(m.reported_reduction_percent)}% меньше данных`,
              )
          : `${fmt(m.candidate)}× ${tr("baseline speed", "скорость эталона")}`;
    const max = compare ? Math.max(m.baseline, m.candidate) : 1;
    const bars = compare
      ? [
          [
            "baseline",
            family ? tr("Separate CFT11", "Отдельные CFT11") : "AV1",
            m.baseline,
          ],
          ["candidate", family ? "CFMS" : "ChronoField", m.candidate],
        ]
          .map(
            ([kind, name, value]) =>
              `<div class="bar-row ${kind}"><span>${esc(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${(value / max) * 100}%"></div></div><span class="bar-value">${fmt(value)}${suffix}</span></div>`,
          )
          .join("")
      : available
        ? `<div class="metric"><strong>${fmt(m.candidate)}${suffix}</strong><span>${tr("Published aggregate rate; no reference rate disclosed.", "Опубликованная совокупная скорость; скорость эталона не указана.")}</span></div>`
        : `<p class="scope-note">${tr("This metric is not published for the selected study.", "Этот показатель для выбранного исследования не опубликован.")}</p>`;
    const population = family
      ? tr(
          "2 source excerpts · 20 related outputs",
          "2 исходных фрагмента · 20 связанных версий",
        )
      : e.id === "archive-size-only"
        ? tr(
            "Published “up to” result; detailed population undisclosed",
            "Результат «до»; подробный набор не опубликован",
          )
        : `${e.population.source_count} ${e.population.source_count === 1 ? tr("Full-HD source", "Full-HD источник") : tr("Full-HD sources", "Full-HD источника")}`;
    const studyMetrics = family
      ? [
          [
            "45.14 → 7.38 MB",
            tr(
              "complete related-family storage",
              "полное хранение семейства версий",
            ),
          ],
          [
            "20 / 20",
            tr("outputs reconstructed exactly", "версий восстановлены точно"),
          ],
          [
            "261 FPS",
            tr(
              "aggregate compact decode · no baseline rate",
              "совокупное декодирование · без скорости эталона",
            ),
          ],
        ]
      : [
          [
            (e.id === "archive-size-only" ? tr("up to ", "до ") : "−") +
              fmt(e.metrics.bytes.reported_reduction_percent) +
              "%",
            tr("bytes · selected study", "объём · выбранное исследование"),
          ],
          [
            e.metrics.encode_speed.candidate === null
              ? "—"
              : fmt(e.metrics.encode_speed.candidate) + "×",
            tr(
              "encode speed · selected study",
              "кодирование · выбранное исследование",
            ),
          ],
          [
            e.metrics.decode_speed.candidate === null
              ? "—"
              : fmt(e.metrics.decode_speed.candidate) + "×",
            tr(
              "decode speed · selected study",
              "декодирование · выбранное исследование",
            ),
          ],
        ];
    $("metrics").innerHTML = studyMetrics
      .map(
        ([value, label]) =>
          `<div class="metric"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`,
      )
      .join("");
    $("experience").innerHTML =
      `<div class="chart-panel"><div class="control-row"><div class="chart-controls"><label for="study">${tr("Study", "Исследование")}</label><select id="study">${E.research.experiments.map((x) => `<option value="${x.id}"${x.id === experiment ? " selected" : ""}>${esc(researchName(x.id))}</option>`).join("")}</select></div><span class="note-tag">${tr("Published results explorer", "Просмотр опубликованных результатов")}</span></div><div class="chart-layout"><div><div class="segmented">${Object.entries(
        labels,
      )
        .map(
          ([id, label]) =>
            `<button type="button" data-metric="${id}" aria-pressed="${id === metric}">${label}</button>`,
        )
        .join(
          "",
        )}</div><p class="chart-eyebrow" style="margin-top:25px">${esc(population)}</p><h4 class="chart-title">${esc(headline)}</h4>${bars}<p class="chart-note">${metric === "bytes" && !family ? tr("Size index: the measured AV1 baseline = 100. Absolute byte counts are not disclosed in the public summary.", "Индекс размера: измеренный эталон AV1 = 100. Абсолютное число байтов в публичном результате не указано.") : family && metric === "bytes" ? tr("Complete CFMS catalog, including manifests and index, compared with independent already-compressed CFT11 files. Published MB values are rounded.", "Полный каталог CFMS с метаданными и индексом сравнивается с отдельными уже сжатыми CFT11-файлами. Опубликованные МБ округлены.") : tr("Higher speed is better. Each chart stays within its selected study and published units.", "Большая скорость лучше. Каждый график сохраняет выбранное исследование и опубликованные единицы.")}</p></div><aside class="fact-sheet"><dl><dt>${tr("BASELINE", "ЭТАЛОН")}</dt><dd>${esc(e.settings.baseline.label)}${e.settings.baseline.cpu_used !== undefined && e.settings.baseline.cpu_used !== null ? " · cpu-used=" + e.settings.baseline.cpu_used : ""}</dd><dt>${tr("RECONSTRUCTION", "ВОССТАНОВЛЕНИЕ")}</dt><dd>${esc(family ? tr("20 / 20 outputs exact", "20 / 20 версий точные") : e.id === "archive-size-only" ? tr("Exact RGB as reported", "Точное RGB по опубликованному результату") : tr("Exact RGB, SHA-256 reported", "Точное RGB, указана проверка SHA-256"))}</dd><dt>${tr("PUBLIC SOURCE", "ПЕРВОИСТОЧНИК")}</dt><dd>${link(E.research.sources.find((s) => s.id === e.source_ids[0]).url, tr("Open pinned measurement summary", "Открыть зафиксированный результат"))}</dd><dt>${tr("COMPARISON SCOPE", "ГРАНИЦЫ СРАВНЕНИЯ")}</dt><dd>${tr("Separate studies. No interpolation, combined maxima or new codec execution.", "Отдельные исследования. Без интерполяции, объединения максимумов и нового запуска кодека.")}</dd></dl></aside></div></div>`;
  }
  const flows = {
    video: [
      [
        pair("Produce frames", "Подготовить кадры"),
        pair(
          "Persistent producers and bounded input",
          "Постоянные производители и ограниченный вход",
        ),
        pair(
          "Prepared frames and guides arrive through a bounded transport. Backpressure keeps producers from overrunning the consumer.",
          "Подготовленные кадры и guides поступают через ограниченный транспорт. Обратное давление сдерживает производителя.",
        ),
        "frame-ownership-and-backpressure",
      ],
      [
        pair("Own GPU resources", "Владеть GPU-ресурсами"),
        pair(
          "Acknowledgement and completion differ",
          "Приём и завершение различаются",
        ),
        pair(
          "Producer acknowledgement allows new input. GPU fences determine when in-flight allocators and resources are safe to reuse.",
          "Подтверждение приёма разрешает новый вход. GPU fences определяют безопасное переиспользование ресурсов.",
        ),
        "frame-ownership-and-backpressure",
      ],
      [
        pair("Process on the GPU", "Обработать на GPU"),
        pair("Native D3D12 work", "Нативная работа D3D12"),
        pair(
          "Motion/depth guides feed the native pipeline. The architecture separates estimated guides from authoritative engine geometry.",
          "Motion/depth guides поступают в нативный конвейер. Оценённые guides отделены от точной геометрии движка.",
        ),
        "from-a-video-file-to-useful-outputs",
      ],
      [
        pair("Recording: encode + mux", "Запись: кодирование + mux"),
        pair("Eligible direct NVENC path", "Подходящий прямой NVENC-путь"),
        pair(
          "For eligible continuous recording, GPU NV12 reaches NVENC through mapped resources with explicit fences, draining and cleanup.",
          "В подходящем непрерывном режиме GPU NV12 поступает в NVENC с явными fences, завершением и освобождением.",
        ),
        "recording-keep-raw-output-on-the-gpu",
      ],
      [
        pair("Realtime: present", "Реалтайм: воспроизвести"),
        pair("Media time has its own clock", "У медиавремени свои часы"),
        pair(
          "Recording muxes compressed output. Realtime tracks native media time and observed audio sample time separately from processing throughput. These are distinct workflows.",
          "Запись собирает сжатый поток. Реалтайм отдельно отслеживает медиавремя и наблюдаемое время аудиосэмплов, а не скорость обработки. Это разные режимы.",
        ),
        "realtime-throughput-is-not-the-playback-clock",
      ],
    ],
    tervallis: [
      [
        pair("Read the request", "Прочитать запрос"),
        pair("Start in the project discussion", "Начать из обсуждения проекта"),
        pair(
          "The incoming event refers to the project discussion that requested the work. The context stays available after the current turn.",
          "Входящее событие связано с обсуждением, из которого пришла задача. Контекст сохраняется после текущего хода.",
        ),
        "request",
      ],
      [
        pair("Claim the task", "Забрать задачу"),
        pair(
          "One worker claims the checked task",
          "Один исполнитель забирает задачу",
        ),
        pair(
          "The verified cycle includes claiming the work. Task creation is idempotent, and state operations use versions.",
          "В проверенный цикл входит захват работы. Создание задач идемпотентно, операции с состоянием используют версии.",
        ),
        "claim",
      ],
      [
        pair("Perform the work", "Выполнить работу"),
        pair("Use the same project context", "Использовать тот же контекст"),
        pair(
          "The worker performs the task with its surrounding discussion and saved project records. Private research content is excluded from this walkthrough.",
          "Исполнитель выполняет задачу с обсуждением и записями проекта. Содержание частных исследований здесь не раскрывается.",
        ),
        "execute",
      ],
      [
        pair("Return the result", "Вернуть результат"),
        pair("Save it where it was requested", "Сохранить там, где запросили"),
        pair(
          "The result returns to the original project discussion. It becomes persistent context for a person or the next worker.",
          "Результат возвращается в исходное обсуждение проекта. Он становится постоянным контекстом для человека или следующего агента.",
        ),
        "return",
      ],
      [
        pair("Verify persistence", "Проверить сохранение"),
        pair(
          "Read back and compare checksums",
          "Прочитать обратно и сверить суммы",
        ),
        pair(
          "The saved result is read back. Files transferred between tools are checked with matching checksums. The retained full cycle covers one research project.",
          "Сохранённый результат повторно читается. Контрольные суммы переданных файлов сравниваются. Полный сохранённый цикл относится к одному проекту.",
        ),
        "verify",
      ],
    ],
  };
  function renderFlow(kind) {
    const flow = flows[kind];
    if (step >= flow.length) step = 0;
    const f = flow[step];
    const source =
      kind === "video"
        ? V + "ENGINEERING_OVERVIEW.md#" + f[3]
        : P + "projects/tervallis.md";
    $("experience").innerHTML =
      `<div class="chart-panel"><div class="capture-bar"><span>${tr(kind === "video" ? "ARCHITECTURE WALKTHROUGH" : "VERIFIED WORKFLOW / EXPLANATORY VIEW", kind === "video" ? "ПРОСМОТР АРХИТЕКТУРЫ" : "ПРОВЕРЕННЫЙ ПРОЦЕСС / ПОЯСНЯЮЩАЯ СХЕМА")}</span><span>${step + 1} / 5</span></div><div class="flow${kind === "video" ? " video-flow" : ""}">${flow.map((n, i) => `${kind === "video" && i === 3 ? `<div class="output-branches"><span class="branch-label">${tr("ALTERNATIVE OUTPUTS", "ВЕТВИ ВЫХОДА")}</span>` : ""}<button type="button" class="flow-node" data-flow-step="${i}" aria-pressed="${step === i}"><span>0${i + 1}</span><strong>${esc(t(n[0]))}</strong></button>${kind === "video" && i === 4 ? "</div>" : ""}`).join("")}</div><div class="flow-detail"><div><h4>${esc(t(f[1]))}</h4><p>${esc(t(f[2]))}</p></div><div class="code-ref">${link(source, tr(kind === "video" ? "Inspect the source-linked explanation" : "Inspect the retained workflow case", kind === "video" ? "Посмотреть объяснение со ссылками на код" : "Посмотреть сохранённый кейс процесса"))}${kind === "tervallis" ? `<p class="scope-note">${tr("Conceptual rendering of the author-checked workflow; no private task data or live agent execution.", "Схема процесса, проверенного автором; без данных частных задач и запуска живых агентов.")}</p>` : `<p class="scope-note">${tr("Architecture visualization. It does not execute GPU processing in this browser.", "Визуализация архитектуры. Обработка на GPU в браузере не запускается.")}</p>`}</div></div>${kind === "video" ? `<div class="video-comparison"><div><strong>24.393 FPS</strong><small>${tr("FFmpeg NVENC · corrected input color tags", "FFmpeg NVENC · исправленные теги цвета")}</small></div><div><strong>29.981 FPS</strong><small>${tr("Direct D3D12 NVENC · native stage", "Прямой D3D12 NVENC · нативный этап")}</small></div></div><p class="scope-note">${tr("Retained V22 comparison: 120 real 1440p frames, neutral guides, matched H.265 P1/LL QP18, one warmup and three repetitions. This boundary excludes source decoding and guide generation.", "Сохранённое V22: 120 настоящих 1440p-кадров, нейтральные guides, одинаковые H.265 P1/LL QP18, прогрев и три повтора. Этот этап не включает декодирование источника и генерацию guides.")}</p>` : `<div class="outcome"><strong>${tr("Checked outcome", "Проверенный результат")}</strong><p>${tr("A request in a project discussion becomes claimed work and returns as a saved, readable result in the same context.", "Запрос из обсуждения проекта превращается в принятую задачу и возвращается сохранённым, доступным для чтения результатом в том же контексте.")}</p></div>`}</div>`;
  }
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    $("main").focus({ preventScroll: true });
    $("main").scrollIntoView({ block: "start" });
  });
  $("projects").addEventListener("click", (event) => {
    const a = event.target.closest("[data-project]");
    if (!a) return;
    event.preventDefault();
    project = a.dataset.project;
    step = project === "aster" ? 1 : 0;
    time = 0;
    render();
    $("projects")
      .querySelector(`[data-project="${project}"]`)
      .focus({ preventScroll: true });
  });
  $("projects").addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const all = [...$("projects").querySelectorAll("a")];
    const i = all.indexOf(document.activeElement);
    if (i < 0) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? all.length - 1
          : (i + (event.key === "ArrowRight" ? 1 : -1) + all.length) %
            all.length;
    all[next].focus();
  });
  $("language").addEventListener("click", () => {
    lang = lang === "en" ? "ru" : "en";
    render();
  });
  $("experience").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.step !== undefined) {
      step = Number(button.dataset.step);
      renderAster();
      $("experience").querySelector(`[data-step="${step}"]`).focus();
    }
    if (button.dataset.image) {
      $("large-image").src = "../media/" + button.dataset.image;
      $("large-image").alt = t(asterSteps[step].caption);
      $("large-caption").textContent = t(asterSteps[step].caption);
      $("image-dialog").showModal();
    }
    if (button.dataset.scenario) {
      stopReplay();
      scenario = button.dataset.scenario;
      time = 0;
      renderBroker();
      $("experience").querySelector(`[data-scenario="${scenario}"]`).focus();
    }
    if (button.id === "play") {
      if (playing) {
        stopReplay();
        updateReplay();
      } else {
        const max =
          Math.ceil(
            Math.max(...brokerScene().jobs.map((j) => j.finished_ms)) / 1000,
          ) * 1000;
        if (time >= max) time = 0;
        playing = true;
        last = 0;
        updateReplay();
        frame = requestAnimationFrame(tick);
      }
    }
    if (button.dataset.metric) {
      metric = button.dataset.metric;
      renderResearch();
      $("experience").querySelector(`[data-metric="${metric}"]`).focus();
    }
    if (button.dataset.flowStep !== undefined) {
      step = Number(button.dataset.flowStep);
      renderFlow(project);
      $("experience").querySelector(`[data-flow-step="${step}"]`).focus();
    }
  });
  $("experience").addEventListener("input", (event) => {
    if (event.target.id === "scrub") {
      stopReplay();
      time = Number(event.target.value);
      updateReplay();
    }
  });
  $("experience").addEventListener("change", (event) => {
    if (event.target.id === "study") {
      experiment = event.target.value;
      renderResearch();
      $("study").focus();
    }
  });
  $("close-image").addEventListener("click", () => $("image-dialog").close());
  $("image-dialog").addEventListener("click", (event) => {
    if (event.target === $("image-dialog")) $("image-dialog").close();
  });
  window.addEventListener("hashchange", () => {
    const next = L.readRoute(location.hash);
    project = next.project;
    lang = next.lang;
    step = project === "aster" ? 1 : 0;
    time = 0;
    render();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && playing) {
      stopReplay();
      updateReplay();
    }
  });
  render();
})();
