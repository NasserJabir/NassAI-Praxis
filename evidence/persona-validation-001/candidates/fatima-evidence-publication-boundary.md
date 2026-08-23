---
type: candidate-pattern
trial: persona-validation-001
session: "004"
session_type: synthesis
persona: fatima
date: "2026-08-22"
status: candidate
promoted: false
skill_created: false
skill_creation_authorized: false
requires_human_approval: true
confidence: "moderate (~0.65)"
scope: "this trial and this persona only"
---

# Candidate Pattern — Evidence Publication Boundary

> **STATUS: CANDIDATE.** This document synthesizes three observed experiences into one candidate pattern. It is not a learned rule, not promoted to any memory tier, not claimed by any other persona, and not authorized for skill creation. Human approval is required before anything in this file becomes actionable (`review/HUMAN_REVIEW.md`, currently `pending`, `skill_creation_authorized: false`).

## Generalization (candidate statement)

> When evidence crosses a trust boundary — from raw capture into authored records, from internal records into external citations, or from internal artifacts into public release — the crossing passes through a gated, human-authored layer: the underlying evidence stays verbatim and quarantined; sensitive values never cross (only placeholders, pointers, or digests whose precision degrades as trust decreases); every outbound artifact is classified and checked against the secret deny-list before the crossing; and because a crossing is irreversible, all reversibility budget (scan, classification, human sign-off) is spent *before* the boundary, never after.

## Pattern Elements

| # | Element | Rule |
|---|---|---|
| E1 | Verbatim quarantine | Captured evidence is never edited, redacted, reformatted, or partially copied. It is consulted through pointers, not transformed. |
| E2 | Authored bridge | Content crosses a boundary only via an authored, gate-checked layer. No process copies Tier 0 evidence into outbound material. |
| E3 | Value non-duplication | Matched values appear nowhere outside their tier. References degrade with audience trust: pointer-plus-placeholder (internal reviewers) → existence plus location class (external readers) → digest only (public). |
| E4 | Deny-by-default outbound gate | Classification and deny-list checking apply at the moment of crossing. Warning-severity matches reject; rejections report the pattern category only, never the content. |
| E5 | Pre-spent reversibility | Exposure past the boundary cannot be undone (caches, copies, scrapers; or canonical memory writes). Gates, scanning, and explicit human sign-off therefore precede the crossing. |
| E6 | Verifiability without disclosure | Claims stay auditable through structured references — line pointers, claim-to-artifact indexes, file digests — rather than reproduced content. Credibility rests on verifiable structure, not exposure. |

## Supporting Observations — Three Independent Tasks

| Element | Session 001 (transcript preservation) | Session 002 (external case-study citation) | Session 003 (publishable experiment artifact) |
|---|---|---|---|
| E1 | Tier 0 raw JSONL kept verbatim, never edited (R1) | Raw transcripts internal-only and non-quotable by construction (C2) | Raw evidence/logs stay internal in a separate evidence store (Rec. 1) |
| E2 | Tier 1 authored Markdown is the sole promotion path (R3) | Claim-level citation layer authors the public narrative (Decision) | Public reproducibility layer authored from protocol/fixtures, not data (Recs. 1–2) |
| E3 | Placeholder + location pointer, never value or shape paraphrase (R2) | Named placeholder + location class, deny-list style (C3) | Placeholders everywhere; handles resolved at runtime; hashes the only derived form crossing (Recs. 4–5) |
| E4 | Deny-list applied as authoring discipline; warnings block (R4) | Default classification `internal`; unpublished until signed off (C5) | Mandatory classify-and-scan gate, defaults to deny, logs events (Rec. 3) |
| E5 | Promotion human-gated; residual copy-through risk accepted as procedural | "Deleting a public page does not un-publish it" → sign-off classed with irreversible actions (Rationale) | "All reversibility budget is spent *before* the boundary" (Rec. 5) |
| E6 | Reviewers consult Tier 0 via recorded line pointers | Method/scope/outcome claims + internal claim-to-artifact index (C1, C4) | Digests/attestations let externals verify without reading content (Rec. 1) |

