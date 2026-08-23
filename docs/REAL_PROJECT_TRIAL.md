---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "trial-protocol"
status: "template"
---

# Real Project Trial

This protocol tests Praxis during real work outside the Todo API demonstration. It is deliberately a recording protocol, not a feature request and not a runtime. Do not modify Praxis while the trial is running; observe it as it exists.

## Trial Design

Choose one real software project and freeze its starting commit. Use the same project, task class, agent model, and tool permissions for every recorded session. Keep the trial small enough to complete in several sessions but real enough to expose project conventions, bugs, decisions, and rework.

```text
Session
→ What the agent knew
→ What the agent reused
→ What it forgot
→ What it got wrong
→ What knowledge was created
→ What was reused later
```

## Session Record

For every session, copy `trials/templates/session-observation.md` into `trials/<trial-id>/sessions/<session-id>.md`. Record observations as they happen; do not reconstruct a flattering narrative afterward.

## Questions to Ask

1. Was relevant memory available?
2. Did the agent discover it without being pointed to the exact file?
3. Did the agent use it in a decision or implementation?
4. Did the memory improve the decision?
5. What did the agent forget or misunderstand?
6. Did the session create useful, validated knowledge?
7. Was that knowledge reused by a later session?

## Success Condition

A trial is evidence only when it includes raw session records, changed files or references to them, evaluations, limitations, and a comparison against the initial project state. Do not publish improvement claims from a template or from a single session.

## Current Trial Status

No external real-project trial has been run in this repository yet. The files in `trials/` and `benchmarks/benchmark-002/` are ready-to-fill instruments, not fabricated user evidence.
