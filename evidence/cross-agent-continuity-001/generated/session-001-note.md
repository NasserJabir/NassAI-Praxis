---
type: cross-agent-continuity-001-session-note
session: 1
session_agent: opencode
date: "2026-08-22"
---

# Session 001 Note — Cross-Agent Continuity Experiment 001

## Decision Source

`memory/semantic/agent-interface-invariance-policy.md`

## Decision Summary

Semantic project decisions are owned by the Markdown project memory (`memory/semantic/`), not by any agent-specific instruction file or harness interface (`AGENTS.md`, per-harness adapters, tool configs). A later coding-agent harness relying on such a decision must name and read the exact semantic source path, explain why the semantic source outranks a harness adapter for the decision itself (harness-invariant and durable versus harness-bound), and consume the policy read-only. Created in OpenCode Session 1.

## Files Changed

- `memory/semantic/agent-interface-invariance-policy.md` — created (durable semantic project decision)
- `trials/cross-agent-continuity-001/session-001-note.md` — created (this note)

No other memory files were modified.
