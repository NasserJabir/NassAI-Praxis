---
type: skill-proposal
trial: persona-validation-001
session: "004"
session_type: synthesis
persona: fatima
date: "2026-08-22"
status: proposed-candidate
approved: false
skill_created: false
skill_creation_authorized: false
requires_human_approval: true
candidate_pattern: trials/persona-validation-001/candidates/fatima-evidence-publication-boundary.md
proposed_skill_path: "trials/persona-validation-001/skills/evidence-publication-boundary/SKILL.md"
---

# Proposal — Trial-Only Persona Skill: `evidence-publication-boundary`

> **STATUS: PROPOSAL ONLY. Nothing has been created.** Creating the skill described below requires explicit human approval naming this proposal and the exact trial-only path above (`review/HUMAN_REVIEW.md`, currently `pending`, `skill_creation_authorized: false`). Per protocol Session 005, only after that approval may the file be written — and only at the trial-local path.

## Why a Trial-Only Path

The protocol's Knowledge Boundary states no canonical Persona file may be edited in any session, and the Human Gate section keeps approved trial skills outside the original Praxis Core unless separately authorized. The proposed path lives entirely inside `trials/persona-validation-001/`, associated with Fatima but touching no canonical tree.

## Provenance

| Source | Contribution |
|---|---|
| `candidates/fatima-evidence-publication-boundary.md` (this trial) | Generalized elements E1–E6 synthesized from three observed experiences |
| `sessions/session-001/{execution,observations}.md` | Tiered evidence model; rules R1–R4 |
| `sessions/session-002/{execution,observations}.md` | Export-control framing; rules C1–C5 |
| `sessions/session-003/{execution,observations}.md` | Publication-as-write-gate; Recommendations 1–5 |
| Project policy cited by those sessions (`memory/security/deny-list.md`, `memory/security/scan-procedure.md`, `docs/SECURITY.md`, `praxis.config.md`) | House primitives the pattern reuses; not modified by this proposal |

## Draft Skill Content (for approval review — not yet created)

```markdown
---
version: "0.1.0-draft"
created: "<set at creation time>"
author: "opencode (fatima persona) — human-approved trial skill"
skill_name: "evidence-publication-boundary"
category: "persona-security"
status: "trial-only"
auto_load: false
scope: "trials/persona-validation-001 only"
---

# Evidence Publication Boundary Skill

## Description

Treat every crossing of a trust boundary by evidence — promotion into canonical
records, external citation, or public release — as a gated, one-way event:
evidence stays verbatim and quarantined, values never cross, everything outbound
is classified and deny-list-checked first, and sign-off happens before the
crossing because the crossing cannot be undone.

## When to Activate

- Material derived from captured or audit evidence will be promoted, cited
  externally, or published.
- An artifact mixes authored content with host-captured or sensitive-source
  lineage.
- A release decision would be irreversible once made public.

## When NOT to Activate

- Content is already classified public with no captured-evidence lineage.
- The task is a single unvalidated observation with no repeated pattern behind it.
- Runtime enforcement is required but unavailable — apply the procedure manually
  and state the limitation instead of claiming technical prevention.
- The task needs a different specialist or independent review; hand off.

## Steps

1. Identify the trust boundary and which side every reader sits on
   (internal reviewer, external stakeholder, public).
2. Confirm captured evidence remains verbatim and quarantined; plan pointers,
   indexes, or digests — never copies.
3. Author the outbound artifact as a separate layer: method, scope, and outcome
   claims; reproduction from injected fixtures, never internal values.
4. Apply placeholder discipline matched to audience trust: placeholder +
   location pointer internally; existence + location class externally; file
   digests only, publicly.
5. Run the outbound gate per file: assign classification; check against the
   secret deny-list; any match — including warning severity — rejects the file,
   reporting the pattern category only; log the event without copying content.
6. Obtain explicit human sign-off before the crossing. Spend all reversibility
   (scanning, classification, review) before the boundary, never after.

## Success Criteria

- No matched value exists outside its originating tier.
- Captured evidence is byte-identical to before the task.
- The gate result is logged for every outbound file before release.
- Sign-off is recorded before any irreversible crossing.
- Every external factual claim traces to at least one internal artifact via a
  pointer, index entry, or digest.

## Examples

### Good

A case-study summary states method, scope, and outcome; cites a credential-shaped
token as "placeholder near line 12 of an internal record"; publishes digests of
the internal evidence set; logs the gate pass; ships only after recorded sign-off.

### Bad

Quoting "just the example output" from a raw transcript; describing a secret's
shape precisely enough to reconstruct it; releasing first and redacting after
discovery; skipping classification because "it's obviously fine".

## Boundaries

- Procedural only. Whether the gate runs as human discipline or CI/release
  tooling is environment-dependent and must be stated, not assumed.
- Does not authorize automatic promotion to memory or canonical files.
- Does not replace independent security review for high-blast-radius releases.
- Evidence retention/expiry is out of scope (recorded project-level gap).
```

## What Approval Would Authorize (exactly)

| Authorized by Session 005 approval | Not authorized |
|---|---|
| Creating `trials/persona-validation-001/skills/evidence-publication-boundary/SKILL.md` verbatim as drafted above (with timestamps filled) | Editing `personas/fatima/*` or any canonical tree |
| Recording the approval in `review/HUMAN_REVIEW.md` | Promoting the candidate pattern to `memory/` or `evolve/` |
| Read-only reuse of the trial skill in Session 006 | Claiming the pattern for any other persona |

## Request

Human review is requested against `review/HUMAN_REVIEW.md`. Until a reviewer sets that file to `approved` with `skill_creation_authorized: true`, naming this proposal and the exact path, no skill exists and none may be created.
