---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# NassAI-Praxis Positioning

## Category

NassAI-Praxis is a **declarative persistence layer for AI coding agents**. It is not another autonomous agent, model wrapper, orchestration server, memory database, or command-line product. Its unit of value is the project’s readable operating knowledge: conventions, procedures, task context, specialized skills, worker roles, personas, and reviewed learning.

## Core Position

> **Praxis does not compete with agents; it makes every agent better by giving it a persistent project operating system.**

The agent remains the runtime and retains control of execution. Praxis supplies the curriculum that the agent reads lazily and updates through ordinary Markdown edits and Git commits.

## Differentiators

| Dimension | NassAI-Praxis | Conventional instruction files | Runtime memory products |
|---|---|---|---|
| Source of truth | Human-readable Markdown | Usually one instruction file | Service, database, or hidden state |
| Portability | Any Markdown-capable agent | Often agent-specific | Usually tied to one integration |
| Reviewability | Git diff, blame, merge, and history | File diff only | Provider-specific audit model |
| Loading model | Explicit lazy-loading priorities | Usually always-on | Runtime-dependent retrieval |
| Evolution | Human-reviewed proposals | Manual edits | Often automatic or opaque |
| Security posture | Deny-list and classification rules | Depends on author | Depends on provider and storage |

## Audience

Praxis is for teams and individuals who use AI coding agents across multiple sessions and need decisions to persist without surrendering human review. It is especially useful for projects with established conventions, repeated workflows, multiple specialist roles, or more than one coding agent.

## Non-Goals

Phase 0 does not implement a runtime, vector search, background worker, secret vault, automatic promotion, or benchmark claims. Those concerns belong to later phases and must not be inferred from the Markdown foundation alone.

## Hardening Position

Phase 2 adds a production-hardening layer without changing the core position. Praxis remains Markdown-first and agent-agnostic, but now makes its safety, classification, lifecycle, token, diagnostic, and conflict-resolution behavior explicit and inspectable. These controls guide the agent while preserving human authority over rejected writes, promotions, and conflicts.
