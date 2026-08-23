---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "graph-provenance"
---

# Graph Provenance

Every Pattern, Skill Proposal, Agent Proposal, Persona Proposal, and durable Decision should identify where it came from. Provenance is lightweight Markdown, not a new service.

## Minimal Format

```markdown
Evidence:
- sessions/001
- sessions/007
- sessions/012

Derived From:
- Pattern: API validation failures

Evaluation:
- evolve/evaluation/<record>.md

Status: candidate
Confidence: medium
```

Use stable session paths or IDs, link to the relevant evaluation, and preserve the original experience. Provenance lets a reviewer trace a graph edge from future capability back to observed work.

## Promotion Rule

A provenance record is required before a candidate can move from `candidate` to `reviewed`; human review is required. A candidate without evidence remains a note, not a project convention. A candidate with evidence but no generalization remains local to its original task.
