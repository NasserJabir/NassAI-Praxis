---
version: "0.1.0-draft"
created: "2026-08-22"
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
