---
type: cross-agent-continuity-001-session-report
session: 2
session_agent: opencode
date: "2026-08-22"
---

# Session 002 Report — Cross-Agent Continuity Experiment 001

## Decision Source

`memory/semantic/agent-interface-invariance-policy.md`

This file was located and read in full before this report was written or the decision was applied.

## Why This Source Is the Authority

Project-level semantic memory under `memory/semantic/` is the authority for durable decisions because it is harness-invariant, durable across agent migrations, and readable identically by every coding agent. A per-harness instruction file is bound to one harness, changes when that harness's conventions change, and cannot bind other agents; it may point to the decision but may never be the decision.

## Policy Applied

The governing policy requires any later coding-agent harness relying on a semantic project decision to:

1. Name the exact semantic source path and actually read that file before applying the decision.
2. Explain why the semantic source outranks a harness adapter for the decision itself.
3. Consume the policy read-only — apply it without modifying it or any other file under `memory/`.

## Handoff Rule for Future Coding-Agent Harnesses

When a task depends on a durable project decision, do not take the decision from any harness-specific instruction file or tool configuration. Locate the governing file under `memory/semantic/`, name its exact path, read it in full, state why that file outranks your own harness's adapters for the decision, apply it without editing anything under `memory/`, and record the source path, the policy applied, and the files changed in your session report.

## Files Changed

- `trials/cross-agent-continuity-001/session-002-report.md` — created (this report)

No files under `memory/` were modified.
