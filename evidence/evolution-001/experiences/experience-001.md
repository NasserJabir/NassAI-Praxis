---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-001 (opencode)"
classification: "internal"
type: "experience"
status: "observed"
experience_id: "evolution-001-experience-001"
source_evidence: "evidence/continuity-001/"
promotion_status: "not_a_skill_not_a_candidate_not_a_proposal"
---

# Experience 001 — Reporting a Single Observed Continuity Result Without Overstating It

## Problem

Continuity Experiment 001 produced exactly **one** controlled continuity run. The concrete reporting risk: a single observed success could be overstated into claims it does not support — presented as a proven capability, a repeatable result, an improvement over baseline, or portable behavior across agents. Per the experiment's own framing, one observed continuity run must not become an approved or general result. Claim strength had to stay exactly matched to evidence strength.

## Action Taken in the Evidence Package

Two fresh, independently invoked OpenCode sessions (`opencode/big-pickle`) ran in the isolated fixture:

1. **Session 1** created a durable semantic decision at `memory/semantic/continuity-status-policy.md` restricting behavioral-validation status labels to `observed` (direct execution evidence exists) and `not_run` (behavior not executed), forbidding unexecuted work to be reported as success or failure.
2. **Session 2**, invoked separately with no continuation flag, located the exact policy source before using its vocabulary, explained why it applied, applied `Status: not_run` to its assigned unexecuted behavioral task instead of fabricating a pass/fail claim, and left all of `memory/` unchanged.

The package then documented criterion-by-criterion results against the pre-registered pass criteria, recorded distinct session identifiers proving no conversation reuse, hashed both raw transcripts, and wrote explicit boundaries stating what the evidence does not show.

## Direct Evidence Paths

| Artifact | Path |
|---|---|
| Pre-registered hypothesis, prompts, criteria | [`evidence/continuity-001/EXPERIMENT.md`](../../../evidence/continuity-001/EXPERIMENT.md) |
| Evaluation with per-criterion results and limitations | [`evidence/continuity-001/EVALUATION.md`](../../../evidence/continuity-001/EVALUATION.md) |
| Session 1-created semantic decision source | [`evidence/continuity-001/generated/continuity-status-policy.md`](../../../evidence/continuity-001/generated/continuity-status-policy.md) |
| Session 1 note | [`evidence/continuity-001/generated/session-001-note.md`](../../../evidence/continuity-001/generated/session-001-note.md) |
| Session 2 report (`Status: not_run`) | [`evidence/continuity-001/generated/session-002-report.md`](../../../evidence/continuity-001/generated/session-002-report.md) |
| Raw transcript, Session 1 (`ses_fd6cd1775ffelRFJxqyZsfGmgJ`) | [`evidence/continuity-001/raw/session-001.jsonl`](../../../evidence/continuity-001/raw/session-001.jsonl) |
| Raw transcript, Session 2 (`ses_fd6c9effdffeFIziA9JrcI2xc4`) | [`evidence/continuity-001/raw/session-002.jsonl`](../../../evidence/continuity-001/raw/session-002.jsonl) |

Verification performed while writing this note: the raw Session 2 transcript contains six references to `memory/semantic/continuity-status-policy.md` and fifteen occurrences of the `not_run` label, and both raw transcripts carry the distinct session identifiers listed above.

## Observed Outcome

All four pre-registered continuity criteria passed for this single run: Session 1 recorded the decision; Session 2 found the source, understood the rule, reused it by recording `not_run` for unexecuted work, and preserved the memory boundary. This is an observation about **one** controlled run in **one** isolated fixture with **one** model.

## Limitation

A single passing run cannot distinguish a durable property from coincidence. This evidence shows nothing about baseline-versus-Praxis differences, token cost, long-term retention, coding quality, repeatability across runs, or portability to the other supported agents (continuity-002 and cross-agent-continuity-001 address separate, narrower risks). The evaluation itself states these boundaries; nothing here may be cited as proof of a general capability.

## Status Statement

This is an **`observed` experience**: a record of what was witnessed in one evidence package, reported within the limits of its direct evidence. It is **not** a reusable skill, **not** a candidate pattern, and **not** a proposal. No artifact under `skills/` is authorized by this note, no pattern has been generalized, and no proposal exists yet. Under the evolution-001 protocol, any candidate pattern requires three comparable experiences plus explicit human review in `trials/evolution-001/review/HUMAN_REVIEW.md`, which remains `pending`.

## Files Changed

- `trials/evolution-001/experiences/experience-001.md` (created — this note)

No other file was created or modified. `skills/`, `memory/`, `evolve/`, `trials/evolution-001/candidates/`, `proposals/`, `evaluations/`, and `review/HUMAN_REVIEW.md` were read (where applicable) but left untouched.
