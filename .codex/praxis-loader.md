---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
agent: "codex"
---

# Codex CLI Praxis Loader

Use this checklist at the beginning and end of each task.

## Before the Task

1. Read `praxis.config.md`.
2. Identify the task type: feature, bug, workflow, research, review, security, or architecture.
3. Load relevant skills from `skills/`; do not load unrelated categories.
4. Load `memory/working/current.md`.
5. Load `memory/semantic/conventions.md` or `memory/semantic/conventions.summary.md` first.
6. Load episodic memory only if the user mentions a bug, fix, issue, incident, or regression.
7. Load procedural memory only if the user mentions a workflow, process, deploy, release, or rollback.
8. After the task, evaluate the work, security-scan every proposed memory write, update memory, and check evolution thresholds.

## Host Notes

Codex CLI uses the `.codex/` project directory and chat-based task execution. Use the same full startup and post-task protocol as Claude Code, with an 8K Praxis allocation inside the 128K model context.

## Write Gate

No loader step authorizes an unsafe write. Follow `memory/security/scan-procedure.md`, `memory/CLASSIFICATION.md`, and `memory/lifecycle.md` before changing memory.

## Security Reference

Before any memory write, apply `memory/security/deny-list.md` and `memory/security/scan-procedure.md`.

## Persona Use Policy

A persona definition is a shared Markdown thinking layer. Multiple sessions may read the same persona concurrently. Do not modify the base persona file during an active session; record session-specific context under `sessions/<session-id>/` and submit any improvement as a proposal for human review. Praxis has no runtime lock, reservation service, queue, heartbeat, or mandatory CLI.
