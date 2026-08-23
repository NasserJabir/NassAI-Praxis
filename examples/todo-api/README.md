---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "example-project"
---

# Todo API — Graph + Loop Demo

This is a tiny, Markdown-only project used to demonstrate how Praxis preserves knowledge across four coding-agent sessions. It describes a realistic API without introducing a runtime or framework inside Praxis.

## Product

A Todo API supports creating, listing, completing, and filtering todos. The project convention is to validate input at the boundary, keep handlers thin, return stable JSON shapes, and cover each endpoint with an acceptance check.

## Four Sessions

Session 1: establish architecture. Session 2: add feature behavior. Session 3: fix bug behavior. Session 4: add another feature using the retained knowledge.

| Session | Task | Durable result |
|---|---|---|
| [001](sessions/001-architecture.md) | Establish architecture | Decision and initial convention. |
| [002](sessions/002-feature.md) | Add create-todo endpoint | Skill and procedure applied. |
| [003](sessions/003-bug.md) | Fix missing validation bug | Error, solution, and evaluation recorded. |
| [004](sessions/004-feature.md) | Add filtering endpoint | Prior bug pattern reused; future knowledge proposed. |

## Graph Path

```text
Task
→ Agent
→ Persona
→ Skill
→ Execution
→ Evaluation
→ Experience
→ Pattern
→ Memory
→ Future Task
```

The canonical project records are intentionally small. The coding agent reads the relevant session and semantic files; a human decides which candidate knowledge becomes approved project guidance.

## Try It

Open Session 001, then read the later sessions in order. Notice that Session 003 records the validation failure and Session 004 uses that experience before implementing a new endpoint. This is the value of persistent Markdown context without a database or background process.
