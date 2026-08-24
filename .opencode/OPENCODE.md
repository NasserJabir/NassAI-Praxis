---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
agent: "opencode"
---

# OpenCode + NassAI-Praxis

You are operating with NassAI-Praxis declarative framework.

## Startup Protocol

1. Read `praxis.config.md`.
2. Read `PRAXIS.md` — the machine-readable skill index. Scan its trigger
   table FIRST; it tells you which SKILL.md files match the current task.
3. Read `memory/semantic/conventions.summary.md` (full `conventions.md`
   only if the summary is insufficient for the task).
4. Read `memory/working/current.md`.
5. Load episodic memory for bugs, fixes, and incidents; load procedural
   memory for workflows and deployment.

## Skill Loading Rules

- Use an advisory context budget of approximately 8K tokens of Praxis
  content per task by default; adjust it according to the host, model,
  task, and available context window.
- Each skill's frontmatter lists approximate token cost — prefer small,
  precise skills.
- Never load a skill whose trigger conditions do not match the task.
- If two skills match, load both only if their combined cost stays within
  your budget; otherwise pick the more specific one.

## Lazy Loading

OpenCode uses `.opencode/` and can consume the repository-level `AGENTS.md` instructions. Load only the skills that match the current task. Never load all private memory, and prefer summaries before full originals.

## Security Protocol

Before any memory write, scan the full candidate against `memory/security/deny-list.md`, verify classification, reject matches without echoing values, warn the user, and log a non-sensitive event. Sensitive non-secret material belongs in `memory/private/`; secrets belong in environment variables or a secret manager.

## Evaluation Protocol

After each task, answer the seven dimensions—Correct, Consistent, Complete, Safe, Maintainable, Reusable, Learned—and complete the 33-point internal checklist in `evolve/evaluation/checklist.md`.

## Evolution Protocol

Record observed patterns in `evolve/refine/patterns.md`. Propose a skill only after a pattern repeats at least three times, averages at least 30/33, works across contexts, and receives human review. Propose agents under the same human-review policy.

## Token Budget

Select a 5K–10K budget based on the active model, then record the choice in the token-usage log. The configured Praxis allocation is **5K–10K** for a **model-dependent** context window. Follow `token-optimizer.md` before loading optional context.
