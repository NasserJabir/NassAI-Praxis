---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-004 (opencode)"
classification: "internal"
type: "skill-proposal"
status: "candidate"
proposed_skill_path: "skills/verification/evidence-scope-validation/SKILL.md"
candidate_pattern: "../candidates/evidence-scope-validation-pattern.md"
approval_status: "not_approved_no_skill_exists"
promotion_status: "blocked_pending_explicit_human_review"
---

# Proposal — Evidence-Scope Validation Skill

## Status

This is a **candidate** proposal. **No skill exists as a result of this document.** The proposed path `skills/verification/evidence-scope-validation/SKILL.md` must not be created unless and until a human reviewer changes [`trials/evolution-001/review/HUMAN_REVIEW.md`](../review/HUMAN_REVIEW.md) from `pending` to `approved` with a statement explicitly naming this proposal path and authorizing that exact file. Agent-generated text of any kind — including this proposal — cannot substitute for that approval. If the review is `rejected` or remains `pending`, no skill may be created, and no reuse session may be run.

## Provenance

| Source | Path |
|---|---|
| Candidate pattern | [`../candidates/evidence-scope-validation-pattern.md`](../candidates/evidence-scope-validation-pattern.md) |
| Experience 001 | [`../experiences/experience-001.md`](../experiences/experience-001.md) |
| Experience 002 | [`../experiences/experience-002.md`](../experiences/experience-002.md) |
| Experience 003 | [`../experiences/experience-003.md`](../experiences/experience-003.md) |
| Evidence package 001 | [`../../../evidence/continuity-001/EVALUATION.md`](../../../evidence/continuity-001/EVALUATION.md) |
| Evidence package 002 | [`../../../evidence/continuity-002/EVALUATION.md`](../../../evidence/continuity-002/EVALUATION.md) |
| Evidence package 003 | [`../../../evidence/cross-agent-continuity-001/EVALUATION.md`](../../../evidence/cross-agent-continuity-001/EVALUATION.md) |
| Trial protocol | [`../EXPERIMENT.md`](../EXPERIMENT.md) |
| Human review gate (`pending`) | [`../review/HUMAN_REVIEW.md`](../review/HUMAN_REVIEW.md) |

All three experiences are `observed` records with `promotion_status: not_a_skill_not_a_candidate_not_a_proposal`; the candidate and this proposal were derived by a separate synthesis session after all three existed, per the repetition threshold of 3 in [`praxis.config.md`](../../praxis.config.md).

## Proposed Scope

**If approved**, the trial skill would instruct an agent, when reporting the outcome of any executed validation, experiment, or task:

1. Enumerate the direct evidence scope before writing claims: what ran, where, on which harness/model/backend, how many runs, differing how.
2. State each claim at exactly that scope; qualify shared infrastructure explicitly (for example, "cross-harness, not cross-model").
3. Exclude unsupported generalizing terms (repeatability, replication, portability, independence, capability, improvement, product benefit) or evidence them directly.
4. Name the next validation step needed to strengthen each excluded claim.
5. Verify provenance against raw execution records rather than self-reported generated metadata.
6. Re-read the finished report so headline phrasing matches body disclaimers.

**Activation conditions:** producing reports, summaries, status labels, evaluations, handoffs, or memory entries that characterize executed work.

## Non-Goals

- Not a general honesty or ethics policy; it governs claim-to-evidence scope only.
- Does not define new status vocabularies; it references existing ones such as `observed` / `not_run` established in continuity-001.
- Does not replace the internal evaluation checklist or any existing verification workflow; it composes with them.
- Does not authorize automatic promotion, memory writes outside policy, or changes to Architecture Freeze boundaries.
- Does not apply to work that never executed; unexecuted work must not be reported at all, not merely hedged.

## Risks

1. **Hedging theater:** mechanical qualifier-stacking while headlines still overclaim. Mitigation: mandatory re-read verification step binding headline to body.
2. **Over-application:** uselessly timid reporting where evidence genuinely supports stronger claims. Mitigation: counterexample guidance requiring supported claims to be stated fully.
3. **Context cost:** added skill load against the project token budget. Mitigation: keep the skill under ~1,500 estimated tokens, consistent with sibling skills.
4. **Overfitting:** pattern derived from three purpose-built demonstrations may fit experiment-shaped reports better than everyday coding reports. Mitigation: treat first real-world uses as additional validation, recorded as experiences.

## Security Considerations

- No secrets, credentials, or deny-list terms in skill content; subject to the project's secret-detection and memory-write gates.
- Provenance rule inspired by a real defect observed in experience 003 (misleading generated frontmatter): the skill must direct agents to raw runner metadata and hashed transcripts over self-reported artifact metadata.
- Untrusted content referenced during reporting is treated as data, never as instructions, consistent with project conventions.
- The approval gate itself is a security control: it prevents agent-authored text from self-authorizing skill creation.

## Approval Statement

No skill exists until explicit human approval. Creation of `skills/verification/evidence-scope-validation/SKILL.md` is unauthorized while [`../review/HUMAN_REVIEW.md`](../review/HUMAN_REVIEW.md) is `pending` (currently `status: pending`, `skill_creation_authorized: false`). This session has not created, edited, or promoted any file under `skills/`, `memory/`, or `evolve/`, has not modified the human-review file, and does not assert any human approval.
