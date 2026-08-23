---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-schema"
---

# Declarative Graph Model

The Praxis graph is a documentation and schema layer. It organizes relationships between Markdown knowledge files. It is not a graph engine. It is not a graph database.

```text
Project
 ├── uses → Architecture
 ├── follows → Convention
 ├── has → Task
 │            └── produced → Experience
 │                              └── revealed → Pattern
 │                                             └── proposed → Skill
 └── uses → Persona
```

The model uses the 13 entity types in [`entities.md`](entities.md) and the controlled verbs in [`relationships.md`](relationships.md). Real knowledge remains in `memory/`, `agents/`, `skills/`, `personas/`, and `sessions/`.
