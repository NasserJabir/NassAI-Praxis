---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "knowledge-status"
---

# Knowledge Status

Not every Markdown statement is an approved project truth. Knowledge moves through an explicit lifecycle:

```text
observed
   ↓
candidate
   ↓
reviewed
   ↓
approved
   ↓
deprecated
```

`observed` is a session fact or experience. `candidate` is a proposed generalization. `reviewed` has been checked by a human or designated reviewer but is not yet active policy. `approved` is accepted project knowledge. `deprecated` remains historically useful but must not guide new work without explicit review.

## Record Format

```markdown
---
type: pattern
status: approved
confidence: high
evidence_count: 4
created: 2026-08-22
reviewed_by: project-maintainer
---

# Pattern: Validated Request Boundaries

Evidence:
- sessions/001
- sessions/007
- sessions/012
- sessions/019

Derived From:
- Pattern: repeated API validation failures
```

Status does not bypass security classification, retention, conflict resolution, or the 33-point evaluation. A status change is a reviewed Markdown change and must retain provenance.
