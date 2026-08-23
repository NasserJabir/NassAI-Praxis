---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
agent: "cursor"
---

# Cursor Memory Bridge

Cursor Tab completions follow lightweight `.cursorrules`; Cursor Chat must load the project Praxis files.

## Mapping

| Host concern | Praxis file or directory |
|---|---|
| Current session context | `memory/working/current.md` |
| Durable conventions | `memory/semantic/conventions.md` |
| Historical incidents | `memory/episodic/events.md` |
| Repeatable procedures | `memory/procedural/workflows.md` |
| Evaluated learning | `evolve/refine/patterns.md` |
| Sensitive non-secret project knowledge | `memory/private/` |

Read working memory at the start of every session. Write discoveries to semantic or episodic memory only after the security scan and classification check. The host agent’s native memory may improve the current conversation, but it does not replace these project files.

## Security Reference

Before any memory write, apply `memory/security/deny-list.md` and `memory/security/scan-procedure.md`.
