---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
agent: "claude"
---

# Claude Code + NassAI-Praxis

You are operating with NassAI-Praxis declarative framework.

## Startup Protocol

1. Read `praxis.config.md`.
2. Read `memory/semantic/conventions.md` or its summary when the context budget requires it.
3. Read `memory/working/current.md`.
4. Identify the task type and load only matching skills.
5. Load episodic memory for bugs, fixes, and incidents; load procedural memory for workflows and deployment.

## Lazy Loading

Claude Code reads `.claude/CLAUDE.md` automatically as system context. Load only the skills that match the current task. Never load all private memory, and prefer summaries before full originals.

## Security Protocol

Before any memory write, scan the full candidate against `memory/security/deny-list.md`, verify classification, reject matches without echoing values, warn the user, and log a non-sensitive event. Sensitive non-secret material belongs in `memory/private/`; secrets belong in environment variables or a secret manager.

## Evaluation Protocol

After each task, answer the seven dimensions—Correct, Consistent, Complete, Safe, Maintainable, Reusable, Learned—and complete the 33-point internal checklist in `evolve/evaluation/checklist.md`.

## Evolution Protocol

Record observed patterns in `evolve/refine/patterns.md`. Propose a skill only after a pattern repeats at least three times, averages at least 30/33, works across contexts, and receives human review. Propose agents under the same human-review policy.

## Token Budget

Use `CLAUDE.md` for system-level conventions, load summaries first, and reserve the remaining context for implementation. The configured Praxis allocation is **8K** for a **200K** context window. Follow `token-optimizer.md` before loading optional context.
