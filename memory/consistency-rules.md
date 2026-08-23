---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Consistency Rules

A conflict exists when two active Praxis artifacts prescribe incompatible behavior.

| Conflict type | Example | Default severity |
|---|---|---|
| Opposite semantic conventions | `camelCase` versus `snake_case` for the same variable layer | blocking |
| Overlapping skill boundaries | Two skills both own the same procedure with incompatible steps | warning |
| Agent/skill contradiction | An agent claims a capability that a skill forbids | warning |
| Episodic/semantic contradiction | An event says a convention failed while semantic memory still mandates it without context | warning |
| Config/file mismatch | Configuration enables a layer whose required file is missing | blocking |
| Persona/security override | A persona asks to bypass a deny-list or human approval | blocking |

The detector compares paths, frontmatter identifiers, explicit rules, status tags, dates, and confidence. `[SUPERSEDED]` and `[DEPRECATED]` entries are excluded from active rules after human review.
