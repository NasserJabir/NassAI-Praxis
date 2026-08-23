# Scenario B — Session 02

## User Prompt

Add RBAC with admin and user roles, protect existing routes, add an admin-only user listing endpoint, and update auth tests.

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

Read the updated working memory and semantic conventions. Reused `role:admin`, the `/api/v1` prefix, repository interfaces, and the same JSON envelope. Added positive and negative RBAC tests.

## Consistency Evidence

The same camelCase/PascalCase and snake_case boundaries remained in place. JWT was reused without re-explanation, repositories remained the database boundary, testing conventions were maintained, and RBAC rules were respected. In Session 4, the Session 3 validation incident was explicitly checked through the episodic-memory reference before the new feature was accepted.

## Token Estimate

Context and Praxis-load estimate: 3250 tokens.

## Session Score

**10/10** for consistency with prior sessions.
