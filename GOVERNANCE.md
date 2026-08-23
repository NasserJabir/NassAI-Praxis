---
version: "1.0.0"
author: "NassAI-Praxis maintainers"
---

# Governance

## Maintainer Model

NassAI-Praxis is maintained by the repository owner with public contributions reviewed on their technical merit, evidence quality, security implications, and consistency with the architecture boundary.

## Decision Principles

| Principle | Meaning |
|---|---|
| Markdown-first | Project knowledge remains human-readable, diffable, and Git-friendly. |
| Runtime-independent | Coding agents execute work; Praxis supplies declarative knowledge, procedure, and policy. |
| Evidence-first | Observations are recorded accurately before a general claim or proposed change is made. |
| Human-governed evolution | Candidate patterns and skills require explicit human review before approval or trial use. |
| Scope discipline | A feature request does not justify a runtime, database, vector store, daemon, queue, auto-learning system, or mandatory CLI. |

## Change Paths

Documentation corrections, adapter fixes, and bounded contribution improvements may be reviewed through ordinary pull requests. Any proposed Core or canonical Persona change must first identify its supporting evidence, provenance, affected files, risks, and required human decision. The active architecture gate is documented in [`docs/ARCHITECTURE_FREEZE.md`](docs/ARCHITECTURE_FREEZE.md).

## Release Authority

The repository owner decides whether a reviewed change is included in a release. Releases should follow the checklist in [`docs/RELEASE_PROCESS.md`](docs/RELEASE_PROCESS.md) and must not imply performance or portability claims beyond the published evidence.
