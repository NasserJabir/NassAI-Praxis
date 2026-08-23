---
type: evidence-manifest
id: persona-validation-001
status: reviewed
---

# Persona Validation 001 — Manifest

## Evidence Contents

| Area | Contents |
|---|---|
| Protocol | `PROTOCOL.md` |
| Observed sessions | `sessions/session-001` through `session-003` and `session-006` |
| Candidate evolution | `candidates/`, `proposals/`, and `evaluation.md` |
| Human decision | `review/HUMAN_REVIEW.md` |
| Trial-only skill | `skills/evidence-publication-boundary/SKILL.md` |
| Policy concurrency observation | `sessions/concurrency-a-active.md` and `sessions/concurrency-b.md` |
| Persona isolation observation | `sessions/isolation-sami.md` |
| Raw evidence | `raw/` JSONL transcripts and the Session A exit record |

## Integrity Boundary

The original project's `personas/`, `memory/`, `skills/`, and `evolve/` directories were compared with the isolated trial after execution and showed no differences. The trial-only skill lives in this evidence package, not in canonical `skills/`.

Raw transcript SHA-256 values are recorded in `EVALUATION.md`. Raw artifacts are preserved without cleanup or rewrite.
