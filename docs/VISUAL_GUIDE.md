---
version: "1.0.0"
created: "2026-08-23T13:10:00Z"
author: "NassAI-Praxis maintainers"
classification: "public"
type: "visual-guide"
---

# How NassAI-Praxis Is Composed and Used

NassAI-Praxis is a **declarative project layer**. It does not run an agent. A coding agent remains the execution host; Praxis gives that host readable, reviewable material to consult when the task makes it relevant.

## 1. The Composition

```mermaid
flowchart TB
    Task[Task or user request] --> Host[Chosen coding agent<br/>execution host]

    subgraph Praxis[Markdown-first Praxis repository]
        Config[praxis.config.md<br/>scope and policy]
        Memory[Memory<br/>project decisions and experience]
        Skills[Skills<br/>reusable procedures]
        Agents[Agent definitions<br/>role and responsibility]
        Personas[Personas<br/>thinking style and priorities]
        Evidence[Evaluation and evidence<br/>observations and status]
    end

    Host -. selectively reads when relevant .-> Config
    Host -. selectively reads when relevant .-> Memory
    Host -. selectively reads when relevant .-> Skills
    Host -. selectively reads when relevant .-> Agents
    Host -. selectively reads when relevant .-> Personas

    Config --> Context[Task execution context]
    Memory --> Context
    Skills --> Context
    Agents --> Context
    Personas --> Context
    Context --> Host
    Host --> Output[Project artifact, decision, or verification]
    Output --> Evidence
```

> **Important:** the dashed arrows are intentionally selective. Praxis does not guarantee automatic retrieval; the host agent and the task determine whether a file is reached and used. The result should be recorded as evidence rather than assumed.

## 2. The Normal Work Loop

```mermaid
flowchart LR
    A[Real project task] --> B[Agent understands task]
    B --> C{Is Praxis context relevant<br/>and reached?}
    C -- Yes --> D[Read only relevant Markdown]
    C -- No --> E[Continue with ordinary project context]
    D --> F[Plan and execute]
    E --> F
    F --> G[Verify behavior or record why not]
    G --> H[Record session outcome and evidence]
    H --> I{Repeated, varied evidence?}
    I -- No --> J[Keep the observation]
    I -- Yes --> K[Candidate or proposal]
    K --> L[Human review]
    L -- Approved --> M[Intentional Markdown update]
    L -- Not approved --> N[Retain evidence; no Core change]
```

The loop is deliberately human-governed. A single session does not edit Core automatically. Evidence can remain `observed`, `inconclusive`, `not run`, or another documented status without becoming a feature.

## 3. What a Persona Adds

```mermaid
flowchart TB
    Work[Task needs a particular decision style] --> Role[Agent role<br/>what responsibility is owned]
    Work --> Persona[Persona<br/>how the work is approached]
    Work --> Skill[Skill<br/>which repeatable method is followed]
    Work --> Memory[Memory<br/>what this project already knows]

    Persona --> Priorities[Priorities and trade-offs]
    Persona --> Risk[Risk tolerance and review questions]
    Persona --> Communication[Communication and explanation style]
    Role --> Decision[Task decision and implementation]
    Skill --> Decision
    Memory --> Decision
    Priorities --> Decision
    Risk --> Decision
    Communication --> Decision
```

A Persona is not a second agent, a runtime process, or a lock. It is a shared Markdown definition of reasoning characteristics. It helps a task ask more consistent questions—for example, prioritizing safety, maintainability, user experience, or architectural trade-offs—while the **Agent** still owns the role, the **Skill** still supplies the procedure, and **Memory** still supplies project-specific knowledge.

## 4. Concurrent Persona Use, Safe Change

```mermaid
flowchart TB
    Base[Canonical Persona Markdown<br/>read-only during active work]
    Base --> A[Session A context]
    Base --> B[Session B context]
    Base --> C[Session C context]
    A --> RA[Session record and evaluation]
    B --> RB[Session record and evaluation]
    C --> RC[Session record and evaluation]
    RA --> Proposal[Persona proposal with evidence]
    RB --> Proposal
    RC --> Proposal
    Proposal --> Review[Human review]
    Review -- Approved --> Update[Intentional canonical Markdown update]
    Review -- Rejected or deferred --> Preserve[Evidence retained; no base change]
```

Multiple sessions may read the same Persona concurrently. They do not modify its canonical file while working. A durable Persona change needs provenance and human approval, not a technical lock or a background service. For the detailed policy, see [`PERSONAS.md`](PERSONAS.md) and [`PERSONA_CONCURRENCY.md`](PERSONA_CONCURRENCY.md).

## 5. Evidence Levels for Natural Use

| Level | Meaning | What it does **not** prove |
|---|---|---|
| E0 — No Observation | No opportunity to observe Praxis use, for example an infrastructure interruption. | A weakness or strength of Praxis. |
| E1 — Context Access | A task reached relevant Praxis context. | That the context influenced a decision. |
| E2 — Context Use | The task demonstrably used a knowledge item. | A better output or general value. |
| E3 — Behavioral Effect | The knowledge changed a concrete decision or implementation action. | A durable outcome improvement. |
| E4 — Outcome Effect | A verifiable outcome improved in the observed task. | General performance superiority. |
| E5 — Repeated Evidence | Comparable effects recur across varied independent work. | Automatic justification for an architecture change. |

This ladder keeps the project evidence-driven: it describes what was actually observed, not what the project hopes happened.
