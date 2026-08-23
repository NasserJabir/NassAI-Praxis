---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
---

# `praxis doctor` Checks

The diagnostic command performs these checks:

1. Root configuration exists at `praxis.config.md`.
2. Configuration frontmatter is parseable.
3. Required memory directories exist.
4. Required skill categories exist.
5. Required agent directories exist.
6. Required persona directories exist.
7. Memory frontmatter includes classification.
8. Memory security scan passes the deny-list.
9. Sensitive memory is routed to `memory/private/`.
10. Private memory is ignored by Git.
11. Core always-loaded files remain within the token budget.
12. Files above the summarization trigger have summaries.
13. Files above the archive threshold have archive references.
14. Semantic and procedural references resolve.
15. Skills include required quality-gate headings.
16. Skill overlap is reported when boundaries materially duplicate.
17. Agent capability gaps are reported against task domains.
18. Evolution queues identify pending human review.
19. Deprecated or superseded files are not loaded by default.
20. Git status reports uncommitted Praxis changes.
21. Markdown links resolve to existing local files when applicable.
22. Duplicate frontmatter identifiers are reported.
23. Invalid classifications are reported.
24. Stale memories are reported after 30 days without reference.
25. Documentation coverage is reported for supported agents.

Critical checks block normal use; warnings degrade the experience; informational checks suggest improvements.
