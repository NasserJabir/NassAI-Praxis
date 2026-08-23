---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Session Isolation

Each real-time session gets an isolated, independent Markdown record under `sessions/<session-id>/`. A session records its agent, persona, skills, relevant memory, execution outcome, evaluation, and observations. Sessions must not edit a persona definition or shared semantic memory while another session is active.

## Recommended Structure

```text
sessions/<session-id>/
├── context.md
├── execution.md
├── evaluation.md
└── observations.md
```

No reservation command is required. Multiple sessions may read the same persona, while each session writes only to its isolated Markdown record. Session records are the durable evidence that later learning and evolution can aggregate safely.

Persona definitions are read-only during active sessions. Any proposed change belongs in a session proposal and becomes active only after human review.
