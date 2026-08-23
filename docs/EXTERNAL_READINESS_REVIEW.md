---
version: "0.1.0"
created: "2026-08-23T09:40:00Z"
author: "Manus AI"
classification: "public-review"
type: "external-readiness-review"
status: "draft"
scope: "documentation-and-metadata-only"
---

# External Readiness Review

## Scope and Boundary

This review assesses **how the existing project is presented to external users**. It does not propose a runtime, database, vector store, daemon, automatic capture mechanism, automatic self-modification, or any other architecture change. The frozen architecture boundary remains authoritative in [`ARCHITECTURE_FREEZE.md`](ARCHITECTURE_FREEZE.md).

> **Positioning constraint:** NassAI-Praxis should be presented as a Markdown-first, Git-native declarative knowledge and governance layer for coding agents—not as an automatic memory engine.

## Observed Readiness Snapshot

| Area | Observed state | External-readiness implication |
|---|---|---|
| Core framing | README explains the Markdown-first and runtime-independent boundary. | Strong differentiator when phrased as a deliberate trade-off. |
| Onboarding | `README.md`, `GETTING_STARTED.md`, `INSTALL.md`, agent guides, and a template exist. | Strong material coverage; the first path should be simplified and made internally consistent. |
| Evidence | Canonical validation results distinguish observed continuity/evolution evidence from inconclusive performance comparisons. | Strong evidence discipline, but README and FAQ currently overstate benchmark conclusions. |
| Supported agents | Nine integration directories and a compatibility matrix are present. | State adapter availability separately from independently observed behavior. |
| Governance | Local `LICENSE`, `CONTRIBUTING.md`, `CHANGELOG.md`, and security material exist. | The currently queried public GitHub community profile reports only a README and a 28% health score; publication/branch recognition needs review. |
| Discoverability | The public repository description is generic, no homepage is set, and queried topics are empty. | Metadata improvement is valuable but is a remote change requiring maintainer confirmation. |

## Claim-Support Review

| Location | Current presentation risk | Evidence-safe direction |
|---|---|---|
| `README.md` benchmark section | It states 100% reductions and 31% fewer tokens as a broad result. | Link to the canonical results record and state that Baseline 001–002 are observed but **inconclusive for a general performance advantage**. |
| `FAQ.md` performance answer | It presents the 31% result as a net effect of Praxis. | Replace with a bounded historical benchmark reference and the current no-general-advantage conclusion. |
| `README.md` self-improvement wording | “Agents learn” can be read as autonomous self-modification. | State that evolution is evidence-first, proposal-based, and human-approved; automatic promotion is prohibited. |
| `docs/PROJECT_OVERVIEW.md` | It says Personas are exclusive in active real-time sessions and that all integrations load core context at task start. | Correct the presentation to the current policy: concurrent Persona reading is allowed; canonical changes are proposal-first/human-reviewed; context access depends on the host agent and task. |
| `FAQ.md` migration answer | It refers to v1 → v2 migration and a `praxis doctor` command despite the current Markdown-first/no-mandatory-CLI boundary. | Remove or rewrite until an actual supported migration path and optional diagnostic procedure are documented. |
| `INSTALL.md` | It mixes legacy global-copy prompts with project-local installation instructions. The OpenCode raw-install URL must follow the GitHub default branch. | Establish one primary recommended project-local route per agent, label any legacy path, and verify all branch URLs before external promotion. |

## Comparable-Project Research

The projects reviewed are **not direct feature requirements** for Praxis. They occupy a broader “agent memory” category and intentionally use runtimes Praxis excludes.

| Project | Observed public approach | Relevant presentation lesson for Praxis |
|---|---|---|
| [agentmemory](https://github.com/rohitg00/agentmemory) | One-command setup, automatic capture, a local server/viewer, detailed benchmarks, and explicit reproducibility notes. | Lead with a concise installation path, a visible verification step, and bounded benchmark language; do not imply runtime parity. |
| [MemSearch](https://github.com/zilliztech/memsearch) | Markdown source files plus a derived Milvus index, automatic capture, plugins, and background maintenance. | Explain why Praxis intentionally retains only the human-readable Git-native layer, rather than competing on automatic capture or semantic search. |
| [Mem0](https://github.com/mem0ai/mem0) | SDK/server/cloud options, benchmark caveats, and an explicit quickstart. | Separate self-hosted/runtime-memory alternatives from Praxis’s declarative project-governance role, and show claim limits next to any evaluation link. |

## Recommended Presentation Work

### Priority 1 — Claim Safety and First-Use Clarity

Rewrite the opening README promise, Quick Start, benchmark paragraph, and FAQ performance/migration answers to align with [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md). Add a single “What this is / what this is not” table near the top. This is a documentation correction, not a Core change.

### Priority 2 — External Navigation and Evidence

Create a concise external evidence page that links to the validation index and separates **observed** continuity/evolution evidence from **inconclusive** performance evidence. Surface one small real workflow and one five-minute verification route without presenting synthetic examples as real-world proof.

### Priority 3 — GitHub Community Health and Discoverability

Before external promotion, verify why the public repository’s community profile does not recognize local `LICENSE` or `CONTRIBUTING.md`; add any missing recognized community-health files only after review. Propose a specific repository description, homepage, and topic set for maintainer approval; do not change remote metadata silently.

## Proposed Metadata for Maintainer Approval

| Field | Proposed value |
|---|---|
| Description | `Markdown-first, Git-native project memory, skills, and human-reviewed evolution for AI coding agents.` |
| Homepage | Leave unset until a stable documentation or project site exists. |
| Topics | `ai-agents`, `coding-agents`, `agent-memory`, `markdown`, `developer-tools`, `knowledge-management`, `claude-code`, `opencode`, `cursor`, `github-copilot` |

GitHub documents topics as a discoverability mechanism and permits up to 20 lowercase, hyphenated topics.[^github-topics]

## References

[^github-community]: [GitHub Docs — About community profiles for public repositories](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)
[^github-topics]: [GitHub Docs — Classifying your repository with topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)
[^agentmemory]: [rohitg00/agentmemory README](https://github.com/rohitg00/agentmemory)
[^memsearch]: [zilliztech/memsearch README](https://github.com/zilliztech/memsearch)
[^mem0]: [mem0ai/mem0 README](https://github.com/mem0ai/mem0)
