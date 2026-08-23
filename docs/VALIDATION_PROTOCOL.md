---
version: "1.4.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T20:20:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "validation-protocol"
---

# Praxis Validation Protocol

This document defines how to measure whether Praxis improves coding-agent work. It is a documentation and experiment protocol, not a runtime.

## Comparison Design

Use the same task, repository snapshot, acceptance criteria, agent model, and tool permissions in two conditions:

```text
Baseline
→ Same task without Praxis context

Praxis
→ Same task with the project’s Praxis context

Compare
→ Context repetition
→ Consistency
→ Errors
→ Rework
→ Decisions preserved
→ Reusable knowledge created
```

Do not change the task or silently coach one condition. Record deviations and incomplete sessions.

## Required Measurements

| Measure | Definition |
|---|---|
| Context repetition | Number of times project conventions or architecture must be re-explained. |
| Consistency | Whether the result follows the same accepted conventions and decisions. |
| Errors | Defects, failed checks, or regressions attributable to the task. |
| Rework | Additional task cycles needed after the first implementation. |
| Decisions preserved | Prior accepted decisions used without re-explanation or contradiction. |
| Reusable knowledge created | Validated patterns, procedures, or proposals with provenance. |
| Token/context cost | Approximate context consumed, when the host exposes it. |

## Five-Step Procedure

1. Freeze the repository snapshot and write the task and acceptance criteria.
2. Run the baseline session; preserve the prompt, transcript, changed files, checks, and evaluation.
3. Reset to the same snapshot and run the Praxis session; allow only the documented Praxis context.
4. Score both outcomes using the existing 33-point checklist and seven dimensions.
5. Record a comparison report with raw evidence, limitations, and whether any learning is approved.

## Pass Criteria

A Praxis result passes only when correctness and safety are not worse than baseline and at least one of context repetition, consistency, errors, rework, decisions preserved, or reusable knowledge shows a clearly evidenced improvement. Marketing claims must cite the recorded comparison.

## Evidence Rules

Store observations as `observed`, proposals as `candidate`, and durable conclusions only after review. Never store secrets. Never claim self-learning from a single event. The protocol is compatible with any supported coding agent because the evidence is Markdown.

## Current Preliminary Case

[`STUDENT_MANAGER_VALIDATION_CASE_STUDY.md`](STUDENT_MANAGER_VALIDATION_CASE_STUDY.md) records a realistic project that is ready for this protocol. It is implementation evidence only. Two narrow same-harness continuity observations are retained in [`Continuity 001`](../evidence/continuity-001/EVALUATION.md) and [`Continuity 002`](../evidence/continuity-002/EVALUATION.md). A third result, [`Cross-Agent Continuity 001`](../evidence/cross-agent-continuity-001/EVALUATION.md), demonstrates OpenCode-to-Pi cross-harness retrieval with a shared Big Pickle backend; it is not cross-model evidence. [`Evolution 001`](../evidence/evolution-001/EVALUATION.md) records three purpose-built experiences, a candidate, explicit human approval, a trial-only skill, and one later reuse session; it is human-governed evidence, not automatic promotion. An identical replication, matched baseline, measured memory utility beyond these fixtures, and multi-agent/different-provider validation remain pending in [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md).
