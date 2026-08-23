---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# `praxis doctor` Specification

`praxis doctor` is a read-only diagnostic command that validates a Praxis installation and emits a Markdown report. It never writes memory, promotes skills, or changes project files without explicit human action.

## Severity Levels

| Severity | Meaning | Exit behavior |
|---|---|---|
| **Critical** | Blocks safe use, such as missing configuration, secrets in public memory, or conflicting active rules. | Exit code 2. Resolve before normal use. |
| **Warning** | Degrades reliability, such as stale memories, orphaned skills, or oversized files. | Exit code 1 when no critical issue exists. |
| **Info** | Suggests improvement, such as unused personas or missing optional documentation. | Exit code 0 if no warning or critical issue exists. |

## Execution Model

The doctor reads configuration, enumerates canonical files, parses frontmatter, scans memory with the security deny-list, checks cross-references and budgets, and writes a Markdown report to stdout or an explicitly requested report path. It must not load private memory contents into the report.

## Output Format

```markdown
# Praxis Doctor Report

- Generated: <timestamp>
- Root: <path>
- Result: PASS | WARN | CRITICAL

## Critical
| Check | File | Finding | Recommended fix |

## Warnings
| Check | File | Finding | Recommended fix |

## Info
| Check | File | Finding | Recommended fix |

## Summary
- Critical: <count>
- Warnings: <count>
- Info: <count>
```

## Exit Codes

- `0`: all checks pass or only informational suggestions exist.
- `1`: one or more warnings exist and no critical issue exists.
- `2`: one or more critical issues exist.
