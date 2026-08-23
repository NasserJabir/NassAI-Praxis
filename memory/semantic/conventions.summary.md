---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
source: "memory/semantic/conventions.md"
---

# Project Conventions Summary

- Markdown is the source of truth; load configuration, semantic memory, and working memory first.
- Load other skills and memory lazily within the 8,000-token Praxis budget.
- Use PascalCase for classes/components, camelCase for variables/functions, kebab-case for files, and UPPER_SNAKE_CASE for constants.
- Preserve project architecture: repositories for data access, services for business logic, controllers for HTTP concerns.
- Verify behavior with tests or direct evidence and record durable learning safely.
- Never store secrets; scan and classify every memory write.
- Resolve conflicts explicitly and keep human approval for evolution.

See `memory/semantic/conventions.md` for details.
