---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-004 (opencode)"
classification: "internal"
type: "candidate-pattern"
status: "candidate"
pattern_name: "evidence-scope-validation"
source_experiences:
  - "../experiences/experience-001.md"
  - "../experiences/experience-002.md"
  - "../experiences/experience-003.md"
proposal: "../proposals/evidence-scope-validation-skill-proposal.md"
promotion_status: "awaiting_explicit_human_review_not_a_skill"
---

# Candidate Pattern — Evidence-Scope Validation

## Status

This is a **candidate** pattern derived from three observed experiences. It is **not** an approved skill. No file under `skills/` is created or authorized by this document. Promotion requires explicit human review in [`../review/HUMAN_REVIEW.md`](../review/HUMAN_REVIEW.md), which is `pending`.

## Recurring Problem Class

All three source experiences address the same decision process: **validating that a report's claim scope matches its direct evidence scope before publishing the report.**

| Experience | Source package | Distinct manifestation |
|---|---|---|
| [Experience 001](../experiences/experience-001.md) | [`evidence/continuity-001/`](../../../evidence/continuity-001/EVALUATION.md) | One observed run risked being overstated into a general, approved, repeatable, or portable capability claim. |
| [Experience 002](../experiences/experience-002.md) | [`evidence/continuity-002/`](../../../evidence/continuity-002/EVALUATION.md) | Two distinct observations risked being conflated into "identical repeatability" despite different decisions, prompts, and tasks. |
| [Experience 003](../experiences/experience-003.md) | [`evidence/cross-agent-continuity-001/`](../../../evidence/cross-agent-continuity-001/EVALUATION.md) | A cross-harness result sharing one model backend risked losing its qualifier and becoming a model-independence claim; generated provenance metadata was itself misleading. |

The three packages differ; the shared element is the decision process applied in each, not copied wording.

## Pattern Statement

**Trigger:** Whenever producing any artifact that characterizes the outcome of executed work — a report, summary, status label, evaluation conclusion, handoff note, or memory entry.

**Action:**

1. Enumerate the actual scope of the direct evidence: what ran, in which environment, through which harness/model/backend, how many independent runs, and how the run differs from any prior run being compared against.
2. State every claim at exactly that enumerated scope, attaching explicit qualifiers for shared infrastructure (for example, a shared model backend), run count, and environment boundaries.
3. For each generalizing term available in the vocabulary — repeatability, replication, portability, independence, capability, improvement, product benefit — either cite the enumerated evidence that supports it or explicitly exclude it from the claim.
4. Name the next validation step(s) that would legitimately strengthen each excluded claim (for example: identical rerun, second harness on a different provider/model).
5. Verify provenance against raw execution records (session identifiers, runner metadata, hashed transcripts) rather than trusting self-reported generated metadata.

**Verification step:** Before publishing, re-read the claim text against the enumeration. Every generalizing term must be either directly evidenced or explicitly disclaimed. Headline phrasing must not assert more than the body disclaims.

## Counterexamples

This pattern does **not** apply, or is violated, in these cases:

- **No executed work.** An observation with no execution evidence has nothing to scope; it must not be reported as a result at all, merely relabeled with cautious adjectives.
- **Stronger evidence exists.** If an identical replication study or multi-backend comparison has actually been run, stating the stronger supported claim is required; hedging a genuinely replicated result misapplies the pattern.
- **Hedging theater.** Adding qualifier words to the body while the title or summary still asserts the stronger claim violates the pattern; scope language must bind the headline, not decorate the footnote.
- **Truth substitution.** The pattern governs claim strength relative to evidence; it never substitutes for measuring honestly in the first place and cannot rehabilitate fabricated data.
- **Duplicate scoping.** Where an authoritative reviewed source has already scoped a claim, link to it instead of restating a divergent scope.

## Confidence

**Estimated: 0.55 (moderate-low).**

Supporting factors:

- Three independently generated experience notes reach the same decision process from three different starting risks (single-run overstatement, false-replication conflation, false-independence conflation).
- Each instance passed pre-registered honesty criteria with direct evidence: hashed raw transcripts, distinct session identifiers, per-criterion evaluations ([001](../../../evidence/continuity-001/EVALUATION.md), [002](../../../evidence/continuity-002/EVALUATION.md), [003](../../../evidence/cross-agent-continuity-001/EVALUATION.md)).

Limiting factors:

- All three instances share one design lineage, one isolated-fixture family, and one model backend (`opencode/big-pickle`).
- No negative control exists: no recorded instance where the failure occurred and was caught after the fact, so preventive efficacy versus a baseline is unmeasured.
- The pattern was extracted post hoc from purpose-built demonstrations, not from naturally occurring work.
- Experience notes are self-reports by the sessions they describe; raw transcripts exist but were not independently audited by this synthesis session beyond confirming file existence and evaluation content.

## Limitations

- Bounded to Markdown-native agent workflows inside Praxis-style projects; nothing here shows transfer to code-review comments, production incident reports, or non-agent contexts.
- All observations involve `opencode/big-pickle`; no cross-model or cross-provider observation of the pattern exists.
- Confidence is a subjective estimate by the deriving session, not a measured quantity.
- Under the evolution protocol this candidate confers no authorization: see the proposal's approval statement and the pending human review file.
