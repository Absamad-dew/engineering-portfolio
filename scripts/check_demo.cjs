"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const logic = require("../demos/logic.js");
const read = (name) =>
  JSON.parse(
    fs.readFileSync(path.join(root, "demos/data", name + ".json"), "utf8"),
  );
const research = read("research");
const broker = read("corebroker");
const video = read("video");
let checks = 0;
function check(name, run) {
  run();
  checks++;
  console.log("PASS " + name);
}
check("Route values are allowlisted, including encoded untrusted input", () => {
  assert.deepEqual(logic.readRoute("#project=corebroker&lang=ru"), {
    project: "corebroker",
    lang: "ru",
  });
  assert.deepEqual(logic.readRoute("#project=%3Cscript%3E&lang=unknown"), {
    project: "aster",
    lang: "en",
  });
  assert.deepEqual(logic.readRoute("#project=video&lang=en"), {
    project: "video",
    lang: "en",
  });
});
check(
  "Recorded intervals retain exact overlap and disjoint independent CPU sets",
  () => {
    const independent = broker.scenarios.find((s) => s.id === "independent");
    const shared = broker.scenarios.find((s) => s.id === "shared-resource");
    assert.ok(
      Math.abs(logic.intervalOverlap(independent.jobs) - 3086.547) < 1e-6,
    );
    assert.equal(logic.intervalOverlap(shared.jobs), 0);
    assert.ok(shared.jobs[1].submitted_ms < shared.jobs[0].finished_ms);
    assert.ok(shared.jobs[1].started_ms >= shared.jobs[0].finished_ms);
    assert.ok(
      independent.jobs[0].logical_cpus.every(
        (c) => !independent.jobs[1].logical_cpus.includes(c),
      ),
    );
    for (const scenario of broker.scenarios) {
      assert.ok(
        Math.abs(logic.intervalOverlap(scenario.jobs) - scenario.overlap_ms) <
          1e-6,
      );
      for (const job of scenario.jobs) {
        assert.equal(job.exit_code, 0);
        assert.match(job.worker_sha256, /^[a-f0-9]{64}$/);
      }
    }
  },
);
check(
  "Replay states change at recorded boundaries rather than animation fractions",
  () => {
    const j = broker.scenarios[0].jobs[1];
    assert.equal(logic.stateAt(j, j.submitted_ms - 0.001), "not-submitted");
    assert.equal(logic.stateAt(j, j.submitted_ms), "submitted");
    assert.equal(logic.stateAt(j, j.started_ms - 0.001), "submitted");
    assert.equal(logic.stateAt(j, j.started_ms), "running");
    assert.equal(logic.stateAt(j, j.finished_ms - 0.001), "running");
    assert.equal(logic.stateAt(j, j.finished_ms), "completed");
  },
);
check("Bar geometry uses timestamps and rejects invalid intervals", () => {
  assert.deepEqual(logic.position(1000, 5000, 10000), { left: 10, width: 40 });
  assert.throws(() => logic.position(5, 1, 10));
  assert.throws(() => logic.position(0, 1, 0));
  assert.throws(() => logic.position(0, Infinity, Infinity));
});
check(
  "Research comparisons preserve separate populations, units and unknowns",
  () => {
    assert.equal(research.experiments.length, 4);
    const fast = research.experiments.find((e) => e.id === "fast-three-source");
    const archive = research.experiments.find(
      (e) => e.id === "archive-size-only",
    );
    const family = research.experiments.find(
      (e) => e.id === "related-family-20",
    );
    assert.equal(fast.population.source_count, 3);
    assert.equal(fast.metrics.bytes.candidate, 58.63);
    assert.equal(fast.metrics.encode_speed.candidate, 8.42);
    assert.equal(fast.metrics.decode_speed.candidate, 4.98);
    assert.equal(archive.metrics.encode_speed.candidate, null);
    assert.equal(archive.metrics.decode_speed.candidate, null);
    assert.equal(family.metrics.bytes.unit, "MB");
    assert.equal(family.metrics.bytes.baseline, 45.14);
    assert.equal(family.metrics.bytes.candidate, 7.38);
    assert.equal(family.metrics.decode_speed.unit, "frames_per_second");
    assert.equal(family.metrics.decode_speed.baseline, null);
    assert.equal(family.metrics.decode_speed.candidate, 261);
    for (const e of research.experiments) {
      assert.equal(e.display_policy.interpolate_profiles, false);
      assert.equal(e.display_policy.connect_to_other_experiments, false);
    }
  },
);
check("Published percentages agree with available rounded inputs", () => {
  for (const e of research.experiments) {
    const b = e.metrics.bytes;
    assert.ok(
      Math.abs(
        -logic.changePercent(b.baseline, b.candidate) -
          b.reported_reduction_percent,
      ) < 0.01,
    );
  }
  assert.ok(Math.abs(logic.changePercent(24.393, 29.981) - 22.9) < 0.01);
});
check(
  "Every research comparison points to identified immutable public source records",
  () => {
    const ids = new Set(research.sources.map((s) => s.id));
    for (const source of [...research.sources, ...broker.sources]) {
      assert.match(source.revision, /^[a-f0-9]{40}$/);
      assert.ok(source.url.includes("/blob/" + source.revision + "/"));
      assert.match(source.sha256, /^[a-f0-9]{64}$/);
    }
    for (const e of research.experiments)
      for (const id of e.source_ids) assert.ok(ids.has(id));
  },
);
check(
  "Video walkthrough distinguishes the public architecture from native execution",
  () => {
    assert.equal(video.presentation.public_explorer.executes_gpu, false);
    assert.equal(video.presentation.public_explorer.produces_video, false);
    assert.equal(
      video.presentation.live_product.performed_for_this_iteration,
      false,
    );
  },
);
const bundlePath = path.join(root, "demos/data.js");
if (fs.existsSync(bundlePath))
  check("Offline data bundle exactly matches published JSON files", () => {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(bundlePath, "utf8"), sandbox, {
      timeout: 1000,
    });
    assert.equal(
      JSON.stringify(sandbox.window.PORTFOLIO_EVIDENCE),
      JSON.stringify({ research, corebroker: broker, video }),
    );
  });
console.log(
  JSON.stringify({
    passed: checks,
    scope:
      "recorded data, route handling, replay boundaries and offline bundle; browser checks are separate",
  }),
);
