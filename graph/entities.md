---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "graph-entities"
---

# Praxis Graph Entity Model

Praxis uses a deliberately small set of first-class entities. An entity may be represented by a Markdown file, a heading inside an existing memory file, or a link target. Do not create a new entity type without a clear use case and documentation update.

| Entity | Meaning | Typical canonical location |
|---|---|---|
| `Project` | The software project and its boundaries. | Root repository and `praxis.config.md` |
| `Task` | A unit of requested or planned work. | `memory/working/` or an execution record |
| `Agent` | A role that performs or coordinates work. | `agents/` |
| `Persona` | A thinking style, priorities, decision principles, risk tolerance, and communication style. | `personas/` |
| `Skill` | A reusable method for performing a task. | `skills/` |
| `Memory` | A persisted project knowledge item in one of the four memory layers. | `memory/` |
| `Decision` | An accepted project choice with scope and rationale. | `memory/semantic/` |
| `Experience` | An observed execution outcome. | `memory/episodic/` or `evolve/refine/` |
| `Error` | A failure, defect, regression, or risk observed during work. | `memory/episodic/` |
| `Solution` | A concrete response that addresses an error or task. | `memory/episodic/` or `memory/procedural/` |
| `Pattern` | A validated generalization across experiences. | `evolve/refine/patterns.md` |
| `Procedure` | A repeatable sequence for solving a problem. | `memory/procedural/` |
| `Evaluation` | A structured judgment of task quality. | `evolve/evaluation/` or task record |

## Entity Metadata

Metadata is optional for existing files and recommended for new graph-specific records:

```yaml
---
type: experience
status: validated
id: experience-api-auth-001
related:
  - task-api-authentication
  - pattern-validated-input
created: 2026-08-22
---
```

Existing frontmatter remains valid. A missing `type` does not make an existing memory invalid; the validator reports it only when a graph relationship requires disambiguation.
