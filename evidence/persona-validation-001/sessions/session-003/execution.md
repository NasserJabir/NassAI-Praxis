---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "opencode (fatima persona)"
classification: "internal"
type: "session-execution"
status: "observed"
trial: "persona-validation-001"
session: "003"
---

# Session 003 — Execution

## Approach

Brainstorm → plan → assess → record. No implementation code exists in a Markdown-only trial, so TDD reduces to: define acceptance checks first (below), produce the assessment, then verify against the checks.

## Acceptance Checks (defined before writing)

1. The assessment separates the publishable artifact from internal evidence at an explicit trust boundary.
2. Reproducibility is achieved without embedding or copying any sensitive value.
3. A pre-publication gate prevents sensitive values from crossing the boundary, rather than retracting after exposure.
4. Trade-offs and residual risks are stated explicitly.

## Assessment

### Threat Model (first)

- **Attacker/control question:** what can an external reader of the published artifact control? Nothing at run time inside the trust boundary; everything about how they re-run the experiment outside it.
- **Trust boundary:** the moment content leaves `internal` classification. Everything before it is auditable internally; everything after it is effectively irrevocable.
- **Primary risks:** (a) duplication of a sensitive value into the published artifact; (b) raw audit evidence leaking under the guise of "example output"; (c) an artifact that reproduces only because it secretly depends on internal data paths.

### Recommendation 1 — Two-layer artifact by classification

Publish exactly two things:

1. **The reproducibility layer (public):** protocol, methodology, input schemas, environment manifest (pinned tool versions, commit or snapshot identifiers, deterministic seeds), redacted placeholder fixtures, and expected-result shapes.
2. **The attestation layer (public digests of internal evidence):** cryptographic hashes over the internal evidence files plus a signed manifest.

Raw evidence, logs, and audit trails stay internal in a separate evidence store. External parties can later confirm that a given authorized evidence set matches the published digests without ever seeing the content.

### Recommendation 2 — Reproduce from fixtures, not from production data

A third party reproduces the experiment by injecting their own fixture values into the same deterministic pipeline. Equivalence is defined structurally (same steps, same result shape, same invariants), not bit-for-bit on real data. Any pipeline step that genuinely requires the internal values is, by definition, not publishable as-is and must be refactored into a parameterized step with an injected dependency.

### Recommendation 3 — Treat publication as another write gate

Reuse the house pattern already proven for memory writes: collect candidate artifact → scan against deny-list patterns → classify each file (`public` / `internal` / `sensitive`) → reject on match with only the pattern category reported → log the event without copying matched content. Make this gate a mandatory, logged step in the release procedure, defaulting to deny. Publication happens only after the gate passes.

### Recommendation 4 — Single source of truth; reference, never copy

Internal documents refer to sensitive values by handle or path (resolved only at run time from environment or a secret manager). Published material uses visibly marked placeholders. No value is duplicated anywhere; hashes are the only derived form that crosses the boundary.

### Recommendation 5 — Audit the publication itself

Log every export: timestamp, artifact digest, gate result, actor identity. Publish credentials are least-privilege and separate from internal write credentials. Because exposure is irreversible, all reversibility budget is spent *before* the boundary (gate + review), matching the project's proposal-first mutation policy.

### Trade-offs

| Choice | Gain | Cost |
|---|---|---|
| Fixture-based reproduction | Zero sensitive disclosure | Weaker claim than "reproduced on production data"; must define structural equivalence carefully |
| Digest-only attestation | Verifiability without disclosure | Internal store must be immutable/retained for the digest to mean anything |
| Mandatory pre-publish gate | Prevents leaks instead of reacting | Slower releases; false positives need a review path |

### Residual Risks

- Hashes of low-entropy values can be brute-forced; attestations must cover files, not individual small fields.
- Placeholder discipline decays over time; the gate scan is the compensating control and must stay in CI/release flow, not in human memory.
- If equivalence criteria are vague, "reproducible" becomes unfalsifiable; the published protocol must state them precisely.

## Verification Against Acceptance Checks

1. Trust boundary explicit — satisfied (Recommendation 1, threat model).
2. Reproducibility without value duplication — satisfied (Recommendations 2, 4).
3. Pre-publication prevention gate — satisfied (Recommendations 3, 5).
4. Trade-offs and risks visible — satisfied (tables above).

## Boundary Compliance

- Writes limited to `trials/persona-validation-001/sessions/session-003/`.
- One observed experience recorded in `observations.md`; no candidate pattern, proposal, skill, or promotion created.
- No canonical persona, memory, skills, evolve, candidates, proposals, review, or raw-evidence file touched.
