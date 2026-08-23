---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Security Audit Log Template

Record one row for every attempted memory write or security-relevant memory event. Never include the matched secret itself.

| timestamp | file | pattern matched | action taken | agent name |
|---|---|---|---|---|
| `2026-08-20T00:00:00Z` | `memory/working/current.md` | `none` | `ALLOW — classified internal` | `orchestrator` |
| `YYYY-MM-DDTHH:MM:SSZ` | `memory/<path>` | `<category or none>` | `<REJECT/WARN/ALLOW>` | `<agent-name>` |
