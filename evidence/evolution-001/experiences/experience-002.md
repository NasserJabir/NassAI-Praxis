---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-002 (opencode)"
classification: "internal"
type: "experience"
status: "observed"
experience_id: "evolution-001-experience-002"
source_evidence: "evidence/continuity-002/"
promotion_status: "not_a_skill_not_a_candidate_not_a_proposal"
---

# Experience 002 — Reporting Two Distinct Observed Continuity Results Without Misrepresenting Them as Identical Repeatability

## Problem

Continuity Experiment 002 produced a second passing continuity observation that differs from the first. Continuity 001 exercised a status-label policy; Continuity 002 exercised a **different** semantic decision — an evidence-scope policy — with different prompts and tasks. The concrete reporting risk: presenting the two results together as *repeatability*, i.e., claiming the same result was independently reproduced. It was not an identical rerun: the decision tested, the prompts, and the task all changed. Two distinct observations of related behavior do not equal one replicated result, and reporting them as identical repeatability would claim exactly what the evidence cannot support. Claim strength had to stay matched to what was actually run: two separate controlled observations in one environment.

## Action Taken in the Evidence Package

Two fresh, independently invoked OpenCode sessions (`opencode/big-pickle`) ran in the isolated fixture at `/home/ubuntu/praxis-continuity-trial-002`, with no continuation flag or session identifier reuse:

1. **Session 1** created a durable semantic decision at `memory/semantic/evidence-scope-policy.md`: a result from one controlled agent-and-model run may be described only as a narrow observed outcome for that exact environment, and must not be represented as repeatability, cross-agent portability, universal compatibility, or a general product benefit; reports must state their claim scope, limitations, and next needed replication.
2. **Session 2**, invoked separately with no continuation flag, located the exact policy source before using its scope vocabulary, explained why the policy governed its task, constrained its report to a narrow observed outcome with explicit claim scope and excluded generalizations, named three ordered next-validation steps (independent-session replication → cross-agent comparison → multi-model replication), and left all of `memory/` unchanged.

The package then documented criterion-by-criterion results against the pre-registered pass criteria, recorded distinct session identifiers proving no conversation reuse, hashed both raw transcripts, and stated explicitly that Continuity 001 and 002 are two observations of Markdown decision retrieval and reuse that **do not** establish repeatability in the strict experimental sense, because 002 tested a different decision and task rather than an identical rerun.

## Direct Evidence Paths

| Artifact | Path |
|---|---|
| Pre-registered purpose, prompts, criteria | [`evidence/continuity-002/EXPERIMENT.md`](../../../evidence/continuity-002/EXPERIMENT.md) |
| Evaluation with per-criterion results and limitations | [`evidence/continuity-002/EVALUATION.md`](../../../evidence/continuity-002/EVALUATION.md) |
| Session 1-created semantic decision source | [`evidence/continuity-002/generated/evidence-scope-policy.md`](../../../evidence/continuity-002/generated/evidence-scope-policy.md) |
| Session 1 note | [`evidence/continuity-002/generated/session-001-note.md`](../../../evidence/continuity-002/generated/session-001-note.md) |
| Session 2 report (narrow observed outcome) | [`evidence/continuity-002/generated/session-002-report.md`](../../../evidence/continuity-002/generated/session-002-report.md) |
| Raw transcript, Session 1 (`ses_fd6bc1d6affeKCp8hRZk8GPE32`) | [`evidence/continuity-002/raw/session-001.jsonl`](../../../evidence/continuity-002/raw/session-001.jsonl) |
| Raw transcript, Session 2 (`ses_fd6b8cfe7ffe6GWuOzqvpjwggn`) | [`evidence/continuity-002/raw/session-002.jsonl`](../../../evidence/continuity-002/raw/session-002.jsonl) |
| Pre-session file manifest | [`evidence/continuity-002/pre-session-file-manifest.txt`](../../../evidence/continuity-002/pre-session-file-manifest.txt) |

Verification performed while writing this note: the raw Session 2 transcript contains nine references to `memory/semantic/evidence-scope-policy.md`, and both raw transcripts carry the distinct session identifiers listed above, matching the evaluation's execution record.

## Observed Outcome

All four pre-registered continuity criteria passed for this single run: Session 1 recorded the decision; Session 2 found the exact source, understood why it applied, reused it by scoping its own report to a narrow observed outcome with named next validations, and preserved the memory boundary. This is the **second distinct observed** continuity result for controlled OpenCode + Big Pickle runs, using a different decision and task than Continuity 001. Together they constitute two observations of the same behavior class in one environment — not an identical replication of either run.

## Limitation

Because Continuity 002 varied the decision, prompts, and task rather than rerunning Continuity 001 identically, the pair cannot distinguish a repeatable property from environment-specific behavior; no identical replication study exists yet. Evidence remains bounded to this isolated fixture, the `opencode/big-pickle` model, the prepared OpenCode integration, and the fixed test prompts. It shows nothing about baseline-versus-Praxis differences, coding quality, token cost, long-term retention, other models, or cross-agent portability. Both evaluations state these boundaries; nothing here may be cited as proof of repeatability, portability, compatibility, or product benefit.

## Status Statement

This is an **`observed` experience**: a record of what was witnessed in one evidence package, reported within the limits of its direct evidence. It is **not** a reusable skill, **not** a candidate pattern, and **not** a proposal. No artifact under `skills/` is authorized by this note, no pattern has been generalized into a candidate, and no proposal exists on the basis of this note. Under the evolution-001 protocol, any candidate pattern requires three comparable experiences plus explicit human review in `trials/evolution-001/review/HUMAN_REVIEW.md`, which remains `pending`.

## Files Changed

- `trials/evolution-001/experiences/experience-002.md` (created — this note)

No other file was created or modified. `skills/`, `memory/`, `evolve/`, `trials/evolution-001/candidates/`, `proposals/`, `evaluations/`, and `review/HUMAN_REVIEW.md` were read (where applicable) but left untouched.
