---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "composition-guide"
---

# Agent + Persona + Skill Composition

Agents do not permanently own a single persona. A task execution context is composed at load time:

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

The agent supplies the role, the persona supplies thinking style, the skill supplies method, and memory supplies learned project knowledge. Plugins should load the selected combination lazily and record it in working memory when it affects a decision.

## Concurrent Read, Reviewed Mutation

The composed context may read the same persona concurrently as other sessions. The base persona file is read-only during active work; use isolated `sessions/` records and human-reviewed proposals for any change. See `docs/PERSONA_CONCURRENCY.md`.
