---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "opencode/cross-agent-continuity-001/session-001"
classification: "internal"
security_scan: "passed"
confidence: "high"
decision_type: "project-decision"
session_created: "OpenCode Session 1"
---

# Agent Interface Invariance Policy

## Decision

Semantic project decisions in this project are owned by the **Markdown project memory** — specifically files under `memory/semantic/` — and by nothing else. They are **not** owned by any agent-specific instruction file or harness interface, including `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `CODEX.md`, per-harness adapter directories (`.claude/`, `.codex/`, `.copilot/`, `.cursor/`, `.gemini/`, `.kimi/`, `.pi/`, `.windsurf/`), or any tool configuration file (`opencode.json`, plugin manifests).

An agent-specific instruction file may *point to* a semantic decision; it may never *be* the decision. If an adapter restates, summarizes, or paraphrases a semantic decision, the adapter's text is non-authoritative commentary and the semantic file remains the sole source of truth.

## Consumption Requirements

Any later coding-agent harness that relies on a semantic project decision governed by this policy must:

1. **Name the exact semantic source** — state the precise path under `memory/semantic/` of the decision it applies, and actually read that file before using it.
2. **Explain why the semantic source outranks a harness adapter for the decision itself** — the harness must articulate, when applying the decision, that project-level semantic memory is the authority because it is harness-invariant, durable across agent migrations, and readable identically by every coding agent, whereas an adapter is bound to one harness, changes when that harness's conventions change, and cannot bind other agents.
3. **Consume the policy read-only** — apply the decision without modifying it or any other file under `memory/`. The decision persists unchanged so every subsequent harness reads the same source.

A harness that applies the decision from an adapter's restatement, without reading the named semantic source, does not comply with this policy.

## Rationale

This project runs multiple distinct coding-agent harnesses (OpenCode, Claude Code, Codex, Gemini CLI, Cursor, Copilot, Kimi, Pi, Windsurf) over one shared project. Agent-specific instruction files are, by design, different for each harness: they are rewritten, renamed, and reorganized whenever a harness is added, removed, or upgraded. A decision embedded in such a file would silently fork into per-harness variants, drift apart, and lose authority over agents that never read that particular interface.

Markdown project memory under `memory/semantic/` is the only artifact that is simultaneously harness-neutral, human-reviewable, version-controllable, and stable across harness churn. Anchoring durable decisions there guarantees that Session N+1 on a different harness reasons from exactly the same text as Session N. Requiring named-source reads makes compliance verifiable from transcripts; requiring read-only consumption keeps the source invariant so cross-session comparison stays meaningful.

## Provenance

This decision was created in **OpenCode Session 1** of Cross-Agent Continuity Experiment 001 (`trials/cross-agent-continuity-001/EXPERIMENT.md`). It is a durable project decision and governs all future reliance on semantic project decisions by any coding-agent harness in this project.
