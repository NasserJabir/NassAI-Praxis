---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "graph-relationships"
---

# Praxis Relationship Vocabulary

Relationships are controlled verbs. Use the vocabulary below in headings, prose, or lightweight metadata. Prefer one direction per edge and link to the canonical Markdown target.

| Source | Relationship | Target | Meaning |
|---|---|---|---|
| `Task` | `uses` | `Skill` | The task loads or applies the skill. |
| `Task` | `assigned_to` | `Agent` | The agent performs or coordinates the task. |
| `Task` | `influenced_by` | `Persona` | The persona shapes reasoning and trade-offs. |
| `Task` | `produces` | `Experience` | Execution creates an observed outcome. |
| `Task` | `caused` | `Error` | The task or its context caused a failure. |
| `Task` | `depends_on` | `Task` | One task requires another task first. |
| `Error` | `solved_by` | `Solution` | The solution addresses the error. |
| `Solution` | `generalized_as` | `Procedure` | A solution became repeatable guidance. |
| `Procedure` | `implemented_as` | `Skill` | A procedure became a reusable skill. |
| `Skill` | `used_by` | `Agent` | An agent can perform the skill. |
| `Agent` | `uses` | `Persona` | An agent executes using a selected thinking layer. |
| `Experience` | `supports` | `Decision` | Evidence supports a project decision. |
| `Experience` | `creates` | `Pattern` | Repeated validated evidence creates a pattern candidate. |
| `Experience` | `updates` | `Memory` | The experience updates an appropriate memory layer. |
| `Pattern` | `suggests` | `Skill` | A pattern suggests a reusable capability. |
| `Pattern` | `suggests` | `Agent` | A pattern suggests a role or handoff improvement. |
| `Decision` | `applies_to` | `Project` | The decision has project scope. |

Unknown verbs are reported by graph integrity checks. If a new relationship is necessary, document its source, target, direction, and use case here before using it.

## Markdown Edge Format

```markdown
## Related

- uses → [API Design](../skills/technical/api-design/SKILL.md)
- assigned_to → [Backend Developer](../agents/backend-developer/AGENT.md)
- influenced_by → [Hassan](../personas/hassan/PERSONA.md)
- produces → [Validated API Experience](../memory/episodic/events.md)
```
