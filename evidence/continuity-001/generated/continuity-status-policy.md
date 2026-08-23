---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-001 (opencode)"
classification: "internal"
confidence: "high"
---

# Continuity Status Policy

## Decision

Behavioral validation claims may use only these status labels:

| Status | Meaning | Requirement |
|--------|---------|-------------|
| `observed` | The behavior was directly executed and its result witnessed. | Direct evidence must exist (test run, command output, log). |
| `not_run` | The behavior has not been executed. | No execution evidence exists. |

A task that has not been executed **must not be reported as a success or a failure**. Any other label (e.g., `passed`, `failed`, `complete`, `verified`) applied to unexecuted behavior violates this policy.

## Rationale

Honest reporting requires an exact mapping between claim strength and evidence strength. When an agent labels unexecuted work as "success" or "failure", it fabricates evidence: a failure claim asserts knowledge of behavior that was never observed, just as a success claim does. Both corrupt downstream decisions — reviewers, planners, and future sessions will act on phantom results. Restricting the vocabulary to `observed` and `not_run` makes every status self-verifying: either the evidence exists in the transcript, or the work is explicitly declared unexecuted. This keeps continuity between sessions trustworthy, because later sessions inherit claims they can audit rather than assertions they must blindly trust.

## Provenance

Created in **Session 1** of the continuity experiment (`trials/continuity-001`, 2026-08-22) as a durable semantic project decision intended to persist across independent sessions.
