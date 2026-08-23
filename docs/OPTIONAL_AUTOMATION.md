---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
---

# Optional Automation Boundary

NassAI-Praxis Core is Markdown-first and runtime-independent. The files in `scripts/`, if retained in a checkout, are optional developer helpers and are never required to define, load, evaluate, or evolve Praxis knowledge.

It is not required to install or run any helper. The canonical workflow is performed by the coding agent using Markdown files: read context, execute work in the host environment, evaluate the result, record an experience, and propose reviewed updates. A user may use a local helper script for convenience, but removing `scripts/` must not invalidate the framework.

No Node runtime is required. No Python runtime is required. No database is required. No web service, daemon, queue, or heartbeat belongs to Praxis Core, and a CLI is optional.
