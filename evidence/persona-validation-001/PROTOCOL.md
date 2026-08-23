---
type: persona-lifecycle-validation
id: persona-validation-001
status: frozen
persona: fatima
persona_file: personas/fatima/PERSONA.md
agent: opencode
model: opencode/big-pickle
---

# Persona Validation 001 — Protocol

## Persona Tested

| Field | Selection |
|---|---|
| Persona | Fatima |
| Canonical definition | `personas/fatima/PERSONA.md` |
| Declared role | Security Auditor with backend/API-specialist profile |
| Persona knowledge | `experience.md`, `preferences.md`, and `skills.md` beneath `personas/fatima/` |
| Associated skills | API design, database, auth/authz, validation, messaging, performance, and Node.js tooling knowledge listed in `skills.md` |
| Mutation policy | `proposal_then_review` |

## Architectural Boundary

This is a Markdown-only trial. No runtime, lock, queue, database, daemon, service, session manager, heartbeat, or mandatory CLI is added. OpenCode is the execution host. The original Praxis project and canonical Persona files remain unchanged throughout the trial.

## Sessions

| Session | Purpose | Permitted writes |
|---|---|---|
| 001 | Identify Fatima and record an observed specialized security/API experience. | Its own isolated record only. |
| 002 | Fresh retrieval and related-task reuse without restating the prior decision or source path. | Its own isolated record only. |
| 003 | A materially similar task produces an additional observed experience; no Persona update or skill. | Its own isolated record only. |
| 004 | Synthesize candidate pattern, proposal, and evaluation only. | Candidate/proposal/evaluation records only. |
| 005 | After explicit human approval only, create one trial-only Persona skill. | The authorized trial-only skill only. |
| 006 | Fresh discovery and read-only reuse of the approved trial skill. | Its own reuse report only. |

## Knowledge Boundary

Project knowledge is shared only when explicitly sourced from project-level files. Persona-specific experience remains inside the selected Persona's trial record and must not be claimed by a second Persona or silently promoted to semantic/project memory. No canonical Persona file may be edited in any session.

## Concurrency Policy Observation

The canonical policy currently permits concurrent **reads** of a Persona and requires isolated session records plus proposal-first mutation. It does not provide a runtime reservation or technical lock. This trial will create a visible Markdown active-work record for Session A and ask an independent Session B to inspect it before accepting same-Persona work. A compliant deferral/recognition outcome demonstrates **policy awareness when the record is discovered**; a parallel technical prevention claim is out of scope. If the current documents do not direct deferral, that is recorded as an `observed gap`, not repaired by adding a runtime.

## Human Gate

No skill is created, Persona file changed, or knowledge promoted until the user explicitly approves the exact candidate proposal and trial-only path. A human-approved trial skill remains outside the original Praxis Core unless separately authorized.
