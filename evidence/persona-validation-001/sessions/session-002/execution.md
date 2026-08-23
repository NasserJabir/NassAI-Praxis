---
type: trial-session-execution
trial: persona-validation-001
session: 002
date: "2026-08-22T00:00:00Z"
---

# Session 002 — Execution

## Assessment Question

How should a team cite validation evidence in an external-facing case-study summary when raw transcripts may contain sensitive values?

## Findings

1. **The trust boundary inverts at publication.** Internal readers are vetted and access-controlled; external readers are unknown and unvetted. Controls that suffice internally (quarantine plus pointer-based review) do not transfer, because once text is public it cannot be recalled — caches, copies, and scrapers make disclosure permanent.
2. **External publication is the widest possible persistence.** Applying the persona question "what must never be persisted?" to an external artifact yields the strictest bar in the system: any sensitive value published externally is persisted beyond the team's control indefinitely.
3. **Project policy already supplies the needed primitives** (fresh retrieval):
   - `memory/security/deny-list.md` matches secrets case-insensitively before a memory write; even warning-severity matches are blocked. Its own examples model the safe citation style: named placeholders (`sk-proj-<redacted-placeholder>`), never values.
   - `docs/SECURITY.md` requires clean content to be classified `public`, `internal`, or `sensitive`, with every allowed write logged.
   - `praxis.config.md` sets default classification to `internal` — unpublished by default — and defines retention/expiry as a managed lifecycle.
4. **Credibility does not require exposure.** A validation claim is credible when its method, scope, and outcome are stated and auditable — not when raw evidence is reproduced.

## Decision (one, scoped)

**Cite external evidence through a claim-level citation layer: describe method, scope, and outcome; quote only artifacts authored under deny-list-checked discipline; reference sensitive values as placeholders with location class; keep raw evidence internal behind a traceability index; treat any external release as irreversible and human-gated.**

Rules that follow:

- C1: External summaries state claims at method/scope/outcome level (what was tested, when, on what class of environment, with what result). Verbatim fragments of captured transcripts are never quoted externally.
- C2: Only content authored under the deny-list-checked discipline may be quoted externally. Host-captured raw logs are internal-only and non-quotable by construction.
- C3: Where the existence of a sensitive value is itself relevant to the narrative, cite it as a named placeholder plus location class ("a credential-shaped token appears once in the captured session"), following the deny-list's own redaction style — never the value, never a close paraphrase of its shape.
- C4: Every external factual claim maps to at least one internal artifact through an internal traceability index, so reviewers can audit each public sentence back to its evidence. The index stays internal.
- C5: External release is an irreversible action requiring explicit human sign-off, consistent with the project's proposal-then-review mutation policy and its `internal` default classification. Absent sign-off, material remains internal.

## Rationale

- **Export-control framing:** the decision treats external citation as controlling the egress of evidence, not as a writing-style choice. Least privilege applied to information means external readers receive the minimum needed for credibility.
- **Auditability without exposure (Fatima lens):** "What evidence proves this is safe?" is answered twice — externally by method/scope/outcome statements, internally by C4's claim-to-artifact index. Credibility rests on verifiable structure, not on leaked specifics.
- **Irreversibility drives the gate:** deleting a public page does not un-publish it. This places external release in the same class as canonical mutations: reversible internally, human-gated at the boundary.
- **Policy fit:** uses only existing mechanisms — classification levels, deny-list authoring discipline, placeholder convention, human gate. No scanner, hook, or approval workflow tooling is introduced, honoring the Markdown-only architectural boundary and YAGNI.
- **Generalized placeholder discipline:** placeholder-plus-location works for both audiences — internal reviewers get precise pointers; external readers get existence-plus-risk framing. One rule serves both trust levels at different precisions.

## Boundaries

In scope: citation rules for external-facing summaries of validation work; this session's four files.

Out of scope (explicitly not done): editing any existing draft under `docs/`; opening or altering anything under `trials/persona-validation-001/raw/`; changing classification or retention policy in `praxis.config.md` or `docs/SECURITY.md`; building a traceability-index tool (the index is defined as a documentation artifact); creating any pattern, proposal, or skill (later-session concerns under the protocol's human gate); editing `personas/`, `memory/`, `skills/`, `evolve/`, `candidates/`, `proposals/`, or `review/`.
