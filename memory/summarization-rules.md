---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Summarization Rules

Summarization triggers when a memory file reaches `summary_trigger` (3,000 tokens), crosses `archive_threshold` (5,000 tokens), approaches the configured context budget, or becomes difficult to load safely.

## Quality Rules

1. Preserve every active decision and project convention.
2. Preserve all links, file paths, provenance, and references.
3. Remove redundant examples and repeated explanations.
4. Keep counter-examples that explain what **not** to do.
5. Preserve uncertainty, confidence, conflicts, and unresolved blockers.
6. Keep the summary concise enough for its configured token budget.
7. Link to the archived original and never silently discard information.

## Summary Template

```markdown
---
version: "1.0.0"
source: "path/to/original.md"
classification: "internal"
security_scan: "passed"
---

# Summary: <memory name>

## Decisions
- <durable decision and provenance>

## Conventions
- <active convention>

## Counter-Examples
- <what not to do>

## Open Questions
- <unresolved item>

See `<original-path>` for details.
```
