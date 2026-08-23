---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# Benchmark 001 Transcript Index

## Scenario A — Without Praxis

| Session | Task | Key finding |
|---|---|---|
| [Session 01](scenario-a/session-01.md) | Build authentication | JWT response names and context were reconstructed from zero. |
| [Session 02](scenario-a/session-02.md) | Add RBAC | Role middleware and tests drifted without prior decisions. |
| [Session 03](scenario-a/session-03.md) | Fix validation bug | Generic request handling left a regression gap. |
| [Session 04](scenario-a/session-04.md) | Add Categories | Repository, response, naming, and admin-navigation patterns were forgotten. |

## Scenario B — With Praxis

| Session | Task | Key finding |
|---|---|---|
| [Session 01](scenario-b/session-01.md) | Build authentication | JWT, `/api/v1`, Form Requests, repositories, and tests were loaded first. |
| [Session 02](scenario-b/session-02.md) | Add RBAC | The same role middleware and API contract were reused. |
| [Session 03](scenario-b/session-03.md) | Fix validation bug | Episodic and TDD context produced a regression test. |
| [Session 04](scenario-b/session-04.md) | Add Categories | The prior incident and conventions prevented drift in the new resource. |

See the [benchmark report](report.md) for methodology and metrics.
