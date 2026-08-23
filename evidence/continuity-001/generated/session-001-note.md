# Session 1 Note — Continuity Experiment 001

Date: 2026-08-22

## Decision Source

`memory/semantic/continuity-status-policy.md`

## Decision Summary

Behavioral validation claims may use only two status labels: `observed`, permitted only when direct evidence of execution exists, and `not_run`, used when the behavior has not been executed. A task that has not been executed must not be reported as a success or a failure. Rationale: claim strength must exactly match evidence strength; labeling unexecuted work as success or failure fabricates evidence that corrupts downstream decisions. The decision was created in Session 1 as a durable semantic project decision for reuse by independent later sessions.

## Files Changed

- `memory/semantic/continuity-status-policy.md` (created — the semantic decision)
- `trials/continuity-001/session-001-note.md` (created — this note)

No other files were modified. All files under `memory/` other than the new semantic decision file remain untouched, per the trial boundary.
