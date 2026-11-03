window.PORTFOLIO_EVIDENCE = {
  "research": {
    "schema_version": 1,
    "demo_id": "research",
    "title": "Explore separate public ChronoField results",
    "sources": [
      {
        "id": "chronofield-readme",
        "repository": "Absamad-dew/chronofield-investor-materials",
        "revision": "461f860a2e7efd4e0f2f9d0a022693deaf59bf1c",
        "path": "README.md",
        "url": "https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/README.md",
        "source_commit_date": "2026-11-03T17:23:09+03:00",
        "sha256": "65fc46ca33cf6e4ad01077fdc6fcdd13787ef26963ba9bfb110a026faf8d96bb",
        "checksum_scope": "exact public Git blob bytes; SHA-256, not Git SHA-1"
      },
      {
        "id": "chronofield-competitive",
        "repository": "Absamad-dew/chronofield-investor-materials",
        "revision": "461f860a2e7efd4e0f2f9d0a022693deaf59bf1c",
        "path": "COMPETITIVE_POSITION.md",
        "url": "https://github.com/Absamad-dew/chronofield-investor-materials/blob/461f860a2e7efd4e0f2f9d0a022693deaf59bf1c/COMPETITIVE_POSITION.md",
        "source_commit_date": "2026-11-03T17:23:09+03:00",
        "sha256": "5e861579c67bad80343ab81ee7db25943de9e5966e662e8799303c9902ae8e63",
        "checksum_scope": "exact public Git blob bytes; SHA-256, not Git SHA-1"
      }
    ],
    "evidence_kind": "public measurement summaries; no new benchmark execution",
    "hardware_context": {
      "cpu": "AMD Ryzen 7 H 255",
      "physical_cores": 8,
      "logical_threads": 16,
      "gpu": "integrated Radeon 780M",
      "ram_gb": 16,
      "source_ids": [
        "chronofield-readme",
        "chronofield-competitive"
      ]
    },
    "experiments": [
      {
        "id": "fast-three-source",
        "label": "Fast · three-source Full HD",
        "evidence_kind": "published author-retained measurement summary",
        "measurement_date": null,
        "measurement_date_status": "not disclosed in the pinned public summary",
        "implementation_revision": null,
        "implementation_revision_status": "not disclosed; source revision identifies the public document only",
        "source_ids": [
          "chronofield-readme",
          "chronofield-competitive"
        ],
        "population": {
          "resolution": "1920x1080 / Full HD",
          "source_names": null,
          "frame_counts": null,
          "corpus_public": false,
          "corpus_status": "public scope summary only; corpus itself is not included",
          "source_count": 3,
          "aggregation": "retained three-source aggregate"
        },
        "settings": {
          "baseline": {
            "label": "strict-lossless AV1",
            "cpu_used": 4
          },
          "candidate": {
            "label": "ChronoField CFT11",
            "profile": "Fast"
          },
          "reconstruction": "exact RGB SHA-256 as reported",
          "public_frame_digests": null
        },
        "metrics": {
          "bytes": {
            "unit": "AV1_baseline_bytes_index",
            "baseline": 100,
            "candidate": 58.63,
            "direction": "lower",
            "origin": "presentation normalization of published relative measurement",
            "reported_reduction_percent": 41.37,
            "derivation": "candidate = 100 - reported_reduction_percent",
            "absolute": {
              "unit": "bytes",
              "baseline": null,
              "candidate": null,
              "reason": "absolute byte counts are not disclosed in these public summaries"
            }
          },
          "encode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": 1,
            "candidate": 8.42,
            "direction": "higher",
            "origin": "published relative measurement",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": 100,
              "candidate": 11.88,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": "100 / candidate_speed_multiple"
            }
          },
          "decode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": 1,
            "candidate": 4.98,
            "direction": "higher",
            "origin": "published relative measurement",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": 100,
              "candidate": 20.08,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": "100 / candidate_speed_multiple"
            }
          }
        },
        "context": "Size, encode and decode belong to this same retained aggregate.",
        "display_policy": {
          "comparison_group": "fast-three-source",
          "connect_to_other_experiments": false,
          "interpolate_profiles": false,
          "measurement_points": "baseline and candidate only; null values remain absent"
        }
      },
      {
        "id": "ultra-fast-single-source",
        "label": "Ultra Fast · one Full-HD source",
        "evidence_kind": "published author-retained measurement summary",
        "measurement_date": null,
        "measurement_date_status": "not disclosed in the pinned public summary",
        "implementation_revision": null,
        "implementation_revision_status": "not disclosed; source revision identifies the public document only",
        "source_ids": [
          "chronofield-competitive"
        ],
        "population": {
          "resolution": "1920x1080 / Full HD",
          "source_names": null,
          "frame_counts": null,
          "corpus_public": false,
          "corpus_status": "public scope summary only; corpus itself is not included",
          "source_count": 1,
          "aggregation": "one measured Full-HD source"
        },
        "settings": {
          "baseline": {
            "label": "strict-lossless AV1",
            "cpu_used": 4
          },
          "candidate": {
            "label": "ChronoField",
            "profile": "Ultra Fast"
          },
          "reconstruction": "exact RGB SHA-256 as reported",
          "public_frame_digests": null
        },
        "metrics": {
          "bytes": {
            "unit": "AV1_baseline_bytes_index",
            "baseline": 100,
            "candidate": 62.13,
            "direction": "lower",
            "origin": "presentation normalization of published relative measurement",
            "reported_reduction_percent": 37.87,
            "derivation": "candidate = 100 - reported_reduction_percent",
            "absolute": {
              "unit": "bytes",
              "baseline": null,
              "candidate": null,
              "reason": "absolute byte counts are not disclosed in these public summaries"
            }
          },
          "encode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": 1,
            "candidate": 45.63,
            "direction": "higher",
            "origin": "published relative measurement",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": 100,
              "candidate": 2.19,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": "100 / candidate_speed_multiple"
            }
          },
          "decode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": 1,
            "candidate": 4.66,
            "direction": "higher",
            "origin": "published relative measurement",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": 100,
              "candidate": 21.46,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": "100 / candidate_speed_multiple"
            }
          }
        },
        "context": "A separate single-source operating point; not an interpolation or same-corpus profile sweep of Fast.",
        "display_policy": {
          "comparison_group": "ultra-fast-single-source",
          "connect_to_other_experiments": false,
          "interpolate_profiles": false,
          "measurement_points": "baseline and candidate only; null values remain absent"
        }
      },
      {
        "id": "archive-size-only",
        "label": "Archive · published size-only point",
        "evidence_kind": "published author-retained measurement summary",
        "measurement_date": null,
        "measurement_date_status": "not disclosed in the pinned public summary",
        "implementation_revision": null,
        "implementation_revision_status": "not disclosed; source revision identifies the public document only",
        "source_ids": [
          "chronofield-readme"
        ],
        "population": {
          "source_count": null,
          "source_names": null,
          "frame_counts": null,
          "resolution": null,
          "aggregation": "up to result; exact population is not specified in this public table",
          "corpus_public": false
        },
        "settings": {
          "baseline": {
            "label": "measured lossless AV1",
            "cpu_used": null
          },
          "candidate": {
            "label": "ChronoField",
            "profile": "Archive"
          },
          "reconstruction": "exact RGB as reported",
          "public_frame_digests": null
        },
        "metrics": {
          "bytes": {
            "unit": "AV1_baseline_bytes_index",
            "baseline": 100,
            "candidate": 44.75,
            "direction": "lower",
            "origin": "presentation normalization of published relative measurement",
            "reported_reduction_percent": 55.25,
            "derivation": "candidate = 100 - reported_reduction_percent",
            "absolute": {
              "unit": "bytes",
              "baseline": null,
              "candidate": null,
              "reason": "absolute byte counts are not disclosed in these public summaries"
            }
          },
          "encode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": null,
            "candidate": null,
            "direction": "higher",
            "origin": "not publicly reported",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": null,
              "candidate": null,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": null
            }
          },
          "decode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": null,
            "candidate": null,
            "direction": "higher",
            "origin": "not publicly reported",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": null,
              "candidate": null,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": null
            }
          }
        },
        "context": "The public table reports up to 55.25% fewer bytes. Encode/decode timing and detailed population stay blank.",
        "display_policy": {
          "comparison_group": "archive-size-only",
          "connect_to_other_experiments": false,
          "interpolate_profiles": false,
          "measurement_points": "baseline and candidate only; null values remain absent"
        }
      },
      {
        "id": "related-family-20",
        "label": "Related-rendition family · 20 exact outputs",
        "evidence_kind": "published author-retained measurement summary",
        "measurement_date": null,
        "measurement_date_status": "not disclosed in the pinned public summary",
        "implementation_revision": null,
        "implementation_revision_status": "not disclosed; source revision identifies the public document only",
        "source_ids": [
          "chronofield-readme",
          "chronofield-competitive"
        ],
        "population": {
          "source_excerpts": 2,
          "outputs": 20,
          "exact_outputs": 20,
          "resolution": null,
          "source_names": null,
          "frame_counts": null,
          "corpus_public": false,
          "transformations": "known production transformations: ABR ladders, previews, crops and version variants"
        },
        "settings": {
          "baseline": {
            "label": "independent CFT11 compact files"
          },
          "candidate": {
            "label": "complete CFMS catalog",
            "includes": [
              "manifests",
              "index"
            ]
          },
          "reconstruction": "20/20 outputs exact as reported"
        },
        "metrics": {
          "bytes": {
            "unit": "MB",
            "baseline": 45.14,
            "candidate": 7.38,
            "direction": "lower",
            "origin": "published absolute size values rounded to two decimals",
            "reported_reduction_percent": 83.65,
            "normalized": {
              "unit": "independent_CFT11_catalog_size_index",
              "baseline": 100,
              "candidate": 16.35,
              "derivation": "round(100 * 7.38 / 45.14, 2); inputs are published rounded MB values"
            },
            "absolute_bytes": {
              "baseline": null,
              "candidate": null,
              "reason": "exact byte counts are not public in these summaries"
            }
          },
          "encode_speed": {
            "unit": "baseline_speed_multiple",
            "baseline": null,
            "candidate": null,
            "direction": "higher",
            "origin": "not publicly reported",
            "absolute": {
              "unit": "frames_per_second",
              "baseline": null,
              "candidate": null
            },
            "normalized_elapsed": {
              "unit": "percent_of_baseline_elapsed",
              "baseline": null,
              "candidate": null,
              "origin": "presentation arithmetic, not an absolute timing measurement",
              "derivation": null
            }
          },
          "decode_speed": {
            "unit": "frames_per_second",
            "baseline": null,
            "candidate": 261,
            "direction": "higher",
            "origin": "published aggregate compact decode measurement",
            "normalized_elapsed": null,
            "scope": "complete 20-output compact family; no baseline decode rate is disclosed"
          }
        },
        "context": "Independent streams are already compressed. This is a separate family-storage population, not the three-source AV1 aggregate.",
        "display_policy": {
          "comparison_group": "related-family-20",
          "connect_to_other_experiments": false,
          "interpolate_profiles": false,
          "measurement_points": "baseline and candidate only; null values remain absent"
        }
      }
    ],
    "result_statements": [
      {
        "id": "joint-point",
        "text": "The retained three-source Full-HD point improves bytes, encode speed and decode speed together: 41.37% fewer bytes, 8.42× encode speed and 4.98× decode speed, exact RGB.",
        "experiment_ids": [
          "fast-three-source"
        ],
        "source_ids": [
          "chronofield-readme",
          "chronofield-competitive"
        ]
      },
      {
        "id": "separate-profiles",
        "text": "Ultra Fast is a separate one-source point; Archive is a size-only published point. Selecting either changes the evidence scope rather than tracing a continuous measured tradeoff curve.",
        "experiment_ids": [
          "ultra-fast-single-source",
          "archive-size-only"
        ],
        "source_ids": [
          "chronofield-readme",
          "chronofield-competitive"
        ]
      },
      {
        "id": "family-storage",
        "text": "For the tested related family, complete catalog storage falls from 45.14 MB to 7.38 MB after individual compression, with all 20 outputs exact.",
        "experiment_ids": [
          "related-family-20"
        ],
        "source_ids": [
          "chronofield-readme",
          "chronofield-competitive"
        ]
      }
    ],
    "display_policy": {
      "animation_kind": "display-only transitions between published records; not a fresh codec execution",
      "default_experiment": "fast-three-source",
      "cross_experiment_pareto": false,
      "interpolate_between_experiments": false,
      "combine_profile_extrema": false,
      "multiply_savings_across_experiments": false,
      "unknown_values": "null, never zero or an invented point",
      "source_revision_means": "revision of public documentation, not a disclosed implementation revision",
      "rounding": "presentation-derived indices and reciprocal elapsed percentages rounded to two decimals"
    }
  },
  "corebroker": {
    "schema_version": 1,
    "demo_id": "corebroker",
    "title": "Replay a recorded resource-coordination demonstration",
    "evidence_kind": "actual curated local black-box trace; replay is display animation",
    "captured_utc": "2026-11-03T13:49:52.176467+00:00",
    "sources": [
      {
        "id": "coordination-trace",
        "repository": "Absamad-dew/engineering-portfolio",
        "revision": "e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5",
        "path": "media/corebroker-coordination.json",
        "url": "https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/media/corebroker-coordination.json",
        "source_commit_date": "2026-11-03T17:23:09+03:00",
        "sha256": "91a923b568179f79dc4023fd90dfe53f43144ac04853d51a419a764447b793d5",
        "checksum_scope": "exact public Git blob bytes; SHA-256, not Git SHA-1"
      },
      {
        "id": "coordination-notes",
        "repository": "Absamad-dew/engineering-portfolio",
        "revision": "e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5",
        "path": "docs/corebroker-demonstration.md",
        "url": "https://github.com/Absamad-dew/engineering-portfolio/blob/e2b630dcc3a8bf92e03d4ca7624cb2f42b981cf5/docs/corebroker-demonstration.md",
        "source_commit_date": "2026-11-03T17:23:09+03:00",
        "sha256": "7934dd05d618d211b03ac597fc96b8283a225b274f490a17abc19a9fca1dc552",
        "checksum_scope": "exact public Git blob bytes; SHA-256, not Git SHA-1"
      }
    ],
    "conditions": {
      "project": "github-portfolio",
      "requested_physical_cores": 1,
      "exclusive": false,
      "power_profile": null,
      "worker": "synthetic SHA256 marker plus four-second resource hold; not a throughput benchmark"
    },
    "implementation_revision": null,
    "implementation_revision_status": "private implementation is not included or identified by the public document revision",
    "scenarios": [
      {
        "shared_lock": null,
        "overlap_ms": 3086.547,
        "jobs": [
          {
            "label": "A",
            "submitted_ms": 0.023,
            "started_ms": 838.662,
            "finished_ms": 4839.452,
            "lease_id": "ce85a87f-cf9c-4427-8caa-174c6108ae02",
            "physical_cores": [
              0
            ],
            "logical_cpus": [
              0,
              1
            ],
            "l3_indices": [
              0
            ],
            "exclusive": false,
            "exit_code": 0,
            "worker_sha256": "3b044271dfa94c1a4fd47dd92da6eb5c4237f86d3e8182f05627ef8ad1bcf9eb",
            "duration_ms": 4000.79,
            "submission_to_start_ms": 838.639,
            "timing_scope": "observed worker-marker interval inside a managed lease"
          },
          {
            "label": "B",
            "submitted_ms": 865.57,
            "started_ms": 1752.905,
            "finished_ms": 5754.147,
            "lease_id": "a7a1391f-7757-49ed-a60d-24f5de6f7120",
            "physical_cores": [
              2
            ],
            "logical_cpus": [
              2,
              3
            ],
            "l3_indices": [
              0
            ],
            "exclusive": false,
            "exit_code": 0,
            "worker_sha256": "3ad53a79e41e4b13e56219e7d5f94ee08029aa42d6d28413c33a174d69405355",
            "duration_ms": 4001.242,
            "submission_to_start_ms": 887.335,
            "timing_scope": "observed worker-marker interval inside a managed lease"
          }
        ],
        "id": "independent",
        "label": "Independent workers",
        "source_ids": [
          "coordination-trace",
          "coordination-notes"
        ],
        "timeline_start_ms": 0,
        "timeline_end_ms": 5754.147,
        "overlap_derivation": "max(0, min(worker finishes) - max(worker starts))"
      },
      {
        "shared_lock": "portfolio-demo-resource",
        "overlap_ms": 0,
        "jobs": [
          {
            "label": "A",
            "submitted_ms": 0.007,
            "started_ms": 897.069,
            "finished_ms": 4897.706,
            "lease_id": "e36d9477-6332-4ad8-916e-1a8dca515445",
            "physical_cores": [
              0
            ],
            "logical_cpus": [
              0,
              1
            ],
            "l3_indices": [
              0
            ],
            "exclusive": false,
            "exit_code": 0,
            "worker_sha256": "67d1c22c55d3a1b5f5cd50a4565dc69abc4c1b901f1fac819b21ee5f168c6755",
            "duration_ms": 4000.637,
            "submission_to_start_ms": 897.062,
            "timing_scope": "observed worker-marker interval inside a managed lease"
          },
          {
            "label": "B",
            "submitted_ms": 918.86,
            "started_ms": 5900.548,
            "finished_ms": 9901.558,
            "lease_id": "dd5f8aa9-49e5-4342-87f5-73f24efe7f8f",
            "physical_cores": [
              0
            ],
            "logical_cpus": [
              0,
              1
            ],
            "l3_indices": [
              0
            ],
            "exclusive": false,
            "exit_code": 0,
            "worker_sha256": "d24c76421363aa4a738ce908008f2f223cb0b1098de8f738c82f9a14aa408f4a",
            "duration_ms": 4001.01,
            "submission_to_start_ms": 4981.688,
            "timing_scope": "observed worker-marker interval inside a managed lease"
          }
        ],
        "id": "shared-resource",
        "label": "Workers sharing one resource lock",
        "source_ids": [
          "coordination-trace",
          "coordination-notes"
        ],
        "timeline_start_ms": 0,
        "timeline_end_ms": 9901.558,
        "overlap_derivation": "max(0, min(worker finishes) - max(worker starts))"
      }
    ],
    "result_statements": [
      {
        "id": "independent-overlap",
        "text": "Independent workers overlapped for 3086.547 ms with disjoint physical-core and logical-CPU assignments.",
        "scenario_ids": [
          "independent"
        ],
        "source_ids": [
          "coordination-trace",
          "coordination-notes"
        ]
      },
      {
        "id": "shared-lock",
        "text": "With the same resource lock, worker B was submitted before A finished and started after A finished: zero worker overlap.",
        "scenario_ids": [
          "shared-resource"
        ],
        "source_ids": [
          "coordination-trace",
          "coordination-notes"
        ]
      },
      {
        "id": "bounded-conclusion",
        "text": "All four recorded jobs completed with exit code 0. This demonstrates these allocation/lock outcomes; worker holds and replay speed do not measure throughput or machine-wide isolation.",
        "scenario_ids": [
          "independent",
          "shared-resource"
        ],
        "source_ids": [
          "coordination-trace",
          "coordination-notes"
        ]
      }
    ],
    "replay_policy": {
      "animation_kind": "deterministic display of recorded markers; no live work is launched",
      "clock": "one host monotonic performance counter; each scenario has its own zero origin",
      "unit": "milliseconds",
      "interval_convention": "[start, finish)",
      "display_time_mapping": "recorded_ms = wall_clock_playback_elapsed_ms * selected_playback_rate",
      "pending_interval": [
        "submitted_ms",
        "started_ms"
      ],
      "pending_label": "submitted / waiting for worker start",
      "pending_caveat": "includes coordinator startup and handoff; not pure queue latency",
      "worker_interval": [
        "started_ms",
        "finished_ms"
      ],
      "cpu_ids": "topology allocation identifiers, not utilization percentages",
      "playback_speed_changes_evidence": false,
      "interpolate_execution_or_resource_assignments": false,
      "worker_sha256_scope": "published marker digests copied exactly; preimage data is not in this public artifact"
    }
  },
  "video": {
    "schema_version": "1.0",
    "id": "video",
    "title": "DLSS5 Video Studio",
    "subtitle": "Native GPU video systems with explicit frame ownership",
    "demo_label": "Architecture walkthrough and real CPU preflight",
    "repository_url": "https://github.com/Absamad-dew/dlss5-video-studio",
    "source_revision": "73aa3f77e7295b8fb0b1a371eb55a3b11c29141a",
    "inspected_date": "2026-11-03",
    "links": {
      "demo_guide": "https://github.com/Absamad-dew/dlss5-video-studio/blob/main/DEMO_GUIDE.md",
      "engineering": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/ENGINEERING_OVERVIEW.md",
      "decision_timeline": "https://github.com/Absamad-dew/dlss5-video-studio/blob/main/docs/DECISION_TIMELINE.md",
      "measurements": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/OPTIMIZATION_V22_RU.md",
      "build": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/ENGINEERING_HISTORY.md#L150",
      "licenses": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/THIRD_PARTY_NOTICES.md"
    },
    "presentation": {
      "public_explorer": {
        "kind": "architecture_and_cpu_preflight",
        "executes_gpu": false,
        "produces_video": false,
        "requires_models": false,
        "duration_seconds": 180,
        "description": "Explore source-backed dataflow, replay recorded geometry plans, and inspect the original measurement scope. Browser interactions do not run D3D12 or NVENC."
      },
      "live_product": {
        "kind": "operator_run_on_prepared_windows_machine",
        "captured_public_demo_available": false,
        "performed_for_this_iteration": false,
        "prerequisites": [
          "Windows 10/11 x64",
          "Supported NVIDIA GPU and driver",
          "Locally built or legally prepared application/runtime and required SDKs",
          "FFmpeg and already-installed selected model(s)",
          "Short input video owned or permitted by the demonstrator"
        ],
        "guide_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/main/DEMO_GUIDE.md#first-live-product-demo-on-a-prepared-windows-machine"
      },
      "beats": [
        {
          "seconds": [
            0,
            35
          ],
          "title": "Accept real ultrawide geometry",
          "action": "Run CPU preflight: 3840×1632 → Full-SBS 7680×1632."
        },
        {
          "seconds": [
            35,
            60
          ],
          "title": "Reject unsupported output",
          "action": "Run 5082×2160 source preflight: reject Full-SBS width 10164; expected exit 2."
        },
        {
          "seconds": [
            60,
            95
          ],
          "title": "Follow a frame",
          "action": "Show input ACK separately from GPU/encoder completion; identify ownership."
        },
        {
          "seconds": [
            95,
            135
          ],
          "title": "Read the measured A/B",
          "action": "Compare native-stage throughput; keep process launch and complete recording separate."
        },
        {
          "seconds": [
            135,
            160
          ],
          "title": "Inspect a decision in history",
          "action": "Open the commit that introduced direct NVENC or fixed audio timing."
        },
        {
          "seconds": [
            160,
            180
          ],
          "title": "Run existing CPU contracts",
          "action": "Execute the isolated standard-library test suite; no model or video rendering."
        }
      ]
    },
    "assets": {
      "captured_product_screenshots": [],
      "captured_product_videos": [],
      "diagrams": [
        {
          "kind": "architecture_svg",
          "url": "https://github.com/Absamad-dew/dlss5-video-studio/raw/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/media/video-dataflow.svg",
          "captured_product": false,
          "description": "Native frame path, two resource completion boundaries and separate audio timeline."
        }
      ],
      "release_inventory": {
        "url": "https://github.com/Absamad-dew/dlss5-video-studio/releases/tag/v11.0.1",
        "checked_date": "2026-11-03",
        "tag": "v11.0.1",
        "files": [
          {
            "name": "DLSS5_VIDEO_STUDIO_CORE_MODELS_V11.zip",
            "bytes": 222943182,
            "kind": "model_supplement"
          },
          {
            "name": "DLSS5_VIDEO_STUDIO_CORE_MODELS_V11.zip.sha256",
            "bytes": 105,
            "kind": "checksum"
          }
        ],
        "contains_application": false,
        "contains_product_capture": false,
        "downloaded_for_this_iteration": false
      }
    },
    "frame_path": [
      {
        "id": "decode",
        "label": "Persistent decode",
        "owner": "FFmpeg",
        "domain": "CPU",
        "detail": "Source frames remain NV12 or RGB depending on profile.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/python/guidegen.py"
      },
      {
        "id": "guides",
        "label": "Motion + depth",
        "owner": "Python guide worker",
        "domain": "CPU / selected inference backend",
        "detail": "Bounded preparation of estimated guides; not authoritative game geometry.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/python/guidegen.py#L705"
      },
      {
        "id": "mappings",
        "label": "Shared input chunks",
        "owner": "Worker / controller protocol",
        "domain": "CPU",
        "detail": "Chunk ACK allows retired mappings to be released after input copy.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/app/process-video.ps1#L1816"
      },
      {
        "id": "host",
        "label": "C++20 / D3D12",
        "owner": "Native host",
        "domain": "GPU",
        "detail": "Four frame slots and twelve fenced command allocators protect resource reuse.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/native/dlss5_video_host.cpp#L305"
      },
      {
        "id": "display",
        "label": "Realtime display",
        "owner": "Native host / optional Streamline",
        "domain": "GPU / presentation",
        "detail": "Media-time pacing with optional frame generation; realtime does not encode a recording.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/native/dlss5_video_host.cpp#L1348"
      },
      {
        "id": "record",
        "label": "GPU NV12 → NVENC",
        "owner": "Encoder slot / mux controller",
        "domain": "GPU → compressed CPU stream",
        "detail": "Eligible continuous recording without preview. Collect unmaps completed resources before reuse.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/native/nvenc_d3d12.h#L211"
      }
    ],
    "frame_edges": [
      [
        "decode",
        "guides"
      ],
      [
        "guides",
        "mappings"
      ],
      [
        "mappings",
        "host"
      ],
      [
        "host",
        "display"
      ],
      [
        "host",
        "record"
      ]
    ],
    "completion_boundaries": [
      {
        "label": "Input ACK",
        "meaning": "Input bytes are copied into the upload ring; producer mappings can retire.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/native/dlss5_video_host.cpp#L4344"
      },
      {
        "label": "GPU fence / encoder Collect",
        "meaning": "The corresponding slot can be reused only after its own completion contract.",
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/native/nvenc_d3d12.h#L211"
      }
    ],
    "audio": {
      "label": "Separate audio timeline",
      "detail": "ffplay sample clock and native media time drive pause, rebuffer and aligned recovery. Throughput FPS is not the playback clock.",
      "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/app/realtime-player.ps1#L544"
    },
    "performance": {
      "status": "historical_documented_measurements_not_rerun",
      "measured_date": "2026-09-04",
      "hardware": "RTX 4060 Laptop",
      "paired_comparisons": [
        {
          "id": "v22_native_stage",
          "label": "Native-stage throughput",
          "before": 24.393,
          "after": 29.981,
          "unit": "FPS",
          "improvement_percent": 22.9,
          "higher_is_better": true,
          "scope": "120 real 2560×1440 frames at 25 FPS; neutral guides; H.265 P1/LL QP18; one warmup and three repetitions per path.",
          "excludes": [
            "Source decoding",
            "Guide generation"
          ],
          "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/OPTIMIZATION_V22_RU.md"
        },
        {
          "id": "v22_native_process",
          "label": "Native benchmark process including launch",
          "before": 7.745,
          "after": 6.963,
          "unit": "seconds",
          "higher_is_better": false,
          "scope": "Same isolated benchmark process, still excluding source decode and guide generation.",
          "is_whole_application": false,
          "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/OPTIMIZATION_V22_RU.md"
        }
      ],
      "separate_complete_recording": {
        "paired_comparison": false,
        "frames": 240,
        "wall_seconds": 22.86,
        "throughput_fps": 10.5,
        "includes": [
          "Model loading",
          "Guide generation",
          "Audio"
        ],
        "reported_guide_fps": 13.76,
        "source_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/OPTIMIZATION_V22_RU.md"
      },
      "interpretation": "Do not label the +22.9% native-stage gain as a whole-application speedup or infer a quality ranking. Original source video and GPU captures are not distributed here."
    },
    "timeline": [
      {
        "date": "2026-09-02",
        "commit": "2e5b174d4f36db2d96821a4e584d8491f819a72a",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/2e5b174d4f36db2d96821a4e584d8491f819a72a",
        "title": "Use a measured audio sample clock",
        "decision": "Renderer throughput samples must not drive audio tempo or restart a healthy endpoint.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/app/realtime-player.ps1#L544"
      },
      {
        "date": "2026-09-03",
        "commit": "e35f5259564db3f9cbb7981476313e95cab42c43",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/e35f5259564db3f9cbb7981476313e95cab42c43",
        "title": "Buffer complete NV12 frames",
        "decision": "A fixed byte pipe smaller than a high-resolution frame prevented useful producer/encoder overlap.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/e35f5259564db3f9cbb7981476313e95cab42c43/README.md"
      },
      {
        "date": "2026-09-03",
        "commit": "384fb024fd43caf4a5709d42d5718727be74baf5",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/384fb024fd43caf4a5709d42d5718727be74baf5",
        "title": "Keep four frames in flight",
        "decision": "Match four frame slots to twelve command allocators while fencing resource reuse.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/384fb024fd43caf4a5709d42d5718727be74baf5/README.md"
      },
      {
        "date": "2026-09-04",
        "commit": "10a1b267283299c388d2b7fd91bd09a837e40eb1",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/10a1b267283299c388d2b7fd91bd09a837e40eb1",
        "title": "Keep recording output on the GPU through NVENC",
        "decision": "Replace normal raw output readback with mapped D3D12 resources, input/output fences and compressed output.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/10a1b267283299c388d2b7fd91bd09a837e40eb1/OPTIMIZATION_V22_RU.md"
      },
      {
        "date": "2026-09-04",
        "commit": "d65c5e3186fc6be6ed10abcf8717cc0fce9c965b",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/d65c5e3186fc6be6ed10abcf8717cc0fce9c965b",
        "title": "Preflight dependencies and stop asynchronous presentation safely",
        "decision": "Fail before startup when selected models are absent; stop Streamline before releasing tagged resources.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/REALTIME_DEPTH_FIX_V22_0_1_RU.md"
      },
      {
        "date": "2026-09-04",
        "commit": "8140303cc92f96ca1fdb906872029d3a3d05d68c",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/8140303cc92f96ca1fdb906872029d3a3d05d68c",
        "title": "Reject unsupported stereo geometry before expensive work",
        "decision": "Fit per-eye bounding boxes and account for layout/IPD rather than forcing ultrawide height.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/python/iw3_worker.py#L69"
      },
      {
        "date": "2026-09-05",
        "commit": "c7dea90d66a10448400920d1b29239d7c7db4da2",
        "commit_url": "https://github.com/Absamad-dew/dlss5-video-studio/commit/c7dea90d66a10448400920d1b29239d7c7db4da2",
        "title": "Separate product workspaces and bound stereo execution",
        "decision": "Expose realtime, recording, Studio VR and IW3 modes while retaining distinct execution and quality limits.",
        "evidence_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/73aa3f77e7295b8fb0b1a371eb55a3b11c29141a/NATIVE_VR_QA_RU.md"
      }
    ],
    "verification": {
      "kind": "actual_cpu_contract_checks",
      "checked_date": "2026-11-03",
      "platform": "Windows",
      "python_version": "3.13.15",
      "test_command": "python -I -S -B -m unittest discover -s tests -p test_iw3_worker.py -v",
      "tests_run": 16,
      "failures": 0,
      "errors": 0,
      "site_packages_disabled": true,
      "gpu_executed": false,
      "scope": "Synthetic dimensions, settings forwarding, geometry rejection, external/model preflight ordering via mocks, and preservation of an existing output file.",
      "preflight_command": "python -I -S -B scripts/demo-preflight.py",
      "script_url": "https://github.com/Absamad-dew/dlss5-video-studio/blob/main/scripts/demo-preflight.py",
      "observed_cases": [
        {
          "id": "ultrawide_accepted",
          "input": [
            3840,
            1632
          ],
          "output_mode": "2160p",
          "layout": "FullSBS",
          "codec": "H265",
          "observed_output": [
            7680,
            1632
          ],
          "accepted": true,
          "exit_code": 0
        },
        {
          "id": "encoder_limit_rejected",
          "input": [
            5082,
            2160
          ],
          "output_mode": "Source",
          "layout": "FullSBS",
          "codec": "H265",
          "observed_output": [
            10164,
            2160
          ],
          "encoder_width_limit": 8192,
          "accepted": false,
          "exit_code": 2
        }
      ],
      "source_sha256": {
        "python/iw3_worker.py": "967fb3a01bd254ee586c72f17d4159b345d9af15c6fea4d840cae0e1f5b62b2f",
        "app/iw3-settings.json": "f31bb61e057a3e8d490f07ff4c03c6c21a8f6ab43e38a38c9348fdaf45303493"
      }
    },
    "claims_not_made": [
      "Public product video capture",
      "New GPU benchmark or native render",
      "Complete application provided by the model-pack release",
      "Application-wide +22.9% speedup",
      "Universal image-quality improvement",
      "4K realtime stereo",
      "Commercial deployment or adoption"
    ]
  }
};
