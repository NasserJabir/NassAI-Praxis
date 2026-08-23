---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Memory Classification

| Class | Description | Git policy | Sharing policy | Retention |
|---|---|---|---|---|
| `public` | Safe, generic project knowledge with no confidential architecture. | Safe to commit and publish after review. | May be shared externally. | Retain while useful; archive when stale. |
| `internal` | Project-specific conventions and operating context without secrets. | Safe to commit to the private project repository. | Share only with project collaborators. | Review every 90 days; archive when stale. |
| `sensitive` | Internal architecture, team structure, or non-public APIs without credentials. | Store under `memory/private/`; never commit. | Restricted to authorized project members. | Review every 30 days; delete when no longer needed. |

## How to Classify a New Memory

```text
Does it contain a secret or credential?
  yes -> reject the write; use an environment variable or secret manager.
  no  -> Is it safe for public release?
           yes -> public.
           no  -> Is it confidential but needed by the project?
                    yes -> sensitive in memory/private/.
                    no  -> internal.
```

Classification describes handling, not truth. A memory must still pass consistency, freshness, and human-review checks.
