---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
workflow_name: "foundation-validation"
last_validated: "2026-08-20T00:00:00Z"
---

<!-- SECURITY: Scanned against deny-list -->
# Foundation Validation Workflow

## Steps

1. Read the technical specification and identify the Phase 0 checklist.
2. Inspect the repository baseline without modifying user content blindly.
3. Create the canonical configuration, templates, memory layers, evolution files, and documentation.
4. Scan memory content against the deny-list before writing it.
5. Validate paths, counts, frontmatter, required headings, and line limits.
6. Review the Git diff for accidental secrets, unrelated changes, and broken links.
7. Record the result in working and episodic memory.
8. Commit with a descriptive `praxis:` message after human review.

## Rollback

If validation fails, revert the incomplete foundation change, preserve the diagnostic output, and correct the smallest failing area before retrying.
