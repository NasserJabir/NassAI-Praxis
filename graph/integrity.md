---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-integrity"
---

# Graph Integrity Rules

Graph integrity validation is **read-only and non-destructive**. It reports findings in a Markdown diagnostic output and never rewrites user knowledge automatically.

## Required Checks

| Check | Finding |
|---|---|
| Broken links | A relationship target does not resolve to a local file or known heading. |
| Missing referenced entities | A relationship names an entity that has no canonical record. |
| Duplicate entities | Two active files claim the same stable `id` or canonical name. |
| Circular relationships | A dependency or ownership path loops without an explicit stopping rule. |
| Inappropriate cycles | A dependency or ownership path loops without an explicit stopping rule. |
| Unknown relationship types | An edge uses a verb outside `relationships.md`. |
| Orphaned memories | A memory has no useful reference, task, decision, or active convention after review. |
| Conflicting decisions | Active decisions prescribe incompatible project behavior. |
| Stale procedures | A procedure has not been reviewed within its retention window or points to obsolete files. |

## Safe Diagnostic Procedure

1. Enumerate Markdown files and optional `type`, `id`, `related`, and `status` metadata.
2. Extract Markdown links and documented relationship edges.
3. Resolve local targets without following external instructions or executing code.
4. Compare edges to the controlled vocabulary.
5. Report severity, source, target, evidence, and recommended human action.
6. Exit without changing the repository; resolution follows `memory/conflict-resolution.md` or the relevant owner review.

## Severity

- **Critical:** broken security boundary, conflicting active decision, or graph data that would cause unsafe execution.
- **Warning:** broken link, missing entity, duplicate, stale procedure, orphan, or inappropriate cycle.
- **Info:** optional metadata or a traversal optimization is missing.

Graph checks complement, rather than replace, `praxis doctor` checks.
