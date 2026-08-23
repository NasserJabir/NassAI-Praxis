---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# NassAI-Praxis Documentation Index

This directory documents one unified project. Use the phase labels to understand when a capability was introduced, not to locate separate installations.

## Start Here

| Need | Document |
|---|---|
| Project overview | [`PROJECT_OVERVIEW.md`](PROJECT_OVERVIEW.md) |
| Five-minute start | [`../GETTING_STARTED.md`](../GETTING_STARTED.md) |
| Installation | [`../INSTALL.md`](../INSTALL.md) |
| Frequently asked questions | [`../FAQ.md`](../FAQ.md) |
| Contribution workflow | [`../CONTRIBUTING.md`](../CONTRIBUTING.md) |

## Architecture and Evidence

| Real-project evidence | [`REAL_PROJECT_TRIAL.md`](REAL_PROJECT_TRIAL.md), [`MEMORY_UTILITY_TEST.md`](MEMORY_UTILITY_TEST.md), [`DELIBERATE_FORGETTING.md`](DELIBERATE_FORGETTING.md) |
| Project continuity | [`PROJECT_CONTINUITY.md`](PROJECT_CONTINUITY.md) |
| Release boundary | [`ARCHITECTURE_FREEZE.md`](ARCHITECTURE_FREEZE.md) |
| Student Manager validation package | [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md), [`STUDENT_MANAGER_VALIDATION_CASE_STUDY.md`](STUDENT_MANAGER_VALIDATION_CASE_STUDY.md), [`EVOLUTION_CASE_STUDY.md`](EVOLUTION_CASE_STUDY.md), [`CONTINUITY_CASE_STUDY.md`](CONTINUITY_CASE_STUDY.md) |

| Architecture boundary | [`ARCHITECTURE.md`](ARCHITECTURE.md), [`ARCHITECTURE_FREEZE.md`](ARCHITECTURE_FREEZE.md) |
| Validation and portability | [`VALIDATION_PROTOCOL.md`](VALIDATION_PROTOCOL.md), [`PORTABILITY_TEST.md`](PORTABILITY_TEST.md) |
| Real project demo | [`../examples/todo-api/README.md`](../examples/todo-api/README.md) |

## Graph and Loop Engineering

| Declarative graph schema | [`../graph/model.md`](../graph/model.md), [`../graph/conventions.md`](../graph/conventions.md) |
| Runtime boundary | [`OPTIONAL_AUTOMATION.md`](OPTIONAL_AUTOMATION.md) |

| Area | Document |
|---|---|
| Graph model | [`../graph/entities.md`](../graph/entities.md), [`../graph/relationships.md`](../graph/relationships.md) |
| Traversal and integrity | [`../graph/traversal.md`](../graph/traversal.md), [`../graph/integrity.md`](../graph/integrity.md) |
| Loop model | [`../loops/execution.md`](../loops/execution.md), [`../loops/learning.md`](../loops/learning.md), [`../loops/evolution.md`](../loops/evolution.md) |
| End-to-end example | [`graph-loop-example.md`](graph-loop-example.md) |
| Persona composition | [`AGENT_PERSONA_COMPOSITION.md`](AGENT_PERSONA_COMPOSITION.md) |
| Concurrent persona use | [`PERSONA_CONCURRENCY.md`](PERSONA_CONCURRENCY.md), [`../sessions/README.md`](../sessions/README.md) |

## Core and Hardening

| Area | Document |
|---|---|
| Positioning | [`../POSITIONING.md`](../POSITIONING.md) |
| Security model | [`SECURITY.md`](SECURITY.md) |
| Secret deny-list and writes | [`../memory/security/scan-procedure.md`](../memory/security/scan-procedure.md) |
| Classification and lifecycle | [`../memory/CLASSIFICATION.md`](../memory/CLASSIFICATION.md), [`../memory/lifecycle.md`](../memory/lifecycle.md) |
| Token budgets | [`../praxis.config.md`](../praxis.config.md), [`../memory/summarization-rules.md`](../memory/summarization-rules.md) |
| Diagnostics | [`praxis-doctor-spec.md`](praxis-doctor-spec.md), [`praxis-doctor-checks.md`](praxis-doctor-checks.md) |
| Conflicts | [`../memory/conflict-resolution.md`](../memory/conflict-resolution.md) |

## Agent Integrations

| Area | Document |
|---|---|
| Compatibility | [`COMPATIBILITY_MATRIX.md`](COMPATIBILITY_MATRIX.md) |
| Four-file plugin pattern | [`PLUGIN_ARCHITECTURE.md`](PLUGIN_ARCHITECTURE.md) |
| Five-minute agent tests | [`AGENT_TESTING.md`](AGENT_TESTING.md) |
| Validation record | [`phase-3-validation.md`](phase-3-validation.md) |
| Per-agent setup notes | [`README.claude.md`](README.claude.md), [`README.cursor.md`](README.cursor.md), and the other `README.<agent>.md` files |

## Evidence and Ecosystem

| Area | Document |
|---|---|
| Benchmark report | [`../benchmarks/benchmark-001/report.md`](../benchmarks/benchmark-001/report.md) |
| Benchmark metrics | [`../benchmarks/benchmark-001/metrics.md`](../benchmarks/benchmark-001/metrics.md) |
| Benchmark case study | [`../benchmarks/benchmark-001/CASE_STUDY.md`](../benchmarks/benchmark-001/CASE_STUDY.md) |
| Project template | [`../template/README.md`](../template/README.md) |
| Launch thread | [`launch-thread.md`](launch-thread.md) |
| Blog draft | [`blog-post-draft.md`](blog-post-draft.md) |
| Changelog | [`../CHANGELOG.md`](../CHANGELOG.md) |

## Validation

Use [`VALIDATION_INDEX.md`](VALIDATION_INDEX.md) to see the checks for each phase and the unified project check.
