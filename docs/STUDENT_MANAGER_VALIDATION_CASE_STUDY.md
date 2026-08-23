---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "validation-case-study"
status: "observed"
---

# Student Manager — Preliminary Validation Case Study

## Purpose

Student Manager is a realistic academic-administration example used to prepare a real-project Praxis validation. It is **not** Praxis Core, and it is not presented as a standalone product outcome in this evidence package. Its role is to supply a project with multiple domain entities, security boundaries, architectural decisions, recurring academic workflows, and future multi-session work.

## Scope of the Example

| Area | Implemented evidence |
|---|---|
| Academic domain | Student, course, enrollment, attendance, grade, and academic-alert models. |
| Security | Authenticated reads and administrator-only academic mutations. |
| Workflows | Arabic dashboard, student directory/profile, course registration, attendance, grades, and alerts. |
| Verification | TypeScript check, 9 Vitest tests, desktop review, and mobile review. |
| Local context | `docs/PROJECT_CONVENTIONS.md` and `docs/validation-sessions/` in the Student Manager project. |

## What Was Actually Observed

The implementation reused the host scaffold’s authentication middleware, typed API layer, database migration workflow, dashboard layout, and component library. The first local record notes two corrected issues: a route-wrapper type mismatch and a date-normalization mismatch at the database boundary. Those details are contained in the Student Manager record `docs/validation-sessions/session-001-foundation.md`.

## What This Does Not Yet Prove

This example does not prove a numerical reduction in context repetition, errors, or rework. It does not prove that a later agent discovered and used retained knowledge. It does not prove an evolution cycle, a new approved skill, or behavior across three separate coding agents. Those claims remain `not_run` until the required sessions are recorded.

## Next Validation Sequence

```text
Session 1 → establish an accepted Student Manager decision
Session 2 → run a dependent task without restating that decision
Session 3 → record whether the agent discovers, understands, and follows it
Session 4 → repeat a similar issue and detect a candidate pattern
Session 5 → use a human-approved skill proposal in a new task
```

The sequence must follow [`VALIDATION_PROTOCOL.md`](VALIDATION_PROTOCOL.md), [`MEMORY_UTILITY_TEST.md`](MEMORY_UTILITY_TEST.md), [`DELIBERATE_FORGETTING.md`](DELIBERATE_FORGETTING.md), and the two-level [`PORTABILITY_TEST.md`](PORTABILITY_TEST.md).

## Status

**Observed, not benchmarked.** Student Manager is ready to generate real evidence; the comparison measurements remain intentionally blank in [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md).