Observed-experience statements, quoted from the session records:

- **Session 001** (`sessions/session-001/observations.md`): "Transcript preservation and secret hygiene conflict only when storage and promotion share one path. Separating a verbatim quarantined evidence tier from an authored, deny-list-checked promotion tier resolves the conflict in pure Markdown…"
- **Session 002** (`sessions/session-002/observations.md`): "External citation of validation evidence is an export-control problem, not a writing problem. Because publication is irreversible and externally untrusted, evidence should cross the public boundary only as claim-level statements backed by an internal claim-to-artifact index…"
- **Session 003** (`sessions/session-003/observations.md`): "…treat the act of publishing as a gated boundary crossing — classify and scan everything outbound, replace values with placeholders and file digests, and make reproduction depend on injected fixtures rather than real data."

## Independence Assessment

- Session 002 performed fresh retrieval and explicitly carried no conclusions or source paths from Session 001 (`sessions/session-002/context.md`: "no prior-session transcript was provided… Every rule in `execution.md` is derived from the sources above").
- Session 003 read project-level policy only; no sibling-session conclusion appears among its inputs, and it recorded "No task-specific answer existed in any read file."
- All three sessions were authored under `mutation_policy: proposal_then_review` and none promoted anything; convergence was not coordinated by a shared answer artifact.

Convergence is therefore genuine at the level of conclusions, with two honest qualifications below.

## Divergences and Open Questions

1. **Enforcement mechanism.** Session 001 argues authoring-time judgment over runtime gating (Markdown-only trial; scanner false-positive risk noted in its lessons). Session 003 recommends the gate "must stay in CI/release flow, not in human memory." Resolution attempted here: the pattern defines the gate *procedurally*; whether it is enforced by discipline or by tooling is deployment-context-dependent. Any approved skill must state this explicitly rather than resolve it silently. Left as an open design decision for human review.
2. **Boundary types differ.** Session 001 concerns internal promotion (evidence → canonical memory); Sessions 002–003 concern external publication. The unified abstraction is "one-way crossing of a trust boundary," which subsumes both, but the candidate has only one internal-crossing observation behind E1/E2 for that variant.
3. **Attestation specifics.** Only Session 003 contributes digest-based attestation (E6 public variant), including its own caveat that low-entropy field-level hashes are brute-forceable (files, not fields). Treat the attestation element as the least-replicated part of the pattern.

## Scope and Confidence

- **Scope:** this candidate is Fatima-trial-scoped only. Per the protocol's Knowledge Boundary it must not be claimed by another persona nor silently promoted to semantic/project memory.
- **Confidence:** moderate (~0.65). Three independent task framings converged on the same structural solution, which clears the self-improvement skill's "single unvalidated observation" exclusion. Against that: single persona, single trial, single day, and an adjacent problem family (all three tasks concern evidence handling), so shared house primitives (deny-list, classification, proposal-first mutation) partly explain the agreement.

## Falsification

This generalization fails if any of the following occurs:

1. A fourth evidence-crossing task outside the security/evidence domain produces materially sound handling lacking these elements — indicating family-specific overfit.
2. Applying the pattern to a new case either leaks a value across a boundary or blocks a legitimate low-risk publication that case-specific handling would have allowed — indicating the pattern is too coarse at E4/E5.
3. A documented equivalent-risk crossing where post-hoc redaction sufficed and pre-boundary gates added no protective value — undermining E5.

## Promotion Path (blocked)

- Candidate → proposal: done this session (`proposals/fatima-evidence-publication-skill-proposal.md`).
- Proposal → trial-only skill: **blocked** until a human names this proposal and the exact trial-only skill path in `review/HUMAN_REVIEW.md` (Session 005).
- Anything beyond the trial (canonical persona, Praxis Core, project memory): separately authorized, not requested here.
