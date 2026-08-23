---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "continuity-002/session-001"
classification: "internal"
security_scan: "passed"
confidence: "high"
decision_type: "project-decision"
session_created: "Session 1"
---

# Evidence Scope Policy

## Decision

A result produced by one controlled run of one agent and one model may be described **only** as a narrow observed outcome for that exact environment: the specific agent implementation, the specific model identifier, the specific prompt set, and the specific project state in which the run executed.

Such a result must **not** be represented as:

- **Repeatability** — no claim that an independent rerun would produce the same result.
- **Cross-agent portability** — no claim that another agent or harness would behave the same way.
- **Universal compatibility** — no claim that other models, versions, or configurations are covered.
- **General product benefit** — no claim that the result evidences a product-level capability or advantage.

## Rationale

A single controlled run exercises exactly one point in the space of agents × models × prompts × project states. Without replication across independent sessions, without variation across agents and models, and without controls isolating causal factors, any generalization beyond the observed environment introduces claims the evidence does not support. Treating a single-run observation as repeatability or portability inflates confidence and can drive decisions on unverified assumptions. The honest description of a single run is: *this happened once, here, under these conditions.*

## Reporting Requirements

Every report describing a result from a controlled run must state, explicitly:

1. **Claim scope** — what exact agent, model, prompts, and project state the result covers.
2. **Limitations** — which generalizations are excluded (repeatability, cross-agent portability, universal compatibility, general product benefit).
3. **Next needed replication** — the concrete next evidence step, e.g., an independent session rerun, a cross-agent comparison, or a multi-model replication.

A report missing any of these three elements does not comply with this policy.

## Provenance

This decision was created in **Session 1** of Continuity Experiment 002 (`trials/continuity-002/EXPERIMENT.md`). It is a durable project decision and applies to all future reports of validation results in this project.
