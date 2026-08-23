---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Conflict Resolution Protocol

1. **Detect the conflict** through an automated check or careful review.
2. **Identify the source files** and quote only the relevant non-sensitive rules.
3. **Determine which source is newer or has higher confidence**, considering explicit human decisions.
4. **Mark the losing rule** with `[DEPRECATED]` or `[SUPERSEDED]` and explain why.
5. **Update the winning file** with a reference to this conflict resolution and the affected paths.
6. **Log the resolution** in `evolve/log.md`, including date, actor, evidence, and human decision.

Do not silently merge contradictory rules. When in doubt, human decides. If a conflict affects security or irreversible architecture, pause execution until the decision is recorded.
