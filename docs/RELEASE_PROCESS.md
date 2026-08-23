---
version: "1.0.0"
author: "NassAI-Praxis maintainers"
classification: "public"
type: "release-process"
---

# Release Process

## Purpose

This process keeps releases understandable, reviewable, and aligned with the project’s evidence boundary. It does not introduce a runtime or automatic release system.

## Before a Release

| Check | Required outcome |
|---|---|
| Scope | The change respects [`ARCHITECTURE_FREEZE.md`](ARCHITECTURE_FREEZE.md) and does not silently introduce a runtime, service, database, vector store, daemon, queue, auto-learning, or mandatory CLI. |
| Claims | README, FAQ, launch copy, and release notes agree with [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md). |
| Documentation | Installation, supported-agent scope, security, contribution, and changelog links are current. |
| Hygiene | `git diff --check` passes; no secrets or private data are included; Markdown links have been reviewed. |
| Evidence | New observed evidence has raw artifacts or clear provenance. “Observed,” “inconclusive,” “candidate,” and “not run” labels are retained exactly where applicable. |

## Versioning

Use Semantic Versioning for published releases. A patch release corrects documentation, adapters, or bugs without changing the declarative contract. A minor release adds backward-compatible documented capabilities. A major release changes a published contract or migration expectation and must include explicit upgrade guidance.

## Release Steps

1. Review the final diff and this checklist.
2. Update `CHANGELOG.md` with user-visible changes and evidence limitations.
3. Create a signed or annotated Git tag following the chosen version.
4. Draft a GitHub Release that links to the changelog, installation guide, validation results, and any relevant evidence package.
5. Verify the rendered README, license, community-health files, topics, and release notes on GitHub.

## After a Release

Record issues found in external use without changing Core reactively. For behavioral or performance questions, gather natural evidence first; then follow the project’s evidence-to-candidate-to-human-review process.
