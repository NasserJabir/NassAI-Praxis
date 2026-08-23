---
version: "1.7.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T22:25:00Z"
author: "Manus AI"
classification: "internal"
type: "validation-results"
status: "observed"
---

# Praxis Validation Results

This file is the canonical results record for measured Praxis validation. It does **not** contain pre-filled performance claims. A first matched reporting-task comparison has run, but it is a single observed comparison and is inconclusive for a performance advantage.

## Current Evidence Status

| Evidence item | Status | Interpretation |
|---|---|---|
| Student Manager real-project implementation | observed | A realistic academic-management project was created over multiple development steps. |
| Project-local conventions and session record | observed | `Student Manager/docs/PROJECT_CONVENTIONS.md` and `docs/validation-sessions/session-001-foundation.md` record the first implementation session. |
| Application verification | observed | The project recorded TypeScript checks, 9 Vitest tests, desktop review, and mobile review. |
| Baseline 001 — matched reporting-task comparison | observed / inconclusive | Both conditions produced correct bounded reports and preserved boundaries. Praxis demonstrably loaded the approved skill; this one run did not show a correctness, rework, context-repetition, token-efficiency, or general quality advantage. |
| Baseline 002 — three natural maintenance-task pairs | observed / inconclusive | Praxis read project conventions in all three guided sessions; both conditions completed all available deterministic correctness checks with no rework or observed policy violation. The benchmark backend lacks `artisan`, so no general performance advantage is established. |
| OpenCode Continuity 001–002 — semantic decision retrieval and reuse | observed | Two distinct isolated OpenCode experiments each recorded a different semantic Markdown policy in Session 1, then found, explained, and applied it in a fresh Session 2. |
| OpenCode-to-Pi Cross-Agent Continuity 001 — cross-harness retrieval and reuse | observed | A fresh Pi Coding Agent session read and applied a semantic decision created by OpenCode, while preserving the memory boundary. Both harnesses used the same Big Pickle model backend. |
| Exact replication, applied-code continuity, and cross-model measurement | not_run | The observations used different decisions and tasks; no identical rerun, applied-code trial, or different-provider/model continuity measurement has been run. Baseline 001 is one constrained reporting-task comparison, not a replicated or applied-code baseline. |
| Evolution 001 — human-governed trial skill creation and reuse | observed | Three observed experiences produced candidate artifacts; explicit human approval authorized one trial-only skill, which a later fresh session read and applied without mutation. |
| Persona Validation 001 — Fatima lifecycle, trial skill, and policy concurrency | observed | An existing Persona produced scoped observations, later reuse, a candidate proposal, an explicitly human-approved trial-only skill, fresh reuse, one Sami isolation observation, and a Markdown active-work deferral observation. No canonical Persona or Core skill changed. |
| Automatic evolution promotion | not_run / prohibited | Praxis did not and must not self-authorize a skill. The Evolution 001 skill was created only after explicit project-owner approval and remains trial-only. |
| Three-agent behavior validation | not_run | Compatibility files exist; real behavior sessions remain pending. |

## Comparison Table

| Metric | Baseline | Praxis | Evidence | Status |
|---|---:|---:|---|---|
| Context repeated | 0 | 0 | Baseline 001 raw transcripts | observed, no difference |
| Previous decisions reused | not measured | not measured | Task was a new report over existing evidence | not_run |
| Convention violations | 0 observed | 0 observed | Frozen scope criteria and outputs | observed, no difference |
| Rework cycles | 0 | 0 | No human intervention after prompt | observed, no difference |
| Relevant memory discovered | not measured | not measured | Task used evidence packages rather than a memory-utility chain | not_run |
| Approved skill discovered | 0 reads | 1+ explicit read | Baseline 001 raw transcripts | observed, guided condition only |
| Knowledge reused later | pending | pending | Applied-code later-session provenance | not_run |

## Evidence Boundary

> A functioning application and passing tests prove implementation progress. They do not, by themselves, prove that Praxis improved coding-agent performance.

Continuity 001 and 002 supply two narrow OpenCode observations. Cross-Agent Continuity 001 adds an OpenCode-to-Pi **cross-harness** observation, not cross-model or provider-independent evidence because Pi used the same Big Pickle backend. Evolution 001 adds one purpose-built, single-model **human-governed** evidence-to-skill-to-reuse observation; it does not demonstrate autonomous self-improvement or promotion to Praxis Core. Persona Validation 001 adds one controlled Fatima lifecycle observation: it demonstrates policy-aware Markdown coordination when an active-work record is found, not a technical concurrency lock or Persona runtime. Baseline 001 and Baseline 002 both show the intended guided knowledge loading, but neither establishes a performance advantage because both conditions completed their available checks. Baseline 002 is additionally constrained by a missing Laravel `artisan` bootstrap in the source fixture. These results do not prove strict repeatability, a performance claim, or general portability. Their audit packages are available in [`evidence/continuity-001`](../evidence/continuity-001/EVALUATION.md), [`evidence/continuity-002`](../evidence/continuity-002/EVALUATION.md), [`evidence/cross-agent-continuity-001`](../evidence/cross-agent-continuity-001/EVALUATION.md), [`evidence/evolution-001`](../evidence/evolution-001/EVALUATION.md), [`evidence/persona-validation-001`](../evidence/persona-validation-001/EVALUATION.md), [`evidence/baseline-001`](../evidence/baseline-001/EVALUATION.md), and [`evidence/baseline-002`](../evidence/baseline-002/EVALUATION.md).

Use [`VALIDATION_PROTOCOL.md`](VALIDATION_PROTOCOL.md) for a matched experiment, [`STUDENT_MANAGER_VALIDATION_CASE_STUDY.md`](STUDENT_MANAGER_VALIDATION_CASE_STUDY.md) for the preliminary case, and [`PORTABILITY_TEST.md`](PORTABILITY_TEST.md) for agent behavior evidence.
