---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
security_scan: "passed"
---

# Memory Lifecycle

Praxis manages memory through five stages: **Create → Classify → Review → Archive → Delete**.

1. **Create:** Record only a useful decision, event, convention, or procedure; scan before writing.
2. **Classify:** Assign `public`, `internal`, or `sensitive` and place sensitive content in `memory/private/`.
3. **Review:** Check correctness, confidence, conflicts, links, and continued usefulness at task completion and during scheduled review.
4. **Archive:** Move stale or oversized material to the relevant `archive/` directory while preserving its history and a summary when needed.
5. **Delete:** Remove content when retention expires, the project no longer needs it, or a human requests deletion; log the decision without retaining secret content.

## Triggers

Archive when a file crosses its token or size threshold, when it is older than the configured retention window, or when it has become stale. A **stale memory** is a memory not referenced or updated for 30 days. Sensitive memory is reviewed more frequently and is never loaded by default.
