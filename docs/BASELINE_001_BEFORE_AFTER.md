---
version: "1.0.0"
created: "2026-08-22T20:35:00Z"
author: "Manus AI"
classification: "internal"
type: "before-after-evidence"
status: "observed_inconclusive_for_advantage"
---

# Praxis Before / After Evidence — Baseline 001

Baseline 001 is the first matched Before/After observation after Evolution 001. It compares one unguided OpenCode session with one Praxis-guided OpenCode session on the same task: report the bounded result of Cross-Agent Continuity 001 without overstating the evidence.

> **Observed result:** the Praxis-guided session explicitly discovered and used the human-approved trial skill. Both sessions nevertheless produced correct, scope-bounded reports. This single run does not establish a performance advantage.

## Controlled Design

| Element | Baseline condition | Praxis condition |
|---|---|---|
| Fixture | Matched isolated copy with manifest SHA-256 `d3f05a7f6a78238136c404c1646e93cd6b14bb0e14c2edfeb5a9b1ef92a4e519` | Same matched copy and manifest |
| Model | `opencode/big-pickle` | `opencode/big-pickle` |
| Task | Produce the same `task-output.md` about Cross-Agent Continuity 001 | Same task and output path |
| Agent treatment | `--pure`; no startup or skill-loading instruction | Standard run; explicit startup and approved-skill loading instruction |
| Human intervention after prompt | None | None |

The protocol, raw transcripts, outputs, and limitations are retained in [`Baseline 001 evidence`](../evidence/baseline-001/EVALUATION.md).

## What Happened

| Measurement | Baseline | Praxis | Evidence-supported interpretation |
|---|---:|---:|---|
| Required report created | Yes | Yes | Both conditions completed the task. |
| Correct shared-backend limitation | Yes | Yes | Neither made a false cross-model or provider-independent claim. |
| Direct raw provenance | Yes | Yes | Both reports cited raw session evidence rather than relying solely on generated summaries. |
| Approved-skill file read | No | Yes | The condition difference successfully produced observable skill discovery and use. |
| Scope violations observed | 0 | 0 | Both reports passed the frozen scope criteria. |
| Human rework after prompt | 0 | 0 | Neither condition required a follow-up correction. |

The baseline report is preserved at [`outputs/baseline-task-output.md`](../evidence/baseline-001/outputs/baseline-task-output.md); the guided report is preserved at [`outputs/praxis-task-output.md`](../evidence/baseline-001/outputs/praxis-task-output.md). The raw sessions are available as [`baseline.jsonl`](../evidence/baseline-001/raw/baseline.jsonl) and [`praxis.jsonl`](../evidence/baseline-001/raw/praxis.jsonl).

## What This Supports

Baseline 001 supports a narrow statement: **when explicitly instructed to load the approved trial skill, the Praxis-guided session located and used it in a fresh reporting task.** It also demonstrates that the repository can preserve a matched task, two raw sessions, two outputs, direct checks, and an honest comparison record.

## What This Does Not Support

The test does not show that Praxis made the report more correct, faster, less costly, or more reliable. The baseline agent independently produced a correct bounded report, the run count is one per condition, and the `--pure` flag adds a runtime difference beyond the instruction treatment. It is therefore inappropriate to use Baseline 001 as evidence of a general Before/After performance gain.

The next decisive test should use a naturally occurring code-change task, multiple randomized paired runs, the same host runtime in both conditions, pre-registered human or independent scoring, and measured defects or rework. Until then, Baseline 001 remains a transparent **instrumentation and skill-use observation**, not a marketing benchmark.
