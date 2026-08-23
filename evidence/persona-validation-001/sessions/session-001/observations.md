---
type: trial-session-observations
trial: persona-validation-001
session: 001
date: "2026-08-22T00:00:00Z"
experience_status: observed
promoted: false
proposal_created: false
skill_created: false
persona_edited: false
---

# Session 001 — Observations

## Observed Experience (status: observed — not learned, not promoted)

Specialized security/API observation recorded per protocol Session 001:

> Transcript preservation and secret hygiene conflict only when storage and promotion share one path. Separating a verbatim quarantined evidence tier from an authored, deny-list-checked promotion tier resolves the conflict in pure Markdown, treating the deny-list as an authoring discipline rather than a runtime gate.

This observation stays inside this session record. It is not claimed by another persona, not written to semantic/project memory, and not shaped into a pattern or proposal (reserved for Sessions 003–004 under the protocol's human gate).

## Lessons

- The deny-list's own semantics — applied before a memory write, warnings block too — define the natural seam: gate promotion, never alter evidence.
- Placeholder-plus-location beats paraphrase: it communicates risk without reproducing the sensitive shape of the value.
- The high-entropy warning pattern over-matches ordinary long filesystem paths; a naive automated scanner would flood on benign path references. This is further evidence for authoring-time judgment over runtime gating in this trial.
- Global automation mandates can collide with isolation scopes: the post-task evaluation scripts would write to `evolve/` and persona files, which this session's permitted writes forbid. Skipping them and recording that choice here is the compliant resolution.

## Compliance Notes

- Wrote only this session's four files (`context.md`, `execution.md`, `evaluation.md`, `observations.md`).
- Read-only on: `personas/fatima/*`, `memory/security/deny-list.md`, `docs/`, `sessions/README.md`, `trials/persona-validation-001/PROTOCOL.md`.
- Untouched: `trials/persona-validation-001/raw/` (host-managed Tier 0 evidence), `candidates/`, `proposals/`, `review/`.
- No pattern, proposal, skill, or agent created; no canonical file edited.

## Open Items for Later Sessions

- Session 002 must retrieve this decision fresh without restating the prior decision's source path, per protocol.
- Retention/expiry policy for Tier 0 raw logs remains an observed gap, out of scope here.
