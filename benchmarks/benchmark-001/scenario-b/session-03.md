# Scenario B — Session 03

## User Prompt

Fix the product validation bug and ensure it never happens again. Add a regression test.

## Agent Context

> Praxis loaded. Reading semantic memory, working memory, and relevant skills.

## Memory Loaded

- `praxis.config.md`: 8,000-token budget, lazy loading, security deny-list, and human-reviewed evolution.
- `memory/semantic/conventions.md`: JWT via `auth:api`, `/api/v1`, repository/service/controller boundaries, Form Requests, naming, and test expectations.
- `memory/working/current.md`: current benchmark task, previous decisions, blockers, and next steps.
- `skills/technical/api-design/SKILL.md`: resource routes and consistent response envelopes.
- `skills/technical/database-design/SKILL.md`: migration and repository boundaries.
- `skills/core/tdd/SKILL.md`: regression-first verification.
- `skills/core/security/SKILL.md`: deny-list and trust-boundary requirements.

## Agent Execution

Read the episodic event describing the validation bypass and reproduced it with a failing regression test. Moved validation into StoreProductRequest, removed mass assignment from the controller, and verified invalid price and stock are rejected.

## Consistency Evidence

The same camelCase/PascalCase and snake_case boundaries remained in place. JWT was reused without re-explanation, repositories remained the database boundary, testing conventions were maintained, and RBAC rules were respected. In Session 4, the Session 3 validation incident was explicitly checked through the episodic-memory reference before the new feature was accepted.

## Token Estimate

Context and Praxis-load estimate: 3350 tokens.

## Session Score

**10/10** for consistency with prior sessions.
