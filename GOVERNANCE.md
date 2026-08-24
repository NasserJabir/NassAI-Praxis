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

## Core vs Optional Tooling Boundary

NassAI-Praxis **Core** is Markdown knowledge governed by human-reviewed evolution. Scripts that generate, validate, or scaffold that Markdown (e.g. `scripts/praxis-build.js`, `scripts/praxis-validate.js`, `scripts/praxis-init.js`) are **optional developer tooling**: they may be used to maintain or scaffold Core, but nothing in Core requires their presence at task time. An agent that simply reads the Markdown files — without running any script — consumes Praxis fully. Generated artifacts such as `PRAXIS.md` are advisory outputs of the canonical `SKILL.md` files, never authoritative sources.

## Change Paths

Documentation corrections, adapter fixes, and bounded contribution improvements may be reviewed through ordinary pull requests. Any proposed Core or canonical Persona change must first identify its supporting evidence, provenance, affected files, risks, and required human decision. The active architecture gate is documented in [`docs/ARCHITECTURE_FREEZE.md`](docs/ARCHITECTURE_FREEZE.md).

## Release Authority

The repository owner decides whether a reviewed change is included in a release. Releases should follow the checklist in [`docs/RELEASE_PROCESS.md`](docs/RELEASE_PROCESS.md) and must not imply performance or portability claims beyond the published evidence.
