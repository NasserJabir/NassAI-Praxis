---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-metadata"
---

# Optional Graph Metadata Convention

New graph-specific records may use minimal YAML frontmatter. **Backward compatibility is mandatory:** existing files remain valid and do not need to be rewritten.

```yaml
---
type: decision
id: decision-api-versioning-001
status: accepted
related:
  - project-nassai-praxis
  - task-api-versioning
created: 2026-08-22
---
```

Allowed `type` values are the 13 entities in `graph/entities.md`. `status` should be one of `draft`, `active`, `validated`, `superseded`, `deprecated`, or `archived`. `related` contains stable slugs or relative Markdown paths. Metadata cannot override security classification, memory retention, or human review.
