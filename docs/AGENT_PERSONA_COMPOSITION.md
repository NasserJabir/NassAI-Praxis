---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "composition-guide"
---

# Agent + Persona + Skill Composition

Agents do not permanently own a single Persona. When the host agent and task make the components relevant, a task execution context may be composed as:

```text
Agent
+
Persona
+
Skill
+
Relevant Memory
=
Task Execution Context
```

Example:

```text
System Architect Agent
+
Hassan Persona
+
Architecture Review Skill
+
Project Architecture Memory
```

The Agent supplies the role, the Persona supplies thinking style, the Skill supplies method, and Memory supplies scoped project knowledge. A Persona may reference relevant project knowledge and canonical Skills, but it owns neither. Plugin instructions should advise lazy loading and record a selected combination when it affects a decision; actual context access remains host- and task-dependent.

## Concurrent Read, Reviewed Mutation

The composed context may read the same persona concurrently as other sessions. The base persona file is read-only during active work; use isolated `sessions/` records and human-reviewed proposals for any change. See `docs/PERSONA_CONCURRENCY.md`.
