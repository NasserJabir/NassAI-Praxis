---
version: "1.3.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T13:00:00Z"
author: "Manus AI"
classification: "internal"
type: "project-continuity"
---

# Project Continuity

The project owns the memory, not the agent. Praxis carries project knowledge from one session and one coding agent to another through Markdown files.

```text
Developer
    ↓
Project
    ↓
AI Session
    ↓
Knowledge remains
    ↓
Another AI Session
    ↓
Knowledge remains
    ↓
Another Agent
    ↓
Knowledge remains
```

This is the product value proposition:

> **Give your AI coding agent a persistent memory and working method for your project — using nothing but Markdown.**

> **Your project remembers.**

Project continuity is demonstrated when a later session uses an earlier decision, convention, procedure, or pattern with provenance. It is not demonstrated by the existence of a large memory directory.

## Current Case Status

Continuity 001 and 002 supply `observed` evidence that fresh independent OpenCode sessions in isolated Praxis fixtures can preserve, find, explain, and reuse two different semantic Markdown decisions. Their complete evidence packages are retained in [`evidence/continuity-001`](../evidence/continuity-001/EVALUATION.md) and [`evidence/continuity-002`](../evidence/continuity-002/EVALUATION.md).

Cross-Agent Continuity 001 adds `observed` OpenCode-to-Pi **cross-harness** retrieval and reuse. Pi used the same Big Pickle backend through an OpenCode bridge, so this is not cross-model or provider-independent evidence. Its complete package is retained in [`evidence/cross-agent-continuity-001`](../evidence/cross-agent-continuity-001/EVALUATION.md).

These are distinct observations, not an identical replication series. Formal repeatability, different-provider/model continuity, baseline comparison, and applied-code continuity remain separate pending tests.

Student Manager still supplies a separate, pending applied-code scenario around protected date normalization. It does not inherit the Continuity 001 result. See [`CONTINUITY_CASE_STUDY.md`](CONTINUITY_CASE_STUDY.md) for the controlled-test boundary and [`STUDENT_MANAGER_VALIDATION_CASE_STUDY.md`](STUDENT_MANAGER_VALIDATION_CASE_STUDY.md) for the preliminary implementation record.
