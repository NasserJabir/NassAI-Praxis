---
version: "1.3.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-22T22:25:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Unified Validation Index

Start with [`PROJECT_OVERVIEW.md`](PROJECT_OVERVIEW.md) for the combined architecture and [`../CONTRIBUTING.md`](../CONTRIBUTING.md) for project workflows.

Phase validation records are retained as evidence, while this index treats NassAI-Praxis as one project and defines the order for a complete verification pass.

## Phase Records

| Phase | Validation record | Scope |
|---|---|---|
| 0 — Foundation | [`phase-0-validation.md`](phase-0-validation.md) | Canonical directories, counts, frontmatter, memory rules, and security boundaries. |
| 1 — Benchmark | [`../benchmarks/benchmark-001/validation.md`](../benchmarks/benchmark-001/validation.md) | Scenarios, transcripts, code artifacts, metrics, PHP/Composer checks, and Git hygiene. |
| 2 — Hardening | [`phase-2-validation.md`](phase-2-validation.md) | Deny-list, classification, lifecycle, token budget, diagnostics, conflicts, and documentation. |
| 3 — Agent Integration | [`phase-3-validation.md`](phase-3-validation.md) | Nine plugins, 36 required files, native entry points, compatibility, and testing docs. |
| 4 — Ecosystem | [`phase-4-validation.md`](phase-4-validation.md) | Template, README, contribution guide, case study, FAQ, launch content, changelog, and Arabic mirror. |
| Evidence — Evolution 001 | [`../evidence/evolution-001/EVALUATION.md`](../evidence/evolution-001/EVALUATION.md) | Three observed experiences, candidate pattern and proposal, explicit human approval, a trial-only skill, and one later read-only reuse. |
| Evidence — Persona Validation 001 | [`../evidence/persona-validation-001/evaluation.md`](../evidence/persona-validation-001/evaluation.md) | Existing Fatima Persona lifecycle, candidate evolution, explicit human approval, trial-only reuse, one isolation observation, and policy-aware active-work deferral without runtime enforcement. |
| Evidence — Baseline 001 | [`BASELINE_001_BEFORE_AFTER.md`](BASELINE_001_BEFORE_AFTER.md) | One matched reporting-task comparison; it confirms guided skill use but is inconclusive for a performance advantage. |

## Unified Verification Order

1. Confirm `praxis.config.md` and the canonical core directories exist.
2. Run the security and memory checks before loading or writing project memory.
3. Validate plugin directories against `docs/COMPATIBILITY_MATRIX.md` and `docs/AGENT_TESTING.md`.
4. Validate benchmark artifacts without treating them as a second runtime.
5. Check ecosystem onboarding links, template files, and contribution paths.
6. Review Evolution 001 as human-governed evidence only; its approved skill remains trial-only and does not belong to Praxis Core.
7. Review Persona Validation 001 as a Markdown-only lifecycle and policy-awareness observation; do not infer a Persona runtime or technical concurrency lock.
8. Review Baseline 001 as a single observed comparison only; do not infer an advantage where both outputs satisfy the task.
9. Resolve all local Markdown links and run `git diff --check`.
10. Review the complete diff as one project change; do not split the project into phase copies.

## Unified Acceptance Criteria

| Criterion | Expected result |
|---|---|
| One source of truth | Plugins point to root `praxis.config.md`, `memory/`, `skills/`, `agents/`, `personas/`, and `evolve/`. |
| Phase preservation | Phase 0–4 artifacts remain present and navigable. |
| No duplicate runtime | No second independent memory or skill tree is introduced for a phase. |
| Security | Memory writes remain deny-list scanned, classified, and audited. |
| Adoption | A new user can reach a working first session through `README.md` → `GETTING_STARTED.md` → `INSTALL.md`. |
| Contribution | Skills, agents, personas, plugins, and documentation have explicit workflows. |
| Repository hygiene | Local links resolve, whitespace checks pass, and no unintended historical artifact is modified. |
