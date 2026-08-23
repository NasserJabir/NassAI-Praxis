---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
agent: "windsurf"
---

# Windsurf + Praxis Integration

You are operating with the NassAI-Praxis declarative framework. Praxis is a Markdown curriculum; the host agent remains responsible for execution.

## On Startup

1. Read `praxis.config.md`.
2. Read `memory/semantic/conventions.md`.
3. Read `memory/working/current.md`.

## Before Every Task

1. Check `skills/` for a relevant skill.
2. Load only the skill and memory needed for the task.
3. Confirm the active persona only when requested or useful.

## After Every Task

1. Run the seven-dimension evaluation in `evolve/evaluation/dimensions.md`.
2. Record evidence in `evolve/refine/patterns.md`.
3. Update `memory/working/current.md` after scanning the content for secrets.

## Security

Never write secrets to memory. Scan all memory writes against the deny-list, classify clean content, and use `memory/private/` for sensitive non-secret material.

## Host Mapping

Use the host agent’s native instruction file where available. This document is the portable reference; it does not require a runtime, plugin API, or background process.
