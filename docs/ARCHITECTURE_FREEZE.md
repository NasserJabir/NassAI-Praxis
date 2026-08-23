---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "architecture-freeze"
---

# Architecture Freeze

NassAI-Praxis is frozen as a **Markdown-first, runtime-independent layer** until real evidence demonstrates that a new capability cannot be expressed clearly with Markdown and existing coding-agent environments.

## Allowed Additions

- Markdown definitions, templates, examples, provenance, evaluation records, and integration guidance.
- Optional metadata that preserves backward compatibility.
- Documentation-driven validation protocols and portability evidence.
- Human-reviewed changes to skills, agents, personas, memory, and evolution policy.

## Out of Scope for Praxis Core

- Graph Engine, Memory Engine, Loop Engine, or autonomous runtime.
- Database, vector database, embedding service, cloud memory, or web service.
- Session manager, queue engine, heartbeat service, or lock server.
- CLI is not required, background daemon, or new programming-language runtime.

## Change Gate

Every proposed feature must answer: Can a new developer understand it in Markdown? Does it preserve the agent as runtime? Does it keep existing integrations working? Does it add measurable user value without introducing mandatory complexity? If the answer is no, defer the feature and record the reason in a proposal.
