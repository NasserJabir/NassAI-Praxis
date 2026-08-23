---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session via human-approved Evolution 001 proposal"
skill_name: "evidence-scope-validation"
category: "verification"
status: "trial"
auto_load: false
estimated_tokens: "1400"
proposal: "../../../trials/evolution-001/proposals/evidence-scope-validation-skill-proposal.md"
human_review: "../../../trials/evolution-001/review/HUMAN_REVIEW.md"
---

# Evidence-Scope Validation Skill

## Description

Bind every claim about executed work to the exact scope of its direct evidence. Prevents single-run results from becoming capability claims, distinct observations from becoming replication claims, and shared-infrastructure results from becoming independence claims.

## Provenance

| Source | Path |
|---|---|
| Approved proposal | [`../../../trials/evolution-001/proposals/evidence-scope-validation-skill-proposal.md`](../../../trials/evolution-001/proposals/evidence-scope-validation-skill-proposal.md) |
| Human review (approved) | [`../../../trials/evolution-001/review/HUMAN_REVIEW.md`](../../../trials/evolution-001/review/HUMAN_REVIEW.md) |
| Candidate pattern | [`../../../trials/evolution-001/candidates/evidence-scope-validation-pattern.md`](../../../trials/evolution-001/candidates/evidence-scope-validation-pattern.md) |

Authorized by `status: approved` and `skill_creation_authorized: true` in the review file. Trial-scoped to the Evolution 001 fixture only.

## When to Activate

- Producing reports, summaries, status labels, evaluations, handoffs, or memory entries that characterize executed work.
- Comparing a current run against any prior run.
- Reporting cross-harness, cross-model, or repeated-run claims.
- The task explicitly requests this capability.

## When NOT to Activate

- Work that never executed: unexecuted work must not be reported as a result at all, not merely hedged.
- A reviewed source has already scoped the claim: link to it instead of restating a divergent scope.
- Hand off when the task crosses into a domain owned by another specialist (for example, general honesty review).

## Procedure

1. **Enumerate evidence first.** Before writing any claim, list what ran, where, on which harness/model/backend, how many runs, and how each run differs from any prior run being compared against.
2. **State claims at precise scope.** Each claim asserts exactly what the enumerated evidence supports — no more, no less.
3. **Disclose shared infrastructure.** Attach explicit qualifiers for anything runs share (for example, one model backend across harnesses is "cross-harness, not cross-model").
4. **Exclude unsupported generalizations.** For each generalizing term — repeatability, replication, portability, independence, capability, improvement, product benefit — either cite the direct evidence supporting it or explicitly exclude it from the claim.
5. **Name next evidence needed.** For each excluded term, state the validation step that would legitimately support it (identical rerun, second harness on a different provider/model, negative control).
6. **Prefer raw execution records.** Verify provenance against session identifiers, runner metadata, and hashed transcripts rather than self-reported or generated artifact metadata, which can be misleading.
7. **Re-read before finalizing.** Re-read the finished report so headline phrasing matches body scope: the title may not assert more than the body disclaims.

## Verification Steps

- [ ] Evidence enumeration exists before the first claim in the report.
- [ ] Every claim's wording matches the enumerated scope exactly.
- [ ] Shared infrastructure is named explicitly where relevant.
- [ ] Every generalizing term is either directly evidenced or explicitly excluded.
- [ ] Each exclusion names the concrete next validation step.
- [ ] Provenance traces to raw records or hashes, not generated metadata alone.
- [ ] Headline and summary re-read confirms no overclaim relative to body disclaimers.

## Counterexamples

This skill does not apply, or is violated, when:

- **Hedging theater:** qualifiers decorate the body while the headline still overclaims. Scope language must bind the headline.
- **Understating supported results:** if identical replication or multi-backend comparison actually ran, state the stronger claim fully; timid reporting of genuinely replicated results misapplies this skill.
- **Truth substitution:** this skill governs claim strength relative to evidence; it never substitutes for measuring honestly and cannot rehabilitate fabricated data.
- **No executed work:** an observation without execution evidence has nothing to scope and must not be reported as a result.

## Non-Goals

- Not a general honesty or ethics policy; governs claim-to-evidence scope only.
- Defines no new status vocabularies; references existing ones such as `observed` / `not_run`.
- Does not replace the verification skill or existing workflows; composes with them (run checks first, then scope the claims).
- Applies only within this trial fixture's evolution workflow; see Boundaries.

## Risks

1. **Hedging theater** — mitigated by the mandatory headline/body re-read step.
2. **Over-application** — mitigated by counterexample guidance requiring supported claims to be stated fully.
3. **Context cost** — kept compact, consistent with sibling skills (~1,400 estimated tokens).
4. **Overfitting** — pattern derives from three purpose-built demonstrations sharing one design lineage and one model backend; treat first real-world uses as additional validation, recorded as experiences through the normal trial protocol.

## Boundaries

This skill **does not authorize** automatic promotion into Praxis Core, autonomous skill creation or mutation anywhere else, memory writes outside project policy, or changes to any approval-gate or freeze boundaries. All promotion remains blocked pending explicit human review per the Evolution 001 protocol. This file is trial-only; it confers no standing beyond the isolated fixture.
