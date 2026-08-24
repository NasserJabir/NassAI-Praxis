---
version: "1.0.0"
created: "2026-08-23T13:10:00Z"
author: "NassAI-Praxis maintainers"
classification: "public"
type: "persona-guide"
---

# Personas: Consistent Reasoning Without a New Runtime

## Purpose

A **Persona** is a **versioned Markdown reasoning profile** for how a task should be approached. It records identity, thinking and decision principles, curated expertise, priorities, risk tolerance, recurring review questions, and communication preferences. Personas make those characteristics explicit and reviewable instead of leaving them as an implicit prompt habit.

> A Persona shapes **how** work is reasoned about. It does not replace the Agent that owns the task, the Skill that defines the method, or Memory that holds project knowledge.

## The Four-Part Context

| Part | Primary question | Example contribution |
|---|---|---|
| Agent | Who owns this responsibility? | A Security Auditor owns threat and trust-boundary review. |
| Persona | How should the work be reasoned about? | A careful reviewer foregrounds risk, evidence, and reversible decisions. |
| Skill | Which repeatable procedure applies? | A security-review skill defines concrete checks and verification steps. |
| Memory | What does this project already know? | A prior decision, convention, incident, or constraint. |

When all four are relevant, they produce a focused task context. They are not all mandatory for every task, and an agent should not load them merely because they exist.

## Implementation Boundary and Knowledge Scope

Each Persona directory contains four curated Markdown files: `PERSONA.md`, `experience.md`, `preferences.md`, and `skills.md`. Together, they describe the reasoning profile, authored background/expertise, preferences, and expertise references for that Persona. They are **not** a dynamic memory store, a session-history log, or a Persona-owned canonical Skill registry.

Project knowledge remains in the project Memory and decision records. Canonical reusable procedures remain in `skills/`. A Persona may reference and consume either when they are relevant to the host agent and task, but does not own, operate, or automatically update them.

When approved project knowledge is materially related to a Persona, authors may record the relationship as provenance metadata without changing ownership:

```markdown
---
scope: project
related_persona: fatima
derived_from:
  - sessions/003
status: approved
---
```

`related_persona` indicates relevance or attribution only. It does not create Persona memory, automatic retrieval, automatic Skill ownership, or automatic cross-project transfer. Reuse in another project requires explicit export or adoption, evidence, and human review.

## Practical Value

Personas are most useful when two technically valid paths have different trade-offs. They make the decision criteria visible. A security-oriented Persona can ask whether an implementation expands a trust boundary; an architecture-oriented Persona can challenge long-term coupling; a product-oriented Persona can test whether a workflow remains understandable. The resulting decision must still cite real project constraints and verification evidence.

| Persona contribution | Value to the project | Boundary |
|---|---|---|
| Explicit priorities | Makes trade-offs reviewable and consistent across sessions. | Does not override project requirements or evidence. |
| Risk questions | Encourages appropriate scrutiny for security, architecture, or UX work. | Does not make a task safe without verification. |
| Communication style | Makes handoffs and review notes more useful to the intended audience. | Does not replace a required artifact or test. |
| Evidence-backed proposals | Allows a repeated, evidenced reasoning improvement to be considered. | Does not update the canonical Persona automatically. |

## Selecting a Persona

Select a Persona only when its decision style is materially relevant. Record the reason when it affects a concrete decision. A small CSS correction may need no Persona; a security review, architecture trade-off, or stakeholder-facing workflow may benefit from one. If a Persona is not reached or not needed, that is a normal observation—not a failure.

## Safe Concurrent Use

The same Persona may be read by several sessions at the same time. Each session keeps its own task record and observations. The canonical Persona file is not rewritten during active work; any durable improvement follows:

```text
Observed session evidence → Candidate proposal → Human review → Approved Markdown change
```

This is a documentation policy, not a lock, session manager, database, or daemon. See [`PERSONA_CONCURRENCY.md`](PERSONA_CONCURRENCY.md) for the precise policy and [`AGENT_PERSONA_COMPOSITION.md`](AGENT_PERSONA_COMPOSITION.md) for composition details.
