---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-conventions"
---

# Markdown Graph Conventions

Use Markdown links as the primary graph mechanism and keep relationships understandable without specialized tooling.

```markdown
## Related Knowledge

- [Project Architecture](../memory/semantic/conventions.md)
- [API Convention](../memory/semantic/conventions.summary.md)
- [Authentication Pattern](../evolve/refine/patterns.md)
- [Laravel API Skill](../skills/technical/api-design/SKILL.md)
```

Use optional frontmatter only when it clarifies entity type, stable ID, status, or related records. Do not rewrite existing files solely to add metadata. Do not introduce a new entity or relationship verb without documenting its use case in the graph schema.
