(function (root) {
  "use strict";
  const ids = ["aster", "corebroker", "research", "video", "tervallis"];
  function readRoute(hash) {
    const p = new URLSearchParams(String(hash || "").replace(/^#/, ""));
    const project = p.get("project");
    return {
      project: ids.includes(project) ? project : "aster",
      lang: p.get("lang") === "ru" ? "ru" : "en",
    };
  }
  function intervalOverlap(jobs) {
    if (jobs.length !== 2)
      throw new Error("A comparison requires exactly two workers");
    return Math.max(
      0,
      Math.min(...jobs.map((x) => x.finished_ms)) -
        Math.max(...jobs.map((x) => x.started_ms)),
    );
  }
  function stateAt(job, time) {
    if (time < job.submitted_ms) return "not-submitted";
    if (time < job.started_ms) return "submitted";
    if (time < job.finished_ms) return "running";
    return "completed";
  }
  function position(start, finish, maxTime) {
    if (
      ![start, finish, maxTime].every(Number.isFinite) ||
      start < 0 ||
      finish < start ||
      maxTime < finish ||
      maxTime <= 0
    )
      throw new Error("Invalid interval");
    return {
      left: (start / maxTime) * 100,
      width: ((finish - start) / maxTime) * 100,
    };
  }
  function changePercent(baseline, candidate) {
    if (
      ![baseline, candidate].every(Number.isFinite) ||
      baseline <= 0 ||
      candidate < 0
    )
      throw new Error("Invalid comparison");
    return (candidate / baseline - 1) * 100;
  }
  const api = Object.freeze({
    ids,
    readRoute,
    intervalOverlap,
    stateAt,
    position,
    changePercent,
  });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.PortfolioLogic = api;
})(typeof window !== "undefined" ? window : this);
