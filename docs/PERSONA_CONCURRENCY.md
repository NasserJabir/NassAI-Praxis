---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Concurrent Persona Use and Safe Mutation

A persona is a shared Markdown thinking definition, not a live worker. Multiple real-time sessions may read the same persona concurrently. The safety rule applies to **mutation**, not reading: the base persona definition must not be modified by active sessions.

## Policy

| Rule | Requirement |
|---|---|
| Concurrent reads | Allowed. Multiple agents may load the same persona at the same time. |
| Base definition | Read-only while sessions are active. |
| Session context | Isolated under `sessions/<session-id>/context.md`. |
| Learning output | Write session observations and evaluations to the session record, not to the base persona. |
| Persona improvement | Submit a Markdown proposal, then require human review before updating the base file. |
| Shared memory | Apply the normal security, classification, lifecycle, and conflict rules. |
| Runtime enforcement | None. This is a documented agent policy, not a lock service. |
| Mandatory dependency | None. No database or runtime is required. No daemon, queue, heartbeat, or CLI is not required is part of Praxis Core. |

## Session Flow

```text
personas/hassan/PERSONA.md
          ↓ read-only
Session A → sessions/session-a/context.md
Session B → sessions/session-b/context.md
          ↓
Persona Proposal → human review → personas/hassan/PERSONA.md
```

A session may use the same persona as another session, but each session keeps its task context, observations, evaluation, and proposed learning separate. This prevents accidental cross-session mutation while preserving the ability to work in parallel.

## Proposal Format

```markdown
# Persona Proposal: Hassan

- Source session: `sessions/session-a/`
- Evidence: <links to evaluations and experiences>
- Proposed addition: <principle, question, priority, or anti-pattern>
- Scope: <why this changes reasoning behavior>
- Risk: <possible undesirable behavior>
- Review status: pending human review
```

The proposal is evidence, not an active persona update. After approval, update the canonical persona file and record the decision in `evolve/log.md`.
