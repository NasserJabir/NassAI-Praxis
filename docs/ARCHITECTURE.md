---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "architecture"
---

# NassAI-Praxis Architecture

## What Is Praxis?

NassAI-Praxis is a **Markdown-first, runtime-independent framework** for defining persistent project knowledge, specialized behavior, reusable skills, project memory, explicit learning loops, and human-reviewed evolution for AI coding agents.

> Praxis does not execute agents. It gives coding agents a structured way to remember, reason, work, evaluate, and evolve.

## What Is Core?

Praxis Core is the human-readable repository of `praxis.config.md`, memory, agents, personas, skills, graph relationships, loop definitions, evaluation methodology, and evolution policy. Markdown is canonical, Git is the history mechanism, and supported coding agents are the execution hosts.

## What Is Not Core?

No CLI is required. Runtime execution, orchestration, session managers, queues, heartbeats, databases, vector stores, embedding services, cloud memory, MCP servers, daemons, web services, autonomous runtimes, and a CLI is not required and is outside Praxis Core. Optional local helpers must never be required to understand or use the project.

## How Do the Parts Relate?

```text
Agent + Persona + Skill + Relevant Memory = Task Execution Context
```

The **Agent** supplies the role. The **Persona** supplies thinking style, priorities, decision principles, risk tolerance, and communication style. The **Skill** supplies a reusable method. **Memory** supplies project knowledge. The selected coding agent performs the task in its own native environment.

For a rendered, Markdown-native explanation of the complete composition, normal work loop, Persona contribution, concurrent reading policy, and evidence levels, see [`VISUAL_GUIDE.md`](VISUAL_GUIDE.md). The diagrams are documentation, not a runtime topology.

## Graph Engineering

Graph Engineering is a declarative documentation and schema layer. It defines entities and controlled Markdown relationships such as `Task → uses → Skill`, `Task → assigned_to → Agent`, and `Experience → creates → Pattern`. It does not create a graph engine or database. See [`graph/model.md`](../graph/model.md), [`graph/relationships.md`](../graph/relationships.md), and [`graph/conventions.md`](../graph/conventions.md).

## Loop Engineering

Loop Engineering is an explicit method followed by the coding agent:

```text
Task → Understand → Plan → Execute → Verify → Evaluate
     → Record Experience → Detect Pattern → Propose Improvement
     → Human Approval → Update Markdown
```

Execution completes current work. Learning promotes useful, validated knowledge. Evolution proposes capability changes from repeated evidence; it never turns one event into a permanent rule.

## How Does Evolution Work?

A candidate requires a repeated pattern, successful outcomes, evaluation evidence, and clear generalization. The candidate carries provenance and a knowledge status, remains pending until human review, and is promoted only by updating the canonical Markdown file. Rejected candidates remain evidence, not active capability.

## Architecture Freeze

The current architecture is intentionally frozen at the declarative layer. New work must improve clarity, evidence, portability, examples, or documentation before proposing a new runtime or mandatory dependency. See [`ARCHITECTURE_FREEZE.md`](ARCHITECTURE_FREEZE.md).
