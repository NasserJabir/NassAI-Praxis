---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# How Praxis Eliminated Context Amnesia in a Laravel + Vue Project

## Meet the Team

A developer is building a Laravel API and Vue frontend with an AI coding agent. The work is realistic: authentication first, role-based access next, a security regression after that, and finally a new Categories resource. Four sessions are enough to expose whether the agent is learning or merely restarting.

## The Problem

In the Without-Praxis path, every session began with no prior context. Session 1 introduced JWT, but Session 2 reconstructed role handling without the earlier contract. Session 3 fixed a product-validation bug but did not preserve the regression test. By Session 4, the agent had forgotten the repository boundary, changed response shapes, and exposed an admin navigation link to every user.

The problem was not intelligence. It was the absence of a project operating system. The agent could solve each prompt locally, but it could not reliably remember the decisions that made the project coherent.

## The Solution

Praxis was added as the project’s operating system. Before every With-Praxis session, the agent loaded `praxis.config.md`, semantic conventions, working context, and the relevant API-design, database-design, TDD, and security skills. After every session, it updated working, semantic, episodic, and refine memory after a security scan.

The memory was deliberately compact. It recorded the JWT guard, `/api/v1` prefix, repository boundary, Form Requests, role middleware, naming rules, Axios interceptors, route guards, and the validation incident. The agent remained the runtime; Praxis supplied continuity.

## The Results

The controlled benchmark measured **100% less context re-explanation**, **100% less error recurrence**, and **31% fewer tokens per task** in the With-Praxis path. Decision consistency rose from 50% to 100%, instruction adherence from 52% to 100%, and the average session score from 4.5/10 to 9.75/10.

> “In Session 4, the Session 3 validation incident was explicitly checked through the episodic-memory reference before the new feature was accepted.”

## Before and After

Scenario A mixed conventions and bypassed validation:

```php
// Without Praxis: direct request data crosses the controller boundary.
return Product::query()->create($request->all());
```

Scenario B reused the established repository and validation pattern:

```php
// With Praxis: only validated data reaches the repository.
return response()->json([
    'data' => $this->products->create($request->validated()),
], 201);
```

The same difference appeared in naming. An independent session used `access_token`, `product_name`, and `unit_price` without preserving the project contract. The memory-augmented path kept `token` in the established response envelope and maintained application camelCase versus database snake_case.

## Conflict Resolution

During hardening, Praxis recorded a realistic conflict: an old note said “we use snake_case for variables,” while the adopted convention said application variables use camelCase and database fields use snake_case. The broad rule was marked `[SUPERSEDED]`, the winning rule was made explicit, and the decision was logged in `memory/conflict-resolution.md` and `evolve/log.md`.

## Conclusion

Praxis did not replace the agent or hide decisions in a database. It made the project’s decisions readable, loadable, reviewable, and reusable. In this benchmark, the result was less re-explanation, fewer recurring errors, lower token cost, and a feature that followed the same patterns as the work before it.

See the [full benchmark report](report.md), [metrics](metrics.md), and [transcripts index](TRANSCRIPTS_INDEX.md).
